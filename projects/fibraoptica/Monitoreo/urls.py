from rest_framework import routers

from Monitoreo.views import SensorViewSet

router = routers.DefaultRouter()
router.register(r'sensors', SensorViewSet)

urlpatterns = router.urls
