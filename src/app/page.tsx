import ThemeToggle from './components/ThemeToggle/ThemeToggle';
import Banner from "@/app/components/Banner/Banner";

export default function Home() {
    return (
        <>
            <ThemeToggle />
            <div className="w-full flex items-center justify-center bg-white dark:bg-gray-950 text-black dark:text-white">
                <Banner/>
            </div>
        </>
    );
}