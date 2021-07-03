import React from 'react'
import { View, Text, ScrollView, TouchableOpacity, Image, Linking } from 'react-native'
import styles from './styles'

const index = () => {
    return (
        <View style= {styles.wrapper}>
            <Text style={styles.title}>Info</Text>
            <ScrollView style={styles.scrollView}>
                <View style={styles.card}>
                    <Text style={styles.infoTextTitle}>COVID-19</Text>
                    <Text style={styles.text}>
                        Coronavirus disease (COVID-19) is an infectious disease caused by a newly discovered coronavirus.
                    </Text>
                </View>
                <View style={styles.card}>
                    <Text style={styles.infoTextTitle}>How It Spreads</Text>
                    <Text style={styles.text}>
                        The virus that causes COVID-19 is mainly transmitted through droplets generated when an infected person coughs, sneezes, or exhales. These droplets are too heavy to hang in the air, and quickly fall on floors or surfaces.
                    </Text>
                    <Text></Text>
                    <Text style={styles.text}>
                        You can be infected by breathing in the virus if you are within close proximity of someone who has COVID-19, or by touching a contaminated surface and then your eyes, nose or mouth.
                    </Text>
                </View>
                <View style={styles.card}>
                    <Text style={styles.infoTextTitle}>Symptoms</Text>
                    <Text style={styles.infoTextSubtitle}>Most common symptoms:</Text>
                    <Text style={styles.text}>{'\u25CF'} Fever</Text>
                    <Text style={styles.text}>{'\u25CF'} Dry Cough</Text>
                    <Text style={styles.text}>{'\u25CF'} Tiredness</Text>
                    <Text style={styles.infoTextSubtitle}>Less common symptoms:</Text>
                    <Text style={styles.text}>{'\u25CF'} Aches and Pains</Text>
                    <Text style={styles.text}>{'\u25CF'} Sore throat</Text>
                    <Text style={styles.text}>{'\u25CF'} Diarrhoea</Text>
                    <Text style={styles.text}>{'\u25CF'} Conjunctivitis</Text>
                    <Text style={styles.text}>{'\u25CF'} Headache</Text>
                    <Text style={styles.text}>{'\u25CF'} loss of taste or smell</Text>
                    <Text style={styles.text}>{'\u25CF'} Rash on skin, or discolouration of fingers or toes</Text>
                </View>

                <View style={styles.card}>
                    <Text style={styles.infoTextTitle}>Helpful Links</Text>
                    
                    <TouchableOpacity style={styles.helpfulLinks} onPress={()=> Linking.openURL('https://www.who.int/emergencies/diseases/novel-coronavirus-2019')}>
                        <View style={styles.imageContainer}>
                            <Image style={styles.image} source={require("../../assets/Images/link.png")}/>
                        </View>
                        <View style={styles.textContainer}>
                            <Text style={styles.linkText}>World Health Organization</Text>
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.helpfulLinks} onPress={()=> Linking.openURL('https://covid19responsefund.org/en/')}>
                        <View style={styles.imageContainer}>
                            <Image style={styles.image} source={require("../../assets/Images/link.png")}/>
                        </View>
                        <View style={styles.textContainer}>
                            <Text style={styles.linkText}>Donate Funds</Text>
                        </View>
                    </TouchableOpacity>
                </View>

                <View style={styles.card}>
                    <Text style={styles.infoTextTitle}>Developed By</Text>
                    <TouchableOpacity style={styles.helpfulLinks} onPress={()=> Linking.openURL('https://ksnvdkalyan.netlify.app/')}>
                        <View style={styles.imageContainer}>
                            <Image style={styles.image} source={require("../../assets/Images/develop.png")}/>
                        </View>
                        <View style={styles.textContainer}>
                            <Text style={styles.linkText}>Kalyan</Text>
                        </View>
                    </TouchableOpacity>
                </View>

                <View style={styles.card}>
                    <Text style={styles.infoTextTitle}>For Bugs</Text>
                    <TouchableOpacity style={styles.helpfulLinks} onPress={()=> Linking.openURL('mailto:koppineedi.suryanagavijayadurgakalyan.18cse@bmu.edu.in')}>
                        <View style={styles.imageContainer}>
                            <Image style={styles.image} source={require("../../assets/Images/error.png")}/>
                        </View>
                        <View style={styles.textContainer}>
                            <Text style={styles.linkText}>Report Error?</Text>
                        </View>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </View>
    )
}

export default index
