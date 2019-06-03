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
  ScrollView
} from "react-native";
import {
  Container,
  StyleProvider,
  Content,
  Input,
  Textarea
} from "native-base";
import colors from "../../config/colors";
import getTheme from "../../../native-base-theme/components";
import material from "../../../native-base-theme/variables/material";
import styles from "../../config/styles";
import Header from "../../components/Header/Header";
import screen from "../../navigation/ChooseScreen";
import images from "../../config/images";

const { height, width } = Dimensions.get("window");
class ListHotel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      titlePage: "Hotel",
      promo: [
        {
          title: "Tab Capsule Hotel Kayoon",
          des: "Surabaya, Jawa Timur",
          image: images.images_promo1
        },
        {
          title: "Tab Capsule Hotel Kayoon",
          des: "Surabaya, Jawa Timur",
          image: images.images_promo2
        },
        {
          title: "Tab Capsule Hotel Kayoon",
          des: "Surabaya, Jawa Timur",
          image: images.images_promo3
        },
        {
          title: "Tab Capsule Hotel Kayoon",
          des: "Surabaya, Jawa Timur",
          image: images.images_promo1
        },
        {
          title: "Tab Capsule Hotel Kayoon",
          des: "Surabaya, Jawa Timur",
          image: images.images_promo2
        },
        {
          title: "Tab Capsule Hotel Kayoon",
          des: "Surabaya, Jawa Timur",
          image: images.images_promo3
        },
        {
          title: "Tab Capsule Hotel Kayoon",
          des: "Surabaya, Jawa Timur",
          image: images.images_promo1
        },
        {
          title: "Tab Capsule Hotel Kayoon",
          des: "Surabaya, Jawa Timur",
          image: images.images_promo2
        },
        {
          title: "Tab Capsule Hotel Kayoon",
          des: "Surabaya, Jawa Timur",
          image: images.images_promo3
        },
        {
          title: "Tab Capsule Hotel Kayoon",
          des: "Surabaya, Jawa Timur",
          image: images.images_promo1
        },
        {
          title: "Tab Capsule Hotel Kayoon",
          des: "Surabaya, Jawa Timur",
          image: images.images_promo2
        },
        {
          title: "Tab Capsule Hotel Kayoon",
          des: "Surabaya, Jawa Timur",
          image: images.images_promo3
        }
      ],
      searchText: "",
      searchHotel: ""
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
              hiddenHeaderRight={false}
            />
            {this.renderSearch()}
            <Content style={{ padding: 20 }}>{this.renderList()}</Content>
          </SafeAreaView>
        </Container>
      </StyleProvider>
    );
  }

  renderList() {
    var listPromo = [];
    this.state.promo.map((data, i) => {
      listPromo.push(
        <TouchableOpacity
          key={i}
          style={[styles.list, { height: 50 }]}
          onPress={() => screen.HotelDetail(this.props.navigation)}
        >
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

  renderSearch() {
    return (
      <View
        style={[
          styles.headerContainer,
          { marginTop: 20, marginLeft: 20, marginRight: 20 }
        ]}
      >
        <Input
          placeholderTextColor={colors.white}
          placeholder="Masukkan nama kota"
          style={[styles.Reg_18, { color: colors.white }]}
          value={this.state.searchText}
          onChange={this.setSearchText.bind(this)}
        />
        <View style={{ flexDirection: "row" }}>
          <TouchableOpacity
            onPress={() => [
              this.setState({ searchHotel: false, searchText: "" })
              // this.componentWillMount()
            ]}
          >
            <Image
              source={images.icon_search}
              style={{ height: 20, width: 20, marginRight: 10 }}
            />
          </TouchableOpacity>
        </View>
      </View>
    );
  }

  setSearchText(event) {
    let searchText = event.nativeEvent.text;
    // let filteredData = this.filterTopics(searchText, this.state.rawData);

    this.setState({
      searchText: searchText
      // dataProduct: filteredData
    });
    // if (filteredData.length == 0) {
    // 	this.getProduct();
    // }
  }
}

export default ListHotel;
