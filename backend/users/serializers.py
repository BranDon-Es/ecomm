from rest_framework import serializers
from django.contrib.auth import authenticate
from .models import CustomUser


class CustomUserSerializer(serializers.ModelSerializer):
    class Meta:
        model = CustomUser
        fields = ('id', 'email', 'username', 'password')
        extra_kwargs = {'password': {'write_only': True}}

    def create(self, validated_data):
        user = CustomUser.objects.create_user(
            email=validated_data['email'],
            username=validated_data['username'],
            password=validated_data['password']
        )
        return user


class LoginSerializer(serializers.Serializer):
    email = serializers.EmailField(required=False)
    username = serializers.CharField(required=False)
    password = serializers.CharField()

    def validate(self, data):
        email = data.get('email')
        username = data.get('username')
        password = data.get('password')

        if email and username:
            raise serializers.ValidationError('Only one of "email" or "username" should be provided.')
        if not (email or username):
            raise serializers.ValidationError('Must include either "email" or "username".')

        user = authenticate(request=self.context.get('request'), email=email, username=username, password=password)

        if not user:
            raise serializers.ValidationError('Invalid credentials.')

        data['user'] = user
        return data
