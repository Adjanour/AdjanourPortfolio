export type NavItem = {
    text: string;
    to: string;
  };

export const navItems: NavItem[] = [
    { text: 'Home', to: '#' },
    { text: 'Projects', to: '#projects' },
    { text: 'Services', to: '#services' },
    { text: 'Blog', to: '/blog' },
  ];