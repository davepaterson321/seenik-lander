export function MaterialsAndVersatility() {
  return (
    <section className="bg-black px-4 md:px-8 lg:px-10 pb-20 md:pb-24">
      <div className="max-w-[1500px] mx-auto">
        <span className="block text-xs uppercase tracking-[0.3em] text-white/50">
          Product details
        </span>

        <div className="mt-8 md:mt-10 grid grid-cols-1 gap-6 md:gap-8 md:grid-cols-3">
          <div className="rounded-lg border border-white/10 p-5 sm:px-6 sm:py-8">
            <h3 className="text-xl md:text-2xl text-white uppercase tracking-[0.1em] font-light mb-4 leading-tight">
              Unrivalled quality
            </h3>
            <p className="text-base md:text-lg text-gray-300 leading-relaxed">
              Stunningly atmospheric digital prints, on high-quality and versatile 250gsm silk stock.
            </p>
          </div>

          <div className="rounded-lg border border-white/10 p-5 sm:px-6 sm:py-8">
            <h3 className="text-xl md:text-2xl text-white uppercase tracking-[0.1em] font-light mb-4 leading-tight">
              Flexible display fit
            </h3>
            <p className="text-base md:text-lg text-gray-300 leading-relaxed">
              Our panoramic format allows you to utilise your backdrop in any display environment. Cut to fit - or go full-on 40 inch diorama.
            </p>
          </div>

          <div className="rounded-lg border border-white/10 p-5 sm:px-6 sm:py-8">
            <h3 className="text-xl md:text-2xl text-white uppercase tracking-[0.1em] font-light mb-4 leading-tight">
              Scale compatibility
            </h3>
            <p className="text-base md:text-lg text-gray-300 leading-relaxed">
              Designed to be compatible with King &amp; Country and all similar 1:30 / 1:32 scale figures and toy soldiers.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
