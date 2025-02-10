import { Facebook, Instagram, Twitter } from "lucide-react";
import { list } from "postcss";

export const TITLE = "مقام للخدمات الإعلانية";
export const MAIN_TITLE = "مقام  ";
export const SUB_TITLE = "للخدمات الإعلانية";
export const DESCRIPTION =
  " نقدم لكم حلولًا إعلانية مبتكرة لتحويل الأفكار إلى نجاحات.";
export const PHONE_NUMBER = "0911019690";
export const EMAIL = "info@maqam4media.ly";
export const LOCATION = "مصراته , قزير مقابل مجمع زاد الخير";
export const GOOGLEMAP =
  "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3370.781169002002!2d15.079551724896511!3d32.34458380596078!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x13a153a2e8abe58b%3A0x1567f8e791e94022!2z2YXZgtin2YUg2YTZhNiv2LnYp9mK2Kkg2YjYp9mE2KXYudmE2KfZhiDZiNin2YTYrtiv2YXYp9iqINin2YTYpdi52YTYp9mF2YrYqQ!5e0!3m2!1sar!2sly!4v1736622674805!5m2!1sar!2sly";

export const NAV_ITEMS = [
  { id: 1, label: "صفحة الرئيسية", href: "/" },
  { id: 2, label: "خدماتنا", href: "/services" },
  { id: 3, label: "معلومات عنا", href: "/about" },
  { id: 4, label: "اتصل بنا", href: "/contact" },
];

export const SOCIAL_MEDIA = [
  {
    id: 1,
    icon: <Facebook className="w-5 h-5" />,
    href: "https://www.facebook.com/profile.php?id=100068734726849&rdid=B4uN611i84BXV1Gl&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2FDAFDrZr2266mSM4F%2F",
  },
  {
    id: 2,
    icon: <Twitter className="w-5 h-5" />,
    href: "https://twitter.com",
  },
  {
    id: 3,
    icon: <Instagram className="w-5 h-5" />,
    href: "https://instagram.com",
  },
];

export const servicesData = [
  {
    id: 1,
    title: "صناعة المحتوى",
    description: "نقدم خدمات صناعة محتوى جذاب يترك انطباعًا دائمًا",
    image:
      "https://lh3.googleusercontent.com/d/1IW3NtJNGu8pY0bNeh5kHglI6z-c1Urhh=w1000-h800",
    blurImage: "/images/Content_design_small.jpg",
  },
  {
    id: 2,
    title: "إدارة السوشيال ميديا",
    description: "إدارة احترافية لصفحات التواصل الاجتماعي لتحقيق أفضل النتائج",
    image:
      "https://lh3.googleusercontent.com/d/1-QKmaUvnEDPTpuZ4cduzawCFdNZ4zdtn=w1000-h800",
    blurImage: "/images/Social_media_management_small.jpg",
  },
  {
    id: 3,
    title: "التعليق الصوتي",
    description: "تعليق صوتي مميز يناسب جميع احتياجاتك.",
    image:
      "https://lh3.googleusercontent.com/d/1cahFSw6bvxUxcO9OIrieINb5yxdfNYBQ=w1000-h800",
    blurImage: "/images/voiceover_small.jpg",
  },
];

export const SocialMediaDesigns = [
  {
    id: "1",
    title: "Post 1",
    image:
      "https://lh3.googleusercontent.com/d/13oal2b1Tr91NdtfxYyHuqyoM4De7NgJj=w1000-h800",
    blurImage: "/images/Content_design_small.jpg",
  },
  {
    id: "2",
    title: "إدارة السوشيال ميديا",
    image: "/images/Social_media_management.jpg",
    blurImage: "/images/Social_media_management_small.jpg",
  },
  {
    id: "3",
    title: "التعليق الصوتي",
    image: "/images/voiceover.jpg",
    blurImage: "/images/voiceover_small.jpg",
  },
  {
    id: "4",
    title: "إدارة السوشيال ميديا",
    image: "/images/Social_media_management.jpg",
    blurImage: "/images/Social_media_management_small.jpg",
  },
  {
    id: "5",
    title: "التعليق الصوتي",
    image: "/images/voiceover.jpg",
    blurImage: "/images/voiceover_small.jpg",
  },
];


export const voiceoverProjects = [
  {
    id: "1",
    title: "تعليق صوتي عن الشركة",
    description: "تعليق صوتي احترافي للمشاريع الإعلامية والتسويقية.",
    image: "https://lh3.googleusercontent.com/d/1cahFSw6bvxUxcO9OIrieINb5yxdfNYBQ=w1000-h800",
    blurImage: "/images/voiceover_small.jpg",
    audio: "/audio/voice_over_about_the_company.mp3",
  },
];

export const people = [
  {
    id: 1,
    name: "John Doe",
    designation: "Software Engineer",
    image:
      "https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixlib=rb-4.0.3&auto=format&fit=crop&w=3387&q=80",
  },
  {
    id: 2,
    name: "Robert Johnson",
    designation: "Product Manager",
    image:
      "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
  },
  {
    id: 3,
    name: "Jane Smith",
    designation: "Data Scientist",
    image:
      "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
  },
  {
    id: 4,
    name: "Emily Davis",
    designation: "UX Designer",
    image:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
  },
  {
    id: 5,
    name: "Tyler Durden",
    designation: "Soap Developer",
    image:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=3540&q=80",
  },
  {
    id: 6,
    name: "Dora",
    designation: "The Explorer",
    image:
      "https://images.unsplash.com/photo-1544725176-7c40e5a71c5e?ixlib=rb-4.0.3&auto=format&fit=crop&w=3534&q=80",
  },
];

export const servicesData2 = [
  {
    id: 1,
    title: "التسويق الرقمي",
    description:
      "تقديم خدمات التسويق الرقمي بما يشمل إدارة حسابات وسائل التواصل الاجتماعي، تطوير استراتيجيات التسويق الرقمي المبتكرة، وتنفيذ الحملات الإعلانية الفعالة عبر الإنترنت لتحقيق أهداف العملاء.",
    image: "/images/services/digital-marketing.jpg",
    list: [
      { id: "1", title: "إدارة حسابات التواصل الاجتماعي" },
      { id: "2", title: "تطوير استراتيجيات التسويق الرقمي" },
      { id: "3", title: "إدارة الحملات الإعلانية عبر الإنترنت" },
    ],
  },
  {
    id: 2,
    title: "التصوير الفوتوغرافي",
    description:
      "تصوير الأحداث والمناسبات مثل المؤتمرات والحفلات والمعارض، بالإضافة إلى تصوير المنتجات التجارية لتلبية احتياجات التسويق والعروض الترويجية.",
    image: "/images/services/photography.jpg",
    list: [
      { id: "1", title: "تصوير الأحداث والمناسبات والمؤتمرات" },
      { id: "2", title: "تصوير المنتجات للأغراض التجارية والتسويقية" },
      { id: "3", title: "تصوير صحفي وإعلامي" },
      { id: "4", title: "تصوير بورتريه وجلسات تصوير خاصة" },
    ],
  },
  {
    id: 3,
    title: "تصوير الفيديو وإنتاجه",
    description:
      "تصوير فيديو احترافي يشمل إعداد الأفلام الوثائقية، الفيديوهات الترويجية، وإعداد فيديوهات مميزة لعرض المنتجات والخدمات بأفضل صورة.",
    image: "/images/services/video-shooting-and-production.jpg",
    list: [
      { id: "1", title: "تصوير الفيديو للأحداث والمناسبات" },
      { id: "2", title: "إنتاج الأفلام الوثائقية والتقارير المصورة" },
      { id: "3", title: "إعداد الفيديوهات التوجيهية والإعلانية" },
      { id: "4", title: "تصوير وتحرير الفيديوهات التعليمية والتدريبية" },
      { id: "5", title: "خدمات البث المباشر للأحداث" },
    ],
  },
  {
    id: 4,
    title: "خدمات الصوت والموسيقى",
    description:
      "تسجيل وتحرير الصوت للأفلام والفيديوهات، إنتاج المؤثرات الصوتية والموسيقى التصويرية، وتقديم خدمات الدبلجة والاتصال الصوتي.",
    image: "/images/services/audio-and-music-services.jpg",
    list: [
      { id: "1", title: "تسجيل وتحرير الصوت للأفلام والفيديوهات" },
      { id: "2", title: "إنتاج المؤثرات الصوتية والموسيقى التصويرية" },
      { id: "3", title: "تقديم خدمات الدوبلاج والتعليق الصوتي" },
    ],
  },
  {
    id: 5,
    title: "تنظيم و تغطية الأحداث",
    description:
      "تنظيم المؤتمرات والندوات والمعارض، إدارة الفعاليات الخاصة، وتقديم خدمات التغطية الإعلامية المباشرة على وسائل الإعلام التقليدي والرقمي.",
    image: "/images/services/organizing-and-covering-events.jpg",
    list: [
      { id: "1", title: "تنظيم المؤتمرات والندوات والمعارض" },
      { id: "2", title: "إدارة الفعاليات الخاصة" },
      { id: "3", title: "تغطية الأحداث إعلامياً وتقديم تقارير شاملة" },
      { id: "4", title: "تقديم خدمات البث المباشر للأحداث عبر الإنترنت" },
    ],
  },
  {
    id: 6,
    title: "الاستشارات الإعلامية",
    description:
      "تقديم استشارات متخصصة في مجال الإعلام والعلاقات العامة، تجهيز استراتيجيات الاتصال والإعلام للشركات، وتدريب المتحدثين الرسميين للتعامل مع وسائل الإعلام بكفاءة.",
    image: "/images/services/media-consulting.jpg",
    list: [
      { id: "1", title: "تقديم الاستشارات في مجال الإعلام والعلاقات العامة" },
      { id: "2", title: "تطوير استراتيجيات الاتصال والإعلام للشركات" },
      { id: "3", title: "تدريب المتحدثين الرسميين على التعامل مع الإعلام" },
    ],
  },
  {
    id: 7,
    title: "الطباعة والنشر",
    description:
      "تصميم وطباعة المجلات والكتب والمنشورات التجارية، بالإضافة إلى إنتاج جميع أنواع المطبوعات الدعائية والترويجية بجودة عالية.",
    image: "/images/services/printing-and-publishing.jpg",
    list: [
      { id: "1", title: "طباعة المجلات والنشرات والكتب" },
      { id: "2", title: "تصميم وإنتاج المطبوعات التجارية" },
    ],
  },
  {
    id: 8,
    title: "تحرير وإنتاج المحتوى",
    description:
      "تحرير النصوص والمقالات الصحفية باحترافية، إنتاج النصوص الإعلامية والإعلانية المناسبة لمختلف القنوات والمنصات الإعلامية.",
    image: "/images/services/content-editing-and-production.jpg",
    list: [
      { id: "1", title: "تحرير النصوص والمقالات الصحفية" },
      { id: "2", title: "إنتاج المحتوى الإعلامي للمجلات والصحف" },
      { id: "3", title: "إعداد وتحرير النصوص الإعلامية والتوجيهية" },
    ],
  },
  {
    id: 9,
    title: "التصميم",
    description:
      "تصميم المواد التسويقية بما يشمل المنشورات والبوسترات واللافتات، وتصميم الهويات البصرية والعلامات التجارية.",
    image: "/images/Content_design.jpg",
    list: [
      {
        id: "1",
        title: "تصميم المواد التسويقية: المنشورات، البوسترات، واللافتات",
      },
      { id: "2", title: "تصميم الهويات البصرية والعلامات التجارية" },
    ],
  },
];

export const customerReviews = [
  {
    quote:
      "الخدمة كانت رائعة! لقد حققنا نتائج مدهشة والفريق كان محترفاً للغاية طوال الوقت.",
    name: "مصطفى ابورويص",
    title: "المدير التنفيذي، شركة النجاح",
  },
  {
    quote: "تجربة رائعة! الإبداع والتفاني من الفريق تجاوز توقعاتنا بشكل كبير.",
    name: "عبد الله الصغير",
    title: "مدير التسويق، برانديفاي",
  },
  {
    quote: "أنصح بشدة بخدماتهم. الاهتمام بالتفاصيل وجودة العمل كانا رائعين.",
    name: "أحمد علي",
    title: "مستقل",
  },
  {
    quote:
      "الفريق كان متعاونًا جدًا وساعدنا في تحسين استراتيجيات التسويق الخاصة بنا.",
    name: "فاطمة العلي",
    title: "مديرة مشروع، ستارتيك",
  },
  {
    quote:
      "نتائج مبهرة! كانوا دائمًا متاحين للإجابة على أي أسئلة وتقديم الدعم.",
    name: "حسن عمر",
    title: "مالك متجر إلكتروني",
  },
  {
    quote:
      "العمل مع هذا الفريق كان ممتعًا للغاية. لديهم حس عالٍ بالمسؤولية والإبداع.",
    name: "ندى الشافعي",
    title: "مؤسسة شركة إعلامية",
  },
  {
    quote:
      "أنا سعيد جدًا بالخدمة. ساعدوني في تطوير علامة تجارية قوية ومتناسقة.",
    name: "كريم جابر",
    title: "مستشار أعمال",
  },
  {
    quote: "أفضل تجربة عمل مررت بها! احترافية ودقة في كل تفاصيل المشروع.",
    name: "سارة يوسف",
    title: "رائدة أعمال",
  },
  {
    quote: "لقد أحدثوا تغييرًا جذريًا في استراتيجيتنا التسويقية بنتائج مذهلة.",
    name: "إياد الحسن",
    title: "مدير تسويق، تك إنفست",
  },
  {
    quote: "أداء احترافي، وتنفيذ فائق الجودة. سعيد جدًا بنتائج التعاون معهم.",
    name: "لين خالد",
    title: "مصممة جرافيك",
  },
  {
    quote: "دقة، التزام، ونتائج تتحدث عن نفسها. سعدت جدًا بالعمل مع الفريق.",
    name: "ماجد صالح",
    title: "مدير مبيعات، جلوبال ماركتس",
  },
];
