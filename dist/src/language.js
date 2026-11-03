import { isLangCode } from 'is-language-code';
export { getAll639_1, getAll639_2B, getAll639_2T, getAll639_3, getEnglishName, getIsoCodesFromNativeName, getName, getNativeName, isValid, } from 'all-iso-language-codes';
/** Checks a BCP 47 tag such as `en-US` against the language lists. Returns the `is-language-code` result. */
export const isLanguageCode = (value) => isLangCode(value);
//# sourceMappingURL=language.js.map