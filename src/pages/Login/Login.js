/* eslint-disable prettier/prettier */
import React from 'react';
import {View, SafeAreaView, Image, Alert} from 'react-native';
import {Formik} from 'formik';
import styles from './Login.style';
import Input from '../../components/Input';
import Button from '../../components/Button';
import usePost from '../../hooks/usePost';
import {API_AUTH_URL} from '../../API_URL';

const Login = ({navigation}) => {
  const {data, loading, error, post} = usePost();

  function handleLogin(values) {
    post(API_AUTH_URL + '/login', values);
  }

  if (error) {
    Alert.alert('Dükkan', 'bir hata oluştu');
  }

  if (data) {
    if (data.status === 'Error') {
      Alert.alert('Dükkan', 'Kullanıcı bulunammadı!');
    } else {
      navigation.navigate('ProductsPage');
    }
    console.log(data);
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.logo_container}>
        <Image
          source={require('../../assets/Login-Logo.png')}
          style={styles.logo}
        />
      </View>
      <Formik
        initialValues={{username: '', password: ''}}
        onSubmit={handleLogin}>
        {({handleSubmit, handleChange, values}) => (
          <View style={styles.body_container}>
            <Input
              placeholder="Kullanıcı adınızı girin"
              value={values.username}
              onType={handleChange('username')}
              iconName="account"
            />
            <Input
              placeholder="Şifrenizi girin"
              value={values.password}
              onType={handleChange('password')}
              iconName="key"
              isSecure
            />
            <Button text="Giriş Yap" onPress={handleSubmit} loading={loading} />
          </View>
        )}
      </Formik>
    </SafeAreaView>
  );
};
export default Login;
