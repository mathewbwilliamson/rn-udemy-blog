import React from 'react';

export const BlogContext = React.createContext({});

export const BlogProvider: React.FC<any> = ({ children }) => {
    return <BlogContext.Provider>{children}</BlogContext.Provider>;
};
