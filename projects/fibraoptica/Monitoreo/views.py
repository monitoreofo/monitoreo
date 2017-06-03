# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.shortcuts import render

# Create your views here.
from rest_framework import viewsets

from Monitoreo.models import Sensor
from Monitoreo.serializers import SensorSerializer


class SensorViewSet(viewsets.ModelViewSet):
    queryset = Sensor.objects.all().order_by('-id')
    serializer_class = SensorSerializer

def home(request):
    return render(request, 'index.html')
