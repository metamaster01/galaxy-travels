"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

/**
 * Unsplash sources — swap these for your own shoot when ready.
 * Two images per tile: they crossfade on an independent loop so the
 * whole collage stays alive without ever cutting in sync (feels like
 * a slow video wall, not a slideshow).
 */
const TILES: { images: string[]; alt: string }[] = [
  {
    alt: "Misty river winding through green mountains",
    images: [
      "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=1200&auto=format&fit=crop",
    ],
  },
  {
    alt: "Hot air balloons drifting over a valley at dawn",
    images: [
      "https://images.unsplash.com/photo-1519046904884-53103b34b206?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?q=80&w=1200&auto=format&fit=crop",
    ],
  },
  {
    alt: "Turquoise coastline seen from above",
    images: [
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1544551763-46a013bb70d5?q=80&w=1200&auto=format&fit=crop",
    ],
  },
  {
    alt: "Traveller looking out over a mountain lake",
    images: [
      "https://images.unsplash.com/photo-1488646953014-85cb44e25828?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1469474968028-56623f02e42e?q=80&w=1200&auto=format&fit=crop",
    ],
  },
  {
    alt: "Golden hour over a winding desert road",
    images: [
      "https://images.unsplash.com/photo-1533105079780-92b9be482077?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1524492412937-b28074a5d7da?q=80&w=1200&auto=format&fit=crop",
    ],
  },
];

// Which tiles show on mobile (index into TILES) — keeps the banner from feeling cramped
const MOBILE_VISIBLE = new Set([0, 1, 3]);

export function ImageCollage() {
  const rootRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tiles = gsap.utils.toArray<HTMLElement>(".collage-tile");

      // Entrance: staggered reveal, each tile rises + unmasks
      gsap.set(tiles, { autoAlpha: 0, scale: 1.12, clipPath: "inset(12% round 0px)" });
      gsap.to(tiles, {
        autoAlpha: 1,
        scale: 1,
        clipPath: "inset(0% round 0px)",
        duration: 1.1,
        ease: "power3.out",
        stagger: 0.12,
      });

      // Ambient ken-burns drift on every image layer, offset per tile
      gsap.utils.toArray<HTMLElement>(".collage-img").forEach((img, i) => {
        gsap.to(img, {
          scale: 1.08,
          duration: 9 + (i % 3),
          ease: "sine.inOut",
          yoyo: true,
          repeat: -1,
          delay: i * 0.3,
        });
      });

      // Independent crossfade loop per tile between its two images
      tiles.forEach((tile, i) => {
        const layers = tile.querySelectorAll<HTMLElement>(".collage-img");
        if (layers.length < 2) return;
        const tl = gsap.timeline({
          repeat: -1,
          delay: 1.4 + i * 0.9, // stagger so tiles never swap in unison
        });
        tl.to(layers[1], { autoAlpha: 1, duration: 1.6, ease: "power2.inOut" }, 4)
          .to(layers[1], { autoAlpha: 0, duration: 1.6, ease: "power2.inOut" }, 9);
      });
    }, rootRef);

    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={rootRef}
      className="absolute inset-0 grid grid-cols-3 grid-rows-2 gap-1.5 p-1.5 sm:gap-2 sm:p-2 md:grid-cols-6 md:grid-rows-4"
    >
      {TILES.map((tile, i) => (
        <div
          key={tile.alt}
          className={[
            "collage-tile relative overflow-hidden rounded-2xl bg-forest/40 md:rounded-3xl",
            i === 0
              ? "col-span-1 row-span-2 md:col-span-2 md:col-start-1 md:row-span-4 md:row-start-1"
              : i === 1
                ? "col-span-2 col-start-2 row-span-1 md:col-span-2 md:col-start-3 md:row-span-2 md:row-start-1"
                : i === 2
                  ? "hidden md:col-span-2 md:col-start-5 md:row-span-2 md:row-start-1 md:block"
                  : i === 3
                    ? "col-span-2 col-start-2 row-span-1 md:col-span-2 md:col-start-3 md:row-span-2 md:row-start-3"
                    : "hidden md:col-span-2 md:col-start-5 md:row-span-2 md:row-start-3 md:block",
            !MOBILE_VISIBLE.has(i) ? "max-md:hidden" : "",
          ].join(" ")}
        >
          {tile.images.map((src, layerIdx) => (
            <img
              key={src}
              src={src}
              alt={layerIdx === 0 ? tile.alt : ""}
              aria-hidden={layerIdx !== 0}
              className="collage-img absolute inset-0 h-full w-full object-cover"
              style={{ opacity: layerIdx === 0 ? 1 : 0 }}
              loading={i < 2 ? "eager" : "lazy"}
            />
          ))}
        </div>
      ))}
    </div>
  );
}