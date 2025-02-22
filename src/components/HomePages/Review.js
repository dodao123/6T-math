import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Review = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
      mirror: true
    });
    AOS.refresh();
  }, []);

  return (
    <section
      className="bg-sky-50 py-4 md:py-10 relative overflow-hidden w-full"
      style={{
        backgroundImage: `url('https://png.pngtree.com/thumb_back/fh260/background/20210326/pngtree-light-blue-cute-striped-baby-blue-background-image_594858.jpg')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Text Content */}
          <div className="space-y-6 md:space-y-8" data-aos="fade-right">
            <h2 
              className="text-4xl md:text-5xl font-bold border-b-4 border-yellow-400 pb-2 inline-block"
              data-aos="fade-down"
              data-aos-delay="200"
            >
              Về chúng tôi
            </h2>

            <div className="space-y-4 md:space-y-6">
              <p 
                className="text-gray-700 leading-relaxed text-xl md:text-xl"
                data-aos="fade-up"
                data-aos-delay="300"
              >
                Câu lạc bộ 6T MATH tiền thân là lớp Toán của cô Xuân, từ những năm 2007 cô giáo đã dạy gia sư cho từng học sinh, sau đó Phụ huynh thành lập nhóm mời cô giáo dạy. CLB được thành lập với mong muốn truyền cảm hứng các môn học cho nhiều bạn trẻ, khơi dậy tiềm năng và giúp các con làm chủ kiến thức, làm chủ tư duy toán học, tư duy công nghệ và công ty tài chính cũng như tương lai của bản thân các con.
              </p>
              <p 
                className="text-gray-700 leading-relaxed text-xl md:text-xl"
                data-aos="fade-up"
                data-aos-delay="400"
              >
                Giáo viên giảng dạy tại CLB gồm các thầy cô đến từ các trường có chất lượng và uy tín trên địa bàn Mỹ Đức, Ứng Hòa có chuyên môn giỏi với nhiều năm kinh nghiệm giảng dạy cho các bạn luyện thi điều kiện, luyện thi chuyên. Các thầy cô đều nhiệt tình, yêu trẻ, tận tâm và nhiệt huyết với nghề.
              </p>
            </div>
            
            <a href='/Introduction'>
              <button 
                className="bg-yellow-400 border-4 border-dashed border-yellow-400 text-gray-900 px-6 md:px-8 py-0 mt-10 md:py-3 rounded-md hover:bg-yellow-500 transition-colors text-lg md:text-xl font-semibold"
                data-aos="zoom-in"
                data-aos-delay="500"
              >
                Xem thêm
              </button>
            </a>
          </div>

          {/* Image Section - Desktop */}
          <div className="hidden md:block relative w-[750px] scale-95 h-[600px] left-0">
            <div 
              className="absolute right-0 top-0 right-25 w-96 h-96 rounded-full border-4 border-dashed border-blue-200 p-2"
              data-aos="zoom-in"
              data-aos-delay="200"
            >
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqZ2ycbFPldbdvLUpxNMgjglmtg79QWqT8JQ&s"
                alt="Student 1"
                className="rounded-full w-full h-full object-cover"
              />
            </div>
            <div 
              className="absolute left-0 top-36 w-80 h-80 rounded-full border-4 border-dashed border-yellow-400 p-2 z-10"
              data-aos="zoom-in"
              data-aos-delay="400"
            >
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-UdHBLsMHhwk8ap2mkTspd2_shacO1Jmhag&s"
                alt="Student 2"
                className="rounded-full w-full h-full object-cover"
              />
            </div>
            <div 
              className="absolute right-32 top-56 w-96 h-96 rounded-full border-4 border-dashed border-orange-400 p-2"
              data-aos="zoom-in"
              data-aos-delay="600"
            >
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT6wPsxz2nWaPRZgSVKBna6Y3uZA5jVCV0IBg&s"
                alt="Student 3"
                className="rounded-full w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Image Section - Mobile */}
          <div className="md:hidden flex flex-col items-center space-y-8">
            <div 
              className="w-64 h-64 rounded-full border-4 border-dashed border-blue-200 p-2"
              data-aos="zoom-in"
              data-aos-delay="200"
            >
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqZ2ycbFPldbdvLUpxNMgjglmtg79QWqT8JQ&s"
                alt="Student 1"
                className="rounded-full w-full h-full object-cover"
              />
            </div>
            <div 
              className="w-64 h-64 rounded-full border-4 border-dashed border-yellow-400 p-2"
              data-aos="zoom-in"
              data-aos-delay="400"
            >
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-UdHBLsMHhwk8ap2mkTspd2_shacO1Jmhag&s"
                alt="Student 2"
                className="rounded-full w-full h-full object-cover"
              />
            </div>
            <div 
              className="w-64 h-64 rounded-full border-4 border-dashed border-orange-400 p-2"
              data-aos="zoom-in"
              data-aos-delay="600"
            >
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT6wPsxz2nWaPRZgSVKBna6Y3uZA5jVCV0IBg&s"
                alt="Student 3"
                className="rounded-full w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Review;