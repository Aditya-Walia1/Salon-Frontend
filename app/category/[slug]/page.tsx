import React from "react";
import ArtistCard from "@/components/Blocks/Artist/ArtistCard";
import { artists, categories } from "@/data/mock";
import Link from "next/link";

interface Props {
  params: { slug: string };
}

export default function CategoryPage({ params }: Props) {
  const slug = params.slug;
  const category = categories.find((c) => c.slug === slug);
  const filtered = artists.filter((a) => a.categories.includes(slug));

  return (
    <>
      <div className="max-w-4xl mx-auto px-4 py-6">
        <div className="mb-4">
          <Link href="/">
            <a className="text-sm text-gray-500">← Back</a>
          </Link>
        </div>
        <h1 className="text-xl font-semibold mb-2">{category?.name ?? "Category"}</h1>
        <p className="text-sm text-gray-600 mb-4">{category?.subs?.map(s => s.name).join(" • ")}</p>

        <div className="space-y-3">
          {filtered.length === 0 ? (
            <div className="text-gray-500">No artists found in this category.</div>
          ) : (
            filtered.map((a) => <ArtistCard key={a.id} artist={a as any} />)
          )}
        </div>
      </div>
    </>
  );
}