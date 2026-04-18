import ShowcaseBackdrop2 from '../../assets/showcase/showcase-backdrop-2.png';

export function BackdropFormat() {
  return (
    <section className="relative py-20 md:py-24 px-4 md:px-8 lg:px-10 bg-black overflow-hidden">
      <div className="max-w-[1500px] mx-auto">
        <div className="max-w-4xl mb-10 md:mb-12">
          <span className="block type-overline uppercase tracking-[0.3em] text-white/50 mb-4">
            Product format
          </span>
          <h2 className="type-heading-xl text-white uppercase tracking-[0.1em] font-light leading-tight mb-5 break-words">
            40&quot; x 14.5&quot; panoramic backdrops
          </h2>
          <p className="type-body-lg text-gray-300 leading-relaxed break-words">
            Our wide format is designed especially for cabinets, shelves, hobby photography and even table-top gaming scenarios. Versatile enough to set the scene, whatever your display.
          </p>
        </div>

        <div className="relative overflow-hidden">
          <img
            src={ShowcaseBackdrop2}
            alt="40 inch by 14.5 inch panoramic backdrop format example"
            className="w-full h-auto object-cover block"
          />
        </div>
      </div>
    </section>
  );
}
