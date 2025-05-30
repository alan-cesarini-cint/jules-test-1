import { render, screen } from '@testing-library/react';
import App from './App';
import { BrowserRouter } from 'react-router-dom';

test('renders app with navigation links', () => {
  render(
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );

  // Check for Home link
  const homeLinkElement = screen.getByRole('link', { name: /home/i });
  expect(homeLinkElement).toBeInTheDocument();

  // Check for About link
  const aboutLinkElement = screen.getByRole('link', { name: /about/i });
  expect(aboutLinkElement).toBeInTheDocument();
});
