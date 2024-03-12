"use client";
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

export default ThemeToggle