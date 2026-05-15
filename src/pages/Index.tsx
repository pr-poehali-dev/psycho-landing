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
            <a href="#booking" className="ol-nav__d ol-btn-main" style={{fontSize:"var(--text-xs)",padding:"var(--s2) var(--s5)"}}>Записаться</a>
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
          <em>женщин к себе</em> —<br/>
          и браки оживают сами.
        </h1>
        <p className="ol-hero__sub ol-reveal ol-d2">Если живёшь «правильно», но внутри — пустота. Если рядом человек, а ты — одинока. Начни с честного разговора.</p>
        <div className="ol-hero__btns ol-reveal ol-d3">
          <a href="#booking" className="ol-btn-main ol-pulse-ring">Разговор по существу — бесплатно</a>
          <a href="#sbornik" className="ol-btn-soft">Сборник «СД» — 1 500 ₽</a>
        </div>
        <p className="ol-hero__free-note ol-reveal ol-d3"><strong>«Разговор по существу»</strong> — 15 мин. аудио-созвон. Бесплатно.</p>
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
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{width:18,height:18,color:"var(--color-gold)"}}><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>
            Психолог-трансформолог
          </div>
          <div className="ol-tbar__sep"/>
          <div className="ol-tbar__item">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{width:18,height:18,color:"var(--color-gold)"}}><path d="M12 20h9"/><path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"/></svg>
            Стихотерапевт
          </div>
          <div className="ol-tbar__sep"/>
          <div className="ol-tbar__item">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{width:18,height:18,color:"var(--color-gold)"}}><rect x="3" y="3" width="7" height="7" rx="1"/><rect x="14" y="3" width="7" height="7" rx="1"/><rect x="3" y="14" width="7" height="7" rx="1"/><rect x="14" y="14" width="7" height="7" rx="1"/></svg>
            МАК-терапевт
          </div>
          <div className="ol-tbar__sep"/>
          <div className="ol-tbar__item">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{width:18,height:18,color:"var(--color-gold)"}}><circle cx="12" cy="12" r="10"/><path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>
            Онлайн по всей России
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
            <h2 className="ol-pain__head">Ты живёшь <em>правильно</em>,<br/>но не чувствуешь счастья?</h2>
            <p style={{color:"var(--color-muted)",fontSize:"var(--text-base)",lineHeight:1.7}}>Это не значит, что с тобой что-то не так. Это точка, где реальная трансформация не только возможна — она необходима.</p>
            <ul className="ol-pain__list">
              {["Отношения стали «удобными», но не живыми","Отдаёшь всё — семье, работе, всем — а для себя ничего","Раздражение, усталость, ощущение «всё не то»","Хочешь близости — получается дистанция","Снаружи — всё хорошо. Внутри — пустота","Боишься, что лучшие годы уже позади"].map((t) => (
                <li key={t} className="ol-pain__item"><span className="ol-pain__dot"/>{t}</li>
              ))}
            </ul>
            <a href="#booking" className="ol-btn-main" style={{width:"fit-content",marginTop:"var(--s2)"}}>Записаться на разговор →</a>
          </div>
          <div className="ol-pain__quote-box ol-reveal ol-d2">
            <span className="ol-tag">Личный опыт</span>
            <p className="ol-pain__quote">«Я сама прошла через это. Тридцать лет брака, трое детей, карьера, внешнее благополучие — и внутри вопрос: "Где я сама в этой жизни?" Именно этот путь к себе я помогаю пройти своим клиенткам.»</p>
            <div>
              <div className="ol-pain__qa">— Оксана Литвиненко</div>
              <div style={{fontSize:"var(--text-xs)",color:"var(--color-faint)",marginTop:4}}>Психолог · Стихотерапевт · Владивосток</div>
            </div>
            <div style={{display:"flex",alignItems:"center",gap:"var(--s3)",paddingTop:"var(--s4)",borderTop:"1px solid var(--color-divider)"}}>
              <span style={{color:"var(--color-gold)"}}>★★★★★</span>
              <span style={{fontSize:"var(--text-xs)",color:"var(--color-muted)"}}>300+ клиенток прошли трансформацию</span>
            </div>
          </div>
        </div>
      </div>
    </section>
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
            <p className="ol-about__body ol-reveal ol-d2">Создала авторский <strong>«Метод Живого Слова»</strong> — психология + стихотерапия + МАК. Основатель Центра «Состояние», модератор сообщества «Код публичности».</p>
            <div className="ol-about__facts ol-reveal ol-d3">
              {["Клинический психолог, психолог-трансформолог","Стихотерапевт — авторский метод работы через поэзию","МАК-терапевт, создатель авторских карт «Собеседница Души»","Высшее юридическое + психологическое образование"].map((f) => (
                <div key={f} className="ol-about__fact">{check}{f}</div>
              ))}
            </div>
            <div className="ol-about__creds ol-reveal ol-d4">
              {["Клинический психолог","МАК-терапевт","Стихотерапевт","Системная терапия"].map((c) => (
                <span key={c} className="ol-cred">{c}</span>
              ))}
            </div>
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
          <p className="ol-funnel__sub ol-reveal ol-d2">Каждый шаг ведёт глубже. Начни с того, что откликается прямо сейчас.</p>
        </div>
        <div className="ol-funnel__entry">
          <div className="ol-f-card ol-reveal" id="razgovor">
            <span className="ol-f-badge ol-f-badge--free">Бесплатно</span>
            <div className="ol-f-step">1А</div>
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
            <div className="ol-f-step">1Б</div>
            <div className="ol-f-icon"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 20h9"/><path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"/></svg></div>
            <h3 className="ol-f-title">Сборник <em>«Собеседница Души»</em></h3>
            <p className="ol-f-desc">Если пока не готова говорить с психологом — начни говорить с собой. Сборник делает это мягко, без давления — через стихи и упражнения, которые я писала для себя в самые трудные моменты.</p>
            <div className="ol-f-price">1 500 ₽</div>
            <div className="ol-f-price-note">Мгновенный доступ · PDF + аудио</div>
            <p className="ol-f-hook">Ты тратишь на кофе и маникюр больше, чем стоит начать слышать себя.</p>
            <a href="#booking" className="ol-btn-soft" style={{marginTop:"var(--s2)",width:"100%"}}>Получить сборник</a>
          </div>
        </div>
        <div className="ol-funnel__arrow ol-reveal"><span className="ol-funnel__arrow-line"/><span>Следующий шаг</span><span className="ol-funnel__arrow-line"/></div>
        <div className="ol-funnel__deep">
          <div className="ol-f-card ol-reveal">
            <div className="ol-f-step">2</div>
            <div className="ol-f-icon"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="3"/><path d="M12 1v4M12 19v4M4.22 4.22l2.83 2.83M16.95 16.95l2.83 2.83M1 12h4M19 12h4M4.22 19.78l2.83-2.83M16.95 7.05l2.83-2.83"/></svg></div>
            <h3 className="ol-f-title">«Точка сборки»</h3>
            <p className="ol-f-desc">За 45 минут мы найдём корень — не симптом. Ты уйдёшь с ясным пониманием: что происходит, почему это повторяется и что с этим делать.</p>
            <div style={{display:"flex",flexDirection:"column",gap:"var(--s2)",marginTop:"var(--s1)"}}>
              {["45 минут — только суть","Ищем корень, не симптом","Конкретный план действий"].map((c) => <div key={c} className="ol-f-check"><strong>✓</strong>{c}</div>)}
            </div>
            <p className="ol-f-hook">Один честный разговор с собой меняет больше, чем годы молчания.</p>
          </div>
          <div className="ol-f-card ol-reveal ol-d1">
            <div className="ol-f-step">3</div>
            <div className="ol-f-icon"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/></svg></div>
            <h3 className="ol-f-title">«Сессия глубины»</h3>
            <p className="ol-f-desc">Один час 20 минут — и ты не просто поговоришь. Ты сдвинешься. Это результат индивидуальной работы в твою глубину, а не на поверхности.</p>
            <div style={{display:"flex",flexDirection:"column",gap:"var(--s2)",marginTop:"var(--s1)"}}>
              {["80 минут глубокой работы","Авторский метод + МАК","Персональное стихотворение"].map((c) => <div key={c} className="ol-f-check"><strong>✓</strong>{c}</div>)}
            </div>
            <p className="ol-f-hook">Клиентки говорят: «После сессии что-то щёлкнуло и встало на место».</p>
          </div>
        </div>
        <div className="ol-funnel__arrow ol-reveal"><span className="ol-funnel__arrow-line"/><span>Самый мощный формат</span><span className="ol-funnel__arrow-line"/></div>
        <div className="ol-f-card ol-f-card--group ol-reveal">
          <div>
            <span className="ol-f-badge ol-f-badge--popular">Рекомендую</span>
            <div className="ol-f-step">4</div>
            <div className="ol-f-icon"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75"/></svg></div>
            <h3 className="ol-f-title">«Круг живых женщин» <em>(Живая Я)</em></h3>
            <p className="ol-f-desc" style={{marginTop:"var(--s2)"}}>Иногда нам нужно не только быть услышанной психологом — нам нужно увидеть себя в других женщинах. 6–8 человек. 8 недель. Закрытый круг. <strong style={{color:"var(--color-gold)"}}>«То что происходит внутри — остаётся внутри».</strong></p>
            <div style={{display:"flex",flexDirection:"column",gap:"var(--s2)",marginTop:"var(--s4)"}}>
              {["6–8 женщин в группе","8 недель еженедельных встреч","Абсолютная конфиденциальность","Поддержка в закрытом чате"].map((c) => <div key={c} className="ol-f-check"><strong style={{color:"var(--color-gold)"}}>✓</strong>{c}</div>)}
            </div>
            <div className="ol-f-price" style={{marginTop:"var(--s5)"}}>22 000 ₽</div>
            <div className="ol-f-price-note">8 недель</div>
          </div>
          <div className="ol-group__cost-breakdown">
            <div className="ol-group__cost-line">22 000 ₽ за 8 недель — это<br/><strong>2 750 ₽ в неделю.</strong></div>
            <div className="ol-group__cost-line" style={{fontSize:"var(--text-xs)"}}>Меньше, чем поход в ресторан с человеком, которого ты уже не можешь терпеть.</div>
            <div style={{marginTop:"var(--s4)"}}>
              <a href="#booking" className="ol-btn-main" style={{background:"var(--color-gold)",boxShadow:"0 4px 20px rgba(196,149,106,.40)",width:"100%"}}>Записаться в Круг</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Poetry() {
  return (
    <section className="ol-poetry" id="poetry">
      <div className="ol-wrap">
        <div className="ol-poetry__in">
          <img src={POETRY_IMG} alt="Стихотерапия" className="ol-poetry__img ol-reveal" width={600} height={450} loading="lazy"/>
          <div className="ol-poetry__content ol-reveal ol-d1">
            <span className="ol-tag">Стихотерапия</span>
            <h2 className="ol-poetry__h2">Слово, которое<br/>меняет изнутри</h2>
            <blockquote className="ol-poetry__verse">
              Ты устала быть сильной,<br/>
              улыбаться, держать.<br/>
              Я скажу тебе тихо:<br/>
              можно просто — дышать.
            </blockquote>
            <p className="ol-poetry__body">Авторские стихи Оксаны — это терапевтический инструмент, написанный специально для твоей ситуации. Слово, точно попавшее в боль, лечит её быстрее любого анализа. Именно это лежит в основе сборника «Собеседница Души».</p>
            <a href="#sbornik" className="ol-btn-soft" style={{width:"fit-content"}}>Получить сборник — 1 500 ₽</a>
          </div>
        </div>
      </div>
    </section>
  );
}

function Testimonials() {
  const reviews = [
    {av:"М",name:"Марина, 47 лет",detail:"Круг живых женщин",text:"«Я пришла с ощущением, что наш брак выдохся. После работы с Оксаной муж сам сказал: ты изменилась. Я не спасала брак — я нашла себя. И брак ожил.»"},
    {av:"Е",name:"Елена, 41 год",detail:"Сборник «СД» → Сессия глубины",text:"«Стихи Оксаны — это невероятно. После первого стихотворения, написанного про меня, я проплакала час. Это было не боль — это было освобождение.»",d:"ol-d1"},
    {av:"О",name:"Ольга, 38 лет",detail:"Разговор по существу → Точка сборки",text:"«Разговор по существу занял 15 минут — но я ушла с таким ощущением, будто что-то распуталось внутри. Сразу записалась на полноценную сессию.»",d:"ol-d2"},
    {av:"Т",name:"Татьяна, 52 года",detail:"Круг живых женщин",text:"«Я думала, что Оксана будет убеждать меня бороться за брак. Вместо этого она помогла мне стать собой. Именно это сблизило нас с мужем больше, чем 10 лет до этого.»"},
    {av:"Н",name:"Наталья, 44 года",detail:"Сессия глубины · Москва",text:"«Работаю с Оксаной онлайн из Москвы — расстояние не чувствуется вообще. Она присутствует на 100% в каждой сессии. Редкий профессионализм и тепло.»",d:"ol-d1"},
    {av:"С",name:"Светлана, 45 лет",detail:"Круг живых женщин",text:"«Группа дала мне то, чего я не ожидала — я увидела себя в других женщинах. И поняла, что я не одна. Это изменило всё.»",d:"ol-d2"},
  ];
  return (
    <section className="ol-testis" id="testimonials">
      <div className="ol-wrap">
        <div className="ol-testis__head">
          <span className="ol-tag ol-reveal">Отзывы</span>
          <h2 className="ol-testis__h2 ol-reveal ol-d1">Что говорят клиентки</h2>
          <p style={{color:"var(--color-muted)",fontSize:"var(--text-base)",textAlign:"center"}} className="ol-reveal ol-d2">Реальные истории. Имена изменены с разрешения клиенток.</p>
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
    {q:"Что входит в сборник за 1 500 ₽?",a:"Авторские стихи + терапевтические упражнения, которые я писала для себя в самые трудные моменты. Это мягкий вход — если ты пока не готова говорить с психологом, начни говорить с собой через сборник."},
    {q:"Чем «Точка сборки» отличается от «Сессии глубины»?",a:"«Точка сборки» — 45 минут диагностики и ясности. Ты уходишь с пониманием, что происходит и почему повторяется. «Сессия глубины» — 80 минут реальной трансформационной работы: МАК, стихотерапия, глубинные техники. Это следующий шаг после ясности."},
    {q:"Для кого подходит «Круг живых женщин»?",a:"Для женщин, которые уже прошли хотя бы одну сессию или чувствуют, что им важно не только быть услышанной психологом, но и увидеть себя в других. 6–8 человек. 8 недель. Абсолютная конфиденциальность."},
    {q:"Как проходят онлайн-консультации?",a:"В Zoom или Telegram Video. За 24 часа до встречи ты получишь ссылку. Для МАК-работы нужно только видео — карты показываю на экране. Всё полностью конфиденциально."},
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
  const [c1,setC1] = useState(false);
  const [c2,setC2] = useState(false);
  const [sent,setSent] = useState(false);
  const disabled = !c1||!c2||!form.name||!form.phone;
  return (
    <section className="ol-booking" id="booking">
      <div className="ol-wrap">
        <div className="ol-booking__in">
          <div className="ol-booking__left ol-reveal">
            <span className="ol-tag" style={{background:"rgba(196,149,106,.18)",color:"var(--color-gold)"}}>Записаться</span>
            <h2 className="ol-booking__h2">Сделай первый шаг<br/>к <em>себе настоящей</em></h2>
            <p className="ol-booking__body">Заполни форму — и в течение 24 часов я свяжусь с тобой, чтобы обсудить твой запрос. Начать можно прямо сейчас — с бесплатного разговора по существу.</p>
            <div className="ol-booking__contacts">
              <div className="ol-booking__c">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{width:18,height:18,color:"var(--color-gold)",flexShrink:0}}><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>
                Telegram: <a href="https://t.me/oksana_litvinenko_psy" target="_blank" rel="noopener noreferrer">@oksana_litvinenko_psy</a>
              </div>

              <div className="ol-booking__c">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{width:18,height:18,color:"var(--color-gold)",flexShrink:0}}><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
                Владивосток · Онлайн по всей России
              </div>
            </div>
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
                    <option value="tochka">«Точка сборки» — 45 мин сессия</option>
                    <option value="glubina">«Сессия глубины» — 80 мин</option>
                    <option value="krug">«Круг живых женщин» — 8 недель, 22 000 ₽</option>
                    <option value="help">Помоги мне выбрать</option>
                  </select>
                </div>
                <div className="ol-fg">
                  <label className="ol-fl" htmlFor="brequest">Напиши кратко, что тебя привело</label>
                  <textarea className="ol-fi" id="brequest" rows={3} placeholder="В нескольких словах — что происходит, что болит…" style={{resize:"vertical",minHeight:80}} value={form.request} onChange={(e) => setForm({...form,request:e.target.value})}/>
                </div>
                <div className="ol-fg ol-fg--check">
                  <label className="ol-chk-label">
                    <input type="checkbox" checked={c1} onChange={(e) => setC1(e.target.checked)} required/>
                    <span className="ol-chk-box"/>
                    <span className="ol-chk-txt">Я даю согласие на обработку персональных данных в соответствии с ФЗ-152 *</span>
                  </label>
                </div>
                <div className="ol-fg ol-fg--check">
                  <label className="ol-chk-label">
                    <input type="checkbox" checked={c2} onChange={(e) => setC2(e.target.checked)} required/>
                    <span className="ol-chk-box"/>
                    <span className="ol-chk-txt">Я ознакомилась и принимаю <a href="#privacy" style={{color:"var(--color-primary)",textDecoration:"underline"}}>Политику конфиденциальности</a> *</span>
                  </label>
                </div>
                <button type="submit" className="ol-fsub" disabled={disabled}>Отправить заявку →</button>
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
              <a href="https://vk.com/litvinenko_oksana" target="_blank" rel="noopener noreferrer" aria-label="ВКонтакте">ВК</a>
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
              <a href="#sbornik">Сборник «СД»</a>
              <a href="#funnel">Точка сборки</a>
              <a href="#funnel">Сессия глубины</a>
              <a href="#funnel">Круг живых женщин</a>
            </nav>
          </div>
        </div>
        <div className="ol-footer__bottom">
          <span className="ol-footer__copy">© 2026 Оксана Литвиненко · Психолог Живой Любви · Владивосток</span>
          <a href="#privacy" className="ol-footer__copy" style={{cursor:"pointer"}}>Политика конфиденциальности</a>
        </div>
      </div>
    </footer>
  );
}

function Privacy() {
  return (
    <section id="privacy" className="ol-privacy">
      <div className="ol-wrap--narrow">
        <h2>Политика конфиденциальности</h2>
        <div style={{display:"flex",flexDirection:"column",gap:"var(--s4)"}}>
          {[
            ["Оператор персональных данных:","Литвиненко Оксана (ИП), г. Владивосток."],
            ["Какие данные собираются:","Имя, номер телефона, адрес Telegram/мессенджера, текст обращения, переданные вами добровольно через форму сайта."],
            ["Цель обработки:","Обратная связь, запись на консультацию, информирование об услугах."],
            ["Правовое основание:","ФЗ-152 «О персональных данных» от 27.07.2006 г. Обработка осуществляется исключительно с вашего письменного согласия."],
            ["Хранение и передача:","Данные не передаются третьим лицам. Срок хранения — до отзыва согласия или не более 3 лет."],
            ["Ваши права:","Вы вправе в любой момент отозвать согласие, запросить исправление или удаление своих данных, написав в Telegram: @oksana_litvinenko_psy."],
          ].map(([k,v]) => (
            <p key={k}><strong style={{color:"var(--color-text)"}}>{k}</strong> {v}</p>
          ))}
        </div>
      </div>
    </section>
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
      <Poetry/>
      <Testimonials/>
      <FAQ/>
      <Booking/>
      <Footer/>
      <Privacy/>
      {/* Floating buttons */}
      <div className="ol-float">
        <a href="https://t.me/oksana_litvinenko_psy" target="_blank" rel="noopener noreferrer" className="ol-float__tg" aria-label="Telegram">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor"><path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/></svg>
        </a>
      </div>
    </>
  );
}