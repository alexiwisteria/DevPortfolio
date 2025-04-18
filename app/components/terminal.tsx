import React, { useState } from 'react';
import Card from './card';

const colorMap: Record<string, string> = {
    white: 'text-white',
    red: 'text-red-500',
    orange: 'text-orange-500',
    yellow: 'text-yellow-500',
    green: 'text-green-500',
    blue: 'text-blue-500',
    purple: 'text-purple-500'
};

const jokes: string[] = [
    "What do you call 8 hobbits? A hobbyte.",
    "How many programmers does it take to change a light bulb? None, that's a hardware problem.",
    "Why do programmers prefer dark mode? Because light attracts bugs.",
    "Why did the programmer quit his job? He didn't get arrays."
];

const asciiArt: string = `
                       .,,uod8B8bou,,.
              ..,uod8BBBBBBBBBBBBBBBBRPFT?l!i:.
         ,=m8BBBBBBBBBBBBBBBRPFT?!||||||||||||||
         !...:!TVBBBRPFT||||||||||!!^^""'   ||||
         !.......:!?|||||!!^^""'            ||||
         !.........||||                     ||||
         !.........||||  ##                 ||||
         !.........||||                     ||||
         !.........||||                     ||||
         !.........||||                     ||||
         !.........||||                     ||||
         \`.........||||                    ,||||
          .;.......||||               _.-!!|||||
   .,uodWBBBBb.....||||       _.-!!|||||||||!:' 
!YBBBBBBBBBBBBBBb..!|||:..-!!|||||||!iof68BBBBBb....
!..YBBBBBBBBBBBBBBb!!||||||||!iof68BBBBBBRPFT?!::   \`.
!....YBBBBBBBBBBBBBBbaaitf68BBBBBBRPFT?!:::::::::     \`.
!......YBBBBBBBBBBBBBBBBBBBRPFT?!::::::;:!^"\`;:::       \`.
!........YBBBBBBBBBBRPFT?!::::::::::^''...::::::;         iBBbo.
\`..........YBRPFT?!::::::::::::::::::::::::;iof68bo.      WBBBBbo.
  \`..........:::::::::::::::::::::::;iof688888888888b.     \`YBBBP^'
    \`........::::::::::::::::;iof688888888888888888888b.     \`
      \`......:::::::::;iof688888888888888888888888888888b.
        \`....:::;iof688888888888888888888888888888888899fT!
          \`..::!8888888888888888888888888888888899fT|!^"'
            \`' !!988888888888888888888888899fT|!^"'
                \`!!8888888888888888899fT|!^"'
                  \`!988888888899fT|!^"'
                    \`!9899fT|!^"'
                      \`!^"'
`;

const projects = {
    'ai autograding': {
        summary: [
            "An innovative AI-powered autograding system designed to streamline the assessment process for programming assignments.",
            "Technology Stack: Python, OpenAI API, Next.js",
            "",
            "Documentation:",
            <Card>
                <a key="ai-autograding" href="/ai-grading-project" className="p-4 block hover:text-[#3CB371]">
                    Project Documentation
                </a>
            </Card>,
        ]
    },
    'devarchive': {
        summary: [
            "A modern portfolio website showcasing my projects and professional experience.",
            "Technology Stack: Next.js, TypeScript, Tailwind CSS",
            "",
            "Documentation:",
            <Card>
                <a key="devarchive" href="/" className="p-4 block hover:text-[#3CB371]">
                    View Portfolio
                </a>
            </Card>,
        ]
    }
};

const resume = [
    "Professional Summary",
    "Aspiring Data Infrastructure and AI Solutions Architect with a solid foundation in software development and a passion",
    "for AI/ML technologies. Here's what I'm currently focusing on: refreshing my skills in data structures and Big O notation,",
    "while actively exploring large language models (LLMs). My goal is to integrate these technologies into programs in a way",
    "that's impactful, effective, and ethically responsible.",
    "",
    "Skills",
    "• Proficient: Java, Object Oriented Programming, Agile, Team Dynamix",
    "• Emerging: Git, JUnit, SQL, Pytest, Vite, TypeScript, JavaScript, Python, Maven, React, Next.js, MongoDB, Jira, Service Now",
    "• Soft Skills: Detail-Oriented, Critical Thinker, Effective Communicator, Persistent, Self-Motivated, Curious, Tenacious",
    "",
    "Education",
    "Ensign College Bachelor of Science, Software Engineering (Jan 2025 - Apr 2026)",
    "Salt Lake City, UT",
    "• Coursework: Introduction to Programming, Data Structures, Object Oriented Programming, Web Development, Discrete Math,",
    "  Technical Writing, Agile Project Management, Statistics",
    "",
    "Extracurricular Activities",
    "Coding Club - Salt Lake City, Utah (Jan 2025)",
    "• Collaborating on software projects using Java, Python, and JavaScript",
    "• Organizing workshops and participated in hackathons to solve real-world challenges",
    "• Mentored peers in debugging techniques, Git workflows, and coding fundamentals",
    "",
    "Studio E - Ensign College AI Autograding Project - Scrum Master, Salt Lake City, UT (Jan 2025)",
    "• Leading an agile team in AIOps, consistently achieving milestones by integrating advanced AI models",
    "• Optimizing data pipelines and employed the OpenAI ChatGPT API for rapid prototyping",
    "• Developing innovative AIOps solutions that improved system reliability and strengthened collaboration",
    "",
    "Professional Experience",
    "Ensign College Help Desk Technician (Jan 2024 - Present)",
    "Salt Lake City, UT",
    "• Provided QA support and troubleshooting during a major WiFi migration, minimizing disruptions",
    "• Successfully resolved technical issues with ServiceNow and TeamDynamix",
    "• Collaborated with IT teams to document network changes and deliver ongoing support",
    "",
    "Research and Business Development Center (Apr 2020 - Jul 2020)",
    "Team Lead - Idaho, United States",
    "• Led a team by sharing knowledge, fostering collaboration, and implementing efficient workflows",
    "• Enhanced productivity through self-learning advanced Excel and data analysis",
    "• Streamlined data processing and insight generation by creating an Excel-based workflow"
];

const Terminal: React.FC = () => {
    const [input, setInput] = useState<string>('');
    const [output, setOutput] = useState<(string | React.ReactNode)[]>([
        "Welcome to my interactive portfolio terminal.",
        <Card key="explore">
            <button onClick={() => handleCommand('explore')} className="p-4 text-left hover:text-[#3CB371]">
                Enter 'explore' to discover available commands
            </button>
        </Card>
    ]);
    const [color, setColor] = useState<string>(colorMap.white);

    const handleCommand = (command: string) => {
        let result: (string | React.ReactElement)[] = [];
        const lowerCommand = command.toLowerCase();

        if (lowerCommand === 'explore') {
            result = [
                "Available Commands:",
                "",
                <Card>
                    <button onClick={() => handleCommand('resume')} className="p-4 text-left hover:text-[#3CB371]">
                        'resume' → View my resume
                    </button>
                </Card>,
                <Card>
                    <button onClick={() => handleCommand('projects')} className="p-4 text-left hover:text-[#3CB371]">
                        'projects' → Browse portfolio projects
                    </button>
                </Card>,
                <Card>
                    <button onClick={() => handleCommand('contact')} className="p-4 text-left hover:text-[#3CB371]">
                        'contact' → View contact information
                    </button>
                </Card>,
                <Card>
                    <button onClick={() => handleCommand('fun')} className="p-4 text-left hover:text-[#3CB371]">
                        'fun' → Interactive features
                    </button>
                </Card>,
                ""
            ];
        } else if (lowerCommand === 'contact') {
            result = [
                '',
                <Card>
                    <div className="flex justify-between items-center p-4 group">
                        <a href="mailto:alexiseblee@outlook.com" className="hover:text-[#3CB371]">
                            Email: alexiseblee@outlook.com
                        </a>
                        <button 
                            onClick={() => {
                                navigator.clipboard.writeText('alexiseblee@outlook.com');
                            }}
                            className="opacity-0 group-hover:opacity-100 hover:text-[#3CB371] transition-opacity"
                            aria-label="Copy email"
                        >
                            <svg 
                                xmlns="http://www.w3.org/2000/svg" 
                                width="16" 
                                height="16" 
                                viewBox="0 0 24 24" 
                                fill="none" 
                                stroke="currentColor" 
                                strokeWidth="2" 
                                strokeLinecap="round" 
                                strokeLinejoin="round"
                            >
                                <rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect>
                                <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
                            </svg>
                        </button>
                    </div>
                </Card>,
                <Card>
                    <a href="https://www.linkedin.com/in/alexisbinchlee/" target="_blank" rel="noopener noreferrer" className="hover:text-[#3CB371] p-4 block">LinkedIn</a>
                </Card>,
                <Card>
                    <a href="https://github.com/alexiwisteria" target="_blank" rel="noopener noreferrer" className="hover:text-[#3CB371] p-4 block">GitHub</a>
                </Card>,
                ''
            ];
        } else if (lowerCommand === 'fun') {
            result = [
                "Interactive Features:",
                "",
                <Card>
                    <button onClick={() => handleCommand('change color')} className="p-4 text-left hover:text-[#3CB371]">
                        'change color' → Customize interface colors
                    </button>
                </Card>,
                <Card>
                    <button onClick={() => handleCommand('joke')} className="p-4 text-left hover:text-[#3CB371]">
                        'joke' → Hear a funny joke
                    </button>
                </Card>,
                <Card>
                    <button onClick={() => handleCommand('ascii art')} className="p-4 text-left hover:text-[#3CB371]">
                        'ascii art' → See some cool ASCII art
                    </button> 
                </Card>,
                <Card>
                    <button onClick={() => handleCommand('date')} className="p-4 text-left hover:text-[#3CB371]">
                        'date' → Display the current date and time
                    </button>
                </Card>,
                ""
            ];
        } else if (lowerCommand === 'projects') {
            result = [
                '',
                <Card>
                    <a href="/ai-grading-project" className="p-4 block hover:text-[#3CB371]">
                        <div className="font-bold">AI Autograding</div>
                        <div className="mt-2">An innovative AI-powered autograding system designed to streamline the assessment process for programming assignments.</div>
                        <div className="mt-2">Technology Stack: Python, OpenAI API, Next.js</div>
                    </a>
                </Card>,
                ''
            ];
        } else if (lowerCommand === 'ai autograding') {
            window.location.href = '/ai-grading-project';
            result = [];
        } else if (lowerCommand === 'ascii art') {
            result = [
                '',
                <pre className="font-mono whitespace-pre">
                    {asciiArt}
                </pre>,
                ''
            ];
        } else if (lowerCommand === 'change color') {
            result = [
                '',
                'Choose a color:',
                '',
                ...Object.keys(colorMap).map(colorName => (
                    <Card key={colorName}>
                        <button 
                            onClick={() => {
                                setColor(colorMap[colorName]);
                                handleCommand(`Color changed to ${colorName}!`);
                            }} 
                            className={`p-4 text-left w-full hover:${colorMap[colorName]}`}
                        >
                            {colorName.charAt(0).toUpperCase() + colorName.slice(1)}
                        </button>
                    </Card>
                )),
                ''
            ];
        } else if (lowerCommand === 'joke') {
            const randomJoke = jokes[Math.floor(Math.random() * jokes.length)];
            result = [
                '',
                randomJoke,
                ''
            ];
        } else if (lowerCommand === 'date') {
            const now = new Date();
            result = [
                '',
                now.toLocaleString(),
                ''
            ];
        } else if (lowerCommand === 'resume') {
            result = [
                '',
                ...resume.map(line => {
                    if (line === '') return <div key={line} className="h-4" />;
                    if (line.startsWith('Professional Summary') || 
                        line.startsWith('Skills') ||
                        line.startsWith('Education') ||
                        line.startsWith('Extracurricular Activities') ||
                        line.startsWith('Professional Experience')) {
                        return <div key={line} className="text-xl font-bold mt-6 mb-2">{line}</div>;
                    }
                    if (line.includes('(')) {
                        return <div key={line} className="text-lg font-semibold mt-4">{line}</div>;
                    }
                    if (line.startsWith('•')) {
                        return <div key={line} className="pl-4 py-1">{line}</div>;
                    }
                    return <div key={line} className="py-1">{line}</div>;
                }),
                ''
            ];
        } else if (lowerCommand === 'clear') {
            setOutput([
                "Welcome to my interactive portfolio terminal.",
                <Card key="explore">
                    <button onClick={() => handleCommand('explore')} className="p-4 text-left hover:text-[#3CB371]">
                        Enter 'explore' to discover available commands
                    </button>
                </Card>,
            ]);
            return;
        } else {
            result = ['', 'Command not recognized', ''];
        }

        setOutput((prevOutput) => [
            ...prevOutput, 
            '', 
            `> ${command}`, 
            ...(Array.isArray(result) ? result : [result]),
            '',
            <Card key={`clear-${prevOutput.length}`}>
                <button onClick={() => handleCommand('clear')} className="p-4 block w-full text-left hover:text-[#3CB371]">
                    clear
                </button>
            </Card>
        ]);
        setInput('');
    };

    return (
        <div className="bg-none font-mono p-4 min-h-screen w-full max-w-[1200px] mx-auto">
            <div className="output mb-6 text-lg space-y-1 w-fit">
                {output.map((line, index) => (
                    <div key={index} className={`${color} py-0.5 break-words w-full`}>{line}</div>
                ))}
            </div>
            <div className="input-line flex items-left text-lg mt-4">
                <span className={`prompt mr-2 ${color} whitespace-nowrap`}>alexis.dev@code-studio:~$</span>
                <input
                    type="text"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    onKeyDown={(e) => {
                        if (e.key === 'Enter') {
                            handleCommand(input);
                            e.currentTarget.value = '';
                        }
                    }}
                    className={`bg-transparent border-none outline-none w-full ${color} text-lg`}
                    autoFocus
                />
            </div>
        </div>
    );
};

export default Terminal;
