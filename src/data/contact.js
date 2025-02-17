import { FaGithub, FaLinkedin, FaInstagram, FaEnvelope } from "react-icons/fa";
import { SiLeetcode, SiGeeksforgeeks } from "react-icons/si"; // Import LeetCode & GeeksforGeeks icons


const ContactData = {
  phone: "+91 7339045995",
  email: "dineshram0109@gmail.com",
  address: "Thoothukudi , TamilNadu , India",
  links: [
    {
      url: "https://github.com/DineshRam0109",
      icon: FaGithub,
    },
    {
      url: "https://www.linkedin.com/in/dinesh-ram-324066253/",
      icon: FaLinkedin,
    },
   
    {
      url: "https://www.instagram.com/mr__dinesh_._/",
      icon: FaInstagram,
    },
    {
      url: "mailto:dineshram0109@gmail.com",
      icon:FaEnvelope,
    },
    {
      url: "https://leetcode.com/u/DineshRamA/",
      icon: SiLeetcode, 
    },
    {
      url: "https://www.geeksforgeeks.org/user/user_c3np8eb8yxs/",
      icon: SiGeeksforgeeks, 
    },
    
  ],
};

export default ContactData;
