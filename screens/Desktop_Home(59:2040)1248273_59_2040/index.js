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
      <View style={styles.View_59_2041}>
        <View style={styles.View_59_2042} />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8a79/8ff4/9fb5a3a9a1623e4aa7958027dd98949a"
          }}
          style={styles.ImageBackground_59_2587}
        />
      </View>
      <View style={styles.View_59_2589}>
        <View style={styles.View_59_2590} />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1fb8/3c2f/161485975288756b5357a5cef392cfae"
          }}
          style={styles.ImageBackground_59_2591}
        />
        <View style={styles.View_59_2594}>
          <Text style={styles.Text_59_2594}>
            Tìm phòng trọ, người dùng, địa chỉ thuê...
          </Text>
        </View>
      </View>
      <View style={styles.View_59_2052}>
        <Text style={styles.Text_59_2052}>􀌇</Text>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f902/24af/ffb957b9a1464b364f46cfd6196c1649"
        }}
        style={styles.ImageBackground_64_245}
      />
      <View style={styles.View_59_2060}>
        <Text style={styles.Text_59_2060}>Chào mừng bạn đến với FTRO</Text>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b8fc/e48f/478e2782d88eabf73514cf93c4a9a56c"
        }}
        style={styles.ImageBackground_59_2064}
      />
      <View style={styles.View_59_2071}>
        <View style={styles.View_59_2072}>
          <View style={styles.View_59_2073}>
            <Text style={styles.Text_59_2073}>
              Địa chỉ: 86 Trần Hưng Đạo, phường Hòa Hải, quận Ngũ Hành Sơn, Đà
              Nẵng
            </Text>
          </View>
          <View style={styles.View_59_2074}>
            <Text style={styles.Text_59_2074}>
              Cho thuê trọ sinh viên giá rẻ gần Đại học Việt Hàn
            </Text>
          </View>
          <View style={styles.View_59_2100}>
            <View style={styles.View_59_2101} />
            <View style={styles.View_59_2102}>
              <Text style={styles.Text_59_2102}>Còn trống</Text>
            </View>
          </View>
          <View style={styles.View_59_2103}>
            <View style={styles.View_59_2104} />
            <View style={styles.View_59_2105}>
              <Text style={styles.Text_59_2105}>Liên hệ</Text>
            </View>
          </View>
          <View style={styles.View_59_2106}>
            <View style={styles.View_59_2107} />
            <View style={styles.View_59_2108}>
              <Text style={styles.Text_59_2108}>1.7M</Text>
            </View>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1acc/08e7/daf69b852f91eaf216353c9c4ff1b0c8"
            }}
            style={styles.ImageBackground_59_2109}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1acc/08e7/daf69b852f91eaf216353c9c4ff1b0c8"
            }}
            style={styles.ImageBackground_64_211}
          />
        </View>
        <View style={styles.View_59_2110}>
          <View style={styles.View_59_2111}>
            <Text style={styles.Text_59_2111}>
              Địa chỉ: Khu đô thị FPT, phường Hòa Hải, quận Ngũ Hành Sơn, Đà
              Nẵng{" "}
            </Text>
          </View>
          <View style={styles.View_59_2112}>
            <Text style={styles.Text_59_2112}>
              Căn hộ cao cấp khu đô thị FPT Đà Nẵng
            </Text>
          </View>
          <View style={styles.View_59_2138}>
            <View style={styles.View_59_2139} />
            <View style={styles.View_59_2140}>
              <Text style={styles.Text_59_2140}>Còn trống</Text>
            </View>
          </View>
          <View style={styles.View_59_2141}>
            <View style={styles.View_59_2142} />
            <View style={styles.View_59_2143}>
              <Text style={styles.Text_59_2143}>Liên hệ</Text>
            </View>
          </View>
          <View style={styles.View_59_2144}>
            <View style={styles.View_59_2145} />
            <View style={styles.View_59_2146}>
              <Text style={styles.Text_59_2146}>4.6M</Text>
            </View>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1acc/08e7/daf69b852f91eaf216353c9c4ff1b0c8"
            }}
            style={styles.ImageBackground_59_2147}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4144/4cee/d0c86ba4f7bd24e29b7fe16b65dbfcc0"
            }}
            style={styles.ImageBackground_64_210}
          />
        </View>
        <View style={styles.View_59_2148}>
          <View style={styles.View_59_2149}>
            <Text style={styles.Text_59_2149}>
              Địa chỉ: 12 Nam Kỳ Khởi Nghĩa, phường Hòa Hải, quận Ngũ Hành Sơn,
              Đà Nẵng{" "}
            </Text>
          </View>
          <View style={styles.View_59_2150}>
            <Text style={styles.Text_59_2150}>
              Căn hộ sinh viên gần Đại học FPT Đà Nẵng
            </Text>
          </View>
          <View style={styles.View_59_2176}>
            <View style={styles.View_59_2177} />
            <View style={styles.View_59_2178}>
              <Text style={styles.Text_59_2178}>Hết phòng</Text>
            </View>
          </View>
          <View style={styles.View_59_2179}>
            <View style={styles.View_59_2180} />
            <View style={styles.View_59_2181}>
              <Text style={styles.Text_59_2181}>Liên hệ</Text>
            </View>
          </View>
          <View style={styles.View_59_2182}>
            <View style={styles.View_59_2183} />
            <View style={styles.View_59_2184}>
              <Text style={styles.Text_59_2184}>2.2M</Text>
            </View>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1acc/08e7/daf69b852f91eaf216353c9c4ff1b0c8"
            }}
            style={styles.ImageBackground_59_2185}
          />
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2b57/3b07/dcff6090ce51cb75d4e910bdc416e691"
          }}
          style={styles.ImageBackground_59_2186}
        />
      </View>
      <View style={styles.View_59_2188}>
        <View style={styles.View_59_2191}>
          <Text style={styles.Text_59_2191}>Phòng trọ được xem nhiều</Text>
        </View>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/85d2/b90d/596e4abf734c984f9ff9fc91f6f374a0"
        }}
        style={styles.ImageBackground_59_2588}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/dd45/8b56/c769a017d339835272a2194a1c956be3"
        }}
        style={styles.ImageBackground_59_2595}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/db5e/520f/603662ed9f0da1c8bc9a381dc48e6cb0"
        }}
        style={styles.ImageBackground_64_212}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0733/be77/ba5a1d4b7a50675496a3e7cd03c54cd8"
        }}
        style={styles.ImageBackground_64_215}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/da74/e98e/76b959879dd5bd3a6687baa3ed2e14d5"
        }}
        style={styles.ImageBackground_64_217}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a3c5/2efb/c146c61176f558cafbd12b51a909c627"
        }}
        style={styles.ImageBackground_64_243}
      />
      <View style={styles.View_64_246}>
        <Text style={styles.Text_64_246}>TRANG CHỦ</Text>
      </View>
      <View style={styles.View_64_247}>
        <Text style={styles.Text_64_247}>GIỚI THIỆU</Text>
      </View>
      <View style={styles.View_64_249}>
        <Text style={styles.Text_64_249}>LIÊN HỆ</Text>
      </View>
      <View style={styles.View_64_248}>
        <Text style={styles.Text_64_248}>TÌM KIẾM</Text>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b040/6882/2a053521e3b949fd7842a46ff51e7f9e"
        }}
        style={styles.ImageBackground_64_262}
      />
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: { backgroundColor: "rgba(255, 255, 255, 1)" },
  View_2: { height: hp("240.0273224043716%") },
  View_59_2041: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("11.612021857923498%"),
    minHeight: hp("11.612021857923498%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_59_2042: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("11.612021857923498%"),
    minHeight: hp("11.612021857923498%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(244, 244, 244, 1)"
  },
  ImageBackground_59_2587: {
    width: wp("3.125%"),
    minWidth: wp("3.125%"),
    height: hp("8.19672131147541%"),
    minHeight: hp("8.19672131147541%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.0416666666666665%"),
    top: hp("1.366120218579235%"),
    resizeMode: "cover"
  },
  View_59_2589: {
    width: wp("39.947916666666664%"),
    minWidth: wp("39.947916666666664%"),
    height: hp("6.557377049180328%"),
    minHeight: hp("6.557377049180328%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("50.78125%"),
    top: hp("2.459016393442623%")
  },
  View_59_2590: {
    width: wp("39.947916666666664%"),
    minWidth: wp("39.947916666666664%"),
    height: hp("6.557377049180328%"),
    minHeight: hp("6.557377049180328%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(244, 244, 244, 1)",
    borderColor: "rgba(150, 145, 132, 1)",
    borderWidth: 1,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10
  },
  ImageBackground_59_2591: {
    width: wp("2.083333333333333%"),
    height: hp("5.46448087431694%"),
    top: hp("0.7978262145662569%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_59_2594: {
    width: wp("35.88763554890951%"),
    minWidth: wp("35.88763554890951%"),
    minHeight: hp("6.0109289617486334%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.060281117757157%"),
    top: hp("0.4098360655737703%"),
    justifyContent: "center"
  },
  Text_59_2594: {
    color: "rgba(135, 122, 122, 1)",
    fontSize: 19,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_59_2052: {
    width: wp("1.4583333333333333%"),
    minWidth: wp("1.4583333333333333%"),
    minHeight: hp("3.825136612021858%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("97.86458333333333%"),
    top: hp("3.6885245901639343%"),
    justifyContent: "center"
  },
  Text_59_2052: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 16,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.40799999237060547,
    textTransform: "none"
  },
  ImageBackground_64_245: {
    width: wp("29.479166666666668%"),
    minWidth: wp("29.479166666666668%"),
    height: hp("54.644808743169406%"),
    minHeight: hp("54.644808743169406%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("70.52083333333333%"),
    top: hp("36.885245901639344%"),
    resizeMode: "cover"
  },
  View_59_2060: {
    width: wp("100%"),
    minWidth: wp("100%"),
    minHeight: hp("11.065573770491802%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("14.48087431693989%"),
    justifyContent: "flex-start"
  },
  Text_59_2060: {
    color: "rgba(33, 147, 176, 1)",
    fontSize: 38,
    fontWeight: "900",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_59_2064: {
    width: wp("16.09375%"),
    minWidth: wp("16.09375%"),
    height: hp("4.371584699453552%"),
    minHeight: hp("4.371584699453552%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("41.92708333333333%"),
    top: hp("105.32786885245902%")
  },
  View_59_2071: {
    width: wp("74.0625%"),
    minWidth: wp("74.0625%"),
    height: hp("112.31500177435537%"),
    minHeight: hp("112.31500177435537%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.3020833333333335%"),
    top: hp("117.4863387978142%")
  },
  View_59_2072: {
    width: wp("74.0625%"),
    minWidth: wp("74.0625%"),
    height: hp("112.31500177435537%"),
    minHeight: hp("112.31500177435537%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_59_2073: {
    width: wp("52.44791666666667%"),
    minWidth: wp("52.44791666666667%"),
    minHeight: hp("11.748633879781421%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("21.614583333333332%"),
    top: hp("13.934426229508205%"),
    justifyContent: "flex-start"
  },
  Text_59_2073: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 29,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_59_2074: {
    width: wp("52.46110598246256%"),
    minWidth: wp("52.46110598246256%"),
    minHeight: hp("10.031514610749124%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("21.510416666666668%"),
    top: hp("4.644808743169392%"),
    justifyContent: "flex-start"
  },
  Text_59_2074: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 35,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_59_2100: {
    width: wp("19.919443130493164%"),
    minWidth: wp("19.919443130493164%"),
    height: hp("7.442735453120998%"),
    minHeight: hp("7.442735453120998%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("52.65833536783854%"),
    top: hp("27.829354708311996%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_59_2101: {
    width: wp("19.919443130493164%"),
    height: hp("7.442735453120998%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(1, 132, 16, 1)",
    borderColor: "rgba(151, 151, 151, 1)",
    borderWidth: 1
  },
  View_59_2102: {
    width: wp("19.919443130493164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("2.049180327868868%"),
    justifyContent: "center"
  },
  Text_59_2102: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 19,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_59_2103: {
    width: wp("13.60833485921224%"),
    minWidth: wp("13.60833485921224%"),
    height: hp("7.442735453120998%"),
    minHeight: hp("7.442735453120998%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("21.49720827738444%"),
    top: hp("27.829354708311996%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_59_2104: {
    width: wp("13.60833485921224%"),
    height: hp("7.442735453120998%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(33, 147, 176, 1)",
    borderColor: "rgba(151, 151, 151, 1)",
    borderWidth: 1
  },
  View_59_2105: {
    width: wp("13.60833485921224%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("2.049180327868868%"),
    justifyContent: "center"
  },
  Text_59_2105: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 19,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_59_2106: {
    width: wp("15.580555597941082%"),
    minWidth: wp("15.580555597941082%"),
    height: hp("7.442735453120998%"),
    minHeight: hp("7.442735453120998%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("36.091664632161454%"),
    top: hp("27.829354708311996%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_59_2107: {
    width: wp("15.580555597941082%"),
    height: hp("7.442735453120998%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(234, 173, 2, 1)",
    borderColor: "rgba(151, 151, 151, 1)",
    borderWidth: 1
  },
  View_59_2108: {
    width: wp("15.580555597941082%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("2.049180327868868%"),
    justifyContent: "center"
  },
  Text_59_2108: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 22,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_59_2109: {
    width: wp("73.95834604899089%"),
    minWidth: wp("73.95834604899089%"),
    height: hp("0.2931452839752364%"),
    minHeight: hp("0.2931452839752364%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_64_211: {
    width: wp("73.95834604899089%"),
    minWidth: wp("73.95834604899089%"),
    height: hp("0.2931452839752364%"),
    minHeight: hp("0.2931452839752364%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("112.02185792349727%")
  },
  View_59_2110: {
    width: wp("73.95834604899089%"),
    minWidth: wp("73.95834604899089%"),
    height: hp("35.2720917248335%"),
    minHeight: hp("35.2720917248335%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("37.43169398907105%")
  },
  View_59_2111: {
    width: wp("52.44791666666667%"),
    minWidth: wp("52.44791666666667%"),
    minHeight: hp("11.065573770491802%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("21.510416666666668%"),
    top: hp("13.934426229508205%"),
    justifyContent: "center"
  },
  Text_59_2111: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 29,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_59_2112: {
    width: wp("52.44791666666667%"),
    minWidth: wp("52.44791666666667%"),
    minHeight: hp("12.295081967213115%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("21.510416666666668%"),
    top: hp("3.1420765027322375%"),
    justifyContent: "flex-start"
  },
  Text_59_2112: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 35,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_59_2138: {
    width: wp("19.919443130493164%"),
    minWidth: wp("19.919443130493164%"),
    height: hp("7.442735453120998%"),
    minHeight: hp("7.442735453120998%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("52.65833536783854%"),
    top: hp("27.829354708311996%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_59_2139: {
    width: wp("19.919443130493164%"),
    height: hp("7.442735453120998%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(1, 132, 16, 1)",
    borderColor: "rgba(151, 151, 151, 1)",
    borderWidth: 1
  },
  View_59_2140: {
    width: wp("19.919443130493164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("2.0491803278688394%"),
    justifyContent: "center"
  },
  Text_59_2140: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 19,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_59_2141: {
    width: wp("13.60833485921224%"),
    minWidth: wp("13.60833485921224%"),
    height: hp("7.442735453120998%"),
    minHeight: hp("7.442735453120998%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("21.49720827738444%"),
    top: hp("27.829354708311996%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_59_2142: {
    width: wp("13.60833485921224%"),
    height: hp("7.442735453120998%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(33, 147, 176, 1)",
    borderColor: "rgba(151, 151, 151, 1)",
    borderWidth: 1
  },
  View_59_2143: {
    width: wp("13.60833485921224%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("2.0491803278688394%"),
    justifyContent: "center"
  },
  Text_59_2143: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 19,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_59_2144: {
    width: wp("15.580555597941082%"),
    minWidth: wp("15.580555597941082%"),
    height: hp("7.442735453120998%"),
    minHeight: hp("7.442735453120998%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("36.091664632161454%"),
    top: hp("27.829354708311996%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_59_2145: {
    width: wp("15.580555597941082%"),
    height: hp("7.442735453120998%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(234, 173, 2, 1)",
    borderColor: "rgba(151, 151, 151, 1)",
    borderWidth: 1
  },
  View_59_2146: {
    width: wp("15.580555597941082%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("2.0491803278688394%"),
    justifyContent: "center"
  },
  Text_59_2146: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 22,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_59_2147: {
    width: wp("73.95834604899089%"),
    minWidth: wp("73.95834604899089%"),
    height: hp("0.2931452839752364%"),
    minHeight: hp("0.2931452839752364%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_64_210: {
    width: wp("20.104166666666668%"),
    minWidth: wp("20.104166666666668%"),
    height: hp("31.420765027322407%"),
    minHeight: hp("31.420765027322407%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.10416666666666652%"),
    top: hp("3.1420765027322375%"),
    resizeMode: "cover"
  },
  View_59_2148: {
    width: wp("73.95833333333334%"),
    minWidth: wp("73.95833333333334%"),
    height: hp("35.27209589390156%"),
    minHeight: hp("35.27209589390156%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.10416666666666652%"),
    top: hp("74.18032786885249%")
  },
  View_59_2149: {
    width: wp("52.44791666666667%"),
    minWidth: wp("52.44791666666667%"),
    minHeight: hp("13.114754098360656%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("21.510416666666664%"),
    top: hp("13.251366120218535%"),
    justifyContent: "flex-start"
  },
  Text_59_2149: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 29,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_59_2150: {
    width: wp("52.46110598246256%"),
    minWidth: wp("52.46110598246256%"),
    minHeight: hp("10.031514610749124%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("21.49720509847005%"),
    top: hp("2.437654088755096%"),
    justifyContent: "flex-start"
  },
  Text_59_2150: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 35,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_59_2176: {
    width: wp("19.919443130493164%"),
    minWidth: wp("19.919443130493164%"),
    height: hp("7.442735453120998%"),
    minHeight: hp("7.442735453120998%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("52.658335367838546%"),
    top: hp("27.82935470831194%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_59_2177: {
    width: wp("19.919443130493164%"),
    height: hp("7.442735453120998%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(240, 72, 72, 1)",
    borderColor: "rgba(151, 151, 151, 1)",
    borderWidth: 1
  },
  View_59_2178: {
    width: wp("19.919443130493164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("2.049180327868868%"),
    justifyContent: "center"
  },
  Text_59_2178: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 19,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_59_2179: {
    width: wp("13.60833485921224%"),
    minWidth: wp("13.60833485921224%"),
    height: hp("7.442735453120998%"),
    minHeight: hp("7.442735453120998%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("21.497208277384438%"),
    top: hp("27.82935470831194%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_59_2180: {
    width: wp("13.60833485921224%"),
    height: hp("7.442735453120998%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(33, 147, 176, 1)",
    borderColor: "rgba(151, 151, 151, 1)",
    borderWidth: 1
  },
  View_59_2181: {
    width: wp("13.60833485921224%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("2.049180327868868%"),
    justifyContent: "center"
  },
  Text_59_2181: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 19,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_59_2182: {
    width: wp("15.580555597941082%"),
    minWidth: wp("15.580555597941082%"),
    height: hp("7.442735453120998%"),
    minHeight: hp("7.442735453120998%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("36.09166463216146%"),
    top: hp("27.82935470831194%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_59_2183: {
    width: wp("15.580555597941082%"),
    height: hp("7.442735453120998%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(234, 173, 2, 1)",
    borderColor: "rgba(151, 151, 151, 1)",
    borderWidth: 1
  },
  View_59_2184: {
    width: wp("15.580555597941082%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("2.049180327868868%"),
    justifyContent: "center"
  },
  Text_59_2184: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 23,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_59_2185: {
    width: wp("73.95834604899089%"),
    minWidth: wp("73.95834604899089%"),
    height: hp("0.2931452839752364%"),
    minHeight: hp("0.2931452839752364%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_59_2186: {
    width: wp("0%"),
    minWidth: wp("0%"),
    height: hp("111.88524590163935%"),
    minHeight: hp("111.88524590163935%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("73.95833333333333%"),
    top: hp("0.27322404371587083%")
  },
  View_59_2188: {
    width: wp("22.1875%"),
    minWidth: wp("22.1875%"),
    height: hp("5.737704918032787%"),
    minHeight: hp("5.737704918032787%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("76.5625%"),
    top: hp("109.69945355191257%")
  },
  View_59_2191: {
    width: wp("22.1875%"),
    minWidth: wp("22.1875%"),
    minHeight: hp("5.737704918032787%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_59_2191: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 29,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_59_2588: {
    width: wp("2.083333333333333%"),
    minWidth: wp("2.083333333333333%"),
    height: hp("5.46448087431694%"),
    minHeight: hp("5.46448087431694%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("95.15625%"),
    top: hp("3.1420765027322406%"),
    resizeMode: "cover"
  },
  ImageBackground_59_2595: {
    width: wp("20.208333333333332%"),
    minWidth: wp("20.208333333333332%"),
    height: hp("30.737704918032787%"),
    minHeight: hp("30.737704918032787%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.3020833333333335%"),
    top: hp("121.99453551912569%"),
    resizeMode: "cover"
  },
  ImageBackground_64_212: {
    width: wp("20.104166666666668%"),
    minWidth: wp("20.104166666666668%"),
    height: hp("32.78688524590164%"),
    minHeight: hp("32.78688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.40625%"),
    top: hp("194.12568306010928%"),
    resizeMode: "cover"
  },
  ImageBackground_64_215: {
    width: wp("22.239583333333332%"),
    minWidth: wp("22.239583333333332%"),
    height: hp("50%"),
    minHeight: hp("50%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("76.51041666666667%"),
    top: hp("117.75956284153007%"),
    resizeMode: "cover"
  },
  ImageBackground_64_217: {
    width: wp("22.239583333333332%"),
    minWidth: wp("22.239583333333332%"),
    height: hp("59.699453551912576%"),
    minHeight: hp("59.699453551912576%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("76.51041666666667%"),
    top: hp("170.08196721311475%"),
    resizeMode: "cover"
  },
  ImageBackground_64_243: {
    width: wp("29.479166666666668%"),
    minWidth: wp("29.479166666666668%"),
    height: hp("54.644808743169406%"),
    minHeight: hp("54.644808743169406%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("36.885245901639344%"),
    resizeMode: "cover"
  },
  View_64_246: {
    width: wp("8.28125%"),
    minWidth: wp("8.28125%"),
    minHeight: hp("5.327868852459016%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.916666666666666%"),
    top: hp("3.825136612021858%"),
    justifyContent: "flex-start"
  },
  Text_64_246: {
    color: "rgba(33, 147, 176, 1)",
    fontSize: 19,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_64_247: {
    width: wp("8.28125%"),
    minWidth: wp("8.28125%"),
    minHeight: hp("5.327868852459016%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("26.25%"),
    top: hp("3.825136612021858%"),
    justifyContent: "flex-start"
  },
  Text_64_247: {
    color: "rgba(150, 145, 132, 1)",
    fontSize: 19,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_64_249: {
    width: wp("8.28125%"),
    minWidth: wp("8.28125%"),
    minHeight: hp("5.327868852459016%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("34.479166666666664%"),
    top: hp("3.825136612021858%"),
    justifyContent: "flex-start"
  },
  Text_64_249: {
    color: "rgba(150, 145, 132, 1)",
    fontSize: 19,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_64_248: {
    width: wp("8.28125%"),
    minWidth: wp("8.28125%"),
    minHeight: hp("5.327868852459016%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("16.979166666666668%"),
    top: hp("3.825136612021858%"),
    justifyContent: "flex-start"
  },
  Text_64_248: {
    color: "rgba(150, 145, 132, 1)",
    fontSize: 19,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_64_262: {
    width: wp("41.041666666666664%"),
    minWidth: wp("41.041666666666664%"),
    height: hp("70.21857923497268%"),
    minHeight: hp("70.21857923497268%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("29.479166666666668%"),
    top: hp("28.688524590163933%"),
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
