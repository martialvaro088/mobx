import React from "react";
import { inject, observer } from "mobx-react"
import cursosStore from "./stores/CursosStore";
class Menu extends React.Component {
    nombreRef = React.createRef();
    fotoRef = React.createRef();

    render() {

        return <div>
            <header>
                <h1 id="header_h1">CURSOS</h1>
            </header>

            <h1>Nº de Cursos ofrecidos: {cursosStore.numeroCursos}</h1>
            <form onSubmit={e => {
                e.preventDefault();
                cursosStore.añadirCurso({
                    nombre: this.nombreRef.current.value,
                    foto: this.fotoRef.current.value
                })
                e.target.reset();
            }}>
                <input
                    type="text"
                    placeholder="Foto URL del curso"
                    required
                    ref={this.fotoRef}
                >
                </input>
                <button type="submit">Guardar Curso</button>
                <input
                    type="text"
                    placeholder="Nombre del curso"
                    required
                    ref={this.nombreRef}
                >
                </input>
                <button id="borrar" onClick={() => {
                    cursosStore.borrarCurso();
                }}> Borrar todo
                </button>
            </form>
            <ul>
                {cursosStore.cursos.map(curso => (
                    <li key={curso.nombre}>
                        <h2>{curso.nombre}</h2>
                        <img
                            src={curso.foto}
                            alt={curso.nombre}
                            style={{ maxWidth: "150px" }}
                        >
                        </img>
                        <button id="borrar_1" onClick={() => { cursosStore.borrarCursoPorNombre(curso.nombre); }}>
                            Borrar
                        </button>
                    </li>
                ))}
            </ul>
            <footer>
                <p>
                    Añadir y quitar cursos 2024@.
                </p>
            </footer>
        </div>
    }
}
export default inject("CursosStore")(observer(Menu));