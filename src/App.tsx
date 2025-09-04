import { Button } from 'primereact/button';
import { Card } from 'primereact/card';
import { Divider } from 'primereact/divider';
import { Badge } from 'primereact/badge';
import 'primereact/resources/themes/lara-light-blue/theme.css';
import 'primeicons/primeicons.css';


const ParisToursLanding = () => {
  const packages = [
    {
      id: 1,
      title: "Classic Paris Discovery",
      duration: "3 hours",
      price: "€85",
      badge: "Popular",
      badgeClass: "p-badge-success",
      description: "Explore the iconic landmarks of Paris including the Eiffel Tower, Arc de Triomphe, and Champs-Élysées.",
      highlights: ["Eiffel Tower photo stop", "Arc de Triomphe visit", "Champs-Élysées walk", "Local café recommendation"],
      icon: "pi pi-building"
    },
    {
      id: 2,
      title: "Artistic Montmartre",
      duration: "2.5 hours",
      price: "€75",
      badge: "Unique",
      badgeClass: "p-badge-info",
      description: "Discover the bohemian spirit of Montmartre, visit Sacré-Cœur, and explore artists' squares.",
      highlights: ["Sacré-Cœur Basilica", "Place du Tertre artists", "Moulin Rouge exterior", "Hidden viewpoints"],
      icon: "pi pi-palette"
    },
    {
      id: 3,
      title: "Seine River Romance",
      duration: "2 hours",
      price: "€65",
      badge: "Romantic",
      badgeClass: "p-badge-danger",
      description: "Stroll along the Seine, discover charming bridges, and enjoy the romantic atmosphere of Paris.",
      highlights: ["Notre-Dame area", "Latin Quarter", "Seine riverbanks", "Bookstore visits"],
      icon: "pi pi-heart"
    },
    {
      id: 4,
      title: "Foodie Adventure",
      duration: "3.5 hours",
      price: "€95",
      badge: "Delicious",
      badgeClass: "p-badge-warning",
      description: "Taste your way through Paris with local markets, patisseries, and hidden culinary gems.",
      highlights: ["Local market tour", "Artisan bakeries", "Cheese tasting", "Wine recommendations"],
      icon: "pi pi-shopping-bag"
    }
  ];

  const testimonials = [
    {
      name: "Sarah M.",
      country: "USA",
      text: "Gabriela showed us a Paris we never would have found on our own. Absolutely magical experience!",
      rating: 5
    },
    {
      name: "Marco L.",
      country: "Italy",
      text: "The Montmartre tour was incredible. Gabriela's knowledge of local artists and history was fascinating.",
      rating: 5
    },
    {
      name: "Emma K.",
      country: "UK",
      text: "Perfect introduction to Paris. Gabriela made us feel like locals from day one!",
      rating: 5
    }
  ];

  const PackageCard = ({ pkg }: { pkg: any }) => {
    const cardHeader = (
      <div className="relative overflow-hidden">
        <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-6">
          <div className="flex justify-content-between align-items-start">
            <div className="flex align-items-center gap-3">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center shadow-lg">
                <i className={`${pkg.icon} text-white text-lg`}></i>
              </div>
              <div>
                <h3 className="text-xl font-bold text-slate-800 m-0 mb-1">{pkg.title}</h3>
                <div className="flex align-items-center gap-2 text-slate-600">
                  <i className="pi pi-clock text-sm"></i>
                  <span className="text-sm font-medium">{pkg.duration}</span>
                </div>
              </div>
            </div>
            <Badge 
              value={pkg.badge} 
              className={`${pkg.badgeClass} px-3 py-1 rounded-full font-semibold shadow-sm`} 
            />
          </div>
        </div>
      </div>
    );

    const cardFooter = (
      <div className="p-6 pt-0">
        <div className="flex justify-content-between align-items-center">
          <div className="flex flex-column">
            <span className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">{pkg.price}</span>
            <span className="text-sm text-slate-600 font-medium">per person</span>
          </div>
          <Button 
            label="Book Now" 
            icon="pi pi-calendar-plus"
            className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 border-none px-6 py-2 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-0.5"
            size="small"
          />
        </div>
      </div>
    );

    return (
      <Card 
        header={cardHeader} 
        footer={cardFooter}
        className="h-full shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border-none overflow-hidden bg-white/90 backdrop-blur-sm"
      >
        <div className="px-6 pb-4">
          <p className="text-slate-700 mb-4 line-height-3">{pkg.description}</p>
          <ul className="list-none p-0 m-0 space-y-3">
            {pkg.highlights.map((highlight: string, index: number) => (
              <li key={index} className="flex align-items-center gap-3">
                <div className="w-5 h-5 bg-gradient-to-br from-emerald-400 to-emerald-500 rounded-full flex items-center justify-center flex-shrink-0">
                  <i className="pi pi-check text-white text-xs"></i>
                </div>
                <span className="text-sm text-slate-700 font-medium">{highlight}</span>
              </li>
            ))}
          </ul>
        </div>
      </Card>
    );
  };

  const TestimonialCard = ({ testimonial }: { testimonial: any }) => (
    <Card className="h-full shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 border-none bg-white/90 backdrop-blur-sm overflow-hidden">
      <div className="p-6">
        <div className="flex flex-column gap-4">
          <div className="flex gap-1 justify-content-center">
            {[...Array(testimonial.rating)].map((_, i) => (
              <i key={i} className="pi pi-star-fill text-yellow-400 text-lg"></i>
            ))}
          </div>
          <div className="relative">
            <i className="pi pi-quote-left text-4xl text-blue-200 absolute -top-2 -left-1"></i>
            <p className="text-slate-700 line-height-3 m-0 pl-8 pr-4 italic font-medium">
              {testimonial.text}
            </p>
          </div>
          <div className="flex justify-content-between align-items-center pt-4 border-top-1 border-slate-100">
            <div>
              <div className="font-bold text-slate-800 text-lg">{testimonial.name}</div>
              <div className="text-sm text-slate-600 flex align-items-center gap-1">
                <i className="pi pi-map-marker text-xs"></i>
                {testimonial.country}
              </div>
            </div>
            <div className="w-12 h-12 bg-gradient-to-br from-blue-100 to-purple-100 rounded-full flex items-center justify-center">
              <i className="pi pi-user text-blue-600"></i>
            </div>
          </div>
        </div>
      </div>
    </Card>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
      {/* Header */}
      <header className="bg-white/95 backdrop-blur-md shadow-lg sticky top-0 z-50 border-b border-blue-100">
        <div className="w-full mx-auto px-6 py-4">
          <div className="flex justify-content-between align-items-center">
            <div className="flex align-items-center gap-4">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center shadow-lg">
                <i className="pi pi-map text-white text-xl"></i>
              </div>
              <div>
                <h1 className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent m-0">
                  Paris with Gabriela
                </h1>
                <p className="text-sm text-slate-600 m-0 font-medium">Authentic Parisian Experiences</p>
              </div>
            </div>
            <Button 
              label="Book Now" 
              icon="pi pi-calendar" 
              className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 border-none px-6 py-3 text-white font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
              raised
            />
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative py-16 overflow-hidden">
        {/* Background decoration */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 via-purple-600/5 to-pink-600/10"></div>
        <div className="absolute top-20 left-20 w-72 h-72 bg-blue-400/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-purple-400/20 rounded-full blur-3xl"></div>
        
        <div className="w-full mx-auto px-6 relative">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 align-items-center">
            <div className="col">
              <div className="flex align-items-center gap-3 mb-6">
                <Badge value="✨ Local Expert" className="bg-emerald-100 text-emerald-700 px-4 py-2 rounded-full font-semibold" />
                <Badge value="🏆 5+ Years Experience" className="bg-blue-100 text-blue-700 px-4 py-2 rounded-full font-semibold" />
              </div>
              <h2 className="text-6xl lg:text-7xl font-bold bg-gradient-to-r from-slate-800 via-blue-600 to-purple-600 bg-clip-text text-transparent mb-6 line-height-1">
                Discover Paris Like a Local
              </h2>
              <p className="text-xl text-slate-700 mb-8 line-height-3 font-medium">
                Join Gabriela for intimate, personalized tours that reveal the hidden gems and authentic spirit of Paris. 
                Small groups, local insights, unforgettable memories.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
                <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-4 shadow-lg border border-white/20">
                  <div className="flex align-items-center gap-3">
                    <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center">
                      <i className="pi pi-users text-white text-sm"></i>
                    </div>
                    <div>
                      <div className="font-semibold text-slate-800">Small Groups</div>
                      <div className="text-sm text-slate-600">Max 8 people</div>
                    </div>
                  </div>
                </div>
                <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-4 shadow-lg border border-white/20">
                  <div className="flex align-items-center gap-3">
                    <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl flex items-center justify-center">
                      <i className="pi pi-globe text-white text-sm"></i>
                    </div>
                    <div>
                      <div className="font-semibold text-slate-800">Multilingual</div>
                      <div className="text-sm text-slate-600">EN, FR, ES</div>
                    </div>
                  </div>
                </div>
                <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-4 shadow-lg border border-white/20">
                  <div className="flex align-items-center gap-3">
                    <div className="w-10 h-10 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-xl flex items-center justify-center">
                      <i className="pi pi-shield text-white text-sm"></i>
                    </div>
                    <div>
                      <div className="font-semibold text-slate-800">Insured</div>
                      <div className="text-sm text-slate-600">Fully covered</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex gap-4 flex-wrap">
                <Button 
                  label="View Packages" 
                  icon="pi pi-arrow-down" 
                  className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 border-none px-8 py-4 text-lg font-semibold shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1"
                  raised
                />
                <Button 
                  label="Contact Gabriela" 
                  icon="pi pi-envelope" 
                  className="border-2 border-slate-300 text-slate-700 hover:bg-slate-50 px-8 py-4 text-lg font-semibold transition-all duration-300"
                />
              </div>
            </div>
            <div className="col">
              <div className="relative">
                <div className="bg-gradient-to-br from-white/90 to-blue-50/90 backdrop-blur-sm border border-white/20 rounded-3xl p-8 shadow-2xl">
                  <div className="text-center">
                    <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full mx-auto mb-6 flex items-center justify-center shadow-lg">
                      <i className="pi pi-map text-white text-3xl"></i>
                    </div>
                    <h3 className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-3">
                      Ready to Explore?
                    </h3>
                    <p className="text-slate-700 mb-8 text-lg">Choose from our curated experiences below</p>
                    <div className="grid grid-cols-3 gap-6">
                      <div className="text-center">
                        <div className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">150+</div>
                        <div className="text-sm text-slate-600 font-medium">Happy Travelers</div>
                      </div>
                      <div className="text-center">
                        <div className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">4.9</div>
                        <div className="text-sm text-slate-600 font-medium">Average Rating</div>
                      </div>
                      <div className="text-center">
                        <div className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">5+</div>
                        <div className="text-sm text-slate-600 font-medium">Years Experience</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tour Packages */}
      <section className="py-20 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-slate-50/50 to-white/50"></div>
        <div className="w-full mx-auto px-6 relative">
          <div className="text-center mb-16">
            <div className="inline-flex align-items-center gap-2 bg-blue-100 text-blue-700 px-4 py-2 rounded-full font-semibold mb-6">
              <i className="pi pi-sparkles"></i>
              <span>Curated Experiences</span>
            </div>
            <h2 className="text-5xl lg:text-6xl font-bold bg-gradient-to-r from-slate-800 to-blue-600 bg-clip-text text-transparent mb-6">
              Choose Your Adventure
            </h2>
            <p className="text-xl text-slate-700 max-w-4xl mx-auto line-height-3">
              Each package is carefully crafted to give you an authentic taste of Parisian life, 
              culture, and hidden treasures that only locals know about.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {packages.map((pkg) => (
              <div key={pkg.id} className="col">
                <PackageCard pkg={pkg} />
              </div>
            ))}
          </div>

          <div className="text-center mt-16">
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-white/20 max-w-2xl mx-auto">
              <div className="flex align-items-center justify-content-center gap-3 mb-4">
                <i className="pi pi-info-circle text-blue-500 text-xl"></i>
                <p className="text-slate-700 m-0 font-medium text-lg">
                  All tours include personalized recommendations and photo assistance
                </p>
              </div>
              <Button 
                label="Book Your Experience" 
                icon="pi pi-calendar-plus" 
                className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 border-none px-8 py-4 text-lg font-semibold shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1"
                raised
              />
            </div>
          </div>
        </div>
      </section>

      <Divider className="border-slate-200" />

      {/* About Gabriela */}
      <section className="py-20 bg-gradient-to-br from-white to-blue-50/30">
        <div className="w-full mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 align-items-center">
            <div className="col order-2 lg:order-1">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-200/20 to-purple-200/20 rounded-3xl transform rotate-3"></div>
                <div className="relative bg-gradient-to-br from-blue-50 to-purple-50 rounded-3xl p-8 shadow-2xl">
                  <div className="text-center">
                    <div className="relative mb-6">
                      <div className="w-32 h-32 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full mx-auto flex items-center justify-center shadow-2xl">
                        <i className="pi pi-user text-white text-4xl"></i>
                      </div>
                      <div className="absolute -bottom-2 -right-2 w-12 h-12 bg-emerald-500 rounded-full flex items-center justify-center shadow-lg">
                        <i className="pi pi-verified text-white text-lg"></i>
                      </div>
                    </div>
                    <h3 className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-3">
                      Meet Gabriela
                    </h3>
                    <Badge value="✅ Certified Guide" className="bg-emerald-100 text-emerald-700 px-4 py-2 rounded-full font-semibold mb-6" />
                    <div className="grid grid-cols-2 gap-6 mt-6">
                      <div className="text-center">
                        <div className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">5+</div>
                        <div className="text-sm text-slate-600 font-medium">Years Experience</div>
                      </div>
                      <div className="text-center">
                        <div className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">3</div>
                        <div className="text-sm text-slate-600 font-medium">Languages</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col order-1 lg:order-2">
              <div className="inline-flex align-items-center gap-2 bg-blue-100 text-blue-700 px-4 py-2 rounded-full font-semibold mb-6">
                <i className="pi pi-heart"></i>
                <span>Your Local Expert</span>
              </div>
              <h3 className="text-4xl lg:text-5xl font-bold text-slate-800 mb-6 line-height-1">
                Your Local Paris Expert
              </h3>
              <p className="text-xl text-slate-700 mb-8 line-height-3">
                Born in Argentina and a Parisian at heart for over 5 years, Gabriela combines her passion 
                for travel with deep local knowledge to create unforgettable experiences. She speaks 
                English, French, and Spanish fluently, and has personally explored every corner of Paris 
                to bring you the most authentic experiences.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                <div className="flex align-items-center gap-3 bg-white/80 rounded-xl p-4 shadow-lg">
                  <div className="w-8 h-8 bg-gradient-to-br from-emerald-400 to-emerald-500 rounded-lg flex items-center justify-center">
                    <i className="pi pi-check text-white text-sm"></i>
                  </div>
                  <span className="text-slate-700 font-medium">Licensed Tour Guide</span>
                </div>
                <div className="flex align-items-center gap-3 bg-white/80 rounded-xl p-4 shadow-lg">
                  <div className="w-8 h-8 bg-gradient-to-br from-blue-400 to-blue-500 rounded-lg flex items-center justify-center">
                    <i className="pi pi-check text-white text-sm"></i>
                  </div>
                  <span className="text-slate-700 font-medium">Art History Background</span>
                </div>
                <div className="flex align-items-center gap-3 bg-white/80 rounded-xl p-4 shadow-lg">
                  <div className="w-8 h-8 bg-gradient-to-br from-purple-400 to-purple-500 rounded-lg flex items-center justify-center">
                    <i className="pi pi-check text-white text-sm"></i>
                  </div>
                  <span className="text-slate-700 font-medium">Photography Skills</span>
                </div>
                <div className="flex align-items-center gap-3 bg-white/80 rounded-xl p-4 shadow-lg">
                  <div className="w-8 h-8 bg-gradient-to-br from-pink-400 to-pink-500 rounded-lg flex items-center justify-center">
                    <i className="pi pi-check text-white text-sm"></i>
                  </div>
                  <span className="text-slate-700 font-medium">Foodie Enthusiast</span>
                </div>
              </div>
              <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-6 shadow-lg border border-blue-100">
                <p className="text-slate-700 italic text-lg line-height-3 m-0">
                  <i className="pi pi-quote-left text-blue-400 text-2xl mr-3"></i>
                  "I believe every traveler deserves to see Paris through local eyes. My goal is to show you 
                  the Paris I fell in love with - authentic, beautiful, and full of surprises."
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Divider className="border-slate-200" />

      {/* Testimonials */}
      <section className="py-20 bg-gradient-to-br from-slate-50 to-blue-50/50">
        <div className="w-full mx-auto px-6">
          <div className="text-center mb-16">
            <div className="inline-flex align-items-center gap-2 bg-yellow-100 text-yellow-700 px-4 py-2 rounded-full font-semibold mb-6">
              <i className="pi pi-star-fill"></i>
              <span>5-Star Reviews</span>
            </div>
            <h2 className="text-5xl lg:text-6xl font-bold bg-gradient-to-r from-slate-800 to-blue-600 bg-clip-text text-transparent mb-6">
              What Travelers Say
            </h2>
            <p className="text-xl text-slate-700">Real experiences from real travelers who discovered Paris with Gabriela</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="col">
                <TestimonialCard testimonial={testimonial} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-blue-600 via-purple-600 to-blue-700 text-white relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-500/20"></div>
        <div className="absolute top-10 left-10 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-80 h-80 bg-purple-300/20 rounded-full blur-3xl"></div>
        
        <div className="w-full mx-auto px-6 text-center relative">
          <div className="mb-8">
            <div className="inline-flex align-items-center gap-2 bg-white/20 backdrop-blur-sm text-white px-4 py-2 rounded-full font-semibold mb-6">
              <i className="pi pi-sparkles"></i>
              <span>Limited Availability</span>
            </div>
            <h2 className="text-5xl lg:text-6xl font-bold mb-6 line-height-1">
              Ready to Discover Paris?
            </h2>
            <p className="text-xl mb-12 text-blue-100 max-w-3xl mx-auto line-height-3">
              Book your personalized Paris experience today. Limited spots available to ensure quality and intimacy.
            </p>
          </div>
          
          <div className="flex justify-content-center gap-6 flex-wrap mb-12">
            <Button 
              label="Check Availability" 
              icon="pi pi-calendar" 
              className="bg-white text-blue-600 hover:bg-blue-50 border-none px-8 py-4 text-lg font-semibold shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1"
              raised
            />
            <Button 
              label="Contact Gabriela" 
              icon="pi pi-phone" 
              className="border-2 border-white text-white hover:bg-white hover:text-blue-600 px-8 py-4 text-lg font-semibold transition-all duration-300"
            />
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
              <div className="flex align-items-center justify-content-center gap-3">
                <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                  <i className="pi pi-shield text-white text-xl"></i>
                </div>
                <div className="text-left">
                  <div className="font-bold text-white">Free Cancellation</div>
                  <div className="text-sm text-blue-100">Up to 24h before</div>
                </div>
              </div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
              <div className="flex align-items-center justify-content-center gap-3">
                <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                  <i className="pi pi-heart text-white text-xl"></i>
                </div>
                <div className="text-left">
                  <div className="font-bold text-white">100% Satisfaction</div>
                  <div className="text-sm text-blue-100">Guaranteed experience</div>
                </div>
              </div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
              <div className="flex align-items-center justify-content-center gap-3">
                <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                  <i className="pi pi-clock text-white text-xl"></i>
                </div>
                <div className="text-left">
                  <div className="font-bold text-white">Instant Confirmation</div>
                  <div className="text-sm text-blue-100">Immediate booking</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-white py-12">
        <div className="w-full mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 align-items-start mb-8">
            <div className="text-center md:text-left">
              <div className="flex align-items-center gap-3 justify-content-center md:justify-content-start mb-4">
                <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                  <i className="pi pi-map text-white text-lg"></i>
                </div>
                <div>
                  <div className="font-bold text-xl">Paris with Gabriela</div>
                  <div className="text-slate-400 text-sm">Authentic experiences since 2020</div>
                </div>
              </div>
              <p className="text-slate-400 line-height-3 max-w-sm">
                Discover the authentic spirit of Paris through the eyes of a local expert who truly loves this magical city.
              </p>
            </div>
            
            <div className="text-center">
              <h4 className="font-bold text-lg mb-4">Follow the Adventure</h4>
              <div className="flex justify-content-center gap-4 mb-4">
                <Button 
                  icon="pi pi-instagram" 
                  className="w-12 h-12 rounded-full bg-gradient-to-br from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 border-none transition-all duration-300 transform hover:-translate-y-1"
                />
                <Button 
                  icon="pi pi-facebook" 
                  className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 border-none transition-all duration-300 transform hover:-translate-y-1"
                />
                <Button 
                  icon="pi pi-envelope" 
                  className="w-12 h-12 rounded-full bg-gradient-to-br from-slate-500 to-slate-600 hover:from-slate-600 hover:to-slate-700 border-none transition-all duration-300 transform hover:-translate-y-1"
                />
              </div>
              <p className="text-slate-400 text-sm">Share your Paris moments with #ParisWithGabriela</p>
            </div>
            
            <div className="text-center md:text-right">
              <h4 className="font-bold text-lg mb-4">Get in Touch</h4>
              <div className="space-y-3">
                <div className="flex align-items-center gap-2 justify-content-center md:justify-content-end">
                  <i className="pi pi-envelope text-blue-400"></i>
                  <span className="text-slate-300">hello@pariswithgabriela.com</span>
                </div>
                <div className="flex align-items-center gap-2 justify-content-center md:justify-content-end">
                  <i className="pi pi-phone text-blue-400"></i>
                  <span className="text-slate-300">+33 (0) 1 23 45 67 89</span>
                </div>
                <div className="flex align-items-center gap-2 justify-content-center md:justify-content-end">
                  <i className="pi pi-map-marker text-blue-400"></i>
                  <span className="text-slate-300">Paris, France</span>
                </div>
              </div>
            </div>
          </div>
          
          <Divider className="border-slate-700 my-8" />
          
          <div className="flex justify-content-between align-items-center flex-wrap gap-4">
            <p className="text-sm text-slate-400 m-0">
              © 2025 Paris with Gabriela. All rights reserved.
            </p>
            <p className="text-sm text-slate-400 m-0 flex align-items-center gap-1">
              Made with <i className="pi pi-heart text-red-400"></i> in Paris
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default ParisToursLanding;
