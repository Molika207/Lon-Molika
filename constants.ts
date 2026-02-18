
import { Project, Service } from './types';

export const BIO = {
  name: "Alex Sterling",
  role: "Lead Product Designer & Senior Frontend Engineer",
  location: "San Francisco, CA",
  experience: "8+ Years",
  summary: "I bridge the gap between complex engineering and human-centered design. With a background in both Computer Science and Visual Arts, I specialize in building digital products that are as performant as they are beautiful. My process is deeply rooted in research, rapid prototyping, and iterative development.",
  story: "Starting as a freelance designer in 2016, I've evolved into a product leader who has helped 3 startups scale from zero to Series B. I believe that great software should feel invisible—empowering the user without getting in their way."
};

export const STATS = [
  { label: 'Years Experience', value: '8+' },
  { label: 'Projects Completed', value: '42' },
  { label: 'Satisfied Clients', value: '100%' },
  { label: 'Awards Won', value: '12' },
];

export const PROJECTS: Project[] = [
  {
    id: '1',
    title: 'Fintech Dashboard',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDmmvwsIQLd0GdULS04QCVt6PxN_JaJ2EiJXLBJqazQ5558H1K38cqnefD3jDhxnn3M9dLG7Db-UyOjKICvwU86pgA5rPCrc3_V1XmFjHOuFX2peOQKY8RNzwj2MK1iDAbhHRiVybDix5KiTClY9tYk9USfc3Cro-a_VjBKkQiu_SWyFniq3_Rvyqv54A8TTpn4hS_NBw5JVAa91y2F2EFI_qdSKqxHiRboPvNZB3mmPeTvozLFxwBueYQH-GB80vWe3An9v49O_4M',
    tags: ['UI/UX', 'React'],
    description: 'A modern financial dashboard designed for high-frequency traders and portfolio managers.'
  },
  {
    id: '2',
    title: 'E-commerce App',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAli986uo-KMKfuRy0nd1a7UQ9S6-_I_eH4_FSfFbzwxPmUY4gMVGuSxwVFfCbEulEiXFZhWM-uDLai7vCn1WPAiQ2PglKQqbpRipiN23pbptZCvkWRs1jqseE0Wy6OUp_BZtNDMVEO6gcCmGo0VYjuKlpI-ME4Cpfb1gHW_pqe0Kz4LP0pw-LJ-jNbouSYJV4RZ6-FfWo_u3qTMmN4tGcVA8psswEndaDSBCqa-taBiLOCyiv3qdzD9ScMHYeIgv5v9PJmR-pCqJ8',
    tags: ['Mobile', 'Design System'],
    description: 'Minimalist mobile shopping experience with a custom design system for luxury brands.'
  },
  {
    id: '3',
    title: 'Fitness Tracker',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAX-2EqNBasIBbRe_ise4C75pyxr_ih9tTIcD8GH5EiUyDhCj1QmVMVaK7n0Verjs5lVo_3C11AX9wHDcDozoFOva_0ifL7EKnDj2HtTHLiasGuQSxGmFBiOIUNxX5_9mUqgu4_6m8wpUzpeZHlhkLH7u_nSq8VjtSpOlHio9eNNK4D5zr-NHBZtrhqhKVD9qRS515-fSwBi3ztnheEbNnrooXGePpMpbjkbSykrp1tQYQyXZZn4hd1-c7cq8NpduoL3LR97wMpdlI',
    tags: ['Health Tech', 'SaaS'],
    description: 'Data-driven performance tracking for professional athletes and coaches.'
  },
  {
    id: '4',
    title: 'Social Platform',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB7ohSyjyjXBauSBG4pfJ51Vm2YLJ4Jiy_wmWzsRfm3Timy7QRys3aurmO5FWnraOkZ_dUHm4UB27WqBgm_s7MaaC-KTIKuaiDpwZ8sv19jVMrObUST3yXQh1Ndtz1mVMkh39Oiz_FPEvlm3-4ZoP9Q2MZS1KlGCNAHcbuGi8SRoBM5iTBfN5hIXw9cK4DlqX4G5vk4APl62EkQZmKRGdOMt7oE1NC97NHO6DcMolOzWwleOAqV-AAsn6SCGxHyD-2hujoL9G4in8k',
    tags: ['Community', 'UX Research'],
    description: 'A platform connecting digital creators through collaborative workspaces.'
  }
];

export const SERVICES: Service[] = [
  {
    id: 'uiux',
    title: 'UI/UX Design',
    description: 'Creating intuitive and beautiful interfaces that prioritize user experience and brand storytelling.',
    icon: 'draw'
  },
  {
    id: 'webdev',
    title: 'Web Development',
    description: 'Building scalable and performant web applications using modern frameworks and clean architecture.',
    icon: 'terminal'
  },
  {
    id: 'branding',
    title: 'Brand Strategy',
    description: 'Defining unique visual identities and strategic positions that help startups stand out in crowded markets.',
    icon: 'auto_awesome'
  }
];

export const HERO_IMAGE = 'https://lh3.googleusercontent.com/aida-public/AB6AXuD1ah-BKq7E8v7dWLDqew1cItU-9pw42aQH1I6bubpouwLaFoZIA5T67FPnXhAk0t7gfGoIFmpoyYcKFI2-eHYhFQurPtEE2e63EeCooCbBTHxlVDHm_SlPZFv2fJjpgfxHBRG_xq5p2enDWyHk66EbnGFdgoTdEMmWmUMH59LgApuzSLKppcXwH4GjWxv3K8wQt2lhqAVKYMnUzSEPqBWNpA3B0H1Dd_spv4lFsJB4zldG_ISE8G0bM0kcAbi5uhy4aslKI7bD56M';
