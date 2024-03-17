"use client";
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

export default ThemeToggle