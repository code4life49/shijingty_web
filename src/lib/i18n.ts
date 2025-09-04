export const i18n = {
  zh: {
    nav: {
      about: "关于我们",
      services: "产品服务",
      projects: "项目展示",
      contact: "联系我们",
    },
    hero: {
      title: "诗璟同悦",
      subtitle: "诗璟同悦",
      description: "Indie Hacker · 独立开发者",
      summary: "以热情和精准构建数字产品，将创意想法转化为用户喜爱的应用",
      viewWork: "查看作品",
      contactMe: "联系我",
    },
    about: {
      title: "关于我们",
      subtitle: "产品导向的创新",
      description: "我们是一个专注于原创应用创意和数字产品的创意独立开发工作室。我们的重点是通过构建创新解决方案来解决实际问题并让用户满意，偶尔为精选合作伙伴提供定制开发服务。",
      features: {
        appDev: "原创应用开发",
        digitalProducts: "创意数字产品",
        userCentered: "以用户为中心的设计",
      },
      quote: "将创意想法转化为用户喜爱的应用",
    },
    services: {
      title: "我们的服务",
      originalApps: {
        title: "原创应用",
        description: "基于创新想法和市场洞察，我们创建并发布自己的移动和Web应用程序。",
      },
      creativeProducts: {
        title: "创意产品",
        description: "旨在解决实际问题和增强日常生活用户体验的数字产品和工具。",
      },
      partnerships: {
        title: "精选合作",
        description: "为与我们愿景一致的精心挑选的客户和战略合作伙伴提供定制开发服务。",
      },
    },
    projects: {
      title: "项目展示",
      project1: {
        title: "电商平台",
        description: "基于Next.js和Stripe集成的现代电商解决方案。",
        liveDemo: "在线演示 →",
        github: "GitHub →",
      },
      project2: {
        title: "任务管理应用",
        description: "具有实时协作功能的生产力应用。",
        liveDemo: "在线演示 →",
        github: "GitHub →",
      },
      project3: {
        title: "AI聊天机器人",
        description: "由OpenAI API驱动的智能聊天机器人，具有自定义训练功能。",
        liveDemo: "在线演示 →",
        github: "GitHub →",
      },
      screenshot: "项目截图",
    },
    contact: {
      title: "让我们一起创造",
      description: "有一个有趣的项目想要合作？联系我们，让我们一起讨论如何将创意想法变为现实。",
      button: "开始对话",
    },
    footer: {
      company: "诗璟同悦",
      companyEn: "ShijingTY Technologies",
      rights: "保留所有权利",
    },
  },
  en: {
    nav: {
      about: "About",
      services: "Services",
      projects: "Projects",
      contact: "Contact",
    },
    hero: {
      title: "ShiJing TongYue",
      subtitle: "ShiJing TongYue",
      description: "Indie Hacker · Independent Developer",
      summary: "Building digital products with passion and precision, transforming creative ideas into apps that users love",
      viewWork: "View My Work",
      contactMe: "Contact Me",
    },
    about: {
      title: "About Us",
      subtitle: "Product-Focused Innovation",
      description: "We are a creative indie development studio specializing in original app ideas and digital products. Our focus is on building innovative solutions that solve real problems and delight users, with occasional custom development for select partners.",
      features: {
        appDev: "Original App Development",
        digitalProducts: "Creative Digital Products",
        userCentered: "User-Centered Design",
      },
      quote: "Transforming creative ideas into apps that users love",
    },
    services: {
      title: "What We Do",
      originalApps: {
        title: "Original Apps",
        description: "We create and launch our own mobile and web applications based on innovative ideas and market insights.",
      },
      creativeProducts: {
        title: "Creative Products",
        description: "Digital products and tools designed to solve real problems and enhance user experiences in daily life.",
      },
      partnerships: {
        title: "Select Partnerships",
        description: "Custom development services for carefully chosen clients and strategic partners who share our vision.",
      },
    },
    projects: {
      title: "My Projects",
      project1: {
        title: "E-Commerce Platform",
        description: "A modern e-commerce solution built with Next.js and Stripe integration.",
        liveDemo: "Live Demo →",
        github: "GitHub →",
      },
      project2: {
        title: "Task Management App",
        description: "A productivity app with real-time collaboration features.",
        liveDemo: "Live Demo →",
        github: "GitHub →",
      },
      project3: {
        title: "AI Chat Bot",
        description: "An intelligent chatbot powered by OpenAI API with custom training.",
        liveDemo: "Live Demo →",
        github: "GitHub →",
      },
      screenshot: "Project Screenshot",
    },
    contact: {
      title: "Let's Create Together",
      description: "Have an interesting project or want to collaborate? Get in touch and let's discuss how we can bring creative ideas to life.",
      button: "Start a Conversation",
    },
    footer: {
      company: "诗璟同悦",
      companyEn: "ShijingTY Technologies",
      rights: "All rights reserved",
    },
  },
};

export type Language = keyof typeof i18n;
export type I18nKey = keyof typeof i18n.zh;
