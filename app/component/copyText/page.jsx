import { RobotoN, RobotoMono } from "../../../components/ui/fonts"
import { Card } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import CopyText from '../../../components/comps/CopyText'

export default function Page() {
    return (
        <>
            <main className="mt-[48px] md:ml-[200px] flex flex-col items-center">
                <div className="my-2">
                    <h2 className={`${RobotoMono.className} antialiased`}>
                        Copy Text
                    </h2>
                    <Tabs defaultValue="account" className="w-[400px]">
                        <TabsList>
                            <TabsTrigger value="account">Component</TabsTrigger>
                            <TabsTrigger value="password">Code</TabsTrigger>
                        </TabsList>
                        <TabsContent value="account">
                            <Card className="p-6 flex justify-center">
                                <div className="container mx-auto">
                                    <h1 className="text-2xl font-bold mb-4">Ejemplo de Copiar y Pegar</h1>
                                    <CopyText />
                                </div>
                            </Card>
                        </TabsContent>
                        <TabsContent value="password">
                            <Card className="p-3">
                                <pre className="max-w-fit whitespace-pre-wrap">
                                    {``}
                                </pre>
                            </Card>
                        </TabsContent>
                    </Tabs>
                </div>
                <div className="my-2 w-[400px]">
                    <h2 className={`${RobotoMono.className} antialiased`}>Props</h2>
                    <Card className="p-3">
                        <pre className="whitespace-pre-wrap">
                            {``}
                        </pre>
                    </Card>
                </div>
            </main>
        </>
    )
}