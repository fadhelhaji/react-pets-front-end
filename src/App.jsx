import { useEffect, useState } from "react"
import PetList from "./components/PetList/PetList"
import * as petService from './services/petService'
function App() {
  const [pets, setPets] = useState([])

  async function allPets(){
    try {
      const data = await petService.index()
      setPets(data)
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(()=>{allPets()}, [])

  return (
    <div>
      <PetList pets={pets}/>
    </div>
  )
}

export default App