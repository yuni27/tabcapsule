import React, { Component } from "react";
import { Dimensions, TouchableOpacity, Image, View } from "react-native";
import { Text, Container, StyleProvider } from "native-base";
import ModalWrapper from "react-native-modal-wrapper";
import Share, { ShareSheet, Button } from "react-native-share";

import colors from "../../config/colors";
import styles from "../../config/styles";
import image from "../../config/images";
import Helper from "../../utilities/Helper";
import getTheme from "../../../native-base-theme/components";
import material from "../../../native-base-theme/variables/material";

export default class Header1 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      visibleMenu: false,
      visibleShare: false
    };
  }
  onCancelShare() {
    console.log("CANCEL");
    this.setState({ visibleShare: false });
  }
  onOpenShare() {
    console.log("OPEN");
    this.setState({ visibleShare: true, visibleMenu: false });
  }

  render() {
    var { height, width } = Dimensions.get("window");
    let shareOptions = {
      message: "TabCapsule",
      url: "http://tabcapsule.com/",
      subject: "Share Link" //  for email
    };
    return (
      <View>
        <View style={styles.headerContainer}>
          <Text style={[styles.Bold_24, { color: colors.white }]}>
            {this.props.title}
          </Text>
          {this.props.hiddenHeaderRight == true ? (
            <TouchableOpacity
              onPress={() => this.setState({ visibleMenu: true })}
              style={{ width: 20 }}
            >
              <Image
                source={image.icon_points}
                style={{ width: 20, height: 20 }}
              />
            </TouchableOpacity>
          ) : null}

          <ModalWrapper
            style={styles.modal}
            onRequestClose={() => this.setState({ visibleMenu: false })}
            visible={this.state.visibleMenu}
            position="right"
          >
            <TouchableOpacity
              last
              style={styles.rowModal}
              // onPress={() => this.onOpenShare()}
            >
              <Text allowFontScaling={false} style={[styles.Reg_18]}>
                Benefit as Member
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              last
              style={styles.rowModal}
              onPress={() => this.onOpenShare()}
            >
              <Text allowFontScaling={false} style={[styles.Reg_18]}>
                Share
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              last
              style={styles.rowModal}
              // onPress={() => this._AboutUs()}
            >
              <Text allowFontScaling={false} style={[styles.Reg_18]}>
                About Us
              </Text>
            </TouchableOpacity>
          </ModalWrapper>
        </View>
        <View
          style={{
            // flex: 1,
            height: height,
            width: width,
            position: "absolute"
            // zIndex: 1
          }}
        >
          <ShareSheet
            visible={this.state.visibleShare}
            onCancel={this.onCancelShare.bind(this)}
            style={styles.modalShare}
          >
            <Button
              iconSrc={{ uri: Helper.TWITTER_ICON }}
              onPress={() => {
                this.onCancelShare();
                setTimeout(() => {
                  Share.shareSingle(
                    Object.assign(shareOptions, {
                      social: "twitter"
                    })
                  );
                }, 300);
              }}
            >
              Twitter
            </Button>
            <Button
              iconSrc={{ uri: Helper.WHATSAPP_ICON }}
              onPress={() => {
                this.onCancelShare();
                setTimeout(() => {
                  Share.shareSingle(
                    Object.assign(shareOptions, {
                      social: "whatsapp"
                    })
                  );
                }, 300);
              }}
            >
              Whatsapp
            </Button>
            <Button
              iconSrc={{ uri: Helper.GOOGLE_PLUS_ICON }}
              onPress={() => {
                this.onCancelShare();
                setTimeout(() => {
                  Share.shareSingle(
                    Object.assign(shareOptions, {
                      social: "googleplus"
                    })
                  );
                }, 300);
              }}
            >
              Google +
            </Button>
            <Button
              iconSrc={{ uri: Helper.EMAIL_ICON }}
              onPress={() => {
                this.onCancelShare();
                setTimeout(() => {
                  Share.shareSingle(
                    Object.assign(shareOptions, {
                      social: "email"
                    })
                  );
                }, 300);
              }}
            >
              Email
            </Button>
            <Button
              iconSrc={{ uri: Helper.MORE_ICON }}
              onPress={() => {
                this.onCancelShare();
                setTimeout(() => {
                  Share.open(shareOptions);
                }, 300);
              }}
            >
              More
            </Button>
          </ShareSheet>
        </View>
      </View>
    );
  }

  callShare() {
    let shareOptions = {
      message: "TabCapsule",
      url: "http://tabcapsule.com/",
      subject: "Share Link" //  for email
    };
    return (
      <StyleProvider style={getTheme(material)}>
        <Container style={{ backgroundColor: "white" }}>
          <ShareSheet
            visible={this.state.visibleShare}
            onCancel={this.onCancelShare.bind(this)}
            style={styles.modalShare}
          >
            <Button
              iconSrc={{ uri: Helper.TWITTER_ICON }}
              onPress={() => {
                this.onCancelShare();
                setTimeout(() => {
                  Share.shareSingle(
                    Object.assign(shareOptions, {
                      social: "twitter"
                    })
                  );
                }, 300);
              }}
            >
              Twitter
            </Button>
            <Button
              iconSrc={{ uri: Helper.WHATSAPP_ICON }}
              onPress={() => {
                this.onCancelShare();
                setTimeout(() => {
                  Share.shareSingle(
                    Object.assign(shareOptions, {
                      social: "whatsapp"
                    })
                  );
                }, 300);
              }}
            >
              Whatsapp
            </Button>
            <Button
              iconSrc={{ uri: Helper.GOOGLE_PLUS_ICON }}
              onPress={() => {
                this.onCancelShare();
                setTimeout(() => {
                  Share.shareSingle(
                    Object.assign(shareOptions, {
                      social: "googleplus"
                    })
                  );
                }, 300);
              }}
            >
              Google +
            </Button>
            <Button
              iconSrc={{ uri: Helper.EMAIL_ICON }}
              onPress={() => {
                this.onCancelShare();
                setTimeout(() => {
                  Share.shareSingle(
                    Object.assign(shareOptions, {
                      social: "email"
                    })
                  );
                }, 300);
              }}
            >
              Email
            </Button>
            <Button
              iconSrc={{ uri: Helper.MORE_ICON }}
              onPress={() => {
                this.onCancelShare();
                setTimeout(() => {
                  Share.open(shareOptions);
                }, 300);
              }}
            >
              More
            </Button>
          </ShareSheet>
        </Container>
      </StyleProvider>
    );
  }
}
