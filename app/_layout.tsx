import { Slot } from "expo-router";
import { useEffect, useState } from "react";
import * as SplashScreen from "expo-splash-screen";
import WelcomeLoader from "./WelcomeLoader";

SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [ready, setReady] = useState(false);

  useEffect(() => {
    async function load() {
      setTimeout(async () => {
        setReady(true);
        await SplashScreen.hideAsync();
      }, 2000);
    }

    load();
  }, []);

  if (!ready) return <WelcomeLoader />;

  return <Slot />;
}
