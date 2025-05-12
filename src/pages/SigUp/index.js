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

import { styles } from "./styles";
import { defaultSytels } from "../../../defaultSyles";
import { AuthContext } from "../../Contexts/auth";

const SigIn = () => {

  const { navigate } = useNavigation();
  const { SigUp, msg } = useContext(AuthContext);

  const [username, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const [recpassword, setRecPassword] = useState('');
  const [visPassword, setVisPassword] = useState(true);

  const SiUp = () => {
    SigUp(username, password, recpassword);
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Cadastre-se</Text>

      <View style={styles.containerMsg}>
        <Text style={styles.msg}>{msg}</Text>
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

      <View style={styles.containerInput}>
        <FontAwesome5
          name="lock"
          size={defaultSytels.fontSize[3]}
          color={defaultSytels.colors.cor04}
        />
        <TextInput
          style={styles.input}
          placeholder="Reconfirme a senha"
          onChangeText={text => setRecPassword(text)}
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


      <TouchableOpacity style={styles.buttonLogin} onPress={() => SiUp()}>
        <Text style={styles.textBtn}>Criar</Text>
      </TouchableOpacity>

      <View style={styles.containerCreateAccount}>
        <Text style={styles.textContainerCreateAccount}>Já tenho uma conta</Text>
        <TouchableOpacity onPress={() => navigate("SigIn")}>
          <Text style={styles.textBtnCreateAccount}>Entrar</Text>
        </TouchableOpacity>
      </View>

    </View>
  )
}

export default SigIn;