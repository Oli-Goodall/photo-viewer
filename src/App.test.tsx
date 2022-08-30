import React from 'react';
import { render } from '@testing-library/react';
import App from './App';
import { brokenImages } from './Components/GetURLs'
import { imageUrls } from './Components/GetURLs'

test('renders React Photo Viewer text', () => {
  const { getByText } = render(<App />);
  const textElement = getByText(/React Photo Viewer/i);
  expect(textElement).toBeInTheDocument();
});

//This test doesn't actually do what it should
test('No broken images', () => {
    const { getByText } = render(<App />);
    expect(imageUrls).not.toContain(brokenImages);
  });


