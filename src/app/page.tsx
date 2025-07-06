import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { CheckCircle, Rocket, Target } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="flex flex-col">
      <section className="relative w-full py-20 md:py-32 lg:py-40 bg-card">
        <div className="absolute inset-0 bg-primary/10 dark:bg-primary/5"></div>
        <div className="container mx-auto px-4 md:px-6 text-center relative z-10">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-4xl font-headline font-bold tracking-tight sm:text-5xl md:text-6xl text-primary-foreground dark:text-white">
              Prolab IT Solutions
            </h1>
            <p className="mt-6 text-lg leading-8 text-muted-foreground dark:text-gray-300">
              Engineering the Future of Computing. High-Performance Hardware,
              Unmatched Support.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Button asChild size="lg">
                <Link href="/products/laptops">Explore Products</Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href="/contact">Get Support</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="py-16 sm:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-headline font-bold tracking-tight sm:text-4xl">
              Who Are We?
            </h2>
            <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
              At Prolab, we are more than just a hardware company. We are
              innovators, engineers, and partners dedicated to providing
              top-tier computing solutions.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="text-center transform hover:-translate-y-2 transition-transform duration-300">
              <CardHeader>
                <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                  <Target className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="mt-4">Our Mission</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  To empower professionals, creators, and enthusiasts with
                  reliable, high-performance hardware that pushes the boundaries
                  of what's possible.
                </p>
              </CardContent>
            </Card>
            <Card className="text-center transform hover:-translate-y-2 transition-transform duration-300">
              <CardHeader>
                <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                  <Rocket className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="mt-4">Our Vision</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  To be the leading global provider of custom and pre-built
                  computer systems, renowned for quality, innovation, and
                  customer-centric support.
                </p>
              </CardContent>
            </Card>
            <Card className="text-center transform hover:-translate-y-2 transition-transform duration-300 lg:col-span-1 md:col-span-2">
              <CardHeader>
                <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                  <CheckCircle className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="mt-4">Our Values</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Commitment to quality, relentless innovation, and a passion for
                  solving complex technological challenges for our valued customers.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="bg-card py-16 sm:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-headline font-bold tracking-tight sm:text-4xl">
                Discover Our Flagship Products
              </h2>
              <p className="mt-4 text-lg text-muted-foreground">
                From powerful gaming rigs to sleek ultrabooks, our products are
                designed for performance and reliability.
              </p>
              <div className="mt-8 flex gap-4">
                <Button asChild>
                  <Link href="/products/laptops">View Laptops</Link>
                </Button>
                <Button asChild variant="secondary">
                  <Link href="/products/desktops">View Desktops</Link>
                </Button>
              </div>
            </div>
            <div className="relative h-80 w-full">
              <Image
                src="https://placehold.co/600x400.png"
                alt="Prolab Products"
                layout="fill"
                objectFit="cover"
                className="rounded-lg shadow-lg"
                data-ai-hint="computer hardware"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
