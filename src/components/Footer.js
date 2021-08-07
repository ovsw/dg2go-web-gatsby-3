import * as React from "react";
import { Link } from "gatsby";

import { StaticImage } from "gatsby-plugin-image";

import SocialLinks from "./SocialLinks";

const Footer = () => {
  return (
    <footer className="footer bg-green-dark text-light-light pt-20">
      <div className="container mx-auto px-4 md:px-6 pb-10">
        <div className="footer__grid md:grid gap-5 md:grid-cols-3 lg:grid-cols-4 space-y-10 md:space-y-0">
          {/* <!-- logos --> */}
          <div className="footer__logos flex col-span-1  self-center">
            <a href="/" className="mr-8">
              <StaticImage
                src="../images/logos/DG2GO-logo-transparent-white.png"
                alt="DG2Go Logo"
                placeholder="tracedSVG"
                width={201}
              />
            </a>
          </div>

          {/* <!-- social icons --> */}
          <SocialLinks wrapperClasses="footer__social-wrapper text-3xl self-center lg:col-span-2 flex space-x-4" />

          {/* <!-- phone --> */}
          <div className="footer__phone self-center">
            <a href="tel:814-684-3538">
              <span className="uppercase tracking-wider">Call us</span>
              <br />
              <span className="text-3xl">814-684-3538</span>
            </a>
          </div>

          {/* <!-- footer address --> */}
          <div className="footer__address space-y-3 py-6 text-light-light max-w-xs">
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
          <div className="footer__col col1">
            <p className="uppercase text-sm tracking-wider mb-4 mt-6 font-semibold">
              Passes &amp; Tickets
            </p>
            <ul>
              <li>
                <Link to="/pizza-shop-menu/">DG2GO Pizza Shop</Link>
              </li>
              <li>
                <Link to="/delgrosso-dinners-to-go/">DG2GO Meals</Link>
              </li>
              <li>
                <Link to="/on-the-road/">DG2GO On the Road</Link>
              </li>
              <li>
                <Link to="/specials/">DG2GO Specials</Link>
              </li>
            </ul>
          </div>

          {/* <!-- menu 2 --> */}
          <div className="footer__col col3">
            <p className="uppercase text-sm tracking-wider mb-4 mt-6 font-semibold">
              About
            </p>
            <ul>
              <li>
                <Link to="/history/">History</Link>
              </li>
              <li>
                <Link to="/join-our-team/">Join Our Team</Link>
              </li>
              <li>
                <Link to="/contact/">Contact Us</Link>
              </li>
            </ul>
          </div>

          {/* <!-- menu 3 --> */}
          <div className="footer__col col4">
            <p className="uppercase text-sm tracking-wider mb-4 mt-6 font-semibold">
              Legal
            </p>
            <ul>
              <li>
                <Link to="/privacy-policy/">Privacy Policy</Link>
              </li>
              <li>
                <Link to="/terms-and-conditions/">Terms &amp; Conditions</Link>
              </li>
              <li>
                <Link to="/accessibility-statement/">
                  Accessibility Statement
                </Link>
              </li>
              <li>
                <Link to="/accessibility-policy/">Accessibility Policy</Link>
              </li>
            </ul>
          </div>
          {/* <!-- end items --> */}
        </div>
        {/* <!-- end grid --> */}
      </div>
      {/* <!-- end container --> */}

      <div className="footer__bottom bg-green p-4 md:text-center text-sm">
        <p>
          ©2014-2020 DelGrosso’s Amusement Park, Inc. All Rights Reserved.
          <span className="hidden md:inline"> | </span>
          <span className="block mt-3 md:inline">
            Website by:{" "}
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
