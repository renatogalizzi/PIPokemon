

export default function validation ({nombre,vida,ataque,defensa,velocidad,altura,peso,typePokemons,imagen}) {
    const errors = {};
    if(nombre.length < 5) errors.nombre="Al menos 5 caracteres"
    



    return errors;
}


// if (!nombre || !vida || !ataque || !defensa || !typePokemons || !imagen) throw Error ("Faltan Datos obligatorios");