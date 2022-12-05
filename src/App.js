
import { useState } from "react";

function App() {

  const [storage, getStorage] = useState([])

  fetch("https://rickandmortyapi.com/api/character")
    .then(res => res.json())
    .then(data => getStorage(data.results))

  return (
    <div className="App">
      <div className="w-screen bg-blue-300 h-96 flex justify-center items-center">
        <h1 className="text-6xl text-green-600 border border-black">Rick and Morty Facts!</h1>
      </div>
      {storage.map((obj) => {
        return <div key={obj.id} className='flex gap-2'>
          <p>Name: {obj.name}</p>
          <p>Status: {obj.status}</p>
          <p>Gender: {obj.gender}</p>
          <img src={obj.image} alt='Character avatar' className="w-24"/>
        </div>
      })}

    </div>
  );
}

export default App;
