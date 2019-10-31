import React from 'react';
import { AppWrapper } from './App.styles';
import Header from './components/Header';
import CountriesList from './components/CountriesList';

function App() {
  return (
    <AppWrapper>
      <Header />
      <CountriesList />
    </AppWrapper>
  );
}

export default App;
