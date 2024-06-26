import { Button } from "@nextui-org/react";
import logoData from "../assets/logo.png";
import Dashboard from "../components/dashboard";
import { RxDashboard } from "react-icons/rx";
import { TbHelpTriangleFilled, TbTransactionPound } from "react-icons/tb";
import { SlCalender } from "react-icons/sl";
import { MdAccountCircle, MdOutlineSettings } from "react-icons/md";
import { RiMenu2Fill } from "react-icons/ri";
export default function HomePage() {
  return (
    <div className="h-screen w-screen overflow-auto">
      <div className="drawer lg:drawer-open">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col items-center justify-center">
          {/* Page content here */}
          <div className="navbar bg-base-100">
            <label
              htmlFor="my-drawer-2"
              className="btn btn-ghost drawer-button lg:hidden"
            >
              <RiMenu2Fill className="text-2xl" />
            </label>
            <a className="btn btn-ghost text-xl">Dashboard</a>
          </div>

          <Dashboard />
        </div>
        <div className="drawer-side">
          <label
            htmlFor="my-drawer-2"
            aria-label="close sidebar"
            className="drawer-overlay"
          ></label>
          <ul className="menu bg-base-200 text-base-content min-h-full w-80 p-4">
            {/* Sidebar content here */}
            <img src={logoData} alt="company logo" className="h-6 w-3/4" />
            <div className="divider"></div>
            <div className="flex flex-col flex-1">
              <li>
                <a>
                  <RxDashboard className="mr-2 text-xl" />
                  Dashboard
                </a>
              </li>
              <li>
                <a>
                  <TbTransactionPound className="mr-2 text-xl" />
                  Transactions
                </a>
              </li>
              <li>
                <a>
                  <SlCalender className="mr-2 text-xl" />
                  Rotas
                </a>
              </li>
              <li>
                <a>
                  <MdAccountCircle className="mr-2 text-xl" />
                  Acounts
                </a>
              </li>
              <div className="divider"></div>
              <li>
                <a>
                  <MdOutlineSettings className="mr-2 text-xl" />
                  Settings
                </a>
              </li>
              <li>
                <a>
                  <TbHelpTriangleFilled className="mr-2 text-xl" />
                  Help
                </a>
              </li>
            </div>
            <div className="divider"></div>
            <Button color="danger">Logout</Button>
          </ul>
        </div>
      </div>
    </div>
  );
}
