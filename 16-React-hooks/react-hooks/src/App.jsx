import { useState, useEffect } from "react";
import axios from "axios";
function App() {
  const [selectedButton, setSelectedButton] = useState(1);
  return (
    <>
      <button onClick={() => setSelectedButton(1)}>1</button>
      <button onClick={() => setSelectedButton(2)}>2</button>
      <button onClick={() => setSelectedButton(3)}>3</button>
      <button onClick={() => setSelectedButton(4)}>4</button>
      {console.log(`selected button --> ${selectedButton}`)}
      <Todo id={selectedButton} />
    </>
  );
}

function Todo({ id }) {
  const [todo, setTodo] = useState({});
  useEffect(() => {
    axios
      .get(`https://sum-server.100xdevs.com/todo?id=${id}`)
      .then((response) => {
        console.log("response", response);
        console.log(` data.data ${response.data.todo}`);
        console.log("response.data.todo", response.data.todo);
        setTodo(response.data.todo);
      });
  }, [id]); //here whenever id changed , we need to make the backend call
  //dependency array 

  return (
    <div>
      <h1>{todo.title}</h1>
      <h4>{todo.description}</h4>
    </div>
  );
}

export default App;
