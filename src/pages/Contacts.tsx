import { useState } from "react";
import { Phone, Mail, MapPin, Clock, Send, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import Layout from "@/components/layout/Layout";
import { useToast } from "@/hooks/use-toast";
import FAQSlider from "@/components/ui/faq-slider";

const Contacts = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: ""
  });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Create email content
    const subject = encodeURIComponent(formData.subject || 'Contact Form Submission');
    const body = encodeURIComponent(
      `Name: ${formData.name}\n` +
      `Email: ${formData.email}\n` +
      `Phone: ${formData.phone || 'Not provided'}\n\n` +
      `Message:\n${formData.message}`
    );
    
    // Create mailto link
    const mailtoLink = `mailto:kryptinvestmentsltd@gmail.com?subject=${subject}&body=${body}`;
    
    // Open email client
    window.location.href = mailtoLink;
    
    // Show success message
    toast({
      title: "Email Client Opened!",
      description: "Please send the email to complete your message.",
    });
    
    // Reset form
    setFormData({ name: "", email: "", phone: "", subject: "", message: "" });
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const faqs = [
    {
      question: "What is your minimum order quantity?",
      answer: "Our minimum order quantities vary by product. For most cleaning products, we accept orders starting from 10 units. For bulk orders, we offer special pricing. Contact us for specific requirements."
    },
    {
      question: "Do you offer delivery services?",
      answer: "Yes, we provide delivery services within Kampala and surrounding areas. For orders outside Kampala, we work with trusted courier services to ensure safe delivery of your products."
    },
    {
      question: "Are your products certified?",
      answer: "All our products meet international quality standards and are certified by relevant authorities. We can provide certification documents upon request for institutional purchases."
    },
    {
      question: "Do you offer bulk pricing?",
      answer: "Yes, we offer competitive bulk pricing for large orders. The more you order, the better the pricing. Contact us with your requirements for a customized quote."
    },
    {
      question: "What payment methods do you accept?",
      answer: "We accept cash, bank transfers, mobile money (MTN Mobile Money, Airtel Money), and for established customers, we offer credit terms. All major payment methods are supported."
    },
    {
      question: "How long is your delivery time?",
      answer: "For in-stock items within Kampala, delivery is typically 1-2 business days. For other areas in Uganda, delivery takes 3-5 business days. Custom orders may take longer."
    }
  ];

  const contactInfo = [
    {
      icon: Phone,
      title: "Call Us",
      details: ["<a href=\"tel:+256772316316\">+256 772 316 316</a>", "<a href=\"tel:+256777726363\">+256 777 726 363</a>"],
      description: "Monday - Saturday, 8:00 AM - 6:00 PM"
    },
    {
      icon: Mail,
      title: "Email Us",
      details: ["<a href=\"mailto:kryptinvestmentsltd@gmail.com\">kryptinvestmentsltd@gmail.com</a>"],
      description: "We'll respond within 24 hours"
    },
    {
      icon: MapPin,
      title: "Visit Us",
      details: ["Kampala, Uganda"],
      description: "By appointment only"
    },
    {
      icon: Clock,
      title: "Business Hours",
      details: ["Mon - Fri: 8:00 AM - 6:00 PM", "Sat: 9:00 AM - 4:00 PM"],
      description: "Closed on Sundays"
    }
  ];

  return (
    <Layout>
      {/* SEO Meta Tags */}
      <title>Contact Krypt Investments - Get Your Cleaning & Hygiene Products Quote</title>
      <meta name="description" content="Contact Krypt Investments for quality cleaning and hygiene products. Get quotes, ask questions, or place orders. Phone, email, and WhatsApp support available." />
      
      {/* Hero Section */}
      <section className="hero-section">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto animate-fade-in">
            <h1 className="mb-6">Contact Us</h1>
            <p className="text-xl text-muted-foreground leading-relaxed mb-8">
              Ready to get started? We're here to help with all your cleaning and hygiene product needs. 
              Get in touch today for personalized service and competitive pricing.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button variant="hero" size="lg" asChild>
                <a href="https://wa.me/256772316316" target="_blank" rel="noopener noreferrer">
                  <MessageCircle className="w-5 h-5 mr-2" />
                  WhatsApp Now
                </a>
              </Button>
              <Button variant="outline" size="lg">
                <Phone className="w-5 h-5 mr-2" />
                Call Us Now
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="section-padding bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="mb-4">Get In Touch</h2>
              <p className="text-lg text-muted-foreground">
                Multiple ways to reach us - choose what works best for you
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
              {contactInfo.map((info, index) => (
                <div key={index} className="trust-card text-center">
                  <div className="w-12 h-12 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center mx-auto mb-4">
                    <info.icon className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <h4 className="font-semibold text-foreground mb-2">{info.title}</h4>
                  <div className="space-y-1 mb-2">
                    {info.details.map((detail, detailIndex) => (
                      <p key={detailIndex} className="text-sm font-medium text-foreground">{detail}</p>
                    ))}
                  </div>
                  <p className="text-xs text-muted-foreground">{info.description}</p>
                </div>
              ))}
            </div>

            {/* Contact Form & Map */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Contact Form */}
              <div className="trust-card">
                <h3 className="mb-6">Send Us a Message</h3>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="form-group">
                      <Label htmlFor="name">Full Name *</Label>
                      <Input
                        id="name"
                        name="name"
                        type="text"
                        required
                        value={formData.name}
                        onChange={handleInputChange}
                        className="form-input"
                        placeholder="Enter your full name"
                      />
                    </div>
                    <div className="form-group">
                      <Label htmlFor="email">Email Address *</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={handleInputChange}
                        className="form-input"
                        placeholder="Enter your email"
                      />
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="form-group">
                      <Label htmlFor="phone">Phone Number</Label>
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="form-input"
                        placeholder="+256 772 316 316"
                      />
                    </div>
                    <div className="form-group">
                      <Label htmlFor="subject">Subject *</Label>
                      <Input
                        id="subject"
                        name="subject"
                        type="text"
                        required
                        value={formData.subject}
                        onChange={handleInputChange}
                        className="form-input"
                        placeholder="What's this about?"
                      />
                    </div>
                  </div>
                  
                  <div className="form-group">
                    <Label htmlFor="message">Message *</Label>
                    <Textarea
                      id="message"
                      name="message"
                      required
                      value={formData.message}
                      onChange={handleInputChange}
                      className="form-input min-h-[120px]"
                      placeholder="Tell us about your requirements..."
                    />
                  </div>
                  
                  <Button type="submit" variant="professional" size="lg" className="w-full">
                    <Send className="w-5 h-5 mr-2" />
                    Send Message
                  </Button>
                </form>
              </div>

              {/* Map & Location */}
              <div className="space-y-6">
                <div className="trust-card">
                  <h3 className="mb-4">Our Location</h3>
                  <div className="w-full h-64 rounded-lg overflow-hidden">
                    <img 
                      src="/pictures/cover photo.jpg" 
                      alt="Our Location" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="mt-4 p-4 bg-secondary rounded-lg">
                    <p className="font-medium text-foreground mb-2">Krypt Investments</p>
                    <p className="text-muted-foreground text-sm">
                      Kampala, Uganda<br />
                      Available by appointment
                    </p>
                  </div>
                </div>

                <div className="trust-card">
                  <h4 className="font-semibold text-foreground mb-3">Quick Actions</h4>
                  <div className="space-y-3">
                    <Button variant="outline" className="w-full justify-start" asChild>
                      <a href="https://wa.me/256772316316" target="_blank" rel="noopener noreferrer">
                        <MessageCircle className="w-5 h-5 mr-3" />
                        WhatsApp Chat
                      </a>
                    </Button>
                    <Button variant="outline" className="w-full justify-start" asChild>
                      <a href="tel:+256772316316">
                        <Phone className="w-5 h-5 mr-3" />
                        Call Now
                      </a>
                    </Button>
                    <Button variant="outline" className="w-full justify-start" asChild>
                      <a href="mailto:kryptinvestmentsltd@gmail.com">
                        <Mail className="w-5 h-5 mr-3" />
                        Send Email
                      </a>
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section-padding bg-secondary">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="mb-4">Frequently Asked Questions</h2>
              <p className="text-lg text-muted-foreground">
                Find answers to common questions about our products and services
              </p>
              <p className="text-sm text-muted-foreground mt-2">
                <span className="inline-block px-3 py-1 bg-primary/10 rounded-full">
                  🚀 Auto-scrolling carousel - hover to pause and explore!
                </span>
              </p>
            </div>
            
            <FAQSlider faqs={faqs} />
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contacts;