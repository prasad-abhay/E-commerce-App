import {
  Facebook,
  Instagram,
  Twitter,
  Mail,
  Phone,
  MapPin,
} from "lucide-react";
import { useNavigate } from "react-router-dom";

function Footer() {
  const navigate = useNavigate();

  const redirectToNotFound = () => {
    navigate("../../pages/not-found/index.jsx");
  };

  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">

          {/* Brand */}
          <div>
            <h2
              className="text-2xl font-bold text-white mb-4 cursor-pointer"
              onClick={redirectToNotFound}
            >
              ShopEase
            </h2>
            <p className="text-sm">
              Your one-stop destination for fashion, footwear & accessories.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">
              Quick Links
            </h3>
            <ul className="space-y-2 text-sm">
              <li onClick={() => navigate("/")} className="cursor-pointer hover:text-white">Home</li>
              <li onClick={() => navigate("/")} className="cursor-pointer hover:text-white">Shop</li>
              <li onClick={redirectToNotFound} className="cursor-pointer hover:text-white">About Us</li>
              <li onClick={redirectToNotFound} className="cursor-pointer hover:text-white">Contact</li>
            </ul>
          </div>

          {/* Customer Service */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">
              Customer Service
            </h3>
            <ul className="space-y-2 text-sm">
              <li onClick={redirectToNotFound} className="cursor-pointer hover:text-white">FAQs</li>
              <li onClick={redirectToNotFound} className="cursor-pointer hover:text-white">Returns</li>
              <li onClick={redirectToNotFound} className="cursor-pointer hover:text-white">Shipping</li>
              <li onClick={redirectToNotFound} className="cursor-pointer hover:text-white">Privacy Policy</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">
              Contact Us
            </h3>
            <ul className="space-y-3 text-sm">
              <li onClick={redirectToNotFound} className="flex items-center gap-2 cursor-pointer hover:text-white">
                <Mail size={16} /> support@shopease.com
              </li>
              <li onClick={redirectToNotFound} className="flex items-center gap-2 cursor-pointer hover:text-white">
                <Phone size={16} /> +011-98765432
              </li>
              <li onClick={redirectToNotFound} className="flex items-center gap-2 cursor-pointer hover:text-white">
                <MapPin size={16} /> New Delhi, India
              </li>
            </ul>

            {/* Social Icons */}
            <div className="flex gap-4 mt-4">
              <Facebook onClick={redirectToNotFound} className="cursor-pointer hover:text-white" />
              <Instagram onClick={redirectToNotFound} className="cursor-pointer hover:text-white" />
              <Twitter onClick={redirectToNotFound} className="cursor-pointer hover:text-white" />
            </div>
          </div>

        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-700 py-4 text-center text-sm">
        © {new Date().getFullYear()} ShopEase. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;