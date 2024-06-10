from rest_framework import serializers
from .models import Category, Product, ProductImage, Review, ProductSpecification


class CategorySerializer(serializers.ModelSerializer):
    class Meta:
        model = Category
        fields = '__all__'


class ProductImageSerializer(serializers.ModelSerializer):
    class Meta:
        model = ProductImage
        fields = ['id', 'image', 'is_main']


class ProductSpecificationSerializer(serializers.ModelSerializer):
    specification = serializers.StringRelatedField()
    class Meta:
        model = ProductSpecification
        fields = ['specification', 'value']


class ReviewSerializer(serializers.ModelSerializer):
    class Meta:
        model = Review
        fields = ['id', 'reviewer_name', 'rating', 'review_text', 'timestamp']


class ProductSerializer(serializers.ModelSerializer):
    images = ProductImageSerializer(many=True, read_only=True)
    product_specifications = ProductSpecificationSerializer(many=True, read_only=True)

    class Meta:
        model = Product
        fields = [
            'id', 'name', 'description', 'price', 'category', 'stock', 'available',
            'created_at', 'updated_at', 'images', 'product_specifications'
        ]


