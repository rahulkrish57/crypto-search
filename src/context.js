import React, { useState, useContext, useEffect } from "react";
const url = "https://api.coingecko.com/api/v3/coins/markets?vs_currency=inr&order=market_cap_desc&per_page=100&page=1&sparkline=false";
const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const [coins, setCoins] = useState([]);
  // console.log(searchTerm)
  const fetchCoins = async () => {
    setLoading(true);
    try {
      console.log(searchTerm)
      const response = await fetch(url);
      const data = await response.json();
      // console.log(data)
      if(data){
        const coins = data.filter((coin) =>{
            if(!searchTerm) {
              // console.log(coin)
              return coin;
            } else if(coin.name.toLowerCase().includes(searchTerm.toLowerCase())) {
              return coin
            }
        }).map((coin) => {
          const {
            id,
            symbol,
            name,
            image,
            current_price,
            price_change_percentage_24h,
            market_cap,
            market_cap_rank
          } = coin;
          return {
            id,
            symbol,
            name,
            image,
            current_price,
            price_change_percentage_24h,
            market_cap,
            market_cap_rank
          };
        });
        // console.log(coins)
        setCoins(coins)
      } else{
        searchTerm("")
      }
      setLoading(false);
    } catch (error) {
      console.log(error.message);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCoins();
  }, [searchTerm]);

  return (
    <AppContext.Provider
      value={{
        loading,
        coins,
        setSearchTerm,
        setLoading
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
// make sure use
export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
