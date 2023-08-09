import { IoMdContact } from "react-icons/io";
import { PiListChecksBold } from "react-icons/pi"
import { Link }from "react-router-dom";

const Navbar = () => {
  return (
    <div className="col-span-4">
      <div className="flex justify-between h-full items-center">
        <div className="w-1/4 flex justify-center items-center gap-5">
          <img 
            className="rounded-full"
            src="../../tmia.png"
            height="30px"
            width="30px"
          />
          <div className="text-2xl font-saira">
            <h1>TIENDAMIA</h1>
          </div>
        </div>
        <div className="w-2/6 flex gap-2 p-2">
          <ul className="flex w-full justify-end items-center gap-5 mr-2">
            <li className="hover:text-gray-500 transition-all ease-in-out duration-300">
              <Link to="/inventory" className="flex gap-2">
                <PiListChecksBold className="text-2xl" />
                <h2 className="">inventario</h2>
              </Link>
            </li>
            <li className="hover:text-gray-500 transition-all ease-in-out duration-300">
              <a href="/profile">
                <IoMdContact className="text-5xl"/>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;