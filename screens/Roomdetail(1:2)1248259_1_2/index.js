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
      <View style={styles.View_1_4} />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0603/e7d0/1c5aa73ef08d665a4e442c1598d741bf"
        }}
        style={styles.ImageBackground_1_5}
      />
      <View style={styles.View_1_6}>
        <Text style={styles.Text_1_6}>Chi tiết phòng trọ</Text>
      </View>
      <View style={styles.View_1_11}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1518/6e51/cfe92f4c9098da4ff2fda8111823312a"
          }}
          style={styles.ImageBackground_1_12}
        />
        <View style={styles.View_1_13}>
          <Text style={styles.Text_1_13}>3K/chữ</Text>
        </View>
      </View>
      <View style={styles.View_1_14}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9e53/4a91/abe89d5c2fa5763555c113c300f5267f"
          }}
          style={styles.ImageBackground_1_15}
        />
        <View style={styles.View_1_16}>
          <Text style={styles.Text_1_16}>25K/người</Text>
        </View>
      </View>
      <View style={styles.View_1_17}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/81aa/3cad/f33140c222f5c7d4a314ec2b57811103"
          }}
          style={styles.ImageBackground_1_18}
        />
        <View style={styles.View_1_19}>
          <Text style={styles.Text_1_19}>50K/người</Text>
        </View>
      </View>
      <View style={styles.View_1_20}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/34cf/0f71/f185783712ff9d58faeb850ceac68805"
          }}
          style={styles.ImageBackground_1_21}
        />
        <View style={styles.View_1_22}>
          <Text style={styles.Text_1_22}>Vệ sinh riêng</Text>
        </View>
      </View>
      <View style={styles.View_1_23}>
        <View style={styles.View_1_24}>
          <Text style={styles.Text_1_24}>Nấu ăn</Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a358/ab39/c1a51032e3462d50a63a789d7c8ee16f"
          }}
          style={styles.ImageBackground_1_25}
        />
      </View>
      <View style={styles.View_1_26}>
        <View style={styles.View_1_27}>
          <Text style={styles.Text_1_27}>Chỗ để xe</Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1495/db19/fad25d19d0f04974f8f758726fc31266"
          }}
          style={styles.ImageBackground_1_28}
        />
      </View>
      <TouchableOpacity
        style={styles.TouchableOpacity_1_29}
        onPress={() =>
          this.props.navigation.navigate(getNavigationScreen("59_820"))
        }
      >
        <View style={styles.View_1_30}>
          <Text style={styles.Text_1_30}>Nguyên Sinh</Text>
        </View>
        <View style={styles.View_1_31}>
          <Text style={styles.Text_1_31}>10 phòng</Text>
        </View>
      </TouchableOpacity>
      <View style={styles.View_1_35}>
        <View style={styles.View_1_36}>
          <Text style={styles.Text_1_36}>
            Trọ không chung chủ, an ninh tốt.
          </Text>
        </View>
        <View style={styles.View_1_37}>
          <Text style={styles.Text_1_37}>Mô tả thêm</Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c949/5b3e/a5a858210f0542e6f6be1f80d920aa3d"
          }}
          style={styles.ImageBackground_1_38}
        />
      </View>
      <View style={styles.View_1_39}>
        <Text style={styles.Text_1_39}>Phòng trọ tương tự</Text>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9f85/c0f3/0d3663a99dcf46afae949f577cd28047"
        }}
        style={styles.ImageBackground_1_40}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9f85/c0f3/0d3663a99dcf46afae949f577cd28047"
        }}
        style={styles.ImageBackground_1_41}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9e5f/d67d/e377e538c893ee625f65304251ec0747"
        }}
        style={styles.ImageBackground_59_2361}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a87d/5e05/fa46052e477a723de79f8938d368bb15"
        }}
        style={styles.ImageBackground_1_42}
      />
      <TouchableOpacity
        style={styles.TouchableOpacity_114_4}
        onPress={() =>
          this.props.navigation.navigate(getNavigationScreen("1_6"))
        }
      >
        <View style={styles.View_1_45}>
          <View style={styles.View_1_46}>
            <Text style={styles.Text_1_46}>
              Địa chỉ: 12 Huỳnh Văn Nghệ, phường Hòa Hải, Đà Nẵng
            </Text>
          </View>
          <View style={styles.View_1_47}>
            <Text style={styles.Text_1_47}>Phòng trọ sinh viên</Text>
          </View>
          <View style={styles.View_1_48}>
            <Text style={styles.Text_1_48}>1.8M</Text>
          </View>
          <View style={styles.View_1_49}>
            <Text style={styles.Text_1_49}>
              Phòng trọ giá rẻ gần khu đô thị FPT
            </Text>
          </View>
          <View style={styles.View_1_50}>
            <Text style={styles.Text_1_50}>Còn trống</Text>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3d49/2c32/9bcd0f3fb945eb54c07519ec73a9a1bf"
            }}
            style={styles.ImageBackground_1_83}
          />
        </View>
        <View style={styles.View_1_51}>
          <View style={styles.View_1_52}>
            <Text style={styles.Text_1_52}>
              Địa chỉ: Sau lưng đại học Việt Hàn, quận Ngũ Hành Sơn, Đà Nẵng
            </Text>
          </View>
          <View style={styles.View_1_53}>
            <Text style={styles.Text_1_53}>Phòng trọ sinh viên</Text>
          </View>
          <View style={styles.View_1_54}>
            <Text style={styles.Text_1_54}>1.4M</Text>
          </View>
          <View style={styles.View_1_55}>
            <Text style={styles.Text_1_55}>
              Phòng trọ sinh viên giá rẻ sau đại học Việt Hàn
            </Text>
          </View>
          <View style={styles.View_1_56}>
            <Text style={styles.Text_1_56}>Hết phòng</Text>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4dd1/b8aa/974d7e1b11e7ac607f0204a66b2559f3"
            }}
            style={styles.ImageBackground_1_87}
          />
        </View>
        <View style={styles.View_1_57}>
          <View style={styles.View_1_58}>
            <Text style={styles.Text_1_58}>
              Địa chỉ: 21 Đào Tấn, phường Hòa Hải, quận Ngũ Hành Sơn, Đà nẵng
            </Text>
          </View>
          <View style={styles.View_1_59}>
            <Text style={styles.Text_1_59}>Phòng trọ sinh viên</Text>
          </View>
          <View style={styles.View_1_60}>
            <Text style={styles.Text_1_60}>1.8M</Text>
          </View>
          <View style={styles.View_1_61}>
            <Text style={styles.Text_1_61}>
              Phòng trọ sinh viên cao đẳng du lịch
            </Text>
          </View>
          <View style={styles.View_1_62}>
            <Text style={styles.Text_1_62}>Còn trống</Text>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/83c9/a9a3/af84b6cccf6fe3f5c5ab1e0dedc023c8"
            }}
            style={styles.ImageBackground_1_88}
          />
        </View>
        <View style={styles.View_1_63}>
          <View style={styles.View_1_64}>
            <Text style={styles.Text_1_64}>
              Địa chỉ: Khu đô thị FPT, phường Hòa Hải, quận Ngũ Hành Sơn, Đà
              Nẵng
            </Text>
          </View>
          <View style={styles.View_1_65}>
            <Text style={styles.Text_1_65}>Căn hộ gia đình</Text>
          </View>
          <View style={styles.View_1_66}>
            <Text style={styles.Text_1_66}>4.2M</Text>
          </View>
          <View style={styles.View_1_67}>
            <Text style={styles.Text_1_67}>
              Căn hộ gia đình cho thuê khu đô thị FPT
            </Text>
          </View>
          <View style={styles.View_1_68}>
            <Text style={styles.Text_1_68}>Còn trống</Text>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2b47/fc00/c555b4fdc5570f12b3ba94ef28f2c2a9"
            }}
            style={styles.ImageBackground_1_85}
          />
        </View>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.TouchableOpacity_1_69}
        onPress={() =>
          this.props.navigation.navigate(getNavigationScreen("59_438"))
        }
      >
        <View style={styles.View_1_70} />
        <View style={styles.View_1_71}>
          <Text style={styles.Text_1_71}>Nhắn tin</Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/40cd/eeb8/ad81e0e0c64aba161c0835a38b662483"
          }}
          style={styles.ImageBackground_1_72}
        />
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.TouchableOpacity_1_73}
        onPress={() =>
          this.props.navigation.navigate(getNavigationScreen("59_269"))
        }
      >
        <View style={styles.View_1_74} />
        <View style={styles.View_1_75}>
          <Text style={styles.Text_1_75}>Đặt phòng</Text>
        </View>
      </TouchableOpacity>
      <View style={styles.View_1_76}>
        <View style={styles.View_1_77} />
        <View style={styles.View_1_78}>
          <Text style={styles.Text_1_78}>Gọi điện</Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4a22/3482/9db2a9f7420b1b25a1f350d92da685d6"
          }}
          style={styles.ImageBackground_1_79}
        />
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4245/06e8/8f33133b2d34be233064f95121cc060c"
        }}
        style={styles.ImageBackground_1_80}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/bac8/06c2/e0511b9fac88cb500a04bc73c12334c9"
        }}
        style={styles.ImageBackground_1_81}
      />
      <View style={styles.View_59_2537}>
        <View style={styles.View_1_3} />
        <View style={styles.View_1_7}>
          <Text style={styles.Text_1_7}>
            Phòng trọ sinh viên Nguyên Sinh cách Đại học FPT 200m, gần tạp hóa,
            siêu thị
          </Text>
        </View>
        <View style={styles.View_1_8}>
          <Text style={styles.Text_1_8}>Phòng trọ sinh viên</Text>
        </View>
        <View style={styles.View_1_9}>
          <Text style={styles.Text_1_9}>
            Địa chỉ: 12 Nam Kỳ Khởi Nghĩa, phường Hòa Hải, quận Ngũ Hành Sơn, Đà
            Nẵng
          </Text>
        </View>
        <View style={styles.View_1_10}>
          <Text style={styles.Text_1_10}>Còn trống</Text>
        </View>
        <View style={styles.View_1_84}>
          <Text style={styles.Text_1_84}>1.7M</Text>
        </View>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/81a1/269c/706622688abae5cbcacc807835452dd4"
        }}
        style={styles.ImageBackground_1_86}
      />
      <View style={styles.View_1_89}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9f85/c0f3/0d3663a99dcf46afae949f577cd28047"
          }}
          style={styles.ImageBackground_1_90}
        />
        <View style={styles.View_1_91}>
          <Text style={styles.Text_1_91}>Đánh giá:</Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/276e/6559/6dfda6ea699dbd4a8eb7d2e71903e726"
          }}
          style={styles.ImageBackground_1_92}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/276e/6559/6dfda6ea699dbd4a8eb7d2e71903e726"
          }}
          style={styles.ImageBackground_1_93}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/276e/6559/6dfda6ea699dbd4a8eb7d2e71903e726"
          }}
          style={styles.ImageBackground_1_94}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/276e/6559/6dfda6ea699dbd4a8eb7d2e71903e726"
          }}
          style={styles.ImageBackground_1_95}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8364/a25b/0c9b42111797414cc5f8e1e43754e746"
          }}
          style={styles.ImageBackground_1_96}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/cbba/13ee/caead2e0549318f147857dea15cfbbdb"
          }}
          style={styles.ImageBackground_1_97}
        />
      </View>
      <View style={styles.View_1_98}>
        <Text style={styles.Text_1_98}>(22)</Text>
      </View>
      <View style={styles.View_1_99}>
        <Text style={styles.Text_1_99}>Bình luận</Text>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/194b/4800/3eb48e3623e5d85e1d86950370b7241a"
        }}
        style={styles.ImageBackground_67_2}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/194b/4800/3eb48e3623e5d85e1d86950370b7241a"
        }}
        style={styles.ImageBackground_67_3}
      />
      <View style={styles.View_1_103} />
      <View style={styles.View_1_104}>
        <Text style={styles.Text_1_104}>Phòng trọ rộng rãi thoáng mát</Text>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/bf69/bef3/cd0868a47929172b154c2b8584af1004"
        }}
        style={styles.ImageBackground_1_105}
      />
      <View style={styles.View_1_106} />
      <View style={styles.View_1_107}>
        <Text style={styles.Text_1_107}>
          An ninh tốt, chủ trọ nhiệt tình, chỗ để xe rộng rãi
        </Text>
      </View>
      <View style={styles.View_1_108} />
      <View style={styles.View_1_109} />
      <View style={styles.View_1_110}>
        <Text style={styles.Text_1_110}>
          Phòng mát mẻ, có bếp nấu ăn và bồn rửa mặt, giá cả hợp lý cho sinh
          viên
        </Text>
      </View>
      <View style={styles.View_1_111}>
        <Text style={styles.Text_1_111}>Xem thêm</Text>
      </View>
      <View style={styles.View_1_112}>
        <Text style={styles.Text_1_112}>Quốc Tuấn</Text>
      </View>
      <View style={styles.View_1_113}>
        <Text style={styles.Text_1_113}>Hương Giang</Text>
      </View>
      <View style={styles.View_1_114}>
        <Text style={styles.Text_1_114}>Lê Khôi</Text>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/fb6a/eacb/8476def2e827137ef2fb606fb5531eb1"
        }}
        style={styles.ImageBackground_1_115}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d4cf/570d/132be2352faafdea2e15f7d4fe0a405f"
        }}
        style={styles.ImageBackground_1_116}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/bd90/552e/aa8cdf70518fbc8847e2f976ae12225d"
        }}
        style={styles.ImageBackground_29_3}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9b9f/f99f/95884641bd5563bc5a408b8b1c849855"
        }}
        style={styles.ImageBackground_59_2363}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d7b7/6122/c06064d74f51b9686fe9d277be6e7b37"
        }}
        style={styles.ImageBackground_67_4}
      />
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: { backgroundColor: "rgba(255, 255, 255, 1)" },
  View_2: { height: hp("190.1639344262295%") },
  View_1_4: {
    width: wp("94.39999999999999%"),
    minWidth: wp("94.39999999999999%"),
    height: hp("11.33879781420765%"),
    minHeight: hp("11.33879781420765%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.666666666666667%"),
    top: hp("64.75409836065575%"),
    backgroundColor: "rgba(244, 244, 244, 1)"
  },
  ImageBackground_1_5: {
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
  View_1_6: {
    width: wp("52.26666666666666%"),
    minWidth: wp("52.26666666666666%"),
    minHeight: hp("3.825136612021858%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("24%"),
    top: hp("2.73224043715847%"),
    justifyContent: "center"
  },
  Text_1_6: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1_11: {
    width: wp("17.599999999999998%"),
    minWidth: wp("17.599999999999998%"),
    height: hp("2.8688524590163933%"),
    minHeight: hp("2.8688524590163933%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.666666666666667%"),
    top: hp("67.21311475409836%")
  },
  ImageBackground_1_12: {
    width: wp("5.333333333333334%"),
    minWidth: wp("5.333333333333334%"),
    height: hp("2.73224043715847%"),
    minHeight: hp("2.73224043715847%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0.1366120218579283%"),
    resizeMode: "cover"
  },
  View_1_13: {
    width: wp("13.866666666666665%"),
    minWidth: wp("13.866666666666665%"),
    minHeight: hp("2.73224043715847%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.7333333333333334%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_1_13: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1_14: {
    width: wp("22.666666666666664%"),
    minWidth: wp("22.666666666666664%"),
    height: hp("2.73224043715847%"),
    minHeight: hp("2.73224043715847%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("39.733333333333334%"),
    top: hp("67.34972677595628%")
  },
  ImageBackground_1_15: {
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
  View_1_16: {
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
  Text_1_16: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1_17: {
    width: wp("24.53333333333333%"),
    minWidth: wp("24.53333333333333%"),
    height: hp("2.8688524590163933%"),
    minHeight: hp("2.8688524590163933%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("72.53333333333333%"),
    top: hp("67.21311475409836%")
  },
  ImageBackground_1_18: {
    width: wp("5.333333333333334%"),
    minWidth: wp("5.333333333333334%"),
    height: hp("2.73224043715847%"),
    minHeight: hp("2.73224043715847%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0.1366120218579283%"),
    resizeMode: "cover"
  },
  View_1_19: {
    width: wp("19.2%"),
    minWidth: wp("19.2%"),
    minHeight: hp("2.73224043715847%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.333333333333329%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_1_19: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1_20: {
    width: wp("25.866666666666667%"),
    minWidth: wp("25.866666666666667%"),
    height: hp("2.8688524590163933%"),
    minHeight: hp("2.8688524590163933%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.933333333333333%"),
    top: hp("71.99453551912568%")
  },
  ImageBackground_1_21: {
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
  View_1_22: {
    width: wp("21.6%"),
    minWidth: wp("21.6%"),
    minHeight: hp("2.73224043715847%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.266666666666668%"),
    top: hp("0.1366120218579283%"),
    justifyContent: "center"
  },
  Text_1_22: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1_23: {
    width: wp("19.466666666666665%"),
    minWidth: wp("19.466666666666665%"),
    height: hp("3.1420765027322406%"),
    minHeight: hp("3.1420765027322406%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("40%"),
    top: hp("71.72131147540983%")
  },
  View_1_24: {
    width: wp("15.466666666666667%"),
    minWidth: wp("15.466666666666667%"),
    minHeight: hp("2.73224043715847%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("0.4098360655737707%"),
    justifyContent: "center"
  },
  Text_1_24: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_1_25: {
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
  View_1_26: {
    width: wp("22.133333333333333%"),
    minWidth: wp("22.133333333333333%"),
    height: hp("3.0054644808743167%"),
    minHeight: hp("3.0054644808743167%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("72.8%"),
    top: hp("71.99453551912568%")
  },
  View_1_27: {
    width: wp("18.133333333333333%"),
    minWidth: wp("18.133333333333333%"),
    minHeight: hp("2.73224043715847%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("0.2732240437158566%"),
    justifyContent: "center"
  },
  Text_1_27: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_1_28: {
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
  TouchableOpacity_1_29: {
    width: wp("22.666666666666664%"),
    minWidth: wp("22.666666666666664%"),
    height: hp("4.371584699453552%"),
    minHeight: hp("4.371584699453552%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11.733333333333333%"),
    top: hp("118.16939890710383%")
  },
  View_1_30: {
    width: wp("22.666666666666664%"),
    minWidth: wp("22.666666666666664%"),
    minHeight: hp("2.459016393442623%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_1_30: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1_31: {
    width: wp("22.666666666666664%"),
    minWidth: wp("22.666666666666664%"),
    minHeight: hp("1.7759562841530054%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("2.5956284153005527%"),
    justifyContent: "flex-start"
  },
  Text_1_31: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 8,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1_35: {
    width: wp("94.13333333333334%"),
    minWidth: wp("94.13333333333334%"),
    height: hp("10.51912568306011%"),
    minHeight: hp("10.51912568306011%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.933333333333333%"),
    top: hp("77.04918032786885%")
  },
  View_1_36: {
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
  Text_1_36: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1_37: {
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
  Text_1_37: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_1_38: {
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
  View_1_39: {
    width: wp("34.4%"),
    minWidth: wp("34.4%"),
    minHeight: hp("2.73224043715847%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.666666666666667%"),
    top: hp("124.86338797814207%"),
    justifyContent: "center"
  },
  Text_1_39: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_1_40: {
    width: wp("93.60000000000001%"),
    minWidth: wp("93.60000000000001%"),
    height: hp("0%"),
    minHeight: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.933333333333333%"),
    top: hp("76.09289617486338%")
  },
  ImageBackground_1_41: {
    width: wp("93.60000000000001%"),
    minWidth: wp("93.60000000000001%"),
    height: hp("1.5530988759783612e-14%"),
    minHeight: hp("1.5530988759783612e-14%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.4%"),
    top: hp("116.80327868852459%")
  },
  ImageBackground_59_2361: {
    width: wp("93.60000000000001%"),
    minWidth: wp("93.60000000000001%"),
    height: hp("1.5530988759783612e-14%"),
    minHeight: hp("1.5530988759783612e-14%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.4%"),
    top: hp("116.80327868852459%")
  },
  ImageBackground_1_42: {
    width: wp("100.001416015625%"),
    minWidth: wp("100.001416015625%"),
    height: hp("0%"),
    minHeight: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.0666666666666667%"),
    top: hp("182.92349726775956%")
  },
  TouchableOpacity_114_4: {
    width: wp("93.86666666666666%"),
    minWidth: wp("93.86666666666666%"),
    height: hp("48.90709548700051%"),
    minHeight: hp("48.90709548700051%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.4673177083333333%"),
    top: hp("129.23497267759564%")
  },
  View_1_45: {
    width: wp("45.86666666666667%"),
    minWidth: wp("45.86666666666667%"),
    height: hp("23.36065573770492%"),
    minHeight: hp("23.36065573770492%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_1_46: {
    width: wp("45.301961263020836%"),
    minWidth: wp("45.301961263020836%"),
    minHeight: hp("3.931190667908049%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.5645833333333337%"),
    top: hp("19.429464288096625%"),
    justifyContent: "flex-start"
  },
  Text_1_46: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 8,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1_47: {
    width: wp("33.67843221028646%"),
    minWidth: wp("33.67843221028646%"),
    minHeight: hp("2.183994829980402%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.2666666666666666%"),
    top: hp("12.87747992843876%"),
    justifyContent: "flex-start"
  },
  Text_1_47: {
    color: "rgba(150, 145, 132, 1)",
    fontSize: 9,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1_48: {
    width: wp("12.219606526692708%"),
    minWidth: wp("12.219606526692708%"),
    minHeight: hp("2.183994829980402%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("32.752864583333334%"),
    top: hp("16.95427086835349%"),
    justifyContent: "flex-start"
  },
  Text_1_48: {
    color: "rgba(234, 173, 2, 1)",
    fontSize: 11,
    fontWeight: "900",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1_49: {
    width: wp("44.800000000000004%"),
    minWidth: wp("44.800000000000004%"),
    minHeight: hp("5.095987893193145%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.2666666666666666%"),
    top: hp("15.06147540983605%"),
    justifyContent: "flex-start"
  },
  Text_1_49: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1_50: {
    width: wp("13.066666666666665%"),
    minWidth: wp("13.066666666666665%"),
    minHeight: hp("2.4751942014433648%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("32.800000000000004%"),
    top: hp("12.295081967213122%"),
    justifyContent: "center"
  },
  Text_1_50: {
    color: "rgba(1, 132, 1, 1)",
    fontSize: 7,
    fontWeight: "400",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_1_83: {
    width: wp("45.6%"),
    minWidth: wp("45.6%"),
    height: hp("12.295081967213115%"),
    minHeight: hp("12.295081967213115%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    resizeMode: "cover"
  },
  View_1_51: {
    width: wp("45.86666666666667%"),
    minWidth: wp("45.86666666666667%"),
    height: hp("24.86338172454%"),
    minHeight: hp("24.86338172454%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("24.04371584699453%")
  },
  View_1_52: {
    width: wp("44.77211507161458%"),
    minWidth: wp("44.77211507161458%"),
    minHeight: hp("3.931190667908049%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.29440104166666714%"),
    top: hp("20.932190274931685%"),
    justifyContent: "flex-start"
  },
  Text_1_52: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 8,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1_53: {
    width: wp("33.28453165690104%"),
    minWidth: wp("33.28453165690104%"),
    minHeight: hp("2.183994829980402%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("14.380216337944006%"),
    justifyContent: "flex-start"
  },
  Text_1_53: {
    color: "rgba(150, 145, 132, 1)",
    fontSize: 9,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1_54: {
    width: wp("12.076687622070313%"),
    minWidth: wp("12.076687622070313%"),
    minHeight: hp("2.183994829980402%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("32.106249999999996%"),
    top: hp("18.456997897455608%"),
    justifyContent: "flex-start"
  },
  Text_1_54: {
    color: "rgba(234, 173, 2, 1)",
    fontSize: 11,
    fontWeight: "900",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1_55: {
    width: wp("45.06666666666666%"),
    minWidth: wp("45.06666666666666%"),
    minHeight: hp("4.098360655737705%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("16.530054644808757%"),
    justifyContent: "flex-start"
  },
  Text_1_55: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1_56: {
    width: wp("12.913839721679688%"),
    minWidth: wp("12.913839721679688%"),
    minHeight: hp("2.4751942014433648%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("32.15282389322917%"),
    top: hp("13.797814207650276%"),
    justifyContent: "center"
  },
  Text_1_56: {
    color: "rgba(240, 72, 72, 1)",
    fontSize: 7,
    fontWeight: "400",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_1_87: {
    width: wp("45.33333333333333%"),
    minWidth: wp("45.33333333333333%"),
    height: hp("13.797814207650273%"),
    minHeight: hp("13.797814207650273%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.5333333333333337%"),
    top: hp("0%"),
    resizeMode: "cover"
  },
  View_1_57: {
    width: wp("45.33333333333333%"),
    minWidth: wp("45.33333333333333%"),
    height: hp("24.86338172454%"),
    minHeight: hp("24.86338172454%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("48.266666666666666%"),
    top: hp("24.04371584699453%")
  },
  View_1_58: {
    width: wp("44.77211507161458%"),
    minWidth: wp("44.77211507161458%"),
    minHeight: hp("3.931190667908049%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.29440104166666714%"),
    top: hp("20.932190274931685%"),
    justifyContent: "flex-start"
  },
  Text_1_58: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 8,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1_59: {
    width: wp("33.28453165690104%"),
    minWidth: wp("33.28453165690104%"),
    minHeight: hp("2.183994829980402%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("14.380216337944006%"),
    justifyContent: "flex-start"
  },
  Text_1_59: {
    color: "rgba(150, 145, 132, 1)",
    fontSize: 9,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1_60: {
    width: wp("12.076687622070313%"),
    minWidth: wp("12.076687622070313%"),
    minHeight: hp("2.183994829980402%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("32.106249999999996%"),
    top: hp("18.456997897455608%"),
    justifyContent: "flex-start"
  },
  Text_1_60: {
    color: "rgba(234, 173, 2, 1)",
    fontSize: 11,
    fontWeight: "900",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1_61: {
    width: wp("45.06666666666666%"),
    minWidth: wp("45.06666666666666%"),
    minHeight: hp("4.098360655737705%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("16.530054644808757%"),
    justifyContent: "flex-start"
  },
  Text_1_61: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1_62: {
    width: wp("10.666666666666668%"),
    minWidth: wp("10.666666666666668%"),
    minHeight: hp("1.5027322404371584%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("34.2861572265625%"),
    top: hp("14.344262295081961%"),
    justifyContent: "center"
  },
  Text_1_62: {
    color: "rgba(1, 132, 1, 1)",
    fontSize: 7,
    fontWeight: "400",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_1_88: {
    width: wp("45.33333333333333%"),
    minWidth: wp("45.33333333333333%"),
    height: hp("13.797814207650273%"),
    minHeight: hp("13.797814207650273%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    resizeMode: "cover"
  },
  View_1_63: {
    width: wp("45.6%"),
    minWidth: wp("45.6%"),
    height: hp("23.36065573770492%"),
    minHeight: hp("23.36065573770492%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("48.266666666666666%"),
    top: hp("0%")
  },
  View_1_64: {
    width: wp("45.301961263020836%"),
    minWidth: wp("45.301961263020836%"),
    minHeight: hp("3.931190667908049%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.2979166666666657%"),
    top: hp("19.429464288096625%"),
    justifyContent: "flex-start"
  },
  Text_1_64: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 8,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1_65: {
    width: wp("33.67843221028646%"),
    minWidth: wp("33.67843221028646%"),
    minHeight: hp("2.183994829980402%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("12.87747992843876%"),
    justifyContent: "flex-start"
  },
  Text_1_65: {
    color: "rgba(150, 145, 132, 1)",
    fontSize: 9,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1_66: {
    width: wp("12.219606526692708%"),
    minWidth: wp("12.219606526692708%"),
    minHeight: hp("2.183994829980402%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("32.486197916666676%"),
    top: hp("16.95427086835349%"),
    justifyContent: "flex-start"
  },
  Text_1_66: {
    color: "rgba(234, 173, 2, 1)",
    fontSize: 11,
    fontWeight: "900",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1_67: {
    width: wp("44.800000000000004%"),
    minWidth: wp("44.800000000000004%"),
    minHeight: hp("5.095987893193145%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("15.06147540983605%"),
    justifyContent: "flex-start"
  },
  Text_1_67: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1_68: {
    width: wp("13.066666666666665%"),
    minWidth: wp("13.066666666666665%"),
    minHeight: hp("2.4751942014433648%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("32.53333333333334%"),
    top: hp("12.295081967213122%"),
    justifyContent: "center"
  },
  Text_1_68: {
    color: "rgba(1, 132, 1, 1)",
    fontSize: 7,
    fontWeight: "400",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_1_85: {
    width: wp("45.33333333333333%"),
    minWidth: wp("45.33333333333333%"),
    height: hp("12.295081967213115%"),
    minHeight: hp("12.295081967213115%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    resizeMode: "cover"
  },
  TouchableOpacity_1_69: {
    width: wp("26.666666666666668%"),
    minWidth: wp("26.666666666666668%"),
    height: hp("4.098360655737705%"),
    minHeight: hp("4.098360655737705%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.666666666666667%"),
    top: hp("184.69945355191257%")
  },
  View_1_70: {
    width: wp("26.666666666666668%"),
    minWidth: wp("26.666666666666668%"),
    height: hp("4.098360655737705%"),
    minHeight: hp("4.098360655737705%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(33, 147, 176, 1)",
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10
  },
  View_1_71: {
    width: wp("16%"),
    minWidth: wp("16%"),
    minHeight: hp("2.73224043715847%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8.533333333333335%"),
    top: hp("0.6830601092896131%"),
    justifyContent: "center"
  },
  Text_1_71: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_1_72: {
    width: wp("5.333333333333334%"),
    minWidth: wp("5.333333333333334%"),
    height: hp("2.73224043715847%"),
    minHeight: hp("2.73224043715847%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.9333333333333336%"),
    top: hp("0.6830601092896131%"),
    resizeMode: "cover"
  },
  TouchableOpacity_1_73: {
    width: wp("22.133333333333333%"),
    minWidth: wp("22.133333333333333%"),
    height: hp("4.098360655737705%"),
    minHeight: hp("4.098360655737705%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("38.93333333333333%"),
    top: hp("184.69945355191257%")
  },
  View_1_74: {
    width: wp("22.133333333333333%"),
    minWidth: wp("22.133333333333333%"),
    height: hp("4.098360655737705%"),
    minHeight: hp("4.098360655737705%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderColor: "rgba(234, 173, 2, 1)",
    borderWidth: 1,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10
  },
  View_1_75: {
    width: wp("19.33980509440104%"),
    minWidth: wp("19.33980509440104%"),
    minHeight: hp("2.73224043715847%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.28932291666667%"),
    top: hp("0.6830601092896131%"),
    justifyContent: "center"
  },
  Text_1_75: {
    color: "rgba(234, 173, 2, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1_76: {
    width: wp("26.666666666666668%"),
    minWidth: wp("26.666666666666668%"),
    height: hp("4.098360655737705%"),
    minHeight: hp("4.098360655737705%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("70.13333333333334%"),
    top: hp("184.69945355191257%")
  },
  View_1_77: {
    width: wp("26.666666666666668%"),
    minWidth: wp("26.666666666666668%"),
    height: hp("4.098360655737705%"),
    minHeight: hp("4.098360655737705%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(33, 147, 176, 1)",
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10
  },
  View_1_78: {
    width: wp("16%"),
    minWidth: wp("16%"),
    minHeight: hp("2.73224043715847%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.86666666666666%"),
    top: hp("0.6830601092896131%"),
    justifyContent: "center"
  },
  Text_1_78: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_1_79: {
    width: wp("4.8%"),
    minWidth: wp("4.8%"),
    height: hp("2.459016393442623%"),
    minHeight: hp("2.459016393442623%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("18.66731770833333%"),
    top: hp("0.9562841530054698%"),
    resizeMode: "cover"
  },
  ImageBackground_1_80: {
    width: wp("6.666666666666667%"),
    minWidth: wp("6.666666666666667%"),
    height: hp("3.415300546448088%"),
    minHeight: hp("3.415300546448088%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("89.86666666666666%"),
    top: hp("2.73224043715847%"),
    resizeMode: "cover"
  },
  ImageBackground_1_81: {
    width: wp("45.3436767578125%"),
    minWidth: wp("45.3436767578125%"),
    height: hp("39.836887713989924%"),
    minHeight: hp("39.836887713989924%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.397599283854167%"),
    top: hp("25.839241736573598%"),
    resizeMode: "cover"
  },
  View_59_2537: {
    width: wp("94.66666666666667%"),
    minWidth: wp("94.66666666666667%"),
    height: hp("16.256830601092894%"),
    minHeight: hp("16.256830601092894%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.4%"),
    top: hp("8.19672131147541%")
  },
  View_1_3: {
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
  View_1_7: {
    width: wp("76%"),
    minWidth: wp("76%"),
    minHeight: hp("6.967213114754098%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.6666666666666665%"),
    top: hp("3.278688524590164%"),
    justifyContent: "center"
  },
  Text_1_7: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 13,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1_8: {
    width: wp("34.66666666666667%"),
    minWidth: wp("34.66666666666667%"),
    minHeight: hp("2.8688524590163933%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.6666666666666665%"),
    top: hp("0.4098360655737707%"),
    justifyContent: "center"
  },
  Text_1_8: {
    color: "rgba(150, 145, 132, 1)",
    fontSize: 11,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1_9: {
    width: wp("92%"),
    minWidth: wp("92%"),
    minHeight: hp("4.918032786885246%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.6666666666666665%"),
    top: hp("10.245901639344263%"),
    justifyContent: "center"
  },
  Text_1_9: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1_10: {
    width: wp("21.6%"),
    minWidth: wp("21.6%"),
    minHeight: hp("3.0054644808743167%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("71.19999999999999%"),
    top: hp("0.4098360655737707%"),
    justifyContent: "center"
  },
  Text_1_10: {
    color: "rgba(1, 132, 1, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1_84: {
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
  Text_1_84: {
    color: "rgba(234, 173, 2, 1)",
    fontSize: 18,
    fontWeight: "900",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_1_86: {
    width: wp("7.466666666666668%"),
    minWidth: wp("7.466666666666668%"),
    height: hp("4.098360655737705%"),
    minHeight: hp("4.098360655737705%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.666666666666667%"),
    top: hp("118.16939890710383%"),
    resizeMode: "cover"
  },
  View_1_89: {
    width: wp("93.60000000000001%"),
    minWidth: wp("93.60000000000001%"),
    height: hp("4.2349726775956285%"),
    minHeight: hp("4.2349726775956285%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.933333333333333%"),
    top: hp("85.24590163934425%")
  },
  ImageBackground_1_90: {
    width: wp("93.60000000000001%"),
    minWidth: wp("93.60000000000001%"),
    height: hp("1.5530988759783612e-14%"),
    minHeight: hp("1.5530988759783612e-14%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_1_91: {
    width: wp("19.733333333333334%"),
    minWidth: wp("19.733333333333334%"),
    minHeight: hp("3.415300546448088%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0.8196721311475414%"),
    justifyContent: "flex-start"
  },
  Text_1_91: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_1_92: {
    width: wp("5.333333333333334%"),
    minWidth: wp("5.333333333333334%"),
    height: hp("2.73224043715847%"),
    minHeight: hp("2.73224043715847%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("17.066666666666666%"),
    top: hp("0.546448087431699%"),
    resizeMode: "cover"
  },
  ImageBackground_1_93: {
    width: wp("5.333333333333334%"),
    minWidth: wp("5.333333333333334%"),
    height: hp("2.73224043715847%"),
    minHeight: hp("2.73224043715847%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("23.199999999999996%"),
    top: hp("0.546448087431699%"),
    resizeMode: "cover"
  },
  ImageBackground_1_94: {
    width: wp("5.333333333333334%"),
    minWidth: wp("5.333333333333334%"),
    height: hp("2.73224043715847%"),
    minHeight: hp("2.73224043715847%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("29.333333333333332%"),
    top: hp("0.546448087431699%"),
    resizeMode: "cover"
  },
  ImageBackground_1_95: {
    width: wp("5.333333333333334%"),
    minWidth: wp("5.333333333333334%"),
    height: hp("2.73224043715847%"),
    minHeight: hp("2.73224043715847%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("35.46666666666667%"),
    top: hp("0.546448087431699%"),
    resizeMode: "cover"
  },
  ImageBackground_1_96: {
    width: wp("5.333333333333334%"),
    minWidth: wp("5.333333333333334%"),
    height: hp("2.73224043715847%"),
    minHeight: hp("2.73224043715847%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("41.06666666666667%"),
    top: hp("0.546448087431699%"),
    resizeMode: "cover"
  },
  ImageBackground_1_97: {
    width: wp("2.666666666666667%"),
    minWidth: wp("2.666666666666667%"),
    height: hp("2.73224043715847%"),
    minHeight: hp("2.73224043715847%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("41.06666666666667%"),
    top: hp("0.546448087431699%")
  },
  View_1_98: {
    width: wp("6.4%"),
    minWidth: wp("6.4%"),
    minHeight: hp("1.7759562841530054%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("50.4%"),
    top: hp("86.33879781420765%"),
    justifyContent: "flex-start"
  },
  Text_1_98: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1_99: {
    width: wp("19.733333333333334%"),
    minWidth: wp("19.733333333333334%"),
    minHeight: hp("2.3224043715846996%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9.866666666666667%"),
    top: hp("90.57377049180327%"),
    justifyContent: "flex-start"
  },
  Text_1_99: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_67_2: {
    width: wp("4.8%"),
    minWidth: wp("4.8%"),
    height: hp("2.459016393442623%"),
    minHeight: hp("2.459016393442623%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.933333333333333%"),
    top: hp("93.44262295081968%"),
    resizeMode: "cover"
  },
  ImageBackground_67_3: {
    width: wp("4.8%"),
    minWidth: wp("4.8%"),
    height: hp("2.459016393442623%"),
    minHeight: hp("2.459016393442623%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.4%"),
    top: hp("105.73770491803278%"),
    resizeMode: "cover"
  },
  View_1_103: {
    width: wp("42.13333333333333%"),
    minWidth: wp("42.13333333333333%"),
    height: hp("3.0054644808743167%"),
    minHeight: hp("3.0054644808743167%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11.466666666666667%"),
    top: hp("96.31147540983606%"),
    backgroundColor: "rgba(244, 244, 244, 1)",
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10
  },
  View_1_104: {
    width: wp("44.53333333333334%"),
    minWidth: wp("44.53333333333334%"),
    minHeight: hp("2.73224043715847%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12.8%"),
    top: hp("96.44808743169399%"),
    justifyContent: "center"
  },
  Text_1_104: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 9,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_1_105: {
    width: wp("0.26666666666666666%"),
    minWidth: wp("0.26666666666666666%"),
    height: hp("0.1366120218579235%"),
    minHeight: hp("0.1366120218579235%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.199999999999999%"),
    top: hp("100.68306010928963%"),
    resizeMode: "cover"
  },
  View_1_106: {
    width: wp("65.60000000000001%"),
    minWidth: wp("65.60000000000001%"),
    height: hp("3.0054644808743167%"),
    minHeight: hp("3.0054644808743167%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11.733333333333333%"),
    top: hp("102.18579234972678%"),
    backgroundColor: "rgba(244, 244, 244, 1)",
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10
  },
  View_1_107: {
    width: wp("64.26666666666667%"),
    minWidth: wp("64.26666666666667%"),
    minHeight: hp("2.73224043715847%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13.066666666666665%"),
    top: hp("102.18579234972678%"),
    justifyContent: "center"
  },
  Text_1_107: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 9,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1_108: {
    width: wp("5.333333333333334%"),
    minWidth: wp("5.333333333333334%"),
    height: hp("2.73224043715847%"),
    minHeight: hp("2.73224043715847%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.933333333333333%"),
    top: hp("105.87431693989072%")
  },
  View_1_109: {
    width: wp("77.06666666666668%"),
    minWidth: wp("77.06666666666668%"),
    height: hp("4.781420765027322%"),
    minHeight: hp("4.781420765027322%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11.733333333333333%"),
    top: hp("108.19672131147541%"),
    backgroundColor: "rgba(244, 244, 244, 1)",
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10
  },
  View_1_110: {
    width: wp("75.73333333333333%"),
    minWidth: wp("75.73333333333333%"),
    minHeight: hp("4.781420765027322%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13.066666666666665%"),
    top: hp("108.19672131147541%"),
    justifyContent: "center"
  },
  Text_1_110: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 9,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1_111: {
    width: wp("27.73333333333333%"),
    minWidth: wp("27.73333333333333%"),
    minHeight: hp("1.639344262295082%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("36.266666666666666%"),
    top: hp("114.20765027322403%"),
    justifyContent: "center"
  },
  Text_1_111: {
    color: "rgba(150, 145, 132, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1_112: {
    width: wp("18.133333333333333%"),
    minWidth: wp("18.133333333333333%"),
    minHeight: hp("1.912568306010929%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12.8%"),
    top: hp("93.98907103825137%"),
    justifyContent: "center"
  },
  Text_1_112: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 9,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1_113: {
    width: wp("18.133333333333333%"),
    minWidth: wp("18.133333333333333%"),
    minHeight: hp("1.912568306010929%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13.066666666666665%"),
    top: hp("100%"),
    justifyContent: "center"
  },
  Text_1_113: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 9,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1_114: {
    width: wp("18.133333333333333%"),
    minWidth: wp("18.133333333333333%"),
    minHeight: hp("1.912568306010929%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12.533333333333333%"),
    top: hp("105.87431693989072%"),
    justifyContent: "center"
  },
  Text_1_114: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 9,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_1_115: {
    width: wp("46.93333333333333%"),
    minWidth: wp("46.93333333333333%"),
    height: hp("20.491803278688526%"),
    minHeight: hp("20.491803278688526%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("50.13333333333333%"),
    top: hp("44.94535519125683%"),
    resizeMode: "cover"
  },
  ImageBackground_1_116: {
    width: wp("5.333333333333334%"),
    minWidth: wp("5.333333333333334%"),
    height: hp("2.7677238964643633%"),
    minHeight: hp("2.7677238964643633%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.666666666666667%"),
    top: hp("90.43715846994536%"),
    resizeMode: "cover"
  },
  ImageBackground_29_3: {
    width: wp("47.199999999999996%"),
    minWidth: wp("47.199999999999996%"),
    height: hp("18.169398907103826%"),
    minHeight: hp("18.169398907103826%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("50.13333333333333%"),
    top: hp("25.683060109289617%"),
    resizeMode: "cover"
  },
  ImageBackground_59_2363: {
    width: wp("5.333333333333334%"),
    minWidth: wp("5.333333333333334%"),
    height: hp("2.73224043715847%"),
    minHeight: hp("2.73224043715847%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("91.73333333333333%"),
    top: hp("118.5792349726776%"),
    resizeMode: "cover"
  },
  ImageBackground_67_4: {
    width: wp("4.8%"),
    minWidth: wp("4.8%"),
    height: hp("2.459016393442623%"),
    minHeight: hp("2.459016393442623%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.4%"),
    top: hp("99.72677595628416%")
  }
})

const mapStateToProps = state => {
  return {}
}
const mapDispatchToProps = () => {
  return {}
}
export default connect(mapStateToProps, mapDispatchToProps)(Blank)
