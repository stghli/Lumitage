
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Heart, ShoppingCart, X } from "lucide-react";

const Wishlist = () => {
  const wishlistItems = [
    {
      id: 1,
      name: "Royal Kente Pattern Beads",
      price: "$95.00",
      image: "/placeholder.svg",
      inStock: true
    },
    {
      id: 2,
      name: "Handcrafted Leather Sandals",
      price: "$75.00", 
      image: "/placeholder.svg",
      inStock: true
    },
    {
      id: 3,
      name: "Traditional Woven Bag",
      price: "$120.00",
      image: "/placeholder.svg",
      inStock: false
    },
    {
      id: 4,
      name: "Colorful Bead Necklace Set",
      price: "$55.00",
      image: "/placeholder.svg",
      inStock: true
    }
  ];

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold">My Wishlist</h1>
        <p className="text-gray-500 mt-2">Save your favorite items for later</p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {wishlistItems.map((item) => (
          <Card key={item.id} className="group hover:shadow-lg transition-shadow">
            <div className="relative">
              <img
                src={item.image}
                alt={item.name}
                className="w-full h-48 object-cover rounded-t-lg"
              />
              <Button
                variant="ghost"
                size="icon"
                className="absolute top-2 right-2 bg-white/80 hover:bg-white"
              >
                <X className="h-4 w-4" />
              </Button>
              <div className="absolute top-2 left-2">
                <Heart className="h-5 w-5 text-red-500 fill-red-500" />
              </div>
            </div>
            <CardContent className="p-4">
              <h3 className="font-semibold mb-2">{item.name}</h3>
              <div className="flex justify-between items-center mb-3">
                <span className="text-lg font-bold text-primary">{item.price}</span>
                {!item.inStock && (
                  <span className="text-sm text-red-500">Out of Stock</span>
                )}
              </div>
              <Button 
                className="w-full" 
                disabled={!item.inStock}
                variant={item.inStock ? "default" : "secondary"}
              >
                <ShoppingCart className="h-4 w-4 mr-2" />
                {item.inStock ? "Add to Cart" : "Notify When Available"}
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>

      {wishlistItems.length === 0 && (
        <div className="text-center py-12">
          <Heart className="h-16 w-16 text-gray-300 mx-auto mb-4" />
          <h3 className="text-xl font-semibold mb-2">Your wishlist is empty</h3>
          <p className="text-gray-500 mb-4">Start adding items you love to your wishlist</p>
          <Button>Browse Products</Button>
        </div>
      )}
    </div>
  );
};

export default Wishlist;
