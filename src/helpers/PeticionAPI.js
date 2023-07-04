export const PeticionAPI = async(url, metodo="", datosGuardar=[], archivos = false) => {

    let cargando = true;

    let opciones = {
        method: "GET"
    }

    if(metodo === "POST" || metodo === "PUT"){
        if(archivos){
            opciones = {
                method: metodo,
                body :datosGuardar,
            };
        }else{
            opciones = {
                method: metodo,
                body : JSON.stringify(datosGuardar),
                headers: {
                    "Content-Type": "application/json",
                },
            };
        }

    }
    if(metodo === "DELETE"){
        opciones = {
            method: metodo,
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