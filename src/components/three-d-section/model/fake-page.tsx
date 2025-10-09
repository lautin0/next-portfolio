import { Fragment } from 'react';
import { Popover, PopoverButton, PopoverGroup, PopoverPanel, Transition } from '@headlessui/react';
import { cn } from '@/lib/utils';
import {
  IconBookmark,
  IconCalendar,
  IconChartBar,
  IconChevronDown,
  IconCursorText,
  IconDeviceWatchCog,
  IconHelp,
  IconMenu,
  IconPhone,
  IconPlayCard,
  IconRefresh,
  IconShieldCheck,
  IconX,
} from '@tabler/icons-react';
import Image from 'next/image';

const features = [
  {
    name: 'Analytics',
    href: '#',
    description: 'Get a better understanding of where your traffic is coming from.',
    icon: IconChartBar,
  },
  {
    name: 'Reliability',
    href: '#',
    description: 'Zero down-time',
    icon: IconCursorText,
  },
  {
    name: 'Security',
    href: '#',
    description: "Your customers' data will be safe and secure.",
    icon: IconShieldCheck,
  },
  {
    name: 'Integrations',
    href: '#',
    description: "Connect with third-party tools that you're already using.",
    icon: IconDeviceWatchCog,
  },
  {
    name: 'Automations',
    href: '#',
    description: 'Build strategic funnels that will drive your customers to convert',
    icon: IconRefresh,
  },
];
const callsToAction = [
  { name: 'Watch Demo', href: '#', icon: IconPlayCard },
  { name: 'Contact Sales', href: '#', icon: IconPhone },
];
const resources = [
  {
    name: 'Help Center',
    description: 'Get all of your questions answered in our forums or contact support.',
    href: '#',
    icon: IconHelp,
  },
  {
    name: 'Guides',
    description: 'Learn how to maximize our platform to get the most out of it.',
    href: '#',
    icon: IconBookmark,
  },
  {
    name: 'Events',
    description: 'See what meet-ups and other events we might be planning near you.',
    href: '#',
    icon: IconCalendar,
  },
  {
    name: 'Security',
    description: 'Understand how we take your privacy seriously.',
    href: '#',
    icon: IconShieldCheck,
  },
];
const recentPosts = [
  { id: 1, name: 'Boost your conversion rate', href: '#' },
  {
    id: 2,
    name: 'How to use search engine optimization to drive traffic to your site',
    href: '#',
  },
  { id: 3, name: 'Improve your customer experience', href: '#' },
];

export default function Example() {
  return (
    <div className="relative bg-gray-50">
      <Popover className="relative bg-white shadow">
        {({ open }) => (
          <>
            <div className="max-w-7xl mx-auto px-4 px-6">
              <div className="flex justify-between items-center py-6">
                <div className="flex justify-start">
                  <a href="#">
                    <span className="sr-only text-gray-900">Demo</span>
                  </a>
                </div>
                <div className="-mr-2 -my-2">
                  <PopoverButton className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-amber-500">
                    <span className="sr-only">Open menu</span>
                    <IconMenu className="h-6 w-6" aria-hidden="true" />
                  </PopoverButton>
                </div>
                <PopoverGroup as="nav" className="hidden space-x-10">
                  <Popover className="relative">
                    {({ open }) => (
                      <>
                        <PopoverButton
                          className={cn(
                            open ? 'text-gray-900' : 'text-gray-500',
                            'group bg-white rounded-md inline-flex items-center text-base font-medium hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-amber-500'
                          )}
                        >
                          <span>Solutions</span>
                          <IconChevronDown
                            className={cn(
                              open ? 'text-gray-600' : 'text-gray-400',
                              'ml-2 h-5 w-5 group-hover:text-gray-500'
                            )}
                            aria-hidden="true"
                          />
                        </PopoverButton>

                        <Transition
                          show={open}
                          as={Fragment}
                          enter="transition ease-out duration-200"
                          enterFrom="opacity-0 translate-y-1"
                          enterTo="opacity-100 translate-y-0"
                          leave="transition ease-in duration-150"
                          leaveFrom="opacity-100 translate-y-0"
                          leaveTo="opacity-0 translate-y-1"
                        >
                          <PopoverPanel
                            static
                            className="absolute -ml-4 mt-3 transform z-10 px-2 w-screen max-w-md px-0"
                          >
                            <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden">
                              <div className="relative grid gap-6 bg-white px-5 py-6 gap-8 p-8">
                                {features.map((item) => (
                                  <a
                                    key={item.name}
                                    href={item.href}
                                    className="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50"
                                  >
                                    <item.icon
                                      className="flex-shrink-0 h-6 w-6 text-amber-600"
                                      aria-hidden="true"
                                    />
                                    <div className="ml-4">
                                      <p className="text-base font-medium text-gray-900">
                                        {item.name}
                                      </p>
                                      <p className="mt-1 text-sm text-gray-500">
                                        {item.description}
                                      </p>
                                    </div>
                                  </a>
                                ))}
                              </div>
                              <div className="px-5 py-5 bg-gray-50 space-y-6 flex space-y-0 space-x-10 px-8">
                                {callsToAction.map((item) => (
                                  <div key={item.name} className="flow-root">
                                    <a
                                      href={item.href}
                                      className="-m-3 p-3 flex items-center rounded-md text-base font-medium text-gray-900 hover:bg-gray-100"
                                    >
                                      <item.icon
                                        className="flex-shrink-0 h-6 w-6 text-gray-400"
                                        aria-hidden="true"
                                      />
                                      <span className="ml-3">{item.name}</span>
                                    </a>
                                  </div>
                                ))}
                              </div>
                            </div>
                          </PopoverPanel>
                        </Transition>
                      </>
                    )}
                  </Popover>

                  <a href="#" className="text-base font-medium text-gray-500 hover:text-gray-900">
                    Pricing
                  </a>
                  <a href="#" className="text-base font-medium text-gray-500 hover:text-gray-900">
                    Docs
                  </a>

                  <Popover className="relative">
                    {({ open }) => (
                      <>
                        <PopoverButton
                          className={cn(
                            open ? 'text-gray-900' : 'text-gray-500',
                            'group bg-white rounded-md inline-flex items-center text-base font-medium hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-amber-500'
                          )}
                        >
                          <span>More</span>
                          <IconChevronDown
                            className={cn(
                              open ? 'text-gray-600' : 'text-gray-400',
                              'ml-2 h-5 w-5 group-hover:text-gray-500'
                            )}
                            aria-hidden="true"
                          />
                        </PopoverButton>

                        <Transition
                          show={open}
                          as={Fragment}
                          enter="transition ease-out duration-200"
                          enterFrom="opacity-0 translate-y-1"
                          enterTo="opacity-100 translate-y-0"
                          leave="transition ease-in duration-150"
                          leaveFrom="opacity-100 translate-y-0"
                          leaveTo="opacity-0 translate-y-1"
                        >
                          <PopoverPanel
                            static
                            className="absolute left-1/2 z-10 transform -translate-x-1/2 mt-3 px-2 w-screen max-w-md px-0"
                          >
                            <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden">
                              <div className="relative grid gap-6 bg-white px-5 py-6 gap-8 p-8">
                                {resources.map((item) => (
                                  <a
                                    key={item.name}
                                    href={item.href}
                                    className="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50"
                                  >
                                    <item.icon
                                      className="flex-shrink-0 h-6 w-6 text-amber-600"
                                      aria-hidden="true"
                                    />
                                    <div className="ml-4">
                                      <p className="text-base font-medium text-gray-900">
                                        {item.name}
                                      </p>
                                      <p className="mt-1 text-sm text-gray-500">
                                        {item.description}
                                      </p>
                                    </div>
                                  </a>
                                ))}
                              </div>
                              <div className="px-5 py-5 bg-gray-50 px-8 py-8">
                                <div>
                                  <h3 className="text-sm tracking-wide font-medium text-gray-500 uppercase">
                                    Recent Posts
                                  </h3>
                                  <ul className="mt-4 space-y-4">
                                    {recentPosts.map((item) => (
                                      <li key={item.id} className="text-base truncate">
                                        <a
                                          href={item.href}
                                          className="font-medium text-gray-900 hover:text-gray-700"
                                        >
                                          {item.name}
                                        </a>
                                      </li>
                                    ))}
                                  </ul>
                                </div>
                                <div className="mt-5 text-sm">
                                  <a
                                    href="#"
                                    className="font-medium text-amber-600 hover:text-amber-500"
                                  >
                                    {' '}
                                    View all posts <span aria-hidden="true">&rarr;</span>
                                  </a>
                                </div>
                              </div>
                            </div>
                          </PopoverPanel>
                        </Transition>
                      </>
                    )}
                  </Popover>
                </PopoverGroup>
                <div className="hidden items-center justify-end">
                  <a
                    href="#"
                    className="whitespace-nowrap text-base font-medium text-gray-500 hover:text-gray-900"
                  >
                    Sign in
                  </a>
                  <a
                    href="#"
                    className="ml-8 whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-amber-600 hover:bg-amber-700"
                  >
                    Sign up
                  </a>
                </div>
              </div>
            </div>

            <Transition
              show={open}
              as={Fragment}
              enter="duration-200 ease-out"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="duration-100 ease-in"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <PopoverPanel
                focus
                static
                className="absolute top-0 inset-x-0 z-10 p-2 transition transform origin-top-right"
              >
                <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-white divide-y-2 divide-gray-50">
                  <div className="pt-5 pb-6 px-5">
                    <div className="flex items-center justify-between">
                      <div className="text-gray-900">Demo</div>
                      <div className="-mr-2">
                        <PopoverButton className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-amber-500">
                          <span className="sr-only">Close menu</span>
                          <IconX className="h-6 w-6" aria-hidden="true" />
                        </PopoverButton>
                      </div>
                    </div>
                    <div className="mt-6">
                      <nav className="grid gap-y-8">
                        {features.map((item) => (
                          <a
                            key={item.name}
                            href={item.href}
                            className="-m-3 p-3 flex items-center rounded-md hover:bg-gray-50"
                          >
                            <item.icon
                              className="flex-shrink-0 h-6 w-6 text-amber-600"
                              aria-hidden="true"
                            />
                            <span className="ml-3 text-base font-medium text-gray-900">
                              {item.name}
                            </span>
                          </a>
                        ))}
                      </nav>
                    </div>
                  </div>
                  <div className="py-6 px-5 space-y-6">
                    <div className="grid grid-cols-2 gap-y-4 gap-x-8">
                      <a
                        href="#"
                        className="text-base font-medium text-gray-900 hover:text-gray-700"
                      >
                        Docs
                      </a>
                      {resources.map((item) => (
                        <a
                          key={item.name}
                          href={item.href}
                          className="text-base font-medium text-gray-900 hover:text-gray-700"
                        >
                          {item.name}
                        </a>
                      ))}
                    </div>
                    <div>
                      <a
                        href="#"
                        className="w-full flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-amber-600 hover:bg-amber-700"
                      >
                        Sign up
                      </a>
                      <p className="mt-6 text-center text-base font-medium text-gray-500">
                        Existing customer?
                        <a href="#" className="text-amber-600 hover:text-amber-500">
                          Sign in
                        </a>
                      </p>
                    </div>
                  </div>
                </div>
              </PopoverPanel>
            </Transition>
          </>
        )}
      </Popover>

      <main>
        <div className="mx-auto max-w-7xl w-full pt-16 pb-20 text-center">
          <div className="px-4 px-8">
            <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 text-5xl">
              <span className="block">Full-Stack Engineering</span>{' '}
              <span className="block text-amber-600">Front-End Leaning</span>
            </h1>
            <p className="mt-3 max-w-md mx-auto text-lg text-gray-500 text-xl">
              Expert in building performant, responsive, and accessible UIs using React, Next.js,
              TypeScript, and modern frameworks. I focus on scalable architecture and clean
              component design.
            </p>
            <div className="mt-10 flex justify-center">
              <div className="mt-3 rounded-md shadow mt-0 ml-3">
                <div
                  role="button"
                  aria-label="a button placeholder for demo purpose"
                  className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-amber-600 hover:bg-amber-700 cursor-pointer select-none"
                >
                  Explore
                </div>
              </div>
              <div className="mt-3 rounded-md shadow mt-0 ml-3">
                <div
                  role="button"
                  aria-label="another button placeholder for demo purpose"
                  className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-amber-600 bg-white hover:bg-gray-50 cursor-pointer select-none"
                >
                  Contact
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-2 relative w-full h-72">
          <div className="relative h-48">
            <Image fill src="/undraw_web-app_141a.svg" alt="" />
          </div>
          <div className="relative h-64">
            <Image fill src="/undraw_building-a-website_1wrp.svg" alt="" />
          </div>
        </div>
      </main>
    </div>
  );
}
