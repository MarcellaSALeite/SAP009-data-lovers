import { buscarTipo,order,CalculoAgreg} from '../src/data.js';

const testPokemon = [
  {name:"bulbasaur", type:["grass", "poison"]},
  {name:"venusaur", type:["bug"]},
  {name:"ivysaur", type:["water"]},
  
];

const filtroTest = [{name:"bulbasaur", type:["grass", "poison"]}]


describe('buscarTipo', () => {
  it('is a function', () => {
    expect(typeof buscarTipo).toBe('function');
  });

  it('Quando chamar a função buscarTipo passando como paramentros testPokemon e water retorne o pokemon tipo water', () => {
    expect(buscarTipo(testPokemon,"water")).toStrictEqual([{name:"ivysaur", type:["water"]}]);
  });
});

describe('order', () => {
  it('is a function', () => {
    expect(typeof order).toBe('function');
  });

  it('Quando chamar a função order passando como paramentros testPokemon e a-z retorne os pokemon por ordem alfabetica', () => {
    expect(order(testPokemon,"a-z")).toStrictEqual([{name:"bulbasaur", type:["grass", "poison"]},{name:"ivysaur", type:["water"]},{name:"venusaur", type:["bug"]}]);
  });
});

describe('order', () => {
  it('is a function', () => {
    expect(typeof order).toBe('function');
  });

  it('Quando chamar a função order passando como paramentros testPokemon e z-a retorne os pokemon por ordem alfabetica', () => {
    expect(order(testPokemon,"z-a")).toStrictEqual([{name:"venusaur", type:["bug"]},{name:"ivysaur", type:["water"]},{name:"bulbasaur", type:["grass", "poison"]}]);
  });
});

describe('CalculoAgreg', () => {
  it('is a function', () => {
    expect(typeof CalculoAgreg).toBe('function');
  });

  it('Quando chamar a função CalculoAgreg passando como paramentros testPokemon calculo e  retorne a porcentagem de pokemon por tipo', () => {
    expect(CalculoAgreg(testPokemon,filtroTest)).toStrictEqual("33.33");
  });
});
