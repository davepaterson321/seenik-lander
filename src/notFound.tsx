import { createRoot } from 'react-dom/client';
import Seenik from '@/imports/Seenik';
import '@/styles/index.css';

function NotFoundPage() {
  return (
    <main className="min-h-screen bg-black text-white dark">
      <section className="px-4 py-20 md:px-8 md:py-24 lg:px-10">
        <div className="mx-auto max-w-[900px] p-8 text-center md:p-12">
          <a href="/" className="mx-auto block w-32 sm:w-40 md:w-56" aria-label="SEENIK home">
            <Seenik />
          </a>
          <h1 className="mt-8 type-display text-7xl md:text-8xl lg:text-9xl uppercase tracking-[0.12em] font-light">
            404
          </h1>
          <h2 className="mt-5 type-heading-xl uppercase tracking-[0.1em] font-light">
            Scene not found
          </h2>
          <p className="mx-auto mt-6 max-w-2xl type-body-lg leading-relaxed text-gray-300">
            The page you requested does not exist, may have moved, or the URL may be incorrect.
          </p>

          <div className="mt-10 flex justify-center">
            <a
              href="/"
              className="inline-flex items-center justify-center px-8 py-4 bg-white text-black hover:bg-gray-200 transition-colors tracking-wide"
            >
              Back to home
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}

createRoot(document.getElementById('root')!).render(<NotFoundPage />);
