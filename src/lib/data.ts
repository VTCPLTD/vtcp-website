// ─── Site Data ────────────────────────────────────────────────────────────────
// All content derived from vtcp.vn brand. No placeholder / lorem ipsum.

export const siteConfig = {
  name: 'VTCP',
  tagline: 'True Technology. Ultimate Life.',
  description:
    'VTCP – công nghệ đích thực tối ưu cuộc sống. Chúng tôi mang đến giải pháp công nghệ toàn diện cho cá nhân, tổ chức và doanh nghiệp.',
  email: 'contact@vtcp.vn',
  phone: '+84 (0) 703250747',
  address: 'TP. Hồ Chí Minh, Việt Nam',
  socials: {
    facebook: 'https://facebook.com/phamvinhtoan3010',
    linkedin: 'https://www.linkedin.com/in/phamvinhtoan/',
    github: 'https://github.com/VTCPLTD',
  },
}

export const stats = [
  { value: '50+', label: 'Dự án hoàn thành' },
  { value: '30+', label: 'Khách hàng tin tưởng' },
  { value: '5+', label: 'Năm kinh nghiệm' },
  { value: '15+', label: 'Thành viên đội ngũ' },
]

export const services = [
  {
    id: 'web-development',
    icon: 'Monitor',
    title: 'Phát triển Web',
    shortDesc: 'Website & ứng dụng web hiệu suất cao, chuẩn SEO.',
    description:
      'Thiết kế và phát triển website doanh nghiệp, landing page, hệ thống web app phức tạp với công nghệ hiện đại – React, Next.js, Node.js – đảm bảo hiệu suất, bảo mật và khả năng mở rộng.',
    tags: ['Next.js', 'React', 'Node.js', 'TypeScript'],
    gradient: 'from-brand-500 to-brand-700',
  },
  {
    id: 'mobile-development',
    icon: 'Smartphone',
    title: 'Ứng dụng di động',
    shortDesc: 'App iOS & Android native và cross-platform.',
    description:
      'Phát triển ứng dụng di động cho iOS và Android với trải nghiệm người dùng mượt mà. Sử dụng React Native và Flutter để tối ưu chi phí và thời gian ra thị trường.',
    tags: ['React Native', 'Flutter', 'iOS', 'Android'],
    gradient: 'from-sky-500 to-brand-600',
  },
  {
    id: 'enterprise-system',
    icon: 'Server',
    title: 'Hệ thống doanh nghiệp',
    shortDesc: 'ERP, CRM, quản lý tài sản và quy trình nội bộ.',
    description:
      'Xây dựng và triển khai các hệ thống quản lý doanh nghiệp tùy chỉnh – quản lý dự án, tài sản, nhân sự – tích hợp liền mạch với quy trình hiện có của tổ chức.',
    tags: ['ERP', 'CRM', 'API Integration', 'Cloud'],
    gradient: 'from-violet-500 to-brand-600',
  },
  {
    id: 'ui-ux-design',
    icon: 'Palette',
    title: 'UI/UX Design',
    shortDesc: 'Giao diện đẹp, trải nghiệm người dùng vượt trội.',
    description:
      'Nghiên cứu người dùng, thiết kế wireframe, prototype tương tác cao và hệ thống thiết kế hoàn chỉnh. Tạo ra sản phẩm vừa đẹp vừa dễ sử dụng.',
    tags: ['Figma', 'Design System', 'Prototyping', 'Research'],
    gradient: 'from-pink-500 to-brand-500',
  },
  {
    id: 'cloud-devops',
    icon: 'Cloud',
    title: 'Cloud & DevOps',
    shortDesc: 'Hạ tầng đám mây, CI/CD và tự động hóa.',
    description:
      'Tư vấn, triển khai và vận hành hạ tầng đám mây trên AWS, GCP, Azure. Thiết lập pipeline CI/CD tự động, monitoring và đảm bảo uptime 99.9%.',
    tags: ['AWS', 'Docker', 'CI/CD', 'Kubernetes'],
    gradient: 'from-teal-500 to-brand-600',
  },
  {
    id: 'consulting',
    icon: 'Lightbulb',
    title: 'Tư vấn công nghệ',
    shortDesc: 'Định hướng chiến lược số hóa cho doanh nghiệp.',
    description:
      'Đánh giá hệ thống hiện tại, lên lộ trình chuyển đổi số và tư vấn lựa chọn công nghệ phù hợp với quy mô và mục tiêu kinh doanh của tổ chức.',
    tags: ['Digital Transformation', 'Strategy', 'Architecture'],
    gradient: 'from-amber-500 to-orange-600',
  },
]

export const projects = [
  {
    id: 'thanh-nien-lam-theo-loi-bac',
    title: 'Thanh niên làm theo lời Bác',
    category: 'Web Application',
    description:
      'Nền tảng số hóa phong trào thanh niên làm theo lời Bác – ghi nhận, theo dõi và lan tỏa các hoạt động tình nguyện và sáng kiến của đoàn viên, thanh niên trên toàn quốc.',
    image: '/images/projects/thanh-nien-lam-theo-loi-bac.png',
    tags: ['Web App', 'React', 'Node.js'],
    slug: 'thanh-nien-lam-theo-loi-bac',
    featured: true,
    color: '#3063ff',
  },
  {
    id: 'quan-ly-tai-san',
    title: 'Quản lý tài sản',
    category: 'Enterprise System',
    description:
      'Hệ thống quản lý tài sản toàn diện cho doanh nghiệp – theo dõi vòng đời, khấu hao, bảo trì và kiểm kê tài sản theo thời gian thực với dashboard phân tích trực quan.',
    image: '/images/projects/quan-ly-tai-san.png',
    tags: ['ERP', 'Dashboard', 'Real-time'],
    slug: 'quan-ly-tai-san',
    featured: true,
    color: '#0ea5e9',
  },
  {
    id: 'quan-ly-du-an',
    title: 'Quản lý dự án',
    category: 'Enterprise System',
    description:
      'Công cụ quản lý dự án nội bộ – lập kế hoạch, phân công nhiệm vụ, theo dõi tiến độ và báo cáo hiệu suất nhóm, tích hợp thông báo real-time.',
    image: '/images/projects/quan-ly-du-an.png',
    tags: ['Project Management', 'Collaboration', 'Analytics'],
    slug: 'quan-ly-du-an',
    featured: false,
    color: '#8b5cf6',
  },
  {
    id: 'icool-checklist',
    title: 'ICOOL Checklist',
    category: 'Mobile App',
    description:
      'Ứng dụng kiểm tra và xác nhận quy trình công việc theo checklist – giúp đội ngũ vận hành tuân thủ quy trình, giảm sai sót và tăng năng suất.',
    image: '/images/projects/du-an-icool-checklist.png',
    tags: ['Mobile', 'Operations', 'Workflow'],
    slug: 'icool-checklist',
    featured: false,
    color: '#10b981',
  },
  {
    id: 'icool-search',
    title: 'ICOOL Search',
    category: 'Web Application',
    description:
      'Hệ thống tìm kiếm thông minh tích hợp full-text search, lọc nâng cao và gợi ý kết quả – tối ưu trải nghiệm tra cứu thông tin nội bộ cho doanh nghiệp.',
    image: '/images/projects/du-an-icool-search.png',
    tags: ['Search', 'AI', 'Internal Tools'],
    slug: 'icool-search',
    featured: false,
    color: '#f59e0b',
  },
  {
    id: 'icool-touch',
    title: 'ICOOL Touch',
    category: 'Mobile App',
    description:
      'Ứng dụng di động giao tiếp và cộng tác nội bộ – nhắn tin nhóm, chia sẻ tài liệu, và quản lý thông báo tập trung cho tổ chức.',
    image: '/images/projects/du-an-icool-touch.png',
    tags: ['Mobile', 'Communication', 'Collaboration'],
    slug: 'icool-touch',
    featured: false,
    color: '#ec4899',
  },
  {
    id: 'booking',
    title: 'Hệ thống đặt lịch Booking',
    category: 'Web Application',
    description:
      'Nền tảng đặt lịch hẹn và quản lý lịch trình dịch vụ thông minh – tối ưu hóa thời gian, tự động nhắc lịch và quản lý nhân sự hiệu quả.',
    image: '/images/projects/du-an-booking.png',
    tags: ['Booking System', 'SaaS', 'Scheduler'],
    slug: 'booking',
    featured: false,
    color: '#f59e0b',
  },
  {
    id: 'crm',
    title: 'Hệ thống quản lý CRM',
    category: 'Enterprise System',
    description:
      'Giải pháp quản lý quan hệ khách hàng chuyên sâu – tự động hóa phễu bán hàng, quản lý thông tin khách hàng, chăm sóc khách hàng và báo cáo doanh thu.',
    image: '/images/projects/du-an-crm.png',
    tags: ['CRM', 'Sales', 'Analytics'],
    slug: 'crm',
    featured: false,
    color: '#10b981',
  },
  {
    id: 'edx',
    title: 'Hệ thống kết nối dữ liệu EDX',
    category: 'Integration Platform',
    description:
      'Nền tảng kết nối các hệ thống dữ liệu có sẵn – đồng bộ và tích hợp dữ liệu thông suốt giữa các nhà thuốc và bệnh viện theo thời gian thực.',
    image: '/images/projects/du-an-edx.png',
    tags: ['Integration', 'Data Sync', 'Healthcare'],
    slug: 'edx',
    featured: false,
    color: '#8b5cf6',
  },
  {
    id: 'lms',
    title: 'Hệ thống quản lý học tập LMS',
    category: 'Enterprise System',
    description:
      'Nền tảng học tập trực tuyến toàn diện – số hóa bài giảng, quản lý tương tác và ghi nhận điểm số cho giáo viên & học sinh; hỗ trợ doanh nghiệp theo dõi lộ trình phát triển và tiến trình học tập của nhân sự.',
    image: '/images/projects/lms.png',
    tags: ['LMS', 'Education', 'Corporate Training'],
    slug: 'lms',
    featured: false,
    color: '#ec4899',
  },
]

export const team = [
  {
    id: '9a4a422b-eee6-48e8-8d9a-7fbf4fef6250',
    name: 'Phạm Vĩnh Toàn',
    role: 'CEO & Giám Đốc',
    bio: 'Dẫn dắt VTCP với tầm nhìn chiến lược, phát triển các giải pháp công nghệ tối ưu hóa cuộc sống và quản trị doanh nghiệp.',
    avatar: '/images/employees/pham-vinh-toan.webp',
    initials: 'VT',
    color: '#3063ff',
  },
  {
    id: 'e37a6e56-dba3-410e-850f-e3c163f28435',
    name: 'Trương Nam Phước',
    role: 'Đối tác chiến lược',
    bio: 'Đồng hành cùng VTCP trong các dự án công nghệ lớn và mở rộng mạng lưới hợp tác kinh doanh bền vững.',
    avatar: '/images/employees/truong-nam-phuoc.webp',
    initials: 'NP',
    color: '#8b5cf6',
  },
  {
    id: '52556c71-16a4-4011-8091-04c554fc6fb2',
    name: 'Lê Thị Dịu',
    role: 'Chuyên Viên Phân Tích Nghiệp Vụ',
    bio: 'Cầu nối quan trọng giữa khách hàng và đội ngũ kỹ thuật, phân tích yêu cầu nghiệp vụ để đưa ra giải pháp tối ưu nhất.',
    avatar: '/images/employees/le-thi-diu.webp',
    initials: 'TD',
    color: '#10b981',
  },
  {
    id: '56cdc53d-7beb-43a0-a50a-9ff039cd7b72',
    name: 'Giảng Mộng Kha',
    role: 'Quản Trị Nhân Sự',
    bio: 'Phát triển đội ngũ nhân lực tài năng, xây dựng văn hóa doanh nghiệp gắn kết và tạo dựng môi trường làm việc lý tưởng.',
    avatar: '/images/employees/giang-mong-kha.webp',
    initials: 'MK',
    color: '#f59e0b',
  },
  {
    id: '2c843641-21cb-4f67-938b-b7e5be27e4a9',
    name: 'Lê Thị Ngọc Giàu',
    role: 'Chuyên Viên Kiểm Thử',
    bio: 'Đảm bảo chất lượng sản phẩm phần mềm trước khi bàn giao thông qua quy trình kiểm thử chi tiết và nghiêm ngặt.',
    avatar: '/images/employees/le-thi-ngoc-giau.webp',
    initials: 'NG',
    color: '#ec4899',
  },
  {
    id: 'ea9ec506-a509-4d31-8c43-0b1619cb00c1',
    name: 'Nguyễn Văn Công',
    role: 'Lập Trình Viên Full-Stack',
    bio: 'Phát triển toàn diện cả frontend và backend, xây dựng các tính năng sản phẩm mượt mà và tối ưu hiệu suất.',
    avatar: '/images/employees/nguyen-van-cong.webp',
    initials: 'VC',
    color: '#14b8a6',
  },
  {
    id: '843bac14-b3bb-4258-b287-110eae31e8f8',
    name: 'Bùi Đông Nhật',
    role: 'Thiết Kế Đồ Họa',
    bio: 'Sáng tạo giao diện và các ấn phẩm truyền thông đẹp mắt, mang lại trải nghiệm thị giác ấn tượng cho người dùng.',
    avatar: '/images/employees/bui-dong-nhat.webp',
    initials: 'DN',
    color: '#6366f1',
  },
  {
    id: '553582eb-7029-4d13-9e23-4af0dd3b5dc3',
    name: 'Bùi Thị Minh Thư',
    role: 'Chuyên Viên Kiểm Thử',
    bio: 'Phân tích kịch bản kiểm thử, phát hiện lỗi hệ thống nhằm duy trì độ tin cậy và ổn định cao cho sản phẩm.',
    avatar: '/images/employees/bui-thi-minh-thu.webp',
    initials: 'MT',
    color: '#a855f7',
  },
  {
    id: 'a8a182ac-61d7-4b73-91e6-e9439c6378f0',
    name: 'Nguyễn Minh Tâm',
    role: 'Lập Trình Viên Back-End',
    bio: 'Phát triển dịch vụ server-side hiệu suất cao, tích hợp hệ thống bên thứ ba và quản lý tối ưu hóa cơ sở dữ liệu.',
    avatar: '/images/employees/nguyen-minh-tam.webp',
    initials: 'MT',
    color: '#f43f5e',
  },
  {
    id: '16ff48e9-87f5-4a78-97e5-1742f1e16fc8',
    name: 'Lê Khánh Phương',
    role: 'Lập Trình Viên Back-End',
    bio: 'Tập trung phát triển hệ thống backend ổn định, xây dựng API và quản trị cơ sở dữ liệu hiệu quả.',
    avatar: '/images/employees/le-khanh-phuong.webp',
    initials: 'KP',
    color: '#06b6d4',
  },
  {
    id: '4c343971-692a-4e78-b9f0-1fa03c98ccf3',
    name: 'Trần Nguyên Khánh',
    role: 'Lập Trình Viên Back-End',
    bio: 'Đam mê xây dựng logic hệ thống vững chắc, xử lý dữ liệu và đảm bảo tính bảo mật cho ứng dụng.',
    avatar: '/images/employees/tran-nguyen-khanh.webp',
    initials: 'NK',
    color: '#e11d48',
  },
  {
    id: '59280dd2-2b8e-4ec8-9747-0c38926ba117',
    name: 'Trần Thị Cẩm Giang',
    role: 'Chuyên Viên Kiểm Thử',
    bio: 'Thực hiện kiểm thử chức năng và hiệu năng phần mềm, đảm bảo sản phẩm hoạt động trơn tru trong mọi kịch bản.',
    avatar: '/images/employees/tran-thi-cam-giang.webp',
    initials: 'CG',
    color: '#f43f5e',
  },
]

export const techStack = [
  { name: 'React', category: 'Frontend' },
  { name: 'Next.js', category: 'Frontend' },
  { name: 'TypeScript', category: 'Language' },
  { name: 'Node.js', category: 'Backend' },
  { name: 'NestJS', category: 'Backend' },
  { name: 'PostgreSQL', category: 'Database' },
  { name: 'MongoDB', category: 'Database' },
  { name: 'Redis', category: 'Cache' },
  { name: 'React Native', category: 'Mobile' },
  { name: 'Flutter', category: 'Mobile' },
  { name: 'AWS', category: 'Cloud' },
  { name: 'Docker', category: 'DevOps' },
  { name: 'Kubernetes', category: 'DevOps' },
  { name: 'Figma', category: 'Design' },
]

export const testimonials = [
  {
    id: 1,
    name: 'Trương Nam Phước',
    role: 'Giám đốc công ty vtcode',
    company: 'Tập đoàn VTGROUP',
    quote:
      'VTCP đã giúp chúng tôi số hóa toàn bộ quy trình quản lý tài sản. Hệ thống ổn định, giao diện trực quan và đội ngũ hỗ trợ cực kỳ chuyên nghiệp.',
    initials: 'NL',
    color: '#3063ff',
  },
  {
    id: 2,
    name: 'Phạm Quí Toàn',
    role: 'General Director',
    company: 'Gumi Việt Nam',
    quote:
      'Từ ý tưởng đến sản phẩm thực tế chỉ trong 3 tháng. VTCP không chỉ code – họ thực sự hiểu business và đưa ra giải pháp tốt nhất cho người dùng cuối.',
    initials: 'TK',
    color: '#0ea5e9',
  },
  {
    id: 3,
    name: 'Trịnh Đình Thảo',
    role: 'Phó hiệu trưởng',
    company: 'Trường Chuyên Trần Đại Nghĩa TP.HCM',
    quote:
      'Nền tảng vững chắc, giải pháp toàn diện và dịch vụ tận tâm. VTCP đã giúp chúng tôi triển khai hệ thống website an toàn, tiết kiệm thời gian và nâng cao trải nghiệm người dùng.',
    initials: 'LH',
    color: '#8b5cf6',
  },
]

export const faqs = [
  {
    question: 'Quy trình làm việc của VTCP như thế nào?',
    answer:
      'Chúng tôi theo quy trình Agile với các sprint 2 tuần: Discovery → Design → Development → Testing → Deployment. Khách hàng được cập nhật tiến độ liên tục và có thể điều chỉnh yêu cầu linh hoạt.',
  },
  {
    question: 'Thời gian hoàn thành một dự án là bao lâu?',
    answer:
      'Tùy quy mô dự án: website doanh nghiệp 4–8 tuần, ứng dụng di động 8–16 tuần, hệ thống ERP/CRM 3–6 tháng. Chúng tôi cam kết timeline rõ ràng trước khi bắt đầu.',
  },
  {
    question: 'VTCP có hỗ trợ sau khi bàn giao sản phẩm không?',
    answer:
      'Có. Chúng tôi cung cấp 3 tháng bảo hành miễn phí và các gói hỗ trợ vận hành, bảo trì dài hạn. Đội ngũ kỹ thuật luôn sẵn sàng phản hồi trong 24h.',
  },
  {
    question: 'VTCP có kinh nghiệm với dự án quy mô lớn không?',
    answer:
      'Có. Chúng tôi đã triển khai các hệ thống phục vụ hàng nghìn người dùng đồng thời, từ nền tảng quản lý đoàn thể quốc gia đến hệ thống ERP cho doanh nghiệp tập đoàn.',
  },
  {
    question: 'Chi phí phát triển phần mềm tại VTCP như thế nào?',
    answer:
      'Chi phí phụ thuộc vào độ phức tạp và quy mô dự án. Chúng tôi cung cấp báo giá miễn phí sau buổi tư vấn khám phá dự án. Luôn có phương án phù hợp với ngân sách của bạn.',
  },
]
