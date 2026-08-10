import Image from "next/image";
import {
  LuBookOpen as BookOpen,
  LuExternalLink as ExternalLink,
} from "react-icons/lu";
import { getBooks } from "@/lib/books";

export function BookRecommendations() {
  const books = getBooks("en");

  return (
    <section
      id="books"
      className="py-28 px-6 bg-background relative overflow-hidden"
    >
      <div
        className="absolute -bottom-15 -left-15 w-72 h-72 opacity-[0.04]"
        style={{
          background: "var(--color-amber)",
          borderRadius: "50% 40% 60% 50% / 60% 50% 40% 50%",
        }}
      />

      <div className="max-w-5xl mx-auto relative">
        <p className="text-xs font-semibold tracking-widest uppercase text-subtle mb-5">
          Reading List
        </p>
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-6">
          <h2 className="text-5xl font-bold tracking-tight text-ink leading-tight">
            Books that changed my code.
          </h2>
        </div>

        <div className="border-l-2 border-teal pl-6 py-1 mb-16">
          <p className="text-lg text-muted italic font-light leading-snug">
            &quot;A developer who doesn't read books is like a carpenter who
            doesn't sharpen their tools.&quot;
          </p>
          <p className="text-sm text-subtle mt-2 font-light">
            Reading isn't just learning — it's investing in your craft.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {books.map((book) => (
            <div
              key={book.slug}
              className="bg-white rounded-2xl overflow-hidden border border-ink/7 hover:shadow-md transition-shadow duration-300 group flex flex-col"
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

                <div className="mt-auto">
                  {/* TODO: link → Amazon affiliate; future: open full review detail */}
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
                    <button className="inline-flex items-center gap-1.5 text-xs font-semibold text-teal hover:gap-2.5 transition-all group/btn cursor-pointer">
                      Find This Book
                      <ExternalLink className="w-3.5 h-3.5 group-hover/btn:scale-110 transition-transform" />
                    </button>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-white rounded-2xl p-10 border border-ink/7 flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="flex items-start gap-5">
            <div className="p-3 bg-teal-soft rounded-xl shrink-0">
              <BookOpen className="w-6 h-6 text-teal-strong" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-ink mb-2">
                Currently Reading
              </h3>
              <p className="text-muted font-light text-sm leading-relaxed max-w-md">
                Always learning, always growing. Have a recommendation? I'd love
                to hear it.
              </p>
            </div>
          </div>
          <a href="#contact">
            <button className="shrink-0 px-7 py-3.5 bg-ink text-background rounded-xl text-sm font-semibold hover:bg-ink-hover transition-colors cursor-pointer">
              Share a Recommendation
            </button>
          </a>
        </div>
      </div>
    </section>
  );
}
