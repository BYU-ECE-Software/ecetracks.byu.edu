import Image from "next/image";
import Link from "next/link";
import { CardItem } from "@/data/tracks";

interface CardProps {
  item: CardItem;
  href: string;
}

export default function Card({ item, href }: CardProps) {
  return (
    <Link
      href={href}
      className="group block overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm transition hover:shadow-md"
    >
      {item.image && (
        <div className="relative h-48 w-full">
          <Image
            src={item.image}
            alt={item.title}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover transition-transform group-hover:scale-105"
          />
        </div>
      )}
      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-900">{item.title}</h3>
        <p className="mt-1 text-sm text-gray-600">{item.description}</p>
      </div>
    </Link>
  );
}