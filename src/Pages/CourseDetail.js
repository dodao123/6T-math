import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { BookOpen, Clock, DollarSign, Calendar, Trophy, User, Star, ChevronRight } from 'lucide-react';
import { courses } from '../data/CourseDetailData';


const CourseDetail = () => {
  const { id } = useParams();
  const [activeTab, setActiveTab] = useState('overview');
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading
    setTimeout(() => setIsLoading(false), 1000);
  }, []);

  useEffect(() => {
    // Cuộn lên đầu trang khi component được mount
    window.scrollTo(0, 0);

    // Simulate loading
    setTimeout(() => setIsLoading(false), 1000);
  }, []);

  // Floating animation for background elements
  const floatingAnimation = {
    y: ['-10px', '10px'],
    transition: {
      duration: 2,
      repeat: Infinity,
      repeatType: 'reverse',
      ease: 'easeInOut'
    }
  };

  const course = courses.find(course => course.id === parseInt(id));

  if (isLoading) {
    return (
      <div className="h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-50">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 360]
          }}
          transition={{
            duration: 2,
            repeat: Infinity
          }}
          className="w-16 h-16 border-4 border-blue-500 border-t-transparent rounded-full"
        />
      </div>
    );
  }

  if (!course) {
    return (
      <div className="flex items-center justify-center h-screen">
        <h1 className="text-2xl font-bold text-gray-600">Khóa học không tồn tại.</h1>
      </div>
    );
  }

  return (
    <div className="min-h-screen mt-[120px] bg-gradient-to-br from-blue-50 to-indigo-50 py-8 relative overflow-hidden">
      {/* Decorative Background Elements */}
      <motion.div
        className="absolute top-20 right-20 w-32 h-32 rounded-full bg-blue-200 opacity-20"
        animate={floatingAnimation}
      />
      <motion.div
        className="absolute bottom-40 left-20 w-24 h-24 rounded-full bg-indigo-200 opacity-20"
        animate={floatingAnimation}
      />
      <motion.div
        className="absolute top-60 left-40 w-16 h-16 rounded-full bg-purple-200 opacity-20"
        animate={floatingAnimation}
      />

      <motion.div 
        className="container mx-auto px-4 relative"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        {/* Header Section with Enhanced Design */}
        <motion.div 
          className={`${course.color} rounded-2xl p-8 text-white mb-8 shadow-2xl relative overflow-hidden`}
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          {/* Decorative elements in header */}
          <div className="absolute top-0 right-0 w-32 h-32 bg-white opacity-10 transform rotate-45 translate-x-16 -translate-y-16" />
          <div className="absolute bottom-0 left-0 w-24 h-24 bg-white opacity-10 rounded-full -translate-x-12 translate-y-12" />
          
          <motion.h1 
            className="text-4xl font-bold mb-4"
            initial={{ x: -20 }}
            animate={{ x: 0 }}
            transition={{ delay: 0.2 }}
          >
            {course.title}
          </motion.h1>
          <motion.p 
            className="text-lg opacity-90"
            initial={{ x: -20 }}
            animate={{ x: 0 }}
            transition={{ delay: 0.3 }}
          >
            {course.description}
          </motion.p>
        </motion.div>

        {/* Enhanced Info Cards */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8"
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          {[
            { icon: Clock, color: 'text-blue-500', label: 'Thời lượng', value: course.duration },
            { icon: DollarSign, color: 'text-green-500', label: 'Học phí', value: course.price },
            { icon: Calendar, color: 'text-purple-500', label: 'Lịch học', value: course.schedule }
          ].map((item, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-xl shadow-lg p-6 transform hover:scale-105 transition-transform duration-300"
              whileHover={{ y: -5 }}
            >
              <div className="flex items-center space-x-4">
                <div className={`p-3 rounded-lg ${item.color} bg-opacity-10`}>
                  <item.icon className={`w-6 h-6 ${item.color}`} />
                </div>
                <div>
                  <p className="text-sm text-gray-500">{item.label}</p>
                  <p className="font-semibold">{item.value}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Enhanced Tab Navigation */}
        <div className="flex space-x-2 mb-6 overflow-x-auto bg-white p-2 rounded-lg shadow-md">
          {[
            { id: 'overview', label: 'Tổng quan', icon: BookOpen },
            { id: 'objectives', label: 'Mục tiêu', icon: Trophy },
            { id: 'teacher', label: 'Giảng viên', icon: User },
            { id: 'highlights', label: 'Điểm nổi bật', icon: Star }
          ].map(tab => (
            <motion.button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-all duration-300 ${
                activeTab === tab.id
                  ? 'bg-blue-500 text-white'
                  : 'bg-transparent text-gray-600 hover:bg-gray-100'
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <tab.icon className="w-4 h-4" />
              <span>{tab.label}</span>
            </motion.button>
          ))}
        </div>

        {/* Enhanced Tab Content */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="bg-white rounded-xl p-8 shadow-xl backdrop-blur-lg backdrop-filter"
          >
            {activeTab === 'overview' && (
              <div className="space-y-4">
                <h2 className="text-2xl font-bold mb-6 text-gray-800">Tổng quan khóa học</h2>
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.2 }}
                >
                  {course.description}
                </motion.p>
              </div>
            )}

            {activeTab === 'objectives' && (
              <div className="space-y-6">
                <h2 className="text-2xl font-bold mb-6 text-gray-800">Mục tiêu khóa học</h2>
                {course.objectives.map((objective, index) => (
                  <motion.div
                    key={index}
                    className="flex items-start space-x-4 bg-blue-50 p-4 rounded-lg"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ scale: 1.02 }}
                  >
                    <Trophy className="w-6 h-6 text-yellow-500 flex-shrink-0 mt-1" />
                    <p>{objective}</p>
                  </motion.div>
                ))}
              </div>
            )}

            {activeTab === 'teacher' && (
              <div className="space-y-6">
                <h2 className="text-2xl font-bold mb-6 text-gray-800">Thông tin giảng viên</h2>
                <motion.div
                  className="flex flex-col md:flex-row items-center md:items-start space-y-4 md:space-y-0 md:space-x-6 bg-gradient-to-br from-blue-50 to-indigo-50 p-6 rounded-xl"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="relative">
                    <motion.div
                      className="absolute inset-0 bg-blue-500 rounded-full opacity-20"
                      animate={{ scale: [1, 1.1, 1] }}
                      transition={{ duration: 2, repeat: Infinity }}
                    />
                    <img
                      src={course.teacher.profileImage}
                      alt={course.teacher.name}
                      className="w-32 h-32 rounded-full object-cover relative z-10"
                    />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-800">{course.teacher.name}</h3>
                    <p className="text-blue-600 font-medium">{course.teacher.specialization}</p>
                    <p className="text-gray-600 mt-2">{course.teacher.experience}</p>
                  </div>
                </motion.div>
              </div>
            )}

            {activeTab === 'highlights' && (
              <div className="space-y-6">
                <h2 className="text-2xl font-bold mb-6 text-gray-800">Điểm nổi bật</h2>
                {course.highlights.map((highlight, index) => (
                  <motion.div
                    key={index}
                    className="bg-gradient-to-r from-blue-50 to-indigo-50 p-4 rounded-lg flex items-center space-x-3"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ x: 10 }}
                  >
                    <ChevronRight className="w-5 h-5 text-blue-500" />
                    <p>{highlight}</p>
                  </motion.div>
                ))}
              </div>
            )}
          </motion.div>
        </AnimatePresence>

        {/* Enhanced Call to Action */}
        <a href='/contact'>
        <motion.div 
          className="mt-8 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
        >
          <motion.button 
            className="bg-blue-500 text-white px-8 py-3 rounded-lg shadow-lg hover:bg-blue-600 transition-colors duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Đăng ký ngay
          </motion.button>
        </motion.div>
        </a>
      </motion.div>
    </div>
  );
};

export default CourseDetail;