"use client";

import {useInputHook} from "lab2/hooks/use-input-hook";
//import {useInputHook} from "../../../hooks/use-input-hook";


export default function Lab6() {
  const {value, bind, reset, setValue} = useInputHook();

  const title = <h1>Manejo de Hooks personalizados</h1>;
  const paragraph = <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad asperiores, culpa cum debitis deserunt dignissimos dolor doloremque facere inventore ipsa labore modi neque numquam placeat, quaerat quasi quidem vitae, voluptatem.</p>;

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(`Nombre ${value}`);
    reset();
  };

  return (
    <div>
      {title}
      {paragraph}
      <form onSubmit={handleSubmit}>
        <label>
          Nombre:
          <input name="firstName" type="text" {...bind} />
        </label>
        <input type="submit" value="Enviar"/>
      </form>
    </div>

  );
}