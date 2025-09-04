import React from 'react';
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

  const PackageCard = ({ pkg }) => {
    const cardHeader = (
      <div className="relative">
        <div className="flex justify-content-between align-items-center p-3 bg-primary-50">
          <div className="flex align-items-center gap-2">
            <i className={`${pkg.icon} text-primary text-2xl`}></i>
            <h3 className="text-xl font-bold text-primary m-0">{pkg.title}</h3>
          </div>
          <Badge value={pkg.badge} className={pkg.badgeClass} />
        </div>
      </div>
    );

    const cardFooter = (
      <div className="flex justify-content-between align-items-center pt-3">
        <div className="flex flex-column">
          <span className="text-2xl font-bold text-primary">{pkg.price}</span>
          <span className="text-sm text-600">per person</span>
        </div>
        <div className="flex align-items-center gap-2 text-sm text-600">
          <i className="pi pi-clock"></i>
          <span>{pkg.duration}</span>
        </div>
      </div>
    );

    return (
      <Card 
        header={cardHeader} 
        footer={cardFooter}
        className="shadow-3 border-round-lg h-full hover:shadow-4 transition-all transition-duration-300"
      >
        <p className="text-700 mb-3">{pkg.description}</p>
        <ul className="list-none p-0 m-0">
          {pkg.highlights.map((highlight, index) => (
            <li key={index} className="flex align-items-center gap-2 mb-2">
              <i className="pi pi-check-circle text-green-500 text-sm"></i>
              <span className="text-sm text-700">{highlight}</span>
            </li>
          ))}
        </ul>
      </Card>
    );
  };

  const TestimonialCard = ({ testimonial }) => (
    <Card className="shadow-2 border-round-lg h-full bg-white">
      <div className="flex flex-column gap-3">
        <div className="flex gap-1">
          {[...Array(testimonial.rating)].map((_, i) => (
            <i key={i} className="pi pi-star-fill text-yellow-500"></i>
          ))}
        </div>
        <p className="text-700 line-height-3 m-0">"{testimonial.text}"</p>
        <div className="flex justify-content-between align-items-center">
          <strong className="text-primary">{testimonial.name}</strong>
          <span className="text-sm text-600">{testimonial.country}</span>
        </div>
      </div>
    </Card>
  );

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-2 sticky top-0 z-5">
        <div className="max-w-6xl mx-auto px-3 py-3">
          <div className="flex justify-content-between align-items-center">
            <div className="flex align-items-center gap-3">
              <i className="pi pi-map text-primary text-3xl"></i>
              <div>
                <h1 className="text-2xl font-bold text-primary m-0">Paris with Gabriela</h1>
                <p className="text-sm text-600 m-0">Authentic Parisian Experiences</p>
              </div>
            </div>
            <Button 
              label="Book Now" 
              icon="pi pi-calendar" 
              className="p-button-primary"
              raised
            />
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative py-8 bg-gradient-to-br from-blue-50 to-purple-50">
        <div className="max-w-6xl mx-auto px-3">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 align-items-center">
            <div className="col">
              <div className="flex align-items-center gap-2 mb-3">
                <Badge value="Local Expert" className="p-badge-success" />
                <Badge value="5+ Years Experience" className="p-badge-info" />
              </div>
              <h2 className="text-5xl font-bold text-primary mb-4 line-height-2">
                Discover Paris Like a Local
              </h2>
              <p className="text-xl text-700 mb-4 line-height-3">
                Join Gabriela for intimate, personalized tours that reveal the hidden gems and authentic spirit of Paris. 
                Small groups, local insights, unforgettable memories.
              </p>
              <div className="flex flex-wrap gap-3 mb-4">
                <div className="flex align-items-center gap-2">
                  <i className="pi pi-users text-primary"></i>
                  <span className="text-700">Small Groups (Max 8)</span>
                </div>
                <div className="flex align-items-center gap-2">
                  <i className="pi pi-globe text-primary"></i>
                  <span className="text-700">English & French</span>
                </div>
                <div className="flex align-items-center gap-2">
                  <i className="pi pi-shield text-primary"></i>
                  <span className="text-700">Fully Insured</span>
                </div>
              </div>
              <div className="flex gap-3 flex-wrap">
                <Button 
                  label="View Packages" 
                  icon="pi pi-arrow-down" 
                  className="p-button-primary p-button-lg"
                  raised
                />
                <Button 
                  label="Contact Gabriela" 
                  icon="pi pi-envelope" 
                  className="p-button-outlined p-button-lg"
                />
              </div>
            </div>
            <div className="col">
              <div className="relative">
                <div className="bg-primary-100 border-round-3xl p-6 text-center">
                  <i className="pi pi-map text-primary text-6xl mb-4"></i>
                  <h3 className="text-2xl font-bold text-primary mb-2">Ready to Explore?</h3>
                  <p className="text-700 mb-4">Choose from our curated experiences below</p>
                  <div className="flex justify-content-center gap-4 text-center">
                    <div>
                      <div className="text-3xl font-bold text-primary">150+</div>
                      <div className="text-sm text-600">Happy Travelers</div>
                    </div>
                    <div>
                      <div className="text-3xl font-bold text-primary">4.9</div>
                      <div className="text-sm text-600">Average Rating</div>
                    </div>
                    <div>
                      <div className="text-3xl font-bold text-primary">2</div>
                      <div className="text-sm text-600">Years in Paris</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tour Packages */}
      <section className="py-8">
        <div className="max-w-6xl mx-auto px-3">
          <div className="text-center mb-6">
            <h2 className="text-4xl font-bold text-primary mb-3">Choose Your Adventure</h2>
            <p className="text-xl text-700 max-w-3xl mx-auto">
              Each package is carefully crafted to give you an authentic taste of Parisian life, 
              culture, and hidden treasures that only locals know about.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {packages.map((pkg) => (
              <div key={pkg.id} className="col">
                <PackageCard pkg={pkg} />
              </div>
            ))}
          </div>

          <div className="text-center mt-6">
            <p className="text-700 mb-3">
              <i className="pi pi-info-circle text-primary mr-2"></i>
              All tours include personalized recommendations and photo assistance
            </p>
            <Button 
              label="Book Your Experience" 
              icon="pi pi-calendar-plus" 
              className="p-button-primary p-button-lg"
              raised
            />
          </div>
        </div>
      </section>

      <Divider />

      {/* About Gabriela */}
      <section className="py-8 bg-white">
        <div className="max-w-6xl mx-auto px-3">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 align-items-center">
            <div className="col">
              <div className="bg-gradient-to-br from-primary-50 to-purple-50 border-round-3xl p-6 text-center">
                <div className="w-24 h-24 bg-primary border-circle mx-auto mb-4 flex align-items-center justify-content-center">
                  <i className="pi pi-user text-white text-4xl"></i>
                </div>
                <h3 className="text-2xl font-bold text-primary mb-2">Meet Gabriela</h3>
                <Badge value="Certified Guide" className="p-badge-success mb-3" />
                <div className="grid grid-cols-2 gap-4 mt-4">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-primary">5+</div>
                    <div className="text-sm text-600">Years Experience</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-primary">3</div>
                    <div className="text-sm text-600">Languages</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col">
              <h3 className="text-3xl font-bold text-primary mb-4">Your Local Paris Expert</h3>
              <p className="text-700 mb-4 line-height-3">
                Born in Argentina and a Parisian at heart for over 5 years, Gabriela combines her passion 
                for travel with deep local knowledge to create unforgettable experiences. She speaks 
                English, French, and Spanish fluently, and has personally explored every corner of Paris 
                to bring you the most authentic experiences.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-4">
                <div className="flex align-items-center gap-2">
                  <i className="pi pi-check-circle text-green-500"></i>
                  <span className="text-700">Licensed Tour Guide</span>
                </div>
                <div className="flex align-items-center gap-2">
                  <i className="pi pi-check-circle text-green-500"></i>
                  <span className="text-700">Art History Background</span>
                </div>
                <div className="flex align-items-center gap-2">
                  <i className="pi pi-check-circle text-green-500"></i>
                  <span className="text-700">Photography Skills</span>
                </div>
                <div className="flex align-items-center gap-2">
                  <i className="pi pi-check-circle text-green-500"></i>
                  <span className="text-700">Foodie Enthusiast</span>
                </div>
              </div>
              <p className="text-600 italic">
                "I believe every traveler deserves to see Paris through local eyes. My goal is to show you 
                the Paris I fell in love with - authentic, beautiful, and full of surprises."
              </p>
            </div>
          </div>
        </div>
      </section>

      <Divider />

      {/* Testimonials */}
      <section className="py-8 bg-gray-50">
        <div className="max-w-6xl mx-auto px-3">
          <div className="text-center mb-6">
            <h2 className="text-4xl font-bold text-primary mb-3">What Travelers Say</h2>
            <p className="text-xl text-700">Real experiences from real travelers</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="col">
                <TestimonialCard testimonial={testimonial} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-8 bg-primary text-white">
        <div className="max-w-4xl mx-auto px-3 text-center">
          <h2 className="text-4xl font-bold mb-4">Ready to Discover Paris?</h2>
          <p className="text-xl mb-6 text-primary-100">
            Book your personalized Paris experience today. Limited spots available to ensure quality and intimacy.
          </p>
          <div className="flex justify-content-center gap-4 flex-wrap">
            <Button 
              label="Check Availability" 
              icon="pi pi-calendar" 
              className="p-button-secondary p-button-lg"
              raised
            />
            <Button 
              label="Contact Gabriela" 
              icon="pi pi-phone" 
              className="p-button-outlined p-button-lg text-white border-white"
            />
          </div>
          <div className="mt-6 flex justify-content-center gap-6 flex-wrap text-primary-100">
            <div className="flex align-items-center gap-2">
              <i className="pi pi-shield"></i>
              <span>Free Cancellation</span>
            </div>
            <div className="flex align-items-center gap-2">
              <i className="pi pi-heart"></i>
              <span>100% Satisfaction Guaranteed</span>
            </div>
            <div className="flex align-items-center gap-2">
              <i className="pi pi-clock"></i>
              <span>Instant Confirmation</span>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-6">
        <div className="max-w-6xl mx-auto px-3">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 align-items-center">
            <div className="text-center md:text-left">
              <div className="flex align-items-center gap-2 justify-content-center md:justify-content-start mb-2">
                <i className="pi pi-map text-primary text-xl"></i>
                <span className="font-bold">Paris with Gabriela</span>
              </div>
              <p className="text-gray-400 text-sm m-0">Authentic Parisian experiences since 2020</p>
            </div>
            
            <div className="text-center">
              <p className="text-sm text-gray-400 mb-2">Follow the adventure</p>
              <div className="flex justify-content-center gap-3">
                <Button 
                  icon="pi pi-instagram" 
                  className="p-button-rounded p-button-text p-button-sm"
                  style={{color: '#white'}}
                />
                <Button 
                  icon="pi pi-facebook" 
                  className="p-button-rounded p-button-text p-button-sm"
                  style={{color: '#white'}}
                />
                <Button 
                  icon="pi pi-envelope" 
                  className="p-button-rounded p-button-text p-button-sm"
                  style={{color: '#white'}}
                />
              </div>
            </div>
            
            <div className="text-center md:text-right">
              <p className="text-sm text-gray-400 mb-1">Contact</p>
              <p className="text-sm m-0">hello@pariswithgabriela.com</p>
              <p className="text-sm m-0">+33 (0) 1 23 45 67 89</p>
            </div>
          </div>
          
          <Divider className="my-4" />
          
          <div className="text-center">
            <p className="text-sm text-gray-400 m-0">
              © 2025 Paris with Gabriela. All rights reserved. | Made with ❤️ in Paris
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default ParisToursLanding;
