import React, { useState, useContext } from "react";

import { useNavigation } from "@react-navigation/native";

import {
  View,
  Text,
  TextInput,
  TouchableOpacity
} from "react-native";
import {
  FontAwesome5,
  FontAwesome6,
  Ionicons
} from "@expo/vector-icons";

import { AuthContext } from "../../Contexts/auth";
import { styles } from "./styles";
import { defaultSytels } from "../../../defaultSyles";

const SigIn = () => {

  const { navigate } = useNavigation();
  const { Sigin, msgLogin } = useContext(AuthContext);

  const [username, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const [visPassword, setVisPassword] = useState(true);

  const Login = () => {
    Sigin(username, password);
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Conecte-se</Text>

      <View style={styles.containerMsg}>
        <Text style={styles.msg}>{msgLogin}</Text>
      </View>

      <View style={styles.containerInput}>
        <FontAwesome5
          name="user"
          size={defaultSytels.fontSize[3]}
          color={defaultSytels.colors.cor04}
        />
        <TextInput
          style={styles.input}
          placeholder="Usuário"
          onChangeText={text => setUserName(text)}
          autoCapitalize="none"
        />
      </View>

      <View style={styles.containerInput}>
        <FontAwesome5
          name="lock"
          size={defaultSytels.fontSize[3]}
          color={defaultSytels.colors.cor04}
        />
        <TextInput
          style={styles.input}
          placeholder="Senha"
          onChangeText={text => setPassword(text)}
          secureTextEntry={visPassword}
        />

        <TouchableOpacity onPress={() => setVisPassword(!visPassword)}>
          {
            visPassword ? (
              <Ionicons
                name="eye-off"
                color={defaultSytels.colors.cor04}
                size={defaultSytels.fontSize[1]}
              />
            ) : (
              <Ionicons
                name="eye"
                color={defaultSytels.colors.cor04}
                size={defaultSytels.fontSize[1]}
              />
            )
          }

        </TouchableOpacity>
      </View>

      <View style={styles.containerForgotPassword}>
        <TouchableOpacity>
          <Text style={styles.textBtnForgotPassword}>Esqueci a minha senha</Text>
        </TouchableOpacity>
      </View>


      <TouchableOpacity style={styles.buttonLogin} onPress={() => Login()}>
        <Text style={styles.textBtn}>Entrar</Text>
      </TouchableOpacity>

      <View style={styles.containerCreateAccount}>
        <Text style={styles.textContainerCreateAccount}>Ainda não tenho uma conta</Text>
        <TouchableOpacity onPress={() => navigate("SigUp")}>
          <Text style={styles.textBtnCreateAccount}>Criar</Text>
        </TouchableOpacity>
      </View>

    </View>
  )
}

export default SigIn;