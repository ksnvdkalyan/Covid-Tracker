import React, {useState, useEffect} from 'react'
import { View, Text, ScrollView, Image } from 'react-native'
import axios from 'axios'
import styles from './styles'
import { VictoryPie} from "victory-native";

const index = () => {
    const [responseData, setResponseData] = useState({})
    const [fetched, setFetched] = useState(false)

    const getWorldwide = async () => {
        let response = await axios.get("https://disease.sh/v3/covid-19/all")
        setResponseData(response.data)
        setFetched(true)
    }

    useEffect(() => {
        getWorldwide()
    }, [])

    return (
        <View>
            <Text style={styles.projectTitle}>Covid Tracker</Text>
            <ScrollView style={styles.scrollView}>
                
                <View>
                    <Text style={styles.title}>Cases Today</Text>

                    <ScrollView horizontal={true}>
                        <View style={styles.card}>
                            <View style={styles.imageContainer}>
                                <Image style={styles.image} source={require("../../assets/Images/covid.png")}/>
                            </View>

                            <View style={styles.textContainer}>
                                <Text style={styles.numberText}>{responseData.todayCases}</Text>

                                <Text style={styles.text}>New Cases</Text>
                            </View>
                        </View>

                        <View style={styles.card}>
                            <View style={styles.imageContainer}>
                                <Image style={styles.image} source={require("../../assets/Images/recovered.png")}/>
                            </View>

                            <View style={styles.textContainer}>
                                <Text style={styles.numberText}>{responseData.todayRecovered}</Text>

                                <Text style={styles.text}>Recovered</Text>
                            </View>
                        </View>

                        <View style={styles.card}>
                            <View style={styles.imageContainer}>
                                <Image style={styles.image} source={require("../../assets/Images/rip.png")}/>
                            </View>

                            <View style={styles.textContainer}>
                                <Text style={styles.numberText}>{responseData.todayDeaths}</Text>

                                <Text style={styles.text}>Deaths</Text>
                            </View>
                        </View>
                    </ScrollView>
                </View>

                <View style={styles.comparisionCard}>
                    <Text style={styles.chartTitle}>Cases Today</Text>
                    
                    <View style={styles.chartCard}>
                        <View style={styles.pieContainer}>
                            {fetched ? <VictoryPie
                                width={250}
                                height={250}
                                colorScale={["#FDDF52",  "#64e764", "#FC5151" ]}
                                labels={() => null}
                                data={[
                                    { x: "active", y: parseInt(`${responseData.todayCases}`) },
                                    { x: "recovered", y: parseInt(`${responseData.todayRecovered}`) },
                                    { x: "deaths", y: parseInt(`${responseData.todayDeaths}`) }
                                ]} 
                                /> : null}
                        </View>
                        <View style={styles.labelsContainer}>
                            <View style={styles.label}>
                                <View style={styles.activeColor}></View>
                                <Text style={styles.text}>New Cases</Text>
                            </View>

                            <View style={styles.label}>
                                <View style={styles.recoveredColor}></View>
                                <Text style={styles.text}>Recovered</Text>
                            </View>

                            <View style={styles.label}>
                                <View style={styles.deathColor}></View>
                                <Text style={styles.text}>Deaths</Text>
                            </View>
                        </View>
                    </View>
                </View>
                
                <View>
                    <Text style={styles.title}>Total Cases</Text>

                    <ScrollView horizontal={true}>
                        <View style={styles.totalCard}>
                            <View style={styles.imageContainer}>
                                <Image style={styles.image} source={require("../../assets/Images/covid.png")}/>
                            </View>

                            <View style={styles.textContainer}>
                                <Text style={styles.numberText}>{responseData.cases}</Text>

                                <Text style={styles.text}>Total</Text>
                                <Text style={styles.text}>Affected Cases</Text>
                            </View>
                        </View>

                        <View style={styles.totalCard}>
                            <View style={styles.imageContainer}>
                                <Image style={styles.image} source={require("../../assets/Images/active.png")}/>
                            </View>

                            <View style={styles.textContainer}>
                                <Text style={styles.numberText}>{responseData.active}</Text>

                                <Text style={styles.text}>Total</Text>
                                <Text style={styles.text}>Active Cases</Text>
                            </View>
                        </View>

                        <View style={styles.totalCard}>
                            <View style={styles.imageContainer}>
                                <Image style={styles.image} source={require("../../assets/Images/recovered.png")}/>
                            </View>

                            <View style={styles.textContainer}>
                                <Text style={styles.numberText}>{responseData.recovered}</Text>

                                <Text style={styles.text}>Total</Text>
                                <Text style={styles.text}>Recovered Cases</Text>
                            </View>
                        </View>

                        <View style={styles.totalCard}>
                            <View style={styles.imageContainer}>
                                <Image style={styles.image} source={require("../../assets/Images/test.png")}/>
                            </View>

                            <View style={styles.textContainer}>
                                <Text style={styles.numberText}>{responseData.tests}</Text>

                                <Text style={styles.text}>Total</Text>
                                <Text style={styles.text}>Covid Tests</Text>
                            </View>
                        </View>

                        <View style={styles.totalCard}>
                            <View style={styles.imageContainer}>
                                <Image style={styles.image} source={require("../../assets/Images/rip.png")}/>
                            </View>

                            <View style={styles.textContainer}>
                                <Text style={styles.numberText}>{responseData.deaths}</Text>

                                <Text style={styles.text}>Total</Text>
                                <Text style={styles.text}>Death Cases</Text>
                            </View>
                        </View>

                        <View style={styles.totalCard}>
                            <View style={styles.imageContainer}>
                                <Image style={styles.image} source={require("../../assets/Images/world.png")}/>
                            </View>

                            <View style={styles.textContainer}>
                                <Text style={styles.numberText}>{responseData.affectedCountries}</Text>

                                <Text style={styles.text}>Countries</Text>
                                <Text style={styles.text}> Affected</Text>
                            </View>
                        </View>
                    </ScrollView>
                </View>

                <View style={styles.comparisionCard}>
                    <Text style={styles.chartTitle}>Total Cases</Text>
                    
                    <View style={styles.chartCard}>
                        <View style={styles.pieContainer}>
                            {fetched ? <VictoryPie
                                width={250}
                                height={250}
                                colorScale={["#FDDF52",  "#64e764", "#FC5151" ]}
                                labels={() => null}
                                data={[
                                    { x: "active", y: parseInt(`${responseData.active}`) },
                                    { x: "recovered", y: parseInt(`${responseData.recovered}`) },
                                    { x: "deaths", y: parseInt(`${responseData.deaths}`) }
                                ]} 
                                /> : null}
                        </View>
                        <View style={styles.labelsContainer}>
                            <View style={styles.label}>
                                <View style={styles.activeColor}></View>
                                <Text style={styles.text}>Active</Text>
                            </View>

                            <View style={styles.label}>
                                <View style={styles.recoveredColor}></View>
                                <Text style={styles.text}>Recovered</Text>
                            </View>

                            <View style={styles.label}>
                                <View style={styles.deathColor}></View>
                                <Text style={styles.text}>Deaths</Text>
                            </View>
                        </View>
                    </View>
                </View>

                <View>
                    <Text style={styles.title}>Per Million</Text>

                    <ScrollView horizontal={true}>
                        <View style={styles.perMillionCard}>
                            <View style={styles.imageContainer}>
                                <Image style={styles.image} source={require("../../assets/Images/covid.png")}/>
                            </View>

                            <View style={styles.textContainer}>
                                <Text style={styles.numberText}>{responseData.casesPerOneMillion}</Text>

                                <Text style={styles.text}>Cases</Text>
                                <Text style={styles.text}>Per Million</Text>
                            </View>
                        </View>

                        <View style={styles.perMillionCard}>
                            <View style={styles.imageContainer}>
                                <Image style={styles.image} source={require("../../assets/Images/active.png")}/>
                            </View>

                            <View style={styles.textContainer}>
                                <Text style={styles.numberText}>{responseData.activePerOneMillion}</Text>

                                <Text style={styles.text}>Active Cases</Text>
                                <Text style={styles.text}>Per Million</Text>
                            </View>
                        </View>

                        <View style={styles.perMillionCard}>
                            <View style={styles.imageContainer}>
                                <Image style={styles.image} source={require("../../assets/Images/recovered.png")}/>
                            </View>

                            <View style={styles.textContainer}>
                                <Text style={styles.numberText}>{responseData.recoveredPerOneMillion}</Text>

                                <Text style={styles.text}>Recovered</Text>
                                <Text style={styles.text}>Per Million</Text>
                            </View>
                        </View>

                        <View style={styles.perMillionCard}>
                            <View style={styles.imageContainer}>
                                <Image style={styles.image} source={require("../../assets/Images/test.png")}/>
                            </View>

                            <View style={styles.textContainer}>
                                <Text style={styles.numberText}>{responseData.testsPerOneMillion}</Text>

                                <Text style={styles.text}>Tests</Text>
                                <Text style={styles.text}>Per Million</Text>
                            </View>
                        </View>

                        <View style={styles.perMillionCard}>
                            <View style={styles.imageContainer}>
                                <Image style={styles.image} source={require("../../assets/Images/rip.png")}/>
                            </View>

                            <View style={styles.textContainer}>
                                <Text style={styles.numberText}>{responseData.deathsPerOneMillion}</Text>

                                <Text style={styles.text}>Deaths</Text>
                                <Text style={styles.text}>Per Million</Text>
                            </View>
                        </View>
                    </ScrollView>
                </View>
            </ScrollView>
        </View>
    )
}

export default index
