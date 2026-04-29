import React from "react";

const SecondarySidebar = () => {
  return (
    <div>
      <div className="flex justify-between items-center  text-white  py-2">
        <div className="text-2xl text-black font-bold">
          <h1>Inventory Management</h1>
        </div>
        <div className="flex items-center gap-2  border-gray-300 bg-slate-700 rounded-lg p-2 mt-4  mb-4 cursor-pointer ">
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
      <div className="flex items-center justify-between p-10 border-2 gap-4 border-gray-300">
        <div className="flex flex-col border-2 border-gray-200 bg-gray-100 p-4 rounded-sm w-70">
          <span>Gross Revenue</span>
          <span>VALUE</span>
        </div>
        <div className="flex flex-col border-2 border-gray-200 bg-gray-100 p-4 rounded-sm w-70">
          <span>Item Sold</span>
          <span>TOTAL PRODUCT</span>
        </div>
        <div className="flex flex-col border-2 border-gray-200 bg-gray-100   p-4 rounded-sm w-70">
          <span>Low Stock Items</span>
          <span>ITEM COUNT</span>
        </div>
        <div className="flex flex-col border-2 border-gray-200 bg-gray-100   p-4 rounded-sm w-70">
          <span>Pending Orders</span>
          <span>Pending Orders</span>
        </div>
      </div>
      <div>
        <table className="w-full border-collapse ">
          <thead className="bg-gray-100">
            <tr className="text-left font-bold">
              <th className="p-4 ">
                <input type="checkbox" />
              </th>
              <th className="p-4 ">Item Image</th>
              <th className="p-4 ">Item Name</th>
              <th className="p-4 ">Category</th>
              <th className="p-4 ">Quantity</th>
              <th className="p-4 ">Status</th>
              <th className="p-4 ">Unit Price</th>
              <th className="p-4 ">Actions</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="p-4  ">
                <input type="checkbox" />
              </td>
              <td className="p-4  ">2</td>
              <td className="p-4  ">3</td>
              <td className="p-4  ">4</td>
              <td className="p-4  ">5</td>
              <td className="p-4  ">6</td>
              <td className="p-4  ">7</td>
              <td className="p-4   flex gap-2">
                <td>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="size-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10"
                    />
                  </svg>
                </td>
                <td>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="size-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 9.75 14.25 12m0 0 2.25 2.25M14.25 12l2.25-2.25M14.25 12 12 14.25m-2.58 4.92-6.374-6.375a1.125 1.125 0 0 1 0-1.59L9.42 4.83c.21-.211.497-.33.795-.33H19.5a2.25 2.25 0 0 1 2.25 2.25v10.5a2.25 2.25 0 0 1-2.25 2.25h-9.284c-.298 0-.585-.119-.795-.33Z"
                    />
                  </svg>
                </td>
              </td>
            </tr>
          </tbody>
          <tr></tr>
        </table>
        <tr className="flex justify-end itemcenter gap-2 mr-15 mt-4">
          <td>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m18.75 4.5-7.5 7.5 7.5 7.5m-6-15L5.25 12l7.5 7.5"
              />
            </svg>
          </td>
          <td>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.75 19.5 8.25 12l7.5-7.5"
              />
            </svg>
          </td>
          <td>1</td>
          <td>2</td>
          <td>3</td>
          <td>...</td>
          <td>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m8.25 4.5 7.5 7.5-7.5 7.5"
              />
            </svg>
          </td>
          <td>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m5.25 4.5 7.5 7.5-7.5 7.5m6-15 7.5 7.5-7.5 7.5"
              />
            </svg>
          </td>
        </tr>
        
      </div>
    </div>
  );
};

export default SecondarySidebar;
