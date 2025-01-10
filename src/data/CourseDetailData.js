export const courses = [
    {
      title: "ÔN LUYỆN THI TOÁN LỚP 12",
      description: "Khóa học Toán nâng cao lớp 12 dành cho các học sinh nhằm nâng cao điểm số, dạng bài tập nâng cao.",
      objectives: [
        "Nâng cao khả năng giải quyết bài tập trắc nghiệm",
        "Làm quen với các dạng bài toán nâng cao trong đề thi đại học",
        "Học phương pháp giải nhanh bằng máy tính Casio"
      ],
      teacher: {
        name: "Cô Nguyễn Thị Hồng",
        specialization: "Chuyên gia Toán học cấp Quốc gia",
        experience: "15 năm giảng dạy và ôn thi đại học",
        profileImage: "/api/placeholder/150/150"
      },
      color: "bg-gradient-to-br from-blue-500 to-blue-700",
      id: 12,
      duration: "12 tuần",
      price: "3,500,000 VNĐ",
      schedule: "Thứ 2 - 4 - 6 (19:00 - 21:00)",
      highlights: [
        "Đề thi thử hàng tuần được cập nhật sát với kỳ thi thực tế",
        "Tài liệu học tập độc quyền từ cô Hồng",
        "Nhóm học tập riêng trên Facebook để thảo luận"
      ]
    },
    {
        title: "ÔN LUYỆN THI TOÁN LỚP 11",
        description: "Toán chuyên lớp 11 với các chuyên đề trọng tâm, giúp học sinh phát triển tư duy và kỹ năng giải toán.",
        objectives: [
          "Củng cố kiến thức nền tảng của lớp 11",
          "Chuẩn bị trước cho các chủ đề trọng tâm của lớp 12",
          "Rèn luyện tư duy giải bài tập trắc nghiệm"
        ],
        teacher: {
          name: "Cô Trần Thị Mai",
          specialization: "Giảng viên Toán học trường chuyên",
          experience: "10 năm giảng dạy học sinh chuyên",
          profileImage: "teacher-tran-thi-mai.jpg"
        },
        color: "bg-gradient-to-br from-amber-400 to-amber-600",
        id: 11,
        duration: "10 tuần",
        price: "3,000,000 VNĐ",
        schedule: "Thứ 3 - 5 - 7 (18:30 - 20:30)",
        highlights: [
          "Video bài giảng chi tiết cho từng chuyên đề",
          "Hướng dẫn giải chi tiết từng bài tập",
          "Hệ thống bài tập phong phú với hơn 500 bài"
        ]
      },
      {
        title: "ÔN LUYỆN THI TOÁN LỚP 10",
        description: "Khóa học chuyên sâu với phương pháp giảng dạy hiện đại, tập trung vào việc rèn luyện kỹ năng giải toán.",
        objectives: [
          "Tăng cường khả năng giải bài tập khó",
          "Thành thạo các công cụ hỗ trợ giải toán hiện đại",
          "Xây dựng tư duy toán học hệ thống"
        ],
        teacher: {
          name: "Cô Lê Thị Thu",
          specialization: "Giảng viên Toán ứng dụng",
          experience: "8 năm giảng dạy chương trình nâng cao",
          profileImage: "teacher-le-thi-thu.jpg"
        },
        color: "bg-gradient-to-br from-rose-400 to-rose-600",
        id: 10,
        duration: "8 tuần",
        price: "2,800,000 VNĐ",
        schedule: "Thứ 2 - 4 - 6 (18:00 - 20:00)",
        highlights: [
          "Chương trình tích hợp học toán và thực tế",
          "Các bài toán thực hành ứng dụng cao",
          "Tư vấn học tập 1-1 từ cô giáo"
        ]
      },
      {
        title: "ÔN LUYỆN THI TOÁN LỚP 9",
        description: "Chương trình toán chất lượng cao, giúp học sinh chuẩn bị tốt cho kỳ thi vào lớp 10 với độ khó tăng dần.",
        objectives: [
          "Rèn luyện kỹ năng giải bài tập tự luận và trắc nghiệm",
          "Xây dựng chiến lược học hiệu quả để đạt điểm cao trong kỳ thi vào lớp 10",
          "Làm quen với các đề thi chính thức từ các trường chuyên"
        ],
        teacher: {
          name: "Cô Phạm Thị Lan",
          specialization: "Chuyên gia ôn luyện thi vào lớp 10",
          experience: "12 năm giảng dạy và viết sách luyện thi",
          profileImage: "teacher-pham-thi-lan.jpg"
        },
        color: "bg-gradient-to-br from-emerald-400 to-emerald-600",
        id: 9,
        duration: "10 tuần",
        price: "3,200,000 VNĐ",
        schedule: "Thứ 2 - 4 - 6 (19:00 - 21:00)",
        highlights: [
          "Hơn 20 đề thi thử sát với thực tế",
          "Tài liệu học tập tổng hợp từ nhiều nguồn đáng tin cậy",
          "Cập nhật liên tục các phương pháp giải toán mới"
        ]
      },
      {
        title: "ÔN LUYỆN THI TOÁN LỚP 8",
        description: "Khóa học tập trung vào các chuyên đề quan trọng, giúp học sinh xây dựng nền tảng vững chắc.",
        objectives: [
          "Nắm vững kiến thức trọng tâm lớp 8 để làm nền tảng cho lớp 9",
          "Phát triển tư duy toán học thông qua các bài tập logic",
          "Cải thiện tốc độ và độ chính xác khi làm bài tập trắc nghiệm"
        ],
        teacher: {
          name: "Cô Vũ Thị Hạnh",
          specialization: "Giảng viên chuyên Toán THCS",
          experience: "10 năm kinh nghiệm giảng dạy học sinh lớp 8, 9",
          profileImage: "teacher-vu-thi-hanh.jpg"
        },
        color: "bg-gradient-to-br from-purple-400 to-purple-600",
        id: 8,
        duration: "8 tuần",
        price: "2,800,000 VNĐ",
        schedule: "Thứ 3 - 5 - 7 (18:30 - 20:30)",
        highlights: [
          "Các chuyên đề toán học sáng tạo và thực tiễn",
          "Hướng dẫn học theo nhóm để tăng cường hiệu quả",
          "Đánh giá tiến độ học tập hàng tuần"
        ]
      },
      {
        title: "ÔN LUYỆN THI TOÁN LỚP 7",
        description: "Chương trình học với phương pháp tiếp cận mới, giúp học sinh phát triển tư duy logic và sáng tạo.",
        objectives: [
          "Xây dựng tư duy toán học hệ thống từ các bài toán cơ bản đến nâng cao",
          "Giải quyết các bài toán ứng dụng trong thực tế",
          "Tạo thói quen học tập chủ động và tự giác"
        ],
        teacher: {
          name: "Cô Hoàng Thị Minh",
          specialization: "Giảng viên Toán tư duy logic",
          experience: "8 năm giảng dạy và tổ chức các hội thảo toán học",
          profileImage: "teacher-hoang-thi-minh.jpg"
        },
        color: "bg-gradient-to-br from-red-400 to-red-600",
        id: 7,
        duration: "6 tuần",
        price: "2,500,000 VNĐ",
        schedule: "Thứ 2 - 4 - 6 (17:30 - 19:30)",
        highlights: [
          "Phương pháp học toán trực quan, dễ hiểu",
          "Bài tập thực hành sinh động, gần gũi",
          "Kết nối phụ huynh qua báo cáo tiến độ hàng tháng"
        ]
      }
  ];