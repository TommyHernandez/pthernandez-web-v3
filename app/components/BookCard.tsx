"use client";

import Image from "next/image";
import { useRef } from "react";
import {
  LuArrowRight as ArrowRight,
  LuExternalLink as ExternalLink,
  LuX as X,
} from "react-icons/lu";
import type { Book } from "@/app/types";

export function BookCard({ book }: { book: Book }) {
  const dialogRef = useRef<HTMLDialogElement>(null);

  const openModal = () => dialogRef.current?.showModal();
  const closeModal = () => dialogRef.current?.close();

  return (
    <>
      <div
        role="button"
        tabIndex={0}
        aria-haspopup="dialog"
        aria-label={`Read full review of ${book.title}`}
        onClick={openModal}
        onKeyDown={(event) => {
          if (event.key === "Enter" || event.key === " ") {
            event.preventDefault();
            openModal();
          }
        }}
        className="bg-white rounded-2xl overflow-hidden border border-ink/7 hover:shadow-md transition-shadow duration-300 group flex flex-col cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal"
      >
        {/* Book image */}
        <div className="relative h-44 overflow-hidden bg-surface-muted">
          <Image
            src={book.image}
            alt={book.title}
            fill
            sizes="(min-width: 1024px) 320px, (min-width: 768px) 50vw, 100vw"
            className="object-cover group-hover:scale-105 transition-transform duration-500"
          />
        </div>

        <div className="p-6 flex flex-col flex-1">
          <h3 className="text-base font-bold text-ink mb-0.5 group-hover:text-teal transition-colors">
            {book.title}
          </h3>
          <p className="text-xs text-subtle font-light mb-3">
            by {book.author}
          </p>

          <p className="text-xs text-muted font-light leading-relaxed mb-4">
            {book.excerpt}
          </p>

          <div className="mt-auto flex items-center justify-between gap-4">
            {book.link ? (
              <a
                href={book.link}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(event) => event.stopPropagation()}
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-teal hover:gap-2.5 transition-all group/btn cursor-pointer"
              >
                Find This Book
                <ExternalLink className="w-3.5 h-3.5 group-hover/btn:scale-110 transition-transform" />
              </a>
            ) : (
              <button
                type="button"
                disabled
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-subtle cursor-not-allowed"
              >
                Find This Book
                <ExternalLink className="w-3.5 h-3.5" />
              </button>
            )}

            <button
              type="button"
              onClick={(event) => {
                event.stopPropagation();
                openModal();
              }}
              className="inline-flex items-center gap-1 text-xs font-semibold text-ink hover:gap-1.5 transition-all cursor-pointer"
            >
              Read more
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>

      <dialog
        ref={dialogRef}
        aria-labelledby={`${book.slug}-modal-title`}
        onClick={(event) => {
          if (event.target === dialogRef.current) closeModal();
        }}
        className="m-0 w-full h-[100dvh] max-w-full max-h-[100dvh] rounded-none border-0 sm:m-auto sm:w-[min(90vw,720px)] sm:h-auto sm:max-w-[min(90vw,720px)] sm:max-h-[85vh] sm:rounded-2xl sm:border sm:border-ink/7 xl:w-[min(80vw,960px)] xl:max-w-[min(80vw,960px)] xl:h-[85vh] xl:max-h-[85vh] bg-white p-0 backdrop:bg-ink/50"
      >
        <div className="relative grid grid-rows-[auto_1fr] h-full sm:grid-rows-none sm:grid-cols-[220px_1fr] sm:h-auto sm:max-h-[85vh] xl:grid-cols-[340px_1fr] xl:h-full xl:max-h-[85vh]">
          <button
            type="button"
            onClick={closeModal}
            aria-label="Close"
            className="absolute top-3 right-3 z-10 p-3 sm:p-2 rounded-full bg-white/90 text-subtle hover:text-ink transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="relative h-56 sm:h-full bg-surface-muted">
            <Image
              src={book.image}
              alt={book.title}
              fill
              sizes="(min-width: 1280px) 340px, (min-width: 640px) 220px, 100vw"
              className="object-cover xl:object-contain"
            />
          </div>

          <div className="min-h-0 p-8 overflow-y-auto flex flex-col">
            <h3
              id={`${book.slug}-modal-title`}
              className="text-2xl font-bold text-ink mb-1"
            >
              {book.title}
            </h3>
            <p className="text-sm text-subtle font-light mb-1">
              by {book.author}
            </p>
            {book.language ? (
              <p className="text-xs text-subtle font-light mb-6">
                Available in {book.language}
              </p>
            ) : null}

            <p className="text-sm text-muted font-light leading-relaxed mb-8 whitespace-pre-line">
              {book.body}
            </p>

            <div className="mt-auto">
              {book.link ? (
                <a
                  href={book.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-teal hover:gap-2.5 transition-all group/btn cursor-pointer"
                >
                  Find This Book
                  <ExternalLink className="w-3.5 h-3.5 group-hover/btn:scale-110 transition-transform" />
                </a>
              ) : (
                <button
                  type="button"
                  disabled
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-subtle cursor-not-allowed"
                >
                  Find This Book
                  <ExternalLink className="w-3.5 h-3.5" />
                </button>
              )}
            </div>
          </div>
        </div>
      </dialog>
    </>
  );
}
