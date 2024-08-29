import React from 'react';

function About() {
  return (
    <div className="bg-gray-100min-h-screen flex flex-col items-center p-6">
      <header className="text-center mt-8">
        <h1 className="text-3xl font-bold text-gray-800 mb-4">About Us</h1>
        <p className="text-gray-600 text-lg">Learn more about who we are and what we do.</p>
      </header>

      <main className="mt-8 max-w-4xl text-center">
        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-700 mb-2">Our Mission</h2>
          <p className="text-gray-600">
            Our mission is to create a positive impact on the world by providing high-quality services and products.
            We believe in innovation, integrity, and excellence in everything we do.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-700 mb-2">Our Values</h2>
          <ul className="text-gray-600">
            <li>- Commitment to quality and customer satisfaction.</li>
            <li>- Fostering creativity and innovation.</li>
            <li>- Integrity and transparency in all our actions.</li>
            <li>- Responsibility towards the community and environment.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-gray-700 mb-2">Our Team</h2>
          <p className="text-gray-600">
            Our team is composed of passionate and talented individuals dedicated to delivering the best results for our clients.
            We value collaboration, diversity, and continuous learning to achieve our goals together.
          </p>
        </section>
      </main>

      <footer className="mt-12 text-gray-500">
        <p>&copy; 2024 My Website. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default About;
