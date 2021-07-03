import React from 'react'
import { View, Text, Image, SafeAreaView, ScrollView } from 'react-native'
import styles from './styles'

const index = () => {
    return (
        <View>
            <Text style={styles.title}>Precautions</Text>

            <ScrollView style={styles.scrollView}>
                <View style={styles.card}>
                    <View style={styles.imageContainer}>
                        <Image style={[styles.image, styles.circleImage]} source={require("../../assets/Images/mask.jpg")}/>
                    </View>

                    <View style={styles.textContainer}>
                        <Text style={styles.cardTitle}>Wear a mask.</Text>

                        <Text style={styles.cardText}>
                        Masks are a simple barrier to help prevent your respiratory droplets from reaching others. Studies show that masks reduce the spray of droplets when worn over the nose and mouth. You should wear a mask, even if you do not feel sick.
                        </Text>
                    </View>
                </View>

                <View style={styles.card}>
                    <View style={styles.imageContainer}>
                        <Image style={styles.image} source={require("../../assets/Images/handWash.png")}/>
                    </View>

                    <View style={styles.textContainer}>
                        <Text style={styles.cardTitle}>Wash your hands.</Text>

                        <Text style={styles.cardText}>
                        Washing your hands properly with soap and water can help prevent the spread of the germs that cause these diseases. Some forms of gastrointestinal and respiratory infections can cause serious complications, especially for those with a weakened immune system.
                        </Text>
                    </View>
                </View>

                <View style={styles.card}>
                    <View style={styles.imageContainer}>
                        <Image style={styles.image} source={require("../../assets/Images/distance.png")}/>
                    </View>

                    <View style={styles.textContainer}>
                        <Text style={styles.cardTitle}>Maintain Safe Distance.</Text>

                        <Text style={styles.cardText}>
                        People can spread the virus before they know they are sick, it is important to stay at least 6 feet away from others. Social distancing is especially important for people who are at higher risk for severe illness from COVID-19.
                        </Text>
                    </View>
                </View>

                <View style={styles.card}>
                    <View style={styles.imageContainer}>
                        <Image style={styles.image} source={require("../../assets/Images/home.png")}/>
                    </View>

                    <View style={styles.textContainer}>
                        <Text style={styles.cardTitle}>Stay Home.</Text>

                        <Text style={styles.cardText}>
                        Stay-at-home reduces the risk by removing human contact, except with family members in the home. While there are other factors that impact how the virus spreads, isolating is one of the most important things someone can do to help avoid infection or becoming a carrier.
                        </Text>
                    </View>
                </View>

                <View style={styles.card}>
                    <View style={styles.imageContainer}>
                        <Image style={styles.image} source={require("../../assets/Images/food.png")}/>
                    </View>

                    <View style={styles.textContainer}>
                        <Text style={styles.cardTitle}>Eat Healthy Food.</Text>

                        <Text style={styles.cardText}>
                        A healthy diet is essential for good health and nutrition. It protects you against many chronic noncommunicable diseases, such as heart disease, diabetes and cancer. Eating a variety of foods and consuming less salt, sugars and saturated and industrially-produced trans-fats, are essential for healthy diet.
                        </Text>
                    </View>
                </View>

                <View style={styles.card}>
                    <View style={styles.imageContainer}>
                        <Image style={styles.image} source={require("../../assets/Images/vaccine.png")}/>
                    </View>

                    <View style={styles.textContainer}>
                        <Text style={styles.cardTitle}>Get Vaccinated.</Text>

                        <Text style={styles.cardText}>
                        A vaccine activates our immune system without making us sick. Many dangerous infectious diseases can be prevented in this simple and effective way. If we are ever to return to some semblance of normality, then the world’s population needs to be immune to SARS-CoV-2, the virus that causes COVID-19.
                        </Text>
                    </View>
                </View>

                <View style={styles.card}>
                    <View style={styles.imageContainer}>
                        <Image style={styles.image} source={require("../../assets/Images/help.png")}/>
                    </View>

                    <View style={styles.textContainer}>
                        <Text style={styles.cardTitle}>Help Others in need.</Text>

                        <Text style={styles.cardText}>
                        Helping others connects us to others, creating stronger communities and helping to build a happier society for everyone. And it's not all about money - we can also give our time, ideas and energy. Following above precautions is important but helping others in need is most important.
                        </Text>
                    </View>
                </View>
            </ScrollView>
        </View>
    )
}

export default index
