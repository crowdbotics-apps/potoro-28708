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
      <View style={styles.View_59_830}>
        <View style={styles.View_59_831} />
        <View style={styles.View_59_833}>
          <Text style={styles.Text_59_833}>Các phòng trọ đã đăng</Text>
        </View>
        <View style={styles.View_59_834}>
          <Text style={styles.Text_59_834}>Xem tất cả</Text>
        </View>
        <View style={styles.View_59_1007}>
          <Text style={styles.Text_59_1007}>
            Cho thuê nhà trọ sinh viên tại khu vực gần Đại học FPT Đà Nẵng, giá
            cả hợp lý
          </Text>
        </View>
        <View style={styles.View_59_1008} />
        <View style={styles.View_59_1009}>
          <Text style={styles.Text_59_1009}>Ngũ Hành Sơn, Đà Nẵng</Text>
        </View>
        <View style={styles.View_59_1010}>
          <Text style={styles.Text_59_1010}>NGUYÊN SINH</Text>
        </View>
        <TouchableOpacity
          style={styles.TouchableOpacity_59_1011}
          onPress={() =>
            this.props.navigation.navigate(getNavigationScreen("59_438"))
          }
        >
          <View style={styles.View_59_1012}>
            <View style={styles.View_59_1013} />
            <View style={styles.View_59_1014}>
              <Text style={styles.Text_59_1014}>NHẮN TIN</Text>
            </View>
          </View>
        </TouchableOpacity>
        <View style={styles.View_59_1015}>
          <View style={styles.View_59_1016}>
            <View style={styles.View_59_1017} />
            <View style={styles.View_59_1018}>
              <Text style={styles.Text_59_1018}>GỌI ĐIỆN</Text>
            </View>
          </View>
        </View>
        <View style={styles.View_59_1019}>
          <View style={styles.View_59_1020}>
            <Text style={styles.Text_59_1020}>89</Text>
          </View>
          <View style={styles.View_59_1021}>
            <Text style={styles.Text_59_1021}>Người đã thuê</Text>
          </View>
        </View>
        <View style={styles.View_59_1022}>
          <View style={styles.View_59_1023}>
            <Text style={styles.Text_59_1023}>10</Text>
          </View>
          <View style={styles.View_59_1024}>
            <Text style={styles.Text_59_1024}>Dịch vụ</Text>
          </View>
        </View>
        <View style={styles.View_59_1025}>
          <View style={styles.View_59_1026}>
            <Text style={styles.Text_59_1026}>2k</Text>
          </View>
          <View style={styles.View_59_1027}>
            <Text style={styles.Text_59_1027}>Khuyên dùng</Text>
          </View>
        </View>
        <View style={styles.View_59_1028}>
          <View style={styles.View_59_1029}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9605/5ed5/d64d3951c02b8c8511e89a86f258a5c3"
              }}
              style={styles.ImageBackground_59_1030}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/eedd/b4e9/e622a527071038c63dcc79932d0f329f"
              }}
              style={styles.ImageBackground_59_2377}
            />
          </View>
        </View>
      </View>
      <TouchableOpacity
        style={styles.TouchableOpacity_114_6}
        onPress={() =>
          this.props.navigation.navigate(getNavigationScreen("59_1871"))
        }
      >
        <View style={styles.View_59_2395}>
          <View style={styles.View_59_2396}>
            <Text style={styles.Text_59_2396}>
              Địa chỉ: Sau lưng đại học Việt Hàn, quận Ngũ Hành Sơn, Đà Nẵng
            </Text>
          </View>
          <View style={styles.View_59_2397}>
            <Text style={styles.Text_59_2397}>Phòng trọ sinh viên</Text>
          </View>
          <View style={styles.View_59_2398}>
            <Text style={styles.Text_59_2398}>1.4M</Text>
          </View>
          <View style={styles.View_59_2399}>
            <Text style={styles.Text_59_2399}>
              Phòng trọ sinh viên giá rẻ sau đại học Việt Hàn
            </Text>
          </View>
          <View style={styles.View_59_2400}>
            <Text style={styles.Text_59_2400}>Hết phòng</Text>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0c02/e80a/5ad4e6969833f856f372747648dc8fb2"
            }}
            style={styles.ImageBackground_59_2394}
          />
        </View>
        <View style={styles.View_59_2388}>
          <View style={styles.View_59_2389}>
            <Text style={styles.Text_59_2389}>
              Địa chỉ: Khu đô thị FPT, phường Hòa Hải, quận Ngũ Hành Sơn, Đà
              Nẵng
            </Text>
          </View>
          <View style={styles.View_59_2390}>
            <Text style={styles.Text_59_2390}>Căn hộ gia đình</Text>
          </View>
          <View style={styles.View_59_2391}>
            <Text style={styles.Text_59_2391}>4.2M</Text>
          </View>
          <View style={styles.View_59_2392}>
            <Text style={styles.Text_59_2392}>
              Căn hộ gia đình cho thuê khu đô thị FPT
            </Text>
          </View>
          <View style={styles.View_59_2393}>
            <Text style={styles.Text_59_2393}>Còn trống</Text>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2b47/fc00/c555b4fdc5570f12b3ba94ef28f2c2a9"
            }}
            style={styles.ImageBackground_59_2387}
          />
        </View>
      </TouchableOpacity>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0603/e7d0/1c5aa73ef08d665a4e442c1598d741bf"
        }}
        style={styles.ImageBackground_59_2378}
      />
      <View style={styles.View_64_254}>
        <Text style={styles.Text_64_254}>Trang cá nhân</Text>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: { backgroundColor: "rgba(255, 255, 255, 1)" },
  View_2: { height: hp("100%") },
  View_59_830: {
    width: wp("93.33333333333333%"),
    height: hp("91.29213483146067%"),
    top: hp("7.724719101123595%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.4666666666666663%")
  },
  View_59_831: {
    width: wp("93.33333333333333%"),
    height: hp("87.35868475410375%"),
    top: hp("3.933441505003511%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_59_833: {
    width: wp("45.33333333333333%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("56.60112359550561%"),
    justifyContent: "flex-start"
  },
  Text_59_833: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_59_834: {
    width: wp("19.2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("34.666666666666664%"),
    top: hp("86.23595505617978%"),
    justifyContent: "flex-start"
  },
  Text_59_834: {
    color: "rgba(150, 145, 132, 1)",
    fontSize: 12,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_59_1007: {
    width: wp("82.78260904947918%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.492753092447916%"),
    top: hp("44.18125795514396%"),
    justifyContent: "flex-start"
  },
  Text_59_1007: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.30000001192092896,
    textTransform: "none"
  },
  View_59_1008: {
    width: wp("89.06666666666668%"),
    height: hp("0.1404494382022472%"),
    top: hp("42.13483146067416%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.8666666666666676%"),
    backgroundColor: "rgba(150, 145, 132, 1)"
  },
  View_59_1009: {
    width: wp("48.8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("25.066666666666666%"),
    top: hp("35.81460674157303%"),
    justifyContent: "flex-start"
  },
  Text_59_1009: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 13,
    fontWeight: "300",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_59_1010: {
    width: wp("57.082124837239576%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("19.203841145833334%"),
    top: hp("30.430997355600418%"),
    justifyContent: "flex-start"
  },
  Text_59_1010: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 22,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  TouchableOpacity_59_1011: {
    width: wp("20.28985595703125%"),
    height: hp("3.2570482639784224%"),
    top: hp("14.402530970198386%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("50.31886393229166%")
  },
  View_59_1012: {
    width: wp("20.28985595703125%"),
    height: hp("3.2570482639784224%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_59_1013: {
    width: wp("20.28985595703125%"),
    height: hp("3.2570482639784224%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(33, 147, 176, 1)"
  },
  View_59_1014: {
    width: wp("17.599999999999998%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.4144531250000014%"),
    top: hp("0.4851094792398172%"),
    justifyContent: "flex-start"
  },
  Text_59_1014: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 10,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.08571427315473557,
    textTransform: "none"
  },
  View_59_1015: {
    width: wp("20.83091837565104%"),
    height: hp("3.2570482639784224%"),
    top: hp("14.402530970198386%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("25.700508626302085%")
  },
  View_59_1016: {
    width: wp("20.83091837565104%"),
    height: hp("3.2570482639784224%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_59_1017: {
    width: wp("20.83091837565104%"),
    height: hp("3.2570482639784224%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(33, 147, 176, 1)"
  },
  View_59_1018: {
    width: wp("15.961352539062501%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.70533854166667%"),
    top: hp("0.44116759568117914%"),
    justifyContent: "flex-start"
  },
  Text_59_1018: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 10,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.08571427315473557,
    textTransform: "none"
  },
  View_59_1019: {
    width: wp("25.6%"),
    height: hp("5.617977528089887%"),
    top: hp("21.48876404494382%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("60.53331705729166%")
  },
  View_59_1020: {
    width: wp("5.681159464518229%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9.866666666666667%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_59_1020: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 14,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.12857140600681305,
    textTransform: "none"
  },
  View_59_1021: {
    width: wp("25.6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("3.3707865168539364%"),
    justifyContent: "flex-start"
  },
  Text_59_1021: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.09999997913837433,
    textTransform: "none"
  },
  View_59_1022: {
    width: wp("17.599999999999998%"),
    height: hp("5.492178241858322%"),
    top: hp("21.614563331175383%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("42.13333333333333%")
  },
  View_59_1023: {
    width: wp("5.681159464518229%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.315767415364583%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_59_1023: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 14,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.12857140600681305,
    textTransform: "none"
  },
  View_59_1024: {
    width: wp("17.599999999999998%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("3.244987230622371%"),
    justifyContent: "flex-start"
  },
  Text_59_1024: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.09999997913837433,
    textTransform: "none"
  },
  View_59_1025: {
    width: wp("24%"),
    height: hp("6.89666833770409%"),
    top: hp("21.614571903528798%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11.733321126302084%")
  },
  View_59_1026: {
    width: wp("5.951690673828125%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9.097587076822917%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_59_1026: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 14,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.12857140600681305,
    textTransform: "none"
  },
  View_59_1027: {
    width: wp("24%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("3.244978658268959%"),
    justifyContent: "flex-start"
  },
  Text_59_1027: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.09999997913837433,
    textTransform: "none"
  },
  View_59_1028: {
    width: wp("25.333333333333336%"),
    minWidth: wp("25.333333333333336%"),
    height: hp("13.342696629213483%"),
    minHeight: hp("13.342696629213483%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("34.666666666666664%"),
    top: hp("0%")
  },
  View_59_1029: {
    width: wp("25.333333333333336%"),
    minWidth: wp("25.333333333333336%"),
    height: hp("13.342696629213483%"),
    minHeight: hp("13.342696629213483%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_59_1030: {
    width: wp("25.333333333333336%"),
    minWidth: wp("25.333333333333336%"),
    height: hp("13.342696629213483%"),
    minHeight: hp("13.342696629213483%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_59_2377: {
    width: wp("16%"),
    minWidth: wp("16%"),
    height: hp("8.426966292134832%"),
    minHeight: hp("8.426966292134832%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.800000000000004%"),
    top: hp("2.3876404494382015%"),
    resizeMode: "cover"
  },
  TouchableOpacity_114_6: {
    width: wp("93.33333333333333%"),
    minWidth: wp("93.33333333333333%"),
    height: hp("24.297752808988765%"),
    minHeight: hp("24.297752808988765%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.4666666666666663%"),
    top: hp("68.53932584269663%")
  },
  View_59_2395: {
    width: wp("45.33333333333333%"),
    minWidth: wp("45.33333333333333%"),
    height: hp("24.29774637972371%"),
    minHeight: hp("24.29774637972371%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("48%"),
    top: hp("0%")
  },
  View_59_2396: {
    width: wp("44.77211507161458%"),
    minWidth: wp("44.77211507161458%"),
    minHeight: hp("4.041617372062769%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.5610677083333329%"),
    top: hp("20.256128204002806%"),
    justifyContent: "flex-start"
  },
  Text_59_2396: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 8,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_59_2397: {
    width: wp("33.28453165690104%"),
    minWidth: wp("33.28453165690104%"),
    minHeight: hp("2.245342999361874%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.2666666666666657%"),
    top: hp("13.52011005530197%"),
    justifyContent: "flex-start"
  },
  Text_59_2397: {
    color: "rgba(150, 145, 132, 1)",
    fontSize: 9,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_59_2398: {
    width: wp("12.076687622070313%"),
    minWidth: wp("12.076687622070313%"),
    minHeight: hp("2.245342999361874%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("32.37291666666667%"),
    top: hp("17.711407950754918%"),
    justifyContent: "flex-start"
  },
  Text_59_2398: {
    color: "rgba(234, 173, 2, 1)",
    fontSize: 11,
    fontWeight: "900",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_59_2399: {
    width: wp("45.06666666666666%"),
    minWidth: wp("45.06666666666666%"),
    minHeight: hp("4.213483146067416%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.2666666666666657%"),
    top: hp("15.730337078651687%"),
    justifyContent: "flex-start"
  },
  Text_59_2399: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_59_2400: {
    width: wp("12.913839721679688%"),
    minWidth: wp("12.913839721679688%"),
    minHeight: hp("2.544722128450201%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("31.733333333333334%"),
    top: hp("12.921348314606746%"),
    justifyContent: "center"
  },
  Text_59_2400: {
    color: "rgba(240, 72, 72, 1)",
    fontSize: 7,
    fontWeight: "400",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_59_2394: {
    width: wp("45.33333333333333%"),
    minWidth: wp("45.33333333333333%"),
    height: hp("12.640449438202248%"),
    minHeight: hp("12.640449438202248%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    resizeMode: "cover"
  },
  View_59_2388: {
    width: wp("45.6%"),
    minWidth: wp("45.6%"),
    height: hp("24.297752808988765%"),
    minHeight: hp("24.297752808988765%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_59_2389: {
    width: wp("45.301961263020836%"),
    minWidth: wp("45.301961263020836%"),
    minHeight: hp("4.041617372062769%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.2979166666666675%"),
    top: hp("20.256136776356215%"),
    justifyContent: "flex-start"
  },
  Text_59_2389: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 8,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_59_2390: {
    width: wp("33.67843221028646%"),
    minWidth: wp("33.67843221028646%"),
    minHeight: hp("2.245342999361874%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("13.52011005530197%"),
    justifyContent: "flex-start"
  },
  Text_59_2390: {
    color: "rgba(150, 145, 132, 1)",
    fontSize: 9,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_59_2391: {
    width: wp("12.219606526692708%"),
    minWidth: wp("12.219606526692708%"),
    minHeight: hp("2.245342999361874%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("32.48619791666666%"),
    top: hp("17.711416523108326%"),
    justifyContent: "flex-start"
  },
  Text_59_2391: {
    color: "rgba(234, 173, 2, 1)",
    fontSize: 11,
    fontWeight: "900",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_59_2392: {
    width: wp("44.800000000000004%"),
    minWidth: wp("44.800000000000004%"),
    minHeight: hp("5.2391336205300325%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("15.765449438202253%"),
    justifyContent: "flex-start"
  },
  Text_59_2392: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_59_2393: {
    width: wp("13.066666666666665%"),
    minWidth: wp("13.066666666666665%"),
    minHeight: hp("2.544722128450201%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("32.53333333333333%"),
    top: hp("12.921348314606746%"),
    justifyContent: "center"
  },
  Text_59_2393: {
    color: "rgba(1, 132, 1, 1)",
    fontSize: 7,
    fontWeight: "400",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_59_2387: {
    width: wp("45.33333333333333%"),
    minWidth: wp("45.33333333333333%"),
    height: hp("12.640450509746422%"),
    minHeight: hp("12.640450509746422%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    resizeMode: "cover"
  },
  ImageBackground_59_2378: {
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
  View_64_254: {
    width: wp("52.26666666666666%"),
    minWidth: wp("52.26666666666666%"),
    minHeight: hp("3.932584269662921%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("22.133333333333333%"),
    top: hp("2.8089887640449436%"),
    justifyContent: "center"
  },
  Text_64_254: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 14,
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
