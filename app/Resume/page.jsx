"use client";

import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaReact,
  FaFigma,
  FaNodeJs,
  FaPython,
  FaRProject,
  FaJava,
  FaBootstrap,
  FaAws,} from "react-icons/fa";


// icons
import { 
        SiTailwindcss,SiCsharp,SiOpenzeppelin ,
         SiNextdotjs,SiAndroidstudio,SiC,
         SiCplusplus,SiPowerbi,SiMicrosoftazure,
         SiMicrosoftsqlserver,SiMicrosoftsharepoint,
         SiMysql,SiSolidity,SiVisualstudiocode,
         SiMicrosoftaccess,SiTradingview,SiAmazonec2,
         SiMicrosoftexcel,SiDocker,SiAdminer,
         SiMicrosoftpowerpoint,SiAmazons3,SiGoogleanalytics,
         SiTensorflow,SiKeras,SiTableau,SiFirebase ,

  } from "react-icons/si";

import { VscAzureDevops } from "react-icons/vsc";

// about data 
const about = {
    title: "About Me",
    description:
      "Driven and multifaceted data science professional pursuing a Master of Science in Applied Data Science at Syracuse University. With a solid foundation in computer science engineering and a rich history of achievements in both academics and extracurricular activities, I aim to leverage my technical expertise and exceptional client handling skills to make impactful contributions in the data informatics field.",
    info: [
        {
         fieldName: "Name",
         fieldValue: "Nawazish K,S M"
        },
        {
         fieldName: "Phone",
         fieldValue: "(+1) 315 952 9825"
        },
        {
         fieldName: "Experience",
         fieldValue: "2 Years"
        },
        {
         fieldName: "Nationality",
         fieldValue: "Indian"
        },
        {
         fieldName: "Email",
         fieldValue: "snkhalan@g.syr.edu"  
        },
        {
         fieldName: "Linguality",
         fieldValue: "Polyglotism"  
        }
    ]   
};
  
// about experience 
const experience = {
    icon: "/assets/resume/badge.svg",
    title: "My Experience",
    description:
      "With a strong foundation in computer science and a continuous drive for learning, my professional journey encompasses diverse roles in the tech industry. Each position has honed my skills and deepened my expertise, from data analytics and customer success to web development and blockchain technology. Below are highlights from my career:",
    items: [
      {
        company: "Syracuse University.",
        position: "Research Analyst",
        duration: "Jun 2025 - Jun 2026",
      },
      {
        company: "Aptean.",
        position: "Data Analyst",
        duration: "Mar 2022 - Mar 2023",
      },
      {
        company: "BrainOVision",
        position: "Data Analyst Intern",
        duration: "Summer 2021",
      },
      {
        company: "INTERAKTIVE.IO",
        position: "Founding Data Scientist",
        duration: "Jan 2021 - Mar 2022",
      },
    ],
};
  
// about Education 
const education = {
    icon: "/assets/resume/cap.svg",
    title: "My Education",
    description:
      "",
    items: [
      {
        institution: "Syracuse University",
        degree: "MS In Applied Data Science",
        duration: "2023 - 2025",
      },
      {
        institution: "GITAM Hyderabad",
        degree: "B.Tech Computer Science",
        duration: "2018 - 2022",
      },
    ],
};
  
//skills data 
const skills = {
    title: "My Skills",
    description:
      "Throughout my professional experience, I have acquired and continuously refined a diverse assortment of skills. These range from programming languages to integrated development environments (IDEs) and frameworks.",
    skilllist: [
      {
        icon: <FaPython />,
        name: "Python",
      },
      {
        icon: <FaRProject />,
        name: "R / R Studio",
      },
      {
        icon:<SiTableau />,
        name:"Tableau",
      },
      {
        icon: <SiPowerbi />,
        name: "PoweBi",
      },
      {
        icon: <SiTensorflow />,
        name: "Tensor Flow",
      },
      {
        icon: <SiKeras />,
        name: "Keras",
      },
      {
        icon: <SiGoogleanalytics />,
        name:"Google Analytics",
      },
      {
        icon: <FaAws />,
        name: "AWS",
      },
      {
        icon: <SiAmazonec2 />,
        name: "Amazon EC2",
      },
      {
        icon:<SiAmazons3 />,
        name:"Amazon s3",
      },
      {
        icon:<SiMicrosoftazure />,
        name:"Microsoft Azure" ,
      },
      {
        icon: <VscAzureDevops />,
        name: "DevOps",
      },
      {
        icon: <SiMicrosoftsharepoint  />,
        name: "DevOps",
      },
      {
        icon: <SiMicrosoftpowerpoint />,
        name: "Microsoft Power Point",
      },

      {
        icon: <SiMicrosoftexcel />,
        name: "Microsoft Excel",
      },
      {
        icon: <SiMicrosoftaccess />,
        name: "Microsoft Access",
      },
      {
        icon: <SiMicrosoftsqlserver />,
        name: "Microsoft SQL Server",
      },
      {
        icon: <SiMysql />,
        name: "Mysql",
      },
      {
        icon: <SiDocker />,
        name: "Docker",
      },
      {
        icon: <SiAdminer />,
        name: "Adminer",
      },
      {
        icon: <SiC />,
        name: "C Language",
      },
      {
        icon: <SiCplusplus />,
        name: "C++",
      },
      {
        icon: <SiCsharp />,
        name: "CSharp",
      },
      {
        icon: <FaJava />,
        name: "Java",
      },
      {
        icon: <FaJs />,
        name: "javascript",
      },
      {
        icon: <FaHtml5 />,
        name: "html 5",
      },
      {
        icon: <FaCss3 />,
        name: "CSS 3",
      },

      {
        icon: <FaReact />,
        name: "react.js ",
      },
      {
        icon: <SiNextdotjs />,
        name: "next.js",
      },
      {
        icon: <FaNodeJs />,
        name: "node.js",
      },
      {
        icon: <SiTailwindcss />,
        name: "tailwind.css",
      },
      {
        icon: <FaBootstrap />,
        name: "BootStrap",
      },
      {
        icon: <SiVisualstudiocode />,
        name: "Visual Studio Code",
      },
      {
        icon: <SiAndroidstudio />,
        name: "Android Studio",
      },
      {
        icon:<SiTradingview />,
        name: "Trading View",
      },
      {
        icon: <SiFirebase />,
        name:"Firebase",
      },

      {
        icon: <SiOpenzeppelin />,
        name: "Open Zeppelin",
      },
      {
        icon: <SiSolidity />,
        name: "Solidity",
      },
      {
        icon: <FaFigma />,
        name: "figma",
      },
    ],
};
  
//project information
const project = {
    title: "My Projects",
    description:
      "An assortment of projects undertaken by me individually or as a team member. These projects reflect my ability to apply technical skills, collaborate effectively, and deliver impactful solutions in various domains.",
    items: [
      {
        Name: "Price Elasticity Modelling Using PYSPARK",
        description: "An attempt to measure how sensitive consumer demand is to changes in price.",
        TechStack: "Pyspark,Snowflake ",
      },

      {
        Name: "Fashion Recommedndation System",
        description: "Building a Recommendation System with two Two-Tower Models.",
        TechStack: "Python,Deep Learning ",
      },

      {
        Name: "Options Pricing with ML",
        description: "To predict call option close price.",
        TechStack: "Python,Machine Learning ",
      },

      {
        Name: "Farm 2 Fork",
        description: "An App which connects farmers and grocers.",
        TechStack: "SQL,HTML ",
      },

      {
        Name: "Energy Consumption Analysis",
        description: "Data analysis on electricity consumption of a county's residents .",
        TechStack: "R,Shiny ",
      },

      {
        Name: "Block Chain Contracts",
        description: "Wrote Contracts to mint NFTs.",
        TechStack: "Solidity,Open Zepellin ",
      },

      {
        Name: " ARIMA Model",
        description: "Predicted a post-covid forecast of the Nifty50.",
        TechStack: "Python,Deep Learning",
      },

      {
        Name: "Suicidal Intent Analysis",
        description: "To detect Suicidal intent in Messages.",
        TechStack: "Python,Machine Learning ",
      },

      {
        Name: "Portfolio Website",
        description: "A Website showcasing me.",
        TechStack: "Nextjs,CSS ",
      },

      {
        Name: " Route Optimization",
        description: "An Attempt at optimizing drone routes.",
        TechStack: "Bluesky ",
      },


    ],
};


import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import {
        Tooltip,
        TooltipContent,
        TooltipProvider,
        TooltipTrigger,
} from "@/components/ui/tooltip";
  
import { ScrollArea } from "@/components/ui/scroll-area";
import { motion } from "framer-motion";
  
const Resume = () => {
  return (
    <motion.div
        initial={{ opacity: 0 }}
        animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
     }}
  className="min-h-[80vh] flex items-center justify-center py-12"
>
  <div className="container mx-auto">
    <Tabs defaultValue="about" className="flex flex-col xl:flex-row gap-[60px]">
      <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6">
        <TabsTrigger value="about" style={{ paddingRight: '6%' }}>About Me</TabsTrigger>
        <TabsTrigger value="education">Education</TabsTrigger>
        <TabsTrigger value="skills" style={{ paddingRight: '11%' }}>Skills</TabsTrigger>
        <TabsTrigger value="experience" style={{ paddingLeft: '5%' }}>Experience</TabsTrigger> 
        <TabsTrigger value="project" style={{ paddingRight: '6%' }}>Projects</TabsTrigger>
      </TabsList>

      {/* content */}
      <div className="min-h-[70vh] w-full">
        {/* experience */}
        <TabsContent value="experience" className="w-full">
            <div className="flex flex-col gap-[30px] text-center xl:text-left">
                 <h3 className="text-4xl font-bold">{experience.title}</h3>
                     <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0 text-justify">
                        {experience.description}
                    </p>
            
                    <ScrollArea className="h-[400px]">
                        <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                        {experience.items.map((item, index) => {
                            return (
                                <li key={index} 
                                className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1"
                                >
                                <span className="text-accent">{item.duration}</span>
                                <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">{item.position}</h3>
                                <div className=" flex items-center gap-3">
                                    {/* DOT */}
                                    <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                                    <p className=" text-white/60">{item.company}</p>
                                </div>
                                </li>
                            );
                        })}
                        </ul>
                    </ScrollArea>
            </div>
        </TabsContent>


        {/* Education */}
        <TabsContent value="education" className="w-full">
            <div className="flex flex-col gap-[30px] text-center xl:text-left">
                 <h3 className="text-4xl font-bold">{education.title}</h3>
                     <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                        {education.description}
                    </p>
            
                    <ScrollArea className="h-[400px]">
                        <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                        {education.items.map((item, index) => {
                            return (
                                <li key={index} 
                                className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1"
                                >
                                <span className="text-accent">{item.duration}</span>
                                <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">{item.degree}</h3>
                                <div className=" flex items-center gap-3">
                                    {/* DOT */}
                                    <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                                    <p className=" text-white/60">{item.institution}</p>
                                </div>
                                </li>
                            );
                        })}
                        </ul>
                    </ScrollArea>
            </div>
        </TabsContent>

        {/* skills */}
        <TabsContent value="skills" className="w-full h-full">
            <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold ">{skills.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0 text-justify">
                    {skills.description}
                </p>
            
        <ul className=" grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 xl:gap-[30px]">
            {skills.skilllist.map((skill, index) => {
                 return (
                    <li key={index}>
                      <TooltipProvider delayDuration={100}>
                        <Tooltip>
                          <TooltipTrigger className="w-full h-[150px] bg-[#232329] rounded-xl flex justify-center items-center group">
                            <div className="text-6xl group-hover:text-accent transition-all duration-300">
                                {skill.icon}
                            </div>
                          </TooltipTrigger>
                          <TooltipContent>
                            <p className="capitalize">{skill.name}</p>
                          </TooltipContent>
                        </Tooltip>
                      </TooltipProvider>
                    </li>
                  );
                  
            })}
        </ul>
        </div>
        </TabsContent>


        {/* About Me */}
        <TabsContent value="about"
        className="w-full h-full text-center ">
        <div className="flex flex-col gap-[30px] text-center xl:text-left">
            <h3 className=" text-4xl font-bold">{about.title}</h3>
            <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0 text-justify">{about.description}</p>
            <ul className=" grid grid-cols-1 xl:grid-cols-2 gap-y-8 gap-x-12 max-w-[620px] mx-auto xl:mx-0 ">
                {about.info.map((item, index) => {
                    return (
                        <li key={index}
                        className="flex items-center justify-center xl:justify-start gap-4">
                         <span className="text-white/60  text-xl">{item.fieldName}</span>
                         <span className="text-xl">{item.fieldValue}</span>
                        </li>
                        );
                    })}
            </ul>

        </div>
        </TabsContent>

        {/* projects */}
        <TabsContent value="project" className="w-full">
            <div className="flex flex-col gap-[30px] text-center xl:text-left">
                 <h3 className="text-4xl font-bold">{project.title}</h3>
                     <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0 text-justify">
                        {project.description}
                    </p>
            
                    <ScrollArea className="h-[400px] ">
                        <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                        {project.items.map((item, index) => {
                            return (
                                <li key={index} 
                                className="bg-[#232329] h-[250px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1"
                                >
                                <span className="text-l max-w-[221px] min-h-[20px] text-center lg:text-left">{item.Name}</span>
                                <h3 className="text-accent">{item.TechStack}</h3>
                                <div className=" flex items-center gap-3">
                                    {/* DOT */}
                                    
                                    <p className=" text-white/60 text-center lg:text-left">{item.description}</p>
                                </div>
                                </li>
                            );
                        })}
                        </ul>
                    </ScrollArea>
            </div>
        </TabsContent>

        </div>

    </Tabs>
  </div>
</motion.div>


  );
};

export default Resume;

