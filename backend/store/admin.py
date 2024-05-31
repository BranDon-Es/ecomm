from django.contrib import admin
from .models import Category, Product, Brand, ProductImage, Specification, ProductSpecification, Review

class ProductImageInline(admin.TabularInline):
    model = ProductImage
    extra = 1

class ProductSpecificationInline(admin.TabularInline):
    model = ProductSpecification
    extra = 1

@admin.register(Category)
class CategoryAdmin(admin.ModelAdmin):
    list_display = ['name', 'description']

@admin.register(Brand)
class BrandAdmin(admin.ModelAdmin):
    list_display = ['name']

@admin.register(Product)
class ProductAdmin(admin.ModelAdmin):
    list_display = ['name', 'price', 'category', 'stock', 'available', 'created_at', 'updated_at', 'brand']
    list_filter = ['category', 'available']
    search_fields = ['name', 'description']
    list_editable = ['price', 'stock', 'available']
    date_hierarchy = 'created_at'
    inlines = [ProductImageInline, ProductSpecificationInline]

@admin.register(ProductImage)
class ProductImageAdmin(admin.ModelAdmin):
    list_display = ['product', 'image', 'is_main']
    list_filter = ['is_main']

@admin.register(Specification)
class SpecificationAdmin(admin.ModelAdmin):
    list_display = ['name', 'description']

@admin.register(ProductSpecification)
class ProductSpecificationAdmin(admin.ModelAdmin):
    list_display = ['product', 'specification', 'value']

@admin.register(Review)
class ReviewAdmin(admin.ModelAdmin):
    list_display = ['product', 'reviewer_name', 'rating', 'timestamp']
    list_filter = ['rating', 'timestamp']
    search_fields = ['reviewer_name', 'review_text']
