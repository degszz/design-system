import { RobotoN, RobotoMono } from "../../components/ui/fonts"
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"
import { Card, CardContent } from "@/components/ui/card"
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"


export default function Introduction() {
    return (
        <>
            <main className="mt-[48px] md:ml-[200px] flex flex-col items-center h-full dark:bg-black-950 ">
                <div >
                    <h1 className={`${RobotoMono.className} antialiased text-center md:text-start`}>
                        Introduction
                    </h1>
                    <p className={`${RobotoN.className} antialiased max-w-lg text-center md:text-start`}>
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsam commodi natus doloremque, atque facere laboriosam, quia aut nemo illo magni et ullam sequi, hic error velit officiis. Laudantium, minus debitis.
                    </p>
                    <div className="flex justify-center">
                        <Carousel
                            opts={{
                                align: "start",
                            }}
                            className="w-full max-w-sm p-3"
                        >
                            <CarouselContent>
                                {Array.from({ length: 5 }).map((_, index) => (
                                    <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                                        <div className="p-1">
                                            <Card>
                                                <CardContent className="flex aspect-square items-center justify-center p-6">
                                                    <span className="text-3xl font-semibold">{index + 1}</span>
                                                </CardContent>
                                            </Card>
                                        </div>
                                    </CarouselItem>
                                ))}
                            </CarouselContent>
                            <CarouselPrevious />
                            <CarouselNext />
                        </Carousel>
                    </div>
                    <div className="w-full flex flex-col items-center">
                        <Accordion className="w-[90%]" type="single" collapsible>
                            <AccordionItem value="item-1">
                                <AccordionTrigger>#1 ?</AccordionTrigger>
                                <AccordionContent>
                                    Yes. It adheres to the WAI-ARIA design pattern.
                                </AccordionContent>
                            </AccordionItem>
                        </Accordion>
                        <Accordion className="w-[90%]" type="single" collapsible>
                            <AccordionItem value="item-1">
                                <AccordionTrigger>#2 ?</AccordionTrigger>
                                <AccordionContent>
                                    Yes. It adheres to the WAI-ARIA design pattern.
                                </AccordionContent>
                            </AccordionItem>
                        </Accordion>
                        <Accordion className="w-[90%]" type="single" collapsible>
                            <AccordionItem value="item-1">
                                <AccordionTrigger>#3 ?</AccordionTrigger>
                                <AccordionContent>
                                    Yes. It adheres to the WAI-ARIA design pattern.
                                </AccordionContent>
                            </AccordionItem>
                        </Accordion>
                    </div>
                </div>
            </main>
        </>
    )
}