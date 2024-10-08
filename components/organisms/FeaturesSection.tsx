import { motion } from 'framer-motion';

const FeaturesSection = () => {
  return (
    <div className="flex flex-col md:flex-row justify-between items-center my-10 h-screen px-5 max-w-7xl mx-auto">
      {/* Features Description */}
      <motion.div
        className="md:w-1/2 text-left"
        initial={{ x: -100, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: false, amount: 0.2 }}  
      >
        <h2 className="text-5xl tracking-wide  leading-[3.5rem] font-semibold mb-4 font-apfelregular max-w-2xl">
          A full solution to manage <br />and grow your business
        </h2>
        <p className="text-xl max-w-lg text-[#475467] font-euclidlight">

          Packed with all the tools you need to boost sales,<br />manage your calendar and retain clients so you can focus on what you do best.
        </p>
        <p className="text-xl max-w-lg text-[#475467] font-euclidlight">
          Beauty Butler helps you book appointments, retain <br />clients, get paid - all in one place.
        </p>
       <div className="text-[#8878D8] my-5 font-euclidmedium">
        <p className="text-xl">Learn More</p>
       </div>
      </motion.div>

      {/* Features Card */}
      <motion.div
        className="md:w-1/2 bg-[#cccaff] p-6 rounded-lg mt-10 md:mt-0 relative h-[420px] w-[500px] overflow-visible"
        initial={{ y: -100, opacity: 0 }}  // Start animation from the top for the bigger card
        whileInView={{ y: 0, opacity: 1 }}  // Animate to normal position when in view
        transition={{ duration: 1, delay: 0.3 }}  // Slower transition
        viewport={{ once: false, amount: 0.2 }}  // Trigger animation when in view
      >
        {/* Smaller Cards Container */}
        <motion.div
          className="grid grid-cols-2 gap-4 absolute -top-5 -left-10 w-full"
          initial={{ x: 100, opacity: 0 }}  // Start animation from the right for smaller cards
          whileInView={{ x: 0, opacity: 1 }}  // Animate into place when in view
          transition={{ duration: 0.5, delay: 0.5 }}
          viewport={{ once: false, amount: 0.2 }}  // Animation replays on scroll
        >
          <div className="bg-[#8878d7] text-white p-5 rounded-2xl shadow-md">
            <h3 className="text-lg font-bold font-apfelregular my-2">Beauty Butler Marketplace</h3>
            <p className="text-sm font-euclidlight">Attract a flood of new customers with Beauty Butler. Your business will be effortlessly discoverable by your ideal clientele with our marketplace app and our clever algorithm.</p>
          </div>
          <div className="bg-[#8878d7] text-white p-4 rounded-2xl shadow-md">
            <h3 className="text-xl font-bold font-apfelregular my-2">Online Booking</h3>
            <p className="text-sm font-euclidlight">Give your clients easy access to your services, price list and calendar by creating a mini web page to take bookings. Clients can book via your social media or website.</p>
          </div>
          <div className="bg-[#8878d7] text-white p-4 rounded-2xl shadow-md">
            <h3 className="text-xl font-bold font-apfelregular my-2">Payment Processing</h3>
            <p className="text-sm font-euclidlight">Deliver a silky-smooth, ultra-fast checkout and tipping experience your clients will love. We’re here to help with questions on refunds, transactions, and payment summaries too.</p>
          </div>
          <div className="bg-[#8878d7] text-white rounded-2xl  p-4 shadow-md my-2">
            <h3 className="text-xl font-bold font-apfelregular">Flexible appointment scheduling</h3>
            <p className="text-sm font-euclidlight">Make your schedule available anytime, anywhere. Never miss a booking, we automate appointment scheduling so you can focus on what’s important, your clients!</p>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default FeaturesSection;
