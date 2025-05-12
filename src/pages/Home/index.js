import React, { useContext } from "react";
import {
  View,
  Text,
  TouchableOpacity
} from "react-native";

import { AuthContext } from "../../Contexts/auth";
import { styles } from './styles';

const Home = () => {

  const { logout } = useContext(AuthContext);

  const logoutPage = () => {
    logout();
  }

  return (
    <View style={styles.container}>

      <TouchableOpacity onPress={() => logoutPage()} style={styles.btnLogout}>
        <Text style={styles.txtBtnLogout}>Terminar sessão</Text>
      </TouchableOpacity>

    </View>
  )
}

export default Home;