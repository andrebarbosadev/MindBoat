import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        margin: 8
    },
    title: {
        fontSize: 16,
        color: '#575757',
        marginBottom: 5,
        marginHorizontal: 8
    },
    subtitle: {
        fontSize: 14,
        color: '#575757'
    },
    cardTitleContent: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 5
    },
    titleText: {
        flex: 1,
        fontSize: 18,
        color: '#575757',
        marginHorizontal: 8,
        fontWeight: "bold"
    },
    divider: {
        borderColor: '#868686',
        borderWidth: 1,
        height: 20,
        marginLeft: 15,
        marginRight: 15
    },
    progress: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    actualProgress: {
        marginTop: 5,
        alignItems: 'center',
    },
    progressTitle: {
        fontSize: 12,
        color: '#777'
    },
    progressActualValue: {
        fontSize: 24,
        color: '#E05050',
        fontWeight: '600'
    },
    progressGoalValue: {
        fontSize: 24,
        color: '#3F8D2D',
        fontWeight: '600'
    },
    card: {
        marginTop: 8,
        marginHorizontal: 0,
        padding: 10
    },
    icon: {
        margin: 0,
        padding: 0,
        marginRight: 5,
        color: '#575757'
    },
    activitiesText: {
        marginTop: 10,
        fontSize: 20,
        color: '#575757'

    },
    listItemPoints: {
        marginTop: 18,
        fontSize: 12,
        color: '#3F8D2D',
    },
    boldText: {
        fontWeight: 'bold'
    },
    iconCourse: {
        flexDirection: "row",
        justifyContent: "center"
    },
    textTitleCourse: {
        fontWeight: "bold",
        fontSize: 20
    },
    courseImage: {
        maxHeight: 80,
        maxWidth: 80
    },
    courseDescription: {
        marginLeft: 8,
        maxWidth: 140
    },
    courseItem: {
        backgroundColor: '#fff',
        borderWidth: 2,
        borderColor: '#eee',
        maxHeight: 100,
        borderRadius: 8,
        paddingHorizontal: 16,
        paddingTop: 8,
        paddingBottom: 8,
        marginTop: 8,
        marginRight: 8,
        alignItems: 'center',
        justifyContent: 'space-between',
        textAlign: 'center',
    }
});

export default styles;