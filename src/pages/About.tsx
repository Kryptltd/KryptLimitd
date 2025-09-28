import { Users, Target, Eye, Heart, Award, Shield } from "lucide-react";
import Layout from "@/components/layout/Layout";

const About = () => {
  const values = [
    {
      icon: Shield,
      title: "Quality Assurance",
      description: "We ensure every product meets the highest standards of quality and safety for our customers."
    },
    {
      icon: Users,
      title: "Customer First",
      description: "Our customers are at the heart of everything we do. We build lasting relationships through trust."
    },
    {
      icon: Award,
      title: "Innovation",
      description: "Constantly improving our products and services to meet evolving market demands."
    },
    {
      icon: Heart,
      title: "Reliability",
      description: "Dependable products and services that our customers can count on every time."
    }
  ];

  return (
    <Layout>
      {/* SEO Meta Tags */}
      <title>About Krypt Investments - Quality Cleaning & Hygiene Products</title>
      <meta name="description" content="Learn about Krypt Investments' history, mission, and commitment to providing high-quality cleaning and hygiene products. Trusted solutions since our founding." />
      
      {/* Hero Section */}
      <section className="hero-section">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto animate-fade-in">
            <h1 className="mb-6">About Krypt Investments</h1>
            <p className="text-xl text-muted-foreground leading-relaxed mb-8">
              Your trusted partner in providing high-quality cleaning and hygiene products. 
              Building healthier communities through reliable, professional-grade solutions.
            </p>
            {/* Space for banner image */}
            <img 
              src="/pictures/cover photo.jpg" 
              alt="Company Banner" 
              className="w-full h-48 md:h-56 object-cover rounded-xl"
            />
          </div>
        </div>
      </section>

      {/* Company History */}
      <section className="section-padding bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="mb-4">Our Story</h2>
              <p className="text-lg text-muted-foreground">
                The journey of Krypt Investments and our commitment to excellence
              </p>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <h3>Building Trust Through Quality</h3>
                <div className="space-y-4 text-muted-foreground">
                  <p>
                    Founded with a vision to provide reliable cleaning and hygiene solutions, 
                    Krypt Investments has grown to become a trusted name in the industry. 
                    Our journey began with a simple commitment: to deliver products that our 
                    customers can depend on.
                  </p>
                  <p>
                    From our humble beginnings, we have consistently focused on quality, 
                    innovation, and customer satisfaction. Today, we serve diverse markets 
                    with a comprehensive range of cleaning and hygiene products that meet 
                    the highest standards.
                  </p>
                  <p>
                    Our success is built on the trust our customers place in us and our 
                    unwavering commitment to excellence in every product we deliver.
                  </p>
                </div>
              </div>
              
              {/* Space for company/team photos */}
              <div className="space-y-4">
                <div className="relative w-80 h-80 ml-0">
                  {/* Photo frame with shadow and border */}
                  <div className="absolute inset-0 bg-gradient-to-br from-amber-100 to-amber-200 rounded-2xl shadow-2xl transform rotate-2"></div>
                  <div className="relative w-full h-full bg-white p-4 rounded-2xl shadow-xl">
                    <div className="w-full h-full border-4 border-amber-300 rounded-xl overflow-hidden shadow-inner">
                      <img 
                        src="/pictures/Director.jpg" 
                        alt="Team Photo" 
                        className="w-full h-full object-cover"
                      />
                    </div>
                </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="section-padding bg-secondary">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Mission */}
              <div className="trust-card text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-primary to-accent rounded-xl flex items-center justify-center mx-auto mb-6">
                  <Target className="w-8 h-8 text-primary-foreground" />
                </div>
                <h3 className="mb-4">Our Mission</h3>
                <p className="text-muted-foreground leading-relaxed">
                  To provide high-quality, reliable cleaning and hygiene products that 
                  promote health, safety, and cleanliness in homes, businesses, and 
                  communities across Uganda and beyond. We are committed to excellence 
                  in every product we deliver.
                </p>
              </div>

              {/* Vision */}
              <div className="trust-card text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-accent to-primary rounded-xl flex items-center justify-center mx-auto mb-6">
                  <Eye className="w-8 h-8 text-primary-foreground" />
                </div>
                <h3 className="mb-4">Our Vision</h3>
                <p className="text-muted-foreground leading-relaxed">
                  To be the leading provider of cleaning and hygiene solutions in East Africa, 
                  known for our quality, innovation, and customer-centric approach. We envision 
                  a cleaner, healthier future where our products contribute to improved 
                  quality of life for all.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Company Values */}
      <section className="section-padding bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="mb-4">Our Values</h2>
              <p className="text-lg text-muted-foreground">
                The principles that guide everything we do
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {values.map((value, index) => (
                <div key={index} className="trust-card text-center">
                  <div className="w-12 h-12 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center mx-auto mb-4">
                    <value.icon className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <h4 className="font-semibold text-foreground mb-2">{value.title}</h4>
                  <p className="text-sm text-muted-foreground">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="section-padding bg-primary-light">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="mb-4">What Our Customers Say</h2>
            <p className="text-lg text-muted-foreground mb-12">
              Building trust through quality products and exceptional service
            </p>
            
            <div className="testimonial-card">
              <blockquote className="text-lg text-foreground mb-4">
                "Krypt Investments has been our trusted supplier for over three years. 
                Their products are consistently high-quality, and their customer service 
                is exceptional. We couldn't ask for a better partner."
              </blockquote>
              <div className="flex items-center justify-center space-x-4">
                <div className="w-12 h-12 rounded-full overflow-hidden">
                  <img 
                    src="/pictures/Director.jpg" 
                    alt="Michael Kateregga"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <p className="font-semibold text-foreground">Michael Kateregga</p>
                  <p className="text-sm text-muted-foreground">Facility Manager, Kampala Hospital</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;