import { Button } from '@/components/ui/button';
import { Youtube } from 'lucide-react';
import Link from 'next/link';

export default function VideoHelpButton() {
  return (
    <Button
      asChild
      className="fixed bottom-24 right-4 rounded-full shadow-lg h-16 w-16 md:h-auto md:w-auto md:px-4 md:py-2 flex items-center justify-center gap-2"
      aria-label="Video Help & Tutorials"
    >
      <Link
        href="https://youtube.com/playlist?list=PLT98CRl2KxKHaKA9-4_I38sLzK134p4GJ&si=VQGZSuLOnSuW6uHO"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Youtube className="h-8 w-8 md:h-5 md:w-5" />
        <span className="hidden md:inline">📺 Video Help & Tutorials</span>
      </Link>
    </Button>
  );
}
