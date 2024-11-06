import fs from 'fs/promises';
import path from 'path';

export async function getAllNames() {
  const filePath = path.join(process.cwd(), 'data', 'muslim_names.json');
  const fileContents = await fs.readFile(filePath, 'utf8');
  return JSON.parse(fileContents);
}

export async function getNameBySlug(slug: string) {
  const names = await getAllNames();
  return names.find((name: any) => name.Name.toLowerCase() === slug.toLowerCase());
}

export async function getNamesByGender(gender: string) {
  const names = await getAllNames();
  return names.filter((name: any) => name.Gender.toLowerCase() === gender.toLowerCase());
}

export async function getNamesByOrigin(origin: string) {
  const names = await getAllNames();
  return names.filter((name: any) => name.Origin.toLowerCase() === origin.toLowerCase());
}