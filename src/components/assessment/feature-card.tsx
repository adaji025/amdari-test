import Image from "next/image";
import { Card, CardContent } from "../ui/card";

interface FeatureCardProps {
  caption: string;
  imageQuery: string;
}

export function FeatureCard({ caption, imageQuery }: FeatureCardProps) {
  return (
    <div className="flex flex-col gap-4">
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
