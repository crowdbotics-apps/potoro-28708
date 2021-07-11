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
      <View style={styles.View_59_571}>
        <View style={styles.View_59_572} />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6aa5/033e/05b1ec2f4e3c42d3367483cc8d850dc5"
          }}
          style={styles.ImageBackground_59_576}
        />
        <View style={styles.View_59_579}>
          <Text style={styles.Text_59_579}>Nhập địa chỉ cần tìm kiếm</Text>
        </View>
      </View>
      <View style={styles.View_59_580}>
        <Text style={styles.Text_59_580}>5 kết quả được tìm thấy</Text>
      </View>
      <TouchableOpacity
        style={styles.TouchableOpacity_59_581}
        onPress={() =>
          this.props.navigation.navigate(getNavigationScreen("1_2"))
        }
      >
        <View style={styles.View_59_582}>
          <View style={styles.View_59_2404}>
            <View style={styles.View_59_2405}>
              <Text style={styles.Text_59_2405}>Phòng trọ sinh viên</Text>
            </View>
            <View style={styles.View_59_2406}>
              <Text style={styles.Text_59_2406}>
                Địa chỉ: 12 Nam Kỳ Khởi Nghĩa, phường Hòa Hải, quận Ngũ Hành
                Sơn, Đà Nẵng
              </Text>
            </View>
            <View style={styles.View_59_2407}>
              <Text style={styles.Text_59_2407}>
                Phòng trọ sinh viên Nguyên Sinh cách Đại học FPT 200m, gần tạp
                hóa, siêu thị
              </Text>
            </View>
            <View style={styles.View_59_2408}>
              <Text style={styles.Text_59_2408}>1.7M</Text>
            </View>
            <View style={styles.View_59_2409}>
              <Text style={styles.Text_59_2409}>Còn trống</Text>
            </View>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b82b/87eb/b49c0cd28bbd663e5629e75d7ff73105"
              }}
              style={styles.ImageBackground_59_2410}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5d28/64bd/e47888ccbd00707e9bf020ec960f8e94"
              }}
              style={styles.ImageBackground_59_615}
            />
          </View>
        </View>
        <View style={styles.View_59_2500}>
          <View style={styles.View_59_2501}>
            <View style={styles.View_59_2502}>
              <Text style={styles.Text_59_2502}>Phòng trọ sinh viên</Text>
            </View>
            <View style={styles.View_59_2503}>
              <Text style={styles.Text_59_2503}>
                Địa chỉ: 86 Trần Hưng Đạo, quận Ngũ Hành Sơn, Đà Nẵng
              </Text>
            </View>
            <View style={styles.View_59_2504}>
              <Text style={styles.Text_59_2504}>
                Cho thuê trọ sinh viên giá rẻ gần Đại học Việt Hàn
              </Text>
            </View>
            <View style={styles.View_59_2505}>
              <Text style={styles.Text_59_2505}>1.2M</Text>
            </View>
            <View style={styles.View_59_2506}>
              <Text style={styles.Text_59_2506}>Hết phòng</Text>
            </View>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0e26/7700/2c304a473d46855945ccadfcdf7dafd6"
              }}
              style={styles.ImageBackground_59_2507}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5d28/64bd/e47888ccbd00707e9bf020ec960f8e94"
              }}
              style={styles.ImageBackground_59_2508}
            />
          </View>
        </View>
        <View style={styles.View_59_2509}>
          <View style={styles.View_59_2510}>
            <View style={styles.View_59_2511}>
              <Text style={styles.Text_59_2511}>Phòng trọ sinh viên</Text>
            </View>
            <View style={styles.View_59_2512}>
              <Text style={styles.Text_59_2512}>
                Địa chỉ: 122 Lê Văn Hiền, phường Hòa Hải, quận Ngũ Hành Sơn, Đà
                Nẵng
              </Text>
            </View>
            <View style={styles.View_59_2513}>
              <Text style={styles.Text_59_2513}>
                Phòng trọ cho thuê giá rẻ, không chung chủ
              </Text>
            </View>
            <View style={styles.View_59_2514}>
              <Text style={styles.Text_59_2514}>1.9M</Text>
            </View>
            <View style={styles.View_59_2515}>
              <Text style={styles.Text_59_2515}>Hết phòng</Text>
            </View>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2136/5594/2a97d4d536bbfdf25272f9934aeff038"
              }}
              style={styles.ImageBackground_59_2516}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5d28/64bd/e47888ccbd00707e9bf020ec960f8e94"
              }}
              style={styles.ImageBackground_59_2517}
            />
          </View>
        </View>
        <View style={styles.View_59_2518}>
          <View style={styles.View_59_2519}>
            <View style={styles.View_59_2520}>
              <Text style={styles.Text_59_2520}>Căn hộ gia đình</Text>
            </View>
            <View style={styles.View_59_2521}>
              <Text style={styles.Text_59_2521}>
                Địa chỉ: Khu đô thị FPT, phường Hòa Hải, quận Ngũ Hành Sơn, Đà
                Nẵng
              </Text>
            </View>
            <View style={styles.View_59_2522}>
              <Text style={styles.Text_59_2522}>
                Căn hộ gia đình cho thuê trong khu đô thị FPT, đầy đủ tiện nghi
              </Text>
            </View>
            <View style={styles.View_59_2523}>
              <Text style={styles.Text_59_2523}>4.2M</Text>
            </View>
            <View style={styles.View_59_2524}>
              <Text style={styles.Text_59_2524}>Còn trống</Text>
            </View>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5cc0/049f/30ab43e186b87e3c218476b4d37e896f"
              }}
              style={styles.ImageBackground_59_2525}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5d28/64bd/e47888ccbd00707e9bf020ec960f8e94"
              }}
              style={styles.ImageBackground_59_2526}
            />
          </View>
        </View>
        <View style={styles.View_59_2527}>
          <View style={styles.View_59_2528}>
            <View style={styles.View_59_2529}>
              <Text style={styles.Text_59_2529}>Phòng trọ sinh viên</Text>
            </View>
            <View style={styles.View_59_2530}>
              <Text style={styles.Text_59_2530}>
                Địa chỉ: 12 Thái Thị Bôi, Điện Ngọc, Điện Bàn, Quảng Nam
              </Text>
            </View>
            <View style={styles.View_59_2531}>
              <Text style={styles.Text_59_2531}>
                Cho thuê phòng trọ sinh viên giá rẻ, ngay chợ Điện Ngọc
              </Text>
            </View>
            <View style={styles.View_59_2532}>
              <Text style={styles.Text_59_2532}>1.5M</Text>
            </View>
            <View style={styles.View_59_2533}>
              <Text style={styles.Text_59_2533}>Còn trống</Text>
            </View>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/16a5/d409/28eaa3208085eec3d4c0d9a24776326f"
              }}
              style={styles.ImageBackground_59_2534}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5d28/64bd/e47888ccbd00707e9bf020ec960f8e94"
              }}
              style={styles.ImageBackground_59_2535}
            />
          </View>
        </View>
      </TouchableOpacity>
      <TouchableOpacity
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c8bc/adda/e51aaff34af01445709a889b11e33bef"
        }}
        style={styles.TouchableOpacity_59_2402}
        onPress={() =>
          this.props.navigation.navigate(getNavigationScreen("44_167"))
        }
      />
      <View style={styles.View_117_2}>
        <View style={styles.View_117_3} />
        <View style={styles.View_117_4}>
          <View style={styles.View_117_5}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9072/2560/744d05a0cc21b191fd35a7ce65341824"
              }}
              style={styles.ImageBackground_117_6}
            />
            <View style={styles.View_117_7}>
              <Text style={styles.Text_117_7}>Trang chủ</Text>
            </View>
          </View>
          <View style={styles.View_117_8}>
            <View style={styles.View_117_9}>
              <Text style={styles.Text_117_9}>Tìm kiếm</Text>
            </View>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3c43/df95/aeff332c92f01e3d6bdc2a19fcf55c35"
              }}
              style={styles.ImageBackground_117_10}
            />
          </View>
          <TouchableOpacity
            style={styles.TouchableOpacity_117_11}
            onPress={() =>
              this.props.navigation.navigate(getNavigationScreen("59_497"))
            }
          >
            <View style={styles.View_117_12}>
              <Text style={styles.Text_117_12}>Tin nhắn</Text>
            </View>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6e72/23d2/b6b47f174c4a59fb95c0aeaace67d221"
              }}
              style={styles.ImageBackground_117_13}
            />
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.TouchableOpacity_117_14}
            onPress={() =>
              this.props.navigation.navigate(getNavigationScreen("59_820"))
            }
          >
            <View style={styles.View_117_15}>
              <Text style={styles.Text_117_15}>Tài khoản</Text>
            </View>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/33a4/fba8/6cf4d0175fc67bc8dfd8aae4b3894113"
              }}
              style={styles.ImageBackground_117_16}
            />
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: { backgroundColor: "rgba(255, 255, 255, 1)" },
  View_2: { height: hp("100%") },
  View_59_571: {
    width: wp("86.93333333333332%"),
    minWidth: wp("86.93333333333332%"),
    height: hp("5.436752619368307%"),
    minHeight: hp("5.436752619368307%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.4%"),
    top: hp("1.585713933023174%")
  },
  View_59_572: {
    width: wp("86.93333333333332%"),
    minWidth: wp("86.93333333333332%"),
    height: hp("5.436752619368307%"),
    minHeight: hp("5.436752619368307%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(244, 244, 244, 1)",
    borderColor: "rgba(244, 244, 244, 1)",
    borderWidth: 1,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10
  },
  ImageBackground_59_576: {
    width: wp("8%"),
    height: hp("4.213483146067416%"),
    top: hp("0.6614770782127812%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_59_579: {
    width: wp("52.26666666666666%"),
    minWidth: wp("52.26666666666666%"),
    minHeight: hp("4.915730337078652%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8.8%"),
    top: hp("0.3805782018082866%"),
    justifyContent: "center"
  },
  Text_59_579: {
    color: "rgba(135, 122, 122, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_59_580: {
    width: wp("46.400000000000006%"),
    minWidth: wp("46.400000000000006%"),
    minHeight: hp("2.528089887640449%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.4%"),
    top: hp("9.831460674157304%"),
    justifyContent: "flex-start"
  },
  Text_59_580: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  TouchableOpacity_59_581: {
    width: wp("93.994775390625%"),
    minWidth: wp("93.994775390625%"),
    height: hp("80.19662921348315%"),
    minHeight: hp("80.19662921348315%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.4%"),
    top: hp("13.904494382022472%")
  },
  View_59_582: {
    width: wp("93.96915690104166%"),
    minWidth: wp("93.96915690104166%"),
    height: hp("14.466292134831459%"),
    minHeight: hp("14.466292134831459%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_59_2404: {
    width: wp("93.96915690104166%"),
    minWidth: wp("93.96915690104166%"),
    height: hp("14.466292134831459%"),
    minHeight: hp("14.466292134831459%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_59_2405: {
    width: wp("34.33072102864583%"),
    minWidth: wp("34.33072102864583%"),
    minHeight: hp("2.3762078767412165%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("25.30771484375%"),
    top: hp("0.2808988764044962%"),
    justifyContent: "flex-start"
  },
  Text_59_2405: {
    color: "rgba(150, 145, 132, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_59_2406: {
    width: wp("68.66144205729167%"),
    minWidth: wp("68.66144205729167%"),
    minHeight: hp("5.861312887641821%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("25.30771484375%"),
    top: hp("7.884764939211729%"),
    justifyContent: "center"
  },
  Text_59_2406: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_59_2407: {
    width: wp("68.66144205729167%"),
    minWidth: wp("68.66144205729167%"),
    minHeight: hp("4.910829629790917%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("25.30771484375%"),
    top: hp("3.290755025456461%"),
    justifyContent: "flex-start"
  },
  Text_59_2407: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_59_2408: {
    width: wp("19.359429931640626%"),
    minWidth: wp("19.359429931640626%"),
    minHeight: hp("2.387640449438202%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("74.39999999999999%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_59_2408: {
    color: "rgba(234, 173, 2, 1)",
    fontSize: 14,
    fontWeight: "900",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_59_2409: {
    width: wp("12.533333333333333%"),
    minWidth: wp("12.533333333333333%"),
    minHeight: hp("2.247191011235955%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("81.33333333333333%"),
    top: hp("11.657303370786517%"),
    justifyContent: "flex-start"
  },
  Text_59_2409: {
    color: "rgba(1, 132, 1, 1)",
    fontSize: 8,
    fontWeight: "400",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_59_2410: {
    width: wp("22.933333333333334%"),
    minWidth: wp("22.933333333333334%"),
    height: hp("14.185393258426968%"),
    minHeight: hp("14.185393258426968%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0.2808988764044962%"),
    resizeMode: "cover"
  },
  ImageBackground_59_615: {
    width: wp("69.43582356770833%"),
    minWidth: wp("69.43582356770833%"),
    height: hp("1.5967252488991017e-14%"),
    minHeight: hp("1.5967252488991017e-14%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("24.53333333333333%"),
    top: hp("14.466292134831464%")
  },
  View_59_2500: {
    width: wp("93.96915690104166%"),
    minWidth: wp("93.96915690104166%"),
    height: hp("14.466292134831459%"),
    minHeight: hp("14.466292134831459%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("16.432584269662925%")
  },
  View_59_2501: {
    width: wp("93.96915690104166%"),
    minWidth: wp("93.96915690104166%"),
    height: hp("14.466292134831459%"),
    minHeight: hp("14.466292134831459%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_59_2502: {
    width: wp("34.33072102864583%"),
    minWidth: wp("34.33072102864583%"),
    minHeight: hp("2.3762078767412165%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("25.30771484375%"),
    top: hp("0.2808988764044962%"),
    justifyContent: "flex-start"
  },
  Text_59_2502: {
    color: "rgba(150, 145, 132, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_59_2503: {
    width: wp("68.66144205729167%"),
    minWidth: wp("68.66144205729167%"),
    minHeight: hp("5.861312887641821%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("25.30771484375%"),
    top: hp("7.884764939211728%"),
    justifyContent: "center"
  },
  Text_59_2503: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_59_2504: {
    width: wp("68.66144205729167%"),
    minWidth: wp("68.66144205729167%"),
    minHeight: hp("4.910829629790917%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("25.30771484375%"),
    top: hp("3.290763597809864%"),
    justifyContent: "flex-start"
  },
  Text_59_2504: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_59_2505: {
    width: wp("19.359429931640626%"),
    minWidth: wp("19.359429931640626%"),
    minHeight: hp("2.387640449438202%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("74.39999999999999%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_59_2505: {
    color: "rgba(234, 173, 2, 1)",
    fontSize: 14,
    fontWeight: "900",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_59_2506: {
    width: wp("12.533333333333333%"),
    minWidth: wp("12.533333333333333%"),
    minHeight: hp("2.247191011235955%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("81.33333333333333%"),
    top: hp("11.657303370786515%"),
    justifyContent: "flex-start"
  },
  Text_59_2506: {
    color: "rgba(240, 72, 72, 1)",
    fontSize: 8,
    fontWeight: "400",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_59_2507: {
    width: wp("22.933333333333334%"),
    minWidth: wp("22.933333333333334%"),
    height: hp("14.185393258426968%"),
    minHeight: hp("14.185393258426968%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0.2808988764044962%"),
    resizeMode: "cover"
  },
  ImageBackground_59_2508: {
    width: wp("69.43582356770833%"),
    minWidth: wp("69.43582356770833%"),
    height: hp("1.5967252488991017e-14%"),
    minHeight: hp("1.5967252488991017e-14%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("24.53333333333333%"),
    top: hp("14.466292134831463%")
  },
  View_59_2509: {
    width: wp("93.96915690104166%"),
    minWidth: wp("93.96915690104166%"),
    height: hp("14.466292134831459%"),
    minHeight: hp("14.466292134831459%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("32.86516853932584%")
  },
  View_59_2510: {
    width: wp("93.96915690104166%"),
    minWidth: wp("93.96915690104166%"),
    height: hp("14.466292134831459%"),
    minHeight: hp("14.466292134831459%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_59_2511: {
    width: wp("34.33072102864583%"),
    minWidth: wp("34.33072102864583%"),
    minHeight: hp("2.3762078767412165%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("25.30771484375%"),
    top: hp("0.28089887640449973%"),
    justifyContent: "flex-start"
  },
  Text_59_2511: {
    color: "rgba(150, 145, 132, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_59_2512: {
    width: wp("68.66144205729167%"),
    minWidth: wp("68.66144205729167%"),
    minHeight: hp("5.861312887641821%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("25.30771484375%"),
    top: hp("7.884764939211728%"),
    justifyContent: "center"
  },
  Text_59_2512: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_59_2513: {
    width: wp("68.26666666666667%"),
    minWidth: wp("68.26666666666667%"),
    minHeight: hp("4.49438202247191%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("25.333333333333332%"),
    top: hp("3.2303370786516865%"),
    justifyContent: "flex-start"
  },
  Text_59_2513: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_59_2514: {
    width: wp("19.359429931640626%"),
    minWidth: wp("19.359429931640626%"),
    minHeight: hp("2.387640449438202%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("74.39999999999999%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_59_2514: {
    color: "rgba(234, 173, 2, 1)",
    fontSize: 14,
    fontWeight: "900",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_59_2515: {
    width: wp("12.533333333333333%"),
    minWidth: wp("12.533333333333333%"),
    minHeight: hp("2.247191011235955%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("81.33333333333333%"),
    top: hp("11.657303370786515%"),
    justifyContent: "flex-start"
  },
  Text_59_2515: {
    color: "rgba(240, 72, 72, 1)",
    fontSize: 8,
    fontWeight: "400",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_59_2516: {
    width: wp("22.933333333333334%"),
    minWidth: wp("22.933333333333334%"),
    height: hp("14.185393258426968%"),
    minHeight: hp("14.185393258426968%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0.28089887640449973%"),
    resizeMode: "cover"
  },
  ImageBackground_59_2517: {
    width: wp("69.43582356770833%"),
    minWidth: wp("69.43582356770833%"),
    height: hp("1.5967252488991017e-14%"),
    minHeight: hp("1.5967252488991017e-14%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("24.53333333333333%"),
    top: hp("14.46629213483147%")
  },
  View_59_2518: {
    width: wp("93.96915690104166%"),
    minWidth: wp("93.96915690104166%"),
    height: hp("14.466292134831459%"),
    minHeight: hp("14.466292134831459%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("49.29775280898877%")
  },
  View_59_2519: {
    width: wp("93.96915690104166%"),
    minWidth: wp("93.96915690104166%"),
    height: hp("14.466292134831459%"),
    minHeight: hp("14.466292134831459%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_59_2520: {
    width: wp("34.33072102864583%"),
    minWidth: wp("34.33072102864583%"),
    minHeight: hp("2.3762078767412165%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("25.30771484375%"),
    top: hp("0.2808988764044926%"),
    justifyContent: "flex-start"
  },
  Text_59_2520: {
    color: "rgba(150, 145, 132, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_59_2521: {
    width: wp("68.66144205729167%"),
    minWidth: wp("68.66144205729167%"),
    minHeight: hp("5.861312887641821%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("25.30771484375%"),
    top: hp("7.8847649392117205%"),
    justifyContent: "center"
  },
  Text_59_2521: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_59_2522: {
    width: wp("68.66144205729167%"),
    minWidth: wp("68.66144205729167%"),
    minHeight: hp("4.910829629790917%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("25.30771484375%"),
    top: hp("3.290763597809871%"),
    justifyContent: "flex-start"
  },
  Text_59_2522: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_59_2523: {
    width: wp("19.359429931640626%"),
    minWidth: wp("19.359429931640626%"),
    minHeight: hp("2.387640449438202%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("74.39999999999999%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_59_2523: {
    color: "rgba(234, 173, 2, 1)",
    fontSize: 14,
    fontWeight: "900",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_59_2524: {
    width: wp("12.533333333333333%"),
    minWidth: wp("12.533333333333333%"),
    minHeight: hp("2.247191011235955%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("81.33333333333333%"),
    top: hp("11.657303370786508%"),
    justifyContent: "flex-start"
  },
  Text_59_2524: {
    color: "rgba(1, 132, 1, 1)",
    fontSize: 8,
    fontWeight: "400",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_59_2525: {
    width: wp("22.933333333333334%"),
    minWidth: wp("22.933333333333334%"),
    height: hp("14.185393258426968%"),
    minHeight: hp("14.185393258426968%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0.2808988764044926%"),
    resizeMode: "cover"
  },
  ImageBackground_59_2526: {
    width: wp("69.43582356770833%"),
    minWidth: wp("69.43582356770833%"),
    height: hp("1.5967252488991017e-14%"),
    minHeight: hp("1.5967252488991017e-14%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("24.53333333333333%"),
    top: hp("14.466292134831463%")
  },
  View_59_2527: {
    width: wp("93.994775390625%"),
    minWidth: wp("93.994775390625%"),
    height: hp("14.466292134831459%"),
    minHeight: hp("14.466292134831459%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("65.73033707865169%")
  },
  View_59_2528: {
    width: wp("93.994775390625%"),
    minWidth: wp("93.994775390625%"),
    height: hp("14.466292134831459%"),
    minHeight: hp("14.466292134831459%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_59_2529: {
    width: wp("34.33072102864583%"),
    minWidth: wp("34.33072102864583%"),
    minHeight: hp("2.3762078767412165%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("25.30771484375%"),
    top: hp("0.2808988764044926%"),
    justifyContent: "flex-start"
  },
  Text_59_2529: {
    color: "rgba(150, 145, 132, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_59_2530: {
    width: wp("68.66144205729167%"),
    minWidth: wp("68.66144205729167%"),
    minHeight: hp("5.861312887641821%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("25.30771484375%"),
    top: hp("7.8847649392117205%"),
    justifyContent: "center"
  },
  Text_59_2530: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_59_2531: {
    width: wp("68.66144205729167%"),
    minWidth: wp("68.66144205729167%"),
    minHeight: hp("4.910829629790917%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("25.333333333333332%"),
    top: hp("3.2303370786516723%"),
    justifyContent: "flex-start"
  },
  Text_59_2531: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_59_2532: {
    width: wp("19.359429931640626%"),
    minWidth: wp("19.359429931640626%"),
    minHeight: hp("2.387640449438202%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("74.39999999999999%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_59_2532: {
    color: "rgba(234, 173, 2, 1)",
    fontSize: 14,
    fontWeight: "900",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_59_2533: {
    width: wp("12.533333333333333%"),
    minWidth: wp("12.533333333333333%"),
    minHeight: hp("2.247191011235955%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("81.33333333333333%"),
    top: hp("11.657303370786508%"),
    justifyContent: "flex-start"
  },
  Text_59_2533: {
    color: "rgba(1, 132, 1, 1)",
    fontSize: 8,
    fontWeight: "400",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_59_2534: {
    width: wp("22.933333333333334%"),
    minWidth: wp("22.933333333333334%"),
    height: hp("14.185393258426968%"),
    minHeight: hp("14.185393258426968%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0.2808988764044926%"),
    resizeMode: "cover"
  },
  ImageBackground_59_2535: {
    width: wp("69.43582356770833%"),
    minWidth: wp("69.43582356770833%"),
    height: hp("1.5967252488991017e-14%"),
    minHeight: hp("1.5967252488991017e-14%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("24.53333333333333%"),
    top: hp("14.466292134831463%")
  },
  TouchableOpacity_59_2402: {
    width: wp("6.666666666666667%"),
    height: hp("3.51123595505618%"),
    top: hp("2.8089887640449436%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("91.46666666666667%"),
    resizeMode: "cover"
  },
  View_117_2: {
    width: wp("100.26666666666667%"),
    minWidth: wp("100.26666666666667%"),
    height: hp("9.410112359550562%"),
    minHeight: hp("9.410112359550562%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-0.26666666666666666%"),
    top: hp("90.58988764044943%")
  },
  View_117_3: {
    width: wp("100.26666666666667%"),
    minWidth: wp("100.26666666666667%"),
    height: hp("9.410112359550562%"),
    minHeight: hp("9.410112359550562%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    borderColor: "rgba(244, 244, 244, 1)",
    borderWidth: 1
  },
  View_117_4: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("6.03932584269663%"),
    minHeight: hp("6.03932584269663%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.26666666666666666%"),
    top: hp("1.68539325842697%")
  },
  View_117_5: {
    width: wp("21.066666666666666%"),
    minWidth: wp("21.066666666666666%"),
    height: hp("6.03932584269663%"),
    minHeight: hp("6.03932584269663%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_117_6: {
    width: wp("5.333333333333334%"),
    minWidth: wp("5.333333333333334%"),
    height: hp("2.8089887640449436%"),
    minHeight: hp("2.8089887640449436%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.733333333333333%"),
    top: hp("0%"),
    resizeMode: "cover"
  },
  View_117_7: {
    width: wp("21.066666666666666%"),
    minWidth: wp("21.066666666666666%"),
    minHeight: hp("2.528089887640449%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("3.511235955056179%"),
    justifyContent: "flex-start"
  },
  Text_117_7: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_117_8: {
    width: wp("21.066666666666666%"),
    minWidth: wp("21.066666666666666%"),
    height: hp("6.03932584269663%"),
    minHeight: hp("6.03932584269663%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("26.400000000000002%"),
    top: hp("0%")
  },
  View_117_9: {
    width: wp("21.066666666666666%"),
    minWidth: wp("21.066666666666666%"),
    minHeight: hp("2.528089887640449%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("3.511235955056179%"),
    justifyContent: "flex-start"
  },
  Text_117_9: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_117_10: {
    width: wp("5.333333333333334%"),
    minWidth: wp("5.333333333333334%"),
    height: hp("2.8089887640449436%"),
    minHeight: hp("2.8089887640449436%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.733333333333331%"),
    top: hp("0%"),
    resizeMode: "cover"
  },
  TouchableOpacity_117_11: {
    width: wp("21.066666666666666%"),
    minWidth: wp("21.066666666666666%"),
    height: hp("6.03932584269663%"),
    minHeight: hp("6.03932584269663%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("51.46666666666667%"),
    top: hp("0%")
  },
  View_117_12: {
    width: wp("21.066666666666666%"),
    minWidth: wp("21.066666666666666%"),
    minHeight: hp("2.528089887640449%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("3.511235955056179%"),
    justifyContent: "flex-start"
  },
  Text_117_12: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_117_13: {
    width: wp("5.333333333333334%"),
    minWidth: wp("5.333333333333334%"),
    height: hp("2.8089887640449436%"),
    minHeight: hp("2.8089887640449436%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.733333333333327%"),
    top: hp("0%"),
    resizeMode: "cover"
  },
  TouchableOpacity_117_14: {
    width: wp("21.066666666666666%"),
    minWidth: wp("21.066666666666666%"),
    height: hp("6.03932584269663%"),
    minHeight: hp("6.03932584269663%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("78.93333333333334%"),
    top: hp("0%")
  },
  View_117_15: {
    width: wp("21.066666666666666%"),
    minWidth: wp("21.066666666666666%"),
    minHeight: hp("2.528089887640449%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("3.511235955056179%"),
    justifyContent: "flex-start"
  },
  Text_117_15: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_117_16: {
    width: wp("5.333333333333334%"),
    minWidth: wp("5.333333333333334%"),
    height: hp("2.8089887640449436%"),
    minHeight: hp("2.8089887640449436%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.733333333333334%"),
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
