
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export const MapSection = () => {
  return (
    <Card className="mb-16 shadow-lg border-none">
      <CardHeader>
        <CardTitle className="text-2xl text-secondary">Find Us</CardTitle>
      </CardHeader>
      <CardContent className="p-0">
        <div className="h-96 bg-gray-200 overflow-hidden">
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d254021.41795561428!2d-0.2647673491155287!3d5.594692998901702!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xfdf9084b2b7a773%3A0xbed14ed8650e2dd3!2sAccra%2C%20Ghana!5e0!3m2!1sen!2sus!4v1652389681332!5m2!1sen!2sus" 
            width="100%" 
            height="100%" 
            style={{ border: 0 }} 
            allowFullScreen 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"
            title="Lumitage Location"
          />
        </div>
      </CardContent>
    </Card>
  );
};
