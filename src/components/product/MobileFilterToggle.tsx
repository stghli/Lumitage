
import { Button } from '@/components/ui/button';
import { ArrowRightLeft } from 'lucide-react';

type MobileFilterToggleProps = {
  isFilterOpen: boolean;
  onToggle: () => void;
};

export const MobileFilterToggle = ({ isFilterOpen, onToggle }: MobileFilterToggleProps) => {
  return (
    <div className="w-full lg:hidden mb-4">
      <Button
        onClick={onToggle}
        variant="outline"
        className="w-full flex items-center justify-center"
      >
        <ArrowRightLeft className="mr-2 h-4 w-4" />
        {isFilterOpen ? 'Hide Filters' : 'Show Filters'}
      </Button>
    </div>
  );
};
