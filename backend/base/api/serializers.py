from rest_framework.serializers import ModelSerializer
from base.models import Post

class PostSerializer(ModelSerializer):
    class Meta:
        model = Post
        fields = ['id', 'user', 'content', 'likes', 'created_at', 'updated_at']