
// import { GoogleLogin } from '@react-oauth/google';
// import { jwtDecode } from "jwt-decode";

// function App() {

//   return (
//     <GoogleLogin
//     onSuccess={credentialResponse => {
//       // console.log(credentialResponse);

//       const credentialResponseDecoded = jwtDecode(
//         credentialResponse.credential
//       );
//       console.log(credentialResponseDecoded)
//     }}
//     onError={() => {
//       console.log('Login Failed');
//     }}
//    />
   
//   )
// }

// export default App
///////////////////***************************//////////////////////////

// custom login button

// import { useGoogleLogin } from '@react-oauth/google';

// function App() {

//   const login = useGoogleLogin({
//     onSuccess: tokenResponse => console.log(tokenResponse),
//   });

//   return (

//     <div>
//         <button onClick={() => login()} style={{background: "blue",color: "white"}}>Sign in with Google 🚀</button>
//     </div>

  
   
//   )
// }

// export default App



// App.js

import React, { useState } from 'react';

const TodoApp = () => {
  const [todos, setTodos] = useState([]);
  const [inputValue, setInputValue] = useState('');

  const addTodo = () => {
    if (inputValue.trim() !== '') {
      setTodos([...todos, inputValue]);
      setInputValue('');
    }
  };

  const deleteTodo = (index) => {
    const updatedTodos = todos.filter((_, i) => i !== index);
    setTodos(updatedTodos);
  };

  return (
    <div style={{ fontFamily: 'Arial, sans-serif', maxWidth: '400px', margin: 'auto', marginTop: '50px' }}>
      <h1 style={{ textAlign: 'center', marginBottom: '30px' }}>Todo List</h1>
      <div style={{ display: 'flex', marginBottom: '20px' }}>
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="Enter your todo"
          style={{ flex: '1', marginRight: '10px', padding: '5px' }}
        />
        <button onClick={addTodo} style={{ padding: '5px 10px', backgroundColor: 'blue', color: 'white', border: 'none', cursor: 'pointer' }}>Add</button>
      </div>
      <ul style={{ listStyleType: 'none', padding: '0' }}>
        {todos.map((todo, index) => (
          <li key={index} style={{ marginBottom: '10px', backgroundColor: '#f2f2f2', padding: '10px', borderRadius: '5px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            {todo}
            <button onClick={() => deleteTodo(index)} style={{ backgroundColor: 'red', color: 'white', border: 'none', padding: '5px 10px', cursor: 'pointer' }}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoApp;

