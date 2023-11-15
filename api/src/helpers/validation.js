

export default function validation ({nombre,vida,ataque,defensa,velocidad,altura,peso,typePokemons,imagen}) {
    
    const errors = {};
    if(nombre.length < 5) errors.nombre="Al menos 5 caracteres"
    if((/\d/).test(nombre)) errors.nombre="No puede contener Numeros";
    if (nombre === "") errors.nombre = "No puede estar vacio"
    

    if(!(/\d/).test(ataque)) errors.ataque="Solo Numeros";
    if(ataque >300) errors.ataque="Maximo 300";
    if (ataque === "") errors.ataque = "No puede estar vacio"

    if(!(/\d/).test(vida)) errors.vida="Solo Numeros";
    if(vida >100) errors.vida="Maximo 100";
    if (vida === "") errors.vida = "No puede estar vacio"
    

    return errors;
}


// if (!nombre || !vida || !ataque || !defensa || !typePokemons || !imagen) throw Error ("Faltan Datos obligatorios");