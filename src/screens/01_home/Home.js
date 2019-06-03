import React, { Component } from "react";
import ReactNative, {
  Image,
  Text,
  Alert,
  View,
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
import Swiper from "react-native-swiper";

import screen from "../../navigation/ChooseScreen";
import colors from "../../config/colors";
import getTheme from "../../../native-base-theme/components";
import material from "../../../native-base-theme/variables/material";
import styles from "../../config/styles";
import Header from "../../components/Header/Header";
import images from "../../config/images";

const { height, width } = Dimensions.get("window");

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      titlePage: "My Tab Capsule Hotel",
      banner: [
        { image: images.images_promo1 },
        { image: images.images_promo2 },
        { image: images.images_promo3 }
      ]
    };
  }

  render() {
    return (
      <StyleProvider style={getTheme(material)}>
        <Container style={{ backgroundColor: "white" }}>
          <SafeAreaView style={{ flex: 1, overflow: "hidden" }}>
            <Header
              navigation={this.props.navigation}
              title={this.state.titlePage}
              hiddenHeaderRight={true}
            />
            <View style={{ width: width, height: height, zIndex: -1 }}>
              {this.renderHeader()}
              {this.renderSwiper()}
              {this.renderGift()}
            </View>
          </SafeAreaView>
        </Container>
      </StyleProvider>
    );
  }

  renderHeader() {
    return (
      <View style={styles.logoHome}>
        <Image
          source={images.images_logo}
          style={[
            styles.sizeLogo,
            {
              marginBottom: 20
            }
          ]}
        />
        <TouchableOpacity
          style={[
            styles.buttonSquare,
            {
              width: 1182 / 5
            }
          ]}
        >
          <Text style={[styles.Bold_18, { color: colors.white }]}>
            CONNECT YOUR MEMBER CARD
          </Text>
        </TouchableOpacity>
      </View>
    );
  }

  renderSwiper() {
    var listImages = [];
    if (this.state.banner != null) {
      this.state.banner.map((data, i) => {
        listImages.push(
          <TouchableOpacity
            key={i}
            style={styles.slide}
            onPress={() => screen.PromoDetail(this.props.navigation)}
          >
            <Image
              source={data.image}
              // source={images.voucher}
              style={{
                height: (250 / 500) * width,
                width: width,
                backgroundColor: colors.primary
              }}
            />
          </TouchableOpacity>
        );
      });
      return (
        <View style={{ flexDirection: "row", height: (250 / 500) * width }}>
          <Swiper
            style={styles.wrapper}
            showsButtons={false}
            showsPagination={false}
            renderPagination={this.renderPagination}
            loop={true}
          >
            {listImages}
          </Swiper>
        </View>
      );
    }
  }

  renderGift() {
    return (
      <TouchableOpacity
        style={[
          styles.buttonSquare,
          {
            backgroundColor: colors.secondary,
            height: 80,
            flexDirection: "row",
            margin: 20
          }
        ]}
      >
        <Image
          source={images.icon_gift}
          style={{ width: 50, height: 50, marginRight: 20 }}
        />
        <Text style={[styles.Bold_24, { color: colors.white }]}>
          MEMBER'S GIFT
        </Text>
      </TouchableOpacity>
    );
  }
}

export default Home;
