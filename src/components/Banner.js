import React, { useState, useEffect } from 'react';

const images = [
  '/Banner/images (1).jpeg', // Đường dẫn chính xác từ thư mục public
  '/Banner/images.jpeg',
  // Thêm các hình ảnh khác nếu cần
];

function Banner() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [fade, setFade] = useState(true); // Thêm trạng thái để điều khiển hiệu ứng fade

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false); // Bắt đầu hiệu ứng fade out
      setTimeout(() => {
        setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
        setFade(true); // Bắt đầu hiệu ứng fade in
      }, 1000); // Thời gian fade out
    }, 4000); // Thay đổi hình ảnh mỗi 4 giây

    return () => clearInterval(interval); // Dọn dẹp interval khi component unmount
  }, []);

  return (
    <section className="relative w-full h-[900px] h-screen">
      {/* Hình nền */}
      <img
        src={images[currentImageIndex]}
        alt="Banner"
        className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ease-in-out ${fade ? 'opacity-100' : 'opacity-0'}`} // Hiệu ứng chuyển tiếp
      />

      {/* Overlay gradient (tuỳ chọn) */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 to-black/70"></div>
    </section>
  );
}

export default Banner;
