import { Sparkles, Ruler, Layers, Globe } from 'lucide-react';

export function Product() {
  const features = [
    {
      icon: Sparkles,
      label: 'Premium quality, vibrant and robust',
    },
    {
      icon: Layers,
      label: 'Designed for cabinets, shelves & photography',
    },
    {
      icon: Ruler,
      label: 'Accurate scale, depth & perspective',
    },
    {
      icon: Globe,
      label: 'Diverse range of historic and thematic environments',
    },
  ];

  return (
    <section className="py-32 px-6 bg-black relative overflow-hidden">
      {/* Subtle background texture */}
      <div className="absolute inset-0 opacity-5">
        <img
          src="https://images.unsplash.com/photo-1769751876022-4c672ac944bf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhYnN0cmFjdCUyMGRhcmslMjB0ZXh0dXJlJTIwYXRtb3NwaGVyaWN8ZW58MXx8fHwxNzY5ODk2NTQzfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
          alt=""
          className="w-full h-full object-cover"
        />
      </div>

      <div className="max-w-4xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl text-white mb-6 tracking-wide font-light w-full break-words px-4">
            What we create
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed w-full break-words px-4">
            Large-format, panoramic scenic backdrops designed specifically for scale model collectors.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 gap-12">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div key={index} className="flex items-start gap-5">
                <div className="flex-shrink-0 w-12 h-12 flex items-center justify-center border border-white/20 bg-white/5">
                  <Icon className="w-5 h-5 text-white" />
                </div>
                <p className="text-lg text-gray-300 pt-2 break-words">
                  {feature.label}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}