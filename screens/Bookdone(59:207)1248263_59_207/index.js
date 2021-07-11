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
      <View style={styles.View_59_208}>
        <Text style={styles.Text_59_208}>
          Thành công, chủ trọ sẽ liên hệ với bạn trong phút chốc
        </Text>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5bb0/d416/cca17f81e45b014a62578a3ed3cdd2f2"
        }}
        style={styles.ImageBackground_59_2613}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0603/e7d0/1c5aa73ef08d665a4e442c1598d741bf"
        }}
        style={styles.ImageBackground_64_146}
      />
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: { backgroundColor: "rgba(255, 255, 255, 1)" },
  View_2: { height: hp("100%") },
  View_59_208: {
    width: wp("70.66666666666667%"),
    minWidth: wp("70.66666666666667%"),
    minHeight: hp("6.896551724137931%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("14.666666666666666%"),
    top: hp("49.92503748125937%"),
    justifyContent: "flex-start"
  },
  Text_59_208: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 16,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_59_2613: {
    width: wp("32%"),
    minWidth: wp("32%"),
    height: hp("17.991004497751124%"),
    minHeight: hp("17.991004497751124%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("33.86666666666667%"),
    top: hp("29.985007496251875%"),
    resizeMode: "cover"
  },
  ImageBackground_64_146: {
    width: wp("3.2%"),
    minWidth: wp("3.2%"),
    height: hp("3.598200899550225%"),
    minHeight: hp("3.598200899550225%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.666666666666667%"),
    top: hp("2.998500749625187%")
  }
})

const mapStateToProps = state => {
  return {}
}
const mapDispatchToProps = () => {
  return {}
}
export default connect(mapStateToProps, mapDispatchToProps)(Blank)
