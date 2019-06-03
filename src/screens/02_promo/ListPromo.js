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
  Easing,
  FlatList,
  ScrollView
} from "react-native";
import { Container, StyleProvider, Content, Input } from "native-base";
import Swiper from "react-native-swiper";
import screen from "../../navigation/ChooseScreen";
import colors from "../../config/colors";
import getTheme from "../../../native-base-theme/components";
import material from "../../../native-base-theme/variables/material";
import styles from "../../config/styles";
import Header from "../../components/Header/Header";
import images from "../../config/images";

const { height, width } = Dimensions.get("window");
class ListPromo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      titlePage: "Special Offer",
      promo: [
        {
          title: "Special Offer",
          des: "Voucher 1 Night 1 Stay",
          image: images.images_promo1
        },
        {
          title: "Special Offer SuMo",
          des: "Hanya Rp 120.000/malam",
          image: images.images_promo2
        },
        {
          title: "Grand Opening",
          des: "Hanya Rp 99.000/malam",
          image: images.images_promo3
        },
        {
          title: "Special Offer",
          des: "Voucher 1 Night 1 Stay",
          image: images.images_promo1
        },
        {
          title: "Special Offer SuMo",
          des: "Hanya Rp 120.000/malam",
          image: images.images_promo2
        },
        {
          title: "Grand Opening",
          des: "Hanya Rp 99.000/malam",
          image: images.images_promo3
        }
      ],
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
            {/* {this.renderHeader()} */}
            {this.renderSwiper()}
            <Content style={{ padding: 20 }}>{this.renderList()}</Content>
          </SafeAreaView>
        </Container>
      </StyleProvider>
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

  renderList() {
    var listPromo = [];
    this.state.promo.map((data, i) => {
      var placeholder = images.images_promo1;
      if (data.image != null) {
        placeholder = data.image;
      }
      listPromo.push(
        <TouchableOpacity
          key={i}
          style={[styles.list]}
          onPress={() => screen.PromoDetail(this.props.navigation)}
        >
          <Image
            source={placeholder}
            style={{
              height: 100,
              width: 100,
              marginRight: 10
            }}
          />
          <View style={{ width: width - 140 }}>
            <Text style={[styles.Bold_18, { color: colors.darkGrey }]}>
              {data.title}
            </Text>
            <Text style={[styles.Reg_14, { color: colors.darkGrey }]}>
              {data.des}
            </Text>
          </View>
        </TouchableOpacity>
      );
    });
    return (
      <View>
        <ScrollView>{listPromo}</ScrollView>
      </View>
    );
  }
}

export default ListPromo;
