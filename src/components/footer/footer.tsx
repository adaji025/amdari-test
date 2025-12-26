import Link from "next/link";
import {
  Phone,
  MapPin,
  Twitter,
  Facebook,
  Instagram,
  Linkedin,
} from "lucide-react";
import Image from "next/image";
import { FBcon, IGcon, InIcon, LocationIcon, XIcon } from "../svg";

export default function Footer() {
  return (
    <footer className="bg-black text-white py-16 px-6 md:px-12 relative overflow-hidden">
      {/* Top Border Gradient/Segments */}
      <div className="absolute top-0 left-0 w-full h-2 flex">
        <div className="flex-1 bg-purple-700/60" />
        <div className="flex-1 bg-emerald-700/60" />
        <div className="flex-1 bg-cyan-700/60" />
      </div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
        {/* Brand Section */}
        <div className="space-y-6">
          <div className="bg-[#1a1a1a] rounded-lg p-3 inline-block">
            <Image src={"/images/svgs/logo-white.svg"} height={40} width={142} alt="Amdari" />
          </div>
          <p className="text-[#F2F4F7] font-semibold text-justify text-sm leading-relaxed max-w-sm">
            At Amdari, our goal is to get you closer to career success with our
            ready-made project solutions. Our end-to-end portfolio projects are
            designed to help you increase your chances of landing a Data Science
            job.
          </p>
        </div>

        {/* Projects Section */}
        <div className="font-semibold">
          <h3 className="text-lg font-bold mb-6 font-clash-display">
            Projects
          </h3>
          <ul className="space-y-2 text-gray-300">
            <li>
              <Link href="#" className="hover:text-white transition-colors">
                Data Analytics
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:text-white transition-colors">
                Sales Analytics
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:text-white transition-colors">
                Supply Chain Analytics
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:text-white transition-colors">
                Financial Analytics
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:text-white transition-colors">
                HR Analytics
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:text-white transition-colors">
                Data Science and Machine Learning
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:text-white transition-colors">
                Data Engineering
              </Link>
            </li>
          </ul>
        </div>

        {/* Company Section */}
        <div className="font-semibold">
          <h3 className="text-lg font-bold mb-6 font-clash-display">Company</h3>
          <ul className="space-y-2 text-gray-300">
            <li>
              <Link href="#" className="hover:text-white transition-colors">
                Projects
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:text-white transition-colors">
                Testimonial
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:text-white transition-colors">
                About Us
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:text-white transition-colors">
                Experts
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:text-white transition-colors">
                Success Stories
              </Link>
            </li>
          </ul>
        </div>

        {/* Contact Us Section */}
        <div className="space-y-4 font-bold">
          <h3 className="text-lg font-bold mb-6 font-clash-display">
            Contact us
          </h3>
          <div className="space-y-2">
            <div className="flex items-center gap-4 group">
              <div className="bg-[#1a1a1a] p-3 rounded-full group-hover:bg-gray-800 transition-colors">
                <Phone className="w-5 h-5 text-white" />
              </div>
              <span className="text-gray-300">(+234) 8160904306</span>
            </div>
            <div className="flex items-center gap-4 group">
              <div className="bg-[#1a1a1a] p-3 rounded-full group-hover:bg-gray-800 transition-colors">
                <LocationIcon />
              </div>
              <span className="text-gray-300">Alberta, Canada</span>
            </div>
          </div>

          <div className="flex gap-4">
            <Link
              href="#"
              className="bg-[#1a1a1a] flex justify-center items-center h-12 w-12 rounded-full hover:bg-gray-800 transition-colors"
              aria-label="Twitter"
            >
              <XIcon />
            </Link>
            <Link
              href="#"
              className="bg-[#1a1a1a] flex justify-center items-center h-12 w-12 rounded-full hover:bg-gray-800 transition-colors"
              aria-label="Facebook"
            >
              <FBcon />
            </Link>
            <Link
              href="#"
              className="bg-[#1a1a1a] flex justify-center items-center h-12 w-12 rounded-full hover:bg-gray-800 transition-colors"
              aria-label="Instagram"
            >
              <IGcon />
            </Link>
            <Link
              href="#"
              className="bg-[#1a1a1a] flex justify-center items-center h-12 w-12 rounded-full hover:bg-gray-800 transition-colors"
              aria-label="LinkedIn"
            >
              <InIcon />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
