from rest_framework.serializers import ModelSerializer, CharField
from base.models import Post

class PostSerializer(ModelSerializer):

    username = CharField(
        source="user.username", read_only=True)
    
    class Meta:
        model = Post
        fields = '__all__'