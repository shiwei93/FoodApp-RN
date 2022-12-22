import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import Crown from '@/asset/crown.svg';
import Star from '@/asset/star.svg';
import Add from '@/asset/add.svg';

interface Props {
    title?: string;
}

const Card = ({ _title }: Props) => {
    return (
        <View style={styles.cardContainer}>
            <View style={[styles.cardTag, { marginBottom: 20 }]}>
                <Crown
                    style={{
                        marginRight: 10,
                    }}
                />
                <Text style={styles.cardText}>top of the week</Text>
            </View>
            <Text style={styles.cardText}>Primavera Pizza</Text>
            <Text style={styles.productWeight}>Weight 540 gr</Text>
            <View style={styles.cardFooter}>
                <TouchableOpacity style={styles.addButton} activeOpacity={0.9} onPress={() => {}}>
                    <Add />
                </TouchableOpacity>
                <Star />
                <Text style={styles.productStar}>5.0</Text>
            </View>
            <Image
                source={require('@/asset/images/pizza.png')}
                resizeMode="contain"
                style={styles.productImage}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    cardContainer: {
        position: 'relative',
        marginBottom: 20,
        paddingTop: 24,
        paddingHorizontal: 20,
        paddingBottom: 64,
        borderRadius: 25,
        shadowColor: '#000000',
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowRadius: 10,
        shadowOpacity: 0.1,
        backgroundColor: '#FFFFFF',
    },
    cardTag: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
    },
    cardText: {
        color: '#000000',
        fontWeight: '600',
        fontSize: 14,
    },
    productWeight: {
        paddingTop: 5,
        color: '#C4C4C4',
        fontSize: 12,
    },
    productStar: {
        paddingLeft: 5,
        color: '#000',
        fontSize: 12,
    },
    cardFooter: {
        position: 'absolute',
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'row',
        left: 0,
        right: 0,
        bottom: 0,
    },
    addButton: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        marginRight: 20,
        height: 53,
        width: 90,
        borderBottomLeftRadius: 25,
        borderTopRightRadius: 25,
        backgroundColor: '#F5CA48',
    },
    productImage: {
        position: 'absolute',
        width: 144,
        height: 144,
        right: 0,
        top: 10,
    },
});

export default Card;
