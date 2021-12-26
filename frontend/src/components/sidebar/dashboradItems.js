import {
  Briefcase,
  Search,
  PieChart,
} from "react-feather";

const pagesSection = [
  {
    href: "/dashboard/tabla",
    icon: Search,
    title: "Tabla",
  },
  {
      href: "/dashboard/grafica",
      icon: PieChart,
      title: "Grafica",
  },
  {
      href: "/portafolio",
      icon: Briefcase,
      title: "Subir archivos"
  }
];

const navItems = [
  {
    title: "Pages",
    pages: pagesSection,
  }
];

export default navItems;
