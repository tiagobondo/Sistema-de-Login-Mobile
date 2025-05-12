import React, { createContext, useState, useEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";

import { cadAccount } from "../services/apiServices";
import { loginAccount } from "../services/apiServices";

export const AuthContext = createContext({});

const AuthProvider = ({ children }) => {
  const { navigate } = useNavigation();

  const [msg, setMsg] = useState('');
  const [msgLogin, setMsgLogin] = useState('');
  const [loged, setLoged] = useState(null);

  const loadingToken = async () => {
    try {
      const value = await AsyncStorage.getItem('@login');
      const res = JSON.parse(value);

      if (res !== null) {
        setLoged(res);
      }
    } catch (error) {
      console.log("Error ao processar ", error);
    }
  }

  useEffect(() => {
    loadingToken();
  }, [])

  const Sigin = async (username, password) => {
    const data = { username, password };
    //
    const response = await loginAccount(data);

    if (response.data.message == 'Sucesso!') {
      //console.log(response.data.token);
      await AsyncStorage.setItem('@login', JSON.stringify(response.data.token));
      loadingToken();
    } else {
      setMsgLogin(response.data.message);
    }
  }

  const SigUp = async (username, password, recpassword) => {
    const data = { username, password, recpassword };

    const response = await cadAccount(data);

    if (response.data.message == 'Conta criada!') {
      alert(response.data.message);
      navigate('SigIn');
    } else {
      // alert(response.data.message);
      setMsg(response.data.message);
    }

  }

  const logout = async () => {
    await AsyncStorage.clear();
    setLoged(null);
    loadingToken();
  }

  return (
    <AuthContext.Provider value={{ name: 'Tiago Bondo', Sigin, SigUp, msg, msgLogin, isAuth: loged, logout }}>
      {
        children
      }
    </AuthContext.Provider>
  )
}

export default AuthProvider;