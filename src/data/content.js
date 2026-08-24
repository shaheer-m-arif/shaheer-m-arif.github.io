export const profile = {
  name: "Shaheer Arif",
  location: "Calgary, Alberta",
  headline:
    "I build things that run on real hardware, and the software that talks to them.",
  intro: [
    "I'm a fourth-year Electrical Engineering student at the University of Calgary. I write C firmware for STM32 and AVR microcontrollers, design the boards it runs on, and get telemetry off them over RF.",
    "I also ship the other half: React Native apps, Node backends, and the AI tooling I use to run my own life. Two of the things below are companies I'm building right now.",
  ],
  now: {
    lead: "Currently:",
    body: "a 12-month SCADA and leak detection co-op with Cenovus Energy in Lloydminster, through September 2027, working on pipeline monitoring and real-time control infrastructure.",
  },
};

export const work = [
  {
    title: "VaultTen",
    year: "2026",
    role: "Co-founder and CEO",
    body: "Banking infrastructure for Canadian fintechs. Companies plug into our API to run KYC, open compliant CAD spending accounts, issue Mastercard virtual cards, and settle transactions in real time against a double-entry ledger, without building a bank themselves. I built the backend and the dashboards, multi-tenant from day one so sandbox and live traffic never cross. It started as a pitch deck and it's a deployed product now.",
    tech: "TypeScript, Fastify, PostgreSQL, Redis, Next.js",
  },
  {
    title: "SHAX",
    year: "2026",
    role: "Founder and lead developer",
    body: "A personal AI system that actually runs my life rather than answering questions about it. It lives on a dedicated Android phone through Termux and I message it over WhatsApp, so I can hand it something at 2am and it deals with it. It holds context across everything I care about, tracks goals without me logging anything, and schedules its own work. The third version has been running reliably for months.",
    tech: "Node.js, Claude API, WhatsApp",
  },
  {
    title: "Environmental monitoring boat",
    year: "2025",
    role: "Systems engineer, third-year design project",
    body: "Six of us built an unmanned boat from nothing: our own PCB, a hull we waterproofed by hand, STM32 firmware reading the water quality sensors, and a 433 MHz link back to a handheld controller. A Python script on the ground turns the live telemetry into a depth map of the area. It went on water and came back with real data.",
    tech: "C, STM32, RF telemetry, PCB design, Python",
  },
  {
    title: "RC car",
    year: "2025",
    role: "Programming lead, ENEL 300",
    body: "Bare-metal C on an AVR128DB28. No RTOS, no HAL, nothing between me and the hardware. I wrote the interrupt handlers for the RF receiver, timer-based PWM for steering and throttle, an ultrasonic driver for obstacle detection out to about a metre, and the LCD driver, all routed onto a board small enough to fit inside the car body. It drove, and it stopped before hitting things.",
    tech: "C, AVR128DB28, 433 MHz RF, ultrasonic",
  },
  {
    title: "Glorek mobile apps",
    year: "2025",
    role: "Lead mobile developer",
    body: "Two React Native apps for a field service platform, one for clients and one for technicians, covering OTP auth, service ordering, job status tracking and payments. I owned the mobile side from the first screen through to real people using it on their phones, working directly with the backend team on the API contracts.",
    tech: "React Native, Node.js, Axios",
  },
  {
    title: "FPGA digital systems",
    year: "2025",
    role: "ENEL 453",
    body: "A semester of designing real digital hardware on a Xilinx Basys3 board: state machines, synchronous counters, debounce logic, seven-segment controllers, all built bottom-up in synthesisable SystemVerilog. The bar wasn't passing a simulation. It was meeting timing on real silicon, where a clock constraint off by a little makes the board misbehave immediately.",
    tech: "SystemVerilog, Vivado, Basys3",
  },
  {
    title: "S.H.A.R.I.F.",
    year: "2025",
    role: "Founder and lead developer",
    body: "Built in third year to find out whether a personal AI assistant was worth having day to day, or just a fun demo. It ran on Telegram, sent me a morning briefing before I was awake, tracked my portfolio, and had a SwiftUI companion app. I kept it running for over a year before retiring it in favour of SHAX. It proved the idea worked.",
    tech: "Node.js, Telegram, SwiftUI",
  },
  {
    title: "Z-transform teaching package",
    year: "2025",
    role: "ENEL 327",
    body: "The course notes had almost nothing useful on Z-transforms, so I wrote the resource I wished existed: the theory, region of convergence, every property, three inverse methods worked from scratch, and real signal processing examples with full solutions. I checked every answer in SymPy and typeset it in LaTeX. My professor handed it out to the whole class.",
    tech: "SymPy, LaTeX, DSP",
  },
];

export const roles = [
  {
    title: "SCADA and leak detection intern",
    org: "Cenovus Energy, Lloydminster, AB",
    dates: "Sep 2026 – Sep 2027",
    note: "A 12-month co-op with the upstream operations team, on pipeline monitoring, control systems and the real-time data infrastructure that keeps field operations running.",
  },
  {
    title: "Vice president of events",
    org: "DeepRacer Calgary, Calgary, AB",
    dates: "Sep 2023 – Sep 2025",
    note: "Ran the events side of UCalgary's AWS DeepRacer club for two years: eight competitions, over a hundred people at each, plus sponsors, vendors and the Amazon reps who came in for the bigger ones.",
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
    note: "Coordinated crews and equipment across several active client sites, and became the main point of contact for a number of them.",
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
  "I was born and raised in Jeddah, Saudi Arabia, and I'm based in Calgary now. I speak Arabic, English and Urdu. I grew up taking apart electronics and cars long before I knew what a resistor was, and that curiosity is more or less the whole reason I'm in this field.",
  "On the hardware side I work in C on STM32 and AVR, SystemVerilog on FPGAs, and I'm comfortable with I2C, SPI, UART, PWM and RF links, PCB layout, LTspice and Vivado. On the software side it's TypeScript and Node, React and Next.js, React Native and SwiftUI, Python and MATLAB, Postgres and Docker.",
  "Not everything I've built is public. Some of it sits under IP or work-product agreements. Ask me about any of it and I'll tell you what I can.",
];

export const links = [
  { label: "shaheermarif@outlook.com", href: "mailto:shaheermarif@outlook.com" },
  { label: "LinkedIn", href: "https://linkedin.com/in/shaheer-m-arif" },
  { label: "GitHub", href: "https://github.com/shaheer-m-arif" },
];

export const nav = [
  { label: "Background", href: "#background" },
  { label: "Work", href: "#work" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];
