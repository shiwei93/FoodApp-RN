import { FC, type PropsWithChildren } from 'react';
import { useColorScheme, View, Text, StyleSheet } from 'react-native';

import { Colors } from 'react-native/Libraries/NewAppScreen';

const Section: FC<PropsWithChildren<{ title: string; direction?: 'horizontal' | 'vertical' }>> = ({
    children,
    title,
    direction = 'vertical',
}) => {
    const isDarkMode = useColorScheme() === 'dark';

    return (
        <View style={styles.sectionContainer}>
            <Text
                style={[
                    styles.sectionTitle,
                    {
                        color: isDarkMode ? Colors.white : Colors.black,
                        marginBottom: 12,
                    },
                ]}
            >
                {title}
            </Text>
            <View
                style={{
                    display: 'flex',
                    flexDirection: direction === 'vertical' ? 'column' : 'row',
                }}
            >
                {children}
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    sectionContainer: {
        paddingHorizontal: 24,
    },
    sectionTitle: {
        fontSize: 16,
        fontWeight: '700',
        lineHeight: 20,
    },
});

export default Section;
