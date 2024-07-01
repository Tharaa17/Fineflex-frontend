import React from 'react';
import { View } from 'react-native';
import Svg, { Path } from 'react-native-svg';

const test = () => {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Svg height="100" width="100">
        <Path d="M 0 0 H 100 V 100 H 0 Z" fill="red" />
      </Svg>
    </View>
  );
};

export default test;
