import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "./carousel";

import data from "@/data/testimonials.json";

type ITestimonial = {
  testimonial: string;
  author: {
    name: string;
    avatarUrl: string;
  };
};

const testimonials: ITestimonial[] = data;

export default function TestimonialsCarousel() {
  return (
    <Carousel
      className="w-full max-w-3xl mx-auto"
      opts={{
        align: "start",
        loop: true,
      }}
    >
      <CarouselContent>
        {testimonials.map(({ testimonial, author }, index) => (
          <CarouselItem
            key={index}
            className="md:basis-1/3 sm:basis-1/2 basis-full"
          >
            <div className="basis-full sm:basis-1/2 md:basis-1/3" key={index}>
              <div className="bg-zinc-800 hover:bg-zinc-700 transition-colors p-6 rounded-xl shadow-lg h-56 flex flex-col gap-4">
                <p className="text-zinc-300 italic flex-grow">
                  "{testimonial}"
                </p>
                <div className="flex items-center justify-center gap-3">
                  <img
                    src={author.avatarUrl}
                    alt="Imagem da Mentora"
                    className="rounded-full shadow-xl h-10 w-10"
                    loading="lazy"
                    onError={(e) => {
                      (e.target as HTMLImageElement).src =
                        "https://avatars.githubusercontent.com/u/32311268?v=4"; // todo trocar default avatar
                    }}
                  />
                  <p className="text-zinc-300 text-sm">
                    <span className="font-semibold text-white">
                      {author.name}
                    </span>
                    <br />
                    <span className="text-xs text-zinc-400">Mentorado</span>
                  </p>
                </div>
              </div>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>

      <CarouselPrevious className="bg-zinc-800 text-white hover:bg-purple-600 hover:text-white transition-colors shadow-md h-10 w-10 rounded-full cursor-pointer hidden lg:flex" />
      <CarouselNext className="bg-zinc-800 text-white hover:bg-purple-600 hover:text-white transition-colors shadow-md h-10 w-10 rounded-full cursor-pointer hidden lg:flex" />
    </Carousel>
  );
}
