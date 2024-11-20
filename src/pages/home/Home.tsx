import React, { useState, useEffect, useRef } from 'react';
import { AiOutlineArrowLeft, AiOutlineArrowRight } from 'react-icons/ai';
import { Dialog, DialogPanel } from '@headlessui/react';
import { FaGlobe, FaCamera, FaSearch, FaChartBar, FaLaptop, FaEnvelope } from 'react-icons/fa';
import {
  Ambulance,
  Camera,
  Check,
  ClipboardPlus,
  Cross,
  Globe,
  Hospital,
  Languages,
  Laptop,
  Linkedin,
  Mail,
  MapPin,
  Menu,
  Search,
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
const features = [
  {
    name: 'Increase Brand Visibility',
    description: 'Enhance your online presence with targeted social media strategies and campaigns.',
    icon: FaGlobe,
  },
  {
    name: 'Engaging Content Creation',
    description: 'Create compelling visuals, videos, and written content that resonates with your audience.',
    icon: FaCamera,
  },
  {
    name: 'Boost Search Rankings',
    description: 'Improve your site’s SEO to rank higher on search engines and attract organic traffic.',
    icon: FaSearch,
  },
  {
    name: 'Audience Insights & Analytics',
    description: 'Gain insights into customer behavior and track your marketing success with data-driven analysis.',
    icon: FaChartBar,
  },
  {
    name: 'Seamless Website Development',
    description: 'Build a responsive, visually appealing website that provides an excellent user experience.',
    icon: FaLaptop,
  },
  {
    name: 'Strategic Email Marketing',
    description: 'Engage and retain customers with targeted email campaigns tailored to their interests.',
    icon: FaEnvelope,
  },
];

const products = [
  {
    name: 'Drug Management',
    description: 'Organize medications, track refills, and ensure smooth care.',
  },
  {
    name: 'Employee Management',
    description: 'Streamline HR tasks and improve staff performance.',
  },
  {
    name: 'Centralized Hospital Management',
    description: 'Complete control over branches with our centralized system.',
  },
  {
    name: 'Schedule Appointments',
    description: 'Quickly schedule appointments with healthcare professionals.',
  },
  {
    name: 'Billing',
    description: 'Pay online and access billing history easily.',
  },
  {
    name: 'Medical Records',
    description: 'Securely record patient history and provide patient access to records.',
  },
  {
    name: 'Data Visualization',
    description: 'Gain insights into monthly and yearly clinic activities.',
  },
  {
    name: 'Report Generation',
    description: 'Generate and export reports in PDF, XLSX, and CSV formats.',
  },
];

const sliderData = [
  {
    image: '../asset/slides/social.webp',
    heading: 'Social Media Marketing',
    desc: 'Boost your online engagement with targeted social media strategies.',
  },
  {
    image: '../asset/slides/content.jpeg',
    heading: 'Content Creation',
    desc: 'Craft compelling content that tells your brand story.',
  },
  {
    image: '../asset/slides/seo.avif',
    heading: 'SEO Optimization',
    desc: 'Enhance your visibility on search engines with optimized strategies.',
  },
  {
    image: '../asset/slides/email.png',
    heading: 'Email Marketing',
    desc: 'Reach customers effectively through targeted email campaigns.',
  },
  {
    image: '../asset/slides/web.png',
    heading: 'Website Design & Development',
    desc: 'Build a responsive, visually appealing website for your brand.',
  },
  {
    image: '../asset/slides/ongoing.png',
    heading: 'Ongoing Support and Maintenance',
    desc: 'Keep your website secure and up-to-date with our support.',
  },
];

export default function HospitalManagementLanding() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const slideLength = sliderData.length;
  const intervalTime = 4000;
  const slideInterval = useRef(null);

  const nextSlide = () => {
    setCurrentSlide(prev => (prev === slideLength - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlide(prev => (prev === 0 ? slideLength - 1 : prev - 1));
  };

  // Start the automatic sliding effect
  useEffect(() => {
    slideInterval.current = setInterval(nextSlide, intervalTime);
    return () => clearInterval(slideInterval.current);
  }, []);

  return (
    <div className="bg-white">
      <header className="absolute inset-x-0 top-0 z-50">
        <nav className="flex items-center justify-between p-6 lg:px-8" aria-label="Global">
          <div className="flex lg:flex-1 items-center">
            <a href="/" className="flex items-center -m-1.5 p-1.5">
              <span className="sr-only">Ethio Digitals Solution</span>
              <img className="h-20 w-30 rounded-full object-cover" src="../asset/png/logo1.jpg" alt="Ethio Digitals Solution Logo" />
            </a>
            <span
              className="ml-3 text-2xl font-bold text-primary"
              style={{
                fontFamily: "'Poppins', sans-serif",
                letterSpacing: '0.05em',
              }}
            >
              ETHIO DIGITALS SOLUTION
            </span>
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
        {/*  */}

        {/* Image Slider Section */}
        <div className="slider">
          <AiOutlineArrowLeft className="arrow prev" onClick={prevSlide} />
          <AiOutlineArrowRight className="arrow next" onClick={nextSlide} />
          {sliderData.map((slide, index) => (
            <div className={index === currentSlide ? 'slide current' : 'slide'} key={index}>
              {index === currentSlide && (
                <div>
                  <img src={slide.image} alt={slide.heading} className="image" />
                  <div className="content">
                    <h2>{slide.heading}</h2>
                    <p>{slide.desc}</p>
                    <hr />
                    <button className="--btn --btn-primary">Get Started</button>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/*  */}
        {/* Hero section */}
        <div className="relative pt-14">
          <div className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80" aria-hidden="true">
            <div
              className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#0077ff] to-[#0077ff] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
              style={{
                clipPath:
                  'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
              }}
            />
          </div>
          <div className="py-10 sm:py-10">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
              <div className="mx-auto max-w-6xl text-center">
                <h1 className="text-4xl font-bold tracking-tight text-primary sm:text-6xl">Your Partner in Digital Transformation</h1>
                <p className="mt-6 text-lg leading-8 text-gray-600">
                  At <strong>Ethio Digitals</strong>, we are dedicated to elevating your business through expert digital marketing and
                  custom website solutions. From creating engaging social media campaigns to building responsive, SEO-friendly websites, we
                  empower your brand to thrive in the digital world.
                </p>
                <p className="mt-6 text-lg leading-8 text-gray-600">
                  Let us help you connect with your audience, drive targeted traffic, and transform potential leads into loyal customers.
                  Our team is committed to delivering high-quality, strategic solutions designed to bring your vision to life.
                </p>
                <div className="mt-10 flex items-center justify-center gap-x-6">
                  <a href="/about" className="rounded-md bg-primary px-3.5 py-1.5 text-base font-semibold leading-7 text-white shadow-sm">
                    Learn more
                  </a>
                  <a href="/services" className="text-base font-semibold leading-7 text-primary">
                    Our services <span aria-hidden="true">→</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Features section */}
        <div className="bg-gray-50 py-24 sm:py-32">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl lg:text-center">
              <h2 className="text-base font-semibold leading-7 text-primary">Our Digital Solutions</h2>
              <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                Drive Your Business Forward with Ethio Digitals
              </p>
              <p className="mt-6 text-lg leading-8 text-gray-600">
                Our suite of digital services is designed to help you attract customers, boost engagement, and grow your online brand.
              </p>
            </div>
            <div className="mt-20 max-w-lg sm:mt-24 lg:mt-32 lg:max-w-none">
              <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16">
                {features.map(feature => (
                  <div key={feature.name} className="flex">
                    <feature.icon className="h-12 w-12 text-primary" aria-hidden="true" />
                    <div className="ml-4">
                      <h3 className="text-lg font-semibold leading-7 text-gray-900">{feature.name}</h3>
                      <p className="mt-2 text-base leading-7 text-gray-600">{feature.description}</p>
                    </div>
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

// CSS styles
const styles = `
  .slider {
    width: 100%;
    height: 75vh;
    position: relative;
    overflow: hidden;
    margin-top: 80px; /* Add spacing below the navbar */
  }

  .slide {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    opacity: 0;
    transform: translateX(-50%);
    transition: all 0.5s ease;
  }

  .slide img {
    width: 100%;
    height: 100%;
    object-fit: cover;
     margin-top: 50px;
     margin-left: 3px;
     margin-right: 3px;
  }

  .current {
    opacity: 1;
    transform: translateX(0);
  }

  .content {
    position: absolute;
    top: 23rem;
    left: 5rem;
    opacity: 0;
    width: 50%;
    color: #fff;
    padding: 3rem;
    background: rgba(0, 0, 0, 0.3);
    animation: slide-up 1s ease 0.5s;
    animation-fill-mode: forwards;
    visibility: hidden;
  }

  @keyframes slide-up {
    0% {
      visibility: visible;
      top: 23rem;
    }
    100% {
      visibility: visible;
      top: 17rem;
    }
  }

  .content > * {
    color: #fff;
    margin-bottom: 1rem;
  }

  .current .content {
    opacity: 1;
    transform: translateX(0);
    transition: all 0.5s ease;
  }

  .arrow {
    border: 2px solid white;
    background-color: transparent;
    color: #fff;
    cursor: pointer;
    height: 2rem;
    width: 2rem;
    border-radius: 50%;
    position: absolute;
    z-index: 999;
  }
  .arrow:hover {
    background-color: #fff;
    color: #777;
  }

  .next {
    top: 35%;
    right: 1.5rem;
  }
  .prev {
    top: 35%;
    left: 1.5rem;
  }

  hr {
    height: 2px;
    background: white;
    width: 50%;
  }
`;

// Append styles to document head
const styleSheet = document.createElement('style');
styleSheet.type = 'text/css';
styleSheet.innerText = styles;
document.head.appendChild(styleSheet);
