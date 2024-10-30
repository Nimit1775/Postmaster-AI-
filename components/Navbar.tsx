import Link from 'next/link';
import { ClientNavbar } from './ClientNavbar'; // Client logic component

export function Navbar() {
    return (
        <header className="fixed top-0 left-0 right-0 z-50">
            <nav className="container mx-auto px-4 sm:px-8 py-4 sm:py-6">
                <div className="flex flex-wrap justify-between items-center max-w-6xl mx-auto">
                    <div className="flex items-center">
                        <Link href="/" className="flex items-center space-x-2">
                            
                            <span className="text-xl sm:text-2xl font-bold text-white"></span>
                        </Link>
                    </div>
                    <ClientNavbar /> {/* Client-side logic goes here */}
                </div>
            </nav>
        </header>
    );
}
