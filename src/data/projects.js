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
    github: "https://github.com/DineshRam0109/IPL-ANALYSIS-?tab=readme-ov-file",
    demo: "https://public.tableau.com/views/dd_17014564448050/Dashboard1?:language=en-US&:sid=&:display_count=n&:origin=viz_share_link}",
    category: "Data Visualization",
  },
  {
    id: "10",
    name: "Amazon Sales",
    image:amazonlogo,
    icons: [SiTableau],
    description: "A real-time dashboard for analyzing total revenue,products by categories",
    github: "https://github.com/DineshRam0109/Amazon-Sales-Overview",
    demo: "https://public.tableau.com/app/profile/dinesh.ram.a4642/viz/AmazonDineshTableau/Dashboard3",
    category: "Data Visualization",
  },
  {
    id: "11",
    name: "Tic-Tac-Toe",
    image:tictactoelogo,
    icons: [BiLogoPython],
    description: "Tic-Tac-Toe game using MinMax Algorithm",
    github: "https://github.com/DineshRam0109/codsoft-projects/blob/main/task%201%20chatbot.py",
    demo: "https://drive.google.com/drive/folders/1gPEB3dgdmSkB1-FIM7T4LAXqry6T-E8i?usp=sharing",
    category: "Mini Projects",
  },
  {
    id: "12",
    name: "Chatbot",
    image:friendlychatbot,
    icons: [BiLogoPython],
    description: "Chatbot that can interact using predefined rules",
    github: "https://github.com/DineshRam0109/codsoft-projects/blob/main/task%201%20chatbot.py",
    demo: "https://drive.google.com/drive/folders/14E9HXpKW7pOxmsFm658tRH-L3EJUA6rf?usp=sharing",
    category: "Mini Projects",
  },
  {
    id: "13",
    name: "Movie Recommendation",
    image:movierecommend,
    icons: [BiLogoPython],
    description: "Suggests movies using techniques like collaborative filtering and content-based filtering",
    github: "https://github.com/DineshRam0109/codsoft-projects/blob/main/task%203%20recommendation%20system.py",
    demo: "https://drive.google.com/drive/folders/1IDqt2u1I0X4A3C-HndsAA0bKgL1MXO6C?usp=sharing",
    category: "Mini Projects",
  },
  {
    id: "14",
    name: "ChatterLink",
    image:clientcommunication,
    icons: [SiCplusplus],
    description: "Real-Time Multi-Client Chat System",
    github: "https://github.com/DineshRam0109/ChatterLink",
    demo: "https://drive.google.com/drive/folders/1wq8nKUbdj8axTZb47jj-uWFdLcACNsrK?usp=sharing",
    category: "Mini Projects",
  },
  {
    id: "15",
    name: "Face Detection",
    image:facedetection,
    icons: [BiLogoPython],
    description: "Developed a face detection tool using pre-trained models like Haar cascades and deep learning-based detectors",
    github: "https://github.com/DineshRam0109/codsoft-projects/blob/main/task%205%20object%20detection.py",
    demo: "https://drive.google.com/drive/folders/1w_Nd7CWbuDmEyVlUBk04NRvN3vImqNg0?usp=sharing",
    category: "Mini Projects",
  },
 
  {
    id: "16",
    name: "Real-Time Weather Checker",
    image:weather,
    icons: [BiLogoHtml5,BiLogoCss3,BiLogoJavascript],
    description: "Check weather for Cities by giving City name",
    github: "https://github.com/DineshRam0109/Real-Time-Weather-Checker",
    demo: "https://drive.google.com/drive/folders/1FlrcwcU5mOWq9f8Na-nBr--Xc5ltiA8v?usp=sharing",
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
    github: "https://github.com/DineshRam0109/BMI-Calculator-Javascript",
    demo: "https://drive.google.com/drive/folders/12SAR9Bqd8DScq6CF_v_YzXYetvTt-7NX?usp=sharing",
    category: "Mini Projects",
  },
];

export default ProjectsData;
