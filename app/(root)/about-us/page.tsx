// pages/about_us.tsx
import React from "react";

const AboutUs = () => {
  return (
    <div className="max-w-7xl mx-auto bg-slate-100 rounded-2xl px-4 py-8">
      <header className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900">About Us</h1>
        <p className="mt-4 text-lg text-gray-600">
          At MediaDost, we revolutionize the advertising landscape by providing
          personalized, data-driven solutions that connect brands with their
          audience on a deeper level. Our platform is designed to empower
          businesses with tools that drive engagement, foster emotional
          connections, and deliver measurable results.
        </p>
      </header>

      <section className="mb-12">
        <h2 className="md:text-3xl  text-2xl text-center  font-semibold text-gray-800">
          Our Approach to Transforming Advertising
        </h2>
        <p className="mt-4 text-lg text-start text-gray-600">
          Advertising isn't just about visibility; it's about making meaningful
          connections. Here's how MediaDost is changing the game:
        </p>
      </section>

      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
        <div className="bg-white p-6 shadow-md rounded-lg">
          <h3 className="text-2xl font-semibold text-gray-800">
            Plan Your Media
          </h3>
          <p className="mt-4 text-gray-600">
            Develop campaigns that resonate with your audience using our
            intuitive platform. With data-driven insights, you can craft
            messages that not only reach but also engage your target
            demographic.
          </p>
        </div>

        <div className="bg-white p-6 shadow-md rounded-lg">
          <h3 className="text-2xl font-semibold text-gray-800">
            Smart Tracking System
          </h3>
          <p className="mt-4 text-gray-600">
            Gain real-time insights into audience behavior. Understand not just
            the reach but the emotional impact of your campaigns, allowing you
            to make strategic adjustments on the fly.
          </p>
        </div>

        <div className="bg-white p-6 shadow-md rounded-lg">
          <h3 className="text-2xl font-semibold text-gray-800">
            Emotional Engagement
          </h3>
          <p className="mt-4 text-gray-600">
            Move beyond mere impressions. Our tools enable you to gauge
            emotional responses, helping you to refine your messages to strike a
            chord with your audience.
          </p>
        </div>
      </section>

      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 mb-12">
        <div className="bg-white p-6 shadow-md rounded-lg">
          <h3 className="text-2xl font-semibold text-gray-800">
            Comprehensive Data Insights
          </h3>
          <p className="mt-4 text-gray-600">
            Access detailed analytics from impressions to engagement patterns.
            With heatmaps and demographic breakdowns, you can fine-tune your
            strategy for maximum effectiveness.
          </p>
        </div>

        <div className="bg-white p-6 shadow-md rounded-lg">
          <h3 className="text-2xl font-semibold text-gray-800">Find Events</h3>
          <p className="mt-4 text-gray-600">
            Collaborate with event organizers to place your brand in the
            spotlight at events that align with your vision. Make your presence
            felt where it matters most.
          </p>
        </div>

        <div className="bg-white p-6 shadow-md rounded-lg">
          <h3 className="text-2xl font-semibold text-gray-800">
            Creative Services
          </h3>
          <p className="mt-4 text-gray-600">
            Work with our creative team to produce compelling, authentic
            content. We ensure your brand's voice is heard loud and clear,
            creating lasting impressions.
          </p>
        </div>
      </section>

      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 mb-12">
        <div className="bg-white p-6 shadow-md rounded-lg">
          <h3 className="text-2xl font-semibold text-gray-800">
            Diverse Ad Categories
          </h3>
          <p className="mt-4 text-gray-600">
            Whether you're looking for outdoor advertising, digital ads, or
            influencer marketing, our platform offers a variety of categories to
            fit your specific needs and maximize your reach.
          </p>
        </div>
      </section>

      <section className="text-center">
        <h2 className="text-3xl font-semibold text-gray-800">Contact Us</h2>
        <p className="mt-4 text-lg text-gray-600">
          Email:{" "}
          <a href="mailto:info@mediadost.com" className="text-blue-600">
            info@mediadost.com
          </a>
        </p>

        <p className="mt-4 text-lg text-gray-600">
          Phone No:{" "}
          <a href="mailto:info@mediadost.com" className="text-blue-600">
            +91-9942222304
          </a>
        </p>
      </section>
    </div>
  );
};

export default AboutUs;
