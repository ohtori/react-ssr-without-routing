import React, { useState } from 'react';

export default function FormComponent() {
  const [inputState, setInputState] = useState('Put your message');

  const inputHandler = (e) => {
    setInputState(e.target.value);
    console.log(inputState);
  }

  return (
    <form>
      <input type="text"  onInput={inputHandler} name="email" value={inputState} placeholder=""/>
      <button>Send</button>
    </form>
  );
}