# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models

# Create your models here.
class Sensor(models.Model):
    date_created = models.DateTimeField(auto_now=True)
    atenuacion = models.FloatField()
    fuerza = models.FloatField()
