"use client";

import { useState } from 'react';
import { Search } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

export function SearchBar() {
  const [query, setQuery] = useState('');

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle search logic here
  };

  return (
    <form onSubmit={handleSearch} className="max-w-2xl mx-auto">
      <div className="flex gap-2">
        <div className="relative flex-grow">
          <Input
            type="text"
            placeholder="Search for a name..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="w-full pl-10"
          />
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
        </div>
        <Button type="submit">Search</Button>
      </div>
    </form>
  );
}