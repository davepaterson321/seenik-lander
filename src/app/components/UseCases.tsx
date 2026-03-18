import { Box, Camera, Hammer, Store, Users } from 'lucide-react';

export function UseCases() {
  const useCases = [
    {
      icon: Box,
      title: 'Display Cabinets',
      description: 'Transform shelves into immersive scenes',
    },
    {
      icon: Camera,
      title: 'Model Photography',
      description: 'Professional backdrops for stunning shots',
    },
    {
      icon: Hammer,
      title: 'Diorama Builds',
      description: 'Seamless backgrounds for your creations',
    },
    {
      icon: Store,
      title: 'Store Displays',
      description: 'Elevate retail presentation instantly',
    },
    {
      icon: Users,
      title: 'Convention Booths',
      description: 'Premium showcase for events and shows',
    },
  ];

  return (
    <section className="relative py-32 px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Section Title */}
        <h2 className="text-3xl md:text-4xl lg:text-5xl text-white text-center mb-16 leading-relaxed font-light w-full break-words px-4">
          Immersive envirorments, wherever, whenever.
        </h2>

        {/* Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {useCases.map((useCase, index) => {
            const Icon = useCase.icon;
            return (
              <div
                key={index}
                className="p-8 border border-white/20 bg-black/40"
              >
                <div className="mb-6">
                  <Icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl text-white mb-3 tracking-wide break-words">
                  {useCase.title}
                </h3>
                <p className="text-gray-400 leading-relaxed break-words">
                  {useCase.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}