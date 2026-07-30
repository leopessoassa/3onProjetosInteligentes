import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import ProjectsSection from './ProjectsSection';

describe('ProjectsSection', () => {
  it('renders the section title', () => {
    render(<ProjectsSection />);
    expect(screen.getByText(/CASES REAIS/i)).toBeInTheDocument();
  });

  it('renders the featured project', () => {
    render(<ProjectsSection />);
    expect(screen.getByText('Condomínio Ville Cristal')).toBeInTheDocument();
    expect(screen.getByText('Gravatá — PE')).toBeInTheDocument();
  });

  it('renders all 3 projects', () => {
    render(<ProjectsSection />);
    expect(screen.getByText('Condomínio Ville Cristal')).toBeInTheDocument();
    expect(screen.getByText('Condomínio Alphaville Paraíba')).toBeInTheDocument();
    expect(screen.getByText('Apartamento 3 quartos')).toBeInTheDocument();
  });

  it('renders all images with non-empty alt attributes', () => {
    const { container } = render(<ProjectsSection />);
    const images = container.querySelectorAll('img');
    images.forEach((img) => {
      expect(img).toHaveAttribute('alt');
      expect(img.getAttribute('alt')).not.toBe('');
    });
  });

  it('renders the CTA button', () => {
    render(<ProjectsSection />);
    expect(screen.getByText(/Fale com Leo Pessoa/i)).toBeInTheDocument();
  });

  it('renders the results block', () => {
    render(<ProjectsSection />);
    expect(screen.getByText(/O que esses projetos geraram/i)).toBeInTheDocument();
    expect(screen.getByText(/\+30%/i)).toBeInTheDocument();
    expect(screen.getByText(/Valorização patrimonial/i)).toBeInTheDocument();
  });
});
