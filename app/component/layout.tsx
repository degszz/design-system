import SideNav from '../../components/SideNav';

export default function Layout(
    { children }: { children: React.ReactNode }
) {
    return (
        <div className='flex h-screen dark:bg-black-950 dark:text-white'>
            <div >
                <SideNav />
            </div>
            <div className='w-full'>
                {children}
            </div>
        </div>
    )
}