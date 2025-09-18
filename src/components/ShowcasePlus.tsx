"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { COLORSTEEL, popularPalette } from "@/data/colorsteel";
import WindIcon from "@/components/icons/Wind";
import RainIcon from "@/components/icons/Rain";
import ShieldIcon from "@/components/icons/Shield";

type Attr = { icon: React.ReactNode; label: string };

// Roof profile data for RRS
const roofProfiles = [
  {
    key: "corrugated",
    title: "Corrugated Steel Roofing",
    category: "Corrugate",
    image: "/api/placeholder/400/250",
    blurb: "Classic corrugated steel roofing with excellent durability and weather resistance.",
    bullets: [
      "Proven coastal durability",
      "Excellent water runoff",
      "Easy installation and maintenance",
      "Cost-effective solution"
    ],
    cta: { label: "Get Quote", href: "#contact" }
  },
  {
    key: "longrun",
    title: "Longrun Steel Roofing",
    category: "Longrun", 
    image: "/api/placeholder/400/250",
    blurb: "Longrun steel roofing for superior weather performance and modern aesthetics.",
    bullets: [
      "Superior wind resistance",
      "Minimal maintenance required",
      "Modern clean lines",
      "Excellent thermal performance"
    ],
    cta: { label: "Learn More", href: "#services" }
  },
  {
    key: "architectural",
    title: "Architectural Steel Roofing",
    category: "Architectural",
    image: "/api/placeholder/400/250", 
    blurb: "Premium architectural steel roofing with hidden fixings and superior finish.",
    bullets: [
      "Hidden fixing system",
      "Premium appearance",
      "Severe weather capable",
      "Custom flashings available"
    ],
    cta: { label: "View Gallery", href: "#gallery" }
  }
];

// Attribute mapping per category
const ATTRS: Record<string, Attr[]> = {
  Corrugate: [
    { icon: <WindIcon className="text-blue-600" />, label: "Coastal durability" },
    { icon: <RainIcon className="text-blue-600" />, label: "Good drainage pitch" },
    { icon: <ShieldIcon className="text-blue-600" />, label: "Classic, robust" }
  ],
  Longrun: [
    { icon: <WindIcon className="text-blue-600" />, label: "High wind performance" },
    { icon: <RainIcon className="text-blue-600" />, label: "Superior run‑off" },
    { icon: <ShieldIcon className="text-blue-600" />, label: "Low maintenance" }
  ],
  Architectural: [
    { icon: <ShieldIcon className="text-blue-600" />, label: "Hidden fixings" },
    { icon: <WindIcon className="text-blue-600" />, label: "Severe weather capable" },
    { icon: <RainIcon className="text-blue-600" />, label: "Detailed flashings" }
  ]
};

function trackCTA(title: string, href: string) {
  // GA4 if available
  if (typeof window !== "undefined" && (window as any).gtag) {
    (window as any).gtag("event", "select_content", {
      content_type: "showcase_cta",
      item_id: title,
      link_url: href
    });
  }
}

export default function ShowcasePlus() {
  return (
    <section id="showcase" className="px-4 py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 text-center"
        >
          Steel Roofing Solutions
        </motion.h2>
        <p className="text-lg text-gray-600 mb-8 text-center max-w-3xl mx-auto">
          Professional steel roofing solutions designed for New Zealand conditions. 
          Choose from our range of proven profiles and premium COLORSTEEL® finishes.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {roofProfiles.map((profile) => (
            <motion.article
              key={profile.key}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white rounded-lg shadow-lg overflow-hidden"
            >
              <div className="relative aspect-[16/10]">
                <Image 
                  src={profile.image} 
                  alt={profile.title} 
                  fill 
                  className="object-cover" 
                />
              </div>
              <div className="p-6">
                <div className="text-sm uppercase tracking-wide text-blue-600 font-semibold mb-2">
                  {profile.category}
                </div>
                <h3 className="font-bold text-xl text-gray-900 mb-3">
                  {profile.title}
                </h3>
                <p className="text-gray-600 mb-4">
                  {profile.blurb}
                </p>

                {/* Attribute icons */}
                <div className="mb-4 flex flex-wrap gap-2">
                  {(ATTRS[profile.category] || []).map((attr, i) => (
                    <motion.span
                      key={i}
                      initial={{ opacity: 0, y: 6 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.05 }}
                      className="inline-flex items-center gap-1 text-xs border border-blue-200 rounded-full px-3 py-1 text-blue-700 bg-blue-50"
                    >
                      {attr.icon}
                      <span>{attr.label}</span>
                    </motion.span>
                  ))}
                </div>

                {/* Bullets */}
                <ul className="text-sm text-gray-700 list-disc pl-5 mb-4 space-y-1">
                  {profile.bullets.map((bullet, i) => (
                    <li key={i}>{bullet}</li>
                  ))}
                </ul>

                <motion.a
                  href={profile.cta.href}
                  onClick={() => trackCTA(profile.title, profile.cta.href)}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-block w-full text-center px-6 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-colors"
                >
                  {profile.cta.label}
                </motion.a>
              </div>
            </motion.article>
          ))}
        </div>

        {/* COLORSTEEL Palette Section */}
        <div className="bg-white rounded-lg shadow-lg p-6">
          <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">
            COLORSTEEL® Color Options
          </h3>
          <p className="text-sm text-gray-600 mb-6 text-center">
            Choose from our range of premium COLORSTEEL® finishes. 
            Digital swatches are indicative only - request genuine samples for final selection.
          </p>
          
          {/* Color chips */}
          <div className="flex flex-wrap gap-2 mb-6 justify-center">
            {popularPalette.map((name) => (
              <span 
                key={name} 
                className="px-3 py-1 rounded-full border border-gray-200 text-xs text-gray-700 bg-gray-50 hover:bg-gray-100 transition-colors"
              >
                {name}
              </span>
            ))}
          </div>

          {/* Color swatches */}
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-4">
            {popularPalette.slice(0, 8).map((name) => (
              <div key={name} className="text-center">
                <div 
                  className="w-16 h-16 rounded-lg border-2 border-gray-200 mx-auto mb-2 shadow-sm"
                  style={{ backgroundColor: (COLORSTEEL as any)[name] }}
                  title={name}
                ></div>
                <div className="text-xs text-gray-600 font-medium">{name}</div>
                <code className="text-[10px] text-gray-500">{(COLORSTEEL as any)[name]}</code>
              </div>
            ))}
          </div>

          <p className="text-xs text-gray-500 mt-4 text-center">
            Digital swatches are indicative only. For final selection, request genuine COLORSTEEL® samples.
          </p>
        </div>
      </div>
    </section>
  );
}
