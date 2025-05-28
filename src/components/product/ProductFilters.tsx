
import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import { Slider } from '@/components/ui/slider';
import { Label } from '@/components/ui/label';
import { FilterX } from 'lucide-react';
import { cn } from '@/lib/utils';

type FilterState = {
  gender: string[];
  priceRange: [number, number];
};

type ProductFiltersProps = {
  filters: FilterState;
  isFilterOpen: boolean;
  onGenderToggle: (gender: string) => void;
  onPriceChange: (value: number[]) => void;
  onResetFilters: () => void;
};

export const ProductFilters = ({
  filters,
  isFilterOpen,
  onGenderToggle,
  onPriceChange,
  onResetFilters,
}: ProductFiltersProps) => {
  return (
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
            onClick={onResetFilters}
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
                    onCheckedChange={() => onGenderToggle(gender)}
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
                onValueChange={onPriceChange}
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
  );
};
