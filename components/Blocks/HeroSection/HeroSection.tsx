/* eslint-disable react/no-unescaped-entities */
import PrimaryButton from "@/components/ui/Buttons/PrimaryButton";
import PrimaryLink from "@/components/ui/Links/PrimaryLink";
import NormalDescription from "@/components/ui/Text/Description/NormalDescription";
import SpecialHeader from "@/components/ui/Text/Headers/SpecialHeader";
import Image from "next/image";
import React from "react";

const HeroSection = () => {
  return (
    <section className="bg-gradient-to-br from-pink-50 to-pink-100 py-8 sm:py-12">
      <div className="max-w-4xl mx-auto px-6">
        {/* Header + Text */}
        <div className="text-center">
          <SpecialHeader
            start_text="Welcome to"
            spacial_text="MakeupMate"
            end_ext="— Book top makeup artists for bridal, party & editorial looks"
            full_text_style="px-0"
          />

          <NormalDescription styles="mt-4 max-w-xl mx-auto text-center">
            Find professional makeup artists for every occasion — bridal,
            party, editorial, and specialty looks. Browse categories, pick an
            artist, and book in a few taps.
          </NormalDescription>

          {/* CTAs */}
          <div className="mt-6 flex flex-col sm:flex-row justify-center items-center gap-3">
            {/* Primary CTA anchors to categories on the same page */}
            <a
              href="#categories"
              className="inline-flex items-center justify-center px-5 py-2.5 rounded-md bg-pink-600 text-white text-sm font-medium shadow-sm hover:opacity-95"
            >
              Explore categories
            </a>

            {/* Secondary CTA goes to My Bookings */}
            <PrimaryLink title="My Bookings" url="/my-bookings" className="text-sm" />
          </div>
        </div>

        {/* Image / Illustration - mobile-first: image stacked below text */}
        <div className="mt-8">
          <div className="w-full rounded-xl overflow-hidden shadow-sm">
            {/* Replace /img/hero-makeup.jpg with your image in public/img/ */}
            <Image
              alt="Makeup hero"
              src={"/img/hero-banner.png"}
              width={1440}
              height={720}
              className="w-full h-auto object-cover"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
