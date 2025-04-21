import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";
import React from "react";

type MainButtonProps = {
  children: React.ReactNode;
  href?: string;
  badge?: string;
};

export default function MainButton({ children, href, badge }: MainButtonProps) {
  const isExternal = href && href.startsWith("http");
  const commonClasses =
    "w-full h-14 cursor-pointer transition-transform duration-300 ease-in-out bg-emerald-500 hover:bg-emerald-700 hover:scale-105 focus:ring-2 focus:ring-emerald-400 focus:ring-offset-2 relative";

  if (href) {
    return (
      <a
        href={href}
        className={commonClasses + " flex items-center justify-center rounded-md no-underline gap-2"}
        role="button"
        target={isExternal ? "_blank" : undefined}
        rel={isExternal ? "noreferrer" : undefined}
      >
        {badge && (
          <span className="absolute top-0 right-0 -mt-2 -mr-2 bg-purple-600 text-white text-xs font-bold px-2 py-0.5 rounded-full shadow-md">
            {badge}
          </span>
        )}
        {children}
        {isExternal && <ExternalLink />}
      </a>
    );
  }

  return (
    <Button className={commonClasses}>
      {badge && (
        <span className="absolute top-0 right-0 -mt-2 -mr-2 bg-purple-600 text-white text-xs font-bold px-2 py-0.5 rounded-full shadow-md">
          {badge}
        </span>
      )}
      {children}
    </Button>
  );
}
