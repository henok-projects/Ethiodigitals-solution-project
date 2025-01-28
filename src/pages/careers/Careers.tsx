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

const jobListings = [
  {
    title: 'Video Editor',
    location: 'Remote / Addis Ababa, Ethiopia',
    description: 'Edit and produce high-quality videos to meet clients’ branding and marketing needs.',
    responsibilities: [
      'Edit and assemble raw footage into polished video content.',
      'Add effects, transitions, graphics, and sound to enhance video quality.',
      'Collaborate with the creative team to ensure videos align with brand guidelines.',
      'Manage multiple video projects and meet deadlines.',
    ],
    requirements: [
      'Proven experience as a video editor with a strong portfolio.',
      'Proficiency in video editing software (e.g., Adobe Premiere, Final Cut Pro, DaVinci Resolve).',
      'Creative storytelling and attention to detail.',
      'Ability to work under tight deadlines and manage multiple projects.',
    ],
  },
  {
    title: 'Sales Representative',
    location: 'Remote / Addis Ababa, Ethiopia',
    description: 'Drive sales by connecting with potential clients and promoting our digital services.',
    responsibilities: [
      'Identify and reach out to prospective clients via calls, emails, and social platforms.',
      'Present and promote digital marketing services to meet client needs.',
      'Maintain positive client relationships and address any inquiries.',
      'Meet or exceed sales targets and provide regular progress reports.',
    ],
    requirements: [
      'Experience in sales or customer service is preferred.',
      'Strong communication and negotiation skills.',
      'Ability to build and maintain relationships with clients.',
      'Proactive and goal-oriented with a strong work ethic.',
    ],
  },
  {
    title: 'Graphic Designer',
    location: 'Remote / Addis Ababa, Ethiopia',
    description: 'Design creative visual content to support marketing campaigns and brand identity.',
    responsibilities: [
      'Create designs for social media, websites, and marketing materials.',
      'Develop visual concepts that align with client branding.',
      'Collaborate with the team to brainstorm and execute design ideas.',
      'Deliver high-quality designs on time and within project scope.',
    ],
    requirements: [
      'Proven experience as a graphic designer with a strong portfolio.',
      'Proficiency in design tools like Adobe Photoshop, Illustrator, or Figma.',
      'Creative thinking and attention to detail.',
      'Ability to work collaboratively and meet deadlines.',
    ],
  },
  {
    title: 'Digital Marketing Specialist',
    location: 'Remote / Addis Ababa, Ethiopia',
    description: 'Develop and execute digital marketing strategies to drive engagement and sales.',
    responsibilities: [
      'Plan and execute campaigns across platforms such as Google Ads, Facebook, and Instagram.',
      'Analyze performance metrics and optimize campaigns for better ROI.',
      'Collaborate with content creators to align messaging and visuals.',
      'Stay updated with the latest digital marketing trends and tools.',
    ],
    requirements: [
      'Proven experience in digital marketing or related fields.',
      'Familiarity with marketing tools like Google Analytics and Facebook Ads Manager.',
      'Strong analytical skills and creative problem-solving.',
      'Excellent communication and project management skills.',
    ],
  },
];

export default function CareersPage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="bg-white">
      <header className="absolute inset-x-0 top-0 z-50">
        <nav className="flex items-center justify-between p-6 lg:px-8" aria-label="Global">
          <div className="flex lg:flex-1">
            <a href="/" className="-m-1.5 p-1.5">
              <span className="sr-only">Ethio Digitals Solution</span>
              <img className="h-10 w-10 rounded-full object-cover" src="../asset/png/logo1.jpeg" alt="Universe Clinic" />
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
                <img className="h-10 w-10 rounded-full object-cover" src="../asset/png/logo1.jpeg" alt="Universe Clinic Logo" />
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
      <main className="isolate mt-20">
        {/* Hero section */}
        <div className="relative pt-14 bg-gradient-to-r from-blue-500 to-blue-500 text-white py-20">
          <div className="text-center">
            <h1 className="text-5xl font-bold">Careers at Ethio Digitals</h1>
            <p className="mt-6 max-w-3xl mx-auto text-lg leading-8">
              Join a team that’s revolutionizing digital marketing in Ethiopia. At Ethio Digitals, we empower brands through strategy,
              creativity, and technology.
            </p>
            <Link to="/about" className="mt-10 inline-block rounded-md bg-white px-5 py-3 text-base font-semibold text-primary shadow-md">
              Learn more about us
            </Link>
          </div>
        </div>

        {/* Job Listings section */}
        <div className="bg-gray-50 py-24 sm:py-32">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl lg:text-center">
              <h2 className="text-base font-semibold leading-7 text-primary">Current Openings</h2>
              <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Explore the opportunities to grow with us</p>
              <p className="mt-6 text-lg leading-8 text-gray-600">
                We are looking for talented individuals who are passionate about digital marketing and technology.
              </p>
            </div>
            <div className="mt-20 grid grid-cols-1 gap-12 lg:grid-cols-2">
              {jobListings.map(job => (
                <div key={job.title} className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
                  <h3 className="text-lg font-semibold text-gray-900">{job.title}</h3>
                  <p className="text-sm text-gray-500">{job.location}</p>
                  <p className="mt-4 text-base text-gray-600">{job.description}</p>
                  <h4 className="mt-6 font-semibold text-gray-800">Responsibilities</h4>
                  <ul className="list-disc list-inside text-gray-600">
                    {job.responsibilities.map((resp, index) => (
                      <li key={index}>{resp}</li>
                    ))}
                  </ul>
                  <h4 className="mt-6 font-semibold text-gray-800">Requirements</h4>
                  <ul className="list-disc list-inside text-gray-600">
                    {job.requirements.map((req, index) => (
                      <li key={index}>{req}</li>
                    ))}
                  </ul>
                  <a
                    href="mailto:henokaddis72@gmail.com"
                    className="mt-6 inline-block rounded-md bg-primary px-4 py-2 text-base font-semibold text-white"
                  >
                    Apply Now
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Footer section */}
        <footer className="bg-primary text-white py-10">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row justify-between items-center">
            <div className="flex items-center">
              <img className="h-10 w-10 rounded-full object-cover" src="../asset/png/logo1.jpeg" alt="Ethio Digitals Logo" />
              <span className="ml-3 text-xl font-bold">Ethio Digitals Solution</span>
            </div>
            <div className="flex space-x-4 mt-4 lg:mt-0">
              {links.map(link => (
                <a key={link.name} href={link.href} target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-300">
                  <link.icon className="h-6 w-6" aria-hidden="true" />
                </a>
              ))}
            </div>
          </div>
          <div className="mt-4 text-center">
            <p className="text-sm">© 2024 Ethio Digitals Solution. All rights reserved.</p>
          </div>
        </footer>
      </main>
    </div>
  );
}
