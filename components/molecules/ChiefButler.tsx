// components/ChiefButler.tsx
import React from 'react';

const ChiefButler: React.FC = () => {
  return (
    <div className="w-full mx-auto  p-6 rounded-t-3xl max-w-6xl my-5">
      <h2 className="text-4xl font-bold  text-center my-10 py-5 font-apfelregular">Meet the Chief Butler</h2>
      <div className="flex flex-col md:flex-row justify-center items-start">
        <div className="w-full md:w-1/2 mb-6 md:mb-0">
          <img 
            src="/chiefbutlerimg.svg" 
            alt="Chief Butler" 
            className="w-full h-auto rounded-lg"
          />
          <h3 className="text-4xl font-semibold mt-4 text-center font-apfelregular">Chinny Eze</h3>
          <p className="text-xl text-[#8878d8] text-center font-euclidmedium my-1">CEO/Founder</p>
        </div>
        <div className="w-full md:w-1/2 md:pl-8">
          <p className="text-lg max-w-2xl md:max-w-none leading-relaxed font-euclidmedium">
            In today’s hustle culture, time feels like gold. And if you’re anything like me, balancing a career, a social life, and a beauty routine felt like trying to ride a unicycle while juggling—impossible. I’d go from being "that girl" who’s got everything under control to frantically Googling “best spa near me” at 2 a.m., hoping the beauty gods would cut me some slack.
            <br /><br />
            I remember thinking: Why is getting the beauty services we deserve such a struggle? Why can’t it be on our time, on our terms? I wanted a solution that was effortless, where looking amazing didn’t mean sacrificing everything else. That’s when the idea for Beauty Butler came to life.
            <br /><br />
            I wanted to create something for women like us—Gen Z and Millennial women who juggle careers, side hustles, and self-care with ease but still want to look flawless. Beauty Butler is more than just a convenience—it’s the ultimate on-demand beauty and wellness experience. I wanted something that matched our hustle and glow-up energy—a way to book a beauty service as easily as ordering a latte.
            <br /><br />
            Beauty Butler is more than just an app. It’s a lifestyle. It’s about owning your self-care without ever compromising your grind. With Beauty Butler, you can access the top beauty services anytime, anywhere, because you deserve to feel incredible—on your terms.
            <br /><br />
            Here’s the real magic: Beauty Butler isn’t just about convenience; it’s about belonging. It’s about being part of a community of women who are out there smashing their goals just like you. Because beauty isn’t just skin deep—it’s about how you feel, and we’re here to make sure you feel unstoppable.
            <br /><br />
            To make it even more exciting, we're changing the game for the beauty industry. Beauty Butler is a lifeline for beauty professionals. We see the hustle, the grind, and the passion it takes to perfect your craft and grow your brand. Beauty Butler connects you with clients instantly, opening doors, growing your business, and letting you focus on what you do best—making people feel amazing. This is where self-care feels seamless, and running a beauty business feels empowering.
            <br /><br />
            And trust me, we’re just getting started. Beauty Butler is a revolution. We’re building this for you, with you. Whether you’re a beauty enthusiast, a wellness warrior, or a dedicated beauty professional, this is your moment. Welcome to the future of beauty and wellness.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ChiefButler;
