import { useState, useEffect } from "react";
import { config } from "../../../config";
import { Listado } from "./Listado";
import { PeticionAPI } from "../../helpers/PeticionAPI";

export const Articulos = () => {
  const [articulos, setArticulos] = useState([]);
  const [cargando, setCargando] = useState(true);

  useEffect(() => {
    conseguirArticulos();
  }, []);

  const conseguirArticulos = async () => {
    const URL = `${config.API_URL}/articulos`;
    const { datos } = await PeticionAPI(URL);
    if (datos.status === "success") {
      setArticulos(datos.articulos);
      setCargando(false);
    }
  };

  return (
    <>
      {cargando ? <h1>Cargando...</h1>
        : articulos.length === 0 ? <h1>No hay articulos</h1>
        : (<Listado articulos={articulos} setArticulos={setArticulos}/>)
      }
    </>
  );
};