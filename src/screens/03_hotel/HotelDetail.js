import React, { Component } from "react";
import {
  Dimensions,
  TouchableOpacity,
  Image,
  View,
  AsyncStorage,
  SafeAreaView,
  RefreshControl,
  Clipboard,
  Alert
} from "react-native";
import { Text, Container, List, StyleProvider, Content } from "native-base";
// import moment from 'moment';
import Header from "../../components/Header/HeaderBack";
import colors from "../../config/colors";
import getTheme from "../../../native-base-theme/components";
import material from "../../../native-base-theme/variables/material";
import styles from "../../config/styles";
import images from "../../config/images";

const { height, width } = Dimensions.get("window");
class HotelDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // data: props.navigation.state.params != null ? props.navigation.state.params.data : '',
      titlePage: "Detail Hotel",
      data: {
        end_date: "27 Juni 2019",
        description: "Hanya Rp 99.000 per malam",
        term_condition: "- Berlaku sebelum 27 Juni 2019",
        min_amount: 100000,
        max_value: 10000,
        code: "tab99",
        value: 10
      }
    };
  }

  findAndReplace(text, target, replacement) {
    var i = 0,
      length = text.length;

    for (i; i < length; i++) {
      text = text.replace(target, replacement);
    }

    return text;
  }

  render() {
    // var date = moment(this.state.data.end_date).format('DD MMMM YYYY');
    var description = `${this.findAndReplace(
      this.state.data.description,
      "\r\n",
      ""
    )}`;
    var term_condition = `${this.findAndReplace(
      this.state.data.term_condition,
      "\r\n",
      ""
    )}`;
    return (
      <StyleProvider style={getTheme(material)}>
        <Container>
          <SafeAreaView style={{ flex: 1, overflow: "hidden" }}>
            <Header
              navigation={this.props.navigation}
              title={this.state.titlePage}
            />
            <Content>
              <View
                style={{ flexDirection: "column", justifyContent: "center" }}
              >
                <Image
                  source={images.images_map}
                  style={{ width: width, height: (250 / 500) * width }}
                />

                <Text
                  style={[
                    styles.Bold_18,
                    {
                      color: colors.primary,
                      textAlign: "center",
                      marginTop: 16
                    }
                  ]}
                >
                  Term and Condition :
                </Text>
              </View>
            </Content>
          </SafeAreaView>
        </Container>
      </StyleProvider>
    );
  }
}

export default HotelDetail;
