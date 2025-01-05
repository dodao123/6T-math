import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const NewsCard = ({ date, title }) => {
  return (
    <motion.div
      className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300"
      whileHover={{ y: -5 }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="p-6">
        <p className="text-gray-500 text-sm mb-2">{date}</p>
        <h3 className="text-lg font-semibold text-blue-600 hover:text-blue-700 transition-colors duration-300 mb-4">
          {title}
        </h3>
        <div className="flex items-center text-blue-500 hover:text-blue-600 transition-colors duration-300 group">
          <span className="text-sm font-medium">Xem thêm</span>
          <ArrowRight className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform duration-300" />
        </div>
      </div>
    </motion.div>
  );
};

const NewsSection = () => {
  const news = [
    {
      date: '29/09/2024',
      title: 'Áp dụng tư duy chiến lược trong học tập hiệu quả'
    },
    {
      date: '29/09/2024',
      title: 'Phương pháp ghi chép Cornell ghi nhớ vượt trội'
    },
    {
      date: '29/09/2024',
      title: '7 Cách ghi chép thông minh cho học sinh cấp 2, cấp 3'
    }
  ];

  return (
    <div className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold text-blue-600 mb-2">
            Tin tức & Sự kiện
          </h2>
          <div className="w-24 h-1 bg-yellow-400 mx-auto rounded-full" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {news.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <NewsCard date={item.date} title={item.title} />
            </motion.div>
          ))}
        </div>

        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <button className="bg-blue-600 text-white px-8 py-3 rounded-full hover:bg-blue-700 transition-colors duration-300 flex items-center mx-auto group">
            <span>Xem tất cả tin tức</span>
            <ArrowRight className="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform duration-300" />
          </button>
        </motion.div>
      </div>
    </div>
  );
};

export default NewsSection;