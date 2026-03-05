import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  KeyboardAvoidingView,
  Platform,
  StatusBar,
  Alert
} from 'react-native';

import { SafeAreaView } from 'react-native-safe-area-context';
import Header from '../components/Header'
import ActionButton from '../components/ActionButtons';

export default function LoginScreen({navigation}) {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [error, setError] = useState(''); 

  const rawPhoneNumber = phoneNumber.replace(/\D/g, '');
  const isButtonActive = rawPhoneNumber.length > 0;

  const handleTextChange = (text) => {
    const cleaned = text.replace(/\D/g, '');

    let formatted = cleaned;
    if (cleaned.length > 6) {
      formatted = `${cleaned.slice(0, 3)} ${cleaned.slice(3, 6)} ${cleaned.slice(6, 10)}`;
    } else if (cleaned.length > 3) {
      formatted = `${cleaned.slice(0, 3)} ${cleaned.slice(3, 6)}`;
    }
    setPhoneNumber(formatted);

    if (cleaned.length > 0) {
      if (cleaned[0] !== '0') {
        setError('Số điện thoại phải bắt đầu bằng số 0');
      } else if (cleaned.length >= 2 && !['3', '5', '7', '8', '9'].includes(cleaned[1])) {
        setError('Đầu số không hợp lệ (VD: 03, 05, 09...)');
      } else {
        setError(''); 
      }
    } else {
      setError(''); 
    }
  };

  const handleLogin = () => {
    if (error) return;

    const cleaned = phoneNumber.replace(/\D/g, '');

    const regex = /^(0)(3|5|7|8|9)([0-9]{8})$/;
    
    if (!regex.test(cleaned)) {
      Alert.alert(
        '', 
        'Số điện thoại không đúng định dạng. Vui lòng nhập lại', 
        [{ text: 'OK' }]
      );
      return;
    }

    console.log('Đăng nhập thành công! Chuyển trang...');
    navigation.navigate('Home');
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
              error ? styles.inputError : null 
            ]} 
            placeholder="Nhập số điện thoại của bạn"
            placeholderTextColor="#bdbdbd"
            keyboardType="number-pad"
            autoFocus={true}
            selectionColor="#00bfa5"
            value={phoneNumber}              
            onChangeText={handleTextChange}  
            maxLength={12}            
          />

          {error ? (
            <Text style={styles.errorText}>{error}</Text>
          ) : null}

          <View style={{ marginTop: error ? 10 : 30 }}> 
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
  },
  errorText: {
    color: 'red',
    fontSize: 13,
    marginTop: 8,
    fontStyle: 'italic',
  },
});