import React from "react";
import styled from "styled-components";
import amazon from "../assets/amazon.png";
import { MdSearch } from "react-icons/md";
import { MdShoppingBasket } from "react-icons/md";

const HeaderOption = styled.div`
  color: white;
  margin-right: 20px;
  font-size: 13px;
`;

function Header() {
  return (
    <div className="flex justify-between bg-black h-14 ">
      <img src={amazon} alt="amazon" className="pt-2 px-4 w-32 h-14"/>
      <div className="Header_Search flex items-center">
        <input type="text" className="header_searchinput h-8 w-96" />
        <MdSearch className="bg-yellow-200 h-8 w-12"/>
      </div>
      <div className="Header__Right flex justify-around items-center">
        <HeaderOption>
          <span className="text-gray-300">Hello</span> <br />
          <span className="font-bold">Sign in</span>
        </HeaderOption>
        <HeaderOption>
          <span className="text-gray-300">Returns</span> <br />
          <span className="font-bold"> & Orders</span>
        </HeaderOption>
        <HeaderOption>
          <span className="text-gray-300">Your </span> <br />
          <span className="font-bold">Prime</span>
        </HeaderOption>
        <HeaderOption className="flex items-center">
          <MdShoppingBasket className="mr-2 text-xl" />
          <span className="text-sm font-semibold">0</span>
        </HeaderOption>
      </div>
    </div>
  );
}

export default Header;
