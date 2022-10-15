import React from 'react';
import { View, Text } from 'react-native';
import * as IconlyPack from 'react-native-iconly';

const App = () => {
  return (
    <View style={{ flex: 1 }}>
      <Text style={{ alignSelf: 'center', marginVertical: 100, fontSize: 22 }}>
        React Native Iconly
      </Text>
      <View
        style={{
          flexDirection: 'row',
          flex: 1,
          flexWrap: 'wrap',
        }}
      >
        <IconlyPack.IconlyProvider
          set="curved"
          stroke="bold"
          primaryColor="blue"
          size="xlarge"
        >
          <IconlyPack.Activity set="curved" primaryColor="#d6d" />
          <IconlyPack.Search />
          <IconlyPack.Folder
            set="two-tone"
            primaryColor="#d6d"
            secondaryColor="#6D00F5"
            stroke="bold"
            size="xlarge"
          />
          <IconlyPack.Wallet
            set="two-tone"
            primaryColor="#d6d"
            secondaryColor="#6D00F5"
            stroke="bold"
            size="xlarge"
          />
          <IconlyPack.Graph
            set="two-tone"
            primaryColor="#d6d"
            secondaryColor="#6D00F5"
            stroke="bold"
            size="xlarge"
          />
          <IconlyPack.Bookmark
            set="bold"
            primaryColor="#d6d"
            secondaryColor="#6D00F5"
            stroke="bold"
            size="xlarge"
          />
          <IconlyPack.Category
            primaryColor="#d6d"
            secondaryColor="#6D00F5"
            stroke="bold"
            size="xlarge"
          />
          <IconlyPack.Home
            set="two-tone"
            primaryColor="#d6d"
            secondaryColor="#6D00F5"
            stroke="bold"
            size="xlarge"
          />
          <IconlyPack.Notification
            set="two-tone"
            primaryColor="#d6d"
            secondaryColor="#6D00F5"
            stroke="bold"
            size="xlarge"
          />
          <IconlyPack.Chat
            set="two-tone"
            primaryColor="#d6d"
            secondaryColor="#6D00F5"
            stroke="bold"
            size="xlarge"
          />
          <IconlyPack.Heart set="bulk" stroke="bold" size="xlarge" />
          <IconlyPack.Heart2
            set="curved"
            primaryColor="#d6d"
            secondaryColor="#6D00F5"
            stroke="bold"
            size="xlarge"
          />
          <IconlyPack.Paper
            set="two-tone"
            primaryColor="#d6d"
            secondaryColor="#6D00F5"
            stroke="bold"
            size="xlarge"
          />
          <IconlyPack.PaperPlus
            set="two-tone"
            primaryColor="#d6d"
            secondaryColor="#6D00F5"
            stroke="bold"
            size="xlarge"
          />
          <IconlyPack.PaperNegative
            set="two-tone"
            primaryColor="#d6d"
            secondaryColor="#d6d"
            stroke="bold"
            size="xlarge"
          />
          <IconlyPack.PaperFail
            set="two-tone"
            primaryColor="#d6d"
            secondaryColor="#d6d"
            stroke="bold"
            size="xlarge"
          />
          <IconlyPack.PaperDownload
            primaryColor="#d6d"
            stroke="bold"
            size="xlarge"
          />
          <IconlyPack.PaperUpload
            primaryColor="#d6d"
            stroke="bold"
            size="xlarge"
          />
          <IconlyPack.Send primaryColor="#d6d" stroke="bold" size="xlarge" />
          <IconlyPack.Send primaryColor="#d6d" stroke="bold" size="xlarge" />
          <IconlyPack.Password
            primaryColor="#d6d"
            stroke="bold"
            size="xlarge"
          />
          <IconlyPack.Work primaryColor="#d6d" stroke="bold" size="xlarge" />
          <IconlyPack.Scan primaryColor="#d6d" stroke="bold" size="xlarge" />
          <IconlyPack.Calendar
            primaryColor="#d6d"
            stroke="bold"
            size="xlarge"
          />
          <IconlyPack.Message primaryColor="#d6d" stroke="bold" size="xlarge" />
          <IconlyPack.Video primaryColor="#d6d" stroke="bold" size="xlarge" />
          <IconlyPack.Plus primaryColor="#d6d" stroke="bold" size="xlarge" />
          <IconlyPack.Chart primaryColor="#d6d" stroke="bold" size="xlarge" />
          <IconlyPack.Game primaryColor="#d6d" stroke="bold" size="xlarge" />
          <IconlyPack.Bag
            set="bulk"
            primaryColor="#d6d"
            stroke="bold"
            size="xlarge"
          />
          <IconlyPack.Bag2
            set="bulk"
            primaryColor="#d6d"
            stroke="bold"
            size="xlarge"
          />
          <IconlyPack.TicketStar
            set="bulk"
            primaryColor="#d6d"
            stroke="bold"
            size="xlarge"
          />
          <IconlyPack.MoreCircle
            set="broken"
            primaryColor="#d6d"
            stroke="bold"
            size="xlarge"
          />
          <IconlyPack.MoreSquare
            set="broken"
            primaryColor="#d6d"
            stroke="bold"
            size="xlarge"
          />
          <IconlyPack.Discount
            primaryColor="#d6d"
            stroke="bold"
            size="xlarge"
          />
          <IconlyPack.Buy primaryColor="#d6d" stroke="bold" size="xlarge" />
          <IconlyPack.InfoCircle
            primaryColor="#d6d"
            stroke="bold"
            size="xlarge"
          />
          <IconlyPack.InfoSquare
            primaryColor="#d6d"
            stroke="bold"
            size="xlarge"
          />
          <IconlyPack.Danger primaryColor="#d6d" stroke="bold" size="xlarge" />
          <IconlyPack.CloseSquare
            primaryColor="#d6d"
            stroke="bold"
            size="xlarge"
          />
          <IconlyPack.TickSquare
            primaryColor="#d6d"
            stroke="bold"
            size="xlarge"
          />
          <IconlyPack.Discovery
            primaryColor="#d6d"
            stroke="bold"
            size="xlarge"
          />
          <IconlyPack.Location
            primaryColor="#d6d"
            stroke="bold"
            size="xlarge"
          />
          <IconlyPack.Document
            primaryColor="#d6d"
            stroke="bold"
            size="xlarge"
          />
          <IconlyPack.Setting primaryColor="#d6d" stroke="bold" size="xlarge" />
          <IconlyPack.TimeSquare
            primaryColor="#d6d"
            stroke="bold"
            size="xlarge"
          />
          <IconlyPack.TimeCircle
            primaryColor="#d6d"
            stroke="bold"
            size="xlarge"
          />
          <IconlyPack.CaretRight
            set="bulk"
            primaryColor="#d6d"
            stroke="bold"
            size="xlarge"
          />
          <IconlyPack.ArrowDownSquare />
        </IconlyPack.IconlyProvider>
      </View>
    </View>
  );
};

export default App;
