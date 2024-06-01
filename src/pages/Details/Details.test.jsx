import { render, screen } from '@testing-library/react';
import { MemoryRouter, Route, Routes } from 'react-router-dom';
import { describe, it, expect } from 'vitest';
import { Details } from './Details';

const mockProducts = [
    { id: 1, title: 'Test Product 1', description: 'Test description 1', images: ['http://example.com/image1.jpg'], price: '10.00' },
    { id: 2, title: 'Test Product 2', description: 'Test description 2', images: ['http://example.com/image2.jpg'], price: '20.00' }
];

vi.mock('../../contexts/ProductsProvider', () => ({
    useProducts: () => ({ products: mockProducts })
}));

describe('Details', () => {
    it('should render the product details when a valid id is provided', () => {
        render(
            <MemoryRouter initialEntries={['/details/1']}>
                <Routes>
                    <Route path="/details/:id" element={<Details />} />
                </Routes>
            </MemoryRouter>
        );

        expect(screen.getByTestId('product-title')).toHaveTextContent('Test Product 1');
        expect(screen.getByText('Test description 1')).toBeInTheDocument();
        expect(screen.getByText('$10.00')).toBeInTheDocument();
    });

    it('should have alt text for images when a valid id is provided', () => {
        render(
            <MemoryRouter initialEntries={['/details/2']}>
                <Routes>
                    <Route path="/details/:id" element={<Details />} />
                </Routes>
            </MemoryRouter>
        );

        expect(screen.getByAltText('Image of Test Product 2 #1')).toBeInTheDocument();
    })

    it('should not render product details for an invalid id', () => {
        render(
            <MemoryRouter initialEntries={['/details/1254']}>
                <Routes>
                    <Route path="/details/:id" element={<Details />} />
                </Routes>
            </MemoryRouter>
        );

        expect(screen.queryByText('Test Product')).not.toBeInTheDocument();
    });

});