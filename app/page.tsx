import { SearchBar } from "@/components/search-bar";
import { NameGrid } from "@/components/name-grid";
import { getAllNames } from "@/lib/names";

export default async function Home() {
  const names = await getAllNames();
  const popularNames = names.sort((a, b) => a.PopularityRank - b.PopularityRank).slice(0, 6);

  return (
    <div className="container mx-auto px-4 py-8">
      <section className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">Muslim Baby Names Directory</h1>
        <p className="text-lg text-muted-foreground mb-8">
          Discover beautiful names with deep cultural meaning and significance
        </p>
        <SearchBar />
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-6">Popular Names</h2>
        <NameGrid names={popularNames} />
      </section>

      <section className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
        <div className="bg-card rounded-lg p-6">
          <h2 className="text-xl font-semibold mb-4">Browse by Gender</h2>
          <div className="flex gap-4">
            <a href="/names/boy" className="flex-1 btn btn-primary">Boy Names</a>
            <a href="/names/girl" className="flex-1 btn btn-secondary">Girl Names</a>
          </div>
        </div>
        <div className="bg-card rounded-lg p-6">
          <h2 className="text-xl font-semibold mb-4">Browse by Origin</h2>
          <div className="grid grid-cols-2 gap-2">
            <a href="/names/origin/arabic" className="btn btn-outline">Arabic</a>
            <a href="/names/origin/persian" className="btn btn-outline">Persian</a>
            <a href="/names/origin/turkish" className="btn btn-outline">Turkish</a>
            <a href="/names/origin/urdu" className="btn btn-outline">Urdu</a>
          </div>
        </div>
      </section>
    </div>
  );
}