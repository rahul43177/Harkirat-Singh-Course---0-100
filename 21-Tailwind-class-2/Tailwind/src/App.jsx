//grid in tailwind 

export default function App() {
  return (
    //grid
    // <div className="grid grid-cols-3 ">
    //   <div className="bg-red-500 col-span-4">Hi</div>
    //   <div className="bg-yellow-500 col-span-4">My</div>
    //   <div className="bg-green-500 col-span-2">Name</div>
    //   <div className="bg-blue-500">is</div>
    //   <div className="text-blue-400 col-span-5">Rahul</div>
      // <div className="bg-indigo-500">hahaha</div>
    //</div>
    //responsiveness
    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6">
      <div className="bg-red-500">Hello</div>
      <div className="bg-blue-500">Good</div>
      <div className="bg-blue-500">Good</div>
      <div className="bg-blue-500">Good</div>
      <div className="bg-blue-500">Good</div>
      <div className="bg-blue-500">Good</div>
      <div className="bg-blue-500">Good</div>

    </div>


  )
}