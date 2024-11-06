import { Metadata } from "next"
import names from "@/data/muslim-names.json"
import { notFound } from "next/navigation"
import { Card } from "@/components/ui/card"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"

type Props = {
  params: { name: string }
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const name = names.find(
    (n) => n.Name.toLowerCase() === params.name.toLowerCase()
  )

  if (!name) {
    return {
      title: "Name Not Found",
    }
  }

  return {
    title: name.seoTitle,
    description: name.seoDescription,
  }
}

export async function generateStaticParams() {
  return names.map((name) => ({
    name: name.Name.toLowerCase(),
  }))
}

export default function NamePage({ params }: Props) {
  const name = names.find(
    (n) => n.Name.toLowerCase() === params.name.toLowerCase()
  )

  if (!name) {
    notFound()
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-6">{name.Name}</h1>
        
        <Card className="p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4">Name Overview</h2>
          <Table>
            <TableBody>
              <TableRow>
                <TableCell className="font-medium">Meaning</TableCell>
                <TableCell>{name.Meaning}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">Origin</TableCell>
                <TableCell>{name.Origin}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">Gender</TableCell>
                <TableCell>{name.Gender}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">Pronunciation</TableCell>
                <TableCell>{name.Pronunciation}</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </Card>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card className="p-6">
            <h2 className="text-xl font-semibold mb-4">Cultural Significance</h2>
            <p className="text-muted-foreground">{name.CulturalSignificance}</p>
          </Card>

          <Card className="p-6">
            <h2 className="text-xl font-semibold mb-4">Personality Traits</h2>
            <div className="flex flex-wrap gap-2">
              {name.PersonalityTraits.map((trait) => (
                <span
                  key={trait}
                  className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm"
                >
                  {trait}
                </span>
              ))}
            </div>
          </Card>

          <Card className="p-6">
            <h2 className="text-xl font-semibold mb-4">Name Variations</h2>
            <div className="flex flex-wrap gap-2">
              {name.NameVariations.map((variation) => (
                <span
                  key={variation}
                  className="bg-secondary text-secondary-foreground px-3 py-1 rounded-full text-sm"
                >
                  {variation}
                </span>
              ))}
            </div>
          </Card>

          <Card className="p-6">
            <h2 className="text-xl font-semibold mb-4">Famous People</h2>
            <ul className="list-disc list-inside space-y-2">
              {name.FamousPeople.map((person) => (
                <li key={person} className="text-muted-foreground">
                  {person}
                </li>
              ))}
            </ul>
          </Card>
        </div>
      </div>
    </div>
  )
}