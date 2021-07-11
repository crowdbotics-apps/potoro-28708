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
      <View style={styles.View_59_270}>
        <Text style={styles.Text_59_270}>
          Chỉ còn một vài bước để đặt phòng thành công
        </Text>
      </View>
      <View style={styles.View_59_297}>
        <Text style={styles.Text_59_297}>
          Địa chỉ: 12 Nam Kỳ Khởi Nghĩa, phường Hòa Hải, quận Ngũ Hành Sơn, Đà
          Nẵng
        </Text>
      </View>
      <TouchableOpacity
        style={styles.TouchableOpacity_59_298}
        onPress={() =>
          this.props.navigation.navigate(getNavigationScreen("1_2"))
        }
      >
        <Text style={styles.Text_59_298}>Thông tin khác</Text>
      </TouchableOpacity>
      <View style={styles.View_59_299}>
        <Text style={styles.Text_59_299}>
          Kiểm tra thông tin một lần nữa bạn nhé!
        </Text>
      </View>
      <View style={styles.View_59_300}>
        <Text style={styles.Text_59_300}>Chủ trọ sẽ liên hệ với bạn qua</Text>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0603/e7d0/1c5aa73ef08d665a4e442c1598d741bf"
        }}
        style={styles.ImageBackground_59_2365}
      />
      <View style={styles.View_59_303}>
        <View style={styles.View_59_304}>
          <Text style={styles.Text_59_304}>0123456789</Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/34ec/da7c/c704e786d0c8aa5bf8722b9d8e05d2f3"
          }}
          style={styles.ImageBackground_64_195}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9f85/c0f3/0d3663a99dcf46afae949f577cd28047"
          }}
          style={styles.ImageBackground_64_196}
        />
      </View>
      <TouchableOpacity
        style={styles.TouchableOpacity_59_306}
        onPress={() =>
          this.props.navigation.navigate(getNavigationScreen("59_207"))
        }
      >
        <View style={styles.View_59_307} />
        <View style={styles.View_59_308}>
          <Text style={styles.Text_59_308}>ĐẶT PHÒNG</Text>
        </View>
      </TouchableOpacity>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ac15/f1c5/f35ffd18ef496df245285263d5918d21"
        }}
        style={styles.ImageBackground_64_194}
      />
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: { backgroundColor: "rgba(255, 255, 255, 1)" },
  View_2: { height: hp("100%") },
  View_59_270: {
    width: wp("51.733333333333334%"),
    minWidth: wp("51.733333333333334%"),
    minHeight: hp("5.8988764044943816%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("24%"),
    top: hp("9.97191011235955%"),
    justifyContent: "flex-start"
  },
  Text_59_270: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_59_297: {
    width: wp("87.2%"),
    minWidth: wp("87.2%"),
    minHeight: hp("4.49438202247191%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.333333333333334%"),
    top: hp("41.43258426966292%"),
    justifyContent: "flex-start"
  },
  Text_59_297: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  TouchableOpacity_59_298: {
    width: wp("87.2%"),
    minWidth: wp("87.2%"),
    minHeight: hp("2.528089887640449%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.866666666666666%"),
    top: hp("46.91011235955056%"),
    justifyContent: "flex-start"
  },
  Text_59_298: {
    color: "rgba(150, 145, 132, 1)",
    fontSize: 12,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_59_299: {
    width: wp("87.2%"),
    minWidth: wp("87.2%"),
    minHeight: hp("3.3707865168539324%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.4%"),
    top: hp("17.97752808988764%"),
    justifyContent: "flex-start"
  },
  Text_59_299: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 10,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_59_300: {
    width: wp("62.66666666666667%"),
    minWidth: wp("62.66666666666667%"),
    minHeight: hp("2.9494382022471908%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("17.599999999999998%"),
    top: hp("62.5%"),
    justifyContent: "flex-start"
  },
  Text_59_300: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_59_2365: {
    width: wp("3.2%"),
    minWidth: wp("3.2%"),
    height: hp("3.3707865168539324%"),
    minHeight: hp("3.3707865168539324%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.533333333333333%"),
    top: hp("2.528089887640449%")
  },
  View_59_303: {
    width: wp("84.26666666666667%"),
    minWidth: wp("84.26666666666667%"),
    height: hp("4.634831460674158%"),
    minHeight: hp("4.634831460674158%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8.266666666666666%"),
    top: hp("67.41573033707866%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_59_304: {
    width: wp("84.26666666666667%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0.7022471910112387%"),
    justifyContent: "flex-start"
  },
  Text_59_304: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_64_195: {
    width: wp("5.333333333333334%"),
    minWidth: wp("5.333333333333334%"),
    height: hp("2.8089887640449436%"),
    minHeight: hp("2.8089887640449436%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("24.53333333333334%"),
    top: hp("0.7022471910112387%"),
    resizeMode: "cover"
  },
  ImageBackground_64_196: {
    width: wp("93.60000000000001%"),
    minWidth: wp("93.60000000000001%"),
    height: hp("0%"),
    minHeight: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("4.63483146067415%")
  },
  TouchableOpacity_59_306: {
    width: wp("87.2%"),
    minWidth: wp("87.2%"),
    height: hp("7.865168539325842%"),
    minHeight: hp("7.865168539325842%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.4%"),
    top: hp("82.16292134831461%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_59_307: {
    width: wp("87.2%"),
    height: hp("7.865168539325842%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(33, 147, 176, 1)",
    borderColor: "rgba(151, 151, 151, 1)",
    borderWidth: 1
  },
  View_59_308: {
    width: wp("19.2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("34.00000000000001%"),
    top: hp("2.949438202247194%"),
    justifyContent: "flex-start"
  },
  Text_59_308: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_64_194: {
    width: wp("45.33333333333333%"),
    minWidth: wp("45.33333333333333%"),
    height: hp("15.308988764044946%"),
    minHeight: hp("15.308988764044946%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("24.53333333333333%"),
    top: hp("22.752808988764045%"),
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
