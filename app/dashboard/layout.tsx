import SideNav from '../../components/SideNav';

export default function Layout(
    { children }: { children: React.ReactNode }
) {
    return (
        <div className='flex h-screen'>
            <div className=''>
                <SideNav />
            </div>
            <div className='w-full dark:bg-black-950 dark:text-white'>
                {children}
            </div>
        </div>
    )
}
