import {Duty} from "@/types";
import {StyleSheet, Text, View} from "react-native";

interface ActiveDutyProps {
    duty: Duty
    onEnd: () => void;
}

function ActiveDuty({ duty, onEnd }: ActiveDutyProps) {
    return (
        <View style={styles.container}>
            {/* Info Bar */}
            <View style={styles.infoBar}>
                <Text>{duty.plate_num}</Text>
                <Text>Típus: járőrözés</Text>
                <Text>{duty.starts_at}</Text>
            </View>

            {/* Fellow officers on the duty */}
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        borderRadius: 20,
    },
    infoBar: {
        flexDirection: 'row'
    }
})

export default ActiveDuty;