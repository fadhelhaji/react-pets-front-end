import { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router'
import * as petService from '../../services/petService'
import './petDetail.css'

function PetDetail({ findPetToUpdate, deletePet }) {
  const [pet, setPet] = useState(null)
  const { id } = useParams()
  const navigate = useNavigate()

  useEffect(() => {
    const getOnePet = async () => {
      const pet = await petService.show(id)
      setPet(pet)
    }
    if (id) getOnePet()
  }, [id])

  if (!pet) return <h1>Loading...</h1>

  async function handleDelete() {
    await petService.remove(id)
    deletePet(id)
    navigate('/')
  }

  return (
    <div className='pet-container'>
      <div className='pet-card'>
        <div className='name'>Name: <span>{pet.name}</span></div>
        <div className='age'>Age: <span>{pet.age}</span></div>
        <div className='breed'>Breed: <span>{pet.breed}</span></div>

        <Link
          to={`/pets/${id}/edit`}
          onClick={() => findPetToUpdate(id)}
        >
          <button>Edit</button>
        </Link>

        <button onClick={handleDelete}>Delete Pet</button>
      </div>
    </div>
  )
}

export default PetDetail
