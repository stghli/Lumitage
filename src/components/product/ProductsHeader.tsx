
type ProductsHeaderProps = {
  category: string;
  productCount: number;
};

export const ProductsHeader = ({ category, productCount }: ProductsHeaderProps) => {
  const capitalizedCategory = category ? category.charAt(0).toUpperCase() + category.slice(1) : '';

  return (
    <div className="mb-6">
      <h1 className="text-3xl font-bold text-secondary mb-2">{capitalizedCategory}</h1>
      <p className="text-gray-600">
        {productCount} {productCount === 1 ? 'product' : 'products'}
      </p>
    </div>
  );
};
