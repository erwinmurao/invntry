import React from "react";

const SecondarySidebar = () => {
  return (
    <div>
      <div className="flex justify-between items-center bg-gray-800 text-white px-6 py-2">
        <div>
          <h1>Inventory Management</h1>
        </div>
        <div className="flex items-center gap-2 border-2 border-gray-300 rounded-lg p-2 mt-4  mb-4 cursor-pointer hover:bg-gray-100 transition-all duration-200">
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1}
              stroke="currentColor"
              className="size-4"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 4.5v15m7.5-7.5h-15"
              />
            </svg>
          </div>
          <div>Add New Item</div>
        </div>
      </div>
      <div className="flex items-center justify-between p-10 border-4 gap-4">
        <div className="flex flex-col border-2 p-4 rounded-sm w-70">
          <span>Gross Revenue</span>
          <span>VALUE</span>
        </div>
        <div className="flex flex-col border-2 p-4 rounded-sm w-70">
          <span>Item Sold</span>
          <span>TOTAL PRODUCT</span>
        </div>
        <div className="flex flex-col border-2 p-4 rounded-sm w-70">
          <span>Low Stock Items</span>
          <span>ITEM COUNT</span>
        </div>
        <div className="flex flex-col border-2 p-4 rounded-sm w-70">
          <span>Pending Orders</span>
          <span>Pending Orders</span>
        </div>
      </div>
    </div>
  );
};

export default SecondarySidebar;
