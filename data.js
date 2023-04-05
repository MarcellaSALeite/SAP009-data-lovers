
export const buscarTipo = (data,selectValue) => {
  const resultadoBusca = data.filter((pokemon) => pokemon.type.includes(selectValue));
  return resultadoBusca
};


export function order(data, pokemon) {
  const ordenação = [...data]
  if (pokemon === "a-z") {
    ordenação.sort(function(a,b){
      if(a.name < b.name){
        return -1;
      }
      return 1;
    });
  }
  else if (pokemon === "z-a") {
    ordenação.sort(function(a,b){
      if(a.name < b.name){
        return 1;
      }
      return -1;
    })
  }
  return ordenação
}

export function CalculoAgreg (data, novoFiltro) {
  return ((novoFiltro.length / data.length)*100).toFixed(2)
}

