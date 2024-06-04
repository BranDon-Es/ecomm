from django.db import models


class Category(models.Model):
    name = models.CharField(max_length=255)
    description = models.TextField(blank=True)

    def __str__(self):
        return self.name


class Brand(models.Model):
    name = models.CharField(max_length=255, default="Unknown brand")

    def __str__(self):
        return self.name


class Specification(models.Model):
    name = models.CharField(max_length=255)
    description = models.TextField(blank=True)

    def __str__(self):
        return self.name


class Product(models.Model):
    CONDITION_CHOICES = [
        ('new', 'New'),
        ('used', 'Used'),
    ]

    name = models.CharField(max_length=255)
    description = models.TextField()
    brand = models.ForeignKey(Brand, related_name='products', on_delete=models.CASCADE)
    model_number = models.CharField(max_length=255, blank=True)
    specifications = models.ManyToManyField(Specification, through='ProductSpecification')
    price = models.DecimalField(max_digits=10, decimal_places=2)
    category = models.ForeignKey(Category, related_name='products', on_delete=models.CASCADE)
    condition = models.CharField(max_length=10, choices=CONDITION_CHOICES, default='new')
    stock = models.IntegerField()
    available = models.BooleanField(default=True)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return self.name


class ProductImage(models.Model):
    product = models.ForeignKey(Product, related_name='images', on_delete=models.CASCADE)
    image = models.ImageField(upload_to='product_images/')
    is_main = models.BooleanField(default=False)

    def __str__(self):
        return f"{self.product.name} Image"


class ProductSpecification(models.Model):
    product = models.ForeignKey(Product, related_name='product_specifications', on_delete=models.CASCADE)
    specification = models.ForeignKey(Specification, related_name='product_specifications', on_delete=models.CASCADE, null=True, blank=True)
    value = models.CharField(max_length=255)

    def __str__(self):
        return f"{self.product.name} - {self.specification.name}: {self.value}"


class Review(models.Model):
    product = models.ForeignKey(Product, related_name='reviews', on_delete=models.CASCADE)
    reviewer_name = models.CharField(max_length=255)
    rating = models.DecimalField(max_digits=5, decimal_places=2)
    review_text = models.TextField()
    timestamp = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"{self.reviewer_name} - {self.product.name}"
