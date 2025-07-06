import ProductCard from '@/components/shared/ProductCard';

const desktops = [
  {
    name: 'Vortex Gaming PC',
    imageUrl: 'https://placehold.co/600x400.png',
    imageHint: 'gaming desktop',
    specs: ['Intel Core i9', '64GB RAM', 'RTX 4090', '4TB NVMe'],
    price: 3999,
  },
  {
    name: 'ProStation Workhorse',
    imageUrl: 'https://placehold.co/600x400.png',
    imageHint: 'workstation computer',
    specs: ['Xeon W', '128GB ECC RAM', 'Quadro RTX A6000', '8TB RAID'],
    price: 7999,
  },
  {
    name: 'Compact Mini PC',
    imageUrl: 'https://placehold.co/600x400.png',
    imageHint: 'mini pc',
    specs: ['Ryzen 7', '32GB RAM', '1TB NVMe', 'Integrated GPU'],
    price: 899,
  },
  {
    name: 'All-in-One Pro',
    imageUrl: 'https://placehold.co/600x400.png',
    imageHint: 'all-in-one computer',
    specs: ['27" 5K Display', 'Intel Core i7', '16GB RAM', '2TB Fusion Drive'],
    price: 2299,
  },
  {
    name: 'Starter Build',
    imageUrl: 'https://placehold.co/600x400.png',
    imageHint: 'budget pc',
    specs: ['Intel Core i5', '16GB RAM', 'RTX 3060', '1TB SSD'],
    price: 1199,
  },
  {
    name: 'RGB Master Race',
    imageUrl: 'https://placehold.co/600x400.png',
    imageHint: 'RGB gaming pc',
    specs: ['Ryzen 9', '32GB RAM', 'RTX 4080', '2TB NVMe'],
    price: 2999,
  },
];

export default function DesktopsPage() {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-headline font-bold tracking-tight sm:text-5xl">
          Desktops
        </h1>
        <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
          Unleash ultimate power and expandability for any task.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {desktops.map((desktop) => (
          <ProductCard key={desktop.name} {...desktop} />
        ))}
      </div>
    </div>
  );
}
