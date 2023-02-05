import {useEffect, useState} from 'react';
import {FlatList, Image, Text, TouchableOpacity, View} from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import AddStory from './components/AddStory';
import HomePageBackground from './components/HomePageBackground';
import HomePageHeader from './components/HomePageHeader';
import PageTitle from './components/PageTitle';
import PostItem from './components/PostItem';
import StoryItem from './components/StoryItem';
import data from './data/story.json';
import postsData from './data/posts.json';
import Post from './model/Post';
import Story from './model/Story';

const HomePage = () => {
  const [stories, setStories] = useState<Story[]>([]);
  const [posts, setPosts] = useState<Post[]>([]);
  useEffect(() => {
    const loadedData = JSON.stringify(data);
    const posts = JSON.stringify(postsData);
    const json: Story[] = JSON.parse(loadedData);
    const postJson: Post[] = JSON.parse(posts);

    setStories(json);
    setPosts(postJson);
  }, []);

  return (
    <View style={{flex: 1, backgroundColor: 'white'}}>
      <HomePageBackground />
      <HomePageHeader />
      <PageTitle title="Feed" />
      <View style={{marginLeft: 24, marginTop: 30, flexDirection: 'row'}}>
        <FlatList
          showsHorizontalScrollIndicator={false}
          horizontal={true}
          ListHeaderComponent={() => <AddStory />}
          data={stories}
          renderItem={({item}) => <StoryItem path={{uri: item.avatarUrl}} />}
        />
      </View>
      <View
        style={{
          marginTop: 40,
          marginLeft: 24,
          marginRight: 24,
          flex: 1,
        }}>
        <FlatList
          contentInset={{top: 0, bottom: 20, left: 0, right: 0}}
          contentInsetAdjustmentBehavior="automatic"
          style={{flex: 1}}
          contentContainerStyle={{paddingBottom: 20}}
          showsVerticalScrollIndicator={false}
          data={posts}
          renderItem={({item}) => (
            <PostItem
              name={item.name!}
              profileImagePath={item.profileImagePath!}
              postImagePath={item.postImagePath!}
              time={'2 hrs ago'}
              likeCount={item.likeCount?.toString()!}
              commentCount={item.commentCount?.toString()!}
              savedCount={item.saveCount?.toString()!}
            />
          )}
        />
      </View>
    </View>
  );
};

export default HomePage;
