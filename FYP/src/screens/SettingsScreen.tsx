import * as React from 'react';
import { View, Text, Button } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';

// Optional: if you want navigation type-safe
type Props = NativeStackScreenProps<any, 'Settings'>;

export default function SettingsScreen({ navigation }: Props) {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Settings Screen</Text>
      <Button
        title="Go Back Home"
        onPress={() => navigation.navigate('Home')}
      />
    </View>
  );
}
