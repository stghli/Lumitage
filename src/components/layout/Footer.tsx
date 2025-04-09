
import { Link } from 'react-router-dom';
import { Facebook, Instagram, Twitter } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="bg-secondary text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <img 
              src="/lovable-uploads/b77a2ff3-0e82-4894-99a3-6a4c4b20641d.png" 
              alt="Lumitage Logo" 
              className="h-12 bg-white p-1 rounded"
            />
            <p className="text-sm mt-4">
              Premium handcrafted beads and sandals made in Ghana with authentic materials and traditional techniques.
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Shop</h3>
            <ul className="space-y-2">
              <li><Link to="/products/beads" className="text-sm hover:text-primary">Beads</Link></li>
              <li><Link to="/products/sandals" className="text-sm hover:text-primary">Sandals</Link></li>
              <li><Link to="/products/new" className="text-sm hover:text-primary">New Arrivals</Link></li>
              <li><Link to="/products/sale" className="text-sm hover:text-primary">Sale</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Company</h3>
            <ul className="space-y-2">
              <li><Link to="/about" className="text-sm hover:text-primary">About Us</Link></li>
              <li><Link to="/contact" className="text-sm hover:text-primary">Contact</Link></li>
              <li><Link to="/shipping" className="text-sm hover:text-primary">Shipping</Link></li>
              <li><Link to="/returns" className="text-sm hover:text-primary">Returns</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Connect</h3>
            <div className="flex space-x-4 mb-4">
              <a href="#" className="hover:text-primary">
                <Facebook size={20} />
              </a>
              <a href="#" className="hover:text-primary">
                <Instagram size={20} />
              </a>
              <a href="#" className="hover:text-primary">
                <Twitter size={20} />
              </a>
            </div>
            <p className="text-sm">Sign up for our newsletter</p>
            <div className="mt-2 flex">
              <input
                type="email"
                placeholder="Your email"
                className="bg-white/10 text-white px-3 py-2 text-sm w-full rounded-l-md focus:outline-none"
              />
              <button className="bg-primary text-white px-3 py-2 text-sm rounded-r-md hover:bg-red-700">
                Subscribe
              </button>
            </div>
          </div>
        </div>
        
        <div className="border-t border-white/10 mt-8 pt-8 text-center text-sm">
          <p>&copy; {new Date().getFullYear()} Lumitage. All rights reserved. Made in Ghana.</p>
        </div>
      </div>
    </footer>
  );
};
