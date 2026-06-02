"use client";
import React from "react";
import { useTheme } from "./ThemeProvider";

interface ToolIframeProps {
  slug: string;
  title: string;
}

export default function ToolIframe({ slug, title }: ToolIframeProps) {
  const { theme } = useTheme();

  return (
    <iframe
      src={`/tools/${slug}.html?theme=${theme}&embed=true`}
      className="w-full h-[calc(100%-48px)] border-none"
      title={title}
      sandbox="allow-scripts allow-same-origin allow-popups allow-modals"
      aria-label={title}
    />
  );
}
