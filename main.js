import data from './data/pokemon/pokemon.js';
import { buscarTipo, order, CalculoAgreg } from './data.js';

const cards = data.pokemon;
const showcards = document.getElementById('cards');
function pokeCards(listaPokemon) {
  const cardsHTML = listaPokemon.map((data)=> `
    <section class="box">
      <div class="card">
        <p>${data.num}</p>
        <h3>${data.name}</h3>
        <img src=${data.img} />
        <p><strong>Tipo:</strong> ${data.type}</p>
        <p><strong>Ovo:</strong> ${data.egg}</p>
      </div>
    </section>
  `).join('');
  showcards.innerHTML = cardsHTML;
}
pokeCards(cards);

const calculo = document.querySelector("#calculo")

const filtroSelect = document.querySelector("#Filtrar");
filtroSelect.addEventListener("change",() => {
  const parametroFiltro = filtroSelect.value;  
  const listfilter = buscarTipo(cards,parametroFiltro);
  pokeCards(listfilter);
  const porcentagem = CalculoAgreg (cards,listfilter)
  calculo.innerHTML = `O número de pokemons desse tipo é ${listfilter.length}, equivale a ${porcentagem}% dos cards!`
});

const orderList = document.querySelector("#Ordenar");
orderList.addEventListener("change",() => {
  const parametroOrdenar = orderList.value;
  const ordenado = order(cards,parametroOrdenar);
  pokeCards(ordenado);
});







 