export function MiComponente(props) {
    // Los props son inmutables
    // No se te ocurre hacer esto:

    // props.obj.nombre = "juan";
    // props.name = props.name + 1;
    const nombre = props.nombre;

    return (
      <p>Hola {nombre}!!</p>
    );
}