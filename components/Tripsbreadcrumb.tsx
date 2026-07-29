"use client";

import { useRouter } from "next/navigation";
import { ArrowLeft } from "lucide-react";

export function TripBreadcrumb() {
  const router = useRouter();

  return (
    <div className="flex items-center gap-4 font-sans text-sm">
      <a href="/" className="text-cream/50 transition-colors hover:text-cream">
        Home
      </a>
      <button
        type="button"
        onClick={() => router.back()}
        className="inline-flex items-center gap-1.5 text-cream/50 transition-colors hover:text-cream"
      >
        <ArrowLeft className="h-3.5 w-3.5" />
        Back
      </button>
    </div>
  );
}