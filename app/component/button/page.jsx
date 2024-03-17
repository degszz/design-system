import { RobotoN, RobotoMono } from "../../../components/ui/fonts"
import { Card } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import Buttonn from '../../../components/comps/Button'

export default function Page() {
    return (
        <>
            <main className="mt-[48px] md:ml-[200px] flex flex-col items-center">
                <div className="my-2">
                    <h2 className={`${RobotoMono.className} antialiased`}>
                        Button
                    </h2>
                    <Tabs defaultValue="account" className="w-[400px]">
                        <TabsList>
                            <TabsTrigger value="account">Component</TabsTrigger>
                            <TabsTrigger value="password">Code</TabsTrigger>
                        </TabsList>
                        <TabsContent value="account">
                            <Card className="p-6 flex justify-center">
                                <Buttonn />
                            </Card>
                        </TabsContent>
                        <TabsContent value="password">
                            <Card className="p-3">
                                <pre className="max-w-fit whitespace-pre-wrap">
                                    {`const Button = () => {

return (
    <>
        <button className='flex-row justify-center text-black cursor-pointer hover:bg-black-600 hover:text-white focus:ring-2 focus:outline-none focus:ring-black-300 font-medium rounded-lg px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-black-300 mr-2 mb-2 hover:shadow-lg transition-all duration-200 ease-in-out hover:scale-110 scale-90 gap-x-2 opacity-90 hover:opacity-100'>
            Button
        </button>
    </>

)
}

export default Button`}
                                </pre>
                            </Card>
                        </TabsContent>
                    </Tabs>
                </div>
                <div className="my-2 w-[400px]">
                    <h2 className={`${RobotoMono.className} antialiased`}>Props</h2>
                    <Card className="p-3">
                        <pre className="whitespace-pre-wrap">
                            {`<button className='flex-row justify-center text-black cursor-pointer hover:bg-black-600 hover:text-white focus:ring-2 focus:outline-none focus:ring-black-300 font-medium rounded-lg px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-black-300 mr-2 mb-2 hover:shadow-lg transition-all duration-200 ease-in-out hover:scale-110 scale-90 gap-x-2 opacity-90 hover:opacity-100'>
    Button
</button>`}
                        </pre>
                    </Card>
                </div>
            </main>
        </>
    )
}