// Import portfolio images with responsive variants (400w, 800w) in WebP format
import hostelManagement400 from "./Hostel_Management.jpg?portfolio&w=400";
import hostelManagement800 from "./Hostel_Management.jpg?portfolio&w=800";
import timelessWatch400 from "./timelessWatches.png?portfolio&w=400";
import timelessWatch800 from "./timelessWatches.png?portfolio&w=800";

// Other portfolio images (not currently used in works.jsx but kept for reference)
import netflixClone from "./Netflix-clone_react.jpg";
import passwordGen from "./password-generator.png";
import yearlyExp from "./yearly-expense.jpg";
import whatsapp from "./whatsapp.jpg";
import cadbury from "./cadbury-diarymilk.jpg";

export default {
  hostelManagement: {
    src: hostelManagement400,
    srcSet: `${hostelManagement400} 400w, ${hostelManagement800} 800w`,
    sizes: "(max-width: 768px) 400px, 800px",
    width: 400,
    height: 300,
  },
  timelessWatch: {
    src: timelessWatch400,
    srcSet: `${timelessWatch400} 400w, ${timelessWatch800} 800w`,
    sizes: "(max-width: 768px) 400px, 800px",
    width: 400,
    height: 300,
  },
  netflixClone,
  passwordGen,
  yearlyExp,
  whatsapp,
  cadbury,
};
