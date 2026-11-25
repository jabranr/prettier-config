# Prettier config

Prettier configuration for consistent format across all different projects.

> Highely opinionated for personal use and may change any time without any announcements or warnings. Use at own risk.

# Usage

Requires **Prettier 3.4 or newer**. Prettier is a peer dependency, so install both:

```shell
npm i -D prettier@^3.4.0 @jabraf/prettier
```

The config is an ES module. Older Prettier versions don't fail when they load it. They print `Ignored unknown option { default: ... }` and format with Prettier's defaults:

- Prettier 2.x can't load ES module configs.
- Prettier 3.0–3.3 on Node 22.12 or newer reads the module wrapper instead of the config.

Check your version with `npm ls prettier` and upgrade if it is older than 3.4.

Add reference to your `package.json` file

```json
{
  "prettier": "@jabraf/prettier"
}
```

---

&copy; 2019 Jabran Rafique
