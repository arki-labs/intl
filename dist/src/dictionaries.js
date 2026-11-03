const generalDictionaries = {
    en: () => import('./dictionaries/en.js').then(mod => mod.default),
    de: () => import('./dictionaries/de.js').then(mod => mod.default),
};
function deepMerge(target, source) {
    const output = { ...target };
    for (const key in source) {
        output[key] =
            source[key] instanceof Object && key in target && target[key] instanceof Object
                ? deepMerge(target[key], source[key])
                : source[key];
    }
    return output;
}
export const loadMessagesFromMultipleDictionaries = async (locale, defaultLocale, featureDictionaries) => {
    let messages = {};
    const dictionaries = [generalDictionaries, ...featureDictionaries];
    for (const dictionary of dictionaries) {
        // Own keys only: the locale is outside text, and `'__proto__'` or `'toString'` must not match a prototype member.
        const load = Object.hasOwn(dictionary, locale)
            ? dictionary[locale]
            : Object.hasOwn(dictionary, defaultLocale)
                ? dictionary[defaultLocale]
                : undefined;
        if (load !== undefined)
            messages = deepMerge(messages, await load());
    }
    return messages;
};
//# sourceMappingURL=dictionaries.js.map