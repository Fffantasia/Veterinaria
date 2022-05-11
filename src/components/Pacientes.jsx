import React from 'react'

const Pacientes = ({pacientes, setPaciente, eliminarPaciente}) => {
    
    const {nomMascota,nomDueño,email,sintomas,id}=pacientes;

    const handleEliminar=()=>{
        const respuesta = confirm('¿Seguro que quieres eliminar a este paciente?')
        if(respuesta){
            eliminarPaciente(id)
        }
    }

    return (
            <div className="bg-white mb-10 rounded-lg sha-md px-5 pt-2 pb-2">
                <p className="font-bold text-#292f33 uppercase mb-3">Id de paciente: {' '}
                    <span className="font-normal normal-case text-#292f33">
                        {id}
                    </span>
                </p>
                <p className="font-bold text-#292f33 uppercase mb-3">Nombre de la mascota: {' '}
                    <span className="font-normal normal-case text-#292f33">
                        {nomMascota}
                    </span>
                </p>
                <p className="font-bold text-#292f33 uppercase mb-3">Nombre del dueño: {' '}
                    <span className="font-normal normal-case text-#292f33">
                        {nomDueño}
                    </span>
                </p>
                <p className="font-bold text-#292f33 uppercase mb-3">Email: {' '}
                    <span className="font-normal normal-case text-#292f33">
                        {email}
                    </span>
                </p>
                <p className="font-bold text-#292f33 uppercase mb-3">Síntomas: {' '}
                    <span className="font-normal normal-case text-#292f33">
                        {sintomas}
                    </span>
                </p>
                <button className="w-5/12 text-bold text-white text-center text-lg bg-indigo-600 rounded-sm p-2 hover:bg-indigo-700 cursor-pointer transition-all mr-4 ml-6" type="button" onClick={()=>setPaciente(pacientes)}>
                    Editar
                </button>
                <button className="w-5/12 text-bold text-white text-center text-lg bg-indigo-600 rounded-sm p-2 hover:bg-indigo-700 cursor-pointer transition-all ml-4" type="button" onClick={handleEliminar}>
                    Eliminar
                </button>
            </div>
    )
}

export default Pacientes
