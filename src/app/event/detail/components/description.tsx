import { Event } from "@/types/EventType";
import { Feather, Fontisto } from "@expo/vector-icons";
import { Image, Text, View } from "react-native";
import MapView, { Marker } from "react-native-maps";

export default function Description({ event }: { event: Event }) {
  return (
  <View className="p-5 pt-12">
    <View className="mb-6">
      <Text className="text-lg font-semibold text-white mb-3">Descrição</Text>
      <Text className="text-base text-white opacity-80 leading-6">
        {event.description}
      </Text>
    </View>

    <View className="mb-6">
      <Text className="text-lg font-semibold text-white mb-3">Local</Text>
      <View className="rounded-xl overflow-hidden h-[200px]">
        <MapView
          style={{ flex: 1, width: '100%', height: '100%' }}
          initialRegion={{
            latitude: event.location.coordinates.latitude,
            longitude: event.location.coordinates.longitude,
            latitudeDelta: 0.001,
            longitudeDelta: 0.001,
          }}
        >
        <Marker
          coordinate={{
            latitude: -23.55052,
            longitude: -46.633308,
          }}
        />
        </MapView>
      </View>
    </View>
  </View>
  )
}