import ProductCard from '@/components/shared/ProductCard';

const laptops = [
  {
    name: 'ProBook X1',
    imageUrl: 'https://placehold.co/600x400.png',
    imageHint: 'sleek laptop',
    specs: ['14" OLED', 'Intel Core i7', '16GB RAM', '1TB SSD'],
    price: 1499,
  },
  {
    name: 'GamerForge Pro',
    imageUrl: 'https://placehold.co/600x400.png',
    imageHint: 'gaming laptop',
    specs: ['16" 240Hz', 'Ryzen 9', '32GB RAM', 'RTX 4070'],
    price: 2199,
  },
  {
    name: 'UltraLite Air',
    imageUrl: 'https://placehold.co/600x400.png',
    imageHint: 'thin laptop',
    specs: ['13.3" Retina', 'Intel Core i5', '8GB RAM', '512GB SSD'],
    price: 999,
  },
  {
    name: 'Creator Studio Max',
    imageUrl: 'https://placehold.co/600x400.png',
    imageHint: 'powerful laptop',
    specs: ['17" 4K Touch', 'Intel Core i9', '64GB RAM', 'RTX 4080'],
    price: 3499,
  },
    {
    name: 'Endeavour Business',
    imageUrl: 'https://placehold.co/600x400.png',
    imageHint: 'business laptop',
    specs: ['15.6" FHD', 'Intel Core i7', '16GB RAM', '512GB SSD'],
    price: 1250,
  },
  {
    name: 'Flex 2-in-1',
    imageUrl: 'https://placehold.co/600x400.png',
    imageHint: 'convertible laptop',
    specs: ['14" Touchscreen', 'Ryzen 7', '16GB RAM', '1TB SSD'],
    price: 1350,
  },
];

export default function LaptopsPage() {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-headline font-bold tracking-tight sm:text-5xl">
          Laptops
        </h1>
        <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
          Engineered for performance, portability, and power.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {laptops.map((laptop) => (
          <ProductCard key={laptop.name} {...laptop} />
        ))}
      </div>
    </div>
  );
}
