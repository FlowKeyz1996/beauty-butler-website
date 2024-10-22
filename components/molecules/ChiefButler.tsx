import React, { useState } from 'react';

const ChiefButler: React.FC = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpansion = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className="w-full mx-auto p-6 rounded-t-3xl max-w-6xl my-5">
      <h2 className="text-3xl sm:text-5xl text-center py-5 font-apfelmittel mb-9 ">Meet the Chief Butler</h2>
      <div className="flex flex-col md:flex-row justify-center items-start">
        <div className="w-full md:w-1/2 mb-6 md:mb-0">
          <img 
            src="/chiefbutlerimg.svg" 
            alt="Chief Butler" 
            className="w-full h-auto rounded-lg mx-auto md:pr-14"
          />
          <h3 className="text-2xl sm:text-4xl mt-4 text-center font-apfelmittel">Chinny Eze</h3>
          <p className="text-lg sm:text-xl text-[#8878d8] text-center font-euclidmedium my-1">CEO/Founder</p>
        </div>
        <div className="w-full md:w-1/2 md:pl-8">
          <p className="text-lg max-w-2xl md:max-w-none text-[#475467] leading-relaxed font-euclidlight">
            In today’s hustle culture, time feels like gold. And if you’re anything like me, balancing a career, a social life, and a beauty routine felt like trying to ride a unicycle while juggling—impossible. I’d go from being "that girl" who’s got everything under control to frantically Googling “best spa near me” at 2 a.m., hoping the beauty gods would cut me some slack.
            <br /><br />
            I remember thinking: Why is getting the beauty services we deserve such a struggle? Why can’t it be on our time, on our terms? I wanted a solution that was effortless, where looking amazing didn’t mean sacrificing everything else. That’s when the idea for <span className="font-euclidmedium text-black">Beauty Butler </span>came to life.
            <br /><br />
           
            I wanted to create something for women like us—<span className="font-euclidmedium text-black">Gen Z and Millennial women </span>who juggle careers, side hustles, and self-care with ease but still want to look flawless. Beauty Butler is more than just a convenience—it’s the ultimate <span className="font-euclidmedium">on-demand beauty and wellness experience.</span> I wanted something that matched our hustle and glow-up energy—a way to book a beauty service as easily as ordering a latte.
            {isExpanded && (
              <>
                <br /><br />
                
                Beauty Butler is more than just an app. <span className="font-euclidmedium text-black">It’s a lifestyle.</span> It’s about owning your self-care without ever compromising your grind. With Beauty Butler, you can access the top beauty services anytime, anywhere, because you deserve to feel incredible—on your terms.
                <br /><br />
                Here’s the real magic: Beauty Butler isn’t just about convenience; it’s about belonging. It’s about being part of a community of women who are out there smashing their goals just like you. Because beauty isn’t just skin deep—it’s about how you feel, and we’re here to make sure you feel <span className="font-euclidmedium text-black">unstoppable.</span>
                <br /><br />
                To make it even more exciting, we're changing the game for the beauty industry. <span className="font-euclidmedium text-black">Beauty Butler is a lifeline for beauty professionals.</span> We see the hustle, the grind, and the passion it takes to perfect your craft and grow your brand. Beauty Butler connects you with clients instantly, opening doors, growing your business, and letting you focus on what you do best—making people feel amazing. This is where self-care feels seamless, and running a beauty business feels empowering.
                <br /><br />
                And trust me, we’re just getting started. Beauty Butler is a revolution. We’re building this for you, with you. Whether you’re a beauty enthusiast, a wellness warrior, or a dedicated beauty professional, this is your moment. <span className="font-euclidmedium text-black"> Welcome to the future of beauty and wellness.</span>
              </>
            )}
            <button 
              onClick={toggleExpansion} 
              className="text-[#8878d8] ml-2 font-euclidmedium"
            >
              {isExpanded ? 'See Less' : 'See More'}
            </button>
          </p>
        </div>
      </div>
    </div>
  );
};

export default ChiefButler;
