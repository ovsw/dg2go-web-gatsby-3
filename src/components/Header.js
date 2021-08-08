/* This example requires Tailwind CSS v2.0+ */
import * as React from "react";
import { Popover, Transition } from "@headlessui/react";
import { Link } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";

import SocialLinks from "./SocialLinks";

import {
  // BookmarkAltIcon,
  // CalendarIcon,
  // ChartBarIcon,
  // CursorClickIcon,
  MenuIcon,
  // PhoneIcon,
  // PlayIcon,
  // RefreshIcon,
  // ShieldCheckIcon,
  // SupportIcon,
  // ViewGridIcon,
  XIcon,
} from "@heroicons/react/outline";
// import { ChevronDownIcon } from "@heroicons/react/solid";

import PizzaIcon from "../images/svg-icons/icon-pizza.svg";
import RestaurantIcon from "../images/svg-icons/icon-restaurant.svg";
import TruckIcon from "../images/svg-icons/icon-truck.svg";
import DishIcon from "../images/svg-icons/icon-dish.svg";
import PaperPlaneIcon from "../images/svg-icons/icon-paper-plane.svg";
// import PhoneAltSquareSolidIcon from "../images/svg-icons/icon-phone-square-alt-solid.svg";
import PhoneSolidIcon from "../images/svg-icons/icon-phone-solid.svg";

// const mobileMenu = [
//   {
//     name: "Analytics",
//     description:
//       "Get a better understanding of where your traffic is coming from.",
//     href: "#",
//     icon: ChartBarIcon,
//   },
//   {
//     name: "Engagement",
//     description: "Speak directly to your customers in a more meaningful way.",
//     href: "#",
//     icon: CursorClickIcon,
//   },
//   {
//     name: "Security",
//     description: "Your customers' data will be safe and secure.",
//     href: "#",
//     icon: ShieldCheckIcon,
//   },
//   {
//     name: "Integrations",
//     description: "Connect with third-party tools that you're already using.",
//     href: "#",
//     icon: ViewGridIcon,
//   },
//   {
//     name: "Automations",
//     description:
//       "Build strategic funnels that will drive your customers to convert",
//     href: "#",
//     icon: RefreshIcon,
//   },
// ];
// const callsToAction = [
//   { name: "Watch Demo", href: "#", icon: PlayIcon },
//   { name: "Contact Sales", href: "#", icon: PhoneIcon },
// ];
// const resources = [
//   {
//     name: "Help Center",
//     description:
//       "Get all of your questions answered in our forums or contact support.",
//     href: "#",
//     icon: SupportIcon,
//   },
//   {
//     name: "Guides",
//     description:
//       "Learn how to maximize our platform to get the most out of it.",
//     href: "#",
//     icon: BookmarkAltIcon,
//   },
//   {
//     name: "Events",
//     description:
//       "See what meet-ups and other events we might be planning near you.",
//     href: "#",
//     icon: CalendarIcon,
//   },
//   {
//     name: "Security",
//     description: "Understand how we take your privacy seriously.",
//     href: "#",
//     icon: ShieldCheckIcon,
//   },
// ];
// const recentPosts = [
//   { id: 1, name: "Boost your conversion rate", href: "#" },
//   {
//     id: 2,
//     name: "How to use search engine optimization to drive traffic to your site",
//     href: "#",
//   },
//   { id: 3, name: "Improve your customer experience", href: "#" },
// ];

// function classNames(...classes) {
//   return classes.filter(Boolean).join(" ");
// }

const desktopMenu = [
  {
    name: "Pizza Shop",
    icon: PizzaIcon,
    url: "/",
  },
  {
    name: "Meals",
    icon: RestaurantIcon,
    url: "/",
  },
  {
    name: "On the Road",
    icon: TruckIcon,
    url: "/",
  },
  {
    name: "Specials",
    icon: DishIcon,
    url: "/",
  },
  {
    name: "Contact",
    icon: PaperPlaneIcon,
    url: "/",
  },
];

const Header = () => {
  return (
    <Popover className="bg-white border-b-2 border-gray-100 fixed w-full z-50 top-0">
      {({ open }) => (
        <>
          <div className="wrapper mx-auto px-4 sm:px-6">
            <div className="flex justify-between items-center  py-6 md:justify-start md:space-x-10">
              {/* LOGO */}
              <div className="flex justify-start ">
                <a href="/">
                  <span className="sr-only">Workflow</span>
                  <StaticImage
                    // className="h-12 w-auto sm:h-24"
                    src="../images/logos/DG2GO-logo-transparent.png"
                    alt="DelGrosso's DG2GO logo"
                    height={55}
                    placeholder="tracedSVG"
                  />
                </a>
              </div>
              {/* END LOGO */}

              {/* HAMBURGER BTN */}
              <div className="-mr-2 -my-2 md:hidden">
                <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-green-dark">
                  <span className="sr-only">Open menu</span>
                  <MenuIcon className="h-8 w-8 text-green" aria-hidden="true" />
                </Popover.Button>
              </div>
              {/* END HAMBURGER BTN */}

              {/* NAV */}
              <Popover.Group
                as="nav"
                className="hidden md:flex space-x-10 lg:w-0 lg:flex-1"
              >
                {desktopMenu.map(({ name, icon, url }) => {
                  // loop through desktop menu items
                  return (
                    <Link
                      key={name}
                      to={url}
                      className="text-base font-medium text-gray-500 hover:text-gray-900"
                    >
                      {React.createElement(icon, {
                        className: "h-5 w-5 inline-block mr-2",
                      })}
                      {name}
                    </Link>
                  );
                })}
              </Popover.Group>
              {/* END NAV */}

              {/* CTAs */}
              <div className="hidden md:flex items-center justify-end md:flex-1 lg:w-0">
                {/* <a
                  href="/"
                  className="whitespace-nowrap text-base font-medium text-gray-500 hover:text-gray-900"
                >
                  Sign in
                </a> */}
                <a
                  href="tel:814-684-3538"
                  className="flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-green hover:green-dark"
                >
                  <PhoneSolidIcon className="mr-2" />
                  <span className="sr-only"> call us</span> 814-684-3538
                </a>
                {/* <a
                  href="/"
                  className="ml-8 whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700"
                >
                  Sign up
                </a> */}
                <SocialLinks wrapperClasses="flex ml-8" itemClasses="ml-2" />
              </div>

              {/*  END CTAs */}
            </div>
          </div>

          <Transition
            show={open}
            as={React.Fragment}
            enter="duration-200 ease-out"
            enterFrom="opacity-0 scale-95"
            enterTo="opacity-100 scale-100"
            leave="duration-100 ease-in"
            leaveFrom="opacity-100 scale-100"
            leaveTo="opacity-0 scale-95"
          >
            <div className="bg-green-900 bg-opacity-90 fixed top-0 left-0 right-0 w-full h-screen z-40"></div>
          </Transition>

          {/* MOBILE MENU */}
          <Transition
            show={open}
            as={React.Fragment}
            enter="duration-200 ease-out"
            enterFrom="opacity-0 scale-95"
            enterTo="opacity-100 scale-100"
            leave="duration-100 ease-in"
            leaveFrom="opacity-100 scale-100"
            leaveTo="opacity-0 scale-95"
          >
            <Popover.Panel
              focus
              static
              className="absolute top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden z-50"
            >
              <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-white divide-y-2 divide-gray-50">
                <div className="pt-5 pb-6 px-5">
                  <div className="flex items-center justify-between">
                    <div>
                      <StaticImage
                        // cclassName="h-8 w-auto"
                        src="../images/logos/DG2GO-logo-transparent.png"
                        alt="DelGrosso's DG2GO logo"
                        height={55}
                        placeholder="tracedSVG"
                      />
                    </div>
                    <div className="-mr-2">
                      <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-green">
                        <span className="sr-only">Close menu</span>
                        <XIcon
                          className="h-8 w-8 text-green"
                          aria-hidden="true"
                        />
                      </Popover.Button>
                    </div>
                  </div>
                  <div className="mt-6">
                    <nav className="grid gap-y-8">
                      {desktopMenu.map((item) => (
                        <a
                          key={item.name}
                          href={item.href}
                          className="-m-3 p-3 flex items-center rounded-md hover:bg-gray-50"
                        >
                          <item.icon
                            className="flex-shrink-0 h-6 w-6 text-green"
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
                  {/* <div className="grid grid-cols-2 gap-y-4 gap-x-8">
                    <a
                      href="/"
                      className="text-base font-medium text-gray-900 hover:text-gray-700"
                    >
                      Pricing
                    </a>

                    <a
                      href="/"
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
                  </div> */}
                  <div>
                    <a
                      href="tel:814-684-3538"
                      className="w-full flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-green hover:green-dark"
                    >
                      <PhoneSolidIcon className="mr-2" />
                      <span className="sr-only"> call us</span> 814-684-3538
                    </a>
                    <p className="mt-6 text-center text-base font-medium text-gray-500">
                      {/* Existing customer?{" "}
                      <a href="/" className="text-green-dark hover:text-green">
                        Sign in
                      </a> */}
                      <SocialLinks wrapperClasses="flex justify-center text-green" />
                    </p>
                  </div>
                </div>
              </div>
            </Popover.Panel>
          </Transition>
          {/* END MOBILE MENU */}
        </>
      )}
    </Popover>
  );
};

export default Header;
