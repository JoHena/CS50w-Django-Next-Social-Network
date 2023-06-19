from django.urls import include, path
from . import views
from .views import MyTokenObtainPairView

from rest_framework import routers

router = routers.DefaultRouter()
router.register(r'posts', views.PostViewSet)

from rest_framework_simplejwt.views import (
    TokenRefreshView,
)


urlpatterns = [
    path('', include(router.urls)),
    path('token/', MyTokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),
]
