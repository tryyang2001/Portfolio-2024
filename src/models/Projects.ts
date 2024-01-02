export const projects: Project[] = [
  {
    title: "PeerPrep",
    subtitle:
      "A web-based collaborative technical interview preparation platform",
    intro:
      "PeerPrep is a platform for students to practice technical interviews with peer-collaboration. It is a full-stack web application built with React, NextJS, TypeScript, Node.js, Express.js, PostgreSQL, and Tailwind CSS.",
    roleDescription:
      "I was responsible for both front-end and back-end development, as well as the QA process. I collaborated with a 5-member team, and I set up all services that adopt RESTful API integrated with PostgreSQL database, desiged the UI/UX of the application, and implemented all unit tests and integration tests using Jest Library, with test automation using GitHub Actions.",
    images: ["/peerprep/peerprep.png", "/peerprep/peerprep_architecture.png"],
    githubLink:
      "https://github.com/CS3219-AY2324S1/ay2324s1-course-assessment-g05",
  },
  {
    title: "Fitbot",
    subtitle:
      "A CLI-based fitness and calorie consumption tracking application",
    intro:
      "Fitbot is a desktop app that helps university students who are looking to keep track of their calorie consumption and calorie output with the speed and convenience of command-line based tools, especially in times of online school. The application is a monolith built using Java, with robust functionalities and detailed documentation.",
    roleDescription:
      "This is a 5-member team project built within 3 weeks where we practice the OOP concept. I was responsible for implementing the CRUD operations for user to add, edit, and delete their food consumption, and provide backend support for the other team members to implement their functionalities. Besides, I also contributed to the design of the application, and the documentation of the application.",
    images: ["/fitbot/fitbot.png", "/fitbot/fitbot_architecture.png"],
    githubLink: "https://github.com/AY2122S1-CS2113T-F14-2/tp",
  },
  {
    title: "Breadit",
    subtitle: "A web-based social media platform for posting threads and more",
    intro:
      "Breadit is a Reddit-clone, which is a web-based social media platform with multiple features such as posting threads (text, images, videos), commenting, upvoting/downvoting, and more. It is a full-stack web application built with React, NextJS, TypeScript, MySQL, and Tailwind CSS. The application involves authentication, which is handled by using NextAuth.js.",
    roleDescription:
      "This is a personal project in which I follow an online tutorial to build the application. This is the first NextJS application I have built, I learned a lot from this project, especially the NextJS framework, React hooks, authentication, Tailwind CSS, and TypeScript language.",
    images: ["/breadit/breadit.png"],
    githubLink: "https://github.com/tryyang2001/Breadit",
  },
  {
    title: "Augmented Reality (AR) Laser Tag Game",
    subtitle:
      "An AR laser tag game built from scratch utilising both hardware and software",
    intro:
      "This is a capstone project for my computer engineering (CEG) undergraduate study, in which I collaborated with 4 other teammates. We built an AR laser tag game using both hardware electronics like FPGA, Ultra96, and breadboard curcuit, and software including Unity, TensorFlow, and Python. The game screen is displayed on a mobile phone attached on the laser gun. There are IMU sensors attached on the player hands and body so that the player can perform different game actions. Our team separated into 5 subgroups, hardware sensors, machine learning, game visualizer, internal & external communications.",
    roleDescription:
      "I was responsible for the machine learning part, in which I trained a neural network model using TensorFlow to detect player's hand gestures, and implement the model on the hardware FPGA for acceleration. Besides, I also contributed to the game logic design and implementation, and the full-system integration.",
    images: ["/capstone/capstone.png"],
    githubLink: "https://github.com/tryyang2001/Capstone-AR-Laser-Tag-Game",
  },
  {
    title: "NUSxam",
    subtitle:
      "A desktop-based examination platform for students to take online exams",
    intro:
      "NUSxam is a desktop-based examination platform for students to take online exams. It is a full-stack desktop application built using C# with WPF framework, integrated with Microsoft SQL (MSSQL) database deployed on Microsoft Azure. This is the first desktop application I have built.",
    roleDescription:
      "I was responsible for both front-end and back-end development. I implemented all functionalities of the application and designed the UI/UX, as well as setting up connection and data flows with the database.",
    images: ["/nusxam/nusxam.png"],
    githubLink: "https://github.com/tryyang2001/Orbital2021_Team_NUSxam",
  },
  {
    title: "WeatherSG",
    subtitle: "An android mobile weather forecast application",
    intro:
      "WeatherSG is an android mobile weather forecast application. It is a mobile application built using Kotlin with Android Studio, integrated with OpenWeatherMap API. This is the first mobile application I have built.",
    roleDescription:
      "I was responsible for front-end design, in which I ensure the responsiveness of the UI such that it renders properly on different screen size, as well as trying to add some interactive design like the animations of each weather icons. Besides, I also consumed the back-end code written by my teammates.",
    images: ["/weather-sg/weathersg.png"],
    githubLink:
      "https://github.com/tryyang2001/TikTok-Youth-Camp-2022-Group-Project",
  },
];
