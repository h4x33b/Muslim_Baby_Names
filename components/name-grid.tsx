import Link from 'next/link';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

interface Name {
  Name: string;
  Gender: string;
  Meaning: string;
  Origin: string;
  PopularityRank: number;
}

interface NameGridProps {
  names: Name[];
}

export function NameGrid({ names }: NameGridProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {names.map((name) => (
        <Link href={`/names/${name.Name.toLowerCase()}`} key={name.Name}>
          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle>{name.Name}</CardTitle>
                <Badge variant={name.Gender === 'Boy' ? 'default' : 'secondary'}>
                  {name.Gender}
                </Badge>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground mb-2">{name.Meaning}</p>
              <div className="flex items-center justify-between text-sm">
                <span>{name.Origin}</span>
                <span>Rank: #{name.PopularityRank}</span>
              </div>
            </CardContent>
          </Card>
        </Link>
      ))}
    </div>
  );
}