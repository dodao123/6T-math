import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ChevronLeft, ChevronRight, BookOpen, Users, Clock } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const CourseCard = ({ title, description, color, id }) => {
  return (
    <Link to={`/course/${id}`} className="block outline-none h-[90%] m-4 ">
      <motion.div
        whileHover={{ 
          scale: 1.03,
          y: -8,
          transition: { duration: 0.2 }
        }}
        className="h-full"
      >
        <div
          className={`${color} p-8 rounded-3xl shadow-xl h-full mx-2 flex flex-col justify-between
          backdrop-blur-lg bg-opacity-95 border border-white/30 
          hover:shadow-2xl transition-all duration-300 relative overflow-hidden`}
        >
          <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -mr-16 -mt-16 blur-2xl" />
          <div className="absolute bottom-0 left-0 w-24 h-24 bg-black/10 rounded-full -ml-12 -mb-12 blur-xl" />
          
          <div className="space-y-6 relative z-10">
            <div className="space-y-4">
              <h3 className="text-white font-bold text-2xl tracking-wide leading-tight">
                {title}
              </h3>
              <p className="text-white/90 text-base leading-relaxed">
                {description}
              </p>
            </div>

            <div className="flex flex-wrap gap-4 mt-4">
              <div className="flex items-center gap-2 bg-white/20 px-4 py-2 rounded-xl">
                <BookOpen className="w-4 h-4 text-white" />
                <span className="text-white text-sm">12 bài học</span>
              </div>
              <div className="flex items-center gap-2 bg-white/20 px-4 py-2 rounded-xl">
                <Users className="w-4 h-4 text-white" />
                <span className="text-white text-sm">200+ học viên</span>
              </div>
              <div className="flex items-center gap-2 bg-white/20 px-4 py-2 rounded-xl">
                <Clock className="w-4 h-4 text-white" />
                <span className="text-white text-sm">24 giờ</span>
              </div>
            </div>
          </div>
          
          <div className="mt-8 flex items-center justify-between relative z-10">
            <motion.div 
              className="bg-white hover:bg-white/90 px-6 py-3 rounded-2xl group transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className={`${color.replace('bg-gradient-to-br', 'text')} font-semibold`}>
                Xem chi tiết
              </span>
            </motion.div>
            <motion.div 
              className="w-12 h-12 bg-white/20 rounded-2xl flex items-center justify-center
              backdrop-blur-lg hover:bg-white/30 transition-all duration-300"
              whileHover={{ scale: 1.1, rotate: 10 }}
              whileTap={{ scale: 0.9 }}
            >
              <ChevronRight className="text-white w-6 h-6" />
            </motion.div>
          </div>
        </div>
      </motion.div>
    </Link>
  );
};

const CourseCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const [visibleCount, setVisibleCount] = useState(getInitialVisibleCount());
  const [containerWidth, setContainerWidth] = useState(0);

  const courses = [
    {
      title: "ÔN LUYỆN THI TOÁN LỚP 12",
      description: "Khóa học Toán nâng cao lớp 12 dành cho các học sinh nhằm nâng cao điểm số, dạng bài tập nâng cao.",
      color: "bg-gradient-to-br from-blue-500 to-blue-700",
      id: 12,
    },
    {
      title: "ÔN LUYỆN THI TOÁN LỚP 11",
      description: "Toán chuyên lớp 11 với các chuyên đề trọng tâm, giúp học sinh phát triển tư duy và kỹ năng giải toán.",
      color: "bg-gradient-to-br from-amber-400 to-amber-600",
      id: 11,
    },
    {
      title: "ÔN LUYỆN THI TOÁN LỚP 10",
      description: "Khóa học chuyên sâu với phương pháp giảng dạy hiện đại, tập trung vào việc rèn luyện kỹ năng giải toán.",
      color: "bg-gradient-to-br from-rose-400 to-rose-600",
      id: 10,
    },
    {
      title: "ÔN LUYỆN THI TOÁN LỚP 9",
      description: "Chương trình toán chất lượng cao, giúp học sinh chuẩn bị tốt cho kỳ thi vào lớp 10 với độ khó tăng dần.",
      color: "bg-gradient-to-br from-emerald-400 to-emerald-600",
      id: 9,
    },
    {
      title: "ÔN LUYỆN THI TOÁN LỚP 8",
      description: "Khóa học tập trung vào các chuyên đề quan trọng, giúp học sinh xây dựng nền tảng vững chắc.",
      color: "bg-gradient-to-br from-purple-400 to-purple-600",
      id: 8,
    },
    {
      title: "ÔN LUYỆN THI TOÁN LỚP 7",
      description: "Chương trình học với phương pháp tiếp cận mới, giúp học sinh phát triển tư duy logic và sáng tạo.",
      color: "bg-gradient-to-br from-red-400 to-red-600",
      id: 7,
    }
  ];

  function getInitialVisibleCount() {
    if (typeof window !== 'undefined') {
      if (window.innerWidth < 768) return 1;
      if (window.innerWidth < 1024) return 2;
      if (window.innerWidth < 1536) return 3;
      return 4;
    }
    return 4;
  }

  useEffect(() => {
    const handleResize = () => {
      const newVisibleCount = getInitialVisibleCount();
      setVisibleCount(newVisibleCount);
      setCurrentIndex(prev => 
        Math.min(prev, Math.max(0, courses.length - newVisibleCount))
      );
      
      // Update container width
      const container = document.querySelector('.carousel-container');
      if (container) {
        setContainerWidth(container.offsetWidth);
      }
    };

    handleResize(); // Initial call
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [courses.length]);

  const canScrollLeft = currentIndex > 0;
  const canScrollRight = currentIndex < courses.length - visibleCount;

  const nextSlide = () => {
    if (canScrollRight) {
      setDirection(1);
      setCurrentIndex(prev => prev + 1);
    }
  };

  const prevSlide = () => {
    if (canScrollLeft) {
      setDirection(-1);
      setCurrentIndex(prev => prev - 1);
    }
  };

  const slideWidth = containerWidth / visibleCount;

  return (
    <div className="w-full scale-90 max-w-[1536px] mx-auto px-6 py-16 mt-16">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center space-y-6 mb-16 "
        style={{
          backgroundImage: "linear-gradient(to right, lightblue, white)",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800 tracking-tight scale-95">
          Các khóa học
        </h2>
        <p className="text-gray-600 text-lg max-w-2xl mx-auto">
          Khám phá các khóa học chất lượng cao, được thiết kế để giúp bạn đạt được mục tiêu học tập
        </p>
        <div className="h-1.5 w-24 bg-blue-500 mx-auto rounded-full"/>
      </motion.div>
      
      <div className="relative">
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={prevSlide}
          disabled={!canScrollLeft}
          className={`absolute -left-4 md:-left-8 top-1/2 opacity-90 -translate-y-1/2 z-10 
          ${canScrollLeft ? 'bg-white/90 hover:bg-white cursor-pointer scale-95' : 'bg-gray-100 cursor-not-allowed'}
          p-3 md:p-5 rounded-2xl shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transform-gpu
          backdrop-blur-sm border border-gray-100 transition-all duration-300`}
        >
          <ChevronLeft size={28} className={canScrollLeft ? 'text-gray-700' : 'text-gray-400'} />
        </motion.button>

        <div className="overflow-hidden carousel-container">
          <motion.div 
            className="flex"
            animate={{ 
              x: -currentIndex * slideWidth
            }}
            transition={{ 
              type: "spring",
              stiffness: 150,
              damping: 20
            }}
            style={{
              gap: '0rem'
            }}
          >
            {courses.map((course, index) => (
              <motion.div
                key={course.id}
                className="flex-none"
                style={{
                  width: `${100/visibleCount}%`,
                  paddingLeft: '0.5rem',
                  paddingRight: '0.5rem'
                }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <CourseCard {...course} />
              </motion.div>
            ))}
          </motion.div>
        </div>

        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={nextSlide}
          disabled={!canScrollRight}
          className={`absolute -right-4 md:-right-8 top-1/2 opacity-90 -translate-y-1/2 z-10 
          ${canScrollRight ? 'bg-white/90 hover:bg-white cursor-pointer' : 'bg-gray-100 cursor-not-allowed'}
          p-3 md:p-5 rounded-2xl shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transform-gpu
          backdrop-blur-sm border border-gray-100 transition-all duration-300`}
        >
          <ChevronRight size={28} className={canScrollRight ? 'text-gray-700' : 'text-gray-400'} />
        </motion.button>
      </div>
    </div>
  );
};

export default CourseCarousel;