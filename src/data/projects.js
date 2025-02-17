import { BiLogoCss3, BiLogoFirebase, BiLogoMongodb, BiLogoReact, BiLogoRedux, BiLogoTailwindCss, BiLogoTypescript } from "react-icons/bi";
import { TbBrandNextjs, TbApi, TbDatabase, TbBrandPrisma } from "react-icons/tb";
import { SiThemoviedatabase, SiExpress } from "react-icons/si";

const ProjectsData = [
  {
    id: "1",
    name: "Movie Website",
    image: "./IMDB.png",
    icons: [BiLogoReact, BiLogoCss3, SiThemoviedatabase],
    description: "This website provides information about movies.",
    github: "https://github.com/VijayKumarReddyTalakola/IMDB",
    demo: "https://imdb-rho.vercel.app",
    category: "MERN Stack",
  },
  {
    id: "2",
    name: "AI Chatbot",
    image: "./ai-chatbot.png",
    icons: [BiLogoReact, BiLogoTailwindCss, TbApi],
    description: "An AI-powered chatbot for customer support.",
    github: "https://github.com/VijayKumarReddyTalakola/AI-Chatbot",
    demo: "https://ai-chatbot.vercel.app",
    category: "AI",
  },
  {
    id: "3",
    name: "Expense Tracker",
    image: "./expense-tracker.png",
    icons: [BiLogoMongodb, SiExpress, BiLogoReact, BiLogoRedux, BiLogoTailwindCss],
    description: "Track your expenses with this app.",
    github: "https://github.com/VijayKumarReddyTalakola/Expense-Tracker",
    demo: "https://vtrack-expense.vercel.app",
    category: "MERN Stack",
  },
  {
    id: "4",
    name: "AI Image Captioning",
    image: "./ai-captioning.png",
    icons: [BiLogoReact, BiLogoTailwindCss, TbApi],
    description: "Generate captions for images using AI.",
    github: "https://github.com/VijayKumarReddyTalakola/AI-Image-Captioning",
    demo: "https://ai-captioning.vercel.app",
    category: "AI",
  },
];


export default ProjectsData;
