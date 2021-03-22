import { createContext } from 'react';

export const DeveloperProfileContext = createContext({});
export const StoreContext = createContext({});
type StaticDataContextType = {
    apiKeys: { giphy: 'EdRnGMBc5SOXQAuh8UrUnIcfaG8A7bBI'; unsplash: string };
    endpoints: {
        devIcons: string;
        unsplashProxy: string;
    };
};
export const StaticDataContext = createContext<Partial<StaticDataContextType>>({});
