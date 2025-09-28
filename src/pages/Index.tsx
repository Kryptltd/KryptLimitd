import { ArrowRight, CheckCircle, Star, Users, Shield, Award } from "lucide-react";
import { Button } from "@/components/ui/button";
import Layout from "@/components/layout/Layout";
import { Link } from "react-router-dom";

const Index = () => {
  const featuredProducts = [
    {
      name: "Chlorohexidine",
      description: "Medical-grade antiseptic solution for professional healthcare use",
      image: "/pictures/Chlorohexidinn.jpg"
    },
    {
      name: "Premium Bleach",
      description: "High-strength cleaning solution for deep sanitization",
      image: "/pictures/Bleach.jpg"
    },
    {
      name: "Tile Cleaner",
      description: "Specialized formula for spotless tile and grout cleaning",
      image: "/pictures/Tile clean.jpg"
    },
    {
      name: "Hand Wash",
      description: "Antibacterial hand wash with moisturizing properties",
      image: "/pictures/Hand wash.jpg"
    }
  ];

  const testimonials = [
    {
      name: "[Customer Name 1]",
      role: "[Customer Role]",
      company: "[Customer Company]",
      content: "[Customer testimonial - replace with real feedback from your clients]",
      rating: 5
    },
    {
      name: "[Customer Name 2]",
      role: "[Customer Role]", 
      company: "[Customer Company]",
      content: "[Customer testimonial - replace with real feedback from your clients]",
      rating: 5
    },
    {
      name: "[Customer Name 3]",
      role: "[Customer Role]",
      company: "[Customer Company]",
      content: "[Customer testimonial - replace with real feedback from your clients]",
      rating: 5
    }
  ];

  const stats = [
    { number: "500+", label: "Happy Customers" },
    { number: "7", label: "Quality Products" },
    { number: "3+", label: "Years Experience" },
    { number: "99%", label: "Customer Satisfaction" }
  ];

  return (
    <Layout>
      {/* SEO Meta Tags */}
      <title>Krypt Investments – Quality Cleaning & Hygiene Products Uganda</title>
      <meta name="description" content="Krypt Investments provides high-quality cleaning and hygiene solutions including bleach, liquid soap, hand wash, tile cleaner, chlorohexidine, and more. Trusted products for everyday use in Uganda." />
      <meta name="keywords" content="Krypt Investments, cleaning products, bleach, liquid soap, hand wash, calamine, tile cleaner, chlorohexidine, spirit, hygiene products Uganda" />
      
      {/* Hero Section */}
      <section className="hero-section">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <h1 className="mb-6">
                Quality Cleaning & 
                <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent"> Hygiene Products</span>
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed mb-8">
                Your trusted partner for professional-grade cleaning solutions. From medical antiseptics 
                to everyday cleaning essentials, we deliver quality products that you can depend on.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button variant="hero" size="lg" asChild>
                  <Link to="/products">
                    Explore Products
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Link>
                </Button>
                <Button variant="outline" size="lg" asChild>
                  <Link to="/contacts">Get Quote</Link>
                </Button>
              </div>
              
              {/* Trust Indicators */}
              <div className="flex items-center space-x-6 mt-8 pt-8 border-t border-border">
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-5 h-5 text-success" />
                  <span className="text-sm text-muted-foreground">Quality Certified</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Shield className="w-5 h-5 text-primary" />
                  <span className="text-sm text-muted-foreground">Safe & Trusted</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Award className="w-5 h-5 text-warning" />
                  <span className="text-sm text-muted-foreground">3+ Years Experience</span>
                </div>
              </div>
            </div>
            
            {/* Hero Image/Banner Space */}
            <div className="animate-slide-up">
              <img 
                src="/pictures/cover photo.jpg" 
                alt="Professional cleaning products showcase" 
                className="w-full h-64 object-cover rounded-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Company Introduction */}
      <section className="section-padding bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="mb-6">About Krypt Investments</h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              We are Uganda's trusted supplier of high-quality cleaning and hygiene products. 
              With over three years of experience, we specialize in providing professional-grade 
              solutions for healthcare facilities, businesses, and households across the country.
            </p>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-3xl lg:text-4xl font-bold text-primary mb-2">{stat.number}</div>
                  <div className="text-muted-foreground">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="section-padding bg-secondary">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="mb-4">Our Featured Products</h2>
            <p className="text-lg text-muted-foreground">
              Discover our most popular cleaning and hygiene solutions
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredProducts.map((product, index) => (
              <div key={index} className="trust-card text-center group">
                <div className="w-full h-40 rounded-lg mb-4 overflow-hidden">
                  <img 
                    src={product.image} 
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <h4 className="font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                  {product.name}
                </h4>
                <p className="text-sm text-muted-foreground mb-4">{product.description}</p>
                <Button variant="outline" size="sm" asChild>
                  <Link to="/products">Learn More</Link>
                </Button>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-8">
            <Button variant="professional" size="lg" asChild>
              <Link to="/products">
                View All Products
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section-padding bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="mb-4">What Our Customers Say</h2>
            <p className="text-lg text-muted-foreground">
              Trusted by healthcare facilities, businesses, and institutions across Uganda
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="testimonial-card">
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, starIndex) => (
                    <Star key={starIndex} className="w-5 h-5 text-warning fill-current" />
                  ))}
                </div>
                <blockquote className="text-foreground mb-4 leading-relaxed">
                  "{testimonial.content}"
                </blockquote>
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 rounded-full overflow-hidden">
                    <img 
                      src="/pictures/Director.jpg" 
                      alt={testimonial.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">{testimonial.name}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.company}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-r from-primary to-accent text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="mb-4 text-primary-foreground">Ready to Get Started?</h2>
            <p className="text-lg mb-8 text-primary-foreground/90">
              Join hundreds of satisfied customers who trust Krypt Investments for their 
              cleaning and hygiene needs. Get your personalized quote today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="secondary" size="lg" asChild>
                <Link to="/contacts">Get Your Quote</Link>
              </Button>
              <Button variant="outline" size="lg" className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
                <Link to="/about">Learn About Us</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
