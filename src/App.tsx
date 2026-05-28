import { useState } from 'react';
import { motion } from 'motion/react';
import {
  ArrowRight,
  Boxes,
  Check,
  Clipboard,
  Code2,
  Disc3,
  Cpu,
  ExternalLink,
  Github,
  Layers,
  MessageSquare,
  Pickaxe,
  RefreshCw,
  Server,
  ShieldCheck,
  Sword,
  Terminal,
  Zap,
} from 'lucide-react';

const DISCORD_URL = 'https://discord.gg/xtVgj52nN6';
const LOGO_SRC = '/Gemini_Generated_Image_mql5dwmql5dwmql5-Photoroom.png';

const SERVER_TYPES = ['SMP', 'Anarchy', 'DonutSMP', 'Survival', 'Network'];

const METRICS = [
  { value: '25-50%', label: 'Performance uplift target' },
  { value: '24/7', label: 'Uptime-first mindset' },
  { value: '1:1', label: 'Custom setup per server' },
];

const REASONS = [
  {
    icon: <Zap />,
    title: 'จูนจากปัญหาจริง',
    desc: 'ดู hardware, plugin, player flow และ log ก่อนปรับ ไม่ใช้ config สำเร็จรูปแบบเดาสุ่ม',
  },
  {
    icon: <ShieldCheck />,
    title: 'เน้นเสถียรภาพ',
    desc: 'คิดเรื่อง crash, lag spike, downtime และการดูแลต่อหลังส่งมอบตั้งแต่ขั้นออกแบบ',
  },
  {
    icon: <Boxes />,
    title: 'พร้อมขยายต่อ',
    desc: 'วางระบบให้โตต่อได้ ตั้งแต่ Survival เล็กๆ ไปจนถึง proxy network หลายเซิร์ฟเวอร์',
  },
  {
    icon: <RefreshCw />,
    title: 'Lifetime Support',
    desc: 'ดูแลหลังการขายระยะยาว ให้คำแนะนำและช่วยแก้ปัญหาที่เกี่ยวกับงานที่ส่งมอบ',
  },
];

const SERVICES = [
  {
    icon: <Code2 />,
    title: 'Custom Plugin',
    titleTh: 'พัฒนาและแก้ไขปลั๊กอิน',
    price: '100฿+',
    desc: 'เขียนระบบเฉพาะทาง อัปเดตเวอร์ชัน ปรับ plugin stack และทำให้เข้ากับ workflow ของเซิร์ฟเวอร์',
  },
  {
    icon: <Terminal />,
    title: 'Server Setup',
    titleTh: 'ตั้งค่าเซิร์ฟเวอร์มายคราฟ',
    price: '50฿+',
    desc: 'เหมาะกับ SMP, Survival, Anarchy และเซิร์ฟเวอร์เริ่มต้นที่ต้องการเปิดใช้งานจริงแบบนิ่งๆ',
  },
  {
    icon: <Cpu />,
    title: 'Performance Tuning',
    titleTh: 'จูนประสิทธิภาพ',
    price: '100฿+',
    desc: 'ปรับ config, JVM, plugin และระบบหลังบ้านเพื่อลด lag spike และช่วยให้ TPS เสถียรขึ้น',
  },
  {
    icon: <Layers />,
    title: 'Proxy Network',
    titleTh: 'วางระบบหลายเซิร์ฟเวอร์',
    price: '300฿+',
    desc: 'ออกแบบ BungeeCord หรือ Velocity สำหรับ network ที่ต้องแยก lobby, survival, event หรือ minigame',
  },
  {
    icon: <MessageSquare />,
    title: 'Discord Bot',
    titleTh: 'บอท Discord เชื่อมระบบเซิร์ฟเวอร์',
    price: 'เริ่มต้นคุยได้',
    desc: 'ทำบอทสำหรับประกาศ แจ้งเตือน เชื่อม rank หรือ workflow ที่เกี่ยวกับ community ของเซิร์ฟเวอร์',
  },
  {
    icon: <ShieldCheck />,
    title: 'Website & Infrastructure',
    titleTh: 'เว็บไซต์และระบบหลังบ้าน',
    price: 'ประเมินตามงาน',
    desc: 'ทำเว็บ landing, dashboard, ระบบ status และ infrastructure ให้พร้อมดูแลเซิร์ฟเวอร์ระยะยาว',
  },
];

const PORTFOLIO = [
  {
    name: 'Deluxeg4',
    role: 'Plugin Developer / Server Engineer',
    url: 'https://github.com/Deluxeg4',
    discord: 'zeb.deluxeg4',
    tags: ['Backend', 'Plugin', 'Network', 'Web', 'Infrastructure'],
  },
  {
    name: 'PolarBearEX-8',
    role: 'Infrastructure / Minecraft Systems',
    url: 'https://github.com/PolarBearEX-8',
    discord: 'polarac.java',
    tags: ['Plugin', 'ServerLogic', 'Proxy & Server'],
  },
];

const PROCESS = [
  'ตรวจสภาพ server, plugins และปัญหาหลัก',
  'ออกแบบ solution ที่พอดีกับงบ จำนวนผู้เล่น และแนวเซิร์ฟเวอร์',
  'ลงมือ setup, test, benchmark และส่งมอบพร้อมคำแนะนำ',
];

export default function App() {
  const [copiedDiscord, setCopiedDiscord] = useState<string | null>(null);

  const copyDiscordTag = async (discord: string) => {
    await navigator.clipboard.writeText(discord);
    setCopiedDiscord(discord);
    window.setTimeout(() => setCopiedDiscord(null), 1800);
  };

  return (
    <div className="min-h-screen overflow-hidden bg-[#050607] text-white">
      <div className="site-glow site-glow-one" />
      <div className="site-glow site-glow-two" />

      <nav className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-black/45 backdrop-blur-xl">
        <div className="mx-auto flex h-18 max-w-7xl items-center justify-between px-5 md:px-8">
          <a href="#" className="flex items-center gap-3" aria-label="CADS Studio home">
            <img src={LOGO_SRC} alt="CADS Studio" className="h-10 w-10 object-contain" />
            <div>
              <p className="font-mono text-lg font-bold leading-none tracking-tight">CADS</p>
              <p className="text-[11px] font-medium uppercase tracking-[0.28em] text-zinc-500">Minecraft Services</p>
            </div>
          </a>

          <div className="hidden items-center gap-8 text-sm font-medium text-zinc-400 md:flex">
            <a href="#services" className="transition hover:text-white">Services</a>
            <a href="#portfolio" className="transition hover:text-white">GitHub</a>
            <a href="#contact" className="transition hover:text-white">Contact</a>
          </div>

          <a href={DISCORD_URL} target="_blank" rel="noreferrer" className="icon-button compact">
            <MessageSquare className="h-4 w-4" />
            Discord
          </a>
        </div>
      </nav>

      <main>
        <section className="hero-center px-5 pb-16 pt-24 md:px-8 md:pt-30">
          <motion.div
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
            className="hero-stage"
          >
            <div className="hero-visual" aria-hidden="true">
              <div className="minecraft-block-grid">
                <span />
                <span />
                <span />
                <span />
                <span />
                <span />
              </div>
            </div>

            <div className="hero-content">
              <div className="hero-pill">
                <Pickaxe className="h-4 w-4" />
                Setup, plugins, websites, Discord bots and server systems
              </div>

              <h1>
                รับทำ Minecraft Server
                <span>ครบจบในทีมเดียว</span>
              </h1>

              <p className="hero-copy">
                CADS Studio ดูแลตั้งแต่ Setup เซิร์ฟเวอร์มายคราฟ เขียน Plugin ทำเว็บไซต์ บอท Discord
                ไปจนถึงวางระบบหลังบ้าน โดยทีมที่มีประสบการณ์กว่า 7 ปี และเข้าใจงานเซิร์ฟเวอร์ที่ต้องใช้งานจริง
              </p>

              <div className="hero-actions">
                <a href={DISCORD_URL} target="_blank" rel="noreferrer" className="primary-button">
                  เริ่มคุยโปรเจกต์
                  <ArrowRight className="h-5 w-5" />
                </a>
                <a href="#services" className="secondary-button">
                  ดูบริการทั้งหมด
                  <ExternalLink className="h-4 w-4" />
                </a>
              </div>

              <motion.div
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.55, delay: 0.2, ease: 'easeOut' }}
                className="developer-callout center"
              >
                <div>
                  <p>Need Developer for your Minecraft server?</p>
                  <span>SMP, Anarchy, DonutSMP หรือเซิร์ฟเวอร์แนว custom สามารถติดต่อได้</span>
                </div>
                <a href={DISCORD_URL} target="_blank" rel="noreferrer">
                  Contact
                  <MessageSquare className="h-4 w-4" />
                </a>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3, ease: 'easeOut' }}
                className="server-type-row center"
              >
                {SERVER_TYPES.map((type) => (
                  <span key={type}>{type}</span>
                ))}
              </motion.div>

              <div className="hero-metrics">
                {METRICS.map((metric, index) => (
                  <motion.div
                    key={metric.label}
                    initial={{ opacity: 0, y: 14 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.35 + index * 0.06, ease: 'easeOut' }}
                    className="metric-panel"
                  >
                    <strong>{metric.value}</strong>
                    <span>{metric.label}</span>
                  </motion.div>
                ))}
              </div>
            </div>

            <div className="status-strip">
              <div>
                <Sword className="h-5 w-5 text-emerald-300" />
                <span>Survival / SMP</span>
                <small>Plugin stack ที่ไม่กินเครื่อง</small>
              </div>
              <div>
                <Server className="h-5 w-5 text-cyan-300" />
                <span>Infrastructure</span>
                <small>Proxy, Linux, DDoS flow</small>
              </div>
            </div>
          </motion.div>
        </section>

        <section className="relative px-5 py-20 md:px-8">
          <div className="mx-auto max-w-6xl text-center">
            <p className="section-kicker">Why CADS</p>
            <h2 className="section-title mx-auto">ทำไมถึงต้องเลือกเรา</h2>
            <p className="mx-auto mt-5 max-w-3xl text-base leading-7 text-zinc-400">
              Minecraft Server ที่ดีไม่ได้จบแค่เปิดติด แต่ต้องเล่นแล้วไม่สะดุด ดูแลง่าย
              และพร้อมรับผู้เล่นเพิ่มโดยไม่ต้องรื้อระบบใหม่ทุกครั้ง
            </p>

            <div className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
              {REASONS.map((reason, index) => (
                <motion.article
                  key={reason.title}
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-80px' }}
                  transition={{ duration: 0.48, delay: index * 0.06, ease: 'easeOut' }}
                  className="reason-card centered"
                >
                  <div className="reason-icon">{reason.icon}</div>
                  <h3>{reason.title}</h3>
                  <p>{reason.desc}</p>
                </motion.article>
              ))}
            </div>
          </div>
        </section>

        <section id="services" className="relative border-y border-white/10 bg-white/[0.03] px-5 py-24 md:px-8">
          <div className="mx-auto max-w-7xl">
            <div className="mb-12 flex flex-col justify-between gap-6 md:flex-row md:items-end">
              <div>
                <p className="section-kicker">Services</p>
                <h2 className="section-title">บริการหลักของ CADS</h2>
              </div>
              <p className="max-w-xl text-base leading-7 text-zinc-400">
                เลือกงานได้ตั้งแต่ setup เล็กไปจนถึง network หลายเซิร์ฟเวอร์ ทุกแพ็กเกจปรับตามสภาพเครื่อง
                plugin และเป้าหมายของเซิร์ฟเวอร์คุณ
              </p>
            </div>

            <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
              {SERVICES.map((service, index) => (
                <motion.article
                  key={service.title}
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-80px' }}
                  transition={{ duration: 0.45, delay: index * 0.04 }}
                  className="service-card"
                >
                  <div className="mb-8 flex items-start justify-between gap-4">
                    <div className="service-icon">{service.icon}</div>
                    <span className="price-tag">{service.price}</span>
                  </div>
                  <h3>{service.title}</h3>
                  <p className="service-th">{service.titleTh}</p>
                  <p className="service-desc">{service.desc}</p>
                </motion.article>
              ))}
            </div>
          </div>
        </section>

        <section id="portfolio" className="px-5 py-24 md:px-8">
          <div className="mx-auto max-w-7xl">
            <div className="mb-12 flex flex-col justify-between gap-6 md:flex-row md:items-end">
              <div>
                <p className="section-kicker">Portfolio</p>
                <h2 className="section-title">ผลงานและ GitHub</h2>
              </div>
              <p className="max-w-xl text-base leading-7 text-zinc-400">
                ดูงานโค้ดและโปรเจกต์ของทีมได้จาก GitHub โดยตรง เหมาะสำหรับลูกค้าที่อยากเห็น style
                การเขียนโค้ดก่อนเริ่มงาน custom plugin หรือระบบหลังบ้าน
              </p>
            </div>

            <div className="grid gap-4 md:grid-cols-2">
              {PORTFOLIO.map((profile, index) => (
                <motion.article
                  key={profile.url}
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-80px' }}
                  transition={{ duration: 0.48, delay: index * 0.08, ease: 'easeOut' }}
                  className="github-card"
                >
                  <div className="github-avatar">
                    <Github className="h-9 w-9" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <div className="mb-2 flex items-start justify-between gap-4">
                      <div>
                        <h3>{profile.name}</h3>
                        <p>{profile.role}</p>
                      </div>
                      <a href={profile.url} target="_blank" rel="noreferrer" className="github-open" aria-label={`Open ${profile.name} GitHub profile`}>
                        <ExternalLink className="h-5 w-5" />
                      </a>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {profile.tags.map((tag) => (
                        <span key={tag}>{tag}</span>
                      ))}
                    </div>
                    <button
                      type="button"
                      className="discord-copy"
                      onClick={() => void copyDiscordTag(profile.discord)}
                    >
                      <Disc3 className="h-4 w-4" />
                      <span>Discord:</span>
                      <strong>{copiedDiscord === profile.discord ? 'Copied' : profile.discord}</strong>
                      {copiedDiscord === profile.discord ? <Check className="h-4 w-4" /> : <Clipboard className="h-4 w-4" />}
                    </button>
                  </div>
                </motion.article>
              ))}
            </div>
          </div>
        </section>

        <section id="process" className="px-5 py-24 md:px-8">
          <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.9fr_1.1fr]">
            <div>
              <p className="section-kicker">Workflow</p>
              <h2 className="section-title">ทำงานเป็นขั้นตอน ชัดเจนตั้งแต่ต้น</h2>
            </div>

            <div className="space-y-4">
              {PROCESS.map((step, index) => (
                <motion.div
                  key={step}
                  initial={{ opacity: 0, x: 18 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: '-80px' }}
                  transition={{ duration: 0.45, delay: index * 0.06, ease: 'easeOut' }}
                  className="process-row"
                >
                  <div className="process-number">0{index + 1}</div>
                  <p>{step}</p>
                  <Check className="h-5 w-5 text-emerald-300" />
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section id="contact" className="px-5 pb-8 md:px-8">
          <div className="mx-auto max-w-7xl overflow-hidden rounded-[2rem] border border-white/10 bg-zinc-950">
            <div className="contact-band">
              <div>
                <p className="section-kicker">Contact</p>
                <h2 className="max-w-4xl text-[clamp(2.25rem,6vw,5.75rem)] font-black leading-none tracking-normal">
                  พร้อมทำให้เซิร์ฟเวอร์คุณนิ่งขึ้น
                </h2>
              </div>

              <a href={DISCORD_URL} target="_blank" rel="noreferrer" className="contact-button">
                คุยผ่าน Discord
                <MessageSquare className="h-5 w-5" />
              </a>
            </div>

            <footer className="flex flex-col justify-between gap-4 border-t border-white/10 px-6 py-6 text-sm text-zinc-500 md:flex-row md:items-center md:px-10">
              <div className="flex items-center gap-3">
                <img src={LOGO_SRC} alt="CADS Studio" className="h-8 w-8 object-contain" />
                <span className="font-mono font-bold text-zinc-300">CADS Studio</span>
              </div>
              <p>© 2026 CADS Studio. Minecraft services and server engineering.</p>
            </footer>
          </div>
        </section>
      </main>
    </div>
  );
}
