import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menuItems = [
    { title: 'Trang Chủ', href: '#' },
    { title: 'Giới Thiệu', href: '#' },
    { 
      title: 'Khóa Học',
      href: '#',
      submenu: [
        { title: 'Toán Tiểu Học', href: '#' },
        { title: 'Toán THCS', href: '#' },
        { title: 'Toán THPT', href: '#' },
        { title: 'Tiếng Việt Tiểu Học', href: '#' },
        { title: 'Ôn luyện thi Ngữ văn THCS', href: '#' }
      ]
    },
    { 
      title: 'Tài Liệu',
      href: '#',
      submenu: [
        { title: 'Đề thi', href: '#' },
        { title: 'THCS', href: '#' },
        { title: 'Tiểu học', href: '#' },
        { title: 'Sách', href: '#' }
      ]
    },
    { title: 'Liên Hệ', href: '#' },
    {
      title: 'Khác',
      href: '#',
      submenu: [
        { title: 'Chính Sách', href: '#' },
        { title: 'Sự Kiện', href: '#' }
      ]
    }
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 
          ${isScrolled 
            ? 'bg-slate-400 backdrop-blur-sm shadow-lg py-2' 
            : 'bg-white py-4'
          }`}
      >
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between">
            {/* Logo Section */}
            <div className="flex items-center space-x-3">
              <img
                src="/Logo.png"
                alt="6T Math CLUB"
                className="w-[120px] h-[120px] rounded-lg object-cover"
              />
              <div className="flex flex-col">
                <h1 className="text-3xl font-bold">
                  <span className="bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 text-transparent bg-clip-text">
                    6T Math CLUB
                  </span>
                </h1>
                <p className="text-sm text-gray-600 font-medium">Khơi nguồn tri thức</p>
              </div>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-8">
              {menuItems.map((item, index) => (
                <div key={index} className="relative group">
                  <a
                    href={item.href}
                    className="text-gray-700 font-medium hover:text-pink-500 py-2 transition-colors duration-200
                      relative after:content-[''] after:absolute after:left-0 after:bottom-0 text-xl
                      after:w-0 after:h-0.5 after:bg-pink-500 after:transition-all after:duration-300
                      hover:after:w-full group-hover:text-pink-500"
                  >
                    {item.title}
                  </a>
                  {item.submenu && (
                    <div className="absolute left-0 mt-2 w-56 opacity-0 invisible group-hover:opacity-100 
                      group-hover:visible transition-all duration-200 transform translate-y-2 
                      group-hover:translate-y-0 z-50">
                      <div className="bg-white rounded-lg shadow-xl py-2 border border-gray-100">
                        {item.submenu.map((subItem, subIndex) => (
                          <a
                            key={subIndex}
                            href={subItem.href}
                            className="block px-4 py-2 text-sm text-gray-700 hover:bg-pink-50 
                              hover:text-pink-500 transition-colors duration-200"
                          >
                            {subItem.title}
                          </a>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ))}
              <button className="bg-gradient-to-r from-pink-500 to-purple-600 text-white py-2.5 px-6 
                rounded-full hover:shadow-lg hover:scale-105 transition-all duration-200 
                font-medium focus:outline-none focus:ring-2 focus:ring-pink-500 focus:ring-offset-2">
                Tuyển sinh
              </button>
            </nav>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors duration-200"
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6 text-gray-700" />
              ) : (
                <Menu className="w-6 h-6 text-gray-700" />
              )}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="lg:hidden fixed inset-0 bg-black bg-opacity-50 z-40" 
             onClick={() => setIsMobileMenuOpen(false)} />
      )}

      {/* Mobile Navigation */}
      <div
        className={`lg:hidden fixed top-[140px] left-0 right-0 bg-white shadow-lg 
          transition-all duration-300 z-40 max-h-[calc(100vh-140px)] overflow-y-auto
          ${isMobileMenuOpen ? 'translate-y-0' : '-translate-y-full'}`}
      >
        <nav className="container mx-auto px-4 py-4">
          {menuItems.map((item, index) => (
            <div key={index} className="border-b border-gray-100 last:border-0">
              <a
                href={item.href}
                className="block py-3 text-lg font-medium text-gray-700 hover:text-pink-500 
                  transition-colors duration-200"
              >
                {item.title}
              </a>
              {item.submenu && (
                <div className="pl-4 pb-3 space-y-2">
                  {item.submenu.map((subItem, subIndex) => (
                    <a
                      key={subIndex}
                      href={subItem.href}
                      className="block py-2 text-gray-600 hover:text-pink-500 
                        transition-colors duration-200"
                    >
                      {subItem.title}
                    </a>
                  ))}
                </div>
              )}
            </div>
          ))}
          <button className="w-full mt-4 bg-gradient-to-r from-pink-500 to-purple-600 
            text-white py-3 px-6 rounded-full hover:shadow-lg transition-all duration-200 
            font-medium focus:outline-none focus:ring-2 focus:ring-pink-500 focus:ring-offset-2">
            Tuyển sinh
          </button>
        </nav>
      </div>
    </>
  );
};

export default Header;