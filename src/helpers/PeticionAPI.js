import { config }from '../../config';

export const PeticionAPI = async(url, metodo="", datosGuardar=[], archivos = false) => {

    let cargando = true;

    let opciones = {
        method: "GET",
        headers:{
            apiKey: config.API_KEY
        }
    }

    if(metodo === "POST" || metodo === "PUT"){
        if(archivos){
            opciones = {
                method: metodo,
                body :datosGuardar,
                headers:{
                    apiKey: config.API_KEY
                }
            };
        }else{
            opciones = {
                method: metodo,
                body : JSON.stringify(datosGuardar),
                headers: {
                    "Content-Type": "application/json",
                    apiKey: config.API_KEY
                },
            };
        }

    }
    if(metodo === "DELETE"){
        opciones = {
            method: metodo,
            headers:{
                apiKey: config.API_KEY
            }
        };
    }
    const resp = await fetch(url, opciones);
    const datos = await resp.json();

    cargando = false;

    return {
        datos,
        cargando
    };
};