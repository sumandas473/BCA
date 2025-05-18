import React from "react";
import { FaRegClock } from "react-icons/fa";
import { FaLayerGroup } from "react-icons/fa6";

const courses = Array(8).fill({
  title: "AWS Certified solutions Architect",
  category: "Design",
  duration: "3 Month",
  author: "Lina",
  price: "3000",
  originalPrice: "5000",
  image: "https://www.interviewbit.com/blog/wp-content/uploads/2023/05/Artboard-1-copy.jpg",
});

export default function AllCourses() {
  return (
    <section className="w-full flex justify-center items-center py-10">
      <div className="w-[95%] xl:w-[70%] px-4 py-6 rounded-xl backdrop-blur-2xl bg-white/30 flex justify-center items-center">
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6  items-center">
          {courses.map((course, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 max-w-72 max-h-96"
            >
              {/* Image */}
              <div className="w-full aspect-video">
                <img
                  src={course.image}
                  alt={course.title}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Content */}
              <div className="p-2 md:p-4 flex flex-col gap-3">
                {/* Category & Duration */}
                <div className="flex justify-between text-sm text-gray-500">
                  <div className="flex items-center gap-1">
                    <FaLayerGroup />
                    <span className="text-[10px]">{course.category}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <FaRegClock />
                    <span className="text-[10px]">{course.duration}</span>
                  </div>
                </div>

                {/* Title */}
                <h2 className="md:text-base font-semibold text-gray-900 text-sm">
                  {course.title}
                </h2>

                {/* Description */}
                <p className="md:text-sm text-gray-500 leading-snug text-[8px]">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                </p>

                {/* Footer */}
                <div className="flex justify-between items-center mt-2">
                  {/* Author */}
                  <div className="flex items-center gap-2">
                    <img
                      src="https://randomuser.me/api/portraits/women/44.jpg"
                      className="w-8 h-8 rounded-full object-cover"
                      alt="author"
                    />
                    <span className="text-sm font-medium">{course.author}</span>
                  </div>
                  {/* Price */}
                  <div className="text-right">
                    <p className="line-through md:text-xs text-[8px] text-gray-400">Rs: {course.originalPrice}</p>
                    <p className="text-green-600 font-bold md:text-sm text-[10px]">Rs: {course.price}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

