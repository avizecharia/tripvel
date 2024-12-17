import { Hamburger, NavDrawer, NavItem } from "@fluentui/react-nav-preview";
import { useState } from "react";
import { pages } from "./routes";
export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const openBtn = (
    <Hamburger
      style={{ padding: "1em 2em " }}
      onClick={() => setIsOpen(!isOpen)}
    />
  );
  return (
    <>
      {!isOpen && openBtn}
      <NavDrawer open={isOpen}>
        {openBtn}
        {pages.map((page) => (
          <NavItem key={page.path} href={"/" + page.path} value={page.path}>
            {page.display}
          </NavItem>
        ))}
      </NavDrawer>
    </>
  );
}
