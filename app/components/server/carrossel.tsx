'use client';

import Image from 'next/image';
import { useState, useEffect, useCallback, useRef } from 'react';
import { ImageItem } from '@/app/types/types';

interface CarrosselProps {
    images: ImageItem[];
    title: string;
    onClose: () => void;
}

export default function Carrossel({ images, title, onClose }: CarrosselProps) {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isPlaying, setIsPlaying] = useState(true);
    const [isFading, setIsFading] = useState(false);
    const dialogRef = useRef<HTMLDivElement>(null);

    const changeImage = useCallback((next: boolean) => {
        setIsFading(true);
        setTimeout(() => {
            setCurrentIndex((prev) =>
                next ? (prev + 1) % images.length : (prev - 1 + images.length) % images.length
            );
            setIsFading(false);
        }, 300);
    }, [images.length]);

    const next = useCallback(() => changeImage(true), [changeImage]);
    const prev = useCallback(() => changeImage(false), [changeImage]);

    useEffect(() => {
        if (!isPlaying) return;
        const timer = setInterval(next, 5000);
        return () => clearInterval(timer);
    }, [next, isPlaying]);

    useEffect(() => {
        const handleKey = (e: KeyboardEvent) => {
            if (e.key === 'ArrowRight') next();
            if (e.key === 'ArrowLeft') prev();
            if (e.key === 'Escape') onClose();
            if (e.key === ' ') { e.preventDefault(); setIsPlaying((p) => !p); }
        };
        window.addEventListener('keydown', handleKey);
        return () => window.removeEventListener('keydown', handleKey);
    }, [next, prev, onClose]);

    useEffect(() => {
        dialogRef.current?.focus();
    }, []);

    const currentImage = images[currentIndex];

    return (
        <div
            ref={dialogRef}
            role="dialog"
            aria-modal="true"
            aria-label={`Galeria de imagens: ${title}`}
            tabIndex={-1}
            className='fixed inset-0 z-50 flex flex-col items-center justify-center bg-zinc-950/98 outline-none'
        >
            <div className='absolute top-0 left-0 right-0 flex justify-between items-center px-6 py-4 z-10'>
                <h2 className='text-xl font-bold text-zinc-100'>{title}</h2>
                <div className='flex items-center gap-4'>
                    <button
                        onClick={() => setIsPlaying((p) => !p)}
                        className='text-zinc-400 hover:text-zinc-100 transition-colors duration-300 text-sm font-medium'
                        aria-label={isPlaying ? 'Pausar slideshow' : 'Reproduzir slideshow'}
                    >
                        {isPlaying ? '⏸ Pausar' : '▶ Reproduzir'}
                    </button>
                    <button
                        onClick={onClose}
                        className='text-zinc-400 hover:text-zinc-100 transition-colors duration-300 text-lg font-medium'
                        aria-label='Fechar galeria'
                    >
                        Fechar ✕
                    </button>
                </div>
            </div>

            <div className='relative flex-1 w-full flex items-center justify-center px-16'>
                <button
                    onClick={prev}
                    className='absolute left-4 text-white text-5xl z-10 hover:text-blue-400 transition-colors duration-300'
                    aria-label='Imagem anterior'
                >
                    ‹
                </button>

                <div className='relative w-full h-full overflow-hidden'>
                    <div
                        className={`w-full h-full transition-opacity duration-300 ${isFading ? 'opacity-0' : 'opacity-100'}`}
                    >
                        <Image
                            src={currentImage.image}
                            alt={currentImage.title}
                            fill
                            sizes='(max-width: 768px) 100vw, 80vw'
                            className='object-contain p-8'
                            priority
                        />
                    </div>
                </div>

                <button
                    onClick={next}
                    className='absolute right-4 text-white text-5xl z-10 hover:text-blue-400 transition-colors duration-300'
                    aria-label='Próxima imagem'
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
