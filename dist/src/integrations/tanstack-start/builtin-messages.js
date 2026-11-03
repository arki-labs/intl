import deMessages from '../../dictionaries/de.js';
import enMessages from '../../dictionaries/en.js';
const BUILTIN_MESSAGES = {
    en: enMessages,
    de: deMessages,
};
/**
 * The built-in bag for a locale. A locale is outside text (cookie, URL, header), so only own keys count:
 * `'__proto__'` and `'constructor'` fall back to English instead of picking an `Object.prototype` member.
 */
export const builtinMessagesFor = (locale) => Object.hasOwn(BUILTIN_MESSAGES, locale) ? BUILTIN_MESSAGES[locale] : BUILTIN_MESSAGES.en;
//# sourceMappingURL=builtin-messages.js.map