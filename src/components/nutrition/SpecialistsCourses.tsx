import Icon from "@/components/ui/icon";

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

export default function SpecialistsCourses() {
  return (
    <>
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
            {COURSES.map((course) => (
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
    </>
  );
}
