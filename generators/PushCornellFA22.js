const { request, gql } = require("graphql-request")

const bloated = [
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "AAS 2100",
    Title: "South Asian Diaspora",
    Name: "Viranjini Munasinghe",
    Email: "vpm1@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "AAS 2130",
    Title: "Introduction to Asian American History",
    Name: "Derek Chang",
    Email: "dsc37@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "AAS 3885",
    Title: "Race and War in History: Workers, Soldiers, Prisoners, Activists",
    Name: "Tejasvi Nagaraja",
    Email: "tn329@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "AAS 4040",
    Title: "Fictions of Dictatorship",
    Name: "Christine Balance",
    Email: "cbb84@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "AAS 4950",
    Title: "Independent Study",
    Name: "Viranjini Munasinghe",
    Email: "vpm1@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "AAS 6611",
    Title: "Minoritarian Aesthetics In-And Performance",
    Name: "Karen Jaime",
    Email: "kj12@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "AEM 1101",
    Title: "Design Your Dyson",
    Name: "",
    Email: ""
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "AEM 1600",
    Title: "The Business of Modern Medicine",
    Name: "Robert Karpman",
    Email: "rk395@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "AEM 2010",
    Title: "Spreadsheet Modeling for Management and Economics",
    Name: "Donna Haeger",
    Email: "dlh266@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "AEM 2011",
    Title: "Spreadsheet Modeling for Non-Dyson Majors",
    Name: "Reza Moghimi",
    Email: "am2393@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "AEM 2100",
    Title: "Introductory Statistics",
    Name: "Cindy Van Es",
    Email: "clv1@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "AEM 2110",
    Title: "The Business of Biofuels",
    Name: "Harry de Gorter",
    Email: "hd15@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "AEM 2200",
    Title: "Business Management and Organization",
    Name: "Pedro Perez",
    Email: "pdp5@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "AEM 2210",
    Title: "Financial Accounting",
    Name: "Daniel Szpiro",
    Email: "das247@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "AEM 2220",
    Title: "Foundational Perspectives and Contemporary Issues in Entrepreneurship",
    Name: "Robert Karpman",
    Email: "rk395@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "AEM 2225",
    Title: "Financial Accounting For Dyson Majors",
    Name: "Marquise Riley",
    Email: "msr259@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "AEM 2241",
    Title: "Finance",
    Name: "Rich Curtis",
    Email: "rtc3@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "AEM 2350",
    Title: "Introduction To The Economics Of Development",
    Name: "Steven Kyle",
    Email: "sck5@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "AEM 2400",
    Title: "Marketing",
    Name: "Nathan Yang",
    Email: "ncy6@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "AEM 2500",
    Title: "Environmental and Resource Economics",
    Name: "Ariel Ortiz Bobea",
    Email: "ao332@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "AEM 2555",
    Title: "Corporate Sustainability: The Business Challenge",
    Name: "John Tobin",
    Email: "jt728@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "AEM 2600",
    Title: "Managerial Economics",
    Name: "Benjamin Leyden",
    Email: "bl693@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "AEM 2700",
    Title: "Management Communication",
    Name: "David Lennox",
    Email: "dpl29@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "AEM 2800",
    Title: "Hot Economic Issues in the News Today",
    Name: "Steven Kyle",
    Email: "sck5@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "AEM 2805",
    Title: "Strategic Responses to Poverty and Hunger in Developing Countries",
    Name: "Mark Constas",
    Email: "mac223@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "AEM 2820",
    Title: "Introduction to Database Management Systems",
    Name: "Reza Moghimi",
    Email: "am2393@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "AEM 2840",
    Title: "Python Programming for Data Analysis and Business Modeling",
    Name: "Reza Moghimi",
    Email: "am2393@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "AEM 3000",
    Title: "Grand Challenges Pre-Project Immersion",
    Name: "Sarah Chalmers",
    Email: "skc25@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "AEM 3015",
    Title: "Developing Racial Equity in Organizations",
    Name: "Jennifer Majka",
    Email: "jmm528@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "AEM 3020",
    Title: "Farm Business Management",
    Name: "Wayne Knoblauch",
    Email: "wak4@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "AEM 3030",
    Title: "Explorations in Analytic Modeling",
    Name: "Donna Haeger",
    Email: "dlh266@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "AEM 3100",
    Title: "Business Statistics",
    Name: "Cindy Van Es",
    Email: "clv1@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "AEM 3110",
    Title: "Design and Innovation",
    Name: "Denise Ramzy",
    Email: "djr278@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "AEM 3200",
    Title: "Business Law",
    Name: "Adam Klausner",
    Email: "aak12@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "AEM 3205",
    Title: "Ethics in Business and Organizations",
    Name: "John Doris",
    Email: "jmd378@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "AEM 3220",
    Title: "Digital Business Strategy",
    Name: "Aija Leiponen",
    Email: "ael24@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "AEM 3245",
    Title: "Organizational Behavior",
    Name: "Kevin Kniffin",
    Email: "kmk276@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "AEM 3249",
    Title: "Entrepreneurial Marketing and Strategy",
    Name: "Nick Nickitas",
    Email: "nn47@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "AEM 3270",
    Title: "Supply Chain Strategy and Supermarket Simulation",
    Name: "Daniel Hooker",
    Email: "dwh22@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "AEM 3310",
    Title: "Introduction to Business Regulation",
    Name: "Robert Karpman",
    Email: "rk395@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "AEM 3320",
    Title: "Leadership and Management in Sports",
    Name: "Kevin Kniffin",
    Email: "kmk276@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "AEM 3360",
    Title: "Corporate Financial Reporting I",
    Name: "Mani Sethuraman",
    Email: "ss3647@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "AEM 3385",
    Title: "Social Entrepreneurship Practicum: Anabel's Grocery",
    Name: "Anke Wessels",
    Email: "akw7@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "AEM 3388",
    Title: "The Asian Century: The Rise of China and India",
    Name: "Eli Friedman",
    Email: "edf48@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "AEM 3440",
    Title: "Consumer Behavior",
    Name: "",
    Email: ""
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "AEM 3547",
    Title: "WIM: America, Business and International Political Economy",
    Name: "Peter Katzenstein",
    Email: "pjk2@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "AEM 4050",
    Title: "Farm Credit Fellows - Agricultural Lending",
    Name: "Wayne Knoblauch",
    Email: "wak4@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "AEM 4095",
    Title: "Digital Marketing",
    Name: "Tommaso Bondi",
    Email: "tb558@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "AEM 4100",
    Title: "Applied Managerial Economics",
    Name: "Terence Alexander",
    Email: "ta425@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "AEM 4110",
    Title: "Introduction to Econometrics",
    Name: "Loren Tauer",
    Email: "lwt1@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "AEM 4230",
    Title: "Contemporary Topics in Behavioral Finance",
    Name: "Vicki Bogan",
    Email: "vlb23@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "AEM 4280",
    Title: "Valuation of Capital Investment",
    Name: "David Ng",
    Email: "dtn4@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "AEM 4375",
    Title: "Business Design",
    Name: "Denise Ramzy",
    Email: "djr278@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "AEM 4400",
    Title: "Retail Strategy",
    Name: "Nathan Yang",
    Email: "ncy6@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "AEM 4420",
    Title: "Emerging Markets",
    Name: "Ralph Christy",
    Email: "rdc6@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "AEM 4435",
    Title: "Data Driven Marketing",
    Name: "Sachin Gupta",
    Email: "sg248@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "AEM 4450",
    Title: "Toward a Sustainable Global Food System: Food Policy for Developing Countries",
    Name: "Prabhu Pingali",
    Email: "plp39@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "AEM 4460",
    Title: "Food Marketing Fellows",
    Name: "Adam Brumberg",
    Email: "ab697@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "AEM 4485",
    Title: "Economics of Food and Malnutrition",
    Name: "John Hoddinott",
    Email: "jfh246@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "AEM 4515",
    Title: "Business and Economics of Energy",
    Name: "Todd Gerarden",
    Email: "tdg48@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "AEM 4520",
    Title: "Advanced Accounting",
    Name: "Eric Lewis",
    Email: "eel33@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "AEM 4521",
    Title: "Cost Accounting and Management Control",
    Name: "Eric Lewis",
    Email: "eel33@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "AEM 4530",
    Title: "Auditing and Assurance",
    Name: "Marquise Riley",
    Email: "msr259@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "AEM 4531",
    Title: "Federal Income Taxation",
    Name: "John McKinley",
    Email: "jwm336@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "AEM 4533",
    Title: "Federal Income Taxation of Low Income Taxpayers",
    Name: "John McKinley",
    Email: "jwm336@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "AEM 4545",
    Title: "International Finance and Macroeconomics",
    Name: "Eswar Prasad",
    Email: "esp54@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "AEM 4570",
    Title: "Corporate Finance",
    Name: "Scott Yonker",
    Email: "sey8@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "AEM 4580",
    Title: "The Economics and Psychology of Sustainable Business",
    Name: "William Schulze",
    Email: "wds3@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "AEM 4620",
    Title: "Advanced Financial Modeling and Analysis",
    Name: "Vicki Bogan",
    Email: "vlb23@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "AEM 4660",
    Title: "Business Simulation",
    Name: "Stephen Sauer",
    Email: "sjs46@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "AEM 4661",
    Title: "Business Simulation Capstone for Business Minors in Life Sciences",
    Name: "Robert Karpman",
    Email: "rk395@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "AEM 4665",
    Title: "Business Management Simulation",
    Name: "Stephen Sauer",
    Email: "sjs46@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "AEM 4670",
    Title: "Investments",
    Name: "",
    Email: ""
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "AEM 4880",
    Title: "Global Food, Energy, and Water Nexus – Engage the US, China, and India for Sustainability",
    Name: "Xingen Lei",
    Email: "xl20@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "AEM 4960",
    Title: "Applied Economics and Management Internship",
    Name: "",
    Email: ""
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "AEM 4961",
    Title: "Perspectives in Global Development",
    Name: "Louise Buck",
    Email: "leb3@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "AEM 4970",
    Title: "Individual Study in Applied Economics and Management",
    Name: "",
    Email: ""
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "AEM 4980",
    Title: "Supervised Teaching Experience",
    Name: "Ivan Rudik",
    Email: "ir229@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "AEM 4990",
    Title: "Undergraduate Research",
    Name: "",
    Email: ""
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "AEM 4992",
    Title: "Undergraduate Accounting and Tax Research",
    Name: "",
    Email: ""
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "AEM 5110",
    Title: "Design and Innovation",
    Name: "Denise Ramzy",
    Email: "djr278@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "AEM 5111",
    Title: "Introduction to Econometrics",
    Name: "Loren Tauer",
    Email: "lwt1@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "AEM 5220",
    Title: "Digital Business Strategy",
    Name: "Aija Leiponen",
    Email: "ael24@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "AEM 5230",
    Title: "Contemporary Topics in Behavioral Finance",
    Name: "Vicki Bogan",
    Email: "vlb23@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "AEM 5241",
    Title: "Finance",
    Name: "Rich Curtis",
    Email: "rtc3@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "AEM 5270",
    Title: "Supply Chain Strategy and Supermarket Simulation",
    Name: "Daniel Hooker",
    Email: "dwh22@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "AEM 5280",
    Title: "Valuation of Capital Investment",
    Name: "David Ng",
    Email: "dtn4@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "AEM 5300",
    Title: "CEMS Block Seminar",
    Name: "John Tobin",
    Email: "jt728@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "AEM 5305",
    Title: "Global Citizenship Seminar",
    Name: "Kevin Kniffin",
    Email: "kmk276@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "AEM 5310",
    Title: "Global Strategy",
    Name: "Sarah Wolfolds",
    Email: "sew276@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "AEM 5415",
    Title: "Pre-Engagement with Social Enterprises in Emerging Markets",
    Name: "Fridah Mubichi-Kut",
    Email: "mfm96@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "AEM 5420",
    Title: "Emerging Markets",
    Name: "Ralph Christy",
    Email: "rdc6@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "AEM 5435",
    Title: "Data Driven Marketing",
    Name: "Sachin Gupta",
    Email: "sg248@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "AEM 5515",
    Title: "Business and Economics of Energy",
    Name: "Todd Gerarden",
    Email: "tdg48@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "AEM 5550",
    Title: "Advertising Strategy",
    Name: "Jura Liaukonyte",
    Email: "jl2545@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "AEM 5570",
    Title: "Corporate Finance",
    Name: "Scott Yonker",
    Email: "sey8@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "AEM 5600",
    Title: "Managerial Economics",
    Name: "Garrick Blalock",
    Email: "gb78@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "AEM 5620",
    Title: "Advanced Financial Modeling and Analysis",
    Name: "Vicki Bogan",
    Email: "vlb23@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "AEM 5670",
    Title: "Investments",
    Name: "",
    Email: ""
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "AEM 5700",
    Title: "MPS Management Communication",
    Name: "James Stapp",
    Email: "jas926@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "AEM 5840",
    Title: "Python Programming for Data Analysis and Business Modeling",
    Name: "Reza Moghimi",
    Email: "am2393@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "AEM 6010",
    Title: "Writing Competitive Research Proposals",
    Name: "Mark Constas",
    Email: "mac223@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "AEM 6080",
    Title: "Production Economics",
    Name: "Loren Tauer",
    Email: "lwt1@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "AEM 6120",
    Title: "Applied Econometrics",
    Name: "Brian Dillon",
    Email: "bmd28@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "AEM 6125",
    Title: "Impact Evaluation in Developing Countries",
    Name: "Mark Constas",
    Email: "mac223@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "AEM 6140",
    Title: "Behavioral Economics and Managerial Decisions",
    Name: "David Just",
    Email: "drj3@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "AEM 6145",
    Title: "Business and Management Fundamentals for STEM Graduate Students",
    Name: "Robert Karpman",
    Email: "rk395@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "AEM 6245",
    Title: "Organizational Behavior",
    Name: "Kevin Kniffin",
    Email: "kmk276@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "AEM 6325",
    Title: "Leadership and Management in Sports",
    Name: "Kevin Kniffin",
    Email: "kmk276@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "AEM 6440",
    Title: "Consumer Behavior",
    Name: "",
    Email: ""
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "AEM 6455",
    Title: "Toward a Sustainable Global Food System: Food Policy for Developing Countries",
    Name: "Prabhu Pingali",
    Email: "plp39@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "AEM 6485",
    Title: "Economics of Food and Malnutrition",
    Name: "John Hoddinott",
    Email: "jfh246@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "AEM 6510",
    Title: "Environmental and Resource Economics",
    Name: "Ivan Rudik",
    Email: "ir229@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "AEM 6533",
    Title: "Federal Income Taxation of Low Income Taxpayers",
    Name: "John McKinley",
    Email: "jwm336@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "AEM 6580",
    Title: "The Economics and Psychology of Sustainable Business",
    Name: "William Schulze",
    Email: "wds3@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "AEM 6700",
    Title: "Economics of Consumer Demand",
    Name: "Miguel Gomez",
    Email: "mig7@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "AEM 6850",
    Title: "Empirical Methods for Applied Economists",
    Name: "Ariel Ortiz Bobea",
    Email: "ao332@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "AEM 6880",
    Title: "Global Food, Energy, and Water Nexus – Engage the US, China, and India for Sustainability",
    Name: "Xingen Lei",
    Email: "xl20@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "AEM 6960",
    Title: "Perspectives in Global Development",
    Name: "Louise Buck",
    Email: "leb3@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "AEM 6980",
    Title: "Supervised Graduate Teaching Experience",
    Name: "",
    Email: ""
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "AEM 6990",
    Title: "M.P.S. Research",
    Name: "",
    Email: ""
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "AEM 6991",
    Title: "MPS Research Seminar I",
    Name: "Aija Leiponen",
    Email: "ael24@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "AEM 7000",
    Title: "Individual Study in Applied Economics and Management",
    Name: "Chris Barrett",
    Email: "cbb2@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "AEM 7010",
    Title: "Applied Microeconomics",
    Name: "Benjamin Leyden",
    Email: "bl693@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "AEM 7030",
    Title: "Graduate Seminar",
    Name: "Calum Turvey",
    Email: "cgt6@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "AEM 7040",
    Title: "Applied Macroeconomics",
    Name: "C.-Y. Cynthia Lin Lawell",
    Email: "cl2447@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "AEM 7150",
    Title: "Applied Microeconomic Research",
    Name: "Shanjun Li",
    Email: "sl2448@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "AEM 7650",
    Title: "Development Microeconomics Graduate Research Seminar",
    Name: "Chris Barrett",
    Email: "cbb2@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "AEM 7670",
    Title: "Topics in International Finance",
    Name: "Eswar Prasad",
    Email: "esp54@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "AEM 7852",
    Title: "Sustainable Environment, Energy and Resource Economics Research Seminar",
    Name: "Todd Gerarden",
    Email: "tdg48@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "AEM 7900",
    Title: "Graduate-Level Thesis Research",
    Name: "Chris Barrett",
    Email: "cbb2@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "AEM 8900",
    Title: "Master's Level Thesis Research",
    Name: "Chris Barrett",
    Email: "cbb2@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "AEM 9900",
    Title: "Doctoral-Level Thesis Research",
    Name: "Chris Barrett",
    Email: "cbb2@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "AEP 1100",
    Title: "Lasers and Photonics",
    Name: "Peter McMahon",
    Email: "plm99@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "AEP 1200",
    Title: "Introduction to Nanoscience and Nanoengineering",
    Name: "Valla Fatemi",
    Email: "vf82@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "AEP 2170",
    Title: "Physics II: Electricity and Magnetism",
    Name: "Abigail Crites",
    Email: "atc72@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "AEP 3330",
    Title: "Mechanics of Particles and Solid Bodies",
    Name: "Lisa Wickham",
    Email: "lw45@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "AEP 3555",
    Title: "Gaining Intuition Through Symmetry and Computation",
    Name: "Craig Fennie",
    Email: "cjf76@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "AEP 3560",
    Title: "Intermediate Electrodynamics",
    Name: "Gennady Shvets",
    Email: "gs656@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "AEP 3610",
    Title: "Introductory Quantum Mechanics",
    Name: "Gregory Fuchs",
    Email: "gdf9@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "AEP 3630",
    Title: "Electronic Circuits",
    Name: "Georg Hoffstaetter",
    Email: "gh77@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "AEP 3640",
    Title: "Modern Applied Physics Experimental Design",
    Name: "Jeffrey Moses",
    Email: "jam262@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "AEP 4200",
    Title: "Intermediate Mathematical Physics",
    Name: "Ankit Disa",
    Email: "asd47@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "AEP 4230",
    Title: "Statistical Thermodynamics",
    Name: "Bruce Kusse",
    Email: "brk2@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "AEP 4380",
    Title: "Computational Engineering Physics",
    Name: "Earl Kirkland",
    Email: "ejk14@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "AEP 4500",
    Title: "Introductory Solid State Physics",
    Name: "David Muller",
    Email: "dm24@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "AEP 4812",
    Title: "Quantum Information Processing",
    Name: "Paul Ginsparg",
    Email: "phg5@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "AEP 4900",
    Title: "Independent Study in Engineering Physics",
    Name: "Joel Brock",
    Email: "jdb20@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "AEP 4910",
    Title: "Independent Study for Honors",
    Name: "Lena Kourkoutis",
    Email: "lf56@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "AEP 5200",
    Title: "Intermediate Mathematical Physics",
    Name: "Ankit Disa",
    Email: "asd47@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "AEP 5230",
    Title: "Statistical Thermodynamics",
    Name: "Bruce Kusse",
    Email: "brk2@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "AEP 5330",
    Title: "Mechanics of Particles and Solid Bodies",
    Name: "Lisa Wickham",
    Email: "lw45@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "AEP 5380",
    Title: "Computational Engineering Physics",
    Name: "Earl Kirkland",
    Email: "ejk14@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "AEP 5502",
    Title: "Introductory Solid State Physics",
    Name: "David Muller",
    Email: "dm24@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "AEP 5555",
    Title: "Gaining Intuition Through Symmetry and Computation",
    Name: "Craig Fennie",
    Email: "cjf76@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "AEP 5560",
    Title: "Intermediate Electrodynamics",
    Name: "Gennady Shvets",
    Email: "gs656@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "AEP 5610",
    Title: "Introductory Quantum Mechanics",
    Name: "Gregory Fuchs",
    Email: "gdf9@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "AEP 5630",
    Title: "Electronic Circuits",
    Name: "Georg Hoffstaetter",
    Email: "gh77@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "AEP 5640",
    Title: "Modern Applied Physics Experimental Design",
    Name: "Jeffrey Moses",
    Email: "jam262@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "AEP 5700",
    Title: "Biophysical Methods",
    Name: "Guillaume Lambert",
    Email: "gl428@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "AEP 6060",
    Title: "Introduction to Plasma Physics",
    Name: "David Hammer",
    Email: "dah5@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "AEP 7510",
    Title: "M.Eng. Project",
    Name: "Joel Brock",
    Email: "jdb20@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "AEP 7530",
    Title: "Special Topics Seminar in Applied Physics",
    Name: "Joel Brock",
    Email: "jdb20@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "AEP 7681",
    Title: "Quantum Information Processing",
    Name: "Paul Ginsparg",
    Email: "phg5@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "AEP 8200",
    Title: "Graduate Thesis",
    Name: "Peter McMahon",
    Email: "plm99@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "AGSCI 1125",
    Title: "Guided Explorations: Growing You and Your Path in the Agricultural Sciences",
    Name: "Kari Richards",
    Email: "ksu2@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "AGSCI 4960",
    Title: "Internship in Agricultural Sciences",
    Name: "",
    Email: ""
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "AIIS 1100",
    Title: "Indigenous North America",
    Name: "Kurt Jordan",
    Email: "kj21@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "AIIS 2600",
    Title: "Introduction to Native American Literature",
    Name: "Juliana Hu Pegues",
    Email: "jhp249@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "AIIS 3324",
    Title: "Cayuga Language and Culture",
    Name: "Jessica Martin",
    Email: "jlm556@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "AIIS 3330",
    Title: "Ways of Knowing: Indigenous and Place-Based Ecological Knowledge",
    Name: "Karim-Aly Kassam",
    Email: "ksk28@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "AIIS 3560",
    Title: "Thinking from a Different Place: Indigenous Philosophies",
    Name: "Eric Cheyfitz",
    Email: "etc7@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "AIIS 4200",
    Title: "Locke and the Philosophies of Dispossession: Indigenous America's Interruptions and Resistances",
    Name: "Troy Richardson",
    Email: "tar37@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "AIIS 4625",
    Title: "Contemporary Native American Fiction",
    Name: "Eric Cheyfitz",
    Email: "etc7@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "AIIS 4970",
    Title: "Independent Study",
    Name: "Jon Parmenter",
    Email: "jwp35@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "AIIS 6010",
    Title: "American Indian and Indigenous Studies Speaker Series",
    Name: "Jolene Rickard",
    Email: "jkr33@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "AIIS 6200",
    Title: "Locke and the Philosophies of Dispossession: Indigenous America's Interruptions and Resistances",
    Name: "Troy Richardson",
    Email: "tar37@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "AIIS 6970",
    Title: "Independent Study in American Indian and Indigenous Studies",
    Name: "Paul Nadasdy",
    Email: "pn79@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "AIRS 1101",
    Title: "Heritage and Values of the United States Air Force I",
    Name: "",
    Email: ""
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "AIRS 1141",
    Title: "Initial Military Experiences I",
    Name: "",
    Email: ""
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "AIRS 2201",
    Title: "Team and Leadership Fundamentals I",
    Name: "",
    Email: ""
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "AIRS 2241",
    Title: "Intermediate Military Experiences I",
    Name: "",
    Email: ""
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "AIRS 3341",
    Title: "Junior Officer Leadership Experiences I",
    Name: "",
    Email: ""
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "AIRS 3342",
    Title: "Junior Officer Leadership Experiences II",
    Name: "",
    Email: ""
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "AIRS 4401",
    Title: "National Security Affairs: Preparation for Active Duty I",
    Name: "",
    Email: ""
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "AIRS 4441",
    Title: "Advanced Leadership Experiences",
    Name: "",
    Email: ""
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "ALS 1110",
    Title: "Introduction to Digital Agriculture",
    Name: "Julio Giordano",
    Email: "jog25@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "ALS 1210",
    Title: "Data Literacy: Cultivating Skills to Engage with Data",
    Name: "Amelia Kallaher",
    Email: "aak98@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "ALS 1370",
    Title: "Academic Communication for Multilingual Students",
    Name: "Ingrid Arnesen",
    Email: "ia11@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "ALS 1400",
    Title: "CALS LAB: Landing and Becoming",
    Name: "Sahara Byrne",
    Email: "seb272@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "ALS 2400",
    Title: "Developing a Reflective Tutoring Practice",
    Name: "Jennifer Bokaer-Smith",
    Email: "jcb13@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "ALS 3105",
    Title: "Post-Internship Course: Making Meaning and Moving Forward - Maximizing Engaged Learning Experiences",
    Name: "Julie Ficarra",
    Email: "jmf389@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "ALS 4400",
    Title: "Leadership through Peer Mentoring",
    Name: "Sahara Byrne",
    Email: "seb272@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "ALS 4960",
    Title: "Internship in Agriculture and Life Sciences",
    Name: "",
    Email: ""
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "ALS 4970",
    Title: "Independent Study in Agriculture and Life Sciences",
    Name: "",
    Email: ""
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "ALS 4980",
    Title: "Undergraduate Teaching Assistant",
    Name: "",
    Email: ""
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "ALS 4990",
    Title: "Undergraduate Research in Agriculture and Life Sciences",
    Name: "Thomas Overton",
    Email: "tro2@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "ALS 4998",
    Title: "Inquiry in Politics and Policy",
    Name: "David Silbey",
    Email: "ds90@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "ALS 5211",
    Title: "Career Readiness: Engaged Learning for CALS Professional Master's Students",
    Name: "Sahara Byrne",
    Email: "seb272@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "ALS 5780",
    Title: "International Teaching Assistant Program Course",
    Name: "Derina Samuel",
    Email: "dss279@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "ALS 5790",
    Title: "International Teaching Assistant Development Program Course II",
    Name: "Jody Gabler",
    Email: "jeg275@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "ALS 5900",
    Title: "Project Development: CALS Professional Master's Programs",
    Name: "Thomas Overton",
    Email: "tro2@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "ALS 5910",
    Title: "Project Completion: CALS Professional Master's Programs",
    Name: "Thomas Overton",
    Email: "tro2@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "ALS 6014",
    Title: "Theater Techniques for Enhancing Teaching and Public Speaking",
    Name: "Colleen McLinn",
    Email: "cmm252@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "AMST 1115",
    Title: "Introduction to American Government and Politics",
    Name: "Suzanne Mettler",
    Email: "sbm24@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "AMST 1290",
    Title: "American Society through Film",
    Name: "David Strang",
    Email: "ds20@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "AMST 1500",
    Title: "Introduction to Africana Studies",
    Name: "Riche Richardson",
    Email: "rdr83@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "AMST 1585",
    Title: "Sports and Politics in American History",
    Name: "Lawrence Glickman",
    Email: "lbg49@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "AMST 1600",
    Title: "Indigenous North America",
    Name: "Kurt Jordan",
    Email: "kj21@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "AMST 1800",
    Title: "Immigration in U.S. History",
    Name: "Maria Cristina Garcia",
    Email: "mcg20@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "AMST 1850",
    Title: "Thinking about History with the Manson Murders",
    Name: "Claudia Verhoeven",
    Email: "cv89@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "AMST 2012",
    Title: "September 11 and the Politics of Memory",
    Name: "Joseph Margulies",
    Email: "jm347@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "AMST 2070",
    Title: "Social Problems in the United States",
    Name: "Peter Rich",
    Email: "pmr86@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "AMST 2106",
    Title: "Introduction to Latinx Studies",
    Name: "Vilma Santiago-Irizarry",
    Email: "vs23@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "AMST 2225",
    Title: "Controversies About Inequality",
    Name: "Joseph Sullivan",
    Email: "jfs325@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "AMST 2251",
    Title: "U.S. Immigration Narratives",
    Name: "Maria Cristina Garcia",
    Email: "mcg20@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "AMST 2401",
    Title: "Introduction to U.S. Latinx Literature",
    Name: "Debra Castillo",
    Email: "dac9@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "AMST 2600",
    Title: "Introduction to Native American Literature",
    Name: "Juliana Hu Pegues",
    Email: "jhp249@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "AMST 2640",
    Title: "Introduction to Asian American History",
    Name: "Derek Chang",
    Email: "dsc37@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "AMST 2650",
    Title: "Introduction to African American Literature",
    Name: "Derrick Spires",
    Email: "drs385@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "AMST 2669",
    Title: "American Political Thought",
    Name: "Jason Frank",
    Email: "jf273@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "AMST 2690",
    Title: "American Poetry Since 1850",
    Name: "George Hutchinson",
    Email: "gbh33@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "AMST 2810",
    Title: "Migration: Histories, Controversies, and Perspectives",
    Name: "Shannon Gleeson",
    Email: "smg338@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "AMST 2955",
    Title: "Socialism in America",
    Name: "Russell Rickford",
    Email: "rr447@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "AMST 3092",
    Title: "Strategic Advocacy: Lobbying and Interest Group Politics in Washington, D.C.",
    Name: "Ronald Christie",
    Email: "ric38@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "AMST 3121",
    Title: "Crime and Punishment",
    Name: "Joseph Margulies",
    Email: "jm347@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "AMST 3214",
    Title: "Dance in America: Cultures, Identities, and Fabrication",
    Name: "Juan Aldape Munoz",
    Email: "jma377@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "AMST 3281",
    Title: "Constitutional Politics",
    Name: "Dawn Chutkow",
    Email: "dmc66@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "AMST 3312",
    Title: "What was the Vietnam War?",
    Name: "Keith Taylor",
    Email: "kwt3@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "AMST 3330",
    Title: "Ways of Knowing: Indigenous and Place-Based Ecological Knowledge",
    Name: "Karim-Aly Kassam",
    Email: "ksk28@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "AMST 3358",
    Title: "Why Forget the Korean War?",
    Name: "Keith Taylor",
    Email: "kwt3@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "AMST 3360",
    Title: "American Drama and Theatre",
    Name: "Sara Warner",
    Email: "slw42@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "AMST 3430",
    Title: "History of the U.S. Civil War and Reconstruction",
    Name: "Edward Baptist",
    Email: "eeb36@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "AMST 3434",
    Title: "Underground Railroad Seminar",
    Name: "Gerard Aching",
    Email: "gla23@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "AMST 3562",
    Title: "Thinking from a Different Place: Indigenous Philosophies",
    Name: "Eric Cheyfitz",
    Email: "etc7@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "AMST 3617",
    Title: "Cornell Hip-Hop Collective",
    Name: "Moustapha Fall",
    Email: "mf773@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "AMST 3745",
    Title: "Parody",
    Name: "Nick Salvato",
    Email: "ngs9@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "AMST 3854",
    Title: "Special Topics in Regional Development and Globalization",
    Name: "Julie Ajinkya",
    Email: "ja265@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "AMST 3885",
    Title: "Race and War in History: Workers, Soldiers, Prisoners, Activists",
    Name: "Tejasvi Nagaraja",
    Email: "tn329@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "AMST 3980",
    Title: "Independent Research",
    Name: "",
    Email: ""
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "AMST 3990",
    Title: "Readings in American Studies",
    Name: "",
    Email: ""
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "AMST 4002",
    Title: "Diasporic and Indigenous Health",
    Name: "Jerel Ezell",
    Email: "jme246@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "AMST 4040",
    Title: "Fictions of Dictatorship",
    Name: "Christine Balance",
    Email: "cbb84@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "AMST 4203",
    Title: "Contesting Votes: Democracy and Citizenship Throughout U.S. History",
    Name: "Julilly Kohler-Hausmann",
    Email: "jkh224@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "AMST 4220",
    Title: "Locke and the Philosophies of Dispossession: Indigenous America's Interruptions and Resistances",
    Name: "Troy Richardson",
    Email: "tar37@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "AMST 4252",
    Title: "Migration and the Peopling of America: A Perennial Debate",
    Name: "",
    Email: ""
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "AMST 4283",
    Title: "Latino Politics as Racial Politics",
    Name: "Sergio Garcia-Rios",
    Email: "sig35@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "AMST 4533",
    Title: "The Lower East Side: Jews and the Immigrant City",
    Name: "Elissa Sampson",
    Email: "ejs362@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "AMST 4556",
    Title: "Decolonial Poetics and Aesthetics: Arts of Resistance in the Americas",
    Name: "Ananda Cohen-Aponte",
    Email: "aic42@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "AMST 4627",
    Title: "Contemporary Native American Fiction",
    Name: "Eric Cheyfitz",
    Email: "etc7@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "AMST 4674",
    Title: "Dispossession, Truth, and Reconciliation",
    Name: "Jon Parmenter",
    Email: "jwp35@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "AMST 4681",
    Title: "Cages and Creativity: Arts in Incarceration",
    Name: "Bruce Levitt",
    Email: "bal5@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "AMST 4993",
    Title: "Honors Essay Tutorial I",
    Name: "",
    Email: ""
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "AMST 4998",
    Title: "Inquiry in Politics and Policy",
    Name: "David Silbey",
    Email: "ds90@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "AMST 6003",
    Title: "Doing Research With Marginalized Populations",
    Name: "Jerel Ezell",
    Email: "jme246@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "AMST 6220",
    Title: "Locke and the Philosophies of Dispossession: Indigenous America's Interruptions and Resistances",
    Name: "Troy Richardson",
    Email: "tar37@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "AMST 6322",
    Title: "Readings in 20th Century African-American History",
    Name: "Russell Rickford",
    Email: "rr447@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "AMST 6585",
    Title: "American Political Thought",
    Name: "Jason Frank",
    Email: "jf273@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "AMST 6612",
    Title: "Minoritarian Aesthetics In-And Performance",
    Name: "Karen Jaime",
    Email: "kj12@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "AMST 6674",
    Title: "Dispossession, Truth, and Reconciliation",
    Name: "Jon Parmenter",
    Email: "jwp35@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "ANSC 1105",
    Title: "Careers in Animal Science",
    Name: "Debbie Cherney",
    Email: "djc6@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "ANSC 1130",
    Title: "Introduction to Captive Raptor Husbandry",
    Name: "Heather Huson",
    Email: "hjh3@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "ANSC 1200",
    Title: "Contemporary Dairy Industry Topics and Issues",
    Name: "Mike Van Amburgh",
    Email: "mev1@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "ANSC 2120",
    Title: "Animal Nutrition",
    Name: "Debbie Cherney",
    Email: "djc6@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "ANSC 2170",
    Title: "Public Communication in Animal Science",
    Name: "Joseph McFadden",
    Email: "jwm43@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "ANSC 2300",
    Title: "Introduction to Domestic Mammalian Behavior",
    Name: "Lindsay Goodale",
    Email: "lfg28@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "ANSC 2550",
    Title: "Dairy Study Trip to Italy",
    Name: "Mike Van Amburgh",
    Email: "mev1@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "ANSC 2650",
    Title: "Equine Biology and Management",
    Name: "Lindsay Goodale",
    Email: "lfg28@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "ANSC 3100",
    Title: "Introduction to Animal Welfare",
    Name: "Debbie Cherney",
    Email: "djc6@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "ANSC 3500",
    Title: "Meat",
    Name: "",
    Email: ""
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "ANSC 3540",
    Title: "Dairy Cattle Herd Health",
    Name: "Blake Nguyen",
    Email: "btn26@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "ANSC 3560",
    Title: "International Dairy Study Trip",
    Name: "Mike Van Amburgh",
    Email: "mev1@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "ANSC 3850",
    Title: "Dairy Sheep Management",
    Name: "Niko Kochendoerfer",
    Email: "nk584@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "ANSC 4110",
    Title: "Integrated Cattle Nutrition",
    Name: "Mike Van Amburgh",
    Email: "mev1@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "ANSC 4200",
    Title: "Nutrition of Felids and Canids",
    Name: "Nathalie Trottier",
    Email: "nlt35@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "ANSC 4270",
    Title: "Fundamentals of Endocrinology",
    Name: "Susan Quirk",
    Email: "smq1@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "ANSC 4310",
    Title: "Animal Genomics and Epigenomics",
    Name: "Ellie Duan",
    Email: "jd774@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "ANSC 4400",
    Title: "Tools for a Career in Research",
    Name: "Susan Quirk",
    Email: "smq1@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "ANSC 4510",
    Title: "Dairy Herd Business Management",
    Name: "Jason Karszes",
    Email: "jk57@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "ANSC 4880",
    Title: "Global Food, Energy, and Water Nexus – Engage the US, China, and India for Sustainability",
    Name: "Xingen Lei",
    Email: "xl20@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "ANSC 4940",
    Title: "Special Topics in Animal Science",
    Name: "Jeremy Allen",
    Email: "jja63@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "ANSC 4960",
    Title: "Internship in Animal Science",
    Name: "",
    Email: ""
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "ANSC 4970",
    Title: "Individual Study in Animal Science",
    Name: "",
    Email: ""
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "ANSC 4980",
    Title: "Undergraduate Teaching in Animal Science",
    Name: "",
    Email: ""
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "ANSC 4990",
    Title: "Undergraduate Research in Animal Science",
    Name: "",
    Email: ""
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "ANSC 5100",
    Title: "Introduction to Animal Welfare",
    Name: "Debbie Cherney",
    Email: "djc6@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "ANSC 5310",
    Title: "Animal Genomics and Epigenomics",
    Name: "Ellie Duan",
    Email: "jd774@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "ANSC 5540",
    Title: "Dairy Cattle Herd Health",
    Name: "Blake Nguyen",
    Email: "btn26@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "ANSC 5850",
    Title: "Dairy Sheep Management",
    Name: "Niko Kochendoerfer",
    Email: "nk584@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "ANSC 6110",
    Title: "Integrated Cattle Nutrition",
    Name: "Mike Van Amburgh",
    Email: "mev1@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "ANSC 6190",
    Title: "Division of Nutritional Sciences Seminar",
    Name: "Dan Berry",
    Email: "dcb37@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "ANSC 6200",
    Title: "Nutrition of Felids and Canids",
    Name: "Nathalie Trottier",
    Email: "nlt35@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "ANSC 6220",
    Title: "Graduate Student Research Updates",
    Name: "Joseph McFadden",
    Email: "jwm43@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "ANSC 6230",
    Title: "Reproductive Biology Journal Club",
    Name: "Yi DUPLI Ren",
    Email: "disableyar9@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "ANSC 6270",
    Title: "Fundamentals of Endocrinology",
    Name: "Susan Quirk",
    Email: "smq1@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "ANSC 6400",
    Title: "Graduate-Level Individual Study in Animal Science",
    Name: "",
    Email: ""
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "ANSC 6510",
    Title: "Dairy Herd Business Management",
    Name: "Jason Karszes",
    Email: "jk57@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "ANSC 6880",
    Title: "Global Food, Energy, and Water Nexus – Engage the US, China, and India for Sustainability",
    Name: "Xingen Lei",
    Email: "xl20@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "ANSC 7570",
    Title: "Current Concepts in Reproductive Biology",
    Name: "Yi DUPLI Ren",
    Email: "disableyar9@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "ANSC 7900",
    Title: "Graduate-Level Thesis Research",
    Name: "Yi DUPLI Ren",
    Email: "disableyar9@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "ANSC 8900",
    Title: "Master's Level Thesis Research",
    Name: "Yung-Fu Chang",
    Email: "yc42@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "ANSC 9900",
    Title: "Doctoral-Level Thesis Research",
    Name: "Sabine Mann",
    Email: "sm682@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "ANTHR 1101",
    Title: "FWS: Culture, Society, and Power",
    Name: "Stacey Langwick",
    Email: "sal54@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "ANTHR 1190",
    Title: "Humanity",
    Name: "Jonathan Boyarin",
    Email: "jab857@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "ANTHR 1200",
    Title: "Ancient Peoples and Places",
    Name: "John Henderson",
    Email: "jsh6@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "ANTHR 1400",
    Title: "Introduction to Sociocultural Anthropology",
    Name: "Andrew Willford",
    Email: "acw24@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "ANTHR 1700",
    Title: "Indigenous North America",
    Name: "Kurt Jordan",
    Email: "kj21@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "ANTHR 1900",
    Title: "Global Engagements: Living and Working in a Diverse World",
    Name: "Sofia Villenas",
    Email: "sav33@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "ANTHR 2010",
    Title: "Archaeology of Mesopotamia",
    Name: "Lori Khatchadourian",
    Email: "lk323@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "ANTHR 2310",
    Title: "The Natural History of Chimpanzees and the Origins of Politics",
    Name: "Adam Arcadi",
    Email: "apc13@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "ANTHR 2410",
    Title: "South Asian Diaspora",
    Name: "Viranjini Munasinghe",
    Email: "vpm1@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "ANTHR 2421",
    Title: "Worlding Sex and Gender",
    Name: "Saida Hodzic",
    Email: "sh888@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "ANTHR 2424",
    Title: "Culture and Mental Health: Anthropological Perspectives",
    Name: "Andrew Willford",
    Email: "acw24@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "ANTHR 2437",
    Title: "Economy, Power, and Inequality",
    Name: "Marina Welker",
    Email: "maw82@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "ANTHR 3000",
    Title: "Introduction to Anthropological Theory",
    Name: "Amiel Bize",
    Email: "abm252@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "ANTHR 3110",
    Title: "Documentary Production Fundamentals",
    Name: "Natasha Raheja",
    Email: "nr446@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "ANTHR 3401",
    Title: "Living Anthropology",
    Name: "Frederic Gleach",
    Email: "fwg1@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "ANTHR 3458",
    Title: "Specters: Derrida, Marx, and Other Ghosts",
    Name: "Jonathan Boyarin",
    Email: "jab857@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "ANTHR 3476",
    Title: "Anthropology and Friends: Philosophy and Psychology",
    Name: "Magnus Fiskesjo",
    Email: "nf42@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "ANTHR 3552",
    Title: "Genocide Today: The Erasure of Cultures",
    Name: "Magnus Fiskesjo",
    Email: "nf42@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "ANTHR 4005",
    Title: "Archaeology of Slavery and Indenture",
    Name: "",
    Email: ""
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "ANTHR 4013",
    Title: "Textual Ethnography",
    Name: "Seema Golestaneh",
    Email: "sg2327@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "ANTHR 4101",
    Title: "The Entangled Lives of Humans and Animals",
    Name: "Rachel Prentice",
    Email: "rep35@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "ANTHR 4200",
    Title: "Field Methods in Community-Engaged Archaeology",
    Name: "Samantha Sanft",
    Email: "sms625@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "ANTHR 4257",
    Title: "The Archaeology of Houses and Households",
    Name: "Caitlin Barrett",
    Email: "ceb329@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "ANTHR 4268",
    Title: "Aztecs and Their Empire: Myth, History, and Politics",
    Name: "John Henderson",
    Email: "jsh6@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "ANTHR 4403",
    Title: "Ethnographic Field Methods",
    Name: "Alex Nading",
    Email: "amn242@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "ANTHR 4419",
    Title: "Anthropology of Corporations",
    Name: "Marina Welker",
    Email: "maw82@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "ANTHR 4432",
    Title: "Queer Theory and Kinship Studies",
    Name: "Lucinda Ramberg",
    Email: "ler35@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "ANTHR 4442",
    Title: "Toxicity",
    Name: "Stacey Langwick",
    Email: "sal54@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "ANTHR 4450",
    Title: "Introduction to Biopolitics",
    Name: "Timothy Campbell",
    Email: "tcc9@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "ANTHR 4472",
    Title: "Pandemics Past and Pending",
    Name: "Juno Parrenas",
    Email: "jsp324@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "ANTHR 4499",
    Title: "Primitive Accumulation",
    Name: "Amiel Bize",
    Email: "abm252@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "ANTHR 4733",
    Title: "The Lower East Side: Jews and the Immigrant City",
    Name: "Elissa Sampson",
    Email: "ejs362@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "ANTHR 4790",
    Title: "Latinx Education Across the Americas",
    Name: "Sofia Villenas",
    Email: "sav33@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "ANTHR 4910",
    Title: "Independent Study: Undergrad I",
    Name: "Adam Arcadi",
    Email: "apc13@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "ANTHR 4920",
    Title: "Independent Study: Undergrad II",
    Name: "Adam Arcadi",
    Email: "apc13@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "ANTHR 4983",
    Title: "Honors Thesis Research",
    Name: "Adam Arcadi",
    Email: "apc13@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "ANTHR 4991",
    Title: "Honors Workshop I",
    Name: "Sofia Villenas",
    Email: "sav33@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "ANTHR 6020",
    Title: "History of Anthropological Thought",
    Name: "Lucinda Ramberg",
    Email: "ler35@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "ANTHR 6110",
    Title: "Documentary Production Fundamentals",
    Name: "Natasha Raheja",
    Email: "nr446@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "ANTHR 6403",
    Title: "Ethnographic Field Methods",
    Name: "Alex Nading",
    Email: "amn242@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "ANTHR 6458",
    Title: "Specters: Derrida, Marx, and Other Ghosts",
    Name: "Jonathan Boyarin",
    Email: "jab857@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "ANTHR 6476",
    Title: "Anthropology and Friends: Philosophy and Psychology",
    Name: "Magnus Fiskesjo",
    Email: "nf42@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "ANTHR 6482",
    Title: "Perspectives on the Nation",
    Name: "Viranjini Munasinghe",
    Email: "vpm1@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "ANTHR 6552",
    Title: "Genocide Today: The Erasure of Cultures",
    Name: "Magnus Fiskesjo",
    Email: "nf42@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "ANTHR 7005",
    Title: "Archaeology of Slavery and Indenture",
    Name: "",
    Email: ""
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "ANTHR 7013",
    Title: "Textual Ethnography",
    Name: "Seema Golestaneh",
    Email: "sg2327@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "ANTHR 7200",
    Title: "Field Methods in Community-Engaged Archaeology",
    Name: "Samantha Sanft",
    Email: "sms625@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "ANTHR 7257",
    Title: "The Archaeology of Houses and Households",
    Name: "Caitlin Barrett",
    Email: "ceb329@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "ANTHR 7268",
    Title: "Aztecs and Their Empire: Myth, History, and Politics",
    Name: "John Henderson",
    Email: "jsh6@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "ANTHR 7419",
    Title: "Anthropology of Corporations",
    Name: "Marina Welker",
    Email: "maw82@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "ANTHR 7432",
    Title: "Queer Theory and Kinship Studies",
    Name: "Lucinda Ramberg",
    Email: "ler35@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "ANTHR 7442",
    Title: "Toxicity",
    Name: "Stacey Langwick",
    Email: "sal54@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "ANTHR 7450",
    Title: "Introduction to Biopolitics",
    Name: "Timothy Campbell",
    Email: "tcc9@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "ANTHR 7472",
    Title: "Pandemics Past and Pending",
    Name: "Juno Parrenas",
    Email: "jsp324@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "ANTHR 7499",
    Title: "Primitive Accumulation",
    Name: "Amiel Bize",
    Email: "abm252@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "ANTHR 7520",
    Title: "Southeast Asia: Readings in Special Problems",
    Name: "Magnus Fiskesjo",
    Email: "nf42@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "ANTHR 7530",
    Title: "South Asia: Readings in Special Problems",
    Name: "David Holmberg",
    Email: "dhh8@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "ANTHR 7550",
    Title: "East Asia: Readings in Special Problems",
    Name: "",
    Email: ""
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "ANTHR 7790",
    Title: "Latinx Education Across the Americas",
    Name: "Sofia Villenas",
    Email: "sav33@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "ANTHR 7900",
    Title: "Department of Anthropology Colloquium",
    Name: "",
    Email: ""
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "ANTHR 7910",
    Title: "Independent Study: Grad I",
    Name: "Adam Arcadi",
    Email: "apc13@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "ANTHR 7920",
    Title: "Independent Study: Grad II",
    Name: "Adam Arcadi",
    Email: "apc13@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "ANTHR 7930",
    Title: "Independent Study: Grad III",
    Name: "Adam Arcadi",
    Email: "apc13@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "ARAB 1201",
    Title: "Elementary Arabic I",
    Name: "Makda Weatherspoon",
    Email: "mgw49@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "ARAB 1203",
    Title: "Intermediate Arabic I",
    Name: "Abdel-Fattah Shahda",
    Email: "as3859@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "ARAB 2201",
    Title: "Arabic for Heritage Speakers",
    Name: "Munther Younes",
    Email: "may2@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "ARAB 3201",
    Title: "Advanced Arabic I",
    Name: "Abdel-Fattah Shahda",
    Email: "as3859@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "ARAB 3210",
    Title: "Arabic Grammar and Writing (in Arabic)",
    Name: "Munther Younes",
    Email: "may2@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "ARAB 5509",
    Title: "Graduate Studies in Arabic",
    Name: "Munther Younes",
    Email: "may2@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "ARCH 1101",
    Title: "Design I",
    Name: "Sasa Zivkovic",
    Email: "sz382@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "ARCH 1501",
    Title: "Representation I: Freehand Architectural Drawing",
    Name: "Luben Dimcheff",
    Email: "ldd4@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "ARCH 1611",
    Title: "Environmental Systems I: Introduction to Sustainable Design",
    Name: "Timur Dogan",
    Email: "tkd9@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "ARCH 1801",
    Title: "History of Architecture I",
    Name: "Ioanna Theocharopoulou",
    Email: "it79@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "ARCH 1901",
    Title: "FWS: Topics in Architecture",
    Name: "Michael Moynihan",
    Email: "mm2858@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "ARCH 2101",
    Title: "Design III",
    Name: "Luben Dimcheff",
    Email: "ldd4@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "ARCH 2102",
    Title: "Design IV",
    Name: "Luben Dimcheff",
    Email: "ldd4@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "ARCH 2301",
    Title: "Architectural Analysis I: Buildings, Drawings, and Texts",
    Name: "Michael Jefferson",
    Email: "mnj23@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "ARCH 2613",
    Title: "Structural Systems",
    Name: "Mark Cruvellier",
    Email: "mrc14@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "ARCH 2614",
    Title: "Building Technology I: Materials and Methods",
    Name: "",
    Email: ""
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "ARCH 3101",
    Title: "Design V",
    Name: "Katharina Kral",
    Email: "kmk334@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "ARCH 3102",
    Title: "Design VI",
    Name: "Katharina Kral",
    Email: "kmk334@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "ARCH 3105",
    Title: "NOMA Student Design Competition",
    Name: "Tao DuFour",
    Email: "tns29@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "ARCH 3197",
    Title: "Special Investigations in Architectural Design",
    Name: "",
    Email: ""
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "ARCH 3301",
    Title: "Architectural Analysis II: Architecture, the City, and Landscape",
    Name: "",
    Email: ""
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "ARCH 3308",
    Title: "Special Topics in the Theory of Architecture I",
    Name: "",
    Email: ""
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "ARCH 3397",
    Title: "Special Investigations in the Theory of Architecture I",
    Name: "",
    Email: ""
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "ARCH 3497",
    Title: "Special Investigations in Architecture, Culture, and Society",
    Name: "",
    Email: ""
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "ARCH 3819",
    Title: "Special Topics in the History of Architecture and Urbanism",
    Name: "Maria Gonzalez Pendas",
    Email: "mg995@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "ARCH 3820",
    Title: "The Topography and Urban History of Rome in Antiquity and the Middle Ages",
    Name: "Jan Gadeyne",
    Email: "jg385@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "ARCH 3823",
    Title: "Urban Design, Architecture, and Art in Renaissance and Baroque Rome",
    Name: "Jeffrey Blanchard",
    Email: "jnb10@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "ARCH 3897",
    Title: "Special Investigations in History of Architecture and Urbanism",
    Name: "",
    Email: ""
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "ARCH 4101",
    Title: "Design VII",
    Name: "",
    Email: ""
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "ARCH 4102",
    Title: "Design VIII",
    Name: "",
    Email: ""
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "ARCH 4408",
    Title: "Special Topics in Architecture, Culture, and Society",
    Name: "",
    Email: ""
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "ARCH 4508",
    Title: "Special Investigations in Visual Representation",
    Name: "",
    Email: ""
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "ARCH 4509",
    Title: "Special Topics in Visual Representation I",
    Name: "",
    Email: ""
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "ARCH 4605",
    Title: "Special Topics in Construction",
    Name: "",
    Email: ""
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "ARCH 4697",
    Title: "Special Investigations in Construction",
    Name: "",
    Email: ""
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "ARCH 4698",
    Title: "Special Investigations in Environmental Systems and Conservation",
    Name: "",
    Email: ""
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "ARCH 4699",
    Title: "Special Investigations in Structures",
    Name: "",
    Email: ""
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "ARCH 4901",
    Title: "Undergraduate Thesis in the History of Architecture and Urbanism",
    Name: "",
    Email: ""
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "ARCH 5101",
    Title: "Design IX",
    Name: "",
    Email: ""
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "ARCH 5113",
    Title: "Core Design Studio III: Engaged Practices",
    Name: "",
    Email: ""
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "ARCH 5115",
    Title: "Vertical Design Option Studio",
    Name: "",
    Email: ""
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "ARCH 5116",
    Title: "Vertical Design Studio",
    Name: "",
    Email: ""
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "ARCH 5203",
    Title: "Multicultural Work Environments",
    Name: "Sean Anderson",
    Email: "ssa1@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "ARCH 5204",
    Title: "Professional Training",
    Name: "Nina Freedman",
    Email: "nf77@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "ARCH 5301",
    Title: "Theories and Analyses of Architecture I",
    Name: "Lily Chi",
    Email: "lhc3@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "ARCH 5402",
    Title: "Architecture, Culture, and Society",
    Name: "",
    Email: ""
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "ARCH 5511",
    Title: "Constructed Drawing I",
    Name: "Dillon Pranger",
    Email: "drp94@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "ARCH 5611",
    Title: "Environmental Systems I: Introduction to Sustainable Design",
    Name: "Timur Dogan",
    Email: "tkd9@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "ARCH 5613",
    Title: "Structural Systems",
    Name: "Mark Cruvellier",
    Email: "mrc14@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "ARCH 5614",
    Title: "Building Technology I: Materials and Methods",
    Name: "",
    Email: ""
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "ARCH 5801",
    Title: "History of Architecture I",
    Name: "Ioanna Theocharopoulou",
    Email: "it79@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "ARCH 5819",
    Title: "Special Topics in the History of Architecture and Urbanism",
    Name: "Maria Gonzalez Pendas",
    Email: "mg995@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "ARCH 5902",
    Title: "Design X Thesis",
    Name: "",
    Email: ""
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "ARCH 5903",
    Title: "Design IX Expanded Design Thesis",
    Name: "",
    Email: ""
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "ARCH 6109",
    Title: "Special Problems in Design",
    Name: "",
    Email: ""
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "ARCH 6307",
    Title: "Special Investigations in the Theory of Architecture II",
    Name: "",
    Email: ""
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "ARCH 6308",
    Title: "Special Topics in the Theory of Architecture II",
    Name: "",
    Email: ""
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "ARCH 6318",
    Title: "Mellon Design Justice Workshop",
    Name: "Karen Pinkus",
    Email: "kep44@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "ARCH 6408",
    Title: "Special Topics in Architecture, Culture, and Society",
    Name: "",
    Email: ""
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "ARCH 6409",
    Title: "Graduate Investigations in Architecture, Culture, and Society",
    Name: "",
    Email: ""
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "ARCH 6418",
    Title: "Mellon Design Justice Workshop",
    Name: "Karen Pinkus",
    Email: "kep44@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "ARCH 6508",
    Title: "Special Investigations in Visual Representation II",
    Name: "",
    Email: ""
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "ARCH 6509",
    Title: "Special Topics in Visual Representation II",
    Name: "",
    Email: ""
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "ARCH 6605",
    Title: "Special Topics in Construction",
    Name: "",
    Email: ""
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "ARCH 6609",
    Title: "Special Investigations in Structures",
    Name: "",
    Email: ""
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "ARCH 6805",
    Title: "Practicum",
    Name: "Lily Chi",
    Email: "lhc3@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "ARCH 6819",
    Title: "Seminar in Special Topics in the History of Architecture and Urbanism",
    Name: "Samia Henni",
    Email: "sh2494@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "ARCH 7113",
    Title: "Design C: Topic Studio",
    Name: "",
    Email: ""
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "ARCH 7151",
    Title: "Design Topic Research Studio: Matter Design Computation",
    Name: "",
    Email: ""
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "ARCH 7809",
    Title: "Graduate Independent Study in the History of Architecture and Urbanism",
    Name: "",
    Email: ""
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "ARCH 7903",
    Title: "Thesis or Research in Architectural Science",
    Name: "",
    Email: ""
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "ARCH 8151",
    Title: "Design Topic Research Studio III: Matter Design Computation",
    Name: "Jenny Sabin",
    Email: "jes557@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "ARCH 8903",
    Title: "Projects in Advanced Architectural Design",
    Name: "",
    Email: ""
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "ARCH 8906",
    Title: "Thesis in Advanced Architectural Design I",
    Name: "Jenny Sabin",
    Email: "jes557@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "ARCH 8907",
    Title: "Thesis in Advanced Architectural Design II",
    Name: "",
    Email: ""
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "ARCH 8911",
    Title: "Proseminar in Design Research",
    Name: "",
    Email: ""
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "ARCH 8912",
    Title: "Independent Design Thesis",
    Name: "",
    Email: ""
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "ARCH 8920",
    Title: "M.A. Essay Research",
    Name: "",
    Email: ""
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "ARCH 8921",
    Title: "M.A. Essay in the History of Architecture and Urbanism",
    Name: "",
    Email: ""
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "ARCH 9901",
    Title: "Ph.D. Dissertation in the History of Architecture and Urbanism",
    Name: "",
    Email: ""
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "ARKEO 1200",
    Title: "Ancient Peoples and Places",
    Name: "John Henderson",
    Email: "jsh6@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "ARKEO 1702",
    Title: "Great Discoveries in Greek and Roman Archaeology",
    Name: "Caitlin Barrett",
    Email: "ceb329@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "ARKEO 2010",
    Title: "Archaeology of Mesopotamia",
    Name: "Lori Khatchadourian",
    Email: "lk323@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "ARKEO 2620",
    Title: "Laboratory in Landscape Archaeology",
    Name: "Sherene Baugher",
    Email: "sbb8@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "ARKEO 2641",
    Title: "The Technology of Ancient Rome",
    Name: "Courtney Roby",
    Email: "car295@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "ARKEO 2661",
    Title: "Ancient Ships and Seafaring: Introduction to Nautical Archaeology",
    Name: "Christopher Monroe",
    Email: "cmm253@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "ARKEO 2700",
    Title: "Introduction to the Classical World in 24 Objects",
    Name: "Annetta Alexandridis",
    Email: "aa376@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "ARKEO 3000",
    Title: "Undergraduate Independent Study in Archaeology and Related Fields",
    Name: "Annetta Alexandridis",
    Email: "aa376@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "ARKEO 3090",
    Title: "Introduction to Dendrochronology",
    Name: "Sturt Manning",
    Email: "sm456@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "ARKEO 4005",
    Title: "Archaeology of Slavery and Indenture",
    Name: "",
    Email: ""
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "ARKEO 4020",
    Title: "Designing Archaeological Exhibits",
    Name: "Sherene Baugher",
    Email: "sbb8@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "ARKEO 4200",
    Title: "Field Methods in Community-Engaged Archaeology",
    Name: "Samantha Sanft",
    Email: "sms625@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "ARKEO 4257",
    Title: "The Archaeology of Houses and Households",
    Name: "Caitlin Barrett",
    Email: "ceb329@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "ARKEO 4268",
    Title: "Aztecs and Their Empire: Myth, History, and Politics",
    Name: "John Henderson",
    Email: "jsh6@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "ARKEO 4981",
    Title: "Honors Thesis Research",
    Name: "Annetta Alexandridis",
    Email: "aa376@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "ARKEO 4982",
    Title: "Honors Thesis Write-Up",
    Name: "Annetta Alexandridis",
    Email: "aa376@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "ARKEO 6000",
    Title: "Graduate Independent Study in Archaeology",
    Name: "Annetta Alexandridis",
    Email: "aa376@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "ARKEO 6020",
    Title: "Designing Archaeological Exhibits",
    Name: "Sherene Baugher",
    Email: "sbb8@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "ARKEO 6100",
    Title: "The Craft of Archaeology",
    Name: "Lori Khatchadourian",
    Email: "lk323@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "ARKEO 6620",
    Title: "Perspectives on Preservation",
    Name: "Katelin Olson",
    Email: "keo24@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "ARKEO 6755",
    Title: "Archaeological Dendrochronology",
    Name: "Sturt Manning",
    Email: "sm456@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "ARKEO 7000",
    Title: "CIAMS Core Seminar in Archaeological Theory and Method",
    Name: "Nerissa Russell",
    Email: "nr29@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "ARKEO 7005",
    Title: "Archaeology of Slavery and Indenture",
    Name: "",
    Email: ""
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "ARKEO 7200",
    Title: "Field Methods in Community-Engaged Archaeology",
    Name: "Samantha Sanft",
    Email: "sms625@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "ARKEO 7257",
    Title: "The Archaeology of Houses and Households",
    Name: "Caitlin Barrett",
    Email: "ceb329@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "ARKEO 7268",
    Title: "Aztecs and Their Empire: Myth, History, and Politics",
    Name: "John Henderson",
    Email: "jsh6@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "ARKEO 8901",
    Title: "Master's Thesis",
    Name: "Annetta Alexandridis",
    Email: "aa376@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "ART 1504",
    Title: "Introduction to Drawing in Rome",
    Name: "Luca Padroni",
    Email: "lp388@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "ART 1602",
    Title: "Introduction to Photography in Rome",
    Name: "Liana Miuccio",
    Email: "lm248@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "ART 1909",
    Title: "Internship Practicum",
    Name: "Renate Ferro",
    Email: "rtf9@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "ART 2103",
    Title: "First-Year Studio Research Workshop",
    Name: "Abigail Collins",
    Email: "arc292@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "ART 2201",
    Title: "Painting: Introduction to Painting",
    Name: "Carl Ostendarp",
    Email: "cao24@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "ART 2301",
    Title: "Print Media: Introduction to Print Media",
    Name: "Julianne Hunter",
    Email: "jth259@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "ART 2401",
    Title: "Introduction to Sculpture",
    Name: "Joanna Malinowska",
    Email: "jmm828@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "ART 2501",
    Title: "Drawing: Contemporary Art Practice Through Drawing",
    Name: "",
    Email: ""
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "ART 2601",
    Title: "Photography: Introduction to Photography",
    Name: "Dan Torop",
    Email: "dat247@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "ART 2701",
    Title: "Digital Media: Introduction to Digital Media",
    Name: "Renate Ferro",
    Email: "rtf9@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "ART 2900",
    Title: "Shop and Tech",
    Name: "Julianne Hunter",
    Email: "jth259@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "ART 3001",
    Title: "Rome Studio",
    Name: "Michael Ashkin",
    Email: "ma352@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "ART 3091",
    Title: "Directed Readings in Art",
    Name: "",
    Email: ""
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "ART 3092",
    Title: "Independent Studio in Art",
    Name: "Luca Padroni",
    Email: "lp388@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "ART 3093",
    Title: "Directed Research in Art",
    Name: "",
    Email: ""
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "ART 3099",
    Title: "Special Topics Studio",
    Name: "Maria Gonzalez Pendas",
    Email: "mg995@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "ART 3102",
    Title: "Contemporary Rome Seminar",
    Name: "Emily Jacir",
    Email: "egj26@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "ART 3299",
    Title: "Painting: Special Topics",
    Name: "",
    Email: ""
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "ART 3399",
    Title: "Print Media: Special Topics",
    Name: "",
    Email: ""
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "ART 3499",
    Title: "Sculpture: Special Topics",
    Name: "Leeza Meksin",
    Email: "evm28@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "ART 3699",
    Title: "Photography: Special Topics",
    Name: "Nidaa Aboulhosn",
    Email: "na525@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "ART 3799",
    Title: "Digital Media: Special Topics",
    Name: "Abigail Collins",
    Email: "arc292@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "ART 3803",
    Title: "Art History: Italian Cinema",
    Name: "Carolina Ciampaglia",
    Email: "cc863@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "ART 4003",
    Title: "Thesis I",
    Name: "Dean Erdmann",
    Email: "dle65@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "ART 4004",
    Title: "Thesis II",
    Name: "Dean Erdmann",
    Email: "dle65@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "ART 4100",
    Title: "Senior Seminar",
    Name: "Dan Torop",
    Email: "dat247@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "ART 5092",
    Title: "Graduate Independent Studio in Art",
    Name: "Paul Ramirez Jonas",
    Email: "par237@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "ART 6000",
    Title: "Graduate Seminar: Contemporary Theory and Art",
    Name: "",
    Email: ""
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "ART 7001",
    Title: "Graduate Studio I",
    Name: "Dan Torop",
    Email: "dat247@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "ART 8001",
    Title: "Graduate Studio III",
    Name: "Dan Torop",
    Email: "dat247@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "ARTH 1100",
    Title: "Art Histories: An Introduction",
    Name: "Benjamin Anderson",
    Email: "bwa32@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "ARTH 1173",
    Title: "FWS: Portraiture",
    Name: "Benjamin Anderson",
    Email: "bwa32@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "ARTH 1174",
    Title: "FWS: Photographs and Text",
    Name: "Ksenia Pavlenko",
    Email: "kp489@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "ARTH 2200",
    Title: "Introduction to the Classical World in 24 Objects",
    Name: "Annetta Alexandridis",
    Email: "aa376@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "ARTH 3250",
    Title: "Introduction to Dendrochronology",
    Name: "Sturt Manning",
    Email: "sm456@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "ARTH 3565",
    Title: "Art and Architecture of Colonial Latin America",
    Name: "Ananda Cohen-Aponte",
    Email: "aic42@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "ARTH 3650",
    Title: "History and Theory of Digital Art",
    Name: "Maria Fernandez",
    Email: "mf252@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "ARTH 3850",
    Title: "The Arts of Southeast Asia",
    Name: "Kaja McGowan",
    Email: "kmm22@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "ARTH 4101",
    Title: "Proseminar: Introduction to Methods",
    Name: "Annetta Alexandridis",
    Email: "aa376@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "ARTH 4110",
    Title: "Curatorial Practicum",
    Name: "Kaja McGowan",
    Email: "kmm22@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "ARTH 4153",
    Title: "Topics in Feminist Media Arts",
    Name: "Maria Fernandez",
    Email: "mf252@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "ARTH 4171",
    Title: "19th Century Art and Culture",
    Name: "Eric Denker",
    Email: "ed63@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "ARTH 4545",
    Title: "The Photobook",
    Name: "Andrew Moisey",
    Email: "am2798@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "ARTH 4556",
    Title: "Decolonial Poetics and Aesthetics: Arts of Resistance in the Americas",
    Name: "Ananda Cohen-Aponte",
    Email: "aic42@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "ARTH 4673",
    Title: "The Kinship of Repair: Asian and Asian American Artists in Collaboration",
    Name: "",
    Email: ""
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "ARTH 4720",
    Title: "Curating the British Empire",
    Name: "Jessica Ratcliff",
    Email: "jrr47@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "ARTH 4991",
    Title: "Independent Study",
    Name: "An-Yi Pan",
    Email: "ap76@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "ARTH 4998",
    Title: "Honors Work I",
    Name: "Annetta Alexandridis",
    Email: "aa376@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "ARTH 5991",
    Title: "Supervised Reading",
    Name: "Jolene Rickard",
    Email: "jkr33@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "ARTH 5993",
    Title: "Supervised Study",
    Name: "An-Yi Pan",
    Email: "ap76@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "ARTH 6000",
    Title: "Graduate Research Methods in Art History",
    Name: "Iftikhar Dadi",
    Email: "mid1@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "ARTH 6010",
    Title: "Curatorial Practicum",
    Name: "Kaja McGowan",
    Email: "kmm22@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "ARTH 6101",
    Title: "Proseminar: Introduction to Methods",
    Name: "Annetta Alexandridis",
    Email: "aa376@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "ARTH 6153",
    Title: "Topics in Feminist Media Arts",
    Name: "Maria Fernandez",
    Email: "mf252@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "ARTH 6545",
    Title: "The Photobook",
    Name: "Andrew Moisey",
    Email: "am2798@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "ARTH 6556",
    Title: "Decolonial Poetics and Aesthetics: Arts of Resistance in the Americas",
    Name: "Ananda Cohen-Aponte",
    Email: "aic42@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "ARTH 6563",
    Title: "Art and Architecture of Colonial Latin America",
    Name: "Ananda Cohen-Aponte",
    Email: "aic42@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "ARTH 6653",
    Title: "History and Theory of Digital Art",
    Name: "Maria Fernandez",
    Email: "mf252@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "ARTH 6673",
    Title: "The Kinship of Repair: Asian and Asian American Artists in Collaboration",
    Name: "",
    Email: ""
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "ARTH 6720",
    Title: "Curating the British Empire",
    Name: "Jessica Ratcliff",
    Email: "jrr47@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "ARTH 6850",
    Title: "The Arts of Southeast Asia",
    Name: "Kaja McGowan",
    Email: "kmm22@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "AS 1102",
    Title: "AS Advising Seminar",
    Name: "",
    Email: ""
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "AS 3112",
    Title: "Milstein Independent Study",
    Name: "",
    Email: ""
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "AS 3113",
    Title: "Milstein Studio",
    Name: "Austin Bunn",
    Email: "ab2346@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "AS 3200",
    Title: "Milstein Junior Project",
    Name: "Austin Bunn",
    Email: "ab2346@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "ASIAN 1103",
    Title: "FWS: Femininities: Asia",
    Name: "Arnika Fuhrmann",
    Email: "aif32@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "ASIAN 1106",
    Title: "FWS: The Great Epic of India",
    Name: "Lawrence McCrea",
    Email: "ljm223@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "ASIAN 1111",
    Title: "FWS: Literature, Culture, Religion",
    Name: "Liyu Hua",
    Email: "lh569@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "ASIAN 1192",
    Title: "Modern China",
    Name: "Yue Du",
    Email: "yd367@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "ASIAN 2208",
    Title: "Introduction to Southeast Asia",
    Name: "Chiara Formichi",
    Email: "cf398@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "ASIAN 2211",
    Title: "Introduction to Japan",
    Name: "Jane-Marie Law",
    Email: "jml16@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "ASIAN 2230",
    Title: "Introduction to China: Outsiders in History",
    Name: "Suyoung Son",
    Email: "ss994@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "ASIAN 2245",
    Title: "Gamelan in Indonesian History and Cultures",
    Name: "Christopher Miller",
    Email: "cjm299@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "ASIAN 2248",
    Title: "Buddhists in the Indian Ocean Arena: Past and Present",
    Name: "Anne Blackburn",
    Email: "amb242@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "ASIAN 2262",
    Title: "Medicine and Healing in China",
    Name: "Tj Hinrichs",
    Email: "th289@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "ASIAN 2269",
    Title: "Korean Popular Culture",
    Name: "Ivanna Yi",
    Email: "isy4@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "ASIAN 2271",
    Title: "China's Literary Heritage: An Introduction in Translation",
    Name: "Ding Xiang Warner",
    Email: "dxw2@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "ASIAN 2273",
    Title: "Religion and Ecological Sustainability",
    Name: "Jane-Marie Law",
    Email: "jml16@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "ASIAN 2274",
    Title: "Mughal India and the Early Modern World, c. 1500-1800",
    Name: "Thomas Travers",
    Email: "trt5@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "ASIAN 2283",
    Title: "Social Debates in China",
    Name: "Yue Du",
    Email: "yd367@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "ASIAN 2294",
    Title: "Of Saints, Poets, and Revolutionaries: Medieval and Modern Iran and Central Asia",
    Name: "Seema Golestaneh",
    Email: "sg2327@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "ASIAN 3303",
    Title: "Twentieth and Twenty-First Century Chinese Literature",
    Name: "Nick Admussen",
    Email: "na347@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "ASIAN 3312",
    Title: "What was the Vietnam War?",
    Name: "Keith Taylor",
    Email: "kwt3@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "ASIAN 3314",
    Title: "Korean Literature and Performance: From P'ansori to K-Pop",
    Name: "Ivanna Yi",
    Email: "isy4@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "ASIAN 3350",
    Title: "The Arts of Southeast Asia",
    Name: "Kaja McGowan",
    Email: "kmm22@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "ASIAN 3358",
    Title: "Why Forget the Korean War?",
    Name: "Keith Taylor",
    Email: "kwt3@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "ASIAN 3365",
    Title: "Genocide Today: The Erasure of Cultures",
    Name: "Magnus Fiskesjo",
    Email: "nf42@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "ASIAN 3380",
    Title: "The Asian Century: The Rise of China and India",
    Name: "Eli Friedman",
    Email: "edf48@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "ASIAN 3397",
    Title: "Monsoon Kingdoms: Pre-Modern Southeast Asian History",
    Name: "Eric Tagliacozzo",
    Email: "et54@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "ASIAN 4401",
    Title: "Asian Studies Honors Course",
    Name: "Nick Admussen",
    Email: "na347@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "ASIAN 4402",
    Title: "Asian Studies Honors: Senior Essay",
    Name: "Nick Admussen",
    Email: "na347@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "ASIAN 4403",
    Title: "Supervised Reading",
    Name: "Nick Admussen",
    Email: "na347@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "ASIAN 4451",
    Title: "Gender and Sexuality in Southeast Asian Cinema",
    Name: "Arnika Fuhrmann",
    Email: "aif32@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "ASIAN 4459",
    Title: "History of Book in China",
    Name: "Suyoung Son",
    Email: "ss994@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "ASIAN 4467",
    Title: "The Kinship of Repair: Asian and Asian American Artists in Collaboration",
    Name: "",
    Email: ""
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "ASIAN 6612",
    Title: "Japanese Bibliography and Research Methods",
    Name: "Daniel Mckee",
    Email: "djm53@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "ASIAN 6614",
    Title: "Korean Literature and Performance: From P'ansori to K-Pop",
    Name: "Ivanna Yi",
    Email: "isy4@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "ASIAN 6621",
    Title: "Literary Stricture",
    Name: "Nick Admussen",
    Email: "na347@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "ASIAN 6631",
    Title: "Gender and Sexuality in Southeast Asian Cinema",
    Name: "Arnika Fuhrmann",
    Email: "aif32@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "ASIAN 6660",
    Title: "History of Book in China",
    Name: "Suyoung Son",
    Email: "ss994@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "ASIAN 6665",
    Title: "Genocide Today: The Erasure of Cultures",
    Name: "Magnus Fiskesjo",
    Email: "nf42@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "ASIAN 6667",
    Title: "The Kinship of Repair: Asian and Asian American Artists in Collaboration",
    Name: "",
    Email: ""
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "ASIAN 6680",
    Title: "The Asian Century: The Rise of China and India",
    Name: "Eli Friedman",
    Email: "edf48@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "ASIAN 6697",
    Title: "Monsoon Kingdoms: Pre-Modern Southeast Asian History",
    Name: "Eric Tagliacozzo",
    Email: "et54@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "ASIAN 7703",
    Title: "Directed Research",
    Name: "Nick Admussen",
    Email: "na347@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "ASL 1101",
    Title: "American Sign Language I",
    Name: "Nora Owen",
    Email: "no225@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "ASL 2201",
    Title: "Intermediate American Sign Language I",
    Name: "Nora Owen",
    Email: "no225@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "ASL 2302",
    Title: "ASL Literature",
    Name: "Brenda Schertz",
    Email: "bs794@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "ASRC 1201",
    Title: "Elementary Arabic I",
    Name: "Makda Weatherspoon",
    Email: "mgw49@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "ASRC 1203",
    Title: "Intermediate Arabic I",
    Name: "Abdel-Fattah Shahda",
    Email: "as3859@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "ASRC 1500",
    Title: "Introduction to Africana Studies",
    Name: "Riche Richardson",
    Email: "rdr83@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "ASRC 1825",
    Title: "FWS: Educational Innovations in Africa and Diaspora",
    Name: "N'Dri Assie-Lumumba",
    Email: "na12@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "ASRC 1849",
    Title: "FWS: Race in Africa?",
    Name: "Afifa Ltifi",
    Email: "al2384@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "ASRC 1975",
    Title: "Caribbean Migrations I: Caribbean Arrivals",
    Name: "Gerard Aching",
    Email: "gla23@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "ASRC 2003",
    Title: "Africa: The Continent and Its People",
    Name: "N'Dri Assie-Lumumba",
    Email: "na12@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "ASRC 2020",
    Title: "Introduction to African Philosophy",
    Name: "",
    Email: ""
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "ASRC 2105",
    Title: "Arabic for Heritage Speakers",
    Name: "Munther Younes",
    Email: "may2@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "ASRC 2212",
    Title: "Caribbean Worlds",
    Name: "",
    Email: ""
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "ASRC 2542",
    Title: "The Making of Contemporary Africa",
    Name: "Judith Byfield",
    Email: "jab632@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "ASRC 2650",
    Title: "Introduction to African American Literature",
    Name: "Derrick Spires",
    Email: "drs385@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "ASRC 2670",
    Title: "The History and Politics of Modern Egypt",
    Name: "Ziad Fahmy",
    Email: "zaf3@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "ASRC 2955",
    Title: "Socialism in America",
    Name: "Russell Rickford",
    Email: "rr447@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "ASRC 3024",
    Title: "Grievance: In Three Texts",
    Name: "Grant Farred",
    Email: "gaf38@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "ASRC 3025",
    Title: "The Failure of the Postcolonial State",
    Name: "Grant Farred",
    Email: "gaf38@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "ASRC 3100",
    Title: "Advanced Arabic I",
    Name: "Abdel-Fattah Shahda",
    Email: "as3859@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "ASRC 3353",
    Title: "African Politics",
    Name: "Nicolas van de Walle",
    Email: "nv38@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "ASRC 3434",
    Title: "Underground Railroad Seminar",
    Name: "Gerard Aching",
    Email: "gla23@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "ASRC 3700",
    Title: "bell hooks Books: From Feminism to Autobiography",
    Name: "",
    Email: ""
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "ASRC 3947",
    Title: "Race and World Politics",
    Name: "Oumar Ba",
    Email: "ob99@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "ASRC 4002",
    Title: "Diasporic and Indigenous Health",
    Name: "Jerel Ezell",
    Email: "jme246@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "ASRC 4900",
    Title: "Honors Thesis",
    Name: "",
    Email: ""
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "ASRC 4902",
    Title: "Independent Study",
    Name: "Judith Byfield",
    Email: "jab632@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "ASRC 6003",
    Title: "Doing Research With Marginalized Populations",
    Name: "Jerel Ezell",
    Email: "jme246@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "ASRC 6022",
    Title: "Racial and Ethnic Politics in the U.S.",
    Name: "Jamila Michener",
    Email: "jm2362@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "ASRC 6207",
    Title: "Black Feminist Theories: Sexuality, Creativity, and Power",
    Name: "Carole Boyce Davies",
    Email: "ceb278@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "ASRC 6322",
    Title: "Readings in 20th Century African-American History",
    Name: "Russell Rickford",
    Email: "rr447@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "ASRC 6464",
    Title: "Underground Railroad Seminar",
    Name: "Gerard Aching",
    Email: "gla23@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "ASRC 6900",
    Title: "Independent Study",
    Name: "",
    Email: ""
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "ASRC 6902",
    Title: "Africana Studies Graduate Seminar",
    Name: "Siba Grovogui",
    Email: "sng52@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "ASTRO 1101",
    Title: "From New Worlds to Black Holes",
    Name: "Lisa Kaltenegger",
    Email: "lk433@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "ASTRO 1103",
    Title: "From New Worlds to Black Holes",
    Name: "Lisa Kaltenegger",
    Email: "lk433@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "ASTRO 2202",
    Title: "A Spacecraft Tour of the Solar System: Science, Policy and Exploration",
    Name: "Alexander Hayes",
    Email: "agh4@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "ASTRO 2211",
    Title: "Astronomy: Stars, Galaxies, and Cosmology",
    Name: "Terry Herter",
    Email: "tlh10@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "ASTRO 4410",
    Title: "Multiwavelength Astronomical Techniques",
    Name: "Jim Cordes",
    Email: "jmc33@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "ASTRO 4431",
    Title: "Physics of Stars, Neutron Stars and Black Holes",
    Name: "Ira Wasserman",
    Email: "imw2@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "ASTRO 4445",
    Title: "Introduction to General Relativity",
    Name: "Eanna Flanagan",
    Email: "eef3@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "ASTRO 4940",
    Title: "Independent Study in Astronomy",
    Name: "Rachel Bean",
    Email: "reb55@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "ASTRO 6509",
    Title: "General Relativity I",
    Name: "Thomas Hartman",
    Email: "th447@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "ASTRO 6511",
    Title: "Physics of Black Holes, White Dwarfs, and Neutron Stars",
    Name: "Dong Lai",
    Email: "dl57@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "ASTRO 6555",
    Title: "Interstellar Medium",
    Name: "",
    Email: ""
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "ASTRO 6599",
    Title: "Cosmology",
    Name: "Nicholas Battaglia",
    Email: "nb572@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "ASTRO 6940",
    Title: "Advanced Study and Research",
    Name: "Rachel Bean",
    Email: "reb55@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "ASTRO 7683",
    Title: "Seminar: Astronomy and Planetary Science",
    Name: "Nicholas Battaglia",
    Email: "nb572@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "ASTRO 7690",
    Title: "Computational Physics",
    Name: "Tomas Arias",
    Email: "taa2@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "BCS 1131",
    Title: "Elementary Bosnian-Croatian-Serbian I",
    Name: "Emma Britton",
    Email: "erb248@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "BCS 2133",
    Title: "Intermediate Bosnian-Croatian-Serbian I",
    Name: "Emma Britton",
    Email: "erb248@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "BEE 1050",
    Title: "The BEE Experience",
    Name: "Jean Hunter",
    Email: "jbh5@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "BEE 2510",
    Title: "Engineering Processes for Environmental Sustainability",
    Name: "Jillian Goldfarb",
    Email: "jlg459@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "BEE 2600",
    Title: "Principles of Biological Engineering",
    Name: "John March",
    Email: "jcm224@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "BEE 3280",
    Title: "Systems and Synthetic Biology for Sustainable Energy",
    Name: "Buz Barstow",
    Email: "bmb35@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "BEE 3310",
    Title: "Bio-Fluid Mechanics",
    Name: "Chris Roh",
    Email: "cr296@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "BEE 3500",
    Title: "Heat and Mass Transfer in Biological Engineering",
    Name: "Ashim Datta",
    Email: "akd1@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "BEE 3900",
    Title: "Bio-Robotics",
    Name: "Sunghwan Jung",
    Email: "sj737@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "BEE 4110",
    Title: "Hydrologic Engineering in a Changing Climate",
    Name: "Scott Steinschneider",
    Email: "ss3378@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "BEE 4270",
    Title: "Water Measurement and Analysis Methods",
    Name: "Tamme Steenhuis",
    Email: "tss1@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "BEE 4550",
    Title: "Biologically Inspired Microsystems Engineering",
    Name: "Mingming Wu",
    Email: "mw272@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "BEE 4590",
    Title: "Capstone Design in Biological Engineering",
    Name: "Sunghwan Jung",
    Email: "sj737@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "BEE 4730",
    Title: "Watershed Engineering",
    Name: "Todd Walter",
    Email: "mtw5@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "BEE 4750",
    Title: "Environmental Systems Analysis",
    Name: "Vivek Srikrishnan",
    Email: "vs498@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "BEE 4800",
    Title: "Atmospheric Chemistry: From Air Pollution to Global Change",
    Name: "Peter Hess",
    Email: "pgh25@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "BEE 4970",
    Title: "Individual Study in Biological and Environmental Engineering",
    Name: "",
    Email: ""
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "BEE 4980",
    Title: "Undergraduate Teaching",
    Name: "",
    Email: ""
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "BEE 4990",
    Title: "Undergraduate Research",
    Name: "",
    Email: ""
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "BEE 4993",
    Title: "Honors Thesis",
    Name: "",
    Email: ""
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "BEE 4994",
    Title: "Research for Visiting Students",
    Name: "",
    Email: ""
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "BEE 5270",
    Title: "Water Measurement and Analysis Methods",
    Name: "Tamme Steenhuis",
    Email: "tss1@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "BEE 5280",
    Title: "Systems and Synthetic Biology for Sustainable Energy",
    Name: "Buz Barstow",
    Email: "bmb35@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "BEE 5310",
    Title: "Bio-Fluid Mechanics",
    Name: "Chris Roh",
    Email: "cr296@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "BEE 5459",
    Title: "Energy Seminar I",
    Name: "C. Anderson",
    Email: "cla28@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "BEE 5500",
    Title: "Heat and Mass Transfer in Biological Engineering",
    Name: "Ashim Datta",
    Email: "akd1@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "BEE 5590",
    Title: "Capstone Design in Biological Engineering",
    Name: "Sunghwan Jung",
    Email: "sj737@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "BEE 5730",
    Title: "Watershed Engineering",
    Name: "Todd Walter",
    Email: "mtw5@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "BEE 5750",
    Title: "Environmental Systems Analysis",
    Name: "Vivek Srikrishnan",
    Email: "vs498@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "BEE 5900",
    Title: "Bio-Robotics",
    Name: "Sunghwan Jung",
    Email: "sj737@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "BEE 5951",
    Title: "Master of Engineering Design Project",
    Name: "Beth Ahner",
    Email: "baa7@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "BEE 6110",
    Title: "Hydrologic Engineering in a Changing Climate",
    Name: "Scott Steinschneider",
    Email: "ss3378@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "BEE 6400",
    Title: "Advanced Topics in Biomaterials",
    Name: "Minglin Ma",
    Email: "mm826@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "BEE 6550",
    Title: "Biologically Inspired Microsystems Engineering",
    Name: "Mingming Wu",
    Email: "mw272@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "BEE 6800",
    Title: "Atmospheric Chemistry: From Air Pollution to Global Change",
    Name: "Peter Hess",
    Email: "pgh25@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "BEE 6970",
    Title: "Graduate Individual Study in Biological and Environmental Engineering",
    Name: "Beth Ahner",
    Email: "baa7@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "BEE 7000",
    Title: "Orientation to Graduate Study",
    Name: "Peter Hess",
    Email: "pgh25@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "BEE 7710",
    Title: "Soil and Water Engineering Seminar",
    Name: "Todd Walter",
    Email: "mtw5@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "BENGL 1100",
    Title: "Elements of Bengali Language and Culture",
    Name: "Razima Chowdhury",
    Email: "rc856@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "BENGL 1121",
    Title: "Elementary Bengali I",
    Name: "Razima Chowdhury",
    Email: "rc856@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "BENGL 2201",
    Title: "Intermediate Bengali I",
    Name: "Razima Chowdhury",
    Email: "rc856@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "BENGL 3301",
    Title: "Advanced Bengali I",
    Name: "Razima Chowdhury",
    Email: "rc856@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "BENGL 5509",
    Title: "Graduate Studies in Bengali",
    Name: "Razima Chowdhury",
    Email: "rc856@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "BIOAP 1100",
    Title: "Domestic Animal Biology",
    Name: "Jeremy Allen",
    Email: "jja63@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "BIOAP 3110",
    Title: "Principles of Animal Physiology",
    Name: "Mark Roberson",
    Email: "msr14@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "BIOAP 3190",
    Title: "Laboratory in Physiology",
    Name: "Andrew Yen",
    Email: "ay13@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "BIOAP 4270",
    Title: "Fundamentals of Endocrinology",
    Name: "Susan Quirk",
    Email: "smq1@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "BIOAP 4980",
    Title: "Teaching Experience",
    Name: "",
    Email: ""
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "BIOAP 6100",
    Title: "By Scientific Design: Skill Building for a Career in the Life Sciences",
    Name: "Dave Lin",
    Email: "dml45@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "BIOAP 6270",
    Title: "Fundamentals of Endocrinology",
    Name: "Susan Quirk",
    Email: "smq1@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "BIOAP 7570",
    Title: "Current Concepts in Reproductive Biology",
    Name: "Yi DUPLI Ren",
    Email: "disableyar9@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "BIOEE 1150",
    Title: "Techniques of Avian Specimen Preparation",
    Name: "Mary Margaret Ferraro",
    Email: "mlf97@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "BIOEE 1180",
    Title: "Evolution",
    Name: "Andrew Moeller",
    Email: "ahm226@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "BIOEE 1540",
    Title: "Introductory Oceanography",
    Name: "Bruce Monger",
    Email: "bcm3@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "BIOEE 1560",
    Title: "Introductory Oceanography with Laboratory",
    Name: "Bruce Monger",
    Email: "bcm3@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "BIOEE 1610",
    Title: "Introductory Biology: Ecology and the Environment",
    Name: "Justin St. Juliana",
    Email: "jrs626@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "BIOEE 1640",
    Title: "FWS: Topics in Ecology and Evolutionary Biology",
    Name: "Catalina Mejia",
    Email: "cm953@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "BIOEE 1780",
    Title: "An Introduction to Evolutionary Biology and Diversity",
    Name: "Abby Drake",
    Email: "agd76@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "BIOEE 1781",
    Title: "Introduction to Evolution and Diversity",
    Name: "Lina Arcila Hernandez",
    Email: "lma84@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "BIOEE 2525",
    Title: "Ecology and Conservation of Wildlife in the Neotropics",
    Name: "Leonardo Campagna",
    Email: "lc736@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "BIOEE 2640",
    Title: "Tropical Field Ornithology",
    Name: "Andre Dhondt",
    Email: "aad4@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "BIOEE 3610",
    Title: "Advanced Ecology",
    Name: "Stephen Ellner",
    Email: "spe2@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "BIOEE 3611",
    Title: "Field Ecology",
    Name: "Anurag Agrawal",
    Email: "aa337@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "BIOEE 3730",
    Title: "Biodiversity and Biology of the Marine Invertebrates",
    Name: "Leslie Babonis",
    Email: "lsb257@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "BIOEE 3780",
    Title: "Digital Morphology through CT",
    Name: "Willy Bemis",
    Email: "web24@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "BIOEE 4550",
    Title: "Insect Ecology",
    Name: "Jennifer Thaler",
    Email: "jst37@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "BIOEE 4570",
    Title: "Limnology: Ecology of Lakes, Lectures",
    Name: "Meredith Holgerson",
    Email: "mah543@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "BIOEE 4571",
    Title: "Limnology: Ecology of Lakes, Laboratory",
    Name: "Meredith Holgerson",
    Email: "mah543@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "BIOEE 4760",
    Title: "Ichthyology: Biology of Fishes, Lectures",
    Name: "Willy Bemis",
    Email: "web24@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "BIOEE 4761",
    Title: "Ichthyology: Biology of Fishes, Laboratory",
    Name: "Willy Bemis",
    Email: "web24@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "BIOEE 4940",
    Title: "Special Topics in Ecology and Evolutionary Biology",
    Name: "Irby Lovette",
    Email: "ijl2@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "BIOEE 4980",
    Title: "Teaching Experience",
    Name: "Vanya Rohwer",
    Email: "vgr7@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "BIOEE 6900",
    Title: "Seminar in Ecology and Evolution of Infectious Diseases",
    Name: "Megan Greischar",
    Email: "mag469@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "BIOEE 7600",
    Title: "Special Topics in Evolution and Ecology",
    Name: "",
    Email: ""
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "BIOEE 7640",
    Title: "Plant-Insect Interactions Seminar",
    Name: "Anurag Agrawal",
    Email: "aa337@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "BIOEE 7670",
    Title: "Current Topics in Ecology and Evolutionary Biology",
    Name: "Alexander Flecker",
    Email: "asf3@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "BIOEE 7800",
    Title: "Graduate Seminar in Ornithology",
    Name: "Irby Lovette",
    Email: "ijl2@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "BIOEE 9990",
    Title: "Ph.D. Dissertation Research",
    Name: "Anurag Agrawal",
    Email: "aa337@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "BIOG 1044",
    Title: "Academic Support for BIOG 1440: Physiology",
    Name: "Elizabeth Ogata",
    Email: "emo73@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "BIOG 1140",
    Title: "Foundations of Biology",
    Name: "Robert Turgeon",
    Email: "ert2@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "BIOG 1250",
    Title: "Biology Seminar",
    Name: "Kate LeCroy",
    Email: "kl476@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "BIOG 1440",
    Title: "Introductory Biology: Comparative Physiology",
    Name: "Nicolas Buchon",
    Email: "nsb56@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "BIOG 1445",
    Title: "Introduction to Comparative Anatomy and Physiology, Individualized Instruction",
    Name: "Darlene Campbell",
    Email: "dc78@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "BIOG 1500",
    Title: "Investigative Biology Laboratory",
    Name: "Mark Sarvary",
    Email: "mas245@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "BIOG 2000",
    Title: "Special Studies in Biology",
    Name: "",
    Email: ""
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "BIOG 2200",
    Title: "Biology Scholars Program Sophomore Seminar",
    Name: "Cole Gilbert",
    Email: "cg23@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "BIOG 2400",
    Title: "Developing a Reflective Study Group Leader Practice",
    Name: "Jeff McCaffrey",
    Email: "jm298@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "BIOG 2990",
    Title: "Introduction to Research Methods in Biology",
    Name: "",
    Email: ""
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "BIOG 3100",
    Title: "Preparing HHMI-CURT Scholars for Research",
    Name: "Avery August",
    Email: "aa749@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "BIOG 3500",
    Title: "Introduction to Applied Science Communication: Digital Platforms and Public Engagement",
    Name: "Mark Sarvary",
    Email: "mas245@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "BIOG 4970",
    Title: "Independent Study in Biology",
    Name: "",
    Email: ""
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "BIOG 4980",
    Title: "Teaching Experience",
    Name: "",
    Email: ""
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "BIOG 4990",
    Title: "Independent Undergraduate Research in Biology",
    Name: "",
    Email: ""
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "BIOG 6500",
    Title: "Pedagogy, Active Learning, and Education Research Training in the Biology",
    Name: "Frank Castelli",
    Email: "frc5@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "BIOMG 1035",
    Title: "Academic Support for BIOMG 1350: Cell and Developmental Biology",
    Name: "Elizabeth Ogata",
    Email: "emo73@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "BIOMG 1350",
    Title: "Introductory Biology: Cell and Developmental Biology",
    Name: "Tim Huffaker",
    Email: "tch4@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "BIOMG 2800",
    Title: "Lectures in Genetics and Genomics",
    Name: "Siu Lee",
    Email: "ssl29@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "BIOMG 2801",
    Title: "Laboratory in Genetics and Genomics",
    Name: "Kristina Blake-Hodek",
    Email: "kab69@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "BIOMG 3300",
    Title: "Principles of Biochemistry, Individualized Instruction",
    Name: "Kevin Siegenthaler",
    Email: "kds89@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "BIOMG 3310",
    Title: "Principles of Biochemistry: Proteins and Metabolism",
    Name: "Linda Nicholson",
    Email: "lkn2@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "BIOMG 3340",
    Title: "Computer Graphics and Molecular Biology",
    Name: "Kevin Siegenthaler",
    Email: "kds89@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "BIOMG 4000",
    Title: "Genomics",
    Name: "John Schimenti",
    Email: "jcs92@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "BIOMG 4310",
    Title: "Frontiers in Biophysics",
    Name: "Toshi Kawate",
    Email: "tk499@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "BIOMG 4330",
    Title: "Research Papers in Cell Biology",
    Name: "Volker Vogt",
    Email: "vmv1@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "BIOMG 4380",
    Title: "RNA in Biology and Medicine",
    Name: "Ailong Ke",
    Email: "ak425@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "BIOMG 4400",
    Title: "Laboratory in Biochemistry and Molecular Biology",
    Name: "Stephen Jesch",
    Email: "saj23@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "BIOMG 4870",
    Title: "Human Genomics",
    Name: "Andrew Clark",
    Email: "ac347@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "BIOMG 4980",
    Title: "Teaching Experience",
    Name: "",
    Email: ""
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "BIOMG 4981",
    Title: "Teaching Experience in Principles of Biochemistry, Indv",
    Name: "Kevin Siegenthaler",
    Email: "kds89@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "BIOMG 4982",
    Title: "Teaching Leadership in Principles of Biochemistry, Indv",
    Name: "Kevin Siegenthaler",
    Email: "kds89@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "BIOMG 5350",
    Title: "Introductory Biology: Cell and Developmental Biology",
    Name: "Tim Huffaker",
    Email: "tch4@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "BIOMG 6000",
    Title: "Genomics",
    Name: "John Schimenti",
    Email: "jcs92@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "BIOMG 6300",
    Title: "Principles of Biochemistry, Individualized Instruction",
    Name: "Kevin Siegenthaler",
    Email: "kds89@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "BIOMG 6310",
    Title: "Protein Structure and Function",
    Name: "Elizabeth Kellogg",
    Email: "ehk68@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "BIOMG 6311",
    Title: "Principles of Biochemistry: Proteins and Metabolism",
    Name: "Linda Nicholson",
    Email: "lkn2@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "BIOMG 6312",
    Title: "Frontiers in Biophysics",
    Name: "Toshi Kawate",
    Email: "tk499@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "BIOMG 6330",
    Title: "DNA Biology",
    Name: "Eric Alani",
    Email: "eea3@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "BIOMG 6380",
    Title: "RNA in Biology and Medicine",
    Name: "Ailong Ke",
    Email: "ak425@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "BIOMG 6400",
    Title: "Laboratory in Biochemistry and Molecular Biology",
    Name: "Stephen Jesch",
    Email: "saj23@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "BIOMG 6410",
    Title: "Laboratory in Plant Molecular Biology",
    Name: "Klaas Van Wijk",
    Email: "kv35@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "BIOMG 6871",
    Title: "Human Genomics",
    Name: "Andrew Clark",
    Email: "ac347@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "BIOMG 7800",
    Title: "Current Topics in Genetics and Development",
    Name: "Charles Aquadro",
    Email: "cfa1@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "BIOMG 7810",
    Title: "Critical Thinking in Genetics and Development",
    Name: "Cedric Feschotte",
    Email: "cf458@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "BIOMG 7860",
    Title: "Research Seminar in Genetics and Development",
    Name: "Chun Han",
    Email: "ch599@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "BIOMG 7870",
    Title: "Seminar in Genetics and Development",
    Name: "Chun Han",
    Email: "ch599@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "BIOMG 7940",
    Title: "Current Topics in Biochemistry, Molecular and Cell Biology",
    Name: "Charles Aquadro",
    Email: "cfa1@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "BIOMG 8300",
    Title: "Biochemistry Seminar",
    Name: "Carolyn Sevier",
    Email: "css224@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "BIOMG 8310",
    Title: "Advanced Biochemical Methods I",
    Name: "Yuxin Mao",
    Email: "ym253@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "BIOMG 8330",
    Title: "Research Seminar in Biochemistry",
    Name: "Scott Emr",
    Email: "sde26@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "BIOMI 1120",
    Title: "Microbes, the Earth, and Everything",
    Name: "Daniel Buckley",
    Email: "dhb28@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "BIOMI 2100",
    Title: "Genesis",
    Name: "Shami Chatterjee",
    Email: "sc99@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "BIOMI 2500",
    Title: "Public Health Microbiology",
    Name: "Steve Winans",
    Email: "scw2@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "BIOMI 2900",
    Title: "General Microbiology Lectures",
    Name: "Tobias Doerr",
    Email: "td348@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "BIOMI 2911",
    Title: "General Microbiology Laboratory",
    Name: "Brian Wendel",
    Email: "bmw233@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "BIOMI 2950",
    Title: "Biology of Infectious Disease: From Molecules to Ecosystems",
    Name: "Tory Hendry",
    Email: "th572@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "BIOMI 3210",
    Title: "Human Microbes and Health",
    Name: "Anthony Hay",
    Email: "agh5@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "BIOMI 3940",
    Title: "Applied and Food Microbiology",
    Name: "Patrick Gibney",
    Email: "pag235@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "BIOMI 4090",
    Title: "Principles of Virology",
    Name: "John Parker",
    Email: "jsp7@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "BIOMI 4310",
    Title: "Medical Parasitology",
    Name: "Dwight Bowman",
    Email: "ddb3@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "BIOMI 4850",
    Title: "Bacterial Genetics",
    Name: "Joe Peters",
    Email: "jep48@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "BIOMI 4980",
    Title: "Teaching Experience",
    Name: "Kathleen Hefferon",
    Email: "klh22@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "BIOMI 7960",
    Title: "Current Topics in Microbiology",
    Name: "Dwight Bowman",
    Email: "ddb3@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "BIOMI 7970",
    Title: "Scientific Communication Skills",
    Name: "John Helmann",
    Email: "jdh9@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "BIOMI 7980",
    Title: "Graduate Research Seminar in Microbiology",
    Name: "Joe Peters",
    Email: "jep48@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "BIOMI 7990",
    Title: "Microbiology Seminar",
    Name: "Tobias Doerr",
    Email: "td348@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "BIOMS 3110",
    Title: "Principles of Animal Physiology",
    Name: "Mark Roberson",
    Email: "msr14@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "BIOMS 3190",
    Title: "Laboratory in Physiology",
    Name: "Andrew Yen",
    Email: "ay13@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "BIOMS 4090",
    Title: "Principles of Virology",
    Name: "John Parker",
    Email: "jsp7@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "BIOMS 4150",
    Title: "Essential Immunology",
    Name: "Beth Rhoades",
    Email: "err23@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "BIOMS 4310",
    Title: "Medical Parasitology",
    Name: "Dwight Bowman",
    Email: "ddb3@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "BIOMS 4400",
    Title: "Tools for a Career in Research",
    Name: "Susan Quirk",
    Email: "smq1@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "BIOMS 4980",
    Title: "Undergraduate Supervised Teaching",
    Name: "",
    Email: ""
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "BIOMS 6150",
    Title: "Essential Immunology",
    Name: "Beth Rhoades",
    Email: "err23@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "BIOMS 6151",
    Title: "Essential Immunology Research Methods and Design",
    Name: "Cynthia Leifer",
    Email: "cal59@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "BIOMS 7900",
    Title: "Seminars in Stem Cell Research",
    Name: "Alexander Nikitin",
    Email: "an58@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "BIONB 1220",
    Title: "FWS: Special Topics in Neurobiology and Behavior",
    Name: "Raunak Sen",
    Email: "rs2533@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "BIONB 2210",
    Title: "Neurobiology and Behavior I: Introduction to Behavior",
    Name: "Shelby Dietz",
    Email: "sbd3@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "BIONB 3220",
    Title: "Hormones and Behavior",
    Name: "Alexander Ophir",
    Email: "ago25@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "BIONB 3240",
    Title: "Behavioral Neuroscience Laboratory",
    Name: "David Smith",
    Email: "dms248@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "BIONB 3300",
    Title: "Introduction to Computational Neuroscience",
    Name: "Christiane Linster",
    Email: "cl243@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "BIONB 4200",
    Title: "Topics in Neurobiology and Behavior",
    Name: "Ronald Harris-Warrick",
    Email: "rmh4@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "BIONB 4320",
    Title: "Neural Circuits for Motor Control in Health and Disease",
    Name: "Jesse Goldberg",
    Email: "jhg285@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "BIONB 4330",
    Title: "Topics in Cognitive Science",
    Name: "Shimon Edelman",
    Email: "se37@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "BIONB 4720",
    Title: "Visual Ecology",
    Name: "Ben Sandkam",
    Email: "bs625@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "BIONB 7200",
    Title: "Advanced Topics in Neurobiology and Behavior",
    Name: "Ben Sandkam",
    Email: "bs625@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "BIONB 7201",
    Title: "Research Design in the Study of Animal Social Behavior",
    Name: "Mike Webster",
    Email: "msw244@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "BIONB 7202",
    Title: "Topics in Neural Basis of Behavior",
    Name: "Joseph Fetcho",
    Email: "jrf49@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "BIONB 7210",
    Title: "Introductory Graduate Survey in Neurobiology and Behavior",
    Name: "Jesse Goldberg",
    Email: "jhg285@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "BIONB 7212",
    Title: "Professional Development for Biology Graduate Students",
    Name: "",
    Email: ""
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "BIONB 7640",
    Title: "Plant-Insect Interactions Seminar",
    Name: "Anurag Agrawal",
    Email: "aa337@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "BME 1310",
    Title: "Introduction to Biomedical Engineering",
    Name: "Esak Lee",
    Email: "el767@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "BME 2000",
    Title: "Biomedical Transport Phenomena",
    Name: "Peter Doerschuk",
    Email: "pd83@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "BME 2081",
    Title: "Experiential Learning Seminar II",
    Name: "Steven Adie",
    Email: "sga42@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "BME 2210",
    Title: "Biomaterials: Foundations and Application in Medicine",
    Name: "Mridusmita Saikia",
    Email: "ms2855@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "BME 3010",
    Title: "Cellular Principles of Biomedical Engineering",
    Name: "Mridusmita Saikia",
    Email: "ms2855@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "BME 3030",
    Title: "Biomedical Circuits Signals and Systems",
    Name: "Steven Adie",
    Email: "sga42@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "BME 3300",
    Title: "Introduction to Computational Neuroscience",
    Name: "Christiane Linster",
    Email: "cl243@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "BME 4010",
    Title: "Biomedical Engineering Analysis of Metabolic and Structural Systems",
    Name: "Shivaun Archer",
    Email: "sda4@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "BME 4080",
    Title: "Biomedical Engineering Design I",
    Name: "Nate Cira",
    Email: "njc222@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "BME 4190",
    Title: "Laboratory Techniques for Molecular, Cellular, and Systems Engineering",
    Name: "Claudia Fischbach",
    Email: "cf99@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "BME 4390",
    Title: "Circuits, Signals and Sensors: Instrumentation Laboratory",
    Name: "Warren Zipfel",
    Email: "wrz2@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "BME 4410",
    Title: "Biofluid Mechanics",
    Name: "Karl Lewis",
    Email: "kjl235@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "BME 4490",
    Title: "Biomechanics Laboratory",
    Name: "Lawrence Bonassar",
    Email: "lb244@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "BME 4900",
    Title: "Independent Undergraduate Project in Biomedical Engineering",
    Name: "Karl Lewis",
    Email: "kjl235@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "BME 4901",
    Title: "Honors Thesis",
    Name: "Steven Adie",
    Email: "sga42@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "BME 4970",
    Title: "Undergraduate Teaching in Biomedical Engineering",
    Name: "Steven Adie",
    Email: "sga42@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "BME 5010",
    Title: "BME MEng Professional Engagement Seminar",
    Name: "Newton de Faria",
    Email: "nd366@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "BME 5100",
    Title: "Clinical Preceptorship for Biomedical Engineers",
    Name: "Newton de Faria",
    Email: "nd366@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "BME 5130",
    Title: "Introduction to Microbiome Engineering",
    Name: "Ilana Brito",
    Email: "ilb8@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "BME 5390",
    Title: "Circuits, Signals and Sensors: Instrumentation Laboratory",
    Name: "Warren Zipfel",
    Email: "wrz2@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "BME 5410",
    Title: "Biofluid Mechanics",
    Name: "Karl Lewis",
    Email: "kjl235@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "BME 5500",
    Title: "Innovation and Design of Biomedical Technologies",
    Name: "Newton de Faria",
    Email: "nd366@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "BME 5510",
    Title: "Medical Device Regulatory Affairs for Biomedical Engineers",
    Name: "Newton de Faria",
    Email: "nd366@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "BME 5700",
    Title: "Biophysical Methods",
    Name: "Guillaume Lambert",
    Email: "gl428@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "BME 5850",
    Title: "Current Practice in Tissue Engineering",
    Name: "Yadong Wang",
    Email: "yw839@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "BME 5910",
    Title: "Preliminary Study for Design Project",
    Name: "Peter Doerschuk",
    Email: "pd83@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "BME 5911",
    Title: "Industrial Projects: Preliminary Study for Design Project",
    Name: "Newton de Faria",
    Email: "nd366@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "BME 5920",
    Title: "Performance of Design Project",
    Name: "Peter Doerschuk",
    Email: "pd83@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "BME 5921",
    Title: "Industrial Projects: Performance of Design Project",
    Name: "Newton de Faria",
    Email: "nd366@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "BME 5930",
    Title: "Independent Design Project",
    Name: "Newton de Faria",
    Email: "nd366@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "BME 5940",
    Title: "Biomedical Engineering Internship",
    Name: "Newton de Faria",
    Email: "nd366@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "BME 5950",
    Title: "Special Topics in Biomedical Engineering",
    Name: "Newton de Faria",
    Email: "nd366@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "BME 6120",
    Title: "Precision and Genomic Medicine",
    Name: "Iwijn De Vlaminck",
    Email: "id93@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "BME 6210",
    Title: "Engineering Principles for Drug Delivery",
    Name: "David Putnam",
    Email: "dap43@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "BME 6330",
    Title: "Optical Tools for Studying Living Systems",
    Name: "Nozomi Nishimura",
    Email: "nn62@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "BME 7010",
    Title: "Biomedical Engineering Ph.D Seminar",
    Name: "Jan Lammerding",
    Email: "jl2792@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "BME 7020",
    Title: "Biomedical Engineering Research Seminar",
    Name: "Jan Lammerding",
    Email: "jl2792@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "BME 7030",
    Title: "Graduate Student Teaching Experience",
    Name: "Jan Lammerding",
    Email: "jl2792@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "BME 7160",
    Title: "Immersion Experience in Medical Research and Clinical Practice",
    Name: "Yi Wang",
    Email: "yw233@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "BME 7900",
    Title: "Biomedical Engineering Graduate Colloquium",
    Name: "Esak Lee",
    Email: "el767@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "BSOC 2051",
    Title: "Ethical Issues in Health and Medicine",
    Name: "Rachel Prentice",
    Email: "rep35@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "BSOC 2561",
    Title: "Medicine and Healing in China",
    Name: "Tj Hinrichs",
    Email: "th289@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "BSOC 3111",
    Title: "Sociology of Medicine",
    Name: "Christine Leuenberger",
    Email: "cal22@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "BSOC 3311",
    Title: "Environmental Governance",
    Name: "Steven Wolf",
    Email: "saw44@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "BSOC 3751",
    Title: "Independent Study",
    Name: "Stephen Hilgartner",
    Email: "shh6@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "BSOC 4101",
    Title: "The Entangled Lives of Humans and Animals",
    Name: "Rachel Prentice",
    Email: "rep35@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "BSOC 4634",
    Title: "Curating the British Empire",
    Name: "Jessica Ratcliff",
    Email: "jrr47@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "BSOC 4650",
    Title: "Advanced Topics in Clinical Ethics",
    Name: "Kim Overby",
    Email: "kjo46@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "BSOC 4991",
    Title: "Honors Project I",
    Name: "",
    Email: ""
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "BTRY 3010",
    Title: "Biological Statistics I",
    Name: "Jeremy Entner",
    Email: "jfe35@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "BTRY 3080",
    Title: "Probability Models and Inference",
    Name: "Florentina Bunea",
    Email: "fb238@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "BTRY 3090",
    Title: "Theory of Interest",
    Name: "Sreyoshi Das",
    Email: "sd878@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "BTRY 3100",
    Title: "Statistical Sampling",
    Name: "Thomas Diciccio",
    Email: "tjd9@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "BTRY 4030",
    Title: "Linear Models with Matrices",
    Name: "Dana Yang",
    Email: "xy374@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "BTRY 4090",
    Title: "Theory of Statistics",
    Name: "Marten Wegkamp",
    Email: "mhw73@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "BTRY 4110",
    Title: "Categorical Data",
    Name: "Melissa Smith",
    Email: "ms429@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "BTRY 4381",
    Title: "Biomedical Data Mining and Modeling",
    Name: "Haiyuan Yu",
    Email: "hy299@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "BTRY 4840",
    Title: "Computational Genetics and Genomics",
    Name: "Jaehee Kim",
    Email: "jk2287@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "BTRY 4950",
    Title: "Statistical Consulting",
    Name: "Sumanta Basu",
    Email: "sb2457@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "BTRY 4970",
    Title: "Undergraduate Individual Study in Biometry and Statistics",
    Name: "",
    Email: ""
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "BTRY 4980",
    Title: "Undergraduate Supervised Teaching",
    Name: "",
    Email: ""
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "BTRY 4990",
    Title: "Undergraduate Research",
    Name: "",
    Email: ""
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "BTRY 5010",
    Title: "Biological Statistics I",
    Name: "Jeremy Entner",
    Email: "jfe35@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "BTRY 5090",
    Title: "Theory of Statistics",
    Name: "Marten Wegkamp",
    Email: "mhw73@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "BTRY 6010",
    Title: "Statistical Methods I",
    Name: "Martin Wells",
    Email: "mtw1@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "BTRY 6381",
    Title: "Biomedical Data Mining and Modeling",
    Name: "Haiyuan Yu",
    Email: "hy299@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "BTRY 6840",
    Title: "Computational Genetics and Genomics",
    Name: "Jaehee Kim",
    Email: "jk2287@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "BTRY 6890",
    Title: "Current Topics in Population Genomics",
    Name: "Philipp Messer",
    Email: "pm544@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "BTRY 6970",
    Title: "Individual Graduate Study in Biometry and Statistics",
    Name: "James Booth",
    Email: "jb383@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "BTRY 7900",
    Title: "Graduate-Level Dissertation Research",
    Name: "James Booth",
    Email: "jb383@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "BTRY 7950",
    Title: "Statistical Consulting",
    Name: "Sumanta Basu",
    Email: "sb2457@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "BTRY 7980",
    Title: "Graduate Supervised Teaching",
    Name: "James Booth",
    Email: "jb383@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "BTRY 8900",
    Title: "Master's Level Thesis Research",
    Name: "James Booth",
    Email: "jb383@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "BTRY 9900",
    Title: "Doctoral-Level Dissertation Research",
    Name: "James Booth",
    Email: "jb383@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "BURM 1121",
    Title: "Elementary Burmese (Myanmar) I",
    Name: "Yu Yu Khaing",
    Email: "yk696@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "BURM 2201",
    Title: "Intermediate Burmese (Myanmar) I",
    Name: "Yu Yu Khaing",
    Email: "yk696@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "BURM 3301",
    Title: "Advanced Burmese (Myanmar) I",
    Name: "Yu Yu Khaing",
    Email: "yk696@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "BURM 3309",
    Title: "Advanced Readings in Burmese (Myanmar) I",
    Name: "Yu Yu Khaing",
    Email: "yk696@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "CAPS 1920",
    Title: "Modern China",
    Name: "Yue Du",
    Email: "yd367@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "CAPS 2133",
    Title: "Social Debates in China",
    Name: "Yue Du",
    Email: "yd367@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "CAPS 2230",
    Title: "Introduction to China: Outsiders in History",
    Name: "Suyoung Son",
    Email: "ss994@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "CAPS 2262",
    Title: "Medicine and Healing in China",
    Name: "Tj Hinrichs",
    Email: "th289@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "CAPS 2271",
    Title: "China's Literary Heritage: An Introduction in Translation",
    Name: "Ding Xiang Warner",
    Email: "dxw2@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "CAPS 3000",
    Title: "Seminar on American Relations with China",
    Name: "Cynthia Watson",
    Email: "caw333@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "CAPS 3303",
    Title: "Twentieth and Twenty-First Century Chinese Literature",
    Name: "Nick Admussen",
    Email: "na347@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "CAPS 3307",
    Title: "Readings in Classical Chinese Literature",
    Name: "Ding Xiang Warner",
    Email: "dxw2@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "CAPS 3387",
    Title: "The Asian Century: The Rise of China and India",
    Name: "Eli Friedman",
    Email: "edf48@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "CAPS 3525",
    Title: "Life and Death in China Under Mao",
    Name: "Peidong Sun",
    Email: "ps786@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "CAPS 4001",
    Title: "China in Transition",
    Name: "Xu Xin",
    Email: "xx12@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "CAPS 4010",
    Title: "Honors Thesis Tutorial I",
    Name: "Xu Xin",
    Email: "xx12@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "CAPS 4020",
    Title: "Honors Thesis Tutorial II",
    Name: "Allen Carlson",
    Email: "arc26@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "CAPS 4075",
    Title: "Fashion and Politics in Twentieth-Century China",
    Name: "Peidong Sun",
    Email: "ps786@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "CAPS 4998",
    Title: "Inquiry in Politics and Policy",
    Name: "David Silbey",
    Email: "ds90@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "CAPS 4999",
    Title: "CAPS Independent Study",
    Name: "Allen Carlson",
    Email: "arc26@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "CEE 1160",
    Title: "Modern Structures",
    Name: "Kenneth Hover",
    Email: "kch7@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "CEE 3040",
    Title: "Uncertainty Analysis in Engineering",
    Name: "Ricardo Daziano",
    Email: "ra477@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "CEE 3090",
    Title: "Special Topics in Civil and Environmental Engineering",
    Name: "Pete Diamessis",
    Email: "pjd38@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "CEE 3310",
    Title: "Fluid Mechanics",
    Name: "Qi Li",
    Email: "ql56@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "CEE 3410",
    Title: "Introduction to Geotechnical Engineering",
    Name: "David Orr",
    Email: "dpo3@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "CEE 3790",
    Title: "Introduction to Building Information Modeling (BIM) using Revit",
    Name: "Jason Coolbaugh",
    Email: "jgc245@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "CEE 4000",
    Title: "Senior Honors Thesis",
    Name: "William Philpot",
    Email: "wdp2@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "CEE 4010",
    Title: "Undergraduate Engineering Teaching in CEE",
    Name: "Jery Stedinger",
    Email: "jrs5@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "CEE 4090",
    Title: "CEE Undergraduate Research",
    Name: "Edwin",
    Email: "Todd@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "CEE 4210",
    Title: "Renewable Energy Systems",
    Name: "Francis Vanek",
    Email: "fmv3@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "CEE 4215",
    Title: "Stochastic Modeling of Complex Systems",
    Name: "Andrea Giometto",
    Email: "ag956@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "CEE 4350",
    Title: "Coastal Engineering",
    Name: "Edwin",
    Email: "Todd@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "CEE 4510",
    Title: "Microbiology for Environmental Engineering",
    Name: "Ruth Richardson",
    Email: "rer26@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "CEE 4565",
    Title: "Waste Water Processes and Resources Recovery",
    Name: "April Gu Leip",
    Email: "azg4@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "CEE 4620",
    Title: "Analysis and Control of Transportation Systems and Networks",
    Name: "Samitha Samaranayake",
    Email: "ss3496@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "CEE 4640",
    Title: "Sustainable Transportation Systems Design",
    Name: "Francis Vanek",
    Email: "fmv3@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "CEE 4725",
    Title: "Intermediate Solid Mechanics",
    Name: "Derek Warner",
    Email: "dhw52@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "CEE 4730",
    Title: "Design of Concrete Structures",
    Name: "Kenneth Hover",
    Email: "kch7@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "CEE 4745",
    Title: "Sustainability and Automation: The Future of Construction Industry",
    Name: "Sriramya Nair",
    Email: "sn599@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "CEE 4770",
    Title: "Natural Hazards, Reliability, and Insurance",
    Name: "Mircea Grigoriu",
    Email: "mdg12@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "CEE 4800",
    Title: "Engineering Smart Cities",
    Name: "John Albertson",
    Email: "jda59@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "CEE 4920",
    Title: "Engineers for a Sustainable World",
    Name: "Francis Vanek",
    Email: "fmv3@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "CEE 4930",
    Title: "Data Analytics",
    Name: "Linda Nozick",
    Email: "lkn3@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "CEE 5025",
    Title: "Civil and Environmental Engineering Seminar for First-Year Research Students",
    Name: "Pete Diamessis",
    Email: "pjd38@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "CEE 5031",
    Title: "Project in Environmental Fluid Mechanics and Hydrology",
    Name: "Edwin",
    Email: "Todd@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "CEE 5041",
    Title: "Project in Geotechnical Engineering",
    Name: "Thomas O'Rourke",
    Email: "tdo1@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "CEE 5050",
    Title: "Interdisciplinary Master of Engineering Project",
    Name: "Ruth Richardson",
    Email: "rer26@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "CEE 5051",
    Title: "Project in Environmental Engineering",
    Name: "Damian Helbling",
    Email: "deh262@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "CEE 5061",
    Title: "Project in Transportation Engineering",
    Name: "Francis Vanek",
    Email: "fmv3@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "CEE 5072",
    Title: "Project in Structural Mechanics and Materials",
    Name: "Matthew Reiter",
    Email: "mtr68@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "CEE 5200",
    Title: "Economics of the Energy Transition",
    Name: "Jacob Mays",
    Email: "jpm452@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "CEE 5240",
    Title: "Model Based Systems Engineering",
    Name: "David Schneider",
    Email: "drs44@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "CEE 5510",
    Title: "Microbiology for Environmental Engineering",
    Name: "Ruth Richardson",
    Email: "rer26@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "CEE 5700",
    Title: "Masonry Behavior and Design",
    Name: "Matthew Reiter",
    Email: "mtr68@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "CEE 5735",
    Title: "Mathematical Modeling of Natural and Engineered Systems",
    Name: "Christopher Earls",
    Email: "cje23@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "CEE 5740",
    Title: "Intermediate Behavior of Metal Structures",
    Name: "Matthew Reiter",
    Email: "mtr68@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "CEE 5746",
    Title: "Sustainability and Automation: The Future of Construction Industry",
    Name: "Sriramya Nair",
    Email: "sn599@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "CEE 5790",
    Title: "Introduction to Building Information Modeling (BIM) using Revit",
    Name: "Jason Coolbaugh",
    Email: "jgc245@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "CEE 5820",
    Title: "Global Food, Energy, and Water Nexus – Engage the US, China, and India for Sustainability",
    Name: "Xingen Lei",
    Email: "xl20@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "CEE 5900",
    Title: "Project Management",
    Name: "Robert Newman",
    Email: "rtn24@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "CEE 5910",
    Title: "Engineering Management Project",
    Name: "Linda Nozick",
    Email: "lkn3@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "CEE 5930",
    Title: "Data Analytics",
    Name: "Linda Nozick",
    Email: "lkn3@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "CEE 5950",
    Title: "Construction Planning and Operations",
    Name: "Erik Eshelman",
    Email: "epe8@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "CEE 5980",
    Title: "Decision Framing and Analytics",
    Name: "Patrick Reed",
    Email: "pmr82@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "CEE 6000",
    Title: "Numerical Methods for Engineers",
    Name: "Pete Diamessis",
    Email: "pjd38@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "CEE 6015",
    Title: "Special Topics: Remote Sensing",
    Name: "William Philpot",
    Email: "wdp2@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "CEE 6020",
    Title: "Seminar - Water Resources and Environmental Engineering",
    Name: "Patrick Reed",
    Email: "pmr82@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "CEE 6025",
    Title: "Special Topics in Environmental and Water Resources Systems Analysis",
    Name: "Michael Rolband",
    Email: "msr58@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "CEE 6035",
    Title: "Special Topics in Hydraulics",
    Name: "John Albertson",
    Email: "jda59@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "CEE 6045",
    Title: "Special Topics in Geotechnical Engineering",
    Name: "Harry Stewart",
    Email: "hes1@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "CEE 6055",
    Title: "Special Topics in Environmental Engineering",
    Name: "Ruth Richardson",
    Email: "rer26@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "CEE 6065",
    Title: "Special Topics in Transportation",
    Name: "Linda Nozick",
    Email: "lkn3@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "CEE 6070",
    Title: "Seminar - Civil Infrastructure",
    Name: "Derek Warner",
    Email: "dhw52@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "CEE 6095",
    Title: "Special Topics in Engineering Management",
    Name: "Andrea Ippolito",
    Email: "aki2@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "CEE 6210",
    Title: "Renewable Energy Systems",
    Name: "Francis Vanek",
    Email: "fmv3@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "CEE 6215",
    Title: "Stochastic Modeling of Complex Systems",
    Name: "Andrea Giometto",
    Email: "ag956@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "CEE 6350",
    Title: "Coastal Engineering",
    Name: "Edwin",
    Email: "Todd@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "CEE 6530",
    Title: "Water Chemistry for Environmental Engineering",
    Name: "Matthew Reid",
    Email: "mcr239@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "CEE 6560",
    Title: "Physical and Chemical Process",
    Name: "Damian Helbling",
    Email: "deh262@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "CEE 6565",
    Title: "Waste Water Processes and Resources Recovery",
    Name: "April Gu Leip",
    Email: "azg4@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "CEE 6620",
    Title: "Analysis and Control of Transportation Systems and Networks",
    Name: "Samitha Samaranayake",
    Email: "ss3496@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "CEE 6648",
    Title: "Sustainable Transportation Systems Design",
    Name: "Francis Vanek",
    Email: "fmv3@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "CEE 6726",
    Title: "Intermediate Solid Mechanics",
    Name: "Derek Warner",
    Email: "dhw52@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "CEE 6730",
    Title: "Design of Concrete Structures",
    Name: "Kenneth Hover",
    Email: "kch7@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "CEE 6736",
    Title: "Mathematical Modeling of Natural and Engineered Systems",
    Name: "Christopher Earls",
    Email: "cje23@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "CEE 6770",
    Title: "Natural Hazards, Reliability, and Insurance",
    Name: "Mircea Grigoriu",
    Email: "mdg12@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "CEE 6790",
    Title: "Time Series Data Analysis for Civil, Mechanical and Geophysical Applications",
    Name: "Greg McLaskey",
    Email: "gcm8@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "CEE 6800",
    Title: "Engineering Smart Cities",
    Name: "John Albertson",
    Email: "jda59@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "CEE 6910",
    Title: "Project Management",
    Name: "Robert Newman",
    Email: "rtn24@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "CEE 6940",
    Title: "Research in Engineering Management",
    Name: "Linda Nozick",
    Email: "lkn3@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "CEE 7010",
    Title: "Research - Remote Sensing",
    Name: "William Philpot",
    Email: "wdp2@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "CEE 7020",
    Title: "Environmental and Water Resources Systems Analysis Research",
    Name: "Patrick Reed",
    Email: "pmr82@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "CEE 7030",
    Title: "Research in Environmental Fluid Mechanics and Hydrology",
    Name: "Edwin",
    Email: "Todd@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "CEE 7040",
    Title: "Research in Geotechnical Engineering",
    Name: "Thomas O'Rourke",
    Email: "tdo1@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "CEE 7050",
    Title: "Research in Environmental Engineering",
    Name: "Damian Helbling",
    Email: "deh262@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "CEE 7070",
    Title: "Research in Structural Engineering",
    Name: "Christopher Earls",
    Email: "cje23@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "CEE 7073",
    Title: "Civil and Environmental Engineering Materials Project",
    Name: "Kenneth Hover",
    Email: "kch7@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "CEE 8100",
    Title: "Thesis - Remote Sensing",
    Name: "William Philpot",
    Email: "wdp2@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "CEE 8200",
    Title: "Thesis - Environmental and Water Resource Systems",
    Name: "Daniel Loucks",
    Email: "dpl3@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "CEE 8300",
    Title: "Thesis - Environmental Fluid Mechanics and Hydrology",
    Name: "Edwin",
    Email: "Todd@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "CEE 8400",
    Title: "Thesis - Geotechnical Engineering",
    Name: "Thomas O'Rourke",
    Email: "tdo1@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "CEE 8500",
    Title: "Thesis - Environmental Engineering",
    Name: "Damian Helbling",
    Email: "deh262@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "CEE 8600",
    Title: "Thesis - Transportation Systems Engineering",
    Name: "Oliver Gao",
    Email: "hg55@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "CEE 8700",
    Title: "Thesis - Structural Engineering",
    Name: "Derek Warner",
    Email: "dhw52@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "CEE 8800",
    Title: "Thesis - Civil Infrastructure Systems",
    Name: "Linda Nozick",
    Email: "lkn3@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "CHEM 1007",
    Title: "Academic Support for CHEM 2070",
    Name: "Karen Lagasse",
    Email: "kl658@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "CHEM 1057",
    Title: "Academic Support for CHEM 3570",
    Name: "Brandon Bogusz",
    Email: "bb677@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "CHEM 1150",
    Title: "The Language of Chemistry",
    Name: "",
    Email: ""
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "CHEM 1560",
    Title: "Introduction to General Chemistry",
    Name: "",
    Email: ""
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "CHEM 1729",
    Title: "Solve It!",
    Name: "Stephen Lee",
    Email: "sl137@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "CHEM 2070",
    Title: "General Chemistry I",
    Name: "Stephen Lee",
    Email: "sl137@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "CHEM 2090",
    Title: "Engineering General Chemistry",
    Name: "",
    Email: ""
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "CHEM 2150",
    Title: "Honors General and Inorganic Chemistry",
    Name: "",
    Email: ""
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "CHEM 2510",
    Title: "Introduction to Experimental Organic Chemistry",
    Name: "Cynthia Kinsland",
    Email: "clk10@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "CHEM 2770",
    Title: "Methods in Chemical Education",
    Name: "Stephen Lee",
    Email: "sl137@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "CHEM 2870",
    Title: "Introductory Physical Chemistry",
    Name: "",
    Email: ""
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "CHEM 3020",
    Title: "Honors Experimental Chemistry II",
    Name: "",
    Email: ""
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "CHEM 3530",
    Title: "Principles of Organic Chemistry",
    Name: "",
    Email: ""
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "CHEM 3570",
    Title: "Organic Chemistry for the Life Sciences",
    Name: "",
    Email: ""
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "CHEM 3600",
    Title: "Honors Organic Chemistry II",
    Name: "",
    Email: ""
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "CHEM 3890",
    Title: "Honors Physical Chemistry I",
    Name: "",
    Email: ""
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "CHEM 4210",
    Title: "Introduction to Inorganic Chemistry Research",
    Name: "",
    Email: ""
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "CHEM 4330",
    Title: "Introduction to Analytical Chemistry Research",
    Name: "Brian Crane",
    Email: "bc69@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "CHEM 4500",
    Title: "Principles of Chemical Biology",
    Name: "Jeremy Baskin",
    Email: "jmb772@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "CHEM 4610",
    Title: "Introduction to Organic Chemistry Research",
    Name: "Phillip Milner",
    Email: "pjm347@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "CHEM 4770",
    Title: "Introduction to Physical Chemistry Research",
    Name: "Hector Abruna",
    Email: "hda1@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "CHEM 5110",
    Title: "Chemical Facilities Boot Camp",
    Name: "David Zax",
    Email: "dbz1@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "CHEM 5120",
    Title: "Capstone Research Project",
    Name: "David Zax",
    Email: "dbz1@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "CHEM 6050",
    Title: "Advanced Inorganic Chemistry I: Symmetry, Structure, and Reactivity",
    Name: "Justin Wilson",
    Email: "jjw275@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "CHEM 6450",
    Title: "Principles of Chemical Biology",
    Name: "Jeremy Baskin",
    Email: "jmb772@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "CHEM 6640",
    Title: "Problem Solving in Organic Chemistry",
    Name: "Brett Fors",
    Email: "bpf46@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "CHEM 6650",
    Title: "Advanced Organic Chemistry",
    Name: "Mikail Abbasov",
    Email: "mea254@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "CHEM 6690",
    Title: "Modern Catalytic Reactions in Organic Synthesis",
    Name: "Todd Hyster",
    Email: "tkh33@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "CHEM 6700",
    Title: "Fundamental Principles of Polymer Chemistry",
    Name: "Erin Stache",
    Email: "ees234@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "CHEM 6860",
    Title: "Physical Chemistry of Proteins",
    Name: "Peng CHEN, Prof.",
    Email: "pc252@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "CHEM 6890",
    Title: "Honors Physical Chemistry I",
    Name: "",
    Email: ""
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "CHEM 7870",
    Title: "Computational Methods of Physical Chemistry",
    Name: "Melissa Hines",
    Email: "mah11@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "CHEM 7930",
    Title: "Quantum Mechanics I",
    Name: "Nandini Ananth",
    Email: "na346@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "CHEME 2000",
    Title: "Effective and Inclusive Leadership in Engineering",
    Name: "Fernando Escobedo",
    Email: "fe13@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "CHEME 2880",
    Title: "Biomolecular Engineering: Fundamentals and Applications",
    Name: "Matthew Paszek",
    Email: "mjp31@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "CHEME 3130",
    Title: "Chemical Engineering Thermodynamics",
    Name: "Nicholas Abbott",
    Email: "nla34@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "CHEME 3240",
    Title: "Heat and Mass Transfer",
    Name: "Rong Yang",
    Email: "ry295@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "CHEME 4320",
    Title: "Chemical Engineering Laboratory",
    Name: "Qiuming Yu",
    Email: "qy10@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "CHEME 4840",
    Title: "Microchemical and Microfluidic Systems",
    Name: "James Engstrom",
    Email: "jre7@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "CHEME 4880",
    Title: "Global Food, Energy, and Water Nexus – Engage the US, China, and India for Sustainability",
    Name: "Xingen Lei",
    Email: "xl20@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "CHEME 4900",
    Title: "Undergraduate Projects in Chemical Engineering",
    Name: "Qiuming Yu",
    Email: "qy10@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "CHEME 4998",
    Title: "International Research Internship",
    Name: "Jefferson Tester",
    Email: "jwt54@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "CHEME 5204",
    Title: "Turbomachinery Applications",
    Name: "Alfred Center",
    Email: "ac222@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "CHEME 5205",
    Title: "Industrial Applications of Fluid Dynamics",
    Name: "Alfred Center",
    Email: "ac222@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "CHEME 5209",
    Title: "Industrial Heat Transfer Applications",
    Name: "Alfred Center",
    Email: "ac222@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "CHEME 5320",
    Title: "Glass: Structure, Properties and Modern Applications",
    Name: "Marty Murtagh",
    Email: "mjm43@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "CHEME 5430",
    Title: "Bioprocess Engineering",
    Name: "Matthew DeLisa",
    Email: "md255@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "CHEME 5610",
    Title: "Concepts of Chemical Engineering Product Design and Lean Manufacturing",
    Name: "Alex Woltornist",
    Email: "aw499@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "CHEME 5650",
    Title: "Design Project",
    Name: "Jeffrey Varner",
    Email: "jdv27@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "CHEME 5660",
    Title: "Financial Data, Markets, and Mayhem for Scientists and Engineers",
    Name: "Jeffrey Varner",
    Email: "jdv27@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "CHEME 5700",
    Title: "Process Control Strategies",
    Name: "Alfred Center",
    Email: "ac222@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "CHEME 5730",
    Title: "Interdisciplinary Design Concepts",
    Name: "Marty Murtagh",
    Email: "mjm43@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "CHEME 5870",
    Title: "Energy Seminar I",
    Name: "C. Anderson",
    Email: "cla28@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "CHEME 5990",
    Title: "Medical and Industrial Biotechnology Seminar",
    Name: "Matthew DeLisa",
    Email: "md255@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "CHEME 5999",
    Title: "Special Projects in Chemical Engineering",
    Name: "Jeffrey Varner",
    Email: "jdv27@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "CHEME 6230",
    Title: "Transport Phenomena for Chemical & Biomolecular Engineering",
    Name: "Abraham Stroock",
    Email: "ads10@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "CHEME 6310",
    Title: "Engineering Principles for Drug Delivery",
    Name: "David Putnam",
    Email: "dap43@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "CHEME 6440",
    Title: "Aerosols and Colloids",
    Name: "Donald Koch",
    Email: "dlk15@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "CHEME 6660",
    Title: "Analysis of Sustainable Energy Systems",
    Name: "Jefferson Tester",
    Email: "jwt54@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "CHEME 6661",
    Title: "Bioenergy and Biofuels Module",
    Name: "Jefferson Tester",
    Email: "jwt54@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "CHEME 6676",
    Title: "Energy Markets and Regulations Module",
    Name: "Michal Moore",
    Email: "mcm337@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "CHEME 6679",
    Title: "Energy Storage Module",
    Name: "Tobias Hanrath",
    Email: "th358@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "CHEME 6681",
    Title: "Energy Analysis Project",
    Name: "Jefferson Tester",
    Email: "jwt54@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "CHEME 6780",
    Title: "Global Food, Energy, and Water Nexus – Engage the US, China, and India for Sustainability",
    Name: "Xingen Lei",
    Email: "xl20@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "CHEME 6800",
    Title: "Computational Optimization",
    Name: "Fengqi You",
    Email: "fy86@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "CHEME 7110",
    Title: "Advanced Chemical Engineering Thermodynamics",
    Name: "Fernando Escobedo",
    Email: "fe13@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "CHEME 7310",
    Title: "Advanced Fluid Mechanics and Heat Transfer",
    Name: "Donald Koch",
    Email: "dlk15@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "CHEME 7510",
    Title: "Mathematical Methods of Chemical Engineering Analysis",
    Name: "Sarah Hormozi",
    Email: "sh2365@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "CHEME 7900",
    Title: "Chemical Engineering Seminar",
    Name: "Rong Yang",
    Email: "ry295@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "CHEME 7920",
    Title: "Principles and Practices of Graduate Research",
    Name: "Sijin Li",
    Email: "sl3276@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "CHIN 1101",
    Title: "Beginning Mandarin I",
    Name: "Stephanie Divo",
    Email: "sah36@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "CHIN 1109",
    Title: "Beginning Chinese Reading and Writing for Students of Chinese Heritage I",
    Name: "Rui Liu",
    Email: "rl264@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "CHIN 1121",
    Title: "Beginning Mandarin for Professional Students I",
    Name: "Stephanie Divo",
    Email: "sah36@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "CHIN 1123",
    Title: "Beginning Mandarin for Professional Students III",
    Name: "Stephanie Divo",
    Email: "sah36@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "CHIN 2201",
    Title: "Intermediate Mandarin I",
    Name: "Felicia Teng",
    Email: "qt11@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "CHIN 2209",
    Title: "Intermediate Chinese Reading and Writing for Students of Chinese Heritage I",
    Name: "Su George",
    Email: "wsg3@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "CHIN 3301",
    Title: "High Intermediate Mandarin I",
    Name: "Jyun-hong Lu",
    Email: "jl3275@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "CHIN 3341",
    Title: "High Intermediate Mandarin I: CAPS in D.C.",
    Name: "",
    Email: ""
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "CHIN 4411",
    Title: "Advanced Mandarin I",
    Name: "Felicia Teng",
    Email: "qt11@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "CHIN 4427",
    Title: "High Advanced Mandarin I",
    Name: "Rui Liu",
    Email: "rl264@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "CHIN 4441",
    Title: "Advanced Mandarin I: CAPS in D.C.",
    Name: "",
    Email: ""
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "CHIN 4443",
    Title: "High Advanced Mandarin I: CAPS in D.C.",
    Name: "",
    Email: ""
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "CHIN 4451",
    Title: "Advanced Mandarin I: CAPS in Beijing",
    Name: "",
    Email: ""
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "CHIN 4453",
    Title: "High Advanced Mandarin I: CAPS in Beijing",
    Name: "",
    Email: ""
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "CHLIT 2213",
    Title: "Introduction to Classical Chinese I",
    Name: "Robin McNeal",
    Email: "rm253@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "CHLIT 3307",
    Title: "Readings in Classical Chinese Literature",
    Name: "Ding Xiang Warner",
    Email: "dxw2@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "CHLIT 3398",
    Title: "Where Humans and the Spirits Meet: Reading Chinese Temple Inscriptions",
    Name: "Robin McNeal",
    Email: "rm253@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "CHLIT 4421",
    Title: "Directed Study",
    Name: "Robin McNeal",
    Email: "rm253@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "CHLIT 5598",
    Title: "Where Humans and the Spirits Meet: Reading Chinese Temple Inscriptions",
    Name: "Robin McNeal",
    Email: "rm253@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "CHLIT 6607",
    Title: "Readings in Classical Chinese Literature",
    Name: "Ding Xiang Warner",
    Email: "dxw2@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "CHLIT 6621",
    Title: "Advanced Directed Reading",
    Name: "",
    Email: ""
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "CLASS 1331",
    Title: "Elementary Sanskrit I",
    Name: "Todd Clary",
    Email: "tcc24@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "CLASS 1450",
    Title: "Ancient Egyptian I: Introduction to Middle Egyptian Hieroglyphs",
    Name: "Christopher Monroe",
    Email: "cmm253@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "CLASS 1531",
    Title: "FWS: Greek Myth",
    Name: "Daniel Gallagher",
    Email: "dbg223@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "CLASS 1615",
    Title: "Introduction to Ancient Rome",
    Name: "Michael Fontaine",
    Email: "mf268@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "CLASS 1702",
    Title: "Great Discoveries in Greek and Roman Archaeology",
    Name: "Caitlin Barrett",
    Email: "ceb329@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "CLASS 2000",
    Title: "Environment and Sustainability Colloquium",
    Name: "Johannes Lehmann",
    Email: "cl273@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "CLASS 2351",
    Title: "Intermediate Sanskrit I",
    Name: "Lawrence McCrea",
    Email: "ljm223@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "CLASS 2601",
    Title: "The Greek Experience",
    Name: "Frederick Ahl",
    Email: "fma2@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "CLASS 2603",
    Title: "Initiation to Greek Culture",
    Name: "Verity Platt",
    Email: "vjp33@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "CLASS 2604",
    Title: "Greek Mythology",
    Name: "Todd Clary",
    Email: "tcc24@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "CLASS 2641",
    Title: "The Technology of Ancient Rome",
    Name: "Courtney Roby",
    Email: "car295@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "CLASS 2661",
    Title: "Greek and Roman Philosophy",
    Name: "Tad Brennan",
    Email: "trb64@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "CLASS 2675",
    Title: "Ancient Greece from Helen to Alexander",
    Name: "Barry Strauss",
    Email: "bss4@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "CLASS 2687",
    Title: "Introduction to Military History",
    Name: "Barry Strauss",
    Email: "bss4@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "CLASS 2691",
    Title: "Introduction to Indo-European Linguistics",
    Name: "Alan Nussbaum",
    Email: "ajn8@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "CLASS 2700",
    Title: "Introduction to the Classical World in 24 Objects",
    Name: "Annetta Alexandridis",
    Email: "aa376@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "CLASS 2807",
    Title: "Slavery in the Ancient World",
    Name: "Nicole Giannella",
    Email: "njg68@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "CLASS 3391",
    Title: "Independent Study in Sanskrit, Undergraduate Level",
    Name: "",
    Email: ""
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "CLASS 3395",
    Title: "Advanced Sanskrit I",
    Name: "Lawrence McCrea",
    Email: "ljm223@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "CLASS 3661",
    Title: "Hellenistic Philosophy",
    Name: "Tad Brennan",
    Email: "trb64@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "CLASS 3686",
    Title: "Independent Study in Classical Civilization, Undergraduate Level",
    Name: "",
    Email: ""
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "CLASS 3750",
    Title: "Introduction to Dendrochronology",
    Name: "Sturt Manning",
    Email: "sm456@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "CLASS 4721",
    Title: "Honors: Senior Essay I",
    Name: "",
    Email: ""
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "CLASS 4757",
    Title: "The Archaeology of Houses and Households",
    Name: "Caitlin Barrett",
    Email: "ceb329@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "CLASS 6755",
    Title: "Archaeological Dendrochronology",
    Name: "Sturt Manning",
    Email: "sm456@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "CLASS 7345",
    Title: "Graduate TA Training",
    Name: "Eric Rebillard",
    Email: "er97@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "CLASS 7691",
    Title: "Introduction to Indo-European Linguistics",
    Name: "Alan Nussbaum",
    Email: "ajn8@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "CLASS 7757",
    Title: "The Archaeology of Houses and Households",
    Name: "Caitlin Barrett",
    Email: "ceb329@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "COGST 1105",
    Title: "Introduction to Linguistics",
    Name: "Laura Casasanto",
    Email: "lsc96@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "COGST 1111",
    Title: "Making a Difference by Design",
    Name: "Cindy Hsin-Liu Kao",
    Email: "hk932@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "COGST 1500",
    Title: "Introduction to Environmental Psychology",
    Name: "Gary Evans",
    Email: "gwe1@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "COGST 1501",
    Title: "Introduction to Environmental Psychology - Writing in the Major",
    Name: "Gary Evans",
    Email: "gwe1@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "COGST 2200",
    Title: "The Human Brain and Mind: An Introduction to Cognitive Neuroscience",
    Name: "Daniel Casasanto",
    Email: "djc457@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "COGST 2230",
    Title: "Intro to Behavioral Neuroscience",
    Name: "Tim Devoogd",
    Email: "tjd5@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "COGST 2310",
    Title: "Introduction to Deductive Logic",
    Name: "Harold Hodes",
    Email: "hth3@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "COGST 2415",
    Title: "Introduction to Moral Psychology",
    Name: "Shaun Nichols",
    Email: "sbn44@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "COGST 3190",
    Title: "Memory and the Law",
    Name: "Charles Brainerd",
    Email: "cb299@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "COGST 3300",
    Title: "Introduction to Computational Neuroscience",
    Name: "Christiane Linster",
    Email: "cl243@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "COGST 3500",
    Title: "Interspecies Communication: Theories and Practices",
    Name: "Laurent Dubreuil",
    Email: "ld79@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "COGST 3801",
    Title: "Introduction to Game Theory and Strategic Thinking",
    Name: "Kaushik Basu",
    Email: "kb40@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "COGST 4250",
    Title: "Translational Research on Decision Making",
    Name: "Valerie Reyna",
    Email: "vr53@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "COGST 4265",
    Title: "Translational Research on Memory and Neuroscience",
    Name: "Charles Brainerd",
    Email: "cb299@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "COGST 4270",
    Title: "Evolution of Language",
    Name: "Morten Christiansen",
    Email: "mhc27@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "COGST 4310",
    Title: "Topics in Cognitive Science",
    Name: "Shimon Edelman",
    Email: "se37@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "COGST 4420",
    Title: "Psych and Ethics of Tech 21st Century",
    Name: "David Field",
    Email: "djf3@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "COGST 4700",
    Title: "Undergraduate Research in Cognitive Science",
    Name: "Shimon Edelman",
    Email: "se37@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "COGST 4710",
    Title: "Cognitive Science Research Workshop",
    Name: "",
    Email: ""
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "COGST 4740",
    Title: "Natural Language Processing",
    Name: "Lillian Lee",
    Email: "ljl2@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "COGST 6020",
    Title: "Research in Risk and Rational Decision Making",
    Name: "Valerie Reyna",
    Email: "vr53@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "COLLS 3970",
    Title: "Independent Study - Senior Project",
    Name: "",
    Email: ""
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "COLLS 4990",
    Title: "Honors Research I",
    Name: "Andrew Moisey",
    Email: "am2798@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "COLLS 4991",
    Title: "Honors Research II",
    Name: "",
    Email: ""
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "COML 1104",
    Title: "FWS: Reading Films",
    Name: "Noah Valdez",
    Email: "nrv6@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "COML 1105",
    Title: "FWS: Books with Big Ideas",
    Name: "Song Han",
    Email: "sh867@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "COML 1106",
    Title: "FWS: Robots",
    Name: "Marc Kohlbry",
    Email: "mck222@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "COML 1134",
    Title: "FWS: Reading Poetry",
    Name: "Didi Park",
    Email: "dp625@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "COML 2030",
    Title: "Comparative Literature, Film, and Media",
    Name: "Anindita Banerjee",
    Email: "ab425@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "COML 2036",
    Title: "Literature and the Elements of Nature",
    Name: "Anindita Banerjee",
    Email: "ab425@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "COML 2051",
    Title: "Writing about Poetry on Wikipedia",
    Name: "Nancy Pollak",
    Email: "np27@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "COML 2251",
    Title: "Poetry's Image",
    Name: "Jonathan Monroe",
    Email: "jbm3@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "COML 2400",
    Title: "Introduction to U.S. Latinx Literature",
    Name: "Debra Castillo",
    Email: "dac9@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "COML 2754",
    Title: "Wondrous Literatures of the Near East",
    Name: "Deborah Starr",
    Email: "das86@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "COML 3001",
    Title: "Methods of Comparison",
    Name: "Andrea Bachner",
    Email: "asb76@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "COML 3261",
    Title: "Global Cinema I",
    Name: "Sabine Haenni",
    Email: "sh322@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "COML 3314",
    Title: "Korean Literature and Performance: From P'ansori to K-Pop",
    Name: "Ivanna Yi",
    Email: "isy4@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "COML 3458",
    Title: "Specters: Derrida, Marx, and Other Ghosts",
    Name: "Jonathan Boyarin",
    Email: "jab857@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "COML 3708",
    Title: "Race and Sex: Arabian Nights",
    Name: "Parisa Vaziri",
    Email: "pv248@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "COML 4040",
    Title: "Fictions of Dictatorship",
    Name: "Christine Balance",
    Email: "cbb84@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "COML 4190",
    Title: "Independent Study",
    Name: "Karen Pinkus",
    Email: "kep44@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "COML 4250",
    Title: "Marx, Nietzsche, Freud",
    Name: "Geoffrey Waite",
    Email: "gcw1@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "COML 4281",
    Title: "Human-Centered Design and Engaged Media",
    Name: "Jon McKenzie",
    Email: "jvm62@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "COML 4451",
    Title: "Gender and Sexuality in Southeast Asian Cinema",
    Name: "Arnika Fuhrmann",
    Email: "aif32@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "COML 4930",
    Title: "Senior Essay",
    Name: "Karen Pinkus",
    Email: "kep44@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "COML 4940",
    Title: "Senior Essay",
    Name: "Karen Pinkus",
    Email: "kep44@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "COML 6190",
    Title: "Independent Study",
    Name: "Karen Pinkus",
    Email: "kep44@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "COML 6314",
    Title: "Korean Literature and Performance: From P'ansori to K-Pop",
    Name: "Ivanna Yi",
    Email: "isy4@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "COML 6458",
    Title: "Specters: Derrida, Marx, and Other Ghosts",
    Name: "Jonathan Boyarin",
    Email: "jab857@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "COML 6465",
    Title: "Black Feminist Theories: Sexuality, Creativity, and Power",
    Name: "Carole Boyce Davies",
    Email: "ceb278@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "COML 6630",
    Title: "Nietzsche and Heidegger",
    Name: "Geoffrey Waite",
    Email: "gcw1@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "COML 6651",
    Title: "Gender and Sexuality in Southeast Asian Cinema",
    Name: "Arnika Fuhrmann",
    Email: "aif32@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "COML 6686",
    Title: "Literary Stricture",
    Name: "Nick Admussen",
    Email: "na347@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "COML 6730",
    Title: "Prophetic Realisms: Literature and the Shape of Things to Come, 1830-1930-2030",
    Name: "Paul Fleming",
    Email: "pf239@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "COML 6920",
    Title: "Aesthetics and Politics of Touch",
    Name: "Timothy Murray",
    Email: "tcm1@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "COMM 1101",
    Title: "Introduction to Communication",
    Name: "Drew Margolin",
    Email: "dm658@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "COMM 1120",
    Title: "Wonder Women",
    Name: "Lori Leonard",
    Email: "ll536@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "COMM 1180",
    Title: "Leading by Mentoring: Being a COMM-Unity Mentor",
    Name: "Diane Bailey",
    Email: "deb332@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "COMM 2010",
    Title: "Oral Communication",
    Name: "",
    Email: ""
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "COMM 2200",
    Title: "Media Communication",
    Name: "",
    Email: ""
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "COMM 2310",
    Title: "Writing about Communication",
    Name: "Lauren Chambliss",
    Email: "elc55@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "COMM 2450",
    Title: "Communication and Technology",
    Name: "Chao Yu",
    Email: "cy395@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "COMM 2820",
    Title: "Research Methods in Communication Studies",
    Name: "Natalie Bazarova",
    Email: "nnb8@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "COMM 2990",
    Title: "Directed Research Experience",
    Name: "",
    Email: ""
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "COMM 3010",
    Title: "Writing and Producing the Narrative for Digital Media",
    Name: "Christopher Byrne",
    Email: "cpb76@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "COMM 3020",
    Title: "Science Writing for the Media",
    Name: "",
    Email: ""
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "COMM 3050",
    Title: "Advanced Media Writing about Cultural, Social, and Environmental Crises",
    Name: "Lauren Chambliss",
    Email: "elc55@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "COMM 3065",
    Title: "Sports Communication: Media, Marketing, Crisis & Violence",
    Name: "Christopher Byrne",
    Email: "cpb76@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "COMM 3081",
    Title: "Environmental and Sustainability Communication Part II",
    Name: "Lauren Chambliss",
    Email: "elc55@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "COMM 3110",
    Title: "Educational Psychology",
    Name: "Heidi Mouillesseaux-Kunzman",
    Email: "hmm1@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "COMM 3150",
    Title: "Organizational Communication: Theory and Practice",
    Name: "Connie Yuan",
    Email: "yy239@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "COMM 3210",
    Title: "Communication and the Environment",
    Name: "",
    Email: ""
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "COMM 3450",
    Title: "Human-Computer Interaction Design",
    Name: "Gilly Leshed",
    Email: "gl87@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "COMM 3710",
    Title: "Crossing Cultures Through Film",
    Name: "Connie Yuan",
    Email: "yy239@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "COMM 3760",
    Title: "Planning Communication Campaigns",
    Name: "",
    Email: ""
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "COMM 4300",
    Title: "Ethics in New Media, Technology, and Communication",
    Name: "Dawn Schrader",
    Email: "des14@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "COMM 4350",
    Title: "Communicating Leadership and Ethics",
    Name: "Dawn Schrader",
    Email: "des14@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "COMM 4500",
    Title: "Language and Technology",
    Name: "Susan Fussell",
    Email: "srf72@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "COMM 4950",
    Title: "Communication Industries: NYComm",
    Name: "Christopher Byrne",
    Email: "cpb76@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "COMM 4951",
    Title: "Communication Industries: CaliCOMM",
    Name: "Christopher Byrne",
    Email: "cpb76@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "COMM 4960",
    Title: "Communication Internship",
    Name: "Jodi Cohen",
    Email: "jrc442@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "COMM 4970",
    Title: "Individual Study in Communication",
    Name: "Brooke Duffy",
    Email: "bed54@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "COMM 4980",
    Title: "Communication Teaching Experience",
    Name: "Katherine Sender",
    Email: "ks785@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "COMM 4990",
    Title: "Independent Research",
    Name: "",
    Email: ""
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "COMM 5150",
    Title: "Organizational Communication: Theory and Practice",
    Name: "Connie Yuan",
    Email: "yy239@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "COMM 5300",
    Title: "Ethics in New Media, Technology, and Communication",
    Name: "Dawn Schrader",
    Email: "des14@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "COMM 6210",
    Title: "Advanced Communication and the Environment",
    Name: "Jonathon Schuldt",
    Email: "jps56@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "COMM 6211",
    Title: "Information, Technology, and Society",
    Name: "Helen Nissenbaum",
    Email: "hn288@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "COMM 6300",
    Title: "Media and Sexuality",
    Name: "Katherine Sender",
    Email: "ks785@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "COMM 6310",
    Title: "Behavior and Information Technology",
    Name: "Susan Fussell",
    Email: "srf72@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "COMM 6500",
    Title: "Language and Technology",
    Name: "Susan Fussell",
    Email: "srf72@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "COMM 6800",
    Title: "Studies in Communication",
    Name: "Jeff Niederdeppe",
    Email: "jdn56@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "COMM 6820",
    Title: "Quantitative Research Methods",
    Name: "Neil Lewis",
    Email: "nal46@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "COMM 7970",
    Title: "Graduate Independent Study",
    Name: "Natalie Bazarova",
    Email: "nnb8@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "COMM 7990",
    Title: "Graduate Research",
    Name: "Natalie Bazarova",
    Email: "nnb8@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "COMM 9900",
    Title: "Doctoral-Level Dissertation Research",
    Name: "Natalie Bazarova",
    Email: "nnb8@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "CRP 1100",
    Title: "The American City",
    Name: "Katelin Olson",
    Email: "keo24@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "CRP 2000",
    Title: "The Promise and Pitfalls of Contemporary Planning",
    Name: "Jennifer Minner",
    Email: "jm2359@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "CRP 3000",
    Title: "MentURS I",
    Name: "",
    Email: ""
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "CRP 3072",
    Title: "Land Use, Environmental Planning, and Urban Design Workshop",
    Name: "George Frantz",
    Email: "grf4@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "CRP 3210",
    Title: "Introduction to Quantitative Methods for the Analysis of Public Policy",
    Name: "Nicholas Klein",
    Email: "njk8@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "CRP 3270",
    Title: "Regional Economic Impact Analysis",
    Name: "John Carruthers",
    Email: "jc3474@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "CRP 3348",
    Title: "Design Connect",
    Name: "Michael Tomlan",
    Email: "mat4@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "CRP 3555",
    Title: "Environmental Impact Review",
    Name: "George Frantz",
    Email: "grf4@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "CRP 3750",
    Title: "Nilgiris Field Learning Center (NFLC) Preparatory Seminar",
    Name: "Neema Kudva",
    Email: "nk78@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "CRP 3840",
    Title: "Green Cities",
    Name: "Stephan Schmidt",
    Email: "sjs96@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "CRP 3850",
    Title: "Special Topics in Planning",
    Name: "John Carruthers",
    Email: "jc3474@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "CRP 3851",
    Title: "Special Topics in Design",
    Name: "Hobum Moon",
    Email: "hm432@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "CRP 3854",
    Title: "Special Topics in Regional Development and Globalization",
    Name: "Julie Ajinkya",
    Email: "ja265@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "CRP 3860",
    Title: "Planning for Sustainable Transportation",
    Name: "Nicholas Klein",
    Email: "njk8@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "CRP 3900",
    Title: "City and Regional Futures: Planning Practice, Policy and Design",
    Name: "Linda Shi",
    Email: "ls886@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "CRP 4080",
    Title: "Introduction to Geographic Information Systems (GIS)",
    Name: "",
    Email: ""
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "CRP 4120",
    Title: "Urban Public Management",
    Name: "Mildred Warner",
    Email: "mew15@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "CRP 4443",
    Title: "Global Climate Change Science and Policy",
    Name: "Allison Chatrchyan",
    Email: "amc256@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "CRP 4770",
    Title: "Seminar on Issues in African Development",
    Name: "N'Dri Assie-Lumumba",
    Email: "na12@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "CRP 4900",
    Title: "Student-Faculty Research",
    Name: "",
    Email: ""
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "CRP 4920",
    Title: "Undergraduate Honors Thesis Research",
    Name: "",
    Email: ""
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "CRP 4930",
    Title: "Undergraduate Honors Thesis Writing",
    Name: "",
    Email: ""
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "CRP 4940",
    Title: "URS Internship",
    Name: "",
    Email: ""
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "CRP 4970",
    Title: "Independent Study",
    Name: "",
    Email: ""
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "CRP 5072",
    Title: "Land Use, Environmental Planning, and Urban Design Workshop",
    Name: "George Frantz",
    Email: "grf4@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "CRP 5080",
    Title: "Introduction to GIS for Planners",
    Name: "Stephan Schmidt",
    Email: "sjs96@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "CRP 5130",
    Title: "Introduction to Planning Practice and History",
    Name: "Linda Shi",
    Email: "ls886@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "CRP 5172",
    Title: "NYC Workshop: Land Use, Environmental Planning, and Design",
    Name: "Robert Balder",
    Email: "rwb43@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "CRP 5173",
    Title: "NYC Studio: Integrated Urbanism as a Platform for Engagement",
    Name: "",
    Email: ""
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "CRP 5174",
    Title: "NYC Colloquium: Professional Practice",
    Name: "",
    Email: ""
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "CRP 5190",
    Title: "Urban Theory",
    Name: "Neema Kudva",
    Email: "nk78@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "CRP 5348",
    Title: "Design Connect",
    Name: "Michael Tomlan",
    Email: "mat4@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "CRP 5370",
    Title: "Real Estate Seminar Series",
    Name: "",
    Email: ""
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "CRP 5443",
    Title: "Global Climate Change Science and Policy",
    Name: "Allison Chatrchyan",
    Email: "amc256@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "CRP 5450",
    Title: "Inferential Statistics for Planning and Public Policy",
    Name: "Nancy Brooks",
    Email: "nb275@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "CRP 5555",
    Title: "Environmental Impact Review",
    Name: "George Frantz",
    Email: "grf4@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "CRP 5560",
    Title: "Creating the Built Environment",
    Name: "Suzanne Charles",
    Email: "slc329@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "CRP 5561",
    Title: "Innovation and Strategy in Commercial Real Estate Development",
    Name: "Suzanne Charles",
    Email: "slc329@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "CRP 5565",
    Title: "Urban Economics and Real Estate Markets",
    Name: "Nancy Brooks",
    Email: "nb275@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "CRP 5600",
    Title: "Documentation for Preservation",
    Name: "Michael Tomlan",
    Email: "mat4@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "CRP 5610",
    Title: "Historic Preservation Planning Workshop: Surveys",
    Name: "Michael Tomlan",
    Email: "mat4@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "CRP 5620",
    Title: "Perspectives on Preservation",
    Name: "Katelin Olson",
    Email: "keo24@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "CRP 5660",
    Title: "Planning and Preservation Practice: Urban Field Trip",
    Name: "",
    Email: ""
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "CRP 5662",
    Title: "Planning and Preservation Practice: Preservation National Conference",
    Name: "Michael Tomlan",
    Email: "mat4@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "CRP 5840",
    Title: "Green Cities",
    Name: "Stephan Schmidt",
    Email: "sjs96@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "CRP 5850",
    Title: "Special Topics",
    Name: "Thomas Knipe",
    Email: "trk44@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "CRP 5851",
    Title: "Special Topics in Design",
    Name: "Hobum Moon",
    Email: "hm432@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "CRP 5861",
    Title: "Graphic Communications",
    Name: "",
    Email: ""
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "CRP 6120",
    Title: "Urban Public Management",
    Name: "Mildred Warner",
    Email: "mew15@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "CRP 6270",
    Title: "Regional Economic Impact Analysis",
    Name: "John Carruthers",
    Email: "jc3474@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "CRP 6580",
    Title: "Residential and Commercial Development",
    Name: "Suzanne Charles",
    Email: "slc329@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "CRP 6594",
    Title: "Real Estate Competitions: UT Austin",
    Name: "Michael Tomlan",
    Email: "mat4@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "CRP 6640",
    Title: "Economics and Financing of Neighborhood Conservation and Preservation",
    Name: "Michael Tomlan",
    Email: "mat4@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "CRP 6770",
    Title: "Seminar on Issues in African Development",
    Name: "N'Dri Assie-Lumumba",
    Email: "na12@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "CRP 6860",
    Title: "Planning for Sustainable Transportation",
    Name: "Nicholas Klein",
    Email: "njk8@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "CRP 6901",
    Title: "Real Estate Review",
    Name: "Michael Tomlan",
    Email: "mat4@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "CRP 6990",
    Title: "Special Topics in Regional Science",
    Name: "John Carruthers",
    Email: "jc3474@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "CRP 7850",
    Title: "City and Regional Futures: Planning Practice, Policy and Design",
    Name: "Linda Shi",
    Email: "ls886@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "CRP 7940",
    Title: "Planning Internship",
    Name: "",
    Email: ""
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "CRP 7970",
    Title: "Independent Study for Graduate Students",
    Name: "",
    Email: ""
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "CRP 8300",
    Title: "Seminar in Regional Science, Planning, and Policy Analysis",
    Name: "Linda Shi",
    Email: "ls886@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "CRP 8900",
    Title: "Planning Research Seminar",
    Name: "",
    Email: ""
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "CRP 8901",
    Title: "M.R.P. Exit Project: Research",
    Name: "",
    Email: ""
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "CRP 8902",
    Title: "M.R.P. Exit Project: Research Paper-Writing",
    Name: "",
    Email: ""
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "CRP 8904",
    Title: "M.R.P. Exit Project: Professional Report-Writing",
    Name: "",
    Email: ""
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "CRP 8906",
    Title: "M.R.P. Exit Project: Thesis-Writing",
    Name: "",
    Email: ""
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "CRP 8910",
    Title: "Masters Thesis in Regional Science",
    Name: "",
    Email: ""
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "CRP 8950",
    Title: "Masters Thesis in Historic Preservation Planning",
    Name: "",
    Email: ""
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "CRP 9920",
    Title: "Doctoral Dissertation",
    Name: "",
    Email: ""
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "CS 1110",
    Title: "Introduction to Computing Using Python",
    Name: "Walker White",
    Email: "wmw2@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "CS 1112",
    Title: "Introduction to Computing Using MATLAB",
    Name: "Dominic Diaz",
    Email: "dad358@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "CS 1133",
    Title: "Short Course in Python",
    Name: "Craig Frey",
    Email: "ccf27@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "CS 1300",
    Title: "Introductory Design and Programming for the Web",
    Name: "Kyle Harms",
    Email: "kjh235@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "CS 1998",
    Title: "Freshmen and Nontechnical Team Projects",
    Name: "Walker White",
    Email: "wmw2@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "CS 2024",
    Title: "C++ Programming",
    Name: "Ronald DiNapoli",
    Email: "rd29@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "CS 2110",
    Title: "Object-Oriented Programming and Data Structures",
    Name: "Curran Muhlberger",
    Email: "cdm89@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "CS 2112",
    Title: "Object-Oriented Design and Data Structures - Honors",
    Name: "Nate Foster",
    Email: "jnf27@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "CS 2800",
    Title: "Discrete Structures",
    Name: "Alexandra Silva",
    Email: "am2344@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "CS 2850",
    Title: "Networks",
    Name: "David Easley",
    Email: "dae3@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "CS 3110",
    Title: "Data Structures and Functional Programming",
    Name: "Michael Clarkson",
    Email: "mrc26@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "CS 3300",
    Title: "Data-Driven Web Applications",
    Name: "Jeff Rzeszotarski",
    Email: "jmr395@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "CS 3410",
    Title: "Computer System Organization and Programming",
    Name: "Anne Bracy",
    Email: "awb93@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "CS 4090",
    Title: "Teaching Experience in Computer Science",
    Name: "Anke van Zuylen",
    Email: "avz2@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "CS 4210",
    Title: "Numerical Analysis and Differential Equations",
    Name: "Alexander Vladimirsky",
    Email: "abv8@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "CS 4320",
    Title: "Introduction to Database Systems",
    Name: "Immanuel Trummer",
    Email: "it224@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "CS 4321",
    Title: "Practicum in Database Systems",
    Name: "Immanuel Trummer",
    Email: "it224@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "CS 4410",
    Title: "Operating Systems",
    Name: "Lorenzo Alvisi",
    Email: "la13@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "CS 4411",
    Title: "Practicum in Operating Systems",
    Name: "Lorenzo Alvisi",
    Email: "la13@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "CS 4420",
    Title: "Computer Architecture",
    Name: "Christina Delimitrou",
    Email: "cd434@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "CS 4450",
    Title: "Introduction to Computer Networks",
    Name: "Rachit Agarwal",
    Email: "ra625@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "CS 4620",
    Title: "Introduction to Computer Graphics",
    Name: "Abe Davis",
    Email: "mad324@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "CS 4621",
    Title: "Computer Graphics Practicum",
    Name: "Abe Davis",
    Email: "mad324@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "CS 4700",
    Title: "Foundations of Artificial Intelligence",
    Name: "Bart Selman",
    Email: "bs54@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "CS 4701",
    Title: "Practicum in Artificial Intelligence",
    Name: "Bart Selman",
    Email: "bs54@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "CS 4740",
    Title: "Natural Language Processing",
    Name: "Lillian Lee",
    Email: "ljl2@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "CS 4750",
    Title: "Foundations of Robotics",
    Name: "Tapomayukh Bhattacharjee",
    Email: "tb557@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "CS 4775",
    Title: "Computational Genetics and Genomics",
    Name: "Jaehee Kim",
    Email: "jk2287@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "CS 4780",
    Title: "Introduction to Machine Learning",
    Name: "Anil Damle",
    Email: "asd239@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "CS 4787",
    Title: "Principles of Large-Scale Machine Learning Systems",
    Name: "Christopher De Sa",
    Email: "cmd353@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "CS 4812",
    Title: "Quantum Information Processing",
    Name: "Paul Ginsparg",
    Email: "phg5@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "CS 4820",
    Title: "Introduction to Analysis of Algorithms",
    Name: "Anke van Zuylen",
    Email: "avz2@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "CS 4997",
    Title: "Practical Training in Computer Science",
    Name: "Lillian Lee",
    Email: "ljl2@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "CS 4998",
    Title: "Team Projects",
    Name: "Rachit Agarwal",
    Email: "ra625@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "CS 4999",
    Title: "Independent Reading and Research",
    Name: "Tapomayukh Bhattacharjee",
    Email: "tb557@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "CS 5154",
    Title: "Software Testing",
    Name: "Owolabi Legunsen",
    Email: "ool6@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "CS 5306",
    Title: "Crowdsourcing and Human Computation",
    Name: "Haym Hirsh",
    Email: "hbh46@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "CS 5320",
    Title: "Introduction to Database Systems",
    Name: "Immanuel Trummer",
    Email: "it224@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "CS 5410",
    Title: "Operating Systems",
    Name: "Lorenzo Alvisi",
    Email: "la13@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "CS 5411",
    Title: "Practicum in Operating Systems",
    Name: "Lorenzo Alvisi",
    Email: "la13@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "CS 5412",
    Title: "Cloud Computing",
    Name: "Ken Birman",
    Email: "kpb3@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "CS 5420",
    Title: "Advanced Computer Architecture",
    Name: "Jose Martinez",
    Email: "jfm37@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "CS 5424",
    Title: "Developing and Designing Interactive Devices",
    Name: "Wendy Ju",
    Email: "wgj23@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "CS 5430",
    Title: "System Security",
    Name: "Fred Schneider",
    Email: "fbs2@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "CS 5435",
    Title: "Security and Privacy Concepts in the Wild",
    Name: "Vitaly Shmatikov",
    Email: "vs443@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "CS 5456",
    Title: "Introduction to Computer Networks",
    Name: "Rachit Agarwal",
    Email: "ra625@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "CS 5620",
    Title: "Introduction to Computer Graphics",
    Name: "Abe Davis",
    Email: "mad324@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "CS 5621",
    Title: "Computer Graphics Practicum",
    Name: "Abe Davis",
    Email: "mad324@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "CS 5650",
    Title: "Virtual and Augmented Reality",
    Name: "Harald Haraldsson",
    Email: "hh586@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "CS 5682",
    Title: "HCI and Design",
    Name: "Nicki Dell",
    Email: "nld42@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "CS 5700",
    Title: "Foundations of Artificial Intelligence",
    Name: "Bart Selman",
    Email: "bs54@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "CS 5701",
    Title: "Practicum in Artificial Intelligence",
    Name: "Bart Selman",
    Email: "bs54@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "CS 5727",
    Title: "Optimization Methods",
    Name: "Huseyin Topaloglu",
    Email: "ht88@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "CS 5740",
    Title: "Natural Language Processing",
    Name: "Lillian Lee",
    Email: "ljl2@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "CS 5750",
    Title: "Foundations of Robotics",
    Name: "Tapomayukh Bhattacharjee",
    Email: "tb557@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "CS 5777",
    Title: "Principles of Large-Scale Machine Learning Systems",
    Name: "Christopher De Sa",
    Email: "cmd353@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "CS 5780",
    Title: "Introduction to Machine Learning",
    Name: "Anil Damle",
    Email: "asd239@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "CS 5781",
    Title: "Machine Learning Engineering",
    Name: "Alexander Rush",
    Email: "amr459@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "CS 5785",
    Title: "Applied Machine Learning",
    Name: "Volodymyr Kuleshov",
    Email: "vk379@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "CS 5820",
    Title: "Introduction to Analysis of Algorithms",
    Name: "Anke van Zuylen",
    Email: "avz2@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "CS 5830",
    Title: "Cryptography",
    Name: "",
    Email: ""
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "CS 5998",
    Title: "Master of Engineering Internship",
    Name: "",
    Email: ""
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "CS 5999",
    Title: "Master of Engineering Project",
    Name: "Rachit Agarwal",
    Email: "ra625@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "CS 6117",
    Title: "Category Theory for Computer Scientists",
    Name: "Justin Hsu",
    Email: "jah659@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "CS 6210",
    Title: "Matrix Computations",
    Name: "David Bindel",
    Email: "dsb253@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "CS 6410",
    Title: "Advanced Systems",
    Name: "Robbert VanRenesse",
    Email: "rv22@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "CS 6630",
    Title: "Realistic Image Synthesis",
    Name: "Stephen Marschner",
    Email: "srm2@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "CS 6670",
    Title: "Computer Vision",
    Name: "Bharath Hariharan",
    Email: "bh497@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "CS 6702",
    Title: "Topics in Computational Sustainability",
    Name: "Carla Gomes",
    Email: "cpg5@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "CS 6742",
    Title: "Natural Language Processing and Social Interaction",
    Name: "Cristian Danescu-Niculescu-Mizil",
    Email: "cd326@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "CS 6756",
    Title: "Learning for Robot Decision Making",
    Name: "Sanjiban Choudhury",
    Email: "sc2582@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "CS 6766",
    Title: "Reasoning about Uncertainty",
    Name: "Joe Halpern",
    Email: "jyh13@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "CS 6768",
    Title: "Bridging Reasoning and Learning",
    Name: "Kevin Ellis",
    Email: "kme72@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "CS 6783",
    Title: "Machine Learning Theory",
    Name: "Karthik Sridharan",
    Email: "ks999@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "CS 6784",
    Title: "Advanced Topics in Machine Learning",
    Name: "Kilian Weinberger",
    Email: "kqw4@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "CS 6802",
    Title: "Lattices: Geometry, Cryptography, and Algorithms",
    Name: "Noah Stephens-Davidowitz",
    Email: "nhs59@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "CS 6815",
    Title: "Pseudorandomness and Combinatorial Constructions",
    Name: "Eshan Chattopadhyay",
    Email: "ec583@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "CS 6820",
    Title: "Analysis of Algorithms",
    Name: "Dexter Kozen",
    Email: "dck10@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "CS 7090",
    Title: "Computer Science Colloquium",
    Name: "",
    Email: ""
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "CS 7190",
    Title: "Seminar in Programming Languages",
    Name: "Dexter Kozen",
    Email: "dck10@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "CS 7290",
    Title: "Seminar on Scientific Computing and Numerics",
    Name: "Anil Damle",
    Email: "asd239@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "CS 7390",
    Title: "Database Seminar",
    Name: "Immanuel Trummer",
    Email: "it224@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "CS 7490",
    Title: "Systems Research Seminar",
    Name: "Rachit Agarwal",
    Email: "ra625@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "CS 7690",
    Title: "Computer Graphics and Vision Seminar",
    Name: "Abe Davis",
    Email: "mad324@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "CS 7790",
    Title: "Seminar in Artificial Intelligence",
    Name: "Thorsten Joachims",
    Email: "tj36@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "CS 7794",
    Title: "Seminar in Natural Language Understanding",
    Name: "Yoav Artzi",
    Email: "yya5@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "CS 7796",
    Title: "Robotics Seminar",
    Name: "Tapomayukh Bhattacharjee",
    Email: "tb557@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "CS 7890",
    Title: "Seminar in Theory of Algorithms and Computing",
    Name: "Eshan Chattopadhyay",
    Email: "ec583@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "CS 7999",
    Title: "Independent Research",
    Name: "Harald Haraldsson",
    Email: "hh586@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "CZECH 1131",
    Title: "Elementary Czech I",
    Name: "Angelika Kraemer",
    Email: "ak2573@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "CZECH 1133",
    Title: "Intermediate Czech I",
    Name: "Angelika Kraemer",
    Email: "ak2573@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "DEA 1101",
    Title: "Visual Literacy and Design Studio",
    Name: "John Elliott",
    Email: "jre15@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "DEA 1110",
    Title: "Making a Difference by Design",
    Name: "Cindy Hsin-Liu Kao",
    Email: "hk932@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "DEA 1500",
    Title: "Introduction to Environmental Psychology",
    Name: "Gary Evans",
    Email: "gwe1@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "DEA 1501",
    Title: "Introduction to Environmental Psychology - Writing in the Major",
    Name: "Gary Evans",
    Email: "gwe1@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "DEA 2020",
    Title: "Introduction to Sustainable Design",
    Name: "Leighton Beaman",
    Email: "mlb442@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "DEA 2030",
    Title: "Design Portfolio and Communication",
    Name: "Nooshin Ahmadi",
    Email: "ne237@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "DEA 2201",
    Title: "Magnifying Small Spaces Studio",
    Name: "Leighton Beaman",
    Email: "mlb442@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "DEA 2510",
    Title: "History of Design Futures",
    Name: "Roberta Militello",
    Email: "rjm32@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "DEA 2700",
    Title: "Healthy Places: Design, Planning and Public Health",
    Name: "",
    Email: ""
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "DEA 2730",
    Title: "Human Centered Design Methods",
    Name: "Keith Green",
    Email: "keg95@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "DEA 3030",
    Title: "Materials for Design and Sustainability",
    Name: "Rhonda Gilmore",
    Email: "rg35@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "DEA 3301",
    Title: "Design UX with Technology Studio",
    Name: "So-Yeon Yoon",
    Email: "sy492@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "DEA 3500",
    Title: "The Ambient Environment",
    Name: "Saleh Kalantari",
    Email: "sk3268@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "DEA 3510",
    Title: "Human Factors and Inclusive Design",
    Name: "Jay Yoon",
    Email: "jy846@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "DEA 3530",
    Title: "Planning and Managing the Workplace: Evidence-Based Design and Organizational Ecology",
    Name: "Rana Zadeh",
    Email: "rs952@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "DEA 3590",
    Title: "Problem-Seeking through Programming",
    Name: "Nooshin Ahmadi",
    Email: "ne237@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "DEA 4000",
    Title: "Directed Readings",
    Name: "Leighton Beaman",
    Email: "mlb442@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "DEA 4010",
    Title: "Empirical Research",
    Name: "Leighton Beaman",
    Email: "mlb442@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "DEA 4020",
    Title: "Supervised Fieldwork",
    Name: "Leighton Beaman",
    Email: "mlb442@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "DEA 4025",
    Title: "Design for Change: Imagining Decolonial Futures",
    Name: "Renata Leitao",
    Email: "rml273@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "DEA 4030",
    Title: "Teaching Apprenticeship",
    Name: "Nooshin Ahmadi",
    Email: "ne237@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "DEA 4401",
    Title: "Adaptive Reuse Studio: Recycling the Built Environment",
    Name: "Rhonda Gilmore",
    Email: "rg35@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "DEA 4500",
    Title: "Policy Meets Design: High-Impact Facilities of the 21st Century",
    Name: "Rana Zadeh",
    Email: "rs952@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "DEA 4990",
    Title: "Senior Honors Thesis",
    Name: "Leighton Beaman",
    Email: "mlb442@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "DEA 6000",
    Title: "Special Problems for Graduates",
    Name: "John Elliott",
    Email: "jre15@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "DEA 6010",
    Title: "Directed Readings",
    Name: "John Elliott",
    Email: "jre15@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "DEA 6020",
    Title: "Graduate Empirical Research",
    Name: "John Elliott",
    Email: "jre15@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "DEA 6025",
    Title: "Design for Change: Imagining Decolonial Futures",
    Name: "Renata Leitao",
    Email: "rml273@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "DEA 6030",
    Title: "Graduate Practicum",
    Name: "John Elliott",
    Email: "jre15@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "DEA 6040",
    Title: "Future Body Craft: Fabricating On-Skin Interfaces",
    Name: "Cindy Hsin-Liu Kao",
    Email: "hk932@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "DEA 6210",
    Title: "Architectural Robotics",
    Name: "Keith Green",
    Email: "keg95@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "DEA 6500",
    Title: "Problem-Seeking through Programming",
    Name: "Nooshin Ahmadi",
    Email: "ne237@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "DEA 6510",
    Title: "Human Factors and Inclusive Design",
    Name: "Jay Yoon",
    Email: "jy846@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "DEA 6520",
    Title: "The Ambient Environment",
    Name: "Saleh Kalantari",
    Email: "sk3268@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "DEA 6650",
    Title: "Poverty, Children and the Environment",
    Name: "Gary Evans",
    Email: "gwe1@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "DEA 7100",
    Title: "DEA Graduate Pro Seminar",
    Name: "John Elliott",
    Email: "jre15@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "DEA 8990",
    Title: "Master's Thesis and Research",
    Name: "John Elliott",
    Email: "jre15@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "DEA 9990",
    Title: "Ph.D. Thesis and Research",
    Name: "Gary Evans",
    Email: "gwe1@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "DESIGN 6151",
    Title: "Design and Making Across Disciplines",
    Name: "Jenny Sabin",
    Email: "jes557@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "DESIGN 6297",
    Title: "Coding for Design III",
    Name: "",
    Email: ""
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "DUTCH 1210",
    Title: "Elementary Dutch I",
    Name: "Angelika Kraemer",
    Email: "ak2573@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "DUTCH 2030",
    Title: "Intermediate Dutch I",
    Name: "Emma Britton",
    Email: "erb248@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "DUTCH 3020",
    Title: "Advanced Dutch I",
    Name: "Emma Britton",
    Email: "erb248@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "EAS 1101",
    Title: "Climate and Energy: a 21st Century Earth Science Perspective",
    Name: "Toby Ault",
    Email: "tra38@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "EAS 1190",
    Title: "Fossil Preparation",
    Name: "Warren Allmon",
    Email: "wda1@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "EAS 1220",
    Title: "Earthquake!",
    Name: "Larry Brown",
    Email: "ldb7@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "EAS 1310",
    Title: "Basic Principles of Meteorology",
    Name: "Mark Wysocki",
    Email: "mww3@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "EAS 1330",
    Title: "Basic Meteorology Lab",
    Name: "Mark Wysocki",
    Email: "mww3@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "EAS 1540",
    Title: "Introductory Oceanography",
    Name: "Bruce Monger",
    Email: "bcm3@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "EAS 1560",
    Title: "Introductory Oceanography with Laboratory",
    Name: "Bruce Monger",
    Email: "bcm3@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "EAS 1600",
    Title: "Environmental Physics",
    Name: "Susan Riha",
    Email: "sjr4@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "EAS 2250",
    Title: "The Earth System",
    Name: "Rowena Lohman",
    Email: "rbl62@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "EAS 2900",
    Title: "Introduction to Programming for Meteorology and Climate Science",
    Name: "Flavio Lehner",
    Email: "fl439@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "EAS 3010",
    Title: "Evolution of the Earth System",
    Name: "Warren Allmon",
    Email: "wda1@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "EAS 3030",
    Title: "Introduction to Biogeochemistry",
    Name: "Joseph Yavitt",
    Email: "jby1@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "EAS 3050",
    Title: "Climate Dynamics",
    Name: "Natalie Mahowald",
    Email: "nmm63@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "EAS 3410",
    Title: "Atmospheric Thermodynamics and Hydrostatics",
    Name: "Arthur Degaetano",
    Email: "atd2@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "EAS 3450",
    Title: "Environmental Geophysics",
    Name: "Kade Keranen",
    Email: "kmk299@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "EAS 4350",
    Title: "Statistical Methods in Meteorology and Climatology",
    Name: "Sara Pryor",
    Email: "sp2279@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "EAS 4441",
    Title: "Controversies in Global Climate Change Science and Policy",
    Name: "Allison Chatrchyan",
    Email: "amc256@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "EAS 4443",
    Title: "Global Climate Change Science and Policy",
    Name: "Allison Chatrchyan",
    Email: "amc256@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "EAS 4447",
    Title: "Interacting with Global Climate Policy",
    Name: "",
    Email: ""
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "EAS 4510",
    Title: "Synoptic Meteorology II",
    Name: "Mark Wysocki",
    Email: "mww3@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "EAS 4550",
    Title: "Geochemistry",
    Name: "Megan Holycross",
    Email: "meh374@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "EAS 4800",
    Title: "Atmospheric Chemistry: From Air Pollution to Global Change",
    Name: "Peter Hess",
    Email: "pgh25@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "EAS 4840",
    Title: "Inverse Methods in the Natural Sciences",
    Name: "David Hysell",
    Email: "dlh37@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "EAS 4910",
    Title: "Undergraduate Research",
    Name: "Warren Allmon",
    Email: "wda1@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "EAS 4940",
    Title: "Special Topics in Earth and Atmospheric Sciences",
    Name: "Allison Chatrchyan",
    Email: "amc256@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "EAS 4960",
    Title: "Internship Experience",
    Name: "Mark Wysocki",
    Email: "mww3@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "EAS 4970",
    Title: "Individual Study in Atmospheric Science",
    Name: "Toby Ault",
    Email: "tra38@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "EAS 4980",
    Title: "Teaching Experience in Earth and Atmospheric Sciences",
    Name: "Warren Allmon",
    Email: "wda1@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "EAS 4990",
    Title: "Undergraduate Research in Atmospheric Science",
    Name: "Toby Ault",
    Email: "tra38@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "EAS 5000",
    Title: "Master Engineering Design Project",
    Name: "Louis Derry",
    Email: "lad9@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "EAS 5011",
    Title: "Evolution of the Earth System",
    Name: "Warren Allmon",
    Email: "wda1@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "EAS 5051",
    Title: "Climate Dynamics",
    Name: "Natalie Mahowald",
    Email: "nmm63@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "EAS 5350",
    Title: "Statistical Methods in Meteorology and Climatology",
    Name: "Sara Pryor",
    Email: "sp2279@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "EAS 5443",
    Title: "Global Climate Change Science and Policy",
    Name: "Allison Chatrchyan",
    Email: "amc256@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "EAS 5447",
    Title: "Interacting with Global Climate Policy",
    Name: "",
    Email: ""
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "EAS 5450",
    Title: "Environmental Geophysics",
    Name: "Kade Keranen",
    Email: "kmk299@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "EAS 5620",
    Title: "Marine Ecosystem Sustainability",
    Name: "",
    Email: ""
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "EAS 5810",
    Title: "Introduction to Plasma Physics",
    Name: "David Hammer",
    Email: "dah5@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "EAS 5840",
    Title: "Inverse Methods in the Natural Sciences",
    Name: "David Hysell",
    Email: "dlh37@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "EAS 6550",
    Title: "Geochemistry",
    Name: "Megan Holycross",
    Email: "meh374@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "EAS 6800",
    Title: "Atmospheric Chemistry: From Air Pollution to Global Change",
    Name: "Peter Hess",
    Email: "pgh25@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "EAS 6920",
    Title: "Special Topics in Earth and Atmospheric Sciences",
    Name: "Allison Chatrchyan",
    Email: "amc256@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "EAS 7010",
    Title: "Thesis Research",
    Name: "Geoffrey Abers",
    Email: "gaa52@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "EAS 7110",
    Title: "Upper Atmospheric and Space Physics",
    Name: "David Hysell",
    Email: "dlh37@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "EAS 7310",
    Title: "Advanced Topics in Geodetic Monitoring and Modeling",
    Name: "Matthew Pritchard",
    Email: "mp337@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "EAS 7570",
    Title: "Current Research in Petrology and Geochemistry",
    Name: "Esteban Gazel",
    Email: "eg588@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "EAS 7620",
    Title: "Advanced Topics in Paleobiology",
    Name: "Warren Allmon",
    Email: "wda1@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "EAS 7650",
    Title: "Topics in Paleoecology",
    Name: "Gregory Dietl",
    Email: "gpd3@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "EAS 7710",
    Title: "Advanced Topics in Sedimentology and Stratigraphy",
    Name: "Teresa Jordan",
    Email: "tej1@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "EAS 7800",
    Title: "Earthquake Record Reading",
    Name: "Geoffrey Abers",
    Email: "gaa52@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "EAS 7810",
    Title: "Advanced Topics in Seismic Imaging",
    Name: "Larry Brown",
    Email: "ldb7@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "EAS 7930",
    Title: "Earth Science Seminar",
    Name: "Patrick Fulton",
    Email: "pmf64@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "EAS 8500",
    Title: "Master's Level Thesis Research in Atmospheric Science",
    Name: "Toby Ault",
    Email: "tra38@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "EAS 9500",
    Title: "Graduate-Level Dissertation Research in Atmospheric Science",
    Name: "Toby Ault",
    Email: "tra38@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "EAS 9510",
    Title: "Doctoral-Level Dissertation Research in Atmospheric Science",
    Name: "Toby Ault",
    Email: "tra38@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "ECE 2100",
    Title: "Introduction to Circuits for Electrical and Computer Engineers",
    Name: "Clifford Pollock",
    Email: "crp10@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "ECE 2300",
    Title: "Digital Logic and Computer Organization",
    Name: "David Albonesi",
    Email: "dha7@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "ECE 2400",
    Title: "Computer Systems Programming",
    Name: "Christopher Batten",
    Email: "cb535@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "ECE 2720",
    Title: "Data Science for Engineers",
    Name: "Vikram Krishnamurthy",
    Email: "vk342@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "ECE 3030",
    Title: "Electromagnetic Fields and Waves",
    Name: "Francesco Monticone",
    Email: "fm428@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "ECE 3250",
    Title: "Signals and Systems",
    Name: "David Delchamps",
    Email: "dfd1@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "ECE 3400",
    Title: "Intelligent Physical Systems",
    Name: "Carl Poitras",
    Email: "cbp8@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "ECE 4060",
    Title: "Quantum Physics and Engineering",
    Name: "Farhan Rana",
    Email: "fr37@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "ECE 4110",
    Title: "Random Signals in Communications and Signal Processing",
    Name: "Ziv Goldfeld",
    Email: "zg265@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "ECE 4240",
    Title: "Robot Perception",
    Name: "Silvia Ferrari",
    Email: "sf375@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "ECE 4250",
    Title: "Digital Signal Processing and Statistical Inference",
    Name: "Lang Tong",
    Email: "lt35@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "ECE 4360",
    Title: "Nanofabrication and Characterization of Electronics",
    Name: "H. Grace Xing",
    Email: "hgx2@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "ECE 4361",
    Title: "Nanofabrication and Characterization of Electronics Laboratory",
    Name: "H. Grace Xing",
    Email: "hgx2@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "ECE 4450",
    Title: "Computer Networks and Telecommunications",
    Name: "A. Kevin Tang",
    Email: "at422@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "ECE 4510",
    Title: "Electric Power Systems I",
    Name: "Hsiao-Dong Chiang",
    Email: "hc63@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "ECE 4530",
    Title: "Analog Integrated Circuit Design",
    Name: "Sunwoo Lee",
    Email: "sl933@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "ECE 4560",
    Title: "Power Electronics",
    Name: "Khurram Afridi",
    Email: "kka34@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "ECE 4570",
    Title: "Electronic Device Fundamentals",
    Name: "Debdeep Jena",
    Email: "dj326@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "ECE 4750",
    Title: "Computer Architecture",
    Name: "Christina Delimitrou",
    Email: "cd434@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "ECE 4760",
    Title: "Digital Systems Design Using Microcontrollers",
    Name: "Van Adams",
    Email: "vha3@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "ECE 4770",
    Title: "Foundations of Robotics",
    Name: "Tapomayukh Bhattacharjee",
    Email: "tb557@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "ECE 4800",
    Title: "Optimal System Analysis and Design",
    Name: "Eilyan Bitar",
    Email: "eyb5@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "ECE 4880",
    Title: "Radio Frequency Systems",
    Name: "Edwin Kan",
    Email: "eck5@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "ECE 4920",
    Title: "ECE Technical Writing",
    Name: "Van Adams",
    Email: "vha3@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "ECE 4980",
    Title: "Supervised Teaching Experience",
    Name: "Aaron Wagner",
    Email: "abw35@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "ECE 4999",
    Title: "Electrical and Computer Engineering Independent Projects",
    Name: "Jayadev Acharya",
    Email: "ja679@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "ECE 5010",
    Title: "Professional Seminar for M.Eng. Students",
    Name: "Peter Jessel",
    Email: "pgj2@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "ECE 5110",
    Title: "Random Signals in Communications and Signal Processing",
    Name: "Ziv Goldfeld",
    Email: "zg265@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "ECE 5120",
    Title: "Model Based Systems Engineering",
    Name: "David Schneider",
    Email: "drs44@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "ECE 5240",
    Title: "Robot Perception",
    Name: "Silvia Ferrari",
    Email: "sf375@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "ECE 5250",
    Title: "Digital Signal Processing and Statistical Inference",
    Name: "Lang Tong",
    Email: "lt35@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "ECE 5260",
    Title: "Graph-Based Data Science for Networked Systems",
    Name: "Anna Scaglione",
    Email: "as337@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "ECE 5330",
    Title: "Quantum Physics and Engineering",
    Name: "Farhan Rana",
    Email: "fr37@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "ECE 5413",
    Title: "Developing and Designing Interactive Devices",
    Name: "Wendy Ju",
    Email: "wgj23@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "ECE 5414",
    Title: "Applied Machine Learning",
    Name: "Volodymyr Kuleshov",
    Email: "vk379@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "ECE 5415",
    Title: "Applied Digital Signal Processing and Communications",
    Name: "Mert Sabuncu",
    Email: "ms3375@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "ECE 5470",
    Title: "Computer Vision",
    Name: "Anthony Reeves",
    Email: "apr5@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "ECE 5510",
    Title: "Electric Power Systems I",
    Name: "Hsiao-Dong Chiang",
    Email: "hc63@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "ECE 5530",
    Title: "Analog Integrated Circuit Design",
    Name: "Sunwoo Lee",
    Email: "sl933@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "ECE 5560",
    Title: "Power Electronics",
    Name: "Khurram Afridi",
    Email: "kka34@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "ECE 5640",
    Title: "Statistical Inference and Decision",
    Name: "Qing Zhao",
    Email: "qz16@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "ECE 5660",
    Title: "Computer Networks and Telecommunications",
    Name: "A. Kevin Tang",
    Email: "at422@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "ECE 5690",
    Title: "Radio Frequency Systems",
    Name: "Edwin Kan",
    Email: "eck5@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "ECE 5725",
    Title: "Design with Embedded Operating Systems",
    Name: "Joseph Skovira",
    Email: "jfs9@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "ECE 5730",
    Title: "Digital Systems Design Using Microcontrollers",
    Name: "Van Adams",
    Email: "vha3@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "ECE 5740",
    Title: "Computer Architecture",
    Name: "Christina Delimitrou",
    Email: "cd434@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "ECE 5750",
    Title: "Advanced Computer Architecture",
    Name: "Jose Martinez",
    Email: "jfm37@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "ECE 5775",
    Title: "High-Level Digital Design Automation",
    Name: "Zhiru Zhang",
    Email: "zz284@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "ECE 5810",
    Title: "Introduction to Plasma Physics",
    Name: "David Hammer",
    Email: "dah5@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "ECE 5830",
    Title: "Introduction to Technical Management",
    Name: "Peter Jessel",
    Email: "pgj2@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "ECE 5870",
    Title: "Energy Seminar I",
    Name: "C. Anderson",
    Email: "cla28@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "ECE 5960",
    Title: "Advanced Topics in Electrical and Computer Engineering",
    Name: "Elizabeth Helbling",
    Email: "efh45@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "ECE 5997",
    Title: "Independent Study",
    Name: "Jayadev Acharya",
    Email: "ja679@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "ECE 5998",
    Title: "Directed Research",
    Name: "Jayadev Acharya",
    Email: "ja679@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "ECE 5999",
    Title: "MEng Technical Internship",
    Name: "Peter Jessel",
    Email: "pgj2@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "ECE 6320",
    Title: "Applied Magnetism",
    Name: "Amal El-Ghazaly",
    Email: "ase63@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "ECE 6930",
    Title: "Master of Engineering Design Project I",
    Name: "Jayadev Acharya",
    Email: "ja679@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "ECE 6990",
    Title: "Special Topics in Electrical and Computer Engineering",
    Name: "Amal El-Ghazaly",
    Email: "ase63@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "ECE 7910",
    Title: "Thesis Research",
    Name: "Jayadev Acharya",
    Email: "ja679@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "ECON 1001",
    Title: "Principles of Micro-Economics Supplement",
    Name: "Albert Alexander",
    Email: "awa2@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "ECON 1002",
    Title: "Principles of Macro-Economics Supplement",
    Name: "Albert Alexander",
    Email: "awa2@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "ECON 1110",
    Title: "Introductory Microeconomics",
    Name: "Nicholas Sanders",
    Email: "njs224@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "ECON 1120",
    Title: "Introductory Macroeconomics",
    Name: "Jennifer Wissink",
    Email: "jpw6@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "ECON 2040",
    Title: "Networks",
    Name: "David Easley",
    Email: "dae3@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "ECON 3030",
    Title: "Intermediate Microeconomic Theory",
    Name: "Douglas McKee",
    Email: "dmm399@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "ECON 3040",
    Title: "Intermediate Macroeconomic Theory",
    Name: "",
    Email: ""
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "ECON 3110",
    Title: "Probability Models and Inference for the Social Sciences",
    Name: "Thomas Diciccio",
    Email: "tjd9@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "ECON 3120",
    Title: "Applied Econometrics",
    Name: "George Jakubson",
    Email: "gj10@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "ECON 3130",
    Title: "Statistics and Probability",
    Name: "Douglas McKee",
    Email: "dmm399@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "ECON 3171",
    Title: "Causal Reasoning and Policy Evaluation I",
    Name: "Max Kapustin",
    Email: "mk2624@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "ECON 3255",
    Title: "Economics of Crime",
    Name: "Max Kapustin",
    Email: "mk2624@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "ECON 3440",
    Title: "Women in the Economy",
    Name: "Francine Blau",
    Email: "fdb4@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "ECON 3460",
    Title: "The Economics of Collective Bargaining in Sports",
    Name: "Lawrence Kahn",
    Email: "lmk12@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "ECON 3480",
    Title: "Race and the American Labor Market in Historical Perspective",
    Name: "Seth Sanders",
    Email: "ss3977@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "ECON 3545",
    Title: "International Finance and Macroeconomics",
    Name: "Eswar Prasad",
    Email: "esp54@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "ECON 3610",
    Title: "The Economics of Consumer Policy",
    Name: "Sharon Tennyson",
    Email: "st96@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "ECON 3801",
    Title: "Introduction to Game Theory and Strategic Thinking",
    Name: "Kaushik Basu",
    Email: "kb40@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "ECON 3805",
    Title: "Competition Law and Policy",
    Name: "George Hay",
    Email: "gah7@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "ECON 3830",
    Title: "Economics of Consumer Protection and the Law",
    Name: "Alan Mathios",
    Email: "adm5@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "ECON 3850",
    Title: "Economics and Environmental Policy",
    Name: "Nicholas Sanders",
    Email: "njs224@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "ECON 3870",
    Title: "Business and Economics of Energy",
    Name: "Todd Gerarden",
    Email: "tdg48@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "ECON 3910",
    Title: "Health, Poverty, and Inequality: A Global Perspective",
    Name: "David Sahn",
    Email: "des16@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "ECON 4260",
    Title: "Public Finance: The Microeconomics of Government",
    Name: "Jennifer Wissink",
    Email: "jpw6@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "ECON 4290",
    Title: "Economic Analysis of Politics",
    Name: "Stephen Coate",
    Email: "sc163@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "ECON 4660",
    Title: "Behavioral Economics",
    Name: "Ted O'Donoghue",
    Email: "edo1@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "ECON 4902",
    Title: "Banks",
    Name: "Nicholas Kiefer",
    Email: "nmk1@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "ECON 4990",
    Title: "Honors Program Preparation",
    Name: "",
    Email: ""
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "ECON 4997",
    Title: "Cross-Cultural Work Experiences",
    Name: "Terence Murphy",
    Email: "tmm53@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "ECON 4998",
    Title: "Cross-Cultural Work Experiences",
    Name: "Terence Murphy",
    Email: "tmm53@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "ECON 4999",
    Title: "Independent Study in Economics",
    Name: "Jennifer Wissink",
    Email: "jpw6@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "ECON 6090",
    Title: "Microeconomic Theory I",
    Name: "David Easley",
    Email: "dae3@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "ECON 6130",
    Title: "Macroeconomics I",
    Name: "Kristoffer Nimark",
    Email: "pkn8@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "ECON 6170",
    Title: "Intermediate Mathematical Economics I",
    Name: "Suraj Malladi",
    Email: "sm2378@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "ECON 6190",
    Title: "Econometrics I",
    Name: "Chen Qiu",
    Email: "cq62@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "ECON 6590",
    Title: "Empirical Strategies for Policy Analysis",
    Name: "Douglas Miller",
    Email: "dlm336@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "ECON 6910",
    Title: "Foundations of the Social Sciences",
    Name: "Richard Bensel",
    Email: "rfb2@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "ECON 6990",
    Title: "Readings in Economics",
    Name: "C.-Y. Cynthia Lin Lawell",
    Email: "cl2447@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "ECON 7240",
    Title: "Causal Inference and Machine Learning",
    Name: "Chen Qiu",
    Email: "cq62@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "ECON 7420",
    Title: "Seminar in Labor Economics I",
    Name: "Evan Riehl",
    Email: "er488@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "ECON 7540",
    Title: "Economics of Networks: Theory",
    Name: "Suraj Malladi",
    Email: "sm2378@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "ECON 7650",
    Title: "Development Microeconomics Graduate Research Seminar",
    Name: "Chris Barrett",
    Email: "cbb2@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "ECON 7670",
    Title: "Topics in International Finance",
    Name: "Eswar Prasad",
    Email: "esp54@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "ECON 7740",
    Title: "Law and Economics: A Game-Theoretic Approach",
    Name: "Kaushik Basu",
    Email: "kb40@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "ECON 7841",
    Title: "Econometrics Workshop",
    Name: "Joerg Stoye",
    Email: "js2434@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "ECON 7842",
    Title: "Microeconomic Theory Workshop",
    Name: "Tommaso Denti",
    Email: "tjd237@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "ECON 7843",
    Title: "Industrial Organization Workshop",
    Name: "",
    Email: ""
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "ECON 7845",
    Title: "Workshop in Labor Economics",
    Name: "Francine Blau",
    Email: "fdb4@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "ECON 7846",
    Title: "S.C. Tsiang Macroeconomics Workshop",
    Name: "Mathieu Taschereau-Dumouchel",
    Email: "mt763@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "ECON 7847",
    Title: "Development Workshop",
    Name: "Kaushik Basu",
    Email: "kb40@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "ECON 7848",
    Title: "Public Economics Workshop",
    Name: "Stephen Coate",
    Email: "sc163@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "ECON 7849",
    Title: "Behavioral Economics Workshop",
    Name: "Ted O'Donoghue",
    Email: "edo1@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "ECON 7850",
    Title: "Third Year Research Seminar",
    Name: "Levon Barseghyan",
    Email: "lb247@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "EDUC 2200",
    Title: "Introduction to Adult Learning",
    Name: "Annalisa Raymer",
    Email: "alr26@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "EDUC 2410",
    Title: "The Art of Teaching",
    Name: "Jeffrey Perry",
    Email: "jap255@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "EDUC 2610",
    Title: "Intergroup Dialogue",
    Name: "Jazlin Gomez",
    Email: "jmg495@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "EDUC 3110",
    Title: "Educational Psychology",
    Name: "Heidi Mouillesseaux-Kunzman",
    Email: "hmm1@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "EDUC 3350",
    Title: "Youth Organizations and Leadership Development",
    Name: "Jeffrey Perry",
    Email: "jap255@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "EDUC 4010",
    Title: "Special Methods of Instruction in Agricultural Science Education",
    Name: "Jeffrey Perry",
    Email: "jap255@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "EDUC 4050",
    Title: "Perspectives in Collegiate Teaching and Learning",
    Name: "Jeffrey Perry",
    Email: "jap255@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "EDUC 4826",
    Title: "Leading Dialogue Across Difference: Practicum in Intergroup Relations",
    Name: "Adi Grabiner Keinan",
    Email: "ag649@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "EDUC 4940",
    Title: "Special Topics in Education",
    Name: "Annalisa Raymer",
    Email: "alr26@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "EDUC 4960",
    Title: "Undergraduate Internship In Education",
    Name: "",
    Email: ""
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "EDUC 4970",
    Title: "Individual Study in Education",
    Name: "Sasha Endo",
    Email: "ske5@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "EDUC 4980",
    Title: "Undergraduate Teaching",
    Name: "",
    Email: ""
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "EDUC 4990",
    Title: "Undergraduate Research",
    Name: "",
    Email: ""
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "EDUC 5100",
    Title: "Teaching English to Speakers of Other Languages and its Sociolinguistic Contexts",
    Name: "Sasha Endo",
    Email: "ske5@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "EDUC 5350",
    Title: "Youth Organizations and Leadership Development",
    Name: "Jeffrey Perry",
    Email: "jap255@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "EDUC 7010",
    Title: "Empirical Research",
    Name: "Scott Peters",
    Email: "sp236@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "ELSO 6210",
    Title: "Improving Pronunciation",
    Name: "Melissa Myers",
    Email: "mm177@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "ELSO 6220",
    Title: "Taking Part in Discussions",
    Name: "Melissa Myers",
    Email: "mm177@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "ELSO 6230",
    Title: "Designing and Delivering Effective Presentations",
    Name: "Nathan Lindberg",
    Email: "nwl26@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "ELSO 6515",
    Title: "Preparing to Write Workshop",
    Name: "Michelle Crow",
    Email: "mtc225@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "ELSO 6535",
    Title: "Research Paper Writing Workshop",
    Name: "Nathan Lindberg",
    Email: "nwl26@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "ELSO 6565",
    Title: "Thesis and Dissertation Writing Workshop",
    Name: "Michelle Crow",
    Email: "mtc225@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "ELSO 6595",
    Title: "Revising and Editing Workshop",
    Name: "Melissa Myers",
    Email: "mm177@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "ELSO 6610",
    Title: "Communicating in the Workplace",
    Name: "Michelle Crow",
    Email: "mtc225@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "ELSO 6620",
    Title: "Preparing for the Professional Job Search",
    Name: "Nathan Lindberg",
    Email: "nwl26@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "ENGL 1105",
    Title: "FWS: Writing and Sexual Politics",
    Name: "Peter Shipman",
    Email: "pas345@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "ENGL 2010",
    Title: "Literatures in English I: From Old English to the New World",
    Name: "Andrew Galloway",
    Email: "asg6@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "ENGL 2270",
    Title: "Shakespeare",
    Name: "Philip Lorenz",
    Email: "pal37@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "ENGL 2400",
    Title: "Introduction to U.S. Latinx Literature",
    Name: "Debra Castillo",
    Email: "dac9@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "ENGL 2512",
    Title: "Caribbean Worlds",
    Name: "",
    Email: ""
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "ENGL 2600",
    Title: "Introduction to Native American Literature",
    Name: "Juliana Hu Pegues",
    Email: "jhp249@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "ENGL 2603",
    Title: "The Novels of Toni Morrison",
    Name: "Anne Adams",
    Email: "ava2@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "ENGL 2650",
    Title: "Introduction to African American Literature",
    Name: "Derrick Spires",
    Email: "drs385@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "ENGL 2690",
    Title: "American Poetry Since 1850",
    Name: "George Hutchinson",
    Email: "gbh33@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "ENGL 2800",
    Title: "Creative Writing",
    Name: "Zahid Rafiq",
    Email: "zr66@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "ENGL 2880",
    Title: "Expository Writing",
    Name: "Maggie O",
    Email: "mo433@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "ENGL 2950",
    Title: "Introduction to Humanities",
    Name: "Caroline Levine",
    Email: "cel235@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "ENGL 2951",
    Title: "Poetry's Image",
    Name: "Jonathan Monroe",
    Email: "jbm3@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "ENGL 3080",
    Title: "Icelandic Family Sagas",
    Name: "Thomas Hill",
    Email: "tdh1@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "ENGL 3110",
    Title: "Old English",
    Name: "Thomas Hill",
    Email: "tdh1@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "ENGL 3280",
    Title: "The Bible as Literature",
    Name: "Samantha Zacher",
    Email: "sz66@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "ENGL 3335",
    Title: "Sing the Rage",
    Name: "Neil Saccamano",
    Email: "ncs5@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "ENGL 3360",
    Title: "American Drama and Theatre",
    Name: "Sara Warner",
    Email: "slw42@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "ENGL 3560",
    Title: "Thinking from a Different Place: Indigenous Philosophies",
    Name: "Eric Cheyfitz",
    Email: "etc7@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "ENGL 3775",
    Title: "bell hooks Books: From Feminism to Autobiography",
    Name: "",
    Email: ""
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "ENGL 3778",
    Title: "Free Speech, Censorship, and the Age of Global Media",
    Name: "Rayna Kalas",
    Email: "rmk45@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "ENGL 3795",
    Title: "Communicating Climate Change",
    Name: "Caroline Levine",
    Email: "cel235@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "ENGL 3820",
    Title: "Narrative Writing",
    Name: "Emily Fridlund",
    Email: "ejf97@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "ENGL 3840",
    Title: "Poetry Writing",
    Name: "Ishion Hutchinson",
    Email: "iih2@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "ENGL 4020",
    Title: "Literature as Moral Inquiry",
    Name: "Satya Mohanty",
    Email: "spm5@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "ENGL 4210",
    Title: "Shakespeare in (Con)text",
    Name: "Bruce Levitt",
    Email: "bal5@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "ENGL 4556",
    Title: "Decolonial Poetics and Aesthetics: Arts of Resistance in the Americas",
    Name: "Ananda Cohen-Aponte",
    Email: "aic42@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "ENGL 4625",
    Title: "Contemporary Native American Fiction",
    Name: "Eric Cheyfitz",
    Email: "etc7@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "ENGL 4705",
    Title: "Human-Centered Design and Engaged Media",
    Name: "Jon McKenzie",
    Email: "jvm62@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "ENGL 4800",
    Title: "Advanced Poetry Writing",
    Name: "Lyrae Van Clief-Stefanon",
    Email: "lv48@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "ENGL 4801",
    Title: "Advanced Narrative Writing",
    Name: "Ernesto Quinonez",
    Email: "eq25@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "ENGL 4910",
    Title: "Honors Seminar I",
    Name: "Masha Raskolnikov",
    Email: "mr283@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "ENGL 4930",
    Title: "Honors Essay Tutorial I",
    Name: "Ellis Hanson",
    Email: "eh36@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "ENGL 4940",
    Title: "Honors Essay Tutorial II",
    Name: "Kevin Attell",
    Email: "kda24@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "ENGL 4950",
    Title: "Independent Study",
    Name: "Caroline Levine",
    Email: "cel235@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "ENGL 4976",
    Title: "Lyric Interventions: Illness Narratives and the Aesthetics of Repair",
    Name: "",
    Email: ""
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "ENGL 6000",
    Title: "Colloquium for Entering Students",
    Name: "Kevin Attell",
    Email: "kda24@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "ENGL 6110",
    Title: "Old English",
    Name: "Thomas Hill",
    Email: "tdh1@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "ENGL 6207",
    Title: "Black Feminist Theories: Sexuality, Creativity, and Power",
    Name: "Carole Boyce Davies",
    Email: "ceb278@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "ENGL 6565",
    Title: "Decolonial Poetics and Aesthetics: Arts of Resistance in the Americas",
    Name: "Ananda Cohen-Aponte",
    Email: "aic42@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "ENGL 6630",
    Title: "Asian American Theory and Literature",
    Name: "Juliana Hu Pegues",
    Email: "jhp249@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "ENGL 6644",
    Title: "Troubling Ecology",
    Name: "Chelsea Frazier",
    Email: "cmf284@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "ENGL 6725",
    Title: "Aesthetics and Politics of Touch",
    Name: "Timothy Murray",
    Email: "tcm1@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "ENGL 6782",
    Title: "Comic Books and Graphic Novels: Delinquent Reading After Modernism",
    Name: "Gregory Londe",
    Email: "gml82@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "ENGL 7800",
    Title: "MFA Seminar: Poetry",
    Name: "Valzhyna Mort",
    Email: "vm274@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "ENGL 7801",
    Title: "MFA Seminar: Fiction",
    Name: "J. Robert Lennon",
    Email: "jrl24@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "ENGL 7940",
    Title: "Directed Study",
    Name: "Jane Juffer",
    Email: "jaj93@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "ENGL 7950",
    Title: "Group Study",
    Name: "Jodi Byrd",
    Email: "jab822@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "ENGL 7960",
    Title: "Placement Seminar",
    Name: "Elisha Cohn",
    Email: "ejc244@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "ENGRC 3023",
    Title: "Communication Intensive Opportunity: Practicum in Technical Writing",
    Name: "Rick Evans",
    Email: "rae27@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "ENGRC 3025",
    Title: "Creating and Communicating Your Digital Professionalism",
    Name: "Hua Wang",
    Email: "hw472@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "ENGRC 3111",
    Title: "Communications for Junior Lab I",
    Name: "Allison Hutchison",
    Email: "abh98@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "ENGRC 3350",
    Title: "Organizational Communications for Engineers",
    Name: "Rick Evans",
    Email: "rae27@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "ENGRC 3500",
    Title: "Engineering Communications",
    Name: "Hua Wang",
    Email: "hw472@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "ENGRC 3640",
    Title: "Technical Communication for Applied Engineering Physics",
    Name: "Traci Nathans-Kelly",
    Email: "tmn46@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "ENGRC 3700",
    Title: "Communications Consulting for Engineers",
    Name: "Allison Hutchison",
    Email: "abh98@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "ENGRC 4590",
    Title: "Communications for Capstone Design in Biological Engineering",
    Name: "Rick Evans",
    Email: "rae27@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "ENGRD 2020",
    Title: "Statics and Mechanics of Solids",
    Name: "Hadas Ritz",
    Email: "hr32@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "ENGRD 2100",
    Title: "Introduction to Circuits for Electrical and Computer Engineers",
    Name: "Clifford Pollock",
    Email: "crp10@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "ENGRD 2110",
    Title: "Object-Oriented Programming and Data Structures",
    Name: "Curran Muhlberger",
    Email: "cdm89@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "ENGRD 2112",
    Title: "Object-Oriented Design and Data Structures - Honors",
    Name: "Nate Foster",
    Email: "jnf27@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "ENGRD 2140",
    Title: "Computer Systems Programming",
    Name: "Christopher Batten",
    Email: "cb535@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "ENGRD 2190",
    Title: "Chemical Process Design and Analysis",
    Name: "T. Michael Duncan",
    Email: "tmd10@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "ENGRD 2202",
    Title: "Biomedical Transport Phenomena",
    Name: "Peter Doerschuk",
    Email: "pd83@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "ENGRD 2210",
    Title: "Thermodynamics",
    Name: "Elizabeth Fisher",
    Email: "emf4@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "ENGRD 2250",
    Title: "The Earth System",
    Name: "Rowena Lohman",
    Email: "rbl62@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "ENGRD 2300",
    Title: "Digital Logic and Computer Organization",
    Name: "David Albonesi",
    Email: "dha7@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "ENGRD 2510",
    Title: "Engineering Processes for Environmental Sustainability",
    Name: "Jillian Goldfarb",
    Email: "jlg459@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "ENGRD 2600",
    Title: "Principles of Biological Engineering",
    Name: "John March",
    Email: "jcm224@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "ENGRD 2610",
    Title: "Mechanical Properties of Materials: From Nanodevices to Superstructures",
    Name: "Michele Conrad",
    Email: "mmc2@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "ENGRD 2700",
    Title: "Basic Engineering Probability and Statistics",
    Name: "Jamol Pender",
    Email: "jjp274@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "ENGRD 2720",
    Title: "Data Science for Engineers",
    Name: "Vikram Krishnamurthy",
    Email: "vk342@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "ENGRG 1009",
    Title: "AEW Collaborative Workshop: CHEM 2090",
    Name: "Celia Evans",
    Email: "cae223@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "ENGRG 1010",
    Title: "AEW Collaborative Workshop: CS 1110",
    Name: "Celia Evans",
    Email: "cae223@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "ENGRG 1011",
    Title: "AEW Collaborative Workshop: CS 2110",
    Name: "Celia Evans",
    Email: "cae223@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "ENGRG 1012",
    Title: "AEW Collaborative Workshop: CS 1112",
    Name: "Celia Evans",
    Email: "cae223@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "ENGRG 1027",
    Title: "AEW Collaborative Workshop: ENGRD 2700",
    Name: "Celia Evans",
    Email: "cae223@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "ENGRG 1028",
    Title: "AEW Collaborative Workshop: CS 2800",
    Name: "Celia Evans",
    Email: "cae223@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "ENGRG 1031",
    Title: "AEW Collaborative Workshop: CS 3110",
    Name: "Celia Evans",
    Email: "cae223@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "ENGRG 1034",
    Title: "AEW Collaborative Workshop: CS 3410",
    Name: "Celia Evans",
    Email: "cae223@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "ENGRG 1050",
    Title: "Engineering Seminar",
    Name: "",
    Email: ""
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "ENGRG 1052",
    Title: "Coaching and Mentoring for Professional and Student Success",
    Name: "Daniel Toronto",
    Email: "dkt33@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "ENGRG 1091",
    Title: "AEW Collaborative Workshop: MATH 1910",
    Name: "Celia Evans",
    Email: "cae223@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "ENGRG 1092",
    Title: "AEW Collaborative Workshop: MATH 1920",
    Name: "Celia Evans",
    Email: "cae223@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "ENGRG 1093",
    Title: "AEW Collaborative Workshop: MATH 2930",
    Name: "Celia Evans",
    Email: "cae223@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "ENGRG 1094",
    Title: "AEW Collaborative Workshop: MATH 2940",
    Name: "Celia Evans",
    Email: "cae223@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "ENGRG 1400",
    Title: "Engineering Project Team Onboarding",
    Name: "Lauren Stulgis",
    Email: "ls948@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "ENGRG 2270",
    Title: "Introduction to Entrepreneurship for Engineers",
    Name: "John Richard Callister",
    Email: "jc62@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "ENGRG 2350",
    Title: "Career Development in Engineering",
    Name: "Christa Downey",
    Email: "cd238@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "ENGRG 3910",
    Title: "Applied Engineering Leadership",
    Name: "Erica Dawson",
    Email: "ecd6@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "ENGRG 4960",
    Title: "Entrepreneurial Practicum in Engineering",
    Name: "John Richard Callister",
    Email: "jc62@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "ENGRG 4990",
    Title: "Teaching in Engineering Leadership",
    Name: "Erica Dawson",
    Email: "ecd6@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "ENGRG 4998",
    Title: "Engineering Practical Training",
    Name: "Alan Zehnder",
    Email: "atz2@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "ENGRG 5350",
    Title: "Career Development for Engineering",
    Name: "Jennifer Micale",
    Email: "jjm368@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "ENGRG 6780",
    Title: "Teaching Seminar",
    Name: "Celia Evans",
    Email: "cae223@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "ENGRI 1100",
    Title: "Lasers and Photonics",
    Name: "Peter McMahon",
    Email: "plm99@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "ENGRI 1101",
    Title: "Engineering Applications of Operations Research",
    Name: "David Shmoys",
    Email: "dbs10@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "ENGRI 1120",
    Title: "Introduction to Chemical Engineering",
    Name: "Jeffrey Varner",
    Email: "jdv27@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "ENGRI 1140",
    Title: "Materials: The Future of Energy",
    Name: "R. van Dover",
    Email: "rbv2@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "ENGRI 1160",
    Title: "Modern Structures",
    Name: "Kenneth Hover",
    Email: "kch7@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "ENGRI 1170",
    Title: "Introduction to Mechanical Engineering",
    Name: "",
    Email: ""
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "ENGRI 1200",
    Title: "Introduction to Nanoscience and Nanoengineering",
    Name: "Valla Fatemi",
    Email: "vf82@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "ENGRI 1220",
    Title: "Earthquake!",
    Name: "Larry Brown",
    Email: "ldb7@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "ENGRI 1270",
    Title: "Introduction to Entrepreneurship for Engineers",
    Name: "John Richard Callister",
    Email: "jc62@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "ENGRI 1310",
    Title: "Introduction to Biomedical Engineering",
    Name: "Esak Lee",
    Email: "el767@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "ENGRI 1337",
    Title: "Introduction to Biological Engineering",
    Name: "Sunghwan Jung",
    Email: "sj737@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "ENMGT 3101",
    Title: "Introduction to Python for Engineering",
    Name: "Seth Schweitzer",
    Email: "sas262@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "ENMGT 5050",
    Title: "Interdisciplinary Master of Engineering Project",
    Name: "Ruth Richardson",
    Email: "rer26@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "ENMGT 5101",
    Title: "Introduction to Python for Engineering",
    Name: "Seth Schweitzer",
    Email: "sas262@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "ENMGT 5200",
    Title: "Economics of the Energy Transition",
    Name: "Jacob Mays",
    Email: "jpm452@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "ENMGT 5900",
    Title: "Project Management",
    Name: "Robert Newman",
    Email: "rtn24@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "ENMGT 5910",
    Title: "Engineering Management Project",
    Name: "Linda Nozick",
    Email: "lkn3@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "ENMGT 5930",
    Title: "Data Analytics",
    Name: "Linda Nozick",
    Email: "lkn3@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "ENMGT 5940",
    Title: "Economics and Finance for Engineering Management",
    Name: "Robert Newman",
    Email: "rtn24@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "ENMGT 5950",
    Title: "Construction Planning and Operations",
    Name: "Erik Eshelman",
    Email: "epe8@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "ENMGT 5980",
    Title: "Decision Framing and Analytics",
    Name: "Patrick Reed",
    Email: "pmr82@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "ENMGT 6001",
    Title: "Residential Intensive I",
    Name: "Andrea Ippolito",
    Email: "aki2@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "ENMGT 6020",
    Title: "Managing a Culture of Innovation",
    Name: "",
    Email: ""
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "ENMGT 6090",
    Title: "Professional and Leadership Development Seminar",
    Name: "Andrea Ippolito",
    Email: "aki2@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "ENTOM 2030",
    Title: "Honey Bees: Their Intriguing Biology and Interactions with Humans and More",
    Name: "Marina Caillaud",
    Email: "cmc27@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "ENTOM 2031",
    Title: "Honey Bees: Their Intriguing Biology and Interactions with Humans",
    Name: "Marina Caillaud",
    Email: "cmc27@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "ENTOM 2120",
    Title: "Insect Biology",
    Name: "John Sanderson",
    Email: "jps3@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "ENTOM 2150",
    Title: "Spider Biology: Life on a Silken Thread",
    Name: "Linda Rayor",
    Email: "lsr1@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "ENTOM 3070",
    Title: "Pesticides, the Environment, and Human Health",
    Name: "Jeffrey Scott",
    Email: "jgs5@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "ENTOM 3150",
    Title: "Spider Biology",
    Name: "Linda Rayor",
    Email: "lsr1@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "ENTOM 3350",
    Title: "Naturalist Outreach Practicum",
    Name: "Linda Rayor",
    Email: "lsr1@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "ENTOM 3360",
    Title: "Naturalist Outreach Continued",
    Name: "Linda Rayor",
    Email: "lsr1@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "ENTOM 4520",
    Title: "Biology of Disease Vectors",
    Name: "Laura Harrington",
    Email: "lch27@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "ENTOM 4521",
    Title: "Introduction to Disease Vectors Lab",
    Name: "Laura Harrington",
    Email: "lch27@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "ENTOM 4550",
    Title: "Insect Ecology",
    Name: "Jennifer Thaler",
    Email: "jst37@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "ENTOM 4970",
    Title: "Individual Study in Entomology",
    Name: "",
    Email: ""
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "ENTOM 4980",
    Title: "Undergraduate Teaching",
    Name: "Patrick O'Grady",
    Email: "pmo43@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "ENTOM 4990",
    Title: "Undergraduate Research in Entomology",
    Name: "",
    Email: ""
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "ENTOM 6900",
    Title: "Seminar in Ecology and Evolution of Infectious Diseases",
    Name: "Megan Greischar",
    Email: "mag469@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "ENTOM 7070",
    Title: "Individual Study for Graduate Students",
    Name: "",
    Email: ""
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "ENTOM 7090",
    Title: "Teaching Entomology",
    Name: "Ann Hajek",
    Email: "aeh4@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "ENTOM 7640",
    Title: "Plant-Insect Interactions Seminar",
    Name: "Anurag Agrawal",
    Email: "aa337@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "ENTOM 7670",
    Title: "Professional Development in Entomology",
    Name: "Courtney Murdock",
    Email: "ccm256@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "ENTOM 8900",
    Title: "Master's Level Thesis Research",
    Name: "Nicolas Buchon",
    Email: "nsb56@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "ENTOM 9900",
    Title: "Doctoral Level Thesis Research",
    Name: "Bryan Danforth",
    Email: "bnd1@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "ENVS 1101",
    Title: "Understanding Environment and Sustainability",
    Name: "Cliff Kraft",
    Email: "cek7@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "ENVS 2000",
    Title: "Environment and Sustainability Colloquium",
    Name: "Johannes Lehmann",
    Email: "cl273@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "ENVS 2100",
    Title: "Introductory Field Biology",
    Name: "Marc Goebel",
    Email: "mg567@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "ENVS 2400",
    Title: "Field Methods in Avian Ecology",
    Name: "David Bonter",
    Email: "dnb23@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "ENVS 3020",
    Title: "Earth Projects",
    Name: "Anna Davidson",
    Email: "amd355@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "ENVS 4600",
    Title: "Planning for Environmental Conservation and Sustainability",
    Name: "Bruce Lauber",
    Email: "tbl3@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "ENVS 4960",
    Title: "Internship in Environment and Sustainability",
    Name: "",
    Email: ""
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "ENVS 4970",
    Title: "Individual Study in Environment and Sustainability",
    Name: "",
    Email: ""
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "ENVS 4990",
    Title: "Undergraduate Research in Environment and Sustainability",
    Name: "",
    Email: ""
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "FDSC 1101",
    Title: "Science and Technology of Foods",
    Name: "Christopher Loss",
    Email: "crl3@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "FDSC 1105",
    Title: "Introduction to Wines and Vines Laboratory",
    Name: "Kathy Arnink",
    Email: "kja1@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "FDSC 2000",
    Title: "Introduction to Physiochemical and Biological Aspects of Foods",
    Name: "Tolunay Beker Aydemir",
    Email: "tb536@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "FDSC 2205",
    Title: "Growing Grapes and Making Wines Laboratory",
    Name: "Kathy Arnink",
    Email: "kja1@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "FDSC 2310",
    Title: "The Science and Technology of Beer",
    Name: "Dwayne Bershaw",
    Email: "db633@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "FDSC 3940",
    Title: "Applied and Food Microbiology",
    Name: "Patrick Gibney",
    Email: "pag235@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "FDSC 3950",
    Title: "Food Microbiology Laboratory",
    Name: "Christopher Loss",
    Email: "crl3@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "FDSC 4010",
    Title: "Concepts of Food Product Development",
    Name: "Olga Padilla-Zakour",
    Email: "oip1@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "FDSC 4050",
    Title: "Dairy Chemistry",
    Name: "David Barbano",
    Email: "dmb37@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "FDSC 4100",
    Title: "Sensory Evaluation of Food",
    Name: "Robin Dando",
    Email: "rd426@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "FDSC 4210",
    Title: "Food Engineering Principles",
    Name: "Syed Rizvi",
    Email: "ssr3@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "FDSC 4230",
    Title: "Unit Operations and Food Packaging",
    Name: "Julie Goddard",
    Email: "jmg26@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "FDSC 4240",
    Title: "Food Processing Laboratory",
    Name: "Carmen Moraru",
    Email: "cim24@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "FDSC 4310",
    Title: "The Science and Technology of Beer Laboratory",
    Name: "Dwayne Bershaw",
    Email: "db633@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "FDSC 4400",
    Title: "Wine and Grape Flavor Chemistry",
    Name: "Gavin Sacks",
    Email: "gls9@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "FDSC 4500",
    Title: "Winemaking Theory and Practice I",
    Name: "Dwayne Bershaw",
    Email: "db633@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "FDSC 4510",
    Title: "Winemaking Theory and Practice I Laboratory",
    Name: "Dwayne Bershaw",
    Email: "db633@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "FDSC 4880",
    Title: "Global Food, Energy, and Water Nexus – Engage the US, China, and India for Sustainability",
    Name: "Xingen Lei",
    Email: "xl20@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "FDSC 4940",
    Title: "Special Topics in Food Science",
    Name: "",
    Email: ""
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "FDSC 4960",
    Title: "Undergraduate Internship in Food Science",
    Name: "",
    Email: ""
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "FDSC 4970",
    Title: "Individual Study in Food Science",
    Name: "",
    Email: ""
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "FDSC 4980",
    Title: "Undergraduate Teaching Experience",
    Name: "",
    Email: ""
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "FDSC 4990",
    Title: "Undergraduate Research in Food Science",
    Name: "",
    Email: ""
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "FDSC 5010",
    Title: "Concepts of Food Product Development",
    Name: "Olga Padilla-Zakour",
    Email: "oip1@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "FDSC 5050",
    Title: "Dairy Chemistry",
    Name: "David Barbano",
    Email: "dmb37@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "FDSC 5100",
    Title: "Sensory Evaluation of Food",
    Name: "Robin Dando",
    Email: "rd426@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "FDSC 5205",
    Title: "Growing Grapes and Making Wines Graduate Laboratory",
    Name: "Kathy Arnink",
    Email: "kja1@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "FDSC 5210",
    Title: "Food Engineering Principles",
    Name: "Syed Rizvi",
    Email: "ssr3@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "FDSC 5230",
    Title: "Unit Operations and Food Packaging",
    Name: "Julie Goddard",
    Email: "jmg26@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "FDSC 5310",
    Title: "The Science and Technology of Beer",
    Name: "Dwayne Bershaw",
    Email: "db633@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "FDSC 5500",
    Title: "Winemaking Theory and Practice I",
    Name: "Dwayne Bershaw",
    Email: "db633@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "FDSC 5510",
    Title: "Winemaking Theory and Practice I Laboratory",
    Name: "Dwayne Bershaw",
    Email: "db633@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "FDSC 6000",
    Title: "Seminar in Food Science",
    Name: "Sam Nugen",
    Email: "srn6@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "FDSC 6010",
    Title: "Principles and Applications of Food Science and Technology",
    Name: "Terry Acree",
    Email: "tea2@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "FDSC 6060",
    Title: "Food Science Graduate Student Research Seminar",
    Name: "Robin Dando",
    Email: "rd426@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "FDSC 6310",
    Title: "The Science and Technology of Beer Laboratory",
    Name: "Dwayne Bershaw",
    Email: "db633@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "FDSC 6400",
    Title: "Wine and Grape Flavor Chemistry",
    Name: "Gavin Sacks",
    Email: "gls9@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "FDSC 6880",
    Title: "Global Food, Energy, and Water Nexus – Engage the US, China, and India for Sustainability",
    Name: "Xingen Lei",
    Email: "xl20@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "FDSC 6950",
    Title: "Current Readings in Food Science",
    Name: "Carl Batt",
    Email: "cab10@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "FDSC 6960",
    Title: "Graduate Internship in Food Science",
    Name: "Terry Acree",
    Email: "tea2@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "FDSC 6970",
    Title: "Graduate Individual Study in Food Science",
    Name: "Kathy Arnink",
    Email: "kja1@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "FDSC 6980",
    Title: "Graduate Teaching Experience",
    Name: "Kathy Arnink",
    Email: "kja1@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "FDSC 8900",
    Title: "Master's Level Thesis Research",
    Name: "Terry Acree",
    Email: "tea2@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "FDSC 9900",
    Title: "Doctoral-Level Thesis Research",
    Name: "Terry Acree",
    Email: "tea2@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "FGSS 1120",
    Title: "Wonder Women",
    Name: "Lori Leonard",
    Email: "ll536@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "FGSS 2010",
    Title: "Introduction to Feminist, Gender, and Sexuality Studies",
    Name: "JESSICA NEWMAN",
    Email: "jmn249@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "FGSS 2421",
    Title: "Worlding Sex and Gender",
    Name: "Saida Hodzic",
    Email: "sh888@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "FGSS 3000",
    Title: "Feminist Theory",
    Name: "Jane Juffer",
    Email: "jaj93@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "FGSS 3230",
    Title: "Gender and Development",
    Name: "",
    Email: ""
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "FGSS 3250",
    Title: "Staging Gay and Transgender Histories",
    Name: "Sara Warner",
    Email: "slw42@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "FGSS 3701",
    Title: "bell hooks Books: From Feminism to Autobiography",
    Name: "",
    Email: ""
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "FGSS 3708",
    Title: "Race and Sex: Arabian Nights",
    Name: "Parisa Vaziri",
    Email: "pv248@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "FGSS 3740",
    Title: "Parody",
    Name: "Nick Salvato",
    Email: "ngs9@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "FGSS 3990",
    Title: "Undergraduate Independent Study",
    Name: "Durba Ghosh",
    Email: "dg256@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "FGSS 4153",
    Title: "Topics in Feminist Media Arts",
    Name: "Maria Fernandez",
    Email: "mf252@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "FGSS 4371",
    Title: "Sociology of Sex and Gender",
    Name: "Vida Maralani",
    Email: "vm343@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "FGSS 4432",
    Title: "Queer Theory and Kinship Studies",
    Name: "Lucinda Ramberg",
    Email: "ler35@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "FGSS 4451",
    Title: "Gender and Sexuality in Southeast Asian Cinema",
    Name: "Arnika Fuhrmann",
    Email: "aif32@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "FGSS 4460",
    Title: "Women in the Economy",
    Name: "Francine Blau",
    Email: "fdb4@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "FGSS 4673",
    Title: "The Kinship of Repair: Asian and Asian American Artists in Collaboration",
    Name: "",
    Email: ""
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "FGSS 4675",
    Title: "Pandemics Past and Pending",
    Name: "Juno Parrenas",
    Email: "jsp324@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "FGSS 4676",
    Title: "Lyric Interventions: Illness Narratives and the Aesthetics of Repair",
    Name: "",
    Email: ""
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "FGSS 4950",
    Title: "Gender, Power, and Authority in England, 1600 to 1800",
    Name: "Rachel Weil",
    Email: "rjw5@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "FGSS 4990",
    Title: "Senior Honors Thesis I",
    Name: "Durba Ghosh",
    Email: "dg256@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "FGSS 6153",
    Title: "Topics in Feminist Media Arts",
    Name: "Maria Fernandez",
    Email: "mf252@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "FGSS 6207",
    Title: "Black Feminist Theories: Sexuality, Creativity, and Power",
    Name: "Carole Boyce Davies",
    Email: "ceb278@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "FGSS 6301",
    Title: "Media and Sexuality",
    Name: "Katherine Sender",
    Email: "ks785@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "FGSS 6331",
    Title: "Gender and Sexuality in Southeast Asian Cinema",
    Name: "Arnika Fuhrmann",
    Email: "aif32@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "FGSS 6673",
    Title: "The Kinship of Repair: Asian and Asian American Artists in Collaboration",
    Name: "",
    Email: ""
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "FGSS 6675",
    Title: "Pandemics Past and Pending",
    Name: "Juno Parrenas",
    Email: "jsp324@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "FGSS 6677",
    Title: "Lyric Interventions: Illness Narratives and the Aesthetics of Repair",
    Name: "",
    Email: ""
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "FGSS 6755",
    Title: "Staging Gay and Transgender Histories",
    Name: "Sara Warner",
    Email: "slw42@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "FGSS 6990",
    Title: "Topics in Feminist, Gender, and Sexuality Studies",
    Name: "",
    Email: ""
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "FGSS 7432",
    Title: "Queer Theory and Kinship Studies",
    Name: "Lucinda Ramberg",
    Email: "ler35@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "FINN 1121",
    Title: "Elementary Finnish I",
    Name: "",
    Email: ""
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "FREN 1210",
    Title: "Elementary French",
    Name: "Thierry Torea",
    Email: "tat67@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "FREN 1230",
    Title: "Continuing French",
    Name: "Elise Finielz",
    Email: "eff36@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "FREN 2080",
    Title: "French for Business",
    Name: "Flavien Glidja",
    Email: "ftg2@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "FREN 2090",
    Title: "French Intermediate Composition and Conversation I",
    Name: "Flavien Glidja",
    Email: "ftg2@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "FREN 2095",
    Title: "French Intermediate Composition and Conversation II",
    Name: "Claire Menard",
    Email: "cm879@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "FREN 2180",
    Title: "Advanced French",
    Name: "Claire Menard",
    Email: "cm879@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "FREN 2310",
    Title: "Introduction to French and Francophone Literature and Culture",
    Name: "Marie-Claire Vallois",
    Email: "mv46@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "FREN 3270",
    Title: "French Laughter: Comedic Literature, films and Caricature (15th-21st C)",
    Name: "Laurent Dubreuil",
    Email: "ld79@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "FREN 3460",
    Title: "Intellectuals: A French History",
    Name: "Enzo Traverso",
    Email: "vt225@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "FREN 3770",
    Title: "On Practice and Perfection",
    Name: "Cary Howie",
    Email: "csh34@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "FREN 3880",
    Title: "La Princesse de Cleves: The World of Mme de Lafayette",
    Name: "Mitchell Greenberg",
    Email: "mdg17@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "FREN 4190",
    Title: "Special Topics in French Literature",
    Name: "Laurent Dubreuil",
    Email: "ld79@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "FREN 4290",
    Title: "Honors Work in French",
    Name: "Laurent Dubreuil",
    Email: "ld79@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "FREN 4720",
    Title: "Women's Stories From The Margins",
    Name: "Marie-Claire Vallois",
    Email: "mv46@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "FREN 6390",
    Title: "Special Topics in French Literature",
    Name: "Laurent Dubreuil",
    Email: "ld79@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "FREN 6680",
    Title: "Theater in Seventeenth-Century France: Theaters of the Self",
    Name: "Mitchell Greenberg",
    Email: "mdg17@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "FREN 6720",
    Title: "On Difficulty: Simone Weil and Others",
    Name: "Cary Howie",
    Email: "csh34@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "FSAD 1111",
    Title: "Success in FSAD",
    Name: "Frances Kozen",
    Email: "fhk2@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "FSAD 1140",
    Title: "Fashion Computer-Aided Design",
    Name: "Kimberly Phoenix",
    Email: "kah22@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "FSAD 1170",
    Title: "Fashion Graphics",
    Name: "Van Dyk Lewis",
    Email: "vdl4@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "FSAD 1250",
    Title: "Fashion, Art and Design Thinking",
    Name: "Denise Green",
    Email: "dng22@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "FSAD 1450",
    Title: "Introduction to Fashion Design",
    Name: "Kimberly Phoenix",
    Email: "kah22@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "FSAD 2310",
    Title: "Fashion Product Management",
    Name: "Frances Kozen",
    Email: "fhk2@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "FSAD 2370",
    Title: "Structural Fabric Design",
    Name: "Larissa Shepherd",
    Email: "lb468@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "FSAD 2650",
    Title: "Creative Patternmaking for Fashion Design",
    Name: "Fatma Baytar",
    Email: "fb38@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "FSAD 3200",
    Title: "Global Textile and Apparel Sustainability",
    Name: "Margaret Frey",
    Email: "mfw24@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "FSAD 3250",
    Title: "Color and Surface Design of Textiles",
    Name: "Melissa Conroy",
    Email: "mac622@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "FSAD 3350",
    Title: "Fiber Science",
    Name: "Anil Netravali",
    Email: "ann2@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "FSAD 3370",
    Title: "Introduction to Knit Textile Structure and Design",
    Name: "Melissa Conroy",
    Email: "mac622@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "FSAD 3770",
    Title: "Experimental Fashion",
    Name: "Van Dyk Lewis",
    Email: "vdl4@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "FSAD 3990",
    Title: "Smart Clothing: Design and Programming",
    Name: "Huiju Park",
    Email: "hp347@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "FSAD 4000",
    Title: "Directed Reading",
    Name: "Margaret Frey",
    Email: "mfw24@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "FSAD 4010",
    Title: "Empirical Research",
    Name: "Margaret Frey",
    Email: "mfw24@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "FSAD 4020",
    Title: "Supervised Fieldwork",
    Name: "Margaret Frey",
    Email: "mfw24@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "FSAD 4025",
    Title: "Design for Change: Imagining Decolonial Futures",
    Name: "Renata Leitao",
    Email: "rml273@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "FSAD 4030",
    Title: "Teaching Apprenticeship",
    Name: "Jaleesa Reed",
    Email: "jr964@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "FSAD 4460",
    Title: "Nanotechnology in Fibers and Textiles",
    Name: "Tamer Uyar",
    Email: "tu46@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "FSAD 4770",
    Title: "Negotiated Fashion",
    Name: "Van Dyk Lewis",
    Email: "vdl4@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "FSAD 4990",
    Title: "Honors Thesis Research",
    Name: "Jaleesa Reed",
    Email: "jr964@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "FSAD 6000",
    Title: "Special Problems for Graduate Students",
    Name: "Margaret Frey",
    Email: "mfw24@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "FSAD 6025",
    Title: "Design for Change: Imagining Decolonial Futures",
    Name: "Renata Leitao",
    Email: "rml273@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "FSAD 6370",
    Title: "Research Seminar in Apparel Design",
    Name: "Denise Green",
    Email: "dng22@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "FSAD 6451",
    Title: "Curating Fashion Exhibitions",
    Name: "Denise Green",
    Email: "dng22@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "FSAD 6460",
    Title: "Nanotechnology in Fibers and Textiles",
    Name: "Tamer Uyar",
    Email: "tu46@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "FSAD 6860",
    Title: "Mechanics of Fibrous Assemblies and their Composites",
    Name: "Yasser Gowayed",
    Email: "yag5@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "FSAD 8990",
    Title: "Master's Thesis and Research",
    Name: "Jaleesa Reed",
    Email: "jr964@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "FSAD 9990",
    Title: "Doctoral Thesis and Research",
    Name: "Margaret Frey",
    Email: "mfw24@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "GDEV 1102",
    Title: "Introduction to Global Development",
    Name: "Parfait Eloundou-Enyegue",
    Email: "pme7@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "GDEV 1105",
    Title: "Global Development Cornerstone",
    Name: "Sarah Giroux",
    Email: "sh104@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "GDEV 1120",
    Title: "Wonder Women",
    Name: "Lori Leonard",
    Email: "ll536@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "GDEV 1300",
    Title: "Just Food: Exploring the Modern Food System",
    Name: "Rachel Bezner Kerr",
    Email: "rnb5@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "GDEV 2100",
    Title: "Introduction to Adult Learning",
    Name: "Annalisa Raymer",
    Email: "alr26@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "GDEV 2150",
    Title: "Introduction to Organizations",
    Name: "Joseph Sullivan",
    Email: "jfs325@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "GDEV 2220",
    Title: "Controversies About Inequality",
    Name: "Joseph Sullivan",
    Email: "jfs325@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "GDEV 3030",
    Title: "FoodCycle: Systems Thinking Toward Circular Economy for Organic Resources",
    Name: "Rebecca Nelson",
    Email: "rjn7@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "GDEV 3060",
    Title: "Farmworkers: Contemporary Issues and Their Implications",
    Name: "Mary Dudley",
    Email: "mjd9@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "GDEV 3091",
    Title: "Global Health Case Studies from Weill Cornell Medicine",
    Name: "Eric Brumberger",
    Email: "edb6@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "GDEV 3100",
    Title: "Foundations in Leadership: Skills for Personal and Professional Effectiveness",
    Name: "Larry VanDeValk",
    Email: "ljv4@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "GDEV 3105",
    Title: "Post-Internship Course: Making Meaning and Moving Forward - Maximizing Engaged Learning Experiences",
    Name: "Julie Ficarra",
    Email: "jmf389@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "GDEV 3111",
    Title: "Sociology of Medicine",
    Name: "Christine Leuenberger",
    Email: "cal22@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "GDEV 3140",
    Title: "Spatial Thinking, GIS, and Related Methods",
    Name: "John Zinda",
    Email: "jaz65@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "GDEV 3150",
    Title: "Climate Change and Global Development: Living in the Anthropocene",
    Name: "Jenny Goldstein",
    Email: "jeg347@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "GDEV 3230",
    Title: "Gender and Development",
    Name: "",
    Email: ""
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "GDEV 3280",
    Title: "Fundamentals of Population Health",
    Name: "Julie Carmalt",
    Email: "jhc48@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "GDEV 3290",
    Title: "Comparative Politics of Latin America",
    Name: "Kenneth Roberts",
    Email: "kr99@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "GDEV 3311",
    Title: "Environmental Governance",
    Name: "Steven Wolf",
    Email: "saw44@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "GDEV 3350",
    Title: "Youth Organizations and Leadership Development",
    Name: "Jeffrey Perry",
    Email: "jap255@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "GDEV 3400",
    Title: "Agriculture, Food, Sustainability and Social Justice",
    Name: "Rachel Bezner Kerr",
    Email: "rnb5@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "GDEV 3480",
    Title: "Migrations: A Global, Interdisciplinary, Multi-Species Examination",
    Name: "Wendy Wolford",
    Email: "www43@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "GDEV 3547",
    Title: "WIM: America, Business and International Political Economy",
    Name: "Peter Katzenstein",
    Email: "pjk2@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "GDEV 3700",
    Title: "Comparative Social Inequalities",
    Name: "Parfait Eloundou-Enyegue",
    Email: "pme7@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "GDEV 4045",
    Title: "Data and Development",
    Name: "John Sipple",
    Email: "jws28@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "GDEV 4050",
    Title: "Invention and Technology Commercialization: IP Mgmt for Scientists, Engineers, and Entrepreneurs",
    Name: "Richard Cahoon",
    Email: "rsc5@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "GDEV 4120",
    Title: "Urban Public Management",
    Name: "Mildred Warner",
    Email: "mew15@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "GDEV 4140",
    Title: "Global Cropping Systems and Sustainable Development",
    Name: "Andrew McDonald",
    Email: "ajm9@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "GDEV 4443",
    Title: "Global Climate Change Science and Policy",
    Name: "Allison Chatrchyan",
    Email: "amc256@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "GDEV 4770",
    Title: "Seminar on Issues in African Development",
    Name: "N'Dri Assie-Lumumba",
    Email: "na12@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "GDEV 4940",
    Title: "Special Topics in Global Development",
    Name: "Terry Tucker",
    Email: "twt2@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "GDEV 4961",
    Title: "Perspectives in Global Development",
    Name: "Louise Buck",
    Email: "leb3@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "GDEV 4970",
    Title: "Independent Study in Global Development",
    Name: "",
    Email: ""
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "GDEV 4980",
    Title: "Teaching Experience in Global Development",
    Name: "",
    Email: ""
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "GDEV 4990",
    Title: "Independent Research in Global Development",
    Name: "",
    Email: ""
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "GDEV 5030",
    Title: "FoodCycle: Systems Thinking Toward Circular Economy for Organic Resources",
    Name: "Rebecca Nelson",
    Email: "rjn7@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "GDEV 5045",
    Title: "Data and Development",
    Name: "John Sipple",
    Email: "jws28@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "GDEV 5050",
    Title: "Invention and Technology Commercialization: IP Mgmt for Scientists, Engineers, and Entrepreneurs",
    Name: "Richard Cahoon",
    Email: "rsc5@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "GDEV 5060",
    Title: "Race, Gender and Food I: Equity and Justice in International Agricultural Research for Development",
    Name: "Hale Tufan",
    Email: "hat36@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "GDEV 5350",
    Title: "Youth Organizations and Leadership Development",
    Name: "Jeffrey Perry",
    Email: "jap255@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "GDEV 5400",
    Title: "Agriculture, Food, Sustainability and Social Justice",
    Name: "Rachel Bezner Kerr",
    Email: "rnb5@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "GDEV 5443",
    Title: "Global Climate Change Science and Policy",
    Name: "Allison Chatrchyan",
    Email: "amc256@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "GDEV 5480",
    Title: "Migrations: A Global, Interdisciplinary, Multi-Species Examination",
    Name: "Wendy Wolford",
    Email: "www43@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "GDEV 5970",
    Title: "Independent Study in Global Development (MPS Students)",
    Name: "James Lassoie",
    Email: "jpl4@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "GDEV 6120",
    Title: "Urban Public Management",
    Name: "Mildred Warner",
    Email: "mew15@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "GDEV 6190",
    Title: "Quantitative Research Methods",
    Name: "John Sipple",
    Email: "jws28@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "GDEV 6770",
    Title: "Seminar on Issues in African Development",
    Name: "N'Dri Assie-Lumumba",
    Email: "na12@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "GDEV 6940",
    Title: "Graduate Special Topics in Global Development",
    Name: "Terry Tucker",
    Email: "twt2@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "GDEV 6960",
    Title: "Perspectives in Global Development",
    Name: "Louise Buck",
    Email: "leb3@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "GDEV 6970",
    Title: "Global Development M.P.S. Seminar",
    Name: "Terry Tucker",
    Email: "twt2@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "GDEV 6980",
    Title: "Teaching Experiences for MPS in Global Development",
    Name: "",
    Email: ""
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "GDEV 7900",
    Title: "Graduate-Level Thesis Research",
    Name: "Parfait Eloundou-Enyegue",
    Email: "pme7@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "GDEV 7910",
    Title: "Teaching Experience",
    Name: "John Sipple",
    Email: "jws28@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "GDEV 8720",
    Title: "Graduate Level Ind Study in Development Studies",
    Name: "Richard Stedman",
    Email: "rcs6@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "GDEV 8900",
    Title: "Master's Level Thesis Research",
    Name: "Parfait Eloundou-Enyegue",
    Email: "pme7@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "GDEV 9900",
    Title: "Doctoral-Level Thesis Research",
    Name: "Parfait Eloundou-Enyegue",
    Email: "pme7@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "GERST 1210",
    Title: "Exploring German Contexts I",
    Name: "Gunhild Lischke",
    Email: "gl15@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "GERST 1220",
    Title: "Exploring German Contexts II",
    Name: "Grit Matthias Phelps",
    Email: "gm326@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "GERST 1230",
    Title: "Expanding the German Dossier",
    Name: "Grit Matthias Phelps",
    Email: "gm326@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "GERST 1776",
    Title: "Elementary Yiddish I",
    Name: "David Forman",
    Email: "drf84@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "GERST 1880",
    Title: "Intermediate Yiddish",
    Name: "",
    Email: ""
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "GERST 2000",
    Title: "Germany: Intercultural Context",
    Name: "Spencer Hadley",
    Email: "sah359@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "GERST 2040",
    Title: "Perspectives on German Culture",
    Name: "Anna Pfeifer",
    Email: "ap2256@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "GERST 2700",
    Title: "Introduction to German Culture and Thought",
    Name: "Anette Schwarz",
    Email: "as163@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "GERST 3075",
    Title: "Print Matters",
    Name: "Douglas McBride",
    Email: "dbm93@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "GERST 3290",
    Title: "Mean Streets: German Crime and Detective Fiction",
    Name: "Peter Gilgen",
    Email: "pg33@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "GERST 3580",
    Title: "Nineteenth Century Philosophy",
    Name: "M. Kosch",
    Email: "mak229@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "GERST 4100",
    Title: "The Seminar",
    Name: "Anette Schwarz",
    Email: "as163@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "GERST 4250",
    Title: "Marx, Nietzsche, Freud",
    Name: "Geoffrey Waite",
    Email: "gcw1@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "GERST 4510",
    Title: "Independent Study",
    Name: "",
    Email: ""
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "GERST 4530",
    Title: "Honors Research",
    Name: "",
    Email: ""
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "GERST 4540",
    Title: "Honors Thesis",
    Name: "",
    Email: ""
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "GERST 5070",
    Title: "Teaching German as a Foreign Language: Principles and Practices",
    Name: "Gunhild Lischke",
    Email: "gl15@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "GERST 6090",
    Title: "Poetologies and Dramaturgies After 1945",
    Name: "Elke Siegel",
    Email: "es744@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "GERST 6131",
    Title: "German Philosophical Texts",
    Name: "M. Kosch",
    Email: "mak229@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "GERST 6310",
    Title: "Reading Academic German I",
    Name: "Juan-Jacques Aupiais",
    Email: "ja676@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "GERST 6630",
    Title: "Nietzsche and Heidegger",
    Name: "Geoffrey Waite",
    Email: "gcw1@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "GERST 6730",
    Title: "Prophetic Realisms: Literature and the Shape of Things to Come, 1830-1930-2030",
    Name: "Paul Fleming",
    Email: "pf239@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "GERST 7530",
    Title: "Independent Study",
    Name: "",
    Email: ""
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "GERST 7531",
    Title: "Colloquium",
    Name: "Peter Gilgen",
    Email: "pg33@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "GOVT 1111",
    Title: "Introduction to American Government and Politics",
    Name: "Suzanne Mettler",
    Email: "sbm24@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "GOVT 1503",
    Title: "Introduction to Africana Studies",
    Name: "Riche Richardson",
    Email: "rdr83@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "GOVT 1817",
    Title: "Making Sense of World Politics",
    Name: "Peter Katzenstein",
    Email: "pjk2@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "GOVT 2011",
    Title: "September 11 and the Politics of Memory",
    Name: "Joseph Margulies",
    Email: "jm347@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "GOVT 2012",
    Title: "Crime and Policing",
    Name: "Gustavo Flores-Macias",
    Email: "gaf44@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "GOVT 2225",
    Title: "Controversies About Inequality",
    Name: "Joseph Sullivan",
    Email: "jfs325@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "GOVT 2665",
    Title: "American Political Thought",
    Name: "Jason Frank",
    Email: "jf273@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "GOVT 2673",
    Title: "The History and Politics of Modern Egypt",
    Name: "Ziad Fahmy",
    Email: "zaf3@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "GOVT 3092",
    Title: "Strategic Advocacy: Lobbying and Interest Group Politics in Washington, D.C.",
    Name: "Ronald Christie",
    Email: "ric38@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "GOVT 3121",
    Title: "Crime and Punishment",
    Name: "Joseph Margulies",
    Email: "jm347@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "GOVT 3265",
    Title: "Power and Freedom: Words, Concepts, Politics",
    Name: "Patchen Markell",
    Email: "ppm48@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "GOVT 3281",
    Title: "Constitutional Politics",
    Name: "Dawn Chutkow",
    Email: "dmc66@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "GOVT 3293",
    Title: "Comparative Politics of Latin America",
    Name: "Kenneth Roberts",
    Email: "kr99@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "GOVT 3303",
    Title: "Politics of the Global North",
    Name: "Lowell Turner",
    Email: "lrt4@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "GOVT 3313",
    Title: "Middle East Politics",
    Name: "Alexandra Blackman",
    Email: "adb295@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "GOVT 3353",
    Title: "African Politics",
    Name: "Nicolas van de Walle",
    Email: "nv38@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "GOVT 3384",
    Title: "The Asian Century: The Rise of China and India",
    Name: "Eli Friedman",
    Email: "edf48@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "GOVT 3437",
    Title: "Politics of the European Union",
    Name: "Daniel Schade",
    Email: "dds227@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "GOVT 3494",
    Title: "Special Topics in Regional Development and Globalization",
    Name: "Julie Ajinkya",
    Email: "ja265@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "GOVT 3547",
    Title: "WIM: America, Business and International Political Economy",
    Name: "Peter Katzenstein",
    Email: "pjk2@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "GOVT 3613",
    Title: "Politics of Sustainable Development in Latin America 1",
    Name: "Kenneth Roberts",
    Email: "kr99@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "GOVT 3947",
    Title: "Race and World Politics",
    Name: "Oumar Ba",
    Email: "ob99@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "GOVT 4000",
    Title: "Major Seminar",
    Name: "David Bateman",
    Email: "dab465@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "GOVT 4022",
    Title: "Politics, Media and Popular Culture",
    Name: "Steve Israel",
    Email: "sji23@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "GOVT 4283",
    Title: "Latino Politics as Racial Politics",
    Name: "Sergio Garcia-Rios",
    Email: "sig35@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "GOVT 4543",
    Title: "Fascism, Nationalism and Populism",
    Name: "Mabel Berezin",
    Email: "mmb39@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "GOVT 4735",
    Title: "Marx, Nietzsche, Freud",
    Name: "Geoffrey Waite",
    Email: "gcw1@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "GOVT 4949",
    Title: "Honors Seminar: Thesis Clarification and Research",
    Name: "Isabel Perera",
    Email: "imp34@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "GOVT 4998",
    Title: "Inquiry in Politics and Policy",
    Name: "David Silbey",
    Email: "ds90@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "GOVT 4999",
    Title: "Undergraduate Independent Study",
    Name: "Richard Bensel",
    Email: "rfb2@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "GOVT 6022",
    Title: "Racial and Ethnic Politics in the U.S.",
    Name: "Jamila Michener",
    Email: "jm2362@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "GOVT 6031",
    Title: "Field Seminar in American Politics",
    Name: "Douglas Kriner",
    Email: "dlk265@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "GOVT 6067",
    Title: "Field Seminar in International Relations",
    Name: "Sarah Kreps",
    Email: "sk2245@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "GOVT 6075",
    Title: "Field Seminar in Political Thought",
    Name: "Jill Frank",
    Email: "jf725@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "GOVT 6091",
    Title: "Strategic Advocacy: Lobbying and Interest Group Politics in Washington, D.C.",
    Name: "Ronald Christie",
    Email: "ric38@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "GOVT 6122",
    Title: "Foundations of the Social Sciences",
    Name: "Richard Bensel",
    Email: "rfb2@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "GOVT 6293",
    Title: "Comparative Urbanization",
    Name: "Jeremy Wallace",
    Email: "jlw397@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "GOVT 6353",
    Title: "Field Seminar in Comparative Politics",
    Name: "Rachel Riedl",
    Email: "rbr87@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "GOVT 6384",
    Title: "The Asian Century: The Rise of China and India",
    Name: "Eli Friedman",
    Email: "edf48@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "GOVT 6483",
    Title: "Authoritarianism and Democracy",
    Name: "Jeremy Wallace",
    Email: "jlw397@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "GOVT 6585",
    Title: "American Political Thought",
    Name: "Jason Frank",
    Email: "jf273@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "GOVT 6594",
    Title: "Comparative Political Behavior",
    Name: "Bryn Rosenfeld",
    Email: "brr59@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "GOVT 6827",
    Title: "China, Tibet and Xinjiang",
    Name: "Allen Carlson",
    Email: "arc26@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "GOVT 6877",
    Title: "China and Asian Security",
    Name: "Jessica Weiss",
    Email: "jcw335@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "GOVT 6998",
    Title: "Inquiry into Politics & Policy",
    Name: "David Silbey",
    Email: "ds90@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "GOVT 7073",
    Title: "Game Theory I",
    Name: "Alexandra Cirone",
    Email: "aec287@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "GOVT 7998",
    Title: "Independent Study - PIRIP",
    Name: "Alexander Livingston",
    Email: "pal229@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "GOVT 7999",
    Title: "Independent Study",
    Name: "Richard Bensel",
    Email: "rfb2@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "GRAD 9000",
    Title: "Non-Degree Study",
    Name: "",
    Email: ""
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "GRAD 9010",
    Title: "Graduate-Level Research",
    Name: "",
    Email: ""
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "GRAD 9011",
    Title: "Doctoral Dissertation Research",
    Name: "",
    Email: ""
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "GRAD 9012",
    Title: "Master's Thesis Research",
    Name: "",
    Email: ""
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "GREEK 1101",
    Title: "Elementary Ancient Greek I",
    Name: "Hayden Pelliccia",
    Email: "hnp1@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "GREEK 1105",
    Title: "Homeric Greek II",
    Name: "Todd Clary",
    Email: "tcc24@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "GREEK 2101",
    Title: "Intermediate Ancient Greek I",
    Name: "",
    Email: ""
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "GREEK 3120",
    Title: "Seminar in Greek",
    Name: "Charles Brittain",
    Email: "cfb9@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "GREEK 3185",
    Title: "Independent Study in Greek, Undergraduate Level",
    Name: "",
    Email: ""
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "GREEK 4457",
    Title: "Homeric Language",
    Name: "Alan Nussbaum",
    Email: "ajn8@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "GREEK 5111",
    Title: "Elementary Ancient Greek I",
    Name: "Hayden Pelliccia",
    Email: "hnp1@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "GREEK 5115",
    Title: "Homeric Greek II",
    Name: "Todd Clary",
    Email: "tcc24@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "GREEK 5121",
    Title: "Intermediate Ancient Greek I",
    Name: "",
    Email: ""
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "GREEK 5130",
    Title: "Seminar in Greek",
    Name: "Charles Brittain",
    Email: "cfb9@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "GREEK 6101",
    Title: "Advanced Readings in Greek Literature",
    Name: "Hayden Pelliccia",
    Email: "hnp1@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "GREEK 6116",
    Title: "Advanced Greek Composition",
    Name: "Frederick Ahl",
    Email: "fma2@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "GREEK 7161",
    Title: "Greek Philosophical Texts",
    Name: "Tad Brennan",
    Email: "trb64@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "GREEK 7457",
    Title: "Homeric Language",
    Name: "Alan Nussbaum",
    Email: "ajn8@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "HADM 1150",
    Title: "Organizational Behavior and Leadership Skills",
    Name: "Simone Tang",
    Email: "st933@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "HADM 1199",
    Title: "Hotelie LaunchPad: Maximizing and Leveraging the Cornell Experience",
    Name: "Christopher Gaulke",
    Email: "ccg79@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "HADM 1210",
    Title: "Financial Accounting",
    Name: "Mary MacAusland",
    Email: "mm2549@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "HADM 1350",
    Title: "Introduction to Hotel Operations",
    Name: "Dave Roberts",
    Email: "drr45@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "HADM 1361",
    Title: "Principles of Food and Beverage Operations Management",
    Name: "Aaron Adalja",
    Email: "aaa362@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "HADM 1650",
    Title: "Business Writing for Hospitality Professionals",
    Name: "",
    Email: ""
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "HADM 1740",
    Title: "Business Computing",
    Name: "Christina Homrighouse",
    Email: "cmg4@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "HADM 1910",
    Title: "Distinguished Lectures in Hospitality Management",
    Name: "Kate Walsh",
    Email: "kmw33@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "HADM 2010",
    Title: "Hospitality Quantitative Analysis",
    Name: "Gary Thompson",
    Email: "gmt1@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "HADM 2210",
    Title: "Managerial Accounting",
    Name: "Francisco de Asis Martinez Jerez",
    Email: "fm447@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "HADM 2220",
    Title: "Finance",
    Name: "Pamela Moulton",
    Email: "pm388@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "HADM 2230",
    Title: "Financial Accounting Principles",
    Name: "Daniel Szpiro",
    Email: "das247@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "HADM 2250",
    Title: "Finance",
    Name: "",
    Email: ""
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "HADM 2360",
    Title: "Food Service Management, Theory and Practice",
    Name: "Christopher Gaulke",
    Email: "ccg79@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "HADM 2410",
    Title: "Marketing Principles",
    Name: "Scott Erickson",
    Email: "gse23@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "HADM 2430",
    Title: "Marketing Management for Services",
    Name: "Helen Chun",
    Email: "hc633@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "HADM 2550",
    Title: "Hospitality Development and Planning",
    Name: "Lisa Chervinsky",
    Email: "lmc229@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "HADM 2810",
    Title: "Human Resources Management",
    Name: "Tashlin Lakhani",
    Email: "tl336@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "HADM 3010",
    Title: "Service Operations Management",
    Name: "Vince Slaugh",
    Email: "vws8@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "HADM 3030",
    Title: "Club Management",
    Name: "Robert James",
    Email: "rcj3@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "HADM 3040",
    Title: "Club Management",
    Name: "Robert James",
    Email: "rcj3@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "HADM 3120",
    Title: "Experiential Networking I",
    Name: "Stacy Silver",
    Email: "sjs386@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "HADM 3135",
    Title: "Conversations with Entrepreneurs",
    Name: "Linda Canina",
    Email: "lc29@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "HADM 3200",
    Title: "Personal Financial Management",
    Name: "",
    Email: ""
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "HADM 3210",
    Title: "Principles of Hospitality Real Estate",
    Name: "Peng Liu",
    Email: "pl333@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "HADM 3230",
    Title: "Introduction to Investments",
    Name: "",
    Email: ""
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "HADM 3310",
    Title: "Environmental, Social and Governance Strategy in the Food and Beverage Industry",
    Name: "Aaron Adalja",
    Email: "aaa362@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "HADM 3340",
    Title: "Franchising in the Hospitality Industry",
    Name: "Tashlin Lakhani",
    Email: "tl336@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "HADM 3350",
    Title: "Restaurant Management",
    Name: "Lilly Jan",
    Email: "lwj28@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "HADM 3470",
    Title: "Consumer Behavior",
    Name: "Helen Chun",
    Email: "hc633@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "HADM 3510",
    Title: "Hospitality Facilities Design",
    Name: "Bradford Wellstead",
    Email: "baw2@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "HADM 3550",
    Title: "Hospitality Facilities Management",
    Name: "Jeanne Varney",
    Email: "jmv59@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "HADM 3610",
    Title: "Communication for Entrepreneurs",
    Name: "Andrew Quagliata",
    Email: "aq43@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "HADM 3650",
    Title: "Persuasive Business Communication for Hospitality Leaders",
    Name: "Christina McDowell",
    Email: "clm354@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "HADM 3870",
    Title: "Business and Hospitality Law",
    Name: "David Sherwyn",
    Email: "dss18@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "HADM 4050",
    Title: "Revenue Management",
    Name: "Christopher Anderson",
    Email: "cka9@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "HADM 4070",
    Title: "Hospitality Operations and Consulting",
    Name: "Vince Slaugh",
    Email: "vws8@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "HADM 4100",
    Title: "Hospitality Management Seminar",
    Name: "Kate Walsh",
    Email: "kmw33@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "HADM 4110",
    Title: "Negotiations in the Hospitality Industry",
    Name: "Tony Simons",
    Email: "tls11@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "HADM 4130",
    Title: "Entrepreneurial Management",
    Name: "Neil Tarallo",
    Email: "nt266@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "HADM 4140",
    Title: "Innovation and Corporate Renewal",
    Name: "Neil Tarallo",
    Email: "nt266@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "HADM 4200",
    Title: "Principles of Real Estate",
    Name: "Crocker Liu",
    Email: "chl62@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "HADM 4205",
    Title: "Real Estate Financial Modeling",
    Name: "Daniel Lebret",
    Email: "dl255@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "HADM 4230",
    Title: "Hospitality Real Estate Finance",
    Name: "Daniel Quan",
    Email: "dq22@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "HADM 4250",
    Title: "Securitization and Structured Financial Products",
    Name: "Peng Liu",
    Email: "pl333@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "HADM 4265",
    Title: "Mastering Strategy Execution: Control Systems to Win",
    Name: "Francisco de Asis Martinez Jerez",
    Email: "fm447@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "HADM 4270",
    Title: "Fixed Income Analysis",
    Name: "Pamela Moulton",
    Email: "pm388@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "HADM 4280",
    Title: "Real Estate Finance and Investments",
    Name: "Daniel Quan",
    Email: "dq22@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "HADM 4300",
    Title: "Introduction to Wines",
    Name: "Cheryl Stanley",
    Email: "css14@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "HADM 4315",
    Title: "Nonprofit Social Enterprise and Food Justice",
    Name: "Heather Kolakowski",
    Email: "haf3@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "HADM 4340",
    Title: "Catering and Special Events Management",
    Name: "Michael Kingra",
    Email: "mrk248@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "HADM 4360",
    Title: "Beverage Management",
    Name: "Cheryl Stanley",
    Email: "css14@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "HADM 4380",
    Title: "Culture and Cuisine",
    Name: "Lilly Jan",
    Email: "lwj28@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "HADM 4410",
    Title: "Strategic Management",
    Name: "Heeyon Kim",
    Email: "hk926@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "HADM 4470",
    Title: "Managing Hospitality Distribution",
    Name: "Dave Roberts",
    Email: "drr45@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "HADM 4480",
    Title: "Brand Management",
    Name: "",
    Email: ""
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "HADM 4510",
    Title: "Restaurant Development",
    Name: "Christopher Gaulke",
    Email: "ccg79@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "HADM 4515",
    Title: "Hospitality Visioning and Concept Design",
    Name: "Lisa Chervinsky",
    Email: "lmc229@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "HADM 4570",
    Title: "Project Management for Hospitality Real Estate Development",
    Name: "Bradford Wellstead",
    Email: "baw2@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "HADM 4760",
    Title: "Visual Basic for Applications: End-User Programming",
    Name: "Andrew Whitmore",
    Email: "ajw36@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "HADM 4770",
    Title: "Advanced Business Modeling",
    Name: "Kasey Tarantino",
    Email: "kst45@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "HADM 4810",
    Title: "Labor Relations in the Hospitality Industry",
    Name: "David Sherwyn",
    Email: "dss18@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "HADM 4870",
    Title: "Real Estate Law",
    Name: "Adam Klausner",
    Email: "aak12@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "HADM 4890",
    Title: "The Law of the Internet and E-Commerce",
    Name: "Adam Klausner",
    Email: "aak12@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "HADM 4910",
    Title: "Hotel Ezra Cornell (H.E.C.)",
    Name: "Heather Kolakowski",
    Email: "haf3@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "HADM 4980",
    Title: "Special Studies Project II",
    Name: "",
    Email: ""
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "HADM 4990",
    Title: "Special Studies Project I",
    Name: "John Tracey",
    Email: "jbt6@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "HADM 5120",
    Title: "Experiential Networking I",
    Name: "Stacy Silver",
    Email: "sjs386@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "HADM 5360",
    Title: "Beverage Management",
    Name: "Cheryl Stanley",
    Email: "css14@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "HADM 5510",
    Title: "Restaurant Development",
    Name: "Christopher Gaulke",
    Email: "ccg79@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "HADM 5760",
    Title: "Visual Basic for Applications: End-User Programming",
    Name: "Andrew Whitmore",
    Email: "ajw36@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "HADM 5890",
    Title: "The Law of the Internet and E-Commerce",
    Name: "Adam Klausner",
    Email: "aak12@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "HADM 6050",
    Title: "Revenue Management",
    Name: "Christopher Anderson",
    Email: "cka9@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "HADM 6070",
    Title: "Hospitality Operations and Consulting",
    Name: "Vince Slaugh",
    Email: "vws8@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "HADM 6100",
    Title: "MMH Distinguished Lectures (DDLS)",
    Name: "Alex Susskind",
    Email: "ams76@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "HADM 6110",
    Title: "Negotiations in the Hospitality Industry",
    Name: "Tony Simons",
    Email: "tls11@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "HADM 6130",
    Title: "Entrepreneurial Management",
    Name: "Neil Tarallo",
    Email: "nt266@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "HADM 6135",
    Title: "Conversations with Entrepreneurs",
    Name: "Linda Canina",
    Email: "lc29@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "HADM 6140",
    Title: "Innovation and Corporate Renewal",
    Name: "Neil Tarallo",
    Email: "nt266@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "HADM 6200",
    Title: "Principles of Real Estate",
    Name: "Crocker Liu",
    Email: "chl62@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "HADM 6210",
    Title: "Hospitality Real Estate Finance",
    Name: "Daniel Quan",
    Email: "dq22@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "HADM 6225",
    Title: "Hospitality Strategic Financial Management",
    Name: "Steven Carvell",
    Email: "sac20@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "HADM 6230",
    Title: "Real Estate Statistical Modeling",
    Name: "",
    Email: ""
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "HADM 6231",
    Title: "Urban Theory and Real Estate Market Analysis",
    Name: "",
    Email: ""
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "HADM 6250",
    Title: "Securitization and Structured Financial Products",
    Name: "Peng Liu",
    Email: "pl333@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "HADM 6265",
    Title: "Mastering Strategy Execution: Control Systems to Win",
    Name: "Francisco de Asis Martinez Jerez",
    Email: "fm447@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "HADM 6270",
    Title: "Fixed Income Analysis",
    Name: "Pamela Moulton",
    Email: "pm388@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "HADM 6280",
    Title: "Real Estate Finance and Investments",
    Name: "Daniel Quan",
    Email: "dq22@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "HADM 6310",
    Title: "Environmental, Social and Governance Strategy in the Food and Beverage Industry",
    Name: "Aaron Adalja",
    Email: "aaa362@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "HADM 6380",
    Title: "Culture and Cuisine",
    Name: "Lilly Jan",
    Email: "lwj28@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "HADM 6470",
    Title: "Consumer Behavior",
    Name: "Helen Chun",
    Email: "hc633@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "HADM 6480",
    Title: "Brand Management",
    Name: "",
    Email: ""
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "HADM 6510",
    Title: "Hospitality Facilities Design",
    Name: "Bradford Wellstead",
    Email: "baw2@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "HADM 6515",
    Title: "Hospitality Visioning and Concept Design",
    Name: "Lisa Chervinsky",
    Email: "lmc229@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "HADM 6520",
    Title: "Hospitality Asset Management",
    Name: "Jeanne Varney",
    Email: "jmv59@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "HADM 6570",
    Title: "Project Management for Hospitality Real Estate Development",
    Name: "Bradford Wellstead",
    Email: "baw2@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "HADM 6610",
    Title: "Communication for Entrepreneurs",
    Name: "Andrew Quagliata",
    Email: "aq43@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "HADM 6640",
    Title: "Management Communication",
    Name: "Andrew Quagliata",
    Email: "aq43@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "HADM 6770",
    Title: "Advanced Business Modeling",
    Name: "Kasey Tarantino",
    Email: "kst45@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "HADM 6870",
    Title: "Real Estate Law",
    Name: "Adam Klausner",
    Email: "aak12@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "HADM 6980",
    Title: "Graduate Special Studies Project II",
    Name: "",
    Email: ""
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "HADM 6990",
    Title: "Graduate Special Studies Project I",
    Name: "",
    Email: ""
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "HADM 7030",
    Title: "Operations Management",
    Name: "Christopher Anderson",
    Email: "cka9@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "HADM 7144",
    Title: "Competitive Strategies for the Hospitality Industry",
    Name: "Heeyon Kim",
    Email: "hk926@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "HADM 7230",
    Title: "Corporate Finance",
    Name: "Linda Canina",
    Email: "lc29@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "HADM 7271",
    Title: "Leadership and Ethics I",
    Name: "Kristina Workman",
    Email: "kmw249@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "HADM 7430",
    Title: "Marketing Management for Services",
    Name: "Robert Kwortnik",
    Email: "rjk34@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "HADM 7610",
    Title: "Management Communication",
    Name: "Adam Walden",
    Email: "atw59@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "HADM 8900",
    Title: "M.S. Thesis Research",
    Name: "",
    Email: ""
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "HADM 9900",
    Title: "Ph.D. Thesis Research",
    Name: "",
    Email: ""
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "HD 1111",
    Title: "Success in Human Development",
    Name: "Marianella Casasola",
    Email: "mc272@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "HD 1150",
    Title: "Human Development: Infancy and Childhood",
    Name: "Karin Sternberg",
    Email: "ks998@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "HD 2180",
    Title: "Human Development: Adulthood and Aging",
    Name: "Corinna Loeckenhoff",
    Email: "cel72@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "HD 2200",
    Title: "The Human Brain and Mind: An Introduction to Cognitive Neuroscience",
    Name: "Daniel Casasanto",
    Email: "djc457@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "HD 2350",
    Title: "Multilingualism and Multiculturalism in Early Childhood",
    Name: "Yarden Kedar",
    Email: "yek2@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "HD 2650",
    Title: "Psychology and Law",
    Name: "Valerie Hans",
    Email: "vh42@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "HD 2810",
    Title: "Introduction to Social Psychology",
    Name: "Tom Gilovich",
    Email: "tdg1@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "HD 2820",
    Title: "Community Outreach",
    Name: "Harry Segal",
    Email: "hgs2@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "HD 2830",
    Title: "Research Methods in Human Development",
    Name: "Lauren Korfine",
    Email: "lk79@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "HD 3110",
    Title: "Educational Psychology",
    Name: "Heidi Mouillesseaux-Kunzman",
    Email: "hmm1@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "HD 3190",
    Title: "Memory and the Law",
    Name: "Charles Brainerd",
    Email: "cb299@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "HD 3270",
    Title: "Field Practicum I",
    Name: "Harry Segal",
    Email: "hgs2@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "HD 3300",
    Title: "Developmental Psychopathology",
    Name: "Jane Mendle",
    Email: "jem482@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "HD 3310",
    Title: "Psychology of Gender",
    Name: "Lauren Korfine",
    Email: "lk79@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "HD 3330",
    Title: "Children and the Law",
    Name: "Michael Toglia",
    Email: "mpt38@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "HD 4010",
    Title: "Empirical Research",
    Name: "Valerie Hans",
    Email: "vh42@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "HD 4020",
    Title: "Supervised Fieldwork",
    Name: "Valerie Reyna",
    Email: "vr53@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "HD 4030",
    Title: "Teaching Assistantship",
    Name: "Karin Sternberg",
    Email: "ks998@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "HD 4250",
    Title: "Translational Research on Decision Making",
    Name: "Valerie Reyna",
    Email: "vr53@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "HD 4260",
    Title: "Translational Research on Memory and Neuroscience",
    Name: "Charles Brainerd",
    Email: "cb299@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "HD 4380",
    Title: "Language and Thought",
    Name: "Yarden Kedar",
    Email: "yek2@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "HD 4550",
    Title: "The Psychology of Wisdom",
    Name: "Robert Sternberg",
    Email: "rjs487@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "HD 4630",
    Title: "Introduction to Functional MRI Analysis for Human Neuroimaging",
    Name: "Marlen Gonzalez",
    Email: "mzg5@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "HD 4850",
    Title: "Professional Development in Translational Research",
    Name: "Kristen Elmore",
    Email: "kce28@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "HD 4860",
    Title: "Nearest Neighbor",
    Name: "Anthony Burrow",
    Email: "alb325@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "HD 4990",
    Title: "Senior Honors Thesis",
    Name: "Anthony Burrow",
    Email: "alb325@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "HD 6020",
    Title: "Research in Risk and Rational Decision Making",
    Name: "Valerie Reyna",
    Email: "vr53@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "HD 6190",
    Title: "Memory and the Law",
    Name: "Charles Brainerd",
    Email: "cb299@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "HD 6200",
    Title: "First-Year Proseminar in Human Development",
    Name: "Nora Prior",
    Email: "nhp32@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "HD 6635",
    Title: "Introduction to Scripting for Functional MRI Analysis in Human Neuroimaging",
    Name: "Marlen Gonzalez",
    Email: "mzg5@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "HD 6650",
    Title: "Poverty, Children and the Environment",
    Name: "Gary Evans",
    Email: "gwe1@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "HD 7000",
    Title: "Directed Readings",
    Name: "Daniel Casasanto",
    Email: "djc457@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "HD 7010",
    Title: "Empirical Research",
    Name: "Jane Mendle",
    Email: "jem482@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "HD 7020",
    Title: "Practicum",
    Name: "",
    Email: ""
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "HD 7030",
    Title: "Teaching Assistantship",
    Name: "Stephen Ceci",
    Email: "sjc9@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "HD 8060",
    Title: "Teaching Practicum",
    Name: "Eve DeRosa",
    Email: "edd56@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "HD 8990",
    Title: "Master's Thesis and Research",
    Name: "Charles Brainerd",
    Email: "cb299@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "HD 9990",
    Title: "Doctoral Thesis and Research",
    Name: "Charles Brainerd",
    Email: "cb299@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "HE 1115",
    Title: "Critical Reading and Thinking",
    Name: "Mike Chen",
    Email: "msc7@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "HE 1200",
    Title: "Partnership Program",
    Name: "Gary Evans",
    Email: "gwe1@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "HE 3100",
    Title: "Mentoring in Higher Education",
    Name: "Gary Evans",
    Email: "gwe1@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "HE 4040",
    Title: "Human Ecology Exchange Program",
    Name: "",
    Email: ""
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "HEBRW 1101",
    Title: "Elementary Modern Hebrew I",
    Name: "Shalom Shoer",
    Email: "ss66@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "HEBRW 1103",
    Title: "Elementary Modern Hebrew III",
    Name: "Shalom Shoer",
    Email: "ss66@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "HEBRW 1110",
    Title: "Beginning Biblical Hebrew",
    Name: "Lauren Monroe",
    Email: "lm283@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "HEBRW 3101",
    Title: "Advanced Modern Hebrew I",
    Name: "Shalom Shoer",
    Email: "ss66@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "HEBRW 5509",
    Title: "Graduate Studies in Hebrew",
    Name: "Shalom Shoer",
    Email: "ss66@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "HIERO 1450",
    Title: "Ancient Egyptian I: Introduction to Middle Egyptian Hieroglyphs",
    Name: "Christopher Monroe",
    Email: "cmm253@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "HINDI 1101",
    Title: "Elementary Hindi I",
    Name: "Sujata Singh",
    Email: "ss596@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "HINDI 2201",
    Title: "Intermediate Hindi I",
    Name: "Sujata Singh",
    Email: "ss596@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "HINDI 2203",
    Title: "Intermediate Hindi Reading and Writing for Heritage Students I",
    Name: "Sujata Singh",
    Email: "ss596@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "HINDI 3301",
    Title: "Advanced Hindi I",
    Name: "Naaz Rizvi",
    Email: "nfr8@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "HIST 1561",
    Title: "Introduction to the Ottoman Empire",
    Name: "Mostafa Minawi",
    Email: "mm2492@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "HIST 1571",
    Title: "American Defense Policy and Military History from the Two World Wars to the Global War on Terror",
    Name: "David Silbey",
    Email: "ds90@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "HIST 1585",
    Title: "Sports and Politics in American History",
    Name: "Lawrence Glickman",
    Email: "lbg49@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "HIST 1650",
    Title: "Myths of Monarchy in Europe, Medieval Times to the Present",
    Name: "Rachel Weil",
    Email: "rjw5@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "HIST 1800",
    Title: "Immigration in U.S. History",
    Name: "Maria Cristina Garcia",
    Email: "mcg20@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "HIST 1850",
    Title: "Thinking about History with the Manson Murders",
    Name: "Claudia Verhoeven",
    Email: "cv89@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "HIST 1920",
    Title: "Modern China",
    Name: "Yue Du",
    Email: "yd367@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "HIST 1975",
    Title: "Caribbean Migrations I: Caribbean Arrivals",
    Name: "Gerard Aching",
    Email: "gla23@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "HIST 2001",
    Title: "Supervised Reading - Undergraduate",
    Name: "Edward Baptist",
    Email: "eeb36@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "HIST 2050",
    Title: "Introduction to Humanities",
    Name: "Durba Ghosh",
    Email: "dg256@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "HIST 2133",
    Title: "Social Debates in China",
    Name: "Yue Du",
    Email: "yd367@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "HIST 2165",
    Title: "The Death of Democracy: Europe Between the World Wars",
    Name: "Cristina Florea",
    Email: "cf476@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "HIST 2251",
    Title: "U.S. Immigration Narratives",
    Name: "Maria Cristina Garcia",
    Email: "mcg20@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "HIST 2321",
    Title: "Introduction to Military History",
    Name: "Barry Strauss",
    Email: "bss4@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "HIST 2530",
    Title: "Introduction to Islamic Civilization",
    Name: "David Powers",
    Email: "dsp4@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "HIST 2542",
    Title: "The Making of Contemporary Africa",
    Name: "Judith Byfield",
    Email: "jab632@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "HIST 2548",
    Title: "Buddhists in the Indian Ocean Arena: Past and Present",
    Name: "Anne Blackburn",
    Email: "amb242@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "HIST 2562",
    Title: "Medicine and Healing in China",
    Name: "Tj Hinrichs",
    Email: "th289@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "HIST 2640",
    Title: "Introduction to Asian American History",
    Name: "Derek Chang",
    Email: "dsc37@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "HIST 2650",
    Title: "Ancient Greece from Helen to Alexander",
    Name: "Barry Strauss",
    Email: "bss4@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "HIST 2672",
    Title: "The History and Politics of Modern Egypt",
    Name: "Ziad Fahmy",
    Email: "zaf3@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "HIST 2749",
    Title: "Mughal India and the Early Modern World, c. 1500-1800",
    Name: "Thomas Travers",
    Email: "trt5@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "HIST 2955",
    Title: "Socialism in America",
    Name: "Russell Rickford",
    Email: "rr447@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "HIST 2969",
    Title: "The Rise and Fall of the Soviet Empire",
    Name: "Cristina Florea",
    Email: "cf476@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "HIST 3002",
    Title: "Supervised Research - Undergraduate",
    Name: "Edward Baptist",
    Email: "eeb36@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "HIST 3312",
    Title: "What was the Vietnam War?",
    Name: "Keith Taylor",
    Email: "kwt3@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "HIST 3358",
    Title: "Why Forget the Korean War?",
    Name: "Keith Taylor",
    Email: "kwt3@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "HIST 3430",
    Title: "History of the U.S. Civil War and Reconstruction",
    Name: "Edward Baptist",
    Email: "eeb36@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "HIST 3480",
    Title: "Race and the American Labor Market in Historical Perspective",
    Name: "Seth Sanders",
    Email: "ss3977@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "HIST 3525",
    Title: "Life and Death in China Under Mao",
    Name: "Peidong Sun",
    Email: "ps786@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "HIST 3618",
    Title: "Islamic History: The Beginnings of Islam: 600-750",
    Name: "David Powers",
    Email: "dsp4@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "HIST 3884",
    Title: "Race and War in History: Workers, Soldiers, Prisoners, Activists",
    Name: "Tejasvi Nagaraja",
    Email: "tn329@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "HIST 3950",
    Title: "Monsoon Kingdoms: Pre-Modern Southeast Asian History",
    Name: "Eric Tagliacozzo",
    Email: "et54@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "HIST 4000",
    Title: "Introduction to Historical Research",
    Name: "Raymond Craib",
    Email: "rbc23@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "HIST 4001",
    Title: "Honors Guidance",
    Name: "Tj Hinrichs",
    Email: "th289@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "HIST 4041",
    Title: "Atlantic Commodities",
    Name: "Ernesto Bassi Arevalo",
    Email: "eb577@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "HIST 4075",
    Title: "Fashion and Politics in Twentieth-Century China",
    Name: "Peidong Sun",
    Email: "ps786@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "HIST 4203",
    Title: "Contesting Votes: Democracy and Citizenship Throughout U.S. History",
    Name: "Julilly Kohler-Hausmann",
    Email: "jkh224@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "HIST 4252",
    Title: "Migration and the Peopling of America: A Perennial Debate",
    Name: "",
    Email: ""
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "HIST 4543",
    Title: "State and Society in the Late Ottoman Empire",
    Name: "Mostafa Minawi",
    Email: "mm2492@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "HIST 4634",
    Title: "Curating the British Empire",
    Name: "Jessica Ratcliff",
    Email: "jrr47@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "HIST 4666",
    Title: "Mass Media and Identities in the Modern Middle East",
    Name: "Ziad Fahmy",
    Email: "zaf3@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "HIST 4674",
    Title: "Dispossession, Truth, and Reconciliation",
    Name: "Jon Parmenter",
    Email: "jwp35@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "HIST 4950",
    Title: "Gender, Power, and Authority in England, 1600 to 1800",
    Name: "Rachel Weil",
    Email: "rjw5@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "HIST 6002",
    Title: "Professional Development Seminar",
    Name: "Durba Ghosh",
    Email: "dg256@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "HIST 6006",
    Title: "History Colloquium Series",
    Name: "Raymond Craib",
    Email: "rbc23@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "HIST 6021",
    Title: "Introduction to Military History",
    Name: "Barry Strauss",
    Email: "bss4@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "HIST 6041",
    Title: "Atlantic Commodities",
    Name: "Ernesto Bassi Arevalo",
    Email: "eb577@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "HIST 6075",
    Title: "Fashion and Politics in Twentieth-Century China",
    Name: "Peidong Sun",
    Email: "ps786@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "HIST 6322",
    Title: "Readings in 20th Century African-American History",
    Name: "Russell Rickford",
    Email: "rr447@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "HIST 6334",
    Title: "Emancipations, Reconstructions, and Settler-Colonial Expansions: 1861-1914",
    Name: "Edward Baptist",
    Email: "eeb36@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "HIST 6382",
    Title: "History of Time, Time of History",
    Name: "Claudia Verhoeven",
    Email: "cv89@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "HIST 6543",
    Title: "State and Society in the Late Ottoman Empire",
    Name: "Mostafa Minawi",
    Email: "mm2492@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "HIST 6571",
    Title: "American Defense Policy and Military History from the Two World Wars to the Global War on Terror",
    Name: "David Silbey",
    Email: "ds90@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "HIST 6634",
    Title: "Curating the British Empire",
    Name: "Jessica Ratcliff",
    Email: "jrr47@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "HIST 6655",
    Title: "Revolution: An Intellectual History",
    Name: "Enzo Traverso",
    Email: "vt225@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "HIST 6666",
    Title: "Mass Media and Identities in the Modern Middle East",
    Name: "Ziad Fahmy",
    Email: "zaf3@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "HIST 6674",
    Title: "Dispossession, Truth, and Reconciliation",
    Name: "Jon Parmenter",
    Email: "jwp35@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "HIST 6905",
    Title: "Gender, Power, and Authority in England, 1600 to 1800",
    Name: "Rachel Weil",
    Email: "rjw5@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "HIST 6950",
    Title: "Monsoon Kingdoms: Pre-Modern Southeast Asian History",
    Name: "Eric Tagliacozzo",
    Email: "et54@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "HIST 7090",
    Title: "Introduction to the Graduate Study of History",
    Name: "Judith Byfield",
    Email: "jab632@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "HIST 7110",
    Title: "Introduction to Science and Technology Studies",
    Name: "Malte Ziewitz",
    Email: "mcz35@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "HIST 8004",
    Title: "Supervised Reading",
    Name: "Edward Baptist",
    Email: "eeb36@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "HIST 8010",
    Title: "Independent Study-PIRIP",
    Name: "Claudia Verhoeven",
    Email: "cv89@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "HUNGR 1131",
    Title: "Elementary Hungarian I",
    Name: "Angelika Kraemer",
    Email: "ak2573@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "HUNGR 1133",
    Title: "Continuing Hungarian I",
    Name: "Angelika Kraemer",
    Email: "ak2573@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "HUNGR 2103",
    Title: "Advanced Hungarian I",
    Name: "Angelika Kraemer",
    Email: "ak2573@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "ILRHR 2600",
    Title: "Human Resource Management",
    Name: "JR Keller",
    Email: "jhk296@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "ILRHR 3620",
    Title: "Career Development: Theory and Practice",
    Name: "Linda Gasser",
    Email: "lsg3@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "ILRHR 4410",
    Title: "Disability Considerations in HR Policy and Practice",
    Name: "Susanne Bruyere",
    Email: "smb23@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "ILRHR 4620",
    Title: "Staffing Organizations",
    Name: "",
    Email: ""
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "ILRHR 4641",
    Title: "Business Strategy, Organizational Design, and Human Resource Strategy",
    Name: "Rebecca Kehoe",
    Email: "rar33@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "ILRHR 4657",
    Title: "Workplace Disability Inclusion: Innovations and Initiatives (Autism at Work)",
    Name: "Susanne Bruyere",
    Email: "smb23@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "ILRHR 5600",
    Title: "Human Resource Management",
    Name: "John Hausknecht",
    Email: "jph42@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "ILRHR 5645",
    Title: "Design Thinking for HR",
    Name: "",
    Email: ""
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "ILRHR 5665",
    Title: "Organizational Consulting",
    Name: "Chris Collins",
    Email: "cjc53@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "ILRHR 5680",
    Title: "Staffing Organizations",
    Name: "",
    Email: ""
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "ILRHR 5930",
    Title: "Training and Development in Organizations",
    Name: "Brad Bell",
    Email: "bb92@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "ILRHR 6410",
    Title: "Disability Considerations in HR Policy and Practice",
    Name: "Susanne Bruyere",
    Email: "smb23@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "ILRHR 6620",
    Title: "Organization and Work Design",
    Name: "Frans Hijkoop",
    Email: "fh246@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "ILRHR 6640",
    Title: "HR Research for Executive Decision-Making",
    Name: "Christian Miller",
    Email: "cjm267@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "ILRHR 6910",
    Title: "Business Strategy and Finance for Human Resources",
    Name: "John Haggerty",
    Email: "jjh56@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "ILRHR 7451",
    Title: "Leadership Assessment for Managers",
    Name: "Jess Cisco",
    Email: "jdc77@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "ILRHR 9600",
    Title: "Workshop in Human Resource Studies",
    Name: "Rebecca Kehoe",
    Email: "rar33@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "ILRIC 2350",
    Title: "Work, Labor, and Capital in the Global Economy",
    Name: "Virginia Doellgast",
    Email: "vld7@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "ILRIC 3375",
    Title: "Labor Practices in Global Supply Chains: Multi-Stakeholder Perspectives",
    Name: "Sarosh Kuruvilla",
    Email: "sck4@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "ILRIC 3380",
    Title: "The Asian Century: The Rise of China and India",
    Name: "Eli Friedman",
    Email: "edf48@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "ILRIC 3547",
    Title: "WIM: America, Business and International Political Economy",
    Name: "Peter Katzenstein",
    Email: "pjk2@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "ILRIC 4330",
    Title: "Politics of the Global North",
    Name: "Lowell Turner",
    Email: "lrt4@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "ILRIC 4344",
    Title: "International Labor Law",
    Name: "Desiree LeClercq",
    Email: "dg698@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "ILRIC 4360",
    Title: "Global Comparative Disability Policy",
    Name: "Matthew Saleh",
    Email: "mcs378@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "ILRIC 4367",
    Title: "Migration and Mobility: Theories and Lived Realities",
    Name: "Tristan Ivory",
    Email: "ti92@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "ILRIC 5375",
    Title: "Labor Practices in Global Supply Chains: Multi-Stakeholder Perspectives",
    Name: "Sarosh Kuruvilla",
    Email: "sck4@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "ILRIC 5380",
    Title: "The Asian Century: The Rise of China and India",
    Name: "Eli Friedman",
    Email: "edf48@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "ILRIC 6344",
    Title: "International Labor Law",
    Name: "Desiree LeClercq",
    Email: "dg698@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "ILRIC 6367",
    Title: "Migration and Mobility: Theories and Lived Realities",
    Name: "Tristan Ivory",
    Email: "ti92@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "ILRIC 7380",
    Title: "Anthropology of Work",
    Name: "Sarah Besky",
    Email: "sb2626@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "ILRIC 9800",
    Title: "Workshop in International and Comparative Labor",
    Name: "Duanyi Yang",
    Email: "dy338@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "ILRID 1510",
    Title: "Introduction to Industrial and Labor Relations",
    Name: "Alexander Colvin",
    Email: "ajc22@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "ILRID 1520",
    Title: "Introduction to Psychology of Work I: Theories",
    Name: "Vanessa Bohns",
    Email: "vkb28@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "ILRID 1521",
    Title: "Introduction to Psychology of Work II: Applications",
    Name: "Brad Bell",
    Email: "bb92@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "ILRID 2510",
    Title: "Foundations of Diversity Dynamics",
    Name: "Courtney McCluney",
    Email: "cm848@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "ILRID 2610",
    Title: "Intergroup Dialogue",
    Name: "Jazlin Gomez",
    Email: "jmg495@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "ILRID 2660",
    Title: "Essential Desktop Applications",
    Name: "Christina Homrighouse",
    Email: "cmg4@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "ILRID 4699",
    Title: "Advanced Desktop Applications",
    Name: "Christina Homrighouse",
    Email: "cmg4@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "ILRID 6990",
    Title: "Advanced Desktop Applications",
    Name: "Christina Homrighouse",
    Email: "cmg4@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "ILRLE 2400",
    Title: "Economics of Wages and Employment",
    Name: "Stephanie Thomas",
    Email: "srt82@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "ILRLE 3450",
    Title: "Race and the American Labor Market in Historical Perspective",
    Name: "Seth Sanders",
    Email: "ss3977@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "ILRLE 4450",
    Title: "Women in the Economy",
    Name: "Francine Blau",
    Email: "fdb4@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "ILRLE 7450",
    Title: "Seminar in Labor Economics I",
    Name: "Evan Riehl",
    Email: "er488@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "ILRLE 9400",
    Title: "Workshop in Labor Economics",
    Name: "Francine Blau",
    Email: "fdb4@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "ILRLR 1100",
    Title: "Introduction to U.S. Labor History",
    Name: "",
    Email: ""
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "ILRLR 1200",
    Title: "Introduction to Disability Studies",
    Name: "Allison Heinemann",
    Email: "aaw43@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "ILRLR 2010",
    Title: "Labor and Employment Law",
    Name: "Desiree LeClercq",
    Email: "dg698@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "ILRLR 2050",
    Title: "Labor Relations",
    Name: "Harry Katz",
    Email: "hck2@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "ILRLR 2060",
    Title: "Writing Seminar in Law",
    Name: "Allison Heinemann",
    Email: "aaw43@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "ILRLR 2070",
    Title: "Writing Seminar in History",
    Name: "Ileen Devault",
    Email: "iad1@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "ILRLR 2810",
    Title: "Migration: Histories, Controversies, and Perspectives",
    Name: "Shannon Gleeson",
    Email: "smg338@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "ILRLR 3055",
    Title: "Rhetoric of the Labor Movement",
    Name: "Samuel Nelson",
    Email: "smn33@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "ILRLR 3057",
    Title: "Environmental Mediation and Negotiation",
    Name: "John Bickerman",
    Email: "jgb53@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "ILRLR 3300",
    Title: "Advocacy and Debate",
    Name: "Samuel Nelson",
    Email: "smn33@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "ILRLR 3825",
    Title: "Southern West Virginia's Coal Fields - Ancient Struggles Amidst Hopeful Dreams",
    Name: "Lee Adler",
    Email: "lha1@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "ILRLR 3875",
    Title: "Public Sector Labor Law and CB: The Turbulence Amidst Police, Policing, Teachers and Their Unions",
    Name: "Lee Adler",
    Email: "lha1@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "ILRLR 3885",
    Title: "Race and War in History: Workers, Soldiers, Prisoners, Activists",
    Name: "Tejasvi Nagaraja",
    Email: "tn329@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "ILRLR 4012",
    Title: "Managing and Resolving Conflict",
    Name: "Aibak Hafeez",
    Email: "ah768@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "ILRLR 4027",
    Title: "Campus Mediation Practicum",
    Name: "Katrina Nobles",
    Email: "kn64@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "ILRLR 4029",
    Title: "Campus Mediation Practicum II: Advanced Issues in Restorative Justice",
    Name: "Katrina Nobles",
    Email: "kn64@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "ILRLR 4030",
    Title: "The Economics of Collective Bargaining in Sports",
    Name: "Lawrence Kahn",
    Email: "lmk12@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "ILRLR 4040",
    Title: "Contract Administration",
    Name: "Kate Bronfenbrenner",
    Email: "klb23@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "ILRLR 4060",
    Title: "Labor Relations in the Hospitality Industry",
    Name: "Richard Hurd",
    Email: "rwh8@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "ILRLR 4533",
    Title: "The Lower East Side: Jews and the Immigrant City",
    Name: "Elissa Sampson",
    Email: "ejs362@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "ILRLR 4825",
    Title: "The Art of Negotiation in Business and Sports",
    Name: "Michael Huyghue",
    Email: "mlh77@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "ILRLR 4842",
    Title: "Fighting Discrimination in the Workplace: Employment Discrimination and the Law",
    Name: "Michael Gold",
    Email: "meg3@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "ILRLR 4865",
    Title: "Thwarting the Dream of Brown v. Board of Education",
    Name: "Lee Adler",
    Email: "lha1@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "ILRLR 5000",
    Title: "Labor Relations",
    Name: "Harry Katz",
    Email: "hck2@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "ILRLR 6012",
    Title: "Managing and Resolving Conflict",
    Name: "Aibak Hafeez",
    Email: "ah768@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "ILRLR 6020",
    Title: "The Practice of Labor Arbitration",
    Name: "Harry Katz",
    Email: "hck2@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "ILRLR 6027",
    Title: "Campus Mediation Practicum",
    Name: "Katrina Nobles",
    Email: "kn64@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "ILRLR 6029",
    Title: "Campus Mediation Practicum II: Advanced Issues in Restorative Justice",
    Name: "Katrina Nobles",
    Email: "kn64@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "ILRLR 6044",
    Title: "Contract Administration",
    Name: "Kate Bronfenbrenner",
    Email: "klb23@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "ILRLR 6057",
    Title: "Environmental Mediation and Negotiation",
    Name: "John Bickerman",
    Email: "jgb53@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "ILRLR 6189",
    Title: "Current Issues in Collective Bargaining",
    Name: "Paul Salvatore",
    Email: "pas82@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "ILRLR 6300",
    Title: "Advocacy and Debate",
    Name: "Samuel Nelson",
    Email: "smn33@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "ILRLR 6825",
    Title: "The Art of Negotiation in Business and Sports",
    Name: "Michael Huyghue",
    Email: "mlh77@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "ILRLR 6840",
    Title: "Fighting Discrimination in the Workplace: Employment Discrimination and the Law",
    Name: "Michael Gold",
    Email: "meg3@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "ILRLR 6855",
    Title: "Southern West Virginia's Coal Fields - Ancient Struggles Amidst Hopeful Dreams",
    Name: "Lee Adler",
    Email: "lha1@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "ILRLR 6865",
    Title: "Thwarting the Dream of Brown v. Board of Education",
    Name: "Lee Adler",
    Email: "lha1@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "ILRLR 6875",
    Title: "Public Sector Labor Law and CB: The Turbulence Amidst Police, Policing, Teachers and Their Unions",
    Name: "Lee Adler",
    Email: "lha1@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "ILRLR 7533",
    Title: "The Lower East Side: Jews and the Immigrant City",
    Name: "Elissa Sampson",
    Email: "ejs362@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "ILRLR 9800",
    Title: "Workshop in Labor Relations, Law and History",
    Name: "Duanyi Yang",
    Email: "dy338@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "ILROB 2220",
    Title: "Controversies About Inequality",
    Name: "Joseph Sullivan",
    Email: "jfs325@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "ILROB 3260",
    Title: "Building Power from Nothing",
    Name: "Brittany Bond",
    Email: "bb686@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "ILROB 4295",
    Title: "Organizations Across the Lifecycle",
    Name: "Pamela Tolbert",
    Email: "pst3@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "ILROB 4710",
    Title: "Social Science Research Methods",
    Name: "Emily Zitek",
    Email: "emz34@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "ILROB 5200",
    Title: "Organizational Behavior",
    Name: "Brian Lucas",
    Email: "bl679@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "ILROB 5260",
    Title: "Being Effective: Power and Influence",
    Name: "Brittany Bond",
    Email: "bb686@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "ILROB 6715",
    Title: "Social Science Research Methods",
    Name: "Emily Zitek",
    Email: "emz34@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "ILROB 7220",
    Title: "Macro Organizational Behavior Seminar",
    Name: "Brittany Bond",
    Email: "bb686@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "ILROB 7235",
    Title: "Data Analysis in Practice",
    Name: "Emily Zitek",
    Email: "emz34@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "ILROB 9200",
    Title: "Organizational Behavior Workshop",
    Name: "Sean Fath",
    Email: "sf562@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "ILRST 2100",
    Title: "Introductory Statistics",
    Name: "",
    Email: ""
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "ILRST 2130",
    Title: "Applied Regression Analysis",
    Name: "Sreyoshi Das",
    Email: "sd878@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "ILRST 3080",
    Title: "Probability Models and Inference",
    Name: "Florentina Bunea",
    Email: "fb238@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "ILRST 3100",
    Title: "Statistical Sampling",
    Name: "Thomas Diciccio",
    Email: "tjd9@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "ILRST 3110",
    Title: "Probability Models and Inference for the Social Sciences",
    Name: "Thomas Diciccio",
    Email: "tjd9@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "ILRST 4110",
    Title: "Categorical Data",
    Name: "Melissa Smith",
    Email: "ms429@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "ILRST 5050",
    Title: "Statistics at Work",
    Name: "M. Karns",
    Email: "ek368@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "ILRST 6100",
    Title: "Statistical Methods I",
    Name: "Martin Wells",
    Email: "mtw1@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "ILRST 7170",
    Title: "Theory of Linear Models",
    Name: "James Booth",
    Email: "jb383@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "IM 4990",
    Title: "Honors Research I",
    Name: "Nerissa Russell",
    Email: "nr29@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "IM 4991",
    Title: "Honors Research II",
    Name: "",
    Email: ""
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "INDO 1100",
    Title: "Elements of Indonesian Language and Culture",
    Name: "Jolanda Pandin",
    Email: "jmp244@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "INDO 1121",
    Title: "Elementary Indonesian I",
    Name: "Jolanda Pandin",
    Email: "jmp244@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "INDO 2201",
    Title: "Intermediate Indonesian I",
    Name: "Jolanda Pandin",
    Email: "jmp244@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "INDO 3301",
    Title: "Advanced Indonesian I",
    Name: "Jolanda Pandin",
    Email: "jmp244@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "INDO 4401",
    Title: "Advanced Indonesian for Research I",
    Name: "Jolanda Pandin",
    Email: "jmp244@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "INFO 1200",
    Title: "Information Ethics, Law, and Policy",
    Name: "Steven Jackson",
    Email: "sjj54@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "INFO 1300",
    Title: "Introductory Design and Programming for the Web",
    Name: "Kyle Harms",
    Email: "kjh235@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "INFO 2040",
    Title: "Networks",
    Name: "David Easley",
    Email: "dae3@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "INFO 2450",
    Title: "Communication and Technology",
    Name: "Chao Yu",
    Email: "cy395@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "INFO 2950",
    Title: "Introduction to Data Science",
    Name: "David Mimno",
    Email: "dm655@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "INFO 3300",
    Title: "Data-Driven Web Applications",
    Name: "Jeff Rzeszotarski",
    Email: "jmr395@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "INFO 3450",
    Title: "Human-Computer Interaction Design",
    Name: "Gilly Leshed",
    Email: "gl87@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "INFO 3660",
    Title: "History and Theory of Digital Art",
    Name: "Maria Fernandez",
    Email: "mf252@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "INFO 4100",
    Title: "Learning Analytics",
    Name: "Rene Kizilcec",
    Email: "rfk65@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "INFO 4125",
    Title: "Project Management",
    Name: "Sharlane Cleare",
    Email: "ssc294@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "INFO 4145",
    Title: "Privacy and Security in the Data Economy",
    Name: "Cristobal Cheyre Forestier",
    Email: "cac555@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "INFO 4240",
    Title: "Designing Technology for Social Impact",
    Name: "Christopher Csikszentmihalyi",
    Email: "cpc83@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "INFO 4250",
    Title: "Surveillance and Privacy",
    Name: "Tracy Mitrano",
    Email: "tbm3@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "INFO 4301",
    Title: "Ethics in New Media, Technology, and Communication",
    Name: "Dawn Schrader",
    Email: "des14@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "INFO 4320",
    Title: "Introduction to Rapid Prototyping and Physical Computing",
    Name: "Cheng Zhang",
    Email: "cz448@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "INFO 4340",
    Title: "App Design and Prototyping",
    Name: "Kyle Harms",
    Email: "kjh235@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "INFO 4420",
    Title: "Human Computer Interaction Studio",
    Name: "Francois Guimbretiere",
    Email: "fvg3@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "INFO 4500",
    Title: "Language and Technology",
    Name: "Susan Fussell",
    Email: "srf72@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "INFO 4505",
    Title: "Computing and Global Development",
    Name: "Aditya Vashistha",
    Email: "av567@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "INFO 4555",
    Title: "Business Intelligence Systems",
    Name: "Jeff Christen",
    Email: "jrc42@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "INFO 4900",
    Title: "Independent Reading and Research",
    Name: "Solon Barocas",
    Email: "sb882@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "INFO 4910",
    Title: "Teaching in Information Science",
    Name: "Tanzeem Choudhury",
    Email: "tkc28@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "INFO 4940",
    Title: "Special Topics in Information Science",
    Name: "Qian Yang",
    Email: "qy242@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "INFO 4997",
    Title: "Practical Training in Information Science",
    Name: "David Shmoys",
    Email: "dbs10@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "INFO 5100",
    Title: "Visual Data Analytics for the Web",
    Name: "Jeff Rzeszotarski",
    Email: "jmr395@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "INFO 5101",
    Title: "Learning Analytics",
    Name: "Rene Kizilcec",
    Email: "rfk65@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "INFO 5125",
    Title: "Project Management",
    Name: "Sharlane Cleare",
    Email: "ssc294@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "INFO 5145",
    Title: "Privacy and Security in the Data Economy",
    Name: "Cristobal Cheyre Forestier",
    Email: "cac555@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "INFO 5240",
    Title: "Designing Technology for Social Impact",
    Name: "Christopher Csikszentmihalyi",
    Email: "cpc83@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "INFO 5250",
    Title: "Surveillance and Privacy",
    Name: "Tracy Mitrano",
    Email: "tbm3@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "INFO 5301",
    Title: "Ethics in New Media, Technology, and Communication",
    Name: "Dawn Schrader",
    Email: "des14@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "INFO 5306",
    Title: "Crowdsourcing and Human Computation",
    Name: "Haym Hirsh",
    Email: "hbh46@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "INFO 5310",
    Title: "Psychological and Social Aspects of Technology",
    Name: "Mor Naaman",
    Email: "mn469@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "INFO 5321",
    Title: "Introduction to Rapid Prototyping and Physical Computing",
    Name: "Cheng Zhang",
    Email: "cz448@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "INFO 5340",
    Title: "Virtual and Augmented Reality",
    Name: "Harald Haraldsson",
    Email: "hh586@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "INFO 5345",
    Title: "Developing and Designing Interactive Devices",
    Name: "Wendy Ju",
    Email: "wgj23@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "INFO 5355",
    Title: "Human Computer Interaction Design",
    Name: "Gilly Leshed",
    Email: "gl87@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "INFO 5360",
    Title: "Healthcare Organization and Delivery",
    Name: "Lisa Kern",
    Email: "lmk283@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "INFO 5370",
    Title: "Applied Data Science: Decision-Making Beyond Prediction",
    Name: "Nikhil Garg",
    Email: "ng343@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "INFO 5410",
    Title: "Urban Systems",
    Name: "Michael Samuelian",
    Email: "ms3637@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "INFO 5430",
    Title: "Urban Data",
    Name: "Emma Pierson",
    Email: "ep432@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "INFO 5440",
    Title: "App Design and Prototyping",
    Name: "Kyle Harms",
    Email: "kjh235@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "INFO 5460",
    Title: "The Politics and Policy of Urban Sustainability",
    Name: "",
    Email: ""
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "INFO 5505",
    Title: "Computing and Global Development",
    Name: "Aditya Vashistha",
    Email: "av567@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "INFO 5555",
    Title: "Health Tech, Data, and Systems",
    Name: "Daniel Stein",
    Email: "dms387@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "INFO 5556",
    Title: "Business Intelligence Systems",
    Name: "Jeff Christen",
    Email: "jrc42@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "INFO 5600",
    Title: "AI for Healthcare",
    Name: "Rajalakshmi Nandakumar",
    Email: "rn283@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "INFO 5610",
    Title: "Sensors, Systems and Algorithms for Precision Behavioral Health",
    Name: "Dan Adler",
    Email: "daa243@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "INFO 5900",
    Title: "MPS Project",
    Name: "Sharlane Cleare",
    Email: "ssc294@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "INFO 5905",
    Title: "Professional Career Development",
    Name: "Rebecca Salk",
    Email: "rms457@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "INFO 5910",
    Title: "Revolutionary Technologies",
    Name: "Tapan Parikh",
    Email: "tsp53@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "INFO 5920",
    Title: "Specialization Project for Connective Media, Health Tech, and Urban Tech",
    Name: "Deborah Estrin",
    Email: "de226@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "INFO 5940",
    Title: "Special Topics in Information Science",
    Name: "Qian Yang",
    Email: "qy242@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "INFO 6210",
    Title: "Information, Technology, and Society",
    Name: "Helen Nissenbaum",
    Email: "hn288@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "INFO 6310",
    Title: "Behavior and Information Technology",
    Name: "Susan Fussell",
    Email: "srf72@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "INFO 6410",
    Title: "HCI and Design",
    Name: "Nicki Dell",
    Email: "nld42@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "INFO 6500",
    Title: "Language and Technology",
    Name: "Susan Fussell",
    Email: "srf72@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "INFO 6520",
    Title: "Human Computer Interaction Graduate Studio",
    Name: "Francois Guimbretiere",
    Email: "fvg3@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "INFO 6702",
    Title: "Topics in Computational Sustainability",
    Name: "Carla Gomes",
    Email: "cpg5@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "INFO 6742",
    Title: "Natural Language Processing and Social Interaction",
    Name: "Cristian Danescu-Niculescu-Mizil",
    Email: "cd326@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "INFO 6751",
    Title: "Casual Inference in Observational Settings",
    Name: "",
    Email: ""
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "INFO 6940",
    Title: "Special Topics in Information Science",
    Name: "Qian Yang",
    Email: "qy242@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "INFO 6960",
    Title: "Data Science for Global Development",
    Name: "Allison Koenecke",
    Email: "azk22@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "INFO 7090",
    Title: "IS Colloquium",
    Name: "David Williamson",
    Email: "dw36@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "INFO 7900",
    Title: "Independent Research",
    Name: "Deborah Estrin",
    Email: "de226@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "INFO 7905",
    Title: "IS PhD Professionalization Seminar",
    Name: "Matthew Wilkens",
    Email: "mw966@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "INFO 9900",
    Title: "Thesis Research",
    Name: "Shiri Azenkot",
    Email: "sa933@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "ITAL 1110",
    Title: "Elementary Italian In Rome I",
    Name: "Carolina Ciampaglia",
    Email: "cc863@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "ITAL 1120",
    Title: "Elementary Italian In Rome II",
    Name: "Carolina Ciampaglia",
    Email: "cc863@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "ITAL 1201",
    Title: "Italian I",
    Name: "Judith Tauber",
    Email: "jmt349@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "ITAL 2110",
    Title: "Italian Intermediate Composition and Conversation I in Rome",
    Name: "",
    Email: ""
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "ITAL 2130",
    Title: "Italian Intermediate Composition and Conversation II in Rome",
    Name: "",
    Email: ""
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "ITAL 2201",
    Title: "Italian III",
    Name: "Valentina Fulginiti",
    Email: "vf65@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "ITAL 2203",
    Title: "Languages-Literatures-Identities",
    Name: "Marilyn Migiel",
    Email: "mm55@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "ITAL 3750",
    Title: "Pinocchio: Adventures in Literature and Film",
    Name: "Timothy Campbell",
    Email: "tcc9@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "ITAL 4190",
    Title: "Special Topics in Italian Literature",
    Name: "Timothy Campbell",
    Email: "tcc9@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "ITAL 4250",
    Title: "Introduction to Biopolitics",
    Name: "Timothy Campbell",
    Email: "tcc9@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "ITAL 4290",
    Title: "Honors in Italian Literature",
    Name: "Timothy Campbell",
    Email: "tcc9@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "ITAL 6250",
    Title: "Introduction to Biopolitics",
    Name: "Timothy Campbell",
    Email: "tcc9@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "ITAL 6270",
    Title: "Dante's Commedia",
    Name: "Marilyn Migiel",
    Email: "mm55@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "ITAL 6390",
    Title: "Special Topics in Italian Literature",
    Name: "Timothy Campbell",
    Email: "tcc9@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "JAPAN 1101",
    Title: "Elementary Japanese I",
    Name: "Naomi Larson",
    Email: "nn17@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "JAPAN 2201",
    Title: "Intermediate Japanese I",
    Name: "Misako Suzuki",
    Email: "ms449@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "JAPAN 3301",
    Title: "High Intermediate Japanese I",
    Name: "Sahoko Ichikawa",
    Email: "si24@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "JAPAN 4401",
    Title: "Advanced Japanese I",
    Name: "Eriko Akamatsu",
    Email: "ea235@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "JAPAN 4421",
    Title: "Special Topics",
    Name: "Kaori Nishikino",
    Email: "kn323@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "JPLIT 6625",
    Title: "Directed Readings",
    Name: "",
    Email: ""
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "JPLIT 6627",
    Title: "Advanced Directed Readings",
    Name: "",
    Email: ""
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "JWST 1101",
    Title: "Elementary Modern Hebrew I",
    Name: "Shalom Shoer",
    Email: "ss66@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "JWST 1103",
    Title: "Elementary Modern Hebrew III",
    Name: "Shalom Shoer",
    Email: "ss66@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "JWST 1110",
    Title: "Beginning Biblical Hebrew",
    Name: "Lauren Monroe",
    Email: "lm283@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "JWST 1776",
    Title: "Elementary Yiddish I",
    Name: "David Forman",
    Email: "drf84@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "JWST 1880",
    Title: "Intermediate Yiddish",
    Name: "",
    Email: ""
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "JWST 2001",
    Title: "Russian Jews and Jewish Russians in Literature and Film",
    Name: "Raissa Krivitsky",
    Email: "rvk3@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "JWST 2271",
    Title: "Yiddish Linguistics",
    Name: "Molly Diesing",
    Email: "md20@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "JWST 2724",
    Title: "Introduction to the Hebrew Bible",
    Name: "Lauren Monroe",
    Email: "lm283@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "JWST 2754",
    Title: "Wondrous Literatures of the Near East",
    Name: "Deborah Starr",
    Email: "das86@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "JWST 3101",
    Title: "Advanced Modern Hebrew I",
    Name: "Shalom Shoer",
    Email: "ss66@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "JWST 3458",
    Title: "Specters: Derrida, Marx, and Other Ghosts",
    Name: "Jonathan Boyarin",
    Email: "jab857@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "JWST 3850",
    Title: "Middle East Politics",
    Name: "Alexandra Blackman",
    Email: "adb295@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "JWST 4533",
    Title: "The Lower East Side: Jews and the Immigrant City",
    Name: "Elissa Sampson",
    Email: "ejs362@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "JWST 6458",
    Title: "Specters: Derrida, Marx, and Other Ghosts",
    Name: "Jonathan Boyarin",
    Email: "jab857@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "JWST 7533",
    Title: "The Lower East Side: Jews and the Immigrant City",
    Name: "Elissa Sampson",
    Email: "ejs362@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "KHMER 1100",
    Title: "Elements of Khmer Language and Culture",
    Name: "Hannah Phan",
    Email: "hp23@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "KHMER 1121",
    Title: "Elementary Khmer I",
    Name: "Hannah Phan",
    Email: "hp23@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "KHMER 2201",
    Title: "Intermediate Khmer I",
    Name: "Hannah Phan",
    Email: "hp23@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "KHMER 3301",
    Title: "Advanced Khmer I",
    Name: "Hannah Phan",
    Email: "hp23@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "KHMER 4431",
    Title: "Directed Study",
    Name: "Hannah Phan",
    Email: "hp23@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "KOREA 1101",
    Title: "Elementary Korean I",
    Name: "Meejeong Song",
    Email: "ms296@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "KOREA 1109",
    Title: "Elementary Korean Reading and Writing I",
    Name: "Hankyul Kim",
    Email: "hk783@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "KOREA 2201",
    Title: "Intermediate Korean I",
    Name: "Hankyul Kim",
    Email: "hk783@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "KOREA 2209",
    Title: "Intermediate Korean Reading and Writing I",
    Name: "Meejeong Song",
    Email: "ms296@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "KOREA 3301",
    Title: "High Intermediate Korean I",
    Name: "Hankyul Kim",
    Email: "hk783@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "KOREA 4401",
    Title: "Advanced Korean I",
    Name: "Meejeong Song",
    Email: "ms296@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "LA 1410",
    Title: "Grounding in Landscape Architecture I",
    Name: "Anne Weber",
    Email: "alw297@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "LA 2010",
    Title: "Medium of the Landscape I",
    Name: "Valerie Aymer",
    Email: "vea3@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "LA 2620",
    Title: "Laboratory in Landscape Archaeology",
    Name: "Sherene Baugher",
    Email: "sbb8@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "LA 3010",
    Title: "Integrating Theory and Practice I",
    Name: "Maria Goula",
    Email: "mg987@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "LA 3160",
    Title: "Site Engineering",
    Name: "Valerie Aymer",
    Email: "vea3@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "LA 4010",
    Title: "Urban Design Studio",
    Name: "",
    Email: ""
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "LA 4030",
    Title: "Directed Study: The Concentration",
    Name: "Valerie Aymer",
    Email: "vea3@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "LA 4050",
    Title: "Designing Archaeological Exhibits",
    Name: "Sherene Baugher",
    Email: "sbb8@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "LA 4830",
    Title: "Seminar in Landscape Studies",
    Name: "Jennifer Birkeland",
    Email: "jb2597@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "LA 4910",
    Title: "Creating the Urban Eden: Woody Plant Selection, Design, and Landscape Establishment",
    Name: "Nina Bassuk",
    Email: "nlb2@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "LA 4940",
    Title: "Special Topics in Landscape Architecture",
    Name: "Anne Weber",
    Email: "alw297@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "LA 4970",
    Title: "Individual Study in Landscape Architecture",
    Name: "",
    Email: ""
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "LA 4980",
    Title: "Undergraduate Teaching",
    Name: "",
    Email: ""
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "LA 4990",
    Title: "Undergraduate Research",
    Name: "",
    Email: ""
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "LA 5010",
    Title: "Composition and Theory I",
    Name: "Martin Hogue",
    Email: "mh2448@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "LA 5050",
    Title: "Graphic Communication I",
    Name: "Martin Hogue",
    Email: "mh2448@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "LA 5090",
    Title: "Master of Professional Studies Project",
    Name: "Jamie Vanucchi",
    Email: "jlv29@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "LA 5830",
    Title: "Seminar in Landscape Studies",
    Name: "Jennifer Birkeland",
    Email: "jb2597@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "LA 5910",
    Title: "Creating the Urban Eden: Woody Plant Selection, Design, and Landscape Establishment",
    Name: "Nina Bassuk",
    Email: "nlb2@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "LA 5970",
    Title: "Graduate Individual Study in Landscape Architecture",
    Name: "Mitchell Glass",
    Email: "mjg374@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "LA 5980",
    Title: "Graduate Teaching",
    Name: "Sherene Baugher",
    Email: "sbb8@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "LA 6010",
    Title: "Integrating Theory and Practice I",
    Name: "Mitchell Glass",
    Email: "mjg374@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "LA 6030",
    Title: "Directed Study: The Concentration",
    Name: "Valerie Aymer",
    Email: "vea3@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "LA 6050",
    Title: "Designing Archaeological Exhibits",
    Name: "Sherene Baugher",
    Email: "sbb8@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "LA 6160",
    Title: "Site Engineering",
    Name: "Valerie Aymer",
    Email: "vea3@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "LA 6900",
    Title: "Methods of Landscape Architectural Inquiry",
    Name: "Maria Goula",
    Email: "mg987@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "LA 6910",
    Title: "Design of Landscapes",
    Name: "Margot Lystra",
    Email: "mkl75@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "LA 6940",
    Title: "Special Topics in Landscape Architecture",
    Name: "Duarte Santo",
    Email: "ds997@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "LA 7010",
    Title: "Urban Design and Planning",
    Name: "Josh Cerra",
    Email: "jfc299@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "LA 8900",
    Title: "Master's Thesis in Landscape Architecture",
    Name: "",
    Email: ""
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "LATA 1210",
    Title: "Elementary Quechua I",
    Name: "Soledad Chango",
    Email: "msc299@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "LATA 1975",
    Title: "Caribbean Migrations I: Caribbean Arrivals",
    Name: "Gerard Aching",
    Email: "gla23@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "LATA 2170",
    Title: "Early Modern Iberian Survey",
    Name: "Simone Pinet",
    Email: "sp349@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "LATA 3100",
    Title: "Advanced Portuguese I",
    Name: "Denise Osborne",
    Email: "dmo67@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "LATA 3290",
    Title: "Comparative Politics of Latin America",
    Name: "Kenneth Roberts",
    Email: "kr99@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "LATA 3565",
    Title: "Art and Architecture of Colonial Latin America",
    Name: "Ananda Cohen-Aponte",
    Email: "aic42@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "LATA 3609",
    Title: "Brazilian Ensemble - Deixa Sambar",
    Name: "Steven Pond",
    Email: "sfp8@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "LATA 3612",
    Title: "Politics of Sustainable Development in Latin America 1",
    Name: "Kenneth Roberts",
    Email: "kr99@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "LATA 3613",
    Title: "Cornell Steel Band",
    Name: "Christopher Miller",
    Email: "cjm299@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "LATA 4000",
    Title: "Contemporary Issues in Latin - Latino America",
    Name: "Ernesto Bassi Arevalo",
    Email: "eb577@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "LATA 4268",
    Title: "Aztecs and Their Empire: Myth, History, and Politics",
    Name: "John Henderson",
    Email: "jsh6@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "LATA 6000",
    Title: "Contemporary Issues in Latin-Latino America",
    Name: "Ernesto Bassi Arevalo",
    Email: "eb577@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "LATA 7268",
    Title: "Aztecs and Their Empire: Myth, History, and Politics",
    Name: "John Henderson",
    Email: "jsh6@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "LATIN 1201",
    Title: "Elementary Latin I",
    Name: "",
    Email: ""
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "LATIN 1204",
    Title: "Latin in Review",
    Name: "Michael Fontaine",
    Email: "mf268@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "LATIN 1205",
    Title: "Intermediate Latin I",
    Name: "Eric Rebillard",
    Email: "er97@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "LATIN 2201",
    Title: "Latin Prose",
    Name: "Nicole Giannella",
    Email: "njg68@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "LATIN 2207",
    Title: "Conversational Latin I",
    Name: "Daniel Gallagher",
    Email: "dbg223@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "LATIN 3203",
    Title: "Roman Poetry",
    Name: "Courtney Roby",
    Email: "car295@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "LATIN 3286",
    Title: "Independent Study in Latin, Undergraduate Level",
    Name: "",
    Email: ""
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "LATIN 5211",
    Title: "Elementary Latin I",
    Name: "",
    Email: ""
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "LATIN 5214",
    Title: "Latin in Review",
    Name: "Michael Fontaine",
    Email: "mf268@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "LATIN 5215",
    Title: "Intermediate Latin I",
    Name: "Eric Rebillard",
    Email: "er97@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "LATIN 5221",
    Title: "Latin Prose",
    Name: "Nicole Giannella",
    Email: "njg68@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "LATIN 5227",
    Title: "Conversational Latin I",
    Name: "Daniel Gallagher",
    Email: "dbg223@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "LATIN 5233",
    Title: "Roman Poetry",
    Name: "Courtney Roby",
    Email: "car295@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "LATIN 6201",
    Title: "Advanced Readings in Latin Literature",
    Name: "Daniel Gallagher",
    Email: "dbg223@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "LATIN 7262",
    Title: "Latin Philosophical Texts",
    Name: "",
    Email: ""
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "LATIN 7271",
    Title: "Graduate Seminar in Latin",
    Name: "Charles Brittain",
    Email: "cfb9@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "LATIN 7920",
    Title: "Independent Study in Latin",
    Name: "Frederick Ahl",
    Email: "fma2@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "LAW 2650",
    Title: "Psychology and Law",
    Name: "Valerie Hans",
    Email: "vh42@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "LAW 3281",
    Title: "Constitutional Politics",
    Name: "Dawn Chutkow",
    Email: "dmc66@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "LAW 4021",
    Title: "Competition Law and Policy",
    Name: "George Hay",
    Email: "gah7@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "LAW 5001",
    Title: "Civil Procedure",
    Name: "Kevin Clermont",
    Email: "kmc12@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "LAW 5021",
    Title: "Constitutional Law",
    Name: "Sheri Johnson",
    Email: "slj8@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "LAW 5041",
    Title: "Contracts",
    Name: "Emad Atiq",
    Email: "eha47@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "LAW 5081",
    Title: "Lawyering",
    Name: "Rachel Goldberg",
    Email: "rtg67@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "LAW 5151",
    Title: "Torts",
    Name: "Cynthia Bowman",
    Email: "cgb28@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "LAW 6007",
    Title: "Contracts for LLM Students",
    Name: "Chantal Thomas",
    Email: "ct343@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "LAW 6009",
    Title: "Constitutional Law for LLMs",
    Name: "Ezra Young",
    Email: "ey237@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "LAW 6011",
    Title: "Administrative Law: The Law of the Regulatory State",
    Name: "Jeffrey Rachlinski",
    Email: "jjr7@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "LAW 6024",
    Title: "Managing and Resolving Conflict",
    Name: "Aibak Hafeez",
    Email: "ah768@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "LAW 6027",
    Title: "Campus Mediation Practicum",
    Name: "Katrina Nobles",
    Email: "kn64@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "LAW 6101",
    Title: "Antitrust Law",
    Name: "George Hay",
    Email: "gah7@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "LAW 6121",
    Title: "Bankruptcy",
    Name: "",
    Email: ""
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "LAW 6131",
    Title: "Business Organizations",
    Name: "Robert Hockett",
    Email: "rch37@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "LAW 6161",
    Title: "Comparative Law: The Civil Law Tradition",
    Name: "Mitchel Lasser",
    Email: "ml355@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "LAW 6241",
    Title: "Federal White Collar Crime",
    Name: "Stephen Garvey",
    Email: "spg3@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "LAW 6263",
    Title: "Criminal Procedures: Adjudications",
    Name: "John Blume",
    Email: "jb94@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "LAW 6307",
    Title: "Disaster Law",
    Name: "Kathleen Bergin",
    Email: "kb729@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "LAW 6331",
    Title: "Employment Law",
    Name: "Stewart Schwab",
    Email: "sjs15@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "LAW 6345",
    Title: "Entertainment Law",
    Name: "Howard Leib",
    Email: "hdl44@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "LAW 6430",
    Title: "Financial Markets and Institutions",
    Name: "Maureen O'Hara",
    Email: "mo19@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "LAW 6432",
    Title: "Federal Criminal Practice",
    Name: "Jonathan Feldman",
    Email: "jwf39@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "LAW 6436",
    Title: "Practicing Criminal Defense in Federal Court",
    Name: "Randy Zelin",
    Email: "rz434@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "LAW 6441",
    Title: "Federal Income Taxation",
    Name: "Eleanor Wilking",
    Email: "ew473@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "LAW 6455",
    Title: "Constitutional Litigation and Procedure",
    Name: "Riley Keenan",
    Email: "rtk44@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "LAW 6457",
    Title: "Inclusion and Exclusion in American Law",
    Name: "Aziz Rana",
    Email: "ar643@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "LAW 6458",
    Title: "Privatization",
    Name: "Avihay-Faivel Dorfman",
    Email: "ad924@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "LAW 6461",
    Title: "Financial Institutions",
    Name: "Dan Awrey",
    Email: "aja288@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "LAW 6470",
    Title: "High Growth Corporate Transactions",
    Name: "Timothy Bixler",
    Email: "teb39@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "LAW 6485",
    Title: "Function of the General Counsel",
    Name: "Richard John",
    Email: "rtj1@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "LAW 6512",
    Title: "Intellectual Property Law",
    Name: "James Grimmelmann",
    Email: "jtg243@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "LAW 6521",
    Title: "International Economic Law",
    Name: "Odette Lienau",
    Email: "ol53@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "LAW 6533",
    Title: "Federal Income Taxation of Low-Income Taxpayers",
    Name: "John McKinley",
    Email: "jwm336@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "LAW 6561",
    Title: "International Human Rights",
    Name: "Muna Ndulo",
    Email: "mbn5@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "LAW 6564",
    Title: "International Taxation",
    Name: "Robert Green",
    Email: "rag5@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "LAW 6569",
    Title: "Introduction to Depositions",
    Name: "Michelle Fongyee Whelan",
    Email: "maf282@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "LAW 6572",
    Title: "Introduction to Transactional Lawyering",
    Name: "Mark Underberg",
    Email: "mau22@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "LAW 6641",
    Title: "Professional Responsibility",
    Name: "William Wendel",
    Email: "wbw9@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "LAW 6701",
    Title: "Legislation",
    Name: "Jed Stiglitz",
    Email: "js2758@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "LAW 6723",
    Title: "Aggregate Litigation – A Global Perspective",
    Name: "Alon Klement",
    Email: "ak992@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "LAW 6742",
    Title: "Patent Law",
    Name: "Oskar Liivak",
    Email: "ol10@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "LAW 6761",
    Title: "Principles of American Legal Writing",
    Name: "Chenay Weyble",
    Email: "cbw75@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "LAW 6764",
    Title: "Practical Lawyering",
    Name: "Mark Underberg",
    Email: "mau22@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "LAW 6784",
    Title: "Professional Responsibility for LLMs",
    Name: "Amanda Whorton",
    Email: "amw424@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "LAW 6801",
    Title: "Remedies",
    Name: "Emily Sherwin",
    Email: "els36@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "LAW 6821",
    Title: "Securities Regulation",
    Name: "Saule Omarova",
    Email: "sto24@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "LAW 6883",
    Title: "Corporate Finance for Lawyers: Bootcamp",
    Name: "LizabethAnn Eisen",
    Email: "lr16@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "LAW 6893",
    Title: "Technology Transactions",
    Name: "Matthew D'Amore",
    Email: "mmd28@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "LAW 6921",
    Title: "Trial Advocacy",
    Name: "Keir Weyble",
    Email: "kw346@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "LAW 6941",
    Title: "Trusts and Estates",
    Name: "Emily Sherwin",
    Email: "els36@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "LAW 7156",
    Title: "Copyright Litigation Lawyering",
    Name: "Andrew Berger",
    Email: "ab649@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "LAW 7178",
    Title: "Moral Foundations of Anti-Discrimination",
    Name: "Andrei Marmor",
    Email: "am2773@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "LAW 7232",
    Title: "Ethical Issues in Criminal Investigations, Prosecutions and Policy",
    Name: "Marion Bachrach",
    Email: "mjb287@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "LAW 7260",
    Title: "Federal Appellate Practice",
    Name: "John Blume",
    Email: "jb94@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "LAW 7311",
    Title: "Immigration and Refugee Law",
    Name: "Stephen Yale-Loehr",
    Email: "swy1@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "LAW 7360",
    Title: "International Financial Regulation",
    Name: "Susan Emmenegger",
    Email: "see58@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "LAW 7371",
    Title: "Islamic Law and History",
    Name: "David Powers",
    Email: "dsp4@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "LAW 7373",
    Title: "Judicial Decision Making",
    Name: "Andrew Wistrich",
    Email: "ajw326@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "LAW 7440",
    Title: "Law and Social Change: Comparative Law in Africa",
    Name: "Jocelyn Hackett",
    Email: "jjh283@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "LAW 7584",
    Title: "Mediation",
    Name: "Jeffery Shepardson",
    Email: "jcs542@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "LAW 7598",
    Title: "Negotiation and Facilitation Seminar",
    Name: "Samuel Dahan",
    Email: "sd694@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "LAW 7621",
    Title: "Issues in Poverty Law",
    Name: "Douglas Lasdon",
    Email: "dhl56@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "LAW 7675",
    Title: "Issues in Financial Regulation",
    Name: "Saule Omarova",
    Email: "sto24@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "LAW 7737",
    Title: "Social Entrepreneurship",
    Name: "Douglas Lasdon",
    Email: "dhl56@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "LAW 7739",
    Title: "The Role of the State Attorney General",
    Name: "Joseph Callery",
    Email: "jdc342@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "LAW 7740",
    Title: "Law and Economics: A Game-Theoretic Approach",
    Name: "Kaushik Basu",
    Email: "kb40@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "LAW 7760",
    Title: "Movement Lawyering Clinic I",
    Name: "Carlton Williams",
    Email: "cew257@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "LAW 7762",
    Title: "Movement Lawyering Clinic II",
    Name: "Carlton Williams",
    Email: "cew257@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "LAW 7763",
    Title: "Movement Lawyering Clinic III",
    Name: "Carlton Williams",
    Email: "cew257@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "LAW 7765",
    Title: "Tax Policy",
    Name: "Eleanor Wilking",
    Email: "ew473@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "LAW 7775",
    Title: "Critical Perspectives on Law",
    Name: "Elizabeth Anker",
    Email: "esa52@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "LAW 7785",
    Title: "Law of Genocide and War Crimes Trials",
    Name: "Menachem Rosensaft",
    Email: "mzr3@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "LAW 7790",
    Title: "Afghanistan Assistance Clinic",
    Name: "Hilary Fraser",
    Email: "htf4@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "LAW 7805",
    Title: "Advanced Labor Law Clinic",
    Name: "Angela Cornell",
    Email: "abc49@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "LAW 7811",
    Title: "Capital Punishment Clinic I",
    Name: "Sheri Johnson",
    Email: "slj8@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "LAW 7815",
    Title: "Capital Punishment Clinic II",
    Name: "Sheri Johnson",
    Email: "slj8@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "LAW 7832",
    Title: "Externship - Full Time",
    Name: "Michaela Azemi",
    Email: "ma688@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "LAW 7834",
    Title: "Externship - Part Time",
    Name: "Michaela Azemi",
    Email: "ma688@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "LAW 7839",
    Title: "Entrepreneurship Clinic I",
    Name: "Celia Bigoness",
    Email: "cwb94@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "LAW 7845",
    Title: "Advanced Entrepreneurship Clinic",
    Name: "Celia Bigoness",
    Email: "cwb94@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "LAW 7854",
    Title: "Tenants Advocacy Practicum I",
    Name: "William Niebel",
    Email: "wjn26@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "LAW 7855",
    Title: "International Human Rights: Litigation and Advocacy I",
    Name: "Sandra Babcock",
    Email: "slb348@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "LAW 7857",
    Title: "Farmworker Legal Assistance Clinic I",
    Name: "Beth Lyon",
    Email: "mbl235@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "LAW 7858",
    Title: "Farmworker Legal Assistance Clinic II",
    Name: "Beth Lyon",
    Email: "mbl235@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "LAW 7859",
    Title: "Farmworker Legal Assistance Clinic III",
    Name: "Beth Lyon",
    Email: "mbl235@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "LAW 7860",
    Title: "International Human Rights: Litigation and Advocacy II",
    Name: "Sandra Babcock",
    Email: "slb348@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "LAW 7864",
    Title: "Farmworker Legal Assistance Clinic IV",
    Name: "Beth Lyon",
    Email: "mbl235@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "LAW 7871",
    Title: "Labor Law Clinic",
    Name: "Angela Cornell",
    Email: "abc49@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "LAW 7876",
    Title: "Low-Income Taxpayer Law and Accounting Practicum II",
    Name: "Marquise Riley",
    Email: "msr259@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "LAW 7878",
    Title: "International Human Rights Clinic: Litigation and Advocacy III",
    Name: "Sandra Babcock",
    Email: "slb348@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "LAW 7879",
    Title: "International Human Rights: Litigation and Advocacy IV",
    Name: "Sandra Babcock",
    Email: "slb348@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "LAW 7891",
    Title: "Tenants Advocacy Practicum II",
    Name: "William Niebel",
    Email: "wjn26@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "LAW 7892",
    Title: "Tenants Advocacy Practicum III",
    Name: "William Niebel",
    Email: "wjn26@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "LAW 7893",
    Title: "Tenants Advocacy Practicum IV",
    Name: "William Niebel",
    Email: "wjn26@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "LAW 7914",
    Title: "Global Gender Justice Clinic",
    Name: "Elizabeth Brundige",
    Email: "eb456@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "LAW 7915",
    Title: "Advanced Gender Justice Clinic",
    Name: "Elizabeth Brundige",
    Email: "eb456@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "LAW 7923",
    Title: "Protest and Civil Disobedience Defense Practicum I",
    Name: "Sujata Gibson",
    Email: "sg2286@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "LAW 7925",
    Title: "New York Attorney General Practicum I",
    Name: "Joseph Callery",
    Email: "jdc342@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "LAW 7945",
    Title: "Federal Indian Law Practicum I",
    Name: "Michael Sliger",
    Email: "mds75@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "LAW 7946",
    Title: "Federal Indian Law Practicum II",
    Name: "Michael Sliger",
    Email: "mds75@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "LAW 7949",
    Title: "Federal Indian Law Practcm III",
    Name: "Michael Sliger",
    Email: "mds75@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "LAW 7950",
    Title: "Federal Indian Law Practicum IV",
    Name: "Michael Sliger",
    Email: "mds75@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "LAW 7991",
    Title: "Cornell Research Colloquium",
    Name: "Mitchel Lasser",
    Email: "ml355@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "LEAD 1960",
    Title: "Leadership Training Practicum",
    Name: "",
    Email: ""
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "LEAD 3100",
    Title: "Foundations in Leadership: Skills for Personal and Professional Effectiveness",
    Name: "Larry VanDeValk",
    Email: "ljv4@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "LEAD 4925",
    Title: "Leadership Minor ePortfolio",
    Name: "Larry VanDeValk",
    Email: "ljv4@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "LEAD 4970",
    Title: "Undergraduate Experience in Leadership",
    Name: "Marvin Pritts",
    Email: "mpp3@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "LEGAL 5104",
    Title: "Business Organizations and Corporate Governance",
    Name: "Celia Bigoness",
    Email: "cwb94@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "LEGAL 5108",
    Title: "Compliance Systems",
    Name: "Richard John",
    Email: "rtj1@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "LEGAL 5109",
    Title: "Regulatory Policy and Process",
    Name: "Jed Stiglitz",
    Email: "js2758@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "LEGAL 5111",
    Title: "Business Transactions",
    Name: "Franci Blassberg",
    Email: "fjb26@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "LGBT 2421",
    Title: "Worlding Sex and Gender",
    Name: "Saida Hodzic",
    Email: "sh888@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "LGBT 3250",
    Title: "Staging Gay and Transgender Histories",
    Name: "Sara Warner",
    Email: "slw42@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "LGBT 3740",
    Title: "Parody",
    Name: "Nick Salvato",
    Email: "ngs9@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "LGBT 3990",
    Title: "Undergraduate Independent Study",
    Name: "",
    Email: ""
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "LGBT 4432",
    Title: "Queer Theory and Kinship Studies",
    Name: "Lucinda Ramberg",
    Email: "ler35@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "LGBT 4451",
    Title: "Gender and Sexuality in Southeast Asian Cinema",
    Name: "Arnika Fuhrmann",
    Email: "aif32@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "LGBT 6301",
    Title: "Media and Sexuality",
    Name: "Katherine Sender",
    Email: "ks785@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "LGBT 6331",
    Title: "Gender and Sexuality in Southeast Asian Cinema",
    Name: "Arnika Fuhrmann",
    Email: "aif32@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "LGBT 6755",
    Title: "Staging Gay and Transgender Histories",
    Name: "Sara Warner",
    Email: "slw42@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "LGBT 7432",
    Title: "Queer Theory and Kinship Studies",
    Name: "Lucinda Ramberg",
    Email: "ler35@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "LING 1101",
    Title: "Introduction to Linguistics",
    Name: "Laura Casasanto",
    Email: "lsc96@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "LING 1131",
    Title: "Elementary Sanskrit I",
    Name: "Todd Clary",
    Email: "tcc24@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "LING 2221",
    Title: "Language and Society",
    Name: "Abigail Cohn",
    Email: "acc4@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "LING 2241",
    Title: "Yiddish Linguistics",
    Name: "Molly Diesing",
    Email: "md20@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "LING 2251",
    Title: "Intermediate Sanskrit I",
    Name: "Lawrence McCrea",
    Email: "ljm223@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "LING 2261",
    Title: "Introduction to Indo-European Linguistics",
    Name: "Alan Nussbaum",
    Email: "ajn8@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "LING 3303",
    Title: "Introduction to Syntax and Semantics",
    Name: "Miloje Despic",
    Email: "md682@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "LING 3315",
    Title: "Old Norse I",
    Name: "",
    Email: ""
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "LING 3321",
    Title: "History of Romance Languages I",
    Name: "Ti Alkire",
    Email: "eha1@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "LING 3324",
    Title: "Cayuga Language and Culture",
    Name: "Jessica Martin",
    Email: "jlm556@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "LING 3332",
    Title: "Philosophy of Language",
    Name: "William Starr",
    Email: "wbs56@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "LING 3390",
    Title: "Independent Study in Linguistics",
    Name: "Dorit Abusch",
    Email: "da45@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "LING 4401",
    Title: "Phonology I",
    Name: "Draga Zec",
    Email: "dz17@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "LING 4403",
    Title: "Syntax I",
    Name: "Molly Diesing",
    Email: "md20@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "LING 4419",
    Title: "Phonetics I",
    Name: "Sam Tilsen",
    Email: "st657@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "LING 4421",
    Title: "Semantics I",
    Name: "Dorit Abusch",
    Email: "da45@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "LING 4423",
    Title: "Morphology",
    Name: "Miloje Despic",
    Email: "md682@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "LING 4434",
    Title: "Computational Linguistics II",
    Name: "Marten van Schijndel",
    Email: "mv443@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "LING 4457",
    Title: "Homeric Language",
    Name: "Alan Nussbaum",
    Email: "ajn8@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "LING 4474",
    Title: "Natural Language Processing",
    Name: "Lillian Lee",
    Email: "ljl2@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "LING 4491",
    Title: "Honors Research Workshop I",
    Name: "Abigail Cohn",
    Email: "acc4@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "LING 4493",
    Title: "Honors Thesis Research",
    Name: "Dorit Abusch",
    Email: "da45@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "LING 6261",
    Title: "Introduction to Indo-European Linguistics",
    Name: "Alan Nussbaum",
    Email: "ajn8@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "LING 6324",
    Title: "Cayuga Language and Culture",
    Name: "Jessica Martin",
    Email: "jlm556@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "LING 6401",
    Title: "Phonology I",
    Name: "Draga Zec",
    Email: "dz17@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "LING 6403",
    Title: "Syntax I",
    Name: "Molly Diesing",
    Email: "md20@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "LING 6419",
    Title: "Phonetics I",
    Name: "Sam Tilsen",
    Email: "st657@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "LING 6421",
    Title: "Semantics I",
    Name: "Dorit Abusch",
    Email: "da45@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "LING 6423",
    Title: "Morphology",
    Name: "Miloje Despic",
    Email: "md682@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "LING 6457",
    Title: "Homeric Language",
    Name: "Alan Nussbaum",
    Email: "ajn8@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "LING 6601",
    Title: "Topics in Phonetics-Phonological Theory",
    Name: "Draga Zec",
    Email: "dz17@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "LING 6635",
    Title: "Indo-European Workshop",
    Name: "Michael Weiss",
    Email: "mlw36@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "LING 6692",
    Title: "Phonetic Data Analysis Workshop",
    Name: "",
    Email: ""
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "LING 6693",
    Title: "Computational Psycholinguistics Discussion",
    Name: "Marten van Schijndel",
    Email: "mv443@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "LING 7701",
    Title: "Directed Research",
    Name: "Dorit Abusch",
    Email: "da45@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "LING 7711",
    Title: "Semantics Seminar",
    Name: "Dorit Abusch",
    Email: "da45@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "LING 7719",
    Title: "Interface Seminar",
    Name: "Amalia Skilton",
    Email: "aes379@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "LSP 1250",
    Title: "Spanish for Heritage Speakers I",
    Name: "Mary Redmond",
    Email: "mkr4@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "LSP 1800",
    Title: "Immigration in U.S. History",
    Name: "Maria Cristina Garcia",
    Email: "mcg20@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "LSP 2020",
    Title: "Spanish for Heritage Speakers",
    Name: "Mary Redmond",
    Email: "mkr4@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "LSP 2100",
    Title: "Introduction to Latinx Studies",
    Name: "Vilma Santiago-Irizarry",
    Email: "vs23@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "LSP 2212",
    Title: "Caribbean Worlds",
    Name: "",
    Email: ""
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "LSP 2251",
    Title: "U.S. Immigration Narratives",
    Name: "Maria Cristina Garcia",
    Email: "mcg20@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "LSP 2400",
    Title: "Introduction to U.S. Latinx Literature",
    Name: "Debra Castillo",
    Email: "dac9@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "LSP 2810",
    Title: "Migration: Histories, Controversies, and Perspectives",
    Name: "Shannon Gleeson",
    Email: "smg338@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "LSP 4000",
    Title: "Contemporary Issues in Latin - Latino America",
    Name: "Ernesto Bassi Arevalo",
    Email: "eb577@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "LSP 4210",
    Title: "Undergraduate Independent Study",
    Name: "Vilma Santiago-Irizarry",
    Email: "vs23@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "LSP 4283",
    Title: "Latino Politics as Racial Politics",
    Name: "Sergio Garcia-Rios",
    Email: "sig35@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "LSP 4556",
    Title: "Decolonial Poetics and Aesthetics: Arts of Resistance in the Americas",
    Name: "Ananda Cohen-Aponte",
    Email: "aic42@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "LSP 4790",
    Title: "Latinx Education Across the Americas",
    Name: "Sofia Villenas",
    Email: "sav33@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "LSP 6000",
    Title: "Contemporary Issues in Latin-Latino America",
    Name: "Ernesto Bassi Arevalo",
    Email: "eb577@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "LSP 6210",
    Title: "Graduate Student Independent Study",
    Name: "",
    Email: ""
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "LSP 6565",
    Title: "Decolonial Poetics and Aesthetics: Arts of Resistance in the Americas",
    Name: "Ananda Cohen-Aponte",
    Email: "aic42@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "LSP 6611",
    Title: "Minoritarian Aesthetics In-And Performance",
    Name: "Karen Jaime",
    Email: "kj12@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "LSP 7790",
    Title: "Latinx Education Across the Americas",
    Name: "Sofia Villenas",
    Email: "sav33@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "MAE 1170",
    Title: "Introduction to Mechanical Engineering",
    Name: "",
    Email: ""
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "MAE 1270",
    Title: "Introduction to Entrepreneurship for Engineers",
    Name: "John Richard Callister",
    Email: "jc62@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "MAE 1900",
    Title: "First-Year Student and Nontechnical Projects in Mechanical Engineering",
    Name: "Nelly Andarawis-Puri",
    Email: "na424@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "MAE 2020",
    Title: "Statics and Mechanics of Solids",
    Name: "Hadas Ritz",
    Email: "hr32@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "MAE 2210",
    Title: "Thermodynamics",
    Name: "Elizabeth Fisher",
    Email: "emf4@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "MAE 2270",
    Title: "Introduction to Entrepreneurship for Engineers",
    Name: "John Richard Callister",
    Email: "jc62@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "MAE 3050",
    Title: "Introduction to Aeronautics",
    Name: "Gregory Bewley",
    Email: "gpb1@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "MAE 3120",
    Title: "Mechanical Properties of Materials, Processing, and Design",
    Name: "Shefford Baker",
    Email: "spb14@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "MAE 3230",
    Title: "Introductory Fluid Mechanics",
    Name: "Brian Kirby",
    Email: "bk88@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "MAE 3270",
    Title: "Mechanics of Engineering Materials",
    Name: "Alan Zehnder",
    Email: "atz2@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "MAE 3780",
    Title: "Mechatronics",
    Name: "Hadas Kress-Gazit",
    Email: "hk478@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "MAE 3783",
    Title: "Mechatronics",
    Name: "Hadas Kress-Gazit",
    Email: "hk478@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "MAE 4020",
    Title: "Wind Power",
    Name: "Rebecca Barthelmie",
    Email: "rb737@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "MAE 4021",
    Title: "Wind Power",
    Name: "Rebecca Barthelmie",
    Email: "rb737@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "MAE 4060",
    Title: "Introduction to Spaceflight Mechanics",
    Name: "",
    Email: ""
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "MAE 4240",
    Title: "Materials Processing and Manufacturing",
    Name: "Mostafa Hassani",
    Email: "sh2495@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "MAE 4250",
    Title: "FSAE Automotive Design Project",
    Name: "John Richard Callister",
    Email: "jc62@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "MAE 4272",
    Title: "Fluids and Heat Transfer Laboratory",
    Name: "Perrine Pepiot",
    Email: "pp427@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "MAE 4291",
    Title: "Supervised Senior Design Experience",
    Name: "Nelly Andarawis-Puri",
    Email: "na424@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "MAE 4300",
    Title: "Professional Practice in Mechanical Engineering",
    Name: "John Richard Callister",
    Email: "jc62@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "MAE 4340",
    Title: "Innovative Product Design via Digital Manufacturing",
    Name: "Robert Shepherd",
    Email: "rfs247@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "MAE 4341",
    Title: "Innovative Product Design via Digital Manufacturing",
    Name: "Robert Shepherd",
    Email: "rfs247@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "MAE 4351",
    Title: "Interdisciplinary Design Concepts",
    Name: "Marty Murtagh",
    Email: "mjm43@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "MAE 4480",
    Title: "Biomechanics Laboratory",
    Name: "Lawrence Bonassar",
    Email: "lb244@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "MAE 4650",
    Title: "Biofluid Mechanics",
    Name: "Karl Lewis",
    Email: "kjl235@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "MAE 4660",
    Title: "Biomedical Engineering Analysis of Metabolic and Structural Systems",
    Name: "Shivaun Archer",
    Email: "sda4@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "MAE 4700",
    Title: "Finite Element Analysis for Mechanical and Aerospace Design",
    Name: "Nikolaos Bouklas",
    Email: "nb589@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "MAE 4701",
    Title: "Finite Element Analysis for Mechanical and Aerospace Design",
    Name: "Nikolaos Bouklas",
    Email: "nb589@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "MAE 4730",
    Title: "Intermediate Dynamics",
    Name: "Andrew van Paridon",
    Email: "av568@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "MAE 4760",
    Title: "Foundations of Robotics",
    Name: "Tapomayukh Bhattacharjee",
    Email: "tb557@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "MAE 4780",
    Title: "Feedback Control Systems",
    Name: "",
    Email: ""
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "MAE 4810",
    Title: "Robot Perception",
    Name: "Silvia Ferrari",
    Email: "sf375@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "MAE 4900",
    Title: "Individual and Group Projects in Mechanical Engineering",
    Name: "Nelly Andarawis-Puri",
    Email: "na424@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "MAE 4980",
    Title: "Teaching Experience in Mechanical Engineering",
    Name: "Brian Kirby",
    Email: "bk88@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "MAE 4998",
    Title: "International Research Internship",
    Name: "Brian Kirby",
    Email: "bk88@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "MAE 5020",
    Title: "Wind Power",
    Name: "Rebecca Barthelmie",
    Email: "rb737@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "MAE 5065",
    Title: "Introduction to Spaceflight Mechanics",
    Name: "",
    Email: ""
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "MAE 5250",
    Title: "Computer-Aided Manufacture",
    Name: "Adam Kellerson",
    Email: "ajk327@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "MAE 5270",
    Title: "Design Failure Modes and Effects Analysis (DFMEA)",
    Name: "Fenton O'Shea",
    Email: "fo14@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "MAE 5280",
    Title: "Adaptive and Learning Systems",
    Name: "Timothy Sands",
    Email: "tas297@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "MAE 5340",
    Title: "Innovative Product Design via Digital Manufacturing",
    Name: "Robert Shepherd",
    Email: "rfs247@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "MAE 5430",
    Title: "Combustion Processes",
    Name: "Sadaf Sobhani",
    Email: "ss4222@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "MAE 5459",
    Title: "Energy Seminar I",
    Name: "C. Anderson",
    Email: "cla28@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "MAE 5650",
    Title: "Biofluid Mechanics",
    Name: "Karl Lewis",
    Email: "kjl235@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "MAE 5700",
    Title: "Finite Element Analysis for Mechanical and Aerospace Design",
    Name: "Nikolaos Bouklas",
    Email: "nb589@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "MAE 5730",
    Title: "Intermediate Dynamics",
    Name: "Andrew van Paridon",
    Email: "av568@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "MAE 5780",
    Title: "Feedback Control Systems",
    Name: "",
    Email: ""
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "MAE 5810",
    Title: "Robot Perception",
    Name: "Silvia Ferrari",
    Email: "sf375@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "MAE 5830",
    Title: "Astronautic Optimization",
    Name: "Timothy Sands",
    Email: "tas297@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "MAE 5910",
    Title: "Model Based Systems Engineering",
    Name: "David Schneider",
    Email: "drs44@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "MAE 5930",
    Title: "Systems Engineering and Six Sigma for the Design and Operation of Reliable Systems",
    Name: "Mohammad Tayarani",
    Email: "mt789@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "MAE 5940",
    Title: "Professional Development for Master of Engineering in MAE",
    Name: "Matt Ulinski",
    Email: "mu25@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "MAE 6010",
    Title: "Foundations of Fluid Mechanics I",
    Name: "Olivier Desjardins",
    Email: "od57@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "MAE 6060",
    Title: "Spacecraft Attitude Dynamics, Estimation, and Control",
    Name: "Mason Peck",
    Email: "mp336@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "MAE 6110",
    Title: "Foundations of Solid Mechanics I",
    Name: "Chung Yuen Hui",
    Email: "ch45@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "MAE 6140",
    Title: "State Variable Modeling",
    Name: "Meredith Silberstein",
    Email: "ms2682@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "MAE 6280",
    Title: "Adaptive and Learning Systems",
    Name: "Timothy Sands",
    Email: "tas297@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "MAE 6350",
    Title: "Wave Interactions with Offshore Systems",
    Name: "Maha Haji",
    Email: "mh2498@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "MAE 6450",
    Title: "Additive Manufacturing: Fundamentals and Processes",
    Name: "Atieh Moridi",
    Email: "am2975@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "MAE 6510",
    Title: "Advanced Heat Transfer",
    Name: "C Avedisian",
    Email: "cta2@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "MAE 6760",
    Title: "Model-Based Estimation",
    Name: "Mark Campbell",
    Email: "mc288@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "MAE 6810",
    Title: "Methods of Applied Mathematics I",
    Name: "Chung Yuen Hui",
    Email: "ch45@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "MAE 6830",
    Title: "Astronautic Optimization",
    Name: "Timothy Sands",
    Email: "tas297@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "MAE 6900",
    Title: "Special Investigations in Mechanical and Aerospace Engineering",
    Name: "Matt Ulinski",
    Email: "mu25@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "MAE 6910",
    Title: "M.Eng. Independent Study",
    Name: "Matt Ulinski",
    Email: "mu25@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "MAE 6949",
    Title: "Seminar for First-Year MAE Ph.D. Students",
    Name: "Nelly Andarawis-Puri",
    Email: "na424@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "MAE 6998",
    Title: "Graduate Research Internship for International Students",
    Name: "Nelly Andarawis-Puri",
    Email: "na424@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "MAE 7400",
    Title: "Finite Element Method for Fluid-Structure Interaction",
    Name: "Mahdi Esmaily Moghadam",
    Email: "me399@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "MAE 7999",
    Title: "Mechanical and Aerospace Engineering Colloquium",
    Name: "",
    Email: ""
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "MAE 8900",
    Title: "Research in Mechanical and Aerospace Engineering",
    Name: "Nelly Andarawis-Puri",
    Email: "na424@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "MATH 1011",
    Title: "Academic Support for MATH 1110",
    Name: "",
    Email: ""
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "MATH 1012",
    Title: "Academic Support for MATH 1120",
    Name: "",
    Email: ""
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "MATH 1021",
    Title: "Academic Support for MATH 2210",
    Name: "",
    Email: ""
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "MATH 1101",
    Title: "Calculus Preparation",
    Name: "",
    Email: ""
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "MATH 1105",
    Title: "Finite Mathematics for the Life and Social Sciences",
    Name: "Rhiannon Griffiths",
    Email: "rg636@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "MATH 1110",
    Title: "Calculus I",
    Name: "",
    Email: ""
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "MATH 1120",
    Title: "Calculus II",
    Name: "",
    Email: ""
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "MATH 1300",
    Title: "Mathematical Explorations",
    Name: "Ed Swartz",
    Email: "ebs22@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "MATH 1710",
    Title: "Statistical Theory and Application in the Real World",
    Name: "Michael Nussbaum",
    Email: "mn66@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "MATH 1910",
    Title: "Calculus for Engineers",
    Name: "Clifford Pollock",
    Email: "crp10@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "MATH 1920",
    Title: "Multivariable Calculus for Engineers",
    Name: "Kelly Delp",
    Email: "kd288@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "MATH 2210",
    Title: "Linear Algebra",
    Name: "James West",
    Email: "jew13@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "MATH 2220",
    Title: "Multivariable Calculus",
    Name: "Robert Connelly",
    Email: "rc46@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "MATH 2230",
    Title: "Theoretical Linear Algebra and Calculus",
    Name: "Reyer Sjamaar",
    Email: "rs73@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "MATH 2310",
    Title: "Linear Algebra with Applications",
    Name: "Liam Mazurowski",
    Email: "lmm334@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "MATH 2930",
    Title: "Differential Equations for Engineers",
    Name: "Richard Rand",
    Email: "rhr2@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "MATH 2940",
    Title: "Linear Algebra for Engineers",
    Name: "Michael Stillman",
    Email: "mes15@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "MATH 3040",
    Title: "Prove It!",
    Name: "Robert Connelly",
    Email: "rc46@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "MATH 3110",
    Title: "Introduction to Analysis",
    Name: "",
    Email: ""
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "MATH 3210",
    Title: "Manifolds and Differential Forms",
    Name: "Xiaodong Cao",
    Email: "xc46@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "MATH 3230",
    Title: "Introduction to Differential Equations",
    Name: "William Clark",
    Email: "wac76@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "MATH 3320",
    Title: "Introduction to Number Theory",
    Name: "David Zywina",
    Email: "djz44@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "MATH 3340",
    Title: "Abstract Algebra",
    Name: "Ed Swartz",
    Email: "ebs22@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "MATH 3610",
    Title: "Mathematical Modeling",
    Name: "Alexander Vladimirsky",
    Email: "abv8@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "MATH 4130",
    Title: "Honors Introduction to Analysis I",
    Name: "Camil Muscalu",
    Email: "fm69@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "MATH 4200",
    Title: "Differential Equations and Dynamical Systems",
    Name: "John Hubbard",
    Email: "jhh8@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "MATH 4220",
    Title: "Applied Complex Analysis",
    Name: "Steven Strogatz",
    Email: "shs7@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "MATH 4250",
    Title: "Numerical Analysis and Differential Equations",
    Name: "Alexander Vladimirsky",
    Email: "abv8@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "MATH 4310",
    Title: "Linear Algebra",
    Name: "Kathryn Mann",
    Email: "kpm85@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "MATH 4315",
    Title: "Linear Algebra with Supplements",
    Name: "Irena Peeva",
    Email: "ivp1@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "MATH 4330",
    Title: "Honors Linear Algebra",
    Name: "Allen Knutson",
    Email: "ak596@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "MATH 4410",
    Title: "Introduction to Combinatorics I",
    Name: "Karola Meszaros",
    Email: "km626@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "MATH 4530",
    Title: "Introduction to Topology",
    Name: "",
    Email: ""
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "MATH 4560",
    Title: "Geometry of Discrete Groups",
    Name: "Jason Manning",
    Email: "jm882@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "MATH 4710",
    Title: "Basic Probability",
    Name: "",
    Email: ""
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "MATH 4810",
    Title: "Mathematical Logic",
    Name: "Slawomir Solecki",
    Email: "ss3777@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "MATH 4820",
    Title: "Topics in Logic and the Foundations of Mathematics",
    Name: "James Walsh",
    Email: "jw2682@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "MATH 4900",
    Title: "Supervised Research",
    Name: "Marcelo Aguiar",
    Email: "ma18@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "MATH 4901",
    Title: "Supervised Reading",
    Name: "Marcelo Aguiar",
    Email: "ma18@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "MATH 4980",
    Title: "Special Study for Mathematics Teaching",
    Name: "Mary Ann Huntley",
    Email: "mh688@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "MATH 5080",
    Title: "Special Study for Teachers",
    Name: "Mary Ann Huntley",
    Email: "mh688@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "MATH 5200",
    Title: "Differential Equations and Dynamical Systems",
    Name: "John Hubbard",
    Email: "jhh8@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "MATH 5220",
    Title: "Applied Complex Analysis",
    Name: "Steven Strogatz",
    Email: "shs7@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "MATH 5250",
    Title: "Numerical Analysis and Differential Equations",
    Name: "Alexander Vladimirsky",
    Email: "abv8@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "MATH 5410",
    Title: "Introduction to Combinatorics I",
    Name: "Karola Meszaros",
    Email: "km626@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "MATH 6110",
    Title: "Real Analysis",
    Name: "Camil Muscalu",
    Email: "fm69@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "MATH 6160",
    Title: "Partial Differential Equations",
    Name: "Timothy Healey",
    Email: "tjh10@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "MATH 6210",
    Title: "Measure Theory and Lebesgue Integration",
    Name: "Philippe Sosoe",
    Email: "ps934@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "MATH 6260",
    Title: "Dynamical Systems",
    Name: "John Hubbard",
    Email: "jhh8@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "MATH 6302",
    Title: "Lattices: Geometry, Cryptography, and Algorithms",
    Name: "Noah Stephens-Davidowitz",
    Email: "nhs59@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "MATH 6310",
    Title: "Algebra",
    Name: "Allen Knutson",
    Email: "ak596@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "MATH 6330",
    Title: "Noncommutative Algebra",
    Name: "Marcelo Aguiar",
    Email: "ma18@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "MATH 6340",
    Title: "Commutative Algebra with Applications in Algebraic Geometry",
    Name: "Irena Peeva",
    Email: "ivp1@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "MATH 6520",
    Title: "Differentiable Manifolds",
    Name: "Reyer Sjamaar",
    Email: "rs73@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "MATH 6530",
    Title: "K-Theory and Characteristic Classes",
    Name: "Inna Zakharevich",
    Email: "iiz5@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "MATH 6710",
    Title: "Probability Theory I",
    Name: "Lionel Levine",
    Email: "ll432@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "MATH 6740",
    Title: "Mathematical Statistics II",
    Name: "Michael Nussbaum",
    Email: "mn66@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "MATH 6870",
    Title: "Set Theory",
    Name: "Justin Moore",
    Email: "jtm237@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "MATH 7290",
    Title: "Seminar on Scientific Computing and Numerics",
    Name: "Anil Damle",
    Email: "asd239@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "MATH 7350",
    Title: "Topics in Homological Algebra",
    Name: "Yuri Berest",
    Email: "yb26@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "MATH 7570",
    Title: "Topics in Topology",
    Name: "Jason Manning",
    Email: "jm882@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "MATH 7610",
    Title: "Topics in Geometry",
    Name: "Xin Zhou",
    Email: "xz636@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "MATH 7710",
    Title: "Topics in Probability Theory",
    Name: "Andrew Ahn",
    Email: "aa993@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "MATH 7740",
    Title: "Statistical Learning Theory: Classification, Pattern Recognition, Machine Learning",
    Name: "Marten Wegkamp",
    Email: "mhw73@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "MATH 7810",
    Title: "Seminar in Logic",
    Name: "Slawomir Solecki",
    Email: "ss3777@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "MATH 7900",
    Title: "Supervised Reading and Research",
    Name: "",
    Email: ""
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "MEDVL 2170",
    Title: "Early Modern Iberian Survey",
    Name: "Simone Pinet",
    Email: "sp349@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "MEDVL 2655",
    Title: "Introduction to Islamic Civilization",
    Name: "David Powers",
    Email: "dsp4@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "MEDVL 2722",
    Title: "Of Saints, Poets, and Revolutionaries: Medieval and Modern Iran and Central Asia",
    Name: "Seema Golestaneh",
    Email: "sg2327@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "MEDVL 3080",
    Title: "Icelandic Family Sagas",
    Name: "Thomas Hill",
    Email: "tdh1@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "MEDVL 3110",
    Title: "Old English",
    Name: "Thomas Hill",
    Email: "tdh1@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "MEDVL 3315",
    Title: "Old Norse I",
    Name: "",
    Email: ""
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "MEDVL 3618",
    Title: "Islamic History: The Beginnings of Islam: 600-750",
    Name: "David Powers",
    Email: "dsp4@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "MEDVL 3750",
    Title: "Introduction to Dendrochronology",
    Name: "Sturt Manning",
    Email: "sm456@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "MEDVL 3760",
    Title: "On Practice and Perfection",
    Name: "Cary Howie",
    Email: "csh34@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "MEDVL 3850",
    Title: "The Arts of Southeast Asia",
    Name: "Kaja McGowan",
    Email: "kmm22@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "MEDVL 4002",
    Title: "Latin Philosophical Texts",
    Name: "",
    Email: ""
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "MEDVL 6020",
    Title: "Latin Philosophical Texts",
    Name: "",
    Email: ""
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "MEDVL 6110",
    Title: "Old English",
    Name: "Thomas Hill",
    Email: "tdh1@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "MEDVL 6850",
    Title: "The Arts of Southeast Asia",
    Name: "Kaja McGowan",
    Email: "kmm22@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "MEDVL 7777",
    Title: "Medieval Studies Proseminar",
    Name: "Oren Falk",
    Email: "of24@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "MEDVL 8010",
    Title: "Directed Study - Individual",
    Name: "Thomas Hill",
    Email: "tdh1@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "MEDVL 8020",
    Title: "Directed Study - Group",
    Name: "Andrew Hicks",
    Email: "ajh299@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "MGMT 5010",
    Title: "Data Modeling",
    Name: "Andrew Whitmore",
    Email: "ajw36@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "MGMT 5240",
    Title: "Macroeconomic Theory",
    Name: "Sofia Kalantzi",
    Email: "sk2922@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "MGMT 5245",
    Title: "Managerial Economics",
    Name: "Sofia Kalantzi",
    Email: "sk2922@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "MGMT 5680",
    Title: "Management Communication",
    Name: "THOMAS ESTAD",
    Email: "tge6@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "MGMT 5700",
    Title: "Leadership",
    Name: "Michael Hostetler",
    Email: "mjh35@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "MGMT 5830",
    Title: "Investments",
    Name: "",
    Email: ""
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "MGMT 6000",
    Title: "Practicum-Career Planning",
    Name: "Eric Lewis",
    Email: "eel33@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "MGMT 6001",
    Title: "Industry Practicum I",
    Name: "Michael Hostetler",
    Email: "mjh35@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "MGMT 6220",
    Title: "Marketing Strategy",
    Name: "Sherif Nasser",
    Email: "szn2@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "MGMT 6820",
    Title: "Negotiations",
    Name: "Duncan Duke",
    Email: "dod3@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "MILS 1101",
    Title: "Introduction to the Army",
    Name: "",
    Email: ""
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "MILS 1111",
    Title: "Leadership Laboratory I",
    Name: "",
    Email: ""
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "MILS 2201",
    Title: "Leadership and Ethics",
    Name: "",
    Email: ""
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "MILS 2211",
    Title: "Leadership Laboratory II",
    Name: "",
    Email: ""
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "MILS 3301",
    Title: "Training Management and the Warfighting Functions",
    Name: "",
    Email: ""
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "MILS 3311",
    Title: "Leadership Laboratory III",
    Name: "",
    Email: ""
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "MILS 4400",
    Title: "Special Problems for Advanced Undergraduates",
    Name: "James Tully",
    Email: "jet255@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "MILS 4401",
    Title: "The Army Officer",
    Name: "",
    Email: ""
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "MILS 4411",
    Title: "Leadership Laboratory IV",
    Name: "James Tully",
    Email: "jet255@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "MSE 1140",
    Title: "Materials: The Future of Energy",
    Name: "R. van Dover",
    Email: "rbv2@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "MSE 2610",
    Title: "Mechanical Properties of Materials: From Nanodevices to Superstructures",
    Name: "Michele Conrad",
    Email: "mmc2@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "MSE 2900",
    Title: "Special Projects in Materials Science and Engineering",
    Name: "Christopher Umbach",
    Email: "ccu1@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "MSE 2910",
    Title: "Research Involvement IIa",
    Name: "Chekesha Watson",
    Email: "cml66@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "MSE 3010",
    Title: "Materials Chemistry",
    Name: "Nicole Benedek",
    Email: "nab83@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "MSE 3030",
    Title: "Thermodynamics of Condensed Systems",
    Name: "Mike Thompson",
    Email: "mot1@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "MSE 3110",
    Title: "Junior Laboratory I",
    Name: "Lisa Thompson",
    Email: "lrt5@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "MSE 3900",
    Title: "Special Projects in Materials Science and Engineering",
    Name: "Christopher Umbach",
    Email: "ccu1@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "MSE 3910",
    Title: "Research Involvement IIIa",
    Name: "Chekesha Watson",
    Email: "cml66@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "MSE 4020",
    Title: "Mechanical Properties of Materials, Processing, and Design",
    Name: "Shefford Baker",
    Email: "spb14@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "MSE 4030",
    Title: "Senior Materials Laboratory I",
    Name: "Christopher Umbach",
    Email: "ccu1@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "MSE 4050",
    Title: "Senior Experimental Thesis I",
    Name: "Christopher Umbach",
    Email: "ccu1@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "MSE 4510",
    Title: "Materials Processing and Manufacturing",
    Name: "Mostafa Hassani",
    Email: "sh2495@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "MSE 4610",
    Title: "Biomedical Materials and Their Applications",
    Name: "Eve Donnelly",
    Email: "eld26@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "MSE 4900",
    Title: "Special Projects in Materials Science and Engineering",
    Name: "Christopher Umbach",
    Email: "ccu1@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "MSE 4910",
    Title: "Research Involvement IVa",
    Name: "Chekesha Watson",
    Email: "cml66@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "MSE 4950",
    Title: "Undergraduate Teaching Involvement",
    Name: "Christopher Umbach",
    Email: "ccu1@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "MSE 5005",
    Title: "MSE MEng Professional Development",
    Name: "Alexander Deyhim",
    Email: "akd9@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "MSE 5010",
    Title: "MEng Project - Ongoing",
    Name: "Alexander Deyhim",
    Email: "akd9@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "MSE 5011",
    Title: "MEng Project - Terminal",
    Name: "Alexander Deyhim",
    Email: "akd9@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "MSE 5070",
    Title: "Interdisciplinary Design Concepts",
    Name: "Marty Murtagh",
    Email: "mjm43@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "MSE 5320",
    Title: "Glass: Structure, Properties and Modern Applications",
    Name: "Marty Murtagh",
    Email: "mjm43@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "MSE 5410",
    Title: "Nanofabrication and Characterization of Electronics",
    Name: "H. Grace Xing",
    Email: "hgx2@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "MSE 5411",
    Title: "Nanofabrication and Characterization of Electronics Laboratory",
    Name: "H. Grace Xing",
    Email: "hgx2@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "MSE 5801",
    Title: "Materials Structure and Electronic Properties",
    Name: "Richard Robinson",
    Email: "rdr82@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "MSE 5810",
    Title: "Materials Chemistry",
    Name: "Nicole Benedek",
    Email: "nab83@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "MSE 5820",
    Title: "Mechanical Properties of Materials, Processing, and Design",
    Name: "Shefford Baker",
    Email: "spb14@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "MSE 5830",
    Title: "Thermodynamics of Condensed Systems",
    Name: "Mike Thompson",
    Email: "mot1@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "MSE 5998",
    Title: "External Industrial Internship",
    Name: "Christopher Umbach",
    Email: "ccu1@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "MSE 6010",
    Title: "Chemistry of Materials",
    Name: "Uli Wiesner",
    Email: "ubw1@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "MSE 6160",
    Title: "Advanced Crystallography: Symmetry, Order, and Complexity in Materials",
    Name: "Julia Dshemuchadse",
    Email: "jd732@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "MSE 8000",
    Title: "Research in Materials Science",
    Name: "Eve Donnelly",
    Email: "eld26@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "MSE 8005",
    Title: "Principles and Practices of Graduate Research",
    Name: "Eve Donnelly",
    Email: "eld26@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "MSE 8010",
    Title: "Materials Science and Engineering Colloquium",
    Name: "Eve Donnelly",
    Email: "eld26@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "MSE 8020",
    Title: "Materials Science Research Seminars",
    Name: "Eve Donnelly",
    Email: "eld26@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "MUSIC 1100",
    Title: "Elements of Musical Notation",
    Name: "Elizabeth Lyon",
    Email: "ell67@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "MUSIC 1101",
    Title: "Elements of Music",
    Name: "Steven Pond",
    Email: "sfp8@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "MUSIC 1205",
    Title: "Introduction to Western Art Music",
    Name: "Roger Moseley",
    Email: "rsm253@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "MUSIC 1340",
    Title: "Soundscapes of Social Protest",
    Name: "Bamba Ndiaye",
    Email: "can74@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "MUSIC 1421",
    Title: "Introduction to Computer Music",
    Name: "Travis Johns",
    Email: "tcj32@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "MUSIC 2101",
    Title: "Theory, Materials and Techniques I",
    Name: "Lawrence Shuster",
    Email: "lbs239@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "MUSIC 2111",
    Title: "Songwriting",
    Name: "Annie Lewandowski",
    Email: "apl72@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "MUSIC 2241",
    Title: "Music as Drama: An Introduction to Opera",
    Name: "Elizabeth Lyon",
    Email: "ell67@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "MUSIC 2290",
    Title: "You Have Terrible Taste in Music",
    Name: "Benjamin Piekut",
    Email: "bdp63@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "MUSIC 2341",
    Title: "Gamelan in Indonesian History and Cultures",
    Name: "Christopher Miller",
    Email: "cjm299@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "MUSIC 3111",
    Title: "Jazz Improvisation and Theory I",
    Name: "Paul Merrill",
    Email: "pm75@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "MUSIC 3122",
    Title: "Conducting",
    Name: "",
    Email: ""
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "MUSIC 3424",
    Title: "Considered Listening: Sound, Ears, and Loudspeakers in Creative Practice",
    Name: "Miles Friday",
    Email: "mjf352@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "MUSIC 3431",
    Title: "Sound Design",
    Name: "Warren Cross",
    Email: "wdc4@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "MUSIC 3511",
    Title: "Individual Instruction",
    Name: "Tamara Acosta",
    Email: "tca46@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "MUSIC 3512",
    Title: "Individual Instruction",
    Name: "Tamara Acosta",
    Email: "tca46@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "MUSIC 3513",
    Title: "Individual Instruction",
    Name: "Tamara Acosta",
    Email: "tca46@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "MUSIC 3514",
    Title: "Individual Instruction",
    Name: "David Solazzo",
    Email: "dvs38@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "MUSIC 3602",
    Title: "Chorus",
    Name: "",
    Email: ""
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "MUSIC 3603",
    Title: "Glee Club",
    Name: "",
    Email: ""
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "MUSIC 3604",
    Title: "Chorale",
    Name: "",
    Email: ""
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "MUSIC 3609",
    Title: "Brazilian Ensemble - Deixa Sambar",
    Name: "Steven Pond",
    Email: "sfp8@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "MUSIC 3610",
    Title: "Cornell Gamelan Ensemble",
    Name: "Christopher Miller",
    Email: "cjm299@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "MUSIC 3613",
    Title: "Cornell Steel Band",
    Name: "Christopher Miller",
    Email: "cjm299@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "MUSIC 3616",
    Title: "Cornell Hip-Hop Collective",
    Name: "Moustapha Fall",
    Email: "mf773@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "MUSIC 3621",
    Title: "Cornell Symphony Orchestra",
    Name: "James Spinazzola",
    Email: "jms862@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "MUSIC 3631",
    Title: "Cornell Wind Symphony",
    Name: "James Spinazzola",
    Email: "jms862@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "MUSIC 3634",
    Title: "Cornell Percussion Group",
    Name: "Michael Sparhuber",
    Email: "mas847@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "MUSIC 3660",
    Title: "Music Improvisation Ensemble",
    Name: "Annie Lewandowski",
    Email: "apl72@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "MUSIC 3901",
    Title: "Supplemental Study in Music",
    Name: "Catherine Appert",
    Email: "cma249@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "MUSIC 3902",
    Title: "Choral Musicianship",
    Name: "Nic Vigilante",
    Email: "njv33@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "MUSIC 4181",
    Title: "Psychology of Music",
    Name: "Carol Krumhansl",
    Email: "clk4@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "MUSIC 4501",
    Title: "Individual Instruction",
    Name: "James Spinazzola",
    Email: "jms862@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "MUSIC 4615",
    Title: "Jazz Ensemble",
    Name: "Paul Merrill",
    Email: "pm75@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "MUSIC 4616",
    Title: "Jazz Combos",
    Name: "Paul Merrill",
    Email: "pm75@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "MUSIC 4621",
    Title: "Cornell Chamber Orchestra",
    Name: "",
    Email: ""
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "MUSIC 4631",
    Title: "Chamber Flute Ensemble",
    Name: "Juliana Pepinsky",
    Email: "jm857@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "MUSIC 4641",
    Title: "Advanced Instruction in Gamelan",
    Name: "Christopher Miller",
    Email: "cjm299@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "MUSIC 4651",
    Title: "Chamber Music Ensemble",
    Name: "Xak Bjerken",
    Email: "xb10@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "MUSIC 4901",
    Title: "Independent Study in Music",
    Name: "Kevin Ernste",
    Email: "kme32@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "MUSIC 4911",
    Title: "Honors in Music",
    Name: "Kevin Ernste",
    Email: "kme32@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "MUSIC 6201",
    Title: "Research and Critical Methodologies",
    Name: "Bonna Boettcher",
    Email: "bjb57@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "MUSIC 7111",
    Title: "Composition",
    Name: "Marianthi Papalexandri-Alexandri",
    Email: "mp955@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "MUSIC 7205",
    Title: "Seminar in Nineteenth Century Music",
    Name: "Roger Moseley",
    Email: "rsm253@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "MUSIC 7333",
    Title: "Jazz, Fusions, Discourses: New Jazz Studies and “Broken Middle” Interdisciplinarity",
    Name: "Steven Pond",
    Email: "sfp8@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "MUSIC 7901",
    Title: "Independent Study in Music",
    Name: "Kevin Ernste",
    Email: "kme32@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "NACCT 5520",
    Title: "Advanced Accounting",
    Name: "Eric Lewis",
    Email: "eel33@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "NACCT 5521",
    Title: "Cost Accounting",
    Name: "Eric Lewis",
    Email: "eel33@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "NACCT 5530",
    Title: "Auditing and Assurance",
    Name: "Marquise Riley",
    Email: "msr259@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "NAVS 1101",
    Title: "Introduction to Naval Science",
    Name: "Tyler Trainor",
    Email: "tst45@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "NAVS 1141",
    Title: "Naval Professional Laboratory",
    Name: "Tyler Trainor",
    Email: "tst45@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "NAVS 2201",
    Title: "Leadership and Management",
    Name: "Edwin Powers",
    Email: "ep472@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "NAVS 2241",
    Title: "Naval Professional Laboratory",
    Name: "Edwin Powers",
    Email: "ep472@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "NAVS 3201",
    Title: "Naval Ship Systems I (Engineering)",
    Name: "Sean Mansfield",
    Email: "stm86@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "NAVS 3341",
    Title: "Naval Professional Laboratory",
    Name: "Tyler Trainor",
    Email: "tst45@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "NAVS 4302",
    Title: "Naval Operations and Seamanship",
    Name: "Sean Mansfield",
    Email: "stm86@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "NAVS 4441",
    Title: "Naval Professional Laboratory",
    Name: "Sean Mansfield",
    Email: "stm86@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "NBA 3000",
    Title: "Designing New Ventures",
    Name: "Gregory Ray",
    Email: "gcr45@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "NBA 4920",
    Title: "Machine Learning Applications in Business",
    Name: "Sai Chand Chintala",
    Email: "sc2947@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "NBA 5060",
    Title: "Financial Statement Analysis",
    Name: "Nick Guest",
    Email: "nmg75@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "NBA 5070",
    Title: "Entrepreneurship for Scientists and Engineers",
    Name: "Gregory Ray",
    Email: "gcr45@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "NBA 5075",
    Title: "Big Red Ventures",
    Name: "Thatcher Bell",
    Email: "tcb2@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "NBA 5090",
    Title: "Advanced Financial Statement Analysis",
    Name: "Nick Guest",
    Email: "nmg75@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "NBA 5100",
    Title: "Social Entrepreneurship",
    Name: "Wesley Sine",
    Email: "wds4@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "NBA 5110",
    Title: "Financial Modeling",
    Name: "Xinyu Zhang",
    Email: "xz687@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "NBA 5111",
    Title: "Foundations of Financial Modeling",
    Name: "David Nichols",
    Email: "dcn6@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "NBA 5115",
    Title: "BR Tech Strategy",
    Name: "Tom Schryver",
    Email: "tps1@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "NBA 5120",
    Title: "Applied Portfolio Management",
    Name: "Christopher Meredith",
    Email: "cim23@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "NBA 5121",
    Title: "Seminar in Equity Research - Cayuga Fund",
    Name: "Christopher Meredith",
    Email: "cim23@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "NBA 5130",
    Title: "International Finance Cases",
    Name: "Warren Bailey",
    Email: "wbb1@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "NBA 5150",
    Title: "Leadership Theory and Practice",
    Name: "Michael Hostetler",
    Email: "mjh35@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "NBA 5180",
    Title: "Intro to Design and Innovation",
    Name: "Stefanie Kubanek",
    Email: "sek274@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "NBA 5245",
    Title: "Introduction to Macroeconomics",
    Name: "Sofia Kalantzi",
    Email: "sk2922@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "NBA 5260",
    Title: "Leaders in Emerging Markets",
    Name: "Lourdes Casanova",
    Email: "lc683@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "NBA 5330",
    Title: "Management Cases",
    Name: "",
    Email: ""
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "NBA 5380",
    Title: "The Business Idea Factory",
    Name: "Nick Nickitas",
    Email: "nn47@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "NBA 5410",
    Title: "Project Management",
    Name: "Natalia Santamaria",
    Email: "nst43@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "NBA 5430",
    Title: "Financial Markets and Institutions",
    Name: "Maureen O'Hara",
    Email: "mo19@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "NBA 5500",
    Title: "Risk Management and Derivative Investment",
    Name: "Robert Jarrow",
    Email: "raj15@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "NBA 5531",
    Title: "Federal Income Taxation",
    Name: "John McKinley",
    Email: "jwm336@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "NBA 5540",
    Title: "International Finance",
    Name: "Warren Bailey",
    Email: "wbb1@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "NBA 5550",
    Title: "Fixed Income Securities and Interest Rate Options",
    Name: "Robert Jarrow",
    Email: "raj15@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "NBA 5600",
    Title: "Demystifying Big Data and FinTech",
    Name: "Will Cong",
    Email: "lc898@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "NBA 5640",
    Title: "Designing New Ventures",
    Name: "Gregory Ray",
    Email: "gcr45@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "NBA 5670",
    Title: "Management Writing",
    Name: "Thomas Hambury",
    Email: "tbh9@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "NBA 5672",
    Title: "Writing Style",
    Name: "Craig Snow",
    Email: "crs12@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "NBA 5680",
    Title: "Management Presentations",
    Name: "Angela Noble-Grange",
    Email: "anj1@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "NBA 5682",
    Title: "Interpersonal Communications",
    Name: "Barbara Mink",
    Email: "bem5@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "NBA 5690",
    Title: "Management Consulting Essentials",
    Name: "Randy Allen",
    Email: "rla9@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "NBA 5700",
    Title: "Core Teams Practicum",
    Name: "Laura Georgianna",
    Email: "lac53@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "NBA 5795",
    Title: "Advanced Strategic Analysis",
    Name: "Peter Balnaves",
    Email: "pmb234@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "NBA 5820",
    Title: "Leaders in Family Enterprise in Practice and Theory",
    Name: "Daniel Van Der Vliet",
    Email: "dgv9@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "NBA 5925",
    Title: "Johnson Experiential Leadership Expedition",
    Name: "Laura Georgianna",
    Email: "lac53@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "NBA 6040",
    Title: "Finance and Ethics",
    Name: "Maureen O'Hara",
    Email: "mo19@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "NBA 6050",
    Title: "Cases in Strategic Management",
    Name: "Gautam Ahuja",
    Email: "ga337@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "NBA 6060",
    Title: "Evaluating Capital Investment Projects",
    Name: "Xi Yang",
    Email: "xy39@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "NBA 6090",
    Title: "Digital Marketing",
    Name: "Tommaso Bondi",
    Email: "tb558@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "NBA 6100",
    Title: "Applied Operations Strategy",
    Name: "Jamie Hintlian",
    Email: "jth48@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "NBA 6121",
    Title: "Bankruptcy",
    Name: "",
    Email: ""
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "NBA 6145",
    Title: "AI Strategy and Applications",
    Name: "Lutz Finger",
    Email: "ltf24@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "NBA 6190",
    Title: "Leaders in Sustainable Global Enterprise",
    Name: "Mark Milstein",
    Email: "mm462@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "NBA 6220",
    Title: "Marketing Strategy",
    Name: "Sherif Nasser",
    Email: "szn2@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "NBA 6230",
    Title: "Actualizing Your Startup - Part I",
    Name: "Kenneth Rother",
    Email: "ksr77@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "NBA 6260",
    Title: "Consumer Behavior",
    Name: "Kaitlin Woolley",
    Email: "krw67@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "NBA 6290",
    Title: "Special Topics in Marketing",
    Name: "Daniel Hooker",
    Email: "dwh22@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "NBA 6320",
    Title: "Core Leadership Skills for a VUCA World",
    Name: "George Casey",
    Email: "gwc65@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "NBA 6390",
    Title: "Data Driven Marketing",
    Name: "Sachin Gupta",
    Email: "sg248@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "NBA 6395",
    Title: "Entrepreneurial Mindset",
    Name: "Tom Schryver",
    Email: "tps1@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "NBA 6410",
    Title: "Supply Chain Strategy",
    Name: "Li Chen",
    Email: "lc785@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "NBA 6430",
    Title: "Managerial Spreadsheet Modeling",
    Name: "Srinagesh Gavirneni",
    Email: "sg337@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "NBA 6460",
    Title: "Financial Institutions",
    Name: "Dan Awrey",
    Email: "aja288@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "NBA 6540",
    Title: "Power and Politics in Organizations",
    Name: "Angus Hildreth",
    Email: "jdh362@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "NBA 6620",
    Title: "Brand Management",
    Name: "Emily Garbinsky",
    Email: "eng26@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "NBA 6630",
    Title: "Managerial Decision Making",
    Name: "",
    Email: ""
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "NBA 6682",
    Title: "Crisis Communications for Business Leaders",
    Name: "Theomary Karamanis",
    Email: "tk626@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "NBA 6710",
    Title: "Ethical Decision Making in Management",
    Name: "Dana Radcliffe",
    Email: "dmr42@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "NBA 6730",
    Title: "Derivatives Securities Part I",
    Name: "Adrian Aycan Corum",
    Email: "aac256@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "NBA 6740",
    Title: "Derivatives Securities Part II",
    Name: "Adrian Aycan Corum",
    Email: "aac256@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "NBA 6820",
    Title: "Negotiation I: Negotiation Essentials",
    Name: "Allan Filipowicz",
    Email: "amf247@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "NBA 6890",
    Title: "Startup Legal Issues - Early Stage Financing and VC Terms",
    Name: "Nathan Cook",
    Email: "njc223@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "NBA 6921",
    Title: "Machine Learning Applications in Business",
    Name: "Sai Chand Chintala",
    Email: "sc2947@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "NCC 4530",
    Title: "Marketing Management",
    Name: "Jeffrey Kang",
    Email: "jk2832@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "NCC 5500",
    Title: "Financial Accounting",
    Name: "Jin Hee Lee",
    Email: "jl4262@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "NCC 5530",
    Title: "Marketing Management",
    Name: "Jeffrey Kang",
    Email: "jk2832@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "NCC 5540",
    Title: "Managing and Leading in Organizations",
    Name: "Stephen Sauer",
    Email: "sjs46@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "NCC 5560",
    Title: "Managerial Finance",
    Name: "Warren Bailey",
    Email: "wbb1@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "NCC 5580",
    Title: "Managing Operations",
    Name: "",
    Email: ""
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "NEPAL 1101",
    Title: "Elementary Nepali I",
    Name: "Hom Acharya",
    Email: "hpa8@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "NEPAL 2201",
    Title: "Intermediate Nepali Conversation I",
    Name: "Hom Acharya",
    Email: "hpa8@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "NEPAL 2203",
    Title: "Intermediate Nepali Composition I",
    Name: "Hom Acharya",
    Email: "hpa8@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "NEPAL 3301",
    Title: "Advanced Nepali I",
    Name: "Hom Acharya",
    Email: "hpa8@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "NES 1110",
    Title: "Beginning Biblical Hebrew",
    Name: "Lauren Monroe",
    Email: "lm283@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "NES 1561",
    Title: "Introduction to the Ottoman Empire",
    Name: "Mostafa Minawi",
    Email: "mm2492@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "NES 1602",
    Title: "Great Discoveries in Greek and Roman Archaeology",
    Name: "Caitlin Barrett",
    Email: "ceb329@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "NES 2201",
    Title: "Intermediate Urdu Reading and Writing I",
    Name: "Naaz Rizvi",
    Email: "nfr8@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "NES 2610",
    Title: "Archaeology of Mesopotamia",
    Name: "Lori Khatchadourian",
    Email: "lk323@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "NES 2655",
    Title: "Introduction to Islamic Civilization",
    Name: "David Powers",
    Email: "dsp4@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "NES 2661",
    Title: "Ancient Ships and Seafaring: Introduction to Nautical Archaeology",
    Name: "Christopher Monroe",
    Email: "cmm253@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "NES 2670",
    Title: "The History and Politics of Modern Egypt",
    Name: "Ziad Fahmy",
    Email: "zaf3@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "NES 2722",
    Title: "Of Saints, Poets, and Revolutionaries: Medieval and Modern Iran and Central Asia",
    Name: "Seema Golestaneh",
    Email: "sg2327@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "NES 2724",
    Title: "Introduction to the Hebrew Bible",
    Name: "Lauren Monroe",
    Email: "lm283@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "NES 2754",
    Title: "Wondrous Literatures of the Near East",
    Name: "Deborah Starr",
    Email: "das86@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "NES 3325",
    Title: "Literary Reading and Writing in Advanced Urdu",
    Name: "Naaz Rizvi",
    Email: "nfr8@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "NES 3535",
    Title: "Religions of Iran",
    Name: "Jason Mokhtarian",
    Email: "jsm467@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "NES 3618",
    Title: "Islamic History: The Beginnings of Islam: 600-750",
    Name: "David Powers",
    Email: "dsp4@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "NES 3707",
    Title: "Race and Sex: Arabian Nights",
    Name: "Parisa Vaziri",
    Email: "pv248@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "NES 3850",
    Title: "Middle East Politics",
    Name: "Alexandra Blackman",
    Email: "adb295@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "NES 4513",
    Title: "Textual Ethnography",
    Name: "Seema Golestaneh",
    Email: "sg2327@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "NES 4543",
    Title: "State and Society in the Late Ottoman Empire",
    Name: "Mostafa Minawi",
    Email: "mm2492@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "NES 4666",
    Title: "Mass Media and Identities in the Modern Middle East",
    Name: "Ziad Fahmy",
    Email: "zaf3@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "NES 4757",
    Title: "The Archaeology of Houses and Households",
    Name: "Caitlin Barrett",
    Email: "ceb329@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "NES 4991",
    Title: "Independent Study, Undergraduate Level",
    Name: "Ross Brann",
    Email: "rb23@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "NES 4998",
    Title: "Senior Honors Essay",
    Name: "",
    Email: ""
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "NES 4999",
    Title: "Senior Honors Essay",
    Name: "",
    Email: ""
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "NES 6513",
    Title: "Textual Ethnography",
    Name: "Seema Golestaneh",
    Email: "sg2327@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "NES 6666",
    Title: "Mass Media and Identities in the Modern Middle East",
    Name: "Ziad Fahmy",
    Email: "zaf3@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "NES 6722",
    Title: "Graduate Colloquium",
    Name: "",
    Email: ""
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "NES 6991",
    Title: "Independent Study: Graduate Level",
    Name: "Ross Brann",
    Email: "rb23@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "NES 7757",
    Title: "The Archaeology of Houses and Households",
    Name: "Caitlin Barrett",
    Email: "ceb329@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "NMI 5040",
    Title: "Johnson Leadership Fellows",
    Name: "Laura Georgianna",
    Email: "lac53@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "NMI 5080",
    Title: "BR Consulting",
    Name: "Randy Allen",
    Email: "rla9@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "NMI 5101",
    Title: "Work Experience",
    Name: "Sofia Kalantzi",
    Email: "sk2922@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "NMI 5160",
    Title: "Johnson Career Work Group Leaders",
    Name: "David Capaldi",
    Email: "dbc3@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "NRE 5040",
    Title: "PhD Seminar in Accounting",
    Name: "Luo Zuo",
    Email: "lz352@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "NRE 5110",
    Title: "PhD Seminar in Empirical Corporate Finance",
    Name: "Murillo Campello",
    Email: "mnc35@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "NRE 5150",
    Title: "PhD Seminar in Behavior Marketing",
    Name: "",
    Email: ""
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "NRE 5220",
    Title: "Doctoral Seminar in Quantitative Models",
    Name: "Jura Liaukonyte",
    Email: "jl2545@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "NRE 5270",
    Title: "Doctoral Seminar - International Finance",
    Name: "Warren Bailey",
    Email: "wbb1@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "NRE 5280",
    Title: "PhD Seminar in Empirical Asset Pricing",
    Name: "David Ng",
    Email: "dtn4@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "NRE 5390",
    Title: "PhD Seminar: Foundations of Operations Management I: Demand Forecasting and Inventory Theory",
    Name: "Li Chen",
    Email: "lc785@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "NRE 5410",
    Title: "PhD Seminar: Empirical Research in Operations Management",
    Name: "Vishal Gaur",
    Email: "vg77@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "NRE 5420",
    Title: "PhD Seminar in Strategy",
    Name: "Gautam Ahuja",
    Email: "ga337@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "NS 1150",
    Title: "Nutrition, Health, and Society",
    Name: "Roger Figueroa Bautista",
    Email: "rf453@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "NS 1400",
    Title: "Introduction to Human Biology, Health, and Society",
    Name: "Laura Bellows",
    Email: "llb238@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "NS 1600",
    Title: "Introduction to Public Health",
    Name: "Tashara Leak",
    Email: "tml226@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "NS 2060",
    Title: "Preparation for Engaged Learning in Global and Public Health Sciences",
    Name: "",
    Email: ""
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "NS 2061",
    Title: "Site-Specific Preparation for Engaged Learning in Global and Public Health Sciences",
    Name: "Laura Bellows",
    Email: "llb238@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "NS 2450",
    Title: "Social Science Perspectives on Food and Nutrition",
    Name: "",
    Email: ""
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "NS 2470",
    Title: "Food for Contemporary Living",
    Name: "Erin Green",
    Email: "emg232@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "NS 3090",
    Title: "Global Health Case Studies from Weill Cornell Medicine",
    Name: "Eric Brumberger",
    Email: "edb6@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "NS 3200",
    Title: "Introduction to Human Biochemistry",
    Name: "Shu-Bing Qian",
    Email: "sq38@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "NS 3320",
    Title: "Methods in Nutritional Sciences",
    Name: "Martha Field",
    Email: "mas246@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "NS 3450",
    Title: "Introduction to Physiochemical and Biological Aspects of Foods",
    Name: "Tolunay Beker Aydemir",
    Email: "tb536@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "NS 3610",
    Title: "Hot and Hidden Topics in Global and Public Health",
    Name: "Jeanne Moseley",
    Email: "jmm298@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "NS 3980",
    Title: "Research in Human Nutrition and Health",
    Name: "",
    Email: ""
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "NS 4000",
    Title: "Directed Readings",
    Name: "Kimberly O'Brien",
    Email: "koo4@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "NS 4010",
    Title: "Empirical Research",
    Name: "Kimberly O'Brien",
    Email: "koo4@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "NS 4020",
    Title: "Supervised Fieldwork",
    Name: "Kimberly O'Brien",
    Email: "koo4@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "NS 4030",
    Title: "Teaching Apprenticeship",
    Name: "Kimberly O'Brien",
    Email: "koo4@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "NS 4060",
    Title: "Experiential Learning in Global and Public Health Sciences",
    Name: "Jeanne Moseley",
    Email: "jmm298@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "NS 4410",
    Title: "Nutrition and Disease",
    Name: "Laura Barre",
    Email: "lkb35@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "NS 4420",
    Title: "Implementation of Nutrition Care",
    Name: "Emily Gier",
    Email: "eg47@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "NS 4450",
    Title: "Toward a Sustainable Global Food System: Food Policy for Developing Countries",
    Name: "Prabhu Pingali",
    Email: "plp39@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "NS 4480",
    Title: "Economics of Food and Malnutrition",
    Name: "John Hoddinott",
    Email: "jfh246@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "NS 4570",
    Title: "Health, Poverty, and Inequality: A Global Perspective",
    Name: "David Sahn",
    Email: "des16@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "NS 4600",
    Title: "Explorations in Global and Public Health",
    Name: "",
    Email: ""
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "NS 4650",
    Title: "Leadership Development in Global and Public Health",
    Name: "Jeanne Moseley",
    Email: "jmm298@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "NS 4990",
    Title: "Honors Problem",
    Name: "John Michael",
    Email: "jjm484@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "NS 4997",
    Title: "Experiential Learning in Global and Public Health in Washington, DC",
    Name: "David Silbey",
    Email: "ds90@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "NS 4998",
    Title: "Inquiry in Politics and Policy",
    Name: "David Silbey",
    Email: "ds90@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "NS 5550",
    Title: "Leadership in Dietetics Practice",
    Name: "Emily Gier",
    Email: "eg47@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "NS 6000",
    Title: "Special Problems for Graduate Students",
    Name: "Kimberly O'Brien",
    Email: "koo4@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "NS 6190",
    Title: "Division of Nutritional Sciences Seminar",
    Name: "Dan Berry",
    Email: "dcb37@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "NS 6250",
    Title: "Community Nutrition in Action",
    Name: "Kelly Quinn",
    Email: "kmq7@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "NS 6310",
    Title: "Micronutrients: Function, Homeostasis, and Assessment",
    Name: "Tolunay Beker Aydemir",
    Email: "tb536@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "NS 6350",
    Title: "Introduction to Community Nutrition Research for Dietetic Interns",
    Name: "Erin Green",
    Email: "emg232@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "NS 6455",
    Title: "Toward a Sustainable Global Food System: Food Policy for Developing Countries",
    Name: "Prabhu Pingali",
    Email: "plp39@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "NS 6480",
    Title: "Economics of Food and Malnutrition",
    Name: "John Hoddinott",
    Email: "jfh246@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "NS 6580",
    Title: "Advanced Epidemiology: Theory and Practice",
    Name: "Saurabh Mehta",
    Email: "sm939@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "NS 6980",
    Title: "International Nutrition Seminar",
    Name: "Saurabh Mehta",
    Email: "sm939@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "NS 7030",
    Title: "Seminar in Nutritional Sciences",
    Name: "Kimberly O'Brien",
    Email: "koo4@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "NS 7040",
    Title: "Grant Writing",
    Name: "Patricia Cassano",
    Email: "pac6@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "NS 7940",
    Title: "Presidential Life Scholars Seminar",
    Name: "Kimberly O'Brien",
    Email: "koo4@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "NS 8990",
    Title: "Master's Thesis and Research",
    Name: "Kimberly O'Brien",
    Email: "koo4@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "NS 9990",
    Title: "Doctoral Thesis and Research",
    Name: "Kimberly O'Brien",
    Email: "koo4@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "NTRES 1101",
    Title: "Understanding Environment and Sustainability",
    Name: "Cliff Kraft",
    Email: "cek7@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "NTRES 2100",
    Title: "Introductory Field Biology",
    Name: "Marc Goebel",
    Email: "mg567@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "NTRES 2400",
    Title: "Field Methods in Avian Ecology",
    Name: "David Bonter",
    Email: "dnb23@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "NTRES 3020",
    Title: "Earth Projects",
    Name: "Anna Davidson",
    Email: "amd355@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "NTRES 3030",
    Title: "Introduction to Biogeochemistry",
    Name: "Joseph Yavitt",
    Email: "jby1@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "NTRES 3100",
    Title: "Applied Population Ecology",
    Name: "Evan Cooch",
    Email: "egc7@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "NTRES 3150",
    Title: "Introduction to Conservation Bioacoustics",
    Name: "Holger Klinck",
    Email: "hk829@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "NTRES 3311",
    Title: "Environmental Governance",
    Name: "Steven Wolf",
    Email: "saw44@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "NTRES 3330",
    Title: "Ways of Knowing: Indigenous and Place-Based Ecological Knowledge",
    Name: "Karim-Aly Kassam",
    Email: "ksk28@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "NTRES 3400",
    Title: "Molecular Tools for Ecology, Conservation, and Natural Resource Management",
    Name: "Nina Therkildsen",
    Email: "nt246@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "NTRES 4100",
    Title: "Advanced Conservation Biology: Concepts and Techniques",
    Name: "Evan Cooch",
    Email: "egc7@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "NTRES 4160",
    Title: "Conversations in Conservation for One Health",
    Name: "Robin Radcliffe",
    Email: "rwr32@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "NTRES 4200",
    Title: "Forest Ecology",
    Name: "Timothy Fahey",
    Email: "tjf5@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "NTRES 4201",
    Title: "Forest Ecology Laboratory",
    Name: "Timothy Fahey",
    Email: "tjf5@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "NTRES 4300",
    Title: "Environmental Policy Processes I",
    Name: "Cliff Kraft",
    Email: "cek7@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "NTRES 4600",
    Title: "Planning for Environmental Conservation and Sustainability",
    Name: "Bruce Lauber",
    Email: "tbl3@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "NTRES 4960",
    Title: "Internship in Natural Resources",
    Name: "",
    Email: ""
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "NTRES 4961",
    Title: "Perspectives in Global Development",
    Name: "Louise Buck",
    Email: "leb3@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "NTRES 4970",
    Title: "Individual Study in Environmental Social Science and Resource Policy",
    Name: "",
    Email: ""
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "NTRES 4971",
    Title: "Individual Study in Applied Ecology and Conservation Ecology",
    Name: "",
    Email: ""
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "NTRES 4972",
    Title: "Individual Study in Ecosystem Science and Biochemistry",
    Name: "",
    Email: ""
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "NTRES 4980",
    Title: "Undergraduate Teaching in Natural Resources",
    Name: "",
    Email: ""
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "NTRES 4990",
    Title: "Undergraduate Research",
    Name: "",
    Email: ""
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "NTRES 5400",
    Title: "Molecular Tools for Ecology, Conservation, and Natural Resource Management",
    Name: "Nina Therkildsen",
    Email: "nt246@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "NTRES 5900",
    Title: "Professional Projects - M.P.S.",
    Name: "Marianne Krasny",
    Email: "mek2@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "NTRES 6000",
    Title: "Introduction to Graduate Study in Natural Resources",
    Name: "Marianne Krasny",
    Email: "mek2@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "NTRES 6040",
    Title: "Seminar on Selected Topics in Resource Policy and Management",
    Name: "Karim-Aly Kassam",
    Email: "ksk28@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "NTRES 6150",
    Title: "Introduction to Conservation Bioacoustics",
    Name: "Holger Klinck",
    Email: "hk829@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "NTRES 6330",
    Title: "Ways of Knowing: Indigenous and Place-Based Ecological Knowledge",
    Name: "Karim-Aly Kassam",
    Email: "ksk28@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "NTRES 6350",
    Title: "Planning for Environmental Conservation and Sustainability",
    Name: "Bruce Lauber",
    Email: "tbl3@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "NTRES 6400",
    Title: "Forest Ecology",
    Name: "Timothy Fahey",
    Email: "tjf5@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "NTRES 6940",
    Title: "Special Topics in Natural Resources",
    Name: "Matthew Hare",
    Email: "mph75@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "NTRES 6960",
    Title: "Perspectives in Global Development",
    Name: "Louise Buck",
    Email: "leb3@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "NTRES 6970",
    Title: "Graduate Individual Study in Natural Resources",
    Name: "James Lassoie",
    Email: "jpl4@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "NTRES 7800",
    Title: "Graduate Seminar in Ornithology",
    Name: "Irby Lovette",
    Email: "ijl2@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "NTRES 7900",
    Title: "Graduate-Level Thesis Research",
    Name: "Andre Dhondt",
    Email: "aad4@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "NTRES 8900",
    Title: "Master's Thesis Research",
    Name: "",
    Email: ""
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "NTRES 9900",
    Title: "Doctoral-Level Thesis Research",
    Name: "",
    Email: ""
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "ORIE 3150",
    Title: "Financial and Managerial Accounting",
    Name: "John Richard Callister",
    Email: "jc62@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "ORIE 3300",
    Title: "Optimization I",
    Name: "Adrian Lewis",
    Email: "asl55@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "ORIE 3500",
    Title: "Engineering Probability and Statistics II",
    Name: "David Goldberg",
    Email: "dag369@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "ORIE 4100",
    Title: "Manufacturing Systems Design: A Consulting Boot Camp",
    Name: "Eric Gentsch",
    Email: "elg46@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "ORIE 4330",
    Title: "Discrete Models",
    Name: "Oktay Gunluk",
    Email: "ong5@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "ORIE 4340",
    Title: "Applications of Optimization: Modeling and Computation",
    Name: "Brenda Dietrich",
    Email: "bld34@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "ORIE 4350",
    Title: "Introduction to Game Theory",
    Name: "Manxi Wu",
    Email: "mw843@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "ORIE 4390",
    Title: "Optimization Models for Logistics, Networks, and Markets",
    Name: "Frans Schalekamp",
    Email: "fms9@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "ORIE 4580",
    Title: "Simulation Modeling and Analysis",
    Name: "Shane Henderson",
    Email: "sgh9@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "ORIE 4630",
    Title: "Operations Research Tools for Financial Engineering",
    Name: "David Ruppert",
    Email: "dr24@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "ORIE 4990",
    Title: "Teaching in ORIE",
    Name: "John Richard Callister",
    Email: "jc62@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "ORIE 4999",
    Title: "ORIE Project",
    Name: "David Goldberg",
    Email: "dag369@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "ORIE 5100",
    Title: "Manufacturing Systems Design: A Consulting Boot Camp",
    Name: "Eric Gentsch",
    Email: "elg46@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "ORIE 5110",
    Title: "Case Studies",
    Name: "Kathryn Caggiano",
    Email: "kec4@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "ORIE 5140",
    Title: "Model Based Systems Engineering",
    Name: "David Schneider",
    Email: "drs44@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "ORIE 5210",
    Title: "Financial Engineering Colloquium",
    Name: "Victoria Averbukh",
    Email: "vza1@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "ORIE 5215",
    Title: "Financial Engineering Career Practicum",
    Name: "Victoria Averbukh",
    Email: "vza1@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "ORIE 5220",
    Title: "Applied Financial Engineering (in NYC)",
    Name: "Victoria Averbukh",
    Email: "vza1@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "ORIE 5230",
    Title: "Quantitative Trading Strategies",
    Name: "Sasha Stoikov",
    Email: "sfs33@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "ORIE 5240",
    Title: "Bond Mathematics and Mortgage-Backed Securities",
    Name: "Victoria Averbukh",
    Email: "vza1@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "ORIE 5252",
    Title: "Special Topics in Financial Engineering",
    Name: "",
    Email: ""
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "ORIE 5253",
    Title: "Special Topics in Financial Engineering II",
    Name: "Andrew Chin",
    Email: "ac36@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "ORIE 5254",
    Title: "Special Topics in Financial Engineering III",
    Name: "Edward Tom",
    Email: "et379@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "ORIE 5255",
    Title: "Special Topics in Financial Engineering IV",
    Name: "Irene Aldridge",
    Email: "iea22@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "ORIE 5256",
    Title: "Special Topics in Financial Engineering V",
    Name: "Marcos Lopez De Prado",
    Email: "ml863@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "ORIE 5257",
    Title: "Special Topics in Financial Engineering VI",
    Name: "",
    Email: ""
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "ORIE 5258",
    Title: "Python for Finance",
    Name: "",
    Email: ""
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "ORIE 5300",
    Title: "Optimization I",
    Name: "Adrian Lewis",
    Email: "asl55@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "ORIE 5330",
    Title: "Discrete Models",
    Name: "Oktay Gunluk",
    Email: "ong5@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "ORIE 5340",
    Title: "Applications of Optimization: Modeling and Computation",
    Name: "Brenda Dietrich",
    Email: "bld34@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "ORIE 5350",
    Title: "Introduction to Game Theory",
    Name: "Manxi Wu",
    Email: "mw843@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "ORIE 5355",
    Title: "Applied Data Science: Decision-Making Beyond Prediction",
    Name: "Nikhil Garg",
    Email: "ng343@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "ORIE 5380",
    Title: "Optimization Methods",
    Name: "Huseyin Topaloglu",
    Email: "ht88@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "ORIE 5390",
    Title: "Optimization Models for Logistics, Networks, and Markets",
    Name: "Frans Schalekamp",
    Email: "fms9@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "ORIE 5500",
    Title: "Engineering Probability and Statistics II",
    Name: "David Goldberg",
    Email: "dag369@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "ORIE 5530",
    Title: "Modeling Under Uncertainty",
    Name: "Omar El Housni",
    Email: "oe46@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "ORIE 5580",
    Title: "Simulation Modeling and Analysis",
    Name: "Shane Henderson",
    Email: "sgh9@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "ORIE 5581",
    Title: "Monte Carlo Simulation",
    Name: "Shane Henderson",
    Email: "sgh9@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "ORIE 5600",
    Title: "Financial Engineering with Stochastic Calculus I",
    Name: "Andreea MINCA",
    Email: "acm299@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "ORIE 5630",
    Title: "Operations Research Tools for Financial Engineering",
    Name: "David Ruppert",
    Email: "dr24@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "ORIE 5650",
    Title: "Quantitative Methods of Financial Risk Management",
    Name: "Pierre Patie",
    Email: "pp396@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "ORIE 5735",
    Title: "Graph-Based Data Science for Networked Systems",
    Name: "Anna Scaglione",
    Email: "as337@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "ORIE 5750",
    Title: "Applied Machine Learning",
    Name: "Volodymyr Kuleshov",
    Email: "vk379@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "ORIE 5910",
    Title: "Manufacturing Option Project",
    Name: "John Richard Callister",
    Email: "jc62@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "ORIE 5980",
    Title: "ORIE Master of Engineering Project",
    Name: "Kathryn Caggiano",
    Email: "kec4@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "ORIE 5999",
    Title: "Special Projects in ORIE",
    Name: "Kathryn Caggiano",
    Email: "kec4@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "ORIE 6300",
    Title: "Mathematical Programming I",
    Name: "Katya Scheinberg",
    Email: "ks2375@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "ORIE 6338",
    Title: "Heuristic Mixed-Integer Programming",
    Name: "Andrea Lodi",
    Email: "al748@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "ORIE 6500",
    Title: "Applied Stochastic Processes",
    Name: "Jim Dai",
    Email: "jd694@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "ORIE 6640",
    Title: "Martingale Theory and Applications in Finance",
    Name: "Johannes Wissel",
    Email: "jw674@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "ORIE 6700",
    Title: "Statistical Principles",
    Name: "Christina Yu",
    Email: "cel85@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "ORIE 7170",
    Title: "Theory of Linear Models",
    Name: "James Booth",
    Email: "jb383@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "ORIE 7999",
    Title: "PhD Independent Research",
    Name: "Oktay Gunluk",
    Email: "ong5@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "ORIE 9000",
    Title: "ORIE Graduate Colloquium",
    Name: "Katya Scheinberg",
    Email: "ks2375@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "ORIE 9110",
    Title: "M.Eng. Professional Review",
    Name: "Kathryn Caggiano",
    Email: "kec4@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "ORIE 9115",
    Title: "MEng Career Practicum",
    Name: "Victoria Averbukh",
    Email: "vza1@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "PADM 5000",
    Title: "Special Studies",
    Name: "Laurie Miller",
    Email: "ljm44@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "PADM 5009",
    Title: "Career Management for Public Affairs",
    Name: "Millie Reed",
    Email: "mrr6@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "PADM 5110",
    Title: "Public Administration",
    Name: "Thomas O'Toole",
    Email: "tjo22@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "PADM 5119",
    Title: "Leadership for Public Service",
    Name: "",
    Email: ""
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "PADM 5210",
    Title: "Intermediate Microeconomics for Public Affairs",
    Name: "Alan Mathios",
    Email: "adm5@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "PADM 5310",
    Title: "Applied Multivariate Statistics in Public Affairs",
    Name: "Douglas Miller",
    Email: "dlm336@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "PADM 5313",
    Title: "Managerial Statistics for Public Affairs",
    Name: "Cindy Van Es",
    Email: "clv1@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "PADM 5343",
    Title: "Program Evaluation",
    Name: "William Trochim",
    Email: "wmt1@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "PADM 5414",
    Title: "Project Management",
    Name: "Rebecca Brenner",
    Email: "rjm478@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "PADM 5423",
    Title: "Financial Accounting for Executives",
    Name: "Lauren Quinn",
    Email: "ltq3@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "PADM 5424",
    Title: "Public Budgeting and Finance",
    Name: "Richard Musell",
    Email: "rmm298@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "PADM 5441",
    Title: "Effective Writing for Public Policy",
    Name: "Dan Lamb",
    Email: "dll5@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "PADM 5442",
    Title: "Effective Policy Writing for Public Affairs",
    Name: "Dan Lamb",
    Email: "dll5@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "PADM 5449",
    Title: "Systems Thinking in Public Affairs",
    Name: "Derek Cabrera",
    Email: "dac66@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "PADM 5450",
    Title: "International Public and NGO Management",
    Name: "John Mathiason",
    Email: "jrm534@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "PADM 5455",
    Title: "Comparative Public Administration: The Case of Seoul, Korea",
    Name: "Thomas O'Toole",
    Email: "tjo22@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "PADM 5634",
    Title: "Corruption, Governance, and Development",
    Name: "Raza Ahmad",
    Email: "ra629@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "PADM 5717",
    Title: "Energy Transition: Policy, Financial, and Business Interactions",
    Name: "Drew Riedl",
    Email: "adr97@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "PADM 5858",
    Title: "Business and Inequality",
    Name: "Drew Riedl",
    Email: "adr97@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "PADM 5900",
    Title: "Consulting for Nonprofit and Government Organizations",
    Name: "",
    Email: ""
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "PADM 5910",
    Title: "Special Topics: Cornell Institute for Public Affairs Domestic Capstone",
    Name: "Laurie Miller",
    Email: "ljm44@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "PADM 5930",
    Title: "Writing Professional Reports for Public Affairs",
    Name: "Charyl Barnes",
    Email: "cd88@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "PADM 5949",
    Title: "Systems Thinking Modeling and Leadership",
    Name: "Laura Cabrera",
    Email: "lac19@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "PADM 5950",
    Title: "Special Topics: Cornell Institute for Public Affairs International Capstone",
    Name: "Laurie Miller",
    Email: "ljm44@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "PADM 5953",
    Title: "Executive Master of Public Administration (EMPA) Capstone",
    Name: "Laurie Miller",
    Email: "ljm44@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "PAM 1111",
    Title: "Success in PAM and HCP",
    Name: "Sharon Sassler",
    Email: "ss589@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "PAM 2040",
    Title: "Economics of the Public Sector",
    Name: "Pauline Leung",
    Email: "pl532@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "PAM 2101",
    Title: "Statistics for Policy Analysis and Management Majors",
    Name: "Peter Rich",
    Email: "pmr86@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "PAM 2220",
    Title: "Controversies About Inequality",
    Name: "Joseph Sullivan",
    Email: "jfs325@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "PAM 2250",
    Title: "Social Problems in the United States",
    Name: "Peter Rich",
    Email: "pmr86@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "PAM 2300",
    Title: "Introduction to Policy Analysis",
    Name: "Rosemary Avery",
    Email: "rja7@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "PAM 2350",
    Title: "The U.S. Health Care System",
    Name: "Sean Nicholson",
    Email: "sn243@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "PAM 2810",
    Title: "Migration: Histories, Controversies, and Perspectives",
    Name: "Shannon Gleeson",
    Email: "smg338@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "PAM 3090",
    Title: "Strategic Advocacy: Lobbying and Interest Group Politics in Washington, D.C.",
    Name: "Ronald Christie",
    Email: "ric38@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "PAM 3120",
    Title: "Research Design, Practice, and Policy",
    Name: "",
    Email: ""
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "PAM 3190",
    Title: "Nonprofits and Public Policy",
    Name: "Nicolas Bottan",
    Email: "nlb75@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "PAM 3280",
    Title: "Fundamentals of Population Health",
    Name: "Julie Carmalt",
    Email: "jhc48@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "PAM 3360",
    Title: "Evolving Families: Challenges to Public Policy",
    Name: "Sharon Sassler",
    Email: "ss589@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "PAM 3400",
    Title: "The Economics of Consumer Policy",
    Name: "Sharon Tennyson",
    Email: "st96@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "PAM 3410",
    Title: "Economics of Consumer Protection and the Law",
    Name: "Alan Mathios",
    Email: "adm5@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "PAM 3600",
    Title: "Economics of Crime",
    Name: "Max Kapustin",
    Email: "mk2624@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "PAM 3670",
    Title: "Economics and Environmental Policy",
    Name: "Nicholas Sanders",
    Email: "njs224@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "PAM 3764",
    Title: "Intellectual Property Law and Policy",
    Name: "Daniel Manne",
    Email: "dpm255@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "PAM 4000",
    Title: "Directed Readings",
    Name: "Max Kapustin",
    Email: "mk2624@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "PAM 4010",
    Title: "Empirical Research",
    Name: "Alan Mathios",
    Email: "adm5@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "PAM 4020",
    Title: "Supervised Fieldwork",
    Name: "Maria Fitzpatrick",
    Email: "mdf98@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "PAM 4030",
    Title: "Teaching Apprenticeship",
    Name: "Julie Carmalt",
    Email: "jhc48@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "PAM 4060",
    Title: "Inquiry in Politics and Policy",
    Name: "David Silbey",
    Email: "ds90@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "PAM 4101",
    Title: "Causal Reasoning and Policy Evaluation I",
    Name: "Max Kapustin",
    Email: "mk2624@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "PAM 4240",
    Title: "Risk Management and Policy",
    Name: "Sharon Tennyson",
    Email: "st96@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "PAM 4640",
    Title: "Regulation and Infrastructure Policy",
    Name: "Rick Geddes",
    Email: "rrg24@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "PAM 4980",
    Title: "Honors Seminar",
    Name: "Pauline Leung",
    Email: "pl532@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "PAM 4990",
    Title: "Honors Program",
    Name: "Rosemary Avery",
    Email: "rja7@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "PAM 5090",
    Title: "Strategic Advocacy: Lobbying and Interest Group Politics in Washington, D.C.",
    Name: "Ronald Christie",
    Email: "ric38@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "PAM 5113",
    Title: "Key Management Issues in the Biotech and Pharmaceutical Industries",
    Name: "Sean Nicholson",
    Email: "sn243@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "PAM 5190",
    Title: "Nonprofits and Public Policy",
    Name: "Nicolas Bottan",
    Email: "nlb75@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "PAM 5240",
    Title: "Risk Management and Policy",
    Name: "Sharon Tennyson",
    Email: "st96@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "PAM 5340",
    Title: "Regulation and Infrastructure Policy",
    Name: "Rick Geddes",
    Email: "rrg24@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "PAM 5350",
    Title: "US Health Care System",
    Name: "Sean Nicholson",
    Email: "sn243@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "PAM 5400",
    Title: "Economics of Consumer Policy",
    Name: "Sharon Tennyson",
    Email: "st96@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "PAM 5520",
    Title: "Health Care Services: Consumer and Ethical Perspectives",
    Name: "Christina Moylan",
    Email: "cpm35@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "PAM 5543",
    Title: "Health Law for Managers",
    Name: "",
    Email: ""
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "PAM 5563",
    Title: "Managerial Finance",
    Name: "Jessica Tracey",
    Email: "jsv22@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "PAM 5630",
    Title: "Health Care Financial Management II",
    Name: "Sean Nicholson",
    Email: "sn243@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "PAM 5641",
    Title: "Data Analytics for Healthcare Administrators",
    Name: "Zachary Aragosa",
    Email: "zja4@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "PAM 5660",
    Title: "Strategic Management and Organizational Design of Health Care Systems",
    Name: "Colleen Carey",
    Email: "cmc528@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "PAM 5679",
    Title: "Desktop and Modeling Solutions",
    Name: "Christina Homrighouse",
    Email: "cmg4@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "PAM 5690",
    Title: "Regression Analysis and Managerial Forecasting",
    Name: "",
    Email: ""
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "PAM 5700",
    Title: "Accounting, Financial Reporting and Decision Making",
    Name: "Matthew Geiszler",
    Email: "mcg93@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "PAM 5703",
    Title: "Financial Accounting",
    Name: "Jessica Tracey",
    Email: "jsv22@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "PAM 5710",
    Title: "Organizational Development/Human Resource Management in Health Care Organization",
    Name: "Nicola Fabrizio",
    Email: "naf5@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "PAM 5783",
    Title: "Comparative Health Care Systems",
    Name: "Angus Corbett",
    Email: "adc253@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "PAM 5823",
    Title: "Disruptive Innovation in Health Care II",
    Name: "Terrence Murphy",
    Email: "thm32@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "PAM 5833",
    Title: "Diversity and Inclusion for Health Care Mangers",
    Name: "Betsy Hawkins",
    Email: "bth55@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "PAM 5843",
    Title: "Startup Funding",
    Name: "Tom Schryver",
    Email: "tps1@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "PAM 5853",
    Title: "Digital Transformation",
    Name: "Karan Girotra",
    Email: "kg488@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "PAM 5900",
    Title: "Special Topics in Health Administration and Finance",
    Name: "Lee Perlman",
    Email: "lhp22@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "PAM 5913",
    Title: "VUCA Leadership",
    Name: "George Casey",
    Email: "gwc65@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "PAM 5943",
    Title: "Negotiation Essentials",
    Name: "Ariel Avgar",
    Email: "aca27@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "PAM 5951",
    Title: "Field Studies in Health Administration and Planning",
    Name: "",
    Email: ""
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "PAM 5953",
    Title: "Field Studies for Health Managers",
    Name: "Martha Sherman",
    Email: "mjs27@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "PAM 5963",
    Title: "Process Thinking and Quality Improvement in Healthcare",
    Name: "Alexis Strong",
    Email: "aps98@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "PAM 5970",
    Title: "Economics and Environmental Policy",
    Name: "Nicholas Sanders",
    Email: "njs224@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "PAM 5990",
    Title: "Challenges and Trends in the Health Services Industry",
    Name: "Cathy Bartell",
    Email: "cjb42@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "PAM 6000",
    Title: "Special Problems for Graduate Students",
    Name: "Thomas Evans",
    Email: "tae23@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "PAM 6090",
    Title: "Empirical Strategies for Policy Analysis",
    Name: "Douglas Miller",
    Email: "dlm336@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "PAM 6390",
    Title: "Microeconomics for Policy Analysis",
    Name: "Brandon Tripp",
    Email: "bkt24@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "PAM 6810",
    Title: "Demography Training Seminar",
    Name: "Vida Maralani",
    Email: "vm343@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "PAM 8990",
    Title: "Master's Thesis and Research",
    Name: "Colleen Carey",
    Email: "cmc528@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "PAM 9990",
    Title: "Doctoral Thesis and Research",
    Name: "Michael Lovenheim",
    Email: "mfl55@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "PE 1100",
    Title: "Beginning Swimming",
    Name: "Susan Ball",
    Email: "seb27@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "PE 1102",
    Title: "Intermediate Swimming",
    Name: "Susan Ball",
    Email: "seb27@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "PE 1104",
    Title: "Swimming Conditioning",
    Name: "Ramineh Abedini",
    Email: "ra654@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "PE 1130",
    Title: "Open Water Scuba",
    Name: "Jen Gudaz",
    Email: "jag245@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "PE 1150",
    Title: "Ballroom Dancing",
    Name: "Timothy Sayers",
    Email: "tjs338@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "PE 1152",
    Title: "Beginning Ballroom Dance Smooth",
    Name: "Iska Ziver",
    Email: "irz2@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "PE 1155",
    Title: "Introduction to Belly Dancing",
    Name: "June Seaney",
    Email: "js126@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "PE 1160",
    Title: "Latin Dance",
    Name: "Michael Ristorucci",
    Email: "mlr24@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "PE 1162",
    Title: "Salsa",
    Name: "Michael Ristorucci",
    Email: "mlr24@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "PE 1167",
    Title: "Introduction to Tango",
    Name: "Juan Brache",
    Email: "jbb284@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "PE 1170",
    Title: "Introduction to Swing Dance",
    Name: "Anneke Van Renesse",
    Email: "amv68@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "PE 1171",
    Title: "Intermediate Swing Dance",
    Name: "Anneke Van Renesse",
    Email: "amv68@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "PE 1184",
    Title: "Dance Technique III - Classical",
    Name: "P. Suber",
    Email: "pbs6@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "PE 1185",
    Title: "Dance Technique III - Modern",
    Name: "Miles Yeung-Tieu",
    Email: "mey26@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "PE 1231",
    Title: "Group Fitness Instructor Training",
    Name: "Emily Ellison",
    Email: "ery3@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "PE 1233",
    Title: "Bootcamp",
    Name: "Todd Webster",
    Email: "tsw67@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "PE 1235",
    Title: "8 O'Clock Rock",
    Name: "Matt Hayes",
    Email: "mh249@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "PE 1236",
    Title: "Cardio Fuego",
    Name: "Priscilla Hummel",
    Email: "plh64@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "PE 1237",
    Title: "Yasaride",
    Name: "Linda Aigen",
    Email: "lja53@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "PE 1238",
    Title: "Barre",
    Name: "Melissa Burress",
    Email: "mb376@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "PE 1241",
    Title: "Mobility and Core Training",
    Name: "Kimberley Alger-Norton",
    Email: "ka362@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "PE 1242",
    Title: "Fit Trifecta",
    Name: "Priscilla Hummel",
    Email: "plh64@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "PE 1245",
    Title: "Indoor Stationary Cycling",
    Name: "Laurie Cuomo",
    Email: "lrc82@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "PE 1246",
    Title: "Open Gym Class",
    Name: "Symphony Howe",
    Email: "sah397@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "PE 1250",
    Title: "Army ROTC Physical Training",
    Name: "Stephen Ficchi",
    Email: "slf236@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "PE 1260",
    Title: "Cardio Kickboxing",
    Name: "Han Cho",
    Email: "hdc9@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "PE 1261",
    Title: "Fitness and Conditioning",
    Name: "Dustin Paul",
    Email: "drp73@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "PE 1262",
    Title: "Fitness for Women",
    Name: "Bert Adams-Kucik",
    Email: "mja12@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "PE 1265",
    Title: "Wellness and Fitness",
    Name: "Kimberley Alger-Norton",
    Email: "ka362@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "PE 1270",
    Title: "Introduction to Jogging",
    Name: "Dustin Paul",
    Email: "drp73@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "PE 1271",
    Title: "Jogging Tours",
    Name: "Michael Stewart",
    Email: "mts96@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "PE 1272",
    Title: "Walking Tours",
    Name: "Priscilla Timberlake",
    Email: "pt29@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "PE 1273",
    Title: "Walking Meditation",
    Name: "Priscilla Timberlake",
    Email: "pt29@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "PE 1290",
    Title: "Introduction to Gymnastics",
    Name: "Jamie Jett",
    Email: "jj563@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "PE 1300",
    Title: "Introduction to Bowling",
    Name: "Jon LaRock",
    Email: "jwl286@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "PE 1312",
    Title: "Ultimate Bass Fishing",
    Name: "",
    Email: ""
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "PE 1320",
    Title: "Professional Instructional Golf",
    Name: "Ethan Smith",
    Email: "ejs43@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "PE 1321",
    Title: "Recreational Golf",
    Name: "Ethan Smith",
    Email: "ejs43@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "PE 1335",
    Title: "Introduction to Water Skiing",
    Name: "Patrick Crowley",
    Email: "pc93@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "PE 1340",
    Title: "Juggling",
    Name: "Jonathan Billing",
    Email: "jmb269@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "PE 1345",
    Title: "Introduction to Boxing",
    Name: "Kevin Seaman",
    Email: "ks273@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "PE 1346",
    Title: "Intermediate Boxing",
    Name: "Kevin Seaman",
    Email: "ks273@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "PE 1347",
    Title: "Brazilian Jiu Jitsu Fundamentals",
    Name: "Kevin Seaman",
    Email: "ks273@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "PE 1350",
    Title: "HIIT Boxing",
    Name: "Shad Ryan",
    Email: "str52@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "PE 1360",
    Title: "Jeet Kune Do and MMA",
    Name: "Kevin Seaman",
    Email: "ks273@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "PE 1365",
    Title: "Karate Basics",
    Name: "Jose Delgado",
    Email: "jad25@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "PE 1366",
    Title: "Karate",
    Name: "Jose Delgado",
    Email: "jad25@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "PE 1371",
    Title: "Okinawan Karate-do",
    Name: "John Doris",
    Email: "jmd378@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "PE 1375",
    Title: "Beginning Tae Kwon Do",
    Name: "Han Cho",
    Email: "hdc9@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "PE 1376",
    Title: "Intermediate Tae Kwon Do",
    Name: "Han Cho",
    Email: "hdc9@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "PE 1380",
    Title: "Tai Chi Chuan",
    Name: "John Burger",
    Email: "jeb233@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "PE 1385",
    Title: "Thai Boxing",
    Name: "Kevin Seaman",
    Email: "ks273@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "PE 1395",
    Title: "Self Defense and Personal Safety in the Modern World",
    Name: "Andrew MacVey",
    Email: "apm249@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "PE 1396",
    Title: "Filipino Kali",
    Name: "Kevin Seaman",
    Email: "ks273@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "PE 1405",
    Title: "Living Routines",
    Name: "Priscilla Timberlake",
    Email: "pt29@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "PE 1420",
    Title: "Introduction to Meditation",
    Name: "Priscilla Timberlake",
    Email: "pt29@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "PE 1421",
    Title: "Relaxation and Stress Management",
    Name: "Lewis Freedman",
    Email: "lmf10@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "PE 1422",
    Title: "Meditation and Relaxation",
    Name: "Kathy Morris",
    Email: "km72@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "PE 1427",
    Title: "Ashtanga Yoga Foundations",
    Name: "Jennifer Cunningham-Ryan",
    Email: "jrc92@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "PE 1429",
    Title: "Vinyasa Yoga",
    Name: "Jessica Caporizzo",
    Email: "jac629@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "PE 1430",
    Title: "Introduction to Yoga",
    Name: "Lewis Freedman",
    Email: "lmf10@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "PE 1431",
    Title: "Intermediate Yoga",
    Name: "Lewis Freedman",
    Email: "lmf10@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "PE 1439",
    Title: "HIIT Yoga",
    Name: "Symphony Howe",
    Email: "sah397@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "PE 1440",
    Title: "Introduction to Badminton",
    Name: "Shreyas Kotian",
    Email: "spk59@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "PE 1441",
    Title: "Intermediate Badminton",
    Name: "Sai Pratyush Akula",
    Email: "sa2343@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "PE 1445",
    Title: "Outdoor Beginning Tennis",
    Name: "Arthur Falkson",
    Email: "abf11@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "PE 1446",
    Title: "Outdoor Intermediate Tennis",
    Name: "Arthur Falkson",
    Email: "abf11@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "PE 1447",
    Title: "Outdoor Advanced Tennis",
    Name: "Arthur Falkson",
    Email: "abf11@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "PE 1465",
    Title: "Introduction to Squash",
    Name: "Gene Nighman",
    Email: "gmn5@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "PE 1466",
    Title: "Intermediate Squash",
    Name: "Daniel Evett",
    Email: "dhe2@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "PE 1480",
    Title: "Introduction to Small Boat Sailing",
    Name: "Gregory Brown",
    Email: "ggb26@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "PE 1482",
    Title: "Introduction to Large Boat Sailing",
    Name: "Gregory Brown",
    Email: "ggb26@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "PE 1505",
    Title: "Introduction to Trap and Skeet",
    Name: "Benjamin Blakeley",
    Email: "brb4@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "PE 1510",
    Title: "Riflery",
    Name: "Benjamin Blakeley",
    Email: "brb4@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "PE 1515",
    Title: "Introduction to Handgun Safety",
    Name: "Robert Jones",
    Email: "rmj86@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "PE 1520",
    Title: "Introduction to Archery",
    Name: "Charles Rendleman",
    Email: "crr233@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "PE 1527",
    Title: "Fencing",
    Name: "Matt Hayes",
    Email: "mh249@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "PE 1540",
    Title: "Introduction to Skating",
    Name: "Robyn Bentley",
    Email: "rb765@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "PE 1545",
    Title: "Beginning Figure Skating",
    Name: "Robyn Bentley",
    Email: "rb765@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "PE 1546",
    Title: "Intermediate Figure Skating",
    Name: "Robyn Bentley",
    Email: "rb765@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "PE 1547",
    Title: "Advanced Figure Skating",
    Name: "Robyn Bentley",
    Email: "rb765@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "PE 1550",
    Title: "Introduction to Ice Hockey",
    Name: "Dustin Paul",
    Email: "drp73@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "PE 1551",
    Title: "Intermediate Ice Hockey",
    Name: "Dustin Paul",
    Email: "drp73@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "PE 1555",
    Title: "Basketball Officiating",
    Name: "Scott Flickinger",
    Email: "sf487@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "PE 1560",
    Title: "Basketball",
    Name: "Max Ginsberg",
    Email: "mjg336@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "PE 1565",
    Title: "Soccer",
    Name: "John-Paul Nawn",
    Email: "jn438@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "PE 1570",
    Title: "Beginning-Intermediate Volleyball",
    Name: "Aaron DeKalb",
    Email: "acd225@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "PE 1571",
    Title: "Advanced Volleyball",
    Name: "Aaron DeKalb",
    Email: "acd225@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "PE 1580",
    Title: "Principles of Weight Training",
    Name: "Matt Hayes",
    Email: "mh249@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "PE 1581",
    Title: "Weight Training for Women",
    Name: "Bert Adams-Kucik",
    Email: "mja12@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "PE 1582",
    Title: "Advanced Weight Training",
    Name: "Todd Webster",
    Email: "tsw67@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "PE 1600",
    Title: "Introduction to Aerials",
    Name: "Chris Leeming",
    Email: "csl45@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "PE 1601",
    Title: "Backcountry Cooking",
    Name: "Chris Leeming",
    Email: "csl45@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "PE 1605",
    Title: "Day Hiking",
    Name: "Chris Leeming",
    Email: "csl45@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "PE 1608",
    Title: "Trail Running",
    Name: "Mark Holton",
    Email: "mh45@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "PE 1609",
    Title: "Geocaching",
    Name: "Chris Leeming",
    Email: "csl45@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "PE 1610",
    Title: "Backpacking in the Finger Lakes",
    Name: "Chris Leeming",
    Email: "csl45@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "PE 1613",
    Title: "Wilderness Survival Skills",
    Name: "Chris Leeming",
    Email: "csl45@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "PE 1615",
    Title: "Introduction to Circus Arts",
    Name: "Chris Leeming",
    Email: "csl45@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "PE 1616",
    Title: "Introduction to Camping",
    Name: "Chris Leeming",
    Email: "csl45@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "PE 1625",
    Title: "Wilderness First Aid",
    Name: "Benjamin Blakeley",
    Email: "brb4@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "PE 1626",
    Title: "Wilderness First Responder",
    Name: "Benjamin Blakeley",
    Email: "brb4@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "PE 1628",
    Title: "Unicycling",
    Name: "Jonathan Billing",
    Email: "jmb269@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "PE 1630",
    Title: "Caving",
    Name: "Mark Holton",
    Email: "mh45@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "PE 1640",
    Title: "Basic Rock Climbing",
    Name: "Andrew McLaughlin",
    Email: "anm67@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "PE 1641",
    Title: "Basic Rock Climbing: Closing the Adventure Gap",
    Name: "Andrew McLaughlin",
    Email: "anm67@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "PE 1642",
    Title: "Women's Basic Rock Climbing",
    Name: "Andrew McLaughlin",
    Email: "anm67@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "PE 1646",
    Title: "Intermediate Rock Climbing",
    Name: "Andrew McLaughlin",
    Email: "anm67@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "PE 1647",
    Title: "Sport Lead Climbing",
    Name: "Andrew McLaughlin",
    Email: "anm67@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "PE 1650",
    Title: "Rock Climbing: Technique and Training",
    Name: "Andrew McLaughlin",
    Email: "anm67@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "PE 1651",
    Title: "Introduction to Outdoor Rock Climbing",
    Name: "Andrew McLaughlin",
    Email: "anm67@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "PE 1653",
    Title: "Shawangunks Rock Climbing",
    Name: "Andrew McLaughlin",
    Email: "anm67@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "PE 1656",
    Title: "Outdoor Anchor Building",
    Name: "Andrew McLaughlin",
    Email: "anm67@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "PE 1657",
    Title: "Tree Climbing",
    Name: "Mark Holton",
    Email: "mh45@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "PE 1661",
    Title: "Pre-freshman Summer Program",
    Name: "Mark Holton",
    Email: "mh45@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "PE 1663",
    Title: "Ropes Course Programming",
    Name: "Elizabeth Anderson",
    Email: "ela62@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "PE 1664",
    Title: "Mountain Biking",
    Name: "",
    Email: ""
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "PE 1666",
    Title: "Bike Touring",
    Name: "Mark Holton",
    Email: "mh45@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "PE 1668",
    Title: "Recreational Biking",
    Name: "Mark Holton",
    Email: "mh45@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "PE 1670",
    Title: "Adirondack Canoe Camping",
    Name: "Mark Holton",
    Email: "mh45@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "PE 1671",
    Title: "Recreational Canoeing",
    Name: "Mark Holton",
    Email: "mh45@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "PE 1674",
    Title: "Introduction to Sea Kayaking",
    Name: "Mark Holton",
    Email: "mh45@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "PE 1675",
    Title: "Stand Up Paddleboarding",
    Name: "Mark Holton",
    Email: "mh45@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "PE 1702",
    Title: "Outdoor Yoga",
    Name: "Chris Leeming",
    Email: "csl45@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "PE 1851",
    Title: "Leadership Laboratory I",
    Name: "",
    Email: ""
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "PE 1852",
    Title: "Leadership Laboratory II",
    Name: "",
    Email: ""
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "PE 1853",
    Title: "Leadership Laboratory III",
    Name: "",
    Email: ""
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "PE 1854",
    Title: "Leadership Laboratory IV",
    Name: "James Tully",
    Email: "jet255@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "PE 1860",
    Title: "Initial Military Experiences I",
    Name: "",
    Email: ""
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "PE 1862",
    Title: "Intermediate Military Experiences I",
    Name: "",
    Email: ""
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "PE 1864",
    Title: "Junior Officer Leadership Experiences I",
    Name: "",
    Email: ""
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "PE 1865",
    Title: "Junior Officer Leadership Experiences II",
    Name: "",
    Email: ""
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "PE 1866",
    Title: "Advanced Leadership Experiences",
    Name: "",
    Email: ""
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "PE 1870",
    Title: "Naval Professional Laboratory",
    Name: "Tyler Trainor",
    Email: "tst45@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "PE 1872",
    Title: "Naval Professional Laboratory",
    Name: "Edwin Powers",
    Email: "ep472@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "PE 1874",
    Title: "Naval Professional Laboratory",
    Name: "Tyler Trainor",
    Email: "tst45@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "PE 1876",
    Title: "Naval Professional Laboratory",
    Name: "Sean Mansfield",
    Email: "stm86@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "PE 1999",
    Title: "Physical Education Independent Study",
    Name: "",
    Email: ""
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "PERSN 1320",
    Title: "Elementary Persian-Farsi I",
    Name: "Iago Gocheleishvili",
    Email: "ig44@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "PERSN 1322",
    Title: "Intermediate Persian-Farsi I",
    Name: "Iago Gocheleishvili",
    Email: "ig44@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "PERSN 5509",
    Title: "Graduate Studies in Persian",
    Name: "Iago Gocheleishvili",
    Email: "ig44@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "PHIL 1100",
    Title: "Introduction to Philosophy",
    Name: "David Shoemaker",
    Email: "dws267@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "PHIL 1440",
    Title: "Ethics of Eating",
    Name: "William Starr",
    Email: "wbs56@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "PHIL 1950",
    Title: "Controversies About Inequality",
    Name: "Joseph Sullivan",
    Email: "jfs325@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "PHIL 1960",
    Title: "Law, Society, and Morality",
    Name: "Daniel Manne",
    Email: "dpm255@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "PHIL 2200",
    Title: "Greek and Roman Philosophy",
    Name: "Tad Brennan",
    Email: "trb64@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "PHIL 2300",
    Title: "Puzzles and Paradoxes",
    Name: "Alexander Kocurek",
    Email: "awk78@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "PHIL 2310",
    Title: "Introduction to Deductive Logic",
    Name: "Harold Hodes",
    Email: "hth3@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "PHIL 2415",
    Title: "Introduction to Moral Psychology",
    Name: "Shaun Nichols",
    Email: "sbn44@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "PHIL 2455",
    Title: "Introduction to Bioethics",
    Name: "Julia Markovits",
    Email: "jm2476@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "PHIL 2525",
    Title: "Introduction to African Philosophy",
    Name: "",
    Email: ""
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "PHIL 2530",
    Title: "Religion and Reason",
    Name: "Dean Da Vee",
    Email: "dad356@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "PHIL 2640",
    Title: "Introduction to Metaphysics",
    Name: "Matthew Paskell",
    Email: "mrp233@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "PHIL 2830",
    Title: "Introduction to Decision Theory",
    Name: "Theodore Korzukhin",
    Email: "tk283@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "PHIL 2990",
    Title: "Foundations of Law and Society",
    Name: "Julilly Kohler-Hausmann",
    Email: "jkh224@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "PHIL 3180",
    Title: "Origins of 20th Century Philosophy",
    Name: "Harold Hodes",
    Email: "hth3@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "PHIL 3204",
    Title: "Hellenistic Philosophy",
    Name: "Tad Brennan",
    Email: "trb64@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "PHIL 3231",
    Title: "Kant's Ethics",
    Name: "Benjamin Yost",
    Email: "bsy9@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "PHIL 3250",
    Title: "Nineteenth Century Philosophy",
    Name: "M. Kosch",
    Email: "mak229@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "PHIL 3610",
    Title: "Epistemology",
    Name: "Alexander Kocurek",
    Email: "awk78@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "PHIL 3710",
    Title: "Philosophy of Language",
    Name: "William Starr",
    Email: "wbs56@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "PHIL 3900",
    Title: "Independent Study",
    Name: "Shaun Nichols",
    Email: "sbn44@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "PHIL 4002",
    Title: "Latin Philosophical Texts",
    Name: "",
    Email: ""
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "PHIL 4003",
    Title: "German Philosophical Texts",
    Name: "M. Kosch",
    Email: "mak229@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "PHIL 4110",
    Title: "Greek Philosophical Texts",
    Name: "Tad Brennan",
    Email: "trb64@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "PHIL 4310",
    Title: "Mathematical Logic",
    Name: "Slawomir Solecki",
    Email: "ss3777@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "PHIL 4311",
    Title: "Topics in Logic and the Foundations of Mathematics",
    Name: "James Walsh",
    Email: "jw2682@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "PHIL 4410",
    Title: "Topics in Ethics and Value Theory",
    Name: "Kate Manne",
    Email: "kam468@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "PHIL 4611",
    Title: "Topics in Action Theory",
    Name: "David Shoemaker",
    Email: "dws267@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "PHIL 4730",
    Title: "Semantics I",
    Name: "Dorit Abusch",
    Email: "da45@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "PHIL 4900",
    Title: "Informal Study for Honors I",
    Name: "Shaun Nichols",
    Email: "sbn44@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "PHIL 4901",
    Title: "Informal Study for Honors II",
    Name: "",
    Email: ""
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "PHIL 4941",
    Title: "Locke and the Philosophies of Dispossession: Indigenous America's Interruptions and Resistances",
    Name: "Troy Richardson",
    Email: "tar37@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "PHIL 6010",
    Title: "Greek Philosophical Texts",
    Name: "Tad Brennan",
    Email: "trb64@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "PHIL 6020",
    Title: "Latin Philosophical Texts",
    Name: "",
    Email: ""
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "PHIL 6030",
    Title: "German Philosophical Texts",
    Name: "M. Kosch",
    Email: "mak229@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "PHIL 6100",
    Title: "Pro Seminar in Philosophy",
    Name: "Nicholas Silins",
    Email: "ns338@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "PHIL 6204",
    Title: "Hellenistic Philosophy",
    Name: "Tad Brennan",
    Email: "trb64@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "PHIL 6220",
    Title: "Topics in Modern Philosophy",
    Name: "M. Kosch",
    Email: "mak229@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "PHIL 6311",
    Title: "Topics in Logic and the Foundations of Mathematics",
    Name: "James Walsh",
    Email: "jw2682@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "PHIL 6410",
    Title: "Seminar in Ethics and Value Theory",
    Name: "Kate Manne",
    Email: "kam468@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "PHIL 6610",
    Title: "Topics in Epistemology",
    Name: "Alexander Kocurek",
    Email: "awk78@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "PHIL 6611",
    Title: "Topics in Action Theory",
    Name: "David Shoemaker",
    Email: "dws267@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "PHIL 6713",
    Title: "Philosophy of Language",
    Name: "William Starr",
    Email: "wbs56@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "PHIL 6730",
    Title: "Semantics I",
    Name: "Dorit Abusch",
    Email: "da45@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "PHIL 6740",
    Title: "Semantics Seminar",
    Name: "Dorit Abusch",
    Email: "da45@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "PHIL 6922",
    Title: "Foundations of the Social Sciences",
    Name: "Richard Bensel",
    Email: "rfb2@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "PHIL 6941",
    Title: "Locke and the Philosophies of Dispossession: Indigenous America's Interruptions and Resistances",
    Name: "Troy Richardson",
    Email: "tar37@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "PHIL 7000",
    Title: "Informal Study",
    Name: "Karolina Hubner",
    Email: "kh753@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "PHIL 7900",
    Title: "Placement Seminar",
    Name: "Julia Markovits",
    Email: "jm2476@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "PHYS 1012",
    Title: "Physics 1112 Supplement",
    Name: "Jim Baker",
    Email: "jeb94@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "PHYS 1013",
    Title: "Physics 2213 Supplement",
    Name: "Jim Baker",
    Email: "jeb94@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "PHYS 1101",
    Title: "General Physics I",
    Name: "Nicholas Taylor",
    Email: "nwt2@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "PHYS 1110",
    Title: "Introduction to Experimental Physics",
    Name: "Natasha Holmes",
    Email: "ngh35@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "PHYS 1112",
    Title: "Physics I: Mechanics and Heat",
    Name: "Philip Krasicky",
    Email: "pdk4@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "PHYS 1116",
    Title: "Physics I: Mechanics and Special Relativity",
    Name: "Jared Maxson",
    Email: "jmm586@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "PHYS 1190",
    Title: "Introductory Laboratory (Transfer Supplement)",
    Name: "",
    Email: ""
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "PHYS 1201",
    Title: "Why the Sky Is Blue: Aspects of the Physical World",
    Name: "Itai Cohen",
    Email: "ic64@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "PHYS 2207",
    Title: "Fundamentals of Physics I",
    Name: "Erich Mueller",
    Email: "em256@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "PHYS 2210",
    Title: "Exploring Experimental Physics",
    Name: "Natasha Holmes",
    Email: "ngh35@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "PHYS 2213",
    Title: "Physics II: Electromagnetism",
    Name: "Alan Giambattista",
    Email: "agg1@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "PHYS 2214",
    Title: "Physics III: Oscillations, Waves, and Quantum Physics",
    Name: "Glenn Case",
    Email: "gsc11@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "PHYS 2216",
    Title: "Introduction to Special Relativity",
    Name: "Robert Fulbright",
    Email: "rmf14@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "PHYS 2217",
    Title: "Physics II: Electricity and Magnetism",
    Name: "Abigail Crites",
    Email: "atc72@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "PHYS 2218",
    Title: "Physics III: Waves and Thermal Physics",
    Name: "Peter Wittich",
    Email: "pw94@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "PHYS 3310",
    Title: "Intermediate Experimental Physics",
    Name: "Carl Franck",
    Email: "cpf1@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "PHYS 3316",
    Title: "Basics of Quantum Mechanics",
    Name: "Andre Leclair",
    Email: "arl4@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "PHYS 3317",
    Title: "Applications of Quantum Mechanics",
    Name: "Yuval Grossman",
    Email: "yg73@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "PHYS 3327",
    Title: "Advanced Electricity and Magnetism",
    Name: "Lawrence Gibbons",
    Email: "lkg5@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "PHYS 3360",
    Title: "Electronic Circuits",
    Name: "Georg Hoffstaetter",
    Email: "gh77@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "PHYS 4230",
    Title: "Statistical Thermodynamics",
    Name: "Bruce Kusse",
    Email: "brk2@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "PHYS 4400",
    Title: "Informal Advanced Laboratory",
    Name: "Katja Nowack",
    Email: "kcn34@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "PHYS 4410",
    Title: "Advanced Experimental Physics",
    Name: "Katja Nowack",
    Email: "kcn34@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "PHYS 4445",
    Title: "Introduction to General Relativity",
    Name: "Eanna Flanagan",
    Email: "eef3@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "PHYS 4454",
    Title: "Introductory Solid State Physics",
    Name: "David Muller",
    Email: "dm24@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "PHYS 4480",
    Title: "Computational Physics",
    Name: "Tomas Arias",
    Email: "taa2@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "PHYS 4481",
    Title: "Quantum Information Processing",
    Name: "Paul Ginsparg",
    Email: "phg5@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "PHYS 4484",
    Title: "Teaching and Learning Physics",
    Name: "Erik Herman",
    Email: "eah229@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "PHYS 4485",
    Title: "Teaching Experience I",
    Name: "Jim Baker",
    Email: "jeb94@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "PHYS 4486",
    Title: "Teaching Experience II",
    Name: "Nicholas Taylor",
    Email: "nwt2@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "PHYS 4487",
    Title: "Teaching Experience III",
    Name: "Nicholas Taylor",
    Email: "nwt2@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "PHYS 4490",
    Title: "Independent Study in Physics",
    Name: "Jim Alexander",
    Email: "jpa6@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "PHYS 4498",
    Title: "Senior Thesis",
    Name: "Jim Alexander",
    Email: "jpa6@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "PHYS 4500",
    Title: "Cultivating Public Engagement in Physics",
    Name: "Erik Herman",
    Email: "eah229@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "PHYS 6500",
    Title: "Informal Graduate Laboratory",
    Name: "Katja Nowack",
    Email: "kcn34@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "PHYS 6510",
    Title: "Advanced Experimental Physics",
    Name: "Katja Nowack",
    Email: "kcn34@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "PHYS 6520",
    Title: "Projects in Experimental Physics",
    Name: "",
    Email: ""
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "PHYS 6525",
    Title: "Physics of Black Holes, White Dwarfs, and Neutron Stars",
    Name: "Dong Lai",
    Email: "dl57@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "PHYS 6553",
    Title: "General Relativity I",
    Name: "Thomas Hartman",
    Email: "th447@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "PHYS 6561",
    Title: "Classical Electrodynamics",
    Name: "Michael Niemack",
    Email: "mdn49@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "PHYS 6572",
    Title: "Quantum Mechanics I",
    Name: "Kin Fai Mak",
    Email: "km627@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "PHYS 6599",
    Title: "Cosmology",
    Name: "Nicholas Battaglia",
    Email: "nb572@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "PHYS 7601",
    Title: "Foundations of Fluid Mechanics I",
    Name: "Olivier Desjardins",
    Email: "od57@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "PHYS 7635",
    Title: "Solid-State Physics I",
    Name: "Brad Ramshaw",
    Email: "bjr228@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "PHYS 7651",
    Title: "Relativistic Quantum Field Theory I",
    Name: "Maxim Perelstein",
    Email: "mp325@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "PHYS 7653",
    Title: "Statistical Physics II",
    Name: "Chaoming Jian",
    Email: "cj398@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "PHYS 7680",
    Title: "Computational Physics",
    Name: "Tomas Arias",
    Email: "taa2@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "PHYS 7681",
    Title: "Quantum Information Processing",
    Name: "Paul Ginsparg",
    Email: "phg5@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "PHYS 7684",
    Title: "Teaching and Learning Physics",
    Name: "Erik Herman",
    Email: "eah229@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "PHYS 7685",
    Title: "Special Topics in Physics",
    Name: "Matthias Liepe",
    Email: "mul2@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "PHYS 7690",
    Title: "Independent Study in Physics",
    Name: "Cyrus Umrigar",
    Email: "cju1@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "PLBIO 1560",
    Title: "Application of CHEM 1560 to Plant Sciences",
    Name: "Laura Gunn",
    Email: "lhg42@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "PLBIO 2100",
    Title: "Medical Ethnobotany",
    Name: "Giulia Friso",
    Email: "gf32@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "PLBIO 2400",
    Title: "Green World, Blue Planet",
    Name: "Tom Silva",
    Email: "ts21@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "PLBIO 2410",
    Title: "Introductory Plant Diversity and Evolution",
    Name: "Margaret Frank",
    Email: "mhf47@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "PLBIO 2480",
    Title: "Vascular Plant Systematics",
    Name: "Joyce Onyenedum",
    Email: "jgc235@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "PLBIO 3100",
    Title: "Medicinal Botany and Drug Discovery",
    Name: "Giulia Friso",
    Email: "gf32@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "PLBIO 3440",
    Title: "Evolutionary Plant Biology",
    Name: "Wojtek Pawlowski",
    Email: "wp45@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "PLBIO 3450",
    Title: "Basic Plant Anatomy",
    Name: "Maria Gandolfo Nixon",
    Email: "mag4@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "PLBIO 5450",
    Title: "Basic Plant Anatomy",
    Name: "Maria Gandolfo Nixon",
    Email: "mag4@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "PLBIO 6410",
    Title: "Laboratory in Plant Molecular Biology",
    Name: "Klaas Van Wijk",
    Email: "kv35@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "PLBIO 6560",
    Title: "Topics in Plant Evolution",
    Name: "William Crepet",
    Email: "wlc1@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "PLBIO 6831",
    Title: "Concepts and Techniques in Plant Molecular Biology",
    Name: "Jeffrey Doyle",
    Email: "jjd5@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "PLBIO 7420",
    Title: "Current Papers in Plant Biology",
    Name: "Susheng Gan",
    Email: "sg288@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "PLBIO 7440",
    Title: "Graduate Research in Plant Biology",
    Name: "Jeffrey Doyle",
    Email: "jjd5@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "PLBRG 4030",
    Title: "Genetic Improvement of Crop Plants",
    Name: "Virginia Moore",
    Email: "vm377@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "PLBRG 4070",
    Title: "Nutritional Quality Improvement of Food Crops",
    Name: "Michael Gore",
    Email: "mag87@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "PLBRG 4080",
    Title: "Methods of Plant Breeding Laboratory",
    Name: "Mark Sorrells",
    Email: "mes12@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "PLBRG 6030",
    Title: "Genetic Improvement of Crop Plants",
    Name: "Virginia Moore",
    Email: "vm377@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "PLBRG 6070",
    Title: "Nutritional Quality Improvement of Food Crops",
    Name: "Michael Gore",
    Email: "mag87@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "PLBRG 6080",
    Title: "Methods of Plant Breeding Laboratory",
    Name: "Mark Sorrells",
    Email: "mes12@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "PLBRG 6100",
    Title: "Practicum in Plant Breeding",
    Name: "Walter De Jong",
    Email: "wsd2@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "PLBRG 6500",
    Title: "Special Problems in Research and Teaching",
    Name: "Walter De Jong",
    Email: "wsd2@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "PLHRT 2010",
    Title: "The Art of Horticulture",
    Name: "Emily Detrick",
    Email: "efd46@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "PLHRT 3000",
    Title: "Annual and Perennial Plants in the Landscape",
    Name: "Don Rakow",
    Email: "dr14@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "PLHRT 3025",
    Title: "Hydroponic Food Crop Production and Management",
    Name: "Neil Mattson",
    Email: "nsm47@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "PLHRT 3050",
    Title: "Arboriculture: Applied Tree Care",
    Name: "Taryn Bauerle",
    Email: "tlb33@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "PLHRT 3500",
    Title: "Principles of Vegetable Production",
    Name: "Steve Reiners",
    Email: "sr43@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "PLHRT 4420",
    Title: "Berry Crops: Culture and Management",
    Name: "Marvin Pritts",
    Email: "mpp3@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "PLHRT 4730",
    Title: "Ecology of Agricultural Systems",
    Name: "Laurie Drinkwater",
    Email: "led24@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "PLHRT 4975",
    Title: "Leadership Development for Officers in Plant Science Clubs",
    Name: "Elizabeth Lamb",
    Email: "eml38@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "PLHRT 5000",
    Title: "Annual and Perennial Plants in the Landscape",
    Name: "Don Rakow",
    Email: "dr14@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "PLHRT 5025",
    Title: "Hydroponic Food Crop Production and Management",
    Name: "Neil Mattson",
    Email: "nsm47@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "PLHRT 5500",
    Title: "Principles of Vegetable Production",
    Name: "Steve Reiners",
    Email: "sr43@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "PLHRT 6420",
    Title: "Berry Crops: Culture and Management",
    Name: "Marvin Pritts",
    Email: "mpp3@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "PLHRT 6730",
    Title: "Ecology of Agricultural Systems",
    Name: "Laurie Drinkwater",
    Email: "led24@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "PLPPM 3010",
    Title: "Biology and Management of Plant Diseases",
    Name: "Kerik Cox",
    Email: "kdc33@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "PLPPM 3190",
    Title: "Mushrooms of Field and Forest",
    Name: "Kathie Hodge",
    Email: "kh11@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "PLPPM 4300",
    Title: "Mycology",
    Name: "Teresa Pawlowska",
    Email: "tep8@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "PLPPM 5010",
    Title: "Biology and Management of Plant Diseases",
    Name: "Kerik Cox",
    Email: "kdc33@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "PLPPM 6300",
    Title: "Mycology",
    Name: "Teresa Pawlowska",
    Email: "tep8@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "PLPPM 6490",
    Title: "Current Topics in Fungal Biology",
    Name: "Barbara Turgeon",
    Email: "bgt1@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "PLPPM 6610",
    Title: "Diagnostic Lab Experience",
    Name: "Karen Snover-Clift",
    Email: "kls13@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "PLPPM 6820",
    Title: "Graduate Student Research Updates",
    Name: "Kerik Cox",
    Email: "kdc33@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "PLPPM 7000",
    Title: "Seminars in Plant Pathology and Plant-Microbe Biology",
    Name: "Awais Khan",
    Email: "mak427@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "PLSCI 1101",
    Title: "Plant Science and Systems",
    Name: "William Miller",
    Email: "wbm8@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "PLSCI 1110",
    Title: "Explorations in the Plant Sciences: Pathways to Success",
    Name: "Leah Cook",
    Email: "lcc2@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "PLSCI 1125",
    Title: "Nature Rx",
    Name: "Don Rakow",
    Email: "dr14@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "PLSCI 1300",
    Title: "Just Food: Exploring the Modern Food System",
    Name: "Rachel Bezner Kerr",
    Email: "rnb5@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "PLSCI 2260",
    Title: "Practicum in Forest Farming as an Agroforestry System",
    Name: "Kenneth Mudge",
    Email: "kwm2@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "PLSCI 2990",
    Title: "Introduction to Research Methods in Plant Science",
    Name: "",
    Email: ""
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "PLSCI 3030",
    Title: "FoodCycle: Systems Thinking Toward Circular Economy for Organic Resources",
    Name: "Rebecca Nelson",
    Email: "rjn7@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "PLSCI 4125",
    Title: "Cover Crops in Agroecosystems",
    Name: "Matthew Ryan",
    Email: "mrr232@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "PLSCI 4900",
    Title: "Reflection on Plant Sciences Experiential Learning",
    Name: "",
    Email: ""
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "PLSCI 4925",
    Title: "Plant Sciences Senior Portfolio",
    Name: "",
    Email: ""
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "PLSCI 4960",
    Title: "Undergraduate Internship in Plant Sciences",
    Name: "",
    Email: ""
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "PLSCI 4970",
    Title: "Individual Study in Plant Sciences",
    Name: "",
    Email: ""
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "PLSCI 4975",
    Title: "Leadership through Peer Mentoring in the Plant Sciences",
    Name: "Leah Cook",
    Email: "lcc2@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "PLSCI 4980",
    Title: "Undergraduate Teaching Experience in Plant Sciences",
    Name: "",
    Email: ""
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "PLSCI 4990",
    Title: "Independent Undergraduate Research in Plant Science",
    Name: "",
    Email: ""
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "PLSCI 5015",
    Title: "Hemp Production Systems",
    Name: "Heather Grab",
    Email: "hlc66@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "PLSCI 5190",
    Title: "Cannabis: Biology, Society and Industry",
    Name: "Carlyn Buckler",
    Email: "csb36@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "PLSCI 5500",
    Title: "Cultivating Community through Self-discovery and Skill Development",
    Name: "Heather Grab",
    Email: "hlc66@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "PLSCI 6125",
    Title: "Cover Crops in Agroecosystems",
    Name: "Matthew Ryan",
    Email: "mrr232@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "PLSCI 6440",
    Title: "Digital Plant Science: Frontiers and Challenges",
    Name: "Michael Scanlon",
    Email: "mjs298@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "PLSCI 6900",
    Title: "Graduate Individual Study",
    Name: "Mark Bridgen",
    Email: "mpb27@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "PLSCI 7000",
    Title: "School of Integrative Plant Science Seminars",
    Name: "Carlyn Buckler",
    Email: "csb36@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "PLSCI 7201",
    Title: "Advanced Statistics and Experimental Design",
    Name: "Kelly Robbins",
    Email: "krr73@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "PLSCI 7202",
    Title: "Applications of Machine Learning to Plant Science",
    Name: "Christopher De Sa",
    Email: "cmd353@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "PLSCI 7203",
    Title: "Engineering Novel Strategies for Plant Science Measurement and Sensing",
    Name: "Adrienne Roeder",
    Email: "ahr75@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "PLSCI 7980",
    Title: "Graduate Teaching Experience in Plant Sciences",
    Name: "Kerik Cox",
    Email: "kdc33@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "PLSCI 8900",
    Title: "Master of Science Thesis Research",
    Name: "Taryn Bauerle",
    Email: "tlb33@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "PLSCI 9900",
    Title: "PhD Dissertation Research",
    Name: "Taryn Bauerle",
    Email: "tlb33@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "PLSCS 1120",
    Title: "Microbes, the Earth, and Everything",
    Name: "Daniel Buckley",
    Email: "dhb28@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "PLSCS 1900",
    Title: "Sustainable Agriculture: Food, Farming, and the Future",
    Name: "Matthew Ryan",
    Email: "mrr232@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "PLSCS 2110",
    Title: "Field Crop Systems",
    Name: "Tim Setter",
    Email: "tls1@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "PLSCS 2200",
    Title: "Introduction to Mapping and Spatial Analysis with GIS",
    Name: "Diana Sinton",
    Email: "dss326@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "PLSCS 2600",
    Title: "Soil Science",
    Name: "Jonathan Russell-Anelli",
    Email: "jmr5@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "PLSCS 2940",
    Title: "Introduction to Agricultural Machinery",
    Name: "Antonio DiTommaso",
    Email: "ad97@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "PLSCS 3150",
    Title: "Weed Biology and Management",
    Name: "Antonio DiTommaso",
    Email: "ad97@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "PLSCS 3210",
    Title: "Soil and Crop Management for Sustainability",
    Name: "Harold Van Es",
    Email: "hmv1@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "PLSCS 3630",
    Title: "Soil Genesis, Classification, and Survey",
    Name: "Jonathan Russell-Anelli",
    Email: "jmr5@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "PLSCS 4140",
    Title: "Global Cropping Systems and Sustainable Development",
    Name: "Andrew McDonald",
    Email: "ajm9@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "PLSCS 4290",
    Title: "Remote Sensing and Modeling for Ecosystems",
    Name: "Ying Sun",
    Email: "ys776@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "PLSCS 4720",
    Title: "Nutrient and Carbon Cycling and Management in Ecosystems",
    Name: "Johannes Lehmann",
    Email: "cl273@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "PLSCS 5110",
    Title: "Field Crop Systems",
    Name: "Tim Setter",
    Email: "tls1@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "PLSCS 5140",
    Title: "Global Cropping Systems and Sustainable Development",
    Name: "Andrew McDonald",
    Email: "ajm9@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "PLSCS 5150",
    Title: "Weed Biology and Management",
    Name: "Antonio DiTommaso",
    Email: "ad97@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "PLSCS 5210",
    Title: "Soil and Crop Management for Sustainability",
    Name: "Harold Van Es",
    Email: "hmv1@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "PLSCS 5290",
    Title: "Remote Sensing and Modeling for Ecosystems",
    Name: "Ying Sun",
    Email: "ys776@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "PLSCS 5600",
    Title: "Soil Science",
    Name: "Jonathan Russell-Anelli",
    Email: "jmr5@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "PLSCS 6720",
    Title: "Nutrient and Carbon Cycling and Management in Ecosystems",
    Name: "Johannes Lehmann",
    Email: "cl273@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "PMA 1410",
    Title: "Media Production Laboratory",
    Name: "",
    Email: ""
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "PMA 1610",
    Title: "Production Technology Laboratory",
    Name: "Sarah Bernstein",
    Email: "seb57@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "PMA 1611",
    Title: "Rehearsal and Performance",
    Name: "P. Suber",
    Email: "pbs6@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "PMA 2000",
    Title: "Media Studies Minor Colloquium",
    Name: "Roger Moseley",
    Email: "rsm253@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "PMA 2300",
    Title: "Beginning Dance Composition",
    Name: "Miles Yeung-Tieu",
    Email: "mey26@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "PMA 2465",
    Title: "Korean Popular Culture",
    Name: "Ivanna Yi",
    Email: "isy4@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "PMA 2540",
    Title: "Introduction to Film Analysis: Meaning and Value",
    Name: "Jessica Bardsley",
    Email: "jb2368@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "PMA 2610",
    Title: "Production Crew Laboratory",
    Name: "Sarah Bernstein",
    Email: "seb57@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "PMA 2611",
    Title: "Stage Management Laboratory",
    Name: "",
    Email: ""
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "PMA 2633",
    Title: "Music as Drama: An Introduction to Opera",
    Name: "Elizabeth Lyon",
    Email: "ell67@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "PMA 2670",
    Title: "Shakespeare",
    Name: "Philip Lorenz",
    Email: "pal37@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "PMA 2800",
    Title: "Introduction to Acting",
    Name: "Carolyn Goelzer",
    Email: "cjg54@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "PMA 3000",
    Title: "Independent Study",
    Name: "Jason Simms",
    Email: "jbs457@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "PMA 3210",
    Title: "Dance Technique III - Classical",
    Name: "P. Suber",
    Email: "pbs6@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "PMA 3214",
    Title: "Dance in America: Cultures, Identities, and Fabrication",
    Name: "Juan Aldape Munoz",
    Email: "jma377@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "PMA 3220",
    Title: "Dance Technique III - Modern",
    Name: "Miles Yeung-Tieu",
    Email: "mey26@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "PMA 3225",
    Title: "Mapping the Moving Body I",
    Name: "Miles Yeung-Tieu",
    Email: "mey26@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "PMA 3227",
    Title: "Global Dance II",
    Name: "P. Suber",
    Email: "pbs6@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "PMA 3300",
    Title: "Intermediate Dance Composition I",
    Name: "Miles Yeung-Tieu",
    Email: "mey26@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "PMA 3351",
    Title: "Transpositioning the Body I",
    Name: "P. Suber",
    Email: "pbs6@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "PMA 3510",
    Title: "Documentary Production Fundamentals",
    Name: "Natasha Raheja",
    Email: "nr446@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "PMA 3531",
    Title: "Screenwriting",
    Name: "Daniel Pfeffer",
    Email: "dfp42@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "PMA 3550",
    Title: "Global Cinema I",
    Name: "Sabine Haenni",
    Email: "sh322@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "PMA 3570",
    Title: "Film and Video Production I",
    Name: "Daniel Pfeffer",
    Email: "dfp42@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "PMA 3572",
    Title: "Environmental Film Production",
    Name: "Jessica Bardsley",
    Email: "jb2368@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "PMA 3610",
    Title: "Creative Apprenticeship",
    Name: "",
    Email: ""
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "PMA 3614",
    Title: "Creative Character Design",
    Name: "Sarah Bernstein",
    Email: "seb57@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "PMA 3630",
    Title: "Scenic and Lighting Design for Performance Studio I",
    Name: "Jason Simms",
    Email: "jbs457@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "PMA 3633",
    Title: "Out of Body Performance: Puppets and Animation",
    Name: "Jason Simms",
    Email: "jbs457@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "PMA 3661",
    Title: "Costume Design Studio II",
    Name: "Sarah Bernstein",
    Email: "seb57@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "PMA 3680",
    Title: "Sound Design",
    Name: "Warren Cross",
    Email: "wdc4@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "PMA 3740",
    Title: "Parody",
    Name: "Nick Salvato",
    Email: "ngs9@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "PMA 3750",
    Title: "Global Stages I",
    Name: "J Gainor",
    Email: "jeg11@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "PMA 3755",
    Title: "Staging Gay and Transgender Histories",
    Name: "Sara Warner",
    Email: "slw42@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "PMA 3757",
    Title: "American Drama and Theatre",
    Name: "Sara Warner",
    Email: "slw42@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "PMA 3800",
    Title: "Acting II",
    Name: "Carolyn Goelzer",
    Email: "cjg54@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "PMA 3805",
    Title: "Playwriting I",
    Name: "Aoise Stratford",
    Email: "aas68@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "PMA 3815",
    Title: "Acting in Public: Performance in Everyday Life",
    Name: "David Feldshuh",
    Email: "dmf6@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "PMA 3880",
    Title: "Fundamentals of Directing I",
    Name: "David Feldshuh",
    Email: "dmf6@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "PMA 4000",
    Title: "Senior Studio",
    Name: "Beth Milles",
    Email: "bfm6@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "PMA 4222",
    Title: "Advanced Dance Technique",
    Name: "P. Suber",
    Email: "pbs6@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "PMA 4225",
    Title: "Mapping the Moving Body II",
    Name: "Miles Yeung-Tieu",
    Email: "mey26@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "PMA 4230",
    Title: "Pre-Professional Technique and Repertory",
    Name: "P. Suber",
    Email: "pbs6@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "PMA 4300",
    Title: "Advanced Dance Composition I",
    Name: "Miles Yeung-Tieu",
    Email: "mey26@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "PMA 4351",
    Title: "Transpositioning the Body II",
    Name: "P. Suber",
    Email: "pbs6@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "PMA 4451",
    Title: "Gender and Sexuality in Southeast Asian Cinema",
    Name: "Arnika Fuhrmann",
    Email: "aif32@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "PMA 4675",
    Title: "Shakespeare in (Con)text",
    Name: "Bruce Levitt",
    Email: "bal5@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "PMA 4681",
    Title: "Cages and Creativity: Arts in Incarceration",
    Name: "Bruce Levitt",
    Email: "bal5@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "PMA 4740",
    Title: "Fictions of Dictatorship",
    Name: "Christine Balance",
    Email: "cbb84@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "PMA 4801",
    Title: "Advanced Studies in Acting Techniques",
    Name: "Theo Black",
    Email: "tb353@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "PMA 4821",
    Title: "The Politics of Movement: Bodies, Space, and Motion",
    Name: "Juan Aldape Munoz",
    Email: "jma377@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "PMA 4950",
    Title: "Honors Research Tutorial I",
    Name: "Austin Bunn",
    Email: "ab2346@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "PMA 4951",
    Title: "Honors Research Tutorial II",
    Name: "David Feldshuh",
    Email: "dmf6@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "PMA 4952",
    Title: "Undergraduate Internship",
    Name: "Sabine Haenni",
    Email: "sh322@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "PMA 6510",
    Title: "Documentary Production Fundamentals",
    Name: "Natasha Raheja",
    Email: "nr446@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "PMA 6550",
    Title: "Global Cinema I",
    Name: "Sabine Haenni",
    Email: "sh322@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "PMA 6600",
    Title: "Proseminar in Performing and Media Arts",
    Name: "Nick Salvato",
    Email: "ngs9@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "PMA 6611",
    Title: "Minoritarian Aesthetics In-And Performance",
    Name: "Karen Jaime",
    Email: "kj12@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "PMA 6755",
    Title: "Staging Gay and Transgender Histories",
    Name: "Sara Warner",
    Email: "slw42@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "PMA 6821",
    Title: "The Politics of Movement: Bodies, Space, and Motion",
    Name: "Juan Aldape Munoz",
    Email: "jma377@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "PMA 6920",
    Title: "Aesthetics and Politics of Touch",
    Name: "Timothy Murray",
    Email: "tcm1@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "PMA 7000",
    Title: "Independent Study for Graduate Students in Theatre",
    Name: "Bruce Levitt",
    Email: "bal5@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "PMA 7100",
    Title: "The Pedagogy of Performing and Media Arts",
    Name: "J Gainor",
    Email: "jeg11@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "PMA 9900",
    Title: "Thesis and Research Projects",
    Name: "Nick Salvato",
    Email: "ngs9@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "POLSH 1131",
    Title: "Elementary Polish I",
    Name: "Ewa Bachminska",
    Email: "eb583@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "POLSH 2103",
    Title: "Advanced Polish I",
    Name: "Ewa Bachminska",
    Email: "eb583@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "PORT 1210",
    Title: "Elementary Portuguese I",
    Name: "Denise Osborne",
    Email: "dmo67@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "PORT 2010",
    Title: "Intermediate Portuguese for Spanish Speakers I",
    Name: "Denise Osborne",
    Email: "dmo67@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "PORT 2500",
    Title: "Intro to Lusophone Cultures",
    Name: "",
    Email: ""
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "PORT 3100",
    Title: "Advanced Portuguese I",
    Name: "Denise Osborne",
    Email: "dmo67@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "PSYCH 1101",
    Title: "Introduction to Psychology",
    Name: "Parnia Haj-Mohamadi",
    Email: "ph472@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "PSYCH 1500",
    Title: "Introduction to Environmental Psychology",
    Name: "Gary Evans",
    Email: "gwe1@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "PSYCH 1501",
    Title: "Introduction to Environmental Psychology - Writing in the Major",
    Name: "Gary Evans",
    Email: "gwe1@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "PSYCH 2230",
    Title: "Intro to Behavioral Neuroscience",
    Name: "Tim Devoogd",
    Email: "tjd5@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "PSYCH 2350",
    Title: "Multilingualism and Multiculturalism in Early Childhood",
    Name: "Yarden Kedar",
    Email: "yek2@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "PSYCH 2415",
    Title: "Introduction to Moral Psychology",
    Name: "Shaun Nichols",
    Email: "sbn44@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "PSYCH 2500",
    Title: "Statistics and Research Design",
    Name: "Thomas Cleland",
    Email: "tac29@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "PSYCH 2650",
    Title: "Psychology and Law",
    Name: "Valerie Hans",
    Email: "vh42@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "PSYCH 2800",
    Title: "Introduction to Social Psychology",
    Name: "Tom Gilovich",
    Email: "tdg1@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "PSYCH 2801",
    Title: "Introduction to Social Psychology: Writing in the Majors",
    Name: "",
    Email: ""
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "PSYCH 2820",
    Title: "Community Outreach",
    Name: "Harry Segal",
    Email: "hgs2@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "PSYCH 2830",
    Title: "Research Methods in Human Development",
    Name: "Lauren Korfine",
    Email: "lk79@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "PSYCH 3190",
    Title: "Memory and the Law",
    Name: "Charles Brainerd",
    Email: "cb299@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "PSYCH 3220",
    Title: "Hormones and Behavior",
    Name: "Alexander Ophir",
    Email: "ago25@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "PSYCH 3240",
    Title: "Behavioral Neuroscience Laboratory",
    Name: "David Smith",
    Email: "dms248@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "PSYCH 3270",
    Title: "Field Practicum I",
    Name: "Harry Segal",
    Email: "hgs2@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "PSYCH 3300",
    Title: "Introduction to Computational Neuroscience",
    Name: "Christiane Linster",
    Email: "cl243@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "PSYCH 3310",
    Title: "Developmental Psychopathology",
    Name: "Jane Mendle",
    Email: "jem482@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "PSYCH 3820",
    Title: "Prejudice and Stereotyping",
    Name: "Amy Krosch",
    Email: "ark256@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "PSYCH 4180",
    Title: "Psychology of Music",
    Name: "Carol Krumhansl",
    Email: "clk4@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "PSYCH 4270",
    Title: "Evolution of Language",
    Name: "Morten Christiansen",
    Email: "mhc27@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "PSYCH 4320",
    Title: "Topics in Cognitive Science",
    Name: "Shimon Edelman",
    Email: "se37@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "PSYCH 4382",
    Title: "Language and Thought",
    Name: "Yarden Kedar",
    Email: "yek2@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "PSYCH 4420",
    Title: "Psych and Ethics of Tech 21st Century",
    Name: "David Field",
    Email: "djf3@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "PSYCH 4500",
    Title: "Psychology at the Sciencenter!",
    Name: "Michael Goldstein",
    Email: "mhg26@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "PSYCH 4550",
    Title: "The Psychology of Wisdom",
    Name: "Robert Sternberg",
    Email: "rjs487@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "PSYCH 4700",
    Title: "Undergraduate Research in Psychology",
    Name: "Jane Mendle",
    Email: "jem482@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "PSYCH 4710",
    Title: "Advanced Undergraduate Research in Psychology",
    Name: "Christiane Linster",
    Email: "cl243@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "PSYCH 6000",
    Title: "General Research Seminar",
    Name: "David Pizarro",
    Email: "dap54@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "PSYCH 6001",
    Title: "Graduate Professionalism Seminar",
    Name: "Alexander Ophir",
    Email: "ago25@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "PSYCH 6210",
    Title: "Behavioral and Brain Sciences",
    Name: "David Field",
    Email: "djf3@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "PSYCH 6270",
    Title: "Evolution of Language",
    Name: "Morten Christiansen",
    Email: "mhc27@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "PSYCH 6271",
    Title: "Topics in Biopsychology",
    Name: "Thomas Cleland",
    Email: "tac29@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "PSYCH 6500",
    Title: "Psychology at the Sciencenter!",
    Name: "Michael Goldstein",
    Email: "mhg26@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "PSYCH 7000",
    Title: "Research in Biopsychology",
    Name: "Thomas Cleland",
    Email: "tac29@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "PSYCH 7100",
    Title: "Research in Human Experimental Psychology",
    Name: "Morten Christiansen",
    Email: "mhc27@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "PSYCH 7200",
    Title: "Research in Social Psychology and Personality",
    Name: "Tom Gilovich",
    Email: "tdg1@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "PSYCH 7220",
    Title: "Hormones and Behavior",
    Name: "Alexander Ophir",
    Email: "ago25@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "PSYCH 7750",
    Title: "Proseminar in Social Psychology I",
    Name: "Tom Gilovich",
    Email: "tdg1@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "PSYCH 9000",
    Title: "Doctoral Thesis Research in Biopsychology",
    Name: "Thomas Cleland",
    Email: "tac29@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "PSYCH 9100",
    Title: "Doctoral Thesis Research in Human Experimental Psychology",
    Name: "James Cutting",
    Email: "jec7@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "PSYCH 9200",
    Title: "Doctoral Thesis Research in Social Psychology and Personality",
    Name: "Tom Gilovich",
    Email: "tdg1@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "PUNJB 1121",
    Title: "Elementary Punjabi I",
    Name: "Angelika Kraemer",
    Email: "ak2573@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "PUNJB 2201",
    Title: "Intermediate Punjabi I",
    Name: "Angelika Kraemer",
    Email: "ak2573@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "QUECH 1210",
    Title: "Elementary Quechua I",
    Name: "Soledad Chango",
    Email: "msc299@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "RELST 1110",
    Title: "Beginning Biblical Hebrew",
    Name: "Lauren Monroe",
    Email: "lm283@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "RELST 2248",
    Title: "Buddhists in the Indian Ocean Arena: Past and Present",
    Name: "Anne Blackburn",
    Email: "amb242@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "RELST 2273",
    Title: "Religion and Ecological Sustainability",
    Name: "Jane-Marie Law",
    Email: "jml16@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "RELST 2630",
    Title: "Religion and Reason",
    Name: "Dean Da Vee",
    Email: "dad356@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "RELST 2655",
    Title: "Introduction to Islamic Civilization",
    Name: "David Powers",
    Email: "dsp4@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "RELST 2722",
    Title: "Of Saints, Poets, and Revolutionaries: Medieval and Modern Iran and Central Asia",
    Name: "Seema Golestaneh",
    Email: "sg2327@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "RELST 2724",
    Title: "Introduction to the Hebrew Bible",
    Name: "Lauren Monroe",
    Email: "lm283@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "RELST 3281",
    Title: "The Bible as Literature",
    Name: "Samantha Zacher",
    Email: "sz66@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "RELST 3536",
    Title: "Religions of Iran",
    Name: "Jason Mokhtarian",
    Email: "jsm467@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "RELST 3618",
    Title: "Islamic History: The Beginnings of Islam: 600-750",
    Name: "David Powers",
    Email: "dsp4@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "RELST 3770",
    Title: "On Practice and Perfection",
    Name: "Cary Howie",
    Email: "csh34@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "RELST 4100",
    Title: "Latin Philosophical Texts",
    Name: "",
    Email: ""
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "RELST 4451",
    Title: "Gender and Sexuality in Southeast Asian Cinema",
    Name: "Arnika Fuhrmann",
    Email: "aif32@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "RELST 4990",
    Title: "Directed Study",
    Name: "",
    Email: ""
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "RELST 4995",
    Title: "Senior Honors Essay I",
    Name: "Chiara Formichi",
    Email: "cf398@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "RELST 4996",
    Title: "Senior Honors Essay II",
    Name: "Chiara Formichi",
    Email: "cf398@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "RELST 6020",
    Title: "Latin Philosophical Texts",
    Name: "",
    Email: ""
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "RELST 6631",
    Title: "Gender and Sexuality in Southeast Asian Cinema",
    Name: "Arnika Fuhrmann",
    Email: "aif32@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "ROMS 3210",
    Title: "History of Romance Languages I",
    Name: "Ti Alkire",
    Email: "eha1@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "ROMS 5080",
    Title: "Pedagogy Practicum",
    Name: "Tomas Bevia",
    Email: "tjb99@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "ROMS 6100",
    Title: "Romance Studies Colloquium",
    Name: "Simone Pinet",
    Email: "sp349@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "ROMS 6310",
    Title: "Design Justice Workshop",
    Name: "Karen Pinkus",
    Email: "kep44@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "ROMS 6650",
    Title: "Revolution: An Intellectual History",
    Name: "Enzo Traverso",
    Email: "vt225@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "RUSSA 1103",
    Title: "Conversation Practice",
    Name: "Raissa Krivitsky",
    Email: "rvk3@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "RUSSA 1121",
    Title: "Elementary Russian through Film",
    Name: "Raissa Krivitsky",
    Email: "rvk3@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "RUSSA 1125",
    Title: "Reading Russian Press",
    Name: "Viktoria Tsimberov",
    Email: "vt13@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "RUSSA 1131",
    Title: "Self-Paced Elementary Russian I",
    Name: "Slava Paperno",
    Email: "sp27@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "RUSSA 2203",
    Title: "Intermediate Composition and Conversation",
    Name: "Raissa Krivitsky",
    Email: "rvk3@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "RUSSA 3300",
    Title: "Directed Studies",
    Name: "Raissa Krivitsky",
    Email: "rvk3@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "RUSSA 3303",
    Title: "Advanced Composition and Conversation",
    Name: "Raissa Krivitsky",
    Email: "rvk3@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "RUSSA 3305",
    Title: "Reading and Writing for Heritage Speakers of Russian",
    Name: "Slava Paperno",
    Email: "sp27@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "RUSSA 3309",
    Title: "Advanced Reading",
    Name: "Viktoria Tsimberov",
    Email: "vt13@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "RUSSA 4413",
    Title: "Modern Russia: Past and Present I",
    Name: "Viktoria Tsimberov",
    Email: "vt13@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "RUSSA 4491",
    Title: "Reading Course: Russian Literature in the Original Language",
    Name: "Viktoria Tsimberov",
    Email: "vt13@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "RUSSA 6633",
    Title: "Russian for Russian Specialists",
    Name: "Slava Paperno",
    Email: "sp27@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "RUSSL 2001",
    Title: "Russian Jews and Jewish Russians in Literature and Film",
    Name: "Raissa Krivitsky",
    Email: "rvk3@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "RUSSL 3331",
    Title: "Introduction to Russian Poetry",
    Name: "Nancy Pollak",
    Email: "np27@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "RUSSL 4492",
    Title: "Supervised Reading in Russian Literature",
    Name: "Viktoria Tsimberov",
    Email: "vt13@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "SANSK 1131",
    Title: "Elementary Sanskrit I",
    Name: "Todd Clary",
    Email: "tcc24@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "SANSK 2251",
    Title: "Intermediate Sanskrit I",
    Name: "Lawrence McCrea",
    Email: "ljm223@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "SANSK 3301",
    Title: "Advanced Sanskrit I",
    Name: "Lawrence McCrea",
    Email: "ljm223@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "SHUM 1100",
    Title: "Art Histories: An Introduction",
    Name: "Benjamin Anderson",
    Email: "bwa32@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "SHUM 1340",
    Title: "Soundscapes of Social Protest",
    Name: "Bamba Ndiaye",
    Email: "can74@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "SHUM 1615",
    Title: "Introduction to Ancient Rome",
    Name: "Michael Fontaine",
    Email: "mf268@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "SHUM 1900",
    Title: "Global Engagements: Living and Working in a Diverse World",
    Name: "Sofia Villenas",
    Email: "sav33@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "SHUM 2101",
    Title: "South Asian Diaspora",
    Name: "Viranjini Munasinghe",
    Email: "vpm1@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "SHUM 2208",
    Title: "Introduction to Southeast Asia",
    Name: "Chiara Formichi",
    Email: "cf398@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "SHUM 2437",
    Title: "Economy, Power, and Inequality",
    Name: "Marina Welker",
    Email: "maw82@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "SHUM 2455",
    Title: "Introduction to Bioethics",
    Name: "Julia Markovits",
    Email: "jm2476@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "SHUM 2542",
    Title: "The Making of Contemporary Africa",
    Name: "Judith Byfield",
    Email: "jab632@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "SHUM 2650",
    Title: "Introduction to African American Literature",
    Name: "Derrick Spires",
    Email: "drs385@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "SHUM 2750",
    Title: "Introduction to Humanities",
    Name: "Durba Ghosh",
    Email: "dg256@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "SHUM 2754",
    Title: "Wondrous Literatures of the Near East",
    Name: "Deborah Starr",
    Email: "das86@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "SHUM 3075",
    Title: "Print Matters",
    Name: "Douglas McBride",
    Email: "dbm93@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "SHUM 3434",
    Title: "Underground Railroad Seminar",
    Name: "Gerard Aching",
    Email: "gla23@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "SHUM 3707",
    Title: "Race and Sex: Arabian Nights",
    Name: "Parisa Vaziri",
    Email: "pv248@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "SHUM 3778",
    Title: "Free Speech, Censorship, and the Age of Global Media",
    Name: "Rayna Kalas",
    Email: "rmk45@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "SHUM 4040",
    Title: "Fictions of Dictatorship",
    Name: "Christine Balance",
    Email: "cbb84@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "SHUM 4200",
    Title: "Field Methods in Community-Engaged Archaeology",
    Name: "Samantha Sanft",
    Email: "sms625@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "SHUM 4540",
    Title: "Fascism, Nationalism and Populism",
    Name: "Mabel Berezin",
    Email: "mmb39@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "SHUM 4673",
    Title: "The Kinship of Repair: Asian and Asian American Artists in Collaboration",
    Name: "",
    Email: ""
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "SHUM 4674",
    Title: "Dispossession, Truth, and Reconciliation",
    Name: "Jon Parmenter",
    Email: "jwp35@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "SHUM 4675",
    Title: "Pandemics Past and Pending",
    Name: "Juno Parrenas",
    Email: "jsp324@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "SHUM 4676",
    Title: "Lyric Interventions: Illness Narratives and the Aesthetics of Repair",
    Name: "",
    Email: ""
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "SHUM 4750",
    Title: "Senior Capstone Seminar for Humanities Scholars",
    Name: "Marty Cain",
    Email: "mmc287@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "SHUM 6200",
    Title: "Field Methods in Community-Engaged Archaeology",
    Name: "Samantha Sanft",
    Email: "sms625@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "SHUM 6308",
    Title: "Design Justice Workshop",
    Name: "Karen Pinkus",
    Email: "kep44@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "SHUM 6673",
    Title: "The Kinship of Repair: Asian and Asian American Artists in Collaboration",
    Name: "",
    Email: ""
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "SHUM 6674",
    Title: "Dispossession, Truth, and Reconciliation",
    Name: "Jon Parmenter",
    Email: "jwp35@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "SHUM 6675",
    Title: "Pandemics Past and Pending",
    Name: "Juno Parrenas",
    Email: "jsp324@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "SHUM 6676",
    Title: "Lyric Interventions: Illness Narratives and the Aesthetics of Repair",
    Name: "",
    Email: ""
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "SINHA 1100",
    Title: "Elements of Sinhala Language and Culture",
    Name: "Bandara Herath",
    Email: "mph82@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "SINHA 1121",
    Title: "Elementary Sinhala I",
    Name: "Bandara Herath",
    Email: "mph82@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "SINHA 2201",
    Title: "Intermediate Sinhala I",
    Name: "Bandara Herath",
    Email: "mph82@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "SINHA 3301",
    Title: "Literary Sinhala I",
    Name: "Bandara Herath",
    Email: "mph82@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "SINHA 4400",
    Title: "Literary Sinhala II",
    Name: "Bandara Herath",
    Email: "mph82@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "SNLIT 6601",
    Title: "Topics in Sanskrit Literature I",
    Name: "Lawrence McCrea",
    Email: "ljm223@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "SOC 1101",
    Title: "Introduction to Sociology",
    Name: "Kendra Bischoff",
    Email: "kb536@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "SOC 1290",
    Title: "American Society through Film",
    Name: "David Strang",
    Email: "ds20@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "SOC 2070",
    Title: "Social Problems in the United States",
    Name: "Peter Rich",
    Email: "pmr86@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "SOC 2090",
    Title: "Networks",
    Name: "David Easley",
    Email: "dae3@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "SOC 2150",
    Title: "Introduction to Organizations",
    Name: "Joseph Sullivan",
    Email: "jfs325@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "SOC 2220",
    Title: "Controversies About Inequality",
    Name: "Joseph Sullivan",
    Email: "jfs325@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "SOC 2810",
    Title: "Migration: Histories, Controversies, and Perspectives",
    Name: "Shannon Gleeson",
    Email: "smg338@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "SOC 3010",
    Title: "Statistics for Sociological Research",
    Name: "Barum Park",
    Email: "bp522@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "SOC 3130",
    Title: "Sociology of Medicine",
    Name: "Christine Leuenberger",
    Email: "cal22@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "SOC 3360",
    Title: "Evolving Families: Challenges to Public Policy",
    Name: "Sharon Sassler",
    Email: "ss589@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "SOC 3710",
    Title: "Comparative Social Inequalities",
    Name: "Parfait Eloundou-Enyegue",
    Email: "pme7@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "SOC 3750",
    Title: "Classical Sociological Theory",
    Name: "Mabel Berezin",
    Email: "mmb39@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "SOC 4010",
    Title: "Diasporic and Indigenous Health",
    Name: "Jerel Ezell",
    Email: "jme246@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "SOC 4370",
    Title: "Sociology of Sex and Gender",
    Name: "Vida Maralani",
    Email: "vm343@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "SOC 4540",
    Title: "Fascism, Nationalism and Populism",
    Name: "Mabel Berezin",
    Email: "mmb39@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "SOC 4910",
    Title: "Independent Study",
    Name: "Mabel Berezin",
    Email: "mmb39@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "SOC 4950",
    Title: "Honors Research",
    Name: "Cristobal Young",
    Email: "cy469@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "SOC 4960",
    Title: "Honors Thesis: Senior Year",
    Name: "Cristobal Young",
    Email: "cy469@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "SOC 5010",
    Title: "Basic Problems in Sociology I",
    Name: "Erin York Cornwell",
    Email: "eyc46@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "SOC 5190",
    Title: "Workshop on Social Inequality",
    Name: "Kim Weeden",
    Email: "kw74@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "SOC 6000",
    Title: "Doing Research With Marginalized Populations",
    Name: "Jerel Ezell",
    Email: "jme246@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "SOC 6010",
    Title: "Statistics for Sociological Research",
    Name: "Barum Park",
    Email: "bp522@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "SOC 6080",
    Title: "Proseminar in Sociology",
    Name: "Erin York Cornwell",
    Email: "eyc46@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "SOC 6340",
    Title: "Sociology of Education",
    Name: "Kendra Bischoff",
    Email: "kb536@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "SOC 6660",
    Title: "Event History Analysis",
    Name: "David Strang",
    Email: "ds20@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "SOC 6910",
    Title: "Independent Study",
    Name: "Erin York Cornwell",
    Email: "eyc46@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "SOC 8910",
    Title: "Graduate Research",
    Name: "Erin York Cornwell",
    Email: "eyc46@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "SOC 8950",
    Title: "Thesis Research",
    Name: "Michael Macy",
    Email: "mwm14@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "SPAN 1120",
    Title: "Elementary Spanish: Review and Continuation",
    Name: "Brisa Teutli",
    Email: "bt54@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "SPAN 1210",
    Title: "Elementary Spanish I",
    Name: "Emilia Illana Mahiques",
    Email: "ei78@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "SPAN 1230",
    Title: "Continuing Spanish",
    Name: "Federico Giordano Perla",
    Email: "fg287@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "SPAN 1250",
    Title: "Spanish for Heritage Speakers I",
    Name: "Mary Redmond",
    Email: "mkr4@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "SPAN 2000",
    Title: "Spanish for Heritage Speakers",
    Name: "Mary Redmond",
    Email: "mkr4@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "SPAN 2070",
    Title: "Intermediate Spanish for the Medical and Health Professions",
    Name: "Monica Bevia",
    Email: "mjb383@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "SPAN 2090",
    Title: "Intermediate Spanish I (Composition and Conversation)",
    Name: "Nilsa Maldonado-Mendez",
    Email: "nbm4@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "SPAN 2095",
    Title: "Spanish Intermediate Composition and Conversation II",
    Name: "Tomas Bevia",
    Email: "tjb99@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "SPAN 2140",
    Title: "Modern Spanish Survey",
    Name: "Itziar Rodriguez de Rivera",
    Email: "ir224@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "SPAN 2150",
    Title: "Contemporary Latin American Survey",
    Name: "Irina Troconis Gonzalez",
    Email: "irt23@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "SPAN 2170",
    Title: "Early Modern Iberian Survey",
    Name: "Simone Pinet",
    Email: "sp349@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "SPAN 2180",
    Title: "Advanced Spanish Writing Workshop",
    Name: "Macarena Tejada Lopez",
    Email: "mt639@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "SPAN 2230",
    Title: "Perspectives on Spain",
    Name: "Paulo Lorca Fuentealba",
    Email: "pdl59@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "SPAN 2235",
    Title: "Perspectives on Spain in Spanish",
    Name: "Cecelia Lawless",
    Email: "cbl6@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "SPAN 3170",
    Title: "Creative Writing Workshop (in Spanish)",
    Name: "Edmundo Paz-Soldan",
    Email: "jep29@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "SPAN 3445",
    Title: "Resisting Totalitarianism: Art, Literature and Film in Post-1973 Coup Chile",
    Name: "",
    Email: ""
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "SPAN 4190",
    Title: "Special Topics in Spanish Literature",
    Name: "Julia Chang",
    Email: "jhc324@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "SPAN 4290",
    Title: "Honors Work I",
    Name: "Julia Chang",
    Email: "jhc324@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "SPAN 4365",
    Title: "El gran Mexico - Greater Mexico",
    Name: "Debra Castillo",
    Email: "dac9@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "SPAN 4735",
    Title: "Cultures of the Digital in Latin America",
    Name: "Irina Troconis Gonzalez",
    Email: "irt23@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "SPAN 4820",
    Title: "Latin American Film",
    Name: "",
    Email: ""
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "SPAN 6365",
    Title: "El gran Mexico/Greater Mexico",
    Name: "Debra Castillo",
    Email: "dac9@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "SPAN 6390",
    Title: "Special Topics in Spanish Literature",
    Name: "Julia Chang",
    Email: "jhc324@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "SPAN 6855",
    Title: "Latin American Horror",
    Name: "Liliana Colanzi",
    Email: "lc566@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "STS 1180",
    Title: "Evolution",
    Name: "Andrew Moeller",
    Email: "ahm226@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "STS 1201",
    Title: "Information Ethics, Law, and Policy",
    Name: "Steven Jackson",
    Email: "sjj54@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "STS 2051",
    Title: "Ethical Issues in Health and Medicine",
    Name: "Rachel Prentice",
    Email: "rep35@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "STS 2451",
    Title: "Introduction to Bioethics",
    Name: "Julia Markovits",
    Email: "jm2476@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "STS 2561",
    Title: "Medicine and Healing in China",
    Name: "Tj Hinrichs",
    Email: "th289@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "STS 2641",
    Title: "The Technology of Ancient Rome",
    Name: "Courtney Roby",
    Email: "car295@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "STS 3020",
    Title: "Science Writing for the Media",
    Name: "",
    Email: ""
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "STS 3111",
    Title: "Sociology of Medicine",
    Name: "Christine Leuenberger",
    Email: "cal22@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "STS 3311",
    Title: "Environmental Governance",
    Name: "Steven Wolf",
    Email: "saw44@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "STS 3650",
    Title: "History and Theory of Digital Art",
    Name: "Maria Fernandez",
    Email: "mf252@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "STS 3991",
    Title: "Undergraduate Independent Study",
    Name: "Stephen Hilgartner",
    Email: "shh6@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "STS 4101",
    Title: "The Entangled Lives of Humans and Animals",
    Name: "Rachel Prentice",
    Email: "rep35@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "STS 4240",
    Title: "Designing Technology for Social Impact",
    Name: "Christopher Csikszentmihalyi",
    Email: "cpc83@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "STS 4442",
    Title: "Toxicity",
    Name: "Stacey Langwick",
    Email: "sal54@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "STS 4634",
    Title: "Curating the British Empire",
    Name: "Jessica Ratcliff",
    Email: "jrr47@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "STS 4650",
    Title: "Advanced Topics in Clinical Ethics",
    Name: "Kim Overby",
    Email: "kjo46@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "STS 4675",
    Title: "Pandemics Past and Pending",
    Name: "Juno Parrenas",
    Email: "jsp324@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "STS 4991",
    Title: "Honors Project I",
    Name: "",
    Email: ""
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "STS 6634",
    Title: "Curating the British Empire",
    Name: "Jessica Ratcliff",
    Email: "jrr47@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "STS 6674",
    Title: "Peace and Conflict",
    Name: "Christine Leuenberger",
    Email: "cal22@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "STS 6675",
    Title: "Pandemics Past and Pending",
    Name: "Juno Parrenas",
    Email: "jsp324@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "STS 6991",
    Title: "Graduate Independent Study",
    Name: "Peter Dear",
    Email: "prd3@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "STS 7005",
    Title: "STS Perspectives",
    Name: "Stephen Hilgartner",
    Email: "shh6@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "STS 7111",
    Title: "Introduction to Science and Technology Studies",
    Name: "Malte Ziewitz",
    Email: "mcz35@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "STS 7442",
    Title: "Toxicity",
    Name: "Stacey Langwick",
    Email: "sal54@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "STSCI 2100",
    Title: "Introductory Statistics",
    Name: "",
    Email: ""
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "STSCI 2150",
    Title: "Introductory Statistics for Biology",
    Name: "Melissa Smith",
    Email: "ms429@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "STSCI 2200",
    Title: "Biological Statistics I",
    Name: "Jeremy Entner",
    Email: "jfe35@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "STSCI 3040",
    Title: "R Programming for Data Science",
    Name: "Jeremy Entner",
    Email: "jfe35@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "STSCI 3080",
    Title: "Probability Models and Inference",
    Name: "Florentina Bunea",
    Email: "fb238@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "STSCI 3090",
    Title: "Theory of Interest",
    Name: "Sreyoshi Das",
    Email: "sd878@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "STSCI 3100",
    Title: "Statistical Sampling",
    Name: "Thomas Diciccio",
    Email: "tjd9@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "STSCI 3110",
    Title: "Probability Models and Inference for the Social Sciences",
    Name: "Thomas Diciccio",
    Email: "tjd9@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "STSCI 3600",
    Title: "Integrated Ethics in Data Science",
    Name: "M. Karns",
    Email: "ek368@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "STSCI 4030",
    Title: "Linear Models with Matrices",
    Name: "Dana Yang",
    Email: "xy374@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "STSCI 4090",
    Title: "Theory of Statistics",
    Name: "Marten Wegkamp",
    Email: "mhw73@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "STSCI 4110",
    Title: "Categorical Data",
    Name: "Melissa Smith",
    Email: "ms429@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "STSCI 4630",
    Title: "Operations Research Tools for Financial Engineering",
    Name: "David Ruppert",
    Email: "dr24@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "STSCI 4740",
    Title: "Data Mining and Machine Learning",
    Name: "Yang Ning",
    Email: "yn265@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "STSCI 4950",
    Title: "Statistical Consulting",
    Name: "Sumanta Basu",
    Email: "sb2457@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "STSCI 4970",
    Title: "Undergraduate Supervised Teaching",
    Name: "Melissa Smith",
    Email: "ms429@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "STSCI 4980",
    Title: "Tutorial in Actuarial Statistics",
    Name: "Martin Wells",
    Email: "mtw1@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "STSCI 4990",
    Title: "Undergraduate Individual Study in Statistics",
    Name: "Sumanta Basu",
    Email: "sb2457@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "STSCI 4995",
    Title: "Internship in Data Science",
    Name: "Martin Wells",
    Email: "mtw1@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "STSCI 4999",
    Title: "Undergraduate Dissertation Research",
    Name: "Thomas Diciccio",
    Email: "tjd9@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "STSCI 5010",
    Title: "Applied Statistical Computation with SAS",
    Name: "Xiaolong Yang",
    Email: "xy44@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "STSCI 5030",
    Title: "Linear Models with Matrices",
    Name: "Dana Yang",
    Email: "xy374@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "STSCI 5040",
    Title: "R Programming for Data Science",
    Name: "Jeremy Entner",
    Email: "jfe35@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "STSCI 5060",
    Title: "Database Management and SAS High Performance Computing with DBMS",
    Name: "Xiaolong Yang",
    Email: "xy44@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "STSCI 5080",
    Title: "Probability Models and Inference",
    Name: "Ahmed El Alaoui",
    Email: "ae333@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "STSCI 5090",
    Title: "Theory of Statistics",
    Name: "Marten Wegkamp",
    Email: "mhw73@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "STSCI 5100",
    Title: "Statistical Sampling",
    Name: "Thomas Diciccio",
    Email: "tjd9@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "STSCI 5150",
    Title: "Introductory Statistics for Biology",
    Name: "Melissa Smith",
    Email: "ms429@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "STSCI 5160",
    Title: "Categorical Data",
    Name: "Melissa Smith",
    Email: "ms429@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "STSCI 5200",
    Title: "Biological Statistics I",
    Name: "Jeremy Entner",
    Email: "jfe35@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "STSCI 5600",
    Title: "Integrated Ethics in Data Science",
    Name: "M. Karns",
    Email: "ek368@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "STSCI 5630",
    Title: "Operations Research Tools for Financial Engineering",
    Name: "David Ruppert",
    Email: "dr24@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "STSCI 5740",
    Title: "Data Mining and Machine Learning",
    Name: "Yang Ning",
    Email: "yn265@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "STSCI 5953",
    Title: "MPS Career Management",
    Name: "Anita Scheible",
    Email: "ads342@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "STSCI 5954",
    Title: "Project Development and Professional Communication",
    Name: "Sreyoshi Das",
    Email: "sd878@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "STSCI 5990",
    Title: "Directed Studies in Applied Statistics",
    Name: "Sumanta Basu",
    Email: "sb2457@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "STSCI 5995",
    Title: "Internship in Data Science",
    Name: "Martin Wells",
    Email: "mtw1@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "STSCI 6520",
    Title: "Statistical Computing I",
    Name: "Sumanta Basu",
    Email: "sb2457@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "STSCI 6610",
    Title: "Spatial and Spatial-Temporal Data Analysis",
    Name: "Joe Guinness",
    Email: "jsg342@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "STSCI 6740",
    Title: "Mathematical Statistics II",
    Name: "Michael Nussbaum",
    Email: "mn66@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "STSCI 6940",
    Title: "Graduate Special Topics in Statistics",
    Name: "Y. Samuel Wang",
    Email: "ysw7@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "STSCI 6970",
    Title: "Individual Graduate Study in Statistics",
    Name: "James Booth",
    Email: "jb383@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "STSCI 7170",
    Title: "Theory of Linear Models",
    Name: "James Booth",
    Email: "jb383@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "STSCI 7999",
    Title: "Graduate Level Dissertation Research",
    Name: "James Booth",
    Email: "jb383@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "STSCI 9999",
    Title: "Doctoral Level Dissertation Research",
    Name: "Sumanta Basu",
    Email: "sb2457@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "SWAHL 1100",
    Title: "Elementary Swahili I",
    Name: "Happiness Bulugu",
    Email: "hpb36@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "SWAHL 2101",
    Title: "Intermediate Swahili I",
    Name: "Happiness Bulugu",
    Email: "hpb36@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "SWED 1210",
    Title: "Elementary Swedish I",
    Name: "Emma Britton",
    Email: "erb248@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "SYSEN 1900",
    Title: "Systems Engineering Project for Freshmen",
    Name: "Sirietta Simoncini",
    Email: "ss2583@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "SYSEN 4900",
    Title: "Systems Engineering Project for Undergraduates",
    Name: "Sirietta Simoncini",
    Email: "ss2583@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "SYSEN 5100",
    Title: "Model Based Systems Engineering",
    Name: "David Schneider",
    Email: "drs44@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "SYSEN 5180",
    Title: "Sociotechnical Systems and Policy",
    Name: "Erika Palmer",
    Email: "ekp48@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "SYSEN 5220",
    Title: "Systems Dynamics",
    Name: "Haiyan Deng",
    Email: "hd267@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "SYSEN 5280",
    Title: "Adaptive and Learning Systems",
    Name: "Timothy Sands",
    Email: "tas297@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "SYSEN 5300",
    Title: "Systems Engineering and Six Sigma for the Design and Operation of Reliable Systems",
    Name: "Mohammad Tayarani",
    Email: "mt789@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "SYSEN 5700",
    Title: "Special Topics in Systems Engineering",
    Name: "Sirietta Simoncini",
    Email: "ss2583@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "SYSEN 5800",
    Title: "Computational Optimization",
    Name: "Fengqi You",
    Email: "fy86@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "SYSEN 5830",
    Title: "Astronautic Optimization",
    Name: "Timothy Sands",
    Email: "tas297@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "SYSEN 5900",
    Title: "Systems Engineering Design Project",
    Name: "Sirietta Simoncini",
    Email: "ss2583@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "SYSEN 5920",
    Title: "Systems Engineering Management for Virtual Teams",
    Name: "David Schneider",
    Email: "drs44@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "SYSEN 6000",
    Title: "Foundations of Complex Systems",
    Name: "Oliver Gao",
    Email: "hg55@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "SYSEN 6100",
    Title: "Systems Seminar Series",
    Name: "Oliver Gao",
    Email: "hg55@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "SYSEN 6150",
    Title: "Model Based Systems Engineering",
    Name: "David Schneider",
    Email: "drs44@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "SYSEN 6180",
    Title: "Sociotechnical Systems and Policy",
    Name: "Erika Palmer",
    Email: "ekp48@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "SYSEN 6220",
    Title: "Systems Dynamics",
    Name: "Haiyan Deng",
    Email: "hd267@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "SYSEN 6300",
    Title: "Systems Engineering and Six Sigma for Design and Operation of Reliable Systems",
    Name: "Mohammad Tayarani",
    Email: "mt789@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "SYSEN 6600",
    Title: "Applied Model Based Systems Engineering I",
    Name: "David Schneider",
    Email: "drs44@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "SYSEN 6800",
    Title: "Computational Optimization",
    Name: "Fengqi You",
    Email: "fy86@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "SYSEN 6830",
    Title: "Astronautic Optimization",
    Name: "Timothy Sands",
    Email: "tas297@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "SYSEN 8000",
    Title: "Systems Doctoral Colloquium",
    Name: "C. Anderson",
    Email: "cla28@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "SYSEN 8100",
    Title: "Systems Seminar Series - PhD",
    Name: "Oliver Gao",
    Email: "hg55@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "TAG 1100",
    Title: "Elements of Tagalog-Filipino Language and Culture",
    Name: "Maria Theresa Savella",
    Email: "mts12@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "TAG 1121",
    Title: "Elementary Tagalog-Filipino I",
    Name: "Maria Theresa Savella",
    Email: "mts12@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "TAG 2201",
    Title: "Intermediate Tagalog-Filipino I",
    Name: "Maria Theresa Savella",
    Email: "mts12@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "TAG 3301",
    Title: "Advanced Tagalog-Filipino I",
    Name: "Maria Theresa Savella",
    Email: "mts12@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "TAMIL 1121",
    Title: "Elementary Tamil I",
    Name: "Angelika Kraemer",
    Email: "ak2573@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "TAMIL 4431",
    Title: "Directed Study",
    Name: "Bandara Herath",
    Email: "mph82@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "TECH 5900",
    Title: "Product Studio",
    Name: "Karan Girotra",
    Email: "kg488@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "THAI 1121",
    Title: "Elementary Thai I",
    Name: "Ngampit Jagacinski",
    Email: "nj13@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "THAI 2201",
    Title: "Intermediate Thai I",
    Name: "Ngampit Jagacinski",
    Email: "nj13@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "THAI 3301",
    Title: "Advanced Thai I",
    Name: "Ngampit Jagacinski",
    Email: "nj13@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "THAI 3303",
    Title: "Thai Literature I",
    Name: "Ngampit Jagacinski",
    Email: "nj13@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "THAI 5509",
    Title: "Graduate Studies in Thai",
    Name: "Ngampit Jagacinski",
    Email: "nj13@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "TIBET 1111",
    Title: "Elementary Modern Tibetan I",
    Name: "Angelika Kraemer",
    Email: "ak2573@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "TIBET 1121",
    Title: "Elementary Classical Tibetan I",
    Name: "Angelika Kraemer",
    Email: "ak2573@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "TIBET 2201",
    Title: "Intermediate Classical Tibetan I",
    Name: "Angelika Kraemer",
    Email: "ak2573@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "TIBET 2211",
    Title: "Intermediate Modern Tibetan I",
    Name: "Angelika Kraemer",
    Email: "ak2573@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "TIBET 3301",
    Title: "Advanced Classical Tibetan I",
    Name: "Angelika Kraemer",
    Email: "ak2573@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "TIBET 3311",
    Title: "Advanced Modern Tibetan I",
    Name: "Angelika Kraemer",
    Email: "ak2573@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "TOX 3070",
    Title: "Pesticides, the Environment, and Human Health",
    Name: "Jeffrey Scott",
    Email: "jgs5@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "TOX 7010",
    Title: "Mouse and Stem Cell Pathology",
    Name: "Alexander Nikitin",
    Email: "an58@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "TURK 1330",
    Title: "Elementary Turkish through TV Series I",
    Name: "Banu Ozer-Griffin",
    Email: "bo98@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "TURK 1332",
    Title: "Intermediate Turkish I",
    Name: "Banu Ozer-Griffin",
    Email: "bo98@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "TURK 5509",
    Title: "Graduate Studies in Turkish",
    Name: "Banu Ozer-Griffin",
    Email: "bo98@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "UKRAN 1121",
    Title: "Elementary Ukrainian I",
    Name: "Emma Britton",
    Email: "erb248@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "UKRAN 2133",
    Title: "Intermediate Ukrainian I",
    Name: "Emma Britton",
    Email: "erb248@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "UKRAN 3133",
    Title: "Advanced Ukrainian I",
    Name: "Emma Britton",
    Email: "erb248@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "UNILWYL 1120",
    Title: "Wonder Women",
    Name: "Lori Leonard",
    Email: "ll536@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "UNILWYL 1134",
    Title: "Reel Africa",
    Name: "Siba Grovogui",
    Email: "sng52@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "UNILWYL 1136",
    Title: "Smell, Taste, Eat, Breathe: Chemistry of Everyday Life",
    Name: "Cynthia Kinsland",
    Email: "clk10@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "UNILWYL 1150",
    Title: "Nature Rx",
    Name: "Don Rakow",
    Email: "dr14@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "UNILWYL 1152",
    Title: "How Cornell is Changing the World Through Climate Leadership",
    Name: "Sarah Brylinsky",
    Email: "seb382@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "UNILWYL 1156",
    Title: "Optimizing Your First Year Experience: Queer Identities and Beyond",
    Name: "Claire Menard",
    Email: "cm879@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "UNILWYL 1402",
    Title: "Rose Scholars Program",
    Name: "Rosemary Avery",
    Email: "rja7@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "UNILWYL 1404",
    Title: "Cook Conversations: Bridging Self, Community, and World",
    Name: "Chantal Thomas",
    Email: "ct343@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "UNILWYL 1406",
    Title: "Bethe Ansatz: What Makes a Fulfilled Life",
    Name: "Andrew Hicks",
    Email: "ajh299@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "UNILWYL 1408",
    Title: "Carl Becker Café",
    Name: "Neema Kudva",
    Email: "nk78@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "URDU 2225",
    Title: "Intermediate Urdu Reading and Writing I",
    Name: "Naaz Rizvi",
    Email: "nfr8@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "URDU 3325",
    Title: "Literary Reading and Writing in Advanced Urdu",
    Name: "Naaz Rizvi",
    Email: "nfr8@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "URDU 5509",
    Title: "Graduate Studies in Urdu",
    Name: "",
    Email: ""
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "VETCS 6896",
    Title: "Topics in Pre-Clinical Veterinary Medicine",
    Name: "Cheryl Balkman",
    Email: "ceb11@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "VETCS 7100",
    Title: "Advanced Veterinary Anesthesiology I",
    Name: "Jordyn Boesch",
    Email: "jmb264@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "VETMI 5100",
    Title: "Innovation and Research Design",
    Name: "Avery August",
    Email: "aa749@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "VETMI 6111",
    Title: "Principles of Infectious Disease for Public Health",
    Name: "Gary Whittaker",
    Email: "grw7@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "VETMI 7030",
    Title: "Biomedical Sciences: Foundations of the PhD",
    Name: "Avery August",
    Email: "aa749@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "VETMI 7120",
    Title: "Seminars in Infection and Immunity",
    Name: "Pamela Chang",
    Email: "pvc29@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "VETMI 7230",
    Title: "Current Topics in Immunology and Infectious Disease",
    Name: "James Casey",
    Email: "jwc3@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "VETMI 7370",
    Title: "Advanced Work in Animal Parasitology",
    Name: "Dwight Bowman",
    Email: "ddb3@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "VETMI 7401",
    Title: "Apicomplexa",
    Name: "Dwight Bowman",
    Email: "ddb3@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "VETMI 7402",
    Title: "Excavata",
    Name: "Dwight Bowman",
    Email: "ddb3@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "VETMI 7404",
    Title: "Ticks",
    Name: "Dwight Bowman",
    Email: "ddb3@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "VETMI 7405",
    Title: "Fleas and Lice",
    Name: "Dwight Bowman",
    Email: "ddb3@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "VETMI 7408",
    Title: "Internal Parasites of Dogs",
    Name: "Dwight Bowman",
    Email: "ddb3@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "VETMI 7416",
    Title: "Introductory Pharmacology",
    Name: "Randy Lynn",
    Email: "rcl233@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "VETMI 7418",
    Title: "Parasitologic Diagnostic Methods Video Lab",
    Name: "Dwight Bowman",
    Email: "ddb3@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "VETMI 7420",
    Title: "Parasite Identification Laboratory",
    Name: "Dwight Bowman",
    Email: "ddb3@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "VETMI 7422",
    Title: "Non-Morphologic Parasite Identification Laboratory",
    Name: "Dwight Bowman",
    Email: "ddb3@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "VETMI 7430",
    Title: "Drug Discovery-The Big 12",
    Name: "Dwight Bowman",
    Email: "ddb3@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "VETMI 7431",
    Title: "Antiparasitic Vaccines",
    Name: "Dwight Bowman",
    Email: "ddb3@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "VETMI 7435",
    Title: "Federal Government's Role in Animal Health",
    Name: "Ellen Carlin",
    Email: "epc9@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "VETMI 7436",
    Title: "Capstone Project I",
    Name: "Dwight Bowman",
    Email: "ddb3@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "VETMI 7440",
    Title: "Parasites of Domestic Animals",
    Name: "Dwight Bowman",
    Email: "ddb3@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "VETMI 7442",
    Title: "Parasite Eradication Programs",
    Name: "Dwight Bowman",
    Email: "ddb3@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "VETMI 7446",
    Title: "Capstone Project II",
    Name: "Dwight Bowman",
    Email: "ddb3@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "VETMI 7449",
    Title: "Scientific Writing and Critical Review of Literature",
    Name: "Jennifer Ketzis",
    Email: "jkk5@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "VETMI 7720",
    Title: "Advanced Work in Aquatic Animal Diseases",
    Name: "Rodman Getchell",
    Email: "rgg4@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "VETMI 7830",
    Title: "Seminars in Parasitology",
    Name: "Dwight Bowman",
    Email: "ddb3@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "VIEN 1104",
    Title: "Introduction to Wines and Vines",
    Name: "Kathy Arnink",
    Email: "kja1@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "VIEN 1105",
    Title: "Introduction to Wines and Vines Laboratory",
    Name: "Kathy Arnink",
    Email: "kja1@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "VIEN 2204",
    Title: "Principles and Practices of Growing Grapes and Making Wines",
    Name: "Kathy Arnink",
    Email: "kja1@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "VIEN 2205",
    Title: "Growing Grapes and Making Wines Laboratory",
    Name: "Kathy Arnink",
    Email: "kja1@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "VIEN 2310",
    Title: "The Science and Technology of Beer",
    Name: "Dwayne Bershaw",
    Email: "db633@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "VIEN 2610",
    Title: "Vineyard Management I",
    Name: "",
    Email: ""
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "VIEN 4310",
    Title: "The Science and Technology of Beer Laboratory",
    Name: "Dwayne Bershaw",
    Email: "db633@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "VIEN 4400",
    Title: "Wine and Grape Flavor Chemistry",
    Name: "Gavin Sacks",
    Email: "gls9@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "VIEN 4460",
    Title: "Advanced Viticulture Topics",
    Name: "Justine Vanden Heuvel",
    Email: "jev32@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "VIEN 4500",
    Title: "Winemaking Theory and Practice I",
    Name: "Dwayne Bershaw",
    Email: "db633@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "VIEN 4510",
    Title: "Winemaking Theory and Practice I Laboratory",
    Name: "Dwayne Bershaw",
    Email: "db633@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "VIEN 4650",
    Title: "Wine Microbiology",
    Name: "Patrick Gibney",
    Email: "pag235@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "VIEN 4960",
    Title: "Viticulture and Enology Internship",
    Name: "",
    Email: ""
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "VIEN 4970",
    Title: "Individual Study in Viticulture and Enology",
    Name: "",
    Email: ""
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "VIEN 4980",
    Title: "Undergraduate Teaching Experience",
    Name: "",
    Email: ""
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "VIEN 4990",
    Title: "Undergraduate Research in Viticulture and Enology",
    Name: "",
    Email: ""
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "VIEN 5204",
    Title: "Principles and Practices of Growing Grapes and Making Wines",
    Name: "Kathy Arnink",
    Email: "kja1@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "VIEN 5205",
    Title: "Growing Grapes and Making Wines Graduate Laboratory",
    Name: "Kathy Arnink",
    Email: "kja1@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "VIEN 5310",
    Title: "The Science and Technology of Beer",
    Name: "Dwayne Bershaw",
    Email: "db633@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "VIEN 5500",
    Title: "Winemaking Theory and Practice I",
    Name: "Dwayne Bershaw",
    Email: "db633@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "VIEN 5510",
    Title: "Winemaking Theory and Practice I Laboratory",
    Name: "Dwayne Bershaw",
    Email: "db633@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "VIEN 5650",
    Title: "Wine Microbiology",
    Name: "Patrick Gibney",
    Email: "pag235@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "VIEN 6310",
    Title: "The Science and Technology of Beer Laboratory",
    Name: "Dwayne Bershaw",
    Email: "db633@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "VIEN 6400",
    Title: "Wine and Grape Flavor Chemistry",
    Name: "Gavin Sacks",
    Email: "gls9@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "VIEN 6460",
    Title: "Advanced Viticulture Topics",
    Name: "Justine Vanden Heuvel",
    Email: "jev32@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "VIET 1121",
    Title: "Elementary Vietnamese I",
    Name: "Thuy Tranviet",
    Email: "tdt5@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "VIET 2201",
    Title: "Intermediate Vietnamese I",
    Name: "Thuy Tranviet",
    Email: "tdt5@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "VIET 3301",
    Title: "Advanced Vietnamese I",
    Name: "Thuy Tranviet",
    Email: "tdt5@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "VISST 1101",
    Title: "Visual Literacy and Design Studio",
    Name: "John Elliott",
    Email: "jre15@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "VISST 2174",
    Title: "Introduction to Film Analysis: Meaning and Value",
    Name: "Jessica Bardsley",
    Email: "jb2368@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "VISST 2511",
    Title: "Beginning Dance Composition",
    Name: "Miles Yeung-Tieu",
    Email: "mey26@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "VISST 2744",
    Title: "Gamelan in Indonesian History and Cultures",
    Name: "Christopher Miller",
    Email: "cjm299@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "VISST 3175",
    Title: "Global Cinema I",
    Name: "Sabine Haenni",
    Email: "sh322@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "VISST 3227",
    Title: "Global Dance II",
    Name: "P. Suber",
    Email: "pbs6@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "VISST 3260",
    Title: "Staging Gay and Transgender Histories",
    Name: "Sara Warner",
    Email: "slw42@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "VISST 3565",
    Title: "Art and Architecture of Colonial Latin America",
    Name: "Ananda Cohen-Aponte",
    Email: "aic42@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "VISST 3650",
    Title: "History and Theory of Digital Art",
    Name: "Maria Fernandez",
    Email: "mf252@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "VISST 3696",
    Title: "The Arts of Southeast Asia",
    Name: "Kaja McGowan",
    Email: "kmm22@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "VISST 3707",
    Title: "Race and Sex: Arabian Nights",
    Name: "Parisa Vaziri",
    Email: "pv248@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "VISST 3798",
    Title: "Fundamentals of Directing I",
    Name: "David Feldshuh",
    Email: "dmf6@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "VISST 4101",
    Title: "Proseminar: Introduction to Methods",
    Name: "Annetta Alexandridis",
    Email: "aa376@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "VISST 4153",
    Title: "Topics in Feminist Media Arts",
    Name: "Maria Fernandez",
    Email: "mf252@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "VISST 4546",
    Title: "Shakespeare in (Con)text",
    Name: "Bruce Levitt",
    Email: "bal5@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "VISST 4556",
    Title: "Decolonial Poetics and Aesthetics: Arts of Resistance in the Americas",
    Name: "Ananda Cohen-Aponte",
    Email: "aic42@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "VISST 4673",
    Title: "The Kinship of Repair: Asian and Asian American Artists in Collaboration",
    Name: "",
    Email: ""
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "VISST 6673",
    Title: "The Kinship of Repair: Asian and Asian American Artists in Collaboration",
    Name: "",
    Email: ""
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "VTBMS 3460",
    Title: "Principles of Animal Physiology",
    Name: "Mark Roberson",
    Email: "msr14@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "VTBMS 7010",
    Title: "Mouse and Stem Cell Pathology",
    Name: "Alexander Nikitin",
    Email: "an58@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "VTBMS 7020",
    Title: "The Practice of Laboratory Animal Medicine",
    Name: "Bhupinder Singh",
    Email: "bs256@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "VTBMS 7030",
    Title: "The Biology and Diseases of Laboratory Animals",
    Name: "Bhupinder Singh",
    Email: "bs256@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "VTBMS 7200",
    Title: "Biomedical and Biological Sciences Seminar",
    Name: "Theodore Clark",
    Email: "tgc3@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "VTMED 5100",
    Title: "The Animal Body (Foundation Course I)",
    Name: "",
    Email: ""
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "VTMED 5200",
    Title: "Cell Biology and Genetics (Foundation Course II)",
    Name: "Carolyn Sevier",
    Email: "css224@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "VTMED 5210",
    Title: "Fundamentals of General Pathology",
    Name: "Erica Behling-Kelly",
    Email: "eb58@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "VTMED 5310",
    Title: "Function and Dysfunction: Part II (Foundation Course IIIb)",
    Name: "Kelly Lyboldt",
    Email: "kel28@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "VTMED 5400",
    Title: "Host, Agent, and Defense (Foundation Course IV)",
    Name: "Dorothy Debbie",
    Email: "dpd22@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "VTMED 5410",
    Title: "Veterinary Parasitology",
    Name: "Dwight Bowman",
    Email: "ddb3@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "VTMED 5510",
    Title: "Animal Health and Disease: Part II (Foundation Course V continued)",
    Name: "Cheryl Balkman",
    Email: "ceb11@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "VTMED 5600",
    Title: "Ambulatory and Production Medicine",
    Name: "Jessica McArt",
    Email: "js448@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "VTMED 5601",
    Title: "Small Animal Community Practice",
    Name: "Patrick Carney",
    Email: "pcc25@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "VTMED 5602",
    Title: "Small Animal Medicine",
    Name: "John Loftus",
    Email: "jpl249@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "VTMED 5603",
    Title: "Small Animal Soft Tissue Surgery Service",
    Name: "Nicole Buote",
    Email: "njb235@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "VTMED 5604",
    Title: "Large Animal Medicine Service",
    Name: "Marta Cercone",
    Email: "mc957@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "VTMED 5605",
    Title: "Large Animal Surgery",
    Name: "Rolfe Radcliffe",
    Email: "rmr45@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "VTMED 5606",
    Title: "Anesthesiology Service",
    Name: "Joaquin Araos",
    Email: "jda246@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "VTMED 5607",
    Title: "Dermatology Service",
    Name: "Mitzi Clark",
    Email: "mdc252@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "VTMED 5608",
    Title: "Ophthalmology Service",
    Name: "Nita Irby",
    Email: "nli2@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "VTMED 5609",
    Title: "Pathology Service",
    Name: "Andrew Miller",
    Email: "adm10@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "VTMED 5610",
    Title: "Radiology Service",
    Name: "Assaf Lerer",
    Email: "al736@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "VTMED 5611",
    Title: "Small Animal Clinical Emergency and Critical Care Medicine",
    Name: "Daniel Fletcher",
    Email: "djf42@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "VTMED 5612",
    Title: "Fourth-Year Seminar",
    Name: "Mary Smith",
    Email: "mcs8@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "VTMED 5613",
    Title: "Small Animal Surgery Orthopedic Surgery Service",
    Name: "Kei Hayashi",
    Email: "kh528@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "VTMED 5701",
    Title: "Veterinary Practice: Physical Examination (Foundation Course VIIa)",
    Name: "Carolyn McDaniel",
    Email: "cm326@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "VTMED 5704",
    Title: "Veterinary Practice: Introduction to Clinical Procedures (Foundation Course VIId)",
    Name: "Carolyn McDaniel",
    Email: "cm326@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "VTMED 5706",
    Title: "Veterinary Practice: Professional Development (Foundation Course VIIf)",
    Name: "Carolyn McDaniel",
    Email: "cm326@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "VTMED 6423",
    Title: "Clinical Diagnostic Parasitology",
    Name: "Dwight Bowman",
    Email: "ddb3@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "VTMED 6436",
    Title: "Directing Community Practice",
    Name: "Dwight Bowman",
    Email: "ddb3@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "VTMED 6438",
    Title: "Advanced Work in Animal Parasitology",
    Name: "Dwight Bowman",
    Email: "ddb3@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "VTMED 6530",
    Title: "Llama Tutorial",
    Name: "Mary Smith",
    Email: "mcs8@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "VTMED 6531",
    Title: "Poisonous Plants",
    Name: "Mary Smith",
    Email: "mcs8@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "VTMED 6548",
    Title: "Dairy Production Medicine",
    Name: "Blake Nguyen",
    Email: "btn26@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "VTMED 6601",
    Title: "Cardiology Service",
    Name: "Bruce Kornreich",
    Email: "bgk2@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "VTMED 6602",
    Title: "Laboratory Animal Medicine",
    Name: "Wendy Williams",
    Email: "wow2@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "VTMED 6603",
    Title: "Clinical Wildlife, Exotic, and Zoo-Animal Medicine",
    Name: "Noha Abou-Madi",
    Email: "na24@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "VTMED 6605",
    Title: "Special Opportunities in Clinical Veterinary Medicine",
    Name: "Julia Miller",
    Email: "jem394@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "VTMED 6608",
    Title: "Clinical Oncology",
    Name: "Cheryl Balkman",
    Email: "ceb11@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "VTMED 6613",
    Title: "Equine Specialty Rotation",
    Name: "Gillian Perkins",
    Email: "gap7@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "VTMED 6614",
    Title: "Large Animal Emergency and Critical Care",
    Name: "Rolfe Radcliffe",
    Email: "rmr45@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "VTMED 6615",
    Title: "Special Topics in Ambulatory and Production-Animal Medicine",
    Name: "Jessica McArt",
    Email: "js448@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "VTMED 6616",
    Title: "Small Animal Dentistry and Oral Surgery",
    Name: "Nadine Fiani",
    Email: "nf97@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "VTMED 6618",
    Title: "Clinical Neurology",
    Name: "Emma Davies",
    Email: "ed445@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "VTMED 6619",
    Title: "Clinical Pathology Rotation",
    Name: "Erica Behling-Kelly",
    Email: "eb58@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "VTMED 6623",
    Title: "Clinical Rotation in Shelter Medicine: Principles and Practice",
    Name: "Elizabeth Berliner",
    Email: "eab35@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "VTMED 6624",
    Title: "Primary Care Surgery Service",
    Name: "Michelle Moyal",
    Email: "mnm8@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "VTMED 6627",
    Title: "Farrier Skills for Veterinarians",
    Name: "Steven Kraus",
    Email: "sek78@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "VTMED 6628",
    Title: "Clinical Sports Medicine and Rehabilitation",
    Name: "Christopher Frye",
    Email: "cwf37@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "VTMED 6629",
    Title: "Wildlife Medicine",
    Name: "Sara Childs-Sanford",
    Email: "sec15@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "VTMED 6724",
    Title: "Senior Seminar",
    Name: "Mary Smith",
    Email: "mcs8@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "VTMED 6745",
    Title: "One Health: Conservation with Communities- Seminars",
    Name: "Robin Radcliffe",
    Email: "rwr32@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "VTMED 6748",
    Title: "Expanding Horizons",
    Name: "Alexander Travis",
    Email: "ajt32@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "VTMED 6896",
    Title: "Topics in Veterinary Medicine",
    Name: "",
    Email: ""
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "VTMED 6897",
    Title: "Teaching Projects in Veterinary Medicine",
    Name: "Carolyn McDaniel",
    Email: "cm326@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "VTMED 6898",
    Title: "Special Projects in Veterinary Medicine",
    Name: "",
    Email: ""
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "VTMED 6899",
    Title: "Research Projects in Veterinary Medicine",
    Name: "",
    Email: ""
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "VTPEH 6112",
    Title: "Biology of Disease Vectors",
    Name: "Laura Harrington",
    Email: "lch27@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "VTPEH 6123",
    Title: "Food Systems Approaches to Food Safety",
    Name: "Laura Smith",
    Email: "les36@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "VTPEH 6171",
    Title: "Applied Ethnographic Assessment in Public Health Practice",
    Name: "Elizabeth Fox",
    Email: "elf23@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "VTPEH 6172",
    Title: "Leading Change for Health Equity, Sustainability, and Justice",
    Name: "Gen Meredith",
    Email: "grm79@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "VTPEH 6173",
    Title: "Cross-sector Collaborations to Improve Health Equity",
    Name: "Karla Hanson",
    Email: "kh289@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "VTPEH 6990",
    Title: "Graduate Research in Public Health",
    Name: "Elizabeth Goldberg",
    Email: "eag256@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "VTPMD 2990",
    Title: "Undergraduate Research in Epidemiology",
    Name: "Casey Cazer",
    Email: "clc248@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "VTPMD 4990",
    Title: "Undergraduate Research in Public Health",
    Name: "Elizabeth Goldberg",
    Email: "eag256@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "VTPMD 6101",
    Title: "Public Health Foundations I",
    Name: "Alexander Travis",
    Email: "ajt32@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "VTPMD 6104",
    Title: "Epidemiology in Practice",
    Name: "Kevin Cummings",
    Email: "kjc39@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "VTPMD 6107",
    Title: "One Health - Planetary Health",
    Name: "Amie Patchen",
    Email: "akp59@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "VTPMD 6108",
    Title: "Applied Data Analysis",
    Name: "Yihong Li",
    Email: "yl3428@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "VTPMD 6121",
    Title: "Food Systems and Health",
    Name: "Kathryn Fiorella",
    Email: "kf326@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "VTPMD 6181",
    Title: "Public Health Practice - Assessment",
    Name: "Elizabeth Fox",
    Email: "elf23@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "VTPMD 6183",
    Title: "Public Health Practice – Monitoring, Evaluation, and Quality Improvement",
    Name: "Lorraine Francis",
    Email: "lf423@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "VTPMD 6184",
    Title: "Applied Practice Experience in Public Health",
    Name: "Audrey Baker",
    Email: "azb4@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "VTPMD 6191",
    Title: "Public Health Communication",
    Name: "Amelia Safi",
    Email: "alg52@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "VTPMD 6192",
    Title: "Public Health Integrated Learning Experience",
    Name: "Audrey Baker",
    Email: "azb4@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "VTPMD 6193",
    Title: "Special Topics in Public Health",
    Name: "Alexander Travis",
    Email: "ajt32@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "VTPMD 6660",
    Title: "Advanced Methods in Epidemiology",
    Name: "Yrjo Grohn",
    Email: "ytg1@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "VTPMD 7080",
    Title: "Epidemiology Seminar Series",
    Name: "Casey Cazer",
    Email: "clc248@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "VTPMD 7660",
    Title: "Graduate Research",
    Name: "Daryl Nydam",
    Email: "dvn2@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "VTPMD 7990",
    Title: "Independent Studies in Epidemiology",
    Name: "",
    Email: ""
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "WOLOF 1117",
    Title: "Elementary Wolof I",
    Name: "Emma Britton",
    Email: "erb248@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "WOLOF 2118",
    Title: "Intermediate Wolof I",
    Name: "Emma Britton",
    Email: "erb248@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "WOLOF 3113",
    Title: "Advanced Wolof I",
    Name: "Emma Britton",
    Email: "erb248@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "WRIT 1037",
    Title: "Tutorial in Academic Writing",
    Name: "Tracy Carrick",
    Email: "thc33@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "WRIT 1390",
    Title: "Special Topics in Writing",
    Name: "Tracy Carrick",
    Email: "thc33@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "WRIT 4860",
    Title: "McNair Seminar: Writing the Capstone",
    Name: "Kristen Angierski",
    Email: "kna4@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "WRIT 7100",
    Title: "Teaching Writing",
    Name: "David Faulkner",
    Email: "df259@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "WRIT 7101",
    Title: "Writing in the Majors Seminar",
    Name: "Elliot Shapiro",
    Email: "ehs9@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "YORUB 1108",
    Title: "Introduction to Yoruba I",
    Name: "Adeolu Ademoyo",
    Email: "aaa54@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "YORUB 2110",
    Title: "Intermediate Yoruba I",
    Name: "Adeolu Ademoyo",
    Email: "aaa54@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "YORUB 3110",
    Title: "Advanced Yoruba I",
    Name: "Adeolu Ademoyo",
    Email: "aaa54@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "ZULU 1113",
    Title: "Elementary Zulu I",
    Name: "Emma Britton",
    Email: "erb248@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "ZULU 2116",
    Title: "Intermediate Zulu I",
    Name: "Emma Britton",
    Email: "erb248@cornell.edu"
  },
  {
    School: "Cornell University",
    Term: "FA22",
    Code: "ZULU 3113",
    Title: "Advanced Zulu I",
    Name: "Emma Britton",
    Email: "erb248@cornell.edu"
  },
  {
    School: ""
  }
]

const createProfessorData = () => {
  const trimmed = {
    data: [],
    skipDuplicates: true,
  }

  for (let i = 0; i < bloated.length; i++) {
    const { Name, Email } = bloated[i]
    const data = {
      Name,
      Email,
      FK_SchoolID: 1183
    }
    if (data.Name && data.Email) trimmed.data.push(data)
    trimmed.data = trimmed.data.filter((value, index, self) =>
      index === self.findIndex((t) => (
        t.Name === value.Name && t.Email === value.Email
    )))
  }
  return trimmed
}

const uploadProfessorData = async () => {
  const trimmed2 = createProfessorData()
  await request(
    "http://localhost:3000/api/graphql",
    gql`
      mutation CreateManyProfessor(
        $data: [ProfessorCreateManyInput!]!
        $skipDuplicates: Boolean
      ) {
        createManyProfessor(data: $data, skipDuplicates: $skipDuplicates) {
          count
        }
      }
    `,
    trimmed2
  )
}

const createCrossLists = async () => {
  const trimmed = {
    data: []
  }
  for (let i=0; i<bloated.length; i++){
    const ourCourse = {
      FK_SchoolID: 1183,
      IsOfficial: true,
      Code: bloated[i].Code,
      Title: bloated[i].Title,
      Email: bloated[i].Email
    }

    let pushFlag = true
    for (let i=0; i<trimmed.data.length; i++){
      if (ourCourse.Title === trimmed.data[i].Title) {
        trimmed.data[i].Code = trimmed.data[i].Code + '/' + ourCourse.Code
        pushFlag = false
      }
    }
    if (pushFlag) trimmed.data.push(ourCourse)
  }
  return trimmed
}

const findProfs = async (bloated) => {
  const trimmed3 = {
    data: [],
    skipDuplicates: true
  }
  for (let i=2500; i<bloated.data.length; i++){
    const ourCourse = {
      FK_SchoolID: 1183,
      IsOfficial: true,
      Code: bloated.data[i].Code,
      Title: bloated.data[i].Title,
    }
    console.log(i / bloated.data.length * 100)
    const datareq = await request(
      "http://localhost:3000/api/graphql",
      gql`
        query Query($where: ProfessorWhereInput) {
          findFirstProfessor(where: $where) {
            ProfessorID
          }
        }
      `,
      {
        "where": {
          "Email": {
            "equals": bloated.data[i].Email
          }
        }
      }
    )
    if (datareq.findFirstProfessor !== null) ourCourse.FK_ProfessorID = datareq.findFirstProfessor.ProfessorID
    trimmed3.data.push(ourCourse)
  }
  return trimmed3
}

const uploadCourseData = async () => {
  const trimmed2 = await createCrossLists()
  const trimmed3 = await findProfs(trimmed2)
  await request(
    "http://localhost:3000/api/graphql",
    gql`
      mutation CreateManyCourse($data: [CourseCreateManyInput!]!) {
        createManyCourse(data: $data) {
          count
        }
      }
    `,
    trimmed3
  )
}

// const getProfessors = async () => {
//   await request('http://localhost:3000/api/graphql',
//   gql`
//     query Query {
//       professors {
//         ProfessorID
//         Email
//       }
//     }
//   `, {})
//   .then(async (data) => {
//     for (let i=0; i<data.professors.length; i++){
//       const courseIDs = []
//       const currentProf = data.professors[i]
//       const exempt = []
//       for (let j=0; j<bloated.length; j++) {
//         const course = bloated[j]
//         if (course && currentProf && course.Email === currentProf.Email && exempt.indexOf(course.Title) === -1) {
//           exempt.push(course.Title)
//           await request(
//             'http://localhost:3000/api/graphql',
//             gql`
//               query Query($where: CourseWhereInput) {
//                 findFirstCourse(where: $where) {
//                   CourseID
//                 }
//               }
//           `, {
//             "where": {
//               "Title": {
//                 "equals": course.Title
//               }
//             }
//           })
//           .then((data2) => courseIDs.push(data2.findFirstCourse.CourseID))
//         }
//       }
//       const variables = {
//         data: [],
//         skipDuplicated: true
//       }
//       await request(
//         'http://localhost:3000/api/graphql',
//         gql`
//           mutation Mutation($data: [ProfessorsOnCoursesCreateManyInput!]!, $skipDuplicates: Boolean) {
//             createManyProfessorsOnCourses(data: $data, skipDuplicates: $skipDuplicates) {
//               count
//             }
//           }
//       `,
//         {
//           data: courseIDs.map(id => ({
//             FK_CourseID: id,
//             FK_ProfessorID: currentProf.ProfessorID
//           })),
//           skipDuplicates: true
//         }
//       )
//     }

//   })
// }

// uploadProfessorData()
uploadCourseData()
// getProfessors()
