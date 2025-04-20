import { Button } from "@/components/ui/button.tsx";
import React from "react";

type LeadButtonProps = {
  children: React.ReactNode;
};

export default function LeadButton({ children }: LeadButtonProps) {
  return (
    <Button className='w-full transition-all cursor-pointer bg-emerald-500 hover:bg-emerald-700 h-14 hover:scale-110'>
      {children}
    </Button>
  );
}
