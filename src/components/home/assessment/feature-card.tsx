"use client"
import { useEffect } from "react";
import Image from "next/image";
import { Card, CardContent } from "../../ui/card";
import Aos from "aos";

interface FeatureCardProps {
  caption: string;
  imageQuery: string;
  delay?: number;
}

export function FeatureCard({ caption, imageQuery, delay }: FeatureCardProps) {
  useEffect(() => {
    Aos.init()
  }, [])
  return (
    <div 
      data-aos="fade-down" 
      data-aos-delay={delay}
      className="flex flex-col gap-4"
    >
      <Card className="overflow-hidden border-none shadow-none p-0 bg-[#F8FAFB] aspect-4/5 relative">
        <CardContent className="p-0 shadow-none h-full flex items-center justify-center">
          <Image
            src={imageQuery}
            alt={caption}
            width={300}
            height={600}
            className="w-full h-full object-cover"
          />
        </CardContent>
      </Card>
      <p className="text-center max-w-62.5 mx-auto text-sm font-medium leading-tight px-2 text-[#333333]">
        {caption}
      </p>
    </div>
  );
}
