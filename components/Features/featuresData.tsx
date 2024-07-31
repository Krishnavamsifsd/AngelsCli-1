import { Feature } from "@/types/feature";
import { FaNetworkWired, FaChalkboardTeacher, FaMoneyCheckAlt, FaTools, FaUsers, FaCalendarAlt } from "react-icons/fa";

const featuresData: Feature[] = [
  {
    id: 1,
    icon: FaNetworkWired,
    title: "Extensive Network",
    description:
      "Connect with a wide network of angel investors and startups.",
  },
  {
    id: 2,
    icon: FaChalkboardTeacher,
    title: "Expert Guidance",
    description:
      "Receive mentorship and guidance from experienced entrepreneurs.",
  },
  {
    id: 3,
    icon: FaMoneyCheckAlt,
    title: "Investment Opportunities",
    description:
      "Access exclusive investment opportunities tailored to your needs.",
  },
  {
    id: 4,
    icon: FaTools,
    title: "Valuable Resources",
    description:
      "Gain access to valuable resources and tools to help your startup grow.",
  },
  {
    id: 5,
    icon: FaUsers,
    title: "Supportive Community",
    description:
      "Join a supportive community of like-minded entrepreneurs and investors.",
  },
  {
    id: 6,
    icon: FaCalendarAlt,
    title: "Exclusive Events",
    description:
      "Participate in exclusive events and networking opportunities.",
  },
];

export default featuresData;