import ProductCard from '@/components/shared/ProductCard';

const accessories = [
  {
    name: 'Mechano-Type Keyboard',
    imageUrl: 'https://placehold.co/600x400.png',
    imageHint: 'mechanical keyboard',
    specs: ['RGB Backlight', 'Hot-swappable', 'Cherry MX Brown', 'Wireless'],
    price: 159,
  },
  {
    name: 'ProGrip Mouse',
    imageUrl: 'https://placehold.co/600x400.png',
    imageHint: 'gaming mouse',
    specs: ['26,000 DPI', 'Lightweight', '8 Programmable Buttons', 'RGB'],
    price: 89,
  },
  {
    name: 'UltraWide Monitor',
    imageUrl: 'https://placehold.co/600x400.png',
    imageHint: 'ultrawide monitor',
    specs: ['34" Curved', '144Hz', '1ms Response', 'HDR400'],
    price: 599,
  },
  {
    name: 'HD Webcam Pro',
    imageUrl: 'https://placehold.co/600x400.png',
    imageHint: 'webcam',
    specs: ['4K Resolution', 'Ring Light', 'Stereo Mics', 'AI Framing'],
    price: 199,
  },
  {
    name: 'StudioMic USB',
    imageUrl: 'https://placehold.co/600x400.png',
    imageHint: 'usb microphone',
    specs: ['Cardioid Pattern', 'Zero-latency Monitoring', 'Gain Control', 'Pop Filter'],
    price: 129,
  },
  {
    name: 'ProSound Headset',
    imageUrl: 'https://placehold.co/600x400.png',
    imageHint: 'gaming headset',
    specs: ['7.1 Surround', 'Noise-cancelling Mic', '50mm Drivers', 'Wireless'],
    price: 179,
  },
];

export default function AccessoriesPage() {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-headline font-bold tracking-tight sm:text-5xl">
          Accessories
        </h1>
        <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
          Complete your setup with our premium range of IT accessories.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {accessories.map((item) => (
          <ProductCard key={item.name} {...item} />
        ))}
      </div>
    </div>
  );
}
