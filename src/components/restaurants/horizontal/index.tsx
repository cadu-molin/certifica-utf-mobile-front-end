import { View, Text, Pressable, Image } from 'react-native';
import { RestaurantsProps } from '..';

export default function RestaurantItem({ item }: {item: RestaurantsProps}) {
  return (
    <Pressable className='flex flex-col items-center justify-center'>
        <Image
            source={{ uri: item.image}}
            style={{ width: 80, height: 80, borderRadius: 9999}}
        />
      <Text className='text-sm mt-2 w-20 text-center leading-4 text-black' numberOfLines={2}>{item.name}</Text>
    </Pressable>
  )
}