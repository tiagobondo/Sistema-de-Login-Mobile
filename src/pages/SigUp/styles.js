import { StyleSheet } from "react-native";

import { defaultSytels } from "../../../defaultSyles";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: defaultSytels.colors.cor01,
    paddingHorizontal: '5%',
    paddingVertical: '10%'
  },

  title: {
    fontSize: defaultSytels.fontSize[3],
    color: defaultSytels.colors.cor04
  },

  containerMsg: {
    width: defaultSytels.width[4],
    height: defaultSytels.heigth[0]
  },

  msg: {
    color: defaultSytels.colors.cor06
  },

  containerInput: {
    width: defaultSytels.width[4],
    height: defaultSytels.heigth[2],
    borderRadius: 5,
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: defaultSytels.colors.cor05,
    padding: 5,
    marginBottom: '5%'
  },

  input: {
    height: defaultSytels.heigth[3],
    width: defaultSytels.width[2],
    fontSize: defaultSytels.fontSize[0],
    paddingLeft: 5
  },

  containerForgotPassword: {
    alignItems: 'flex-end'
  },

  textBtnForgotPassword: {
    fontSize: defaultSytels.fontSize[0],
    color: defaultSytels.colors.cor04
  },

  buttonLogin: {
    width: defaultSytels.width[4],
    height: defaultSytels.heigth[1],
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: defaultSytels.colors.cor04,
    marginTop: '5%'
  },

  textBtn: {
    fontSize: defaultSytels.fontSize[1],
    fontWeight: 'bold',
    color: defaultSytels.colors.cor01
  },

  containerCreateAccount: {
    flexDirection: 'row',
    marginTop: '5%',
    width: defaultSytels.width[4],
    justifyContent: 'center',
    alignItems: 'center'
  },

  textContainerCreateAccount: {
    fontSize: defaultSytels.fontSize[0]
  },

  textBtnCreateAccount: {
    fontWeight: 'bold',
    padding: 5,
    color: defaultSytels.colors.cor04,
    fontSize: defaultSytels.fontSize[0]
  }
})