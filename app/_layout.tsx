import FontAwesome from '@expo/vector-icons/FontAwesome';

import { useFonts } from 'expo-font';
import { SplashScreen, Stack, useRouter } from 'expo-router';
import { useEffect } from 'react';
import { View, Button } from 'react-native';

export {
  // Catch any errors thrown by the Layout component.
  ErrorBoundary,
} from 'expo-router';

export const unstable_settings = {
  // Ensure that reloading on `/modal` keeps a back button present.
  initialRouteName: '(tabs)',
};

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [loaded, error] = useFonts({
    SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
    ...FontAwesome.font,
  });

  // Expo Router uses Error Boundaries to catch errors in the navigation tree.
  useEffect(() => {
    if (error) throw error;
  }, [error]);

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return <RootLayoutNav />;
}

function RootLayoutNav() {
  const router = useRouter();

  return (
    <Stack
      screenOptions={{
        headerStyle: { backgroundColor: '#10101E' },
        headerTintColor: '#fff',
        headerTitleStyle: { fontWeight: 'bold' },
      }}
    >
      <Stack.Screen
        options={{ headerShown: false, headerTitle: 'Scoring App' }}
        name="(tabs)"
      />
      <Stack.Screen
        options={{ headerShown: true, headerTitle: 'Login' }}
        name="index"
      />
      <Stack.Screen
        name="register"
        options={{
          headerTitle: 'Create Account',
          headerRight: () => (
            <Button
              title="Open"
              onPress={() => {
                router.push('/modal');
              }}
            />
          ),
        }}
      />
      <Stack.Screen
        name="modal"
        options={{
          headerTitle: '',
          presentation: 'modal',
          headerLeft: () => (
            <Button
              title="Close"
              onPress={() => {
                router.back();
              }}
            />
          ),
        }}
      />
    </Stack>
  );
}
