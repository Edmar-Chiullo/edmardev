'use client';

import { ArrowLeftIcon, ArrowRightIcon } from '@heroicons/react/24/outline';
import clsx from 'clsx';
import React from 'react';
import { generatePagination } from '@/app/utils/pagination-utils';
import { useState } from 'react';

export default function Pagination({ totalPages, pageProject }: { totalPages: number, pageProject: (pageNumber: number) => void }) {
  const [ currentPage, setCurrentPage ] = useState<number>(1)

  const allPages = generatePagination(currentPage, totalPages);

  return (
    <>
      {/*  NOTE: Uncomment this code in Chapter 11 */}

      <div className="inline-flex">
        <PaginationArrow
          direction="left"
          isDisabled={currentPage <= 1}
        />

        <div className="flex -space-x-px">
          {allPages.map((page, index) => {
            let position: 'first' | 'last' | 'single' | 'middle' | undefined;

            if (index === 0) position = 'first';
            if (index === allPages.length - 1) position = 'last';
            if (allPages.length === 1) position = 'single';
            if (page === '...') position = 'middle';
            
            return (
              <PaginationNumber
                key={`${page}-${index}`}
                page={page}
                position={position}
                isActive={currentPage === page}
                pageProject={pageProject}
                setCurrentPage={setCurrentPage}
              />
            );
          })}
        </div>

        <PaginationArrow
          direction="right"
          isDisabled={currentPage >= totalPages}
        />
      </div>
    </>
  );
}

function PaginationNumber({
  page,
  isActive,
  position,
  pageProject,
  setCurrentPage
}: {
  page: number | string;
  position?: 'first' | 'last' | 'middle' | 'single';
  isActive: boolean;
  pageProject: (pageNumber: number) => void;
  setCurrentPage: (page: number) => void;
}) {

    function extractionValueComponent(element: EventTarget | null) {
      const htmlElement = element as HTMLElement;
      const value = Number(htmlElement.innerText);
      if (!isNaN(value)) {
        pageProject(value);
        setCurrentPage(value);
      }
    }

    const className = clsx(
        'flex h-10 w-10 items-center justify-center text-sm border border-zinc-600/80',
        {
        'rounded-l-md': position === 'first' || position === 'single',
        'rounded-r-md': position === 'last' || position === 'single',
        'z-10 bg-blue-600 border-blue-600 text-white': isActive,
        'hover:bg-gray-100': !isActive && position !== 'middle',
        'text-gray-300': position === 'middle',
        },
    );

    return isActive || position === 'middle' ? (
        <div className={className} onClick={(element) => extractionValueComponent(element.target)}>{page}</div>
  ) : (
    <div className={className} onClick={(element) => extractionValueComponent(element.target) }>
      {page}
    </div>
  );
}

function PaginationArrow({
  direction,
  isDisabled,
}: {
  direction: 'left' | 'right';
  isDisabled?: boolean;
}) {
  const className = clsx(
    'flex h-10 w-10 items-center justify-center rounded-md border border-zinc-600/80',
    {
      'pointer-events-none text-gray-300': isDisabled,
      'hover:bg-gray-100': !isDisabled,
      'mr-2 md:mr-4': direction === 'left',
      'ml-2 md:ml-4': direction === 'right',
    },
  );

  const icon =
    direction === 'left' ? (
      <ArrowLeftIcon className="w-4" />
    ) : (
      <ArrowRightIcon className="w-4" />
    );

  return isDisabled ? (
    <div className={className}>{icon}</div>
  ) : (
    <p className={className}>
      {icon}
    </p>
  );
}
