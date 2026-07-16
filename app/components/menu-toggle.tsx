'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import clsx from 'clsx';
import { scroller } from 'react-scroll';

const menuItems = [
    { label: 'Início', href: '#home' },
    { label: 'Sobre', href: '#about' },
    { label: 'Portfólio', href: '#portifolio' },
    { label: 'Serviços', href: '#services' },
    { label: 'Contato', href: '#contact' },
];

export default function MenuToggle() {
    const [isOpen, setIsOpen] = useState(false);
    const [hash, setHash] = useState('#home');

    useEffect(() => {
        const handleKey = (e: KeyboardEvent) => {
            if (e.key === 'Escape') setIsOpen(false);
        };
        if (isOpen) {
            window.addEventListener('keydown', handleKey);
            return () => window.removeEventListener('keydown', handleKey);
        }
    }, [isOpen]);

    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }
        return () => { document.body.style.overflow = ''; };
    }, [isOpen]);

    function scrollToSection(section: string) {
        scroller.scrollTo(section.replace('#', ''), {
            duration: 800,
            delay: 2,
            smooth: 'easeInOut',
        });
    }

    function handleLinkClick(e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) {
        setHash(e.currentTarget.hash);
        scrollToSection(e.currentTarget.hash);
        setIsOpen(false);
    }

    return (
        <>
            <button
                onClick={() => setIsOpen(true)}
                aria-label="Abrir menu"
                className="md:hidden p-2 text-zinc-200 hover:text-blue-600 transition"
            >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
                </svg>
            </button>

            {isOpen && (
                <div
                    className="fixed inset-0 bg-black/60 z-40 md:hidden"
                    onClick={() => setIsOpen(false)}
                />
            )}

            <div className={clsx(
                'fixed top-0 right-0 h-full w-72 bg-zinc-900 z-50 md:hidden flex flex-col transition-transform duration-300 ease-in-out',
                isOpen ? 'translate-x-0' : 'translate-x-full'
            )}>
                <div className="flex justify-between items-center px-6 py-4 border-b border-zinc-800">
                    <h2 className="text-lg font-bold text-blue-700/80">Menu</h2>
                    <button
                        onClick={() => setIsOpen(false)}
                        aria-label="Fechar menu"
                        className="text-zinc-400 hover:text-zinc-100 transition text-2xl"
                    >
                        ✕
                    </button>
                </div>

                <nav className="flex flex-col py-4">
                    {menuItems.map(item => (
                        <Link
                            key={item.href}
                            href={item.href}
                            onClick={handleLinkClick}
                            className={clsx(
                                'px-6 py-3 transition-colors',
                                hash === item.href
                                    ? 'text-blue-600 bg-blue-600/10'
                                    : 'text-zinc-200/80 hover:text-zinc-100 hover:bg-zinc-800'
                            )}
                        >
                            {item.label}
                        </Link>
                    ))}
                </nav>
            </div>
        </>
    );
}
