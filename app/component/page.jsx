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
                    <p className={`${RobotoN.className} antialiased max-w-xl m-4 text-center md:text-start`}>
                        The components will be styled with Tailwind using classes, so you simply have to copy and paste.
                    </p>
                    <div className="flex justify-center">
                        <Carousel
                            opts={{
                                align: "start",
                            }}
                            className="w-full max-w-sm p-3"
                        >
                            <CarouselContent>
                                <CarouselItem className="md:basis-1/2 lg:basis-1/3">
                                    <div className="p-1">
                                        <Card>
                                            <CardContent className="flex flex-col md:aspect-square items-center justify-center p-3">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-brand-tailwind"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M11.667 6c-2.49 0 -4.044 1.222 -4.667 3.667c.933 -1.223 2.023 -1.68 3.267 -1.375c.71 .174 1.217 .68 1.778 1.24c.916 .912 2 1.968 4.288 1.968c2.49 0 4.044 -1.222 4.667 -3.667c-.933 1.223 -2.023 1.68 -3.267 1.375c-.71 -.174 -1.217 -.68 -1.778 -1.24c-.916 -.912 -1.975 -1.968 -4.288 -1.968zm-4 6.5c-2.49 0 -4.044 1.222 -4.667 3.667c.933 -1.223 2.023 -1.68 3.267 -1.375c.71 .174 1.217 .68 1.778 1.24c.916 .912 1.975 1.968 4.288 1.968c2.49 0 4.044 -1.222 4.667 -3.667c-.933 1.223 -2.023 1.68 -3.267 1.375c-.71 -.174 -1.217 -.68 -1.778 -1.24c-.916 -.912 -1.975 -1.968 -4.288 -1.968z" /></svg>
                                                <p>Tailwind</p>
                                            </CardContent>
                                        </Card>
                                    </div>
                                </CarouselItem>
                                <CarouselItem className="md:basis-1/2 lg:basis-1/3">
                                    <div className="p-1">
                                        <Card>
                                            <CardContent className="flex flex-col md:aspect-square items-center justify-center p-3">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-brand-nextjs"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M9 15v-6l7.745 10.65a9 9 0 1 1 2.255 -1.993" /><path d="M15 12v-3" /></svg>
                                                <p>Next.js</p>
                                            </CardContent>
                                        </Card>
                                    </div>
                                </CarouselItem>
                                <CarouselItem className="md:basis-1/2 lg:basis-1/3">
                                    <div className="p-1">
                                        <Card>
                                            <CardContent className="flex flex-col md:aspect-square items-center justify-center p-3">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-wash-dry-shade"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M3 3m0 3a3 3 0 0 1 3 -3h12a3 3 0 0 1 3 3v12a3 3 0 0 1 -3 3h-12a3 3 0 0 1 -3 -3z" /><path d="M3 11l8 -8" /><path d="M3 17l14 -14" /></svg>
                                                <p>Shadcn/ui</p>
                                            </CardContent>
                                        </Card>
                                    </div>
                                </CarouselItem>
                            </CarouselContent>
                            <CarouselPrevious />
                            <CarouselNext />
                        </Carousel>
                    </div>
                    <div className="w-full flex flex-col items-center">
                        <Accordion className="w-[90%]" type="single" collapsible>
                            <AccordionItem value="item-1">
                                <AccordionTrigger>how does it work?</AccordionTrigger>
                                <AccordionContent>
                                    This system is used by copying the design into the <br />
                                    class property, and pasting it onto your project.
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
                                <AccordionTrigger>How to install tailwind in my project?</AccordionTrigger>
                                <AccordionContent>
                                In this link you will find the procedure <a target="_blank" href="https://tailwindcss.com/docs/installation"><b>https://tailwindcss.com/docs/installation</b></a>, <br /> or within the terminal by executing <b>npm install -D tailwindcss</b>.
                                </AccordionContent>
                            </AccordionItem>
                        </Accordion>
                    </div>
                </div>
            </main>
        </>
    )
}