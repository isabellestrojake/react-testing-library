import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import renderWithRouter from '../Router/index';
import { Pokemon } from '../components';
import pokemons from '../data';
import App from '../App';

describe('Teste se no componente Pokémon', () => {
  it('É renderizado um card com as infos de um pokémon', () => {
    renderWithRouter(<App />);

    const name = screen.getByTestId('pokemon-name');
    const type = screen.getByTestId('pokemon-type');
    const weigth = screen.getByTestId('pokemon-weight');
    const sprite = screen.getByAltText('Pikachu sprite');

    expect(name).toBeInTheDocument();
    expect(type.innerHTML).toMatch(/electric/i);
    expect(weigth).toBeInTheDocument();
    expect(sprite.src).toMatch(/.*\.png/);
  });

  it('Tem um link no card para as infos do pokémon', () => {
    renderWithRouter(<App />);

    const pkmInfo = screen.getByText(/more details/i);
    const detailsRegex = /.*\/pokemons\/\d+/i;

    expect(pkmInfo.href).toMatch(detailsRegex);
  });

  it('Ao clicar no link de navegação do pokémon leva à página de detalhes', () => {
    const { history } = renderWithRouter(<Pokemon pokemon={ pokemons[0] } isFavorite />);

    const pkmInfo = screen.getByText(/more details/i);
    const detailsRegex = /.*\/pokemons\/\d+/i;
    const favoriteRegex = /.*\sis marked as favorite/i;
    const favorite = screen.getByAltText(favoriteRegex);

    userEvent.click(pkmInfo);
    expect(history.location.pathname).toMatch(detailsRegex);
    expect(favorite.alt).toMatch(favoriteRegex);
    expect(favorite.src).toMatch(/.*\.svg/);
  });
});
