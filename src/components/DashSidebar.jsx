
import { Sidebar } from 'flowbite-react';
import { useState } from 'react';

import { CiBank, CiHome } from "react-icons/ci";
import { MdCurrencyRupee } from "react-icons/md";
import { Link, useLocation, useNavigate } from 'react-router-dom';

const sidebarItems = [
  { title: "Home", path: "/", icon: <CiHome /> },
  { title: "My Banks", path: "/mybanks", icon: <CiBank /> },
  { title: "Transaction History", path: "/transactionhistory", icon: <MdCurrencyRupee /> },
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
    <div className="w-full flex flex-col gap-2 m-1 mt-4 items-start">
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
  );
};

export default DashSidebar;
