import React, { useState } from "react";
import styled from "styled-components";

const Input = styled.input`
  padding: 8px;
  border-radius: 8px;
`

const Button = styled.button`
  color: white;
  background-color: #2D005D;
  padding: 8px;
  margin: 10px;
  border-radius: 10px;
  
`

export default function SearchBar({onSearch}) {

  const [character, setCharacter] = useState("");

  const handleChange = evento => {
    setCharacter(evento.target.value)
  }

  return (
    <div>
      <Input placeholder="Buscar personaje..." type="search" onChange={handleChange}/>
      <Button onClick={() => onSearch(character)}>Agregar</Button>
    </div>
  );
}
