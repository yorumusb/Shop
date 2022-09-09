/* eslint-disable prettier/prettier */
import React from 'react';
import {Text, Image, View} from 'react-native';
import useFetch from '../../hooks/useFetch';
import styles from './Detail.style';
import {API_PRODUCT_URL} from '../../API_URL';
import Error from '../../components/Error';
import Loading from '../../components/Loading';

const Detail = ({route}) => {
  const {id} = route.params;
  const {loading, error, data} = useFetch(`${API_PRODUCT_URL}/${id}`);

  if (loading) {
    return <Loading />;
  }

  if (error) {
    return <Error />;
  }

  return (
    <View style={styles.container}>
      <Image source={{uri: data.image}} style={styles.image} />
      <View style={styles.boddy_container}>
        <Text style={styles.title}>{data.title}</Text>
        <Text style={styles.desc}>{data.description}</Text>
        <Text style={styles.price}>{data.price} TL</Text>
      </View>
    </View>
  );
};

export default Detail;
