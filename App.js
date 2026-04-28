import './global.css';
import React from 'react';
import { StatusBar } from 'expo-status-bar';
import AuthNavigator from './src/navigation/AuthNavigator';


export default function App() {
  return (
    <>
      <StatusBar style="dark" />
      <AuthNavigator />
    </>
  );
}

