import { Button, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const TodoCard = ({ title, id, completed,hanldetDelete,hanldeToggle }) => {
    return (
        <View style={styles.mainContainer}>
            <View style={styles.fistContainer}>
            <Text style={{fontSize : 16, color : "#fff", margin : 5}}>{title}</Text>
            <Text style={{fontSize : 16, color : "#fff", margin : 5}}>{completed ? "Completed" : "Not-Completed"}</Text>
            </View>
            <View style={styles.secondContainer}>
            <Button title='Toggle' onPress={()=>hanldeToggle(id)} color={"skyblue"}/>
            <Button title='Delete' onPress={()=>hanldetDelete(id)} color={"red"}/>
            </View>
        </View>
    )
}

export default TodoCard

const styles = StyleSheet.create({
    mainContainer: {
        backgroundColor: "deeppink",
        display: "flex",
        flexDirection: "column",
        alignItems : "center",
        justifyContent : "center",
        margin : 10,
        padding : 10,
        borderRadius : 10,
        zIndex : 100
    },
    fistContainer : {
        flex : 1,
        flexDirection : "row",
        margin : 5
    },
    secondContainer : {
        flex : 1,
        flexDirection : "row",
    }
})