import React, { useContext } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import { NavigationStackScreenComponent } from 'react-navigation-stack';
import { BlogContext, Post } from '../context/BlogContext';

export const IndexScreen: NavigationStackScreenComponent = () => {
    const blogPosts = useContext(BlogContext) as Post[];

    return (
        <View>
            <Text>Index Screen</Text>
            <FlatList
                data={blogPosts}
                keyExtractor={(item) => item.id.toString()}
                renderItem={(renderItem) => {
                    const blogPost = renderItem.item;
                    return <Text>{blogPost.title}</Text>;
                }}
            />
        </View>
    );
};

const styles = StyleSheet.create({});
