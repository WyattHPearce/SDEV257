import React from "react";
import { View, Text, Modal } from "react-native";
import styles from "./styles";

export default function ModalDialog(
  props = {
    title: "You entered nothing! Try again",
    transparent: false,
    onRequestClose: () => {},
    ...restProps,
  }
) {
  return (
    <Modal {...props}>
      <View style={styles.modalContainer}>
        <View style={styles.modalInner}>
          <Text style={styles.modalText}>{props.title}</Text>
          <Text style={styles.modalButton} onPress={props.onPressConfirm}>
            Ok
          </Text>
        </View>
      </View>
    </Modal>
  );
}
