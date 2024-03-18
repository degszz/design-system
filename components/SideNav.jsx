import Link from "next/link"
import { RobotoN, RobotoMono } from "../components/ui/fonts"


export default function Navigation() {

    const links = {
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

    return (
        <nav className='mt-12 h-full'>
            <div className='hidden md:block'>
                <nav class='flex flex-col fixed dark:bg-black-950'>
                    <ul className="flex flex-col m-3 dark:bg-black-950 dark:text-white">
                        <h3 className={`${RobotoN.className} antialiased`}>
                            Components
                        </h3>
                        <div className="flex flex-col w-fit pl-1">
                            <Link
                                className='focus:underline focus:text-black-950 dark:focus:text-white p-1 w-fit cursor-pointer text-black-300 hover:underline hover:text-black-950 dark:hover:text-white'
                                href={links.Introduction.route}
                            >
                                {links.Introduction.label}
                            </Link>
                            <Link
                                className='focus:underline focus:text-black-950 dark:focus:text-white p-1 w-fit cursor-pointer text-black-300 hover:underline hover:text-black-950 dark:hover:text-white'
                                href={links.Acordion.route}
                            >
                                {links.Acordion.label}
                            </Link>
                            <Link
                                className='focus:underline focus:text-black-950 dark:focus:text-white p-1 w-fit cursor-pointer text-black-300 hover:underline hover:text-black-950 dark:hover:text-white'
                                href={links.Button.route}
                            >
                                {links.Button.label}
                            </Link>
                            <Link
                                className='focus:underline focus:text-black-950 dark:focus:text-white p-1 w-fit cursor-pointer text-black-300 hover:underline hover:text-black-950 dark:hover:text-white'
                                href={links.Card.route}
                            >
                                {links.Card.label}
                            </Link>
                            <Link
                                className='focus:underline focus:text-black-950 dark:focus:text-white p-1 w-fit cursor-pointer text-black-300 hover:underline hover:text-black-950 dark:hover:text-white'
                                href={links.Form.route}
                            >
                                {links.Form.label}
                            </Link>
                            <Link
                                className='focus:underline focus:text-black-950 dark:focus:text-white p-1 w-fit cursor-pointer text-black-300 hover:underline hover:text-black-950 dark:hover:text-white'
                                href={links.Ttoggle.route}
                            >
                                {links.Ttoggle.label}
                            </Link>
                        </div>
                    </ul>
                </nav>
            </div>
        </nav >
    )
} 