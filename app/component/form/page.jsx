import { RobotoN, RobotoMono } from "../../../components/ui/fonts"
import { Card } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function Page() {
    return (
        <>
            <main className="mt-[48px] md:ml-[200px] flex flex-col items-center ">
                <div >
                    <h2 className={`${RobotoMono.className} antialiased`}>
                        Form
                    </h2>
                    <Tabs defaultValue="account" className="w-[400px]">
                        <TabsList>
                            <TabsTrigger value="account">Component</TabsTrigger>
                            <TabsTrigger value="password">Code</TabsTrigger>
                        </TabsList>
                        <TabsContent value="account">
                            <Card className="p-3">
                                <p>1 Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae maiores ratione repellendus provident nobis. Pariatur, sunt commodi? Nihil iste, hic labore id dignissimos consectetur, qui nesciunt quae a optio quo?</p>
                            </Card>
                        </TabsContent>
                        <TabsContent value="password">
                            <Card className="p-3">
                                <pre className="whitespace-pre-wrap">
                                    {`export default Name (){
    return(
        <>
            <div>

            </div>
        </>                                 
    )
}`}
                                </pre>                            </Card>
                        </TabsContent>
                    </Tabs>
                </div>
            </main>
        </>
    )
}