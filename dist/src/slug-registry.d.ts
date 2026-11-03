import type { LocalizedResourceSlug } from './types.js';
/**
 * Bidirectional registry that maps resource IDs to localized slugs and back.
 *
 * Slug disambiguation: when the same slug appears under multiple URL scopes
 * (e.g., `formatierer` under both `json` and `yaml`), lookups are
 * scoped by the URL format segment. Pass `scope` to `getResourceId()` when
 * the app's routing provides a scope (format) segment.
 */
export declare class SlugRegistry {
    /** resourceId → locale → slug */
    private readonly byId;
    /** `${locale}:${scope ?? ''}:${slug}` → resourceId */
    private readonly bySlug;
    constructor(slugs: LocalizedResourceSlug[]);
    /** Forward lookup: resourceId + locale → slug */
    getSlug(resourceId: string, locale: string): string | undefined;
    /**
     * Reverse lookup: (slug, locale, scope?) → resourceId.
     *
     * Pass `scope` (the URL format segment, e.g. `'json'`, `'werkzeuge'`) to
     * disambiguate slugs that are the same across multiple formats.
     */
    getResourceId(slug: string, locale: string, scope?: string): string | undefined;
    /**
     * Maps an English tool URL to its localized equivalent.
     *
     * Example: `('/json/formatter/', 'de', 'en')` → `'/de/json/formatierer/'`
     * The last path segment (the tool action) is replaced with the translated slug.
     * Format segments (e.g., `json`, `yaml`) are kept as-is.
     */
    getLocalizedUrl(resourceId: string, targetLocale: string, defaultLocale: string, englishUrl: string): string;
    private key;
}
//# sourceMappingURL=slug-registry.d.ts.map