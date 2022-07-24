import { useState } from "react"
 
const useSearchValue = async (val) =>{
   
    const [search , setSearch ] = useState(val)
 return [search, setSearch]
 
}
export default useSearchValue