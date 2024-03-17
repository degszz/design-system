import { RobotoN, RobotoMono } from "../../../components/ui/fonts"
import { Card } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import Cardd from '../../../components/comps/Card'

export default function Page() {
    return (
        <>
            <main className="mt-[48px] md:ml-[200px] flex flex-col items-center">
                <div className="my-2">
                    <h2 className={`${RobotoMono.className} antialiased`}>
                        Card
                    </h2>
                    <Tabs defaultValue="account" className="w-[400px]">
                        <TabsList>
                            <TabsTrigger value="account">Component</TabsTrigger>
                            <TabsTrigger value="password">Code</TabsTrigger>
                        </TabsList>
                        <TabsContent value="account">
                            <Card className="p-6 flex justify-center">
                                <Cardd />
                            </Card>
                        </TabsContent>
                        <TabsContent value="password">
                            <Card className="p-3">
                                <pre className="max-w-fit whitespace-pre-wrap">
                                    {`const Card = () => {
    return (
        <>
            <div className="flex flex-col items-center m-1 p-4 border rounded">
                <svg xmlns="http://www.w3.org/2000/svg" width="70" height="70" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-shirt"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M15 4l6 2v5h-3v8a1 1 0 0 1 -1 1h-10a1 1 0 0 1 -1 -1v-8h-3v-5l6 -2a3 3 0 0 0 6 0" /></svg>
                <p>Shirt</p>
            </div>
        </>
    )
}

export default Card`}
                                </pre>
                            </Card>
                        </TabsContent>
                    </Tabs>
                </div>
                <div className="my-2 w-[400px]">
                    <h2 className={`${RobotoMono.className} antialiased`}>Props</h2>
                    <Card className="p-3">
                        <pre className="whitespace-pre-wrap">
                            {`<div className="flex flex-col items-center m-1 p-4 border rounded">
    <svg/></svg>
    <p>Shirt</p>
</div>`}
                        </pre>
                    </Card>
                </div>
            </main>
        </>
    )
}