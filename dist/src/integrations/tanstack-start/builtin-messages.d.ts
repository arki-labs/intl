export type MessageBag = Record<string, unknown>;
/**
 * The built-in bag for a locale. A locale is outside text (cookie, URL, header), so only own keys count:
 * `'__proto__'` and `'constructor'` fall back to English instead of picking an `Object.prototype` member.
 */
export declare const builtinMessagesFor: (locale: string) => MessageBag;
//# sourceMappingURL=builtin-messages.d.ts.map