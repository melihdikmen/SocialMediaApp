import {Image, Text, TouchableOpacity, View} from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import PostButton from './PostButton';
import PostHeader from './PostHeader';

interface PostItemProps {
  postImagePath: string;
  profileImagePath: string;
  name: string;
  time: string;
  likeCount: string;
  commentCount: string;
  savedCount: string;
}

const PostItem = (props: PostItemProps) => (
  <View style={{marginTop: 32, flex: 1}}>
    <Image
      style={{height: 288, borderRadius: 20}}
      source={{
        uri: props.postImagePath,
      }}
    />
    <PostHeader
      name={props.name}
      time={props.time}
      profileImagePath={props.profileImagePath}
    />

    <TouchableOpacity style={{position: 'absolute', right: 15.95, top: 20.37}}>
      <FontAwesome5 size={20} color={'white'} name={'ellipsis-v'} />
    </TouchableOpacity>
    <View
      style={{
        position: 'absolute',
        left: 33,
        right: 33,
        top: 243,
        flexDirection: 'row',
      }}>
      <PostButton text={props.likeCount} iconName="heart" />
      <PostButton text={props.commentCount} iconName="comment-alt" />
      <PostButton text={props.savedCount} iconName="bookmark" />
    </View>
  </View>
);

export default PostItem;
