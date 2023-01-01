import axios from 'axios';
import { useEffect, useState } from 'react';
import './App.css';
import City from './City';

function App() {
  const key = "70c177daa669d7d1c68f6b823a1b211d";
  const [city,setCity] = useState();
  const [search,setSearch] = useState("");
  useEffect(() => {
    async function getApi(){
      try{
        const response = await axios.get(
          `https://api.openweathermap.org/data/2.5/weather?q=${search}&appid=${key}&units=metric`
          );
        console.log(response);
        setCity(response.data);
      }catch (error){
        console.error(error);
      }
    }
    getApi();
  },[search]);
  console.log(search);
  return (
    <div className="App">
      <div>
        <input 
        onChange={(e)=> setSearch(e.target.value)} 
        className="border-8 mt-16" 
        type="text"/>
        {city && <City city={city}/>}
      </div>
    </div>
    );
}

export default App;
