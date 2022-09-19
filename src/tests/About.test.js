import React from 'react';
import { screen } from '@testing-library/react';
import renderWithRouter from '../Router/index';
import App from '../App';
import About from '../pages/About';

describe('Teste se o componente About:', () => {
  it('Contém informações sobre a Pokédex', () => {
    const { history } = renderWithRouter(<App />);

    history.push('/about');
  });

  it('Contém um título com o texto About Pokédex', () => {
    renderWithRouter(<About />);

    const title = screen.getByRole('heading', { name: /About Pokédex/i }, { level: 2 });

    expect(title).toBeInTheDocument();
  });

  it('Contém dois parágrafos com texto sobre a Pokédex', () => {
    renderWithRouter(<About />);

    const p1 = screen.getByText(/simulates a Pokédex/i);
    const p2 = screen.getByText(/filter Pokémons by type/i);

    expect(p1).toBeInTheDocument();
    expect(p2).toBeInTheDocument();
  });

  it('Contém a imagem correta da Pokédex', () => {
    renderWithRouter(<About />);

    const url = 'https://cdn2.bulbagarden.net/upload/thumb/8/86/Gen_I_Pok%C3%A9dex.png/800px-Gen_I_Pok%C3%A9dex.png';
    const image = screen.getByRole('img');

    expect(image.src).toBe(url);
  });
});
