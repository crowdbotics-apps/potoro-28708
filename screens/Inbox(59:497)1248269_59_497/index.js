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
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0603/e7d0/1c5aa73ef08d665a4e442c1598d741bf"
        }}
        style={styles.ImageBackground_59_2368}
      />
      <View style={styles.View_59_500}>
        <Text style={styles.Text_59_500}>Hộp thư đến</Text>
      </View>
      <TouchableOpacity
        style={styles.TouchableOpacity_59_502}
        onPress={() =>
          this.props.navigation.navigate(getNavigationScreen("59_438"))
        }
      >
        <View style={styles.View_59_503}>
          <View style={styles.View_59_510}>
            <Text style={styles.Text_59_510}>Nguyễn Văn A</Text>
          </View>
          <View style={styles.View_59_511}>
            <Text style={styles.Text_59_511}>
              Đóng tiền phòng cho anh nhé em!{" "}
            </Text>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2864/66ec/1dd0e853bfe54aaea122b241678834a2"
            }}
            style={styles.ImageBackground_59_512}
          />
          <View style={styles.View_59_513} />
        </View>
        <View style={styles.View_59_514}>
          <View style={styles.View_59_521}>
            <Text style={styles.Text_59_521}>Hồ Hữu C</Text>
          </View>
          <View style={styles.View_59_522}>
            <Text style={styles.Text_59_522}>Bạn đã bỏ lỡ một cuộc gọi</Text>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2864/66ec/1dd0e853bfe54aaea122b241678834a2"
            }}
            style={styles.ImageBackground_59_523}
          />
        </View>
        <View style={styles.View_59_525}>
          <View style={styles.View_59_532}>
            <Text style={styles.Text_59_532}>Nguyễn Thị E</Text>
          </View>
          <View style={styles.View_59_533}>
            <Text style={styles.Text_59_533}>Em chào anh</Text>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2864/66ec/1dd0e853bfe54aaea122b241678834a2"
            }}
            style={styles.ImageBackground_59_534}
          />
        </View>
        <View style={styles.View_59_535}>
          <View style={styles.View_59_542}>
            <Text style={styles.Text_59_542}>Hội thiên thần</Text>
          </View>
          <View style={styles.View_59_543}>
            <Text style={styles.Text_59_543}>Giang: Tui đẹp nhất</Text>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2864/66ec/1dd0e853bfe54aaea122b241678834a2"
            }}
            style={styles.ImageBackground_59_544}
          />
        </View>
        <View style={styles.View_59_545}>
          <View style={styles.View_59_552}>
            <Text style={styles.Text_59_552}>Lê Thị B</Text>
          </View>
          <View style={styles.View_59_553}>
            <Text style={styles.Text_59_553}>Bạn: Dạ em cảm ơn chị</Text>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2864/66ec/1dd0e853bfe54aaea122b241678834a2"
            }}
            style={styles.ImageBackground_59_554}
          />
        </View>
        <View style={styles.View_59_555}>
          <View style={styles.View_59_562}>
            <Text style={styles.Text_59_562}>Bùi Công D</Text>
          </View>
          <View style={styles.View_59_563}>
            <Text style={styles.Text_59_563}>Bạn: OK em nhé!</Text>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2864/66ec/1dd0e853bfe54aaea122b241678834a2"
            }}
            style={styles.ImageBackground_59_564}
          />
        </View>
      </TouchableOpacity>
      <View style={styles.View_64_188}>
        <View style={styles.View_64_189}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d6ff/3b6f/2b961e58258e99fcacc52d543683d7b7"
            }}
            style={styles.ImageBackground_64_190}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b508/b684/02f6676126aaeb8be61bd5d84a0881a1"
            }}
            style={styles.ImageBackground_64_191}
          />
        </View>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/67f6/3501/1d642f77eb70f661a197c845dec7b6d2"
        }}
        style={styles.ImageBackground_59_565}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/67f6/3501/1d642f77eb70f661a197c845dec7b6d2"
        }}
        style={styles.ImageBackground_59_566}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/03b1/7b9e/59494ff98984eaa873cbffdf296375d1"
        }}
        style={styles.ImageBackground_59_567}
      />
      <View style={styles.View_64_168}>
        <View style={styles.View_64_169}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d6ff/3b6f/2b961e58258e99fcacc52d543683d7b7"
            }}
            style={styles.ImageBackground_64_170}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b508/b684/02f6676126aaeb8be61bd5d84a0881a1"
            }}
            style={styles.ImageBackground_64_171}
          />
        </View>
      </View>
      <View style={styles.View_64_184}>
        <View style={styles.View_64_185}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d6ff/3b6f/2b961e58258e99fcacc52d543683d7b7"
            }}
            style={styles.ImageBackground_64_186}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b2db/2878/330298368ced5dbc059e70b7a3ed38e2"
            }}
            style={styles.ImageBackground_64_193}
          />
        </View>
      </View>
      <View style={styles.View_64_180}>
        <View style={styles.View_64_181}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d6ff/3b6f/2b961e58258e99fcacc52d543683d7b7"
            }}
            style={styles.ImageBackground_64_182}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f111/df3a/8438d90884c50825d86ee5430767f868"
            }}
            style={styles.ImageBackground_64_183}
          />
        </View>
      </View>
      <View style={styles.View_64_176}>
        <View style={styles.View_64_177}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d6ff/3b6f/2b961e58258e99fcacc52d543683d7b7"
            }}
            style={styles.ImageBackground_64_178}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b2db/2878/330298368ced5dbc059e70b7a3ed38e2"
            }}
            style={styles.ImageBackground_64_179}
          />
        </View>
      </View>
      <View style={styles.View_64_172}>
        <View style={styles.View_64_173}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d6ff/3b6f/2b961e58258e99fcacc52d543683d7b7"
            }}
            style={styles.ImageBackground_64_174}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b508/b684/02f6676126aaeb8be61bd5d84a0881a1"
            }}
            style={styles.ImageBackground_64_175}
          />
        </View>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: { backgroundColor: "rgba(255, 255, 255, 1)" },
  View_2: { height: hp("100%") },
  ImageBackground_59_2368: {
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
  View_59_500: {
    width: wp("38.666666666666664%"),
    minWidth: wp("38.666666666666664%"),
    minHeight: hp("3.932584269662921%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("30.666666666666664%"),
    top: hp("2.8089887640449436%"),
    justifyContent: "center"
  },
  Text_59_500: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  TouchableOpacity_59_502: {
    width: wp("90.66666666666666%"),
    minWidth: wp("90.66666666666666%"),
    height: hp("49.01685393258427%"),
    minHeight: hp("49.01685393258427%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.2%"),
    top: hp("9.129213483146067%")
  },
  View_59_503: {
    width: wp("90.66666666666666%"),
    minWidth: wp("90.66666666666666%"),
    height: hp("6.882022471910113%"),
    minHeight: hp("6.882022471910113%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_59_510: {
    width: wp("75.46666666666667%"),
    minWidth: wp("75.46666666666667%"),
    minHeight: hp("2.8089887640449436%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("15.2%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_59_510: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_59_511: {
    width: wp("50.93333333333333%"),
    minWidth: wp("50.93333333333333%"),
    minHeight: hp("2.8089887640449436%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("15.2%"),
    top: hp("2.808988764044944%"),
    justifyContent: "flex-start"
  },
  Text_59_511: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_59_512: {
    width: wp("89.35064290364583%"),
    minWidth: wp("89.35064290364583%"),
    height: hp("0%"),
    minHeight: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("6.882022471910112%")
  },
  View_59_513: {
    width: wp("5.333333333333334%"),
    minWidth: wp("5.333333333333334%"),
    height: hp("2.8089887640449436%"),
    minHeight: hp("2.8089887640449436%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("84%"),
    top: hp("0%")
  },
  View_59_514: {
    width: wp("90.66666666666666%"),
    minWidth: wp("90.66666666666666%"),
    height: hp("6.882022471910113%"),
    minHeight: hp("6.882022471910113%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("25.280898876404493%")
  },
  View_59_521: {
    width: wp("75.46666666666667%"),
    minWidth: wp("75.46666666666667%"),
    minHeight: hp("2.8089887640449436%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("15.2%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_59_521: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_59_522: {
    width: wp("50.93333333333333%"),
    minWidth: wp("50.93333333333333%"),
    minHeight: hp("2.8089887640449436%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("15.2%"),
    top: hp("2.8089887640449476%"),
    justifyContent: "flex-start"
  },
  Text_59_522: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_59_523: {
    width: wp("89.35064290364583%"),
    minWidth: wp("89.35064290364583%"),
    height: hp("0%"),
    minHeight: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("6.882022471910112%")
  },
  View_59_525: {
    width: wp("90.66666666666666%"),
    minWidth: wp("90.66666666666666%"),
    height: hp("6.882022471910113%"),
    minHeight: hp("6.882022471910113%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("42.13483146067415%")
  },
  View_59_532: {
    width: wp("75.46666666666667%"),
    minWidth: wp("75.46666666666667%"),
    minHeight: hp("2.8089887640449436%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("15.2%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_59_532: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_59_533: {
    width: wp("50.93333333333333%"),
    minWidth: wp("50.93333333333333%"),
    minHeight: hp("2.8089887640449436%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("15.2%"),
    top: hp("2.8089887640449547%"),
    justifyContent: "flex-start"
  },
  Text_59_533: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_59_534: {
    width: wp("89.35064290364583%"),
    minWidth: wp("89.35064290364583%"),
    height: hp("0%"),
    minHeight: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("6.882022471910126%")
  },
  View_59_535: {
    width: wp("90.66666666666666%"),
    minWidth: wp("90.66666666666666%"),
    height: hp("6.882022471910113%"),
    minHeight: hp("6.882022471910113%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("16.853932584269664%")
  },
  View_59_542: {
    width: wp("75.46666666666667%"),
    minWidth: wp("75.46666666666667%"),
    minHeight: hp("2.8089887640449436%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("15.2%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_59_542: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_59_543: {
    width: wp("50.93333333333333%"),
    minWidth: wp("50.93333333333333%"),
    minHeight: hp("2.8089887640449436%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("15.2%"),
    top: hp("2.808988764044944%"),
    justifyContent: "flex-start"
  },
  Text_59_543: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_59_544: {
    width: wp("89.35064290364583%"),
    minWidth: wp("89.35064290364583%"),
    height: hp("0%"),
    minHeight: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("6.882022471910112%")
  },
  View_59_545: {
    width: wp("90.66666666666666%"),
    minWidth: wp("90.66666666666666%"),
    height: hp("6.882022471910113%"),
    minHeight: hp("6.882022471910113%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("8.426966292134832%")
  },
  View_59_552: {
    width: wp("75.46666666666667%"),
    minWidth: wp("75.46666666666667%"),
    minHeight: hp("2.8089887640449436%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("15.2%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_59_552: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_59_553: {
    width: wp("50.93333333333333%"),
    minWidth: wp("50.93333333333333%"),
    minHeight: hp("2.8089887640449436%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("15.2%"),
    top: hp("2.808988764044944%"),
    justifyContent: "flex-start"
  },
  Text_59_553: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_59_554: {
    width: wp("89.35064290364583%"),
    minWidth: wp("89.35064290364583%"),
    height: hp("0%"),
    minHeight: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("6.882022471910112%")
  },
  View_59_555: {
    width: wp("90.66666666666666%"),
    minWidth: wp("90.66666666666666%"),
    height: hp("6.882022471910113%"),
    minHeight: hp("6.882022471910113%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("33.70786516853933%")
  },
  View_59_562: {
    width: wp("75.46666666666667%"),
    minWidth: wp("75.46666666666667%"),
    minHeight: hp("2.8089887640449436%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("15.2%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_59_562: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_59_563: {
    width: wp("50.93333333333333%"),
    minWidth: wp("50.93333333333333%"),
    minHeight: hp("2.8089887640449436%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("15.2%"),
    top: hp("2.8089887640449405%"),
    justifyContent: "flex-start"
  },
  Text_59_563: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_59_564: {
    width: wp("89.35064290364583%"),
    minWidth: wp("89.35064290364583%"),
    height: hp("0%"),
    minHeight: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("6.882022471910112%")
  },
  View_64_188: {
    width: wp("13.333333333333334%"),
    minWidth: wp("13.333333333333334%"),
    height: hp("7.02247191011236%"),
    minHeight: hp("7.02247191011236%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.2%"),
    top: hp("42.13483146067416%")
  },
  View_64_189: {
    width: wp("13.333333333333334%"),
    minWidth: wp("13.333333333333334%"),
    height: hp("7.02247191011236%"),
    minHeight: hp("7.02247191011236%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_64_190: {
    width: wp("13.333333333333334%"),
    minWidth: wp("13.333333333333334%"),
    height: hp("7.02247191011236%"),
    minHeight: hp("7.02247191011236%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_64_191: {
    width: wp("8.421052551269531%"),
    minWidth: wp("8.421052551269531%"),
    height: hp("4.435245374615273%"),
    minHeight: hp("4.435245374615273%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.5263020833333325%"),
    top: hp("1.2566470028309311%"),
    resizeMode: "cover"
  },
  ImageBackground_59_565: {
    width: wp("5.333333333333334%"),
    minWidth: wp("5.333333333333334%"),
    height: hp("2.8089887640449436%"),
    minHeight: hp("2.8089887640449436%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("87.2%"),
    top: hp("43.258426966292134%"),
    resizeMode: "cover"
  },
  ImageBackground_59_566: {
    width: wp("5.333333333333334%"),
    minWidth: wp("5.333333333333334%"),
    height: hp("2.8089887640449436%"),
    minHeight: hp("2.8089887640449436%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("87.73333333333333%"),
    top: hp("18.96067415730337%"),
    resizeMode: "cover"
  },
  ImageBackground_59_567: {
    width: wp("8%"),
    height: hp("4.213483146067416%"),
    top: hp("2.8089887640449436%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("85.86666666666667%")
  },
  View_64_168: {
    width: wp("13.333333333333334%"),
    minWidth: wp("13.333333333333334%"),
    height: hp("7.02247191011236%"),
    minHeight: hp("7.02247191011236%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.2%"),
    top: hp("8.426966292134832%")
  },
  View_64_169: {
    width: wp("13.333333333333334%"),
    minWidth: wp("13.333333333333334%"),
    height: hp("7.02247191011236%"),
    minHeight: hp("7.02247191011236%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_64_170: {
    width: wp("13.333333333333334%"),
    minWidth: wp("13.333333333333334%"),
    height: hp("7.02247191011236%"),
    minHeight: hp("7.02247191011236%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_64_171: {
    width: wp("8.421052551269531%"),
    minWidth: wp("8.421052551269531%"),
    height: hp("4.435245374615273%"),
    minHeight: hp("4.435245374615273%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.5263020833333325%"),
    top: hp("1.2566555751843396%"),
    resizeMode: "cover"
  },
  View_64_184: {
    width: wp("13.333333333333334%"),
    minWidth: wp("13.333333333333334%"),
    height: hp("7.02247191011236%"),
    minHeight: hp("7.02247191011236%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.666666666666667%"),
    top: hp("50.56179775280899%")
  },
  View_64_185: {
    width: wp("13.333333333333334%"),
    minWidth: wp("13.333333333333334%"),
    height: hp("7.02247191011236%"),
    minHeight: hp("7.02247191011236%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_64_186: {
    width: wp("13.333333333333334%"),
    minWidth: wp("13.333333333333334%"),
    height: hp("7.02247191011236%"),
    minHeight: hp("7.02247191011236%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_64_193: {
    width: wp("8.421052551269531%"),
    minWidth: wp("8.421052551269531%"),
    height: hp("4.435245374615273%"),
    minHeight: hp("4.435245374615273%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.5263020833333334%"),
    top: hp("1.2566555751843396%"),
    resizeMode: "cover"
  },
  View_64_180: {
    width: wp("13.333333333333334%"),
    minWidth: wp("13.333333333333334%"),
    height: hp("7.02247191011236%"),
    minHeight: hp("7.02247191011236%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.666666666666667%"),
    top: hp("25.280898876404496%")
  },
  View_64_181: {
    width: wp("13.333333333333334%"),
    minWidth: wp("13.333333333333334%"),
    height: hp("7.02247191011236%"),
    minHeight: hp("7.02247191011236%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_64_182: {
    width: wp("13.333333333333334%"),
    minWidth: wp("13.333333333333334%"),
    height: hp("7.02247191011236%"),
    minHeight: hp("7.02247191011236%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_64_183: {
    width: wp("8.421052551269531%"),
    minWidth: wp("8.421052551269531%"),
    height: hp("4.435245374615273%"),
    minHeight: hp("4.435245374615273%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.5263020833333334%"),
    top: hp("1.2566470028309347%"),
    resizeMode: "cover"
  },
  View_64_176: {
    width: wp("13.333333333333334%"),
    minWidth: wp("13.333333333333334%"),
    height: hp("7.02247191011236%"),
    minHeight: hp("7.02247191011236%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.666666666666667%"),
    top: hp("16.853932584269664%")
  },
  View_64_177: {
    width: wp("13.333333333333334%"),
    minWidth: wp("13.333333333333334%"),
    height: hp("7.02247191011236%"),
    minHeight: hp("7.02247191011236%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_64_178: {
    width: wp("13.333333333333334%"),
    minWidth: wp("13.333333333333334%"),
    height: hp("7.02247191011236%"),
    minHeight: hp("7.02247191011236%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_64_179: {
    width: wp("8.421052551269531%"),
    minWidth: wp("8.421052551269531%"),
    height: hp("4.435245374615273%"),
    minHeight: hp("4.435245374615273%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.5263020833333334%"),
    top: hp("1.2566555751843396%"),
    resizeMode: "cover"
  },
  View_64_172: {
    width: wp("13.333333333333334%"),
    minWidth: wp("13.333333333333334%"),
    height: hp("7.02247191011236%"),
    minHeight: hp("7.02247191011236%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.2%"),
    top: hp("33.70786516853933%")
  },
  View_64_173: {
    width: wp("13.333333333333334%"),
    minWidth: wp("13.333333333333334%"),
    height: hp("7.02247191011236%"),
    minHeight: hp("7.02247191011236%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_64_174: {
    width: wp("13.333333333333334%"),
    minWidth: wp("13.333333333333334%"),
    height: hp("7.02247191011236%"),
    minHeight: hp("7.02247191011236%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_64_175: {
    width: wp("8.421052551269531%"),
    minWidth: wp("8.421052551269531%"),
    height: hp("4.435245374615273%"),
    minHeight: hp("4.435245374615273%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.5263020833333325%"),
    top: hp("1.2566470028309311%"),
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
