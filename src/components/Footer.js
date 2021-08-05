import * as React from "react";
import { Link } from "gatsby";

import { StaticImage } from "gatsby-plugin-image";

import SocialLinks from "./SocialLinks";

const Footer = () => {
  return (
    <footer class="footer bg-green-dark text-light-light pt-20">
      <div class="container mx-auto px-4 md:px-6 pb-10">
        <div class="footer__grid md:grid gap-5 md:grid-cols-3 lg:grid-cols-6 space-y-10 md:space-y-0">
          {/* <!-- logos --> */}
          <div class="footer__logos flex col-span-1 lg:col-span-2 self-center">
            <a href="/" class="mr-8">
              <StaticImage
                src="../images/logos/DG2GO-logo-transparent-white.png"
                alt="DG2Go Logo"
                placeholder="tracedSVG"
                width="200"
              />
            </a>
          </div>

          {/* <!-- phone --> */}
          <div class="footer__phone self-center lg:col-span-2">
            <a href="tel:814-684-3538">
              <span class="uppercase tracking-wider">Call us</span>
              <br />
              <span class="text-3xl">814-684-3538</span>
            </a>
          </div>
          {/* <!-- social icons --> */}
          <SocialLinks class="footer__social-wrapper text-3xl self-center lg:col-span-2 flex space-x-4" />

          {/* <!-- footer address --> */}
          <div class="footer__address space-y-3 md:col-span-2 py-6 text-light-light max-w-xs">
            <p>DG2GO is a Division of the DelGrosso Family of Companies.</p>
            <p>
              <a href="mailto:dg2goinfo@delgrossos.com">
                dg2goinfo@delgrossos.com
              </a>
            </p>
            <p>
              4352 E. Pleasant Valley Blvd
              <br />
              PO Box 308 Tipton, PA 16684
            </p>
          </div>

          {/* <!-- menu 1 --> */}
          <div class="footer__col col1">
            <p class="uppercase text-sm tracking-wider mb-4 mt-6 font-semibold">
              Passes &amp; Tickets
            </p>
            <ul>
              <li>
                <Link to="/passes/all-day-fun-pass/">All-Day Fun Pass</Link>
              </li>
              <li>
                <Link to="/passes/sundowner-fun-pass/">Sundowner Pass</Link>
              </li>
              <li>
                <Link to="/passes/season-pass/">Season Pass</Link>
              </li>
              <li>
                <Link to="/ride-tickets/">Ride Tickets</Link>
              </li>
            </ul>
          </div>

          {/* <!-- menu 2 --> */}
          <div class="footer__col col2">
            <p class="uppercase text-sm tracking-wider mb-4 mt-6 font-semibold">
              Groups
            </p>
            <ul>
              <li>
                <Link to="/group-picnics/">Group Picnics</Link>
              </li>
              <li>
                <Link to="/school-picnics/">School Picnics</Link>
              </li>
              <li>
                <Link to="/kids-birthday-parties-at-the-park/">
                  Birthday Parties
                </Link>
              </li>
              <li>
                <Link to="/specialty-groups/">Specialty Groups</Link>
              </li>
            </ul>
          </div>

          {/* <!-- menu 3 --> */}
          <div class="footer__col col3">
            <p class="uppercase text-sm tracking-wider mb-4 mt-6 font-semibold">
              About
            </p>
            <ul>
              <li>
                <Link to="/hours-and-schedule-of-operation/">
                  Hours &amp; Schedule
                </Link>
              </li>
              <li>
                <Link to="/policies-info-and-faqs/">FAQs</Link>
              </li>
              <li>
                <Link to="/famous-food/the-delgrosso-food-tradition/">
                  Famous Food
                </Link>
              </li>

              <li>
                <Link to="/our-history/">History</Link>
              </li>
              <li>
                <Link to="/employment/">Join Our Team</Link>
              </li>
              <li>
                <Link to="/donation-requests/">Donation Requests</Link>
              </li>
            </ul>
          </div>

          {/* <!-- menu 4 --> */}
          <div class="footer__col col4">
            <p class="uppercase text-sm tracking-wider mb-4 mt-6 font-semibold">
              Legal
            </p>
            <ul>
              <li>
                <Link to="/contact/">Contact Us</Link>
              </li>
              <li>
                <Link to="/terms-and-conditions/">Terms &amp; Conditions</Link>
              </li>
              <li>
                <Link to="/privacy-policy/">Privacy Policy</Link>
              </li>
              <li>
                <Link to="/website-accessibility-statement/">
                  Accessibility Statement
                </Link>
              </li>
              <li>
                <Link to="/website-accessibility-policy/">
                  Accessibility Policy
                </Link>
              </li>
            </ul>
          </div>
          {/* <!-- end items --> */}
        </div>
        {/* <!-- end grid --> */}
      </div>
      {/* <!-- end container --> */}

      <div class="footer__bottom bg-green p-4 md:text-center text-sm">
        <p>
          ©2014-2020 DelGrosso’s Amusement Park, Inc. All Rights Reserved.
          <span class="hidden md:inline"> | </span>
          <span class="block mt-3 md:inline">
            Website by:
            <a
              href="https://studiorovst.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              Studio Rovst
            </a>
          </span>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
