export const DATA = {
  home: {
    hero: {
      name: "Ana Zahratul Firdausi",
      title: "AI/ML Engineer & Data Scientist",
      subtitle:
        "Building machine learning systems from data pipeline to deployment with hands-on QA engineering experience",
    },
    skills: {
      sectionTitle: "Skills & Expertise",
      sectionDescription:
        "Specialized in building machine learning systems from data pipeline to deployment",
      overview: [
        {
          name: "Machine Learning & Data Science",
          level: 90,
          icon: "lucide:brain-circuit",
          color: "blue",
        },
        {
          name: "MLOPs & Deployment",
          level: 80,
          icon: "lucide:server-cog",
          color: "purple",
        },
        {
          name: "Data Engineering & Pipeline",
          level: 85,
          icon: "lucide:database-zap",
          color: "green",
        },
        {
          name: "QA &  Software Testing",
          level: 85,
          icon: "lucide:bug",
          color: "orange",
        },
      ],
    },
  },
  about: {
    profile: {
      name: "Ana Zahratul Firdausi",
      title: "AI/ML Engineer & Data Scientist",
      image:
        "/images/profile/zahra farewell (1).jpeg",
      description: [
        "I'm an Informatics Engineering student at Universitas Brawijaya, focused on AI/ML Engineering and MLOps. I build end-to-end machine learning systems from data pipelines and model training to experiment tracking, CI/CD automation, and production monitoring.",
        "My work spans classification, clustering, and retrieval-based approaches using Random Forest, K-Means, and RAG pipelines (LangChain, FAISS). I'm hands-on with MLflow, DVC, Docker, and GitHub Actions for building reliable, production-ready ML systems.",
        "I'm currently gaining industry experience as a QA Software Intern, and actively seeking opportunities to grow as an AI/ML Engineer.",
      ],
    },
    education: [
      {
        title: "Universitas Brawijaya - Informatics Engineering",
        date: "2023 - Present",
        icon: "mdi:school",
        description:
          "Undergraduate studies in Informatics Engineering, Malang, Indonesia, with a specialization focus on Data Science and AI/ML",
      },
    ],
    experience: [
      {
        title: "QA Software Intern at PT Telkom Indonesia (PadiUMKM)",
        date: "June 2026 - Present",
        icon: "mdi:briefcase",
        description:
          "Creating test scenarios, performing functional and API testing, and validating software functionality across web and mobile platforms.",
      },
      {
        title: "Teaching Assistant at the Faculty of Computer Science, Universitas Brawijaya",
        date: "February 2025 - June 2025",
        icon: "mdi:monitor-dashboard",
        description:
          "Led OOP practical sessions for 29 students at the Faculty of Computer Science, Universitas Brawijaya, covering classes, inheritance, polymorphism, exception handling, and collection frameworks.",
      },
      {
        title: "Product Manager at RAION Community",
        date: "April 2025 - December 2025",
        icon: "mdi:code-tags",
        description:
          "Led strategic planning and execution of app development projects within a faculty-focused organization specializing in app and game development.",
      },
    ],
    technologies: {
      machineLearning: {
        description:
          "I build and evaluate ML models for classification, clustering, and retrieval tasks.",
        tools: [
          { name: "Python", icon: "logos:python" },
          { name: "Scikit-learn", icon: "simple-icons:scikitlearn" },
          { name: "Pandas", icon: "simple-icons:pandas" },
          { name: "NumPy", icon: "simple-icons:numpy" },
        ],
      },
      mlops: {
        description:
          "I deploy and monitor ML systems in production with automated pipelines.",
        tools: [
          { name: "MLflow", icon: "simple-icons:mlflow" },
          { name: "DVC", icon: "simple-icons:dvc" },
          { name: "Docker", icon: "logos:docker-icon" },
          { name: "GitHub Actions", icon: "logos:github-actions" },
        ],
      },
      generativeArtificialIntelligence: {
        description:
          "I build retrieval-augmented generation systems for question-answering tasks.",
        tools: [
          { name: "LangChain", icon: "simple-icons:langchain" },
          { name: "FAISS", icon: "simple-icons:meta" },
        ],
      },
      dataEngineering: {
        description:
          "I build and orchestrate large-scale data pipelines and warehouses.",
        tools: [
          { name: "DuckDB", icon: "simple-icons:duckdb" },
          { name: "Prefect", icon: "simple-icons:prefect" },
          { name: "Streamlit", icon: "simple-icons:streamlit" },
          { name: "SQL", icon: "simple-icons:postgresql" },
        ],
      },
    },
  },
  projects: {
    sectionTitle: "Featured Projects",
    sectionDescription:
      "A selection of my recent work spanning machine learning, MLOps, and large-scale data engineering",
    work: [
      {
        id: 1,
        title: "EpiccSafe - Phishing URL Detection",
        description:
          "ML system detecting phishing URLs in real-time with a risk-scoring engine and browser extension.",
        image: "/images/projects/analisis link.png",
        gallery: [
          "/images/projects/analisis link.png",
          "/images/projects/diagram evaluasi 1.png"
        ],
        category: "Machine Learning",
        details:
          "Built a phishing URL detection system trained on 235,795 URLs (PhiUSIIL dataset), comparing Random Forest, Gradient Boosting, and Logistic Regression. Random Forest was selected for production (Accuracy 99.99%, F1 0.9999, ROC-AUC 1.0000). Designed a 24-feature pipeline using only URL-structure signals (no page content needed), with SMOTE for class balancing. Built a 0-100 risk-scoring layer that converts model probability into 3 action tiers (Low/Medium/High), and a hybrid N-gram + domain-whitelist similarity engine for real-time inference.",
        github: "https://github.com/EpiccSafe-Capstone/epicc-safe-system.git",
        live: "https://epiccsafe.vercel.app/",
        tech: [
          { name: "Python", icon: "logos:python" },
          { name: "Scikit-learn", icon: "simple-icons:scikitlearn" },
          { name: "Pandas", icon: "simple-icons:pandas" },
          { name: "imbalanced-learn", icon: "simple-icons:python" },
        ],
      },
      {
        id: 2,
        title: "MLOps Air Quality Prediction",
        description:
          "End-to-end ML pipeline for air quality prediction with CI/CD, experiment tracking, and drift monitoring.",
        image: "/images/projects/mlops aqi-dashboard grafana.png",
        gallery: [
          "/images/projects/mlops aqi-dashboard grafana.png",
          "/images/projects/mlops aqi-mlfow experiments (1).png",
          "/images/projects/mlops aqi-github action.png",
        ],
        category: "MLOPs",
        details:
          "An individually built end-to-end MLOps project covering the full lifecycle from data loading to production monitoring. Implemented a CI/CD pipeline for automated model training and deployment, used MLflow for experiment tracking and model registry, and set up drift detection to monitor model performance degradation over time in production.",
        github: "https://github.com/anazahra/MLOps-AirQualityPrediction.git",
        tech: [
          { name: "Python", icon: "logos:python" },
          { name: "MLflow", icon: "simple-icons:mlflow" },
          { name: "GitHub Actions", icon: "logos:github-actions" }
        ],
      },
      {
        id: 3,
        title: "NYC Taxi Analysis",
        description:
          "Large-scale data pipeline and dashboard analyzing 43M+ NYC taxi trips as a Project Lead.",
        image: "/images/projects/nyc taxi-dashboard.png",
        gallery: [
          "/images/projects/nyc taxi-dashboard.png",
          "/images/projects/nyc taxi-peta.png",
          "/images/projects/schema_diagram.png",
        ],
        category: "Data Engineering",
        details:
          "Led a 6 person team building a full data pipeline for NYC Taxi revenue & operations analysis. Orchestrated ingestion (NYC TLC trip data, Open-Meteo weather, Nager.Date holidays) with Prefect, designed a star schema warehouse in DuckDB (fact_trips at ~43M rows + 4 dimension tables), and built a multi-page Streamlit dashboard with choropleth maps, demand prediction, and time/weather pattern analysis. As Project Lead, personally designed the schema, built the warehouse loader, reviewed all team deliverables, and managed documentation and final submission.",
        github: "https://github.com/Afifahnabila25/NYC-Taxi-Analysis.git",
        tech: [
          { name: "Python", icon: "logos:python" },
          { name: "DuckDB", icon: "simple-icons:duckdb" },
          { name: "Streamlit", icon: "simple-icons:streamlit" },
          { name: "Prefect", icon: "simple-icons:prefect" },
        ],
      },
    ],
  },
  morphingTexts: {
    about: ["AI/ML Engineer", "Data Scientist", "Problem Solver"] as const,
    projects: ["My Work", "Experiments", "ML Systems", "Data Pipelines"] as const,
  },
  navigation: [
    { name: "Home", href: "/", icon: "lucide:home" },
    { name: "About", href: "/about", icon: "lucide:user" },
    { name: "Projects", href: "/projects", icon: "lucide:folder-code" },
  ],
  footer: {
    name: "Ana Zahratul Firdausi",
    description: "Always interested in new projects and collaborations.",
    contact: {
      email: "anazahratulfirdausi@gmail.com",
      phone: "+62 815-1560-3020",
      location: "Malang, Jawa Timur, Indonesia",
    },
    socialLinks: [
      { platform: "GitHub", url: "https://github.com/anazahra", icon: "mdi:github" },
      { platform: "LinkedIn", url: "http://www.linkedin.com/in/ana-zahratul-firdausi", icon: "mdi:linkedin" },
      { platform: "Instagram", url: "https://www.instagram.com/anazraaa_/", icon: "mdi:instagram" },
    ],
    services: [
      "Machine Learning Development",
      "MLOps & Model Deployment",
      "Data Pipeline & Engineering",
      "QA & Software Testing",
    ],
  },
} as const;
