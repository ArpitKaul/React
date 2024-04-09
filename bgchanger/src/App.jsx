import {useState} from "react"

function App() {
  const [Color , setColor] = useState("olive")

  return (
   <>
   <div className="w-full h-screen duration-200" style={{backgroundColor: Color}}>
    <div className="fixed flex justify-center bottom-12 inset-x-0  px-2 text-4xl">
      <div className="flex flex-wrap justify-center gap-3 bg-white px-3 py-2 rounded-xl">
        <button
        onClick={() => setColor("red")} className="outline-none px-4 py-1 rounded-full text-white shadow-sm" style={{backgroundColor: "red"}}>Red</button>
        <button
        onClick={() => setColor("green")}  className="outline-none px-4 py-1 rounded-full text-white shadow-sm" style={{backgroundColor: "green"}}>Green</button>

        <button
        onClick={() => setColor("blue")}  className="outline-none px-4 py-1 rounded-full text-white shadow-sm" style={{backgroundColor: "blue"}}>Blue</button>
        
        <button
        onClick={() => setColor("orange")}  className="outline-none px-4 py-1 rounded-full text-white shadow-sm" style={{backgroundColor: "orange"}}>orange</button>


      </div>
    </div>
   </div>
   </>
  )
}

export default App
