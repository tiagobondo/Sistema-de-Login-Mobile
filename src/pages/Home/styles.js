import { StyleSheet } from "react-native";
import { defaultSytels } from "../../../defaultSyles";

export const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: defaultSytels.colors.cor01,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: '5%',
    paddingVertical: '5%'
  },

  btnLogout: {
    width: defaultSytels.width[4],
    height: defaultSytels.heigth[1],
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: defaultSytels.colors.cor04,
    borderRadius: 5
  },

  txtBtnLogout: {
    fontSize: defaultSytels.fontSize[1],
    fontWeight: 'bold',
    color: defaultSytels.colors.cor01
  }

})