import React, { useState, useEffect } from 'react';
import './productsPage.css';

const ProductsPage = ({ onAddToCart }) => {
    const [products, setProducts] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await fetch('https://fakestoreapi.com/products');
                if (!response.ok) {
                    throw new Error('No se pudieron cargar los productos. Intenta nuevamente.');
                }
                const data = await response.json();
                setProducts(data);
                setIsLoading(false);
            } catch (err) {
                setError(err.message);
                setIsLoading(false);
            }
        };
        fetchProducts();
    }, []);

    if (isLoading) {
        return (
            <div className="status-message">
                <p>Cargando productos... ⏳</p>
            </div>
        );
    }

    if (error) {
        return (
            <div className="status-message">
                <p>{error}</p>
            </div>
        );
    }

    return (
        <section className="product-section">
            <h2>Nuestra Colección</h2>
            <div className="grid">
                {products.map((product) => (
                    <div key={product.id} className="card">
                        <div className="image-container">
                            <img src={product.image} alt={product.title} />
                        </div>
                        <div className="info">
                            <h3>{product.title}</h3>
                            <p className="category">{product.category}</p>
                            <p className="price">$ {product.price}</p>
                            <button
                                onClick={() => onAddToCart(product)}
                                className="agg-button"
                            >
                                Agregar
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default ProductsPage;
