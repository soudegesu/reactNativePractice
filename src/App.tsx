import React from 'react';
import { SafeAreaView, ScrollView, Text, StatusBar } from 'react-native';
import { Button, Divider } from 'react-native-elements';

import { Header } from 'react-native/Libraries/NewAppScreen';

declare const global: { HermesInternal: null | {} };

const App = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <ScrollView contentInsetAdjustmentBehavior="automatic">
          <Header />
          <Text>aaa</Text>
          <Divider />
          <Button title="bbbb" />
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

export default App;
