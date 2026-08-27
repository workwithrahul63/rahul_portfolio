import { useState } from 'react';

// Populate each category's "images" array as more work samples are added.
const galleryData = {
  "Social Media Posts": [
    "/gallery/social-media/post-1.webp",
    "/gallery/social-media/post-2.webp",
    "/gallery/social-media/post-3.webp",
    "/gallery/social-media/post-4.webp",
    "/gallery/social-media/post-5.webp",
    "/gallery/social-media/post-6.webp",
    "/gallery/social-media/post-7.webp",
    "/gallery/social-media/post-8.webp",
    "/gallery/social-media/post-9.webp",
    "/gallery/social-media/post-10.webp",
    "/gallery/social-media/post-11.webp",
    "/gallery/social-media/post-12.webp",
    "/gallery/social-media/post-13.webp",
  ],
  "Web Page Banners": [
    "/gallery/web-banners/banner-1.webp",
    "/gallery/web-banners/banner-2.webp",
    "/gallery/web-banners/banner-3.webp",
    "/gallery/web-banners/banner-4.webp",
    "/gallery/web-banners/banner-5.webp",
    "/gallery/web-banners/banner-6.webp",
    "/gallery/web-banners/banner-7.webp",
    "/gallery/web-banners/banner-8.webp",
    "/gallery/web-banners/banner-9.webp",
    "/gallery/web-banners/banner-10.webp",
    "/gallery/web-banners/banner-11.webp",
    "/gallery/web-banners/banner-12.webp",
  ],
  "Flyers": [
    "/gallery/flyers/flyer-1.webp",
    "/gallery/flyers/flyer-2.webp",
    "/gallery/flyers/flyer-3.webp",
    "/gallery/flyers/flyer-4.webp",
    "/gallery/flyers/flyer-5.webp",
    "/gallery/flyers/flyer-6.webp",
    "/gallery/flyers/flyer-7.webp",
    "/gallery/flyers/flyer-8.webp",
    "/gallery/flyers/flyer-9.webp",
    "/gallery/flyers/flyer-10.webp",
    "/gallery/flyers/flyer-11.webp",
    "/gallery/flyers/flyer-12.webp",
    "/gallery/flyers/flyer-13.webp",
    "/gallery/flyers/flyer-14.webp",
    "/gallery/flyers/flyer-15.webp",
    "/gallery/flyers/flyer-16.webp",
    "/gallery/flyers/flyer-17.webp",
    "/gallery/flyers/flyer-18.webp",
    "/gallery/flyers/flyer-19.webp",
    "/gallery/flyers/flyer-20.webp",
    "/gallery/flyers/flyer-21.webp",
    "/gallery/flyers/flyer-22.webp",
  ],
};

const Gallery = () => {
  const categories = Object.keys(galleryData);
  const [activeTab, setActiveTab] = useState(categories[0]);

  return (
    <section id="gallery" className="bg-[#0b0b0b] w-full py-20 md:py-28 px-6 md:px-12 relative">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center gap-2 text-red-500 font-mono text-xs tracking-widest uppercase mb-3">
          <span className="w-6 h-px bg-red-600"></span>
          <span>Full Design Gallery</span>
        </div>
        <h2 className="text-3xl md:text-5xl font-black tracking-tighter text-white mb-10">
          BROWSE THE <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-rose-600 to-red-700">WORK.</span>
        </h2>

        {/* Category Tabs */}
        <div className="flex flex-wrap gap-3 mb-10">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveTab(cat)}
              className={`px-4 py-2 rounded-full text-xs font-mono font-bold uppercase tracking-widest border transition-all ${
                activeTab === cat
                  ? 'bg-red-600 border-red-600 text-white shadow-[0_0_20px_rgba(229,9,20,0.4)]'
                  : 'bg-white/5 border-white/15 text-white/60 hover:border-red-600/50 hover:text-white'
              }`}
            >
              {cat} {galleryData[cat].length > 0 && `(${galleryData[cat].length})`}
            </button>
          ))}
        </div>

        {/* Image Grid */}
        {galleryData[activeTab].length > 0 ? (
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-5">
            {galleryData[activeTab].map((img, idx) => (
              <a
                key={idx}
                href={img}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative aspect-square rounded-xl overflow-hidden border border-white/10 hover:border-red-600 transition-all duration-300 hover:scale-[1.03] hover:shadow-[0_15px_40px_rgba(229,9,20,0.3)]"
              >
                <img
                  src={img}
                  alt={`${activeTab} ${idx + 1}`}
                  loading="lazy"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
              </a>
            ))}
          </div>
        ) : (
          <div className="text-white/40 font-mono text-sm py-16 text-center border border-dashed border-white/10 rounded-xl">
            More {activeTab.toLowerCase()} coming soon.
          </div>
        )}
      </div>
    </section>
  );
};

export default Gallery;
