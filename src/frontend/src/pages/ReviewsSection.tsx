import { SectionWrapper } from "@/components/SectionWrapper";
import { Star } from "lucide-react";

const reviews = [
  {
    name: "Hitesh Chaudhary",
    role: "MBBS Student • Fergana Medical Institute of Public Health",
    rating: 5,
    text: "My medical journey started with a strong foundation in Physics at Medhavi. Pooja Ma'am's teaching style made difficult numerical problems simple and boosted my confidence for NEET.",
    image: "/assets/reviews/hitesh-chaudhary.jpg",
  },
  {
    name: "Khushi Khan",
    role: "Class 12 1st Topper • Raheemia Public School, Bijnor",
    rating: 5,
    text: "Pooja Ma'am made Physics my strongest subject. Her concept-based teaching and regular DPPs helped me score confidently in my board exams. Every doubt was cleared patiently, which made learning enjoyable.",
    image: "/assets/reviews/khushi-khan.jpg",
  },
  {
    name: "Gunjan Khanna",
    role: "Shikhar Shiksha Sadan School Topper • 91%",
    rating: 5,
    text: "The disciplined study schedule, weekly tests, and personal guidance at Medhavi Physics Classes helped me secure 91% in Class 12. I am grateful to Pooja Ma'am for always motivating me.",
    image: "/assets/reviews/gunjan-khanna.jpg",
  },
  {
    name: "Tasmiya",
    role: "School Topper (95.6%) • Raheemia Public School • Batch 2021",
    rating: 5,
    text: "The personal attention and consistent practice sessions at Medhavi helped me achieve 95.6% in Class 12. The supportive environment kept me motivated throughout my preparation.",
    image: "/assets/reviews/tasmiya.jpg",
  },
  {
    name: "Aastha Chaudhary",
    role: "MBBS Student • Muzaffarnagar Medical College",
    rating: 5,
    text: "Pooja Ma'am's guidance played a major role in my NEET preparation. The detailed explanations, revision classes, and doubt sessions helped me stay focused and achieve my dream of studying MBBS.",
    image: "/assets/reviews/aastha-chaudhary.jpg",
  },
  {
    name: "Aryan Malik",
    role: "2nd Topper (93.8%) • H.M. Public School • Batch 2021",
    rating: 5,
    text: "Joining Medhavi Physics Classes was one of my best decisions. The practical approach to teaching and regular assessments helped me score 93.8% with confidence.",
    image: "/assets/reviews/aryan-malik.jpg",
  },
];

// Replace ONLY the avatar block inside your existing component with:
//
// <div
//   className="w-12 h-12 rounded-full overflow-hidden flex items-center justify-center text-2xl flex-shrink-0 font-bold"
//   style={{
//     background:
//       "linear-gradient(135deg, oklch(0.22 0.03 270), oklch(0.18 0.02 270))",
//     border: "1px solid oklch(0.72 0.16 80 / 0.2)",
//   }}
// >
//   {r.image ? (
//     <img
//       src={r.image}
//       alt={r.name}
//       className="w-full h-full object-cover"
//       loading="lazy"
//     />
//   ) : (
//     r.emoji
//   )}
// </div>
//
// The remainder of your component stays exactly as it is.
