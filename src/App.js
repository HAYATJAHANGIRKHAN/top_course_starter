import React from "react";
import {apiUrl, filterData} from "./data";
const App = () => {
  return(
    <div>
      <Navbar/>

      <Filter/>
      <Cards/>
    </div>
  )
};

export default App;