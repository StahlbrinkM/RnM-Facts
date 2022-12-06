
import { useState } from "react";

function App() {

  const [storage, getStorage] = useState([])

  fetch("https://rickandmortyapi.com/api/character")
    .then(res => res.json())
    .then(data => getStorage(data.results))

  return (
    <div className="App">
      <div className="w-screen bg-blue-300 h-96 flex justify-center items-center">
        <h1 className="text-6xl text-green-600 border border-black font-bold">Rick and Morty Facts</h1>
      </div>
      <div className="grid grid-rows-3 grid-cols-3 gap-5 m-4">
        {storage.map((person) => {
          return <div key={person.id} className='flex gap-2 bg-purple-600 rounded-md'>
            <div className="p-4">
              <p>Name: {person.name}</p>
              <p>Status: {person.status}</p>
              <p>Gender: {person.gender}</p>
            </div>
            <img src={person.image} alt='Character avatar' className="w-36 ml-auto rounded"/>
          </div>
        })}

      </div>

    </div>
  );
}

export default App;
