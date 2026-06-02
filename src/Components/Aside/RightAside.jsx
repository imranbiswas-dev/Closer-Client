import { useState } from 'react';
import s26 from '../../assets/Sponsored/Galaxy-S26-Ultra.webp';
const RightAside = () => {
 
  const [advertisements, setAdvertisements] = useState([
    {
      id: 1,
      title: "Upgrade to Linker Premium",
      description: "Enjoy an ad-free experience, custom profile themes, and advanced analytics.",
      image: s26,
      ctaText: "Shop Now",
      link: "https://www.applegadgetsbd.com/product/galaxy-s26-ultra-5g"
    },
    {
      id: 2,
      title: "TechGeek Electronics",
      description: "Get up to 40% off on latest mechanical keyboards and premium tech gadgets.",
      image: "https://images.unsplash.com/photo-1587829741301-dc798b83add3?q=80&w=300&auto=format&fit=crop",
      ctaText: "Shop Now",
      link: "#"
    }
  ]);

  const handleCloseAd = (id) => {
    setAdvertisements(prevAds => prevAds.filter(ad => ad.id !== id));
  };

  return (
    <aside className="w-full max-w-sm hidden lg:block sticky top-1 h-[calc(100vh-5rem)] overflow-y-auto px-4 py-2 space-y-4 border-l border-gray-100 dark:border-gray-800">
      
      {/* Header Section */}
      <div className="flex items-center justify-between px-1">
        <h3 className="text-sm font-semibold text-gray-500 dark:text-gray-400 tracking-wider uppercase">
          Sponsored
        </h3>
      </div>

      {/* Advertisements List */}
      {advertisements.length > 0 ? (
        <div className="space-y-4">
          {advertisements.map((ad) => (
            <div 
              key={ad.id} 
              className="group relative bg-white dark:bg-gray-900 rounded-2xl overflow-hidden border border-gray-100 dark:border-gray-800 shadow-sm transition-all duration-300 hover:shadow-md"
            >
              {/* Close Button */}
              <button 
                onClick={() => handleCloseAd(ad.id)}
                className="absolute top-2 right-2 z-10 p-1 rounded-full bg-black/40 hover:bg-black/60 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-200"
                aria-label="Hide advertisement"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>

              {/* Ad Image & Content */}
              <a href={ad.link} rel="noopener noreferrer" className="block">
                <div className="relative h-66 w-full overflow-hidden bg-gray-100 dark:bg-gray-800">
                  <img 
                    src={ad.image} 
                    alt={ad.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                </div>
                
                <div className="p-4">
                  <div className="flex items-center justify-between mb-1">
                    <h4 className="font-semibold text-gray-900 dark:text-gray-100 text-sm md:text-base line-clamp-1">
                      {ad.title}
                    </h4>
                    <span className="text-[10px] font-medium text-gray-400 dark:text-gray-500 border border-gray-200 dark:border-gray-700 rounded px-1 uppercase tracking-tight">
                      Ad
                    </span>
                  </div>
                  
                  {/* <p className="text-xs text-gray-600 dark:text-gray-400 line-clamp-2 mb-3 leading-relaxed">
                    {ad.description}
                  </p> */}

                  <div className="w-full text-center py-2 px-4 rounded-xl text-xs font-medium text-blue-600 bg-blue-50 dark:text-blue-400 dark:bg-blue-950/40 group-hover:bg-blue-600 group-hover:text-white dark:group-hover:bg-blue-600 dark:group-hover:text-white transition-colors duration-200">
                    {ad.ctaText}
                  </div>
                </div>
              </a>
            </div>
          ))}
        </div>
      ) : (
        <div className="text-center py-8 border border-dashed border-gray-200 dark:border-gray-800 rounded-2xl">
          <p className="text-xs text-gray-400 dark:text-gray-500">No sponsored content available.</p>
        </div>
      )}

      {/* Footer Links (Optional Footer for Social Platforms) */}
      <div className="px-1 text-[11px] text-gray-400 dark:text-gray-500 space-x-2 space-y-1">
        <a href="#" className="hover:underline">Privacy</a>
        <span>·</span>
        <a href="#" className="hover:underline">Terms</a>
        <span>·</span>
        <a href="#" className="hover:underline">Advertising</a>
        <span>·</span>
        <p className="mt-2">© 2026 Linker Inc.</p>
      </div>

    </aside>
  );
};

export default RightAside;