"use client";

import React, { useRef, useEffect, useState } from "react";
import gsap from "gsap";
import { ChevronRight } from "lucide-react";
import "./MagicBento.css";

export interface BentoItem {
  icon: React.ReactNode;
  title: string;
  short: string;
  detail: string;
  bullets: string[];
}

export interface MagicBentoProps {
  items: BentoItem[];
  onCardClick: (item: BentoItem) => void;
  textAutoHide?: boolean;
  enableStars?: boolean;
  enableSpotlight?: boolean;
  enableBorderGlow?: boolean;
  enableTilt?: boolean;
  enableMagnetism?: boolean;
  clickEffect?: boolean;
  spotlightRadius?: number;
  particleCount?: number;
  glowColor?: string;
}

const BentoCard = ({
  item,
  index,
  onClick,
  enableSpotlight,
  enableTilt,
  enableMagnetism,
  clickEffect,
  spotlightRadius = 280,
  glowColor = "37, 99, 235",
}: {
  item: BentoItem;
  index: number;
  onClick: () => void;
  enableSpotlight: boolean;
  enableTilt: boolean;
  enableMagnetism: boolean;
  clickEffect: boolean;
  spotlightRadius: number;
  glowColor: string;
}) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const spotlightRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    if (!cardRef.current) return;
    const card = cardRef.current;
    const spotlight = spotlightRef.current;

    let xTo: any, yTo: any;
    if (spotlight && enableSpotlight) {
      xTo = gsap.quickTo(spotlight, "x", { duration: 0.3, ease: "power3" });
      yTo = gsap.quickTo(spotlight, "y", { duration: 0.3, ease: "power3" });
    }
    
    const tiltXTo = enableTilt ? gsap.quickTo(card, "rotateY", { duration: 0.5, ease: "power2.out" }) : null;
    const tiltYTo = enableTilt ? gsap.quickTo(card, "rotateX", { duration: 0.5, ease: "power2.out" }) : null;
    const transXTo = enableMagnetism ? gsap.quickTo(card, "x", { duration: 0.5, ease: "power2.out" }) : null;
    const transYTo = enableMagnetism ? gsap.quickTo(card, "y", { duration: 0.5, ease: "power2.out" }) : null;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      if (spotlight && xTo && yTo) {
        xTo(x - spotlightRadius / 2);
        yTo(y - spotlightRadius / 2);
      }

      if (enableTilt && tiltXTo && tiltYTo) {
        const xc = rect.width / 2;
        const yc = rect.height / 2;
        const dx = x - xc;
        const dy = y - yc;
        tiltXTo(dx * 0.025);
        tiltYTo(-dy * 0.025);
      }

      if (enableMagnetism && transXTo && transYTo) {
        const xc = rect.width / 2;
        const yc = rect.height / 2;
        transXTo((x - xc) * 0.04);
        transYTo((y - yc) * 0.04);
      }
    };

    const handleMouseLeave = () => {
      if (enableTilt && tiltXTo && tiltYTo) {
        tiltXTo(0);
        tiltYTo(0);
      }
      if (enableMagnetism && transXTo && transYTo) {
        transXTo(0);
        transYTo(0);
      }
    };

    card.addEventListener("mousemove", handleMouseMove);
    card.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      card.removeEventListener("mousemove", handleMouseMove);
      card.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [enableSpotlight, enableTilt, enableMagnetism, spotlightRadius]);

  const handleClick = () => {
    if (clickEffect && cardRef.current) {
      gsap.fromTo(cardRef.current, 
        { scale: 0.95 }, 
        { scale: 1, duration: 0.4, ease: "elastic.out(1, 0.5)" }
      );
    }
    onClick();
  };

  // Clean 4-column balanced layout on desktop, 2-col on tablet
  const gridClass = "lg:col-span-1 md:col-span-1";
  const sizeClass = "h-[250px] lg:h-[260px]";

  return (
    <div
      ref={cardRef}
      onClick={handleClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{ transformStyle: "preserve-3d" }}
      className={`magic-bento-card group p-6 lg:p-7 flex flex-col justify-between cursor-pointer w-full h-full ${gridClass} ${sizeClass} border-[rgba(255,255,255,0.06)] hover:border-[rgba(37,99,235,0.25)] hover:-translate-y-1 hover:shadow-xl transition-all duration-300`}
    >
      {enableSpotlight && (
        <div
          ref={spotlightRef}
          className="magic-bento-spotlight"
          style={{
            width: spotlightRadius,
            height: spotlightRadius,
            background: `radial-gradient(circle, rgba(${glowColor},0.08) 0%, rgba(${glowColor},0) 70%)`,
            opacity: isHovered ? 1 : 0,
          }}
        />
      )}

      <div className="relative z-30 flex-grow flex flex-col">
        <div className="flex items-start justify-between mb-4">
           <div className="w-9 h-9 rounded-[10px] bg-[rgba(255,255,255,0.03)] border border-[rgba(255,255,255,0.05)] flex items-center justify-center transition-colors group-hover:bg-[rgba(37,99,235,0.08)] group-hover:border-[rgba(37,99,235,0.2)] text-[var(--accent)] flex-shrink-0">
             {item.icon}
           </div>
           {/* Subtle static category tag */}
           <span className="px-2 py-0.5 bg-[rgba(255,255,255,0.03)] text-[#94A3B8] text-[9px] uppercase font-semibold tracking-widest rounded border border-[rgba(255,255,255,0.05)] group-hover:text-[var(--accent)] group-hover:border-[rgba(37,99,235,0.2)] transition-colors">
             Service
           </span>
        </div>
        
        <h3 className="font-bold mb-2 text-[#F8FAFC] leading-tight text-[16px] lg:text-[17px] group-hover:text-white transition-colors" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
          {item.title}
        </h3>
        <p className="leading-relaxed text-[#64748B] group-hover:text-[#94A3B8] text-[13px] flex-grow line-clamp-3 transition-colors">
          {item.short}
        </p>
      </div>

      <div className="relative z-30 mt-4 pt-4 border-t border-[rgba(255,255,255,0.04)] flex items-center justify-between group-hover:border-[rgba(37,99,235,0.15)] transition-colors duration-300">
        <span className="text-[10px] font-bold uppercase tracking-widest text-[#64748B] group-hover:text-[var(--accent)] transition-colors">
          View Details
        </span>
        <ChevronRight size={14} className="text-[#64748B] transform group-hover:translate-x-1 group-hover:text-[var(--accent)] transition-all duration-300" />
      </div>
    </div>
  );
};

export default function MagicBento({
  items,
  onCardClick,
  enableSpotlight = true,
  enableTilt = true,
  enableMagnetism = true,
  clickEffect = true,
  spotlightRadius = 280,
  glowColor = "37, 99, 235",
}: MagicBentoProps) {
  return (
    <div className="magic-bento-grid relative z-20">
      {items.map((item, i) => (
        <BentoCard
          key={i}
          item={item}
          index={i}
          onClick={() => onCardClick(item)}
          enableSpotlight={enableSpotlight}
          enableTilt={enableTilt}
          enableMagnetism={enableMagnetism}
          clickEffect={clickEffect}
          spotlightRadius={spotlightRadius}
          glowColor={glowColor}
        />
      ))}
    </div>
  );
}
