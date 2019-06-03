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
import HTMLView from "react-native-htmlview";
import Header from "../../components/Header/HeaderBack";
import colors from "../../config/colors";
import getTheme from "../../../native-base-theme/components";
import material from "../../../native-base-theme/variables/material";
import styles from "../../config/styles";
import images from "../../config/images";

const { height, width } = Dimensions.get("window");
class PromoDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // data: props.navigation.state.params != null ? props.navigation.state.params.data : '',
      titlePage: "Detail Promo",
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
              hiddenHeaderRight={false}
            />
            <Content>
              <View
                style={{ flexDirection: "column", justifyContent: "center" }}
              >
                <Image
                  source={images.images_promo1}
                  style={{ width: width, height: (250 / 500) * width }}
                />
                <HTMLView style={{ margin: 16 }} value={description} />
                <View style={{ flexDirection: "row" }}>
                  <View
                    style={[
                      styles.tableVoucher,
                      {
                        width: width / 2,
                        borderRightWidth: 0
                      }
                    ]}
                  >
                    <Image
                      source={images.icon_calender}
                      style={[{ tintColor: colors.primary }]}
                    />
                    <Text style={styles.Reg_18}>Batas Promo</Text>
                    <Text
                      style={[
                        styles.Bold_18,
                        {
                          marginTop: 5,
                          color: colors.primary
                        }
                      ]}
                    >
                      {this.state.data.end_date}
                    </Text>
                  </View>
                  <View
                    style={[
                      styles.tableVoucher,
                      {
                        width: width / 2
                      }
                    ]}
                  >
                    <Image
                      source={images.icon_wallet}
                      style={[styles.sizeIcon]}
                    />
                    <Text style={styles.heading5}>Min. Transaksi</Text>
                    <Text
                      style={[
                        styles.heading5,
                        {
                          marginTop: 5,
                          fontWeight: "bold",
                          fontSize: 17,
                          color: colors.primary
                        }
                      ]}
                    >
                      {parseInt(this.state.data.min_amount)
                        .toString()
                        .replace(/\B(?=(\d{3})+(?!\d))/g, ".")}
                    </Text>
                  </View>
                </View>
                <View style={{ flexDirection: "row" }}>
                  <View
                    style={[
                      styles.tableVoucher,
                      {
                        width: width / 2,
                        borderRightWidth: 0,
                        borderTopWidth: 0
                      }
                    ]}
                  >
                    <Image
                      source={images.icon_discount}
                      style={[styles.sizeIcon]}
                    />
                    <Text style={styles.heading5}>Diskon</Text>
                    <Text
                      style={[
                        styles.heading4,
                        {
                          marginTop: 5,
                          fontWeight: "bold",
                          fontSize: 17,
                          color: colors.primary
                        }
                      ]}
                    >
                      {parseInt(this.state.data.value)}{" "}
                    </Text>
                  </View>
                  <View
                    style={[
                      styles.tableVoucher,
                      {
                        width: width / 2,
                        borderTopWidth: 0
                      }
                    ]}
                  >
                    <Image
                      source={images.icon_money}
                      style={[styles.sizeIcon]}
                    />
                    <Text style={styles.heading5}>Max. Diskon</Text>
                    <Text
                      style={[
                        styles.heading4,
                        {
                          marginTop: 5,
                          fontWeight: "bold",
                          fontSize: 17,
                          color: colors.primary
                        }
                      ]}
                    >
                      {parseInt(this.state.data.max_value)
                        .toString()
                        .replace(/\B(?=(\d{3})+(?!\d))/g, ".")}
                    </Text>
                  </View>
                </View>
                <View
                  style={[
                    styles.tableVoucher,
                    {
                      width: width,
                      borderTopWidth: 0
                    }
                  ]}
                >
                  <View style={{ flexDirection: "row", alignItems: "center" }}>
                    <Image
                      source={images.icon_coupon}
                      style={styles.sizeIcon}
                    />
                    <Text style={[styles.Reg_18, { marginLeft: 10 }]}>
                      Kode Promo
                    </Text>
                  </View>
                  <View style={{ flexDirection: "row" }}>
                    <View
                      style={[
                        styles.tableVoucher,
                        {
                          width: ((width / 2) * 3) / 4,
                          padding: 5
                        }
                      ]}
                    >
                      <Text style={[styles.Bold_18, { color: colors.primary }]}>
                        {this.state.data.code}
                      </Text>
                    </View>
                    <TouchableOpacity
                      style={[
                        styles.tableVoucher,
                        {
                          width: ((width / 2) * 3) / 4,
                          padding: 5,
                          borderLeftWidth: 0
                        }
                      ]}
                      onPress={() => this.writeToClipboard()}
                    >
                      <Text style={styles.Reg_18}>Salin Kode</Text>
                    </TouchableOpacity>
                  </View>
                </View>
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
                  Ketentuan :
                </Text>
                <HTMLView style={{ margin: 16 }} value={term_condition} />
              </View>
            </Content>
          </SafeAreaView>
        </Container>
      </StyleProvider>
    );
  }

  writeToClipboard = async () => {
    await Clipboard.setString(this.state.data.code);
    Alert.alert("Copied " + this.state.data.code + " to Clipboard!");
  };
}

export default PromoDetail;
