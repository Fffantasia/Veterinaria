import Pacientes from './Pacientes'

function ListadoPac({listadoPac, setPaciente, eliminarPaciente}) {
    return (
        <div className="w-1/2 lg:w-3/5 mb-5 ml-5 mt-5 px-5">
            <h2 className="font-black text-2xl text-indigo-600 text-center uppercase">Listado</h2>
            <p className="text-center mb-10 text-xl font-bold">
                Encuentra pacientes
            </p>
            <div className="h-96 overflow-y-scroll">
            {listadoPac.length===0
            ?
            <p className="font-bold uppercase text-center ml-6">No hay pacientes</p>
            :listadoPac.map(pacientes=>{
                return(
                    <Pacientes 
                        key={pacientes.id}
                        setPaciente={setPaciente}
                        pacientes={pacientes}
                        eliminarPaciente={eliminarPaciente}
                     />
            )})
            }
            </div>
        </div>
    )
}

export default ListadoPac