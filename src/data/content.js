export const profile = {
  name: "Shaheer Arif",
  location: "Calgary, Alberta",
  eyebrow: "Founder, Notitia  ·  Electrical Engineer",
  headline: "I build things that run on real hardware, and the companies around them.",
  intro: [
    "Fourth-year Electrical Engineering at the University of Calgary. I write firmware in C for STM32 and AVR microcontrollers, design the boards it runs on, and take telemetry off them over RF.",
    "I build the software side as well: mobile apps, backends and AI systems. Two of my projects are companies, VaultTen and SHAX, and both sit under Notitia, which I founded.",
  ],
  facts: [
    { label: "Company", value: "Founder, Notitia" },
    { label: "Discipline", value: "Electrical Engineering" },
    { label: "University", value: "University of Calgary" },
    { label: "Based in", value: "Calgary, Alberta" },
  ],
  now: {
    lead: "Currently",
    body: "A twelve-month co-op with Cenovus Energy in Lloydminster, through September 2027, on SCADA and leak detection for midstream pipelines. The work spans control systems and real-time data infrastructure, from PLC programming, VB and SQL to a good deal more.",
  },
};

export const work = [
  {
    title: "VaultTen",
    year: "2026",
    role: "Co-founder and CEO",
    body: "Banking infrastructure for Canadian fintechs. Companies connect to one API to run KYC, open compliant CAD spending accounts, issue Mastercard virtual cards and settle in real time against a double-entry ledger, without building a bank of their own. I built the backend and the dashboards, multi-tenant from the first day so that sandbox and live traffic never meet. It began as a pitch deck and is now a deployed product.",
    tech: "TypeScript, Fastify, PostgreSQL, Redis, Next.js",
  },
  {
    title: "SHAX",
    year: "2026",
    role: "Founder and lead developer",
    body: "A personal AI system that runs my day instead of answering questions about it. It lives on a dedicated Android phone through Termux, and I reach it over WhatsApp. It keeps context across everything I care about, tracks my goals without being asked, and schedules its own work. The third version has run reliably for months.",
    tech: "Node.js, Claude API, WhatsApp",
  },
  {
    title: "Environmental monitoring boat",
    year: "2025",
    role: "Systems engineer, third-year design project",
    body: "A team of six built an unmanned boat from the ground up: a custom PCB, a hull waterproofed by hand, STM32 firmware reading the water-quality sensors, and a 433 MHz link to a handheld controller. A Python script on the ground turns the live telemetry into a depth map of the area. It went on the water and came back with real data.",
    tech: "C, STM32, RF telemetry, PCB design, Python",
  },
  {
    title: "RC car",
    year: "2025",
    role: "Programming lead, ENEL 300",
    body: "Bare-metal C on an AVR128DB28, with no RTOS and no HAL. Interrupt handlers for the RF receiver, timer-based PWM for steering and throttle, an ultrasonic driver that detects obstacles out to about a metre, and the LCD driver, all on a board small enough to fit inside the car body. It drove, and it stopped before it hit anything.",
    tech: "C, AVR128DB28, 433 MHz RF, ultrasonic",
  },
  {
    title: "Glorek mobile apps",
    year: "2025",
    role: "Lead mobile developer",
    body: "Two React Native apps for a field service platform, one for clients and one for technicians, covering OTP authentication, service ordering, job tracking and payments. I owned the mobile side from the first screen to real users, and worked with the backend team on the API contracts.",
    tech: "React Native, Node.js, Axios",
  },
  {
    title: "FPGA digital systems",
    year: "2025",
    role: "ENEL 453",
    body: "A semester of designing digital hardware on a Xilinx Basys3: state machines, synchronous counters, debounce logic and seven-segment controllers, written bottom-up in synthesisable SystemVerilog. The standard was timing closure on real silicon, not a passing simulation.",
    tech: "SystemVerilog, Vivado, Basys3",
  },
  {
    title: "S.H.A.R.I.F.",
    year: "2025",
    role: "Founder and lead developer",
    body: "Built in my third year to learn whether a personal AI assistant earns its place day to day. It ran on Telegram, sent a morning briefing before I woke, tracked my portfolio, and came with a SwiftUI companion app. I ran it for over a year before retiring it in favour of SHAX. The idea held up.",
    tech: "Node.js, Telegram, SwiftUI",
  },
  {
    title: "Z-transform teaching package",
    year: "2025",
    role: "ENEL 327",
    body: "The course notes said little about Z-transforms, so I wrote what I wished existed: the theory, regions of convergence, every property, three inverse methods worked from scratch, and signal-processing examples with full solutions. Every answer was checked in SymPy and the whole package typeset in LaTeX. My professor distributed it to the class.",
    tech: "SymPy, LaTeX, DSP",
  },
];

export const roles = [
  {
    title: "Founder",
    org: "Notitia, Calgary, AB",
    dates: "2026 – Present",
    current: true,
    note: "The parent company of VaultTen and SHAX.",
  },
  {
    title: "SCADA and leak detection intern",
    org: "Cenovus Energy, Lloydminster, AB",
    dates: "Sep 2026 – Sep 2027",
    current: true,
    note: "A twelve-month co-op with the midstream operations team, covering pipeline monitoring, leak detection and control systems. The work runs across SCADA, PLC programming, VB and SQL, and the real-time data infrastructure behind field operations.",
  },
  {
    title: "Vice president of events",
    org: "DeepRacer Calgary, Calgary, AB",
    dates: "Sep 2023 – Sep 2025",
    note: "Ran events for UCalgary's AWS DeepRacer club for two years: eight competitions of more than a hundred people each, with sponsors, vendors and Amazon representatives at the larger ones.",
  },
  {
    title: "Front-end lead",
    org: "Glorek International, Jeddah, Saudi Arabia",
    dates: "May – Aug 2025",
    note: "Built the iOS and Android apps for Glorek's facility management platform, with ownership of authentication, service ordering, job tracking and payments from end to end.",
  },
  {
    title: "Operations coordinator",
    org: "Glorek International, Saudi Arabia",
    dates: "May – Aug 2024",
    note: "Coordinated crews and equipment across several active client sites, and became the main point of contact for a number of them.",
  },
  {
    title: "Operations coordinator intern",
    org: "Glorek International, Jeddah, Saudi Arabia",
    dates: "May – Aug 2023",
    note: "My first role: running operations from the initial brief to the completed job through a high-volume summer.",
  },
  {
    title: "Operations coordinator, seasonal",
    org: "Al-Raya Supermarkets, Saudi Arabia",
    dates: "2020 – 2021",
    note: "Staffing and shift scheduling through peak demand at a large regional chain.",
  },
];

export const background = [
  "Born and raised in Jeddah, Saudi Arabia, and now based in Calgary. I speak Arabic, English and Urdu. I took apart electronics and cars long before I knew what a resistor was, and that curiosity is the reason I am in this field.",
  "Not everything I have built is public. Some of it sits under IP or work-product agreements. Ask, and I will tell you what I can.",
];

export const capabilities = [
  { label: "Control systems", items: "SCADA, leak detection, PLC programming, VB, SQL, and more" },
  { label: "Firmware", items: "C on STM32 and AVR" },
  { label: "Digital", items: "SystemVerilog, Vivado, Basys3 FPGA" },
  { label: "Buses and RF", items: "I2C, SPI, UART, PWM, 433 MHz links" },
  { label: "Boards and simulation", items: "PCB layout, LTspice" },
  { label: "Web and apps", items: "TypeScript, Node, React, Next.js, React Native, SwiftUI" },
  { label: "Data and operations", items: "Python, MATLAB, Postgres, Docker" },
];

export const links = [
  { label: "shaheermarif@outlook.com", href: "mailto:shaheermarif@outlook.com", primary: true },
  { label: "LinkedIn", href: "https://linkedin.com/in/shaheer-m-arif" },
  { label: "GitHub", href: "https://github.com/shaheer-m-arif" },
];

export const nav = [
  { label: "About", href: "#background", id: "background" },
  { label: "Work", href: "#work", id: "work" },
  { label: "Experience", href: "#experience", id: "experience" },
  { label: "Contact", href: "#contact", id: "contact" },
];
