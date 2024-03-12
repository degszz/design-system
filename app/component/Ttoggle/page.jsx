import { RobotoN, RobotoMono } from "../../../components/ui/fonts"
import { Card } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import ThemeToggle from "@/components/comps/ThemeToggle"

export default function Page() {
    return (
        <>
            <main className="mt-[48px] md:ml-[200px] flex flex-col items-center">
                <div >
                    <h2 className={`${RobotoMono.className} antialiased text-center md:text-start`}>
                        Theme Toggle
                    </h2>
                    <Tabs defaultValue="account" className="max-w-fit md:w-[500px]">
                        <TabsList>
                            <TabsTrigger value="account">Component</TabsTrigger>
                            <TabsTrigger value="password">Code</TabsTrigger>
                        </TabsList>
                        <TabsContent value="account">
                            <Card className="flex justify-center p-3">
                                <ThemeToggle/>
                            </Card>
                        </TabsContent>
                        <TabsContent value="password">
                            <Card className="p-3">
                                <pre className="whitespace-pre-wrap">
                                    {`"use client";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button"

const ThemeToggle = () => {
    const [darkMode, setDarkMode] = useState(true)

    useEffect(() => {
        const theme = localStorage.getItem("theme")
        if (theme === "dark") setDarkMode(false)
    }, [])

    useEffect(() => {
        if (darkMode) {
            document.documentElement.classList.add('dark')
            localStorage.setItem("theme", "dark")
        } else {
            document.documentElement.classList.remove('dark')
            localStorage.setItem("theme", "light")
        }

    }, [darkMode])

    return (
        <>
            <Button
                className='m-1 p-3 w-fit bg-black-50 hover:bg-black-100 dark:hover:bg-black-700 dark:bg-black-950  dark:text-white'
                onClick={() => setDarkMode(!darkMode)}
            >
                <div>
                    <img className="w-6 h-6 dark:hidden " src="/icons8-luna-creciente-30.png"/>
                    <img className=" w-6 h-6 hidden dark:block" src="/icons8-sol-30.png"/>
                </div>
            </Button>
        </>

    )
}

export default ThemeToggle`}
                                </pre>                            </Card>
                        </TabsContent>
                    </Tabs>
                </div>
            </main>
        </>
    )
}