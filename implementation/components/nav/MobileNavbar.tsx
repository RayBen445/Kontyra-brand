import React, { useState, useEffect, useRef } from 'react';
import {
  LayoutGrid,
  ChevronRight,
  ExternalLink,
  User as UserIcon,
  LogOut,
  Terminal,
  ShieldCheck,
  BookOpen,
  Feather,
  Sparkles,
  Zap,
  Activity,
  Building2,
  X,
} from 'lucide-react';

export interface EcosystemApp {
  id: string;
  name: string;
  tagline: string;
  url: string;
  badge: string;
  color: string;
  icon: React.ComponentType<{ className?: string }>;
}

export const KONTYRA_ECOSYSTEM_APPS: EcosystemApp[] = [
  {
    id: 'accounts',
    name: 'Kontyra Accounts',
    tagline: 'Single Sign-On, Passkeys & Cloud ID',
    url: 'https://accounts.kontyra.name.ng',
    badge: 'Identity',
    color: 'from-emerald-500 to-teal-700',
    icon: ShieldCheck,
  },
  {
    id: 'devos',
    name: 'DevOS Platform',
    tagline: 'Cloud Code Sandboxes & DevOS Execution',
    url: 'https://devos.kontyra.name.ng',
    badge: 'Cloud IDE',
    color: 'from-blue-600 to-indigo-700',
    icon: Terminal,
  },
  {
    id: 'reastudia',
    name: 'REASTUDIA',
    tagline: 'Serialized Web Novels & Reading Sanctuary',
    url: 'https://reastudia.kontyra.name.ng',
    badge: 'Reading',
    color: 'from-amber-500 to-yellow-600',
    icon: BookOpen,
  },
  {
    id: 'novelora',
    name: 'Novelora',
    tagline: 'Literary Publishing & Author Studio',
    url: 'https://novelora.kontyra.name.ng',
    badge: 'Studio',
    color: 'from-amber-600 to-yellow-700',
    icon: Feather,
  },
  {
    id: 'kora',
    name: 'Kora AI',
    tagline: 'Neural Agent & Model Intelligence',
    url: 'https://kora.kontyra.name.ng',
    badge: 'AI Agent',
    color: 'from-purple-600 to-pink-600',
    icon: Sparkles,
  },
  {
    id: 'vux',
    name: 'VUX Events',
    tagline: 'Developer Summits, Community & Tickets',
    url: 'https://vux.kontyra.name.ng',
    badge: 'Events',
    color: 'from-orange-500 to-red-600',
    icon: Zap,
  },
  {
    id: 'api',
    name: 'Platform Gateway',
    tagline: 'High-Throughput REST Engine & OAuth',
    url: 'https://api.kontyra.name.ng',
    badge: 'API v1',
    color: 'from-cyan-500 to-blue-600',
    icon: Activity,
  },
  {
    id: 'docs',
    name: 'Documentation',
    tagline: 'API Reference, SDK Guides & Manuals',
    url: 'https://docs.kontyra.name.ng',
    badge: 'Docs',
    color: 'from-zinc-700 to-zinc-900',
    icon: BookOpen,
  },
  {
    id: 'blog',
    name: 'Engineering Blog',
    tagline: 'Architecture, Releases & Systems',
    url: 'https://blog.kontyra.name.ng',
    badge: 'Blog',
    color: 'from-amber-500 to-yellow-600',
    icon: Building2,
  },
];

export interface NavItem {
  id: string;
  label: string;
  href?: string;
  icon?: React.ComponentType<{ className?: string }>;
  badge?: string | number;
  external?: boolean;
  onClick?: () => void;
  isActive?: boolean;
}

export interface NavGroup {
  title: string;
  items: NavItem[];
}

export interface MobileNavbarProps {
  appName: string;
  appBadge?: string;
  logoUrl?: string;
  accentColor?: string;
  navGroups: NavGroup[];
  actionsSlot?: React.ReactNode;
  user?: {
    name?: string;
    email?: string;
    avatarUrl?: string;
    tier?: string;
  } | null;
  onSignIn?: () => void;
  onSignOut?: () => void;
  onNavigate?: (href: string) => void;
}

export const KontyraLogoVector: React.FC<{ className?: string; idPrefix?: string }> = ({
  className = 'w-5 h-5',
  idPrefix = 'k-mob-impl',
}) => (
  <svg
    viewBox="240 285 545 340"
    className={className}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <defs>
      <linearGradient id={`${idPrefix}-left`} x1="250" y1="300" x2="520" y2="610" gradientUnits="userSpaceOnUse">
        <stop offset="0%" stopColor="#13D9F2" />
        <stop offset="48%" stopColor="#079BFF" />
        <stop offset="100%" stopColor="#0B45E8" />
      </linearGradient>
      <linearGradient id={`${idPrefix}-main`} x1="440" y1="320" x2="780" y2="610" gradientUnits="userSpaceOnUse">
        <stop offset="0%" stopColor="#1747F2" />
        <stop offset="38%" stopColor="#4B00E8" />
        <stop offset="68%" stopColor="#B000D5" />
        <stop offset="100%" stopColor="#E60082" />
      </linearGradient>
    </defs>
    <path
      d="M 392.00 297.00 L 391.00 298.00 C 378.02 301.60 365.17 305.62 352.48 310.37 C 327.91 319.49 304.70 332.06 283.47 348.06 C 274.63 354.76 266.39 362.24 259.03 370.52 C 250.77 379.80 244.60 390.69 241.67 402.77 C 238.74 414.73 240.23 427.67 246.51 438.45 C 251.34 446.81 258.82 453.86 267.31 458.74 C 278.48 465.17 291.04 468.22 303.62 469.75 C 322.25 472.07 341.09 471.21 359.62 468.60 C 383.15 465.34 406.49 458.37 428.69 448.97 C 445.62 441.77 461.94 433.00 477.53 423.01 C 491.50 414.07 505.02 404.41 517.92 393.99 C 524.28 388.89 530.40 383.47 536.42 377.94 L 538.00 376.51 L 539.00 377.49 C 543.83 382.49 548.89 387.27 554.02 391.95 C 555.45 393.25 556.75 394.70 558.20 395.97 C 564.12 401.21 570.18 406.31 576.49 411.13 C 585.55 418.06 595.03 424.47 604.81 430.34 C 619.68 439.29 635.43 446.73 651.81 452.61 C 668.51 458.62 685.92 462.67 703.61 464.49 C 720.67 466.26 738.16 465.17 754.91 461.27 C 765.17 458.89 775.47 454.89 784.05 448.45 C 790.62 443.51 796.22 436.90 799.41 429.23 C 802.73 421.17 803.54 411.96 801.37 403.56 C 799.04 394.52 793.63 386.35 786.85 379.83 C 777.62 371.02 766.75 363.95 755.44 358.33 C 739.06 350.15 721.43 344.75 703.50 341.67 C 685.91 338.64 667.92 338.25 650.21 340.59 C 631.78 343.00 613.62 347.88 596.24 354.75 C 584.05 359.54 572.23 365.48 560.85 372.27 C 554.21 376.24 547.74 380.52 541.42 385.03 C 540.35 385.79 539.73 385.93 538.74 384.97 C 532.48 379.03 525.86 373.49 519.00 368.21 C 506.77 358.74 493.79 350.28 480.24 342.92 C 463.38 333.72 445.45 326.23 426.90 320.67 C 415.42 317.24 403.80 314.48 392.00 312.65 L 392.00 297.00 Z"
      fill={`url(#${idPrefix}-left)`}
      fillRule="evenodd"
    />
    <path
      d="M 440.00 447.00 L 461.00 468.00 C 476.99 484.01 493.67 499.27 511.00 513.79 C 527.79 527.85 545.46 540.78 563.85 552.48 C 587.89 567.80 613.25 580.89 640.17 590.73 C 659.88 597.94 680.45 603.20 701.27 605.99 C 719.98 608.52 739.06 608.59 757.73 605.85 C 770.83 603.93 783.89 599.99 795.73 593.67 C 805.91 588.22 815.11 580.47 821.36 570.61 C 826.96 561.73 829.74 551.18 829.49 540.66 C 829.23 529.75 825.81 519.00 819.78 509.84 C 812.59 498.98 802.93 489.92 792.04 482.78 C 777.63 473.34 761.76 466.08 745.22 461.04 C 730.08 456.41 714.39 453.64 698.61 452.88 C 682.26 452.09 665.91 453.61 649.79 457.26 C 632.74 461.12 616.27 467.58 600.56 475.87 C 586.29 483.42 572.76 492.45 560.10 502.77 C 553.48 508.15 547.05 513.80 540.85 519.67 L 538.00 522.37 L 536.00 520.48 C 527.75 512.72 519.09 505.41 510.07 498.68 C 499.76 491.01 488.94 484.09 477.72 477.92 C 465.34 471.12 452.62 465.04 439.53 459.77 L 440.00 447.00 Z"
      fill={`url(#${idPrefix}-main)`}
      fillRule="evenodd"
    />
  </svg>
);

export const MobileNavbar: React.FC<MobileNavbarProps> = ({
  appName,
  appBadge,
  logoUrl,
  accentColor = '#10B981',
  navGroups,
  actionsSlot,
  user,
  onSignIn,
  onSignOut,
  onNavigate,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [appSwitcherOpen, setAppSwitcherOpen] = useState(false);
  const switcherRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (switcherRef.current && !switcherRef.current.contains(e.target as Node)) {
        setAppSwitcherOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  const handleItemClick = (item: NavItem) => {
    if (item.onClick) {
      item.onClick();
    } else if (item.href && onNavigate) {
      onNavigate(item.href);
    }
    setIsOpen(false);
  };

  return (
    <>
      <header className="md:hidden sticky top-0 z-40 h-14 w-full bg-black/85 backdrop-blur-xl border-b border-white/[0.08] px-4 flex items-center justify-between">
        <div className="flex items-center gap-2.5">
          <div className="w-8 h-8 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center overflow-hidden shrink-0">
            {logoUrl ? (
              <img src={logoUrl} alt={appName} className="w-5 h-5 object-contain" />
            ) : (
              <KontyraLogoVector className="w-6 h-6" idPrefix="nav-hdr-impl" />
            )}
          </div>
          <div className="flex items-center gap-1.5">
            <span className="font-extrabold text-sm tracking-tight text-white">{appName}</span>
            {appBadge && (
              <span
                className="text-[9px] font-mono uppercase px-1.5 py-0.5 rounded-full border"
                style={{
                  color: accentColor,
                  borderColor: `${accentColor}40`,
                  backgroundColor: `${accentColor}10`,
                }}
              >
                {appBadge}
              </span>
            )}
          </div>
        </div>

        <div className="flex items-center gap-2">
          {actionsSlot}

          <div className="relative" ref={switcherRef}>
            <button
              type="button"
              onClick={() => setAppSwitcherOpen(!appSwitcherOpen)}
              className="p-2 text-zinc-300 hover:text-white bg-white/5 rounded-xl border border-white/10 active:scale-95 transition-all"
              title="Kontyra Ecosystem Apps"
              aria-label="Kontyra Ecosystem Apps"
            >
              <LayoutGrid className="w-4 h-4 text-zinc-300" />
            </button>

            {appSwitcherOpen && (
              <div className="absolute right-0 top-full mt-2 w-[300px] rounded-2xl bg-zinc-950/98 border border-white/15 shadow-2xl backdrop-blur-2xl p-3 z-50 animate-in fade-in zoom-in-95 duration-150">
                <div className="flex items-center justify-between px-1 pb-2 mb-2 border-b border-white/5">
                  <div className="flex items-center gap-1.5">
                    <div className="w-2 h-2 rounded-full animate-pulse" style={{ backgroundColor: accentColor }} />
                    <span className="text-[10px] font-mono uppercase font-bold text-zinc-300 tracking-wider">
                      Ecosystem Apps
                    </span>
                  </div>
                  <a
                    href="https://accounts.kontyra.name.ng/dashboard#ecosystem"
                    target="_blank"
                    rel="noreferrer"
                    className="text-[10px] font-semibold text-zinc-400 hover:text-white"
                  >
                    Hub &rarr;
                  </a>
                </div>

                <div className="grid grid-cols-2 gap-1.5 max-h-[280px] overflow-y-auto">
                  {KONTYRA_ECOSYSTEM_APPS.map((app) => {
                    const Icon = app.icon;
                    return (
                      <a
                        key={app.id}
                        href={app.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={() => setAppSwitcherOpen(false)}
                        className="flex flex-col justify-between p-2 rounded-xl bg-white/[0.03] hover:bg-white/[0.08] border border-white/5 transition-all"
                      >
                        <div className="flex items-center justify-between mb-1">
                          <div
                            className={`w-6 h-6 rounded-lg bg-gradient-to-br ${app.color} flex items-center justify-center text-white shrink-0`}
                          >
                            <Icon className="w-3 h-3" />
                          </div>
                          <span className="text-[7px] font-mono uppercase px-1 py-0.5 rounded bg-white/5 text-zinc-400">
                            {app.badge}
                          </span>
                        </div>
                        <p className="text-[11px] font-bold text-white truncate">{app.name}</p>
                      </a>
                    );
                  })}
                </div>
              </div>
            )}
          </div>

          {/* Bespoke Kontyra Asymmetric Pulse Dash Menu Trigger (ZERO Generic ☰ Hamburgers) */}
          <button
            type="button"
            onClick={() => setIsOpen(!isOpen)}
            className="w-9 h-9 flex flex-col items-center justify-center gap-1.5 bg-white/5 hover:bg-white/10 rounded-xl border border-white/10 active:scale-95 transition-all focus:outline-none"
            aria-label="Toggle Navigation Drawer"
          >
            {isOpen ? (
              <X className="w-4 h-4 text-white" />
            ) : (
              <div className="flex flex-col items-start gap-1 w-5">
                <span className="w-5 h-[2px] bg-white rounded-full transition-all" />
                <div className="flex items-center gap-1">
                  <span
                    className="w-1.5 h-1.5 rounded-full animate-pulse shrink-0"
                    style={{
                      backgroundColor: accentColor,
                      boxShadow: `0 0 6px ${accentColor}`,
                    }}
                  />
                  <span className="w-2.5 h-[2px] bg-white/70 rounded-full" />
                </div>
              </div>
            )}
          </button>
        </div>
      </header>

      {/* Vercel-Style Bottom Sheet Drawer (< 768px: Opens from Below) */}
      {isOpen && (
        <div className="md:hidden fixed inset-0 z-50 flex flex-col justify-end">
          <div
            className="fixed inset-0 bg-black/80 backdrop-blur-md transition-opacity animate-in fade-in duration-200"
            onClick={() => setIsOpen(false)}
          />

          <div className="relative w-full max-h-[85vh] flex flex-col justify-between bg-zinc-950/98 border-t border-white/15 rounded-t-3xl p-5 shadow-2xl z-10 overflow-y-auto animate-in slide-in-from-bottom duration-300">
            <div className="w-10 h-1 rounded-full bg-white/20 hover:bg-white/40 mx-auto mb-4 shrink-0 transition-colors cursor-grab" />

            <div className="space-y-6">
              <div className="flex items-center justify-between pb-4 border-b border-white/10">
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center overflow-hidden">
                    {logoUrl ? (
                      <img src={logoUrl} alt={appName} className="w-5 h-5 object-contain" />
                    ) : (
                      <KontyraLogoVector className="w-6 h-6" idPrefix="sheet-hdr-impl" />
                    )}
                  </div>
                  <div>
                    <span className="font-extrabold text-sm tracking-tight text-white block">{appName}</span>
                    <span className="text-[10px] font-mono text-zinc-400">Kontyra Unified Navigation</span>
                  </div>
                </div>
                <button
                  type="button"
                  onClick={() => setIsOpen(false)}
                  className="p-1.5 rounded-xl bg-white/5 text-zinc-400 hover:text-white border border-white/10"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              <nav className="space-y-5">
                {navGroups.map((group, gIdx) => (
                  <div key={gIdx} className="space-y-1.5">
                    <p className="text-[10px] font-mono font-bold uppercase tracking-wider text-zinc-500 px-2">
                      {group.title}
                    </p>
                    <div className="space-y-1">
                      {group.items.map((item) => {
                        const Icon = item.icon;
                        const isCurrent = item.isActive;
                        return (
                          <button
                            key={item.id}
                            type="button"
                            onClick={() => handleItemClick(item)}
                            className={`group relative flex items-center justify-between w-full px-3 py-2.5 rounded-xl text-xs font-medium transition-all text-left overflow-hidden ${
                              isCurrent
                                ? 'bg-white/10 text-white border border-white/10'
                                : 'text-zinc-400 hover:text-white hover:bg-white/[0.04]'
                            }`}
                          >
                            {isCurrent && (
                              <div
                                className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-5 rounded-r-full"
                                style={{
                                  backgroundColor: accentColor,
                                  boxShadow: `0 0 8px ${accentColor}`,
                                }}
                              />
                            )}
                            <div className="flex items-center gap-3">
                              {Icon && (
                                <Icon
                                  className={`w-4 h-4 ${
                                    isCurrent ? 'text-white' : 'text-zinc-500 group-hover:text-zinc-300'
                                  }`}
                                />
                              )}
                              <span>{item.label}</span>
                            </div>
                            {item.badge && (
                              <span className="text-[9px] font-mono px-1.5 py-0.5 rounded bg-white/10 text-zinc-300">
                                {item.badge}
                              </span>
                            )}
                            {item.external && (
                              <ExternalLink className="w-3 h-3 text-zinc-500 group-hover:text-zinc-300" />
                            )}
                          </button>
                        );
                      })}
                    </div>
                  </div>
                ))}
              </nav>
            </div>

            <div className="pt-4 mt-6 border-t border-white/10">
              <div className="p-3 rounded-2xl bg-white/[0.03] border border-white/10 flex items-center justify-between">
                <div className="flex items-center gap-2.5 min-w-0">
                  <div
                    className="w-8 h-8 rounded-full border flex items-center justify-center shrink-0 overflow-hidden"
                    style={{
                      borderColor: `${accentColor}40`,
                      backgroundColor: `${accentColor}10`,
                    }}
                  >
                    {user?.avatarUrl ? (
                      <img src={user.avatarUrl} alt="Avatar" className="w-full h-full object-cover" />
                    ) : (
                      <UserIcon className="w-4 h-4" style={{ color: accentColor }} />
                    )}
                  </div>
                  <div className="min-w-0">
                    <p className="text-xs font-bold text-white truncate">
                      {user?.name || (user ? 'Authenticated User' : 'Guest')}
                    </p>
                    <p className="text-[10px] font-mono text-zinc-400 truncate">
                      {user?.tier || 'Kontyra Member'}
                    </p>
                  </div>
                </div>

                {user ? (
                  onSignOut && (
                    <button
                      type="button"
                      onClick={() => {
                        setIsOpen(false);
                        onSignOut();
                      }}
                      className="p-2 text-zinc-400 hover:text-rose-400 hover:bg-rose-500/10 rounded-xl transition-colors"
                      title="Sign Out"
                    >
                      <LogOut className="w-4 h-4" />
                    </button>
                  )
                ) : (
                  onSignIn && (
                    <button
                      type="button"
                      onClick={() => {
                        setIsOpen(false);
                        onSignIn();
                      }}
                      className="px-2.5 py-1 text-[11px] font-bold text-black bg-white hover:bg-zinc-200 rounded-lg transition-colors"
                    >
                      Sign In
                    </button>
                  )
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default MobileNavbar;
