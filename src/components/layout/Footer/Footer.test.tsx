import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router';
import Footer from './Footer';

function renderFooter() {
  return render(
    <MemoryRouter>
      <Footer />
    </MemoryRouter>
  );
}

describe('Footer', () => {
  it('renders brand identity', () => {
    renderFooter();
    expect(screen.getByText('Engenheiro · Parceiro Técnico')).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: 'Leo Pessoa' })).toBeInTheDocument();
    expect(screen.getByText(/Automação residencial e projetos elétricos/i)).toBeInTheDocument();
    expect(screen.getByText(/CREA-PB · MBA FGV/i)).toBeInTheDocument();
  });

  it('renders column labels', () => {
    const { container } = renderFooter();
    const labels = container.querySelectorAll('._colLabel_ab0a49, [class*="colLabel"]');
    const labelTexts = Array.from(labels).map((el) => el.textContent);
    expect(labelTexts).toContain('Navegação');
    expect(labelTexts).toContain('Contato');
  });

  it('renders navigation links', () => {
    renderFooter();
    expect(screen.getByRole('link', { name: 'Sobre' })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: 'Projetos' })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: 'Para Clientes ↗' })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: 'Para Parceiros ↗' })).toBeInTheDocument();
  });

  it('renders contact info', () => {
    renderFooter();
    expect(screen.getByText('(83) 98207-8702')).toBeInTheDocument();
    expect(screen.getByText('contato@leopessoa.eng.br')).toBeInTheDocument();
    expect(screen.getByText('João Pessoa — PB')).toBeInTheDocument();
  });

  it('renders social media links with aria-labels', () => {
    renderFooter();
    // getAllByRole porque WhatsApp aparece também no contato
    const instagramLinks = screen.getAllByRole('link', { name: /instagram/i });
    expect(instagramLinks.length).toBeGreaterThanOrEqual(1);
    const whatsappLinks = screen.getAllByRole('link', { name: /whatsapp/i });
    expect(whatsappLinks.length).toBeGreaterThanOrEqual(1);
  });

  it('renders social media icons with correct FontAwesome classes', () => {
    const { container } = renderFooter();
    expect(container.querySelector('.fa-instagram')).toBeInTheDocument();
    expect(container.querySelector('.fa-whatsapp')).toBeInTheDocument();
  });

  it('renders copyright bar with current year', () => {
    renderFooter();
    const year = new Date().getFullYear().toString();
    expect(screen.getByText(new RegExp(`© ${year}`))).toBeInTheDocument();
  });

  it('renders domain brand in footer bottom', () => {
    renderFooter();
    expect(screen.getByText('leopessoa.eng.br')).toBeInTheDocument();
  });
});
