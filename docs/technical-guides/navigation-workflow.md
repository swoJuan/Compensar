# Navigation workflow

This guide documents how the Design System portal builds its sidebar navigation.

## Source of truth

The navigation source of truth is `navigationMap` in `js/router.js`.

Each route entry defines:

```js
'web/componentes/cards': {
  label: 'Cards',
  path: 'transversales/components/cards.html',
  icon: 'credit_card',
  group: 'web-componentes'
}
```

- `label`: visible text in the sidebar.
- `path`: HTML fragment loaded from `docs/`.
- `icon`: semantic icon key used by the shell icon map.
- `group`: sidebar group where the item appears.

Do not duplicate the same navigation item manually in `design-system.html`.

## Rendering flow

1. `design-system.html` keeps `<aside id="sidebar"></aside>` empty.
2. On `DOMContentLoaded`, the shell calls `router.getNav()`.
3. The shell filters entries by the configured `navGroups` list.
4. For each entry, the shell creates an anchor with:
   - `href="#route/id"`
   - `data-nav-item="route/id"`
   - an icon mapped through `NAV_ICON_MAP`
   - the visible `label`
5. `router.init()` loads the initial route from the URL hash or the default section.
6. `router.navigate(section)` fetches the fragment, injects it into `#main-content`, updates the hash and marks the active nav item.

This keeps the sidebar synchronized with the router and avoids hardcoded navigation markup.

## Adding a section

1. Create the HTML fragment under `docs/`.
2. Add one entry to `navigationMap` in `js/router.js`.
3. Use an existing `group` value, or add a new group to `navGroups` in `design-system.html`.
4. If the route uses a new icon key, add it to `NAV_ICON_MAP` in `design-system.html`.
5. If the page needs page-specific JavaScript, load the script in `design-system.html` and initialize it from `router.navigate()`.

## Group order

The visual order of the sidebar is controlled by `navGroups` in `design-system.html`.

The order of items inside each group follows the insertion order of `navigationMap` in `js/router.js`.

## Active state

`router.navigate(section)` calls `updateActiveNav(section)`.

The active item is selected by:

```js
document.querySelector(`[data-nav-item="${section}"]`)
```

For that reason, dynamically generated links must keep `data-nav-item` equal to the route key.

## Cache version

Fragments are loaded with a version query string inside `router.navigate()`.

Update `fragmentVersion` in `js/router.js` when a browser keeps showing stale HTML fragments during local review.

