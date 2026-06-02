"use client";
import React, { useEffect, useState } from "react";

interface AddressBarProps {
  slug: string;
}

export default function AddressBar({ slug }: { slug: string }) {
  const [url, setUrl] = useState(`https://nexagrowth.com/tools/${slug}`);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const origin = window.location.origin;
      setUrl(`${origin}/tools/${slug}`);
    }
  }, [slug]);

  return (
    <div className="text-[11px] text-foreground/35 font-mono select-all bg-black/20 border border-glass-border px-4 py-0.5 rounded-md max-w-[200px] sm:max-w-none truncate">
      {url}
    </div>
  );
}
