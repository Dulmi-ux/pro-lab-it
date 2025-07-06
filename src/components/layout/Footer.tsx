import { Component, Github, Linkedin, Twitter } from 'lucide-react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

export default function Footer() {
  return (
    <footer className="bg-card border-t">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <Link href="/" className="flex items-center space-x-2">
              <Component className="h-8 w-8 text-primary" />
              <span className="font-bold text-xl">Prolab IT Solutions</span>
            </Link>
            <p className="text-muted-foreground">
              Engineering the Future of Computing.
            </p>
            <div className="flex space-x-4">
              <Button variant="ghost" size="icon" asChild>
                <a href="#" aria-label="Twitter">
                  <Twitter className="h-5 w-5" />
                </a>
              </Button>
              <Button variant="ghost" size="icon" asChild>
                <a href="#" aria-label="GitHub">
                  <Github className="h-5 w-5" />
                </a>
              </Button>
              <Button variant="ghost" size="icon" asChild>
                <a href="#" aria-label="LinkedIn">
                  <Linkedin className="h-5 w-5" />
                </a>
              </Button>
            </div>
          </div>

          <div>
            <h3 className="font-semibold tracking-wider uppercase">Products</h3>
            <ul className="mt-4 space-y-2">
              <li><Link href="/products/laptops" className="text-muted-foreground hover:text-primary">Laptops</Link></li>
              <li><Link href="/products/desktops" className="text-muted-foreground hover:text-primary">Desktops</Link></li>
              <li><Link href="/products/accessories" className="text-muted-foreground hover:text-primary">Accessories</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold tracking-wider uppercase">Support</h3>
            <ul className="mt-4 space-y-2">
              <li><Link href="/contact" className="text-muted-foreground hover:text-primary">Contact Us</Link></li>
              <li><a href="https://youtube.com/playlist?list=PLT98CRl2KxKHaKA9-4_I38sLzK134p4GJ&si=VQGZSuLOnSuW6uHO" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary">Video Tutorials</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold tracking-wider uppercase">Company</h3>
            <ul className="mt-4 space-y-2">
              <li><Link href="/about" className="text-muted-foreground hover:text-primary">About Us</Link></li>
              <li><Link href="/auth/login" className="text-muted-foreground hover:text-primary">My Account</Link></li>
            </ul>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t text-center text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} Prolab IT Solutions. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
