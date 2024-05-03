import { motion } from "framer-motion";
import React, { useState } from "react";
import { navData } from "../../Data";
import CloseIcon from "./Assets/CloseIcon";
import MenuIcon from "./Assets/MenuIcon";
import NavItem from "./Components/NavItem";
import "./TopNav.scss";

export default function TopNav() {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <nav className="top-navigation">
      {/* <div className="logo-wrapper">
        <img src={logo} alt="logo" />
      </div> */}
      <ul className="nav-items">
        {navData.map((item, index) => {
          return <NavItem item={item} key={index} />;
        })}
      </ul>
      <div className="menu-items">
        {!isExpanded && (
          <div
            onClick={() => setIsExpanded(true)}
            className="menu-icon-wrapper"
          >
            <MenuIcon />
          </div>
        )}

        {isExpanded && (
          <motion.div
            whileInView={{ x: [300, 0] }}
            transition={{ duration: 0.85, ease: "easeInOut" }}
            className="expanded-menu"
          >
            <div
              onClick={() => setIsExpanded(false)}
              className="close-icon-wrapper"
            >
              <CloseIcon />
            </div>

            <ul>
              {navData.map((item, index) => {
                return (
                  <li key={index}>
                    <a
                      onClick={() => setIsExpanded(false)}
                      href={`#${item.link}`}
                    >
                      {" "}
                      {item.name}
                    </a>
                  </li>
                );
              })}
            </ul>
          </motion.div>
        )}
      </div>
    </nav>
  );
}
