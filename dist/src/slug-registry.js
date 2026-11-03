/**
 * Bidirectional registry that maps resource IDs to localized slugs and back.
 *
 * Slug disambiguation: when the same slug appears under multiple URL scopes
 * (e.g., `formatierer` under both `json` and `yaml`), lookups are
 * scoped by the URL format segment. Pass `scope` to `getResourceId()` when
 * the app's routing provides a scope (format) segment.
 */
export class SlugRegistry {
    /** resourceId → locale → slug */
    byId = new Map();
    /** `${locale}:${scope ?? ''}:${slug}` → resourceId */
    bySlug = new Map();
    constructor(slugs) {
        for (const { resourceId, locale, slug, scope } of slugs) {
            if (!this.byId.has(resourceId))
                this.byId.set(resourceId, new Map());
            this.byId.get(resourceId).set(locale, slug);
            this.bySlug.set(this.key(locale, slug, scope), resourceId);
        }
    }
    /** Forward lookup: resourceId + locale → slug */
    getSlug(resourceId, locale) {
        return this.byId.get(resourceId)?.get(locale);
    }
    /**
     * Reverse lookup: (slug, locale, scope?) → resourceId.
     *
     * Pass `scope` (the URL format segment, e.g. `'json'`, `'werkzeuge'`) to
     * disambiguate slugs that are the same across multiple formats.
     */
    getResourceId(slug, locale, scope) {
        // Try scoped lookup first; fall back to unscoped
        return (this.bySlug.get(this.key(locale, slug, scope)) ??
            this.bySlug.get(this.key(locale, slug)));
    }
    /**
     * Maps an English tool URL to its localized equivalent.
     *
     * Example: `('/json/formatter/', 'de', 'en')` → `'/de/json/formatierer/'`
     * The last path segment (the tool action) is replaced with the translated slug.
     * Format segments (e.g., `json`, `yaml`) are kept as-is.
     */
    getLocalizedUrl(resourceId, targetLocale, defaultLocale, englishUrl) {
        if (targetLocale === defaultLocale)
            return englishUrl;
        const toolSlug = this.getSlug(resourceId, targetLocale);
        if (!toolSlug)
            return englishUrl;
        // Strip leading/trailing slashes, split segments
        const segments = englishUrl.replaceAll(/^\/|\/$/g, '').split('/');
        segments[segments.length - 1] = toolSlug;
        return `/${targetLocale}/${segments.join('/')}/`;
    }
    key(locale, slug, scope) {
        return `${locale}:${scope ?? ''}:${slug}`;
    }
}
//# sourceMappingURL=slug-registry.js.map