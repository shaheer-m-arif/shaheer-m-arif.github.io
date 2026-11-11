export const profile = {
  name: "Shaheer Arif",
  location: "Calgary, Alberta",
  headline: "I make real hardware come alive, then write the software that makes it talk back.",
  intro: [
    "Fourth-year Electrical Engineering at the University of Calgary, and I basically live in C. I write firmware for STM32 and AVR chips, design the boards they run on, and rip telemetry off them over RF.",
    "Then I go build the other half: React Native apps, Node backends, and an AI system that runs my life. Two of the projects below are companies I'm building right now, for real.",
  ],
  readout: [
    { label: "Discipline", value: "Electrical Engineering, year 4" },
    { label: "University", value: "University of Calgary" },
    { label: "Base", value: "Calgary, Alberta" },
    {
      label: "Status",
      value: "On co-op at Cenovus Energy, Lloydminster",
      live: true,
    },
  ],
  now: {
    lead: "Right now",
    body: "Deep in a 12-month SCADA and leak detection co-op with Cenovus Energy in Lloydminster, through September 2027. Midstream pipelines, real-time control systems, and the kind of data infrastructure where a missed signal actually matters. I'm getting hands-on with a huge range of it, from PLC programming and VB to SQL and a lot more.",
  },
};

export const work = [
  {
    title: "VaultTen",
    year: "2026",
    role: "Co-founder and CEO",
    body: "Banking infrastructure for Canadian fintechs, so they never have to build a bank. Plug into our API and you get KYC, compliant CAD spending accounts, Mastercard virtual cards, and real-time settlement against a double-entry ledger. I built the backend and the dashboards, multi-tenant from day one so sandbox and live traffic can never touch. It started life as a pitch deck. Now it's a deployed product.",
    tech: "TypeScript, Fastify, PostgreSQL, Redis, Next.js",
  },
  {
    title: "SHAX",
    year: "2026",
    role: "Founder and lead developer",
    body: "An AI that doesn't just answer questions about my life. It runs it. SHAX lives on a dedicated Android phone through Termux, and I talk to it over WhatsApp, so I can hand it something at 2am and it just handles it. It holds context across everything I care about, tracks my goals without me logging a thing, and schedules its own work. Version three has been rock solid for months.",
    tech: "Node.js, Claude API, WhatsApp",
  },
  {
    title: "Environmental monitoring boat",
    year: "2025",
    role: "Systems engineer, third-year design project",
    body: "Six of us built an unmanned boat from absolutely nothing: our own PCB, a hull we waterproofed by hand, STM32 firmware reading the water quality sensors, and a 433 MHz link to a handheld controller. A Python script on the ground turns the live telemetry into a depth map of the area. It hit the water and came home with real data.",
    tech: "C, STM32, RF telemetry, PCB design, Python",
  },
  {
    title: "RC car",
    year: "2025",
    role: "Programming lead, ENEL 300",
    body: "Bare-metal C on an AVR128DB28. No RTOS. No HAL. Nothing between me and the silicon. I wrote the interrupt handlers for the RF receiver, timer-based PWM for steering and throttle, an ultrasonic driver that sees obstacles out to about a metre, and the LCD driver, all squeezed onto a board small enough to hide inside the car body. It drove. It stopped before it hit things.",
    tech: "C, AVR128DB28, 433 MHz RF, ultrasonic",
  },
  {
    title: "Glorek mobile apps",
    year: "2025",
    role: "Lead mobile developer",
    body: "Two React Native apps for a field service platform, one for clients and one for technicians: OTP auth, service ordering, job tracking and payments. I owned the whole mobile side, from the first screen to real people using it on their phones, and worked hand in hand with the backend team on the API contracts.",
    tech: "React Native, Node.js, Axios",
  },
  {
    title: "FPGA digital systems",
    year: "2025",
    role: "ENEL 453",
    body: "A full semester building real digital hardware on a Xilinx Basys3: state machines, synchronous counters, debounce logic and seven-segment controllers, built bottom-up in synthesisable SystemVerilog. Passing a simulation wasn't the bar. Meeting timing on real silicon was, where a clock constraint that's slightly off makes the board misbehave instantly.",
    tech: "SystemVerilog, Vivado, Basys3",
  },
  {
    title: "S.H.A.R.I.F.",
    year: "2025",
    role: "Founder and lead developer",
    body: "I built this in third year to find out whether a personal AI assistant was worth having every single day, or just a fun demo. It ran on Telegram, sent me a morning briefing before I was awake, tracked my portfolio, and came with a SwiftUI companion app. I kept it running for over a year before retiring it for SHAX. Verdict: the idea works.",
    tech: "Node.js, Telegram, SwiftUI",
  },
  {
    title: "Z-transform teaching package",
    year: "2025",
    role: "ENEL 327",
    body: "The course notes had almost nothing useful on Z-transforms, so I wrote the resource I wished existed: the theory, region of convergence, every property, three inverse methods worked from scratch, and real signal processing examples with full solutions. Every answer checked in SymPy, all of it typeset in LaTeX. My professor handed it out to the entire class.",
    tech: "SymPy, LaTeX, DSP",
  },
];

export const roles = [
  {
    title: "SCADA and leak detection intern",
    org: "Cenovus Energy, Lloydminster, AB",
    dates: "Sep 2026 – Sep 2027",
    current: true,
    note: "A 12-month co-op with the midstream operations team, living inside pipeline monitoring, leak detection and control systems. I've been working across the whole stack: SCADA, PLC programming, VB, SQL and plenty more, on the real-time data infrastructure that keeps field operations running.",
  },
  {
    title: "Vice president of events",
    org: "DeepRacer Calgary, Calgary, AB",
    dates: "Sep 2023 – Sep 2025",
    note: "Ran the events side of UCalgary's AWS DeepRacer club for two years: eight competitions, over a hundred people at every one, plus sponsors, vendors and the Amazon reps who showed up for the bigger ones.",
  },
  {
    title: "Front-end lead",
    org: "Glorek International, Jeddah, Saudi Arabia",
    dates: "May – Aug 2025",
    note: "Built the iOS and Android apps for Glorek's facility management platform, owning auth, service ordering, job tracking and payments end to end.",
  },
  {
    title: "Operations coordinator",
    org: "Glorek International, Saudi Arabia",
    dates: "May – Aug 2024",
    note: "Kept crews and equipment moving across several active client sites, and became the main point of contact for a number of them.",
  },
  {
    title: "Operations coordinator intern",
    org: "Glorek International, Jeddah, Saudi Arabia",
    dates: "May – Aug 2023",
    note: "My first proper job: running operations from the initial brief through to job completion across a high-volume summer.",
  },
  {
    title: "Operations coordinator, seasonal",
    org: "Al-Raya Supermarkets, Saudi Arabia",
    dates: "2020 – 2021",
    note: "Staffing and shift scheduling through peak demand at a large regional chain.",
  },
];

export const background = [
  "Born and raised in Jeddah, Saudi Arabia, now based in Calgary. Arabic, English and Urdu. I was pulling apart electronics and cars long before I knew what a resistor was, and that obsession is the whole reason I'm in this field.",
  "Not everything I've built is public. Some of it sits under IP or work-product agreements. Ask me about any of it and I'll tell you what I can.",
];

export const capabilities = [
  { label: "Control systems", items: "SCADA, leak detection, PLC programming, VB, SQL, and more" },
  { label: "Firmware", items: "C on STM32 and AVR" },
  { label: "Digital", items: "SystemVerilog, Vivado, Basys3 FPGA" },
  { label: "Buses and RF", items: "I2C, SPI, UART, PWM, 433 MHz links" },
  { label: "Boards and sim", items: "PCB layout, LTspice" },
  { label: "Web and apps", items: "TypeScript, Node, React, Next.js, React Native, SwiftUI" },
  { label: "Data and ops", items: "Python, MATLAB, Postgres, Docker" },
];

export const links = [
  { label: "shaheermarif@outlook.com", href: "mailto:shaheermarif@outlook.com", primary: true },
  { label: "LinkedIn", href: "https://linkedin.com/in/shaheer-m-arif" },
  { label: "GitHub", href: "https://github.com/shaheer-m-arif" },
];

export const nav = [
  { label: "Background", href: "#background", id: "background" },
  { label: "Work", href: "#work", id: "work" },
  { label: "Experience", href: "#experience", id: "experience" },
  { label: "Contact", href: "#contact", id: "contact" },
];
