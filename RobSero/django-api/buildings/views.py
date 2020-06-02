from django.shortcuts import render
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from .models import Building
from .serializers import BuildingSerializer
from rest_framework.exceptions import NotFound

# Create your views here.
class BuildingIndex(APIView):
    def get(self, req):
        buildings = Building.objects.all()
        serialized_buildings = BuildingSerializer(buildings, many=True)
        return Response(serialized_buildings.data, status=status.HTTP_200_OK)
    

class BuildingShow(APIView):
    
    def get_building(self,pk):
        try:
            return Building.objects.get(pk=pk)
        except Building.DoesNotExist:
            raise NotFound()
    
    
    def get(self, req, pk):
            building = self.get_building(pk)
            serialized_building = BuildingSerializer(building)
            return Response(serialized_building.data, status=status.HTTP_200_OK)
        
    
    def put(self,req, pk):
        building_to_update = self.get_building(pk)
        updated_building = BuildingSerializer(building_to_update, data=req.data)
        if updated_building.is_valid():
            updated_building.save()
            return Response(updated_building.data, status=status.HTTP_201_CREATED) 
    
    
    def delete(self,req, pk):
        building_to_delete = self.get_building(pk)
        building_to_delete.delete()
        return Response(status.HTTP_204_NO_CONTENT)