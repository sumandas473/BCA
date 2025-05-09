import React from 'react';
import PropTypes from 'prop-types';
import SpotlightCard from '../SpotlightCard/SpotlightCard';
import CountUp from '../CountUp/CountUp';



const Stat = ({ label, value }) => (
  <div className="bg-[#111] p-4 xl:p-10 rounded-lg text-center w-full z-10">
    <div className="text-2xl font-bold">

      <CountUp
            from={0}
            to={value}
            separator=","
            direction="up"
            duration={2}
            className="count-up-text"
          />
    </div>
    <div className="text-sm text-gray-400">{label}</div>
  </div>
);

Stat.propTypes = {
  label: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
};

function Options() {
  return (
    <section className="text-white py-12 px-4 sm:px-6 md:px-20 bg-gradient-to-l from-[#06000c] via-[#10001f] to-[#06000c]">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row justify-between gap-10 mb-10">
          {/* LEFT */}
          <div className="flex-1">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-sans font-medium mb-4 leading-tight">
              Crack the Code to <br /> Success with Bengal Coding Academy
            </h1>
            <p className="text-base sm:text-lg text-gray-300 mb-6 max-w-xl">
              Elevate your programming skills, solve challenges, and unlock the world of coding possibilities.
            </p>

            <div className="flex flex-wrap gap-4 mb-6">
              <button className="bg-indigo-600 hover:bg-indigo-700 px-5 py-2 sm:px-6 sm:py-3 rounded-lg text-white font-semibold w-full sm:w-auto">
                View Courses
              </button>
              <button className="border border-gray-300 text-white px-5 py-2 sm:px-6 sm:py-3 rounded-lg font-semibold flex items-center justify-center gap-2 w-full sm:w-auto">
                Watch Video <span className="text-purple-400 font-bold">Live →</span>
              </button>
            </div>

            <div className="flex items-center gap-2 mb-6 flex-wrap">
              <div className="flex -space-x-3">
                {[...Array(6)].map((_, idx) => (
                  <img
                    key={idx}
                    src={`https://i.pravatar.cc/40?img=${idx + 1}`}
                    alt="avatar"
                    className="w-10 h-10 rounded-full border-2 border-black"
                  />
                ))}
              </div>
              <span className="text-white font-semibold mt-2 sm:mt-0">70,000+ Happy Students</span>
            </div>
          </div>

          {/* RIGHT */}
          <div className="flex-1 grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3  gap-4 xl:gap-6">
            {[
              'Dev Challenges',
              'Tutorials',
              'Articles',
              'Core CS Subjects',
              'Free Web Dev',
              'Interview Experiences',

            ].map((item, index) => (
              <button
                key={index}
                className="bg-black border border-b-gray-300 hover:shadow-lg hover:shadow-gray-300 hover:scale-105 duration-150 text-white font-bold py-3 px-4 rounded-lg text-center w-full"
              >
                {item}
              </button>
            ))}
          </div>
        </div>

        {/* STATS */}

        <SpotlightCard className="custom-spotlight-card grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-6 mt-10" spotlightColor="rgba(132, 0, 255, 1)">

          <Stat label="Subscribers on YouTube" value="5000"/>
          
            <Stat label="Followers on Twitter" value="6000" />
            <Stat label="Followers on Instagram" value="13000" />
            <Stat label="Followers on LinkedIn" value="5220" />
        </SpotlightCard>

      </div>
    </section>
  );
}

export default Options;
