import Link from "next/link"
import { RobotoN, RobotoMono } from "../components/ui/fonts"


export default function Navigation() {

    const links = [
        {
            label: 'Introduction',
            route: '/component',
        },
        {
            label: 'Acordion',
            route: '/component/acordion',
        },
        {
            label: 'Form',
            route: '/component/form',
        },
        {
            label: 'ThemeToggle',
            route: '/component/Ttoggle',
        },
    ]

    return (
        <nav className='mt-12 h-full'>
            <div className='hidden md:block'>
                <nav class='flex flex-col fixed dark:bg-black-950'>
                    <ul className="flex flex-col m-3 dark:bg-black-950 dark:text-white">
                        <h3 className={`${RobotoN.className} antialiased`}>
                            Components
                        </h3>
                        {links.map(({ label, route }) =>
                            <div className="flex w-fit items-center pl-1">
                                <Link className='focus:underline focus:text-black-950 dark:focus:text-white p-1 w-fit cursor-pointer text-black-300 hover:underline hover:text-black-950 dark:hover:text-white' href={route}>
                                    {label}
                                </Link>
                            </div>
                        )}
                    </ul>
                </nav>
            </div>
        </nav >
    )
} 