import React from 'react';

export const BlogContext = React.createContext({});

export interface Post {
    title: string;
    id: number;
}

export const BlogProvider: React.FC<Post> = ({ children }) => {
    const blogPosts: Post[] = [
        { title: 'Blog #1', id: 1 },
        { title: 'Blog #2', id: 2 },
        { title: 'Blog #3', id: 3 },
    ];
    return (
        <BlogContext.Provider value={blogPosts}>
            {children}
        </BlogContext.Provider>
    );
};
