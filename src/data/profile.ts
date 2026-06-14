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
  title: "Azure Infrastructure Architect / Lead Cloud Engineer",
  subtitle: "Cloud foundation design, Azure infrastructure, IaC, migration, VDI modernization & lead technical engineering",
  location: "Metro Detroit, MI",
  linkedIn: "https://www.linkedin.com/in/rob-weatherly/",
  status: "Open to Opportunities",
  about: "Infrastructure architect and lead engineer with 25 years in IT and roughly 8 years focused on Azure architecture, implementation, migration, and operations. Designs and builds Cloud Adoption Framework aligned Azure infrastructure for regulated, complex environments, especially where private networking, security governance, hybrid integration, IaC, delivery ambiguity, and stakeholder alignment have to be handled together.",
  targetRoles: [
    "Infrastructure/Cloud Architect",
    "Technical Manager/Director",
    "Solutions Architect",
    "Azure Practice Lead",
    "Lead Cloud Engineer",
    "Cloud Foundation Architect"
  ],
  education: [
    {
      school: "National Institute of Technology",
      degree: "Technical/vocational training",
      field: "Information Technology",
      years: "Southfield, MI"
    }
  ],
  certifications: [],
  skillCategories: [
    {
      name: "Azure Architecture",
      level: "strong",
      skills: [
        "Azure landing zones",
        "Cloud Adoption Framework",
        "Hub-and-spoke networks",
        "Hybrid connectivity",
        "Azure Firewall Premium",
        "Private Link",
        "Private DNS Resolver",
        "VPN Gateway",
        "ExpressRoute evaluation",
        "Azure Policy",
        "Defender for Cloud",
        "Key Vault",
        "RBAC / PIM / Conditional Access",
        "Entra ID",
        "Azure Monitor",
        "Backup and disaster recovery"
      ]
    },
    {
      name: "Data Platform Infrastructure",
      level: "strong",
      skills: [
        "Azure Databricks infrastructure",
        "VNet injection",
        "No-public-IP workspaces",
        "Unity Catalog infrastructure boundaries",
        "ADLS Gen2",
        "CMK-backed storage",
        "Synapse Analytics",
        "Data Factory",
        "Self-hosted integration runtime",
        "Snowflake integration points",
        "dbt enablement",
        "Synapse CI/CD",
        "Application Gateway Private Link",
        "Azure OpenAI"
      ]
    },
    {
      name: "DevOps & IaC",
      level: "strong",
      skills: [
        "Bicep",
        "ARM templates",
        "Terraform",
        "Azure Verified Modules exposure",
        "Deployment Stacks decisioning",
        "Azure DevOps",
        "Classic Release Pipelines",
        "GitHub",
        "CI/CD pipelines",
        "Environment parameterization",
        "Variable groups",
        "Key Vault overrides",
        "PowerShell",
        "Bash",
        "Python",
        "VM image build and maintenance"
      ]
    },
    {
      name: "Migration, VDI & Assessment",
      level: "strong",
      skills: [
        "Azure Migrate",
        "VMware-to-Azure migration planning",
        "7R migration strategy",
        "Large workload portfolio analysis",
        "Azure Virtual Desktop",
        "VMware Horizon to AVD",
        "Citrix to AVD",
        "Nerdio-enabled AVD operations",
        "FSLogix profile storage",
        "Host pools",
        "Autoscale",
        "Landing-zone assessments",
        "Cloud security assessments",
        "SharePoint Online migration planning",
        "ShareGate",
        "Power Query"
      ]
    },
    {
      name: "Client & Delivery Leadership",
      level: "strong",
      skills: [
        "Discovery facilitation",
        "Executive stakeholder alignment",
        "Engineering stakeholder alignment",
        "Contentious client relationship repair",
        "Scope reset",
        "Decision framing",
        "Technical facilitation",
        "Runbooks",
        "Remediation prioritization",
        "Global team leadership",
        "SWAT and outage support",
        "Operational handoff"
      ]
    },
    {
      name: "AI-Assisted Engineering",
      level: "moderate",
      skills: [
        "Solution research",
        "Architecture validation",
        "Documentation acceleration",
        "IaC drafting",
        "Implementation checking",
        "Azure OpenAI exposure",
        "GPT models",
        "Embeddings",
        "Source-backed decision making"
      ]
    }
  ],
  experience: [
    {
      id: "slalom",
      company: "Slalom",
      title: "Senior Consultant and Azure Infrastructure Architect",
      location: "United States",
      startDate: "May 2022",
      endDate: "Present",
      duration: "4 yrs 1 mo",
      type: "Full-time",
      description: "Azure infrastructure architecture, cloud foundation implementation, regulated platform design, migration and VDI modernization, DevOps/IaC patterns, and client-facing technical leadership.",
      highlights: [
        "Brought in as the architect for ambiguous, unfamiliar, or stalled engagements, turning new platforms and compliance regimes into executable architecture decisions and client-owned runbooks",
        "Architected and deployed a greenfield CAF-aligned Azure landing zone for a regulated healthcare data platform with private connectivity and HIPAA, NIST 800-53, and CIS policy controls implemented in Bicep",
        "Architected a three-environment Azure data platform for a regulated commercial bank using Synapse Analytics, Data Factory, ADLS Gen2, and Key Vault with private-link networking and Synapse CI/CD promotion",
        "Modernized 200 to 2,000 user VDI estates to Azure Virtual Desktop, migrating off VMware Horizon and Citrix with and without Nerdio and owning host pool, FSLogix, image, and autoscale design",
        "Reset a contentious healthcare file-share to SharePoint Online migration, building a Power Query model over 800+ inventory exports and 9+ million file records for scope, blockers, and remediation",
        "Built a VMware-to-Azure migration strategy for 2,000+ workloads with 7R dispositions for 200+ applications, executed a subset with Azure Migrate, and enabled the client cloud team to continue independently"
      ],
      technologies: ["Azure", "Bicep", "Terraform", "Azure DevOps", "Databricks", "Synapse", "Data Factory", "AVD", "Nerdio", "FSLogix", "Azure Migrate", "Power Query"],
      aiContext: "At Slalom, Rob uses AI-assisted engineering workflows to accelerate solution research, documentation, IaC drafting, and validation while keeping final decisions grounded in source documentation, client constraints, and implementation evidence."
    },
    {
      id: "fca-stellantis",
      company: "FCA (now Stellantis)",
      title: "Infrastructure Cloud Architect",
      location: "Detroit Metropolitan Area",
      startDate: "2019",
      endDate: "2022",
      duration: "3 yrs",
      type: "Full-time",
      description: "Azure infrastructure architecture and cloud solution design for enterprise automotive application teams.",
      highlights: [
        "Designed Azure solutions for application teams across multiple business groups, covering new builds, upgrades, and migrations",
        "Integrated PoC-approved designs with enterprise CI/CD",
        "Managed on-premises Windows and Linux servers, Active Directory, and SQL Server estates, integrating them with the enterprise Azure environment",
        "Standardized enterprise Azure foundation and delivery practices, including deployment standards, IaC and CI/CD pipeline patterns, and VM image build and maintenance processes",
        "Served as lead Azure architect and mentor to multiple junior engineers"
      ],
      technologies: ["Azure", "Azure DevOps", "Infrastructure as Code", "CI/CD", "Windows Server", "Linux", "Active Directory", "SQL Server"],
      aiContext: "This role established Rob's enterprise Azure foundation, application-team enablement, cloud standards, and mentoring experience before his Slalom consulting work."
    },
    {
      id: "va",
      company: "U.S. Department of Veterans Affairs",
      title: "System Architect",
      location: "Virtual Remote Office",
      startDate: "2017",
      endDate: "2019",
      duration: "2 yrs",
      type: "Contract",
      description: "Hybrid infrastructure architecture for government healthcare data environments spanning data center, remote locations, and Azure Government.",
      highlights: [
        "Architected hybrid infrastructure for a corporate data warehouse sourced from a primary EMR",
        "Provided oversight across server, storage, backup, network, Hyper-V, Azure Government, and cloud resources",
        "Documented current and future-state architecture across primary data center, remote locations, and cloud",
        "Proposed architecture solutions to support growth, improve flexibility, and resolve failure points",
        "Held Public Trust clearance"
      ],
      technologies: ["Azure Government", "System Architecture", "Hyper-V", "Data Warehouse", "Networking", "Backup", "Documentation"],
      aiContext: "This work adds regulated public-sector and Azure Government context to Rob's broader Azure and infrastructure architecture experience."
    },
    {
      id: "sungard",
      company: "Sungard AS",
      title: "Recovery Solutions Architect - Managed Recovery Program",
      location: "Virtual Remote Office",
      startDate: "Dec 2015",
      endDate: "Apr 2017",
      duration: "1 yr 5 mos",
      type: "Full-time",
      description: "Disaster recovery architecture and managed recovery solution design for enterprise customers.",
      highlights: [
        "Led disaster recovery architecture for managed recovery customers",
        "Translated application requirements into recoverable architectures aligned to RTO/RPO and steady-state operating needs",
        "Served as technical leader and single point of ownership during transition and steady state",
        "Developed customer-facing architecture and recovery strategy documentation",
        "Designed AWS, SungardAS Cloud, and customized recovery or replication solutions"
      ],
      technologies: ["Disaster Recovery", "Business Continuity", "AWS", "SungardAS Cloud", "Replication", "VMware", "Storage", "Networking"],
      aiContext: "This role deepened Rob's ability to reason about resilience, RTO/RPO, recovery design, and operational ownership."
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
      description: "Enterprise infrastructure architecture, managed services technical leadership, legacy modernization, migration, and recovery design across global accounts.",
      highlights: [
        "Co-led SAP ECC replatform from AIX/DB2 mainframe to SLES Linux on VMware, including DR design using storage and server replication to support 1-hour RPO and 5-hour RTO targets",
        "Led enterprise architecture and technical delivery across global managed services teams, including 30+ resources",
        "Solutioned approximately 250 annual service requests generating about $1.5M per year in additional approved revenue",
        "Helped turn around troubled delivery environments through issue resolution, maintenance process redesign, patching improvements, security/audit practices, and customer trust rebuilding",
        "Supported multiple enterprise accounts across manufacturing, utility, medical device, automotive, retail, and distribution environments"
      ],
      technologies: ["Windows Server", "Linux", "AIX", "DB2", "SAP ECC", "VMware", "Storage", "Networking", "Enterprise Infrastructure"],
      aiContext: "Rob spent nearly 12 years at IBM Global Services, building the enterprise architecture, technical leadership, modernization, and recovery-design foundation behind his later cloud architecture work."
    }
  ],
  recommendations: [
    {
      name: "Recommendation Theme",
      title: "Supervisory architecture and strategy",
      date: "Public summary",
      relationship: "Summarized from public recommendation evidence",
      text: "Recommendation evidence supports strong supervisory architecture and strategy capability, especially in difficult client and service-provider situations."
    },
    {
      name: "Recommendation Theme",
      title: "Executive decision-making and delivery friction",
      date: "Public summary",
      relationship: "Summarized from public recommendation evidence",
      text: "Recommendation evidence supports executive-level decision-making, ability to cut through delivery friction, long-term professionalism, reliability, and work ethic."
    }
  ],
  demoResponses: [
    {
      question: "What are Rob's key strengths?",
      answer: "Rob's core strengths are Azure infrastructure architecture, CAF-aligned cloud foundation design, private networking, security governance, infrastructure as code, and senior client-facing delivery leadership. He is strongest in ambiguous or contentious environments where the technical path, stakeholder alignment, and operational handoff all need to be reset."
    },
    {
      question: "What experience does Rob have with cloud migrations?",
      answer: "Rob has built a VMware-to-Azure migration strategy for 2,000+ workloads with 7R dispositions for 200+ applications, executed a subset using Azure Migrate, and enabled the client cloud team to continue independently. He also has SharePoint Online migration planning experience using Power Query analysis over 800+ exports and 9+ million file records."
    },
    {
      question: "How does Rob approach DevOps and automation?",
      answer: "Rob focuses on repeatable, client-owned delivery paths: Bicep and ARM templates, Terraform exposure, Azure DevOps, GitHub, release pipelines, environment parameterization, Key Vault-backed configuration, deployment runbooks, and operational handoff. He uses AI-assisted workflows to accelerate research, documentation, IaC drafting, and validation without replacing tested implementation."
    },
    {
      question: "What's Rob's experience with security and compliance?",
      answer: "Rob has designed regulated Azure foundations with private connectivity, Azure Firewall Premium, Private Link, Private DNS Resolver, Key Vault, managed identities, RBAC/PIM, Conditional Access, Defender for Cloud, Log Analytics, and Azure Policy guardrails. His work includes healthcare, financial services, public-sector, and Azure Government contexts."
    },
    {
      question: "Is Rob a good fit for a technical leadership role?",
      answer: "Yes, when the role needs hands-on architecture plus delivery leadership. Rob has led global technical resources, mentored junior engineers, reset troubled delivery situations, aligned executive/security/operations/engineering stakeholders, and left behind runbooks and repeatable delivery models that client teams can operate."
    }
  ],
  keyHighlights: [
    "25 years IT infrastructure experience",
    "8 years focused Azure architecture",
    "CAF-aligned landing zones for regulated environments",
    "2,000+ workload VMware-to-Azure migration strategy",
    "AVD modernization for 200 to 2,000 user estates",
    "DevOps & IaC expertise across Bicep, ARM, Terraform, Azure DevOps and GitHub"
  ]
};

export default profile;
