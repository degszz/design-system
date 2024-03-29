import Link from "next/link"
import { RobotoN, RobotoMono } from "../components/ui/fonts"
import ThemeToggle from './ThemeToggle'
import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet"
import { Button } from "@/components/ui/button"


export default function Header() {

    const links = {
        Home: {
            label: 'Home',
            route: '/',
        },
        Contact: {
            label: 'Contact',
            route: '/dashboard/contact',
        },
    }
    const links2 = {
        Introduction: {
            label: 'Introduction',
            route: '/component',
        },
        Acordion: {
            label: 'Acordion',
            route: '/component/acordion',
        },
        Button: {
            label: 'Button',
            route: '/component/button',
        },
        Card: {
            label: 'Card',
            route: '/component/card',
        },
        Form: {
            label: 'Form',
            route: '/component/form',
        },
        Ttoggle: {
            label: 'ThemeToggle',
            route: '/component/Ttoggle',
        },
    }
    const links3 = {
        Home: {
            label: 'Home',
            route: '/',
        },
        Comps: {
            label: 'Components',
            route: '/component',
        },
        Dash: {
            label: 'Contact',
            route: '/dashboard/contact',
        },
    }
    const side = ["left"]

    return (
        <div class='flex z-10 w-full justify-between fixed h-12 backdrop-blur-md border-b-2 border-black-900'>
            <div className="flex justify-around w-fit md:w-1/2 lg:w-1/3 items-center">
                <Sheet className="dark:fill-white dark:hover:bg-black-700" key={side}>
                    <SheetTrigger className="m-1 border" asChild>
                        <Button className="border-none md:hidden bg-black-50 hover:bg-black-100 dark:bg-black-950 dark:hover:bg-black-700" variant="outline">
                            <svg xmlns="http://www.w3.org/2000/svg" className="dark:fill-white" viewBox="0 0 30 30" width="30px" height="30px"><path d="M 3 7 A 1.0001 1.0001 0 1 0 3 9 L 27 9 A 1.0001 1.0001 0 1 0 27 7 L 3 7 z M 3 14 A 1.0001 1.0001 0 1 0 3 16 L 27 16 A 1.0001 1.0001 0 1 0 27 14 L 3 14 z M 3 21 A 1.0001 1.0001 0 1 0 3 23 L 27 23 A 1.0001 1.0001 0 1 0 27 21 L 3 21 z" /></svg>
                        </Button>
                    </SheetTrigger>
                    <SheetContent side={side}>
                        <SheetHeader>
                            <SheetTitle>Edit profile</SheetTitle>
                            <SheetDescription>
                                <ul>
                                    <div className="flex flex-col justify-start">
                                        <h3 className={`${RobotoN.className} antialiased text-black-950 dark:text-white`}>
                                            Dashboard
                                        </h3>
                                        <Link
                                            className='p-2 hover:underline cursor-pointer'
                                            href={links.Home.route}
                                        >
                                            {links.Home.label}
                                        </Link>
                                        <Link
                                            className='p-2 hover:underline cursor-pointer'
                                            href={links.Contact.route}
                                        >
                                            {links.Contact.label}
                                        </Link>
                                    </div>
                                    <div className="flex flex-col justify-startp-1">
                                        <h3 className={`${RobotoN.className} antialiased text-black-950 dark:text-white`}>
                                            Components
                                        </h3>
                                        <Link
                                            className='p-2 hover:underline cursor-pointer'
                                            href={links2.Introduction.route}
                                        >
                                            {links2.Introduction.label}
                                        </Link>
                                        <Link
                                            className='p-2 hover:underline cursor-pointer'
                                            href={links2.Acordion.route}
                                        >
                                            {links2.Acordion.label}
                                        </Link>
                                        <Link
                                            className='p-2 hover:underline cursor-pointer'
                                            href={links2.Button.route}
                                        >
                                            {links2.Button.label}
                                        </Link>
                                        <Link
                                            className='p-2 hover:underline cursor-pointer'
                                            href={links2.Card.route}
                                        >
                                            {links2.Card.label}
                                        </Link>
                                        <Link
                                            className='p-2 hover:underline cursor-pointer'
                                            href={links2.Form.route}
                                        >
                                            {links2.Form.label}
                                        </Link>
                                        <Link
                                            className='p-2 hover:underline cursor-pointer'
                                            href={links2.Ttoggle.route}
                                        >
                                            {links2.Ttoggle.label}
                                        </Link>
                                    </div>
                                </ul>
                            </SheetDescription>
                        </SheetHeader>
                    </SheetContent>
                </Sheet>
                <svg className="dark:fill-black-50 min-w-fit" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="35px" height="35px"><path d="M 17 3 C 14.789063 3 13 4.789063 13 7 L 7 7 L 7 12 C 4.789063 12 3 13.789063 3 16 C 3 18.210938 4.789063 20 7 20 L 7 25 L 13 25 C 13 27.210938 14.789063 29 17 29 C 19.210938 29 21 27.210938 21 25 L 27 25 L 27 18 L 25 18 C 23.808594 18 23 17.191406 23 16 C 23 14.808594 23.808594 14 25 14 L 27 14 L 27 7 L 21 7 C 21 4.789063 19.210938 3 17 3 Z M 17 5 C 18.191406 5 19 5.808594 19 7 L 19 9 L 25 9 L 25 12 C 22.789063 12 21 13.789063 21 16 C 21 18.210938 22.789063 20 25 20 L 25 23 L 19 23 L 19 25 C 19 26.191406 18.191406 27 17 27 C 15.808594 27 15 26.191406 15 25 L 15 23 L 9 23 L 9 18 L 7 18 C 5.808594 18 5 17.191406 5 16 C 5 14.808594 5.808594 14 7 14 L 9 14 L 9 9 L 15 9 L 15 7 C 15 5.808594 15.808594 5 17 5 Z" /></svg>

                <div className="flex w-[90%] justify-around">
                    <Link
                        className='hidden md:block focus:underline dark:focus:text-white p-1 w-fit cursor-pointer text-black-950 hover:underline hover:text-black-950 dark:text-black-50 dark:hover:text-white'
                        href={links3.Home.route}
                    >
                        <b>{links3.Home.label}</b>
                    </Link>
                    <Link
                        className='hidden md:block focus:underline dark:focus:text-white p-1 w-fit cursor-pointer text-black-950 hover:underline hover:text-black-950 dark:text-black-50 dark:hover:text-white'
                        href={links3.Comps.route}
                    >
                        <b>{links3.Comps.label}</b>
                    </Link>
                    <Link
                        className='hidden md:block focus:underline dark:focus:text-white p-1 w-fit cursor-pointer text-black-950 hover:underline hover:text-black-950 dark:text-black-50 dark:hover:text-white'
                        href={links3.Dash.route}
                    >
                        <b>{links3.Dash.label}</b>
                    </Link>
                </div>
            </div>
            <div className="flex justify-around mr-2">
                <ThemeToggle />
            </div>
        </div>
    )
}