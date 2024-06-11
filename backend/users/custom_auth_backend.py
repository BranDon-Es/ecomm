from django.contrib.auth.backends import ModelBackend
from django.utils import timezone
from .models import CustomUser

class CustomUserBackend(ModelBackend):
    def authenticate(self, request, username=None, email=None, password=None, **kwargs):
        if email:
            try:
                user = CustomUser.objects.get(email=email)
            except CustomUser.DoesNotExist:
                return None
        elif username:
            try:
                user = CustomUser.objects.get(username=username)
            except CustomUser.DoesNotExist:
                return None
        else:
            return None

        if user.check_password(password):
            # Update last login timestamp
            user.last_login = timezone.now()
            user.save(update_fields=['last_login'])
            return user
        return None
