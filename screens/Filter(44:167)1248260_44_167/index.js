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
      <View style={styles.View_44_174}>
        <View style={styles.View_44_175}>
          <View style={styles.View_44_176}>
            <Text style={styles.Text_44_176}>0</Text>
          </View>
          <View style={styles.View_44_177}>
            <Text style={styles.Text_44_177}>10M</Text>
          </View>
          <View style={styles.View_44_178}>
            <Text style={styles.Text_44_178}>3M</Text>
          </View>
          <View style={styles.View_44_179}>
            <Text style={styles.Text_44_179}>Giá tiền</Text>
          </View>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0ee2/c207/c897a641c9c73277044e5425d222805d"
          }}
          style={styles.ImageBackground_44_180}
        />
      </View>
      <View style={styles.View_44_183}>
        <View style={styles.View_44_184}>
          <Text style={styles.Text_44_184}>Sắp xếp theo</Text>
        </View>
        <View style={styles.View_44_185}>
          <Text style={styles.Text_44_185}>Giá tiền</Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/adc0/4857/3159190e53273bf52d9f79238dc52e53"
          }}
          style={styles.ImageBackground_44_186}
        />
      </View>
      <View style={styles.View_44_189}>
        <View style={styles.View_44_190}>
          <Text style={styles.Text_44_190}>Trạng thái</Text>
        </View>
        <View style={styles.View_44_191}>
          <Text style={styles.Text_44_191}>Còn phòng</Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/adc0/4857/3159190e53273bf52d9f79238dc52e53"
          }}
          style={styles.ImageBackground_44_192}
        />
      </View>
      <View style={styles.View_44_195}>
        <View style={styles.View_44_196}>
          <Text style={styles.Text_44_196}>Thể loại</Text>
        </View>
        <View style={styles.View_44_197}>
          <Text style={styles.Text_44_197}>Phòng trọ cho thuê</Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/adc0/4857/3159190e53273bf52d9f79238dc52e53"
          }}
          style={styles.ImageBackground_44_198}
        />
      </View>
      <View style={styles.View_44_201}>
        <View style={styles.View_44_202}>
          <Text style={styles.Text_44_202}>Ngày đăng</Text>
        </View>
        <View style={styles.View_44_203}>
          <Text style={styles.Text_44_203}>Mọi thời điểm</Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/adc0/4857/3159190e53273bf52d9f79238dc52e53"
          }}
          style={styles.ImageBackground_44_204}
        />
      </View>
      <View style={styles.View_44_207}>
        <Text style={styles.Text_44_207}>ÁP DỤNG</Text>
      </View>
      <View style={styles.View_44_208}>
        <Text style={styles.Text_44_208}>HỦY</Text>
      </View>
      <View style={styles.View_114_3}>
        <View style={styles.View_44_215}>
          <View style={styles.View_44_209}>
            <Text style={styles.Text_44_209}>Tính năng</Text>
          </View>
          <View style={styles.View_44_210} />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/adc0/4857/3159190e53273bf52d9f79238dc52e53"
            }}
            style={styles.ImageBackground_44_211}
          />
          <View style={styles.View_44_214}>
            <Text style={styles.Text_44_214}>WC riêng</Text>
          </View>
        </View>
        <View style={styles.View_44_221}>
          <View style={styles.View_44_216} />
          <View style={styles.View_44_217}>
            <Text style={styles.Text_44_217}>WC riêng</Text>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1d59/90ee/5dee017fde637a567df9f80f2b614cbb"
            }}
            style={styles.ImageBackground_44_218}
          />
        </View>
        <View style={styles.View_44_234}>
          <View style={styles.View_44_235} />
          <View style={styles.View_44_236}>
            <Text style={styles.Text_44_236}>Máy lạnh</Text>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1d59/90ee/5dee017fde637a567df9f80f2b614cbb"
            }}
            style={styles.ImageBackground_44_237}
          />
        </View>
        <View style={styles.View_44_240}>
          <View style={styles.View_44_241} />
          <View style={styles.View_44_242}>
            <Text style={styles.Text_44_242}>Gác lửng</Text>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1d59/90ee/5dee017fde637a567df9f80f2b614cbb"
            }}
            style={styles.ImageBackground_44_243}
          />
        </View>
        <View style={styles.View_44_222}>
          <View style={styles.View_44_223} />
          <View style={styles.View_44_224}>
            <Text style={styles.Text_44_224}>Chỗ để xe</Text>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1d59/90ee/5dee017fde637a567df9f80f2b614cbb"
            }}
            style={styles.ImageBackground_44_225}
          />
        </View>
        <View style={styles.View_44_228}>
          <View style={styles.View_44_229} />
          <View style={styles.View_44_230}>
            <Text style={styles.Text_44_230}>Không chung chủ</Text>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1d59/90ee/5dee017fde637a567df9f80f2b614cbb"
            }}
            style={styles.ImageBackground_44_231}
          />
        </View>
      </View>
      <View style={styles.View_44_168}>
        <View style={styles.View_44_169} />
        <View style={styles.View_44_170}>
          <Text style={styles.Text_44_170}>Bộ lọc tìm kiếm</Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b76f/f667/3803af0fbea167995e9e4ae12f57fda3"
          }}
          style={styles.ImageBackground_44_171}
        />
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: { backgroundColor: "rgba(255, 255, 255, 1)" },
  View_2: { height: hp("100%") },
  View_44_174: {
    width: wp("80.26666666666667%"),
    minWidth: wp("80.26666666666667%"),
    height: hp("10.955056179775282%"),
    minHeight: hp("10.955056179775282%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.199999999999999%"),
    top: hp("30.61797752808989%")
  },
  View_44_175: {
    width: wp("79.99996744791666%"),
    minWidth: wp("79.99996744791666%"),
    height: hp("10.955056179775282%"),
    minHeight: hp("10.955056179775282%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_44_176: {
    width: wp("8.145454406738281%"),
    minWidth: wp("8.145454406738281%"),
    minHeight: hp("2.9494382022471908%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("17.163639322916666%"),
    top: hp("8.005617977528086%"),
    justifyContent: "flex-start"
  },
  Text_44_176: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 12,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_44_177: {
    width: wp("17.745454915364583%"),
    minWidth: wp("17.745454915364583%"),
    minHeight: hp("2.9494382022471908%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("62.25452473958333%"),
    top: hp("8.005617977528086%"),
    justifyContent: "flex-start"
  },
  Text_44_177: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 12,
    fontWeight: "400",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_44_178: {
    width: wp("17.745454915364583%"),
    minWidth: wp("17.745454915364583%"),
    minHeight: hp("2.9494382022471908%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("34.66666666666667%"),
    top: hp("0.5617977528089817%"),
    justifyContent: "flex-start"
  },
  Text_44_178: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 12,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_44_179: {
    width: wp("28.509090169270834%"),
    minWidth: wp("28.509090169270834%"),
    minHeight: hp("3.51123595505618%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_44_179: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 12,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_44_180: {
    width: wp("63.2%"),
    minWidth: wp("63.2%"),
    height: hp("2.0935980121741133%"),
    top: hp("4.353932584269661%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("17.066666666666666%")
  },
  View_44_183: {
    width: wp("85.33333333333334%"),
    minWidth: wp("85.33333333333334%"),
    height: hp("4.634831460674158%"),
    minHeight: hp("4.634831460674158%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.933333333333333%"),
    top: hp("8.426966292134832%")
  },
  View_44_184: {
    width: wp("28.836781819661457%"),
    minWidth: wp("28.836781819661457%"),
    minHeight: hp("3.51123595505618%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("1.1235955056179758%"),
    justifyContent: "flex-start"
  },
  Text_44_184: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 12,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_44_185: {
    width: wp("42.372412109375%"),
    minWidth: wp("42.372412109375%"),
    minHeight: hp("3.51123595505618%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("34.13333333333334%"),
    top: hp("1.1235955056179758%"),
    justifyContent: "flex-start"
  },
  Text_44_185: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 12,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_44_186: {
    width: wp("8.827585856119793%"),
    height: hp("4.213483146067416%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("76.50574544270833%")
  },
  View_44_189: {
    width: wp("85.33333333333334%"),
    minWidth: wp("85.33333333333334%"),
    height: hp("4.213483146067416%"),
    minHeight: hp("4.213483146067416%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.199999999999999%"),
    top: hp("24.578651685393258%")
  },
  View_44_190: {
    width: wp("28.836781819661457%"),
    minWidth: wp("28.836781819661457%"),
    minHeight: hp("3.51123595505618%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0.7022471910112387%"),
    justifyContent: "flex-start"
  },
  Text_44_190: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 12,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_44_191: {
    width: wp("42.372412109375%"),
    minWidth: wp("42.372412109375%"),
    minHeight: hp("3.089887640449438%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("34.13333333333334%"),
    top: hp("0.7022471910112387%"),
    justifyContent: "flex-start"
  },
  Text_44_191: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 12,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_44_192: {
    width: wp("8.827585856119793%"),
    height: hp("4.213483146067416%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("76.50574544270833%")
  },
  View_44_195: {
    width: wp("85.33333333333334%"),
    minWidth: wp("85.33333333333334%"),
    height: hp("4.634831460674158%"),
    minHeight: hp("4.634831460674158%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.199999999999999%"),
    top: hp("13.48314606741573%")
  },
  View_44_196: {
    width: wp("28.836781819661457%"),
    minWidth: wp("28.836781819661457%"),
    minHeight: hp("3.51123595505618%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("1.1235955056179776%"),
    justifyContent: "flex-start"
  },
  Text_44_196: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 12,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_44_197: {
    width: wp("42.372412109375%"),
    minWidth: wp("42.372412109375%"),
    minHeight: hp("3.51123595505618%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("34.13333333333334%"),
    top: hp("0.7022471910112387%"),
    justifyContent: "flex-start"
  },
  Text_44_197: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 12,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_44_198: {
    width: wp("8.827585856119793%"),
    height: hp("4.213483146067416%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("76.50574544270833%")
  },
  View_44_201: {
    width: wp("85.33333333333334%"),
    minWidth: wp("85.33333333333334%"),
    height: hp("4.634831460674158%"),
    minHeight: hp("4.634831460674158%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.199999999999999%"),
    top: hp("18.820224719101123%")
  },
  View_44_202: {
    width: wp("28.836781819661457%"),
    minWidth: wp("28.836781819661457%"),
    minHeight: hp("3.51123595505618%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("1.1235955056179776%"),
    justifyContent: "flex-start"
  },
  Text_44_202: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 12,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_44_203: {
    width: wp("42.372412109375%"),
    minWidth: wp("42.372412109375%"),
    minHeight: hp("3.51123595505618%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("34.13333333333334%"),
    top: hp("1.1235955056179776%"),
    justifyContent: "flex-start"
  },
  Text_44_203: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 12,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_44_204: {
    width: wp("8.827585856119793%"),
    height: hp("4.213483146067416%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("76.50574544270833%")
  },
  View_44_207: {
    width: wp("24.266666666666666%"),
    minWidth: wp("24.266666666666666%"),
    minHeight: hp("4.634831460674158%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("72.8%"),
    top: hp("59.55056179775281%"),
    justifyContent: "center"
  },
  Text_44_207: {
    color: "rgba(33, 147, 176, 1)",
    fontSize: 12,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_44_208: {
    width: wp("17.599999999999998%"),
    minWidth: wp("17.599999999999998%"),
    minHeight: hp("4.634831460674158%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("57.06666666666666%"),
    top: hp("59.55056179775281%"),
    justifyContent: "center"
  },
  Text_44_208: {
    color: "rgba(150, 145, 132, 1)",
    fontSize: 12,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_114_3: {
    width: wp("85.36092122395833%"),
    minWidth: wp("85.36092122395833%"),
    height: hp("14.325842696629213%"),
    minHeight: hp("14.325842696629213%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.199999999999999%"),
    top: hp("42.69662921348314%")
  },
  View_44_215: {
    width: wp("85.36092122395833%"),
    minWidth: wp("85.36092122395833%"),
    height: hp("4.353932584269663%"),
    minHeight: hp("4.353932584269663%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_44_209: {
    width: wp("28.836781819661457%"),
    minWidth: wp("28.836781819661457%"),
    minHeight: hp("3.51123595505618%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0.842696629213485%"),
    justifyContent: "flex-start"
  },
  Text_44_209: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 12,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_44_210: {
    width: wp("53.333333333333336%"),
    minWidth: wp("53.333333333333336%"),
    height: hp("4.213483146067416%"),
    minHeight: hp("4.213483146067416%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("32%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderColor: "rgba(182, 182, 182, 1)",
    borderWidth: 1
  },
  ImageBackground_44_211: {
    width: wp("8.827585856119793%"),
    height: hp("4.213483146067416%"),
    top: hp("0.14044943820225342%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("76.53333333333333%")
  },
  View_44_214: {
    width: wp("41.86666666666667%"),
    minWidth: wp("41.86666666666667%"),
    minHeight: hp("3.932584269662921%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("34.66666666666667%"),
    top: hp("0.28089887640449973%"),
    justifyContent: "center"
  },
  Text_44_214: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 12,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_44_221: {
    width: wp("16%"),
    minWidth: wp("16%"),
    height: hp("3.51123595505618%"),
    minHeight: hp("3.51123595505618%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("32%"),
    top: hp("6.17977528089888%")
  },
  View_44_216: {
    width: wp("16%"),
    minWidth: wp("16%"),
    height: hp("3.51123595505618%"),
    minHeight: hp("3.51123595505618%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderColor: "rgba(235, 235, 235, 1)",
    borderWidth: 1
  },
  View_44_217: {
    width: wp("16%"),
    minWidth: wp("16%"),
    minHeight: hp("2.8089887640449436%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0.5617977528089853%"),
    justifyContent: "center"
  },
  Text_44_217: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_44_218: {
    width: wp("2.666666666666667%"),
    height: hp("1.4044943820224718%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13.333333333333329%")
  },
  View_44_234: {
    width: wp("16%"),
    minWidth: wp("16%"),
    height: hp("3.51123595505618%"),
    minHeight: hp("3.51123595505618%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("69.33333333333333%"),
    top: hp("6.039325842696634%")
  },
  View_44_235: {
    width: wp("16%"),
    minWidth: wp("16%"),
    height: hp("3.51123595505618%"),
    minHeight: hp("3.51123595505618%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderColor: "rgba(235, 235, 235, 1)",
    borderWidth: 1
  },
  View_44_236: {
    width: wp("14.666666666666666%"),
    minWidth: wp("14.666666666666666%"),
    minHeight: hp("2.8089887640449436%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0.5617977528089924%"),
    justifyContent: "center"
  },
  Text_44_236: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_44_237: {
    width: wp("2.666666666666667%"),
    height: hp("1.4044943820224718%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13.333333333333329%")
  },
  View_44_240: {
    width: wp("16%"),
    minWidth: wp("16%"),
    height: hp("3.51123595505618%"),
    minHeight: hp("3.51123595505618%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("63.19999999999999%"),
    top: hp("10.814606741573037%")
  },
  View_44_241: {
    width: wp("16%"),
    minWidth: wp("16%"),
    height: hp("3.51123595505618%"),
    minHeight: hp("3.51123595505618%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderColor: "rgba(235, 235, 235, 1)",
    borderWidth: 1
  },
  View_44_242: {
    width: wp("14.666666666666666%"),
    minWidth: wp("14.666666666666666%"),
    minHeight: hp("2.8089887640449436%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0.5617977528089924%"),
    justifyContent: "center"
  },
  Text_44_242: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_44_243: {
    width: wp("2.666666666666667%"),
    height: hp("1.4044943820224718%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13.333333333333343%")
  },
  View_44_222: {
    width: wp("17.599999999999998%"),
    minWidth: wp("17.599999999999998%"),
    height: hp("3.51123595505618%"),
    minHeight: hp("3.51123595505618%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("49.86666666666666%"),
    top: hp("6.17977528089888%")
  },
  View_44_223: {
    width: wp("17.599999999999998%"),
    minWidth: wp("17.599999999999998%"),
    height: hp("3.51123595505618%"),
    minHeight: hp("3.51123595505618%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderColor: "rgba(235, 235, 235, 1)",
    borderWidth: 1
  },
  View_44_224: {
    width: wp("14.399999999999999%"),
    minWidth: wp("14.399999999999999%"),
    minHeight: hp("2.8089887640449436%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.066666666666677%"),
    top: hp("0.5617977528089853%"),
    justifyContent: "center"
  },
  Text_44_224: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_44_225: {
    width: wp("2.666666666666667%"),
    height: hp("1.4044943820224718%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("14.933333333333337%")
  },
  View_44_228: {
    width: wp("28.53333333333333%"),
    minWidth: wp("28.53333333333333%"),
    height: hp("3.51123595505618%"),
    minHeight: hp("3.51123595505618%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("32%"),
    top: hp("10.814606741573037%")
  },
  View_44_229: {
    width: wp("28.53333333333333%"),
    minWidth: wp("28.53333333333333%"),
    height: hp("3.51123595505618%"),
    minHeight: hp("3.51123595505618%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderColor: "rgba(235, 235, 235, 1)",
    borderWidth: 1
  },
  View_44_230: {
    width: wp("25.6%"),
    minWidth: wp("25.6%"),
    minHeight: hp("2.8089887640449436%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.0666666666666629%"),
    top: hp("0.5617977528089924%"),
    justifyContent: "center"
  },
  Text_44_230: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_44_231: {
    width: wp("2.666666666666667%"),
    height: hp("1.4044943820224718%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("25.86666666666666%")
  },
  View_44_168: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("5.617977528089887%"),
    minHeight: hp("5.617977528089887%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_44_169: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("5.617977528089887%"),
    minHeight: hp("5.617977528089887%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(33, 147, 176, 1)"
  },
  View_44_170: {
    width: wp("36.266666666666666%"),
    minWidth: wp("36.266666666666666%"),
    minHeight: hp("5.617977528089887%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.933333333333333%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_44_170: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 14,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_44_171: {
    width: wp("8%"),
    height: hp("4.213483146067416%"),
    top: hp("0.7022471910112359%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("89.06666666666668%")
  }
})

const mapStateToProps = state => {
  return {}
}
const mapDispatchToProps = () => {
  return {}
}
export default connect(mapStateToProps, mapDispatchToProps)(Blank)
