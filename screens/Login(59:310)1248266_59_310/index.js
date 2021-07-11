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
      <View style={styles.View_59_311}>
        <Text style={styles.Text_59_311}>
          Đăng nhập để có thể tham gia cộng đồng một cách nhanh chóng và thuận
          tiện hơn
        </Text>
      </View>
      <View style={styles.View_59_312}>
        <Text style={styles.Text_59_312}>Đăng nhập</Text>
      </View>
      <View style={styles.View_59_313}>
        <View style={styles.View_59_314}>
          <Text style={styles.Text_59_314}>Tên đăng nhập hoặc email</Text>
        </View>
        <View style={styles.View_59_315} />
      </View>
      <View style={styles.View_59_316}>
        <Text style={styles.Text_59_316}>Mật khẩu</Text>
      </View>
      <View style={styles.View_59_317} />
      <TouchableOpacity
        style={styles.TouchableOpacity_59_318}
        onPress={() =>
          this.props.navigation.navigate(getNavigationScreen("59_429"))
        }
      >
        <Text style={styles.Text_59_318}>Bạn đã quên mật khẩu ?</Text>
      </TouchableOpacity>
      <View style={styles.View_59_319}>
        <Text style={styles.Text_59_319}>Bạn chưa có tài khoản ?</Text>
      </View>
      <View style={styles.View_59_320}>
        <Text style={styles.Text_59_320}>Hoặc đăng nhập với</Text>
      </View>
      <TouchableOpacity
        style={styles.TouchableOpacity_59_321}
        onPress={() =>
          this.props.navigation.navigate(getNavigationScreen("59_5"))
        }
      >
        <View style={styles.View_59_322} />
        <View style={styles.View_59_323}>
          <Text style={styles.Text_59_323}>ĐĂNG NHẬP</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.TouchableOpacity_59_324}
        onPress={() =>
          this.props.navigation.navigate(getNavigationScreen("59_156"))
        }
      >
        <View style={styles.View_59_325} />
        <View style={styles.View_59_326}>
          <Text style={styles.Text_59_326}>ĐĂNG KÝ TÀI KHOẢN MỚI</Text>
        </View>
      </TouchableOpacity>
      <View style={styles.View_59_327}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/aa23/5d45/9698e1a6f7ab8bf0b9046b89cd84478b"
          }}
          style={styles.ImageBackground_61_175}
        />
      </View>
      <View style={styles.View_59_352}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6f4d/368f/4a32058e3e3723e375707dabe227254d"
          }}
          style={styles.ImageBackground_61_177}
        />
      </View>
      <View style={styles.View_59_377}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/490b/72b9/8f2be1bb8bcf8b5edcd77356f98f6c28"
          }}
          style={styles.ImageBackground_61_179}
        />
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0603/e7d0/1c5aa73ef08d665a4e442c1598d741bf"
        }}
        style={styles.ImageBackground_59_2370}
      />
      <View style={styles.View_61_184}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0cca/e5ed/af3528a56aa49b63758c2f9d676f4af1"
          }}
          style={styles.ImageBackground_61_183}
        />
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: { backgroundColor: "rgba(255, 255, 255, 1)" },
  View_2: { height: hp("100%") },
  View_59_311: {
    width: wp("82.13333333333334%"),
    minWidth: wp("82.13333333333334%"),
    minHeight: hp("6.741573033707865%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8.799999999999999%"),
    top: hp("16.292134831460675%"),
    justifyContent: "flex-start"
  },
  Text_59_311: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_59_312: {
    width: wp("25.6%"),
    minWidth: wp("25.6%"),
    minHeight: hp("3.2303370786516856%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("37.6%"),
    top: hp("2.8089887640449436%"),
    justifyContent: "flex-start"
  },
  Text_59_312: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 16,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_59_313: {
    width: wp("84.26666666666667%"),
    minWidth: wp("84.26666666666667%"),
    height: hp("4.634831460674158%"),
    minHeight: hp("4.634831460674158%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.866666666666666%"),
    top: hp("30.89887640449438%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_59_314: {
    width: wp("50.13333333333333%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-0.13333333333333286%"),
    top: hp("0.9831460674157277%"),
    justifyContent: "flex-start"
  },
  Text_59_314: {
    color: "rgba(150, 145, 132, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_59_315: {
    width: wp("84%"),
    height: hp("0.2808988764044944%"),
    top: hp("4.353932584269664%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.13333333333333375%"),
    backgroundColor: "rgba(188, 188, 188, 1)",
    borderColor: "rgba(151, 151, 151, 1)",
    borderWidth: 1
  },
  View_59_316: {
    width: wp("17.866666666666667%"),
    minWidth: wp("17.866666666666667%"),
    minHeight: hp("2.6685393258426964%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8%"),
    top: hp("38.06179775280899%"),
    justifyContent: "flex-start"
  },
  Text_59_316: {
    color: "rgba(150, 145, 132, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_59_317: {
    width: wp("84%"),
    minWidth: wp("84%"),
    height: hp("0.2808988764044944%"),
    minHeight: hp("0.2808988764044944%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8%"),
    top: hp("41.43258426966292%"),
    backgroundColor: "rgba(216, 216, 216, 1)",
    borderColor: "rgba(151, 151, 151, 1)",
    borderWidth: 1
  },
  TouchableOpacity_59_318: {
    width: wp("42.93333333333334%"),
    minWidth: wp("42.93333333333334%"),
    minHeight: hp("2.528089887640449%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("27.200000000000003%"),
    top: hp("44.52247191011236%"),
    justifyContent: "flex-start"
  },
  Text_59_318: {
    color: "rgba(150, 145, 132, 1)",
    fontSize: 12,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_59_319: {
    width: wp("42.66666666666667%"),
    minWidth: wp("42.66666666666667%"),
    minHeight: hp("2.528089887640449%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("28.26666666666667%"),
    top: hp("81.03932584269663%"),
    justifyContent: "flex-start"
  },
  Text_59_319: {
    color: "rgba(150, 145, 132, 1)",
    fontSize: 12,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_59_320: {
    width: wp("47.199999999999996%"),
    minWidth: wp("47.199999999999996%"),
    minHeight: hp("3.2303370786516856%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("26.666666666666668%"),
    top: hp("63.48314606741573%"),
    justifyContent: "flex-start"
  },
  Text_59_320: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 16,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  TouchableOpacity_59_321: {
    width: wp("87.2%"),
    minWidth: wp("87.2%"),
    height: hp("7.865168539325842%"),
    minHeight: hp("7.865168539325842%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.866666666666666%"),
    top: hp("49.157303370786515%"),
    backgroundColor: "rgba(33, 147, 176, 1)",
    overflow: "hidden"
  },
  View_59_322: {
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
  View_59_323: {
    width: wp("19.733333333333334%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("33.733333333333334%"),
    top: hp("2.949438202247194%"),
    justifyContent: "flex-start"
  },
  Text_59_323: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  TouchableOpacity_59_324: {
    width: wp("87.2%"),
    minWidth: wp("87.2%"),
    height: hp("7.865168539325842%"),
    minHeight: hp("7.865168539325842%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.666666666666667%"),
    top: hp("84.97191011235955%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_59_325: {
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
  View_59_326: {
    width: wp("40.266666666666666%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("23.599999999999998%"),
    top: hp("2.949438202247194%"),
    justifyContent: "flex-start"
  },
  Text_59_326: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_59_327: {
    width: wp("13.333333333333334%"),
    minWidth: wp("13.333333333333334%"),
    height: hp("7.02247191011236%"),
    minHeight: hp("7.02247191011236%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12.533333333333333%"),
    top: hp("72.6123595505618%")
  },
  ImageBackground_61_175: {
    width: wp("13.333333333333334%"),
    minWidth: wp("13.333333333333334%"),
    height: hp("7.02247191011236%"),
    minHeight: hp("7.02247191011236%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    resizeMode: "cover"
  },
  View_59_352: {
    width: wp("13.333333333333334%"),
    minWidth: wp("13.333333333333334%"),
    height: hp("7.02247191011236%"),
    minHeight: hp("7.02247191011236%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("32.266666666666666%"),
    top: hp("69.52247191011236%")
  },
  ImageBackground_61_177: {
    width: wp("13.333333333333334%"),
    minWidth: wp("13.333333333333334%"),
    height: hp("7.02247191011236%"),
    minHeight: hp("7.02247191011236%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    resizeMode: "cover"
  },
  View_59_377: {
    width: wp("13.333333333333334%"),
    minWidth: wp("13.333333333333334%"),
    height: hp("7.02247191011236%"),
    minHeight: hp("7.02247191011236%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("53.333333333333336%"),
    top: hp("69.52247191011236%")
  },
  ImageBackground_61_179: {
    width: wp("13.333333333333334%"),
    minWidth: wp("13.333333333333334%"),
    height: hp("7.02247191011236%"),
    minHeight: hp("7.02247191011236%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    resizeMode: "cover"
  },
  ImageBackground_59_2370: {
    width: wp("3.2%"),
    minWidth: wp("3.2%"),
    height: hp("3.3707865168539324%"),
    minHeight: hp("3.3707865168539324%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.666666666666667%"),
    top: hp("2.8089887640449436%")
  },
  View_61_184: {
    width: wp("13.333333333333334%"),
    minWidth: wp("13.333333333333334%"),
    height: hp("7.02247191011236%"),
    minHeight: hp("7.02247191011236%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("74.4%"),
    top: hp("72.6123595505618%")
  },
  ImageBackground_61_183: {
    width: wp("13.333333333333334%"),
    minWidth: wp("13.333333333333334%"),
    height: hp("7.02247191011236%"),
    minHeight: hp("7.02247191011236%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
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
