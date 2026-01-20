import { useState } from "react"
import { NavLink } from "react-router-dom"
import { ArrowRight, ArrowLeft } from "lucide-react";

export default function Sidebar() {
  const [collapsed, setCollapsed] = useState(false)

  const linkBase =
    "flex items-center gap-3 px-4 py-2 rounded-md text-sm transition overflow-hidden"

  const linkClasses = ({ isActive }) =>
    `${linkBase}
     ${isActive
       ? "bg-gray-900 text-white"
       : "text-gray-700 hover:bg-gray-200"
     }`

  return (
    <aside
      className={`h-screen border-r bg-[#827573] transition-all duration-300
        ${collapsed ? "w-16" : "w-64"}`}
    >
      <div className="flex flex-col h-full">

        {/* Header */}
        <div className="flex items-center justify-between px-4 h-16 border-b">
          {!collapsed && (
            <span className="font-semibold text-gray-800 truncate">
              WikiNITT
            </span>
          )}
          <button
            onClick={() => setCollapsed(!collapsed)}
            className="text-gray-900 hover:text-gray-800"
            title="Toggle sidebar"
          >
            {collapsed ? <ArrowRight size={18} /> : <ArrowLeft size={18} />}
          </button>
        </div>

        {/* Navigation */}
        <nav className="flex-1 px-2 py-4 space-y-1">
          {[
            { to: "/", label: "Home" },
            { to: "/category/Departments", label: "Departments" },
            { to: "/category/Hostels", label: "Hostels" },
            { to: "/category/Student Life", label: "Student Life" },
            { to: "/admin", label: "Admin" },
          ].map(link => (
            <NavLink key={link.to} to={link.to} className={linkClasses}>
              {/* Fake icon placeholder (keeps alignment clean) */}

              {!collapsed && (
                <span className="whitespace-nowrap">
                  {link.label}
                </span>
              )}
            </NavLink>
          ))}
        </nav>

        {/* Footer */}
        {!collapsed && (
          <div className="px-4 py-3 text-xs text-gray-900 border-t">
            NIT Trichy Knowledge Base
          </div>
        )}
      </div>
    </aside>
  )
}
