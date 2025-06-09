import React from "react";
import banner from "../../src/assets/beware/banner.png"
import l from "../../src/assets/beware/l.png"

const ArticlePage = () => {
  return (
    <div className="min-h-screen w-full bg-white flex flex-col items-center py-10 px-4 sm:px-6 lg:px-8">
      {/* Top banner image */}
      <div className="relative w-full  mb-12">
        <img
          src={banner}
          className="w-full h-auto object-cover rounded-lg shadow-lg"
          alt="Banner illustrating how to spot fraud movers"
        />
      </div>

      {/* Main content area for the article */}
      <div className="w-full  bg-white p-6 sm:p-8 rounded-xl shadow-lg border border-gray-200">
        {/* Article content directly in JSX */}
        <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-gray-900">How to Spot A Fraud Movers and Packers: Why Pick Move My Stuffs</h2>
        <p className="mb-6 text-gray-700 text-base sm:text-lg leading-relaxed">
          Selecting a trustworthy packer and movers company is essential for a safe and stress-free move. At Move My Stuffs Packers and Movers, we value openness, competence, and client satisfaction. Here's how to spot dubious movers and what makes us unique.
        </p>

        <h3 className="text-xl sm:text-2xl font-semibold mb-3 text-gray-800">1. Verification of Legal Documents</h3>
        <p className="mb-6 text-gray-700 text-base sm:text-lg leading-relaxed">
          A reliable moving company should always have a license and be registered. We at Move My Stuffs are IBA approved and fully authorized. We are happy to supply all required paperwork, such as:
        </p>
        <ul className="list-disc list-inside mb-6 text-gray-700 text-base sm:text-lg leading-relaxed ml-4">
          <li>Certificate of GST Registration</li>
          <li>Certificate of Company Incorporation</li>
          <li>License for Shops and Establishments</li>
          <li>The PAN Card</li>
        </ul>
        <p className="mb-6 text-gray-700 text-base sm:text-lg leading-relaxed">
          When shortlisting, we advise our clients to request these documents and compare them to others.
        </p>

        <div className="flex flex-col md:flex-row items-center md:items-start gap-8 mb-8">
          <div className="w-full md:w-1/2">
            <h3 className="text-xl sm:text-2xl font-semibold mb-3 text-gray-800">2. Visit Our Registered Office:</h3>
            <p className="mb-6 text-gray-700 text-base sm:text-lg leading-relaxed">
             A verified, physical office address serves as a crucial testament to a business's legitimacy and transparency. It's more than just a location; it's tangible proof of our established presence and operational commitment. By taking the proactive step to visit our office, you gain invaluable confidence, witnessing firsthand the professionalism of our environment and the dedication of our team. This direct interaction allows you to get a true sense of our operational workflow, observe our organized setup, and meet the individuals who will be orchestrating your move. We warmly welcome you to personally assess our infrastructure, discuss your specific needs face-to-face, and experience the reassuring atmosphere that defines Move My Stuffs.
            </p>
          </div>
          <div className="w-full md:w-1/2 flex justify-center md:justify-end">
            <img
              src={l}
              className="w-full max-w-sm h-auto object-cover rounded-lg shadow-lg"
              alt="Illustration of visiting an office"
            />
          </div>
        </div>

        <h3 className="text-xl sm:text-2xl font-semibold mb-3 text-gray-800">3. Visit Our Official Website</h3>
        <p className="mb-6 text-gray-700 text-base sm:text-lg leading-relaxed">
          Our website at Move My Stuffs is an accurate representation of who we are: open, customer-focused, and competent. Our internet presence consists of:
        </p>
        <ul className="list-disc list-inside mb-6 text-gray-700 text-base sm:text-lg leading-relaxed ml-4">
          <li>Explicit service listings</li>
          <li>Background and certifications of the company</li>
          <li>Customer endorsements</li>
          <li>Simple contact details</li>
        </ul>
        <p className="mb-6 text-gray-700 text-base sm:text-lg leading-relaxed">
          To learn more about our services and values, we encourage visitors to take the time to browse our website.
        </p>

        <h3 className="text-xl sm:text-2xl font-semibold mb-3 text-gray-800">4. Client Testimonials & Comments:</h3>
        <p className="mb-6 text-gray-700 text-base sm:text-lg leading-relaxed">
          Positive customer reviews are something we take great pride in. Real customer reviews from people who have used our services can be found on Google Reviews and other reliable websites. Their evaluations constantly demonstrate our dedication to excellence and customer service.
        </p>
        <ul className="list-disc list-inside mb-6 text-gray-700 text-base sm:text-lg leading-relaxed ml-4">
          <li>Actual encounters</li>
          <li>Verified ratings</li>
          <li>Sincere endorsements</li>
        </ul>
        <p className="mb-6 text-gray-700 text-base sm:text-lg leading-relaxed">
          Customers are cautioned to avoid businesses with a low number of reviews, reviews that are too generic, or reviews that seem suspiciously perfect.
        </p>

        <h3 className="text-xl sm:text-2xl font-semibold mb-3 text-gray-800">5. Clear Quotes & Prices:</h3>
        <p className="mb-6 text-gray-700 text-base sm:text-lg leading-relaxed">
          Move My Stuffs provides competitive, clear pricing, in contrast to dubious businesses that entice with absurdly low or excessively high rates. We offer precise quotations based on:
        </p>
        <ul className="list-disc list-inside mb-6 text-gray-700 text-base sm:text-lg leading-relaxed ml-4">
          <li>The amount of merchandise</li>
          <li>The relocation's distance</li>
          <li>Particular packing or handling specifications</li>
        </ul>
        <p className="mb-6 text-gray-700 text-base sm:text-lg leading-relaxed">
          Like us, we advise clients to compare services, obtain quotes from several businesses, and make sure all fees are disclosed in detail.
        </p>
        <a className="flex justify-end text-white " href="https://youtu.be/gESHWPbFrvk?si=6lJY4840fLxQTvgz&t=60" target="_blank" rel="noopener noreferrer">.</a>
      </div>
    </div>
  );
};

export default ArticlePage;