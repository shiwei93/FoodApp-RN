import { View, StyleSheet } from 'react-native';

const Category = () => {
    return <View style={styles.categoryCard} />;
};

const styles = StyleSheet.create({
    categoryCard: {
        position: 'relative',
        borderRadius: 20,
        width: 105,
        height: 177,
        shadowColor: '#000000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowRadius: 10,
        shadowOpacity: 0.15,
        backgroundColor: '#FFFFFF',
    },
});

export default Category;
