import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Users, Zap, Award } from 'lucide-react';

export default function AboutPage() {
  return (
    <div className="bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center">
          <h1 className="text-4xl font-headline font-bold tracking-tight sm:text-5xl lg:text-6xl">
            About Prolab IT Solutions
          </h1>
          <p className="mt-6 max-w-3xl mx-auto text-xl text-muted-foreground">
            Pioneering the future of high-performance computing through innovation, quality, and dedication.
          </p>
        </div>

        <div className="mt-16 relative">
          <Image
            src="https://placehold.co/1200x500.png"
            alt="Prolab Team"
            width={1200}
            height={500}
            className="rounded-lg shadow-xl mx-auto"
            data-ai-hint="team working computers"
          />
        </div>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl font-bold tracking-tight">Our Story</h2>
            <p className="mt-4 text-muted-foreground">
              Founded in 2010 by a team of passionate engineers and tech enthusiasts, Prolab IT Solutions started in a small garage with a big dream: to build computers that didn't compromise on performance or quality. We saw a gap in the market for meticulously crafted, custom-built systems that catered to the specific needs of gamers, creators, and professionals.
            </p>
            <p className="mt-4 text-muted-foreground">
              Over the past decade, we've grown from that garage into a globally recognized brand, but our core principles remain unchanged. Every Prolab machine is a testament to our commitment to excellence, built with premium components and backed by expert, accessible support.
            </p>
          </div>
          <div>
            <h2 className="text-3xl font-bold tracking-tight">Our Founders</h2>
            <p className="mt-4 text-muted-foreground">
              Our company was brought to life by Jane Doe and John Smith, two lifelong friends with a shared passion for technology. Jane, with her background in electrical engineering, leads our hardware design and innovation. John, a software guru, ensures that every system is perfectly optimized for peak performance right out of the box. Together, they guide our mission to deliver the ultimate computing experience.
            </p>
          </div>
        </div>

        <div className="mt-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight">Why Choose Prolab?</h2>
            <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
              We are defined by our commitment to quality and our passion for technology.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <Card>
              <CardHeader>
                <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                  <Award className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="mt-4">Uncompromising Quality</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  We use only the highest-grade components, and every system undergoes rigorous testing to ensure stability and performance.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                  <Zap className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="mt-4">Cutting-Edge Innovation</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Our R&D team is constantly exploring new technologies to bring you the fastest, most efficient systems on the market.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                  <Users className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="mt-4">Customer-Centric Support</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Our expert support team is here to help you every step of the way, from choosing your build to post-purchase assistance.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
