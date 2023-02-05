import {useEffect, useState} from 'react';
import {FlatList, Image, Text, View} from 'react-native';

import MessagePageBackground from './components/MessagePageBackground';
import MessagePageHeader from './components/MessagePageHeader';
import MessagesItem from './components/MessagesItem';
import PageTitle from './components/PageTitle';
import SearchBar from './components/SearchBar';
import Message from './model/Message';
import data from './data/messages.json';
const MessagePage = () => {
  const [messages, setMessages] = useState<Message[]>([]);

  useEffect(() => {
    const loadedData = JSON.stringify(data);

    const json: Message[] = JSON.parse(loadedData);

    setMessages(json);
  }, []);

  return (
    <View style={{flex: 1, backgroundColor: 'white'}}>
      <MessagePageBackground />
      <MessagePageHeader />
      <PageTitle title="Messages" />
      <SearchBar />
      <View style={{marginTop: 30, flex: 1}}>
        <FlatList
          contentInset={{top: 0, bottom: 20, left: 0, right: 0}}
          contentInsetAdjustmentBehavior="automatic"
          data={messages}
          renderItem={({item}) => (
            <MessagesItem
              name={item.name}
              message={item.message}
              profileImage={item.profilImage}
            />
          )}
        />
      </View>
    </View>
  );
};

export default MessagePage;
