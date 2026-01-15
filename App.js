import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  SafeAreaView,
  KeyboardAvoidingView,
  Platform,
  StatusBar
} from 'react-native';

export default function LoginScreen() {
  const [phoneNumber, setPhoneNumber] = useState('');

  const isButtonActive = phoneNumber.length > 9;

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="#fff" />

      <View style={styles.header}>
        <Text style={styles.headerTitle}>Đăng nhập</Text>
      </View>

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
            style={styles.input}
            placeholder="Nhập số điện thoại của bạn"
            placeholderTextColor="#bdbdbd"
            keyboardType="number-pad" 
            autoFocus={true} 
            selectionColor="#00bfa5" 
            value={phoneNumber}
            onChangeText={setPhoneNumber}
            maxLength={11}
          />

          <TouchableOpacity 
            style={[
              styles.button, 
              isButtonActive ? styles.buttonActive : styles.buttonInactive
            ]}
            disabled={!isButtonActive}
            onPress={() => console.log('Đã nhập:', phoneNumber)}
          >
            <Text style={[
              styles.buttonText, 
              isButtonActive ? styles.buttonTextActive : styles.buttonTextInactive
            ]}>
              Tiếp tục
            </Text>
          </TouchableOpacity>
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
  header: {
    height: 50,
    justifyContent: 'center',
    paddingHorizontal: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#f0f0f0', 
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000',
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
    marginBottom: 40,
    color: '#000',
  },
  button: {
    borderRadius: 6,
    paddingVertical: 14,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonInactive: {
    backgroundColor: '#f2f2f2', 
  },
  buttonActive: {
    backgroundColor: '#E53935', 
  },
  buttonText: {
    fontSize: 16,
    fontWeight: '500',
  },
  buttonTextInactive: {
    color: '#a0a0a0', 
  },
  buttonTextActive: {
    color: '#fff', 
  },
});