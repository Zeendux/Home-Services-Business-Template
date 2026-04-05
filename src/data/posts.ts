export type BlogPost = {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  tags: string[];
  service: 'HVAC' | 'Plumbing' | 'Electrical';
  body: string;
};

export const blogPosts: BlogPost[] = [
  {
    slug: 'spring-hvac-maintenance-checklist',
    title: 'Spring HVAC Maintenance Checklist for Homeowners',
    excerpt:
      'Get your cooling system ready for warmer days with this simple pre-season tune-up checklist.',
    date: '2026-03-12',
    tags: ['HVAC', 'Maintenance', 'Seasonal Tips'],
    service: 'HVAC',
    body: `Spring is one of the best times to service your air conditioner before summer demand spikes.

Start by replacing air filters, checking your thermostat settings, and clearing debris around your outdoor condenser unit. You should also schedule professional coil cleaning and refrigerant checks to avoid mid-season breakdowns.

If your system is over 12 years old, ask for an efficiency evaluation to compare repair costs with modern high-efficiency replacements.`
  },
  {
    slug: 'signs-you-have-a-hidden-plumbing-leak',
    title: '7 Signs You May Have a Hidden Plumbing Leak',
    excerpt:
      'Learn how to spot water damage early and prevent expensive repairs from hidden leaks.',
    date: '2026-02-02',
    tags: ['Plumbing', 'Repairs', 'Water Damage'],
    service: 'Plumbing',
    body: `Hidden plumbing leaks can silently damage drywall, flooring, and cabinetry.

Watch for sudden increases in your water bill, damp odors, bubbling paint, or unexplained mildew growth. If you hear running water when no fixtures are on, it can point to an active leak inside walls or slab lines.

A licensed plumber can perform pressure tests and camera inspections to locate leaks without unnecessary demolition.`
  },
  {
    slug: 'when-to-upgrade-your-electrical-panel',
    title: 'When Should You Upgrade Your Electrical Panel?',
    excerpt:
      'Frequent breaker trips and renovation plans may mean your home is ready for a panel upgrade.',
    date: '2026-01-18',
    tags: ['Electrical', 'Safety', 'Upgrades'],
    service: 'Electrical',
    body: `Older homes were not designed for the electrical demands of modern appliances and devices.

If your breakers trip often, lights flicker under load, or your panel still uses fuses, it may be time to upgrade. Panel upgrades improve safety, support EV chargers, and prepare your home for kitchen or HVAC improvements.

Always work with a licensed electrician and request permit-backed work for compliance and insurance protection.`
  },
  {
    slug: 'ductless-mini-split-vs-central-air',
    title: 'Ductless Mini-Split vs Central Air: Which Is Better?',
    excerpt:
      'Compare energy efficiency, installation needs, and comfort control before your next HVAC investment.',
    date: '2025-12-14',
    tags: ['HVAC', 'Buying Guide', 'Energy Efficiency'],
    service: 'HVAC',
    body: `Both central air and ductless systems can deliver excellent comfort when properly sized.

Central systems are ideal for homes with existing ductwork, while ductless mini-splits provide zoned control and easier installation in additions or older homes.

The best choice depends on layout, insulation, and long-term operating cost goals.`
  }
];

export const allTags = Array.from(
  new Set(blogPosts.flatMap((post) => post.tags))
).sort((a, b) => a.localeCompare(b));
