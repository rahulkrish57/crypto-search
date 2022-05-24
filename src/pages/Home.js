import React from 'react'
import CoinList from '../components/CoinList'
import Footer from '../components/Footer'
import SearchBar from '../components/SearchBar'



const Home = () => {
  return (
   <main>
     <SearchBar />
     <CoinList />
     <Footer />
   </main>
  )
}
export default Home