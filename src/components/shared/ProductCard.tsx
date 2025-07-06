import Image from 'next/image';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ShoppingCart } from 'lucide-react';

interface ProductCardProps {
  name: string;
  imageUrl: string;
  imageHint: string;
  specs: string[];
  price: number;
}

export default function ProductCard({ name, imageUrl, imageHint, specs, price }: ProductCardProps) {
  return (
    <Card className="flex flex-col overflow-hidden transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
      <CardHeader className="p-0">
        <div className="relative aspect-video w-full">
          <Image
            src={imageUrl}
            alt={name}
            layout="fill"
            objectFit="cover"
            data-ai-hint={imageHint}
          />
        </div>
        <div className="p-6">
          <CardTitle className="text-xl">{name}</CardTitle>
        </div>
      </CardHeader>
      <CardContent className="flex-grow p-6 pt-0">
        <div className="space-y-2">
          {specs.map((spec, index) => (
            <Badge key={index} variant="secondary" className="mr-2 mb-2">{spec}</Badge>
          ))}
        </div>
      </CardContent>
      <CardFooter className="p-6 pt-0 flex justify-between items-center">
        <p className="text-2xl font-bold text-primary">${price.toLocaleString()}</p>
        <Button>
          <ShoppingCart className="mr-2 h-4 w-4" /> Buy Now
        </Button>
      </CardFooter>
    </Card>
  );
}
