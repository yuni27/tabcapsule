import React, { Component } from "react";
import ReactNative, {
  Image,
  Text,
  Alert,
  View,
  Platform,
  Dimensions,
  TouchableOpacity,
  AsyncStorage,
  SafeAreaView,
  Linking,
  Easing
} from "react-native";
import {
  Container,
  StyleProvider,
  Content,
  Input,
  Textarea
} from "native-base";
import QRCodeScanner from "react-native-qrcode-scanner";
import colors from "../../config/colors";
import getTheme from "../../../native-base-theme/components";
import material from "../../../native-base-theme/variables/material";
import styles from "../../config/styles";
import Header from "../../utilities/Header";
import images from "../../config/images";

class QRCode extends Component {
  constructor(props) {
    super(props);
    this.state = {
      titlePage: "Scan Me"
    };
  }

  onSuccess(e) {
    var qrCode = e.data;
    var newQrCode = qrCode.replace("http:// ", "");
    var newQrCodeTwo = qrCode.replace("http://", "");
    console.log("data qrcode, " + e.data);
  }

  render() {
    const { height, width } = Dimensions.get("window");
    return (
      <StyleProvider style={getTheme(material)}>
        <Container style={{ backgroundColor: "white" }}>
          <Header
            navigation={this.props.navigation}
            title={this.state.titlePage}
          />
          <Content style={styles.containerQrcodeScan}>
            <View style={styles.contentQrcode}>
              <QRCodeScanner
                onRead={this.onSuccess.bind(this)}
                cameraProps={{ captureAudio: false }}
                // topContent={
                //   <Text style={styles.textTitleQrcode}>Scan QR Code</Text>
                // }
              />
            </View>
          </Content>
        </Container>
      </StyleProvider>
    );
  }
}

export default QRCode;
