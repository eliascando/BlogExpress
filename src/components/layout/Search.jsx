import { useNavigate } from 'react-router-dom';

export const Search = () => {

  const navegar = useNavigate();

  const buscarArticulo = (e) => {
    e.preventDefault();
    let busqueda =e.target.value;
    navegar(`/buscar/${busqueda}`, { replace: true });
    if(busqueda === ""){
      navegar(`/articulos`, { replace: true });
    }
  }


  return (
    <div className="search">
        <form>
            <input type="text" name="search_field" id="search_field" placeholder="Buscar articulo..." autoComplete='off' onChange={buscarArticulo}/>
        </form>
    </div>
  )
}