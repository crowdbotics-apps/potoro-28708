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
        style={styles.ImageBackground_59_2376}
      />
      <View style={styles.View_59_1873}>
        <Text style={styles.Text_59_1873}>Chỉnh sửa thông tin cho thuê</Text>
      </View>
      <View style={styles.View_59_2031}>
        <View style={styles.View_59_2032}>
          <Text style={styles.Text_59_2032}>15</Text>
        </View>
        <View style={styles.View_59_2033}>
          <Text style={styles.Text_59_2033}>Người đã thuê</Text>
        </View>
      </View>
      <View style={styles.View_59_2034}>
        <View style={styles.View_59_2035}>
          <Text style={styles.Text_59_2035}>2</Text>
        </View>
        <View style={styles.View_59_2036}>
          <Text style={styles.Text_59_2036}>Đang chờ nhận phòng</Text>
        </View>
      </View>
      <View style={styles.View_59_2037}>
        <View style={styles.View_59_2038}>
          <Text style={styles.Text_59_2038}>12</Text>
        </View>
        <View style={styles.View_59_2039}>
          <Text style={styles.Text_59_2039}>Thích</Text>
        </View>
      </View>
      <View style={styles.View_59_2538}>
        <View style={styles.View_59_2539} />
        <View style={styles.View_59_2550} />
        <View style={styles.View_59_2540}>
          <Text style={styles.Text_59_2540}>
            Phòng trọ sinh viên Nguyên Sinh cách Đại học FPT 200m, gần siêu thị
          </Text>
        </View>
        <View style={styles.View_59_2541}>
          <Text style={styles.Text_59_2541}>Phòng trọ sinh viên</Text>
        </View>
        <View style={styles.View_59_2542}>
          <Text style={styles.Text_59_2542}>
            Địa chỉ: 12 Nam Kỳ Khởi Nghĩa, phường Hòa Hải, quận Ngũ Hành Sơn, Đà
            Nẵng
          </Text>
        </View>
        <View style={styles.View_59_2543}>
          <Text style={styles.Text_59_2543}>Còn trống</Text>
        </View>
        <View style={styles.View_59_2544}>
          <Text style={styles.Text_59_2544}>1.7M</Text>
        </View>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/bb05/e4a8/e8a98581b645721df1ee745c69fd1890"
        }}
        style={styles.ImageBackground_59_2547}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0fed/55e5/299a46be07026639f45be01fe5e6e0be"
        }}
        style={styles.ImageBackground_59_2548}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b331/a6b4/0582a0b9a0cdcd974653e3fbe7504a7e"
        }}
        style={styles.ImageBackground_59_2549}
      />
      <View style={styles.View_59_2552} />
      <View style={styles.View_59_2553}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1518/6e51/cfe92f4c9098da4ff2fda8111823312a"
          }}
          style={styles.ImageBackground_59_2554}
        />
        <View style={styles.View_59_2555}>
          <Text style={styles.Text_59_2555}>3K/chữ</Text>
        </View>
      </View>
      <View style={styles.View_59_2556}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9e53/4a91/abe89d5c2fa5763555c113c300f5267f"
          }}
          style={styles.ImageBackground_59_2557}
        />
        <View style={styles.View_59_2558}>
          <Text style={styles.Text_59_2558}>25K/người</Text>
        </View>
      </View>
      <View style={styles.View_59_2559}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/81aa/3cad/f33140c222f5c7d4a314ec2b57811103"
          }}
          style={styles.ImageBackground_59_2560}
        />
        <View style={styles.View_59_2561}>
          <Text style={styles.Text_59_2561}>50K/người</Text>
        </View>
      </View>
      <View style={styles.View_59_2562}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/34cf/0f71/f185783712ff9d58faeb850ceac68805"
          }}
          style={styles.ImageBackground_59_2563}
        />
        <View style={styles.View_59_2564}>
          <Text style={styles.Text_59_2564}>Vệ sinh riêng</Text>
        </View>
      </View>
      <View style={styles.View_59_2565}>
        <View style={styles.View_59_2566}>
          <Text style={styles.Text_59_2566}>Nấu ăn</Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a358/ab39/c1a51032e3462d50a63a789d7c8ee16f"
          }}
          style={styles.ImageBackground_59_2567}
        />
      </View>
      <View style={styles.View_59_2568}>
        <View style={styles.View_59_2569}>
          <Text style={styles.Text_59_2569}>Chỗ để xe</Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1495/db19/fad25d19d0f04974f8f758726fc31266"
          }}
          style={styles.ImageBackground_59_2570}
        />
      </View>
      <View style={styles.View_59_2571}>
        <View style={styles.View_59_2572}>
          <Text style={styles.Text_59_2572}>
            Trọ không chung chủ, an ninh tốt.
          </Text>
        </View>
        <View style={styles.View_59_2573}>
          <Text style={styles.Text_59_2573}>Mô tả thêm</Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c949/5b3e/a5a858210f0542e6f6be1f80d920aa3d"
          }}
          style={styles.ImageBackground_59_2574}
        />
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3230/1af4/0a448df56806d400ca787a08b9e7b03d"
        }}
        style={styles.ImageBackground_59_2575}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9f85/c0f3/0d3663a99dcf46afae949f577cd28047"
        }}
        style={styles.ImageBackground_59_2585}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/34ec/da7c/c704e786d0c8aa5bf8722b9d8e05d2f3"
        }}
        style={styles.ImageBackground_64_147}
      />
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: { backgroundColor: "rgba(255, 255, 255, 1)" },
  View_2: { height: hp("104.0983606557377%") },
  ImageBackground_59_2376: {
    width: wp("3.2%"),
    minWidth: wp("3.2%"),
    height: hp("3.278688524590164%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.666666666666667%"),
    top: hp("2.73224043715847%")
  },
  View_59_1873: {
    width: wp("62.93333333333333%"),
    minWidth: wp("62.93333333333333%"),
    minHeight: hp("3.825136612021858%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("19.2%"),
    top: hp("2.5956284153005464%"),
    justifyContent: "center"
  },
  Text_59_1873: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_59_2031: {
    width: wp("25.6%"),
    height: hp("5.46448087431694%"),
    top: hp("93.71584699453553%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("70.13333333333334%")
  },
  View_59_2032: {
    width: wp("5.681159464518229%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9.86666666666666%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_59_2032: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 14,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.12857140600681305,
    textTransform: "none"
  },
  View_59_2033: {
    width: wp("25.6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("3.2786885245901516%"),
    justifyContent: "flex-start"
  },
  Text_59_2033: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.09999997913837433,
    textTransform: "none"
  },
  View_59_2034: {
    width: wp("22.933333333333334%"),
    height: hp("5.34211038891735%"),
    top: hp("93.71584699453553%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("38.4%")
  },
  View_59_2035: {
    width: wp("5.615858968098959%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8.813260904947917%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_59_2035: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 14,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.12857140600681305,
    textTransform: "none"
  },
  View_59_2036: {
    width: wp("22.933333333333334%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("3.156318039190566%"),
    justifyContent: "flex-start"
  },
  Text_59_2036: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.09999997913837433,
    textTransform: "none"
  },
  View_59_2037: {
    width: wp("24.266666666666666%"),
    height: hp("6.708230607496585%"),
    top: hp("93.5792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.866666666666667%")
  },
  View_59_2038: {
    width: wp("6.017820739746094%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9.198675537109375%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_59_2038: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 14,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.12857140600681305,
    textTransform: "none"
  },
  View_59_2039: {
    width: wp("24.266666666666666%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("3.156318039190566%"),
    justifyContent: "flex-start"
  },
  Text_59_2039: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.09999997913837433,
    textTransform: "none"
  },
  View_59_2538: {
    width: wp("94.66666666666667%"),
    minWidth: wp("94.66666666666667%"),
    height: hp("16.256830601092894%"),
    minHeight: hp("16.256830601092894%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.666666666666667%"),
    top: hp("8.469945355191257%")
  },
  View_59_2539: {
    width: wp("94.66666666666667%"),
    minWidth: wp("94.66666666666667%"),
    height: hp("16.256830601092894%"),
    minHeight: hp("16.256830601092894%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(244, 244, 244, 1)",
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10
  },
  View_59_2550: {
    width: wp("79.46666666666667%"),
    minWidth: wp("79.46666666666667%"),
    height: hp("6.830601092896176%"),
    minHeight: hp("6.830601092896176%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("3.415300546448087%"),
    backgroundColor: "rgba(196, 196, 196, 1)",
    opacity: 0,
    borderColor: "rgba(174, 174, 174, 1)",
    borderWidth: 1
  },
  View_59_2540: {
    width: wp("76%"),
    minWidth: wp("76%"),
    minHeight: hp("6.967213114754098%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.666666666666667%"),
    top: hp("3.278688524590164%"),
    justifyContent: "center"
  },
  Text_59_2540: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 13,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_59_2541: {
    width: wp("34.66666666666667%"),
    minWidth: wp("34.66666666666667%"),
    minHeight: hp("2.8688524590163933%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.666666666666667%"),
    top: hp("0.4098360655737707%"),
    justifyContent: "center"
  },
  Text_59_2541: {
    color: "rgba(150, 145, 132, 1)",
    fontSize: 11,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_59_2542: {
    width: wp("92%"),
    minWidth: wp("92%"),
    minHeight: hp("4.918032786885246%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.666666666666667%"),
    top: hp("10.245901639344265%"),
    justifyContent: "center"
  },
  Text_59_2542: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_59_2543: {
    width: wp("21.6%"),
    minWidth: wp("21.6%"),
    minHeight: hp("3.0054644808743167%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("71.2%"),
    top: hp("0.4098360655737707%"),
    justifyContent: "center"
  },
  Text_59_2543: {
    color: "rgba(1, 132, 1, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_59_2544: {
    width: wp("15.466666666666667%"),
    minWidth: wp("15.466666666666667%"),
    minHeight: hp("3.825136612021858%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("78.66666666666666%"),
    top: hp("4.781420765027324%"),
    justifyContent: "center"
  },
  Text_59_2544: {
    color: "rgba(234, 173, 2, 1)",
    fontSize: 18,
    fontWeight: "900",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_59_2547: {
    width: wp("45.89836018880209%"),
    minWidth: wp("45.89836018880209%"),
    height: hp("39.838317704331025%"),
    minHeight: hp("39.838317704331025%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.2%"),
    top: hp("28.005464480874316%"),
    resizeMode: "cover"
  },
  ImageBackground_59_2548: {
    width: wp("46.400000000000006%"),
    minWidth: wp("46.400000000000006%"),
    height: hp("18.169398907103826%"),
    minHeight: hp("18.169398907103826%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("50.68802083333333%"),
    top: hp("28.005464480874316%"),
    resizeMode: "cover"
  },
  ImageBackground_59_2549: {
    width: wp("46.13333333333333%"),
    minWidth: wp("46.13333333333333%"),
    height: hp("20.491803278688526%"),
    minHeight: hp("20.491803278688526%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("50.9546875%"),
    top: hp("47.404371584699454%"),
    resizeMode: "cover"
  },
  View_59_2552: {
    width: wp("93.86666666666666%"),
    minWidth: wp("93.86666666666666%"),
    height: hp("10.10928961748634%"),
    minHeight: hp("10.10928961748634%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.488018798828125%"),
    top: hp("67.89617486338798%"),
    backgroundColor: "rgba(244, 244, 244, 1)"
  },
  View_59_2553: {
    width: wp("17.599999999999998%"),
    minWidth: wp("17.599999999999998%"),
    height: hp("2.8688524590163933%"),
    minHeight: hp("2.8688524590163933%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.354685465494791%"),
    top: hp("69.12568306010928%")
  },
  ImageBackground_59_2554: {
    width: wp("5.333333333333334%"),
    minWidth: wp("5.333333333333334%"),
    height: hp("2.73224043715847%"),
    minHeight: hp("2.73224043715847%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0.13661202185794252%"),
    resizeMode: "cover"
  },
  View_59_2555: {
    width: wp("13.866666666666665%"),
    minWidth: wp("13.866666666666665%"),
    minHeight: hp("2.73224043715847%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.7333333333333343%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_59_2555: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_59_2556: {
    width: wp("22.666666666666664%"),
    minWidth: wp("22.666666666666664%"),
    height: hp("2.73224043715847%"),
    minHeight: hp("2.73224043715847%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("38.42135416666667%"),
    top: hp("69.26229508196722%")
  },
  ImageBackground_59_2557: {
    width: wp("5.333333333333334%"),
    minWidth: wp("5.333333333333334%"),
    height: hp("2.73224043715847%"),
    minHeight: hp("2.73224043715847%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    resizeMode: "cover"
  },
  View_59_2558: {
    width: wp("17.599999999999998%"),
    minWidth: wp("17.599999999999998%"),
    minHeight: hp("2.73224043715847%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.06666666666667%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_59_2558: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_59_2559: {
    width: wp("24.53333333333333%"),
    minWidth: wp("24.53333333333333%"),
    height: hp("2.8688524590163933%"),
    minHeight: hp("2.8688524590163933%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("71.22135416666666%"),
    top: hp("69.12568306010928%")
  },
  ImageBackground_59_2560: {
    width: wp("5.333333333333334%"),
    minWidth: wp("5.333333333333334%"),
    height: hp("2.73224043715847%"),
    minHeight: hp("2.73224043715847%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0.13661202185794252%"),
    resizeMode: "cover"
  },
  View_59_2561: {
    width: wp("19.2%"),
    minWidth: wp("19.2%"),
    minHeight: hp("2.73224043715847%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.333333333333343%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_59_2561: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_59_2562: {
    width: wp("25.866666666666667%"),
    minWidth: wp("25.866666666666667%"),
    height: hp("2.8688524590163933%"),
    minHeight: hp("2.8688524590163933%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.621352132161459%"),
    top: hp("73.90710382513662%")
  },
  ImageBackground_59_2563: {
    width: wp("5.333333333333334%"),
    minWidth: wp("5.333333333333334%"),
    height: hp("2.73224043715847%"),
    minHeight: hp("2.73224043715847%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    resizeMode: "cover"
  },
  View_59_2564: {
    width: wp("21.6%"),
    minWidth: wp("21.6%"),
    minHeight: hp("2.73224043715847%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.2666666666666675%"),
    top: hp("0.1366120218579283%"),
    justifyContent: "center"
  },
  Text_59_2564: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_59_2565: {
    width: wp("19.466666666666665%"),
    minWidth: wp("19.466666666666665%"),
    height: hp("3.1420765027322406%"),
    minHeight: hp("3.1420765027322406%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("38.68802083333333%"),
    top: hp("73.63387978142076%")
  },
  View_59_2566: {
    width: wp("15.466666666666667%"),
    minWidth: wp("15.466666666666667%"),
    minHeight: hp("2.73224043715847%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("0.40983606557378494%"),
    justifyContent: "center"
  },
  Text_59_2566: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_59_2567: {
    width: wp("5.333333333333334%"),
    minWidth: wp("5.333333333333334%"),
    height: hp("2.73224043715847%"),
    minHeight: hp("2.73224043715847%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    resizeMode: "cover"
  },
  View_59_2568: {
    width: wp("22.133333333333333%"),
    minWidth: wp("22.133333333333333%"),
    height: hp("3.0054644808743167%"),
    minHeight: hp("3.0054644808743167%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("71.48802083333334%"),
    top: hp("73.90710382513662%")
  },
  View_59_2569: {
    width: wp("18.133333333333333%"),
    minWidth: wp("18.133333333333333%"),
    minHeight: hp("2.73224043715847%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("0.2732240437158424%"),
    justifyContent: "center"
  },
  Text_59_2569: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_59_2570: {
    width: wp("5.333333333333334%"),
    minWidth: wp("5.333333333333334%"),
    height: hp("2.73224043715847%"),
    minHeight: hp("2.73224043715847%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    resizeMode: "cover"
  },
  View_59_2571: {
    width: wp("94.13333333333334%"),
    minWidth: wp("94.13333333333334%"),
    height: hp("10.51912568306011%"),
    minHeight: hp("10.51912568306011%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.933333333333333%"),
    top: hp("80.46448087431693%")
  },
  View_59_2572: {
    width: wp("94.12397460937501%"),
    minWidth: wp("94.12397460937501%"),
    minHeight: hp("5.8743169398907105%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.009358723958333481%"),
    top: hp("4.644808743169406%"),
    justifyContent: "flex-start"
  },
  Text_59_2572: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_59_2573: {
    width: wp("19.87368367513021%"),
    minWidth: wp("19.87368367513021%"),
    minHeight: hp("3.415300546448088%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.4%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_59_2573: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_59_2574: {
    width: wp("5.333333333333334%"),
    minWidth: wp("5.333333333333334%"),
    height: hp("2.73224043715847%"),
    minHeight: hp("2.73224043715847%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0.2732240437158424%"),
    resizeMode: "cover"
  },
  ImageBackground_59_2575: {
    width: wp("94.13333333333334%"),
    minWidth: wp("94.13333333333334%"),
    height: hp("0%"),
    minHeight: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.221352132161458%"),
    top: hp("78.00546448087432%")
  },
  ImageBackground_59_2585: {
    width: wp("93.60000000000001%"),
    minWidth: wp("93.60000000000001%"),
    height: hp("0%"),
    minHeight: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.733333333333334%"),
    top: hp("91.53005464480874%")
  },
  ImageBackground_64_147: {
    width: wp("5.333333333333334%"),
    minWidth: wp("5.333333333333334%"),
    height: hp("2.73224043715847%"),
    minHeight: hp("2.73224043715847%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("62.4%"),
    top: hp("15.027322404371585%"),
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
