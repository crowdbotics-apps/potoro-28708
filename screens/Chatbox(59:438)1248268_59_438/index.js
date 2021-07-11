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
      <View style={styles.View_59_439}>
        <View style={styles.View_59_440}>
          <Text style={styles.Text_59_440}>Nhập tin nhắn...</Text>
        </View>
        <View style={styles.View_59_441} />
      </View>
      <View style={styles.View_59_442}>
        <View style={styles.View_59_443}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9b24/4a6e/016a381233394e461d9720e915ea59b2"
            }}
            style={styles.ImageBackground_64_151}
          />
          <View style={styles.View_59_471}>
            <View style={styles.View_59_472}>
              <Text style={styles.Text_59_472}>
                Chào bạn, bạn đặt phòng này ở chỗ mình à?
              </Text>
            </View>
          </View>
          <View style={styles.View_59_473}>
            <View style={styles.View_59_474}>
              <Text style={styles.Text_59_474}>
                Giá 1m5, bạn thấy hợp lí không, cọc 300k nhé
              </Text>
            </View>
          </View>
          <View style={styles.View_59_475}>
            <View style={styles.View_59_476}>
              <Text style={styles.Text_59_476}>
                Bạn ở mấy người vậy, cho mình biết được ko?
              </Text>
            </View>
          </View>
        </View>
        <View style={styles.View_59_477}>
          <View style={styles.View_59_478}>
            <Text style={styles.Text_59_478}>Không</Text>
          </View>
        </View>
        <View style={styles.View_59_479}>
          <View style={styles.View_59_480}>
            <Text style={styles.Text_59_480}>Thế thì thôi, chào bạn !</Text>
          </View>
        </View>
      </View>
      <View style={styles.View_59_483}>
        <Text style={styles.Text_59_483}>􀌇</Text>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2247/01e0/157da275f5bd2c441a1e909a8daa4631"
        }}
        style={styles.ImageBackground_59_496}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6c87/01a8/4330fe3f4714d663a52078d39b1cc7f8"
        }}
        style={styles.ImageBackground_64_148}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0603/e7d0/1c5aa73ef08d665a4e442c1598d741bf"
        }}
        style={styles.ImageBackground_64_149}
      />
      <View style={styles.View_64_253}>
        <Text style={styles.Text_64_253}>Nguyên sinh</Text>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: { backgroundColor: "rgba(255, 255, 255, 1)" },
  View_2: { height: hp("100%") },
  View_59_439: {
    width: wp("84.26666666666667%"),
    minWidth: wp("84.26666666666667%"),
    height: hp("4.94752623688156%"),
    minHeight: hp("4.94752623688156%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.2%"),
    top: hp("93.55322338830585%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_59_440: {
    width: wp("84.26666666666667%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_59_440: {
    color: "rgba(150, 145, 132, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_59_441: {
    width: wp("84%"),
    height: hp("0.29985007496251875%"),
    top: hp("4.647676161919037%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.1333333333333333%"),
    backgroundColor: "rgba(216, 216, 216, 1)",
    borderColor: "rgba(151, 151, 151, 1)",
    borderWidth: 1
  },
  View_59_442: {
    width: wp("89.33333333333333%"),
    minWidth: wp("89.33333333333333%"),
    height: hp("69.41529235382309%"),
    minHeight: hp("69.41529235382309%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.4%"),
    top: hp("11.244377811094452%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_59_443: {
    width: wp("63.46666666666667%"),
    minWidth: wp("63.46666666666667%"),
    height: hp("50.82458770614693%"),
    minHeight: hp("50.82458770614693%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_64_151: {
    width: wp("63.46666666666667%"),
    minWidth: wp("63.46666666666667%"),
    height: hp("18.4407796101949%"),
    minHeight: hp("18.4407796101949%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    resizeMode: "cover"
  },
  View_59_471: {
    width: wp("63.46666666666667%"),
    height: hp("10.194902548725636%"),
    top: hp("19.04047976011994%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(18, 31, 51, 1)"
  },
  View_59_472: {
    flexGrow: 1,
    width: wp("54.93333333333334%"),
    minHeight: hp("6.5967016491754125%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.2666666666666675%"),
    top: hp("1.7991004497751142%"),
    justifyContent: "flex-start"
  },
  Text_59_472: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.40799999237060547,
    textTransform: "none"
  },
  View_59_473: {
    width: wp("63.46666666666667%"),
    height: hp("10.194902548725636%"),
    top: hp("29.83508245877062%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(18, 31, 51, 1)"
  },
  View_59_474: {
    flexGrow: 1,
    width: wp("54.93333333333334%"),
    minHeight: hp("6.5967016491754125%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.2666666666666675%"),
    top: hp("1.7991004497751035%"),
    justifyContent: "flex-start"
  },
  Text_59_474: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.40799999237060547,
    textTransform: "none"
  },
  View_59_475: {
    width: wp("63.46666666666667%"),
    height: hp("10.194902548725636%"),
    top: hp("40.62968515742129%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(18, 31, 51, 1)"
  },
  View_59_476: {
    flexGrow: 1,
    width: wp("54.93333333333334%"),
    minHeight: hp("6.5967016491754125%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.2666666666666675%"),
    top: hp("1.7991004497751177%"),
    justifyContent: "flex-start"
  },
  Text_59_476: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.40799999237060547,
    textTransform: "none"
  },
  View_59_477: {
    width: wp("21.866666666666667%"),
    height: hp("6.896551724137931%"),
    top: hp("53.22338830584708%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("67.46666666666667%"),
    backgroundColor: "rgba(33, 147, 176, 1)"
  },
  View_59_478: {
    flexGrow: 1,
    width: wp("13.333333333333334%"),
    minHeight: hp("3.2983508245877062%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.2666666666666515%"),
    top: hp("1.7991004497751106%"),
    justifyContent: "flex-start"
  },
  Text_59_478: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.40799999237060547,
    textTransform: "none"
  },
  View_59_479: {
    width: wp("63.46666666666667%"),
    height: hp("6.896551724137931%"),
    top: hp("62.518740629685155%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(18, 31, 51, 1)"
  },
  View_59_480: {
    flexGrow: 1,
    width: wp("54.93333333333334%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.2666666666666675%"),
    top: hp("1.7991004497751106%"),
    justifyContent: "flex-start"
  },
  Text_59_480: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.40799999237060547,
    textTransform: "none"
  },
  View_59_483: {
    width: wp("7.466666666666668%"),
    minWidth: wp("7.466666666666668%"),
    minHeight: hp("2.951649175412294%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("89.33333333333333%"),
    top: hp("2.998500749625187%"),
    justifyContent: "center"
  },
  Text_59_483: {
    color: "rgba(134, 168, 231, 1)",
    fontSize: 16,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.40799999237060547,
    textTransform: "none"
  },
  ImageBackground_59_496: {
    width: wp("8%"),
    minWidth: wp("8%"),
    height: hp("4.497751124437781%"),
    minHeight: hp("4.497751124437781%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("89.06666666666668%"),
    top: hp("94.00299850074963%"),
    resizeMode: "cover",
    borderColor: "rgba(0, 0, 0, 1)",
    borderWidth: 1
  },
  ImageBackground_64_148: {
    width: wp("9.6%"),
    minWidth: wp("9.6%"),
    height: hp("5.397301349325337%"),
    minHeight: hp("5.397301349325337%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("77.33333333333333%"),
    top: hp("1.4992503748125936%")
  },
  ImageBackground_64_149: {
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
  View_64_253: {
    width: wp("29.333333333333332%"),
    minWidth: wp("29.333333333333332%"),
    minHeight: hp("3.4482758620689653%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("30.933333333333334%"),
    top: hp("2.998500749625187%"),
    justifyContent: "flex-start"
  },
  Text_64_253: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 16,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  }
})

const mapStateToProps = state => {
  return {}
}
const mapDispatchToProps = () => {
  return {}
}
export default connect(mapStateToProps, mapDispatchToProps)(Blank)
