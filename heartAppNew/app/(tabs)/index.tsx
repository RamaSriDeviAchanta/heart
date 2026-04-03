import { WebView } from 'react-native-webview';
import { View, StyleSheet } from 'react-native';

export default function Home() {
  return (
    <View style={styles.container}>
      <WebView source={{ uri: "https://heart-production-990b.up.railway.app/" }} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});