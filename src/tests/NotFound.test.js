import React from 'react';
import { screen } from '@testing-library/react';
import renderWithRouter from '../Router/index';
import { NotFound } from '../pages';

describe('Teste se o componente Not Found:', () => {
  it('Contém um título de texto "Page requested not found"', () => {
    renderWithRouter(<NotFound />);

    const title = screen.getByRole('heading', { name: /Page requested not found/i });

    expect(title).toBeInTheDocument();
  });

  it('Contém a imagem correta', () => {
    renderWithRouter(<NotFound />);

    const image = screen.getByRole('img');

    expect(image).toHaveAttribute('src', 'https://media.giphy.com/media/kNSeTs31XBZ3G/giphy.gif');
  });
});
