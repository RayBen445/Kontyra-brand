import React from 'react';

interface KontyraLogoProps {
    className?: string;
    idPrefix?: string;
}
/**
 * Authentic Dual-Loop Kontyra Brand Mark Vector
 * Uses exact viewBox="240 285 545 340" and official gradient color stops.
 */
declare const KontyraLogo: React.FC<KontyraLogoProps>;

interface KontyraLoaderProps {
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
declare const KontyraLoader: React.FC<KontyraLoaderProps>;

interface EcosystemApp {
    id: string;
    name: string;
    tagline: string;
    url: string;
    badge: string;
    color: string;
    icon: React.ComponentType<{
        className?: string;
    }>;
}
declare const KONTYRA_ECOSYSTEM_APPS: EcosystemApp[];
interface NavItem {
    id: string;
    label: string;
    href?: string;
    icon?: React.ComponentType<{
        className?: string;
    }>;
    badge?: string | number;
    external?: boolean;
    onClick?: () => void;
    isActive?: boolean;
}
interface NavGroup {
    title: string;
    items: NavItem[];
}
interface MobileNavbarProps {
    appName: string;
    appBadge?: string;
    logoUrl?: string;
    customLogoNode?: React.ReactNode;
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
declare const MobileNavbar: React.FC<MobileNavbarProps>;

export { type EcosystemApp, KONTYRA_ECOSYSTEM_APPS, KontyraLoader, type KontyraLoaderProps, KontyraLogo, type KontyraLogoProps, MobileNavbar, type MobileNavbarProps, type NavGroup, type NavItem };
