from rest_framework import routers, serializers, viewsets

from .models import Task

class TaskSerializer(serializers.ModelSerializer):
    class Meta:
        model = Task
        fields = ['id', 'name']

class TaskViewSet(viewsets.ModelViewSet):
    queryset = Task.objects.all()
    serializer_class = TaskSerializer

router = routers.DefaultRouter()
router.register(r'tasks', TaskViewSet)
