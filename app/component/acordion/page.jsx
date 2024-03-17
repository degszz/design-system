import { RobotoN, RobotoMono } from "../../../components/ui/fonts"
import { Card } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import Acordionn from '../../../components/comps/Acordion'


export default function Page() {
    return (
        <>
            <main className="mt-[48px] md:ml-[200px] flex flex-col items-center">
                <div className="my-2">
                    <h2 className={`${RobotoMono.className} antialiased`}>
                        Acordion
                    </h2>
                    <Tabs defaultValue="account" className="w-[400px]">
                        <TabsList>
                            <TabsTrigger value="account">Component</TabsTrigger>
                            <TabsTrigger value="password">Code</TabsTrigger>
                        </TabsList>
                        <TabsContent value="account">
                            <Card className="p-3">
                                <Acordionn />
                            </Card>
                        </TabsContent>
                        <TabsContent value="password">
                            <Card className="p-3">
                                <pre className="whitespace-pre-wrap">
                                    {`import {
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

export default Acordion`}
                                </pre>
                            </Card>
                        </TabsContent>
                    </Tabs>
                </div>
                <div className="my-2 w-[400px]">
                    <h2 className={`${RobotoMono.className} antialiased`}>Props</h2>
                    <Card className="p-3">
                        <pre className="whitespace-pre-wrap">
                            {`<Accordion className="w-[90%]" type="single" collapsible>
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
                </Accordion>`}
                        </pre>
                    </Card>
                </div>
            </main>
        </>
    )
}