import React, {Component} from 'react';
import {Text, View} from 'react-native';
import {connect} from 'react-redux';
import _ from 'lodash';
import {getUser} from 'AppRedux/selectors/user';
import UserInfo from 'Components/UserInfo';
import Gallery from 'Components/Gallery';
import Header from 'Components/Header';

class User extends Component {
  render() {
    const {userInfo} = this.props;
    return (
      <View style={{flex: 1, marginTop: 60, marginBottom: 40}}>
        <Header onBack={() => this.props.navigation.goBack()} />
        {!userInfo ? (
          <Text style={{textAlign: 'center'}}>No User Found!</Text>
        ) : (
          <View style={{flex: 1}}>
            <UserInfo info={userInfo} />
            <Gallery data={_.get(userInfo, 'photos', [])} />
          </View>
        )}
      </View>
    );
  }
}

export default connect((state, ownProps) => ({
  userInfo: getUser(state, _.get(ownProps, 'route.params.userId')),
}))(User);
