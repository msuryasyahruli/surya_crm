import React from "react";
import { Link, useLocation } from "react-router-dom";

const Sidebar = ({ sidebarOpen, setSidebarOpen }) => {
  const location = useLocation();

  const sidebarItems = [
    { label: "Dashboard", path: "/" },
    { label: "Products", path: "/products" },
    { label: "Leads", path: "/leads" },
    { label: "Customers", path: "/customers" },
  ];

  return (
    <aside
      className={`fixed md:static top-0 left-0 h-full md:h-auto w-64 bg-gray-800 text-white transform transition-transform z-40 overflow-auto ${
        sidebarOpen ? "translate-x-0" : "-translate-x-full"
      } md:translate-x-0`}
    >
      <div className="flex justify-between p-4">
        <p className="text-lg font-bold">CRM</p>
        <button onClick={() => setSidebarOpen(false)} className="md:hidden">
          Close
        </button>
      </div>

      <nav className="mt-4 overflow-auto">
        {sidebarItems.map((item, index) => (
          <Link
            key={index}
            to={item.path}
            className={`block p-4 rounded hover:bg-gray-700 ${
              location.pathname === item.path && "bg-gray-700"
            }`}
            onClick={() => setSidebarOpen(false)}
          >
            {item.label}
          </Link>
        ))}
      </nav>
    </aside>
  );
};

export default Sidebar;
