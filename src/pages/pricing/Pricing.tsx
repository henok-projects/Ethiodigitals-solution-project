import React, { useState } from 'react';
import { Dialog, DialogPanel } from '@headlessui/react';
import { Linkedin, Mail, MapPin, Menu, X } from 'lucide-react';
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
    href: '#',
    icon: Linkedin,
  },
  {
    name: 'Gmail',
    href: '#',
    icon: Mail,
  },
  {
    name: 'Google map location',
    href: 'https://maps.app.goo.gl/Jp9SjrEvW3JQqpNo9',
    icon: MapPin,
  },
];

const pricingPlans = [
  {
    name: 'SEO Optimization',
    price: '19,000 birr/month',
    features: [
      'Keyword research and optimization',
      'On-page and off-page SEO',
      'Up to 10 web pages optimized',
      'Monthly performance reports',
      'Basic analytics',
      '24/7 support via email',
    ],
  },
  {
    name: 'Web Design & Development',
    price: '100,000 birr (one-time)',
    features: [
      'Custom responsive website design',
      'Basic e-commerce functionality',
      'SEO-ready architecture',
      'Integrated analytics tools',
      'Free 3-month maintenance',
      '48-hour support response time',
    ],
  },
  {
    name: 'Social Media Marketing',
    price: '20,000 birr/month',
    features: [
      'Tailored content creation for 2 platforms',
      'Up to 10,000 followers engagement',
      'Advanced analytics and reporting',
      'Weekly performance insights',
      '24-hour support response time',
      'Marketing automation setup',
    ],
  },
  {
    name: 'Complete Digital Marketing Package',
    price: '150,000 birr/month',
    features: [
      'SEO Optimization',
      'Web Design & Development',
      'Social Media Marketing',
      'Email Marketing Campaigns',
      'Custom reporting and analytics tools',
      'Unlimited product listings',
      'Dedicated account manager',
      '1-hour support response time',
    ],
  },
];

export default function PricingPage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="bg-white">
      <header className="absolute inset-x-0 top-0 z-50">
        <nav className="flex items-center justify-between p-6 lg:px-8" aria-label="Global">
          <div className="flex lg:flex-1">
            <a href="/" className="-m-1.5 p-1.5">
              <span className="sr-only">Ethio Digitals Solution</span>
              <img className="h-10 w-10 rounded-full object-cover" src="../asset/png/logo1.jpg" alt="Universe Clinic" />
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
                <span className="sr-only">Ethio Digitals Solution</span>
                <img className="h-10 w-10 rounded-full object-cover" src="../asset/png/logo1.jpg" alt="Universe Clinic Logo" />
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
        <div className="relative pt-14">
          <div className="py-10 sm:py-10">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
              <div className="mx-auto max-w-2xl text-center">
                <h1 className="text-4xl font-bold tracking-tight text-primary sm:text-6xl">Pricing that grows with you</h1>
                <p className="mt-6 text-lg leading-8 text-gray-600">
                  Choose an affordable plan that’s packed with the best features for engaging your audience, creating customer loyalty, and
                  driving sales.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-gray-50 py-24 sm:py-32">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl lg:text-center">
              <p className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Simple and Clear Pricing</p>
            </div>
            <div className="mt-20 max-w-lg sm:mt-24 lg:mt-32 lg:max-w-none">
              <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-4">
                {pricingPlans.map(plan => (
                  <div key={plan.name} className={`p-6 rounded-lg shadow-md ${plan.name === 'Startup' ? 'border-2 border-primary' : ''}`}>
                    <h3 className="text-lg font-semibold leading-7 text-gray-900">{plan.name}</h3>
                    <p className="text-xl font-bold text-gray-900">{plan.price}</p>
                    <ul className="mt-4 space-y-2 text-gray-600">
                      {plan.features.map((feature, index) => (
                        <li key={index} className="flex items-center">
                          <span className="mr-2 text-primary">✔</span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <Link
                      to="/signup"
                      className="mt-4 inline-block w-full rounded-md bg-primary px-4 py-2 text-base font-semibold leading-7 text-white text-center"
                    >
                      Buy Plan
                    </Link>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
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
