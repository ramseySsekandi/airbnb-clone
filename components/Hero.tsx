import React from 'react'
import ResidenceCard from './ResidenceCard'
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from './ui/carousel'
import { Card,CardContent } from './ui/card'
import { Filter, House } from 'lucide-react'

const Hero = () => {
  return (
    <section className='border-t-[1px] w-full px-10'>
        {/* CATEGORIES */}
        <div className="container w-full flex justify-between">
        {/* Carousel */}
            <Carousel className="w-[70%]">
            <CarouselContent className="-ml-1">
                {Array.from({ length: 30 }).map((_, index) => (
                <CarouselItem key={index} className="pl-0 basis-12">
                    <div className="p-1">
                    <Card className='border-0 rounded-none text-card-foreground shadow-none'>
                        <CardContent className="flex flex-col aspect-square items-center justify-center p-1 ">
                        <button className='flex flex-col gap-1 items-center text-center text-gray-500 justify-center hover:text-black '>
                        <span className=""><House size={18} /></span>
                        <p className='text-xs '>House</p>
                        </button>
                        </CardContent>
                    </Card>
                    </div>
                </CarouselItem>
                ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
            </Carousel>
        {/* Categories Buttons */}
        <div className="text-xs flex justify-between items-center gap-4">
            <button className='flex justify-center gap-1 items-center border border-gray-300 rounded-md text-black hover:bg-gray-200 hover:border-black px-1 py-[10px]'><Filter size={16}/>Filters</button>
            <button className='flex justify-center gap-1 items-center border border-gray-300 rounded-md text-black hover:bg-gray-200 hover:border-black px-1 py-[10px]'><span>Display  total before taxes</span><Filter size={16}/></button>
        </div>
        </div>
        {/* CARDS */}
        <ResidenceCard />
    </section>
  )
}

export default Hero