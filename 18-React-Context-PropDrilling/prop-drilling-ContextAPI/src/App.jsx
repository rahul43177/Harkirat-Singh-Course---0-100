import { useState } from 'react';
import Dashboard from './components/Dashboard';
function Grandchild({ username }) {
  return (
    <div>
      Grandchild Component - Username: {username}
    </div>
  );
}

function Child({ username }) {
  return (
    <div>
      <h3>Child Component</h3>
      <Grandchild username={username} />
    </div>
  );
}

function Parent({ username }) {
  return (
    <div>
      <h2>Parent Component</h2>
      <Child username={username} />
    </div>
  );
}

export default function App() {
    return (

    )
}


function Appbar() {
    const navigate = useNavigate()
    
}