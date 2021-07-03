import React, {useState, useEffect} from 'react'
import { ScrollView, View, Text, Image, Linking, TouchableOpacity } from 'react-native'
import axios from 'axios'
import styles from './styles'

const index = () => {
    const [responseData, setResponseData] = useState([])

    const getCovidNews = async () => {
        let response = await axios.get("https://newsapi.org/v2/everything?q=COVID&apiKey=338061d52d6846ad9137f7761bab31d7")
        setResponseData(response.data.articles)
    }

    useEffect(() => {
        getCovidNews()
    }, [])

    return (
        <View style={styles.wrapper}>
            <Text style={styles.title}>Covid News</Text>

            <ScrollView>
                {responseData.map((article) => (
                    <TouchableOpacity onPress={() => {
                        Linking.openURL(article.url)
                    }} key={article.title} style={styles.card}>
                        <View style={styles.cardWrapper}>
                            <View style={styles.imageContainer}>
                                <Image source={{uri : article.urlToImage}} style={styles.image}/>
                            </View>
                            <View>
                                <Text style={styles.articleTitle}>{article.title}</Text>
                                <Text style={styles.descriptionText}>{article.description}</Text>
                            </View>
                        </View>
                    </TouchableOpacity>
                ))}
            </ScrollView>
        </View>
    )
}

export default index
