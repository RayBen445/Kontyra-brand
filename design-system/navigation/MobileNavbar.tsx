import React, { useState, useEffect, useRef } from 'react';
import {
  Menu,
  X,
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
  accentColor?: string; // e.g. '#13D9F2' (DevOS), '#D4AF37' (Novelora/REASTUDIA), '#10B981' (Accounts)
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

export const MobileNavbar: React.FC<MobileNavbarProps> = ({
  appName,
  appBadge,
  logoUrl = '/logo.svg',
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

  // Close app switcher on click outside
  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (switcherRef.current && !switcherRef.current.contains(e.target as Node)) {
        setAppSwitcherOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Prevent background scroll when mobile drawer is open
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
      {/* 56px Mobile Header Bar (< 768px) */}
      <header className="md:hidden sticky top-0 z-40 h-14 w-full bg-black/85 backdrop-blur-xl border-b border-white/[0.08] px-4 flex items-center justify-between">
        {/* Brand Lockup */}
        <div className="flex items-center gap-2.5">
          <div className="w-8 h-8 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center overflow-hidden shrink-0">
            <img src={logoUrl} alt={appName} className="w-5 h-5 object-contain" />
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

        {/* Action Controls & Launcher */}
        <div className="flex items-center gap-1.5">
          {actionsSlot}

          {/* 9-Dot Ecosystem Launcher */}
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
                          <div className={`w-6 h-6 rounded-lg bg-gradient-to-br ${app.color} flex items-center justify-center text-white shrink-0`}>
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

          {/* Menu Drawer Toggle */}
          <button
            type="button"
            onClick={() => setIsOpen(!isOpen)}
            className="p-2 text-white bg-white/5 hover:bg-white/10 rounded-xl border border-white/10 active:scale-95 transition-all"
            aria-label="Toggle Navigation Drawer"
          >
            {isOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
          </button>
        </div>
      </header>

      {/* Slide-Over Drawer Navigation (< 768px) */}
      {isOpen && (
        <div className="md:hidden fixed inset-0 z-50 flex justify-end">
          {/* Backdrop */}
          <div
            className="fixed inset-0 bg-black/85 backdrop-blur-md transition-opacity"
            onClick={() => setIsOpen(false)}
          />

          {/* Drawer Panel */}
          <aside className="relative w-84 max-w-[88vw] h-full flex flex-col justify-between bg-zinc-950 border-l border-white/10 p-5 shadow-2xl z-10 overflow-y-auto">
            <div className="space-y-6">
              {/* Header */}
              <div className="flex items-center justify-between pb-4 border-b border-white/10">
                <div className="flex items-center gap-2.5">
                  <div className="w-7 h-7 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center overflow-hidden">
                    <img src={logoUrl} alt={appName} className="w-4 h-4 object-contain" />
                  </div>
                  <span className="font-extrabold text-sm tracking-tight text-white">{appName}</span>
                </div>
                <button
                  type="button"
                  onClick={() => setIsOpen(false)}
                  className="p-1.5 rounded-lg bg-white/5 text-zinc-400 hover:text-white border border-white/10"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              {/* Categorized Nav Groups */}
              <nav className="space-y-5">
                {navGroups.map((group, gIdx) => (
                  <div key={gIdx} className="space-y-1.5">
                    <p className="text-[10px] font-mono font-bold uppercase tracking-wider text-zinc-500 px-2">
                      {group.title}
                    </p>
                    <div className="space-y-0.5">
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

            {/* Bottom User Card */}
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
          </aside>
        </div>
      )}
    </>
  );
};
export default MobileNavbar;
