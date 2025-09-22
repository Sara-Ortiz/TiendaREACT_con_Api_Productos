import React, { useState, useEffect } from 'react';
import '../style/ProductsPage.css';
import { getProducts } from '../service/apiService'; // Importa la función del servicio.

const ProductsPage = ({ onAddToCart }) => {
    const [products, setProducts] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                // Llama a la función del servicio para obtener los productos.
                const data = await getProducts();
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