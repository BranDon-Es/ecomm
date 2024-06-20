// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchProductDetail } from '../api';
import ProductImages from '../components/ProductImages';
import ProductDetails from '../components/ProductDetails';
import ProductReviews from '../components/ProductReviews';
import ProductSpecifications from '../components/ProductSpecifications';
import { useCart } from '../context/CartContext'; // Import the useCart hook
import '../styles/ProductDetailPage.css';

const ProductDetailPage = () => {
  const { productId } = useParams();
  const { addItemToCart } = useCart(); // Use the useCart hook to access cart functionalities
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [addedToCartMessage, setAddedToCartMessage] = useState('');

  useEffect(() => {
    const loadProduct = async () => {
      try {
        const data = await fetchProductDetail(productId);
        setProduct(data);
      } catch (error) {
        setError('Error loading product details');
      } finally {
        setLoading(false);
      }
    };

    loadProduct();
  }, [productId]);

  const handleAddToCart = () => {
    addItemToCart(product, 1); // Add the current product with quantity 1 to the cart
    setAddedToCartMessage('Product added to cart'); // Set the message indicating product added to cart
    setTimeout(() => {
      setAddedToCartMessage(''); // Clear the message after a delay (optional)
    }, 3000); // Message disappears after 3 seconds
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  if (!product) {
    return <div>No product found</div>;
  }

  return (
    <div className="product-detail-page">
      <div className="product-detail-container">
        <ProductImages images={product.images} />
        <div className="product-details-container">
          <ProductDetails product={product} />
          <ProductSpecifications specifications={product.product_specifications} />
          <button className="add-to-cart-btn" onClick={handleAddToCart}>
            Add to Cart
          </button>
          {addedToCartMessage && <p className="added-to-cart-message">{addedToCartMessage}</p>}
        </div>
      </div>
      <ProductReviews reviews={product.reviews} />
    </div>
  );
};

export default ProductDetailPage;
