import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"

const Acordion = () => {
    return (
        <>
            <div className="flex flex-col items-center m-1 p-4 border rounded">
                <Accordion className="w-[90%]" type="single" collapsible>
                    <AccordionItem value="item-1">
                        <AccordionTrigger># 1</AccordionTrigger>
                        <AccordionContent>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore itaque beatae omnis aperiam. Dolorum quia neque consequuntur eligendi expedita ullam nulla, cumque enim deleniti, sapiente a cum laborum deserunt ea.
                        </AccordionContent>
                    </AccordionItem>
                </Accordion>
                <Accordion className="w-[90%]" type="single" collapsible>
                    <AccordionItem value="item-1">
                        <AccordionTrigger># 2</AccordionTrigger>
                        <AccordionContent>
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Architecto tenetur nulla distinctio aliquam iste, culpa, et maxime animi dignissimos, quasi est voluptate quaerat cumque quia praesentium eveniet dolorum quae dolorem?
                        </AccordionContent>
                    </AccordionItem>
                </Accordion>
                <Accordion className="w-[90%]" type="single" collapsible>
                    <AccordionItem value="item-1">
                        <AccordionTrigger># 3</AccordionTrigger>
                        <AccordionContent>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores molestiae cumque corrupti iure, optio rerum beatae magnam ex fugit soluta, cum ipsam libero est possimus accusantium nobis ullam nihil distinctio!
                        </AccordionContent>
                    </AccordionItem>
                </Accordion>
            </div>
        </>
    )
}

export default Acordion