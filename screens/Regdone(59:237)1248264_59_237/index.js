import React from "react"
import {
  View,
  Image,
  ImageBackground,
  TouchableOpacity,
  Text,
  Button,
  Switch,
  TextInput,
  StyleSheet,
  ScrollView
} from "react-native"
import Icon from "react-native-vector-icons/FontAwesome"
import { CheckBox } from "react-native-elements"
import { connect } from "react-redux"
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from "react-native-responsive-screen"
import { getNavigationScreen } from "@modules"
export class Blank extends React.Component {
  constructor(props) {
    super(props)

    this.state = {}
  }
  render = () => (
    <ScrollView
      contentContainerStyle={{ flexGrow: 1 }}
      style={styles.ScrollView_1}
    >
      <View style={styles.View_2} />
      <View style={styles.View_59_238}>
        <Text style={styles.Text_59_238}>Xin chào, Đoàn Đức Tín</Text>
      </View>
      <TouchableOpacity
        style={styles.TouchableOpacity_59_239}
        onPress={() =>
          this.props.navigation.navigate(getNavigationScreen("59_570"))
        }
      >
        <Text style={styles.Text_59_239}>
          Bạn đã đăng ký thành công, thử tìm phòng trọ ngay
        </Text>
      </TouchableOpacity>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0603/e7d0/1c5aa73ef08d665a4e442c1598d741bf"
        }}
        style={styles.ImageBackground_59_2604}
      />
      <View style={styles.View_59_2605}>
        <View style={styles.View_59_2606}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9863/4fdb/bf20aae88b8fd55722a0b0439a079296"
            }}
            style={styles.ImageBackground_59_2607}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/47d9/b73e/eb6e0d0ca385a74d44c3950b3a637065"
            }}
            style={styles.ImageBackground_59_2608}
          />
        </View>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: { backgroundColor: "rgba(255, 255, 255, 1)" },
  View_2: { height: hp("100%") },
  View_59_238: {
    width: wp("66.93333333333334%"),
    minWidth: wp("66.93333333333334%"),
    minHeight: hp("4.197901049475263%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("16.53333333333333%"),
    top: hp("49.92503748125937%"),
    justifyContent: "flex-start"
  },
  Text_59_238: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 19,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  TouchableOpacity_59_239: {
    width: wp("58.93333333333334%"),
    minWidth: wp("58.93333333333334%"),
    minHeight: hp("6.296851574212893%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("20.533333333333335%"),
    top: hp("58.920539730134934%"),
    justifyContent: "flex-start"
  },
  Text_59_239: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_59_2604: {
    width: wp("3.2%"),
    minWidth: wp("3.2%"),
    height: hp("3.598200899550225%"),
    minHeight: hp("3.598200899550225%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.666666666666667%"),
    top: hp("2.998500749625187%")
  },
  View_59_2605: {
    width: wp("32%"),
    minWidth: wp("32%"),
    height: hp("17.991004497751124%"),
    minHeight: hp("17.991004497751124%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("33.86666666666667%"),
    top: hp("28.635682158920538%")
  },
  View_59_2606: {
    width: wp("32%"),
    minWidth: wp("32%"),
    height: hp("17.991004497751124%"),
    minHeight: hp("17.991004497751124%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_59_2607: {
    width: wp("32%"),
    minWidth: wp("32%"),
    height: hp("17.991004497751124%"),
    minHeight: hp("17.991004497751124%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_59_2608: {
    width: wp("20.210526529947916%"),
    minWidth: wp("20.210526529947916%"),
    height: hp("11.362739803194106%"),
    minHeight: hp("11.362739803194106%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.063151041666664%"),
    top: hp("3.219435204272866%"),
    resizeMode: "cover"
  }
})

const mapStateToProps = state => {
  return {}
}
const mapDispatchToProps = () => {
  return {}
}
export default connect(mapStateToProps, mapDispatchToProps)(Blank)
