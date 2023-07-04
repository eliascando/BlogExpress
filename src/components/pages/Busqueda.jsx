/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from "react";
import { config } from "../../../config";
import { Listado } from "./Listado";
import { PeticionAPI } from "../../helpers/PeticionAPI";
import { useParams } from "react-router-dom";

export const Busqueda = () => {
  const [articulos, setArticulos] = useState([]);
  const [cargando, setCargando] = useState(true);
  const { busqueda } = useParams();

  useEffect(() => {
    buscarArticulo();
  }, [busqueda]);

  const buscarArticulo = async () => {
    const URL = `${config.API_URL}/buscar/${busqueda}`;
    const { datos } = await PeticionAPI(URL);
    if (datos.status === "success") {
      setArticulos(datos.articulos);
      setCargando(false);
    }else{
      setArticulos([]);
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
}