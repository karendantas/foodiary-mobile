import { View } from "react-native";
import { HomeHeader } from "../../components/HomeHeader";
import { MealsList } from "../../components/MealsList";
import { CreateMealBottomBar } from "../../components/CreateMealBottomBar";

export default function Home () {
    return (
        <View className="flex-1">
            <HomeHeader />
            <MealsList />

            <CreateMealBottomBar />
        </View>
    )
}