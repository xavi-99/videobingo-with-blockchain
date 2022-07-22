import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Button from "./components/shared/atoms/Button"

function App() {
  return (
    <div className='App'>
      <header className='App-header'>
        <img src={logo} className='App-logo' alt='logo' />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className='App-link'
          href='https://reactjs.org'
          target='_blank'
          rel='noopener noreferrer'
        >
          Learn React
        </a>
        <h1 className='text-3xl font-bold underline text-red-600'>
          Simple React Typescript Tailwind Sample
        </h1>
        <Button value={"test"} classList={""}></Button>
      </header>
    </div>
  );
}

export default App;
