from django.shortcuts import render
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.status import HTTP_404_NOT_FOUND, HTTP_200_OK
from .models import Building
from .serializers import BuildingSerializer

# Create your views here.
class BuildingIndex(APIView):
    def get(self, req):
        buildings = Building.objects.all()
        serialized_buildings = BuildingSerializer(buildings, many=True)
        return Response(serialized_buildings.data, status=HTTP_200_OK)
    

class BuildingShow(APIView):
    def get(self, req, pk):
        try:
            building = Building.objects.filter(pk=pk)
            serialized_building = BuildingSerializer(building, many=True)
            return Response(serialized_building.data, status=HTTP_200_OK)
        except Building.DoesNotExist:
            return Response({'message' : 'Building Not Found :('}, status=HTTP_404_NOT_FOUND)
        