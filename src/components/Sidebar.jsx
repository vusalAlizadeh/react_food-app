import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link, useLocation } from "react-router-dom";

const Sidebar = ({ links, closeSidebar }) => {
  let location = useLocation();

  return (
    <div className="sidebar">
      {links.map((link) => (
        <Link
          to={link.path}
          key={link.name}
          onClick={closeSidebar}
          className={
            location.pathname === link.path
              ? "sidebar-link active"
              : "sidebar-link"
          }
        >
          <FontAwesomeIcon icon={link.icon} /> {link.name}
        </Link>
      ))}
    </div>
  );
};

export default Sidebar;
