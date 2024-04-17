import { StyleSheet } from 'react-native';

import { Text, View } from '@/components/Themed';
import {supabase} from "@/lib/supabase";
import ActiveDuty from "@/components/duties/ActiveDuty";
import {Duty} from "@/types";

export default function HomeScreen() {
  // const {data: duty, error} = await supabase.from('duties').select().limit(1).maybeSingle();
  // if (error) {
  //   console.error(`${error.code}: ${error.message}`);
  // }
  const duty: Duty = {
    id: "rewerwewr3r2wer",
    name: "Járőrözés",
    starts_at: new Date().toDateString(),
    created_at: new Date().toDateString(),
    user_id: "kqhefkqewf",
    plate_num: '324LJK',
    ends_at: null,
    description: "Körbenézünk errefele nincs e drog"
  }

  return (
    <View style={styles.container}>
      {duty ? (
          <ActiveDuty duty={duty} onEnd={() => {}}/>
      ) : (
          <Text>Currently no duties are available</Text>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
