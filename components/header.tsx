import Link from 'next/link';
import { ModeToggle } from './mode-toggle';
import { Search } from 'lucide-react';

export default function Header() {
  return (
    <header className="border-b">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="text-2xl font-bold">
            Muslim Names
          </Link>
          
          <nav className="hidden md:flex items-center space-x-6">
            <Link href="/names/boy" className="text-foreground/60 hover:text-foreground">
              Boy Names
            </Link>
            <Link href="/names/girl" className="text-foreground/60 hover:text-foreground">
              Girl Names
            </Link>
            <Link href="/names/popular" className="text-foreground/60 hover:text-foreground">
              Popular Names
            </Link>
            <Link href="/about" className="text-foreground/60 hover:text-foreground">
              About
            </Link>
          </nav>

          <div className="flex items-center space-x-4">
            <button className="p-2 hover:bg-accent rounded-full">
              <Search className="h-5 w-5" />
            </button>
            <ModeToggle />
          </div>
        </div>
      </div>
    </header>
  );
}