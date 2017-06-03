from rest_framework import serializers

from Monitoreo.models import Sensor


class SensorSerializer(serializers.ModelSerializer):
    class Meta:
        model = Sensor
        fields = ('id', 'date_created', 'atenuacion', 'fuerza')
