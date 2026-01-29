
import { NavLink, StatItem, NewsCard } from './types';

export const NAV_LINKS: NavLink[] = [
  { label: 'Home', href: '#' },
  { label: 'About', href: '#about' },
  { label: 'Solutions', href: '#solutions' },
  { label: 'Projects', href: '#projects' },
  { label: 'Blogs', href: '#news' },
];

export const STATS: StatItem[] = [
  { value: '80%', label: 'Reduction in Energy Costs' },
  { value: '25+', label: 'Years Average Lifespan' },
  { value: '75%', label: 'Faster Return on Investment' },
];

export const LATEST_NEWS: NewsCard[] = [
  {
    id: 1,
    image: 'https://picsum.photos/seed/solar1/800/500',
    title: 'The Future of Residential Solar Technology',
    description: 'Explore how next-generation PV panels are changing how we power our homes.',
    link: '#',
  },
  {
    id: 2,
    image: 'https://picsum.photos/seed/solar2/800/500',
    title: 'Sustainability Trends in 2025',
    description: 'Why corporations are shifting towards 100% renewable energy grids faster than expected.',
    link: '#',
  },
  {
    id: 3,
    image: 'https://picsum.photos/seed/solar3/800/500',
    title: 'Government Incentives for Solar Energy',
    description: 'A comprehensive guide to new tax credits and rebates available for solar installation.',
    link: '#',
  },
];
