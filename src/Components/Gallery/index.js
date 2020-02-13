import React, {Component} from 'react';
import {
  FlatList,
  View,
  Text,
  Image,
  Modal,
  TouchableOpacity,
} from 'react-native';
import ImageSlider from 'react-native-image-slider';
import _ from 'lodash';
import styles from './style';

export default class Gallery extends Component {
  state = {
    ModalVisibleStatus: false,
    imageVisible: true,
    images: [],
    imageId: null,
  };
  componentDidMount() {
    const {data} = this.props;
    try {
      let images = [];
      data.map(item => item.urls && images.push(item.urls.regular));
      this.setState({images});
    } catch (error) {
      console.log(error);
    }
  }
  closeModal = () => {
    this.setState({ModalVisibleStatus: false});
  };
  showModal = id => {
    this.setState({ModalVisibleStatus: true, imageId: id});
  };
  renderEmptyList = () => (<Text>No Image Found!</Text>);
  onChangeVisible = () => {
    this.setState(prev => ({imageVisible: !prev.imageVisible}));
  };
  render() {
    const {imageVisible, images} = this.state;
    const {data} = this.props;
    return (
      <View style={styles.cont}>
        <TouchableOpacity onPress={() => this.onChangeVisible()} style={styles.galleryButton}>
          <View style={[styles.downShape, !imageVisible && styles.upShape]} />
          <Text style={styles.title}>Gallery</Text>
        </TouchableOpacity>
        <View style={styles.seperator} />
        {imageVisible && (
          <FlatList
            data={data}
            renderItem={({item}) => (
              <TouchableOpacity
                onPress={() => this.showModal(item.id)}
                style={{flex: 1}}>
                <Image
                  source={{uri: _.get(item, 'urls.regular')}}
                  style={styles.image}
                />
              </TouchableOpacity>
            )}
            keyExtractor={item => item.id}
            numColumns={3}
            contentContainerStyle={{paddingVertical: 20}}
            columnWrapperStyle={{
              justifyContent: 'space-between',
            }}
            ListEmptyComponent={this.renderEmptyList}
            initialNumToRender={50}
          />
        )}
        
        <Modal
          transparent={false}
          animationType={'fade'}
          visible={this.state.ModalVisibleStatus}
          onRequestClose={this.closeModal}>
          <View style={{flex: 1}}>
            <ImageSlider
            loop
            loopBothSides
            autoPlayWithInterval={5000}
             images={images}/>
            <TouchableOpacity
              activeOpacity={0.5}
              style={styles.closeButtonStyle}
              onPress={this.closeModal}>
              <Text style={styles.closeBtnText}>X</Text>
            </TouchableOpacity>
          </View>
        </Modal>
      </View>
    );
  }
}
