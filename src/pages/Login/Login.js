/* eslint-disable prettier/prettier */
import React from 'react';
import {View, SafeAreaView, Image} from 'react-native';
import {Formik} from 'formik';
import styles from './Login.style';
import Input from '../../components/Input';
import Button from '../../components/Button';

const Login = () => {
  function handleLogin(values) {
    console.log(values);
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
            <Button text="Giriş Yap" onPress={handleSubmit} />
          </View>
        )}
      </Formik>
    </SafeAreaView>
  );
};
export default Login;
