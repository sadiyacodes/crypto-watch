import React from 'react'
import {MenuItem, Select} from '@mui/material';
import { useNavigate } from "react-router-dom";
import { CryptoState } from '../contexts/CryptoContext';

const Header = () => {
  const navigate = useNavigate();
  const { currency, setCurrency } = CryptoState();

  return (
    <div className="w-full px-6 sm:px-12 md:px-36 dark:bg-[#14161A] bg-slate-50 py-4 shadow-md">
    <div className="flex justify-between items-center">
      <h1
        className="text-xl dark:text-yellow-500 text-zinc-800 font-semibold cursor-pointer"
        onClick={() => navigate("/")}
      >
        Crypto watch
      </h1>
      <div className="flex space-x-8 items-center ">
        <Select
          variant="outlined"
          autoWidth
          value={currency}
          style={{
            fontFamily: "'Josefin Sans', 'sans-serif'",
            fontSize: "14px",
          }}
          onChange={(e) => setCurrency(e.target.value)}
          className="dark:text-white text-zinc-800"
        >
          <MenuItem
            value={"USD"}
            style={{
              fontFamily: "'Josefin Sans', 'sans-serif'",
              fontSize: "14px",
            }}
          >
            {" "}
            USD
          </MenuItem>
          <MenuItem
            value={"INR"}
            style={{
              fontFamily: "'Josefin Sans', 'sans-serif'",
              fontSize: "14px",
            }}
          >
            {" "}
            INR
          </MenuItem>
        </Select>
        {/* <i
          className={`fa-regular fa-${
            isThemeChanged ? "sun" : "moon"
          } dark:text-yellow-500 cursor-pointer`}
          onClick={handleThemeSwitch}
        ></i> */}
      </div>
    </div>
  </div>
  )
}

export default Header