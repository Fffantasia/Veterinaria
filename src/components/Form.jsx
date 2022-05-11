import React, { Fragment, useState, useEffect } from 'react'
import Errores from './Errores'

function Form({setPacientes, listadoPac, pacientes, setPaciente}) {

    const [nomMascota, guardarMascota] = useState('');
    const [nomDueño, guardarDueño] = useState('');
    const [email, guardarEmail] = useState('');
    const [sintomas, guardarSintomas] = useState('');
    const [errormsgMasc, guardarErrorMasc] = useState('');
    const [errormsgDue, guardarErrorDue] = useState('');
    const [error, guardarError] = useState(false);

    useEffect(()=>{
        if(Object.keys(pacientes).length>0){
            guardarMascota(pacientes.nomMascota)
            guardarDueño(pacientes.nomDueño)
            guardarEmail(pacientes.email)
            guardarSintomas(pacientes.sintomas)
        }
    },[pacientes]);

    const generarId= () =>{
        const random=Math.random().toString(36).substring(2);
        const fecha=Date.now().toString(36);

        return random+fecha
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if ((nomMascota, nomDueño, email, sintomas) === ""){
            console.log("Faltan datos");
            guardarError(true);
            alert("Hay campos sin completar");
        }
        else{
            console.log("Enviado");
            guardarError(false);
            const objetoPaciente = {
                nomMascota,
                nomDueño,
                email,
                sintomas
            }
            if(pacientes.id){
                objetoPaciente.id = pacientes.id
                const pacienteActualizado = listadoPac.map(pacienteState => pacienteState.id === pacientes.id ? objetoPaciente : pacienteState)
                setPacientes(pacienteActualizado)
                setPaciente({})
            }
            else{
                objetoPaciente.id=generarId();
                setPacientes([...listadoPac, objetoPaciente]);
            }
            guardarMascota("");
            guardarDueño("");
            guardarEmail("");
            guardarSintomas("");
        }
    }
    const myChangeMasc = (e) => {
        let nom = e.target.value;
        if (nom !== '' && Number(nom)){
			guardarErrorMasc("Por favor introduce texto");
		}
        else {
            guardarMascota(nom);
            guardarErrorMasc("");
        }
    }
    const myChangeDue = (e) => {
        let nom = e.target.value;
        if (nom !== '' && Number(nom)){
			guardarErrorDue("Por favor introduce texto");
		}
        else {
            guardarDueño(nom);
            guardarErrorDue("");
        }
    }

    return (
        <div className="md:w-1/2 ml-5 mt-5">
            <h2 className="font-black text-2xl text-indigo-600 text-center uppercase">Formulario</h2>
            <p className="text-center mb-10 text-xl font-bold">
                Añade pacientes
            </p>
            <form className="bg-white mb-10 rounded-lg sha-md px-5 pt-2 pb-2" onSubmit={handleSubmit}>
                <div className="mb-5">
                    <label id="nomMascota" htmlFor="nomMascota" className="text-#292f33 text-bold text-lg block uppercase font-bold">Nombre de la Mascota</label>
                    <input className="placeholder-gray-400 border-2 w-8/12" type="text" id="nomMascota" placeholder="Escriba el nombre de la mascota..." value={nomMascota} onChange={myChangeMasc}/>
                    <p className="text-#ff513d">{errormsgMasc}</p>
                </div>
                <div className="mb-5">
                    <label id="nomDueño" htmlFor="nomDueño" className="block text-#292f33 text-bold text-lg uppercase font-bold">Nombre del Dueño</label>
                    <input className="placeholder-gray-400 border-2 w-8/12" type="text" id="nomDueño" placeholder="Escriba su nombre..." value={nomDueño} onChange={myChangeDue}/>
                    <p className="text-#ff513d">{errormsgDue}</p>
                </div>
                <div className="mb-5">
                    <label id="email" htmlFor="email" className="block text-#292f33 text-bold text-lg uppercase font-bold">Email</label>
                    <input className="placeholder-gray-400 border-2 w-8/12" type="text" id="email" placeholder="Escriba su email..." value={email} onChange={(e)=>guardarEmail(e.target.value)}/>
                </div>
                <div className="mb-5">
                    <label id="sintom" htmlFor="sintom" className="text-#292f33 text-lg block uppercase font-bold">Sintomas</label>
                    <textarea className="appearance-none resize-none placeholder-gray-400 border-2 w-full h-40 c" id="sintom" placeholder="Describa sus síntomas..." value={sintomas} onChange={(e)=>guardarSintomas(e.target.value)}/>
                </div>
                <div className="mb-5">
                    <div htmlFor="error" className="text-#292f33 text-lg block uppercase font-bold">{ error ? <Errores /> : null }</div>
                </div>
                <div className="mb-5 text-bold text-white text-center text-lg ">
                    <input className="w-full bg-indigo-600 rounded-sm p-2 hover:bg-indigo-700 cursor-pointer transition-all" type="submit" value={pacientes.id ? 'Guardar' : 'Enviar'} onClick={handleSubmit}/>
                </div>
            </form>
        </div>
    )
}

export default Form
