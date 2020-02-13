import React from 'react';
import {TouchableOpacity, Text, View} from 'react-native';
import _ from 'lodash';
import styles from './style';

export default ({onBack}) => (
    <TouchableOpacity onPress={onBack} style={styles.backBtn}>
      <View style={styles.backShape} />
      <Text>Back</Text>
    </TouchableOpacity>
  );
