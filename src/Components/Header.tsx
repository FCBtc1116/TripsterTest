import { useState, useEffect } from "react";
import {
  Navbar,
  Collapse,
  Typography,
  IconButton,
} from "@material-tailwind/react";

import CustomButton from "./CustomButton";

export default function Header() {
  const [openNav, setOpenNav] = useState(false);

  useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false)
    );
  }, []);

  const navList = (
    <ul className="mb-4 mt-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-normal"
      >
        <a href="#" className="flex items-center text-customFontColor">
          Properties
        </a>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-normal"
      >
        <a href="#" className="flex items-center text-customFontColor">
          Attractions
        </a>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-normal"
      >
        <a href="#" className="flex items-center text-customFontColor">
          Popular
        </a>
      </Typography>
    </ul>
  );

  return (
    <Navbar className="mx-auto py-2 lg:py-4 max-w-full rounded-none px-0">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="mx-auto flex items-center justify-between text-blue-gray-900">
          <div className="flex items-center">
            <Typography
              as="a"
              href="#"
              className="mr-4 cursor-pointer py-1.5 text-2xl font-bold"
            >
              Tripster
            </Typography>
            <div className="hidden lg:block ml-[20px]">{navList}</div>
          </div>
          <div className="hidden lg:flex">
            <div className="w-[130px] mr-[30px]">
              <CustomButton outline={true} text="Sign Up" />
            </div>
            <div className="w-[130px]">
              <CustomButton outline={false} text="Log In" />
            </div>
          </div>
          <IconButton
            variant="text"
            className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
            ripple={false}
            onClick={() => setOpenNav(!openNav)}
          >
            {openNav ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                className="h-6 w-6"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </IconButton>
        </div>
      </div>
      <Collapse open={openNav}>
        <div className="container mx-auto">
          {navList}
          <CustomButton outline={true} text="Sign Up" />
          <div className="mb-5"></div>
          <CustomButton outline={false} text="Log In" />
          <div className="mb-5"></div>
        </div>
      </Collapse>
    </Navbar>
  );
}
