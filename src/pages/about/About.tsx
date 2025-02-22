import React from 'react';

import Navbar from '../constants/navbar/Navbar';
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

const stats = [
  { label: 'Patients treated every 24 hours', value: 'Healthcare Services' },
  { label: 'Access to care 24/7', value: 'Patient Support' },
  { label: '5% cost reduction compared to previous systems', value: 'Cost Efficiency' },
];
const values = [
  {
    name: 'Social Media Marketing',
    description:
      'We expertly manage social media profiles across platforms like Facebook and Instagram, posting consistent, engaging content that resonates with audiences.',
  },
  {
    name: 'Hashtag Strategy & Audience Engagement',
    description:
      'Our approach enhances reach and interaction with targeted hashtag usage and active audience engagement, fostering a strong community around your brand.',
  },
  {
    name: 'Ad Campaign Management',
    description:
      'We design and run highly targeted ad campaigns aimed at driving traffic and increasing conversions, ensuring maximum ROI for your marketing efforts.',
  },
  {
    name: 'Content Strategy',
    description:
      'Developing a well-structured content calendar ensures consistent and timely posts across platforms, keeping your brand top-of-mind for your audience.',
  },
  {
    name: 'Creative Content',
    description:
      'We produce visually engaging content, including graphics, infographics, and videos, that aligns with and strengthens your brand identity.',
  },
  {
    name: 'SEO Optimization',
    description:
      'Our team optimizes website content for search engines, improving ranking, visibility, and attracting organic traffic to your website.',
  },
  {
    name: 'Email Marketing',
    description:
      'Developing effective email campaigns to nurture relationships and drive sales, we use targeted strategies that deliver measurable results.',
  },
  {
    name: 'Website Design & Development',
    description:
      'Offering custom, visually appealing website design tailored to your brand’s identity, with responsiveness across desktop, mobile, and tablet.',
  },
  {
    name: 'Website Maintenance & Support',
    description: 'Offering ongoing support and regular maintenance to ensure your website remains secure, updated, and fully functional.',
  },
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

const teamMembers = [
  {
    name: 'Henok Addis',
    role: 'COO and Co-Founder',
    image: '../asset/team/henok.jpg',
    linkedin: 'https://www.linkedin.com/in/henok-addis-bb1484174/',
  },
  {
    name: 'Fasika Getie',
    role: 'CEO and Co-Founder',
    image: '../asset/team/fasika-profile.jpeg',
    linkedin: 'https://www.linkedin.com/in/fasika-getie-6832aa334/',
  },
  {
    name: 'Gutu Daniel',
    role: 'Backend Developer',
    image: '../asset/team/gutu.jpg',
    linkedin: 'https://www.linkedin.com/in/gutu-daniel',
  },
  {
    name: 'Brook Solomon',
    role: 'Video editor and graphics designer',
    image: '../asset/team/biruk.jpg',
    linkedin: 'https://www.linkedin.com/in/brook-solomon-2785b5324/',
  },
];

export default function About() {
  return (
    <div className="bg-white h-lvh">
      {/* Header */}
      <Navbar />

      <main className="isolate">
        {/* Hero section */}
        <div className="relative isolate -z-10">
          <svg
            className="absolute inset-x-0 top-0 -z-10 h-[64rem] w-full stroke-gray-200 [mask-image:radial-gradient(32rem_32rem_at_center,white,transparent)]"
            aria-hidden="true"
          >
            <defs>
              <pattern id="1f932ae7-37de-4c0a-a8b0-a6e3b4d44b84" width={200} height={200} x="50%" y={-1} patternUnits="userSpaceOnUse">
                <path d="M.5 200V.5H200" fill="none" />
              </pattern>
            </defs>
            <svg x="50%" y={-1} className="overflow-visible fill-gray-50">
              <path d="M-200 0h201v201h-201Z M600 0h201v201h-201Z M-400 600h201v201h-201Z M200 800h201v201h-201Z" strokeWidth={0} />
            </svg>
            <rect width="100%" height="100%" strokeWidth={0} fill="url(#1f932ae7-37de-4c0a-a8b0-a6e3b4d44b84)" />
          </svg>
          <div
            className="absolute left-1/2 right-0 top-0 -z-10 -ml-24 transform-gpu overflow-hidden blur-3xl lg:ml-24 xl:ml-48"
            aria-hidden="true"
          >
            <div
              className="aspect-[801/1036] w-[50.0625rem] bg-gradient-to-tr from-[#0077ff] to-[#0077ff] opacity-30"
              style={{
                clipPath:
                  'polygon(63.1% 29.5%, 100% 17.1%, 76.6% 3%, 48.4% 0%, 44.6% 4.7%, 54.5% 25.3%, 59.8% 49%, 55.2% 57.8%, 44.4% 57.2%, 27.8% 47.9%, 35.1% 81.5%, 0% 97.7%, 39.2% 100%, 35.2% 81.4%, 97.2% 52.8%, 63.1% 29.5%)',
              }}
            />
          </div>
          <div className="overflow-hidden">
            <div className="mx-auto max-w-7xl px-6 pb-32 pt-36 sm:pt-60 lg:px-8 lg:pt-32">
              <div className="mx-auto max-w-2xl gap-x-14 lg:mx-0 lg:flex lg:max-w-none lg:items-center">
                <div className="w-full max-w-xl lg:shrink-0 xl:max-w-2xl">
                  <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
                    We Empowering Your Brand’s Digital Success
                  </h1>
                  <p className="relative mt-6 text-lg leading-8 text-gray-600 sm:max-w-md lg:max-w-none">
                    At <strong>Ethio Digitals Solution </strong>, we specialize in helping businesses grow their online presence and achieve
                    their marketing goals through effective digital marketing strategies and professional website development. Our agency
                    offers a full range of services, from social media marketing to creating responsive and SEO-friendly websites tailored
                    to your brand.
                  </p>

                  <p className="relative mt-6 text-lg leading-8 text-gray-600 sm:max-w-md lg:max-w-none">
                    We aim to: - Improve your brand's visibility and online engagement. - Drive targeted traffic to your website or social
                    media platforms. - Convert potential leads into paying customers. - Develop a user-friendly, visually appealing, and
                    fully functional website that meets your business needs.
                  </p>
                </div>
                <div className="mt-14 flex justify-end gap-8 sm:-mt-44 sm:justify-start sm:pl-20 lg:mt-0 lg:pl-0">
                  <div className="ml-auto w-44 flex-none space-y-8 pt-32 sm:ml-0 sm:pt-80 lg:order-last lg:pt-36 xl:order-none xl:pt-80">
                    <div className="relative">
                      <img
                        src="/asset/Images/webdevelopment.jpg"
                        alt=""
                        className="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg"
                      />
                      <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10" />
                    </div>
                  </div>
                  <div className="mr-auto w-44 flex-none space-y-8 sm:mr-0 sm:pt-52 lg:pt-36">
                    <div className="relative">
                      <img
                        src="/asset/Images/contentcreation.jpg"
                        alt=""
                        className="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg"
                      />
                      <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10" />
                    </div>
                    <div className="relative">
                      <img
                        src="/asset/Images/digital1.webp"
                        alt=""
                        className="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg"
                      />
                      <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10" />
                    </div>
                  </div>
                  <div className="w-44 flex-none space-y-8 pt-32 sm:pt-0">
                    <div className="relative">
                      <img
                        src="/asset/Images/socialmediamarketing.jpg"
                        alt=""
                        className="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg"
                      />
                      <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10" />
                    </div>
                    <div className="relative">
                      <img
                        src="/asset/Images/emailmarketing.jpg"
                        alt=""
                        className="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg"
                      />
                      <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Our mission */}
        <div className="mx-auto -mt-12 max-w-7xl px-6 sm:mt-0 lg:px-8 xl:-mt-4">
          <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-none">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Our mission</h2>
            <div className="mt-6 flex flex-col gap-x-8 gap-y-20 lg:flex-row">
              <div className="lg:w-full lg:max-w-2xl lg:flex-auto">
                <p className="relative mt-6 text-lg leading-8 text-gray-600 sm:max-w-md lg:max-w-none">
                  At <strong>Ethio Digitals</strong> , our mission is to empower businesses to elevate their online presence and reach their
                  full digital potential. Through innovative digital marketing strategies and expertly designed websites, we help brands
                  connect with their audience, increase visibility, and achieve lasting engagement. Our commitment to delivering
                  results-driven services is fueled by a passion for transforming ideas into impactful online experiences.
                </p>
              </div>
              <div className="w-500 lg:flex -mt-12 lg:flex-auto lg:justify-center">
                <dl className=" space-y-8 xl:w-300">
                  <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-none">
                    <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">GOAL</h2>
                    <div className="mt-1 flex flex-col gap-x-8 gap-y-20 lg:flex-row">
                      <div className="lg:w-full lg:max-w-2xl lg:flex-auto">
                        <p className="relative mt-6 text-lg leading-8 text-gray-600 sm:max-w-md lg:max-w-none">
                          Elevate Brand Visibility: Boost your brand's online presence, increasing visibility and engagement across digital
                          platforms. Drive Targeted Traffic: Attract relevant audiences to your website and social media channels, fostering
                          connections that lead to conversions. Convert Leads into Loyal Customers: Transform potential leads into committed
                          customers through tailored marketing strategies and engaging content. Create a User-Centric Digital Experience:
                          Develop responsive, SEO-friendly websites that reflect your brand’s identity, ensuring a seamless, enjoyable
                          experience for all users.
                        </p>
                      </div>
                    </div>
                  </div>
                </dl>
              </div>
            </div>
          </div>
          <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-none mt-28">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Meet our leadership</h2>
            <div className="mt-1 flex flex-col gap-x-8 gap-y-20 lg:flex-row">
              <div className="lg:w-full lg:max-w-2xl lg:flex-auto">
                <p className="relative mt-6 text-lg leading-8 text-gray-600 sm:max-w-md lg:max-w-none">
                  We’re a dynamic group of individuals who are passionate about what we do and dedicated to delivering the best results for
                  our clients.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 px-4 py-8">
              {teamMembers.map((member, index) => (
                <div key={index} className="flex flex-col items-center">
                  <img src={member.image} alt={member.name} className="w-40 h-40 rounded-full object-cover shadow-md mb-4" />
                  <h3 className="text-xl font-semibold text-gray-800">{member.name}</h3>
                  <p className="text-gray-500">{member.role}</p>
                  <div className="flex space-x-2 mt-2">
                    {member.linkedin && (
                      <a href={member.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-blue-700 transition">
                        <Linkedin className="h-5 w-5 text-gray-500 cursor-pointer" aria-hidden="true" />
                      </a>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        {/* Clients Section */}
        <div className="mx-auto max-w-7xl px-6 sm:mt-40 lg:px-8">
          <div className="mx-auto max-w-2xl lg:mx-0">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 mb-10 sm:text-4xl">Our Clients and Projects</h2>
          </div>
          <div className="ml-20 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-8">
            {/* Client 1 */}
            <div className="text-center flex flex-col items-center p-4 bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow">
              <img src="../asset/Images/universe-Logo-1.png" alt="Client 1" className="h-20 w-50 object-contain mb-4 rounded-lg" />
              <p className="mt-2 text-sm font-semibold text-gray-700">Universe Internal Medicine Specialty Clinic</p>
              <a
                href="http://universehealthservice.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:text-blue-800 text-sm mt-1"
              >
                Website development and Digital marketing(see our clent website)
              </a>
            </div>
            <div className="text-center flex flex-col items-center p-4 bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow">
              <img src="../asset/Images/addisfinancial.png" alt="Client 1" className="h-20 w-50 object-contain mb-4 rounded-lg" />
              <p className="mt-2 text-sm font-semibold text-gray-700">Addisinancial.com</p>
              <a
                href="http://Addisinancial.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:text-blue-800 text-sm mt-1"
              >
                Software development
              </a>
            </div>
            <div className="text-center flex flex-col items-center p-4 bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow">
              <img src="../asset/Images/common.png" alt="Client 1" className="h-20 w-50 object-contain mb-4 rounded-lg" />
              <p className="mt-2 text-sm font-semibold text-gray-700">Ethiodigitals.com</p>
              <a href="/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 text-sm mt-1">
                Diital marketing website ( web development )
              </a>
            </div>
            <div className="text-center flex flex-col items-center p-4 bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow">
              <img src="../asset/Images/galsie.png" alt="Client 1" className="h-20 w-50 object-contain mb-4 rounded-lg" />
              <p className="mt-2 text-sm font-semibold text-gray-700">Smart Home System (Galsie)</p>
              <a
                href="http://galsie.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:text-blue-800 text-sm mt-1"
              >
                Software development
              </a>
            </div>

            {/* Add more client logos here, repeat above block for each client */}
          </div>
        </div>

        {/* Values section */}
        <div className="mx-auto mt-20 max-w-7xl pb-8 px-6 sm:mt-40 lg:px-8">
          <div className="mx-auto max-w-2xl lg:mx-0">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 mb-10 sm:text-4xl">Our values</h2>
          </div>
          <dl className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 text-base leading-7 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3">
            {values.map(value => (
              <div key={value.name}>
                <dt className="font-semibold text-gray-900">{value.name}</dt>
                <dd className="mt-1 text-gray-600">{value.description}</dd>
              </div>
            ))}
          </dl>
        </div>
        {/* Footer section */}
        <footer className="bg-primary text-white">
          <div className="container mx-auto py-10 px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col lg:flex-row justify-between items-center">
              <div className="mb-4 lg:mb-0">
                <a href="/" className="flex items-center">
                  <img className="h-10 w-10 rounded-full object-cover" src="../asset/png/logo1.jpeg" alt="Universe Clinic Logo" />
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
