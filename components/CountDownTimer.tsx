"use client";

import { useEffect, useState } from "react";

function getRemaining(target: string) {
  const diff = new Date(target).getTime() - Date.now();
  if (diff <= 0) return null;

  const totalSeconds = Math.floor(diff / 1000);
  return {
    days: Math.floor(totalSeconds / 86400),
    hours: Math.floor((totalSeconds % 86400) / 3600),
    minutes: Math.floor((totalSeconds % 3600) / 60),
    seconds: totalSeconds % 60,
  };
}

function pad(n: number) {
  return n.toString().padStart(2, "0");
}

export function CountdownTimer({ endsAt }: { endsAt: string }) {
  // Both start unset so the server-rendered markup and first client render
  // match (avoids a hydration mismatch from Date.now() differing between
  // the two) — the real value is filled in immediately after mount.
  const [mounted, setMounted] = useState(false);
  const [remaining, setRemaining] = useState<ReturnType<typeof getRemaining>>(null);

  useEffect(() => {
    setMounted(true);
    setRemaining(getRemaining(endsAt));
    const id = setInterval(() => setRemaining(getRemaining(endsAt)), 1000);
    return () => clearInterval(id);
  }, [endsAt]);

  if (!mounted) {
    return (
      <p className="font-sans text-xs font-semibold tracking-wide text-gold">
        Time Remaining: --d : --h : --m : --s
      </p>
    );
  }

  if (remaining === null) {
    return (
      <p className="font-sans text-xs font-semibold tracking-wide text-gold">
        Offer has ended
      </p>
    );
  }

  return (
    <p className="font-sans text-xs font-semibold tracking-wide text-gold">
      Time Remaining: {pad(remaining.days)}d : {pad(remaining.hours)}h :{" "}
      {pad(remaining.minutes)}m : {pad(remaining.seconds)}s
    </p>
  );
}