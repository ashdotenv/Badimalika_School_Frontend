import React from 'react';

const AboutUs = () => {
  return (
    <>
      <section className="bg-white py-16">
        {/* Hero Section */}
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold mb-4">About Badimalika Secondary School of Kalikot</h1>
          <p className="text-lg text-gray-600">
            Empowering young minds through excellence in education, innovation, and cultural values.
          </p>
        </div>
      </section>

      {/* Mission and Vision */}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-4 grid md:grid-cols-2 gap-12">
          {/* Mission */}
          <div className="bg-white p-8 shadow-lg rounded-lg">
            <h2 className="text-2xl font-bold text-blue-600 mb-4">Our Mission</h2>
            <p className="text-gray-600">
              To foster academic excellence and personal growth by providing a dynamic learning environment
              where students are nurtured to realize their full potential and contribute to society meaningfully.
            </p>
          </div>
          {/* Vision */}
          <div className="bg-white p-8 shadow-lg rounded-lg">
            <h2 className="text-2xl font-bold text-blue-600 mb-4">Our Vision</h2>
            <p className="text-gray-600">
              To be a leading institution in Nepal that develops confident, innovative, and globally-aware
              citizens ready to meet future challenges.
            </p>
          </div>
        </div>
      </section>

      {/* History Section */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8">Our History</h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <img
                src="/uploads/school.jpg"
                alt="School Image"
                className="rounded-lg shadow-lg"
                loading="lazy"
              />
            </div>
            <div className="flex flex-col justify-center">
              <p className="text-gray-600 leading-relaxed">
                Badimalika Secondary School, Kalikot is a public academic institute located in Syuna, Raskot, Kalikot district, Karnali Province of Nepal. It is affiliated to National Examinations Board (NEB) & Council for Technical Education and Vocation Training (CTEVT) and approved by Ministry of Education (MoE), Nepal. This secondary school offers Ten Plus Two programs under Management, Humanities, Education and Agriculture Streams.
              </p>
              <p className="text-gray-600 leading-relaxed mt-4">
                Badimalika Secondary School, Kalikot also offers vocational programs such as JTA in Plant Science for 40 seats each year. This secondary school has been offering agriculture programs such as Ten Plus Two in Animal Science from 2015 AD. It has been imparting education with various facilities including scholarships.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-8">Our Achievements</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="p-6 bg-white shadow-lg rounded-lg">
              <i className="fas fa-trophy text-4xl text-blue-500 mb-4"></i>
              <h3 className="text-xl font-bold">10+ Awards</h3>
              <p className="text-gray-600 text-sm">In academic and extracurricular excellence.</p>
            </div>
            <div className="p-6 bg-white shadow-lg rounded-lg">
              <i className="fas fa-user-graduate text-4xl text-blue-500 mb-4"></i>
              <h3 className="text-xl font-bold">95% Success</h3>
              <p className="text-gray-600 text-sm">In higher education placements.</p>
            </div>
            <div className="p-6 bg-white shadow-lg rounded-lg">
              <i className="fas fa-heart text-4xl text-blue-500 mb-4"></i>
              <h3 className="text-xl font-bold">Community Projects</h3>
              <p className="text-gray-600 text-sm">Involved in local development initiatives.</p>
            </div>
            <div className="p-6 bg-white shadow-lg rounded-lg">
              <i className="fas fa-star text-4xl text-blue-500 mb-4"></i>
              <h3 className="text-xl font-bold">Top Rankings</h3>
              <p className="text-gray-600 text-sm">Recognized as one of the best schools in Nepal.</p>
            </div>
          </div>
        </div>
      </section>
  
    <section className="bg-white py-16">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-8">Meet Our Team</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="p-6 shadow-lg rounded-lg">
            <img
              src="https://via.placeholder.com/150"
              alt="Chairperson"
              className="rounded-full mx-auto mb-4 w-24 h-24"
            />
            <h3 className="text-xl font-bold">Dipraj Shahi</h3>
            <p className="text-gray-600">Chairperson</p>
          </div>
          <div className="p-6 shadow-lg rounded-lg">
            <img
              src="https://via.placeholder.com/150"
              alt="Principal"
              className="rounded-full mx-auto mb-4 w-24 h-24"
            />
            <h3 className="text-xl font-bold">PushpaRaj Baral</h3>
            <p className="text-gray-600">Principal</p>
          </div>
          <div className="p-6 shadow-lg rounded-lg">
            <img
              src="https://via.placeholder.com/150"
              alt="Vice Principal"
              className="rounded-full mx-auto mb-4 w-24 h-24"
            />
            <h3 className="text-xl font-bold">Pramood Kumar Shahi</h3>
            <p className="text-gray-600">Vice Principal</p>
          </div>
          <div className="p-6 shadow-lg rounded-lg">
            <img
              src="https://via.placeholder.com/150"
              alt="Vice Principal"
              className="rounded-full mx-auto mb-4 w-24 h-24"
            />
            <h3 className="text-xl font-bold">Maha Parsad Baral</h3>
            <p className="text-gray-600">Vice Principal</p>
          </div>
          <div className="p-6 shadow-lg rounded-lg">
            <img
              src="https://via.placeholder.com/150"
              alt="Mathmatecian"
              className="rounded-full mx-auto mb-4 w-24 h-24"
            />
            <h3 className="text-xl font-bold">Manoj Kumar Shah</h3>
            <p className="text-gray-600">Mathmatecian Teacher</p>
          </div>
          <div className="p-6 shadow-lg rounded-lg">
            <img
              src="https://via.placeholder.com/150"
              alt="Vice Principal"
              className="rounded-full mx-auto mb-4 w-24 h-24"
            />
            <h3 className="text-xl font-bold">DharmaRaj Baral</h3>
            <p className="text-gray-600">Mathmatecian Teacher</p>
          </div>
          <div className="p-6 shadow-lg rounded-lg">
            <img
              src="https://via.placeholder.com/150"
              alt="Mathmatecian"
              className="rounded-full mx-auto mb-4 w-24 h-24"
            />
            <h3 className="text-xl font-bold">Upendra Baral</h3>
            <p className="text-gray-600">Mathmatecian Teacher</p>
          </div>
          <div className="p-6 shadow-lg rounded-lg">
            <img
              src="https://via.placeholder.com/150"
              alt="Vice Principal"
              className="rounded-full mx-auto mb-4 w-24 h-24"
            />
            <h3 className="text-xl font-bold">Krishna Neupane</h3>
            <p className="text-gray-600">Vice Principal</p>
          </div>


          <div className="p-6 shadow-lg rounded-lg">
            <img
              src="https://via.placeholder.com/150"
              alt="Vice Principal"
              className="rounded-full mx-auto mb-4 w-24 h-24"
            />
            <h3 className="text-xl font-bold">Ms. Sita Kumari</h3>
            <p className="text-gray-600">Vice Principal</p>
          </div>
          <div className="p-6 shadow-lg rounded-lg">
            <img
              src="https://via.placeholder.com/150"
              alt="Vice Principal"
              className="rounded-full mx-auto mb-4 w-24 h-24"
            />
            <h3 className="text-xl font-bold">Ms. Sita Kumari</h3>
            <p className="text-gray-600">Vice Principal</p>
          </div>
          <div className="p-6 shadow-lg rounded-lg">
            <img
              src="https://via.placeholder.com/150"
              alt="Vice Principal"
              className="rounded-full mx-auto mb-4 w-24 h-24"
            />
            <h3 className="text-xl font-bold">Ms. Sita Kumari</h3>
            <p className="text-gray-600">Vice Principal</p>
          </div>
          <div className="p-6 shadow-lg rounded-lg">
            <img
              src="https://via.placeholder.com/150"
              alt="Vice Principal"
              className="rounded-full mx-auto mb-4 w-24 h-24"
            />
            <h3 className="text-xl font-bold">Ms. Sita Kumari</h3>
            <p className="text-gray-600">Vice Principal</p>
          </div>
          <div className="p-6 shadow-lg rounded-lg">
            <img
              src="https://via.placeholder.com/150"
              alt="Vice Principal"
              className="rounded-full mx-auto mb-4 w-24 h-24"
            />
            <h3 className="text-xl font-bold">Ms. Sita Kumari</h3>
            <p className="text-gray-600">Vice Principal</p>
          </div>  <div className="p-6 shadow-lg rounded-lg">
            <img
              src="https://via.placeholder.com/150"
              alt="Vice Principal"
              className="rounded-full mx-auto mb-4 w-24 h-24"
            />
            <h3 className="text-xl font-bold">Ms. Sita Kumari</h3>
            <p className="text-gray-600">Vice Principal</p>
          </div>
          <div className="p-6 shadow-lg rounded-lg">
            <img
              src="https://via.placeholder.com/150"
              alt="Vice Principal"
              className="rounded-full mx-auto mb-4 w-24 h-24"
            />
            <h3 className="text-xl font-bold">Ms. Sita Kumari</h3>
            <p className="text-gray-600">Vice Principal</p>
          </div>
          <div className="p-6 shadow-lg rounded-lg">
            <img
              src="https://via.placeholder.com/150"
              alt="Vice Principal"
              className="rounded-full mx-auto mb-4 w-24 h-24"
            />
            <h3 className="text-xl font-bold">Ms. Sita Kumari</h3>
            <p className="text-gray-600">Vice Principal</p>
          </div>
          <div className="p-6 shadow-lg rounded-lg">
            <img
              src="https://via.placeholder.com/150"
              alt="Vice Principal"
              className="rounded-full mx-auto mb-4 w-24 h-24"
            />
            <h3 className="text-xl font-bold">Ms. Sita Kumari</h3>
            <p className="text-gray-600">Vice Principal</p>
          </div>
          <div className="p-6 shadow-lg rounded-lg">
            <img
              src="https://via.placeholder.com/150"
              alt="Vice Principal"
              className="rounded-full mx-auto mb-4 w-24 h-24"
            />
            <h3 className="text-xl font-bold">Ms. Sita Kumari</h3>
            <p className="text-gray-600">Vice Principal</p>
          </div>
          <div className="p-6 shadow-lg rounded-lg">
            <img
              src="https://via.placeholder.com/150"
              alt="Vice Principal"
              className="rounded-full mx-auto mb-4 w-24 h-24"
            />
            <h3 className="text-xl font-bold">Ms. Sita Kumari</h3>
            <p className="text-gray-600">Vice Principal</p>
          </div>
          <div className="p-6 shadow-lg rounded-lg">
            <img
              src="https://via.placeholder.com/150"
              alt="Vice Principal"
              className="rounded-full mx-auto mb-4 w-24 h-24"
            />
            <h3 className="text-xl font-bold">Ms. Sita Kumari</h3>
            <p className="text-gray-600">Vice Principal</p>
          </div>
          <div className="p-6 shadow-lg rounded-lg">
            <img
              src="https://via.placeholder.com/150"
              alt="Vice Principal"
              className="rounded-full mx-auto mb-4 w-24 h-24"
            />
            <h3 className="text-xl font-bold">Ms. Sita Kumari</h3>
            <p className="text-gray-600">Vice Principal</p>
          </div>
          <div className="p-6 shadow-lg rounded-lg">
            <img
              src="https://via.placeholder.com/150"
              alt="Vice Principal"
              className="rounded-full mx-auto mb-4 w-24 h-24"
            />
            <h3 className="text-xl font-bold">Ms. Sita Kumari</h3>
            <p className="text-gray-600">Vice Principal</p>
          </div>
          <div className="p-6 shadow-lg rounded-lg">
            <img
              src="https://via.placeholder.com/150"
              alt="Vice Principal"
              className="rounded-full mx-auto mb-4 w-24 h-24"
            />
            <h3 className="text-xl font-bold">Ms. Sita Kumari</h3>
            <p className="text-gray-600">Vice Principal</p>
          </div>

          <div className="p-6 shadow-lg rounded-lg">
            <img
              src="https://via.placeholder.com/150"
              alt="Vice Principal"
              className="rounded-full mx-auto mb-4 w-24 h-24"
            />
            <h3 className="text-xl font-bold">Ms. Sita Kumari</h3>
            <p className="text-gray-600">Vice Principal</p>
          </div>
          <div className="p-6 shadow-lg rounded-lg">
            <img
              src="https://via.placeholder.com/150"
              alt="Vice Principal"
              className="rounded-full mx-auto mb-4 w-24 h-24"
            />
            <h3 className="text-xl font-bold">Ms. Sita Kumari</h3>
            <p className="text-gray-600">Vice Principal</p>
          </div>
          <div className="p-6 shadow-lg rounded-lg">
            <img
              src="https://via.placeholder.com/150"
              alt="Vice Principal"
              className="rounded-full mx-auto mb-4 w-24 h-24"
            />
            <h3 className="text-xl font-bold">Ms. Sita Kumari</h3>
            <p className="text-gray-600">Vice Principal</p>
          </div>
          <div className="p-6 shadow-lg rounded-lg">
            <img
              src="https://via.placeholder.com/150"
              alt="Vice Principal"
              className="rounded-full mx-auto mb-4 w-24 h-24"
            />
            <h3 className="text-xl font-bold">Ms. Sita Kumari</h3>
            <p className="text-gray-600">Vice Principal</p>
          </div>
          <div className="p-6 shadow-lg rounded-lg">
            <img
              src="https://via.placeholder.com/150"
              alt="Vice Principal"
              className="rounded-full mx-auto mb-4 w-24 h-24"
            />
            <h3 className="text-xl font-bold">Ms. Sita Kumari</h3>
            <p className="text-gray-600">Vice Principal</p>
          </div>
          <div className="p-6 shadow-lg rounded-lg">
            <img
              src="https://via.placeholder.com/150"
              alt="Vice Principal"
              className="rounded-full mx-auto mb-4 w-24 h-24"
            />
            <h3 className="text-xl font-bold">Ms. Sita Kumari</h3>
            <p className="text-gray-600">Vice Principal</p>
          </div>
          <div className="p-6 shadow-lg rounded-lg">
            <img
              src="https://via.placeholder.com/150"
              alt="Vice Principal"
              className="rounded-full mx-auto mb-4 w-24 h-24"
            />
            <h3 className="text-xl font-bold">Ms. Sita Kumari</h3>
            <p className="text-gray-600">Vice Principal</p>
          </div>
          <div className="p-6 shadow-lg rounded-lg">
            <img
              src="https://via.placeholder.com/150"
              alt="Vice Principal"
              className="rounded-full mx-auto mb-4 w-24 h-24"
            />
            <h3 className="text-xl font-bold">Ms. Sita Kumari</h3>
            <p className="text-gray-600">Vice Principal</p>
          </div>
          <div className="p-6 shadow-lg rounded-lg">
            <img
              src="https://via.placeholder.com/150"
              alt="Vice Principal"
              className="rounded-full mx-auto mb-4 w-24 h-24"
            />
            <h3 className="text-xl font-bold">Ms. Sita Kumari</h3>
            <p className="text-gray-600">Vice Principal</p>
          </div>
        </div>
      </div>
    </section>
  
     <section className="py-12" id="Gallery">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">Gallery</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            
            <div className="overflow-hidden">
              <img 
                src="/uploads-school/1.jpeg" 
               
                className="w-full h-auto object-cover" 
                loading="lazy"
              />
            </div>
 
            <div className="overflow-hidden">
              <img 
                src="/uploads-school/2.jpeg" 
               
                className="w-full h-auto object-cover" 
                loading="lazy"
             / >
            </div>
    
            <div className="overflow-hidden">
              <img 
                src="/uploads-school/3.jpeg" 
               
                className="w-full h-auto object-cover" 
                loading="lazy"
              />
            </div>
    
            <div className="overflow-hidden">
              <img 
                src="/uploads-school/4.jpeg" 
                alt="Bridge and Water" 
                className="w-full h-auto object-cover" 
                loading="lazy"
              />
            </div>
    
      
            <div className="overflow-hidden">
              <img 
                src="/uploads-school/5.jpeg" 
                
                className="w-full h-auto object-cover" 
                loading="lazy"
              />
            </div>
    
    
            <div className="overflow-hidden">
              <img 
                src="/uploads-school/6.jpeg" 
              
                className="w-full h-auto object-cover" 
                loading="lazy"
             />
            </div>
    
            <div className="overflow-hidden">
              <img 
                src="/uploads-school/7.jpeg" 
               
                className="w-full h-auto object-cover" 
                loading="lazy"
              />
            </div>
    
          
            <div className="overflow-hidden">
              <img 
                src="/uploads-school/8.jpeg" 
              
                className="w-full h-auto object-cover" 
                loading="lazy"
              />
            </div>
            <div className="overflow-hidden">
                <img 
                  src="/uploads-school/9.jpeg" 
                
                  className="w-full h-auto object-cover" 
                  loading="lazy"
                />
              </div>
              <div className="overflow-hidden">
                <img 
                  src="/uploads-school/10.jpeg" 
                
                  className="w-full h-auto object-cover" 
                  loading="lazy"
                />
              </div>
              <div className="overflow-hidden">
                <img 
                  src="/uploads-school/11.jpeg" 
                
                  className="w-full h-auto object-cover" 
                  loading="lazy"
                />
              </div>
              <div className="overflow-hidden">
                <img 
                  src="/uploads-school/12.jpeg" 
                
                  className="w-full h-auto object-cover" 
                  loading="lazy"
                />
              </div>
              <div className="overflow-hidden">
                <img 
                  src="/uploads-school/13.jpeg" 
                
                  className="w-full h-auto object-cover" 
                  loading="lazy"
                />
              </div>
              <div className="overflow-hidden">
                <img 
                  src="/uploads-school/14.jpeg" 
                
                  className="w-full h-auto object-cover" 
                  loading="lazy"
                />
              </div>
              <div className="overflow-hidden">
                <img 
                  src="/uploads-school/15.jpeg" 
                
                  className="w-full h-auto object-cover" 
                  loading="lazy"
                />
              </div>
              <div className="overflow-hidden">
                <img 
                  src="/uploads-school/16.jpeg" 
                
                  className="w-full h-auto object-cover" 
                  loading="lazy"
                />
              </div>
              <div className="overflow-hidden">
                <img 
                  src="/uploads-school/17.jpeg" 
                
                  className="w-full h-auto object-cover" 
                  loading="lazy"
                />
              </div>
              <div className="overflow-hidden">
                <img 
                  src="/uploads-school/18.jpeg" 
                
                  className="w-full h-auto object-cover" 
                  loading="lazy"
                />
              </div>
              <div className="overflow-hidden">
                <img 
                  src="/uploads-school/19.jpeg" 
                
                  className="w-full h-auto object-cover" 
                  loading="lazy"
                />
              </div>
              <div className="overflow-hidden">
                <img 
                  src="/uploads-school/20.jpeg" 
                
                  className="w-full h-auto object-cover" 
                  loading="lazy"
                />
              </div>
              <div className="overflow-hidden">
                <img 
                  src="/uploads-school/21.jpeg" 
                
                  className="w-full h-auto object-cover" 
                  loading="lazy"
                />
              </div>
              <div className="overflow-hidden">
                <img 
                  src="/uploads-school/22.jpeg" 
                
                  className="w-full h-auto object-cover" 
                  loading="lazy"
                />
              </div>
             
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutUs;
