import { useState } from "react";
import Icon from "@/components/ui/icon";

const NAV_LINKS = ["Главная", "О нас", "Специалисты", "Курсы", "Контакты"];

const SPECIALISTS = [
  {
    name: "Дмитров Иван Валерьевич",
    role: "Главный нутрициолог",
    experience: "12 лет опыта",
    description:
      "Кандидат медицинских наук, специалист по клинической нутрициологии и диетотерапии. Автор методик коррекции веса и лечебного питания.",
    courses: ["Нутрициология: основы", "Как распределить БЖУ: основы"],
    avatar: "ДИ",
    color: "from-emerald-400 to-teal-500",
  },
  {
    name: "Горбачева Алла Алексеевна",
    role: "Диетолог-нутрициолог",
    experience: "8 лет опыта",
    description:
      "Эксперт по функциональному питанию и здоровому образу жизни. Специализируется на разработке индивидуальных планов питания для улучшения здоровья.",
    courses: ["Правильное питание — залог здоровья"],
    avatar: "ГА",
    color: "from-lime-400 to-green-500",
  },
  {
    name: "Нечаев Егор Антонович",
    role: "Спортивный нутрициолог",
    experience: "6 лет опыта",
    description:
      "Специалист по спортивному питанию и оптимизации физической формы. Работает с профессиональными спортсменами и любителями активного образа жизни.",
    courses: ["Как распределить БЖУ: основы", "Нутрициология: основы"],
    avatar: "НЕ",
    color: "from-green-400 to-emerald-600",
  },
];

const COURSES = [
  {
    title: "Нутрициология: основы",
    duration: "4 недели",
    lessons: "16 уроков",
    level: "Начинающий",
    description:
      "Фундаментальный курс о науке питания. Вы узнаете, как работают питательные вещества в организме, научитесь читать состав продуктов и строить здоровый рацион.",
    topics: ["Макро- и микронутриенты", "Пищеварительная система", "Витамины и минералы", "Питьевой режим"],
    color: "from-emerald-50 to-teal-50",
    accent: "#10b981",
    icon: "BookOpen",
    teacher: "Дмитров И.В. / Нечаев Е.А.",
  },
  {
    title: "Правильное питание — залог здоровья",
    duration: "6 недель",
    lessons: "24 урока",
    level: "Средний",
    description:
      "Глубокое погружение в связь между питанием и здоровьем. Практические инструменты для составления сбалансированного рациона на каждый день.",
    topics: ["Гликемический индекс", "Антиоксиданты", "Детокс-питание", "Питание при заболеваниях"],
    color: "from-lime-50 to-green-50",
    accent: "#84cc16",
    icon: "Heart",
    teacher: "Горбачева А.А.",
  },
  {
    title: "Как распределить БЖУ: основы",
    duration: "3 недели",
    lessons: "12 уроков",
    level: "Начинающий",
    description:
      "Практический курс по расчёту и балансировке белков, жиров и углеводов под ваши цели — похудение, набор массы или поддержание формы.",
    topics: ["Расчёт нормы калорий", "Белки в рационе", "Полезные жиры", "Сложные углеводы"],
    color: "from-green-50 to-emerald-50",
    accent: "#059669",
    icon: "BarChart2",
    teacher: "Нечаев Е.А. / Дмитров И.В.",
  },
];

const STATS = [
  { value: "2500+", label: "Выпускников" },
  { value: "98%", label: "Довольны результатом" },
  { value: "3", label: "Эксперта-нутрициолога" },
  { value: "5 лет", label: "На рынке образования" },
];

export default function Index() {
  const [activeSection, setActiveSection] = useState("Главная");
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [contactForm, setContactForm] = useState({ name: "", email: "", message: "" });

  const scrollTo = (section: string) => {
    setActiveSection(section);
    const id = section.toLowerCase().replace(/\s/g, "-");
    const map: Record<string, string> = {
      "главная": "hero",
      "о нас": "about",
      "специалисты": "specialists",
      "курсы": "courses",
      "контакты": "contacts",
    };
    const el = document.getElementById(map[section.toLowerCase()] || id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-white font-sans">
      {/* ─── ШАПКА ─── */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b border-green-100 shadow-sm">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-emerald-400 to-green-600 flex items-center justify-center shadow-md">
              <span className="text-white text-lg">🥦</span>
            </div>
            <div>
              <div className="font-bold text-gray-900 text-sm leading-tight">Питайся Правильно</div>
              <div className="text-[10px] text-emerald-600 font-medium">Онлайн-школа нутрициологии</div>
            </div>
          </div>
          <nav className="hidden md:flex items-center gap-1">
            {NAV_LINKS.map((link) => (
              <button
                key={link}
                onClick={() => scrollTo(link)}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                  activeSection === link
                    ? "bg-emerald-50 text-emerald-700"
                    : "text-gray-600 hover:text-emerald-700 hover:bg-emerald-50"
                }`}
              >
                {link}
              </button>
            ))}
          </nav>
          <button
            onClick={() => scrollTo("Курсы")}
            className="bg-gradient-to-r from-emerald-500 to-green-600 text-white text-sm font-semibold px-5 py-2 rounded-full shadow-md hover:shadow-lg hover:scale-105 transition-all duration-200"
          >
            Начать учиться
          </button>
        </div>
      </header>

      {/* ─── ГЕРОЙ ─── */}
      <section id="hero" className="pt-16 min-h-screen flex flex-col relative overflow-hidden">
        {/* Фоновые декоративные элементы */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-20 right-0 w-96 h-96 bg-emerald-100 rounded-full blur-3xl opacity-60" />
          <div className="absolute bottom-20 left-0 w-80 h-80 bg-lime-100 rounded-full blur-3xl opacity-50" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-green-50 rounded-full blur-3xl opacity-40" />
        </div>

        <div className="max-w-6xl mx-auto px-4 sm:px-6 flex flex-col lg:flex-row items-center gap-12 py-16 flex-1 relative z-10">
          <div className="flex-1 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 bg-emerald-50 border border-emerald-200 rounded-full px-4 py-2 mb-6">
              <span className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse" />
              <span className="text-emerald-700 text-sm font-medium">Онлайн-школа нутрициологии</span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6">
              Питание, которое{" "}
              <span className="relative">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-500 to-green-600">
                  меняет жизнь
                </span>
                <svg className="absolute -bottom-2 left-0 w-full" viewBox="0 0 300 12" fill="none">
                  <path d="M2 8 Q75 2 150 8 Q225 14 298 8" stroke="#10b981" strokeWidth="3" strokeLinecap="round" fill="none" />
                </svg>
              </span>
            </h1>
            <p className="text-lg text-gray-500 leading-relaxed mb-8 max-w-xl mx-auto lg:mx-0">
              Освойте науку правильного питания с нашими экспертами. Практические курсы от сертифицированных нутрициологов — от основ до профессионального уровня.
            </p>
            <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
              <button
                onClick={() => scrollTo("Курсы")}
                className="bg-gradient-to-r from-emerald-500 to-green-600 text-white font-bold px-8 py-4 rounded-2xl shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-200 flex items-center gap-2"
              >
                <Icon name="BookOpen" size={20} />
                Смотреть курсы
              </button>
              <button
                onClick={() => scrollTo("О нас")}
                className="bg-white border-2 border-emerald-200 text-emerald-700 font-bold px-8 py-4 rounded-2xl hover:bg-emerald-50 transition-all duration-200 flex items-center gap-2"
              >
                <Icon name="Play" size={20} />
                Узнать больше
              </button>
            </div>
            <div className="mt-10 flex flex-wrap gap-6 justify-center lg:justify-start">
              {STATS.map((s) => (
                <div key={s.label} className="text-center lg:text-left">
                  <div className="text-2xl font-bold text-emerald-600">{s.value}</div>
                  <div className="text-xs text-gray-500">{s.label}</div>
                </div>
              ))}
            </div>
          </div>
          <div className="flex-1 max-w-lg w-full">
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-br from-emerald-200 to-green-300 rounded-3xl blur-xl opacity-40" />
              <img
                src="https://cdn.poehali.dev/projects/13253589-653d-4844-bd50-508297ac9207/files/fde34f90-f951-44f2-a880-9e3dd963e433.jpg"
                alt="Здоровое питание"
                className="relative rounded-3xl shadow-2xl w-full object-cover aspect-square"
              />
              {/* Плавающие карточки */}
              <div className="absolute -left-6 top-1/4 bg-white rounded-2xl shadow-xl p-4 flex items-center gap-3 border border-green-100">
                <div className="w-10 h-10 bg-emerald-100 rounded-xl flex items-center justify-center text-xl">🥗</div>
                <div>
                  <div className="text-xs text-gray-500">Сегодня изучили</div>
                  <div className="font-bold text-gray-800 text-sm">БЖУ баланс</div>
                </div>
              </div>
              <div className="absolute -right-6 bottom-1/4 bg-white rounded-2xl shadow-xl p-4 flex items-center gap-3 border border-green-100">
                <div className="w-10 h-10 bg-lime-100 rounded-xl flex items-center justify-center text-xl">⭐</div>
                <div>
                  <div className="text-xs text-gray-500">Выпускников</div>
                  <div className="font-bold text-gray-800 text-sm">2500+ человек</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Скролл-индикатор */}
        <div className="flex justify-center pb-8 relative z-10">
          <div className="flex flex-col items-center gap-1 text-gray-400 animate-bounce">
            <span className="text-xs">прокрутите</span>
            <Icon name="ChevronDown" size={20} />
          </div>
        </div>
      </section>

      {/* ─── О НАС ─── */}
      <section id="about" className="py-20 bg-gradient-to-br from-emerald-50 via-white to-lime-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-14">
            <div className="inline-flex items-center gap-2 bg-emerald-100 rounded-full px-4 py-2 mb-4">
              <Icon name="Leaf" size={16} className="text-emerald-600" />
              <span className="text-emerald-700 text-sm font-semibold">О нас</span>
            </div>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Мы — эксперты в мире питания</h2>
            <p className="text-gray-500 text-lg max-w-2xl mx-auto">
              «Питайся правильно» — онлайн-школа нутрициологии, где наука встречается с практикой. Мы помогаем людям понять связь между едой и здоровьем.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              {[
                {
                  icon: "🎓",
                  title: "Экспертный подход",
                  text: "Все курсы разработаны практикующими нутрициологами с медицинским образованием и многолетним опытом.",
                },
                {
                  icon: "📱",
                  title: "Учитесь в удобное время",
                  text: "Видеоуроки, практические задания и поддержка куратора — доступны 24/7 с любого устройства.",
                },
                {
                  icon: "🏆",
                  title: "Сертификат по окончании",
                  text: "После каждого курса вы получаете именной сертификат, подтверждающий ваши знания.",
                },
                {
                  icon: "🤝",
                  title: "Сообщество единомышленников",
                  text: "Присоединяйтесь к закрытому чату выпускников, обменивайтесь опытом и поддерживайте друг друга.",
                },
              ].map((item) => (
                <div key={item.title} className="flex gap-4 p-5 bg-white rounded-2xl shadow-sm border border-green-100 hover:shadow-md transition-shadow">
                  <div className="w-12 h-12 bg-emerald-50 rounded-xl flex items-center justify-center text-2xl flex-shrink-0">
                    {item.icon}
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-1">{item.title}</h3>
                    <p className="text-gray-500 text-sm leading-relaxed">{item.text}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="relative">
              <div className="bg-gradient-to-br from-emerald-500 to-green-600 rounded-3xl p-8 text-white shadow-2xl">
                <div className="text-6xl mb-4">🌿</div>
                <h3 className="text-2xl font-bold mb-4">Наша миссия</h3>
                <p className="text-emerald-100 leading-relaxed mb-6">
                  Сделать знания о правильном питании доступными для каждого. Мы верим, что осознанный подход к еде — это фундамент долгой и здоровой жизни.
                </p>
                <div className="grid grid-cols-2 gap-4">
                  {[
                    { v: "2019", l: "Год основания" },
                    { v: "3", l: "Эксперта" },
                    { v: "3", l: "Авторских курса" },
                    { v: "100%", l: "Онлайн-обучение" },
                  ].map((s) => (
                    <div key={s.l} className="bg-white/20 rounded-xl p-3 text-center">
                      <div className="text-2xl font-bold">{s.v}</div>
                      <div className="text-emerald-100 text-xs">{s.l}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── СПЕЦИАЛИСТЫ ─── */}
      <section id="specialists" className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-14">
            <div className="inline-flex items-center gap-2 bg-emerald-100 rounded-full px-4 py-2 mb-4">
              <Icon name="Users" size={16} className="text-emerald-600" />
              <span className="text-emerald-700 text-sm font-semibold">Наши специалисты</span>
            </div>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Учите у лучших</h2>
            <p className="text-gray-500 text-lg max-w-xl mx-auto">
              Наши преподаватели — практикующие специалисты с реальным клиническим опытом
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {SPECIALISTS.map((spec) => (
              <div
                key={spec.name}
                className="group bg-white rounded-3xl border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden hover:-translate-y-1"
              >
                {/* Шапка карточки */}
                <div className={`bg-gradient-to-br ${spec.color} p-8 flex flex-col items-center text-white relative overflow-hidden`}>
                  <div className="absolute inset-0 opacity-20">
                    {[...Array(6)].map((_, i) => (
                      <div
                        key={i}
                        className="absolute rounded-full bg-white"
                        style={{
                          width: `${40 + i * 20}px`,
                          height: `${40 + i * 20}px`,
                          top: `${-10 + i * 5}px`,
                          right: `${-10 + i * 8}px`,
                          opacity: 0.3 - i * 0.04,
                        }}
                      />
                    ))}
                  </div>
                  <div className="w-20 h-20 bg-white/30 backdrop-blur rounded-full flex items-center justify-center text-2xl font-bold mb-3 border-4 border-white/50 relative z-10">
                    {spec.avatar}
                  </div>
                  <div className="relative z-10 text-center">
                    <h3 className="font-bold text-lg leading-tight">{spec.name}</h3>
                    <p className="text-white/80 text-sm mt-1">{spec.role}</p>
                    <div className="mt-2 inline-flex items-center gap-1 bg-white/20 rounded-full px-3 py-1 text-xs font-medium">
                      <Icon name="Award" size={12} />
                      {spec.experience}
                    </div>
                  </div>
                </div>

                {/* Тело карточки */}
                <div className="p-6 space-y-4">
                  <p className="text-gray-500 text-sm leading-relaxed">{spec.description}</p>
                  <div>
                    <div className="text-xs font-bold text-gray-700 uppercase tracking-wide mb-2 flex items-center gap-1">
                      <Icon name="BookOpen" size={12} className="text-emerald-500" />
                      Преподаёт курсы:
                    </div>
                    <div className="space-y-1">
                      {spec.courses.map((course) => (
                        <div
                          key={course}
                          className="flex items-center gap-2 text-sm text-emerald-700 bg-emerald-50 rounded-lg px-3 py-2"
                        >
                          <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full flex-shrink-0" />
                          {course}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── КУРСЫ ─── */}
      <section id="courses" className="py-20 bg-gradient-to-br from-gray-50 to-emerald-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-14">
            <div className="inline-flex items-center gap-2 bg-emerald-100 rounded-full px-4 py-2 mb-4">
              <Icon name="GraduationCap" size={16} className="text-emerald-600" />
              <span className="text-emerald-700 text-sm font-semibold">Наши курсы</span>
            </div>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Начните свой путь к здоровью</h2>
            <p className="text-gray-500 text-lg max-w-xl mx-auto">
              Три авторских курса от практикующих нутрициологов — выберите подходящий и начните уже сегодня
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {COURSES.map((course, idx) => (
              <div
                key={course.title}
                className="group bg-white rounded-3xl shadow-sm hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-100 hover:-translate-y-2 flex flex-col"
              >
                {/* Шапка */}
                <div className={`bg-gradient-to-br ${course.color} p-6 relative overflow-hidden`}>
                  <div
                    className="absolute -right-6 -top-6 w-28 h-28 rounded-full opacity-20"
                    style={{ background: course.accent }}
                  />
                  <div className="relative z-10 flex items-start justify-between">
                    <div
                      className="w-12 h-12 rounded-2xl flex items-center justify-center shadow-md"
                      style={{ background: course.accent }}
                    >
                      <Icon name={course.icon as "BookOpen"} size={22} className="text-white" />
                    </div>
                    <span className="bg-white/80 backdrop-blur text-gray-700 text-xs font-bold px-3 py-1 rounded-full border border-gray-200">
                      {course.level}
                    </span>
                  </div>
                  <h3 className="font-bold text-gray-900 text-lg mt-4 leading-tight">{course.title}</h3>
                  <div className="flex items-center gap-4 mt-3 text-sm text-gray-500">
                    <span className="flex items-center gap-1">
                      <Icon name="Clock" size={13} />
                      {course.duration}
                    </span>
                    <span className="flex items-center gap-1">
                      <Icon name="PlayCircle" size={13} />
                      {course.lessons}
                    </span>
                  </div>
                </div>

                {/* Тело */}
                <div className="p-6 flex flex-col flex-1 space-y-4">
                  <p className="text-gray-500 text-sm leading-relaxed">{course.description}</p>

                  <div>
                    <div className="text-xs font-bold text-gray-700 uppercase tracking-wide mb-2">Темы курса:</div>
                    <div className="grid grid-cols-2 gap-1">
                      {course.topics.map((topic) => (
                        <div key={topic} className="flex items-center gap-1 text-xs text-gray-600">
                          <span className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: course.accent }} />
                          {topic}
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="flex items-center gap-2 pt-2 border-t border-gray-100 mt-auto">
                    <Icon name="User" size={14} className="text-gray-400" />
                    <span className="text-xs text-gray-500">{course.teacher}</span>
                  </div>

                  <button
                    className="w-full py-3 rounded-2xl font-bold text-sm text-white shadow-md hover:shadow-lg hover:scale-105 transition-all duration-200"
                    style={{ background: `linear-gradient(135deg, ${course.accent}, ${course.accent}cc)` }}
                  >
                    Записаться на курс
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Баннер гарантии */}
          <div className="mt-12 bg-gradient-to-r from-emerald-500 to-green-600 rounded-3xl p-8 text-white text-center shadow-xl">
            <div className="text-4xl mb-3">🛡️</div>
            <h3 className="text-2xl font-bold mb-2">Гарантия результата</h3>
            <p className="text-emerald-100 max-w-lg mx-auto">
              Если в течение 14 дней после начала обучения курс вам не понравится — вернём деньги без вопросов.
            </p>
          </div>
        </div>
      </section>

      {/* ─── FAQ ─── */}
      <section className="py-20 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Частые вопросы</h2>
            <p className="text-gray-500">Ответы на самые популярные вопросы наших студентов</p>
          </div>
          <div className="space-y-3">
            {[
              {
                q: "Нужно ли медицинское образование для прохождения курсов?",
                a: "Нет! Наши курсы рассчитаны на всех — от полных новичков до специалистов. Мы объясняем сложные вещи простым языком.",
              },
              {
                q: "Сколько времени занимает обучение в день?",
                a: "Достаточно 30–60 минут в день. Все материалы остаются доступны навсегда, вы можете учиться в удобном темпе.",
              },
              {
                q: "Получу ли я сертификат после обучения?",
                a: "Да, после успешного прохождения курса и выполнения итогового задания вы получаете именной сертификат.",
              },
              {
                q: "Есть ли живое общение с преподавателями?",
                a: "Да! Каждый студент получает доступ к закрытому чату, где можно задать вопрос преподавателю и получить ответ в течение 24 часов.",
              },
            ].map((faq, i) => (
              <div key={i} className="border border-gray-100 rounded-2xl overflow-hidden">
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full px-6 py-5 text-left flex items-center justify-between hover:bg-emerald-50 transition-colors"
                >
                  <span className="font-semibold text-gray-800">{faq.q}</span>
                  <Icon
                    name="ChevronDown"
                    size={20}
                    className={`text-emerald-500 flex-shrink-0 transition-transform duration-300 ${openFaq === i ? "rotate-180" : ""}`}
                  />
                </button>
                {openFaq === i && (
                  <div className="px-6 pb-5 text-gray-500 leading-relaxed text-sm">{faq.a}</div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── КОНТАКТЫ ─── */}
      <section id="contacts" className="py-20 bg-gradient-to-br from-emerald-50 to-green-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-14">
            <div className="inline-flex items-center gap-2 bg-emerald-100 rounded-full px-4 py-2 mb-4">
              <Icon name="Mail" size={16} className="text-emerald-600" />
              <span className="text-emerald-700 text-sm font-semibold">Контакты</span>
            </div>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Свяжитесь с нами</h2>
            <p className="text-gray-500 text-lg">Есть вопросы? Мы ответим в течение нескольких часов</p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-start">
            {/* Форма */}
            <div className="bg-white rounded-3xl shadow-lg p-8 border border-green-100">
              <h3 className="text-xl font-bold text-gray-900 mb-6">Напишите нам</h3>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Ваше имя</label>
                  <input
                    type="text"
                    placeholder="Иван Петров"
                    value={contactForm.name}
                    onChange={(e) => setContactForm({ ...contactForm, name: e.target.value })}
                    className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-300 focus:border-emerald-400 transition-all text-sm"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                  <input
                    type="email"
                    placeholder="ivan@example.com"
                    value={contactForm.email}
                    onChange={(e) => setContactForm({ ...contactForm, email: e.target.value })}
                    className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-300 focus:border-emerald-400 transition-all text-sm"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Сообщение</label>
                  <textarea
                    rows={4}
                    placeholder="Хочу узнать подробнее о курсах..."
                    value={contactForm.message}
                    onChange={(e) => setContactForm({ ...contactForm, message: e.target.value })}
                    className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-300 focus:border-emerald-400 transition-all text-sm resize-none"
                  />
                </div>
                <button className="w-full bg-gradient-to-r from-emerald-500 to-green-600 text-white font-bold py-4 rounded-2xl shadow-md hover:shadow-xl hover:scale-[1.02] transition-all duration-200 flex items-center justify-center gap-2">
                  <Icon name="Send" size={18} />
                  Отправить сообщение
                </button>
              </div>
            </div>

            {/* Контактная информация */}
            <div className="space-y-6">
              {[
                { icon: "Mail", title: "Email", value: "info@pitajsya-pravilno.ru", color: "bg-emerald-50 text-emerald-600" },
                { icon: "Phone", title: "Телефон", value: "+7 (800) 555-35-35", color: "bg-green-50 text-green-600" },
                { icon: "Clock", title: "Режим работы", value: "Пн–Пт: 9:00–18:00", color: "bg-lime-50 text-lime-600" },
                { icon: "MessageCircle", title: "Telegram", value: "@pitajsya_pravilno", color: "bg-teal-50 text-teal-600" },
              ].map((c) => (
                <div key={c.title} className="bg-white rounded-2xl p-5 shadow-sm border border-green-100 flex items-center gap-4 hover:shadow-md transition-shadow">
                  <div className={`w-12 h-12 ${c.color} rounded-xl flex items-center justify-center flex-shrink-0`}>
                    <Icon name={c.icon as "Mail"} size={22} />
                  </div>
                  <div>
                    <div className="text-xs text-gray-400 font-medium">{c.title}</div>
                    <div className="font-semibold text-gray-800">{c.value}</div>
                  </div>
                </div>
              ))}

              <div className="bg-gradient-to-br from-emerald-500 to-green-600 rounded-2xl p-6 text-white">
                <div className="text-3xl mb-2">🥗</div>
                <h3 className="font-bold text-lg mb-1">Готовы начать?</h3>
                <p className="text-emerald-100 text-sm leading-relaxed">
                  Присоединяйтесь к 2500+ студентам, которые уже изменили своё питание и качество жизни.
                </p>
                <button
                  onClick={() => scrollTo("Курсы")}
                  className="mt-4 bg-white text-emerald-700 font-bold px-5 py-2.5 rounded-xl text-sm hover:bg-emerald-50 transition-colors"
                >
                  Выбрать курс →
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── ПОДВАЛ ─── */}
      <footer className="bg-gray-900 text-gray-400 py-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-emerald-400 to-green-600 flex items-center justify-center">
                <span className="text-white text-lg">🥦</span>
              </div>
              <div>
                <div className="font-bold text-white text-sm">Питайся Правильно</div>
                <div className="text-xs text-emerald-400">Онлайн-школа нутрициологии</div>
              </div>
            </div>
            <nav className="flex flex-wrap gap-4 justify-center">
              {NAV_LINKS.map((link) => (
                <button
                  key={link}
                  onClick={() => scrollTo(link)}
                  className="text-sm hover:text-white transition-colors"
                >
                  {link}
                </button>
              ))}
            </nav>
            <p className="text-xs text-center">© 2024 Питайся Правильно. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
