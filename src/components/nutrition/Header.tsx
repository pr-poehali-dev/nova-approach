import Icon from "@/components/ui/icon";

const NAV_LINKS = ["Главная", "О нас", "Специалисты", "Курсы", "Контакты"];

interface HeaderProps {
  activeSection: string;
  scrollTo: (section: string) => void;
}

export default function Header({ activeSection, scrollTo }: HeaderProps) {
  return (
    <>
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
    </>
  );
}
