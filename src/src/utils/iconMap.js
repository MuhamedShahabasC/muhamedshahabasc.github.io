// Icon mapping utility for react-icons
// Using Heroicons 2 for modern, consistent icon design

import { 
  HiOutlineEnvelope,
  HiOutlineDevicePhoneMobile,
  HiOutlineArrowDown,
  HiOutlineHome,
  HiOutlineUser,
  HiOutlineDocumentText,
  HiOutlineBriefcase,
  HiOutlinePhoto,
  HiOutlineChatBubbleLeftRight,
  HiOutlineXMark,
  HiOutlineSquares2X2,
  HiOutlineArrowUpRight,
  HiOutlineArrowRight,
  HiOutlineGlobeAlt,
  HiOutlineServer,
  HiOutlineCheckCircle,
  HiOutlineBookOpen
} from 'react-icons/hi2';

import { 
  FaLinkedinIn,
  FaWhatsapp,
  FaGithub,
  FaMedium
} from 'react-icons/fa';

// Export all icons with descriptive names
export const icons = {
  // Social icons
  envelope: HiOutlineEnvelope,
  mobile: HiOutlineDevicePhoneMobile,
  linkedin: FaLinkedinIn,
  whatsapp: FaWhatsapp,
  github: FaGithub,
  medium: FaMedium,
  blog: HiOutlineBookOpen,
  
  // Navigation icons
  arrowDown: HiOutlineArrowDown,
  home: HiOutlineHome,
  user: HiOutlineUser,
  file: HiOutlineDocumentText,
  briefcase: HiOutlineBriefcase,
  scenery: HiOutlinePhoto,
  message: HiOutlineChatBubbleLeftRight,
  times: HiOutlineXMark,
  apps: HiOutlineSquares2X2,
  
  // Service icons
  arrow: HiOutlineArrowUpRight,
  arrowRight: HiOutlineArrowRight,
  webGrid: HiOutlineGlobeAlt,
  server: HiOutlineServer,
  checkCircle: HiOutlineCheckCircle
};

export default icons;
