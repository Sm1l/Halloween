import React from "react";
import { createRoot } from "react-dom/client";
import { motion } from "framer-motion";
import { CalendarDays, MapPin, Wine, ArrowDown, Skull, Sparkles } from "lucide-react";
import "./styles.css";

const bats = [
  { left: "8%", top: "22%", delay: 0, scale: 0.8 },
  { left: "78%", top: "18%", delay: 1.2, scale: 1.1 },
  { left: "86%", top: "57%", delay: 0.5, scale: 0.65 },
  { left: "18%", top: "65%", delay: 1.8, scale: 0.55 },
];

function FloatingBat({ left, top, delay, scale }) {
  return (
    <motion.div
      className="bat"
      style={{ left, top, scale }}
      animate={{ y: [0, -15, 3, 0], x: [0, 10, -8, 0], rotate: [-8, 7, -3, -8] }}
      transition={{ duration: 5, delay, repeat: Infinity, ease: "easeInOut" }}
      aria-hidden="true"
    >
      🦇
    </motion.div>
  );
}

function App() {
  return (
    <main>
      <section className="hero" id="home">
        <div
          className="hero-art"
          aria-hidden="true"
          style={{
            backgroundImage: `url("${import.meta.env.BASE_URL}Hero.png")`,
          }}
        />
        <div className="hero-vignette" />
        <div className="moon" aria-hidden="true" />
        {bats.map((bat, i) => (
          <FloatingBat key={i} {...bat} />
        ))}
        <motion.div
          className="hero-copy"
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.9, ease: "easeOut" }}
        >
          <motion.p
            className="eyebrow"
            animate={{ opacity: [0.65, 1, 0.65] }}
            transition={{ duration: 3, repeat: Infinity }}
          >
            ОДНА НОЧЬ. МНОГО ТАЙН.
          </motion.p>
          <h1 className="hero-title">
            Хэллоуин в Путилково<span>!</span>
          </h1>
          <p className="hero-subtitle">Страшно весело будет всем</p>
        </motion.div>
        {/* <motion.div
          className="pumpkin"
          animate={{ y: [0, -10, 0], rotate: [-5, 10, -5] }}
          transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
          aria-label="Светящаяся хэллоуинская тыква"
          role="img"
        >
          🎃
        </motion.div> */}
        <motion.div
          className="skeleton skeleton-left"
          animate={{ rotate: [-8, 8, -8], y: [0, -20, 0] }}
          transition={{ duration: 4, repeat: Infinity }}
        >
          💀
        </motion.div>
        <motion.div
          className="skeleton skeleton-right"
          animate={{ rotate: [8, -6, 8], y: [-5, 15, -5] }}
          transition={{ duration: 4.8, repeat: Infinity }}
        >
          ☠️
        </motion.div>
        <a className="scroll-cue" href="#details" aria-label="Перейти к деталям">
          <span>Узнать детали</span>
          <ArrowDown size={18} />
        </a>
        <div className="hero-grain" aria-hidden="true" />
      </section>

      <section className="details" id="details">
        <div className="details-inner">
          <motion.div
            className="section-heading"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 1 }}
            transition={{ duration: 2 }}
          >
            <span className="kicker">
              <Sparkles size={15} /> ПОЛУЧЕНО ИЗ МИРА ТЬМЫ <Sparkles size={15} />
            </span>
            <h2>
              Ты <span>приглашён</span>
            </h2>
            <p className="kicker-p">Присоединяйся к празднованию Хэллоуина — обещаем, будет жутко круто!</p>
          </motion.div>

          <div className="info-grid">
            <motion.article
              className="info-card"
              whileHover={{
                y: -6,
                borderColor: "rgba(255, 100, 24, .7)",
                background: "linear-gradient(110deg, #2a150f, #151014 65%, #1b1010)",
              }}
              transition={{ duration: 0.2 }}
            >
              <div className="icon-wrap">
                <CalendarDays size={25} />
              </div>
              <span className="card-label">КОГДА</span>
              <h3>31 октября</h3>
              <p>
                Начинаем в <strong>15:00</strong>
              </p>
            </motion.article>
            <motion.article
              className="info-card"
              whileHover={{
                y: -6,
                borderColor: "rgba(255, 100, 24, .7)",
                background: "linear-gradient(110deg, #2a150f, #151014 65%, #1b1010)",
              }}
              transition={{ duration: 0.2 }}
            >
              <div className="icon-wrap">
                <MapPin size={25} />
              </div>
              <span className="card-label">ГДЕ</span>
              <h3>Путилково</h3>
              <p>ул. Новотушинская, 5, кв. 339</p>
            </motion.article>
          </div>

          <motion.div
            className="tribute"
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 1 }}
            transition={{ duration: 2 }}
          >
            <div className="tribute-icon">
              <Wine size={34} />
            </div>
            <div className="tribute-copy">
              <span className="card-label">ТВОЯ ДАНЬ ХОЗЯЕВАМ НОЧИ</span>
              <h3>Бутылка крепкого алкоголя</h3>
              <p>и, конечно, хорошее настроение!</p>
            </div>
            <div className="tribute-skull" aria-hidden="true">
              💀
            </div>
          </motion.div>

          <motion.div
            className="closing"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <span>НАДЕВАЙ КОСТЮМ</span>
            <span className="closing-main">И НЕ БОЙСЯ НИЧЕГО</span>
            <span className="closing-emoji">🕸️ 🕷️ 🕸️</span>
          </motion.div>
          <footer>
            С любовью и лёгким привкусом ужаса <span>✦</span>
          </footer>
        </div>
      </section>
    </main>
  );
}

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
