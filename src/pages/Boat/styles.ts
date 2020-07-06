import { StyleSheet, Dimensions } from "react-native";
import { NativeViewGestureHandler } from "react-native-gesture-handler";

const styles = StyleSheet.create({
    transparentAppBar: {
        color: '#fff',
        backgroundColor: 'transparent',
        position: 'absolute',
        top: 0,
        zIndex: 1
    },
    title: {
        fontSize: 32,
        marginTop: 8
    },
    container: {
        padding: 10,
    },
    imageContainer: {
        position: 'relative',
        height: Math.round(Dimensions.get('window').height * 0.3)
    },
    fabFavorite: {
        bottom: -25,
        left: '45%',
        position: 'absolute'
    },
    favoritesContainer: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    subtitle: {
        fontSize: 20,
        marginLeft: 16,
        marginBottom: 8
    },
    listItem: {
        paddingVertical: 0,
        marginVertical: 0
    },
    imageTitle: {
        height: Math.round(Dimensions.get('window').height * 0.3),
        width: Dimensions.get('window').width,
        resizeMode: "stretch"
    },
    videoContainer: {
        marginTop: 20
    },
    watched: {
        color: '#3F8D2D',
        fontSize: 12,
        alignItems: 'center',
        textAlign: 'center'
    },
    icon: {
        margin: 0,
        padding: 0,
        marginLeft: 5,
        color: '#3F8D2D',
    },
    cardTitleContent: {
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: 8
    },
    techStyle: {
        flexDirection: 'column'
    },
    titleText: {
        flex: 1,
        fontSize: 18,
        color: '#575757'
    },
    item: {
        backgroundColor: '#fff',
        borderWidth: 2,
        borderColor: '#eee',
        height: 60,
        borderRadius: 8,
        paddingTop: 16,
        paddingBottom: 16,
        marginRight: 8,
        marginVertical: 8,
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
        textAlign: 'center',
    },
    iconText: {
        flexDirection: 'column',
        justifyContent: 'flex-start'
    },
    selectedItem: {
        borderColor: '#34CB79',
        borderWidth: 2,
    },
    itemTitle: {
        textAlign: 'left',
        paddingRight: 8,
        fontSize: 13,
    },
});

export default styles;