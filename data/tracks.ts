export interface CardItem {
  slug: string;
  title: string;
  description: string;
  image?: string; // path relative to /public, e.g. "/images/foo.png"
}

export interface SupertrackData {
  title: string;
  description: string;
  items: CardItem[];
}

// Top-level supertracks shown on the home page.
// Each supertrack links to /supertracks/[slug]
export const supertracks: CardItem[] = [
  {
    slug: "autonomous-systems",
    title: "Autonomous Systems",
    description:
      "The Autonomous Systems tracks prepare students to design and develop machines capable of independent operation in dynamic environments. Students study the integration of robotics, artificial intelligence, sensors, and control theory to create systems that can perceive their surroundings, make decisions, and act without constant human oversight. The tracks combines mechanical design with advanced algorithms to produce reliable, adaptive, and intelligent machines.\n\nApplications of autonomous systems span across industries including self-driving cars, drones, industrial automation, and space exploration. Graduates will gain the ability to work on interdisciplinary teams, develop cutting-edge control architectures, and tackle challenges in safety, efficiency, and human\u2013machine collaboration.",
    image: "/autonomous-systems/autonomous-systems.webp",
  },
  {
    slug: "communications",
    title: "Communications",
    description:
      "The Communications tracks provide a foundation in how information is transmitted, processed, and secured across different media. Students study both analog and digital communication systems, modulation techniques, error correction, and coding theory. Coursework emphasizes signal integrity, bandwidth efficiency, and system-level design for modern communication networks.\n\nApplications range from cellular and satellite networks to optical systems and internet infrastructure. By combining theory with practical projects, students will be prepared to design robust and reliable communication systems that form the backbone of today\u2019s interconnected world.",
    image: "/communications/communications.webp",
  },
  {
    slug: "cybersecurity",
    title: "Cybersecurity",
    description:
      "The Cybersecurity tracks prepare students to protect computer systems, networks, and data from evolving threats. Students learn about cryptography, intrusion detection, secure software design, and incident response. Coursework emphasizes both proactive and reactive strategies, balancing technical expertise with ethical and legal considerations in cybersecurity practice.\n\nApplications span nearly every industry, from finance and healthcare to government and defense. With global reliance on digital systems continuing to grow, graduates will be prepared to develop and implement robust security solutions, ensuring the confidentiality, integrity, and availability of critical information.",
    image: "/cybersecurity/cybersecurity.webp",
  },
  {
    slug: "high-performance-computing",
    title: "High-Performance Computing",
    description:
      "The High-Performance Computing (HPC) tracks prepare students to work with advanced computing architectures that solve large-scale, data-intensive problems. Students learn about parallel programming, distributed systems, GPU computing, and optimization techniques for supercomputers and cloud platforms. Coursework emphasizes both theoretical performance models and practical coding for high-speed computation.\n\nApplications of HPC span scientific research, financial modeling, weather prediction, artificial intelligence, and bioinformatics. As demand for large-scale computational power continues to grow, graduates will be prepared to harness advanced systems that drive discovery and innovation across disciplines.",
    image: "/high-performance-computing/high-performance-computing.webp",
  },
  {
    slug: "robotics",
    title: "Robotics",
    description:
      "The Robotics tracks explore the interdisciplinary design of intelligent machines that interact with and adapt to their environment. Students learn about mechanical design, sensors, actuators, control systems, and artificial intelligence, integrating knowledge from multiple engineering disciplines. Coursework emphasizes both theory and hands-on projects, giving students experience in building and programming robotic systems.\n\nApplications of robotics span manufacturing, healthcare, space exploration, agriculture, and service industries. As automation continues to transform global industries, graduates of this emphasis will be prepared to develop innovative robotic solutions that enhance productivity, safety, and quality of life.",
    image: "/robotics/robotics.webp",
  },
  {
    slug: "artificial-intelligence",
    title: "Artificial Intelligence",
    description:
      "The Artificial Intelligence tracks explore the design of intelligent systems that can learn, reason, and make decisions. Students study foundational AI topics including search algorithms, knowledge representation, natural language processing, and intelligent agents. Coursework emphasizes both theoretical foundations and practical applications of AI across real-world domains.\n\nAI is transforming industries such as healthcare, finance, manufacturing, and transportation. From chatbots and recommendation systems to advanced robotics and autonomous systems, graduates of this emphasis will be prepared to apply AI techniques to solve complex problems and drive innovation in an increasingly data-driven world.",
    image: "/artificial-intelligence/artificial-intelligence.webp",
  },
  {
    slug: "energy",
    title: "Energy",
    description:
      "The Energy tracks focus on the generation, storage, and efficient use of power to meet the needs of modern society. Students study conventional and renewable energy sources, power electronics, and energy efficiency strategies. Coursework emphasizes sustainable design, environmental impact, and the transition toward cleaner and more resilient energy systems.\n\nApplications of energy engineering span utilities, manufacturing, transportation, and green technologies. With global challenges in climate change and energy demand, graduates will be prepared to contribute to innovations in energy production and management, ensuring a sustainable future.",
    image: "/energy/energy.webp",
  },
  {
    slug: "biotechnology",
    title: "Biotechnology",
    description:
      "The Biotechnology tracks explore the intersection of biology and engineering to develop technologies that benefit medicine, agriculture, and the environment. Students study genetic engineering, biomaterials, bioprocessing, and bioinformatics, with coursework emphasizing the application of engineering methods to biological systems.\n\nApplications of biotechnology include pharmaceuticals, food production, environmental remediation, and healthcare innovation. By blending life sciences with engineering design, graduates will be prepared to contribute to breakthroughs that improve quality of life and address global challenges in health and sustainability.",
    image: "/biotechnology/biotechnology.webp",
  },
];

// Sub-items for each supertrack, keyed by supertrack slug.
export const supertrackItems: Record<string, SupertrackData> = {
  "autonomous-systems": {
    title: "Autonomous Systems",
    description: "Automating the world around you, from self-driving cars to smart homes.",
    items: [
      {
        title: "Internet Of Things",
        slug: "internet-of-things",
        description:
          "The Internet of Things track focuses on the rapidly growing ecosystem of smart, connected devices. Students learn how everyday objects\u2014from appliances and wearables to vehicles and industrial sensors\u2014can be enhanced with embedded processors, networking capability, and cloud-based analytics. Topics include device design, data communication protocols, cloud integration, and security considerations for interconnected systems.\n\nWith IoT driving the future of smart cities, healthcare, logistics, and manufacturing, this emphasis equips students with the technical and practical skills to develop scalable and secure IoT solutions. By combining embedded systems, networking, and data science, graduates will be prepared to innovate in industries where connectivity transforms how information is gathered, shared, and applied.",
        image: "/autonomous-systems/internet-of-things.webp",
      },
      {
        title: "Controls",
        slug: "controls",
        description:
          "The Controls track covers the fundamental and advanced principles of feedback and automation systems. Students learn how to model, analyze, and design control systems that regulate the behavior of dynamic processes, ensuring stability, precision, and robustness. Coursework emphasizes classical and modern control theory, real-time implementation, and system optimization.\n\nApplications of control engineering are vast, ranging from robotics, aerospace, and automotive engineering to power systems and industrial automation. By mastering both theoretical and practical aspects, students will be prepared to design control strategies that enable machines and processes to adapt intelligently to changing environments and perform reliably under complex conditions.",
        image: "/autonomous-systems/controls.webp",
      },
      {
        title: "Circuits",
        slug: "circuits",
        description:
          "The Circuits track introduces students to the foundation of electrical and electronic engineering. Students learn to design, analyze, and implement analog and digital circuits, covering topics such as resistive and reactive components, operational amplifiers, logic circuits, and integrated systems. Emphasis is placed on understanding how circuits underpin the performance and functionality of modern technology.\n\nPractical applications include everything from consumer electronics and telecommunications to renewable energy systems and biomedical devices. Through lab-based experiences and design projects, students gain hands-on skills in circuit design and testing, preparing them for careers in industries that rely on efficient and reliable electronic systems.",
        image: "/autonomous-systems/circuits.webp",
      },
      {
        title: "Semi-Conductors",
        slug: "semi-conductors",
        description:
          "The Semiconductors track explores the physics, materials, and engineering of semiconductor devices that power modern electronics. Students study carrier transport, fabrication techniques, device structures, and the design of integrated circuits. Coursework integrates theory with laboratory experiences in device characterization and materials science.\n\nSemiconductors form the backbone of computing, communications, renewable energy, and emerging technologies like quantum computing. This emphasis prepares students to contribute to advances in microelectronics, power electronics, and photonics, ensuring they have the expertise to innovate in one of the most critical fields driving global technological progress.",
        image: "/autonomous-systems/semiconductors.webp",
      },
      {
        title: "Software Engineering",
        slug: "software-engineering",
        description:
          "The Software Engineering track provides students with the principles and practices for developing large-scale, reliable, and maintainable software systems. Students study the full software development lifecycle, including requirements gathering, design, implementation, testing, and deployment. Emphasis is placed on agile methodologies, software architecture, version control, and team collaboration, preparing students to build solutions that meet both technical and user needs.\n\nThis track is highly versatile, equipping graduates with skills that apply across industries such as technology, finance, healthcare, and defense. With a strong foundation in both programming and engineering design, students will be prepared to create innovative applications, optimize system performance, and adapt to evolving software tools and practices in the professional world.",
        image: "/autonomous-systems/software-engineering.webp",
      },
      {
        title: "Embedded Systems",
        slug: "embedded-systems",
        description:
          "The Embedded Systems Programming track focuses on the design and development of software for microcontrollers and specialized computing devices. Students learn to work within hardware constraints, implement real-time operating systems, and program devices that interact directly with sensors and actuators. Coursework emphasizes both low-level programming and system-level integration, bridging the gap between hardware and software design.\n\nEmbedded systems play a critical role in technologies ranging from consumer electronics and medical devices to automotive systems and aerospace applications. By gaining experience in both coding and hardware interfacing, students will develop the skills to create efficient, reliable, and innovative embedded solutions for a wide variety of industries.",
        image: "/autonomous-systems/embedded-systems.webp",
      },
      {
        title: "Self-Driving Vehicles",
        slug: "self-driving-vehicles",
        description:
          "The Self-Driving Vehicles track explores the technologies that enable autonomous transportation. Students study computer vision, sensor fusion, machine learning, and control algorithms that allow vehicles to perceive their environment, make decisions, and navigate safely. The program also addresses ethical considerations, regulatory challenges, and human\u2013machine interaction in the development of autonomous mobility.\n\nApplications extend beyond personal cars to include trucking, public transit, agriculture, and delivery systems. With the automotive industry undergoing a major transformation, graduates of this emphasis will be prepared to contribute to cutting-edge research and development in the rapidly growing field of autonomous transportation.",
        image: "/autonomous-systems/self-driving-vehicles.webp",
      },
      {
        title: "Drones",
        slug: "drones",
        description:
          "The Drones track provides students with the knowledge and skills to design, program, and operate unmanned aerial vehicles (UAVs). Coursework covers aerodynamics, flight control systems, navigation, remote sensing, and communication protocols. Students also learn about the legal and ethical considerations surrounding drone deployment in civilian, commercial, and defense contexts.\n\nDrones are increasingly used in fields such as agriculture, logistics, filmmaking, disaster response, and environmental monitoring. With hands-on projects and interdisciplinary collaboration, students gain practical experience in drone technology, preparing them for careers in industries where UAVs play a transformative role.",
        image: "/autonomous-systems/drones.webp",
      },
      {
        title: "Smart Homes",
        slug: "smart-homes",
        description:
          "The Smart Homes track focuses on the integration of automation, connectivity, and artificial intelligence in residential environments. Students study technologies such as IoT devices, energy management systems, home security, and smart appliances that create efficient, responsive, and sustainable living spaces. Coursework emphasizes interoperability, user experience design, and data security.\n\nWith smart home adoption growing worldwide, applications extend to energy conservation, accessibility for individuals with disabilities, and improved quality of life through personalized automation. Graduates of this emphasis will be equipped to design and deploy intelligent systems that meet the evolving needs of modern households and communities.",
        image: "/autonomous-systems/smart-homes.webp",
      },
    ],
  },
  communications: {
    title: "Communications",
    description: "Getting information from one place to another, reliably and securely.",
    items: [
      
        {
          title: "Wireless Networking",
          slug: "wireless-networking",
          description:
            "The Wireless Networking track explores the design and implementation of wireless communication systems that connect devices across local, metropolitan, and wide-area networks. Students learn about protocols, architectures, and standards that enable seamless mobile connectivity, from Wi-Fi to emerging 5G and 6G systems. Emphasis is placed on network security, scalability, and interoperability.\n\nWith wireless networking at the core of global communication, applications include mobile devices, smart cities, healthcare, and industrial automation. Graduates will be prepared to innovate in areas such as next-generation cellular networks, IoT connectivity, and resilient wireless infrastructure.",
          image: "/communications/wireless-networking.webp",
        },
        {
          title: "Wireless Communications",
          slug: "wireless-communications",
          description:
            "The Wireless Communications track focuses on the principles and applications of transmitting information without physical connections. Students study topics such as radio wave propagation, modulation schemes, antenna design, and advanced techniques like multiple-input multiple-output (MIMO). Coursework emphasizes both theoretical modeling and practical design of wireless communication systems.\n\nApplications span mobile phones, satellite links, military communications, and broadband wireless services. As demand for high-speed, low-latency connectivity continues to grow, graduates will be equipped to contribute to advancements in wireless technologies that keep people and devices connected worldwide.",
          image: "/communications/wireless-communications.webp",
        },
        {
          title: "Array Signal Processing",
          slug: "array-signal-processing",
          description:
            "The Array Signal Processing track teaches students how to analyze and interpret signals collected by multiple sensors arranged in arrays. Students explore concepts such as beamforming, direction-of-arrival estimation, and spatial filtering, with applications in radar, sonar, communications, and biomedical imaging. Coursework integrates theory, algorithms, and hands-on computational tools.\n\nThis field has growing importance in technologies such as 5G wireless, acoustic sensing, and remote sensing. By mastering advanced signal processing techniques, students will be prepared to tackle challenges in environments where extracting accurate information from complex signals is critical.",
          image: "/communications/array-signal-processing.webp",
        },
        {
          title: "Secure Digital Communication",
          slug: "secure-digital-communication",
          description:
            "The Secure Digital Communication track focuses on methods for ensuring reliable and confidential data exchange. Students learn about digital encoding, error detection and correction, encryption, authentication, and privacy-preserving techniques. The program emphasizes the intersection of communication theory with cybersecurity practices.\n\nApplications include military and government communications, financial transactions, satellite links, and wireless networks. With data security a top concern in global communications, graduates will be well-prepared to design systems that balance performance with robust protection against adversarial threats.",
          image: "/communications/secure-digital-communication.webp",
        },
        {
          title: "Optical Engineering",
          slug: "optical-engineering",
          description:
            "The Optical Engineering track explores the science and engineering of light-based systems. Students study the behavior of light, optical materials, and devices such as lenses, lasers, and fiber optics. Coursework emphasizes imaging, photonic communication, and optical signal processing, bridging theory with hands-on laboratory design.\n\nApplications range from telecommunications and medical imaging to defense, manufacturing, and space exploration. As photonics plays a growing role in modern technology, graduates of this emphasis will be equipped to design and innovate in areas where optical solutions drive progress.",
          image: "/communications/optical-engineering.webp",
        },
        {
          title: "Circuits",
          slug: "circuits",
          description:
            "The Circuits track introduces students to the foundation of electrical and electronic engineering. Students learn to design, analyze, and implement analog and digital circuits, covering topics such as resistive and reactive components, operational amplifiers, logic circuits, and integrated systems. Emphasis is placed on understanding how circuits underpin the performance and functionality of modern technology.\n\nPractical applications include everything from consumer electronics and telecommunications to renewable energy systems and biomedical devices. Through lab-based experiences and design projects, students gain hands-on skills in circuit design and testing, preparing them for careers in industries that rely on efficient and reliable electronic systems.",
          image: "/communications/circuits.webp",
        },
        {
          title: "Optoelectronics",
          slug: "optoelectronics",
          description:
            "The Optoelectronics track focuses on devices and systems that convert electrical signals into light and light into electrical signals. Students study the physics and design of lasers, light-emitting diodes (LEDs), solar cells, and photodetectors, as well as their integration into communication and sensing systems. Coursework emphasizes both theoretical modeling and practical applications of optoelectronic technologies.\n\nOptoelectronics underpins many modern innovations, from fiber-optic communications and renewable energy systems to medical diagnostics and consumer electronics. With expertise in this field, graduates will be prepared to contribute to advancing technologies that rely on efficient light-based energy conversion and high-speed information transfer.",
          image: "/communications/optoelectronics.webp",
        },
        {
          title: "Radar",
          slug: "radar",
          description:
            "The Radar track explores the principles and applications of radio detection and ranging systems. Students learn about electromagnetic wave propagation, signal processing, target detection, tracking algorithms, and system design. Coursework combines theoretical concepts with hands-on labs and simulations to provide a comprehensive understanding of radar technology.\n\nApplications of radar extend across defense, aviation, meteorology, automotive safety, and remote sensing. As radar becomes increasingly integrated into modern infrastructure\u2014such as self-driving vehicles and weather monitoring\u2014graduates will be well-equipped to contribute to innovation and research in this evolving field.",
          image: "/communications/radar.webp",
        },
        {
          title: "Smart Homes",
          slug: "smart-homes",
          description:
            "The Smart Homes track focuses on the integration of automation, connectivity, and artificial intelligence in residential environments. Students study technologies such as IoT devices, energy management systems, home security, and smart appliances that create efficient, responsive, and sustainable living spaces. Coursework emphasizes interoperability, user experience design, and data security.\n\nWith smart home adoption growing worldwide, applications extend to energy conservation, accessibility for individuals with disabilities, and improved quality of life through personalized automation. Graduates of this emphasis will be equipped to design and deploy intelligent systems that meet the evolving needs of modern households and communities.",
          image: "/communications/smart-homes.webp",
        },
    ],
  },
  cybersecurity: {
    title: "Cybersecurity",
    description: "Protecting digital information and systems from unauthorized access and attacks.",
    items: [
      {
        title: "Network Security",
        slug: "network-security",
        description:
          "The Network Security track focuses on the protection of communication infrastructures and data transmission. Students study firewalls, intrusion prevention systems, virtual private networks (VPNs), and secure communication protocols. Coursework highlights how to defend networks against malware, denial-of-service attacks, and unauthorized access.\n\nAs cyber threats increasingly target network vulnerabilities, expertise in network security is critical for businesses, governments, and individuals. Graduates will be equipped to design and manage secure communication environments, ensuring reliable connectivity in a world that depends on trusted digital infrastructure.",
        image: "/cybersecurity/network-security.webp",
      },
      {
          title: "Secure Digital Communication",
          slug: "secure-digital-communication",
          description:
            "The Secure Digital Communication track focuses on methods for ensuring reliable and confidential data exchange. Students learn about digital encoding, error detection and correction, encryption, authentication, and privacy-preserving techniques. The program emphasizes the intersection of communication theory with cybersecurity practices.\n\nApplications include military and government communications, financial transactions, satellite links, and wireless networks. With data security a top concern in global communications, graduates will be well-prepared to design systems that balance performance with robust protection against adversarial threats.",
          image: "/cybersecurity/secure-digital-communication.webp",
        },
      {
        title: "Ethical Hacking",
        slug: "ethical-hacking",
        description:
          "The Ethical Hacking track introduces students to the tools and techniques used by security professionals to identify vulnerabilities in computer systems. Students learn penetration testing, vulnerability scanning, social engineering, and exploit prevention, all within a framework of legal and ethical responsibility. Coursework emphasizes the role of ethical hackers in strengthening defenses by thinking like adversaries.\n\nApplications of ethical hacking are essential in industries that prioritize cybersecurity, including finance, defense, and technology services. Graduates will be prepared to work as penetration testers, security consultants, or cyber defense specialists, helping organizations proactively identify and mitigate risks before they are exploited.",
        image: "/cybersecurity/ethical-hacking.webp",
      },
      {
        title: "Smart Devices",
        slug: "smart-devices",
        description:
          "The Smart Devices track explores the design and integration of intelligent, connected products that enhance daily life and industrial processes. Students study the convergence of embedded systems, sensors, wireless communication, and data analytics to create devices capable of adaptive behavior and seamless interaction with users. Coursework emphasizes both technical design and human-centered applications.\n\nSmart devices are transforming industries such as healthcare, transportation, consumer electronics, and environmental monitoring. From wearable fitness trackers to advanced industrial sensors, students in this emphasis will gain the skills to innovate at the intersection of hardware, software, and connectivity, shaping the next generation of intelligent technologies.",
        image: "/cybersecurity/smart-devices.webp",
      },
      {
        title: "Cyber Engineering",
        slug: "cyber-engineering",
        description:
          "The Cyber Engineering track bridges traditional computer engineering with advanced cybersecurity principles. Students learn how to design and implement secure hardware, software, and network systems, addressing vulnerabilities at every layer of technology. Coursework emphasizes secure architectures, cryptographic systems, and resilience against emerging cyber threats.\n\nThis emphasis prepares graduates to work on complex systems where security cannot be an afterthought\u2014such as critical infrastructure, defense systems, and embedded technologies. With a strong foundation in both engineering and security, students will be uniquely equipped to lead efforts in creating trustworthy and reliable digital systems.",
        image: "/cybersecurity/cyber-engineering.webp",
      },
      {
        title: "Secure Development",
        slug: "secure-development",
        description:
          "The Secure Development track focuses on building software that is secure by design. Students study secure coding practices, software architecture for security, code analysis, and methods for preventing vulnerabilities throughout the software development lifecycle. Coursework emphasizes proactive approaches such as threat modeling and automated testing for security assurance.\n\nApplications of secure development are essential in industries where data privacy and system integrity are paramount, including healthcare, banking, and defense. By mastering the principles of secure coding and development, graduates will be prepared to create resilient software systems that protect against real-world cyber threats.",
        image: "/cybersecurity/secure-development.webp",
      },
      {
        title: "Cyber Defense",
        slug: "cyber-defense",
        description:
          "The Cyber Defense track equips students with strategies to defend systems, networks, and data against attacks. Students study intrusion detection, incident response, malware analysis, and defense-in-depth approaches. Coursework integrates technical training with hands-on labs to simulate real-world cyber defense scenarios.\n\nWith cyberattacks becoming increasingly sophisticated, cyber defense professionals are in high demand across government, corporate, and nonprofit organizations. Graduates will be prepared to develop defense strategies, monitor systems for threats, and respond quickly to security incidents, ensuring the protection of critical digital infrastructure.",
        image: "/cybersecurity/cyber-defense.webp",
      },
      {
        title: "Digital Forensics",
        slug: "digital-forensics",
        description:
          "The Digital Forensics track introduces students to the science of investigating and analyzing digital evidence. Students learn techniques for recovering data, tracing cyberattacks, analyzing malware, and preserving evidence for legal proceedings. Coursework emphasizes forensic tools, investigative methodologies, and ethical considerations in digital investigations.\n\nApplications of digital forensics extend across law enforcement, corporate security, and national defense. As cybercrime and digital fraud continue to rise, graduates will be prepared to uncover evidence, reconstruct cyber incidents, and support efforts to hold attackers accountable.",
        image: "/cybersecurity/digital-forensics.webp",
      },
      {
        title: "Threat Intelligence",
        slug: "threat-intelligence",
        description:
          "The Threat Intelligence track focuses on understanding and anticipating cyber threats before they impact systems and organizations. Students study methods for collecting, analyzing, and interpreting data on threat actors, attack vectors, and vulnerabilities. Coursework emphasizes intelligence sharing, security operations, and proactive defense strategies.\n\nApplications of threat intelligence are vital for organizations that face continuous cyber risks, from private corporations to government agencies. By learning to turn raw data into actionable insights, graduates will be prepared to help organizations anticipate attacks, strengthen defenses, and adapt quickly in an evolving threat landscape.",
        image: "/cybersecurity/threat-intelligence.webp",
      },
      {
        title: "Cryptography",
        slug: "cryptography",
        description:
          "The Cryptography track focuses on the mathematical foundations and practical applications of securing digital information. Students study encryption algorithms, key exchange methods, digital signatures, and cryptographic protocols that protect the confidentiality, integrity, and authenticity of data. Coursework emphasizes both classical cryptography and modern approaches designed for distributed systems and emerging threats.\n\nCryptography is a cornerstone of cybersecurity, enabling secure communications, online banking, blockchain systems, and privacy protection. Graduates of this emphasis will be prepared to design and evaluate cryptographic systems, ensuring data security in industries that depend on trust and confidentiality.",
        image: "/cybersecurity/cryptography.webp",
      },
    ],
  },
  "high-performance-computing": {
    title: "High-Performance Computing",
    description: "Working with advanced computing architectures to solve large-scale, data-intensive problems.",
    items: [
      {
        title: "FPGA Design",
        slug: "fpga-design",
        description:
          "The FPGA Design track focuses on programming and optimizing field-programmable gate arrays (FPGAs) for custom hardware acceleration and digital system design. Students learn hardware description languages, logic synthesis, and verification techniques to implement high-performance, reconfigurable computing systems. Coursework combines theoretical foundations with hands-on design projects.\n\nFPGAs are widely used in industries such as telecommunications, aerospace, defense, and machine learning acceleration. Graduates of this emphasis will gain the skills to design efficient digital systems that balance flexibility, performance, and power efficiency, making them valuable contributors to cutting-edge hardware solutions.",
        image: "/high-performance-computing/fpga-design.webp",
      },
      {
        title: "ASIC Design",
        slug: "asic-design",
        description:
          "The ASIC Design track explores the development of application-specific integrated circuits tailored for high-performance, low-power, or specialized applications. Students learn about digital design methodologies, simulation, verification, and fabrication processes. Coursework emphasizes the full lifecycle of ASIC development, from specification and design to testing and optimization.\n\nASICs are critical in industries such as mobile devices, networking, cloud computing, and consumer electronics. By mastering the design of custom chips, graduates will be prepared to contribute to innovations in hardware that power the world\u2019s most advanced technologies.",
        image: "/high-performance-computing/asic-design.webp",
      },
      {
        title: "Computer System Reliability",
        slug: "computer-system-reliability",
        description:
          "The Computer System Reliability track prepares students to design systems that are fault-tolerant, safe, and resilient under failure conditions. Students study redundancy, error detection and correction, system monitoring, and recovery mechanisms. Coursework emphasizes both hardware and software approaches to ensuring dependable system operation.\n\nReliable computing systems are essential in critical applications such as healthcare, aviation, automotive systems, and financial services. Graduates will be prepared to create robust architectures that minimize downtime and maintain safety, making them valuable contributors in industries where reliability is non-negotiable.",
        image: "/high-performance-computing/computer-system-reliability.webp",
      },
      {
        title: "Software Engineering",
        slug: "software-engineering",
        description:
          "The Software Engineering track provides students with the principles and practices for developing large-scale, reliable, and maintainable software systems. Students study the full software development lifecycle, including requirements gathering, design, implementation, testing, and deployment. Emphasis is placed on agile methodologies, software architecture, version control, and team collaboration, preparing students to build solutions that meet both technical and user needs.\n\nThis track is highly versatile, equipping graduates with skills that apply across industries such as technology, finance, healthcare, and defense. With a strong foundation in both programming and engineering design, students will be prepared to create innovative applications, optimize system performance, and adapt to evolving software tools and practices in the professional world.",
        image: "/high-performance-computing/software-engineering.webp",
      },
      {
        title: "Quantum Engineering",
        slug: "quantum-engineering",
        description:
          "The Quantum Engineering track introduces students to the principles of quantum mechanics as applied to emerging technologies in computing, communication, and sensing. Students study qubits, quantum gates, entanglement, and error correction, as well as the challenges of building scalable quantum systems. Coursework integrates physics, engineering, and computer science to prepare students for this rapidly evolving field.\n\nQuantum technologies promise transformative advances in secure communication, optimization, artificial intelligence, and material science. Graduates of this emphasis will be well-positioned to contribute to cutting-edge research and development in quantum computing and beyond, helping shape the future of information technology.",
        image: "/high-performance-computing/quantum-engineering.webp",
      },
      {
        title: "Semi-Conductors",
        slug: "semi-conductors",
        description:
          "The Semiconductors track explores the physics, materials, and engineering of semiconductor devices that power modern electronics. Students study carrier transport, fabrication techniques, device structures, and the design of integrated circuits. Coursework integrates theory with laboratory experiences in device characterization and materials science.\n\nSemiconductors form the backbone of computing, communications, renewable energy, and emerging technologies like quantum computing. This emphasis prepares students to contribute to advances in microelectronics, power electronics, and photonics, ensuring they have the expertise to innovate in one of the most critical fields driving global technological progress.",
        image: "/high-performance-computing/semiconductors.webp",
      },
      {
        title: "Embedded Systems",
        slug: "embedded-systems",
        description:
          "The Embedded Systems Programming track focuses on the design and development of software for microcontrollers and specialized computing devices. Students learn to work within hardware constraints, implement real-time operating systems, and program devices that interact directly with sensors and actuators. Coursework emphasizes both low-level programming and system-level integration, bridging the gap between hardware and software design.\n\nEmbedded systems play a critical role in technologies ranging from consumer electronics and medical devices to automotive systems and aerospace applications. By gaining experience in both coding and hardware interfacing, students will develop the skills to create efficient, reliable, and innovative embedded solutions for a wide variety of industries.",
        image: "/high-performance-computing/embedded-systems.webp",
      },
      {
        title: "Hardware Acceleration",
        slug: "hardware-acceleration",
        description:
          "The Hardware Acceleration track focuses on designing systems that offload computationally intensive tasks from general-purpose processors to specialized hardware. Students study GPUs, FPGAs, and custom architectures that optimize performance for applications such as machine learning, data analytics, and signal processing. Coursework emphasizes system-level integration, performance trade-offs, and energy efficiency.\n\nHardware acceleration is increasingly vital in industries ranging from cloud computing and autonomous systems to biomedical imaging and financial technology. Graduates of this emphasis will be equipped to design high-performance systems that meet the growing demand for speed and efficiency in data-driven applications.",
        image: "/high-performance-computing/hardware-acceleration.webp",
      },
    ],
  },
  robotics: {
    title: "Robotics",
    description: "Exploring the design and implementation of robotic systems.",
    items: [
      {
        title: "Robotics Programming",
        slug: "robotics-programming",
        description:
          "The Robotics Programming track centers on the software side of robotics, focusing on algorithms, simulation, and control strategies. Students study motion planning, kinematics, computer vision, and machine learning for robotic applications. Coursework emphasizes programming frameworks such as ROS (Robot Operating System) and real-time control software.\n\nWith robotics software driving autonomy and adaptability, graduates will be prepared to work on projects in industrial automation, self-driving vehicles, and intelligent service robots. By combining strong programming skills with robotics expertise, students will play a key role in advancing the intelligence and capabilities of autonomous machines.",
        image: "/robotics/robotics-programming.webp",
      },
      {
        title: "Robotics Control",
        slug: "robotics-control",
        description:
          "The Robotics Control track focuses on advanced techniques for managing the motion and behavior of robotic systems. Students learn control theory, feedback systems, adaptive control, and multi-robot coordination. Coursework emphasizes practical implementation through lab work and simulation, ensuring students gain both theoretical and applied skills.\n\nApplications of robotic control include precision manufacturing, medical robotics, aerial and underwater exploration, and defense. By mastering the principles of reliable and adaptive control, graduates will be prepared to design robotic systems that perform accurately and safely in dynamic environments.",
        image: "/robotics/robotics-control.webp",
      },
      {
        title: "Aerial Robotics",
        slug: "aerial-robotics",
        description:
          "The Aerial Robotics track specializes in the study of unmanned aerial systems (UAS) and flying robots. Students learn about aerodynamics, flight control, navigation, and multi-agent coordination, alongside the use of sensors and cameras for environmental perception. Coursework emphasizes both simulation and hands-on drone projects.\n\nApplications of aerial robotics include package delivery, disaster response, precision agriculture, and environmental monitoring. With demand for autonomous aerial platforms rapidly expanding, graduates will be prepared to develop innovative solutions in a field that blends robotics, control, and aeronautical engineering.",
        image: "/robotics/aerial-robotics.webp",
      },
      {
        title: "Robotic Vision",
        slug: "robotic-vision",
        description:
          "The Robotic Vision track focuses on enabling robots to perceive, interpret, and interact with their environment using advanced imaging and computer vision techniques. Students study image processing, feature detection, 3D reconstruction, and machine learning methods that allow robots to recognize objects, navigate complex spaces, and perform tasks autonomously. Coursework emphasizes both theory and hands-on implementation with modern vision frameworks.\n\nApplications of robotic vision include autonomous vehicles, manufacturing automation, medical robotics, and service robots. As vision is a critical component of intelligent behavior, graduates will be equipped to design systems that enhance autonomy, precision, and adaptability in robotics across multiple industries.",
        image: "/robotics/robotic-vision.webp",
      },
    ],
  },
  "artificial-intelligence": {
    title: "Artificial Intelligence",
    description: "Exploring the frontiers of intelligent systems and their applications.",
    items: [
      {
        title: "Machine Learning",
        slug: "machine-learning",
        description:
          "The Machine Learning track provides students with the tools and techniques for developing systems that improve their performance through data. Students study supervised and unsupervised learning, deep learning, reinforcement learning, and statistical modeling. Coursework emphasizes practical implementation using modern frameworks as well as theoretical underpinnings of learning algorithms.\n\nMachine learning has wide-ranging applications in speech recognition, predictive analytics, personalized medicine, cybersecurity, and artificial intelligence systems. By mastering these methods, graduates will be prepared to contribute to the rapid advancement of technologies that rely on intelligent data-driven decision-making.",
        image: "/artificial-intelligence/machine-learning.webp",
      },
      {
        title: "Semi-Conductors",
        slug: "semi-conductors",
        description:
          "The Semiconductors track explores the physics, materials, and engineering of semiconductor devices that power modern electronics. Students study carrier transport, fabrication techniques, device structures, and the design of integrated circuits. Coursework integrates theory with laboratory experiences in device characterization and materials science.\n\nSemiconductors form the backbone of computing, communications, renewable energy, and emerging technologies like quantum computing. This emphasis prepares students to contribute to advances in microelectronics, power electronics, and photonics, ensuring they have the expertise to innovate in one of the most critical fields driving global technological progress.",
        image: "/artificial-intelligence/semiconductors.webp",
      },
      {
        title: "Software Engineering",
        slug: "software-engineering",
        description:
          "The Software Engineering track provides students with the principles and practices for developing large-scale, reliable, and maintainable software systems. Students study the full software development lifecycle, including requirements gathering, design, implementation, testing, and deployment. Emphasis is placed on agile methodologies, software architecture, version control, and team collaboration, preparing students to build solutions that meet both technical and user needs.\n\nThis track is highly versatile, equipping graduates with skills that apply across industries such as technology, finance, healthcare, and defense. With a strong foundation in both programming and engineering design, students will be prepared to create innovative applications, optimize system performance, and adapt to evolving software tools and practices in the professional world.",
        image: "/artificial-intelligence/software-engineering.webp",
      },
      {
        title: "Hardware Acceleration",
        slug: "hardware-acceleration",
        description:
          "The Hardware Acceleration track focuses on designing systems that offload computationally intensive tasks from general-purpose processors to specialized hardware. Students study GPUs, FPGAs, and custom architectures that optimize performance for applications such as machine learning, data analytics, and signal processing. Coursework emphasizes system-level integration, performance trade-offs, and energy efficiency.\n\nHardware acceleration is increasingly vital in industries ranging from cloud computing and autonomous systems to biomedical imaging and financial technology. Graduates of this emphasis will be equipped to design high-performance systems that meet the growing demand for speed and efficiency in data-driven applications.",
        image: "/artificial-intelligence/hardware-acceleration.webp",
      },
    ],
  },
  energy: {
    title: "Energy",
    description: "Exploring the technologies that power sustainable and efficient energy systems.",
    items: [
      {
        title: "Electric Vehicles",
        slug: "electric-vehicles",
        description:
          "The Electric Vehicles track explores the technologies that power sustainable transportation. Students study electric motors, battery technologies, power electronics, and control systems that enable efficient and reliable operation of electric cars, buses, and trucks. Coursework emphasizes energy storage, charging infrastructure, and integration with renewable energy sources.\n\nWith electric vehicles reshaping the automotive industry, applications extend to urban mobility, logistics, and environmental sustainability. Graduates of this emphasis will be prepared to contribute to the design, optimization, and deployment of cleaner, more efficient transportation solutions.",
        image: "/energy/electric-vehicles.webp",
      },
      {
        title: "Renewable Energy",
        slug: "renewable-energy",
        description:
          "The Renewable Energy track focuses on clean energy sources such as solar, wind, geothermal, and hydropower. Students study energy conversion systems, grid integration, and storage solutions that support large-scale adoption of renewables. Coursework emphasizes sustainability, efficiency, and overcoming challenges related to variability and scalability.\n\nAs the global demand for renewable energy grows, applications extend across utilities, construction, and government initiatives. Graduates will be prepared to design and implement innovative systems that reduce reliance on fossil fuels, contribute to climate goals, and ensure reliable access to sustainable power.",
        image: "/energy/renewable-energy.webp",
      },
      {
        title: "Power Distribution",
        slug: "power-distribution",
        description:
          "The Power Distribution track explores the systems and technologies that deliver electricity from generation sources to consumers. Students study transmission lines, substations, transformers, and distribution networks, with a focus on efficiency, reliability, and safety. Coursework emphasizes smart grids, automation, and integration of renewable energy into existing infrastructure.\n\nApplications of power distribution are critical to maintaining stable and resilient electrical networks worldwide. With growing demands for electrification and modernization, graduates will be prepared to design, operate, and improve distribution systems that support both traditional and renewable energy sources.",
        image: "/energy/power-distribution.webp",
      },
      {
        title: "Remote Sensing",
        slug: "remote-sensing",
        description:
          "The Remote Sensing track focuses on technologies that gather information about the Earth and its environment from a distance, using satellites, aircraft, and unmanned systems. Students study imaging systems, sensors, spectral analysis, and data interpretation techniques that provide insights into land, oceans, atmosphere, and infrastructure. Coursework emphasizes both the technical design of sensors and the computational methods used for data processing.\n\nApplications of remote sensing include environmental monitoring, disaster management, agriculture, urban planning, and defense. By mastering these technologies, graduates will be equipped to turn raw sensor data into actionable knowledge that supports decision-making in science, industry, and government.",
        image: "/energy/remote-sensing.webp",
      },
      {
        title: "Power Grid",
        slug: "power-grid",
        description:
          "The Power Grid track explores the infrastructure and technologies that make large-scale electricity delivery possible. Students study transmission networks, substations, load management, and fault detection, with an emphasis on modernization through smart grid technology. Coursework emphasizes grid stability, resilience, and integration of renewable energy sources.\n\nAs global electrification expands, maintaining reliable and secure power grids has become increasingly critical. Graduates of this emphasis will be prepared to contribute to grid modernization, renewable integration, and energy management strategies that ensure continuous and efficient electricity distribution.",
        image: "/energy/power-grid.webp",
      },
      {
        title: "Power Systems",
        slug: "power-systems",
        description:
          "The Power Systems track provides a comprehensive study of the generation, transmission, and utilization of electrical power. Students explore system modeling, stability analysis, power flow, and fault response, with coursework emphasizing both traditional systems and emerging technologies. Emphasis is also placed on sustainability and the transition toward cleaner energy sources.\n\nApplications extend across utilities, industrial power management, transportation, and renewable integration. With growing global reliance on electricity, graduates will be prepared to design and operate complex power systems that are reliable, efficient, and capable of supporting future energy demands.",
        image: "/energy/power-systems.webp",
      },
    ],
  },
  biotechnology: {
    title: "Biotechnology",
    description: "Exploring the intersection of biology and technology to develop innovative solutions.",
    items: [
      {
        title: "Biomedical Engineering",
        slug: "biomedical-engineering",
        description:
          "The Biomedical Engineering track integrates engineering principles with medical sciences to develop technologies that advance healthcare. Students study biomechanics, medical imaging, biomaterials, prosthetics, and diagnostic devices. Coursework emphasizes both design and regulatory considerations in creating safe and effective medical technologies.\n\nApplications of biomedical engineering range from medical devices and implants to digital health technologies and rehabilitation systems. Graduates will be equipped to collaborate with clinicians, scientists, and engineers to design innovations that improve patient care and medical outcomes.",
        image: "/biotechnology/biomedical-engineering.webp",
      },
      {
        title: "3D Printing",
        slug: "3d-printing",
        description:
          "The 3D Printing track explores additive manufacturing technologies that enable rapid prototyping and custom fabrication. Students study materials, printing techniques, computer-aided design (CAD), and optimization methods for creating three-dimensional structures. Coursework emphasizes both technical design and the transformative applications of 3D printing.\n\nApplications include biomedical implants, aerospace components, consumer products, and industrial manufacturing. As 3D printing continues to revolutionize product development and supply chains, graduates will be prepared to harness this technology to create innovative, efficient, and customizable solutions.",
        image: "/biotechnology/3d-printing.webp",
      },
      {
        title: "Microfluidics",
        slug: "microfluidics",
        description:
          "The Microfluidics track focuses on the design and application of systems that manipulate small volumes of fluids at the microscale. Students study fluid dynamics, lab-on-chip technologies, sensors, and biomedical applications. Coursework emphasizes both the fundamental science of microscale fluid behavior and its practical engineering applications.\n\nMicrofluidic systems are used in diagnostics, drug discovery, chemical analysis, and environmental monitoring. With applications growing in both healthcare and industry, graduates of this emphasis will be equipped to design innovative microscale technologies that enable faster, cheaper, and more precise testing and experimentation.",
        image: "/biotechnology/microfluidics.webp",
      },
      {
        title: "Materials",
        slug: "materials",
        description:
          "The Materials track explores the properties, design, and applications of materials that form the foundation of modern technology. Students study metals, polymers, ceramics, composites, and nanomaterials, focusing on their structure, performance, and fabrication processes. Coursework emphasizes the relationship between material properties and their use in engineering applications, from strength and durability to conductivity and sustainability.\n\nApplications of materials science span nearly every industry, including electronics, aerospace, biomedical engineering, renewable energy, and advanced manufacturing. As innovation in materials continues to drive progress in technology, graduates will be prepared to design and apply advanced materials that enable safer, stronger, and more efficient products for the future.",
        image: "/biotechnology/materials.webp",
      },
    ],
  },
};
