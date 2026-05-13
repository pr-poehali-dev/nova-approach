import Icon from "@/components/ui/icon";

const STATS = [
  { value: "2500+", label: "Выпускников" },
  { value: "98%", label: "Довольны результатом" },
  { value: "3", label: "Эксперта-нутрициолога" },
  { value: "5 лет", label: "На рынке образования" },
];

interface HeroAboutProps {
  scrollTo: (section: string) => void;
}

export default function HeroAbout({ scrollTo }: HeroAboutProps) {
  return (
    <>
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
    </>
  );
}
