/* =====================================================================
   WDC Portal — content store
   All site content lives here as DEFAULT_DATA. The admin panel writes an
   edited copy to localStorage("wdc_data_v1"); the site reads that copy if
   present, otherwise it falls back to these defaults.
   ===================================================================== */

const DEFAULT_DATA = {
  site: {
    org: "Koneru Lakshmaiah Education Foundation",
    title: "Women Development Cell",
    subtitle: "Women's Forum",
    headerImage: "https://www.kluniversity.in/img/KLU-Hedder-main.jpg",
    klefHome: "https://www.kluniversity.in/",
    handbookPdf: "https://www.kluniversity.in/wdc/pdf/handbook.pdf",
    copyright: "© 2026 Koneru Lakshmaiah Education Foundation. All rights reserved.",
    credit: "Developed and designed by CHINTA BALA MURALI SRIRAM",
    adminUsername: "wdc",
    adminPassword: "kl@wdc"
  },

  hero: {
    kicker: "Since 2018 · KLEF Vaddeswaram",
    heading: "Every woman on this campus has somewhere to go, and someone to go to.",
    lead:
      "The Women Development Cell runs counselling, health camps, skill training, safety awareness and leadership programmes for the students, faculty and staff of KLEF — and for the villages around it.",
    ctaLabel: "See what's coming up",
    ctaHref: "#/events",
    videoLabel: "Watch our film",
    videoUrl: "https://www.youtube.com/watch?v=HzTFEDXChCQ"
  },

  slides: [
    { src: "https://www.kluniversity.in/wdc/img/sliderpics/24.jpeg", caption: "FemFlare — the annual women's festival" },
    { src: "https://www.kluniversity.in/wdc/img/sliderpics/29.jpg", caption: "National Women Summit" },
    { src: "https://www.kluniversity.in/wdc/img/sliderpics/28.jpg", caption: "Health and wellness camps" },
    { src: "https://www.kluniversity.in/wdc/img/sliderpics/19.jpg", caption: "Skill development workshops" }
  ],

  counters: [
    { value: "139", label: "Events held since 2018" },
    { value: "25", label: "Departments with a WDC coordinator" },
    { value: "90", label: "Villages reached through outreach" },
    { value: "6", label: "Years of FemFlare" }
  ],

  vision: {
    heading: "Vision",
    text:
      "To empower women through education, skill-building, and advocacy to create a society of equality and opportunities. To develop equitable opportunities for the educational avenues for women."
  },

  mission: {
    heading: "Mission",
    text:
      "The mission of the Women Development Cell is to promote gender equality, create a safe and supportive environment for women, and empower them with resources, opportunities, and awareness to achieve their full potential in all spheres of life."
  },

  usp: {
    intro:
      "Here are the unique selling points (USPs) for the Women Development Cell (WDC) at KLEF.",
    outro:
      "These USPs make KLEF's Women Development Cell a standout force for gender empowerment, equality, and inclusivity.",
    items: [
      {
        title: "Comprehensive support for women",
        text:
          "The WDC provides a holistic support system for women, addressing their physical, emotional, professional, and educational needs through initiatives like psychological counseling, ladies' gyms, and skill development programs."
      },
      {
        title: "Gender sensitivity and inclusivity",
        text:
          "The WDC is dedicated to building a gender-sensitive and inclusive campus, with programs aimed at preventing discrimination, promoting gender parity, and fostering an environment where all genders feel respected and valued."
      },
      {
        title: "Childcare and work-life balance",
        text:
          "By offering facilities such as a daycare center for working mothers, the WDC enables women to pursue their careers without the added stress of childcare, promoting a balanced professional and personal life."
      },
      {
        title: "Leadership and economic empowerment",
        text:
          "The WDC encourages women's leadership and entrepreneurship through initiatives like the Women Technology Park, training in embroidery and jute bag making, and handicraft kiosks run by women entrepreneurs, helping women achieve financial independence."
      },
      {
        title: "Safety and security for women",
        text:
          "The presence of lady security guards, lady doctors, and separate waiting areas for girls ensures a secure and comfortable environment, enhancing the overall safety and well-being of women on campus."
      },
      {
        title: "Promotion of women's health",
        text:
          "With facilities like the ladies' gym and health awareness programs, the WDC prioritizes women's physical well-being, encouraging healthy lifestyle choices and fitness as part of overall personal development."
      },
      {
        title: "Celebration of women's achievements",
        text:
          "Through events like the annual FemFlare festival and celebrations of important women-centric days, the WDC creates platforms for women to showcase their talents, build community, and foster solidarity."
      },
      {
        title: "Advocacy and awareness programs",
        text:
          "The WDC conducts extensive awareness campaigns on key issues such as POSH (Prevention of Sexual Harassment), menstrual hygiene, and digital literacy, equipping women with essential knowledge for personal empowerment and safety."
      },
      {
        title: "Focused educational support",
        text:
          "The WDC provides targeted interventions for marginalized, underprivileged, and specially-abled women, ensuring they have equal access to educational opportunities and the resources to thrive academically."
      },
      {
        title: "Proactive social impact",
        text:
          "The WDC goes beyond campus by identifying and supporting girl students who have dropped out of school, motivating them to return to education and realize their full potential, while offering a single child quota in admissions to further promote education for women."
      }
    ]
  },

  about: {
    heading: "About us",
    lead:
      "KLEF is an organization that is deeply committed to promote gender sensitivity and empowering women in various aspects of life.",
    paragraphs: [
      "KLEF is an organization that is deeply committed to promote gender sensitivity and empowering women in various aspects of life. Through a range of initiatives and events, KLEF seeks to create an inclusive and supportive environment that fosters the growth and well-being of women. One of the notable initiatives organized by KLEF is the establishment of a day care center. By providing a safe and nurturing space for children, KLEF enables working mothers to pursue their careers without worrying about childcare responsibilities. This effort reflects the organization's understanding of the challenges faced by working women and the importance of supporting them in achieving work-life balance. Another significant feature of KLEF's gender-sensitive approach is the provision of a separate waiting area for girls. This demonstrates the organization's commitment to ensuring the safety and comfort of its female members, promoting an environment where they feel respected and valued.",
      "The inclusion of a ladies' gym indicates KLEF's dedication to promoting women's physical well-being and encouraging them to lead a healthy lifestyle. Additionally, the presence of lady security guards and a lady doctor further emphasizes the organization's efforts to create a safe and secure environment for all its members. KLEF's commitment to gender sensitivity is also evident in its management structure. By including women in the board of management and appointing women as functionaries, the organization is striving to create a balanced and diverse leadership team that reflects the needs and perspectives of all its members. Professional society bodies like IEEE Women in Engineering are lead by women. Furthermore, KLEF takes a proactive approach to empower women economically by offering training programs in embroidery and jute bag making.",
      "The women technology park provides opportunities for women to enhance their skills and explore various technological fields. Celebrating women's achievements and contributions, KLEF organizes an annual festival called femflare and all the days which are relevant to women are celebrated. This event serves as a platform for women to showcase their talents and accomplishments while fostering a sense of community and solidarity. Beyond these initiatives, KLEF places a strong emphasis on education and awareness. By conducting programs on digital literacy, POSH (Prevention of Sexual Harassment) awareness, and menstrual hygiene, the organization equips women with essential knowledge and resources to lead informed and empowered lives.",
      "Addressing social issues, KLEF identifies and supports girl students who drop out of school, motivating them to return to education and realize their full potential. KLEF provides single child quota during its admission process. Additionally, psychological counseling for girls helps address emotional challenges and provides the necessary support for mental well-being. KLEF also recognizes the value of women entrepreneurs by establishing handicraft kiosks run by women entrepreneurs, promoting economic independence and self-reliance."
    ],
    objectivesHeading: "Objectives of WDC",
    objectives: [
      "To create and develop a congenial environment for women employees (including teaching, support staff, and contractual as well as daily wages employees) and students (rural, urban, specially-abled, underprivileged, marginalised), allowing them to reach their full potential.",
      "To undertake the awareness programmes on gender sensitization, women's rights and women empowerment in university campuses and colleges.",
      "To sensitize the students towards the special needs of all genders.",
      "To develop equitable opportunities for the educational avenues for women.",
      "To build a gender sensitive and inclusive campus.",
      "To address concerns of gender discrimination and recommend measures and policies for gender parity at the University.",
      "To prevent sexual harassment at workplace (colleges and university campuses).",
      "To undertake surveys or action research projects, if necessary, pertaining to women (rural, urban, specially-abled, underprivileged, marginalised) in the society.",
      "To conduct gender audit / safety audit on regular basis."
    ]
  },

  visionary: {
    heading: "Our visionary",
    name: "Smt Koneru Siva Kanchana Latha",
    role: "Honourable Secretary, KLEF",
    image: "https://www.kluniversity.in/wdc/img/kanchana madam.jpg",
    intro: [
      "Smt Koneru Siva Kanchana Latha is an Indian educationalist, social entrepreneur, and philanthropist who is dedicated to empowering women in society. Born in 1961 in Vijayawada, Andhra Pradesh, India, Kanchana Latha was raised in a family that valued education and social responsibility. Her parents, K. Nagalingeswara Rao and K. Rajeswari, instilled in her the importance of giving back to the community and using her education to make a positive impact on society.",
      "Smt Koneru Siva Kanchana Latha is a renowned Indian educationalist, social entrepreneur, and philanthropist, who is well-known for her work in promoting women's education and empowerment. She is married to Koneru Satyanarayana, who is the President of KLEF, a leading educational institution, as well as a prominent movie producer, philanthropist, and industrialist.",
      "Rose Society was born in Vijayawada, Andhra Pradesh, India, completed her Bachelor's degree in Home Science from St. Theresa Women's College, Andhra Pradesh. She has been an active participant in the field of education and has worked in various educational institutions in leadership positions. She has also founded several non-profit organizations, which focuses on empowering women through education and vocational training.",
      "Koneru Satyanarayana, Kanchana Latha's husband, is also a prominent figure in the field of education and philanthropy. He is the President of KLEF, which has several institutions in India that offer a range of courses in engineering, management, law, and pharmacy. He is also a successful movie producer, having produced several critically acclaimed films in Telugu cinema.",
      "Kanchana Latha and Satyanarayana's shared commitment to education, philanthropy, and social welfare has earned them several accolades and recognition. They have both received numerous awards for their contributions to society, including the Rashtra Vibhushan Award, the Rajiv Gandhi Shiromani Award, and the Mahila Shiromani Award, among others.",
      "In conclusion, Kanchana Latha and Satyanarayana are a power couple in the field of education and philanthropy in Andhra Pradesh, India. Their shared vision and dedication to empowering women and promoting education have made a significant impact on society, and their children have followed in their footsteps, pursuing higher education and making a name for themselves in their respective fields. They serve as an inspiration to many, and their work is a testament to the positive impact that can be made through a shared commitment to social welfare."
    ],
    sections: [
      {
        title: "Contributions at KLEF",
        paragraphs: [
          "Kanchana Latha's role as the Secretary of Koneru Lakshmaiah Education Foundation (KLEF) is a prominent member of the foundation's leadership team. KLEF is a pioneering educational institution with campuses in Andhra Pradesh and Telangana, offering a range of courses in sciences, engineering, technology, architecture, pharmacy, agriculture, arts, commerce, management, hotel management, law, and other fields.",
          "KLEF was established as the Koneru Lakshmaiah College of Engineering in 1980, and since then, it has grown to become a deemed-to-be university and a recognized Category 1 institution by the Ministry of Education in India. As the Secretary of KLEF, Kanchana Latha has played a significant role in the institution's growth and development, ensuring that it continues to provide quality education to students from all walks of life.",
          "Kanchana Latha's work in the field of education and social welfare has earned her several accolades, including the Mahila Shiromani Award and the Women Achiever's Award, among others. Her dedication to promoting education and empowering women has inspired many, and she continues to be a beacon of hope for those seeking to make a positive impact on society.",
          "Kanchana Latha's contributions as the Secretary of KLEF. Her efforts in promoting education and social welfare have had a significant impact on society, and her work serves as an inspiration to others who seek to make a positive difference in the world. Through her leadership and dedication, KLEF has become a premier educational institution in India, offering a wide range of courses in various fields and providing quality education to students from diverse backgrounds."
        ]
      },
      {
        title: "Leadership responsibilities",
        paragraphs: [
          "As the Secretary of KLEF, this individual plays a critical role in managing the operations of the foundation. She oversees a range of administrative functions, and guides the teams to develop and implement strategies for the long-term growth and success of the institution. Under Kanchana Latha's leadership, KLEF has also expanded its focus on social responsibility and community development, through various initiatives such as providing education and vocational training to underprivileged women, supporting rural development projects, and promoting environmental sustainability."
        ]
      },
      {
        title: "Foreign visits",
        paragraphs: [
          "Smt Kanchana Latha is a well-travelled individual with a keen interest in exploring different cultures, educational systems, and environmental conservation practices. She has visited more than 50 countries around the world, including the United States, the United Kingdom, Australia, Singapore, and Malaysia, among others. During her travels, she has explored the prevailing cultures, educational reforms, and lifestyles of women in these countries, and has gained valuable insights into their social and economic systems.",
          "In addition to her travels, Kanchana Latha has also participated in various national and international conferences related to a wide range of topics, including crafts, culture, urban gardening, women empowerment, and women's health. Her commitment to promoting women's empowerment is particularly noteworthy, as she has dedicated significant time and resources to supporting women's health and participating in initiatives and events that promote gender equality and empowerment.",
          "Kanchana Latha is a respected personality in the fields of education, social entrepreneurship, and philanthropy, and her work has made a significant impact on society. Her dedication to promoting education, social welfare, and environmental conservation has earned her numerous accolades and awards, and she continues to inspire others with her work."
        ]
      },
      {
        title: "Social memberships",
        paragraphs: [
          "Kanchana Latha's commitment to promoting social welfare and empowering women is reflected in her membership of various organizations. She is a member of Association of Lady Entrepreneurs of Andhra Pradesh (ALEAP) and also member of many NGO organisations in combined Andhra Pradesh. She is very well-known for her philanthropic work in various fields through these organisations. She also participates in Women Empowerment Clubs, which focus on promoting gender equality and empowerment, and has been associated with the Crafts Council of Andhra Pradesh, which works towards preserving traditional handicrafts and promoting the livelihoods of artisans. She is also holding a position as Honourable Vice President in Rose Society.",
          "Through her involvement in these organizations, Kanchana Latha has been able to make a significant impact on society and inspire others to contribute towards social welfare and empowerment. Her work in promoting women's empowerment and preserving traditional handicrafts is particularly noteworthy, and she continues to be an active participant in various events and initiatives related to these fields.",
          "Apart from her role at KLEF, the Secretary is also an active member of the AP Craft Council, she supports, promotes and preserves traditional arts and crafts in Andhra Pradesh. As a member of this council, she is passionate about preserving and promoting the rich cultural heritage of the state.",
          "As a member of AP Craft Council, she believes to develop strong relationships, compassion and empathy for her members and she has a passion and commitment in broadening and diversifying the audience for craft and concentrates on reviving, creating, and maintaining quality craft."
        ]
      },
      {
        title: "Key contributor of Women Technology Park",
        paragraphs: [
          "As a part of Women Technology Park supported by Ministry of Science and Technology, Government of India (2016-2021) she supported the local women in skill development to work for Kondapalli toys and Etikkopaka toys which results in increased production quantities manifold after her design intervention. She personally supported in conducting training programs for women on rope making using coir, food processing, development of bio-feed, bio-fertilizer, cotton weaving cluster with dyeing and printing, and in making handloom sarees. The centre is self-sustained now benefitting local women with enhanced livelihoods.",
          "Mrs. Kanchana Latha Koneru is a remarkable individual who has made a significant impact in the fields of design and education. Her design intervention in Kondapalli and Etikkopaka has resulted in a manifold increase in production quantities, which is a testament to her creativity and vision. As a result of her efforts, local artisans have been able to expand their businesses and improve their livelihoods.",
          "Mrs. Kanchana Latha Koneru's contributions to the empowerment of women in the Guntur district of Andhra Pradesh, India, are truly remarkable. Her efforts have led to the establishment of the Women Technology Park at Vaddeswaram, which provides local women with training and opportunities to develop skills in a variety of industries.",
          "The Women Technology Park is a groundbreaking initiative that has given local women the chance to learn valuable skills in rope making using coir, food processing, development of bio-feed and bio-fertilizer, cotton weaving cluster with dyeing and printing, and handloom saree printing. These skills are in high demand and have helped to create sustainable livelihoods for women in the community.",
          "Mrs. Koneru's instrumental role in the establishment of the Women Technology Park is a testament to her commitment to empowering women and providing them with opportunities to develop their skills and improve their lives. Her vision and leadership have made a significant impact on the lives of countless women in the region."
        ]
      },
      {
        title: "Village revolution — remarkable outcomes",
        paragraphs: [
          "Mrs. Kanchana Latha Koneru's contributions to the development of rural communities in Andhra Pradesh are truly remarkable. Her efforts to initiate the Smart Village Revolution as part of the Corporate Social Responsibility (CSR) program of KLEF have led to the transformation of about 90 villages into smart villages.",
          "Under her leadership, these villages have been able to overcome poverty and underdevelopment by adopting innovative solutions in the areas of healthcare, education, sanitation, and technology. In addition to providing hygienic drinking water to these villages, Mrs. Koneru has also facilitated the provision of computer systems and training to Village Panchayat officers, enabling them to speed up their work and deliver better services to the community.",
          "Mrs. Koneru's vision and leadership have been instrumental in driving the Smart Village Revolution program and transforming these villages into models of development. Her commitment to rural communities and her efforts to empower them with the tools and resources they need to thrive are truly inspiring.",
          "Mrs. Koneru's extensive experience across various industries has equipped her with the knowledge and skills to drive positive change and development in the villages adopted by her. She continues to explore new technologies and approaches to create sustainable solutions and promote social and economic progress in these communities."
        ]
      },
      {
        title: "Awards and honors",
        paragraphs: [
          "Mrs. Koneru's achievements have not gone unnoticed, as she is the recipient of many awards and recognition for her contributions to the fields of design and education. Her passion for plants is also noteworthy, as it speaks to her appreciation for the natural world and her desire to live in harmony with it.",
          "One of Mrs. Koneru's most striking qualities is her blend of patience, vision, creativity, wisdom, and kindness. These qualities have undoubtedly contributed to her success, as well as to her ability to inspire and uplift those around her. Her support for girl students and lady faculty in the KLEF is a testament to her commitment to empowering women and helping them achieve their goals."
        ],
        list: [
          "Bharat Jyothi Award from International Integrity Peace & Friendship in 1999",
          "Uttama Mahila Award from Sri Devi Samskruthika Sankhshma Sangam in 2021",
          "Received Award from Shri Nara Chandra Babu Naidu, Chief Minister of Andhra Pradesh under Individual Category for supporting the Green Initiatives in Urban Environment from APUGBC",
          "Felicitated by KL Alumni Groups in Silver Jubilee Functions of batches (from 2008 onwards till date)",
          "Trekked NATU LA at 14,150 feet above sea level on the Old Silk Route from India to China",
          "Received the award from Shri R. Subrahmanyam, Secretary, Department of Higher Education, at the AICTE Auditorium, New Delhi",
          "Represented KLEF and received award from Ministry of Human Resources Development (MHRD), Government of India for Swachata Rankings in 2017, 2018, 2019",
          "Received an award from the Chairman, All India Council for Technical Education (AICTE) for Clean and Green Campus under educational institutions category"
        ]
      },
      {
        title: "Charity — village adoption and social service",
        paragraphs: [
          "She adopted 8 villages and was instrumental in converting them as smart villages. She supported installation of drip irrigation projects to conserve the water, installation of solar pump sets, and providing solar invertors to avoid unprecedented power cuts, establishing common computer training centres for village students' education, aid towards hygienic drinking water and not limited to. She is feeding daily 200 old aged and needy people at her house for the last 7 years."
        ]
      },
      {
        title: "Corporate presence",
        paragraphs: [
          "Mrs. Kanchana Latha Koneru is an accomplished business leader who has held key positions in a variety of companies and organizations throughout her career. She has always been dedicated to learning new technologies and approaches to implementing positive change in the villages adopted by her, as well as in improving the educational opportunities for the girl and women faculty in her institution.",
          "Mrs. Koneru's diverse professional experience includes serving as:"
        ],
        list: [
          "Director of Ind Aqua Ltd",
          "Raja Harin Estates Pvt. Ltd",
          "Surya Havish Estates Pvt. Ltd",
          "Nikhila Estates Pvt. Ltd",
          "Harniks Park Pvt. Ltd, Hyper Clinresea Pvt Ltd",
          "Havish Transport Pvt. Ltd, and ACIC - KL Startups Foundation"
        ]
      }
    ]
  },

  convenor: {
    heading: "Our convenor",
    name: "Dr. Ruth Ramya Kalangi",
    role: "Associate Dean — Student Affairs & Convener, Women Development Cell, KLEF",
    image: "https://www.kluniversity.in/wdc/img/convenor.png",
    paragraphs: [
      "Dr. K. Ruth Ramya has been working as Associate Professor in the Department of CSE from 2009. She was awarded Ph.D. from the Department of CSE, Acharya Nagarjuna University in 2021. She completed PDF from University of South Florida, USA during the year 2025. She has total 20 years of teaching experience. She was actively engaged in designing course curricula, including Database Management Systems, TCP/IP, Cryptography, Computer Networks, Digital Forensics, Network Security & Infrastructure, and Database Security, Cryptanalysis & Cyber Defense. She completed global certifications in JNCIA, TensorFlow and Microsoft Azure. She has attended more than 50 Faculty Development Programs/Workshops. Completed more than 34 MOOC Courses. Organized FDPs with EICT. Apart from her Ph.D. work, she was actively involved in research work; so far she has published 56 papers in International Journals & Conferences (SCOPUS-35, SCI/WOS-8, IEEE Conferences-3, International & National Conferences-5, Non-Indexed Journals-12). Among them 15 papers are in Q1, Q2 & Q3. She published 3 Scopus book chapters, acted as Resource Person for 4 Workshops and was appointed as reviewer for 2 journals. Her H-Index according to Scopus is 6 and citations are 231. She has 13 patents, both National & International. She authored a book \"Cryptography & Network Security\". She is guiding 4 research scholars.",
      "Dr. K. Ruth Ramya currently holds the roles of Associate Dean (Student Affairs) and Convener for the Women Development Cell, in addition to serving as Convenor for various university-level statutory cells/committees at KLEF. She framed policies for various university-level statutory cells/committees at KLEF. She worked actively for Criteria V, Criteria III & Criteria VII of NAAC. Dr. Ruth Ramya contributed as Organizing Committee member for University Level events & Fests like SAMYAK, SURABHI, PLACEMENT SUCCESS MEETS etc., and Convenor for FEMFLARE. She worked as Professor In-charge, Girls Hostel from 2017-2020. She introduced and implemented room allotment of Girls' Hostels through ERP successfully and proposed hostel grievances redressal through ERP. She worked in IRP Team, taught CNS & DBMS subjects to CRT students during 2010-2014 and 2018-2020. She worked as Professor In-charge for Department level student association activities (FOCUS) of CSE Department. She worked as a Member of SMART VILLAGE PROJECT during 2018, 2021, 2022. Contributed as a Member of SMART CLEAN CAMPUS committee visited during 2019. Contributed as a member in CEA and Hobby Clubs at central level from 2012 to 2021. She worked as Faculty In-charge for department level committees from 2011 till 2020.",
      "In recognition of her contributions, she received 36 awards. To name a few, she has been honored with the prestigious National Level \"AICTE Lilavati Award\". She was recognized as the \"Innovative Teacher of The Year\" by Education Icon Awards in 2021. Her achievements also include the \"Inspiring Research Associate Award\" by Madras Journal Series Pvt Ltd during 2023, \"Young Researcher Award\" from Novel Research Academy in 2022, and the \"Best Researcher Award\" for the Academic Year 2021-2022 by Raja Ramamohana Roy National Agency, Department of Higher Education, New Delhi, and the \"KL Naree Shakthi\" Award several times from KLEF. She also received the INSPIRING WOMEN AWARD from Fourth Screen Education Foundation in April 2024. She was recognized five times with the \"Best Teacher Award\" for the academic years 2011-2012, 2013-2014, 2014-2015, 2015-2016, 2016-2017.",
      "Beyond her academic and research pursuits, she was actively engaged in impactful activities, such as collaborating with Tessolve Company and NGOs like Martha Farrell, Touch A Life Foundation, Spruhapthi Foundation, SAFE Team and Help Foundation. Towards her commitment to promoting outreach programs, she organized several extension activities. She organized and participated in more than 100 plus extension activities since 2009."
    ],
    stats: [
      { value: "56", label: "Research papers published" },
      { value: "13", label: "Patents, national & international" },
      { value: "36", label: "Awards received" },
      { value: "100+", label: "Extension activities since 2009" }
    ]
  },

  contacts: [
    {
      name: "Dr. K. Ruth Ramya",
      role: "Convenor, Women Development Cell",
      mobile: "9440307606",
      email: "ramya_cse@kluniversity.in",
      room: "C115A"
    },
    {
      name: "Dr. K. Sony",
      role: "Co-convenor, Women Development Cell",
      mobile: "9849106886",
      email: "sonykarra@kluniversity.in",
      room: "R402"
    }
  ],

  contactNote:
    "If you have any doubt, please reach out by mail or phone. Someone from the cell will get back to you.",
  mapEmbed:
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3826.6654234290218!2d80.62003351410749!3d16.441810133714057!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a35f0a2a7d81943%3A0x8ba5d78f65df94b8!2sKL+University!5e0!3m2!1sen!2sin!4v1480577875430",

  scholarships: [
    {
      name: "Girl Students — KLEF Scholarships",
      url: "https://www.kluniversity.in/wdc/pdf/scholorships/Girl-Students-KLEF-Scholarships.pdf",
      note: "Institutional scholarships offered by KLEF to girl students."
    },
    {
      name: "NSP Scholarships",
      url: "https://www.kluniversity.in/wdc/pdf/scholorships/NSP-Scholarships-.pdf",
      note: "National Scholarship Portal schemes applicable to KLEF students."
    },
    {
      name: "ICC and POSH Toolkit",
      url: "https://www.kluniversity.in/wdc/pdf/handbook.pdf",
      note: "Internal Complaints Committee handbook and POSH toolkit."
    }
  ],

  gallery: [
    { src: "https://www.kluniversity.in/wdc/img/sliderpics/24.jpeg", caption: "FemFlare celebrations" },
    { src: "https://www.kluniversity.in/wdc/img/sliderpics/29.jpg", caption: "National Women Summit" },
    { src: "https://www.kluniversity.in/wdc/img/sliderpics/28.jpg", caption: "Awareness session on campus" },
    { src: "https://www.kluniversity.in/wdc/img/sliderpics/19.jpg", caption: "Health camp" },
    { src: "https://www.kluniversity.in/wdc/img/kanchana madam.jpg", caption: "Smt Koneru Siva Kanchana Latha" },
    { src: "https://www.kluniversity.in/wdc/img/convenor.png", caption: "Dr. Ruth Ramya Kalangi" }
  ],

  /* ---- Tables. Every table is edited with the same generic editor. ---- */
  tables: {
    upcoming: {
      label: "Upcoming events",
      columns: ["Tentative date", "Name of the activity"],
      linkColumn: null,
      rows: [
        ["1st week of September, 2025", "Seminar on Women Empowerment"],
        ["2nd week of September, 2025", "Seminar on Career Planning and entrepreneurship for women students"],
        ["2nd week of September, 2025", "Health Camp for women"],
        ["3rd week of September, 2025", "Awareness camp on Superstitious Beliefs"],
        ["4th week of September, 2025", "Daughter's Day"],
        ["4th week of September, 2025", "Awareness on atrocities against women: Sexual Harassment at workplace and Domestic violence; Training on Disha app"],
        ["4th week of September, 2025", "Webinar on Funding Opportunities and Mentorship for Female-Led startups"]
      ]
    },

    core: {
      label: "Core committee",
      columns: ["Sl.No.", "Emp. ID", "Name of the faculty", "Designation", "Department", "Role / responsibility"],
      linkColumn: null,
      rows: [
        ["1", "1901", "Dr K Ruth Ramya", "Associate Professor", "CSE", "Convenor"],
        ["2", "3011", "Dr K. Sony", "Assistant Professor", "ECE", "Co-convenor"],
        ["3", "5306", "Dr. N. Sri Lakshmi", "Assistant Professor", "Pharmacy", "Co-convenor"],
        ["4", "4568", "Dr. Koneru Sireesha", "Assistant Professor", "MD&IE", "Co-convenor"],
        ["5", "3990", "Dr. Mahamuda Sk", "Associate Professor", "Physics", "Coordinator"],
        ["6", "5509", "Dr. M. Padmavathi", "Assistant Professor", "Food Technology", "Coordinator"]
      ]
    },

    dept: {
      label: "Department level committee",
      columns: ["S.No", "Dept.", "Emp. ID", "Employee name", "Designation", "E-mail id"],
      linkColumn: null,
      rows: [
        ["1", "AI&DS", "7141", "Dr. Deepa Amuth", "Assoc. Prof", "deepaamuth@kluniversity.in"],
        ["2", "BT", "8620", "Dr. Ragini Singh", "Assoc. Prof", "raginisingh@kluniversity.in"],
        ["3", "CSE - 1", "8054", "Dr. Thella Preethi Priyanka", "Asst. Prof", "tpreethipriyanka@kluniversity.in"],
        ["4", "CSE - 2", "8146", "Ms. P. Sridevi", "Asst. Prof", "psridevi@kluniversity.in"],
        ["5", "CSE - 3", "7097", "Ms. B. Yamini Supriya", "Asst. Prof", "byamini@kluniversity.in"],
        ["6", "CSE - 4", "9517", "Ms. C. Lalitha Manasa", "Asst. Prof", "lalithamanasa@kluniversity.in"],
        ["7", "CS & IT", "8890", "D. N. Neelima", "Assoc. Prof", "neelimanaralasetti@kluniversity.in"],
        ["8", "ECE", "7956", "Dr. Vyoma Singh", "Asst. Prof", "vsingh@kluniversity.in"],
        ["9", "EEE", "2278", "Ms. K. Sarada", "Assoc. Prof", "sarada@kluniversity.in"],
        ["10", "MBA & BBA", "7429", "Dr. V. Madhulatha", "Asst. Prof", "vmadhulatha@kluniversity.in"],
        ["11", "Psychology", "9188", "Mrs. J. Rajeswari", "Psychological Counsellor, VEC.", "rajeswarijasti@kluniversity.in"],
        ["12", "BES I", "8723", "Ms. Alaparthi Kumuda", "Asst. Prof", "akumuda@kluniversity.in"],
        ["13", "BES II", "8364", "Dr. Tammineni Sreelatha", "Asst. Prof", "tamminenisrilatha@kaluniversity.in"],
        ["14", "CSA & MCA", "8830", "Mrs. D. Mary Swarupa", "Asst. Prof", "swarupadakori@kluniversity.in"],
        ["15", "Commerce", "5634", "Dr. S. Santha Kumari", "Asst. Prof", "sukhavasisantha@kluniversity.in"],
        ["16", "Agriculture", "8551", "Dr. K. Vineela", "Asst. Prof", "kvineela@kluniversity.in"],
        ["17", "Architecture", "6772", "Ms. B. Venkata Lakshmi", "Asst. Prof", "vlakshmibon@kluniversity.in"],
        ["18", "Law", "9441", "Dr. Megha Ojha", "Assoc. Prof", "meghaojha@kluniversity.in"],
        ["19", "Pharmacy", "5306", "Dr. N. Srilakshmi", "Asst. Prof", "nallapatysrilakshmi@kluniversity.in"],
        ["20", "AO", "5537", "Ms. Y. Kamali", "Admin. Asst", "kamaliy@kluniversity.in"],
        ["21", "HR", "6391", "Mrs. Ch. Vimala", "Assistant Manager", "cvimala@kluniversity.in"],
        ["22", "NCC", "3888", "Dr. A. Pavani", "Asst. Prof", "pavanilinguist@kluniversity.in"],
        ["23", "Hostel", "6615", "Dr. Y. Srilakshmi", "Manager - Hostels", "Srilakshmi.yella@kluniversity.in"],
        ["24", "Registrar Office", "4425", "Mrs. P. Sobha Rani", "Office Assistant", "psobharani@kluniversity.in"],
        ["25", "PED", "8136", "Dr. M. Poojitha", "Asst. PED", "poojithamovva@kluniversity.in"]
      ]
    },

    student: {
      label: "Student committee",
      columns: ["Sl.no", "Name of the member", "Regd. No", "Branch", "E-mail id"],
      linkColumn: null,
      rows: [
        ["1", "S. Lahari", "2200090223", "CSIT", "2200090223@kluniversity.in"],
        ["2", "V. Meghana", "2200040156", "ECE", "2200040156@kluniversity.in"],
        ["3", "S. Jyothsna", "2300040351", "ECE", "2300040351@kluniversity.in"],
        ["4", "G. Rishitha", "2200030883", "CSE", "2200030883@kluniversity.in"],
        ["5", "B. Prathima", "2200032572", "CSE", "2200032572@kluniversity.in"],
        ["6", "M. Gamana Sree", "2200030228", "CSE", "2200030228@kluniversity.in"],
        ["7", "P. Gnanan Deepika", "2300030495", "CSE", "2300030495@kluniversity.in"],
        ["8", "M. Aryaani", "2200010158", "BT", "2200010158@kluniversity.in"],
        ["9", "T. Anu Lekhna", "2300520010", "CSA", "2300520010@kluniversity.in"],
        ["10", "P. Jyothika", "2401510235", "MBA", "2401510235@kluniversity.in"],
        ["11", "N. Poojitha", "2200620041", "Agriculture", "2200620041@kluniversity.in"],
        ["12", "K.B.N.S. Jaswitha", "2200510003", "Architecture", "2200510003@kluniversity.in"],
        ["13", "B. Kusheela", "2200530048", "B. Pharmacy", "200530048@kluniversity.in"]
      ]
    },

    femflare: {
      label: "FemFlare",
      columns: ["Sl.no", "Year", "Date", "Name of the event", "Report link"],
      linkColumn: 4,
      rows: [
        ["1", "2022-23", "02.03.23", "Femflare-23", "https://www.kluniversity.in/wdc/pdf/flemfare/Femflare-2023.pdf"],
        ["2", "2021-22", "08 & 09.03.22", "Femflare-22", "https://www.kluniversity.in/wdc/pdf/flemfare/Femflare-2022.pdf"],
        ["3", "2020-21", "08.03.21", "Femflare-21", "https://www.kluniversity.in/wdc/pdf/flemfare/Femflare-2021.pdf"],
        ["4", "2019-20", "09.03.20", "Femflare-20", "https://www.kluniversity.in/wdc/pdf/flemfare/Femflare-2020.pdf"],
        ["5", "2018-19", "08.03.2019", "Femflare-19", "https://www.kluniversity.in/wdc/pdf/flemfare/Femflare-2019.pdf"]
      ]
    },

    summit: {
      label: "Women's Summit",
      columns: ["Sl.no", "Year", "Date", "Name of the event", "Report link"],
      linkColumn: 4,
      rows: [
        ["1", "2022-23", "08.03.23", "3rd National Women Summit", "https://www.kluniversity.in/wdc/pdf/womenssummit/Women Summit-23.pdf"],
        ["2", "2021-22", "08 & 09.03.22", "2nd National Women Summit", "https://www.kluniversity.in/wdc/pdf/womenssummit/Women Summit-22.pdf"],
        ["3", "2020-21", "09.03.21", "1st National Women Summit", "https://www.kluniversity.in/wdc/pdf/womenssummit/Women Summit-21.pdf"],
        ["4", "2018-19", "28 & 29.12.2019", "National Women Conference on Technological Innovations", "https://www.kluniversity.in/wdc/pdf/womenssummit/National womens conference.pdf"],
        ["5", "2021-22", "24.01.22", "National Girl Child Day", "https://www.kluniversity.in/wdc/pdf/womenssummit/National girls day.pdf"]
      ]
    },

    womensday: {
      label: "Women's Day",
      columns: ["Sl.no", "Year", "Date", "Name of the event", "Report link"],
      linkColumn: 4,
      rows: [
        ["1", "2022-23", "07.03.23", "Women's Day 2023", "https://www.kluniversity.in/wdc/pdf/womensday/WOMENS DAY 2023.pdf"],
        ["2", "2021-22", "07.03.22", "Women's Day 2022", "https://www.kluniversity.in/wdc/pdf/womensday/WOMENS DAY 22.pdf"],
        ["3", "2020-21", "08.03.21", "Women's Day 2021", "https://www.kluniversity.in/wdc/pdf/womensday/Womens day-2021.pdf"]
      ]
    },

    academic: {
      label: "Academic events",
      columns: ["Sl.no", "Academic year", "Date", "Name of the event", "Report link"],
      linkColumn: 4,
      rows: [
        ["1","2023-24","13.09.2023","Awareness Session on Pradhan Mantri Ujwala Yojana, Ajeevika, Mahila Shakti Kendra","https://www.kluniversity.in/wdc/pdf/reports/2023-24/9-2023-24.pdf"],
        ["2","2023-24","15.09.2023","Health and Wellness Seminar on PCOD, Diabetes, and Obesity for Students, Faculty and Staff","https://www.kluniversity.in/wdc/pdf/reports/2023-24/10-2023-24.pdf"],
        ["3","2023-24","15.09.2023","Identification of People with Partial Oxygen Saturation Levels and Awareness","https://www.kluniversity.in/wdc/pdf/reports/2023-24/11-2023-24.pdf"],
        ["4","2023-24","15.09.2023","Awareness on Atrocities Against Women: Sexual Harassment at Work Place and Domestic Violence; Training on Disha App","https://www.kluniversity.in/wdc/pdf/reports/2023-24/12-2023-24.pdf"],
        ["5","2023-24","20.09.2023","Women's Empowerment — Principles in Practice","https://www.kluniversity.in/wdc/pdf/reports/2023-24/13-2023-24.pdf"],
        ["6","2023-24","21.09.2023","Bone Density, Body Checkup Camp","https://www.kluniversity.in/wdc/pdf/reports/2023-24/14-2023-24.pdf"],
        ["7","2023-24","21.09.2023","Seminar on Women Empowerment","https://www.kluniversity.in/wdc/pdf/reports/2023-24/15-2023-24.pdf"],
        ["8","2023-24","23.09.2023","Awareness on Superstitious Beliefs","https://www.kluniversity.in/wdc/pdf/reports/2023-24/16-2023-24.pdf"],
        ["9","2023-24","24.09.2023","Daughter's Day","https://www.kluniversity.in/wdc/pdf/reports/2023-24/17-2023-24.pdf"],
        ["10","2023-24","29.09.2023","Career Planning and Entrepreneurship for Women Students","https://www.kluniversity.in/wdc/pdf/reports/2023-24/18-2023-24.pdf"],
        ["11","2023-24","30.09.2023","Online Business Channels","https://www.kluniversity.in/wdc/pdf/reports/2023-24/19-2023-24.pdf"],
        ["12","2023-24","10.10.2023","Seminar on Mental Health Well-Being","https://www.kluniversity.in/wdc/pdf/reports/2023-24/20-2023-24.pdf"],
        ["13","2023-24","11.10.2023","Seminar on Identifying the Potential Startups Among Women Faculty / Staff / Students","https://www.kluniversity.in/wdc/pdf/reports/2023-24/21-2023-24.pdf"],
        ["14","2023-24","12.10.2023","Seminar on PCOD Cancer","https://www.kluniversity.in/wdc/pdf/reports/2023-24/22-2023-24.pdf"],
        ["15","2023-24","13.10.2023","Seminar on Awareness on Superstitious Beliefs","https://www.kluniversity.in/wdc/pdf/reports/2023-24/23-2023-24.pdf"],
        ["16","2023-24","19.10.2023","Awareness Session on CSR Funding Business Opportunities","https://www.kluniversity.in/wdc/pdf/reports/2023-24/24-2023-24.pdf"],
        ["17","2023-24","19.10.2023","Awareness Program on Breast Cancer","https://www.kluniversity.in/wdc/pdf/reports/2023-24/25-2023-24.pdf"],
        ["18","2023-24","19.10.2023","Training on Digital App — Cyber Alert","https://www.kluniversity.in/wdc/pdf/reports/2023-24/26 -2023-24.pdf"],
        ["19","2023-24","20.10.2023","Awareness Program on Gender Issues, Human Trafficking Problems, and Confidence Building","https://www.kluniversity.in/wdc/pdf/reports/2023-24/27-2023-24.pdf"],
        ["20","2023-24","02.11.2023","Mental Health Value System","https://www.kluniversity.in/wdc/pdf/reports/2023-24/28-2023-24.pdf"],
        ["21","2023-24","03.11.2023","Empowerment of Women — Psychological Issues of Girls","https://www.kluniversity.in/wdc/pdf/reports/2023-24/29-2023-24.pdf"],
        ["22","2023-24","06.11.2023","Workshop on Stress Management for NSS Girl Students Attending the Pre-RD Camp","https://www.kluniversity.in/wdc/pdf/reports/2023-24/30-2023-24.pdf"],
        ["23","2023-24","14.11.2023","Identification of People with Diabetes and Awareness","https://www.kluniversity.in/wdc/pdf/reports/2023-24/31-2023-24.pdf"],
        ["24","2023-24","20.11.2023","6 Projects for Women in MEPMA Groups","https://www.kluniversity.in/wdc/pdf/reports/2023-24/32-2023-24.pdf"],
        ["25","2023-24","22.11.2023","Workshop on Disposal of Sanitary Napkins using Incineration Machines, Usage of Sanitary Vending","https://www.kluniversity.in/wdc/pdf/reports/2023-24/33-2023-24.pdf"],
        ["26","2023-24","22.11.2023","Awareness Programs and Workshops on Vector-Borne and Water-Borne Diseases","https://www.kluniversity.in/wdc/pdf/reports/2023-24/34-2023-24.pdf"],
        ["27","2023-24","24.11.2023","Identification of People with Obesity and Awareness on BMI","https://www.kluniversity.in/wdc/pdf/reports/2023-24/35-2023-24.pdf"],
        ["28","2023-24","27.11.2023","Workshop on Development of Prototypes (Small Devices Fabrication using IoT)","https://www.kluniversity.in/wdc/pdf/reports/2023-24/36-2023-24.pdf"],
        ["29","2023-24","29.11.2023 to 06.12.2023","International Day for the Elimination of Violence Against Women","https://www.kluniversity.in/wdc/pdf/reports/2023-24/37-2023-24.pdf"],
        ["30","2023-24","02.12.2023","Importance of Higher Education for Schoolchildren and Dropouts from School","https://www.kluniversity.in/wdc/pdf/reports/2023-24/38-2023-24.pdf"],
        ["31","2023-24","04.12.2023","Program on Pregnancy and Lactation, Immunization, Chronic Kidney Disease (CKD)","https://www.kluniversity.in/wdc/pdf/reports/2023-24/39-2023-24.pdf"],
        ["32","2023-24","12.12.2023","Workshop on LinkedIn Profile Building and Professional Development","https://www.kluniversity.in/wdc/pdf/reports/2023-24/40-2023-24.pdf"],
        ["33","2023-24","13.12.2023","Menstrual Hygiene in Adolescents' Awareness","https://www.kluniversity.in/wdc/pdf/reports/2023-24/41-2023-24.pdf"],
        ["34","2023-24","27.12.2023","Gender Sensitization","https://www.kluniversity.in/wdc/pdf/reports/2023-24/42-2023-24.pdf"],
        ["35","2023-24","27.12.2023","Awareness Program on Vitamin Deficiency and Its Prevention","https://www.kluniversity.in/wdc/pdf/reports/2023-24/43-2023-24.pdf"],
        ["36","2023-24","29.12.2023","Baking Competition for Students and Staff","https://www.kluniversity.in/wdc/pdf/reports/2023-24/44-2023-24.pdf"],
        ["37","2023-24","30.12.2023","Gender Sensitization and Prevention of Sexual Harassment (GS-POSH)","https://www.kluniversity.in/wdc/pdf/reports/2023-24/45-2023-24.pdf"],
        ["38","2023-24","06.01.2024","Session on Various Government Funding Opportunities and Schemes Towards Startup Initiation","https://www.kluniversity.in/wdc/pdf/reports/2023-24/46-2023-24.pdf"],
        ["39","2023-24","11.01.2024","Workshop on Identifying the Innovative Ideas and Mapping them for Patent Filing","https://www.kluniversity.in/wdc/pdf/reports/2023-24/47-2023-24.pdf"],
        ["40","2023-24","25.01.2024","Mentoring of Girl Students about How to be Successful in Life","https://www.kluniversity.in/wdc/pdf/reports/2023-24/48-2023-24.pdf"],
        ["41","2023-24","25.01.2024","Tackling the Decreasing Girl Child Ratio in India","https://www.kluniversity.in/wdc/pdf/reports/2023-24/49-2023-24.pdf"],
        ["42","2023-24","07.02.2024","Awareness Program on Gender Sensitization","https://www.kluniversity.in/wdc/pdf/reports/2023-24/50-2023-24.pdf"],
        ["43","2023-24","28.02.2024","Gender Justice at Workplace","https://www.kluniversity.in/wdc/pdf/reports/2023-24/51-2023-24.pdf"],
        ["44","2023-24","15.03.2024 & 16.03.2024","FemFlare-24","https://www.kluniversity.in/wdc/pdf/reports/2023-24/52-2023-24.pdf"],
        ["45","2022-2023","10-10-2022","Workshop on Self-Defense Techniques for Women and Girls","https://www.kluniversity.in/wdc/pdf/reports/1.pdf"],
        ["46","2022-2023","07-04-2023","Seminar on Mental Health Well-Being of Women and Girls","https://www.kluniversity.in/wdc/pdf/reports/2.pdf"],
        ["47","2022-2023","05/12/2022 to 07/12/2022","International Day for the Elimination of Violence against Women","https://www.kluniversity.in/wdc/pdf/reports/3.pdf"],
        ["48","2022-2023","21-12-2022","Workshop on Fitness for Women and Girls","https://www.kluniversity.in/wdc/pdf/reports/4.pdf"],
        ["49","2022-2023","04-01-2023","Workshop on Cyber Crimes","https://www.kluniversity.in/wdc/pdf/reports/5.pdf"],
        ["50","2022-2023","31-01-2023","Seminar on Pradhan Mantri Yojana and other Schemes for MSME and Startups","https://www.kluniversity.in/wdc/pdf/reports/6.pdf"],
        ["51","2022-2023","02-03-2023","Femflare 2023","https://www.kluniversity.in/wdc/pdf/reports/7.pdf"],
        ["52","2022-2023","03-02-2023","Workshop on Importance of Meditation and Yoga for Women and Girls","https://www.kluniversity.in/wdc/pdf/reports/8.pdf"],
        ["53","2022-2023","04-02-2023","Seminar on Intellectual Property Rights and Patent Filing","https://www.kluniversity.in/wdc/pdf/reports/9.pdf"],
        ["54","2022-2023","07-02-2023","Awareness on Cervical Cancer at Vaddeswaram","https://www.kluniversity.in/wdc/pdf/reports/10.pdf"],
        ["55","2022-2023","10-02-2023","Seminar on Breast Cancer for Women / Girls","https://www.kluniversity.in/wdc/pdf/reports/11.pdf"],
        ["56","2022-2023","14-02-2023","Involvement of Women and Girls in Science","https://www.kluniversity.in/wdc/pdf/reports/12.pdf"],
        ["57","2022-2023","16-02-2023","National Level Seminar on Gender Justice at Workplace","https://www.kluniversity.in/wdc/pdf/reports/13.pdf"],
        ["58","2022-2023","20-09-2022","Workshop on Gardening for Women and Girls","https://www.kluniversity.in/wdc/pdf/reports/14.pdf"],
        ["59","2022-2023","21-02-2023","Awareness Program on Women Safety","https://www.kluniversity.in/wdc/pdf/reports/15.pdf"],
        ["60","2022-2023","24-02-2023","Workshop on Cervical Cancer Awareness at Perikalapudi","https://www.kluniversity.in/wdc/pdf/reports/16.pdf"],
        ["61","2022-2023","22-02-2023 & 23-02-2023","POSH Act Awareness Program","https://www.kluniversity.in/wdc/pdf/reports/17.pdf"],
        ["62","2022-2023","08-03-2023","3rd National Women Summit","https://www.kluniversity.in/wdc/pdf/reports/18.pdf"],
        ["63","2022-2023","07-03-2023","Women's Day Celebrations 2K23","https://www.kluniversity.in/wdc/pdf/reports/19.pdf"],
        ["64","2022-2023","08-03-2023","Workshop on Software Packages for Application Development","https://www.kluniversity.in/wdc/pdf/reports/20.pdf"],
        ["65","2022-2023","13-03-2023","Workshop on Patent Filing for Women in Self-Help Groups","https://www.kluniversity.in/wdc/pdf/reports/21.pdf"],
        ["66","2022-2023","17-03-2023","Workshop on Online Shopping for Rural Women","https://www.kluniversity.in/wdc/pdf/reports/22.pdf"],
        ["67","2022-2023","12-04-2023","Workshop on Embroidery for Rural Women and Girls","https://www.kluniversity.in/wdc/pdf/reports/23.pdf"],
        ["68","2022-2023","15-07-2023","Awareness Program on Hypertension for Women","https://www.kluniversity.in/wdc/pdf/reports/24.pdf"],
        ["69","2022-2023","30-07-2023","Seminar on Legal Rights for Women","https://www.kluniversity.in/wdc/pdf/reports/25.pdf"],
        ["70","2021-2022","02-08-2021","Webinar on Gender Sensitization","https://www.kluniversity.in/wdc/pdf/reports/26.pdf"],
        ["71","2021-2022","14-08-2021","Webinar on Safety, Security and Threat Awareness","https://www.kluniversity.in/wdc/pdf/reports/27.pdf"],
        ["72","2021-2022","25-11-2021","Seminar on Curbing Violence against Women","https://www.kluniversity.in/wdc/pdf/reports/28.pdf"],
        ["73","2021-2022","28-12-2021","Seminar on Gender Sensitization","https://www.kluniversity.in/wdc/pdf/reports/29.pdf"],
        ["74","2021-2022","24-01-2022","Workshop on Digital Generation — Our Generation, on National Girl Child's Day","https://www.kluniversity.in/wdc/pdf/reports/30.pdf"],
        ["75","2021-2022","24-01-2022","Rally on the theme Save A Girl Child","https://www.kluniversity.in/wdc/pdf/reports/31.pdf"],
        ["76","2021-2022","25-01-2022","Webinar on Women Empowerment","https://www.kluniversity.in/wdc/pdf/reports/32.pdf"],
        ["77","2021-2022","26-01-2022","Drawing and Poem Competitions on the theme Save A Girl Child","https://www.kluniversity.in/wdc/pdf/reports/33.pdf"],
        ["78","2021-2022","10-02-2022","Awareness on Skin Care","https://www.kluniversity.in/wdc/pdf/reports/34.pdf"],
        ["79","2021-2022","07-02-2022","Pledge to Protect Girl Child","https://www.kluniversity.in/wdc/pdf/reports/35.pdf"],
        ["80","2021-2022","14-02-2022","Essay Writing Competitions on the Occasion of Girl Child Day","https://www.kluniversity.in/wdc/pdf/reports/36.pdf"],
        ["81","2021-2022","24-02-2022","Haemoglobin Testing","https://www.kluniversity.in/wdc/pdf/reports/37.pdf"],
        ["82","2021-2022","02-03-2022","Rally and Fashion Show — Representation of Various Cultures and Traditions","https://www.kluniversity.in/wdc/pdf/reports/38.pdf"],
        ["83","2021-2022","03-03-2022","Idea Pitch to Empower Women","https://www.kluniversity.in/wdc/pdf/reports/39.pdf"],
        ["84","2021-2022","04-03-2022","Presentations on Women Who Empowered India","https://www.kluniversity.in/wdc/pdf/reports/40.pdf"],
        ["85","2021-2022","05-03-2022","Webinar on Women Driven towards Technology","https://www.kluniversity.in/wdc/pdf/reports/41.pdf"],
        ["86","2021-2022","08-03-2022","Women's Day Celebrations 2022","https://www.kluniversity.in/wdc/pdf/reports/42.pdf"],
        ["87","2021-2022","08 & 09-03-2022","Femflare 2022","https://www.kluniversity.in/wdc/pdf/reports/43.pdf"],
        ["88","2021-2022","08 & 09-03-2022","2nd Women Summit 2022","https://www.kluniversity.in/wdc/pdf/reports/44.pdf"],
        ["89","2020-2021","03-07-2020","Gender Sensitization Awareness Program","https://www.kluniversity.in/wdc/pdf/reports/45.pdf"],
        ["90","2020-2021","15-08-2020","Painting Competition","https://www.kluniversity.in/wdc/pdf/reports/46.pdf"],
        ["91","2020-2021","29-08-2020","Awareness Program on Obesity","https://www.kluniversity.in/wdc/pdf/reports/47.pdf"],
        ["92","2020-2021","30-08-2020 & 31-08-2020","Webinar on Cyber Threats, Safety, and Security","https://www.kluniversity.in/wdc/pdf/reports/48.pdf"],
        ["93","2020-2021","08-09-2020 & 09-09-2020","Elocution Competition on Digital Literacy for Women in the Post-Covid World","https://www.kluniversity.in/wdc/pdf/reports/49.pdf"],
        ["94","2020-2021","12-09-2020","Webinar on Women Empowerment — Principles in Practice","https://www.kluniversity.in/wdc/pdf/reports/50.pdf"],
        ["95","2020-2021","24-09-2020","Panel Discussions on Women Empowerment","https://www.kluniversity.in/wdc/pdf/reports/51.pdf"],
        ["96","2020-2021","24-09-2020","Webinar on Career Planning and Entrepreneurship","https://www.kluniversity.in/wdc/pdf/reports/52.pdf"],
        ["97","2020-2021","16-10-2020","Webinar on the Role of Biotechnology in Avoiding Breast Cancer","https://www.kluniversity.in/wdc/pdf/reports/53.pdf"],
        ["98","2020-2021","30-01-2021","Webinar on Health Awareness — Skin Care Myths and Facts","https://www.kluniversity.in/wdc/pdf/reports/54.pdf"],
        ["99","2020-2021","12-02-2021","Webinar on Eve Teasing and Anti Ragging","https://www.kluniversity.in/wdc/pdf/reports/55.pdf"],
        ["100","2020-2021","08-03-2021","Women's Day 2K21","https://www.kluniversity.in/wdc/pdf/reports/56.pdf"],
        ["101","2020-2021","08-03-2021 & 09-03-2021","Fem Flare 2021","https://www.kluniversity.in/wdc/pdf/reports/57.pdf"],
        ["102","2020-2021","08-03-2021 & 09-03-2021","1st National Women Summit on Women Empowerment","https://www.kluniversity.in/wdc/pdf/reports/58.pdf"],
        ["103","2020-2021","23-04-2021","Webinar on Importance of Yoga","https://www.kluniversity.in/wdc/pdf/reports/59.pdf"],
        ["104","2020-2021","12-05-2021","Mother's Day Celebrations","https://www.kluniversity.in/wdc/pdf/reports/60.pdf"],
        ["105","2020-2021","25-05-2021","Webinar on Gender Equity and Sensitivity","https://www.kluniversity.in/wdc/pdf/reports/61.pdf"],
        ["106","2020-2021","24-06-2021","Menstrual Hygiene and Contraception","https://www.kluniversity.in/wdc/pdf/reports/62.pdf"],
        ["107","2020-2021","26-06-2021","National Level Seminar on Women in Science and Technology — Gender Perspective","https://www.kluniversity.in/wdc/pdf/reports/63.pdf"],
        ["108","2019-2020","30/08/2020 & 31/08/2020","Workshop on Safety, Security and Threat Awareness","https://www.kluniversity.in/wdc/pdf/reports/64.pdf"],
        ["109","2019-2020","07-09-2019","International Literacy Day","https://www.kluniversity.in/wdc/pdf/reports/65.pdf"],
        ["110","2019-2020","27-09-2019","Seminar on Entrepreneurship and Business Management, Career Planning, and Women Empowerment","https://www.kluniversity.in/wdc/pdf/reports/66.pdf"],
        ["111","2019-2020","24-10-2019","A Talk on Cancer Awareness","https://www.kluniversity.in/wdc/pdf/reports/67.pdf"],
        ["112","2019-2020","28-01-2020","Meditation Program","https://www.kluniversity.in/wdc/pdf/reports/68.pdf"],
        ["113","2019-2020","26-02-2020","Seminar on Cancer Care and Immunotherapy","https://www.kluniversity.in/wdc/pdf/reports/69.pdf"],
        ["114","2019-2020","03-03-2020","Seminar on Skin Care and Women Wellness","https://www.kluniversity.in/wdc/pdf/reports/70.pdf"],
        ["115","2019-2020","07-03-2020","Fem Flare 2K20","https://www.kluniversity.in/wdc/pdf/reports/71.pdf"],
        ["116","2019-2020","24-06-2020","Webinar on Legal Rights for Women","https://www.kluniversity.in/wdc/pdf/reports/72.pdf"],
        ["117","2019-2020","27-06-2020","Health Camp on Hemoglobin Test","https://www.kluniversity.in/wdc/pdf/reports/73.pdf"],
        ["118","2018-2019","26-07-2018","Awareness Camp on Skin Care","https://www.kluniversity.in/wdc/pdf/reports/74.pdf"],
        ["119","2018-2019","06-08-2018","Workshop on Safety, Security and Threat Awareness","https://www.kluniversity.in/wdc/pdf/reports/75.pdf"],
        ["120","2018-2019","02-04-2019","Health Camp on Blood Grouping and Hemoglobin Test","https://www.kluniversity.in/wdc/pdf/reports/76.pdf"],
        ["121","2018-2019","15-08-2018","Seminar on Women as a Leader on the Occasion of Independence Day","https://www.kluniversity.in/wdc/pdf/reports/77.pdf"],
        ["122","2018-2019","18-08-2018","Obesity, its Consequences and Precautions","https://www.kluniversity.in/wdc/pdf/reports/78.pdf"],
        ["123","2018-2019","15-09-2018","Seminar on Role of Women in Engineering","https://www.kluniversity.in/wdc/pdf/reports/79.pdf"],
        ["124","2018-2019","21-09-2018","Seminar on Legal Rights for Women","https://www.kluniversity.in/wdc/pdf/reports/80.pdf"],
        ["125","2018-2019","27-09-2018","Workshop on Computer Literacy for Rural Women","https://www.kluniversity.in/wdc/pdf/reports/81.pdf"],
        ["126","2018-2019","29-09-2018","Talk on Women Protection and Law for Girl Students and Lady Staff","https://www.kluniversity.in/wdc/pdf/reports/82.pdf"],
        ["127","2018-2019","05-10-2018","Awareness Programme on Breast Cancer","https://www.kluniversity.in/wdc/pdf/reports/83.pdf"],
        ["128","2018-2019","28-10-2018","Seminar on Nirbhaya Act for Women and Girls","https://www.kluniversity.in/wdc/pdf/reports/84.pdf"],
        ["129","2018-2019","11-11-2018","Workshop on Gender Sensitization","https://www.kluniversity.in/wdc/pdf/reports/85.pdf"],
        ["130","2018-2019","28/12/2018 & 29/12/2018","National Women Conference on Technological Innovations","https://www.kluniversity.in/wdc/pdf/reports/86.pdf"],
        ["131","2018-2019","12-01-2019","Seminar on Importance of Gender Diversity in Educational Institutes","https://www.kluniversity.in/wdc/pdf/reports/87.pdf"],
        ["132","2018-2019","25-01-2019","Cosmetic Veda — Ayurvedic Solutions for Skin and Hair Problems","https://www.kluniversity.in/wdc/pdf/reports/88.pdf"],
        ["133","2018-2019","09-02-2019","Legal Rights for Women","https://www.kluniversity.in/wdc/pdf/reports/89.pdf"],
        ["134","2018-2019","08-03-2019","Fem Flare 2K19","https://www.kluniversity.in/wdc/pdf/reports/90.pdf"],
        ["135","2018-2019","07-03-2019","Workshop on Career Planning","https://www.kluniversity.in/wdc/pdf/reports/91.pdf"],
        ["136","2018-2019","29-03-2019","Awareness on Anti Discrimination","https://www.kluniversity.in/wdc/pdf/reports/92.pdf"],
        ["137","2018-2019","11-04-2019","Seminar on Women as Entrepreneurs","https://www.kluniversity.in/wdc/pdf/reports/93.pdf"],
        ["138","2018-2019","12-05-2019","Seminar on Women Empowerment","https://www.kluniversity.in/wdc/pdf/reports/94.pdf"],
        ["139","2018-2019","20-07-2019","Seminar on Personality Development","https://www.kluniversity.in/wdc/pdf/reports/95.pdf"]
      ]
    }
  }
};

/* --------------------------- store helpers --------------------------- */
const DB_PATH = "siteData";

const WDCStore = {
  /**
   * Load data once from Firebase.
   * Returns a Promise that resolves with the merged data object.
   */
  async load() {
    try {
      const snap = await db.ref(DB_PATH).once("value");
      const saved = snap.val();
      if (!saved) return structuredClone(DEFAULT_DATA);
      // Deep-merge: overlay saved onto defaults so new fields are never lost
      const base = structuredClone(DEFAULT_DATA);
      for (const key of Object.keys(saved)) {
        if (
          saved[key] !== null &&
          typeof saved[key] === "object" &&
          !Array.isArray(saved[key]) &&
          base[key] !== null &&
          typeof base[key] === "object" &&
          !Array.isArray(base[key])
        ) {
          base[key] = Object.assign(base[key], saved[key]);
        } else {
          base[key] = saved[key];
        }
      }
      return base;
    } catch (e) {
      console.warn("Could not read from Firebase, using defaults.", e);
      return structuredClone(DEFAULT_DATA);
    }
  },

  /**
   * Save the full data object to Firebase.
   * Returns a Promise.
   */
  async save(data) {
    await db.ref(DB_PATH).set(data);
  },

  /**
   * Reset to defaults by writing DEFAULT_DATA to Firebase.
   */
  async reset() {
    await db.ref(DB_PATH).set(structuredClone(DEFAULT_DATA));
  },

  /**
   * Subscribe to real-time updates.
   * callback(data) is called every time data changes in Firebase.
   */
  subscribe(callback) {
    db.ref(DB_PATH).on("value", (snap) => {
      const saved = snap.val();
      if (!saved) { callback(structuredClone(DEFAULT_DATA)); return; }
      const base = structuredClone(DEFAULT_DATA);
      for (const key of Object.keys(saved)) {
        if (
          saved[key] !== null &&
          typeof saved[key] === "object" &&
          !Array.isArray(saved[key]) &&
          base[key] !== null &&
          typeof base[key] === "object" &&
          !Array.isArray(base[key])
        ) {
          base[key] = Object.assign(base[key], saved[key]);
        } else {
          base[key] = saved[key];
        }
      }
      callback(base);
    });
  }
};
