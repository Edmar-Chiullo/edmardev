'use client';

import Image from 'next/image';
import { useState, useEffect, useCallback } from 'react';
import { ImageItem } from '@/app/types/types';

interface CarrosselProps {
    images: ImageItem[];
    title: string;
    onClose: () => void;
}

export default function Carrossel({ images, title, onClose }: CarrosselProps) {
    const [currentIndex, setCurrentIndex] = useState(0);

    const next = useCallback(() => {
        setCurrentIndex((prev) => (prev + 1) % images.length);
    }, [images.length]);

    const prev = useCallback(() => {
        setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
    }, [images.length]);

    useEffect(() => {
        const timer = setInterval(next, 5000);
        return () => clearInterval(timer);
    }, [next]);

    useEffect(() => {
        const handleKey = (e: KeyboardEvent) => {
            if (e.key === 'ArrowRight') next();
            if (e.key === 'ArrowLeft') prev();
            if (e.key === 'Escape') onClose();
        };
        window.addEventListener('keydown', handleKey);
        return () => window.removeEventListener('keydown', handleKey);
    }, [next, prev, onClose]);

    const currentImage = images[currentIndex];

    return (
        <div className='fixed inset-0 z-50 flex flex-col items-center justify-center bg-zinc-950/98'>
            <div className='absolute top-0 left-0 right-0 flex justify-between items-center px-6 py-4 z-10'>
                <h2 className='text-xl font-bold text-zinc-100'>{title}</h2>
                <button
                    onClick={onClose}
                    className='text-zinc-400 hover:text-zinc-100 transition-colors text-lg font-medium'
                >
                    Fechar ✕
                </button>
            </div>

            <div className='relative flex-1 w-full flex items-center justify-center px-16'>
                <button
                    onClick={prev}
                    className='absolute left-4 text-white text-5xl z-10 hover:text-blue-400 transition-colors'
                >
                    ‹
                </button>

                <div className='relative w-full h-full flex items-center justify-center'>
                    <Image
                        src={currentImage.image}
                        alt={currentImage.title}
                        width={1200}
                        height={800}
                        className='object-contain max-w-full max-h-full'
                        priority
                    />
                </div>

                <button
                    onClick={next}
                    className='absolute right-4 text-white text-5xl z-10 hover:text-blue-400 transition-colors'
                >
                    ›
                </button>
            </div>

            <div className='absolute bottom-0 left-0 right-0 flex justify-center items-center px-6 py-4 z-10 gap-4'>
                <p className='text-zinc-300 text-sm'>{currentImage.title}</p>
                <span className='text-zinc-600'>|</span>
                <p className='text-zinc-400 text-sm'>{currentIndex + 1} / {images.length}</p>
            </div>
        </div>
    );
}
