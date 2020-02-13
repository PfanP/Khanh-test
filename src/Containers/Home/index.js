import React, {useState, useEffect} from 'react';
import {Text, View, RefreshControl, FlatList} from 'react-native';
import SafeAreaView from 'react-native-safe-area-view';
import {useDispatch, useSelector} from 'react-redux';
import SearchBar from 'react-native-search-bar';
import _ from 'lodash';
import {fetchUsers} from 'AppRedux/actions';
import {getUsers, getLoading} from 'AppRedux/selectors/home';
import Card from 'Components/Card';

export default ({ navigation }) => {
  const dispatch = useDispatch()
  const dispatchFetchUsers = (name) => dispatch(fetchUsers(name))
  const users = useSelector(getUsers)
  const isLoading = useSelector(getLoading)

  const [searchInput, setSearchInput] = useState('loki')

  useEffect(() => {
    dispatchFetchUsers(searchInput);
  }, [fetchUsers])

  onChangeText = text => {
    setSearchInput(text);
    dispatchFetchUsers(text)
  }

  onUserClick = userId => {
    navigation.navigate('User', {userId});
  };

  return (
    <SafeAreaView style={{flex: 1}} forceInset={{bottom:  'never'}}>
      <SearchBar
        placeholder="Search"
        onChangeText={this.onChangeText}
      />
      <FlatList
        refreshControl={
          <RefreshControl
            refreshing={isLoading}
            onRefresh={() => dispatchFetchUsers(searchInput)}
          />
        }
        data={users}
        renderItem={({item}) => (
          <Card info={item} onUserClick={this.onUserClick} />
        )}
        keyExtractor={item => item.id}
        numColumns={3}
        columnWrapperStyle={{
          justifyContent: 'space-between',
          paddingHorizontal: 20,
        }}
        ListEmptyComponent={<Text style={{textAlign: 'center', padding: 20}}>No User Found!</Text>}
        contentContainerStyle={{paddingBottom: 20}}
      />
    </SafeAreaView>
  );
}