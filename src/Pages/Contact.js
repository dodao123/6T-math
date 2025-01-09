import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, Loader2 } from 'lucide-react';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const [formData, setFormData] = useState({
    parentName: '',
    parentPhone: '',
    childName: '',
    address: '',
    childClass: '',
    message: '',
  });

  const [status, setStatus] = useState({
    loading: false,
    success: false,
    error: null
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ loading: true, success: false, error: null });

    try {
      // Đảm bảo emailjs được khởi tạo trước khi gửi
      await emailjs.init("0qMc2ihvMqSv_0S-Z"); // Public Key

      const response = await emailjs.send(
        "service_2d3t14a", // Service ID from EmailJS
        "template_1po7qqo", // Template ID from EmailJS
        {
          from_name: formData.parentName,
          parent_phone: formData.parentPhone,
          child_name: formData.childName,
          address: formData.address,
          child_class: formData.childClass,
          message: formData.message,
        }
      );

      if (response.status === 200) {
        setStatus({ loading: false, success: true, error: null });
        setFormData({
          parentName: '',
          parentPhone: '',
          childName: '',
          address: '',
          childClass: '',
          message: '',
        });
      }
    } catch (error) {
      setStatus({ 
        loading: false, 
        success: false, 
        error: 'Có lỗi xảy ra khi gửi email. Vui lòng thử lại sau.'
      });
    }
  };

  return (
    <section className="min-h-screen bg-gradient-to-br from-purple-100 via-pink-100 to-white py-16 px-4 sm:px-8">
      <div className="max-w-4xl mx-auto bg-white/80 backdrop-blur-sm mt-20 rounded-2xl shadow-xl p-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-4xl font-bold text-center h-12 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-6">
            Đăng Ký Thông Tin
          </h2>
          <p className="text-center text-gray-600 mb-8">
            Hãy điền đầy đủ thông tin bên dưới để cô giáo có thể liên lạc và hỗ trợ bạn tốt nhất.
          </p>

          {status.success && (
            <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg">
              <p className="text-green-800">
                Thông tin của bạn đã được gửi thành công! Chúng tôi sẽ liên hệ lại trong thời gian sớm nhất.
              </p>
            </div>
          )}

          {status.error && (
            <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg">
              <p className="text-red-800">
                {status.error}
              </p>
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-gray-700 font-semibold mb-2">Họ tên phụ huynh</label>
                <input
                  type="text"
                  name="parentName"
                  value={formData.parentName}
                  onChange={handleChange}
                  required
                  placeholder="Nhập họ tên"
                  className="w-full p-4 border rounded-lg bg-white/50 shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-all duration-200"
                />
              </div>

              <div>
                <label className="block text-gray-700 font-semibold mb-2">Số điện thoại</label>
                <input
                  type="tel"
                  name="parentPhone"
                  value={formData.parentPhone}
                  onChange={handleChange}
                  required
                  placeholder="Nhập số điện thoại"
                  className="w-full p-4 border rounded-lg bg-white/50 shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-all duration-200"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-gray-700 font-semibold mb-2">Họ tên bé</label>
                <input
                  type="text"
                  name="childName"
                  value={formData.childName}
                  onChange={handleChange}
                  required
                  placeholder="Nhập họ tên bé"
                  className="w-full p-4 border rounded-lg bg-white/50 shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-all duration-200"
                />
              </div>

              <div>
                <label className="block text-gray-700 font-semibold mb-2">Lớp của bé</label>
                <select
                  name="childClass"
                  value={formData.childClass}
                  onChange={handleChange}
                  required
                  className="w-full p-4 border rounded-lg bg-white/50 shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-all duration-200"
                >
                  <option value="">Chọn lớp</option>
                  {[...Array(12)].map((_, i) => (
                    <option key={i + 1} value={`Lớp ${i + 1}`}>
                      Lớp {i + 1}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <div>
              <label className="block text-gray-700 font-semibold mb-2">Địa chỉ</label>
              <input
                type="text"
                name="address"
                value={formData.address}
                onChange={handleChange}
                required
                placeholder="Nhập địa chỉ"
                className="w-full p-4 border rounded-lg bg-white/50 shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-all duration-200"
              />
            </div>

            <div>
              <label className="block text-gray-700 font-semibold mb-2">Lời nhắn</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Nhập lời nhắn của bạn cho cô giáo"
                rows="4"
                className="w-full p-4 border rounded-lg bg-white/50 shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-all duration-200"
              />
            </div>

            <motion.button
              type="submit"
              disabled={status.loading}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className={`w-full p-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-bold rounded-lg shadow-lg 
                focus:outline-none focus:ring-4 focus:ring-purple-500 transition-all duration-200
                ${status.loading ? 'opacity-70 cursor-not-allowed' : 'hover:opacity-90'}`}
            >
              {status.loading ? (
                <span className="flex items-center justify-center">
                  <Loader2 className="animate-spin mr-2 h-5 w-5" />
                  Đang gửi...
                </span>
              ) : (
                <span className="flex items-center justify-center">
                  Gửi Thông Tin
                  <Send className="ml-2 h-5 w-5" />
                </span>
              )}
            </motion.button>
          </form>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;