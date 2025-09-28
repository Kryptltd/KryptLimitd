import { Facebook, Instagram, MessageCircle, Mail, Phone, MapPin } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  const quickLinks = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about" },
    { name: "Products", href: "/products" },
    { name: "Contacts", href: "/contacts" },
  ];

  const products = [
    "Chlorohexidine",
    "Bleach",
    "Tile Cleaner",
    "Spirit",
    "Calamine",
    "Liquid Soap",
    "Hand Wash",
  ];

  return (
    <footer className="bg-gradient-to-b from-secondary to-primary-light border-t border-border">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <img 
                src="/pictures/Krypt logo.png" 
                alt="Krypt Investments" 
                className="w-8 h-8 object-contain"
              />
              <span className="text-lg font-bold text-foreground">Krypt Investments</span>
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Your trusted partner for high-quality cleaning and hygiene products. 
              Professional solutions for everyday use.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://www.facebook.com/profile.php?id=61573217287349"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-primary text-primary-foreground rounded-lg flex items-center justify-center hover:bg-primary-dark transition-colors"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="https://www.instagram.com/kryptlttd/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-primary text-primary-foreground rounded-lg flex items-center justify-center hover:bg-primary-dark transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="https://wa.me/256772316316"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-success text-success-foreground rounded-lg flex items-center justify-center hover:opacity-90 transition-opacity"
              >
                <MessageCircle className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-foreground">Quick Links</h3>
            <nav className="flex flex-col space-y-2">
              {quickLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.href}
                  className="text-muted-foreground hover:text-primary transition-colors text-sm"
                >
                  {link.name}
                </Link>
              ))}
            </nav>
          </div>

          {/* Products */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-foreground">Our Products</h3>
            <div className="flex flex-col space-y-2">
              {products.map((product) => (
                <span key={product} className="text-muted-foreground text-sm">
                  {product}
                </span>
              ))}
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-foreground">Contact Us</h3>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <Phone className="w-5 h-5 text-primary mt-0.5" />
                <div>
                  <p className="text-sm text-muted-foreground">Call Us</p>
                  <p className="text-sm font-medium text-foreground"><a href="tel:+256772316316">+256 772 316 316</a></p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <Mail className="w-5 h-5 text-primary mt-0.5" />
                <div>
                  <p className="text-sm text-muted-foreground">Email</p>
                  <p className="text-sm font-medium text-foreground"><a href="mailto:kryptinvestmentsltd@gmail.com">kryptinvestmentsltd@gmail.com</a></p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-primary mt-0.5" />
                <div>
                  <p className="text-sm text-muted-foreground">Location</p>
                  <p className="text-sm font-medium text-foreground">Kampala, Uganda</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-border mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-muted-foreground">
            © 2024 Krypt Investments. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link to="/privacy" className="text-sm text-muted-foreground hover:text-primary transition-colors">
              Privacy Policy
            </Link>
            <Link to="/terms" className="text-sm text-muted-foreground hover:text-primary transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;