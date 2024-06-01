import { render, screen } from "@testing-library/react";
import { ProductList } from "./ProductList";
import { describe, it, expect, vi } from 'vitest';
import { useProducts } from '../../contexts/ProductsProvider';

vi.mock('../../contexts/ProductsProvider');
vi.mock('../ProductThumbnail/ProductThumbnail', () => ({
    ProductThumbnail: ({ product }) => <div>{product.title}</div>
}));


describe('ProductList', () => {
    it('should render a list of product thumbnails', () => {
        const mockProducts = [
            { id: 1, title: 'Product 1' },
            { id: 2, title: 'Product 2' },
        ];
        useProducts.mockReturnValue({ products: mockProducts});
        render(<ProductList />);
        expect(screen.getByText('Product 1')).toBeInTheDocument();
        expect(screen.getByText('Product 2')).toBeInTheDocument();
    })

    it('should display a message when there are no products in array', () => {
        useProducts.mockReturnValue({ products: []})
        render(<ProductList />);
        expect(screen.getByText('No Products Found')).toBeInTheDocument();
    })

    it('should not render list items when no products are found', () => {
        useProducts.mockReturnValue({ products: []})
        render(<ProductList />);
        expect(screen.queryByRole('listitem')).not.toBeInTheDocument();
    })

})