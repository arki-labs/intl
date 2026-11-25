/**
 * A dictionary could not be loaded: a chunk failed to download or import, or a feature loader rejected. The
 * cause is on the failure; no partial messages are returned.
 * @fix Check the network and the deployed dictionary chunks, then load again.
 * @verify bun run test -- src/dictionaries.test.ts
 */
export declare const DictionaryLoadFailed: import("@arki/failure").FailureDefinition<"intl.dictionary_load_failed", undefined>;
/** A {@link DictionaryLoadFailed} failure value. */
export type DictionaryLoadFailed = ReturnType<typeof DictionaryLoadFailed>;
type MessageCollection = {
    [key: string]: string | MessageCollection;
};
export declare const loadMessagesFromMultipleDictionaries: (locale: string, defaultLocale: string, featureDictionaries: Record<string, () => Promise<MessageCollection> | MessageCollection>[]) => Promise<MessageCollection | DictionaryLoadFailed>;
export {};
//# sourceMappingURL=dictionaries.d.ts.map