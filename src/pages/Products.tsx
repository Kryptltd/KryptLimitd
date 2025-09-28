import { ShoppingCart, CheckCircle, Shield, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import Layout from "@/components/layout/Layout";
import { Link } from "react-router-dom";

const Products = () => {
  const products = [
    {
      name: "Chlorohexidine",
      description: "Medical-grade antiseptic solution for wound care and skin disinfection. Professional strength formula trusted by healthcare facilities.",
      price: "UGX 15,000",
      features: ["Medical Grade", "Fast Acting", "Long Lasting"],
      category: "Medical",
      image: "/pictures/Chlorohexidinn.jpg"
    },
    {
      name: "Bleach",
      description: "High-strength bleaching solution for deep cleaning and disinfection. Ideal for commercial and residential cleaning needs.",
      price: "UGX 8,000",
      features: ["High Strength", "Multi-Purpose", "Cost Effective"],
      category: "Cleaning",
      image: "/pictures/Bleach.jpg"
    },
    {
      name: "Tile Cleaner",
      description: "Specialized formula for removing tough stains and grime from tiles and grout. Leaves surfaces sparkling clean.",
      price: "UGX 12,000",
      features: ["Stain Removal", "Grout Safe", "Streak Free"],
      category: "Cleaning",
      image: "/pictures/Tile clean.jpg"
    },
    {
      name: "Surgical Spirit",
      description: "High-purity isopropyl alcohol for cleaning and disinfection. Perfect for electronics, medical equipment, and surface sanitization.",
      price: "UGX 18,000",
      features: ["99% Pure", "Fast Evaporation", "Residue Free"],
      category: "Medical",
      image: "/pictures/Surgical Spirit.jpg"
    },
    {
      name: "Calamine",
      description: "Soothing calamine lotion for skin irritation and minor skin conditions. Gentle formula suitable for all skin types.",
      price: "UGX 10,000",
      features: ["Skin Soothing", "Natural Ingredients", "Gentle Formula"],
      category: "Personal Care",
      image: "/pictures/Calamine.jpg"
    },
    {
      name: "Liquid Soap",
      description: "Premium quality liquid soap with moisturizing properties. Available in various fragrances for hand and body washing.",
      price: "UGX 6,000",
      features: ["Moisturizing", "Multiple Fragrances", "pH Balanced"],
      category: "Personal Care",
      image: "/pictures/Liquid soap.jpg"
    },
    {
      name: "Hand Wash",
      description: "Antibacterial hand wash with gentle cleansing formula. Effective against germs while being kind to your skin.",
      price: "UGX 7,500",
      features: ["Antibacterial", "Gentle on Skin", "Pleasant Scent"],
      category: "Personal Care",
      image: "/pictures/Hand wash.jpg"
    }
  ];

  const categories = ["All", "Medical", "Cleaning", "Personal Care"];

  return (
    <Layout>
      {/* SEO Meta Tags */}
      <title>Our Products - Krypt Investments | Quality Cleaning & Hygiene Solutions</title>
      <meta name="description" content="Explore Krypt Investments' comprehensive range of cleaning and hygiene products including chlorohexidine, bleach, tile cleaner, spirit, calamine, liquid soap, and hand wash." />
      
      {/* Hero Section */}
      <section className="hero-section">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto animate-fade-in">
            <h1 className="mb-6">Our Products</h1>
            <p className="text-xl text-muted-foreground leading-relaxed mb-8">
              Discover our comprehensive range of high-quality cleaning and hygiene products. 
              From medical-grade solutions to everyday cleaning essentials, we have everything you need.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              {categories.map((category) => (
                <Button key={category} variant="outline" className="rounded-full">
                  {category}
                </Button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="section-padding bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product, index) => (
              <div key={index} className="trust-card group">
                {/* Product Image */}
                <div className="w-full h-48 rounded-lg mb-4 overflow-hidden">
                  <img 
                    src={product.image} 
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                
                {/* Product Info */}
                <div className="space-y-4">
                  <div className="flex items-start justify-between">
                    <h3 className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors">
                      {product.name}
                    </h3>
                    <span className="bg-primary/10 text-primary text-sm font-medium px-2 py-1 rounded-full">
                      {product.category}
                    </span>
                  </div>
                  
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {product.description}
                  </p>
                  
                  {/* Features */}
                  <div className="space-y-2">
                    {product.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center space-x-2">
                        <CheckCircle className="w-4 h-4 text-success" />
                        <span className="text-sm text-muted-foreground">{feature}</span>
                      </div>
                    ))}
                  </div>
                  
                  {/* Price and Action */}
                  <div className="flex items-center justify-between pt-4 border-t border-border">
                    <div>
                      <p className="text-sm text-muted-foreground">Starting from</p>
                      <p className="text-xl font-bold text-primary">{product.price}</p>
                    </div>
                    <Button variant="professional" size="sm" asChild>
                      <Link to="/contacts">
                        <ShoppingCart className="w-4 h-4 mr-2" />
                        Order Now
                      </Link>
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quality Assurance */}
      <section className="section-padding bg-secondary">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="mb-4">Quality You Can Trust</h2>
            <p className="text-lg text-muted-foreground mb-12">
              Every product goes through rigorous quality checks to ensure it meets our high standards
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-success to-success/80 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <Shield className="w-8 h-8 text-success-foreground" />
                </div>
                <h4 className="font-semibold text-foreground mb-2">Quality Certified</h4>
                <p className="text-sm text-muted-foreground">All products meet international quality standards</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-primary to-accent rounded-xl flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="w-8 h-8 text-primary-foreground" />
                </div>
                <h4 className="font-semibold text-foreground mb-2">Lab Tested</h4>
                <p className="text-sm text-muted-foreground">Rigorous testing ensures product effectiveness</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-warning to-warning/80 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <Star className="w-8 h-8 text-warning-foreground" />
                </div>
                <h4 className="font-semibold text-foreground mb-2">Customer Approved</h4>
                <p className="text-sm text-muted-foreground">Trusted by thousands of satisfied customers</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-r from-primary to-accent text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="mb-4 text-primary-foreground">Ready to Order?</h2>
            <p className="text-lg mb-8 text-primary-foreground/90">
              Get in touch with us today to discuss your requirements and get a personalized quote.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="secondary" size="lg" asChild>
                <Link to="/contacts">Get Quote</Link>
              </Button>
              <Button variant="outline" size="lg" className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
                <a href="https://wa.me/256772316316" target="_blank" rel="noopener noreferrer">
                  WhatsApp Us
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Products;