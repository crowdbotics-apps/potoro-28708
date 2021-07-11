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
      <View style={styles.View_59_157}>
        <Text style={styles.Text_59_157}>Đăng ký tài khoản</Text>
      </View>
      <View style={styles.View_59_186}>
        <View style={styles.View_59_187}>
          <Text style={styles.Text_59_187}>Tên của bạn</Text>
        </View>
        <View style={styles.View_59_188} />
      </View>
      <View style={styles.View_59_189}>
        <View style={styles.View_59_190}>
          <Text style={styles.Text_59_190}>Địa chỉ email</Text>
        </View>
        <View style={styles.View_59_191} />
      </View>
      <View style={styles.View_59_192}>
        <View style={styles.View_59_193}>
          <Text style={styles.Text_59_193}>Nghề nghiệp</Text>
        </View>
        <View style={styles.View_59_194} />
      </View>
      <View style={styles.View_59_195}>
        <View style={styles.View_59_196}>
          <Text style={styles.Text_59_196}>Tuổi</Text>
        </View>
        <View style={styles.View_59_197} />
      </View>
      <View style={styles.View_59_198}>
        <View style={styles.View_59_199}>
          <Text style={styles.Text_59_199}>Số điện thoại</Text>
        </View>
        <View style={styles.View_59_200} />
      </View>
      <View style={styles.View_59_201}>
        <View style={styles.View_59_202}>
          <Text style={styles.Text_59_202}>Tạo mật khẩu mới</Text>
        </View>
        <View style={styles.View_59_203} />
      </View>
      <TouchableOpacity
        style={styles.TouchableOpacity_59_204}
        onPress={() =>
          this.props.navigation.navigate(getNavigationScreen("59_429"))
        }
      >
        <View style={styles.View_59_205} />
        <View style={styles.View_59_206}>
          <Text style={styles.Text_59_206}>TẠO TÀI KHOẢN THÔI !!!!</Text>
        </View>
      </TouchableOpacity>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0603/e7d0/1c5aa73ef08d665a4e442c1598d741bf"
        }}
        style={styles.ImageBackground_59_2372}
      />
      <View style={styles.View_64_152}>
        <View style={styles.View_64_153}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9863/4fdb/bf20aae88b8fd55722a0b0439a079296"
            }}
            style={styles.ImageBackground_64_154}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/47d9/b73e/eb6e0d0ca385a74d44c3950b3a637065"
            }}
            style={styles.ImageBackground_64_155}
          />
        </View>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: { backgroundColor: "rgba(255, 255, 255, 1)" },
  View_2: { height: hp("100%") },
  View_59_157: {
    width: wp("42.13333333333333%"),
    minWidth: wp("42.13333333333333%"),
    minHeight: hp("3.4482758620689653%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("30.666666666666664%"),
    top: hp("2.998500749625187%"),
    justifyContent: "flex-start"
  },
  Text_59_157: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 16,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_59_186: {
    width: wp("84.26666666666667%"),
    minWidth: wp("84.26666666666667%"),
    height: hp("4.94752623688156%"),
    minHeight: hp("4.94752623688156%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8.133333333333333%"),
    top: hp("36.28185907046477%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_59_187: {
    width: wp("23.200000000000003%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-0.13333333333333286%"),
    top: hp("1.0494752623688157%"),
    justifyContent: "flex-start"
  },
  Text_59_187: {
    color: "rgba(150, 145, 132, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_59_188: {
    width: wp("84%"),
    height: hp("0.29985007496251875%"),
    top: hp("4.647676161919037%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.13333333333333286%"),
    backgroundColor: "rgba(216, 216, 216, 1)",
    borderColor: "rgba(151, 151, 151, 1)",
    borderWidth: 1
  },
  View_59_189: {
    width: wp("84.26666666666667%"),
    minWidth: wp("84.26666666666667%"),
    height: hp("4.94752623688156%"),
    minHeight: hp("4.94752623688156%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8.266666666666666%"),
    top: hp("43.62818590704648%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_59_190: {
    width: wp("24.53333333333333%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("1.0494752623688157%"),
    justifyContent: "flex-start"
  },
  Text_59_190: {
    color: "rgba(150, 145, 132, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_59_191: {
    width: wp("84%"),
    height: hp("0.29985007496251875%"),
    top: hp("4.647676161919037%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.13333333333333464%"),
    backgroundColor: "rgba(216, 216, 216, 1)",
    borderColor: "rgba(151, 151, 151, 1)",
    borderWidth: 1
  },
  View_59_192: {
    width: wp("84.26666666666667%"),
    minWidth: wp("84.26666666666667%"),
    height: hp("4.94752623688156%"),
    minHeight: hp("4.94752623688156%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8%"),
    top: hp("50.97451274362819%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_59_193: {
    width: wp("24%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("1.0494752623688157%"),
    justifyContent: "flex-start"
  },
  Text_59_193: {
    color: "rgba(150, 145, 132, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_59_194: {
    width: wp("84%"),
    height: hp("0.29985007496251875%"),
    top: hp("4.647676161919044%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.13333333333333286%"),
    backgroundColor: "rgba(216, 216, 216, 1)",
    borderColor: "rgba(151, 151, 151, 1)",
    borderWidth: 1
  },
  View_59_195: {
    width: wp("84.26666666666667%"),
    minWidth: wp("84.26666666666667%"),
    height: hp("4.94752623688156%"),
    minHeight: hp("4.94752623688156%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8.266666666666666%"),
    top: hp("58.32083958020989%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_59_196: {
    width: wp("8.266666666666666%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("1.0494752623688157%"),
    justifyContent: "flex-start"
  },
  Text_59_196: {
    color: "rgba(150, 145, 132, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_59_197: {
    width: wp("84%"),
    height: hp("0.29985007496251875%"),
    top: hp("4.647676161919044%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.13333333333333464%"),
    backgroundColor: "rgba(216, 216, 216, 1)",
    borderColor: "rgba(151, 151, 151, 1)",
    borderWidth: 1
  },
  View_59_198: {
    width: wp("84.26666666666667%"),
    minWidth: wp("84.26666666666667%"),
    height: hp("4.94752623688156%"),
    minHeight: hp("4.94752623688156%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8.266666666666666%"),
    top: hp("65.6671664167916%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_59_199: {
    width: wp("25.066666666666666%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("1.0494752623688157%"),
    justifyContent: "flex-start"
  },
  Text_59_199: {
    color: "rgba(150, 145, 132, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_59_200: {
    width: wp("84%"),
    height: hp("0.29985007496251875%"),
    top: hp("4.647676161919037%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.13333333333333464%"),
    backgroundColor: "rgba(216, 216, 216, 1)",
    borderColor: "rgba(151, 151, 151, 1)",
    borderWidth: 1
  },
  View_59_201: {
    width: wp("84.26666666666667%"),
    minWidth: wp("84.26666666666667%"),
    height: hp("4.94752623688156%"),
    minHeight: hp("4.94752623688156%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8.266666666666666%"),
    top: hp("73.01349325337331%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_59_202: {
    width: wp("34.13333333333333%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("1.0494752623688157%"),
    justifyContent: "flex-start"
  },
  Text_59_202: {
    color: "rgba(150, 145, 132, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_59_203: {
    width: wp("84%"),
    height: hp("0.29985007496251875%"),
    top: hp("4.647676161919037%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.13333333333333464%"),
    backgroundColor: "rgba(216, 216, 216, 1)",
    borderColor: "rgba(151, 151, 151, 1)",
    borderWidth: 1
  },
  TouchableOpacity_59_204: {
    width: wp("87.2%"),
    minWidth: wp("87.2%"),
    height: hp("8.395802098950526%"),
    minHeight: hp("8.395802098950526%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.4%"),
    top: hp("87.70614692653673%"),
    backgroundColor: "rgba(33, 147, 176, 1)",
    overflow: "hidden"
  },
  View_59_205: {
    width: wp("87.2%"),
    height: hp("8.395802098950526%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(33, 147, 176, 1)",
    borderColor: "rgba(151, 151, 151, 1)",
    borderWidth: 1
  },
  View_59_206: {
    width: wp("38.4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("24.4%"),
    top: hp("3.148425787106447%"),
    justifyContent: "flex-start"
  },
  Text_59_206: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_59_2372: {
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
  View_64_152: {
    width: wp("32%"),
    minWidth: wp("32%"),
    height: hp("17.991004497751124%"),
    minHeight: hp("17.991004497751124%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("33.86666666666667%"),
    top: hp("14.842578710644677%")
  },
  View_64_153: {
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
  ImageBackground_64_154: {
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
  ImageBackground_64_155: {
    width: wp("20.210526529947916%"),
    minWidth: wp("20.210526529947916%"),
    height: hp("11.362739803194106%"),
    minHeight: hp("11.362739803194106%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.063151041666664%"),
    top: hp("3.2194443549709533%"),
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
