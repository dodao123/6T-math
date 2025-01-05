import React from 'react';

function AboutOur() {
  const data = [
    {
      title: 'Triết lý dạy học',
      description:
        'Tại Câu lạc bộ: Các thầy cô luôn có những phương pháp giảng dạy để truyền ngọn lửa đam mê môn học cho các con, giúp khơi gợi niềm say mê học tập.',
      icon: '🌱',
      bgColor: 'bg-green-200',
    },
    {
      title: 'Phương pháp giảng dạy',
      description:
        'Các bài học được thiết kế đòi hỏi các con tư duy, suy nghĩ theo chiều sâu, hướng tới mục tiêu giải bài học theo nhiều cách giải đa dạng, không rập khuôn, máy móc.',
      icon: '📘',
      bgColor: 'bg-blue-200',
    },
    {
      title: 'Đội ngũ giáo viên',
      description:
        'Giáo viên tại CLB đều là các thầy cô tận tâm, nhiệt tình, yêu trẻ, chuyên môn giỏi, có nhiều năm giảng dạy cho các con luyện thi chuyên, luyện thi điều kiện.',
      icon: '👩‍🏫',
      bgColor: 'bg-pink-200',
    },
    {
      title: 'Đánh giá học sinh',
      description:
        'Sau mỗi buổi học CLB đều gửi tình hình học tập của con tới Phụ huynh và cứ 2 tháng có bài kiểm tra đánh giá trình độ giúp giáo viên nắm bắt được sự tiến bộ của các con.',
      icon: '📊',
      bgColor: 'bg-yellow-200',
    },
  ];

  return (
    <section
      className="bg-gray-50 py-16 "
      style={{
        backgroundImage: `url('https://static.vecteezy.com/system/resources/thumbnails/004/709/149/small/grey-white-abstract-background-geometry-shine-and-layer-element-for-presentation-design-suit-for-business-corporate-institution-party-festive-seminar-and-talks-vector.jpg')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="container mx-auto px-6 text-center">
        {/* Đường kẻ màu vàng */}
        <div className="w-4/5 mx-auto border-b-4 border-yellow-400 mb-8"></div>

        <h2 className="text-5xl font-bold text-gray-800 mb-28">Vì sao chọn chúng tôi</h2>

        {/* Nội dung */}
        <div className="grid grid-cols-1 w-full md:grid-cols-2 lg:grid-cols-4 gap-8">
          {data.map((item, index) => (
            <div key={index} className="flex flex-col items-center">
              {/* Icon */}
              <div
                className={`w-24 h-24 flex items-center justify-center rounded-full ${item.bgColor}`}
              >
                <span className="text-9xl">{item.icon}</span>
              </div>

              {/* Tiêu đề */}
              <h3 className="text-3xl font-semibold text-gray-800 mt-20">{item.title}</h3>

              {/* Mô tả */}
              <p className="text-gray-600 mt-4 text-xl">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default AboutOur;
