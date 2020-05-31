from django.db import models

# Create your models here.
class Building(models.Model):  
    name = models.CharField(max_length=50)
    country = models.CharField(max_length=70)
    visitors_per_year = models.IntegerField()
    age = models.IntegerField()
    operational = models.BooleanField(default=True)
    
    def __str__(self):
        return f'{self.name} - {self.country}'