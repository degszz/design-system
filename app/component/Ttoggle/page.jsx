import { RobotoN, RobotoMono } from "../../../components/ui/fonts"
import { Card } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import ThemeToggle from "@/components/comps/ThemeToggle"

export default function Page() {
    return (
        <>
            <main className="mt-[48px] md:ml-[200px] flex flex-col items-center">
                <div className="my-2">
                    <h2 className={`${RobotoMono.className} antialiased`}>
                        Theme Toggle
                    </h2>
                    <Tabs defaultValue="account" className="w-[400px]">
                        <TabsList>
                            <TabsTrigger value="account">Component</TabsTrigger>
                            <TabsTrigger value="password">Code</TabsTrigger>
                        </TabsList>
                        <TabsContent value="account">
                            <Card className="flex justify-center p-3">
                                <ThemeToggle />
                            </Card>
                        </TabsContent>
                        <TabsContent value="password">
                            <Card className="w-fit p-3">
                                <pre className="p-1 whitespace-pre-wrap">
                                    {`""use client";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button"

const ThemeToggle = () => {
    const [theme, setTheme] = useState("light")

    useEffect(() => {
        if (theme === "dark") {
            document.querySelector('html').classList.add('dark')
        } else {
            document.querySelector('html').classList.remove('dark')
        }
    }, [theme])

    const handleChangeTheme = () => {
        setTheme(prevTheme => prevTheme === "light" ? "dark" : "light")
    }

    return (
        <>
            <Button
                className='m-1 p-3 w-fit bg-black-50 hover:bg-black-100 dark:hover:bg-black-700 dark:bg-black-950  dark:text-white'
                onClick={handleChangeTheme}
            >
                <div>
                    <img className="w-6 h-6 dark:hidden " src="/icons8-luna-creciente-30.png" />
                    <img className=" w-6 h-6 hidden dark:block" src="/icons8-sol-30.png" />
                </div>
            </Button>
        </>

    )
}

export default ThemeToggle`}
                                </pre>
                            </Card>
                        </TabsContent>
                    </Tabs>
                </div>
                <div className="my-2 w-[400px]">
                    <h2 className={`${RobotoMono.className} antialiased`}>Props</h2>
                    <Card className="p-3">
                        <pre className=" whitespace-pre-wrap">
                            {`<Button className='m-1 p-3 w-fit bg-black-50 hover:bg-black-100 dark:hover:bg-black-700 dark:bg-black-950  dark:text-white'
onClick={handleChangeTheme}>
    <div>
        <img className="w-6 h-6 dark:hidden " src="/icons8-luna-creciente-30.png" />
        <img className=" w-6 h-6 hidden dark:block" src="/icons8-sol-30.png" />
    </div>
</Button>`}
                        </pre>
                    </Card>
                </div>
            </main>
        </>
    )
}