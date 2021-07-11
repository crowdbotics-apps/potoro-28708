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
      <View style={styles.View_59_33}>
        <Text style={styles.Text_59_33}>Chào mừng bạn đến với FTRO</Text>
      </View>
      <View style={styles.View_59_34}>
        <Text style={styles.Text_59_34}>Phòng trọ quanh đây</Text>
      </View>
      <TouchableOpacity
        style={styles.TouchableOpacity_59_35}
        onPress={() =>
          this.props.navigation.navigate(getNavigationScreen("1_2"))
        }
      >
        <View style={styles.View_59_36}>
          <View style={styles.View_59_37}>
            <Text style={styles.Text_59_37}>
              Địa chỉ: 122 Lê Văn Hiền, phường Hòa Hải, quận Ngũ Hành Sơn, Đà
              Nẵng
            </Text>
          </View>
          <View style={styles.View_59_38}>
            <Text style={styles.Text_59_38}>
              Phòng trọ cho thuê giá rẻ, không chung chủ
            </Text>
          </View>
          <View style={styles.View_59_64}>
            <View style={styles.View_59_65} />
            <View style={styles.View_59_66}>
              <Text style={styles.Text_59_66}>Còn trống</Text>
            </View>
          </View>
          <View style={styles.View_59_67}>
            <View style={styles.View_59_68} />
            <View style={styles.View_59_69}>
              <Text style={styles.Text_59_69}>Liên hệ</Text>
            </View>
          </View>
          <View style={styles.View_59_70}>
            <View style={styles.View_59_71} />
            <View style={styles.View_59_72}>
              <Text style={styles.Text_59_72}>1.9M</Text>
            </View>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5e00/288e/74da2cc1952ef961df77c16d09a74730"
            }}
            style={styles.ImageBackground_59_73}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5c8c/5eed/e98c00407b0e0de5d3bc48d9c7b94c4c"
            }}
            style={styles.ImageBackground_64_219}
          />
        </View>
        <View style={styles.View_59_74}>
          <View style={styles.View_59_75}>
            <Text style={styles.Text_59_75}>
              Địa chỉ: 12 Thái Thị Bôi, Điện Ngọc, Điện Bàn, Quảng Nam
            </Text>
          </View>
          <View style={styles.View_59_76}>
            <Text style={styles.Text_59_76}>
              Cho thuê phòng trọ sinh viên giá rẻ, ngay chợ Điện Ngọc
            </Text>
          </View>
          <View style={styles.View_59_102}>
            <View style={styles.View_59_103} />
            <View style={styles.View_59_104}>
              <Text style={styles.Text_59_104}>Hết phòng</Text>
            </View>
          </View>
          <View style={styles.View_59_105}>
            <View style={styles.View_59_106} />
            <View style={styles.View_59_107}>
              <Text style={styles.Text_59_107}>Liên hệ</Text>
            </View>
          </View>
          <View style={styles.View_59_108}>
            <View style={styles.View_59_109} />
            <View style={styles.View_59_110}>
              <Text style={styles.Text_59_110}>1.5M</Text>
            </View>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7ab2/f465/7b5ed76a50894eb37c4916e15d7a9c1d"
            }}
            style={styles.ImageBackground_59_111}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/cf08/52f6/9754f53f5ec5578be92c896701e14d63"
            }}
            style={styles.ImageBackground_64_225}
          />
        </View>
        <View style={styles.View_59_112}>
          <View style={styles.View_59_113}>
            <Text style={styles.Text_59_113}>
              Địa chỉ: 86 Trần Hưng Đạo, quận Ngũ Hành Sơn, Đà Nẵng
            </Text>
          </View>
          <View style={styles.View_59_114}>
            <Text style={styles.Text_59_114}>
              Cho thuê trọ sinh viên giá rẻ gần Đại học Việt Hàn
            </Text>
          </View>
          <View style={styles.View_59_140}>
            <View style={styles.View_59_141} />
            <View style={styles.View_59_142}>
              <Text style={styles.Text_59_142}>Còn trống</Text>
            </View>
          </View>
          <View style={styles.View_59_143}>
            <View style={styles.View_59_144} />
            <View style={styles.View_59_145}>
              <Text style={styles.Text_59_145}>Liên hệ</Text>
            </View>
          </View>
          <View style={styles.View_59_146}>
            <View style={styles.View_59_147} />
            <View style={styles.View_59_148}>
              <Text style={styles.Text_59_148}>1.2M</Text>
            </View>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a608/4b6d/346cfe7a561b3bce439481de72fd2773"
            }}
            style={styles.ImageBackground_59_149}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/66e3/938e/fef45b93bb3bae4fe3cc8033c22bf4d5"
            }}
            style={styles.ImageBackground_64_218}
          />
        </View>
      </TouchableOpacity>
      <View style={styles.View_59_151}>
        <Text style={styles.Text_59_151}>Xem thêm...</Text>
      </View>
      <View style={styles.View_64_240}>
        <View style={styles.View_64_238} />
        <View style={styles.View_64_239}>
          <View style={styles.View_93_6}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9072/2560/744d05a0cc21b191fd35a7ce65341824"
              }}
              style={styles.ImageBackground_64_227}
            />
            <View style={styles.View_64_228}>
              <Text style={styles.Text_64_228}>Trang chủ</Text>
            </View>
          </View>
          <TouchableOpacity
            style={styles.TouchableOpacity_93_7}
            onPress={() =>
              this.props.navigation.navigate(getNavigationScreen("59_570"))
            }
          >
            <View style={styles.View_64_231}>
              <Text style={styles.Text_64_231}>Tìm kiếm</Text>
            </View>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3c43/df95/aeff332c92f01e3d6bdc2a19fcf55c35"
              }}
              style={styles.ImageBackground_64_230}
            />
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.TouchableOpacity_93_8}
            onPress={() =>
              this.props.navigation.navigate(getNavigationScreen("59_497"))
            }
          >
            <View style={styles.View_64_234}>
              <Text style={styles.Text_64_234}>Tin nhắn</Text>
            </View>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6e72/23d2/b6b47f174c4a59fb95c0aeaace67d221"
              }}
              style={styles.ImageBackground_64_233}
            />
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.TouchableOpacity_93_9}
            onPress={() =>
              this.props.navigation.navigate(getNavigationScreen("59_820"))
            }
          >
            <View style={styles.View_64_237}>
              <Text style={styles.Text_64_237}>Tài khoản</Text>
            </View>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/33a4/fba8/6cf4d0175fc67bc8dfd8aae4b3894113"
              }}
              style={styles.ImageBackground_64_236}
            />
          </TouchableOpacity>
        </View>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0c0a/a262/5abea318f1a1d4a5b7bad57ead37915e"
        }}
        style={styles.ImageBackground_64_251}
      />
      <View style={styles.View_64_252}>
        <Text style={styles.Text_64_252}>Trang chủ</Text>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a5df/8aca/0ae7b35e733e92c0238d8c02c75ba479"
        }}
        style={styles.ImageBackground_64_256}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ec99/2949/fcfe9b6affce13e445e1c6a693c2a207"
        }}
        style={styles.ImageBackground_65_3}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0fbf/9ca0/540e2b3e9e9d1bd2745ff0cadddb83bd"
        }}
        style={styles.ImageBackground_65_4}
      />
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: { backgroundColor: "rgba(255, 255, 255, 1)" },
  View_2: { height: hp("128.4153005464481%") },
  View_59_33: {
    width: wp("87.2%"),
    minWidth: wp("87.2%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.199999999999999%"),
    top: hp("9.562841530054644%"),
    justifyContent: "flex-start"
  },
  Text_59_33: {
    color: "rgba(33, 147, 176, 1)",
    fontSize: 19,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_59_34: {
    width: wp("49.333333333333336%"),
    minWidth: wp("49.333333333333336%"),
    minHeight: hp("3.1420765027322406%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("25.6%"),
    top: hp("61.065573770491795%"),
    justifyContent: "flex-start"
  },
  Text_59_34: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 16,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  TouchableOpacity_59_35: {
    width: wp("97.86740722656249%"),
    minWidth: wp("97.86740722656249%"),
    height: hp("46.31147540983606%"),
    minHeight: hp("46.31147540983606%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.1326171875%"),
    top: hp("66.2568306010929%")
  },
  View_59_36: {
    width: wp("97.86740722656249%"),
    minWidth: wp("97.86740722656249%"),
    height: hp("14.89071038251366%"),
    minHeight: hp("14.89071038251366%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("15.710382513661202%")
  },
  View_59_37: {
    width: wp("70.93333333333334%"),
    minWidth: wp("70.93333333333334%"),
    minHeight: hp("4.2349726775956285%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("26.93404947916667%"),
    top: hp("6.010928961748633%"),
    justifyContent: "flex-start"
  },
  Text_59_37: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_59_38: {
    width: wp("70.93333333333334%"),
    minWidth: wp("70.93333333333334%"),
    minHeight: hp("4.2349726775956285%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("26.93404947916667%"),
    top: hp("0.6830601092896131%"),
    justifyContent: "flex-start"
  },
  Text_59_38: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_59_64: {
    width: wp("26.93333333333333%"),
    minWidth: wp("26.93333333333333%"),
    height: hp("3.1420765027322406%"),
    minHeight: hp("3.1420765027322406%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("69.0673828125%"),
    top: hp("11.748633879781423%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_59_65: {
    width: wp("26.93333333333333%"),
    height: hp("3.1420765027322406%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(1, 132, 16, 1)",
    borderColor: "rgba(151, 151, 151, 1)",
    borderWidth: 1
  },
  View_59_66: {
    width: wp("26.93333333333333%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_59_66: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_59_67: {
    width: wp("18.4%"),
    minWidth: wp("18.4%"),
    height: hp("3.1420765027322406%"),
    minHeight: hp("3.1420765027322406%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("26.93404947916667%"),
    top: hp("11.748633879781423%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_59_68: {
    width: wp("18.4%"),
    height: hp("3.1420765027322406%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(33, 147, 176, 1)",
    borderColor: "rgba(151, 151, 151, 1)",
    borderWidth: 1
  },
  View_59_69: {
    width: wp("18.4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_59_69: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 10,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_59_70: {
    width: wp("21.066666666666666%"),
    minWidth: wp("21.066666666666666%"),
    height: hp("3.1420765027322406%"),
    minHeight: hp("3.1420765027322406%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("46.667382812499994%"),
    top: hp("11.748633879781423%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_59_71: {
    width: wp("21.066666666666666%"),
    height: hp("3.1420765027322406%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(234, 173, 2, 1)",
    borderColor: "rgba(151, 151, 151, 1)",
    borderWidth: 1
  },
  View_59_72: {
    width: wp("21.066666666666666%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_59_72: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 10,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_59_73: {
    width: wp("96.0014892578125%"),
    minWidth: wp("96.0014892578125%"),
    height: hp("0%"),
    minHeight: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_64_219: {
    width: wp("25.066666666666666%"),
    minWidth: wp("25.066666666666666%"),
    height: hp("13.797814207650273%"),
    minHeight: hp("13.797814207650273%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.0007161458333331261%"),
    top: hp("1.0928961748633839%"),
    resizeMode: "cover"
  },
  View_59_74: {
    width: wp("97.86666666666667%"),
    minWidth: wp("97.86666666666667%"),
    height: hp("14.959016393442623%"),
    minHeight: hp("14.959016393442623%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.0007161458333331261%"),
    top: hp("31.35245901639344%")
  },
  View_59_75: {
    width: wp("70.93333333333334%"),
    minWidth: wp("70.93333333333334%"),
    minHeight: hp("4.371584699453552%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("26.933333333333337%"),
    top: hp("6.352459016393453%"),
    justifyContent: "flex-start"
  },
  Text_59_75: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_59_76: {
    width: wp("70.93333333333334%"),
    minWidth: wp("70.93333333333334%"),
    minHeight: hp("4.2349726775956285%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("26.933333333333337%"),
    top: hp("0.7513661202185773%"),
    justifyContent: "flex-start"
  },
  Text_59_76: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_59_102: {
    width: wp("26.93333333333333%"),
    minWidth: wp("26.93333333333333%"),
    height: hp("3.1420765027322406%"),
    minHeight: hp("3.1420765027322406%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("69.06666666666666%"),
    top: hp("11.816939890710373%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_59_103: {
    width: wp("26.93333333333333%"),
    height: hp("3.1420765027322406%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(240, 72, 72, 1)",
    borderColor: "rgba(151, 151, 151, 1)",
    borderWidth: 1
  },
  View_59_104: {
    width: wp("26.93333333333333%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_59_104: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_59_105: {
    width: wp("18.4%"),
    minWidth: wp("18.4%"),
    height: hp("3.1420765027322406%"),
    minHeight: hp("3.1420765027322406%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("26.933333333333337%"),
    top: hp("11.816939890710373%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_59_106: {
    width: wp("18.4%"),
    height: hp("3.1420765027322406%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(33, 147, 176, 1)",
    borderColor: "rgba(151, 151, 151, 1)",
    borderWidth: 1
  },
  View_59_107: {
    width: wp("18.4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_59_107: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 10,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_59_108: {
    width: wp("21.066666666666666%"),
    minWidth: wp("21.066666666666666%"),
    height: hp("3.1420765027322406%"),
    minHeight: hp("3.1420765027322406%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("46.666666666666664%"),
    top: hp("11.816939890710373%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_59_109: {
    width: wp("21.066666666666666%"),
    height: hp("3.1420765027322406%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(234, 173, 2, 1)",
    borderColor: "rgba(151, 151, 151, 1)",
    borderWidth: 1
  },
  View_59_110: {
    width: wp("21.066666666666666%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_59_110: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 10,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_59_111: {
    width: wp("96.0001708984375%"),
    minWidth: wp("96.0001708984375%"),
    height: hp("0.06830601092896176%"),
    minHeight: hp("0.06830601092896176%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_64_225: {
    width: wp("25.066666666666666%"),
    minWidth: wp("25.066666666666666%"),
    height: hp("13.661202185792352%"),
    minHeight: hp("13.661202185792352%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("1.2978142076502763%"),
    resizeMode: "cover"
  },
  View_59_112: {
    width: wp("97.86666666666667%"),
    minWidth: wp("97.86666666666667%"),
    height: hp("14.89071038251366%"),
    minHeight: hp("14.89071038251366%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.0007161458333331261%"),
    top: hp("0%")
  },
  View_59_113: {
    width: wp("70.93333333333334%"),
    minWidth: wp("70.93333333333334%"),
    minHeight: hp("4.371584699453552%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("26.933333333333337%"),
    top: hp("6.284153005464475%"),
    justifyContent: "flex-start"
  },
  Text_59_113: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_59_114: {
    width: wp("70.93333333333334%"),
    minWidth: wp("70.93333333333334%"),
    minHeight: hp("4.2349726775956285%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("26.933333333333337%"),
    top: hp("0.6830601092896131%"),
    justifyContent: "flex-start"
  },
  Text_59_114: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 12,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_59_140: {
    width: wp("26.93333333333333%"),
    minWidth: wp("26.93333333333333%"),
    height: hp("3.1420765027322406%"),
    minHeight: hp("3.1420765027322406%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("69.06666666666666%"),
    top: hp("11.748633879781423%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_59_141: {
    width: wp("26.93333333333333%"),
    height: hp("3.1420765027322406%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(1, 132, 16, 1)",
    borderColor: "rgba(151, 151, 151, 1)",
    borderWidth: 1
  },
  View_59_142: {
    width: wp("26.93333333333333%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_59_142: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_59_143: {
    width: wp("18.4%"),
    minWidth: wp("18.4%"),
    height: hp("3.1420765027322406%"),
    minHeight: hp("3.1420765027322406%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("26.933333333333337%"),
    top: hp("11.748633879781423%"),
    backgroundColor: "rgba(33, 147, 176, 1)",
    overflow: "hidden"
  },
  View_59_144: {
    width: wp("18.4%"),
    height: hp("3.1420765027322406%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(33, 147, 176, 1)",
    borderColor: "rgba(151, 151, 151, 1)",
    borderWidth: 1
  },
  View_59_145: {
    width: wp("18.4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_59_145: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 10,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_59_146: {
    width: wp("21.066666666666666%"),
    minWidth: wp("21.066666666666666%"),
    height: hp("3.1420765027322406%"),
    minHeight: hp("3.1420765027322406%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("46.666666666666664%"),
    top: hp("11.748633879781423%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_59_147: {
    width: wp("21.066666666666666%"),
    height: hp("3.1420765027322406%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(234, 173, 2, 1)",
    borderColor: "rgba(151, 151, 151, 1)",
    borderWidth: 1
  },
  View_59_148: {
    width: wp("21.066666666666666%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_59_148: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 10,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_59_149: {
    width: wp("96%"),
    minWidth: wp("96%"),
    height: hp("1.5530988759783612e-14%"),
    minHeight: hp("1.5530988759783612e-14%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_64_218: {
    width: wp("25.066666666666666%"),
    minWidth: wp("25.066666666666666%"),
    height: hp("14.207650273224044%"),
    minHeight: hp("14.207650273224044%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0.6830601092896131%"),
    resizeMode: "cover"
  },
  View_59_151: {
    width: wp("17.333333333333336%"),
    minWidth: wp("17.333333333333336%"),
    minHeight: hp("1.912568306010929%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("41.06666666666667%"),
    top: hp("114.34426229508196%"),
    justifyContent: "flex-start"
  },
  Text_59_151: {
    color: "rgba(150, 145, 132, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_64_240: {
    width: wp("100.26666666666667%"),
    minWidth: wp("100.26666666666667%"),
    height: hp("9.153005464480875%"),
    minHeight: hp("9.153005464480875%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-0.26666666666666666%"),
    top: hp("119.26229508196722%")
  },
  View_64_238: {
    width: wp("100.26666666666667%"),
    minWidth: wp("100.26666666666667%"),
    height: hp("9.153005464480875%"),
    minHeight: hp("9.153005464480875%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    borderColor: "rgba(244, 244, 244, 1)",
    borderWidth: 1
  },
  View_64_239: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("5.8743169398907105%"),
    minHeight: hp("5.8743169398907105%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.26666666666666666%"),
    top: hp("1.639344262295083%")
  },
  View_93_6: {
    width: wp("21.066666666666666%"),
    minWidth: wp("21.066666666666666%"),
    height: hp("5.8743169398907105%"),
    minHeight: hp("5.8743169398907105%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_64_227: {
    width: wp("5.333333333333334%"),
    minWidth: wp("5.333333333333334%"),
    height: hp("2.73224043715847%"),
    minHeight: hp("2.73224043715847%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.733333333333333%"),
    top: hp("0%"),
    resizeMode: "cover"
  },
  View_64_228: {
    width: wp("21.066666666666666%"),
    minWidth: wp("21.066666666666666%"),
    minHeight: hp("2.459016393442623%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("3.4153005464480657%"),
    justifyContent: "flex-start"
  },
  Text_64_228: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  TouchableOpacity_93_7: {
    width: wp("21.066666666666666%"),
    minWidth: wp("21.066666666666666%"),
    height: hp("5.8743169398907105%"),
    minHeight: hp("5.8743169398907105%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("26.400000000000002%"),
    top: hp("0%")
  },
  View_64_231: {
    width: wp("21.066666666666666%"),
    minWidth: wp("21.066666666666666%"),
    minHeight: hp("2.459016393442623%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("3.4153005464480657%"),
    justifyContent: "flex-start"
  },
  Text_64_231: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_64_230: {
    width: wp("5.333333333333334%"),
    minWidth: wp("5.333333333333334%"),
    height: hp("2.73224043715847%"),
    minHeight: hp("2.73224043715847%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.733333333333331%"),
    top: hp("0%"),
    resizeMode: "cover"
  },
  TouchableOpacity_93_8: {
    width: wp("21.066666666666666%"),
    minWidth: wp("21.066666666666666%"),
    height: hp("5.8743169398907105%"),
    minHeight: hp("5.8743169398907105%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("51.46666666666667%"),
    top: hp("0%")
  },
  View_64_234: {
    width: wp("21.066666666666666%"),
    minWidth: wp("21.066666666666666%"),
    minHeight: hp("2.459016393442623%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("3.4153005464480657%"),
    justifyContent: "flex-start"
  },
  Text_64_234: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_64_233: {
    width: wp("5.333333333333334%"),
    minWidth: wp("5.333333333333334%"),
    height: hp("2.73224043715847%"),
    minHeight: hp("2.73224043715847%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.733333333333327%"),
    top: hp("0%"),
    resizeMode: "cover"
  },
  TouchableOpacity_93_9: {
    width: wp("21.066666666666666%"),
    minWidth: wp("21.066666666666666%"),
    height: hp("5.8743169398907105%"),
    minHeight: hp("5.8743169398907105%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("78.93333333333334%"),
    top: hp("0%")
  },
  View_64_237: {
    width: wp("21.066666666666666%"),
    minWidth: wp("21.066666666666666%"),
    minHeight: hp("2.459016393442623%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("3.4153005464480657%"),
    justifyContent: "flex-start"
  },
  Text_64_237: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_64_236: {
    width: wp("5.333333333333334%"),
    minWidth: wp("5.333333333333334%"),
    height: hp("2.73224043715847%"),
    minHeight: hp("2.73224043715847%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.733333333333334%"),
    top: hp("0%"),
    resizeMode: "cover"
  },
  ImageBackground_64_251: {
    width: wp("6.4%"),
    minWidth: wp("6.4%"),
    height: hp("3.278688524590164%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.666666666666667%"),
    top: hp("2.73224043715847%"),
    resizeMode: "cover"
  },
  View_64_252: {
    width: wp("23.733333333333334%"),
    minWidth: wp("23.733333333333334%"),
    minHeight: hp("3.1420765027322406%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("39.733333333333334%"),
    top: hp("2.73224043715847%"),
    justifyContent: "flex-start"
  },
  Text_64_252: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 16,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_64_256: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("41.53005464480874%"),
    minHeight: hp("41.53005464480874%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("15.300546448087433%"),
    resizeMode: "cover"
  },
  ImageBackground_65_3: {
    width: wp("8%"),
    minWidth: wp("8%"),
    height: hp("4.098360655737705%"),
    minHeight: hp("4.098360655737705%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("33.33333333333333%"),
    resizeMode: "cover"
  },
  ImageBackground_65_4: {
    width: wp("8%"),
    minWidth: wp("8%"),
    height: hp("4.098360655737705%"),
    minHeight: hp("4.098360655737705%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("92%"),
    top: hp("33.33333333333333%"),
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
