import { useState } from "react";
import Icon from "@/components/ui/icon";

const SPECIALIST_PHOTO = "https://cdn.poehali.dev/projects/e4f136b8-0663-49c6-bb11-081dd0066370/files/b043df5a-7cdf-4552-a2b0-52be8d426236.jpg";

const reviews = [
  {
    name: "Мария К.",
    text: "Анна помогла мне разобраться в отношениях с самой собой. После трёх месяцев работы я впервые почувствовала, что живу своей жизнью, а не чужой.",
    tag: "Работа с тревогой",
  },
  {
    name: "Дмитрий Л.",
    text: "Профессиональный подход, глубокое понимание. Я пришёл с выгоранием — ушёл с ощущением, что снова знаю, зачем просыпаться по утрам.",
    tag: "Выгорание",
  },
  {
    name: "Елена В.",
    text: "Деликатность и внимание на каждой сессии. Анна создаёт безопасное пространство, где можно говорить о самом сложном без страха осуждения.",
    tag: "Самооценка",
  },
];

const navLinks = [
  { label: "О специалисте", href: "#about" },
  { label: "Отзывы", href: "#reviews" },
  { label: "Запись", href: "#contact" },
];

export default function Index() {
  const [form, setForm] = useState({ name: "", phone: "", message: "" });
  const [sent, setSent] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <div className="min-h-screen" style={{ backgroundColor: "var(--dark-bg)", color: "#e8e0d0" }}>

      {/* NAV */}
      <nav
        className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 md:px-12 py-4"
        style={{ backgroundColor: "rgba(15, 14, 11, 0.9)", backdropFilter: "blur(12px)", borderBottom: "1px solid var(--dark-line)" }}
      >
        <span className="font-cormorant text-xl tracking-widest text-gold" style={{ letterSpacing: "0.2em", fontFamily: "'Cormorant', serif" }}>
          А. СОКОЛОВА
        </span>

        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="font-golos text-sm tracking-wider transition-colors duration-300"
              style={{ color: "#a09080", letterSpacing: "0.1em", fontFamily: "'Golos Text', sans-serif" }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "var(--gold)")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "#a09080")}
            >
              {l.label}
            </a>
          ))}
          <a
            href="#contact"
            className="font-golos text-sm px-5 py-2 tracking-wider transition-all duration-300"
            style={{
              border: "1px solid var(--gold)",
              color: "var(--gold)",
              letterSpacing: "0.1em",
              fontFamily: "'Golos Text', sans-serif",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = "var(--gold)";
              e.currentTarget.style.color = "#0f0e0b";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = "transparent";
              e.currentTarget.style.color = "var(--gold)";
            }}
          >
            Записаться
          </a>
        </div>

        <button className="md:hidden" style={{ color: "var(--gold)" }} onClick={() => setMenuOpen(!menuOpen)}>
          <Icon name={menuOpen ? "X" : "Menu"} size={22} />
        </button>
      </nav>

      {/* MOBILE MENU */}
      {menuOpen && (
        <div
          className="fixed inset-0 z-40 flex flex-col items-center justify-center gap-8"
          style={{ backgroundColor: "rgba(15,14,11,0.97)" }}
        >
          {navLinks.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setMenuOpen(false)}
              style={{ fontFamily: "'Cormorant', serif", fontSize: "2rem", color: "var(--gold)", letterSpacing: "0.1em" }}
            >
              {l.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setMenuOpen(false)}
            className="text-sm px-8 py-3 mt-4"
            style={{ border: "1px solid var(--gold)", color: "var(--gold)", fontFamily: "'Golos Text', sans-serif" }}
          >
            Записаться
          </a>
        </div>
      )}

      {/* HERO */}
      <section
        className="relative flex items-center justify-center min-h-screen overflow-hidden"
        style={{
          background: "radial-gradient(ellipse at 60% 40%, rgba(201,168,76,0.08) 0%, transparent 60%), var(--dark-bg)",
        }}
      >
        <div className="absolute left-12 top-0 bottom-0 hidden lg:block" style={{ width: "1px", background: "linear-gradient(180deg, transparent 0%, rgba(201,168,76,0.25) 40%, transparent 100%)" }} />
        <div className="absolute right-12 top-0 bottom-0 hidden lg:block" style={{ width: "1px", background: "linear-gradient(180deg, transparent 0%, rgba(201,168,76,0.25) 40%, transparent 100%)" }} />

        <div className="relative z-10 text-center px-6 max-w-3xl mx-auto">
          <p className="animate-fade-up text-xs tracking-widest mb-8" style={{ color: "var(--gold)", letterSpacing: "0.3em", fontFamily: "'Golos Text', sans-serif" }}>
            ПСИХОЛОГ · ПСИХОАНАЛИТИК
          </p>

          <h1 className="animate-fade-up-delay-1 mb-6" style={{ fontFamily: "'Cormorant', serif", fontSize: "clamp(3rem, 8vw, 7rem)", fontWeight: 300, lineHeight: 1.05, color: "#f0e8d8" }}>
            Анна<br />
            <span style={{ fontStyle: "italic", color: "var(--gold)" }}>Соколова</span>
          </h1>

          <div className="gold-line mx-auto mb-6 animate-fade-up-delay-1" style={{ width: "80px" }} />

          <p className="animate-fade-up-delay-2 mb-10" style={{ fontFamily: "'Golos Text', sans-serif", fontSize: "1.05rem", lineHeight: 1.8, color: "#a09080", maxWidth: "480px", margin: "0 auto 2.5rem" }}>
            Помогаю найти путь к себе через глубинную работу с внутренними конфликтами, тревогой и отношениями
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-up-delay-3" style={{ marginTop: "2.5rem" }}>
            <a
              href="#contact"
              className="px-10 py-4 text-sm tracking-widest transition-all duration-300"
              style={{
                backgroundColor: "var(--gold)",
                color: "#0f0e0b",
                letterSpacing: "0.15em",
                fontWeight: 500,
                fontFamily: "'Golos Text', sans-serif",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "var(--gold-light)")}
              onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "var(--gold)")}
            >
              ЗАПИСАТЬСЯ НА СЕССИЮ
            </a>
            <a
              href="#about"
              className="px-10 py-4 text-sm tracking-widest transition-all duration-300"
              style={{
                border: "1px solid rgba(201,168,76,0.4)",
                color: "#a09080",
                letterSpacing: "0.15em",
                fontFamily: "'Golos Text', sans-serif",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = "var(--gold)";
                e.currentTarget.style.color = "var(--gold)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = "rgba(201,168,76,0.4)";
                e.currentTarget.style.color = "#a09080";
              }}
            >
              О СПЕЦИАЛИСТЕ
            </a>
          </div>

          <div className="flex justify-center gap-12 mt-16 animate-fade-up-delay-3">
            {[
              { num: "8+", label: "лет практики" },
              { num: "300+", label: "клиентов" },
              { num: "4000+", label: "часов терапии" },
            ].map((s) => (
              <div key={s.label} className="text-center">
                <div style={{ fontFamily: "'Cormorant', serif", fontSize: "2rem", color: "var(--gold)", fontWeight: 400 }}>{s.num}</div>
                <div className="text-xs mt-1" style={{ color: "#70604e", letterSpacing: "0.05em", fontFamily: "'Golos Text', sans-serif" }}>{s.label}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-40">
          <div style={{ width: "1px", height: "48px", background: "linear-gradient(180deg, transparent, var(--gold))" }} />
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="py-24 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="gold-line mb-12" />
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <div className="absolute -top-4 -left-4 w-full h-full" style={{ border: "1px solid rgba(201,168,76,0.2)" }} />
              <img
                src={SPECIALIST_PHOTO}
                alt="Анна Соколова"
                className="relative z-10 w-full object-cover"
                style={{ aspectRatio: "3/4", filter: "brightness(0.9) contrast(1.05)" }}
              />
              <div className="absolute -bottom-4 -right-4 w-full h-full z-0" style={{ border: "1px solid rgba(201,168,76,0.1)" }} />
            </div>

            <div>
              <p className="text-xs tracking-widest mb-4" style={{ color: "var(--gold)", letterSpacing: "0.25em", fontFamily: "'Golos Text', sans-serif" }}>
                О СПЕЦИАЛИСТЕ
              </p>
              <h2 className="mb-6" style={{ fontFamily: "'Cormorant', serif", fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 300, color: "#f0e8d8", lineHeight: 1.2 }}>
                Психология — это<br />
                <span style={{ fontStyle: "italic" }}>путь к себе</span>
              </h2>
              <div className="gold-line mb-6" style={{ width: "60px" }} />

              <p className="mb-6" style={{ fontFamily: "'Golos Text', sans-serif", color: "#907860", lineHeight: 1.85, fontSize: "0.95rem" }}>
                Я работаю в психоаналитическом направлении уже более восьми лет. Помогаю людям, которые чувствуют тревогу, переживают кризис в отношениях, сталкиваются с выгоранием или ищут смысл.
              </p>
              <p className="mb-8" style={{ fontFamily: "'Golos Text', sans-serif", color: "#907860", lineHeight: 1.85, fontSize: "0.95rem" }}>
                В работе я опираюсь на уважение, внимание и профессиональный нейтралитет. Каждая встреча — это совместное исследование, в котором вы остаётесь главным автором.
              </p>

              <div className="space-y-3">
                {[
                  "МГУ им. Ломоносова, факультет психологии",
                  "Сертификат психоаналитика (IPA, 2019)",
                  "Личная терапия и супервизия",
                  "Работа онлайн и очно (Москва)",
                ].map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <div className="mt-2 flex-shrink-0" style={{ width: "5px", height: "5px", backgroundColor: "var(--gold)" }} />
                    <span className="text-sm" style={{ fontFamily: "'Golos Text', sans-serif", color: "#a09080" }}>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="gold-line mx-6 md:mx-24" />

      {/* REVIEWS */}
      <section id="reviews" className="py-24 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-xs tracking-widest mb-4" style={{ color: "var(--gold)", letterSpacing: "0.25em", fontFamily: "'Golos Text', sans-serif" }}>
              ОТЗЫВЫ
            </p>
            <h2 style={{ fontFamily: "'Cormorant', serif", fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 300, color: "#f0e8d8" }}>
              Что говорят<br />
              <span style={{ fontStyle: "italic" }}>клиенты</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {reviews.map((r, i) => (
              <div
                key={i}
                className="relative p-8 transition-all duration-500"
                style={{ backgroundColor: "var(--dark-card)", border: "1px solid rgba(201,168,76,0.12)" }}
                onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.borderColor = "rgba(201,168,76,0.35)"; }}
                onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.borderColor = "rgba(201,168,76,0.12)"; }}
              >
                <div className="leading-none mb-6" style={{ fontFamily: "'Cormorant', serif", fontSize: "3.5rem", color: "var(--gold)", opacity: 0.4 }}>"</div>
                <p className="mb-6" style={{ fontFamily: "'Golos Text', sans-serif", color: "#907860", lineHeight: 1.8, fontSize: "0.9rem" }}>
                  {r.text}
                </p>
                <div className="gold-line mb-4" />
                <div className="flex items-center justify-between">
                  <span style={{ fontFamily: "'Cormorant', serif", fontSize: "1.1rem", color: "#c8b898" }}>{r.name}</span>
                  <span className="text-xs px-3 py-1" style={{ border: "1px solid rgba(201,168,76,0.25)", color: "var(--gold)", fontFamily: "'Golos Text', sans-serif", letterSpacing: "0.05em" }}>
                    {r.tag}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="gold-line mx-6 md:mx-24" />

      {/* CONTACT */}
      <section id="contact" className="py-24 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-xs tracking-widest mb-4" style={{ color: "var(--gold)", letterSpacing: "0.25em", fontFamily: "'Golos Text', sans-serif" }}>
              КОНТАКТЫ
            </p>
            <h2 className="mb-4" style={{ fontFamily: "'Cormorant', serif", fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 300, color: "#f0e8d8" }}>
              Начните<br />
              <span style={{ fontStyle: "italic" }}>свой путь</span>
            </h2>
            <p className="text-sm" style={{ color: "#706050", fontFamily: "'Golos Text', sans-serif" }}>
              Оставьте заявку — я отвечу в течение дня
            </p>
          </div>

          <div className="grid md:grid-cols-5 gap-12 items-start">
            <div className="md:col-span-2 space-y-8">
              {[
                { icon: "Phone", label: "Телефон", value: "+7 (999) 000-00-00" },
                { icon: "Mail", label: "E-mail", value: "anna@psychology.ru" },
                { icon: "MapPin", label: "Адрес", value: "Москва, ул. Пречистенка, 10" },
                { icon: "Clock", label: "Часы", value: "Пн–Пт: 10:00–20:00" },
              ].map((c) => (
                <div key={c.label} className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-10 h-10 flex items-center justify-center" style={{ border: "1px solid rgba(201,168,76,0.25)" }}>
                    <Icon name={c.icon} size={16} style={{ color: "var(--gold)" } as React.CSSProperties} />
                  </div>
                  <div>
                    <div className="text-xs mb-1 tracking-wider" style={{ color: "var(--gold)", letterSpacing: "0.1em", fontFamily: "'Golos Text', sans-serif" }}>{c.label}</div>
                    <div className="text-sm" style={{ color: "#a09080", fontFamily: "'Golos Text', sans-serif" }}>{c.value}</div>
                  </div>
                </div>
              ))}
            </div>

            <div className="md:col-span-3">
              {sent ? (
                <div className="text-center py-16" style={{ border: "1px solid rgba(201,168,76,0.2)", backgroundColor: "var(--dark-card)" }}>
                  <div className="mb-4" style={{ fontFamily: "'Cormorant', serif", fontSize: "3rem", color: "var(--gold)" }}>✦</div>
                  <h3 className="text-2xl mb-3" style={{ fontFamily: "'Cormorant', serif", color: "#f0e8d8" }}>Заявка отправлена</h3>
                  <p className="text-sm" style={{ color: "#706050", fontFamily: "'Golos Text', sans-serif" }}>Я свяжусь с вами в течение дня</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4" style={{ backgroundColor: "var(--dark-card)", border: "1px solid rgba(201,168,76,0.12)", padding: "2.5rem" }}>
                  {[
                    { id: "name", label: "Ваше имя", type: "text", placeholder: "Как вас зовут?" },
                    { id: "phone", label: "Телефон", type: "tel", placeholder: "+7 (___) ___-__-__" },
                  ].map((f) => (
                    <div key={f.id}>
                      <label className="text-xs tracking-wider block mb-2" style={{ color: "var(--gold)", letterSpacing: "0.1em", fontFamily: "'Golos Text', sans-serif" }}>
                        {f.label}
                      </label>
                      <input
                        type={f.type}
                        placeholder={f.placeholder}
                        value={form[f.id as keyof typeof form]}
                        onChange={(e) => setForm({ ...form, [f.id]: e.target.value })}
                        className="w-full px-4 py-3 text-sm outline-none transition-all duration-300"
                        style={{
                          backgroundColor: "rgba(201,168,76,0.04)",
                          border: "1px solid rgba(201,168,76,0.18)",
                          color: "#e8e0d0",
                          fontFamily: "'Golos Text', sans-serif",
                        }}
                        onFocus={(e) => (e.currentTarget.style.borderColor = "rgba(201,168,76,0.6)")}
                        onBlur={(e) => (e.currentTarget.style.borderColor = "rgba(201,168,76,0.18)")}
                        required
                      />
                    </div>
                  ))}
                  <div>
                    <label className="text-xs tracking-wider block mb-2" style={{ color: "var(--gold)", letterSpacing: "0.1em", fontFamily: "'Golos Text', sans-serif" }}>
                      Сообщение
                    </label>
                    <textarea
                      rows={4}
                      placeholder="Расскажите немного о запросе (необязательно)"
                      value={form.message}
                      onChange={(e) => setForm({ ...form, message: e.target.value })}
                      className="w-full px-4 py-3 text-sm outline-none resize-none transition-all duration-300"
                      style={{
                        backgroundColor: "rgba(201,168,76,0.04)",
                        border: "1px solid rgba(201,168,76,0.18)",
                        color: "#e8e0d0",
                        fontFamily: "'Golos Text', sans-serif",
                      }}
                      onFocus={(e) => (e.currentTarget.style.borderColor = "rgba(201,168,76,0.6)")}
                      onBlur={(e) => (e.currentTarget.style.borderColor = "rgba(201,168,76,0.18)")}
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full py-4 text-sm tracking-widest transition-all duration-300 mt-2"
                    style={{
                      backgroundColor: "var(--gold)",
                      color: "#0f0e0b",
                      letterSpacing: "0.18em",
                      fontWeight: 500,
                      fontFamily: "'Golos Text', sans-serif",
                    }}
                    onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "var(--gold-light)")}
                    onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "var(--gold)")}
                  >
                    ОТПРАВИТЬ ЗАЯВКУ
                  </button>
                  <p className="text-xs text-center" style={{ color: "#504030", fontFamily: "'Golos Text', sans-serif" }}>
                    Нажимая кнопку, вы соглашаетесь с обработкой персональных данных
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer style={{ borderTop: "1px solid rgba(201,168,76,0.15)", backgroundColor: "rgba(0,0,0,0.3)" }}>
        <div className="max-w-5xl mx-auto px-6 py-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <span style={{ fontFamily: "'Cormorant', serif", fontSize: "1.15rem", letterSpacing: "0.2em", color: "var(--gold)" }}>
            А. СОКОЛОВА
          </span>
          <p className="text-xs" style={{ color: "#504030", fontFamily: "'Golos Text', sans-serif" }}>
            © 2026 · Психолог Анна Соколова · Москва
          </p>
          <div className="flex gap-4">
            {["Instagram", "MessageCircle"].map((icon) => (
              <button
                key={icon}
                className="w-8 h-8 flex items-center justify-center transition-colors duration-300"
                style={{ border: "1px solid rgba(201,168,76,0.2)", color: "#706050" }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.borderColor = "var(--gold)";
                  (e.currentTarget as HTMLElement).style.color = "var(--gold)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.borderColor = "rgba(201,168,76,0.2)";
                  (e.currentTarget as HTMLElement).style.color = "#706050";
                }}
              >
                <Icon name={icon} size={14} />
              </button>
            ))}
          </div>
        </div>
      </footer>
    </div>
  );
}
