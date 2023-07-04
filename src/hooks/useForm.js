import { useState } from "react";

export const useForm = (initialState = {}) => {
    const [formulario, setFormulario] = useState(initialState);
    
    const serializarFormulario = (formulario) => {
        const formData = new FormData(formulario);
    
        const objetoCompleto = {}; // Objeto vacio
    
        for (let [key, value] of formData) {
        objetoCompleto[key] = value;
        }
    
        return objetoCompleto;
    };
    
    const guardar = (e) => {
        e.preventDefault();
        let curso = serializarFormulario(e.target);
        setFormulario(curso);

        document.querySelector(".codigo").classList.add("guardado");
    };
    
    const cambiar = (e) => {
        setFormulario({
            ...formulario,
            [e.target.name]: e.target.value,
        });
    };
    
    return {
        formulario,
        guardar,
        cambiar
    };
}
