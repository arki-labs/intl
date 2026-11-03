export { type IsoType as LanguageIsoCode, getAll639_1, getAll639_2B, getAll639_2T, getAll639_3, getEnglishName, getIsoCodesFromNativeName, getName, getNativeName, isValid, } from 'all-iso-language-codes';
/** Checks a BCP 47 tag such as `en-US` against the language lists. Returns the `is-language-code` result. */
export declare const isLanguageCode: (value: string) => {
    res: true;
    message: null;
} | {
    res: false;
    message: string;
};
//# sourceMappingURL=language.d.ts.map