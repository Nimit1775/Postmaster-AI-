'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, Sparkles, X } from 'lucide-react';
import { SignedIn, SignedOut, SignInButton, SignUpButton, UserButton, useAuth } from '@clerk/nextjs';

export function ClientNavbar() {
    const { userId } = useAuth();
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => setIsScrolled(window.scrollY > 10);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);
//@ts-expect-error don't even know what the fking error is .
    const handleScrollToFeatures = (e) => {
        e.preventDefault();
        const featuresSection = document.getElementById('features');
        if (featuresSection) {
            featuresSection.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <div className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-gray-900/80 backdrop-blur-md' : 'bg-transparent'}`}>
            <nav className="container mx-auto px-4 sm:px-8 py-4 sm:py-6">
                <div className="flex flex-wrap justify-between items-center max-w-6xl mx-auto">
                    <div className="flex items-center">
                        <Link href="/" className="flex items-center space-x-2">
                            <Sparkles className="w-8 h-8 text-blue-500" />
                            <span className="text-xl sm:text-2xl font-bold text-white">PostMaster AI</span>
                        </Link>
                    </div>

                    <button className="sm:hidden text-white focus:outline-none" onClick={() => setIsMenuOpen(!isMenuOpen)}>
                        {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                    </button>
                    <div className={`w-full sm:w-auto ${isMenuOpen ? 'block' : 'hidden'} sm:block mt-4 sm:mt-0`}>
                        <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-8">
                            <Link href="/#features" onClick={handleScrollToFeatures} className="text-gray-300 hover:text-white transition-colors py-2 sm:py-0 relative group">
                                Features
                                <span className="absolute left-0 right-0 bottom-0 h-0.5 bg-blue-500 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></span>
                            </Link>
                            <Link href="/pricing" className="text-gray-300 hover:text-white transition-colors py-2 sm:py-0 relative group">
                                Pricing
                                <span className="absolute left-0 right-0 bottom-0 h-0.5 bg-blue-500 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></span>
                            </Link>
                            <Link href="/docs" className="text-gray-300 hover:text-white transition-colors py-2 sm:py-0 relative group">
                                Docs
                                <span className="absolute left-0 right-0 bottom-0 h-0.5 bg-blue-500 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></span>
                            </Link>
                            {userId && (
                                <Link href="/generate" className="text-gray-300 hover:text-white transition-colors py-2 sm:py-0 relative group">
                                    Dashboard
                                    <span className="absolute left-0 right-0 bottom-0 h-0.5 bg-blue-500 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></span>
                                </Link>
                            )}
                            <SignedOut>
                                <SignInButton mode="modal">
                                    <button className="text-gray-300 hover:text-white transition-colors mt-2 sm:mt-0">Sign In</button>
                                </SignInButton>
                                <SignUpButton mode="modal">
                                    <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-full transition-colors mt-2 sm:mt-0">Sign Up</button>
                                </SignUpButton>
                            </SignedOut>
                            <SignedIn>
                                <UserButton appearance={{ elements: { avatarBox: 'w-10 h-10' } }} />
                            </SignedIn>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    );
}