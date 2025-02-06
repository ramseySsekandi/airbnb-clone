"use client";

import { Star } from "lucide-react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { useRef, useState, useEffect } from "react";
import type { CarouselApi } from "@/components/ui/carousel";

const ResidenceCard = () => {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!api) {
      return;
    }

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap() + 1);

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);

  const images = [
    {
      src: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
      alt: "Modern house with large windows and a pool",
    },
    {
      src: "https://images.unsplash.com/photo-1542718610-a1d656d1884c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
      alt: "Cozy cabin in the woods",
    },
    {
      src: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
      alt: "Luxurious beachfront property",
    },
    {
      src: "https://images.unsplash.com/photo-1518780664697-55e3ad937233?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
      alt: "Charming countryside cottage",
    },
  ];

  return (
    <div className='pl-1'>
      <Card className="w-full max-w-md border-0 rounded-none text-card-foreground shadow-none">
      <CardContent className="p-0">
        <Carousel setApi={setApi} className="w-full">
          <CarouselContent>
            {images.map((image, index) => (
              <CarouselItem key={index}>
                <div className="relative aspect-[4/4]">
                  <img
                    alt={image.alt}
                    className="object-cover w-full h-full rounded-lg"
                    src={image.src}
                  />
                {/* Navigation Dots */}
                <div className="flex justify-center gap-2 mt-4 pb-2 absolute bottom-5 left-0 right-0">
          {Array.from({ length: count }).map((_, index) => (
            <button
              key={index}
              className={`w-[6px] h-[6px] rounded-full transition-all ${
                index + 1 === current ? "bg-white" : "bg-zinc-400"
              }`}
              onClick={() => api?.scrollTo(index)}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
        
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="left-2 text-slate-900" />
          <CarouselNext className="right-2 text-slate-900" />
        </Carousel>
        
      </CardContent>
      <div className="p-2  space-y-2">
        <CardHeader className="p-0">
          <div className="flex items-center justify-between">
            <h2 className="text-xs font-semibold">Forde, Norway</h2>
            <div className="flex items-center gap-1">
              <Star className="w-3 h-3 fill-current text-black" />
              <span className="text-xs">4.78</span>
            </div>
          </div>
        </CardHeader>
        <div className="">
          <p className="text-zinc-400 text-xs">
            Stay with Name , Receptionist
          </p>
          <p className="text-zinc-400 text-xs">
            Oct 1-6
          </p>
          {/* Price */}
        </div>
          <div className="flex items-center justify-between">
           <div className="">
           <h2 className="text-xs font-semibold">UShs789,990 <span className="font-normal">night</span></h2>
           </div>
          </div>
      </div>
    </Card>
    </div>
  )
}

export default ResidenceCard