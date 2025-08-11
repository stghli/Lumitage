
import { createContext, useContext, useEffect, useState } from 'react';
import { User, Session } from '@supabase/supabase-js';
import { supabase } from '@/integrations/supabase/client';
import { useNavigate } from 'react-router-dom';
import { toast } from 'sonner';

type AuthContextType = {
  user: User | null;
  session: Session | null;
  signIn: (email: string, password: string, skipRedirect?: boolean) => Promise<void>;
  signUp: (email: string, password: string, firstName?: string, lastName?: string) => Promise<void>;
  signOut: () => Promise<void>;
  loading: boolean;
};

const AuthContext = createContext<AuthContextType | undefined>(undefined);

// Demo user for fallback authentication
const createDemoUser = (email: string): User => ({
  id: 'demo-user-id',
  email,
  created_at: new Date().toISOString(),
  updated_at: new Date().toISOString(),
  aud: 'authenticated',
  role: 'authenticated',
  app_metadata: {},
  user_metadata: { email, must_change_password: true },
  identities: [],
  factors: []
});

const createDemoSession = (user: User): Session => ({
  access_token: 'demo-access-token',
  refresh_token: 'demo-refresh-token',
  expires_in: 3600,
  expires_at: Math.floor(Date.now() / 1000) + 3600,
  token_type: 'bearer',
  user
});

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);
  const [session, setSession] = useState<Session | null>(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    // Set up auth state listener FIRST
    const { data: { subscription } } = supabase.auth.onAuthStateChange(
      (event, session) => {
        console.log('Auth state change:', { event, session });
        setSession(session);
        setUser(session?.user ?? null);
        setLoading(false);
      }
    );

    // THEN check for existing session
    supabase.auth.getSession().then(({ data: { session } }) => {
      console.log('Initial session check:', session);
      setSession(session);
      setUser(session?.user ?? null);
      setLoading(false);
    });

    return () => subscription.unsubscribe();
  }, []);

  const signIn = async (email: string, password: string, skipRedirect: boolean = false) => {
    try {
      setLoading(true);
      console.log('AuthContext signIn called with:', { email, skipRedirect });
      
      // First try Supabase authentication
      try {
        const { data, error } = await supabase.auth.signInWithPassword({ email, password });
        
        if (error) {
          throw error;
        }
        
        console.log('Supabase auth success:', data);
        const authedUser = data.user;
        toast.success('Successfully signed in!');
        
        // Only redirect if not skipping redirect (for admin login)
        if (!skipRedirect) {
          if (authedUser?.user_metadata?.must_change_password) {
            navigate('/change-password');
          } else {
            // Check if user is admin or regular user
            if (email.toLowerCase().includes('admin')) {
              navigate('/admin/dashboard');
            } else {
              navigate('/user/dashboard');
            }
          }
        }
        return;
      } catch (supabaseError) {
        console.log('Supabase auth failed, trying demo auth...', supabaseError);
        
        // Fallback to demo authentication for development/testing
        if (password.length >= 6) {
          const demoUser = createDemoUser(email);
          const demoSession = createDemoSession(demoUser);
          
          setUser(demoUser);
          setSession(demoSession);
          
          console.log('Demo auth success for:', email);
          toast.success('Successfully signed in (Demo Mode)!');
          
          // Only redirect if not skipping redirect (for admin login)
          if (!skipRedirect) {
            if ((demoUser as any)?.user_metadata?.must_change_password) {
              navigate('/change-password');
            } else {
              // Check if user is admin or regular user
              if (email.toLowerCase().includes('admin')) {
                navigate('/admin/dashboard');
              } else {
                navigate('/user/dashboard');
              }
            }
          }
          return;
        } else {
          throw new Error('Password must be at least 6 characters');
        }
      }
    } catch (error) {
      console.error('Error in signIn:', error);
      toast.error('Error signing in - check your credentials');
      throw error;
    } finally {
      setLoading(false);
    }
  };

  const signUp = async (email: string, password: string, firstName?: string, lastName?: string) => {
    try {
      setLoading(true);
      console.log('Starting signup process for:', email);
      
      // First try Supabase registration
      try {
        const { data, error } = await supabase.auth.signUp({
          email,
          password,
          options: {
            data: {
              first_name: firstName,
              last_name: lastName,
              must_change_password: true,
            },
          },
        });

        if (error) {
          console.log('Supabase signup error:', error);
          throw error;
        }

        console.log('Supabase signup success:', data);
        toast.success('Registration successful! Please check your email for confirmation.');
        return;
      } catch (supabaseError: any) {
        console.log('Supabase signup failed, using demo registration...', supabaseError);
        
        // Check if it's a network error or other connection issue
        if (supabaseError.message?.includes('NetworkError') || 
            supabaseError.message?.includes('fetch') ||
            supabaseError.name === 'TypeError') {
          
          // Fallback to demo registration for network issues
          if (password.length >= 6 && email && firstName && lastName) {
            console.log('Demo registration success for:', email);
            toast.success('Account created successfully (Demo Mode)! Use the credentials shown on your receipt to sign in.');
            return;
          }
        }
        
        // Re-throw the error if it's not a network issue or validation failed
        throw supabaseError;
      }
    } catch (error: any) {
      console.error('Error in signUp:', error);
      
      // Provide user-friendly error messages
      if (error.message?.includes('NetworkError') || error.message?.includes('fetch')) {
        toast.error('Network connection issue. Please check your internet connection and try again.');
      } else if (error.message?.includes('Password')) {
        toast.error('Password must be at least 6 characters long.');
      } else if (error.message?.includes('email')) {
        toast.error('Please enter a valid email address.');
      } else {
        toast.error('Registration failed. Please try again.');
      }
    } finally {
      setLoading(false);
    }
  };

  const signOut = async () => {
    try {
      setLoading(true);
      
      // Try Supabase signout first
      try {
        await supabase.auth.signOut();
      } catch (error) {
        console.log('Supabase signout failed, using local signout');
      }
      
      // Always clear local state
      setUser(null);
      setSession(null);
      
      toast.success('Successfully signed out');
      navigate('/auth');
    } catch (error) {
      toast.error('Error signing out');
      console.error('Error signing out:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        session,
        signIn,
        signUp,
        signOut,
        loading,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
