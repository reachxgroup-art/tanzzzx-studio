import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const allItems = [
  { id: 1, type: 'photo', category: '3D Animation', title: 'Asset 3D-1', url: '/image/3d animation/1.webp', tall: true },
  { id: 2, type: 'photo', category: 'Video Production', title: 'Video Prod-1', url: '/image/video production/1.webp', tall: false },
  { id: 3, type: 'local_video', category: '3D Animation', title: 'Internal Render 1', url: '/video/3d animation/1.webm', tall: true },
  { id: 4, type: 'photo', category: '3D Animation', title: 'Asset 3D-2', url: '/image/3d animation/2.webp', tall: false },
  { id: 5, type: 'photo', category: '3D Animation', title: 'Asset 3D-3', url: '/image/3d animation/3.webp', tall: true },
  { id: 6, type: 'local_video', category: '3D Animation', title: 'Internal Render 2', url: '/video/3d animation/2.webm', tall: false },
  { id: 7, type: 'photo', category: 'Video Production', title: 'Video Prod-2', url: '/image/video production/2.webp', tall: true },
  { id: 8, type: 'photo', category: '3D Animation', title: 'Asset 3D-4', url: '/image/3d animation/4.webp', tall: false },
  { id: 9, type: 'photo', category: '3D Animation', title: 'Asset 3D-5', url: '/image/3d animation/5.webp', tall: true },
  { id: 10, type: 'local_video', category: '3D Animation', title: 'Internal Render 3', url: '/video/3d animation/3.webm', tall: false },
  { id: 11, type: 'photo', category: '3D Animation', title: 'Asset 3D-6', url: '/image/3d animation/6.webp', tall: false },
  { id: 12, type: 'photo', category: 'Video Production', title: 'Video Prod-3', url: '/image/video production/3.webp', tall: true },
  { id: 13, type: 'photo', category: '3D Animation', title: 'Asset 3D-7', url: '/image/3d animation/7.webp', tall: false },
  { id: 14, type: 'photo', category: '3D Animation', title: 'Asset 3D-8', url: '/image/3d animation/8.webp', tall: true },
  { id: 15, type: 'local_video', category: '3D Animation', title: 'Internal Render 4', url: '/video/3d animation/4.webm', tall: false },
  { id: 16, type: 'photo', category: '3D Animation', title: 'Asset 3D-9', url: '/image/3d animation/9.webp', tall: false },
  { id: 17, type: 'photo', category: 'Video Production', title: 'Video Prod-4', url: '/image/video production/4.webp', tall: true },
  { id: 18, type: 'photo', category: '3D Animation', title: 'Asset 3D-10', url: '/image/3d animation/10.webp', tall: false },
];

const filters = ['ALL', '3D Animation', 'Video Production'];

const Gallery = () => {
  const [active, setActive] = useState('ALL');

  const filtered = active === 'ALL' ? allItems : allItems.filter(i => i.category === active);

  return (
    <section id="gallery" className="bg-black text-white">
      {/* Filter bar */}
      <div className="flex items-center justify-between border-b border-white/10 px-8 md:px-14 sticky top-0 z-30 bg-black/95 backdrop-blur-md">
        <div className="flex overflow-x-auto hide-sm-md-scrollbar">
          {filters.map(f => (
            <button
              key={f}
              onClick={() => setActive(f)}
              className={`flex-shrink-0 px-6 py-5 text-[10px] font-black tracking-[0.3em] uppercase border-r border-white/10 transition-all ${
                active === f ? 'text-white border-b-2 border-b-white bg-white/5' : 'text-white/30 hover:text-white'
              }`}
            >
              {f}
            </button>
          ))}
        </div>
        <span className="text-white/20 text-[10px] tracking-widest uppercase pr-2 hidden md:block">{filtered.length} Works</span>
      </div>

      {/* Masonry Grid — zero gutter */}
      <motion.div
        layout
        className="grid gap-[2px]"
        style={{ gridTemplateColumns: 'repeat(auto-fill, minmax(340px, 1fr))' }}
      >
        <AnimatePresence>
          {filtered.map(item => (
            <motion.div
              key={item.id}
              layout
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4 }}
              className={`group relative overflow-hidden bg-white/5 cursor-pointer ${item.tall ? 'row-span-2' : ''}`}
              style={{ aspectRatio: item.tall ? '3/4' : '4/3' }}
            >
              {item.type === 'iframe' ? (
                <iframe
                  src={item.embedSrc}
                  className="w-full h-full border-0 group-hover:scale-105 transition-all duration-700 pointer-events-none"
                  frameBorder="0"
                  scrolling="no"
                  allowFullScreen
                ></iframe>
              ) : item.type === 'local_video' ? (
                <video
                  src={item.url}
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="w-full h-full object-cover group-hover:scale-105 transition-all duration-700"
                />
              ) : (
                <img
                  src={item.url}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-all duration-700"
                />
              )}

              {/* Hover overlay */}
              <div className="absolute inset-0 bg-black/70 opacity-0 group-hover:opacity-100 transition-opacity duration-400 flex flex-col justify-end p-6">
                <span className="text-white/50 text-[9px] tracking-[0.3em] uppercase font-bold mb-2">{item.category}</span>
                <h3 className="text-white text-2xl md:text-3xl font-black tracking-tight uppercase">{item.title}</h3>
                {item.type === 'video' && (
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 rounded-full border-2 border-white flex items-center justify-center">
                    <svg className="w-6 h-6 text-white fill-white ml-1" viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg>
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
    </section>
  );
};

export default Gallery;
