import React, { useState } from 'react';
import { Dialog, DialogPanel } from '@headlessui/react';
import {
  Ambulance,
  Check,
  ClipboardPlus,
  Cross,
  Hospital,
  Languages,
  Linkedin,
  Mail,
  MapPin,
  Menu,
  Siren,
  SquareGanttChart,
  X,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const navigation = [
  { name: 'About', href: '/about' },
  { name: 'Services', href: '/services' },
  { name: 'Careers', href: '/careers' },
  { name: 'Contact', href: '/contact' },
  { name: 'Pricing', href: '/pricing' },
];

const links = [
  {
    name: 'LinkedIn',
    href: 'https://www.linkedin.com/in/henok-addis-bb1484174/',
    icon: Linkedin,
  },
  {
    name: 'Gmail',
    href: 'mailto:henokaddis72@gmail.com',
    icon: Mail,
  },
  {
    name: 'Google map location',
    href: 'https://maps.app.goo.gl/Jp9SjrEvW3JQqpNo9',
    icon: MapPin,
  },
];

const services = [
  {
    category: 'Social Media Marketing',
    items: [
      {
        title: 'Platform Management',
        description: 'Managing your social media profiles (Facebook, Instagram, etc.) and posting consistent, engaging content.',
      },
      {
        title: 'Hashtag Strategy & Audience Engagement',
        description: 'Boosting reach and interaction with strategic hashtag usage and active audience engagement.',
      },
      { title: 'Ad Campaign Management', description: 'Running highly targeted ad campaigns to drive traffic and increase conversions.' },
      { title: 'Competitor Analysis', description: 'Analyzing competitors to help you stay ahead of the market.' },
    ],
  },
  {
    category: 'Content Creation',
    items: [
      { title: 'Content Strategy', description: 'Developing a content calendar to ensure consistent posts across your platforms.' },
      { title: 'Creative Content', description: 'Producing engaging visuals, infographics, and videos aligned with your brand.' },
      {
        title: 'Storytelling & Copywriting',
        description: 'Writing compelling copy that tells your brand story and resonates with your audience.',
      },
    ],
  },
  {
    category: 'SEO Optimization',
    items: [
      { title: 'Website SEO', description: 'Optimizing your website content for search engines to improve your ranking and visibility.' },
      { title: 'Local SEO', description: 'Enhancing your online presence for local search results to attract nearby customers.' },
      {
        title: 'SEO-Friendly Structure',
        description: 'Building the website with SEO best practices in mind to increase organic search traffic.',
      },
      {
        title: 'Google Analytics Setup',
        description: 'Integrating Google Analytics to track visitor behavior and measure the performance of your site.',
      },
    ],
  },
  {
    category: 'Email Marketing',
    items: [
      { title: 'Campaign Strategy', description: 'Developing email campaigns to nurture customer relationships and drive sales.' },
      {
        title: 'Automated Emails',
        description: 'Setting up automated email flows such as welcome series, follow-ups, and promotional emails.',
      },
    ],
  },
  {
    category: 'Website Development Services',
    items: [
      { title: 'Website Design & Development', description: "A unique, visually appealing website tailored to your brand's identity." },
      { title: 'Responsive Design', description: 'Ensuring the site works seamlessly on desktop, mobile, and tablet.' },
      { title: 'User Experience (UX) Optimization', description: 'Creating an easy-to-navigate website that enhances user experience.' },
      { title: 'Speed Optimization', description: 'Ensuring the website loads quickly to reduce bounce rates.' },
    ],
  },
  {
    category: 'Website Maintenance & Support',
    items: [
      { title: 'Ongoing Support', description: 'Offering regular maintenance to ensure the website runs smoothly and updates as needed.' },
      { title: 'Security Updates', description: 'Keeping your website safe from security threats with regular updates.' },
    ],
  },
];

export default function ServicesPage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="bg-white">
      <header className="absolute inset-x-0 top-0 z-50">
        <nav className="flex items-center justify-between p-6 lg:px-8" aria-label="Global">
          <div className="flex lg:flex-1">
            <a href="/" className="-m-1.5 p-1.5">
              <span className="sr-only">Ethio Digitals</span>
              <img className="h-10 w-10 rounded-full object-cover" src="../asset/png/logo1.jpg" alt="Ethio Digitals Logo" />
            </a>
          </div>
          <div className="flex lg:hidden">
            <button
              type="button"
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
              onClick={() => setMobileMenuOpen(true)}
            >
              <span className="sr-only">Open main menu</span>
              <Menu className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="hidden lg:flex lg:gap-x-12">
            {navigation.map(item => (
              <a key={item.name} href={item.href} className="text-sm font-semibold leading-6 text-gray-900">
                {item.name}
              </a>
            ))}
          </div>
          <div className="hidden lg:flex lg:flex-1 lg:justify-end">
            <Link to="/login">
              <Button variant="default" loading={false}>
                Sign In <span aria-hidden="true"></span>
              </Button>
            </Link>
          </div>
        </nav>
        <Dialog className="lg:hidden" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
          <div className="fixed inset-0 z-50" />
          <DialogPanel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
            <div className="flex items-center justify-between">
              <a href="/" className="-m-1.5 p-1.5">
                <span className="sr-only">Ethio Digitals</span>
                <img className="h-10 w-10 rounded-full object-cover" src="../asset/png/logo1.jpg" alt="Ethio Digitals Logo" />
              </a>
              <button type="button" className="-m-2.5 rounded-md p-2.5 text-gray-700" onClick={() => setMobileMenuOpen(false)}>
                <span className="sr-only">Close menu</span>
                <X className="h-6 w-6" aria-hidden="true" />
              </button>
            </div>
            <div className="mt-6 flow-root">
              <div className="-my-6 divide-y divide-gray-500/10">
                <div className="space-y-2 py-6">
                  {navigation.map(item => (
                    <a
                      key={item.name}
                      href={item.href}
                      className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                    >
                      {item.name}
                    </a>
                  ))}
                </div>
                <div className="py-6">
                  <a
                    href="/login"
                    className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                  >
                    Log in
                  </a>
                </div>
              </div>
            </div>
          </DialogPanel>
        </Dialog>
      </header>

      <main className="isolate">
        {/* Hero section */}
        <div className="relative pt-14">
          <div className="py-10 sm:py-10">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
              <div className="mx-auto max-w-2xl text-center">
                <h1 className="text-4xl font-bold tracking-tight text-primary sm:text-6xl">Digital Marketing Solutions</h1>
                <p className="mt-6 text-lg leading-8 text-gray-600">
                  At Ethio Digitals, we are dedicated to providing a wide range of services that elevate your online presence and drive
                  success.
                </p>
                <div className="mt-10 flex items-center justify-center gap-x-6">
                  <a href="/about" className="rounded-md bg-primary px-3.5 py-1.5 text-base font-semibold leading-7 text-white shadow-sm">
                    Learn more
                  </a>
                  <a href="/contact" className="text-base font-semibold leading-7 text-primary">
                    Contact us <span aria-hidden="true">→</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Services section */}
        <section className="py-16 bg-gray-50">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 text-center">Our Services</h2>
            <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <div key={index} className="rounded-lg border border-gray-300 bg-white p-6 shadow-sm">
                  <h3 className="text-xl font-semibold text-gray-800">{service.category}</h3>
                  <ul className="mt-4 space-y-4">
                    {service.items.map((item, itemIndex) => (
                      <li key={itemIndex} className="flex items-start">
                        <Check className="h-5 w-5 flex-shrink-0 text-primary" />
                        <div className="ml-3">
                          <p className="font-semibold">{item.title}</p>
                          <p className="mt-1 text-sm text-gray-600">{item.description}</p>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact links section */}
        <section className="py-16 bg-white">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 text-center">Get In Touch</h2>
            <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {links.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  target="_blank"
                  className="flex items-center rounded-lg border border-gray-300 bg-white p-6 shadow-sm"
                >
                  <link.icon className="h-6 w-6 text-primary" />
                  <span className="ml-3 text-lg font-semibold">{link.name}</span>
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* Footer section */}
        <footer className="bg-primary text-white">
          <div className="container mx-auto py-10 px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col lg:flex-row justify-between items-center">
              <div className="mb-4 lg:mb-0">
                <a href="/" className="flex items-center">
                  <img className="h-10 w-10 rounded-full object-cover" src="../asset/png/logo1.jpg" alt="Universe Clinic Logo" />
                  <span className="ml-3 text-xl font-bold">Ethio Digitals Solution</span>
                </a>
              </div>
              <div className="flex space-x-4">
                {links.map(link => (
                  <a
                    key={link.name}
                    href={link.href}
                    target="_blank" // Ensures the link opens in a new tab
                    rel="noopener noreferrer" // Adds security
                    className="text-white hover:text-gray-300"
                  >
                    <link.icon className="h-6 w-6" aria-hidden="true" />
                  </a>
                ))}
              </div>
            </div>
            <div className="mt-4 text-center">
              <p className="text-sm">© 2024 Ethio Digitals Solution. All rights reserved.</p>
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
}
