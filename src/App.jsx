import { useEffect, useState } from "react"
import { Route, Routes } from 'react-router'
import '../src/components/Navbar/Navbar.css'
import Navbar from "./components/Navbar/Navbar"
import PetDetail from "./components/PetDetail/PetDetail"
import PetForm from "./components/PetForm/PetForm"
import PetList from "./components/PetList/PetList"
import * as petService from './services/petService'
function App() {
  const [pets, setPets] = useState([])
  const [petUpdate, setPetUpdate] = useState(null)

  async function allPets(){
    try {
      const data = await petService.index()
      setPets(data)
    } catch (error) {
      console.log(error);
    }
  }

  function findPetToUpdate(petId){
    const foundPet = pets.find(pet => pet._id === petId)
    setPetUpdate(foundPet)
  }

  useEffect(()=>{allPets()}, [])

  const updatePets =(pet)=>{
    setPets([...pets, pet])
  }

  const deletePet = (id) => {
    const newPetList = pets.filter((pet)=>{
      return pet._id !== id
    })
    setPets(newPetList)
  }

  const updateOnePet = (updatedPet) => {
    const updatedPetList = pets.map((pet)=>{
      if (pet._id === updatedPet._id) {
        return updatedPet
      } else {
        return pet
      }
    })
    setPets(updatedPetList)
  }
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path='/' element={<PetList pets={pets}/>} />
        <Route path="/pets/:id" element={<PetDetail deletePet={deletePet} findPetToUpdate={findPetToUpdate}/>} />
        <Route path="/pets/new" element={<PetForm updatePets={updatePets} />} />
        <Route path="/pets/:id/edit" element={<PetForm updateOnePet={updateOnePet} petUpdate={petUpdate} updatePets={updatePets} />} />
      </Routes>
    </div>
  )
}

export default App