import React from 'react';
import {TouchableOpacity, Text, Image} from 'react-native';
import _ from 'lodash';
import styles from './style';

export default ({info, onUserClick}) => (
    <TouchableOpacity style={styles.user} onPress={() => onUserClick(info.id)}>
      <Image
        source={{uri: _.get(info, 'profile_image.large')}}
        style={styles.avatar}
      />
      <Text style={styles.title} numberOfLines={1}>
        {_.get(info, 'name')}
      </Text>
    </TouchableOpacity>
  );
