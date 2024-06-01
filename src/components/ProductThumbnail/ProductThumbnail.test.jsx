import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { describe, it, expect } from 'vitest';
import { ProductThumbnail } from './ProductThumbnail';

const mockProduct = {
    id: 1,
    title: 'Test Product',
    thumbnail: 'http://test.com/thumbnail.jpg',
    price: '100.00'
};

describe('ProductThumbnail', () => {
    it('should render the product title', () => {
        render(<ProductThumbnail product={mockProduct} />, { wrapper: MemoryRouter });
        expect(screen.getByText(mockProduct.title)).toBeInTheDocument();
    });

    it('should render the correct thumbnail image', () => {
        render(<ProductThumbnail product={mockProduct} />, { wrapper: MemoryRouter });
        const img = screen.getByAltText(`Thumbnail image of ${mockProduct.title}`);
        expect(img).toBeInTheDocument();
        expect(img).toHaveAttribute('src', mockProduct.thumbnail);
    });

    it('should render the product price', () => {
        render(<ProductThumbnail product={mockProduct} />, { wrapper: MemoryRouter });
        expect(screen.getByText(`$${mockProduct.price}`)).toBeInTheDocument();
    });

    it('should have a link to the product details page', () => {
        render(<ProductThumbnail product={mockProduct} />, { wrapper: MemoryRouter });
        const link = screen.getByRole('link', { name: mockProduct.title });
        expect(link).toBeInTheDocument();
        expect(link).toHaveAttribute('href', `/details/${mockProduct.id}`);
    });

    it('should render the correct link URL', () => {
        render(<ProductThumbnail product={mockProduct} />, { wrapper: MemoryRouter });
        const link = screen.getByRole('link', { name: mockProduct.title });
        expect(link).toBeInTheDocument();
        expect(link.getAttribute('href')).toBe(`/details/${mockProduct.id}`);
    });
});