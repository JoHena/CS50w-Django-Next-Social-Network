from rest_framework.serializers import ModelSerializer, CharField, SerializerMethodField
from base.models import Post, User

class PostSerializer(ModelSerializer):

    username = CharField(
        source="user.username", read_only=True)
    
    total_likes = SerializerMethodField(
       source="get_total_likes", read_only=True)
    
    class Meta:
        model = Post
        fields = '__all__'

    def get_total_likes(self, obj):
      return obj.likes.count() if obj.likes.exists() else 0
    
class UserSerializer(ModelSerializer):
    class Meta:
        model = User
        fields = ['id','username']