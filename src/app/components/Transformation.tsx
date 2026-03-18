import backdropImage from '@/assets/d4caaa4da0b695f86b90f3b786de05319b544afb.png';

export function Transformation() {
  return (
    <section className="relative py-40 px-6 overflow-hidden">
      {/* Background Image - harder to download */}
      <div 
        className="absolute inset-0 pointer-events-none select-none"
        style={{
          backgroundImage: `url(${backdropImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/70"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto text-center px-4">
        <p className="text-3xl md:text-4xl lg:text-5xl text-white leading-relaxed font-light w-full break-words">
          SEENIK backdrops bring depth, atmosphere, and realism. Turning a display, into a miniature world.
        </p>
      </div>
    </section>
  );
}