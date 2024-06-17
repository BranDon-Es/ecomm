from django.urls import path
from .views import RegisterView, LoginView, LogoutView, AccountView, CustomTokenRefreshView

urlpatterns = [
    path('signup/', RegisterView.as_view(), name='register'),
    path('login/', LoginView.as_view(), name='login'),
    path('logout/', LogoutView.as_view(), name='logout'),
    path('account/', AccountView.as_view(), name='account'),
    path('token/refresh/', CustomTokenRefreshView.as_view(), name='token_refresh'),
]
