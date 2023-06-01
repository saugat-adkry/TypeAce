from rest_framework.generics import ListCreateAPIView
from .serializers import NoteSerializer
from .models import Notes

class Notes(ListCreateAPIView):
    queryset = Notes.objects.all()
    serializer_class = NoteSerializer