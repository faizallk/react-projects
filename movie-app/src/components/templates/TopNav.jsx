import axios from "../../../utils/Axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import SearchBar from "./SearchBar";
const TopNav = () => {

  return (
    <div className="w-full h-[10vh] text-zinc-400 flex justify-start items-center relative ml-[15vh]">
 <SearchBar />
    </div>
  );
};

export default TopNav;
