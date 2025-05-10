
import { Card, CardContent } from '@/components/ui/card';

export const FaqSection = () => {
  return (
    <div className="mb-16">
      <h2 className="text-2xl font-bold mb-8 text-secondary text-center">Frequently Asked Questions</h2>
      
      <div className="grid md:grid-cols-2 gap-6">
        <Card className="border-none shadow-md hover:shadow-lg transition-shadow">
          <CardContent className="p-6">
            <h3 className="text-lg font-semibold mb-3 text-secondary">How long does shipping take?</h3>
            <p className="text-gray-700">
              Shipping times vary depending on your location. Domestic orders typically arrive within 3-5 business days, while international orders may take 10-14 business days.
            </p>
          </CardContent>
        </Card>
        
        <Card className="border-none shadow-md hover:shadow-lg transition-shadow">
          <CardContent className="p-6">
            <h3 className="text-lg font-semibold mb-3 text-secondary">Do you offer custom designs?</h3>
            <p className="text-gray-700">
              Yes! We offer custom design services for both beads and sandals. Please contact us directly with your requirements for a quote.
            </p>
          </CardContent>
        </Card>
        
        <Card className="border-none shadow-md hover:shadow-lg transition-shadow">
          <CardContent className="p-6">
            <h3 className="text-lg font-semibold mb-3 text-secondary">What is your return policy?</h3>
            <p className="text-gray-700">
              We accept returns within 30 days of delivery. Items must be unworn, undamaged, and in their original packaging.
            </p>
          </CardContent>
        </Card>
        
        <Card className="border-none shadow-md hover:shadow-lg transition-shadow">
          <CardContent className="p-6">
            <h3 className="text-lg font-semibold mb-3 text-secondary">How do I care for my beads/sandals?</h3>
            <p className="text-gray-700">
              For beads, avoid exposing them to harsh chemicals or excessive moisture. For sandals, clean with a damp cloth and allow to air dry. Apply leather conditioner occasionally to maintain softness.
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};
