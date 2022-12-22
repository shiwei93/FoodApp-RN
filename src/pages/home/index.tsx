import { ScrollView, View } from 'react-native';
import Section from '@/components/section';
import Card from '@/components/card';
import Category from '@/components/category';

const Home = () => {
    const backgroundStyle = {
        backgroundColor: '#F9F9FB',
    };

    return (
        <ScrollView contentInsetAdjustmentBehavior="automatic" style={backgroundStyle}>
            <View
                style={{
                    backgroundColor: '#F9F9FB',
                }}
            >
                <Section title="Categories" direction="horizontal">
                    <Category />
                    <Category />
                    <Category />
                </Section>
                <Section title="Popular">
                    <Card title="1" />
                    <Card title="2" />
                    <Card title="3" />
                    <Card title="4" />
                    <Card title="5" />
                    <Card title="6" />
                </Section>
            </View>
        </ScrollView>
    );
};

export default Home;
