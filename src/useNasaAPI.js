import { useState, useEffect }from "react"
import axios from "axios";

const useNasaAPI = (query) => {
  const [entries, setEntries] = useState([]);

  useEffect(() => {
    axios.get(`https://images-api.nasa.gov/search?q=${query}`).then(({data}) => {
      console.warn(data);
      setEntries(data.collection.items)
    })
  }, [query]);

  return entries
};

export default useNasaAPI