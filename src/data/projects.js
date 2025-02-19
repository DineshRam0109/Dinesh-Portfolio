import {
  BiLogoCss3,BiLogoMongodb, BiLogoReact,
  BiLogoTailwindCss,BiLogoHtml5, BiLogoPython,
  BiLogoJavascript
} from "react-icons/bi";
import {TbBrandNodejs} from "react-icons/tb";
import {SiTableau,SiCplusplus, SiStreamlit , SiExpress} from "react-icons/si";


import jobportallogo from "../assets/Achieve images/jobportalimage.jpg"
import feesmanagement from "../assets/Achieve images/fees-management.png"
import homelylogo from "../assets/Achieve images/homelylogo.jpg"
import portfolioimg from "../assets/Achieve images/portfolioimg.jpg"
import medicinelogo from "../assets/Achieve images/medicinelogo.jpg"
import quizease from "../assets/Achieve images/quizease.jpg"
import voxifylogo from "../assets/Achieve images/voxifylogo.jpg"
import chatbotlogo from "../assets/Achieve images/chatbotlogo.jpg"
import ipllogo from "../assets/Achieve images/IPL-Logo.avif"
import amazonlogo from "../assets/Achieve images/amazon-4k-logo-qhd.jpg"
import tictactoelogo from "../assets/Achieve images/tictactoelogo.png"
import friendlychatbot from "../assets/Achieve images/friendly-chatbot.jpg"
import movierecommend from "../assets/Achieve images/movierecommend.jpg"
import facedetection from "../assets/Achieve images/facedetection.webp"
import clientcommunication from "../assets/Achieve images/clientcommunication.png"
import weather from "../assets/Achieve images/weather.webp"
import gpaclculator from "../assets/Achieve images/gpacalculator.png"
import bmilogo from "../assets/Achieve images/bmilogo.png"


const ProjectsData = [
  {
    id: "1",
    name: "HireConnect",
    image:jobportallogo,
    icons: [BiLogoMongodb,SiExpress,BiLogoReact,TbBrandNodejs,BiLogoTailwindCss],
    description: "Effortless hiring and job searching in one place",
    github: "",
    demo: "",
    category: "MERN Stack",
  },
  {
    id: "2",
    name: "GatePay",
    image:feesmanagement,
    icons: [BiLogoMongodb,SiExpress,BiLogoReact,TbBrandNodejs],
    description: "Effective and Adaptive Payment Gateway for ERP System",
    github: "",
    demo: "",
    category: "MERN Stack",
  },
  {
    id: "3",
    name: "Homely Hub",
    image: homelylogo,
    icons: [BiLogoMongodb,SiExpress,BiLogoReact,TbBrandNodejs],
    description: "People find and book unique places to stay while traveling",
    github: "",
    demo: "",
    category: "MERN Stack",
  },
  {
    id: "4",
    name: "Responsive Portfolio",
    image:portfolioimg,
    icons: [BiLogoReact],
    description: "Collection of your professional accomplishment",
    github: "",
    demo: "",
    category: "MERN Stack",
  },
  {
    id: "5",
    name: "MediMate",
    image:medicinelogo,
    icons: [BiLogoPython,BiLogoHtml5,BiLogoCss3],
    description: "AI-driven symptom checker with tailored health recommendations.",
    github: "",
    demo: "",
    category: "AI",
  },
  {
    id: "6",
    name: "QuizEase",
    image:quizease,
    icons: [BiLogoPython,BiLogoHtml5,BiLogoCss3],
    description: "Effortlessly generate MCQs from uploaded files",
    github: "",
    demo: "",
    category: "AI",
  },
  {
    id: "7",
    name: "Voxify",
    image:voxifylogo,
    icons: [BiLogoPython],
    description: "Speak, translate, and communicate seamlessly in real-time with flawless accuracy",
    github: "",
    demo: "",
    category: "AI",
  },
   {
    id: "8",
    name: "PDFGenie",
    image:chatbotlogo,
    icons: [BiLogoPython,SiStreamlit],
    description: "AI-powered document assistant chatbot",
    github: "",
    demo: "",
    category: "AI",
  },
  {
    id: "9",
    name: "IPL ANALYSIS",
    image:ipllogo,
    icons: [SiTableau],
    description: "A real-time dashboard for analyzing IPL cricket data with interactive visualizations",
    github: "",
    demo: "",
    category: "Data Visualization",
  },
  {
    id: "10",
    name: "Amazon Sales",
    image:amazonlogo,
    icons: [SiTableau],
    description: "A real-time dashboard for analyzing total revenue,products by categories",
    github: "",
    demo: "",
    category: "Data Visualization",
  },
  {
    id: "11",
    name: "Tic-Tac-Toe",
    image:tictactoelogo,
    icons: [BiLogoPython],
    description: "Tic-Tac-Toe game using MinMax Algorithm",
    github: "",
    demo: "",
    category: "Mini Projects",
  },
  {
    id: "12",
    name: "Chatbot",
    image:friendlychatbot,
    icons: [BiLogoPython],
    description: "Chatbot that can interact using predefined rules",
    github: "",
    demo: "",
    category: "Mini Projects",
  },
  {
    id: "13",
    name: "Movie Recommendation",
    image:movierecommend,
    icons: [BiLogoPython],
    description: "Suggests movies using techniques like collaborative filtering and content-based filtering",
    github: "",
    demo: "",
    category: "Mini Projects",
  },
  {
    id: "14",
    name: "ChatterLink",
    image:clientcommunication,
    icons: [SiCplusplus],
    description: "Real-Time Multi-Client Chat System",
    github: "",
    demo: "",
    category: "Mini Projects",
  },
  {
    id: "15",
    name: "Face Detection",
    image:facedetection,
    icons: [BiLogoPython],
    description: "Developed a face detection tool using pre-trained models like Haar cascades and deep learning-based detectors",
    github: "",
    demo: "",
    category: "Mini Projects",
  },
 
  {
    id: "16",
    name: "Real-Time Weather Checker",
    image:weather,
    icons: [BiLogoHtml5,BiLogoCss3,BiLogoJavascript],
    description: "Check weather for Cities by giving City name",
    github: "",
    demo: "",
    category: "Mini Projects",
  },
  {
    id: "17",
    name: "GPA Calculator",
    image:gpaclculator,
    icons: [BiLogoHtml5,BiLogoCss3,BiLogoJavascript],
    description: "Computes your Grade Point Average based on grades and credit points",
    github: "",
    demo: "",
    category: "Mini Projects",
  },
  {
    id: "18",
    name: "BMI Calculator",
    image:bmilogo,
    icons: [BiLogoHtml5,BiLogoCss3,BiLogoJavascript],
    description: "Determines body mass index based on weight and height",
    github: "",
    demo: "",
    category: "Mini Projects",
  },
];

export default ProjectsData;
