export type NavItem = {
    text: string;
    to: string;
  };

export const navItems: NavItem[] = [
    { text: 'Home', to: '/' },
    { text: 'About', to: '/about' },
    { text: 'Contact', to: '/contact' },
    { text: 'Services', to: '/services' },
    { text: 'Blog', to: '/blog' },
  ];