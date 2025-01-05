import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const StudentCard = ({ student, isFeatured = false }) => {
  const [isHovered, setIsHovered] = useState(false);

  const cardClasses = `
    relative rounded-xl overflow-hidden
    ${isFeatured ? 'bg-gradient-to-r from-blue-500 to-purple-600' : 'bg-white'}
    transition-all duration-300 transform
    ${isFeatured ? 'shadow-2xl' : 'shadow-lg hover:shadow-xl'}
    ${isFeatured ? 'scale-105' : 'hover:scale-102'}
  `;

  return (
    <motion.div
      className={cardClasses}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative">
        <img
          src={student.image || "/api/placeholder/300/400"}
          alt={student.name}
          className={`w-full ${isFeatured ? 'h-96' : 'h-64'} object-cover transition-transform duration-500
            ${isHovered ? 'scale-110 blur-sm' : 'scale-100'}`}
        />
        <div className={`absolute inset-0 bg-gradient-to-t from-black/70 to-transparent
          transition-opacity duration-300 ${isHovered ? 'opacity-80' : 'opacity-50'}`} />
      </div>

      <div className={`absolute bottom-0 left-0 right-0 p-6 transform transition-transform duration-300
        ${isHovered ? 'translate-y-0' : 'translate-y-4'}`}>
        <h3 className={`text-${isFeatured ? '2xl' : 'xl'} font-bold mb-2 
          ${isFeatured ? 'text-white' : 'text-white'}`}>
          {student.name}
          {isFeatured && (
            <span className="ml-2 inline-block animate-bounce">👑</span>
          )}
        </h3>
        
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: isHovered ? 1 : 0 }}
          transition={{ duration: 0.3 }}
          className="space-y-2"
        >
          {student.achievements.map((achievement, index) => (
            <motion.p
              key={index}
              initial={{ x: -20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: index * 0.1 }}
              className={`text-sm ${isFeatured ? 'text-blue-100' : 'text-gray-200'}`}
            >
              • {achievement}
            </motion.p>
          ))}
        </motion.div>
      </div>
    </motion.div>
  );
};

const OutstandingStudents = () => {
  const students = [
    {
      name: "Vũ Minh Trang",
      image: "https://khoinguonsangtao.vn/wp-content/uploads/2022/06/avatar-anime-nu-sinh-toc-dai.jpg",
      achievements: [
        "Đạt điểm tuyệt đối môn Toán",
        "Giải nhì Olympic Tin học",
        "Leader nhóm học tập xuất sắc"
      ]
    },
    {
      name: "Phạm Hoàng Lâm",
      image: "https://nghethuat.vn/wp-content/uploads/2021/11/avatar-nu-deo-khau-trang-580x580.jpg",
      achievements: [
        "Thành viên CLB Toán cao cấp",
        "Đạt học bổng toàn phần",
        "Giải ba Olympic Vật lý"
      ]
    },
    {
      name: "Trần Đức Anh",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFHP_sHAPUPxAO6vcKg5_h_NY-fKzVqvWMQpIBR4-39sdU2dSUORqrnjSxedTnD8IVflI&usqp=CAU",
      achievements: [
        "Học sinh xuất sắc 3 năm liền",
        "Chứng chỉ Toán Quốc tế AMC",
        "Thành viên tiêu biểu của trường"
      ]
    },
    
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % students.length);
    }, 3000); // Thay đổi mỗi 3 giây

    return () => clearInterval(interval);
  }, [students.length]);

  return (
    <div className="container w-full mx-auto px-4 py-12 bg-gray-50">
      <motion.h1 
        className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-blue-600 to-purple-600 text-transparent bg-clip-text"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Học Sinh Xuất Sắc
      </motion.h1>

      <div className="max-w-7xl mx-auto">
        {/* Hiển thị một thẻ tại một thời điểm trên mobile */}
        <div className="block md:hidden">
          <StudentCard student={students[currentIndex]} />
        </div>

        {/* Hiển thị tất cả thẻ trên màn hình lớn */}
        <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {students.map((student, index) => (
            <StudentCard key={index} student={student} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default OutstandingStudents;