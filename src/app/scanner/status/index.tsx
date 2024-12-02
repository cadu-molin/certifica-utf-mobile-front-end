import React from 'react'; 
import { View, Text } from 'react-native';
import { Check } from 'lucide-react-native';
import { useLocalSearchParams } from 'expo-router';

import Button from '@/src/app/scanner/status/components/button';
import Info from '@/src/app/scanner/status/components/info';
import Image from '@/src/app/scanner/status/components/image';

export default function ScannerStatus() {
  const { status } = useLocalSearchParams(); 
  const isSuccess = status === 'true';

  return (
    <View className="flex-1 bg-white items-center justify-evenly px-6">
      <Image status={isSuccess}/>

      <Info status={isSuccess}/>

      <Button status={isSuccess}/>
    </View>
  );
}
