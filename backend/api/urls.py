from .views import Notes
from django.urls import path
from .views import Login
urlpatterns = [
    path('', Notes.as_view() ),
    path('login/', Login.as_view()),
]
