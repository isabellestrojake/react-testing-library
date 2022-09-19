import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import renderWithRouter from '../Router/index';
import pokemons from '../data';
import App from '../App';

describe('Teste se no componente Pokédex', () => {
  it('Tem um título de texto "Encountered pokémons"', () => {
    renderWithRouter(<App />);

    const title = screen.getByRole('heading', { name: /Encountered pokémons/i });

    expect(title).toBeInTheDocument();
  });

  it('É exibido o próximo pokémon ao clicar no botão "Próximo Pokémon"', () => {
    renderWithRouter(<App />);

    const btn = screen.getByRole('button', { name: /Próximo pokémon/i });
    expect(btn).toBeInTheDocument();

    const pkm1 = screen.getByText(pokemons[0].name);
    expect(pkm1).toBeInTheDocument();

    userEvent.click(btn);
    const pkm2 = screen.getByText(pokemons[1].name);
    expect(pkm2).toBeInTheDocument();

    userEvent.click(btn);
    const pkm3 = screen.getByText(pokemons[2].name);
    expect(pkm3).toBeInTheDocument();

    userEvent.click(btn);
    const pkm4 = screen.getByText(pokemons[3].name);
    expect(pkm4).toBeInTheDocument();

    userEvent.click(btn);
    const pkm5 = screen.getByText(pokemons[4].name);
    expect(pkm5).toBeInTheDocument();

    userEvent.click(btn);
    const pkm6 = screen.getByText(pokemons[5].name);
    expect(pkm6).toBeInTheDocument();

    userEvent.click(btn);
    const pkm7 = screen.getByText(pokemons[6].name);
    expect(pkm7).toBeInTheDocument();

    userEvent.click(btn);
    const pkm8 = screen.getByText(pokemons[7].name);
    expect(pkm8).toBeInTheDocument();

    userEvent.click(btn);
    const pkm9 = screen.getByText(pokemons[8].name);
    expect(pkm9).toBeInTheDocument();

    userEvent.click(btn);
    const pkm10 = screen.getByText(pokemons[0].name);
    expect(pkm10).toBeInTheDocument();
  });

  it('Apenas um Pokémon é exibido por vez', () => {
    renderWithRouter(<App />);

    const allPkms = screen.getAllByTestId('pokemon-name');

    expect(allPkms).toHaveLength(1);
  });

  it('A Pokédex possui os botões de filtro', () => {
    renderWithRouter(<App />);

    const typeBtns = screen.getAllByTestId('pokemon-type-button');
    const btnsQuantt = 7;
    expect(typeBtns).toHaveLength(btnsQuantt);

    const electricFilter = screen.getAllByRole('button', { name: /Electric/i });
    expect(electricFilter[0]).toBeInTheDocument();
    expect(electricFilter).toHaveLength(1);

    const fireFilter = screen.getAllByRole('button', { name: /fire/i });
    expect(fireFilter[0]).toBeInTheDocument();
    expect(fireFilter).toHaveLength(1);

    const bugFilter = screen.getAllByRole('button', { name: /bug/i });
    expect(bugFilter[0]).toBeInTheDocument();
    expect(bugFilter).toHaveLength(1);

    const poisonFilter = screen.getAllByRole('button', { name: /poison/i });
    expect(poisonFilter[0]).toBeInTheDocument();
    expect(poisonFilter).toHaveLength(1);

    const psychicFilter = screen.getAllByRole('button', { name: /psychic/i });
    expect(psychicFilter[0]).toBeInTheDocument();
    expect(psychicFilter).toHaveLength(1);

    const normalFilter = screen.getAllByRole('button', { name: /normal/i });
    expect(normalFilter[0]).toBeInTheDocument();
    expect(normalFilter).toHaveLength(1);

    const drgFilter = screen.getAllByRole('button', { name: /dragon/i });
    expect(drgFilter[0]).toBeInTheDocument();
    expect(drgFilter).toHaveLength(1);
  });

  it('Tem um botão para resetar os filtros', () => {
    renderWithRouter(<App />);

    const allBtns = screen.getAllByRole('button');
    expect(allBtns[1]).toBeInTheDocument();

    userEvent.click(allBtns[0]);

    pokemons.filter((pokemon) => pokemon.type === '');
  });
});
