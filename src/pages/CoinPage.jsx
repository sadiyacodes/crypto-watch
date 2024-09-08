import React, { useEffect, useState } from 'react'
import Header from '../components/Header'
import {useParams} from "react-router-dom";
import { CryptoState } from '../contexts/CryptoContext';
import CoinDetails from '../components/CoinDetails';
import SideBar from '../components/SideBar';
import {LinearProgress} from "@mui/material";
import { functions } from '../config/appwrite';


const CoinPage = () => {

   const { id } = useParams();
   const[ token, setToken]= useState();

   const {currency, symbol} = CryptoState();

   const fetchSingleCoin = async () => {
    const payload = JSON.stringify({
      apiName: "singleCoin",
      apiParams: {
        coinId: id,
      }
    });
    try {
      const { responseBody } = await functions.createExecution('66a002c9002bbdfb29c9', payload);
      setToken(JSON.parse(responseBody));
  } catch (error) {
    console.log(error);
  }
  };

   useEffect(()=> {
    fetchSingleCoin();
   }, [currency]);
   
  return (
    <div>
      <Header />
      <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 dark:bg-black bg-white min-h-[90vh] ">
        {token ? (
          <SideBar token={token} />
        ) : (
          <LinearProgress className="dark:bg-yellow-500 bg-slate-600" />
        )}

        {/* charts  */}
        <CoinDetails className="w-full md:w-2/3" token={token} />
        
      </div>
    </div>
  );
};

export default CoinPage;