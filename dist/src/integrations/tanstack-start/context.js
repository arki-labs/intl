import { jsx as _jsx } from "react/jsx-runtime";
import { createContext, useContext } from 'react';
import { IntlProvider } from 'use-intl';
const LocaleContext = createContext('en');
/**
 * Provides locale to TanStack Start apps.
 *
 * Mounts `use-intl`'s `IntlProvider` so shared components that call
 * `useLocale()` / `useTranslations()` from `use-intl` (e.g. `@fleet/sitekit`)
 * resolve context correctly under Vite SSR.
 */
export const LocaleProvider = ({ locale = 'en', messages = {}, timeZone = 'UTC', children, }) => (_jsx(LocaleContext.Provider, { value: locale, children: _jsx(IntlProvider, { locale: locale, messages: messages, timeZone: timeZone, children: children }) }));
export const useLocale = () => useContext(LocaleContext);
//# sourceMappingURL=context.js.map