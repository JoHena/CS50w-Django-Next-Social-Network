from rest_framework.serializers import ModelSerializer, CharField, SerializerMethodField
from base.models import Post, User, Profile



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

    followings = SerializerMethodField(
        source="get_followings", read_only=True)
    
    followers = SerializerMethodField(
        source="get_followers", read_only=True)
    
    class Meta:
        model = User
        fields = ['id','username','followings', 'followers']
    
    def get_followings(self, obj):
        return obj.profile.followings.all().values_list('id', flat=True)
    
    def get_followers(self, obj):
        return obj.profile.followers.all().values_list('id', flat=True)