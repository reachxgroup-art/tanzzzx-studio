import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-scroll';

const Hero = () => {
  return (
    <section 
      id="home" 
      className="relative w-full h-screen overflow-hidden bg-black"
    >

      {/* ── Background Video ── */}
      <motion.div
        initial={{ opacity: 0, scale: 1.04 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
        className="absolute inset-0"
      >
        <video
          src="/video/hero0.webm"
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
        />
      </motion.div>

      {/* ── Overlay ── */}
      <div className="absolute inset-0 bg-black/10 z-0 pointer-events-none" />

      {/* ── Central CTAs ── */}
      <div className="absolute inset-0 z-10 flex flex-col items-center justify-center gap-8 md:gap-12 px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 1 }}
          className="flex flex-col sm:flex-row items-center gap-5 md:gap-8"
        >
          <a
            href="https://www.youtube.com/@TanzzzXStudio"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative px-10 py-4 md:px-14 md:py-5 bg-white text-black text-[10px] md:text-xs font-black tracking-[0.4em] uppercase overflow-hidden transition-all duration-500 hover:scale-[1.03] active:scale-95"
          >
            <span className="relative z-10">View Portfolio</span>
            <div className="absolute inset-x-0 bottom-0 h-0 bg-neutral-200 group-hover:h-full transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]" />
          </a>
          
          <a
            href="https://reachxgroup.com"
            target="_blank"
            rel="noopener noreferrer"
            className="group px-10 py-4 md:px-14 md:py-5 border border-white/40 text-white text-[10px] md:text-xs font-black tracking-[0.4em] uppercase backdrop-blur-md hover:bg-white hover:text-black hover:border-white transition-all duration-500 hover:scale-[1.03] active:scale-95"
          >
            ReachX Group
          </a>
        </motion.div>
      </div>

      {/* ── Bottom-Left: Scroll Hint ── */}
      <div className="absolute bottom-10 left-8 md:left-14 z-10 flex flex-col items-start gap-4">
        <Link
          to="gallery"
          smooth
          duration={900}
          className="group flex items-center gap-4 cursor-pointer"
        >
          <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-white/60 group-hover:text-white transition-colors">Explore Gallery</span>
          <span className="block w-8 h-[1px] bg-white/40 group-hover:w-14 group-hover:bg-white transition-all duration-300" />
        </Link>
      </div>

    </section>
  );
};

export default Hero;
