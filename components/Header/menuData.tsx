import { Menu } from "@/types/menu";

const menuData: Menu[] = [
  {
    id: 1,
    title: "Home",
    newTab: false,
    path: "/",
  },
  {
    id: 2,
    title: "Features",
    newTab: false,
    path: "/#features",
  },
  {
    id: 2.3,
    title: "Investors",
    newTab: false,
    path: "/investors",
  },
  {
    id: 3,
    title: "About",
    newTab: false,
    submenu: [
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
      {
        id: 35,
        title: "News",
        newTab: false,
        path: "/news",
      },
      {
        id: 35.1,
        title: "Public policy",
        newTab: false,
        path: "/public-policy",
      },
    ],
  },

  {
    id: 4,
    title: "Support",
    newTab: false,
    path: "/support",
  },
];

export default menuData;
