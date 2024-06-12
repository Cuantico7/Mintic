"use client";

import {useEffect, useState} from "react";

export default function Lab4() {

  let [count, setCount] = useState();
  let [changeCount, setChangeCount] = useState();
  
  useEffect(() => {
    setCount(0);
  }, []);

  useEffect(() => {
    setTimeout(() => setChangeCount(`${count} elemento`), 3000);
  }, [count]);

  const addCount = () => setCount(count + 1);

  return (
    <div>
      <span>conteo: {count}</span><br/>
      <span>cambio conteo: {changeCount}</span><br />

      <span>adicionar al conteo</span> <button onClick={() => addCount()}>Adicionar +1</button><br />

    </div>
  )
}