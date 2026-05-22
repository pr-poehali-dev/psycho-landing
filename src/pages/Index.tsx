import { useEffect, useState } from "react";

const HERO_PHOTO = "https://cdn.poehali.dev/projects/e4f136b8-0663-49c6-bb11-081dd0066370/bucket/097515af-2f47-4216-975a-45f1557c16e1.jpeg";
const POETRY_IMG = "https://user-gen-media-assets.s3.amazonaws.com/gpt4o_images/d074a64d-a938-44b8-bde0-ebaf5b9ef4ad.png";

function useReveal() {
  useEffect(() => {
    const els = document.querySelectorAll(".ol-reveal");
    const obs = new IntersectionObserver(
      (entries) => entries.forEach((e) => { if (e.isIntersecting) { e.target.classList.add("visible"); obs.unobserve(e.target); } }),
      { threshold: 0.1, rootMargin: "0px 0px -40px 0px" }
    );
    els.forEach((el) => obs.observe(el));
    return () => obs.disconnect();
  }, []);
}

function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const h = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", h, { passive: true });
    return () => window.removeEventListener("scroll", h);
  }, []);
  const close = () => setOpen(false);
  return (
    <>
      <nav className={`ol-nav${scrolled ? " scrolled" : ""}`}>
        <div className="ol-nav__in">
          <a href="#" className="ol-nav__logo">
            <svg viewBox="0 0 34 34" fill="none">
              <circle cx="17" cy="17" r="16" stroke="#8B3A3A" strokeWidth="1.5"/>
              <path d="M9 21 Q17 9 25 21" stroke="#8B3A3A" strokeWidth="1.5" fill="none" strokeLinecap="round"/>
              <path d="M12 17 Q17 13 22 17" stroke="#C4956A" strokeWidth="1.5" fill="none" strokeLinecap="round"/>
              <circle cx="17" cy="23" r="2" fill="#8B3A3A"/>
            </svg>
            <div className="ol-nav__logo-wrap">
              <div className="ol-nav__name">Оксана Литвиненко</div>
              <div className="ol-nav__sub">Психолог Живой Любви</div>
            </div>
          </a>
          <div className="ol-nav__links">
            <a href="#about">Обо мне</a>
            <a href="#funnel">Программы</a>
            <a href="#testimonials">Отзывы</a>
            <a href="#booking" className="ol-nav__d ol-btn-main ol-btn-nav">Записаться</a>
          </div>
          <button className="ol-nav__burger" onClick={() => setOpen(!open)} aria-label="Меню" aria-expanded={open}>
            <span/><span/><span/>
          </button>
        </div>
      </nav>
      <div className={`ol-mob-menu${open ? " open" : ""}`}>
        <a href="#about" onClick={close}>Обо мне</a>
        <a href="#funnel" onClick={close}>Программы</a>
        <a href="#testimonials" onClick={close}>Отзывы</a>
        <a href="#faq" onClick={close}>FAQ</a>
        <a href="#booking" onClick={close} style={{color:"var(--color-primary)"}}>Записаться →</a>
      </div>
    </>
  );
}

function Hero() {
  return (
    <section className="ol-hero" id="home">
      <div className="ol-hero__content">
        <div className="ol-hero__eyebrow ol-reveal">
          <span className="ol-hero__line"/>
          <span className="ol-hero__label">Психолог · Стихотерапевт · Владивосток</span>
        </div>
        <h1 className="ol-hero__h1 ol-reveal ol-d1">
          Я не спасаю браки.<br/>
          Я возвращаю<br/>
          <em>женщин к себе</em><br/>
          и браки оживают сами.
        </h1>
        <p className="ol-hero__sub ol-reveal ol-d2">Если живёшь «правильно», но внутри – пустота. Если рядом человек, а ты – одинока. Начни с честного разговора.</p>
        <div className="ol-hero__btns ol-reveal ol-d3">
          <a href="#booking" className="ol-btn-main ol-pulse-ring">Разговор по существу – бесплатно</a>
        </div>
        <div className="ol-hero__stats ol-reveal ol-d4">
          <div><div className="ol-hero__stat-num">300+</div><div className="ol-hero__stat-txt">клиенток</div></div>
          <div><div className="ol-hero__stat-num">30 лет</div><div className="ol-hero__stat-txt">в браке</div></div>
          <div><div className="ol-hero__stat-num">51</div><div className="ol-hero__stat-txt">год. Мама троих</div></div>
        </div>
      </div>
      <div className="ol-hero__img-wrap">
        <img src={HERO_PHOTO} alt="Оксана Литвиненко" className="ol-hero__img" width={800} height={1000} loading="eager"/>
        <div className="ol-hero__img-ov"/>
      </div>
    </section>
  );
}

function TrustBar() {
  return (
    <div className="ol-tbar">
      <div className="ol-wrap">
        <div className="ol-tbar__in">
          <div className="ol-tbar__item">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{width:18,height:18,color:"var(--color-gold)"}}><circle cx="12" cy="12" r="10"/><path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>
            Онлайн по всему миру
          </div>
        </div>
      </div>
    </div>
  );
}

function Pain() {
  return (
    <section className="ol-pain" id="pain">
      <div className="ol-wrap">
        <div className="ol-pain__grid">
          <div className="ol-reveal" style={{display:"flex",flexDirection:"column",gap:"var(--s6)"}}>
            <span className="ol-tag">Узнаёшь себя?</span>
            <h2 className="ol-pain__head">Ты живёшь <em>правильно</em><em>,</em><br/>но не чувствуешь счастья?</h2>
            <p style={{color:"var(--color-muted)",fontSize:"var(--text-base)",lineHeight:1.7}}>Это не значит, что с тобой что-то не так. Это точка, где реальная трансформация не только возможна – она необходима.</p>
            <ul className="ol-pain__list">
              {["Отношения стали «удобными», но не живыми","Отдаёшь всё – семье, работе, всем – а для себя ничего","Раздражение, усталость, ощущение «всё не то»","Хочешь близости – получается дистанция","Снаружи – всё хорошо. Внутри – пустота","Боишься, что лучшие годы уже позади"].map((t) => (
                <li key={t} className="ol-pain__item"><span className="ol-pain__dot"/>{t}</li>
              ))}
            </ul>
            <span className="ol-tag" style={{width:"fit-content"}}>Узнаёшь себя?</span>
            <a href="#booking" className="ol-btn-main" style={{width:"fit-content",marginTop:"var(--s2)"}}>Записаться на разговор →</a>
          </div>
          <div className="ol-pain__quote-box ol-reveal ol-d2">
            <span className="ol-tag">Личный опыт</span>
            <p className="ol-pain__quote">«Я сама прошла через это. Тридцать лет брака, трое детей, карьера, внешнее благополучие – и внутри вопрос: "Где я сама в этой жизни?" Именно этот путь к себе я помогаю пройти своим клиенткам.»</p>
            <div>
              <div className="ol-pain__qa">— Оксана Литвиненко</div>
              <div style={{fontSize:"var(--text-xs)",color:"var(--color-faint)",marginTop:4}}>Психолог · Стихотерапевт · Владивосток</div>
            </div>
            <div style={{display:"flex",alignItems:"center",gap:"var(--s3)",paddingTop:"var(--s4)",borderTop:"1px solid var(--color-divider)"}}>
              <span style={{color:"var(--color-gold)"}}>★★★★★</span>
              <span style={{fontSize:"var(--text-xs)",color:"var(--color-muted)"}}>300+ клиентов прошли трансформацию</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function MethodsAccordion() {
  const [open, setOpen] = useState(false);
  const methods = [
    "Образно-эмоциональная терапия — проработка эмоций через образы",
    "Расстановки — раскрываем скрытые семейные и личные сценарии",
    "Трансперсональные техники — расширяем сознание и понимание себя",
    "Энергопрактики — восстанавливаем внутренний баланс и уверенность",
    "Психоаналитический подход — разбираемся в глубинных причинах",
    "Коучинговые техники — поддержка и мотивация для изменений",
    "Проективные методы (стихотерапия, МАК-карты) — раскрываем внутренние ресурсы",
    "Метод Принятия правды — помогаю принять настоящую правду о себе и освободиться от блоков",
  ];
  return (
    <div className="ol-accordion ol-reveal ol-d4">
      <button className="ol-accordion__btn" onClick={() => setOpen(!open)} aria-expanded={open}>
        <span>Мои методы работы</span>
        <svg className={`ol-accordion__arrow${open ? " ol-accordion__arrow--open" : ""}`} width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="6 9 12 15 18 9"/></svg>
      </button>
      <div className={`ol-accordion__body${open ? " ol-accordion__body--open" : ""}`}>
        <div className="ol-accordion__inner">
          {methods.map((m) => (
            <div key={m} className="ol-accordion__item">
              <span className="ol-accordion__dot">🔹</span>
              <span>{m}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function About() {
  const check = <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="20 6 9 17 4 12"/></svg>;
  return (
    <section className="ol-about" id="about">
      <div className="ol-wrap">
        <div className="ol-about__in">
          <div className="ol-about__photo-wrap ol-reveal">
            <img src={HERO_PHOTO} alt="Оксана Литвиненко" className="ol-about__photo" width={380} height={507} loading="lazy"/>
            <div className="ol-about__badge">
              <div className="ol-about__badge-n">30+</div>
              <div className="ol-about__badge-l">лет в браке</div>
            </div>
          </div>
          <div className="ol-about__content">
            <span className="ol-tag ol-reveal">Обо мне</span>
            <h2 className="ol-about__name ol-reveal ol-d1">Оксана<br/><em>Литвиненко</em></h2>
            <p className="ol-about__body ol-reveal ol-d2">Мне 51 год. Замужем больше 30 лет. Трое детей. Живу во Владивостоке, работаю онлайн.</p>
            <p className="ol-about__body ol-reveal ol-d2">Я не просто знаю теорию. Я сама прожила кризис, пустоту, усталость от «правильной» жизни — и нашла выход. Именно поэтому мой метод работает: он проверен на мне самой, а не вычитан из книг.</p>
            <p className="ol-about__body ol-reveal ol-d2">Создала авторский <strong>«Метод Живого Слова»</strong> — психология + стихотерапия + МАК. Модератор сообщества «Код публичности».</p>
            <div className="ol-about__facts ol-reveal ol-d3">
              {["Кризисный психолог","Ведущая терапевтических групп","Организатор творческих терапевтических мероприятий","Спикер на ТВ, Радио и федеральных площадках"].map((f) => (
                <div key={f} className="ol-about__fact">{check}{f}</div>
              ))}
            </div>
            <MethodsAccordion />
          </div>
        </div>
      </div>
    </section>
  );
}

function Funnel() {
  return (
    <section className="ol-funnel" id="funnel">
      <div className="ol-wrap">
        <div className="ol-funnel__head">
          <span className="ol-tag ol-reveal">Путь к себе</span>
          <h2 className="ol-funnel__h2 ol-reveal ol-d1">Выбери свой шаг</h2>
          <p className="ol-funnel__sub ol-reveal ol-d2">Начни с того, что откликается прямо сейчас.</p>
        </div>
        <div className="ol-funnel__entry">
          <div className="ol-f-card ol-reveal" id="razgovor">
            <span className="ol-f-badge ol-f-badge--free">Бесплатно</span>

            <div className="ol-f-icon"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.61 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 9.91a16 16 0 0 0 6.29 6.29l.95-.86a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/></svg></div>
            <h3 className="ol-f-title">«Разговор по существу»</h3>
            <p className="ol-f-desc">15 минут честного разговора, без воды — и ты заберёшь первый шаг для выхода из твоей ситуации. Никаких продаж. Только суть.</p>
            <div className="ol-f-price">Бесплатно</div>
            <div className="ol-f-price-note">15 мин · Аудио-созвон</div>
            <p className="ol-f-hook">Это не «пробный урок» — это реальный разговор, после которого ты уйдёшь с конкретным шагом.</p>
            <a href="#booking" className="ol-btn-main" style={{marginTop:"var(--s2)",width:"100%"}}>Записаться на разговор</a>
          </div>
          <div className="ol-f-card ol-reveal ol-d1" id="sbornik">
            <span className="ol-f-badge">1 500 ₽</span>

            <div className="ol-f-icon"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 20h9"/><path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"/></svg></div>
            <h3 className="ol-f-title">Сборник <em>«Собеседница Души»</em></h3>
            <p className="ol-f-desc">Если пока не готова говорить с психологом — начни говорить с собой. Сборник делает это мягко, без давления — через стихи и упражнения, которые я писала для себя в самые трудные моменты.</p>
            <div className="ol-f-price">1 500 ₽</div>
            <div className="ol-f-price-note">Мгновенный доступ · PDF + аудио</div>
            <p className="ol-f-hook">Ты тратишь на кофе и маникюр больше, чем стоит начать слышать себя.</p>
            <a href="#booking" className="ol-btn-soft" style={{marginTop:"var(--s2)",width:"100%"}}>Получить сборник</a>
          </div>
        </div>

        <div className="ol-funnel__deep">
          <div className="ol-f-card ol-reveal">

            <div className="ol-f-icon"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="3"/><path d="M12 1v4M12 19v4M4.22 4.22l2.83 2.83M16.95 16.95l2.83 2.83M1 12h4M19 12h4M4.22 19.78l2.83-2.83M16.95 7.05l2.83-2.83"/></svg></div>
            <h3 className="ol-f-title">«Точка сборки»</h3>
            <p className="ol-f-desc">За 50 минут мы найдём корень — не симптом. Ты уйдёшь с ясным пониманием: что происходит, почему это повторяется и что с этим делать.</p>
            <div style={{display:"flex",flexDirection:"column",gap:"var(--s2)",marginTop:"var(--s1)"}}>
              {["50 минут — только суть","Ищем корень, не симптом","Конкретный план действий"].map((c) => <div key={c} className="ol-f-check"><strong>✓</strong>{c}</div>)}
            </div>
            <p className="ol-f-hook">Один честный разговор с собой меняет больше, чем годы молчания.</p>
          </div>

        </div>

        <div id="zhivaya-ya" className="ol-f-card ol-f-card--group ol-reveal">
          <div>
            <span className="ol-f-badge ol-f-badge--popular">Рекомендую</span>

            <div className="ol-f-icon"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75"/></svg></div>
            <h3 className="ol-f-title">Терапевтическая группа <em>"Живая Я"</em></h3>
            <p className="ol-f-desc" style={{marginTop:"var(--s2)"}}>Иногда нам нужно не только быть услышанной психологом — нам нужно увидеть себя в других женщинах. 6–8 человек. 8 недель. Закрытый круг. <strong style={{color:"var(--color-gold)"}}>«То что происходит внутри — остаётся внутри».</strong></p>
            <p style={{marginTop:"var(--s3)",fontSize:"var(--text-sm)",color:"var(--color-primary)",fontWeight:600}}>📅 Ближайший старт — сентябрь 2026</p>
            <div style={{display:"flex",flexDirection:"column",gap:"var(--s2)",marginTop:"var(--s4)"}}>
              {["6–8 женщин в группе","8 недель еженедельных встреч","Абсолютная конфиденциальность","Поддержка в закрытом чате"].map((c) => <div key={c} className="ol-f-check"><strong style={{color:"var(--color-gold)"}}>✓</strong>{c}</div>)}
            </div>
            <div className="ol-f-price" style={{marginTop:"var(--s5)"}}>22 000 ₽</div>
            <div className="ol-f-price-note">8 недель</div>
          </div>
          <div className="ol-group__cost-breakdown">
            <div className="ol-group__cost-line">22 000 ₽ за 8 недель — это<br/><strong>2 750 ₽ в неделю.</strong></div>
            <div className="ol-group__cost-line" style={{fontSize:"var(--text-xs)"}}>Меньше, чем поход в ресторан.</div>
            <div style={{marginTop:"var(--s4)"}}>
              <a href="#booking" className="ol-btn-main" style={{background:"var(--color-gold)",boxShadow:"0 4px 20px rgba(196,149,106,.40)",width:"100%"}}>Записаться</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}



function Testimonials() {
  const reviews = [
    {av:"М",name:"Марина, 47 лет",detail:"",text:"«Я пришла с ощущением, что наш брак выдохся. После работы с Оксаной муж сам сказал: ты изменилась. Я не спасала брак — я нашла себя. И брак ожил.»"},
    {av:"Е",name:"Елена, 41 год",detail:"",text:"«Стихи Оксаны — это невероятно. После первого стихотворения, написанного про меня, я проплакала час. Это было не боль — это было освобождение.»",d:"ol-d1"},
    {av:"О",name:"Ольга, 38 лет",detail:"",text:"«Разговор по существу занял 15 минут — но я ушла с таким ощущением, будто что-то распуталось внутри. Сразу записалась на полноценную сессию.»",d:"ol-d2"},
    {av:"Т",name:"Татьяна, 52 года",detail:"",text:"«Я думала, что Оксана будет убеждать меня бороться за брак. Вместо этого она помогла мне стать собой. Именно это сблизило нас с мужем больше, чем 10 лет до этого.»"},
    {av:"Н",name:"Наталья, 44 года",detail:"",text:"«Работаю с Оксаной онлайн из Москвы — расстояние не чувствуется вообще. Она присутствует на 100% в каждой сессии. Редкий профессионализм и тепло.»",d:"ol-d1"},
    {av:"С",name:"Светлана, 45 лет",detail:"",text:"«Группа дала мне то, чего я не ожидала — я увидела себя в других женщинах. И поняла, что я не одна. Это изменило всё.»",d:"ol-d2"},
  ];
  return (
    <section className="ol-testis" id="testimonials">
      <div className="ol-wrap">
        <div className="ol-testis__head">
          <span className="ol-tag ol-reveal">Отзывы</span>
          <h2 className="ol-testis__h2 ol-reveal ol-d1">Что говорят клиенты</h2>
        </div>
        <div className="ol-testis__grid">
          {reviews.map((r) => (
            <div key={r.name} className={`ol-tcard ol-reveal${r.d?" "+r.d:""}`}>
              <div className="ol-tcard__qi">"</div>
              <div className="ol-tcard__stars">★★★★★</div>
              <p className="ol-tcard__text">{r.text}</p>
              <div className="ol-tcard__author">
                <div className="ol-tcard__av">{r.av}</div>
                <div><div className="ol-tcard__name">{r.name}</div><div className="ol-tcard__detail">{r.detail}</div></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function FAQ() {
  const [open, setOpen] = useState<number|null>(null);
  const faqs = [
    {q:"Что такое «Разговор по существу» и зачем он бесплатный?",a:"Это 15-минутный аудио-созвон — не пробный урок и не продажа. Я задаю несколько вопросов, слушаю тебя — и ты уходишь с конкретным первым шагом для выхода из ситуации. Мне важно встретить тебя там, где ты находишься, а не там, где удобно мне."},
    {q:"Что входит в сборник «Собеседница Души»?",a:"Авторские стихи + терапевтические упражнения, которые я писала для себя в самые трудные моменты. Это мягкий вход — если ты пока не готова говорить с психологом, начни говорить с собой через сборник."},
    {q:"Для кого подходит терапевтическая группа?",a:"Для женщин, которые уже прошли хотя бы одну сессию или чувствуют, что им важно не только быть услышанной психологом, но и увидеть себя в других. 6–8 человек. 8 недель. Абсолютная конфиденциальность."},
    {q:"Как проходят онлайн-консультации?",a:"Встречаемся в Zoom, я направлю ссылку на встречу в личные сообщения. Тебе важно подготовить только пространство, где тебя никто не побеспокоит и хороший интернет. Всё полностью конфиденциально."},
  ];
  return (
    <section className="ol-faq" id="faq">
      <div className="ol-wrap--narrow">
        <div className="ol-faq__head">
          <span className="ol-tag ol-reveal">Вопросы</span>
          <h2 style={{fontSize:"var(--text-2xl)",fontWeight:500,fontFamily:"var(--font-display)",color:"var(--color-text)"}} className="ol-reveal ol-d1">Часто спрашивают</h2>
        </div>
        <div className="ol-faq__list">
          {faqs.map((f,i) => (
            <div key={i} className="ol-faq__item">
              <button className={`ol-faq__q${open===i?" expanded":""}`} onClick={() => setOpen(open===i?null:i)}>
                {f.q}<span className="ol-faq__icon">+</span>
              </button>
              <div className={`ol-faq__a${open===i?" open":""}`}>{f.a}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Booking() {
  const [form,setForm] = useState({name:"",phone:"",program:"",request:""});
  const [sent,setSent] = useState(false);
  const [checks,setChecks] = useState({privacy:false,personal:false,promo:false});
  return (
    <section className="ol-booking" id="booking">
      <div className="ol-wrap">
        <div className="ol-booking__in">
          <div className="ol-booking__left ol-reveal">
            <span className="ol-tag" style={{background:"rgba(196,149,106,.18)",color:"var(--color-gold)"}}>Записаться</span>
            <h2 className="ol-booking__h2">Сделай первый шаг<br/>к <em>себе настоящей</em></h2>


          </div>
          <div className="ol-reveal ol-d2">
            {sent ? (
              <div className="ol-bform" style={{textAlign:"center"}}>
                <div style={{fontSize:48,marginBottom:"var(--s4)"}}>✨</div>
                <h3 style={{fontFamily:"var(--font-display)",fontSize:"var(--text-xl)",color:"var(--color-text)",marginBottom:"var(--s3)"}}>Заявка отправлена!</h3>
                <p style={{color:"var(--color-muted)",fontSize:"var(--text-sm)",lineHeight:1.7,maxWidth:"none"}}>Оксана свяжется с тобой в течение 24 часов.</p>
                <div style={{display:"flex",gap:"var(--s3)",justifyContent:"center",marginTop:"var(--s6)"}}>
                  <a href="https://t.me/oksana_litvinenko_psy" target="_blank" rel="noopener noreferrer" className="ol-btn-main" style={{background:"#229ED9"}}>Telegram</a>

                </div>
              </div>
            ) : (
              <form className="ol-bform" onSubmit={(e) => {e.preventDefault();setSent(true);}}>
                <h3 className="ol-bform__title">Записаться к Оксане</h3>
                <div className="ol-fg">
                  <label className="ol-fl" htmlFor="bname">Твоё имя *</label>
                  <input className="ol-fi" id="bname" type="text" placeholder="Как к тебе обращаться?" value={form.name} onChange={(e) => setForm({...form,name:e.target.value})} required/>
                </div>
                <div className="ol-fg">
                  <label className="ol-fl" htmlFor="bphone">Телефон / Telegram *</label>
                  <input className="ol-fi" id="bphone" type="text" placeholder="+7 (___) ___-__-__ или @username" value={form.phone} onChange={(e) => setForm({...form,phone:e.target.value})} required/>
                </div>
                <div className="ol-fg">
                  <label className="ol-fl" htmlFor="bprog">Какой шаг тебе откликается?</label>
                  <select className="ol-fi" id="bprog" value={form.program} onChange={(e) => setForm({...form,program:e.target.value})}>
                    <option value="">Выбрать…</option>
                    <option value="free">«Разговор по существу» — 15 мин, бесплатно</option>
                    <option value="sbornik">Сборник «Собеседница Души» — 1 500 ₽</option>
                    <option value="tochka">«Точка сборки» — 50 мин сессия</option>
                    <option value="krug">«Круг живых женщин» — 8 недель, 22 000 ₽</option>
                    <option value="help">Помоги мне выбрать</option>
                  </select>
                </div>

                <div className="ol-checks">
                  <label className="ol-check">
                    <input type="checkbox" checked={checks.privacy} onChange={(e)=>setChecks({...checks,privacy:e.target.checked})} required/>
                    <span>Я принимаю условия <a href="https://disk.yandex.ru/i/o4eSAsMZG-ZBvw" target="_blank" rel="noopener noreferrer" className="ol-check-link">Публичной оферты</a></span>
                  </label>
                  <label className="ol-check">
                    <input type="checkbox" checked={checks.personal} onChange={(e)=>setChecks({...checks,personal:e.target.checked})} required/>
                    <span>Я даю согласие на обработку персональных данных в соответствии с <a href="https://disk.yandex.ru/i/47iwlUSIaJ8iNw" target="_blank" rel="noopener noreferrer" className="ol-check-link">Политикой обработки и защиты ПД и Согласием на обработку ПД</a></span>
                  </label>
                  <label className="ol-check">
                    <input type="checkbox" checked={checks.promo} onChange={(e)=>setChecks({...checks,promo:e.target.checked})}/>
                    <span>Я даю согласие на получение <a href="https://disk.yandex.ru/i/bP_A34c0Nvos_A" target="_blank" rel="noopener noreferrer" className="ol-check-link">рекламной и информационной рассылки</a></span>
                  </label>
                </div>
                <button type="submit" className="ol-fsub" disabled={!form.name||!form.phone||!checks.privacy||!checks.personal}>Отправить заявку →</button>
                <p className="ol-fnote">* Обязательные поля. Данные защищены и не передаются третьим лицам.</p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="ol-footer">
      <div className="ol-wrap">
        <div className="ol-footer__in">
          <div>
            <div className="ol-footer__brand-name">Оксана Литвиненко</div>
            <p className="ol-footer__desc">Психолог Живой Любви. Возвращаю женщин к себе — и браки оживают сами.</p>
            <div className="ol-footer__social">

              <a href="https://t.me/oksana_litvinenko_psy" target="_blank" rel="noopener noreferrer" aria-label="Telegram">TG</a>
              <a href="https://max.ru/u/f9LHodD0cOKM8caple5Ls-ezY4S_TzIUnl3J-Ca_fCovS1g4T47_lRpvy2w" target="_blank" rel="noopener noreferrer" aria-label="Max">Max</a>
            </div>
          </div>
          <div>
            <div className="ol-footer__col-t">Разделы</div>
            <nav className="ol-footer__nav">
              <a href="#about">Обо мне</a>
              <a href="#funnel">Программы</a>
              <a href="#testimonials">Отзывы</a>
              <a href="#faq">Вопросы</a>
            </nav>
          </div>
          <div>
            <div className="ol-footer__col-t">Программы</div>
            <nav className="ol-footer__nav">
              <a href="#razgovor">Разговор по существу</a>
              <a href="#sbornik">«Собеседница Души»</a>
              <a href="#funnel">Точка сборки</a>
              <a href="#zhivaya-ya">Живая Я</a>
            </nav>
          </div>
        </div>
        <div className="ol-footer__bottom" style={{justifyContent:"center"}}>
          <span className="ol-footer__copy">© 2026 Оксана Литвиненко · Психолог Живой Любви · Владивосток</span>
        </div>
      </div>
    </footer>
  );
}



function GiftWidget() {
  const [visible, setVisible] = useState(false);
  const [closed, setClosed] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 60000);
    return () => clearTimeout(t);
  }, []);

  if (closed) return null;

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@500;600&display=swap');
        .gift-widget{position:fixed;right:18px;bottom:18px;z-index:9999;width:min(340px,calc(100vw - 24px));display:flex;align-items:center;gap:14px;padding:16px 18px;background:linear-gradient(145deg,#fbf5f1 0%,#f4e8e0 100%);border:1px solid rgba(166,129,111,.16);border-radius:22px;box-shadow:0 14px 34px rgba(124,92,73,.12);color:#4d392f;opacity:0;visibility:hidden;transform:translateY(16px) scale(.98);transition:opacity .55s ease,transform .55s ease,visibility .55s ease,box-shadow .3s ease;overflow:hidden;}
        .gift-widget.is-visible{opacity:1;visibility:visible;transform:translateY(0) scale(1);animation:giftSoftGlow 3.2s ease-in-out infinite;}
        .gift-widget:hover{box-shadow:0 18px 40px rgba(124,92,73,.16);transform:translateY(-2px);}
        .gift-widget::after{content:"";position:absolute;inset:0;background:linear-gradient(120deg,transparent 0%,transparent 42%,rgba(255,255,255,.34) 50%,transparent 58%,transparent 100%);transform:translateX(-150%);animation:giftShimmer 5.8s linear infinite;pointer-events:none;}
        .gift-widget__icon{flex:0 0 54px;width:54px;height:54px;border-radius:18px;background:linear-gradient(145deg,#e8805a 0%,#c9562e 100%);display:grid;place-items:center;box-shadow:inset 0 1px 0 rgba(255,255,255,.45),0 6px 14px rgba(188,140,120,.18);}
        .gift-widget__icon svg{width:28px;height:28px;stroke:#fffaf7;}
        .gift-widget__text{min-width:0;padding-right:14px;}
        .gift-widget__title{margin:0;font-family:"Cormorant Garamond",serif;font-size:24px;line-height:1.08;font-weight:600;color:#543d33;}
        .gift-widget__close{position:absolute;top:10px;right:10px;width:28px;height:28px;border:0;border-radius:999px;background:rgba(255,255,255,.55);color:#8a6758;cursor:pointer;font-size:16px;line-height:1;display:grid;place-items:center;transition:background .25s ease,transform .25s ease;}
        .gift-widget__close:hover{background:rgba(255,255,255,.82);transform:scale(1.05);}
        @keyframes giftSoftGlow{0%,100%{box-shadow:0 14px 34px rgba(124,92,73,.12);}50%{box-shadow:0 16px 38px rgba(207,160,143,.24);}}
        @keyframes giftShimmer{0%{transform:translateX(-150%);}100%{transform:translateX(150%);}}
        @media(max-width:640px){.gift-widget{right:12px;bottom:12px;width:calc(100vw - 24px);padding:14px;gap:12px;border-radius:18px;}.gift-widget__icon{width:48px;height:48px;flex-basis:48px;border-radius:16px;}.gift-widget__title{font-size:21px;}}
        @media(prefers-reduced-motion:reduce){.gift-widget,.gift-widget::after,.gift-widget.is-visible{animation:none!important;transition:none!important;}}
      `}</style>
      <div className={`gift-widget${visible ? " is-visible" : ""}`} aria-label="Персональный подарок">
        <div className="gift-widget__icon" aria-hidden="true">
          <svg viewBox="0 0 24 24" fill="none" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
            <path d="M20 12v7a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-7"/>
            <path d="M2 7h20v5H2z"/>
            <path d="M12 22V7"/>
            <path d="M12 7H7.5a2.5 2.5 0 1 1 0-5C10 2 12 7 12 7z"/>
            <path d="M12 7h4.5a2.5 2.5 0 1 0 0-5C14 2 12 7 12 7z"/>
          </svg>
        </div>
        <div className="gift-widget__text">
          <p className="gift-widget__title">Твой персональный подарок «Начало»</p>
        </div>
        <button className="gift-widget__close" type="button" aria-label="Закрыть" onClick={() => setClosed(true)}>×</button>
      </div>
    </>
  );
}

export default function Index() {
  useReveal();
  return (
    <>
      <Nav/>
      <Hero/>
      <TrustBar/>
      <Pain/>
      <About/>
      <Funnel/>
      <Testimonials/>
      <FAQ/>
      <Booking/>
      <Footer/>
      <div className="ol-float">
        <a href="https://t.me/oksana_litvinenko_psy" target="_blank" rel="noopener noreferrer" className="ol-float__tg" aria-label="Telegram">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor"><path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/></svg>
        </a>
      </div>
      <GiftWidget/>
    </>
  );
}