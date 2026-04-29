import React, { useState } from 'react';

const sidebarbutoon = () => {
  const [activeTab, setActiveTab] = useState('Homepage');

  const navGroups = [
    [
      { name: 'Homepage', icon: Home },
    ],
    [
      { name: 'Orders', icon: ClipboardList, color: 'text-teal-600' },
      { name: 'Products', icon: ShoppingBag },
      { name: 'Logistics', icon: Truck },
    ],
    [
      { name: 'Affiliate', icon: Users },
      { name: 'LIVE & video', icon: Video },
      { name: 'Growth', icon: Star },
    ],
    [
      { name: 'Analytics', icon: BarChart2, color: 'text-teal-600' },
      { name: 'Account health', icon: ShieldCheck, color: 'text-teal-600' },
    ]
  ];

  return (
    <div className="w-64 h-screen bg-white border-r border-gray-200 py-4 flex flex-col font-sans">
      {navGroups.map((group, groupIndex) => (
        <React.Fragment key={groupIndex}>
          <div className="px-3 space-y-1">
            {group.map((item) => {
              const Icon = item.icon;
              const isActive = activeTab === item.name;
              
              return (
                <button
                  key={item.name}
                  onClick={() => setActiveTab(item.name)}
                  className={`
                    w-full flex items-center gap-4 px-4 py-3 rounded-md transition-all duration-200
                    ${isActive 
                      ? "bg-gray-50 text-gray-900 font-semibold" 
                      : "text-gray-700 hover:bg-gray-100"}
                  `}
                >
                  <Icon className={`w-5 h-5 ${item.color || 'text-gray-600'}`} />
                  <span className="text-[15px]">{item.name}</span>
                </button>
              );
            })}
          </div>
          {/* Divider - only show between groups */}
          {groupIndex < navGroups.length - 1 && (
            <hr className="my-4 border-gray-200 mx-4" />
          )}
        </React.Fragment>
      ))}
    </div>
  );
};

export default sidebarbutoon;