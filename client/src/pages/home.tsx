import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { useSmoothScroll } from "@/components/ui/smooth-scroll";

export default function Home() {
  useSmoothScroll();

  return (
    <div className="min-h-screen">
      {/* Navigation */}
      <nav className="navbar-custom fixed top-0 left-0 right-0 z-50">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between">
            <a href="#home" className="text-white font-semibold text-xl">
              <i className="fas fa-bridge mr-2"></i>Work Bridge Hub
            </a>
            
            <div className="hidden md:flex items-center space-x-8">
              <a href="#about" className="nav-link text-white hover:text-yellow-400 font-medium">About</a>
              <a href="#services" className="nav-link text-white hover:text-yellow-400 font-medium">Services</a>
              <a href="#contact" className="nav-link text-white hover:text-yellow-400 font-medium">Contact</a>
              <a href="#help" className="nav-link text-white hover:text-yellow-400 font-medium">Help</a>
              <Button className="btn-register">Register</Button>
            </div>
            
            <div className="md:hidden">
              <Button className="btn-register">Register</Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="hero-section">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-bold mb-8 leading-tight">
              "Kaam dhoondhna ho ya kaam dena – sab kuch yahi milega!"
            </h1>
            <p className="text-lg md:text-xl mb-12 opacity-90 leading-relaxed">
              Work Bridge Hub is not just a platform – it's a network ecosystem that claims not demand and to bridge in the digital economy. Whether you're looking for opportunities or seeking assistance, WBH is<br className="hidden md:block" />
              your gateway to infinite possibilities.
            </p>
            <Button className="btn-start">Start Today → It's 100% Free!</Button>
          </div>
        </div>
      </section>

      {/* Tagline Section */}
      <section className="py-16 bg-white text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-4xl font-semibold" style={{color: 'var(--primary-blue)'}}>
            Connecting Workers. Empowering Contractors. Assisting Companies.
          </h2>
        </div>
      </section>

      {/* About Shram Mitra Section */}
      <section id="about" className="py-24" style={{background: 'var(--light-gray)'}}>
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-3 gap-12 items-center">
            <div className="lg:col-span-2">
              <h2 className="text-3xl md:text-4xl font-bold mb-12" style={{color: 'var(--primary-blue)'}}>
                <i className="fas fa-info-circle mr-4"></i>About Shram Mitra
              </h2>
              <div className="space-y-6 text-lg leading-relaxed" style={{color: 'var(--text-gray)'}}>
                <p><strong>Where Work Meets Opportunities - Labour Ecosystem</strong></p>
                <p>India's labour market is broken. Workers don't find steady jobs, Contractors find recruiting labour Companies struggle with compliance, labour, and operations today.</p>
                <p>That's where Shram Mitra comes in.</p>
                <p>Born from real-world experiences, we solve for gig between supply and demand in segments sectors, whether you're a skilled tradesperson or a large corporation, our multi-sided platform addresses unique needs through technology-first approaches.</p>
                <p>We are a mission to organize India's informal workforce and ensure dignity, security, and prosperity for every participant.</p>
              </div>
            </div>
            <div className="text-center">
              <div className="mb-6">
                <i className="fas fa-users text-8xl" style={{color: 'var(--accent-yellow)'}}></i>
              </div>
              <h4 className="text-2xl font-semibold mb-2" style={{color: 'var(--primary-blue)'}}>Shram Mitra</h4>
              <p style={{color: 'var(--text-gray)'}}>Bridging the Digital Divide</p>
            </div>
          </div>
        </div>
      </section>

      {/* How the Platform Works Section */}
      <section id="services" className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16" style={{color: 'var(--primary-blue)'}}>
            <i className="fas fa-cogs mr-4"></i>How the Platform Works – For Each Stakeholder
          </h2>
          
          <div className="grid lg:grid-cols-3 gap-8">
            {/* For Companies */}
            <Card className="stakeholder-card">
              <CardContent className="p-8">
                <div className="text-center mb-6">
                  <i className="fas fa-building text-5xl" style={{color: 'var(--secondary-blue)'}}></i>
                </div>
                <h3 className="text-2xl font-semibold mb-4 text-center" style={{color: 'var(--primary-blue)'}}>For Companies</h3>
                <div style={{color: 'var(--text-gray)'}} className="space-y-2 mb-6">
                  <p>• Post project-based labour needs and skilled contractors</p>
                  <p>• Post jobs, manage employees, SOW management and compliance</p>
                  <p>• Manage teams, assign projects, and track progress</p>
                  <p>• Access real-time dashboards</p>
                  <p>• Receive notifications and reports</p>
                </div>
                <Button variant="outline" className="w-full mt-4">Register as Company</Button>
              </CardContent>
            </Card>

            {/* For Contractors */}
            <Card className="stakeholder-card">
              <CardContent className="p-8">
                <div className="text-center mb-6">
                  <i className="fas fa-hard-hat text-5xl" style={{color: 'var(--secondary-blue)'}}></i>
                </div>
                <h3 className="text-2xl font-semibold mb-4 text-center" style={{color: 'var(--primary-blue)'}}>For Contractors</h3>
                <div style={{color: 'var(--text-gray)'}} className="space-y-2 mb-6">
                  <p>• See available job postings with contractor billing and quotes</p>
                  <p>• Manage teams, assign projects, and track progress</p>
                  <p>• Digital tools for project management</p>
                  <p>• Access to verified skilled workers</p>
                  <p>• Payment and compliance support</p>
                </div>
                <Button variant="outline" className="w-full mt-4">Register as Contractor</Button>
              </CardContent>
            </Card>

            {/* For Workers */}
            <Card className="stakeholder-card">
              <CardContent className="p-8">
                <div className="text-center mb-6">
                  <i className="fas fa-user-hard-hat text-5xl" style={{color: 'var(--secondary-blue)'}}></i>
                </div>
                <h3 className="text-2xl font-semibold mb-4 text-center" style={{color: 'var(--primary-blue)'}}>For Workers</h3>
                <div style={{color: 'var(--text-gray)'}} className="space-y-2 mb-6">
                  <p>• Browse and apply for jobs with salary and skill operations</p>
                  <p>• Skill development and certifications</p>
                  <p>• Digital record of work history and achievements</p>
                  <p>• Direct access to companies and contractors</p>
                  <p>• Financial services and benefits</p>
                </div>
                <Button variant="outline" className="w-full mt-4">Register as Worker</Button>
              </CardContent>
            </Card>
          </div>
          
          <div className="text-center mt-12">
            <p style={{color: 'var(--text-gray)'}}>All this in one language, via WhatsApp, Call or Shram App</p>
          </div>
        </div>
      </section>

      {/* How to Get Started Section */}
      <section className="py-24" style={{background: 'var(--light-gray)'}}>
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16" style={{color: 'var(--primary-blue)'}}>
            <i className="fas fa-rocket mr-4"></i>How to Get Started - Signup Process
          </h2>
          
          <div className="grid lg:grid-cols-3 gap-8">
            {/* For Workers */}
            <div>
              <h4 className="text-xl font-semibold mb-6 flex items-center" style={{color: 'var(--primary-blue)'}}>
                <i className="fas fa-user mr-2"></i>For Workers
              </h4>
              
              <div className="space-y-4">
                {[
                  "Download app, phone & register",
                  "Fill profile with skills & experience",
                  "Upload basic profile document",
                  "Apply, Interview and searching jobs",
                  "Start applying for work & get hired!"
                ].map((step, index) => (
                  <div key={index} className="signup-step">
                    <span className="step-number">{index + 1}</span>
                    {step}
                  </div>
                ))}
              </div>
            </div>

            {/* For Contractors */}
            <div>
              <h4 className="text-xl font-semibold mb-6 flex items-center" style={{color: 'var(--primary-blue)'}}>
                <i className="fas fa-hard-hat mr-2"></i>For Contractors
              </h4>
              
              <div className="space-y-4">
                {[
                  "Download app & create contractor profile",
                  "Upload business documents and certifications",
                  "Complete verification process",
                  "Browse projects & submit proposals",
                  "Start building your contractor portfolio"
                ].map((step, index) => (
                  <div key={index} className="signup-step">
                    <span className="step-number">{index + 1}</span>
                    {step}
                  </div>
                ))}
              </div>
            </div>

            {/* For Companies */}
            <div>
              <h4 className="text-xl font-semibold mb-6 flex items-center" style={{color: 'var(--primary-blue)'}}>
                <i className="fas fa-building mr-2"></i>For Companies
              </h4>
              
              <div className="space-y-4">
                {[
                  "Register with business details & GSTIN",
                  "Complete company verification",
                  "Set up teams and department structures",
                  "Post your first job or project requirement",
                  "Start connecting with verified workers and contractors"
                ].map((step, index) => (
                  <div key={index} className="signup-step">
                    <span className="step-number">{index + 1}</span>
                    {step}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Insurance Offer Section */}
      <section className="insurance-section">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              <i className="fas fa-shield-alt mr-4"></i>Exclusive Insurance Offer - First 5,000 Workers Only!
            </h2>
            <p className="text-xl font-semibold mb-8">
              <i className="fas fa-gift mr-2"></i>FREE Group Term Insurance worth ₹2,00,000
            </p>
            <p className="mb-8">
              For the first 5,000 workers who sign up!
            </p>
            
            <div className="flex justify-center gap-8 mb-8 flex-wrap">
              <div className="flex items-center">
                <i className="fas fa-check-circle mr-2"></i>
                <span>No taxes</span>
              </div>
              <div className="flex items-center">
                <i className="fas fa-check-circle mr-2"></i>
                <span>No paperwork</span>
              </div>
              <div className="flex items-center">
                <i className="fas fa-check-circle mr-2"></i>
                <span>Get started for your family</span>
              </div>
            </div>
            
            <Button className="btn-start text-lg px-8 py-4">
              SIGN UP NOW - IT'S FREE FOR LABOURS
            </Button>
          </div>
        </div>
      </section>

      {/* Footer Section */}
      <footer id="contact" className="py-12" style={{background: 'var(--primary-blue)', color: 'white'}}>
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-4 gap-8">
            <div className="lg:col-span-2">
              <h5 className="text-xl font-semibold mb-4">Work Bridge Hub</h5>
              <div className="space-y-4 text-gray-300">
                <p>Connecting talents, contractors, and workers for an enriched projects.</p>
                <p><strong>India ka Real Growth, Ground Level se Shuru hota hai.</strong></p>
                <p>Whether you're a worker seeking new opportunities, a contractor looking for skilled teams, or a company in need of reliable workforce - Work Bridge Hub brings together. Let's grow together, from Shram to Success!</p>
              </div>
            </div>
            
            <div>
              <h6 className="font-semibold mb-4">RESOURCES</h6>
              <div className="space-y-2">
                <a href="#" className="block text-gray-300 hover:text-yellow-400">Find Jobs</a>
                <a href="#" className="block text-gray-300 hover:text-yellow-400">Find Contractors</a>
                <a href="#" className="block text-gray-300 hover:text-yellow-400">Find Companies</a>
              </div>
            </div>
            
            <div>
              <h6 className="font-semibold mb-4" id="help">COMPANY</h6>
              <div className="space-y-2">
                <a href="#" className="block text-gray-300 hover:text-yellow-400">About</a>
                <a href="#" className="block text-gray-300 hover:text-yellow-400">Careers</a>
                <a href="#" className="block text-gray-300 hover:text-yellow-400">Press</a>
                <a href="#" className="block text-gray-300 hover:text-yellow-400">Terms of Service</a>
                <a href="#" className="block text-gray-300 hover:text-yellow-400">Privacy Policy</a>
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-600 mt-8 pt-6">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <p className="text-gray-300 mb-4 md:mb-0">&copy; 2024 WorkBridge. All rights reserved.</p>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-300 hover:text-yellow-400">
                  <i className="fab fa-facebook-f"></i>
                </a>
                <a href="#" className="text-gray-300 hover:text-yellow-400">
                  <i className="fab fa-twitter"></i>
                </a>
                <a href="#" className="text-gray-300 hover:text-yellow-400">
                  <i className="fab fa-linkedin-in"></i>
                </a>
                <a href="#" className="text-gray-300 hover:text-yellow-400">
                  <i className="fab fa-instagram"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
