import { IconType } from "react-icons";

export type Feature = {
  id: number;
  icon: IconType;
  title: string;
  description: string;
  size?: number; // Add this line to include the optional size property
};