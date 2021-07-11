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
      <View style={styles.View_59_430}>
        <Text style={styles.Text_59_430}>Xác minh số điện thoại</Text>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0603/e7d0/1c5aa73ef08d665a4e442c1598d741bf"
        }}
        style={styles.ImageBackground_59_2373}
      />
      <View style={styles.View_59_432}>
        <View style={styles.View_59_433}>
          <Text style={styles.Text_59_433}>
            Nhập mã được gửi qua điện thoại của bạn
          </Text>
        </View>
        <View style={styles.View_59_434} />
      </View>
      <View style={styles.View_59_435}>
        <Text style={styles.Text_59_435}>Gửi lại mã xác nhận</Text>
      </View>
      <View style={styles.View_59_436}>
        <Text style={styles.Text_59_436}>
          Để đảm bảo lý do bảo mật, tránh sử dụng tài khoản ảo tràn lan trên hệ
          thống, chúng tôi yêu cầu bạn phải xác minh số điện thoại hoặc địa chỉ
          email của mình trước khi tiếp tục.
        </Text>
      </View>
      <TouchableOpacity
        style={styles.TouchableOpacity_113_16}
        onPress={() =>
          this.props.navigation.navigate(getNavigationScreen("59_237"))
        }
      >
        <Text style={styles.Text_113_16}>XÁC NHẬN</Text>
      </TouchableOpacity>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: { backgroundColor: "rgba(255, 255, 255, 1)" },
  View_2: { height: hp("100%") },
  View_59_430: {
    width: wp("54.666666666666664%"),
    minWidth: wp("54.666666666666664%"),
    minHeight: hp("3.4482758620689653%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("22.8%"),
    top: hp("11.84407796101949%"),
    justifyContent: "flex-start"
  },
  Text_59_430: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 16,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_59_2373: {
    width: wp("3.2%"),
    minWidth: wp("3.2%"),
    height: hp("3.598200899550225%"),
    minHeight: hp("3.598200899550225%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.8%"),
    top: hp("2.548725637181409%")
  },
  View_59_432: {
    width: wp("84.26666666666667%"),
    minWidth: wp("84.26666666666667%"),
    height: hp("4.94752623688156%"),
    minHeight: hp("4.94752623688156%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.466666666666668%"),
    top: hp("45.12743628185907%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_59_433: {
    width: wp("84.26666666666667%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.3333333333333313%"),
    top: hp("1.4992503748125898%"),
    justifyContent: "flex-start"
  },
  Text_59_433: {
    color: "rgba(150, 145, 132, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_59_434: {
    width: wp("84%"),
    height: hp("0.29985007496251875%"),
    top: hp("4.647676161919044%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.13333333333333197%"),
    backgroundColor: "rgba(216, 216, 216, 1)",
    borderColor: "rgba(151, 151, 151, 1)",
    borderWidth: 1
  },
  View_59_435: {
    width: wp("35.199999999999996%"),
    minWidth: wp("35.199999999999996%"),
    minHeight: hp("2.6986506746626686%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("29.333333333333332%"),
    top: hp("39.88005997001499%"),
    justifyContent: "flex-start"
  },
  Text_59_435: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 12,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_59_436: {
    width: wp("87.2%"),
    minWidth: wp("87.2%"),
    minHeight: hp("14.3928035982009%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.4%"),
    top: hp("20.539730134932537%"),
    justifyContent: "flex-start"
  },
  Text_59_436: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 12,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  TouchableOpacity_113_16: {
    width: wp("24.266666666666666%"),
    minWidth: wp("24.266666666666666%"),
    minHeight: hp("4.94752623688156%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("34.93333333333333%"),
    top: hp("52.623688155922046%"),
    justifyContent: "center"
  },
  Text_113_16: {
    color: "rgba(33, 147, 176, 1)",
    fontSize: 12,
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
