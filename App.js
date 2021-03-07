import { StatusBar } from 'expo-status-bar';
import React from 'react';
import Loading from "./Loading";
import * as Location from "expo-location";
import { Alter } from "react-native";

export default class extends React.Component {
  state = {
    isLoading: true
  };

  getLocation = async() => {
    try {
      await Location.requestPermissionAsync();
      const { coords : { latitue, longitude}} = await Location.getCurrentPositionAsync(Options);
      
    }
    catch (error) {
      Alter.alter("Can't find you.", "So sad");
    }
  }

  componentDidMount() {
    this.getLocation();
  }

  render(){
    const { isLoading } = this.state;
    return isLoading ? <Loading /> : null;
  }
}
