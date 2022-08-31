const nombres = ["LUCIANA", "BENJAMIN", "ROSSANA", "EDGAR"];
alert(nombres);
let eliminar = prompt("TENES QUE ELIMINAR A UNO").toUpperCase();

switch (eliminar) {
    case "LUCIANA":
        let index = nombres.indexOf(eliminar);
        if (index != -1) {
            nombres.splice(index, 1);
            alert(`${eliminar} fue eliminado`);
            alert(nombres);
        }
        break;
    case "BENJAMIN":
        let index1 = nombres.indexOf(eliminar);
        if (index1 != -1) {
            nombres.splice(index1, 1);
            alert(`${eliminar} fue eliminado`);
            alert(nombres);
        }
        break;
    case "ROSSANA":
        let index2 = nombres.indexOf(eliminar);
        if (index2 != -1) {
            nombres.splice(index2, 1);
            alert(`${eliminar} fue eliminado`);
            alert(nombres);
        }
        break;
    case "EDGAR":
        let index3 = nombres.indexOf(eliminar);
        if (index3 != -1) {
            nombres.splice(index3, 1);
            alert(`${eliminar} fue eliminado`);
            alert(nombres);
        }
        break;
    default:
        let index4 = nombres.indexOf(eliminar);
        if (index4 === -1) {
            alert("No se encontro ese nombre");
        }
}