type MessageCollection = {
    [key: string]: string | MessageCollection;
};
export declare const loadMessagesFromMultipleDictionaries: (locale: string, defaultLocale: string, featureDictionaries: Record<string, () => Promise<MessageCollection> | MessageCollection>[]) => Promise<MessageCollection>;
export {};
//# sourceMappingURL=dictionaries.d.ts.map