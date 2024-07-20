import React from 'react'
import Header from '../components/Header'
import Banner from '../components/Banner/Banner'
import CoinTable from '../components/CoinTable'

const HomePage = () => {
  return (
    <div className="dark:bg-black bg-white">
    <Header />
    <Banner />
    <CoinTable />
  </div>
    
  )
}

export default HomePage