import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  KeyboardAvoidingView,
  Platform,
  StatusBar
} from 'react-native';

import { SafeAreaView } from 'react-native-safe-area-context';
import Header from '../components/Header'
import ActionButton from '../components/ActionButtons';

export default function LoginScreen() {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const isButtonActive = phoneNumber.length >= 10;

  const validatePhoneNumber = (phone) => {
    const regex = /^(0)(3|5|7|8|9)([0-9]{8})$/;
    return regex.test(phone);
  };

  const handleLogin = () => {
    if (validatePhoneNumber(phoneNumber)) {
      console.log('Hợp lệ! Gửi API:', phoneNumber);
    } else {
      setErrorMessage('Số điện thoại không đúng định dạng');
    }
  };

  const handleChangeText = (text) => {
    setPhoneNumber(text);
    if (errorMessage) {
      setErrorMessage(''); 
    }
  };

  return (
    <SafeAreaView style={styles.container} edges={['top', 'left', 'right']}>
      <StatusBar barStyle="dark-content" backgroundColor="#fff" />

      <Header title="Đăng nhập" />

      <KeyboardAvoidingView 
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={styles.content}
      >
        <View style={styles.formContainer}>
          <Text style={styles.title}>Nhập số điện thoại</Text>
          
          <Text style={styles.description}>
            Dùng số điện thoại để đăng nhập hoặc đăng ký tài khoản tại OneHousing Pro
          </Text>

          <TextInput
            style={[
                styles.input, 
                errorMessage ? styles.inputError : null 
            ]}
            placeholder="Nhập số điện thoại của bạn"
            placeholderTextColor="#bdbdbd"
            keyboardType="number-pad"
            autoFocus={true}
            selectionColor="#00bfa5"
            value={phoneNumber}
            onChangeText={handleChangeText} 
            maxLength={10} 
          />

          {errorMessage ? (
            <Text style={styles.errorText}>{errorMessage}</Text>
          ) : null}

          <View style={{ marginTop: 20 }}> 
            <ActionButton 
                title="Tiếp tục"
                disabled={!isButtonActive} 
                onPress={handleLogin}
            />
          </View>

        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  content: {
    flex: 1,
  },
  formContainer: {
    paddingHorizontal: 20,
    paddingTop: 30,
  },
  title: {
    fontSize: 20,
    fontWeight: '500',
    color: '#333',
    marginBottom: 10,
  },
  description: {
    fontSize: 14,
    color: '#666',
    lineHeight: 20,
    marginBottom: 30,
  },
  input: {
    fontSize: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#e0e0e0',
    paddingVertical: 10,
    color: '#000',
  },
  inputError: {
    borderBottomColor: 'red',
    color: 'red'
  },
  errorText: {
    color: 'red',
    fontSize: 12,
    marginTop: 5,
    marginBottom: 20, 
  },
});