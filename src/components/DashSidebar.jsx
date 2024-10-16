
import { useState } from 'react';

import { CiBank, CiHome } from "react-icons/ci";
import { MdCurrencyRupee } from "react-icons/md";
import { Link, Outlet, useLocation } from 'react-router-dom';
import Navbar from './Navbar';

const sidebarItems = [
  { title: "Home", path: "/dashtab", icon: <CiHome /> },
  { title: "My Banks", path: "/dashtab/mybanks", icon: <CiBank /> },
  { title: "Transaction History", path: "/dashtab/transactionhistory", icon: <MdCurrencyRupee /> },
]

const DashSidebar = () => {

  const location = useLocation();
  const [currentIndex, setCurrentIndex] = useState(() => {
    const currentPath = location.pathname;
    const foundIndex = sidebarItems.findIndex((item) => item.path === currentPath);
    return foundIndex !== -1 ? foundIndex : 0; // Default to the first item if not found
  });

  const handleClick = (index) => {
    setCurrentIndex(index);
  };
  return (
    <div className="flex h-screen">
      <div className="w-[20%] lg:w-[17%] xl:w-[15%] flex flex-col gap-2 m-1 mt-4 items-start border-r-2">
        <ul className="space-y-2 justify-center items-center">
          {sidebarItems.map((item, index) => (
            <li key={index} className="p-3">
              <Link
                to={item.path}
                className={`${currentIndex === index
                  ? "font-semibold text-[18px] text-[#3B82F6] "
                  : "font-normal text-[16px]"
                  } flex items-center rounded-xl text-[#333333]`}
                onClick={() => handleClick(index)}
              >
                <div className='mr-2'>{item.icon}</div>
                <span>{item.title}</span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <div className="flex-1 overflow-x-auto custom-scrollbar">
        <Outlet />
      </div>
    </div>

  );
};

export default DashSidebar;
