import React, { useState} from 'react'
import useStateRef from 'react-usestateref'
import axios from 'axios';
import { View, Text, TextInput, TouchableOpacity, ScrollView, Image, Modal } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome5';
import styles from './styles'

const index = () => {
    const countriesInfo = [{"country": "Afghanistan",
    "flag": "https://disease.sh/assets/img/flags/af.png"},
  {"country": "Albania",
    "flag": "https://disease.sh/assets/img/flags/al.png"},
  {"country": "Algeria",
    "flag": "https://disease.sh/assets/img/flags/dz.png"},
  {"country": "Andorra",
    "flag": "https://disease.sh/assets/img/flags/ad.png"},
  {"country": "Angola",
    "flag": "https://disease.sh/assets/img/flags/ao.png"},
  {"country": "Anguilla",
    "flag": "https://disease.sh/assets/img/flags/ai.png"},
  {"country": "Antigua and Barbuda",
    "flag": "https://disease.sh/assets/img/flags/ag.png"},
  {"country": "Argentina",
    "flag": "https://disease.sh/assets/img/flags/ar.png"},
  {"country": "Armenia",
    "flag": "https://disease.sh/assets/img/flags/am.png"},
  {"country": "Aruba",
    "flag": "https://disease.sh/assets/img/flags/aw.png"},
  {"country": "Australia",
    "flag": "https://disease.sh/assets/img/flags/au.png"},
  {"country": "Austria",
    "flag": "https://disease.sh/assets/img/flags/at.png"},
  {"country": "Azerbaijan",
    "flag": "https://disease.sh/assets/img/flags/az.png"},
  {"country": "Bahamas",
    "flag": "https://disease.sh/assets/img/flags/bs.png"},
  {"country": "Bahrain",
    "flag": "https://disease.sh/assets/img/flags/bh.png"},
  {"country": "Bangladesh",
    "flag": "https://disease.sh/assets/img/flags/bd.png"},
  {"country": "Barbados",
    "flag": "https://disease.sh/assets/img/flags/bb.png"},
  {"country": "Belarus",
    "flag": "https://disease.sh/assets/img/flags/by.png"},
  {"country": "Belgium",
    "flag": "https://disease.sh/assets/img/flags/be.png"},
  {"country": "Belize",
    "flag": "https://disease.sh/assets/img/flags/bz.png"},
  {"country": "Benin",
    "flag": "https://disease.sh/assets/img/flags/bj.png"},
  {"country": "Bermuda",
    "flag": "https://disease.sh/assets/img/flags/bm.png"},
  {"country": "Bhutan",
    "flag": "https://disease.sh/assets/img/flags/bt.png"},
  {"country": "Bolivia",
    "flag": "https://disease.sh/assets/img/flags/bo.png"},
  {"country": "Bosnia",
    "flag": "https://disease.sh/assets/img/flags/ba.png"},
  {"country": "Botswana",
    "flag": "https://disease.sh/assets/img/flags/bw.png"},
  {"country": "Brazil",
    "flag": "https://disease.sh/assets/img/flags/br.png"},
  {"country": "British Virgin Islands",
    "flag": "https://disease.sh/assets/img/flags/vg.png"},
  {"country": "Brunei",
    "flag": "https://disease.sh/assets/img/flags/bn.png"},
  {"country": "Bulgaria",
    "flag": "https://disease.sh/assets/img/flags/bg.png"},
  {"country": "Burkina Faso",
    "flag": "https://disease.sh/assets/img/flags/bf.png"},
  {"country": "Burundi",
    "flag": "https://disease.sh/assets/img/flags/bi.png"},
  {"country": "Cabo Verde",
    "flag": "https://disease.sh/assets/img/flags/cv.png"},
  {"country": "Cambodia",
    "flag": "https://disease.sh/assets/img/flags/kh.png"},
  {"country": "Cameroon",
    "flag": "https://disease.sh/assets/img/flags/cm.png"},
  {"country": "Canada",
    "flag": "https://disease.sh/assets/img/flags/ca.png"},
  {"country": "Caribbean Netherlands",
    "flag": "https://disease.sh/assets/img/flags/bq.png"},
  {"country": "Cayman Islands",
    "flag": "https://disease.sh/assets/img/flags/ky.png"},
  {"country": "Central African Republic",
    "flag": "https://disease.sh/assets/img/flags/cf.png"},
  {"country": "Chad",
    "flag": "https://disease.sh/assets/img/flags/td.png"},
  {"country": "Channel Islands",
    "flag": "https://disease.sh/assets/img/flags/je.png"},
  {"country": "Chile",
    "flag": "https://disease.sh/assets/img/flags/cl.png"},
  {"country": "China",
    "flag": "https://disease.sh/assets/img/flags/cn.png"},
  {"country": "Colombia",
    "flag": "https://disease.sh/assets/img/flags/co.png"},
  {"country": "Comoros",
    "flag": "https://disease.sh/assets/img/flags/km.png"},
  {"country": "Congo",
    "flag": "https://disease.sh/assets/img/flags/cg.png"},
  {"country": "Costa Rica",
    "flag": "https://disease.sh/assets/img/flags/cr.png"},
  {"country": "Croatia",
    "flag": "https://disease.sh/assets/img/flags/hr.png"},
  {"country": "Cuba",
    "flag": "https://disease.sh/assets/img/flags/cu.png"},
  {"country": "Curaçao",
    "flag": "https://disease.sh/assets/img/flags/cw.png"},
  {"country": "Cyprus",
    "flag": "https://disease.sh/assets/img/flags/cy.png"},
  {"country": "Czechia",
    "flag": "https://disease.sh/assets/img/flags/cz.png"},
  {"country": "Côte d'Ivoire",
    "flag": "https://disease.sh/assets/img/flags/ci.png"},
  {"country": "DRC",
    "flag": "https://disease.sh/assets/img/flags/cd.png"},
  {"country": "Denmark",
    "flag": "https://disease.sh/assets/img/flags/dk.png"},
  {"country": "Diamond Princess",
    "flag": "https://disease.sh/assets/img/flags/unknown.png"},
  {"country": "Djibouti",
    "flag": "https://disease.sh/assets/img/flags/dj.png"},
  {"country": "Dominica",
    "flag": "https://disease.sh/assets/img/flags/dm.png"},
  {"country": "Dominican Republic",
    "flag": "https://disease.sh/assets/img/flags/do.png"},
  {"country": "Ecuador",
    "flag": "https://disease.sh/assets/img/flags/ec.png"},
  {"country": "Egypt",
    "flag": "https://disease.sh/assets/img/flags/eg.png"},
  {"country": "El Salvador",
    "flag": "https://disease.sh/assets/img/flags/sv.png"},
  {"country": "Equatorial Guinea",
    "flag": "https://disease.sh/assets/img/flags/gq.png"},
  {"country": "Eritrea",
    "flag": "https://disease.sh/assets/img/flags/er.png"},
  {"country": "Estonia",
    "flag": "https://disease.sh/assets/img/flags/ee.png"},
  {"country": "Ethiopia",
    "flag": "https://disease.sh/assets/img/flags/et.png"},
  {"country": "Falkland Islands (Malvinas)",
    "flag": "https://disease.sh/assets/img/flags/fk.png"},
  {"country": "Faroe Islands",
    "flag": "https://disease.sh/assets/img/flags/fo.png"},
  {"country": "Fiji",
    "flag": "https://disease.sh/assets/img/flags/fj.png"},
  {"country": "Finland",
    "flag": "https://disease.sh/assets/img/flags/fi.png"},
  {"country": "France",
    "flag": "https://disease.sh/assets/img/flags/fr.png"},
  {"country": "French Guiana",
    "flag": "https://disease.sh/assets/img/flags/gf.png"},
  {"country": "French Polynesia",
    "flag": "https://disease.sh/assets/img/flags/pf.png"},
  {"country": "Gabon",
    "flag": "https://disease.sh/assets/img/flags/ga.png"},
  {"country": "Gambia",
    "flag": "https://disease.sh/assets/img/flags/gm.png"},
  {"country": "Georgia",
    "flag": "https://disease.sh/assets/img/flags/ge.png"},
  {"country": "Germany",
    "flag": "https://disease.sh/assets/img/flags/de.png"},
  {"country": "Ghana",
    "flag": "https://disease.sh/assets/img/flags/gh.png"},
  {"country": "Gibraltar",
    "flag": "https://disease.sh/assets/img/flags/gi.png"},
  {"country": "Greece",
    "flag": "https://disease.sh/assets/img/flags/gr.png"},
  {"country": "Greenland",
    "flag": "https://disease.sh/assets/img/flags/gl.png"},
  {"country": "Grenada",
    "flag": "https://disease.sh/assets/img/flags/gd.png"},
  {"country": "Guadeloupe",
    "flag": "https://disease.sh/assets/img/flags/gp.png"},
  {"country": "Guatemala",
    "flag": "https://disease.sh/assets/img/flags/gt.png"},
  {"country": "Guinea",
    "flag": "https://disease.sh/assets/img/flags/gn.png"},
  {"country": "Guinea-Bissau",
    "flag": "https://disease.sh/assets/img/flags/gw.png"},
  {"country": "Guyana",
    "flag": "https://disease.sh/assets/img/flags/gy.png"},
  {"country": "Haiti",
    "flag": "https://disease.sh/assets/img/flags/ht.png"},
  {"country": "Holy See (Vatican City State)",
    "flag": "https://disease.sh/assets/img/flags/va.png"},
  {"country": "Honduras",
    "flag": "https://disease.sh/assets/img/flags/hn.png"},
  {"country": "Hong Kong",
    "flag": "https://disease.sh/assets/img/flags/hk.png"},
  {"country": "Hungary",
    "flag": "https://disease.sh/assets/img/flags/hu.png"},
  {"country": "Iceland",
    "flag": "https://disease.sh/assets/img/flags/is.png"},
  {"country": "India",
    "flag": "https://disease.sh/assets/img/flags/in.png"},
  {"country": "Indonesia",
    "flag": "https://disease.sh/assets/img/flags/id.png"},
  {"country": "Iran",
    "flag": "https://disease.sh/assets/img/flags/ir.png"},
  {"country": "Iraq",
    "flag": "https://disease.sh/assets/img/flags/iq.png"},
  {"country": "Ireland",
    "flag": "https://disease.sh/assets/img/flags/ie.png"},
  {"country": "Isle of Man",
    "flag": "https://disease.sh/assets/img/flags/im.png"},
  {"country": "Israel",
    "flag": "https://disease.sh/assets/img/flags/il.png"},
  {"country": "Italy",
    "flag": "https://disease.sh/assets/img/flags/it.png"},
  {"country": "Jamaica",
    "flag": "https://disease.sh/assets/img/flags/jm.png"},
  {"country": "Japan",
    "flag": "https://disease.sh/assets/img/flags/jp.png"},
  {"country": "Jordan",
    "flag": "https://disease.sh/assets/img/flags/jo.png"},
  {"country": "Kazakhstan",
    "flag": "https://disease.sh/assets/img/flags/kz.png"},
  {"country": "Kenya",
    "flag": "https://disease.sh/assets/img/flags/ke.png"},
  {"country": "Kuwait",
    "flag": "https://disease.sh/assets/img/flags/kw.png"},
  {"country": "Kyrgyzstan",
    "flag": "https://disease.sh/assets/img/flags/kg.png"},
  {"country": "Lao People's Democratic Republic",
    "flag": "https://disease.sh/assets/img/flags/la.png"},
  {"country": "Latvia",
    "flag": "https://disease.sh/assets/img/flags/lv.png"},
  {"country": "Lebanon",
    "flag": "https://disease.sh/assets/img/flags/lb.png"},
  {"country": "Lesotho",
    "flag": "https://disease.sh/assets/img/flags/ls.png"},
  {"country": "Liberia",
    "flag": "https://disease.sh/assets/img/flags/lr.png"},
  {"country": "Libyan Arab Jamahiriya",
    "flag": "https://disease.sh/assets/img/flags/ly.png"},
  {"country": "Liechtenstein",
    "flag": "https://disease.sh/assets/img/flags/li.png"},
  {"country": "Lithuania",
    "flag": "https://disease.sh/assets/img/flags/lt.png"},
  {"country": "Luxembourg",
    "flag": "https://disease.sh/assets/img/flags/lu.png"},
  {"country": "MS Zaandam",
    "flag": "https://disease.sh/assets/img/flags/unknown.png"},
  {"country": "Macao",
    "flag": "https://disease.sh/assets/img/flags/mo.png"},
  {"country": "Macedonia",
    "flag": "https://disease.sh/assets/img/flags/mk.png"},
  {"country": "Madagascar",
    "flag": "https://disease.sh/assets/img/flags/mg.png"},
  {"country": "Malawi",
    "flag": "https://disease.sh/assets/img/flags/mw.png"},
  {"country": "Malaysia",
    "flag": "https://disease.sh/assets/img/flags/my.png"},
  {"country": "Maldives",
    "flag": "https://disease.sh/assets/img/flags/mv.png"},
  {"country": "Mali",
    "flag": "https://disease.sh/assets/img/flags/ml.png"},
  {"country": "Malta",
    "flag": "https://disease.sh/assets/img/flags/mt.png"},
  {"country": "Marshall Islands",
    "flag": "https://disease.sh/assets/img/flags/mh.png"},
  {"country": "Martinique",
    "flag": "https://disease.sh/assets/img/flags/mq.png"},
  {"country": "Mauritania",
    "flag": "https://disease.sh/assets/img/flags/mr.png"},
  {"country": "Mauritius",
    "flag": "https://disease.sh/assets/img/flags/mu.png"},
  {"country": "Mayotte",
    "flag": "https://disease.sh/assets/img/flags/yt.png"},
  {"country": "Mexico",
    "flag": "https://disease.sh/assets/img/flags/mx.png"},
  {"country": "Micronesia",
    "flag": "https://disease.sh/assets/img/flags/fm.png"},
  {"country": "Moldova",
    "flag": "https://disease.sh/assets/img/flags/md.png"},
  {"country": "Monaco",
    "flag": "https://disease.sh/assets/img/flags/mc.png"},
  {"country": "Mongolia",
    "flag": "https://disease.sh/assets/img/flags/mn.png"},
  {"country": "Montenegro",
    "flag": "https://disease.sh/assets/img/flags/me.png"},
  {"country": "Montserrat",
    "flag": "https://disease.sh/assets/img/flags/ms.png"},
  {"country": "Morocco",
    "flag": "https://disease.sh/assets/img/flags/ma.png"},
  {"country": "Mozambique",
    "flag": "https://disease.sh/assets/img/flags/mz.png"},
  {"country": "Myanmar",
    "flag": "https://disease.sh/assets/img/flags/mm.png"},
  {"country": "Namibia",
    "flag": "https://disease.sh/assets/img/flags/na.png"},
  {"country": "Nepal",
    "flag": "https://disease.sh/assets/img/flags/np.png"},
  {"country": "Netherlands",
    "flag": "https://disease.sh/assets/img/flags/nl.png"},
  {"country": "New Caledonia",
    "flag": "https://disease.sh/assets/img/flags/nc.png"},
  {"country": "New Zealand",
    "flag": "https://disease.sh/assets/img/flags/nz.png"},
  {"country": "Nicaragua",
    "flag": "https://disease.sh/assets/img/flags/ni.png"},
  {"country": "Niger",
    "flag": "https://disease.sh/assets/img/flags/ne.png"},
  {"country": "Nigeria",
    "flag": "https://disease.sh/assets/img/flags/ng.png"},
  {"country": "Norway",
    "flag": "https://disease.sh/assets/img/flags/no.png"},
  {"country": "Oman",
    "flag": "https://disease.sh/assets/img/flags/om.png"},
  {"country": "Pakistan",
    "flag": "https://disease.sh/assets/img/flags/pk.png"},
  {"country": "Palestine",
    "flag": "https://disease.sh/assets/img/flags/ps.png"},
  {"country": "Panama",
    "flag": "https://disease.sh/assets/img/flags/pa.png"},
  {"country": "Papua New Guinea",
    "flag": "https://disease.sh/assets/img/flags/pg.png"},
  {"country": "Paraguay",
    "flag": "https://disease.sh/assets/img/flags/py.png"},
  {"country": "Peru",
    "flag": "https://disease.sh/assets/img/flags/pe.png"},
  {"country": "Philippines",
    "flag": "https://disease.sh/assets/img/flags/ph.png"},
  {"country": "Poland",
    "flag": "https://disease.sh/assets/img/flags/pl.png"},
  {"country": "Portugal",
    "flag": "https://disease.sh/assets/img/flags/pt.png"},
  {"country": "Qatar",
    "flag": "https://disease.sh/assets/img/flags/qa.png"},
  {"country": "Romania",
    "flag": "https://disease.sh/assets/img/flags/ro.png"},
  {"country": "Russia",
    "flag": "https://disease.sh/assets/img/flags/ru.png"},
  {"country": "Rwanda",
    "flag": "https://disease.sh/assets/img/flags/rw.png"},
  {"country": "Réunion",
    "flag": "https://disease.sh/assets/img/flags/re.png"},
  {"country": "S. Korea",
    "flag": "https://disease.sh/assets/img/flags/kr.png"},
  {"country": "Saint Helena",
    "flag": "https://disease.sh/assets/img/flags/sh.png"},
  {"country": "Saint Kitts and Nevis",
    "flag": "https://disease.sh/assets/img/flags/kn.png"},
  {"country": "Saint Lucia",
    "flag": "https://disease.sh/assets/img/flags/lc.png"},
  {"country": "Saint Martin",
    "flag": "https://disease.sh/assets/img/flags/mf.png"},
  {"country": "Saint Pierre Miquelon",
    "flag": "https://disease.sh/assets/img/flags/pm.png"},
  {"country": "Saint Vincent and the Grenadines",
    "flag": "https://disease.sh/assets/img/flags/vc.png"},
  {"country": "Samoa",
    "flag": "https://disease.sh/assets/img/flags/ws.png"},
  {"country": "San Marino",
    "flag": "https://disease.sh/assets/img/flags/sm.png"},
  {"country": "Sao Tome and Principe",
    "flag": "https://disease.sh/assets/img/flags/st.png"},
  {"country": "Saudi Arabia",
    "flag": "https://disease.sh/assets/img/flags/sa.png"},
  {"country": "Senegal",
    "flag": "https://disease.sh/assets/img/flags/sn.png"},
  {"country": "Serbia",
    "flag": "https://disease.sh/assets/img/flags/rs.png"},
  {"country": "Seychelles",
    "flag": "https://disease.sh/assets/img/flags/sc.png"},
  {"country": "Sierra Leone",
    "flag": "https://disease.sh/assets/img/flags/sl.png"},
  {"country": "Singapore",
    "flag": "https://disease.sh/assets/img/flags/sg.png"},
  {"country": "Sint Maarten",
    "flag": "https://disease.sh/assets/img/flags/sx.png"},
  {"country": "Slovakia",
    "flag": "https://disease.sh/assets/img/flags/sk.png"},
  {"country": "Slovenia",
    "flag": "https://disease.sh/assets/img/flags/si.png"},
  {"country": "Solomon Islands",
    "flag": "https://disease.sh/assets/img/flags/sb.png"},
  {"country": "Somalia",
    "flag": "https://disease.sh/assets/img/flags/so.png"},
  {"country": "South Africa",
    "flag": "https://disease.sh/assets/img/flags/za.png"},
  {"country": "South Sudan",
    "flag": "https://disease.sh/assets/img/flags/ss.png"},
  {"country": "Spain",
    "flag": "https://disease.sh/assets/img/flags/es.png"},
  {"country": "Sri Lanka",
    "flag": "https://disease.sh/assets/img/flags/lk.png"},
  {"country": "St. Barth",
    "flag": "https://disease.sh/assets/img/flags/bl.png"},
  {"country": "Sudan",
    "flag": "https://disease.sh/assets/img/flags/sd.png"},
  {"country": "Suriname",
    "flag": "https://disease.sh/assets/img/flags/sr.png"},
  {"country": "Swaziland",
    "flag": "https://disease.sh/assets/img/flags/sz.png"},
  {"country": "Sweden",
    "flag": "https://disease.sh/assets/img/flags/se.png"},
  {"country": "Switzerland",
    "flag": "https://disease.sh/assets/img/flags/ch.png"},
  {"country": "Syrian Arab Republic",
    "flag": "https://disease.sh/assets/img/flags/sy.png"},
  {"country": "Taiwan",
    "flag": "https://disease.sh/assets/img/flags/tw.png"},
  {"country": "Tajikistan",
    "flag": "https://disease.sh/assets/img/flags/tj.png"},
  {"country": "Tanzania",
    "flag": "https://disease.sh/assets/img/flags/tz.png"},
  {"country": "Thailand",
    "flag": "https://disease.sh/assets/img/flags/th.png"},
  {"country": "Timor-Leste",
    "flag": "https://disease.sh/assets/img/flags/tl.png"},
  {"country": "Togo",
    "flag": "https://disease.sh/assets/img/flags/tg.png"},
  {"country": "Trinidad and Tobago",
    "flag": "https://disease.sh/assets/img/flags/tt.png"},
  {"country": "Tunisia",
    "flag": "https://disease.sh/assets/img/flags/tn.png"},
  {"country": "Turkey",
    "flag": "https://disease.sh/assets/img/flags/tr.png"},
  {"country": "Turks and Caicos Islands",
    "flag": "https://disease.sh/assets/img/flags/tc.png"},
  {"country": "UAE",
    "flag": "https://disease.sh/assets/img/flags/ae.png"},
  {"country": "UK",
    "flag": "https://disease.sh/assets/img/flags/gb.png"},
  {"country": "USA",
    "flag": "https://disease.sh/assets/img/flags/us.png"},
  {"country": "Uganda",
    "flag": "https://disease.sh/assets/img/flags/ug.png"},
  {"country": "Ukraine",
    "flag": "https://disease.sh/assets/img/flags/ua.png"},
  {"country": "Uruguay",
    "flag": "https://disease.sh/assets/img/flags/uy.png"},
  {"country": "Uzbekistan",
    "flag": "https://disease.sh/assets/img/flags/uz.png"},
  {"country": "Vanuatu",
    "flag": "https://disease.sh/assets/img/flags/vu.png"},
  {"country": "Venezuela",
    "flag": "https://disease.sh/assets/img/flags/ve.png"},
  {"country": "Vietnam",
    "flag": "https://disease.sh/assets/img/flags/vn.png"},
  {"country": "Wallis and Futuna",
    "flag": "https://disease.sh/assets/img/flags/wf.png"},
  {"country": "Western Sahara",
    "flag": "https://disease.sh/assets/img/flags/eh.png"},
  {"country": "Yemen",
    "flag": "https://disease.sh/assets/img/flags/ye.png"},
  {"country": "Zambia",
    "flag": "https://disease.sh/assets/img/flags/zm.png"},
  {"country": "Zimbabwe",
    "flag": "https://disease.sh/assets/img/flags/zw.png"},]
    const [responseData, setResponseData] = useState(countriesInfo)
    const [country, setCountry] = useState("")
    const [filteredCountries, setFilteredCountries] = useState([])
    const [selectedCountry, setSelectedCountry, selectedCountryRef] = useStateRef("")
    const [selectedCountryData, setSelectedCountryData, selectedCountryDataRef] = useStateRef([])
    const [modalSelected, setModalSelected] = useState(false)
    const errorText = "Cant find the searched country!"

    const searchCountries = (searchedCountry) => {
        setFilteredCountries(responseData.filter((name) => 
            name.country.toLowerCase().includes(searchedCountry.toLowerCase())
        ))
    }

    const getSelectedCountryData = async () => {
      let response = await axios.get(`https://disease.sh/v3/covid-19/countries/${selectedCountryRef.current}?strict=${selectedCountryRef.current}`)
      setSelectedCountryData(response.data)
      setModalSelected(true)
  }

    return (
        <View>
          <Text style={styles.title}>Search</Text>

          <View style={styles.searchBar}>
              <View style={styles.icon}>
                  <Icon name="search" size={20} color={"#000"} />
              </View>

              <TouchableOpacity style={styles.searchTextContainer}>
                  <TextInput placeholder="Enter Country" placeholderTextColor="#000" onChangeText={(value) => {setCountry(value); searchCountries(value)}} style={styles.searchText}>{country}</TextInput>
              </TouchableOpacity>
          </View>

          {modalSelected ? <Modal transparent={true} visible={modalSelected}>
            <ScrollView style={styles.outerModal}>
              <View style={styles.modal}>
                <TouchableOpacity style={styles.closeImageContainer} onPress={() => setModalSelected(false)}>
                  <Image style={styles.closeImage} source={require("../../assets/Images/close.png")}/>
                </TouchableOpacity>
                <View style={styles.countryDetails}>
                  <View style={styles.countryFlagImageContainer}>
                    <Image style={styles.countryFlagImage} source={{uri : selectedCountryDataRef.current.countryInfo.flag}}/>
                  </View>

                  <View style={styles.countryNameContainer}>
                    <Text style={styles.title}>{selectedCountryDataRef.current.country}</Text>
                  </View>

                  <View style={styles.titleTextContainer}>
                    <Text style={styles.titleText}>Cases Today</Text>
                  </View>

                  <ScrollView horizontal={true}>
                        <View style={styles.card}>
                            <View style={styles.cardImageContainer}>
                                <Image style={styles.image} source={require("../../assets/Images/covid.png")}/>
                            </View>

                            <View style={styles.textContainer}>
                                <Text style={styles.numberText}>{selectedCountryDataRef.current.todayCases}</Text>

                                <Text style={styles.text}>New Cases</Text>
                            </View>
                        </View>

                        <View style={styles.card}>
                            <View style={styles.imageContainer}>
                                <Image style={styles.image} source={require("../../assets/Images/recovered.png")}/>
                            </View>

                            <View style={styles.textContainer}>
                                <Text style={styles.numberText}>{selectedCountryDataRef.current.todayRecovered}</Text>

                                <Text style={styles.text}>Recovered</Text>
                            </View>
                        </View>

                        <View style={styles.card}>
                            <View style={styles.imageContainer}>
                                <Image style={styles.image} source={require("../../assets/Images/rip.png")}/>
                            </View>

                            <View style={styles.textContainer}>
                                <Text style={styles.numberText}>{selectedCountryDataRef.current.todayDeaths}</Text>

                                <Text style={styles.text}>Deaths</Text>
                            </View>
                        </View>
                    </ScrollView>

                    <View style={styles.titleTextContainer}>
                      <Text style={styles.titleText}>Total Cases</Text>
                    </View>

                    <ScrollView horizontal={true}>
                        <View style={styles.totalCard}>
                            <View style={styles.imageContainer}>
                                <Image style={styles.image} source={require("../../assets/Images/covid.png")}/>
                            </View>

                            <View style={styles.textContainer}>
                                <Text style={styles.numberText}>{selectedCountryDataRef.current.cases}</Text>

                                <Text style={styles.text}>Total</Text>
                                <Text style={styles.text}>Affected Cases</Text>
                            </View>
                        </View>

                        <View style={styles.totalCard}>
                            <View style={styles.imageContainer}>
                                <Image style={styles.image} source={require("../../assets/Images/active.png")}/>
                            </View>

                            <View style={styles.textContainer}>
                                <Text style={styles.numberText}>{selectedCountryDataRef.current.active}</Text>

                                <Text style={styles.text}>Total</Text>
                                <Text style={styles.text}>Active Cases</Text>
                            </View>
                        </View>

                        <View style={styles.totalCard}>
                            <View style={styles.imageContainer}>
                                <Image style={styles.image} source={require("../../assets/Images/recovered.png")}/>
                            </View>

                            <View style={styles.textContainer}>
                                <Text style={styles.numberText}>{selectedCountryDataRef.current.recovered}</Text>

                                <Text style={styles.text}>Total</Text>
                                <Text style={styles.text}>Recovered Cases</Text>
                            </View>
                        </View>

                        <View style={styles.totalCard}>
                            <View style={styles.imageContainer}>
                                <Image style={styles.image} source={require("../../assets/Images/test.png")}/>
                            </View>

                            <View style={styles.textContainer}>
                                <Text style={styles.numberText}>{selectedCountryDataRef.current.tests}</Text>

                                <Text style={styles.text}>Total</Text>
                                <Text style={styles.text}>Covid Tests</Text>
                            </View>
                        </View>

                        <View style={styles.totalCard}>
                            <View style={styles.imageContainer}>
                                <Image style={styles.image} source={require("../../assets/Images/rip.png")}/>
                            </View>

                            <View style={styles.textContainer}>
                                <Text style={styles.numberText}>{selectedCountryDataRef.current.deaths}</Text>

                                <Text style={styles.text}>Total</Text>
                                <Text style={styles.text}>Death Cases</Text>
                            </View>
                        </View>
                    </ScrollView>
                </View>
              </View>
            </ScrollView>
          </Modal> : null}
                    
            <View>
              {((filteredCountries.length == 0) && (country)) ?
                <Text style={styles.error}>{errorText}</Text> : <Text style={{height: 0}}></Text>
              }
            </View>

            <ScrollView style={styles.ScrollView}>
                {filteredCountries.map((country) => (
                    <TouchableOpacity onPress={() => {
                      setSelectedCountry(country.country)
                      getSelectedCountryData()
                    }} key={country.country}>
                        <View style={styles.cardWrapper}>
                            <View style={styles.imageContainer}>
                                <Image source={{uri : country.flag}} style={styles.countryImage}/>
                            </View>

                            <View>
                                <Text style={styles.countryName}>{country.country}</Text>
                            </View>
                        </View>
                    </TouchableOpacity>
                ))}
            </ScrollView>

            {(filteredCountries.length == 0) && (!country) && <ScrollView style={styles.ScrollView}>
                {responseData.map((country) => (
                    <TouchableOpacity onPress={() => {
                      setSelectedCountry(country.country)
                      getSelectedCountryData()
                    }} key={country.country}>
                        <View style={styles.cardWrapper}>
                            <View style={styles.imageContainer}>
                                <Image source={{uri : country.flag}} style={styles.countryImage}/>
                            </View>

                            <View>
                                <Text style={styles.countryName}>{country.country}</Text>
                            </View>
                        </View>
                    </TouchableOpacity>
                ))}
            </ScrollView>}
            
        </View>
    )
}

export default index
