import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Home from "./pages/Home";
import Boat from "./pages/Boat";
import Courses from "./pages/Courses";
import Profile from "./pages/Profile";
import ChangeBoat from "./pages/ChangeBoat";
import MyCourses from "./pages/MyCourses";

const AppStack = createStackNavigator();

const Routes = () => {
    return (
        <NavigationContainer>
            <AppStack.Navigator
                headerMode="none"
                screenOptions={{
                    cardStyle: {
                        backgroundColor: "#fff",
                    },
                }}
            >
                <AppStack.Screen name="Home" component={Home} />
                <AppStack.Screen name="Profile" component={Profile} />
                <AppStack.Screen name="Boat" component={Boat} />
                <AppStack.Screen name="ChangeBoat" component={ChangeBoat} />
                <AppStack.Screen name="Courses" component={Courses} />
                <AppStack.Screen name="MyCourses" component={MyCourses} />
            </AppStack.Navigator>
        </NavigationContainer>
    );
};

export default Routes;