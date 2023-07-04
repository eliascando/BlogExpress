import { Link } from 'react-router-dom'

export const Inicio = () => {
  return (
    <div className="jumbo inicio">
      <img src="/public/banner.jpg" alt="Banner" className='banner'/>
      <h1>!Bienvenido!</h1>
      <p>Hola soy Elías, desarrollador web y este es mi Blog, aquí encontrarás artículos sobre programación y de lo que voy descubriendo y aprendiendo en este mundo del software</p>
      <h4>Datos sobre mi:</h4>
      <ul>
        <li>👨‍💻 Desarrollador web</li>
        <li>📚 Estudiante de Ingeniería en Software</li>
        <li>📝 JavaScript es mi lenguaje de programación favorito</li>
      </ul>
      <div className='ver-articulos'><Link to="/articulos" className="button-articulos">Ver los artículos</Link></div>
      <div className='redes-sociales'>
        <a href="https://github.com/eliascando/" target="_blank" rel="noreferrer"><img height="32px" width="32px" src="https://cdn.simpleicons.org/github/#181717" /></a>
        <a href="https://linkedin.com/in/eliascando" target="_blank" rel="noreferrer"><img height="32px" width="32px" src="https://cdn.simpleicons.org/linkedin/#0A66C2" /></a>
        <a href='https://www.instagram.com/cando.elias/' target="_blank" rel="noreferrer"><img height="32px" width="32px" src="https://cdn.simpleicons.org/instagram/#E4405F" /></a>
      </div>
    </div>
  )
}