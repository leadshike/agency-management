// src/app/(dashboard)/layout.js

import Header from "../components/Header";
import Sidebar from "../components/Sidebar";

export default function DashboardLayout({ children }) {
  return (
    <div className="flex h-screen">
    <Sidebar />
    <div className="flex-1 overflow-auto">
      <Header />
      {children}
    </div>
  </div>

  );
}
