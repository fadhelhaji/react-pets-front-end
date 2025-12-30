
function PetList({pets}) {
  if(!pets){
    return (
      <h1>Loading...</h1>
    )
  }
  return (
    <div>
        <h1>Pet List</h1>
        {!pets.length ?
        <div>No pets found</div> :
        <ul>
            {
                pets.map((pet)=>{
                    return (
                            <li key={pet._id}>Name: {pet.name} | Age: {pet.age} | Breed: {pet.breed}</li>
                    )
                })
            }
        </ul>}
    </div>
  )
}

export default PetList