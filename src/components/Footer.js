import React from 'react';
import { Phone, Mail, MapPin, Facebook, Instagram, Youtube } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-sky-100 to-blue-100 py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Column 1: Câu lạc bộ Info */}
          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-blue-800 mb-6">
              Câu lạc bộ Toán học 6T Math
            </h2>
            <div className="space-y-3">
              <div className="flex items-start space-x-2">
                <MapPin className="w-5 h-5 text-blue-600 mt-1 flex-shrink-0" />
                <div className="text-gray-600">
                  <p>CS1: Xóm Chùa - Hòa Xá - Ứng Hòa -Hà Nội</p>
                  
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="w-5 h-5 text-blue-600" />
                <p className="text-gray-600">
                  0397225769 - 0973748523
                </p>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="w-5 h-5 text-blue-600" />
                <p className="text-gray-600">info@cskh.6Tmathclb.edu.vn</p>
              </div>
            </div>
          </div>

          {/* Column 2: YouTube */}
          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-blue-800 mb-6">
              Đăng ký kênh Youtube
            </h2>
            <div className="bg-white rounded-lg shadow-md p-4">
              <img 
                src="/api/placeholder/200/100" 
                alt="YouTube Subscribe" 
                className="w-full h-auto rounded"
              />
            </div>
          </div>

          {/* Column 3: Follow Me */}
          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-blue-800 mb-6">
              Follow Me
            </h2>
            <div className="bg-white rounded-lg shadow-md p-4">
              <img 
                src="/api/placeholder/200/100" 
                alt="Facebook Page" 
                className="w-full h-auto rounded"
              />
            </div>
            
            {/* Social Media Icons */}
            <div className="flex space-x-4 mt-6">
              <a href="https://instagram.com" className="transform hover:scale-110 transition-transform duration-200">
                <Instagram className="w-8 h-8 text-blue-600 hover:text-blue-700" />
              </a>
              <a href="https://facebook.com/clbtoanhocmuonmau" className="transform hover:scale-110 transition-transform duration-200">
                <Facebook className="w-8 h-8 text-blue-600 hover:text-blue-700" />
              </a>
              <a href="https://youtube.com" className="transform hover:scale-110 transition-transform duration-200">
                <Youtube className="w-8 h-8 text-blue-600 hover:text-blue-700" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Copyright */}
        <div className="mt-12 pt-4 border-t border-blue-200">
          <p className="text-center text-gray-600">
            Bản quyền thuộc về 6T Math Club
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;