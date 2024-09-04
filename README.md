# use-font

Web Component for declarative font loading in Shadow DOM.

## How to use

Import the component using your CDN of choice or from npm, and then include the component in any Shadow DOM.

```html
<script type="module" src="https://unpkg.com/use-font@1"></script>

<cursive-text>
  <template shadowrootmode="open">
    <use-font href="https://fonts.googleapis.com/css2?family=Playwrite+CU"></use-font>
    <style>
      slot {
        font-family: 'Playwrite CU';
      }
    </style>

    <slot></slot>
  </template>

  very mindful, very demure
</cursive-text>
```

<img src="./preview.png" alt="Cursive Text that reads 'very mindful very demure'.">

## Why?

There are browser inconsistencies when loading fonts in Shadow DOM, so this provides a temporary resolution. See:

- https://wpt.fyi/results/css/css-scoping?label=master&label=experimental&aligned&q=font-face
- https://issues.chromium.org/issues/41085401
- https://bugzilla.mozilla.org/show_bug.cgi?id=1884865
