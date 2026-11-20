import React from 'react';
import { KontyraLogo } from './KontyraLogo';

export interface KontyraLoaderProps {
  /**
   * Archetype variant:
   * - "neural-pulse": Breathing logo with twin concentric orbiting particle rings (default boot)
   * - "laser-trace": Glowing laser stroke tracing directly along the authentic twin-loop contours
   * - "chromatic-sweep": Rotating conic halo card with specular logo glint
   * - "micro": Compact 20px inline / in-button pulsing loader
   */
  variant?: 'neural-pulse' | 'laser-trace' | 'chromatic-sweep' | 'micro';
  size?: 'sm' | 'md' | 'lg' | 'xl';
  label?: string;
  className?: string;
  customLogoNode?: React.ReactNode;
}

export const KontyraLoader: React.FC<KontyraLoaderProps> = ({
  variant = 'neural-pulse',
  size = 'md',
  label,
  className = '',
  customLogoNode,
}) => {
  const sizeMap = {
    sm: 'w-8 h-8',
    md: 'w-14 h-14',
    lg: 'w-20 h-20',
    xl: 'w-28 h-28',
  };

  // Archetype 2: Laser Contour Trace
  if (variant === 'laser-trace') {
    const id = 'laser-kontyra-trace';
    return (
      <div className={`flex flex-col items-center justify-center gap-3 ${className}`}>
        <style>{`
          @keyframes laserKontyraStrokeAnim {
            0% { stroke-dashoffset: 1400; opacity: 0.2; }
            25% { opacity: 1; }
            75% { opacity: 1; }
            100% { stroke-dashoffset: 0; opacity: 0.3; }
          }
          .k-laser-left-anim {
            stroke-dasharray: 500 900;
            stroke-dashoffset: 1400;
            animation: laserKontyraStrokeAnim 2.6s ease-in-out infinite alternate;
          }
          .k-laser-main-anim {
            stroke-dasharray: 600 1000;
            stroke-dashoffset: 1600;
            animation: laserKontyraStrokeAnim 2.6s ease-in-out infinite alternate;
            animation-delay: 0.3s;
          }
        `}</style>
        <div className={`relative ${sizeMap[size]}`}>
          <svg
            viewBox="240 285 545 340"
            className="w-full h-full relative z-10"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              <linearGradient id={`${id}-left`} x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#13D9F2" />
                <stop offset="60%" stopColor="#079BFF" />
                <stop offset="100%" stopColor="#0B45E8" />
              </linearGradient>
              <linearGradient id={`${id}-main`} x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#1747F2" />
                <stop offset="35%" stopColor="#4B00E8" />
                <stop offset="70%" stopColor="#B000D5" />
                <stop offset="100%" stopColor="#E60082" />
              </linearGradient>
              <filter id={`${id}-glow`} x="-20%" y="-20%" width="140%" height="140%">
                <feGaussianBlur stdDeviation="3.5" result="blur" />
                <feMerge>
                  <feMergeNode in="blur" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>
            </defs>
            {/* Ghost outline */}
            <path
              d="M 392.00 297.00 L 391.00 298.00 C 378.02 301.60 365.17 305.62 352.48 310.37 C 327.91 319.49 304.70 332.06 283.47 348.06 C 274.63 354.76 266.39 362.24 259.03 370.52 C 250.77 379.80 244.60 390.69 241.67 402.77 C 238.74 414.73 240.23 427.67 246.51 438.45 C 251.34 446.81 258.82 453.86 267.31 458.74 C 278.48 465.17 291.04 468.22 303.62 469.75 C 322.25 472.07 341.09 471.21 359.62 468.60 C 383.15 465.34 406.49 458.37 428.69 448.97 C 445.62 441.77 461.94 433.00 477.53 423.01 C 491.50 414.07 505.02 404.41 517.92 393.99 C 524.28 388.89 530.40 383.47 536.42 377.94 L 538.00 376.51 L 539.00 377.49 C 543.83 382.49 548.89 387.27 554.02 391.95 C 555.45 393.25 556.75 394.70 558.20 395.97 C 564.12 401.21 570.18 406.31 576.49 411.13 C 585.55 418.06 595.03 424.47 604.81 430.34 C 619.68 439.29 635.43 446.73 651.81 452.61 C 668.51 458.62 685.92 462.67 703.61 464.49 C 720.67 466.26 738.16 465.17 754.91 461.27 C 765.17 458.89 775.47 454.89 784.05 448.45 C 790.62 443.51 796.22 436.90 799.41 429.23 C 802.73 421.17 803.54 411.96 801.37 403.56 C 799.04 394.52 793.63 386.35 786.85 379.83 C 777.62 371.02 766.75 363.95 755.44 358.33 C 739.06 350.15 721.43 344.75 703.50 341.67 C 685.91 338.64 667.92 338.25 650.21 340.59 C 631.78 343.00 613.62 347.88 596.24 354.75 C 584.05 359.54 572.23 365.48 560.85 372.27 C 554.21 376.24 547.74 380.52 541.42 385.03 C 540.35 385.79 539.73 385.93 538.74 384.97 C 532.48 379.03 525.86 373.49 519.00 368.21 C 506.77 358.74 493.79 350.28 480.24 342.92 C 463.38 333.72 445.45 326.23 426.90 320.67 C 415.42 317.24 403.80 314.48 392.00 312.65 L 392.00 297.00 Z"
              stroke="rgba(255,255,255,0.08)"
              strokeWidth="6"
              fill="rgba(255,255,255,0.02)"
            />
            <path
              d="M 440.00 447.00 L 461.00 468.00 C 476.99 484.01 493.67 499.27 511.00 513.79 C 527.79 527.85 545.46 540.78 563.85 552.48 C 587.89 567.80 613.25 580.89 640.17 590.73 C 659.88 597.94 680.45 603.20 701.27 605.99 C 719.98 608.52 739.06 608.59 757.73 605.85 C 770.83 603.93 783.89 599.99 795.73 593.67 C 805.91 588.22 815.11 580.47 821.36 570.61 C 826.96 561.73 829.74 551.18 829.49 540.66 C 829.23 529.75 825.81 519.00 819.78 509.84 C 812.59 498.98 802.93 489.92 792.04 482.78 C 777.63 473.34 761.76 466.08 745.22 461.04 C 730.08 456.41 714.39 453.64 698.61 452.88 C 682.26 452.09 665.91 453.61 649.79 457.26 C 632.74 461.12 616.27 467.58 600.56 475.87 C 586.29 483.42 572.76 492.45 560.10 502.77 C 553.48 508.15 547.05 513.80 540.85 519.67 L 538.00 522.37 L 536.00 520.48 C 527.75 512.72 519.09 505.41 510.07 498.68 C 499.76 491.01 488.94 484.09 477.72 477.92 C 465.34 471.12 452.62 465.04 439.53 459.77 L 440.00 447.00 Z"
              stroke="rgba(255,255,255,0.08)"
              strokeWidth="6"
              fill="rgba(255,255,255,0.02)"
            />
            {/* Animated laser tracing paths */}
            <path
              d="M 392.00 297.00 L 391.00 298.00 C 378.02 301.60 365.17 305.62 352.48 310.37 C 327.91 319.49 304.70 332.06 283.47 348.06 C 274.63 354.76 266.39 362.24 259.03 370.52 C 250.77 379.80 244.60 390.69 241.67 402.77 C 238.74 414.73 240.23 427.67 246.51 438.45 C 251.34 446.81 258.82 453.86 267.31 458.74 C 278.48 465.17 291.04 468.22 303.62 469.75 C 322.25 472.07 341.09 471.21 359.62 468.60 C 383.15 465.34 406.49 458.37 428.69 448.97 C 445.62 441.77 461.94 433.00 477.53 423.01 C 491.50 414.07 505.02 404.41 517.92 393.99 C 524.28 388.89 530.40 383.47 536.42 377.94 L 538.00 376.51 L 539.00 377.49 C 543.83 382.49 548.89 387.27 554.02 391.95 C 555.45 393.25 556.75 394.70 558.20 395.97 C 564.12 401.21 570.18 406.31 576.49 411.13 C 585.55 418.06 595.03 424.47 604.81 430.34 C 619.68 439.29 635.43 446.73 651.81 452.61 C 668.51 458.62 685.92 462.67 703.61 464.49 C 720.67 466.26 738.16 465.17 754.91 461.27 C 765.17 458.89 775.47 454.89 784.05 448.45 C 790.62 443.51 796.22 436.90 799.41 429.23 C 802.73 421.17 803.54 411.96 801.37 403.56 C 799.04 394.52 793.63 386.35 786.85 379.83 C 777.62 371.02 766.75 363.95 755.44 358.33 C 739.06 350.15 721.43 344.75 703.50 341.67 C 685.91 338.64 667.92 338.25 650.21 340.59 C 631.78 343.00 613.62 347.88 596.24 354.75 C 584.05 359.54 572.23 365.48 560.85 372.27 C 554.21 376.24 547.74 380.52 541.42 385.03 C 540.35 385.79 539.73 385.93 538.74 384.97 C 532.48 379.03 525.86 373.49 519.00 368.21 C 506.77 358.74 493.79 350.28 480.24 342.92 C 463.38 333.72 445.45 326.23 426.90 320.67 C 415.42 317.24 403.80 314.48 392.00 312.65 L 392.00 297.00 Z"
              stroke={`url(#${id}-left)`}
              strokeWidth="9"
              strokeLinecap="round"
              filter={`url(#${id}-glow)`}
              className="k-laser-left-anim"
            />
            <path
              d="M 440.00 447.00 L 461.00 468.00 C 476.99 484.01 493.67 499.27 511.00 513.79 C 527.79 527.85 545.46 540.78 563.85 552.48 C 587.89 567.80 613.25 580.89 640.17 590.73 C 659.88 597.94 680.45 603.20 701.27 605.99 C 719.98 608.52 739.06 608.59 757.73 605.85 C 770.83 603.93 783.89 599.99 795.73 593.67 C 805.91 588.22 815.11 580.47 821.36 570.61 C 826.96 561.73 829.74 551.18 829.49 540.66 C 829.23 529.75 825.81 519.00 819.78 509.84 C 812.59 498.98 802.93 489.92 792.04 482.78 C 777.63 473.34 761.76 466.08 745.22 461.04 C 730.08 456.41 714.39 453.64 698.61 452.88 C 682.26 452.09 665.91 453.61 649.79 457.26 C 632.74 461.12 616.27 467.58 600.56 475.87 C 586.29 483.42 572.76 492.45 560.10 502.77 C 553.48 508.15 547.05 513.80 540.85 519.67 L 538.00 522.37 L 536.00 520.48 C 527.75 512.72 519.09 505.41 510.07 498.68 C 499.76 491.01 488.94 484.09 477.72 477.92 C 465.34 471.12 452.62 465.04 439.53 459.77 L 440.00 447.00 Z"
              stroke={`url(#${id}-main)`}
              strokeWidth="9"
              strokeLinecap="round"
              filter={`url(#${id}-glow)`}
              className="k-laser-main-anim"
            />
          </svg>
        </div>
        {label && <p className="text-xs font-mono text-zinc-400 animate-pulse">{label}</p>}
      </div>
    );
  }

  // Archetype 3: Chromatic Sweep
  if (variant === 'chromatic-sweep') {
    return (
      <div className={`flex flex-col items-center justify-center gap-3 ${className}`}>
        <style>{`
          @keyframes spinHalo {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
          }
          .k-halo-conic::before {
            content: '';
            position: absolute;
            inset: -2px;
            border-radius: inherit;
            background: conic-gradient(from 0deg, #13D9F2, #4B00E8, #E60082, transparent 65%, #13D9F2);
            animation: spinHalo 2.2s linear infinite;
          }
        `}</style>
        <div className={`relative p-0.5 rounded-2xl k-halo-conic overflow-hidden ${sizeMap[size]}`}>
          <div className="relative z-10 w-full h-full rounded-2xl bg-black flex items-center justify-center p-2.5">
            {customLogoNode || <KontyraLogo className="w-full h-full object-contain" idPrefix="sweep" />}
          </div>
        </div>
        {label && <p className="text-xs font-mono text-zinc-400 animate-pulse">{label}</p>}
      </div>
    );
  }

  // Archetype 4: Micro In-Button
  if (variant === 'micro') {
    return (
      <span className={`inline-flex items-center gap-2 ${className}`}>
        <span className="w-4 h-4 animate-pulse shrink-0">
          {customLogoNode || <KontyraLogo className="w-full h-full object-contain" idPrefix="micro" />}
        </span>
        {label && <span>{label}</span>}
      </span>
    );
  }

  // Default: Archetype 1 Neural Pulse
  return (
    <div className={`flex flex-col items-center justify-center gap-3 ${className}`}>
      <style>{`
        @keyframes kPulseGlow {
          0%, 100% {
            transform: scale(0.97);
            filter: drop-shadow(0 0 16px rgba(19, 217, 242, 0.4)) drop-shadow(0 0 28px rgba(230, 0, 130, 0.3));
          }
          50% {
            transform: scale(1.04);
            filter: drop-shadow(0 0 26px rgba(19, 217, 242, 0.75)) drop-shadow(0 0 46px rgba(230, 0, 130, 0.6));
          }
        }
        @keyframes kOrbitCw {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        @keyframes kOrbitCcw {
          from { transform: rotate(360deg); }
          to { transform: rotate(0deg); }
        }
        .k-pulse-logo {
          animation: kPulseGlow 2.4s ease-in-out infinite;
        }
        .k-orbit-cw {
          animation: kOrbitCw 2.8s linear infinite;
        }
        .k-orbit-ccw {
          animation: kOrbitCcw 3.6s cubic-bezier(0.4, 0, 0.2, 1) infinite;
        }
      `}</style>
      <div className={`relative flex items-center justify-center ${sizeMap[size]}`}>
        {/* Orbit Ring 1 (Cyan) */}
        <div className="absolute inset-[-6px] rounded-full border border-dashed border-[#13D9F2]/30 k-orbit-cw pointer-events-none">
          <div className="w-2 h-2 rounded-full bg-[#13D9F2] shadow-[0_0_8px_#13D9F2] absolute -top-1 left-1/2 -translate-x-1/2" />
        </div>
        {/* Orbit Ring 2 (Magenta) */}
        <div className="absolute inset-[-14px] rounded-full border border-dashed border-[#E60082]/25 k-orbit-ccw pointer-events-none">
          <div className="w-2 h-2 rounded-full bg-[#E60082] shadow-[0_0_10px_#E60082] absolute -bottom-1 left-1/2 -translate-x-1/2" />
        </div>
        {/* Center Logo */}
        <div className="relative z-10 w-full h-full k-pulse-logo flex items-center justify-center">
          {customLogoNode || <KontyraLogo className="w-full h-full object-contain" idPrefix="neural" />}
        </div>
      </div>
      {label && <p className="text-xs font-mono text-zinc-400 animate-pulse">{label}</p>}
    </div>
  );
};
export default KontyraLoader;
