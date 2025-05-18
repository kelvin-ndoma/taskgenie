import React from "react";
import {
  Mail,
  Phone,
  MapPin,
  Facebook,
  Twitter,
  Linkedin,
  Instagram,
} from "lucide-react";

export default function ContactUs() {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center px-4 py-4">
      <div className="w-full max-w-6xl bg-white rounded-2xl shadow-xl overflow-hidden grid grid-cols-1 md:grid-cols-2 md:min-h-[500px]">
        {/* Info Section */}
        <div className="bg-blue-600 text-white p-8 md:p-10 flex flex-col justify-between">
          <div>
            <h2 className="text-3xl font-bold mb-4">Let’s talk</h2>
            <p className="text-sm text-blue-100 mb-6">
              Have a question or want to work together? We'd love to hear from you.
            </p>

            <ul className="space-y-4 text-sm">
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5" />
                hello@growwithkelvin.com
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5" />
                +254 712 345678
              </li>
              <li className="flex items-center gap-3">
                <MapPin className="w-5 h-5" />
                Nairobi, Kenya
              </li>
            </ul>
          </div>

          <div className="mt-8">
            <p className="text-sm uppercase tracking-wide mb-2 text-blue-200">Follow us</p>
            <div className="flex space-x-4">
              <a href="#"><Facebook className="w-5 h-5 hover:text-white/80" /></a>
              <a href="#"><Twitter className="w-5 h-5 hover:text-white/80" /></a>
              <a href="#"><Instagram className="w-5 h-5 hover:text-white/80" /></a>
              <a href="#"><Linkedin className="w-5 h-5 hover:text-white/80" /></a>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div className="p-8 md:p-10 flex items-center">
          <form className="w-full space-y-5">
            <div>
              <label className="block text-sm font-medium text-gray-700">Full Name</label>
              <input
                type="text"
                placeholder="John Doe"
                className="mt-1 w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-blue-500 focus:border-blue-500 text-sm"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Email Address</label>
              <input
                type="email"
                placeholder="you@example.com"
                className="mt-1 w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-blue-500 focus:border-blue-500 text-sm"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Message</label>
              <textarea
                rows="4"
                placeholder="Your message..."
                className="mt-1 w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-blue-500 focus:border-blue-500 text-sm"
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition text-sm font-semibold"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
