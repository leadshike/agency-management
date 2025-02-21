"use client";
import Link from 'next/link';
import { useState } from 'react';
import { usePathname } from 'next/navigation';

const menuItems = [
  {
    icon: "👥",
    label: "Client HQ",
    path: "/dashboard/client-hq"
  },
  {
    icon: "🏢",
    label: "Agency HQ",
    path: "/dashboard/agency-hq"
  },
  {
    icon: "📊",
    label: "Automate HQ",
    path: "/dashboard/automate-hq",
    submenu: [
      {
        icon: "📢",
        label: "Alert HQ",
        path: "/dashboard/automate-hq/alert-hq"
      },
      {
        icon: "🔄",
        label: "1-Click Automate",
        path: "/dashboard/automate-hq/one-click"
      },
      {
        icon: "🔔",
        label: "Notifications",
        path: "/dashboard/automate-hq/notifications"
      },
      {
        icon: "⚙️",
        label: "Integrations",
        path: "/dashboard/automate-hq/integrations"
      }
    ]
  },
  {
    icon: "🔄",
    label: "CRM Pipeline",
    path: "/dashboard/crm-pipeline"
  },
  {
    icon: "👨‍💼",
    label: "Digital Employees",
    path: "/dashboard/digital-employees"
  },
  {
    icon: "✅",
    label: "Tasks HQ",
    path: "/dashboard/tasks-hq"
  },
  {
    icon: "💬",
    label: "Chat Rooms",
    path: "/dashboard/chat-rooms"
  },
  {
    icon: "⚙️",
    label: "Manage VA & Clients",
    path: "/dashboard/manage-va-clients"
  },
  {
    icon: "🚀",
    label: "Launch Mode",
    path: "/dashboard/launch-mode"
  },
  {
    icon: "📊",
    label: "Agency Analytics",
    path: "/dashboard/analytics"
  },
  {
    icon: "🗺️",
    label: "Client Map",
    path: "/dashboard/client-map"
  },
  {
    icon: "📝",
    label: "Tasks",
    path: "/dashboard/tasks",
    badge: "1",
    submenu: [
      {
        icon: "📋",
        label: "To Do Tasks",
        path: "/dashboard/tasks/todo",
        badge: "4"
      }
    ]
  },
  {
    icon: "⚙️",
    label: "Client Setting Map",
    path: "/dashboard/client-settings"
  },
  {
    icon: "📈",
    label: "Client Wise Analytics",
    path: "/dashboard/client-analytics",
    submenu: []
  },
  {
    icon: "📊",
    label: "Campaigns Analytics",
    path: "/dashboard/campaigns"
  },
  {
    icon: "📧",
    label: "Email Accounts Analytics",
    path: "/dashboard/email-analytics"
  },
  {
    icon: "📊",
    label: "Leads Analytics",
    path: "/dashboard/leads"
  },
  {
    icon: "🤖",
    label: "Client Wise Automation",
    path: "/dashboard/automation",
    submenu: []
  },
  {
    icon: "🔌",
    label: "Integrations",
    path: "/dashboard/integrations",
    subtext: "(setup your automations)"
  },
  {
    icon: "💼",
    label: "Manage Client Automation",
    path: "/dashboard/manage-automation"
  },
  {
    icon: "📊",
    label: "Account Vitals",
    path: "/dashboard/vitals"
  },
  {
    icon: "👥",
    label: "Managers",
    path: "/dashboard/managers",
    submenu: [
      {
        icon: "🎯",
        label: "Onboarding Manager",
        path: "/dashboard/managers/onboarding"
      },
      {
        icon: "✉️",
        label: "Reply Manager",
        path: "/dashboard/managers/reply"
      },
      {
        icon: "👤",
        label: "Client Information Manager",
        path: "/dashboard/managers/client-info"
      }
    ]
  }
];

export default function Sidebar() {
  const pathname = usePathname();
  const [expandedMenus, setExpandedMenus] = useState(['/dashboard/tasks', '/dashboard/managers', '/dashboard/automate-hq']);

  const toggleMenu = (path) => {
    setExpandedMenus(prev => 
      prev.includes(path)
        ? prev.filter(p => p !== path)
        : [...prev, path]
    );
  };

  const isActive = (path) => pathname === path;
  const isMenuExpanded = (path) => expandedMenus.includes(path);
  const isParentActive = (item) => {
    if (pathname === item.path) return true;
    if (item.submenu && item.submenu.some(sub => pathname === sub.path)) return true;
    return false;
  };

  return (
    <div className="w-64 bg-white h-screen overflow-y-auto border-r">
      {/* Logo */}
      <div className="p-4 border-b">
        <Link href="/" className="flex items-center gap-2">
          <div className="w-6 h-6 bg-blue-600 rounded-lg"></div>
          <span className="text-base font-medium">Leadshike</span>
          <span className="text-xs text-gray-500">v1.0</span>
        </Link>
      </div>

      {/* Menu Items */}
      <nav className="p-2">
        {menuItems.map((item) => (
          <div key={item.path}>
            <div
              className={`flex items-center justify-between px-3 py-2 rounded-lg mb-1 cursor-pointer ${
                isParentActive(item) ? 'bg-blue-600 text-white' : 'text-gray-700 hover:bg-gray-50'
              }`}
              onClick={() => item.submenu ? toggleMenu(item.path) : null}
            >
              <Link 
                href={item.path}
                className="flex items-center gap-2 flex-1"
              >
                <span>{item.icon}</span>
                <span className="text-sm">{item.label}</span>
                {item.subtext && (
                  <span className="text-xs text-gray-500">{item.subtext}</span>
                )}
              </Link>
              {item.badge && (
                <span className="bg-red-500 text-white text-xs px-1.5 rounded-full">
                  {item.badge}
                </span>
              )}
              {item.submenu && item.submenu.length > 0 && (
                <svg
                  className={`w-4 h-4 transition-transform ${
                    isMenuExpanded(item.path) ? 'rotate-180' : ''
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                </svg>
              )}
            </div>

            {/* Submenu */}
            {item.submenu && item.submenu.length > 0 && isMenuExpanded(item.path) && (
              <div className="ml-4 mt-1 space-y-1">
                {item.submenu.map((subItem) => (
                  <Link
                    key={subItem.path}
                    href={subItem.path}
                    className={`flex items-center gap-2 px-3 py-2 rounded-lg text-sm ${
                      isActive(subItem.path)
                        ? 'bg-blue-600 text-white'
                        : 'text-gray-700 hover:bg-gray-50'
                    }`}
                  >
                    <span>{subItem.icon}</span>
                    <span>{subItem.label}</span>
                    {subItem.badge && (
                      <span className="bg-red-500 text-white text-xs px-1.5 rounded-full ml-auto">
                        {subItem.badge}
                      </span>
                    )}
                  </Link>
                ))}
              </div>
            )}
          </div>
        ))}
      </nav>

      {/* Bottom Actions */}
      <div className="p-4 mt-4">
        <button className="w-full px-4 py-2 text-sm text-blue-600 text-center border border-blue-600 rounded-lg mb-2">
          Manage VA/Clients Access
        </button>
        <button className="w-full px-4 py-2 text-sm text-center border rounded-lg mb-2">
          CRM View
        </button>
        <div className="bg-gradient-to-r from-purple-500 to-purple-600 rounded-lg p-4 text-white">
          <p className="text-sm mb-2">Upgrade to PRO to get access all Features!</p>
          <button className="bg-white text-purple-600 px-4 py-2 rounded-lg text-sm w-full font-medium">
            Get Pro Now!
          </button>
        </div>
      </div>
    </div>
  );
}