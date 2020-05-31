from django.urls import path
from .views import BuildingIndex, BuildingShow

urlpatterns = [
    path('', BuildingIndex.as_view()),
    path('<int:pk>/', BuildingShow.as_view())
]
