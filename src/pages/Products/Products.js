/* eslint-disable prettier/prettier */
import React from 'react';
import {FlatList, View} from 'react-native';
import {API_URL} from '../../API_URL';
import Error from '../../components/Error';
import Loading from '../../components/Loading';
import ProductCard from '../../components/ProductCard';
import useFetch from '../../hooks/useFetch';

const Products = ({navigation}) => {
  const {loading, data, error} = useFetch(API_URL);

  const handleProductSelect = id => {
    navigation.navigate('DetailPage', {id});
  };

  const renderProduct = ({item}) => (
    <ProductCard product={item} onSelect={() => handleProductSelect(item.id)} />
  );

  if (loading) {
    return <Loading />;
  }

  if (error) {
    return <Error />;
  }

  return (
    <View>
      <FlatList data={data} renderItem={renderProduct} />
    </View>
  );
};

export default Products;
