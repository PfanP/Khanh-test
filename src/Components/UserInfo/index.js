import React from 'react';
import {View, Text, Image} from 'react-native';
import styles from './style';

export default ({info}) => (
    <View style={styles.cont}>
      <Image
        source={{uri: info.profile_image && info.profile_image.large}}
        style={styles.avatar}
      />
      <View>
        <Text style={styles.name}>
          {info.name}
        </Text>
        <Text style={styles.subtitle}>@{info.username}</Text>
      </View>
    </View>
  );
