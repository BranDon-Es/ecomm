// src/pages/ProductDetailPage.jsx
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchProductDetail } from '../api';
import ProductImages from '../components/ProductImages';
import ProductDetails from '../components/ProductDetails';
import ProductReviews from '../components/ProductReviews';
import ProductSpecifications from '../components/ProductSpecifications';
import '../styles/ProductDetailPage.css';

const ProductDetailPage = () => {
  const { productId } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

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
        </div>
      </div>
      <ProductReviews reviews={product.reviews} />
    </div>
  );
};

export default ProductDetailPage;
