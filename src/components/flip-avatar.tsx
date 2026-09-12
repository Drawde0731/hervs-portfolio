"use client";

import { Download } from "lucide-react";

interface FlipAvatarProps {
  src: string;
  alt: string;
  resumeUrl: string;
}

export default function FlipAvatar({ src, alt, resumeUrl }: FlipAvatarProps) {
  return (
    <div className="group [perspective:1000px] size-20 md:size-36 cursor-pointer">
      <div className="relative w-full h-full transition-transform duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
        {/* Front */}
        <div className="absolute inset-0 [backface-visibility:hidden] dark:bg-white dark:rounded-2xl">
          <img
            src={src}
            alt={alt}
            className="w-full h-full object-contain"
          />
        </div>

        {/* Back */}
        <div className="absolute inset-0 [backface-visibility:hidden] [transform:rotateY(180deg)] flex items-center justify-center">
          <a
            href={resumeUrl}
            download="John Hervyne Diosemito_Resume.pdf"
            className="flex flex-col items-center gap-1 text-center group/dl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="rounded-full border-2 border-foreground/20 bg-background p-3 group-hover/dl:border-foreground/60 transition-colors">
              <Download className="size-5 md:size-7 text-foreground/60 group-hover/dl:text-foreground transition-colors" />
            </div>
            <span className="text-[10px] md:text-xs font-medium text-muted-foreground group-hover/dl:text-foreground transition-colors leading-tight">
              Get CV
            </span>
          </a>
        </div>
      </div>
    </div>
  );
}
