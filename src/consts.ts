import type { IconMap, SocialLink, Site } from '@/types'

export const SITE: Site = {
  title: 'étienne',
  description:
    'Étienne Doré est un dev front-end qui a créé son blog avec le thème astro-erudite et Github Pages.',
  href: 'https://https://etiennedo.github.io/astro-blog',
  author: 'etiennedo',
  locale: 'fr-CA',
  featuredPostCount: 2,
  postsPerPage: 3,
}

export const NAV_LINKS: SocialLink[] = [
  {
    href: '/astro-blog/blog',
    label: 'articles',
  }
]

export const SOCIAL_LINKS: SocialLink[] = [
  {
    href: 'https://github.com/etiennedo',
    label: 'GitHub',
  },
  {
    href: 'https://twitter.com/etiennedore99',
    label: 'Twitter',
  },
  {
    href: 'mailto:etiennexdore@gmail.com',
    label: 'Email',
  }
]

export const ICON_MAP: IconMap = {
  Website: 'lucide:globe',
  GitHub: 'lucide:github',
  LinkedIn: 'lucide:linkedin',
  Twitter: 'lucide:twitter',
  Email: 'lucide:mail',
  RSS: 'lucide:rss',
}
