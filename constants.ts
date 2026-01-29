
import { NavLink, StatItem, NewsCard, Testimonial } from './types';

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 1,
    quote: "Switching to solar with Techgen was seamless. We've seen a dramatic reduction in our energy costs. The system runs flawlessly and the installation team was incredibly professional. Highly recommend Techgen for anyone looking for reliability.",
    author: "Alex Martinez",
    role: "CEO of GreenTech Solutions",
    avatar: "https://i.pravatar.cc/150?u=alex",
    image: "/people.jpg"
  },
  {
    id: 2,
    quote: "The efficiency of the new panels is astounding. We are generating more power than we initially estimated. Techgen's support during the transition was world-class.",
    author: "Sarah Johnson",
    role: "Director of Operations, EcoWare",
    avatar: "https://i.pravatar.cc/150?u=sarah",
    image: "https://i.pinimg.com/736x/7e/62/a5/7e62a5b964b61fc1a28e5e65ad0a5156.jpg"
  },
  {
    id: 3,
    quote: "A game-changer for our manufacturing plant. The ROI has been faster than expected, and the maintenance is practically zero. Techgen truly delivers on their promises.",
    author: "Michael Chen",
    role: "Plant Manager, FutureFab",
    avatar: "https://i.pravatar.cc/150?u=michael",
    image: "https://i.pinimg.com/736x/6a/4a/c1/6a4ac11ceacd00211936cfcd438d1627.jpg"
  }
];

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
    image: 'https://i.pinimg.com/736x/f5/a1/19/f5a119841f2240aa95939e3e2282a823.jpg',
    title: 'The Future of Residential Solar Technology',
    description: 'Explore how next-generation PV panels are changing how we power our homes.',
    link: '#',
  },
  {
    id: 2,
    image: 'https://i.pinimg.com/1200x/92/1f/da/921fdae3980170b6f67c9267425b7e48.jpg',
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
