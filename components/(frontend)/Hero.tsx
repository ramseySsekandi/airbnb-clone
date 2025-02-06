import React from 'react'
import ResidenceCard from '../ResidenceCard'
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '../ui/carousel'
import { Card,CardContent } from '../ui/card'
import { House, SlidersHorizontal, ToggleLeft } from 'lucide-react'
import { fetchCategories } from '@/app/actions/actions'

const Hero = async () => {
    const  data= {
        icon:House
    }
    const categories = await fetchCategories()
    const Icon=data.icon
    
  return (
    <section className='w-full px-10 '>
        {/* CATEGORIES */}
        <div className="container w-full flex justify-between mb-2 border-t-[1px] shadow-sm">
        {/* Carousel */}
            <Carousel className="w-[70%]">
            <CarouselContent className="-ml-1">
                {categories.map((category, index) => (
                <CarouselItem key={index} className="pl-0 basis-14">
                    <div className="p-1">
                    <Card className='border-0 rounded-none text-card-foreground shadow-none'>
                        <CardContent className="flex flex-col aspect-square items-center justify-center p-1 ">
                        <button className='flex flex-col gap-1 items-center text-center text-gray-500 justify-center hover:text-black '>
                        <span className="">{ <Icon size={18} />}</span>
                        <p className='text-xs '>{category.title}</p>
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
            <button className='flex justify-center gap-1 items-center border border-gray-300 rounded-md text-black hover:bg-gray-200 hover:border-black px-1 py-[10px]'><SlidersHorizontal size={16}/>Filters</button>
            <button className='flex justify-center gap-1 items-center border border-gray-300 rounded-md text-black hover:bg-gray-200 hover:border-black px-1 py-[10px]'><span>Display  total before taxes</span><ToggleLeft size={16}/></button>
        </div>
        </div>
        {/* CARDS */}
        <div className="md:grid grid-cols-4 gap-2">
        {Array.from({length: 20}).map((card, i)=>(
        <ResidenceCard key={i}/>
        ))}
        </div>
    </section>
  )
}

export default Hero