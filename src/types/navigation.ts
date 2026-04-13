export type NavItem = {
  label: string;
  href: string;
  isExternal?: boolean;   // link para outro domínio
  isCta?: boolean;        // pill âmbar sólido — ação principal
  isClientLink?: boolean; // sublinhado âmbar — ação secundária
};
