import { createContext, useContext, useEffect, useState } from "react";
const ApiContext = createContext();


const ApiDataProvider = ({ children }) => {
  const [chefs, setChefs] = useState([]);
  const getChefs = async () => {
    const res = await fetch("https://the-hub-server.vercel.app");
    const data = await res.json();
    setChefs(data);
  };
  useEffect(() => {
    getChefs();
  }, []);

  const allData = {
    chefs,
  };
  return <ApiContext.Provider value={allData}>{children}</ApiContext.Provider>;
};

const useApiData = () => {
  return useContext(ApiContext);
};

export { ApiDataProvider, useApiData };
