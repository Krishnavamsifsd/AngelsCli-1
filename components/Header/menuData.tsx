import { Menu } from "@/types/menu";

const menuData: Menu[] = [
  {
    id: 1,
    title: "Home",
    newTab: false,
    path: "/",
  },
  {
    id: 3,
    title: "About",
    newTab: false,
    submenu: [
      {
        id: 29,
        title: "Startups",
        newTab: false,
        path: "/startups",
      },
      {
        id: 30,
        title: "Founder",
        newTab: false,
        path: "/founder",
      },
      // {
      //   id: 35,
      //   title: "Team",
      //   newTab: false,
      //   path: "/team",
      // },
      {
        id: 31,
        title: "Award",
        newTab: false,
        path: "/awards",
      },
      {
        id: 33,
        title: "Events",
        newTab: false,
        path: "/events",
      },
      
    ],
  },
  {
    id: 2.3,
    title: "Investors",
    newTab: false,
    path: "/investors",
  },
  
  {
    id: 4,
    title: "Services",
    newTab: false,
    path: "/services",
  },
  {
    id: 2,
    title: "Funding",
    newTab: false,
    path: "/funding",
  },


  {
    id: 5,
    title: "Careers",
    newTab: false,
    path: "/careers",
  },
];

export default menuData;
