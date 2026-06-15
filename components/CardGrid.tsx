import Card from "@/components/Card";
import { CardItem } from "@/data/tracks";

interface CardGridProps {
  items: CardItem[];
  basePath: string; // e.g. "/supertracks" - each item links to `${basePath}/${item.slug}`
}

export default function CardGrid({ items, basePath }: CardGridProps) {
  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {items.map((item) => (
        <Card key={item.slug} item={item} href={`${basePath}/${item.slug}`} />
      ))}
    </div>
  );
}