import { ProjectContent } from '../types/project';

export const aiGradingProject: ProjectContent = {
  projectName: "AI Grading Project - Studio E",
  projectManagers: [
    {
      name: "Joshua Sivertson",
      linkedin: "https://www.linkedin.com/in/josh-sivertson-986849225/"
    },
    {
      name: "Miguel Elizalde",
      linkedin: "https://www.linkedin.com/in/miguelelizaldecruz/"
    },
    {
      name: "Tsogt Enkhbat",
      linkedin: "https://www.linkedin.com/in/tsogt-enkhbat/"
    }
  ],
  dates: {
    start: "January 6, 2025",
    end: "April 5, 2024"
  },
  background: "The AI Grading Assistant project aims to address the challenges of grading assignments in IT and CS classes by creating an automated system. Currently, grades are stored in GitHub, and PyTest is used for automated testing. The goal is to streamline the workflow, ensuring that grades and feedback are efficiently processed and updated in both GitHub and Canvas.",
  objectives: [
    "Automate the grading of assignments submitted through Canvas using an AI system",
    "Provide meaningful, rubric-based feedback instantly",
    "Sync grades and feedback between GitHub and Canvas",
    "Expand the system to accommodate additional disciplines beyond IT and CS",
    "Reduce teacher and assistant workload while ensuring fair and consistent grading"
  ],
  targetAudience: {
    primary: "Teachers and teaching assistants handling high volumes of grading",
    secondary: "Students in IT, CS, and eventually other disciplines, who benefit from instant and fair grading feedback"
  },
  projectSpecifics: {
    "Project Scope": "The AI Grading Assistant aims to develop a fully automated system to grade assignments and provide meaningful feedback based on a predefined rubric. The system will integrate with existing tools like GitHub and Canvas to streamline the grading workflow. Initial implementation focuses on IT and CS classes, with plans to expand to other disciplines.",
    "Project Constraints": "Technical Constraints: Integration with GitHub and Canvas must be seamless and secure; latency in AI grading should be minimal to ensure instant feedback; PyTest integration must remain functional for testing.",
    "Deliverables": "Minimum Viable Product (MVP): AI system that autogrades assignments and provides feedback based on rubrics; integration with GitHub for grade and feedback storage; automated sync of grades and feedback to Canvas.",
    "Explorations & Decisions": "AI System Development: Preference for OpenAI ChatGPT API for grading and feedback generation; focus on prompt engineering to ensure meaningful feedback aligned with rubrics."
  },
  timeline: [
    {
      task: "Project Documentation and Dashboard Creation",
      dateCompleted: "January 13, 2025",
      notes: "Established comprehensive project documentation hub using Notion. Created interactive dashboard for tracking project progress, including timeline visualization, team coordination, and development milestones. Compiled detailed PDF documentation and recorded team meetings for knowledge sharing."
    },
    {
      task: "Development of Flexible Feedback Schema for Autograde API",
      dateCompleted: "January 16, 2025",
      notes: "Created a feedback schema for the Autograde API to enhance flexibility and adaptability in user prompts, enabling more precise and dynamic feedback generation."
    },
    {
      task: "Scrum Masters Project Sync",
      dateCompleted: "January 18, 2025",
      notes: "Organized and led key project sync meeting covering GitGrade mail server implementation, authentication integration with Canvas, and AIOps considerations. Established testing environment for 4 students and discussed vector database implementation. Set up branching strategy for testing."
    },
    {
      task: "JSON Feedback Schema Research and Implementation",
      dateCompleted: "January 20, 2025",
      notes: "Researched solutions for inconsistent API response formats. Developed and implemented a structured JSON feedback schema to ensure reliable and consistent format returns from the OpenAI API, improving the stability of automated feedback generation."
    },
    {
      task: "Performance Metrics Analysis and Integration",
      dateCompleted: "January 27, 2025",
      notes: "Developed a proof-of-concept performance analysis framework using confusion matrix to evaluate AI grading accuracy. Implemented key metrics including Accuracy, Precision, Recall (Sensitivity), and Specificity to measure and improve automated grading reliability."
    },
    {
      task: "Integration Documentation and Visualization",
      dateCompleted: "January 27, 2025",
      notes: "Created comprehensive infographic documentation illustrating the integration between GitGrade and AI-Autograde. Visual documentation clarifies the automated feedback workflow, system capabilities, and interaction between different components to enhance developer understanding and decision-making."
    },
    {
      task: "Confusion Matrix Automation Prototype",
      dateCompleted: "February 3, 2025",
      notes: "Developed proof-of-concept testing framework utilizing confusion matrices to evaluate AI grading performance. Created initial prototype with Jupyter notebook integration for real-time analysis, automated test execution with pytest, and visual matrix generation using seaborn. Prototype demonstrates feasibility of tracking True/False Positives/Negatives to measure grading accuracy."
    },
    {
      task: "Data Processing and Git Workflow Enhancement",
      dateCompleted: "February 10, 2025",
      notes: "Developed modular Python scripts for autograding data processing, including JSON parsing and KV store integration. Implemented robust error handling and data validation. Enhanced Git workflow through branch management and merge conflict resolution. Created foundation for comprehensive data cleaning and visualization pipeline using pandas and matplotlib."
    },
    {
      task: "Temporary Production Database Implementation",
      dateCompleted: "February 17, 2025",
      notes: "Established temporary production database to support development and testing. Conducted multiple coordination meetings with product manager and AI-autograding team to review implementations. Collaborated with Thayne on proper implementation of temporary production variables. Verified functionality through Postman testing and submitted pull request for review."
    },
    {
      task: "Development Branch Integration and Redis Database Implementation",
      dateCompleted: "February 21, 2025",
      notes: "Led the integration of Redis client connectivity through PR #22, managing 21 commits that enhanced database architecture. Implemented secure token handling, optimized JSON parsing, and established robust database connectivity patterns. Demonstrated expertise in version control, database management, and secure API development while maintaining code quality through comprehensive PR reviews."
    },
    {
      task: "Infrastructure Configuration and CI/CD Enhancement",
      dateCompleted: "February 24, 2025",
      notes: "Architected deployment configuration using YAML, implementing infrastructure-as-code principles for consistent environments. Orchestrated branch merging strategy between main and development branches, resolving complex merge conflicts while maintaining codebase integrity. Optimized deployment pipeline by identifying and removing redundant processes, showcasing DevOps and system architecture capabilities."
    },
    {
      task: "Codebase Architecture and Documentation Overhaul",
      dateCompleted: "March 3, 2025",
      notes: "Spearheaded three critical pull requests (#27, #28, #29) that transformed code maintainability. Restructured database configurations, implemented comprehensive documentation standards, and optimized API response handling. Demonstrated technical leadership by establishing best practices for code documentation and maintaining clear communication channels with stakeholders through detailed PR descriptions."
    },
    {
      task: "Authentication System and Repository Management Enhancement",
      dateCompleted: "March 10, 2025",
      notes: "Engineered a robust authentication system utilizing GitHub tokens across multiple repositories, implementing secure environment variable handling. Designed and deployed an assignmentNameSlug system for precise assignment tracking, showcasing expertise in OAuth implementation and distributed systems architecture. This solution significantly improved assignment management efficiency and data organization capabilities."
    },
    {
      task: "Repository Architecture Optimization",
      dateCompleted: "March 17, 2025",
      notes: "Led the architectural redesign of five key repository components (tasks 3-5, 3-6, 4-5, 5-5, 5-6), implementing a more efficient repository naming convention. Demonstrated adaptability and leadership by pivoting strategy based on team feedback, while maintaining system integrity. Conducted thorough code reviews ensuring consistent implementation across all repositories, showcasing strong collaboration and technical oversight abilities."
    },
    {
      task: "Queue System Architecture and Implementation",
      dateCompleted: "March 24, 2025",
      notes: "Architected and implemented a sophisticated Redis queue system in TypeScript, demonstrating expertise in distributed systems and asynchronous processing. Developed comprehensive validation mechanisms for repository naming and implemented robust error handling. The system significantly improved scalability and reliability of the autograding process, handling high-volume concurrent requests efficiently. Maintained clear communication through daily updates and collaborative problem-solving sessions."
    },
    {
      task: "System Reliability and Error Handling Enhancement",
      dateCompleted: "March 31, 2025",
      notes: "Conducted thorough investigation into cross-environment scoring inconsistencies between VS Code and GitHub Actions, demonstrating strong debugging and system analysis skills. Designed and began implementing a comprehensive error handling system using try/catch blocks in Python, focusing on graceful error recovery and detailed error reporting. Created detailed technical documentation for future maintenance and scalability, while actively participating in cross-functional team collaboration for solution design."
    },
    {
      task: "Error Handling Implementation and System Reliability Enhancement",
      dateCompleted: "April 7, 2025",
      notes: "Engineered robust error handling mechanisms in Python using try-catch blocks around subprocess.run, demonstrating advanced exception handling capabilities. Implemented sophisticated error reporting that captures stderr output and provides meaningful feedback. Collaborated with team lead to diagnose and resolve system crashes, while utilizing GitHub Copilot for efficient code generation and formatting. Enhanced common_setup.py to handle syntax errors gracefully, improving system stability and user experience. Leveraged GitHub's pull request system and automated testing for thorough code review and quality assurance, showcasing both technical expertise and problem-solving abilities."
    }
  ],
  conclusion: {
    "Anticipated Outcomes": "The AI Grading Assistant will automate assignment grading, reduce teacher workload, and ensure fair, consistent feedback for students. The system will be scalable to support multiple disciplines."
  }
}; 