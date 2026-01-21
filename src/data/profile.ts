export interface Experience {
  id: string;
  company: string;
  title: string;
  location: string;
  startDate: string;
  endDate: string;
  duration: string;
  type: string;
  description: string;
  highlights: string[];
  technologies: string[];
  aiContext: string;
}

export interface SkillCategory {
  name: string;
  level: 'strong' | 'moderate' | 'learning';
  skills: string[];
}

export interface Recommendation {
  name: string;
  title: string;
  date: string;
  relationship: string;
  text: string;
}

export interface DemoResponse {
  question: string;
  answer: string;
}

export interface Profile {
  name: string;
  title: string;
  subtitle: string;
  location: string;
  about: string;
  linkedIn: string;
  status: string;
  targetRoles: string[];
  education: {
    school: string;
    degree: string;
    field: string;
    years: string;
  }[];
  certifications: string[];
  skillCategories: SkillCategory[];
  experience: Experience[];
  recommendations: Recommendation[];
  demoResponses: DemoResponse[];
  keyHighlights: string[];
}

export const profile: Profile = {
  name: "Rob Weatherly",
  title: "Sr Azure Cloud Architect",
  subtitle: "Azure Cloud Architecture, DevOps, Infrastructure Security & Technical Leadership",
  location: "Eastpointe, Michigan, United States",
  linkedIn: "https://www.linkedin.com/in/rob-weatherly/",
  status: "Open to Opportunities",
  about: "Driven to understand the business goals and objectives to create strategic Cloud based solutions leveraging the Microsoft Azure platform. To participate in project planning, delivery, contributing to training and the implementation of multiple solutions to ensure key financial and business objectives are met.",
  targetRoles: [
    "Infrastructure/Cloud Architect",
    "Technical Manager/Director",
    "Solutions Architect",
    "Azure Practice Lead"
  ],
  education: [
    {
      school: "National Institute of Technology",
      degree: "Associate's degree",
      field: "Information Technology",
      years: "1999 - 2001"
    }
  ],
  certifications: [
    "Microsoft Azure Fundamentals (AZ-900)"
  ],
  skillCategories: [
    {
      name: "Cloud & Infrastructure",
      level: "strong",
      skills: [
        "Azure Cloud Architecture",
        "Azure Infrastructure Engineering",
        "Cloud Migration Strategy",
        "VMware to Azure Migrations",
        "Hybrid Cloud Solutions",
        "Disaster Recovery Architecture"
      ]
    },
    {
      name: "DevOps & Automation",
      level: "strong",
      skills: [
        "Infrastructure as Code (Bicep, Terraform)",
        "Azure DevOps",
        "CI/CD Pipelines",
        "GitHub Actions",
        "PowerShell Automation",
        "Azure Resource Manager"
      ]
    },
    {
      name: "Security & Compliance",
      level: "strong",
      skills: [
        "Azure Security Architecture",
        "Identity & Access Management",
        "Network Security",
        "Compliance Frameworks",
        "Azure Government (FedRAMP)"
      ]
    },
    {
      name: "Leadership & Delivery",
      level: "strong",
      skills: [
        "Technical Team Leadership",
        "Solution Design",
        "Project Management",
        "Client Engagement",
        "Global Team Coordination",
        "Enterprise Architecture"
      ]
    },
    {
      name: "Emerging Technologies",
      level: "moderate",
      skills: [
        "Azure OpenAI / GPT Integration",
        "AI-Assisted Development",
        "Python Scripting",
        "Bash Scripting"
      ]
    },
    {
      name: "Areas for Growth",
      level: "learning",
      skills: [
        "Kubernetes / Container Orchestration",
        "Frontend Development",
        "Multi-Cloud (AWS/GCP deep expertise)"
      ]
    }
  ],
  experience: [
    {
      id: "slalom",
      company: "Slalom",
      title: "Azure Infrastructure Architect",
      location: "United States",
      startDate: "Apr 2022",
      endDate: "Present",
      duration: "3 yrs 10 mos",
      type: "Full-time",
      description: "Lead Azure Solution Architect driving large-scale cloud transformation initiatives. Focus on VMware to Azure migrations, DevOps engineering with Azure OpenAI integration, and comprehensive security architecture reviews.",
      highlights: [
        "Lead architect for automotive client VMware to Azure migration (2000+ workloads)",
        "Implemented Azure OpenAI with GPT integration for DevOps automation",
        "Designed and delivered CI/CD pipelines using Azure DevOps and GitHub",
        "Conducted security architecture reviews and compliance assessments",
        "Developed Infrastructure as Code solutions using Bicep and Terraform"
      ],
      technologies: ["Azure", "Bicep", "Terraform", "Azure DevOps", "Azure OpenAI", "VMware", "PowerShell"],
      aiContext: "At Slalom, Rob serves as a Senior Consultant and Azure Infrastructure Architect, leading complex cloud transformation projects. His current focus includes a major automotive migration involving 2000+ workloads from VMware to Azure, leveraging the 7R migration methodology. He's also been instrumental in integrating Azure OpenAI capabilities into DevOps workflows."
    },
    {
      id: "stellantis",
      company: "Stellantis",
      title: "Cloud Architect",
      location: "Detroit Metropolitan Area",
      startDate: "Jul 2019",
      endDate: "Apr 2022",
      duration: "2 yrs 10 mos",
      type: "Contract",
      description: "Sr Azure Cloud Infrastructure Architecture, with focus on gathering project requirements and translating them into solutions to best leverage Azure cloud services.",
      highlights: [
        "Designed Azure infrastructure solutions for enterprise automotive systems",
        "Translated complex business requirements into cloud architecture",
        "Implemented governance and compliance frameworks",
        "Collaborated with global teams on infrastructure standardization"
      ],
      technologies: ["Azure", "Azure DevOps", "Infrastructure as Code", "Networking", "Security"],
      aiContext: "At Stellantis (major automotive manufacturer), Rob worked as a contract Cloud Architect focusing on enterprise Azure infrastructure. He was responsible for translating complex business and technical requirements into scalable Azure solutions that met automotive industry compliance requirements."
    },
    {
      id: "va",
      company: "U.S. Department of Veterans Affairs",
      title: "System Architect @ Initiate Government Solutions, LLC",
      location: "Virtual Remote Office",
      startDate: "Dec 2017",
      endDate: "Jun 2019",
      duration: "1 yr 7 mos",
      type: "Contract",
      description: "Worked with the Project Management Office (PMO) team to document and model system requirements for both new and existing systems following federal government standards.",
      highlights: [
        "Documented and modeled system requirements for VA systems",
        "Worked with Azure Government cloud (FedRAMP compliance)",
        "Collaborated with PMO on system architecture documentation",
        "Ensured compliance with federal government IT standards"
      ],
      technologies: ["Azure Government", "System Architecture", "FedRAMP", "Documentation"],
      aiContext: "Rob worked as a System Architect supporting the U.S. Department of Veterans Affairs, one of the largest federal agencies. This role required working within strict FedRAMP compliance requirements and Azure Government cloud environments, demonstrating his ability to navigate complex regulatory frameworks."
    },
    {
      id: "sungard",
      company: "Sungard Availability Services",
      title: "Recovery Solution Architect",
      location: "Virtual Remote Office",
      startDate: "Dec 2015",
      endDate: "Apr 2017",
      duration: "1 yr 5 mos",
      type: "Full-time",
      description: "Primary role was to lead and manage large projects with various groups in a global environment for multiple customers. Responsible for disaster recovery and business continuity solution design.",
      highlights: [
        "Led large-scale disaster recovery projects globally",
        "Designed business continuity solutions for enterprise clients",
        "Managed complex projects across multiple customer accounts",
        "Architected recovery solutions ensuring minimal downtime"
      ],
      technologies: ["Disaster Recovery", "Business Continuity", "VMware", "Storage Solutions", "Networking"],
      aiContext: "At Sungard Availability Services, Rob served as a Recovery Solution Architect, specializing in disaster recovery and business continuity planning. This role honed his skills in designing resilient infrastructure that can withstand and recover from failures - expertise that directly translates to cloud architecture best practices."
    },
    {
      id: "ibm",
      company: "IBM",
      title: "IT Infrastructure Architect and Technical Lead",
      location: "Virtual Remote Office",
      startDate: "Mar 2004",
      endDate: "Dec 2015",
      duration: "11 yrs 10 mos",
      type: "Full-time",
      description: "As an Enterprise Architect, areas of expertise and responsibility include midrange infrastructure and server delivery using Windows and various enterprise platforms.",
      highlights: [
        "Enterprise Architect for major client accounts including CCE",
        "Led infrastructure architecture for Windows and midrange systems",
        "Managed global technical teams and complex implementations",
        "Developed strategy and architecture for infrastructure modernization",
        "Delivered solutions across diverse enterprise environments"
      ],
      technologies: ["Windows Server", "Enterprise Infrastructure", "Virtualization", "Storage", "Networking", "DB2"],
      aiContext: "Rob spent nearly 12 years at IBM Global Services, progressing to IT Infrastructure Architect and Technical Lead. This extensive tenure provided deep enterprise architecture experience across diverse client environments and technologies, building the foundation for his cloud architecture expertise."
    }
  ],
  recommendations: [
    {
      name: "Joseph Panayiotou",
      title: "Senior Staff Customer Experience Architect | Nutanix Professional Services",
      date: "July 1, 2019",
      relationship: "Joseph reported directly to Rob",
      text: "My name is Joseph Panayiotou and proud to offer my recommendation of Rob Weatherly to whom I have personally known and worked with for 15 years. During my relationship with Rob Weatherly I have experienced an individual who shows up earlier than asked, works hard, and carries themselves professionally."
    },
    {
      name: "Christopher Mullins (MSc IT)",
      title: "Assistant Director (Sr. Security Transition Manager) at EY InfoSec",
      date: "June 25, 2013",
      relationship: "Christopher Mullins was Rob's client",
      text: "I worked with Rob on the CCE/IBM account in Atlanta and would highly recommend him for Supervisory Architecture work in Strategy and Operations. I consider Rob one of the best in the industry at his job! Rob and I worked, struggled, and overcame many obstacles and difficult client/service provider situations in the last year regarding IT, Infrastructure, server selection, service delivery and cloud strategies. I could always count on him to make executive/cut thru the red tape/accurate and at times, Genius, decisions regarding our work together."
    }
  ],
  demoResponses: [
    {
      question: "What are Rob's key strengths?",
      answer: "Rob's core strengths lie in Azure Cloud Architecture with 8+ years of focused experience, Infrastructure as Code (Bicep/Terraform), and technical team leadership. He excels at translating complex business requirements into scalable cloud solutions, as demonstrated by his lead role in a 2000+ workload VMware to Azure migration at Stellantis through Slalom."
    },
    {
      question: "What experience does Rob have with cloud migrations?",
      answer: "Rob has extensive cloud migration experience, most notably leading a major VMware to Azure migration involving 2000+ workloads for an automotive client. He's well-versed in the 7R migration methodology and has experience with both lift-and-shift and modernization approaches. His background at Sungard in disaster recovery also provides unique insight into ensuring business continuity during migrations."
    },
    {
      question: "How does Rob approach DevOps and automation?",
      answer: "Rob takes a comprehensive approach to DevOps, combining Infrastructure as Code (Bicep, Terraform) with robust CI/CD pipelines using Azure DevOps and GitHub. He's recently expanded into AI-assisted DevOps, integrating Azure OpenAI with GPT to enhance automation capabilities. His focus is always on creating repeatable, maintainable infrastructure that enables rapid deployment while maintaining security standards."
    },
    {
      question: "What's Rob's experience with security and compliance?",
      answer: "Rob has strong security architecture experience, including work with Azure Government environments requiring FedRAMP compliance during his time supporting the U.S. Department of Veterans Affairs. He regularly conducts security architecture reviews and compliance assessments, and designs solutions with security as a foundational principle rather than an afterthought."
    },
    {
      question: "Is Rob a good fit for a technical leadership role?",
      answer: "Absolutely. Rob has demonstrated technical leadership throughout his career, from managing global teams at IBM for nearly 12 years to leading complex cloud transformation initiatives at Slalom. His recommendations highlight his ability to make executive decisions, work through obstacles, and deliver results. He combines deep technical expertise with strong communication skills and client engagement experience."
    }
  ],
  keyHighlights: [
    "20+ years IT infrastructure experience",
    "8+ years focused Azure cloud architecture",
    "Led 2000+ workload VMware to Azure migration",
    "Azure Government & FedRAMP experience",
    "DevOps & IaC expertise (Bicep, Terraform)",
    "Global technical team leadership"
  ]
};

export default profile;
