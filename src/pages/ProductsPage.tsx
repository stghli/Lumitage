
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { ProductGrid } from '@/components/product/ProductGrid';
import { getProductsByCategory, Product } from '@/data/products';
import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import { Slider } from '@/components/ui/slider';
import { Label } from '@/components/ui/label';
import { ArrowRightLeft, FilterX } from 'lucide-react';
import { cn } from '@/lib/utils';

type FilterState = {
  gender: string[];
  priceRange: [number, number];
};

const ProductsPage = () => {
  const { category } = useParams<{ category: string }>();
  const [products, setProducts] = useState<Product[]>([]);
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  
  const [filters, setFilters] = useState<FilterState>({
    gender: [],
    priceRange: [0, 100],
  });
  
  // Get products on component mount and when category changes
  useEffect(() => {
    if (category) {
      const categoryProducts = getProductsByCategory(category);
      setProducts(categoryProducts);
      setFilteredProducts(categoryProducts);
      
      // Reset filters when category changes
      setFilters({
        gender: [],
        priceRange: [0, 100],
      });
    }
    
    window.scrollTo(0, 0);
  }, [category]);
  
  // Apply filters when filter state changes
  useEffect(() => {
    let filtered = [...products];
    
    // Apply gender filter
    if (filters.gender.length > 0) {
      filtered = filtered.filter(product => 
        filters.gender.includes(product.gender)
      );
    }
    
    // Apply price filter
    filtered = filtered.filter(product => 
      product.price >= filters.priceRange[0] && 
      product.price <= filters.priceRange[1]
    );
    
    setFilteredProducts(filtered);
  }, [filters, products]);
  
  const toggleGenderFilter = (gender: string) => {
    setFilters(prev => {
      const newGender = prev.gender.includes(gender)
        ? prev.gender.filter(g => g !== gender)
        : [...prev.gender, gender];
      
      return {
        ...prev,
        gender: newGender,
      };
    });
  };
  
  const handlePriceChange = (value: number[]) => {
    setFilters(prev => ({
      ...prev,
      priceRange: [value[0], value[1]],
    }));
  };
  
  const resetFilters = () => {
    setFilters({
      gender: [],
      priceRange: [0, 100],
    });
  };
  
  const capitalizedCategory = category ? category.charAt(0).toUpperCase() + category.slice(1) : '';

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow pt-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-6 lg:gap-8">
            {/* Mobile Filter Toggle */}
            <div className="w-full lg:hidden mb-4">
              <Button
                onClick={() => setIsFilterOpen(!isFilterOpen)}
                variant="outline"
                className="w-full flex items-center justify-center"
              >
                <ArrowRightLeft className="mr-2 h-4 w-4" />
                {isFilterOpen ? 'Hide Filters' : 'Show Filters'}
              </Button>
            </div>
            
            {/* Filter Sidebar */}
            <div className={cn(
              "lg:w-72 lg:flex-shrink-0",
              isFilterOpen ? 'block' : 'hidden lg:block'
            )}>
              <div className="bg-white p-6 rounded-lg shadow-sm border sticky top-6">
                <div className="flex justify-between items-center mb-6">
                  <h3 className="font-semibold text-lg">Filters</h3>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={resetFilters}
                    className="h-8 text-sm"
                  >
                    <FilterX className="h-4 w-4 mr-1" />
                    Reset
                  </Button>
                </div>
                
                <div className="space-y-6">
                  {/* Gender Filter */}
                  <div>
                    <h4 className="font-medium mb-3">Gender</h4>
                    <div className="space-y-3">
                      {['male', 'female', 'unisex'].map((gender) => (
                        <div key={gender} className="flex items-center">
                          <Checkbox
                            id={`gender-${gender}`}
                            checked={filters.gender.includes(gender)}
                            onCheckedChange={() => toggleGenderFilter(gender)}
                          />
                          <Label
                            htmlFor={`gender-${gender}`}
                            className="ml-3 text-sm font-normal cursor-pointer capitalize"
                          >
                            {gender}
                          </Label>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  {/* Price Range Filter */}
                  <div>
                    <h4 className="font-medium mb-3">Price Range</h4>
                    <div className="px-2">
                      <Slider
                        defaultValue={[0, 100]}
                        value={[filters.priceRange[0], filters.priceRange[1]]}
                        onValueChange={handlePriceChange}
                        max={100}
                        step={1}
                        className="mb-4"
                      />
                      <div className="flex justify-between text-sm text-gray-600">
                        <span>${filters.priceRange[0]}</span>
                        <span>${filters.priceRange[1]}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Products Content */}
            <div className="flex-1 min-w-0">
              <div className="mb-6">
                <h1 className="text-3xl font-bold text-secondary mb-2">{capitalizedCategory}</h1>
                <p className="text-gray-600">
                  {filteredProducts.length} {filteredProducts.length === 1 ? 'product' : 'products'}
                </p>
              </div>
              
              {filteredProducts.length > 0 ? (
                <ProductGrid products={filteredProducts} />
              ) : (
                <div className="text-center py-12">
                  <p className="text-gray-500 mb-4">No products found matching your criteria.</p>
                  <Button 
                    variant="outline" 
                    onClick={resetFilters}
                  >
                    Clear Filters
                  </Button>
                </div>
              )}
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ProductsPage;
