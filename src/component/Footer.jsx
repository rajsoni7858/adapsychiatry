import LogoAP from "../assets/images/Logo.png";
import { Link } from "react-router-dom";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
  FaTiktok,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-black text-white">
      <div className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-7 gap-10">
        {/* Quick Links */}
        <div className="lg:col-span-1">
          <h3 className="text-[#DAA520] font-semibold mb-4">Quick Links</h3>

          <ul className="space-y-3 text-gray-300 text-sm">
            <li>
              <Link to="/who-we-are" className="hover:text-white">
                Who We Are
              </Link>
            </li>
            <li>
              <Link to="/who-we-treat" className="hover:text-white">
                What We Treat
              </Link>
            </li>
            <li>
              <Link to="/services" className="hover:text-white">
                Services
              </Link>
            </li>
            <li>
              <Link to="/contact" className="hover:text-white">
                Contact Us
              </Link>
            </li>
          </ul>
        </div>

        {/* Resources */}
        <div className="lg:col-span-1">
          <h3 className="text-[#DAA520] font-semibold mb-4">Resources</h3>

          <ul className="space-y-3 text-gray-300 text-sm">
            <li>
              <Link to="/faq" className="hover:text-white">
                FAQs
              </Link>
            </li>
            <li>
              <Link to="/blog" className="hover:text-white">
                Blog
              </Link>
            </li>
            <li>
              <Link to="/fees" className="hover:text-white">
                Fees and Insurance
              </Link>
            </li>
          </ul>
        </div>

        {/* Legal */}
        <div className="lg:col-span-1">
          <h3 className="text-[#DAA520] font-semibold mb-4">Legal</h3>

          <ul className="space-y-3 text-gray-300 text-sm">
            <li>
              <Link to="/terms" className="hover:text-white">
                Terms
              </Link>
            </li>
            <li>
              <Link to="/privacy" className="hover:text-white">
                Privacy
              </Link>
            </li>
            <li>
              <Link to="/refund" className="hover:text-white">
                Return Policy
              </Link>
            </li>
            <li>
              <Link to="/cookies" className="hover:text-white">
                Cookie Settings
              </Link>
            </li>
          </ul>
        </div>

        {/* Business Hours */}
        <div className="lg:col-span-2">
          <h3 className="text-[#DAA520] font-semibold mb-4">Business Hours</h3>

          <p className="text-gray-300 text-sm">Monday - Thursday</p>

          <p className="text-gray-300 text-sm mb-6">09:00 am - 4:00 pm</p>

          <h3 className="text-[#DAA520] font-semibold mb-2">For Careers</h3>

          <p className="text-gray-300 text-sm">
            Interested in joining the ADA Team?
          </p>

          <a
            href="mailto:Career@adapsychiatry.com"
            className="text-gray-300 text-sm hover:text-white"
          >
            Career@adapsychiatry.com
          </a>
        </div>

        {/* Company Info */}
        <div className="lg:col-span-2">
          <div className="flex items-center gap-3 mb-6">
            <img src={LogoAP} alt="logo" className="w-10 h-10" />
            <span className="font-semibold tracking-widest">
              ADA PSYCHIATRY
            </span>
          </div>

          <h3 className="text-[#DAA520] font-semibold mb-2">Locate us</h3>

          <p className="text-gray-300 text-sm leading-6">
            1820 E Ray Road, STE A107, Chandler, Arizona 85225
            <br />
            Phone: 480-526-9292
          </p>

          <h3 className="text-[#DAA520] font-semibold mt-6 mb-2">Follow us</h3>

          <div className="flex gap-4 text-gray-300 text-lg">
            <a href="#" className="hover:text-white">
              <FaInstagram />
            </a>

            <a href="#" className="hover:text-white">
              <FaFacebookF />
            </a>

            <a href="#" className="hover:text-white">
              <FaTwitter />
            </a>

            <a href="#" className="hover:text-white">
              <FaTiktok />
            </a>

            <a href="#" className="hover:text-white">
              <FaLinkedinIn />
            </a>
          </div>
        </div>
      </div>

      {/* Divider */}
      <div className="border-t border-gray-700"></div>

      {/* Copyright */}
      <div className="text-center text-gray-400 text-sm py-5">
        © Ada Psychiatry. All rights reserved.
      </div>
    </footer>
  );
}
