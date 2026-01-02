import { useState } from "react";
import { useNavigate } from "react-router";
import * as petService from "../../services/petService";
import "./PetForm.css";

function PetForm({ updatePets, petUpdate, updateOnePet }) {
  const [pet, setPet] = useState(
    petUpdate
      ? petUpdate
      : {
          name: "",
          age: "",
          breed: "",
        }
  );

  const navigate = useNavigate();

  async function handleSubmit(event) {
    event.preventDefault();

    const payload = { ...pet, age: Number(pet.age) };

    if (petUpdate) {
      const updatedPet = await petService.edit(petUpdate._id, payload);
      updateOnePet(updatedPet);
      navigate("/");
      return;
    }

    const createdPet = await petService.create(payload);
    updatePets(createdPet);
    navigate("/");
  }

  function handleChange(event) {
    setPet({ ...pet, [event.target.name]: event.target.value });
    console.log(pet);
  }

  return (
    <div>
      <h1>Pet Form</h1>
      <form onSubmit={handleSubmit}>
        <div className="create-card">
          <label htmlFor="name">Name</label>
          <input
            onChange={handleChange}
            value={pet.name}
            type="text"
            name="name"
            id="name"
          />

          <label htmlFor="age">Age</label>
          <input
            onChange={handleChange}
            value={pet.age}
            type="number"
            name="age"
            id="age"
            min={0}
          />

          <label htmlFor="breed">Breed</label>
          <input
            onChange={handleChange}
            value={pet.breed}
            type="text"
            name="breed"
            id="breed"
          />
          <button type="submit">Create!</button>
        </div>
      </form>
    </div>
  );
}

export default PetForm;
