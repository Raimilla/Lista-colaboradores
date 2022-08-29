import { useState } from "react"
import { baseColaboradores } from "../BaseColaboradores"
import { Button, Form } from 'react-bootstrap';

function Colaboradores() {
    const [colaborador, setNombreColaborador] = useState("")
    const [listaColaborador, setListaColaborador] = useState(baseColaboradores)
    const [correo, setCorreo] = useState("")
    

    // Función al enviar el formulario
    const enviarFormulario = (e) => {
        e.preventDefault()
        setListaColaborador([...listaColaborador, { nombre: colaborador, correo: correo, id: ((listaColaborador.length) + 1) }])
        console.log(listaColaborador)
    }
    //Función al escribir sobre el input del formulario
    const capturaInputColaborador = (e) => {
        setNombreColaborador(e.target.value)
    }

    const capturaInputCorreo = (e) => {
        setCorreo(e.target.value)
    }

    /* const modificarTarea = (tarea) => {
        const nuevasTareas = [...listaTareas] // Copiamos las tareas
        anteriores
        const index = nuevasTareas.findIndex(el => el.nombre ===
            tarea.nombre) // Buscamos la tarea a modificar en la lista
        nuevasTareas[index].completada = true
        setListaTareas(nuevasTareas)
    }
    const eliminarTarea = (tarea) => {
        const listaFiltrada = listaTareas.filter(el => el.nombre !==
            tarea.nombre)
        setListaTareas(listaFiltrada)
    } */
    return (
        <div>
            <nav className="navbar bg-dark">
                <div className="container-fluid">
                    <a className="navbar-brand">Busqueda Colaborador</a>
                    <form className="d-flex" role="search">
                        <input className="form-control me-2" 
                            type="search" 
                            placeholder="Busqueda" 
                            aria-label="Search"/>
                            <button className="btn btn-outline-success" type="submit">Busqueda</button>
                    </form>
                </div>
            </nav>

            <div className="container-fluid mt-5">
                <Form onSubmit={enviarFormulario}>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Nombre colaborador</Form.Label>
                        <Form.Control 
                            value={colaborador} 
                            onChange={capturaInputColaborador} 
                            type="text" 
                            placeholder="Nombre del colaborador" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Correo colaborador</Form.Label>
                        <Form.Control 
                            value={correo} 
                            onChange={capturaInputCorreo} 
                            type="email" 
                            placeholder="Correo Colaborador" />
                    </Form.Group>
                    <Button variant="primary" type="submit">
                        Agregar Colaborador
                    </Button>
                </Form>
            </div>

            <hr />

            <ul>
                <h3 >Lista de Colaboradores</h3>
                {listaColaborador.map(colaborador => <li
                    key={colaborador.id}>{colaborador.nombre} - {colaborador.correo}
                </li>)}
            </ul>

        </div>
    )
}
export default Colaboradores