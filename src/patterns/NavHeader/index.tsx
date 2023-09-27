"use client";
import NavCustom from "@/components/NavCustom";

import "./styles.scss";
import { useUi } from "@/context/UiContext";

const listNav = [
  {
    text: "Página Inicial",
    link: "#",
  },
  {
    text: "Camisetas",
    link: "#",
  },
  {
    text: "Calças",
    link: "#",
  },
  {
    text: "Sapatos",
    link: "#",
  },
  {
    text: "Contato",
    link: "#",
  },
];

const NavHeader = () => {
  const { menuOpen } = useUi();

  return (
    <NavCustom
      list={listNav}
      className={`nav_header ${menuOpen ? "open" : ""}`}
    />
  );
};

export default NavHeader;
