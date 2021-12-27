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
      href: "/",
      icon: Briefcase,
      title: "Cargar archivos a db"
  }
];

const navItems = [
  {
    title: "Pages",
    pages: pagesSection,
  }
];

export default navItems;
