import React, { useState, useRef, useCallback } from 'react';
import { ArrowLeftRight } from 'lucide-react';

interface BeforeAfterProps {
  beforeImage: string;
  afterImage: string;
  className?: string;
}

const BeforeAfterSlider: React.FC<BeforeAfterProps> = ({ beforeImage, afterImage, className = '' }) => {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const [showAfter, setShowAfter] = useState(true);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMove = useCallback((clientX: number) => {
    if (containerRef.current) {
      const rect = containerRef.current.getBoundingClientRect();
      const x = Math.max(0, Math.min(clientX - rect.left, rect.width));
      const percentage = (x / rect.width) * 100;
      setSliderPosition(percentage);
    }
  }, []);

  const handleMouseDown = () => setIsDragging(true);
  const handleMouseUp = () => setIsDragging(false);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (isDragging) handleMove(e.clientX);
  };

  const handleTouchStart = () => setIsDragging(true);
  const handleTouchEnd = () => setIsDragging(false);

  const handleTouchMove = (e: React.TouchEvent) => {
    if (isDragging) handleMove(e.touches[0].clientX);
  };

  return (
    <>
      {/* Mobile Version: Toggle Switch */}
      <div className={`md:hidden relative w-full aspect-video rounded-2xl overflow-hidden shadow-xl ${className}`}>
        <img
          src={showAfter ? afterImage : beforeImage}
          alt={showAfter ? "After editing" : "Before editing"}
          className={`w-full h-full object-cover transition-all duration-500 ${!showAfter ? 'grayscale brightness-75' : ''}`}
        />

        <div className="absolute top-4 left-4 right-4 flex justify-between items-center z-10">
          <span className={`px-3 py-1 rounded-full text-xs font-bold uppercase backdrop-blur-sm transition-colors ${!showAfter ? 'bg-black/60 text-white' : 'bg-black/30 text-white/50'}`}>
            Antes
          </span>
          <span className={`px-3 py-1 rounded-full text-xs font-bold uppercase shadow-md transition-colors ${showAfter ? 'bg-primary text-white' : 'bg-black/30 text-white/50'}`}>
            Depois
          </span>
        </div>

        <button
          onClick={() => setShowAfter(!showAfter)}
          className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-surface/80 backdrop-blur-md border border-white/10 text-white px-6 py-2 rounded-full font-bold text-sm shadow-lg flex items-center gap-2 active:scale-95 transition-transform"
        >
          <ArrowLeftRight size={16} />
          {showAfter ? 'Ver Antes' : 'Ver Depois'}
        </button>
      </div>

      {/* Desktop Version: Slider */}
      <div
        ref={containerRef}
        className={`hidden md:block relative w-full aspect-video overflow-hidden rounded-2xl cursor-col-resize select-none shadow-xl ${className}`}
        onMouseDown={handleMouseDown}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseUp}
        onMouseMove={handleMouseMove}
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
        onTouchMove={handleTouchMove}
      >
        {/* Before Image (Background) */}
        <img
          src={beforeImage}
          alt="Before editing"
          className="absolute top-0 left-0 w-full h-full object-cover grayscale brightness-75"
        />

        {/* Badge Before */}
        <div className="absolute top-4 left-4 bg-black/60 text-white px-3 py-1 rounded-full text-xs font-bold uppercase backdrop-blur-sm z-10">
          Antes (Amador)
        </div>

        {/* After Image (Foreground, Clipped) */}
        <div
          className="absolute top-0 left-0 h-full overflow-hidden"
          style={{ width: `${sliderPosition}%` }}
        >
          <img
            src={afterImage}
            alt="After editing"
            className="absolute top-0 left-0 h-full max-w-none object-cover"
            style={{ width: containerRef.current ? containerRef.current.offsetWidth : '100%' }}
          />
          {/* Badge After */}
          <div className="absolute top-4 right-4 bg-primary text-white px-3 py-1 rounded-full text-xs font-bold uppercase shadow-md z-10">
            Depois (FoodVision)
          </div>
        </div>

        {/* Slider Handle */}
        <div
          className="absolute top-0 bottom-0 w-1 bg-white cursor-col-resize z-20 flex items-center justify-center shadow-[0_0_10px_rgba(0,0,0,0.5)]"
          style={{ left: `${sliderPosition}%` }}
        >
          <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-lg -ml-[18px]">
            <ArrowLeftRight size={20} className="text-primary" />
          </div>
        </div>
      </div>
    </>
  );
};

export default BeforeAfterSlider;