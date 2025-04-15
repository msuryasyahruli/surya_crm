import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import Modals from "./Modals";

const Sidebar = ({ sidebarOpen, setSidebarOpen }) => {
  const location = useLocation();
  const [modalLogout, setModalLogout] = useState(false);

  const sidebarItems = [
    { label: "Dashboard", path: "/" },
    { label: "Products", path: "/products" },
    { label: "Leads", path: "/leads" },
    { label: "Customers", path: "/customers" },
  ];

  const handleConfirmLogout = () => {
    localStorage.clear();
    window.location.reload();
    setModalLogout(false);
  };

  return (
    <>
      <aside
        className={`fixed top-0 left-0 h-full md:static md:h-auto w-64 bg-gray-800 text-white transform transition-transform z-40 overflow-auto ${
          sidebarOpen ? "translate-x-0" : "-translate-x-full"
        } md:translate-x-0`}
      >
        <div className="flex justify-between p-4">
          <p className="text-lg font-bold">CRM</p>
          <button onClick={() => setSidebarOpen(false)} className="md:hidden">
            Close
          </button>
        </div>

        <nav className="mt-4">
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

        <div className="mt-auto">
          <button
            className="w-full text-start text-red-600 block p-4 rounded hover:bg-gray-700 active:bg-gray-700"
            onClick={() => setModalLogout(true)}
          >
            Log Out
          </button>
        </div>
      </aside>

      <Modals
        isOpen={modalLogout}
        onClose={() => setModalLogout(false)}
        title="Konfirmasi Logout"
        onConfirm={handleConfirmLogout}
        confirmText="Ya, Keluar"
        cancelText="Batal"
      >
        <p>Apakah anda yakin ingin keluar?</p>
      </Modals>
    </>
  );
};

export default Sidebar;
