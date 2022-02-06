import { Language } from "../LangSelector/types";
import { FooterLinkType } from "./types";

export const footerLinks: FooterLinkType[] = [
  {
    label: "About",
    items: [
      {
        label: "Contact",
        href: "https://docs.xliger.org/contact-us",
      },
      {
        label: "Blog",
        href: "https://xliger.medium.com/",
      },
      {
        label: "Community",
        href: "https://docs.xliger.org/contact-us/telegram",
      },
      {
        label: "XLiger",
        href: "https://docs.xliger.org/tokenomics/xliger",
      },
      {
        label: "—",
      },
    ],
  },
  {
    label: "Help",
    items: [
      {
        label: "Customer",
        href: "Support https://docs.xliger.org/contact-us/customer-support",
      },
      {
        label: "Troubleshooting",
        href: "https://docs.xliger.org/help/troubleshooting",
      },
      {
        label: "Guides",
        href: "https://docs.xliger.org/get-started",
      },
    ],
  },
  {
    label: "Developers",
    items: [
      {
        label: "Github",
        href: "https://github.com/xliger",
      },
      {
        label: "Documentation",
        href: "https://docs.xliger.org",
      },
    ],
  },
];

export const socials = [
  {
    label: "Twitter",
    icon: "Twitter",
    href: "https://twitter.com/_xliger",
  },
  {
    label: "Telegram",
    icon: "Telegram",
    items: [
      {
        label: "English",
        href: "https://t.me/XLiger",
      },
      {
        label: "Announcements",
        href: "https://t.me/XLiger_news",
      },
    ],
  },
  {
    label: "Instagram",
    icon: "Instagram",
    href: "https://instagram.com/xliger_official",
  },
  {
    label: "Github",
    icon: "Github",
    href: "https://github.com/xliger/",
  },
  {
    label: "Discord",
    icon: "Discord",
    href: "https://discord.gg/AeE3U5P45s",
  },
];

export const langs: Language[] = [...Array(20)].map((_, i) => ({
  code: `en${i}`,
  language: `English${i}`,
  locale: `Locale${i}`,
}));
