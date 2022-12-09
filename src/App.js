
import { useState, useEffect } from "react";
import { nanoid } from "nanoid";

function App() {

  const [storage, getStorage] = useState([])
  const [page, setPage] = useState(1)



    useEffect(() => {
      fetch(`https://rickandmortyapi.com/api/character?page=${page}`)
      .then(res => res.json())
      .then(data => getStorage(data.results))
    }, [page])

 
  return (
    <div className="App">
      <div className="w-screen bg-blue-300 h-96 flex justify-center items-center">

        <h1 className="text-6xl text-green-600 font-bold">Rick and Morty Facts</h1>
      </div>
      <div className="flex justify-between mx-10 h-20 items-center">
        <button 
          className="p-3 border-black border rounded-3xl hover:bg-slate-200 hover:pointer focus:bg-slate-200"
          onClick={() => {page > 1 ? setPage(prevPage => prevPage - 1) : console.log("XD")}}>
          Previous Page
        </button>

        <button 
          className="p-3 border-black border rounded-3xl hover:bg-slate-200 hover:pointer focus:bg-slate-200"
          onClick={() => {page < 42 ? setPage(prevPage => prevPage + 1) : console.log("Last page")}}>
          Next Page
        </button>
      </div>

      <div className="grid grid-rows-3 grid-cols-4 gap-5 mx-10">
        
        {storage.map((person) => {
          return <div key={nanoid()} className='flex gap-2 bg-purple-600 rounded-md'>
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
