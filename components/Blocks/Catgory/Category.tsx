import Carousel from "@/components/ui/Carousel/Carousel";
import NormalDescription from "@/components/ui/Text/Description/NormalDescription";
import Heading1 from "@/components/ui/Text/Headers/Heading1";
import { Category } from "@/types/CommonTypes";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const CategoryCard = ({ cat }: { cat: Category }) => {
  const slug = (cat.slug || cat.id || cat.name || "").toString();
  const subtitle =
    cat.sub_categories?.slice(0, 2).map((s: any) => s.name).join(" • ") ||
    (cat.subs?.slice(0, 2).map((s: any) => s.name).join(" • ") || "");

  return (
    <Link
      href={/category/}
      className="block w-44 sm:w-52 p-3 rounded-2xl border hover:shadow-md transition bg-white"
      key={slug}
    >
      <div className="h-28 rounded-lg bg-gradient-to-br from-pink-50 to-pink-100 overflow-hidden flex items-center justify-center">
        {cat.image_url || cat.image ? (
          <Image
            src={cat.image_url || cat.image || "/img/placeholder.png"}
            alt={cat.name}
            width={280}
            height={160}
            className="object-cover w-full h-full"
            style={{ objectFit: "cover" }}
          />
        ) : (
          <div className="text-center px-3">
            <div className="text-sm font-medium">{cat.name}</div>
            <div className="text-xs text-gray-500 mt-1">{subtitle}</div>
          </div>
        )}
      </div>

      <div className="mt-3 text-left">
        <div className="font-semibold text-sm">{cat.name}</div>
        {subtitle && <div className="text-xs text-gray-500 mt-1">{subtitle}</div>}
      </div>
    </Link>
  );
};

const CategoriesListCarousel = ({ categories }: { categories: Category[] }) => {
  if (!categories || categories.length === 0) {
    return (
      <div className="py-8">
        <Heading1 styles="text-center">Categories</Heading1>
        <NormalDescription styles="mt-3 text-center">
          Categories will appear here once loaded.
        </NormalDescription>
      </div>
    );
  }

  const items = categories.map((ct) => <CategoryCard key={ct.id || ct.slug || ct.name} cat={ct} />);

  return (
    <div className="py-6">
      <Heading1 styles="mb-3 text-center">Makeup Categories</Heading1>
      <NormalDescription styles="mt-1 mb-6 mx-auto max-w-[650px] px-4 text-center">
        Browse categories to find makeup artists for bridal, party, editorial and specialty looks.
      </NormalDescription>

      {Carousel ? (
        <div className="px-4">
          <Carousel Items={items} swiper_slide_style="!w-[200px] !h-auto !px-2" />
        </div>
      ) : (
        <div className="overflow-x-auto py-2 px-4">
          <div className="flex gap-3">{items}</div>
        </div>
      )}
    </div>
  );
};

export default CategoriesListCarousel;
