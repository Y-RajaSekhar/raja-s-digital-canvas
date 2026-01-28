import { useState } from 'react';
import { useInView } from '@/hooks/useInView';
import { X } from 'lucide-react';

const galleryItems = [
  {
    id: 1,
    title: 'Code Architecture',
    category: 'Coding',
    image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=600&h=400&fit=crop',
  },
  {
    id: 2,
    title: 'Dashboard Design',
    category: 'Frontend',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop',
  },
  {
    id: 3,
    title: 'UI Components',
    category: 'UI/UX',
    image: 'https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?w=600&h=400&fit=crop',
  },
  {
    id: 4,
    title: 'Machine Learning',
    category: 'AI',
    image: 'https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=600&h=400&fit=crop',
  },
  {
    id: 5,
    title: 'Responsive Design',
    category: 'Frontend',
    image: 'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?w=600&h=400&fit=crop',
  },
  {
    id: 6,
    title: 'Neural Networks',
    category: 'AI',
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=600&h=400&fit=crop',
  },
];

const GallerySection = () => {
  const { ref, isInView } = useInView({ threshold: 0.1 });
  const [selectedImage, setSelectedImage] = useState<typeof galleryItems[0] | null>(null);

  return (
    <section id="gallery" className="relative">
      <div ref={ref} className="section-container">
        {/* Section Header */}
        <div className={`text-center mb-16 ${isInView ? 'animate-fade-up' : 'opacity-0'}`}>
          <span className="text-primary font-medium text-sm uppercase tracking-wider">Gallery</span>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mt-3">
            Visual Journey
          </h2>
          <p className="text-muted-foreground mt-4 max-w-lg mx-auto">
            A glimpse into the world of coding, design, and data science
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {galleryItems.map((item, index) => (
            <div
              key={item.id}
              className={`group relative aspect-[4/3] rounded-xl overflow-hidden cursor-pointer ${isInView ? 'animate-fade-up' : 'opacity-0'}`}
              style={{ animationDelay: `${index * 0.08}s` }}
              onClick={() => setSelectedImage(item)}
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-foreground/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
                <span className="text-primary-foreground/80 text-xs font-medium uppercase tracking-wider">
                  {item.category}
                </span>
                <h3 className="text-primary-foreground font-display font-semibold text-lg">
                  {item.title}
                </h3>
              </div>
            </div>
          ))}
        </div>

        {/* Lightbox */}
        {selectedImage && (
          <div
            className="fixed inset-0 z-50 bg-foreground/90 backdrop-blur-sm flex items-center justify-center p-6"
            onClick={() => setSelectedImage(null)}
          >
            <button
              className="absolute top-6 right-6 text-primary-foreground hover:text-primary transition-colors"
              onClick={() => setSelectedImage(null)}
              aria-label="Close lightbox"
            >
              <X size={32} />
            </button>
            
            <div className="relative max-w-4xl w-full" onClick={(e) => e.stopPropagation()}>
              <img
                src={selectedImage.image}
                alt={selectedImage.title}
                className="w-full h-auto rounded-xl shadow-2xl"
              />
              <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-foreground/80 to-transparent rounded-b-xl">
                <span className="text-primary-foreground/80 text-sm font-medium uppercase tracking-wider">
                  {selectedImage.category}
                </span>
                <h3 className="text-primary-foreground font-display font-bold text-2xl mt-1">
                  {selectedImage.title}
                </h3>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default GallerySection;
