import type { NavItem } from '../types/navigation';

export const navItems: NavItem[] = [
  { label: 'Sobre',    href: '/#sobre' },
  { label: 'Projetos', href: '/#cases' },
  { label: 'Contato',  href: '/#contato' },
  {
    label: 'Para Clientes',
    href: 'https://casainteligente.leopessoa.eng.br',
    isExternal: true,
    isClientLink: true,
  },
  {
    label: 'Para Parceiros',
    href: 'https://parceiros.leopessoa.eng.br',
    isExternal: true,
    isCta: true,
  },
];
