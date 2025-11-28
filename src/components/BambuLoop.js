import React, { useMemo, useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  Printer, 
  UploadCloud, 
  Gift, 
  AlertTriangle,
  ShoppingCart
} from 'lucide-react';

// --- Data ---

const steps = [
  { 
    id: 1, 
    text: "Bambu Lab incentivizes creators", 
    icon: Gift 
  },
  { 
    id: 2, 
    text: "Creators upload high quality models on MakerWorld", 
    icon: UploadCloud 
  },
  { 
    id: 3, 
    text: "Users complete successful prints", 
    icon: Printer 
  },
  { 
    id: 4, 
    text: "Users purchase printers, filament, and accessories", 
    icon: ShoppingCart 
  }
];

// --- Math Helpers for Circular Layout ---

const RADIUS = 340; 
const CENTER = { x: 400, y: 400 }; // Center of the SVG canvas

/**
 * Calculates coordinates for card positioning.
 * Cards are positioned outside the circle, with their inner edge aligned with the circle border.
 * -90 deg offset ensures Step 1 starts at the top.
 */
const getCardPosition = (index, total) => {
  const angle = (index * 360) / total - 90; 
  const rad = (angle * Math.PI) / 180;
  
  // Card dimensions
  const cardWidth = 220; // Actual card width
  const cardHeight = 120; // Approximate card height
  const cardPadding = 10; // Small space between circle border and card inner edge
  
  // Calculate where we want the card's inner edge (closest to circle) to be
  // Inner edge should be at: RADIUS + padding from center
  // Card center should be at: RADIUS + padding + (cardWidth / 2) from center
  const cardCenterDistance = RADIUS + cardPadding + (cardWidth / 2);
  
  // Calculate card center position
  const cardCenterX = CENTER.x + cardCenterDistance * Math.cos(rad);
  const cardCenterY = CENTER.y + cardCenterDistance * Math.sin(rad);
  
  // Adjust vertical position for top/bottom cards
  // Top card (index 0, angle -90°) needs to move down
  // Bottom card (index 2, angle 90°) needs to move up
  let verticalAdjustment = 0;
  if (index === 0) { // Top card
    verticalAdjustment = 75; // Move down
  } else if (index === 2) { // Bottom card
    verticalAdjustment = -50; // Move up
  }
  
  // Position top-left corner (since we're not using transform)
  // Subtract half width/height from center to get top-left
  const topLeftX = cardCenterX - (cardWidth / 2);
  const topLeftY = cardCenterY - (cardHeight / 2) + verticalAdjustment;
  
  return {
    x: topLeftX,
    y: topLeftY,
    angle: angle,
    rad: rad
  };
};

// --- Sub-Components ---

/**
 * NodeCard: The visual representation of a step
 * Positioned with center point on the circle perimeter
 */
const NodeCard = ({ step, position, index }) => {
  const isProblemStart = step.id === 2;
  const isProblemEnd = step.id === 3;

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: index * 0.15, duration: 0.6, type: "spring" }}
      className="absolute pointer-events-none z-10" 
      style={{ 
        left: `${position.x}px`, 
        top: `${position.y}px`
      }}
    >
      <div 
        className={`
          relative rounded-xl border backdrop-blur-md transition-all duration-500
          flex flex-col items-center justify-center gap-2.5 shadow-2xl
          w-[220px] py-4 px-3
          ${isProblemStart 
            ? "bg-slate-900/90 border-slate-600 shadow-orange-500/20" 
            : isProblemEnd 
              ? "bg-slate-900/90 border-slate-600" 
              : "bg-slate-900/70 border-slate-800"
          }
        `}
      >
        {/* Glow effect for regular cards */}
        {!isProblemStart && !isProblemEnd && (
          <div className="absolute inset-0 rounded-xl bg-gradient-to-b from-emerald-500/5 to-transparent opacity-50" />
        )}
        
        {/* Icon */}
        <div className={`
            p-2.5 rounded-full relative z-10 flex-shrink-0 mb-0.5
            ${isProblemStart 
              ? "bg-orange-500/20 text-orange-400 ring-1 ring-orange-500/50" 
              : "bg-slate-800 text-slate-200 ring-1 ring-white/10"
            }
          `}>
          <step.icon size={20} />
        </div>

        {/* Text */}
        <p className={`
          text-xs font-medium leading-tight z-10 text-center w-full
          ${isProblemStart ? "text-slate-100" : "text-slate-400"}
        `}
        style={{ 
          wordBreak: 'break-word',
          hyphens: 'auto'
        }}
        >
          {step.text}
        </p>
      </div>
    </motion.div>
  );
};

/**
 * MobileCard: The visual representation of a step (Mobile/Vertical)
 */
const MobileCard = ({ step, isActive }) => {
  const isProblemEnd = step.id === 3;
  const isBroken = isProblemEnd;

  // Determine styles based on active state and broken status
  let containerStyle = "bg-slate-900/70 border-slate-800";
  let iconStyle = "bg-slate-800 text-slate-400 ring-1 ring-white/10";
  let textStyle = "text-slate-400";

  if (isActive) {
    if (isBroken) {
      // Active but Broken -> Red/Orange Warning
      containerStyle = "bg-slate-900/95 border-red-500/50 shadow-red-500/20 shadow-lg scale-[1.02]";
      iconStyle = "bg-red-500/20 text-red-400 ring-1 ring-red-500/50";
      textStyle = "text-slate-200";
    } else {
      // Active and Healthy -> Green
      containerStyle = "bg-slate-900/95 border-emerald-500/50 shadow-emerald-500/20 shadow-lg scale-[1.02]";
      iconStyle = "bg-emerald-500/20 text-emerald-400 ring-1 ring-emerald-500/50";
      textStyle = "text-slate-100";
    }
  } else if (isBroken) {
    // Inactive Broken Node (Optional subtle hint)
    containerStyle = "bg-slate-900/70 border-slate-800";
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className={`
        relative rounded-xl border backdrop-blur-md transition-all duration-500
        flex items-center gap-4 p-4 w-full max-w-sm mx-auto z-10
        ${containerStyle}
      `}
    >
      <div className={`
        p-3 rounded-full flex-shrink-0 relative z-10 transition-colors duration-500
        ${iconStyle}
      `}>
        <step.icon size={20} />
      </div>
      <p className={`
        text-sm font-medium leading-snug z-10 transition-colors duration-500
        ${textStyle}
      `}>
        {step.text}
      </p>
    </motion.div>
  );
};

const MobileConnector = ({ isFriction }) => {
  return (
    <div className="flex flex-col items-center justify-center relative my-1 w-full h-8">
      {isFriction ? (
        <div className="h-full flex flex-col items-center justify-center relative w-full">
          <div className="absolute inset-y-0 w-px border-l-2 border-dashed border-red-500/30 h-full" />
          <div className="z-10 bg-slate-950 border border-red-500/30 rounded-full p-1 shadow-lg">
            <AlertTriangle size={10} className="text-red-500/70" />
          </div>
        </div>
      ) : (
        <div className="h-full w-px bg-slate-800" />
      )}
    </div>
  );
};

const MobileLoop = () => {
  const [activeStep, setActiveStep] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % steps.length);
    }, 2500); // Switch every 2.5 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex flex-col items-center w-full py-8 px-2">
      {steps.map((step, i) => {
        // The problem link is leading INTO step 3 (index 2) - "Users complete successful prints"
        const showFrictionConnector = step.id === 3;

        return (
          <React.Fragment key={step.id}>
            {/* Connector before card (except first) */}
            {i > 0 && (
              <MobileConnector isFriction={showFrictionConnector} />
            )}
            <MobileCard 
              step={step} 
              isActive={activeStep === i} 
            />
          </React.Fragment>
        );
      })}
    </div>
  );
};

// --- Main Component ---

export default function BambuLoop() {
  const cardPositions = useMemo(() => {
    return steps.map((_, i) => getCardPosition(i, steps.length));
  }, []);

  // Calculate position for the warning label
  const warningAngleRad = 45 * (Math.PI / 180); // 45 degrees in radians
  const warningDist = RADIUS + 120; // Increased distance from center to prevent cutoff
  const warningPos = {
    x: CENTER.x + warningDist * Math.cos(warningAngleRad),
    y: CENTER.y + warningDist * Math.sin(warningAngleRad)
  };

  // Calculate midpoint of the problematic arc (Step 2 to Step 3)
  // Step 2 is at 0 deg (3 o'clock), Step 3 is at 90 deg (6 o'clock)
  // Midpoint is 45 deg (Bottom Right)
  const problemArcMidRad = (45 * Math.PI) / 180;
  const problemArcMidPoint = {
    x: CENTER.x + RADIUS * Math.cos(problemArcMidRad),
    y: CENTER.y + RADIUS * Math.sin(problemArcMidRad)
  };

  const GREEN = "#10b981";
  const RED = "#ef4444";

  return (
    <div className="relative w-full flex items-center justify-center py-4 md:py-8 px-0 md:px-4 min-h-0 md:min-h-[800px] lg:min-h-[1000px]">
      {/* --- Desktop: Circular Layout (Hidden on Mobile) --- */}
      <div className="hidden md:block relative w-[800px] h-[800px] md:scale-[0.75] lg:scale-100 origin-center transition-transform duration-500 overflow-visible">
        
        {/* SVG Layer */}
        <svg 
          width="800" 
          height="800" 
          viewBox="-50 -50 900 900" 
          className="absolute top-0 left-0 pointer-events-none overflow-visible"
          preserveAspectRatio="xMidYMid meet"
        >
          <defs>
            {/* Filter for glow */}
            <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
              <feGaussianBlur stdDeviation="3" result="blur" />
              <feComposite in="SourceGraphic" in2="blur" operator="over" />
            </filter>
          </defs>

          {/* 1. Background Track (Uniform Continuous Circle) */}
          <circle
            cx={CENTER.x}
            cy={CENTER.y}
            r={RADIUS}
            fill="none"
            stroke="#334155" // Slate-700
            strokeWidth="2"
            opacity="0.5"
          />

          {/* 2. Active Animated Sweep (Single Continuous Path) */}
          {/* 
              Rotated by -90deg so 0 pathLength is at 12 o'clock.
              The problem area (Step 2 -> 3) corresponds to 25% -> 50% of the circle length.
          */}
          <motion.circle
            cx={CENTER.x}
            cy={CENTER.y}
            r={RADIUS}
            fill="none"
            strokeWidth="4"
            strokeLinecap="round"
            transform={`rotate(-90 ${CENTER.x} ${CENTER.y})`}
            style={{ filter: "url(#glow)" }}
            initial={{ pathLength: 0.15, pathOffset: 0 }}
            animate={{ 
              pathOffset: [0, 1],
              stroke: [GREEN, GREEN, RED, RED, GREEN, GREEN]
            }}
            transition={{
              pathOffset: {
                duration: 6,
                repeat: Infinity,
                ease: "linear"
              },
              stroke: {
                duration: 6,
                repeat: Infinity,
                ease: "linear",
                // Adjusted Timings:
                // 0.15: Head enters zone (Start turning Red)
                // 0.25: Tail enters zone (Fully Red)
                // 0.35: Head leaves zone (Start turning Green - earlier)
                // 0.45: Tail leaves zone (Fully Green - earlier)
                times: [0, 0.15, 0.25, 0.35, 0.45, 1]
              }
            }}
          />
          
          {/* Warning Connector Line */}
          <line
            x1={warningPos.x}
            y1={warningPos.y}
            x2={problemArcMidPoint.x}
            y2={problemArcMidPoint.y}
            stroke="#ef4444" 
            strokeWidth="2"
            strokeDasharray="4 4"
            opacity="0.6"
          />
        </svg>

        {/* Nodes Layer */}
        {steps.map((step, i) => (
          <NodeCard 
            key={step.id} 
            step={step} 
            index={i} 
            position={cardPositions[i]}
          />
        ))}

        {/* --- The "Break" Annotation --- */}
        <motion.div
          className="absolute z-20 pointer-events-none"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1, duration: 0.5 }}
          style={{
            top: `${warningPos.y}px`,
            left: `${warningPos.x}px`,
            transform: 'translate(-50%, -50%)' // Center the div itself
          }}
        >
          <motion.div 
            className="flex items-center gap-3 bg-red-950/80 border border-red-500/50 px-4 py-2 rounded-lg backdrop-blur-md shadow-[0_0_30px_-5px_rgba(249,115,22,0.3)]"
            animate={{
              x: [0, -1, 1, -1, 0], // Subtle shake
            }}
            transition={{
              repeat: Infinity,
              duration: 4,
              repeatDelay: 2
            }}
          >
            <div className="relative shrink-0">
              <AlertTriangle className="w-5 h-5 text-orange-500" />
              <motion.div 
                className="absolute inset-0 bg-orange-500 rounded-full blur-md"
                animate={{ opacity: [0, 0.5, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              />
            </div>
            <div className="flex flex-col text-left">
              <span className="text-orange-300 font-bold text-[10px] uppercase tracking-wider">Warning</span>
              <span className="text-white text-sm font-medium whitespace-nowrap">Print reliability breaks here</span>
            </div>
          </motion.div>
        </motion.div>

        {/* Center Label */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-slate-800 pointer-events-none">
           <div className="w-32 h-32 rounded-full border border-slate-800/50 flex items-center justify-center bg-slate-900/30 backdrop-blur-sm">
              <span className="text-xs font-mono text-slate-600 tracking-widest uppercase text-center">Growth<br/>Engine</span>
           </div>
        </div>

      </div>

      {/* --- Mobile: Vertical Layout --- */}
      <div className="md:hidden w-full">
        <MobileLoop />
      </div>
    </div>
  );
}

