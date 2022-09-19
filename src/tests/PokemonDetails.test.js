import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from '../App';
import renderWithRouter from '../Router/index';

describe('Teste se no componente Pokémon Details', () => {
  it('As infos detalhadas dos pokémons são renderizadas', () => {
    renderWithRouter(<App />);

    const infoBtn = screen.getByRole('link', { name: /more details/i });
    userEvent.click(infoBtn);

    const pkmDetails = screen.getByRole('heading', { name: /pikachu details/i });
    expect(pkmDetails).toBeInTheDocument();
    expect(infoBtn).not.toBeInTheDocument();

    const summary = screen.getByRole('heading', { name: /summary/i });
    expect(summary).toBeInTheDocument();

    const summaryText = screen.getByText(/This intelligent Pokémon roasts hard berrie./i);
    expect(summaryText).toBeInTheDocument();
  });

  it('Existe uma seção na página com os mapas de localização dos pokémons ', () => {
    renderWithRouter(<App />);

    const infoBtn = screen.getByRole('link', { name: /more details/i });
    userEvent.click(infoBtn);

    const locations = screen.getByRole('heading', { name: /game locations of pikachu/i });
    expect(locations).toBeInTheDocument();

    const maps = screen.getAllByAltText(/pikachu location/i);
    expect(maps).toHaveLength(2);
    expect(maps[0].src).toBe('https://cdn2.bulbagarden.net/upload/0/08/Kanto_Route_2_Map.png');
  });

  it('O usuário pode favoritar um pokémon através da página de detalhes', () => {
    renderWithRouter(<App />);

    const infoBtn = screen.getByRole('link', { name: /more details/i });
    userEvent.click(infoBtn);
    const favoritePkm = screen.getByLabelText(/pokémon favoritado?/i);
    expect(favoritePkm).toBeInTheDocument();
  });
});
