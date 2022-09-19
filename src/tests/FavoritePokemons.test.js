import React from 'react';
import { screen } from '@testing-library/react';
import renderWithRouter from '../Router/index';
import { FavoritePokemons } from '../pages';
import data from '../data';

describe('Teste se no componente Favorite Pokémons', () => {
  it('É exibida na tela a mensagem "No favorite Pokémon found" se não houver', () => {
    renderWithRouter(<FavoritePokemons />);

    const p = screen.getByText(/No favorite pokemon found/i);

    expect(p).toBeInTheDocument();
  });

  it('É exibido os cards de todos os favoritos', () => {
    renderWithRouter(<FavoritePokemons pokemons={ [data[0], data[1]] } />);

    const pokemons = screen.getAllByTestId('pokemon-name');

    expect(pokemons).toHaveLength(2);
  });
});
