
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { ProductGrid } from '@/components/product/ProductGrid';
import { ProductFilters } from '@/components/product/ProductFilters';
import { ProductsHeader } from '@/components/product/ProductsHeader';
import { MobileFilterToggle } from '@/components/product/MobileFilterToggle';
import { getProductsByCategory, Product } from '@/data/products';
import { Button } from '@/components/ui/button';

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

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow pt-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-6 lg:gap-8">
            {/* Mobile Filter Toggle */}
            <MobileFilterToggle 
              isFilterOpen={isFilterOpen}
              onToggle={() => setIsFilterOpen(!isFilterOpen)}
            />
            
            {/* Filter Sidebar */}
            <ProductFilters
              filters={filters}
              isFilterOpen={isFilterOpen}
              onGenderToggle={toggleGenderFilter}
              onPriceChange={handlePriceChange}
              onResetFilters={resetFilters}
            />
            
            {/* Products Content */}
            <div className="flex-1 min-w-0">
              <ProductsHeader 
                category={category || ''}
                productCount={filteredProducts.length}
              />
              
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
