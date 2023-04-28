var nuevaArray = [];
   for (var i = 0; i < array.length; i++) {
    if (array[i]==="Enero"||array==="Marzo"||array==="Noviembre" ) {
     nuevaArray.push(array[i]);
    }
    }if(nuevaArray.length===3){
      return nuevaArray
    }else  return "No se encontraron los meses pedidos"