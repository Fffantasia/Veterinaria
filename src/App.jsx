import Header from "./components/Header"
import Form from "./components/Form"
import ListadoPac from "./components/ListadoPac"
import React, { Fragment, useState, useEffect } from 'react'

function App() {

  const [listadoPac, setPacientes] = useState([]);
  const [pacientes, setPaciente] = useState({});
  const eliminarPaciente=(id)=>{
    const pacienteActualizado = listadoPac.filter(pacientes=>pacientes.id !== id);
    setPacientes(pacienteActualizado)
  }

  useEffect(()=>{
    const obtenerLS=()=>{
      const pacientesLS=JSON.parse(localStorage.getItem('listadoPac')) ?? [];
      setPacientes(pacientesLS);
    }
    obtenerLS();
  },[])
  useEffect(()=>{
    localStorage.setItem('listadoPac',JSON.stringify(listadoPac));
  },[listadoPac])  

  return (
    <div className="container bg-gray-100 rounded-lg sha-lg mx-auto mt-10 pt-10">
      <Header className="mt-12 md:flex"/>
      <div className="mt-12 md:flex">
      <Form 
        setPacientes={setPacientes}
        listadoPac={listadoPac}
        pacientes={pacientes}
        setPaciente={setPaciente}
      />
      <ListadoPac
        listadoPac={listadoPac}
        setPaciente={setPaciente}
        eliminarPaciente={eliminarPaciente}
      />
      </div>
    </div>
  )
}

export default App
