import { a4 as element, S as pop, Q as push, W as attr, a0 as stringify, X as spread_attributes, Y as bind_props, Z as getContext, V as escape_html, $ as ensure_array_like, a5 as add_styles, _ as spread_props } from "../../chunks/index.js";
import { m as anchor, o as badge, p as fade, q as banner, s as button, u as card, v as closeButtonVariants, w as replaceLibImport, x as highlightcompo, y as copyToClipboard, z as supportBanner, r as removeHyphensAndCapitalize } from "../../chunks/theme.js";
import "../../chunks/client.js";
import hljs from "highlight.js/lib/core";
import xml from "highlight.js/lib/languages/xml";
import javascript from "highlight.js/lib/languages/javascript";
import css from "highlight.js/lib/languages/css";
import register from "highlight.js/lib/languages/markdown";
import { twMerge } from "tailwind-merge";
function html(value) {
  var html2 = String(value ?? "");
  var open = "<!---->";
  return open + html2 + "<!---->";
}
function Anchor($$payload, $$props) {
  push();
  let {
    children,
    spanClass,
    aClass,
    class: className,
    tag,
    $$slots,
    $$events,
    ...restProps
  } = $$props;
  const { base, span, anchor: anchorCls } = anchor();
  let content = "";
  let slug = "";
  element(
    $$payload,
    tag,
    () => {
      $$payload.out += `${spread_attributes({
        ...restProps,
        class: base({ className })
      })}`;
    },
    () => {
      children($$payload);
      $$payload.out += `<!----> <span${attr("id", slug)}${attr("class", span({ class: spanClass }))}></span> <a${attr("class", anchorCls({ class: aClass }))}${attr("href", `#${stringify(slug)}`)}${attr("aria-label", `Link to this section: ${stringify(content)}`)}>#</a>`;
    }
  );
  pop();
}
function Badge($$payload, $$props) {
  push();
  let {
    children,
    icon,
    badgeStatus = true,
    color = "primary",
    large = false,
    dismissable = false,
    class: className,
    border,
    href,
    target,
    rounded,
    transition = fade,
    params,
    aClass,
    onclick,
    $$slots,
    $$events,
    ...restProps
  } = $$props;
  const { base, hrefClass } = badge({
    color,
    size: large ? "large" : "small",
    border,
    rounded
  });
  if (badgeStatus) {
    $$payload.out += "<!--[-->";
    $$payload.out += `<div${spread_attributes({
      ...restProps,
      class: base({ className })
    })}>`;
    if (href) {
      $$payload.out += "<!--[-->";
      $$payload.out += `<a${attr("href", href)}${attr("target", target)}${attr("class", hrefClass({ class: aClass }))}>`;
      children($$payload);
      $$payload.out += `<!----></a>`;
    } else {
      $$payload.out += "<!--[!-->";
      children($$payload);
      $$payload.out += `<!---->`;
    }
    $$payload.out += `<!--]--> `;
    if (dismissable) {
      $$payload.out += "<!--[-->";
      if (icon) {
        $$payload.out += "<!--[-->";
        $$payload.out += `<button type="button" class="m-0.5 -me-1.5 ms-1.5 whitespace-normal rounded p-0.5 text-primary-500 hover:bg-primary-200 focus:outline-none focus:ring-1 focus:ring-primary-400 dark:hover:bg-primary-800 dark:hover:text-primary-300" aria-label="Remove badge"><span class="sr-only">Remove badge</span> `;
        icon($$payload);
        $$payload.out += `<!----></button>`;
      } else {
        $$payload.out += "<!--[!-->";
        if (onclick) {
          $$payload.out += "<!--[-->";
          CloseButton($$payload, {
            class: "-me-1.5 ms-1.5",
            color,
            size: large ? "sm" : "xs",
            ariaLabel: "Remove badge",
            onclick
          });
        } else {
          $$payload.out += "<!--[!-->";
          CloseButton($$payload, {
            class: "-me-1.5 ms-1.5",
            color,
            size: large ? "sm" : "xs",
            ariaLabel: "Remove badge",
            onclick: () => {
              badgeStatus = false;
            }
          });
        }
        $$payload.out += `<!--]-->`;
      }
      $$payload.out += `<!--]-->`;
    } else {
      $$payload.out += "<!--[!-->";
    }
    $$payload.out += `<!--]--></div>`;
  } else {
    $$payload.out += "<!--[!-->";
  }
  $$payload.out += `<!--]-->`;
  bind_props($$props, { badgeStatus });
  pop();
}
function Banner($$payload, $$props) {
  push();
  let {
    children,
    header,
    bannerStatus = true,
    position = "sticky",
    dismissable = true,
    color = "gray",
    bannerType = "default",
    class: className,
    innerClass,
    transition = fade,
    params,
    $$slots,
    $$events,
    ...restProps
  } = $$props;
  const { base, insideDiv } = banner({ bannerType, color });
  let bannerClass = base({ position, bannerType, color, className });
  let innerCls = insideDiv({ bannerType, class: innerClass });
  if (bannerStatus) {
    $$payload.out += "<!--[-->";
    $$payload.out += `<div${spread_attributes({
      tabindex: "-1",
      class: bannerClass,
      ...restProps
    })}>`;
    if (header) {
      $$payload.out += "<!--[-->";
      header($$payload);
      $$payload.out += `<!---->`;
    } else {
      $$payload.out += "<!--[!-->";
    }
    $$payload.out += `<!--]--> <div${attr("class", innerCls)}>`;
    children($$payload);
    $$payload.out += `<!----></div> `;
    if (dismissable) {
      $$payload.out += "<!--[-->";
      $$payload.out += `<div class="flex items-center">`;
      CloseButton($$payload, {
        class: "-mx-1.5 -my-1.5",
        color,
        ariaLabel: "Remove badge",
        onclick: () => {
          bannerStatus = false;
        }
      });
      $$payload.out += `<!----></div>`;
    } else {
      $$payload.out += "<!--[!-->";
    }
    $$payload.out += `<!--]--></div>`;
  } else {
    $$payload.out += "<!--[!-->";
  }
  $$payload.out += `<!--]-->`;
  bind_props($$props, { bannerStatus });
  pop();
}
function Button($$payload, $$props) {
  push();
  const group = getContext("group");
  let {
    children,
    pill = false,
    outline = false,
    size = group ? "sm" : "md",
    href,
    type = "button",
    color = group ? outline ? "dark" : "alternative" : "primary",
    shadow = false,
    tag = "button",
    disabled,
    class: className,
    $$slots,
    $$events,
    ...restProps
  } = $$props;
  const base = button({
    color,
    size,
    disabled,
    pill,
    group: !!group,
    outline,
    shadow,
    className
  });
  if (href) {
    $$payload.out += "<!--[-->";
    $$payload.out += `<a${spread_attributes({
      href,
      ...restProps,
      class: base,
      role: "button"
    })}>`;
    children($$payload);
    $$payload.out += `<!----></a>`;
  } else {
    $$payload.out += "<!--[!-->";
    if (tag === "button") {
      $$payload.out += "<!--[-->";
      $$payload.out += `<button${spread_attributes({ type, ...restProps, class: base, disabled })}>`;
      children($$payload);
      $$payload.out += `<!----></button>`;
    } else {
      $$payload.out += "<!--[!-->";
      element(
        $$payload,
        tag,
        () => {
          $$payload.out += `${spread_attributes({ ...restProps, class: base })}`;
        },
        () => {
          children($$payload);
          $$payload.out += `<!---->`;
        }
      );
    }
    $$payload.out += `<!--]-->`;
  }
  $$payload.out += `<!--]-->`;
  pop();
}
function Card($$payload, $$props) {
  push();
  let {
    children,
    href,
    color = "gray",
    horizontal = false,
    shadow = "md",
    reverse = false,
    img,
    padding = "lg",
    size = "sm",
    class: className,
    imgClass,
    contentClass,
    onclick,
    $$slots,
    $$events,
    ...restProps
  } = $$props;
  const { base, image, content } = card({
    size,
    color,
    shadow,
    padding,
    horizontal,
    reverse,
    href: !!href
  });
  const $$tag = href ? "a" : "div";
  element(
    $$payload,
    $$tag,
    () => {
      $$payload.out += `${spread_attributes({
        ...restProps,
        href,
        class: base({ className }),
        role: href ? void 0 : "presentation"
      })}`;
    },
    () => {
      if (img) {
        $$payload.out += "<!--[-->";
        $$payload.out += `<img${attr("class", image({ class: imgClass }))}${attr("src", img.src)}${attr("alt", img.alt)}> <div${attr("class", content({ class: contentClass }))}>`;
        children($$payload);
        $$payload.out += `<!----></div>`;
      } else {
        $$payload.out += "<!--[!-->";
        $$payload.out += `<div${attr("class", content({ class: contentClass }))}>`;
        children($$payload);
        $$payload.out += `<!----></div>`;
      }
      $$payload.out += `<!--]-->`;
    }
  );
  pop();
}
function CloseButton($$payload, $$props) {
  push();
  let {
    color = "gray",
    onclick,
    name = "Close",
    ariaLabel,
    size = "md",
    href,
    class: className,
    $$slots,
    $$events,
    ...restProps
  } = $$props;
  const { base, svg } = closeButtonVariants({ color, size });
  if (href) {
    $$payload.out += "<!--[-->";
    $$payload.out += `<a${spread_attributes({
      href,
      ...restProps,
      class: base({ class: className }),
      "aria-label": ariaLabel ?? name
    })}>`;
    if (name) {
      $$payload.out += "<!--[-->";
      $$payload.out += `<span class="sr-only">${escape_html(name)}</span>`;
    } else {
      $$payload.out += "<!--[!-->";
    }
    $$payload.out += `<!--]--> <svg${attr("class", svg())} fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg></a>`;
  } else {
    $$payload.out += "<!--[!-->";
    $$payload.out += `<button${spread_attributes({
      type: "button",
      ...restProps,
      class: base({ class: className }),
      "aria-label": ariaLabel ?? name
    })}>`;
    if (name) {
      $$payload.out += "<!--[-->";
      $$payload.out += `<span class="sr-only">${escape_html(name)}</span>`;
    } else {
      $$payload.out += "<!--[!-->";
    }
    $$payload.out += `<!--]--> <svg${attr("class", svg())} fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg></button>`;
  }
  $$payload.out += `<!--]-->`;
  pop();
}
function LangTag($$payload, $$props) {
  let {
    code,
    highlighted,
    languageName = "plaintext",
    langtag = false,
    preClass,
    $$slots,
    $$events,
    ...restProps
  } = $$props;
  $$payload.out += `<pre${spread_attributes(
    {
      class: `${stringify(preClass)} ${stringify(langtag ? "langtag" : "")}`,
      "data-language": languageName,
      ...restProps
    },
    { "svelte-1w9vok": true }
  )}><code${attr("class", ["hljs"].filter(Boolean).join(" "))}>`;
  if (highlighted) {
    $$payload.out += "<!--[-->";
    $$payload.out += `${html(highlighted)}`;
  } else {
    $$payload.out += "<!--[!-->";
    $$payload.out += `${escape_html(code)}`;
  }
  $$payload.out += `<!--]--></code></pre>`;
}
function Highlight($$payload, $$props) {
  push();
  let {
    numberLine,
    language,
    code = "",
    langtag = false,
    hideBorder,
    wrapLines,
    startingLineNumber = 1,
    highlightedLines = [],
    $$slots,
    $$events,
    ...restProps
  } = $$props;
  const DIGIT_WIDTH = 12;
  const MIN_DIGITS = 2;
  const HIGHLIGHTED_BACKGROUND = "rgba(254, 241, 96, 0.2)";
  hljs.registerLanguage(language.name, language.register);
  let highlighted = hljs.highlight(code, { language: language.name }).value;
  let lines = highlighted.split("\n");
  let len_digits = lines.length.toString().length;
  let len = len_digits - MIN_DIGITS < 1 ? MIN_DIGITS : len_digits;
  let width = len * DIGIT_WIDTH;
  if (numberLine) {
    $$payload.out += "<!--[-->";
    const each_array = ensure_array_like(lines);
    $$payload.out += `<div${spread_attributes({ ...restProps }, void 0, { "overflow-x": "auto" })}><table><tbody${attr("class", ["hljs"].filter(Boolean).join(" "))}><!--[-->`;
    for (let i = 0, $$length = each_array.length; i < $$length; i++) {
      let line = each_array[i];
      const lineNumber = i + startingLineNumber;
      $$payload.out += `<tr><td${add_styles({
        position: "sticky",
        left: "0",
        "text-align": "right",
        "user-select": "none",
        width: width + "px"
      })}${attr("class", [
        "hljs",
        hideBorder ? "hideBorder" : ""
      ].filter(Boolean).join(" "))}><code${add_styles({
        color: "var(--line-number-color, currentColor)"
      })}>${escape_html(lineNumber)}</code> `;
      if (highlightedLines.includes(i)) {
        $$payload.out += "<!--[-->";
        $$payload.out += `<div${add_styles({
          background: `var(--highlighted-background, ${stringify(HIGHLIGHTED_BACKGROUND)})`
        })}${attr("class", ["line-background"].filter(Boolean).join(" "))}></div>`;
      } else {
        $$payload.out += "<!--[!-->";
      }
      $$payload.out += `<!--]--></td><td><pre${attr("class", [wrapLines ? "wrapLines" : ""].filter(Boolean).join(" "))}><code>${html(line || "\n")}</code></pre> `;
      if (highlightedLines.includes(i)) {
        $$payload.out += "<!--[-->";
        $$payload.out += `<div${add_styles({
          background: `var(--highlighted-background, ${stringify(HIGHLIGHTED_BACKGROUND)})`
        })}${attr("class", ["line-background"].filter(Boolean).join(" "))}></div>`;
      } else {
        $$payload.out += "<!--[!-->";
      }
      $$payload.out += `<!--]--></td></tr>`;
    }
    $$payload.out += `<!--]--></tbody></table></div>`;
  } else {
    $$payload.out += "<!--[!-->";
    LangTag($$payload, spread_props([
      restProps,
      {
        languageName: language.name,
        langtag,
        highlighted,
        code
      }
    ]));
  }
  $$payload.out += `<!--]--> `;
  if (numberLine) {
    $$payload.out += "<!--[-->";
    $$payload.out += `<style>
    pre {
      margin: 0;
    }

    table,
    tr,
    td {
      padding: 0;
      border: 0;
      margin: 0;
      vertical-align: baseline;
    }

    table {
      width: 100%;
      border-collapse: collapse;
      border-spacing: 0;
    }

    tr:first-of-type td {
      padding-top: 1em;
    }

    tr:last-child td {
      padding-bottom: 1em;
    }

    tr td:first-of-type {
      z-index: 2;
    }

    td {
      padding-left: var(--padding-left, 1em);
      padding-right: var(--padding-right, 1em);
    }

    td.hljs:not(.hideBorder):after {
      content: '';
      position: absolute;
      top: 0;
      right: 0;
      width: 1px;
      height: 100%;
      background: var(--border-color, currentColor);
    }

    .wrapLines {
      white-space: pre-wrap;
    }

    td,
    td > code,
    pre {
      position: relative;
    }

    td > code,
    pre {
      z-index: 1;
    }

    .line-background {
      position: absolute;
      z-index: 0;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
    }

    tr:first-of-type td .line-background,
    tr:last-of-type td .line-background {
      height: calc(100% - 1em);
    }

    tr:first-of-type td .line-background {
      top: 1em;
    }

    tr:last-of-type td .line-background {
      bottom: 1em;
    }
  </style>`;
  } else {
    $$payload.out += "<!--[!-->";
  }
  $$payload.out += `<!--]-->`;
  pop();
}
function HighlightSvelte($$payload, $$props) {
  push();
  let {
    code = "",
    langtag = false,
    preClass,
    $$slots,
    $$events,
    ...restProps
  } = $$props;
  hljs.registerLanguage("xml", xml);
  hljs.registerLanguage("javascript", javascript);
  hljs.registerLanguage("css", css);
  let highlighted = hljs.highlightAuto(code).value;
  LangTag($$payload, spread_props([
    { preClass },
    restProps,
    {
      languageName: "svelte",
      langtag,
      highlighted,
      code
    }
  ]));
  pop();
}
const markdown = { name: "markdown", register };
function H2($$payload, $$props) {
  push();
  let { children, class: className = "group relative" } = $$props;
  Anchor($$payload, {
    tag: "h2",
    class: className,
    children: ($$payload2) => {
      children($$payload2);
      $$payload2.out += `<!---->`;
    },
    $$slots: { default: true }
  });
  pop();
}
function HighlightCompo($$payload, $$props) {
  push();
  let {
    code,
    codeLang,
    badgeClass,
    buttonClass,
    contentClass = "overflow-hidden",
    replaceLib = "runes-webkit",
    class: className
  } = $$props;
  if (replaceLib) {
    code = replaceLibImport(code, replaceLib);
  }
  const { base, badge: badge2, button: button2 } = highlightcompo();
  let copiedStatus = false;
  function handleCopyClick() {
    copyToClipboard(code).then(() => {
      copiedStatus = true;
      setTimeout(
        () => {
          copiedStatus = false;
        },
        1e3
      );
    }).catch((err) => {
      console.error("Error in copying:", err);
    });
  }
  $$payload.out += `<div${attr("class", base({ className }))}><div class="relative"><div${attr("class", `${stringify(contentClass)} ${stringify("")} ${stringify(["max-h-72"].filter(Boolean).join(" "))}`)} tabindex="-1">`;
  if (copiedStatus) {
    $$payload.out += "<!--[-->";
    Badge($$payload, {
      class: badge2({ class: badgeClass }),
      color: "green",
      children: ($$payload2) => {
        $$payload2.out += `<!---->Copied to clipboard`;
      },
      $$slots: { default: true }
    });
  } else {
    $$payload.out += "<!--[!-->";
  }
  $$payload.out += `<!--]--> `;
  if (codeLang === "md") {
    $$payload.out += "<!--[-->";
    Highlight($$payload, { language: markdown, code });
  } else {
    $$payload.out += "<!--[!-->";
    if (code) {
      $$payload.out += "<!--[-->";
      HighlightSvelte($$payload, { code });
    } else {
      $$payload.out += "<!--[!-->";
      $$payload.out += `no code is provided`;
    }
    $$payload.out += `<!--]-->`;
  }
  $$payload.out += `<!--]--></div> `;
  Button($$payload, {
    class: button2({ class: buttonClass }),
    onclick: handleCopyClick,
    children: ($$payload2) => {
      $$payload2.out += `<!---->Copy`;
    },
    $$slots: { default: true }
  });
  $$payload.out += `<!----> `;
  {
    $$payload.out += "<!--[!-->";
  }
  $$payload.out += `<!--]--></div></div>`;
  pop();
}
function SupportBanner($$payload, $$props) {
  push();
  let {
    children,
    class: className,
    pClass,
    $$slots,
    $$events,
    ...restProps
  } = $$props;
  const { base, paragraph } = supportBanner();
  Banner($$payload, spread_props([
    restProps,
    {
      id: "default-banner",
      dismissable: false,
      class: base({ className }),
      children: ($$payload2) => {
        $$payload2.out += `<p${attr("class", paragraph({ class: pClass }))}>`;
        children($$payload2);
        $$payload2.out += `<!----></p>`;
      },
      $$slots: { default: true }
    }
  ]));
  pop();
}
function TechInfo($$payload, $$props) {
  push();
  let {
    children,
    pkgName,
    pkgVersion,
    runeswebkitVersion,
    runaticsVersion,
    runesMetaTagsVersion,
    svelteVersion,
    svelteKitVersion,
    svelte5uilib,
    svelteRuneHighlight,
    viteVersion,
    repoUrl,
    title = "Technical information about this website",
    h2Class = "my-8 flex justify-center",
    divClass = "mx-auto grid max-w-5xl grid-cols-1",
    ulClass,
    classUl = "m-4 list-disc p-4 text-left text-lg dark:text-gray-400",
    liClass = "hover:text-red-700 hover:underline",
    aClass = "me-4 hover:underline md:me-6",
    cardsize = "xl"
  } = $$props;
  $$payload.out += `<h2${attr("class", h2Class)}>${escape_html(title)}</h2> <div${attr("class", divClass)}>`;
  Card($$payload, {
    size: cardsize,
    children: ($$payload2) => {
      $$payload2.out += `<ul${attr("class", twMerge(classUl, ulClass))}>`;
      if (pkgName && pkgVersion && repoUrl) {
        $$payload2.out += "<!--[-->";
        $$payload2.out += `<li${attr("class", liClass)}><a${attr("href", repoUrl)}${attr("class", aClass)}>${escape_html(pkgName[0].toUpperCase() + pkgName.slice(1))} : ${escape_html(pkgVersion)}</a></li>`;
      } else {
        $$payload2.out += "<!--[!-->";
      }
      $$payload2.out += `<!--]--> `;
      if (runaticsVersion) {
        $$payload2.out += "<!--[-->";
        $$payload2.out += `<li${attr("class", liClass)}><a href="https://runatics.codewithshin.com/"${attr("class", aClass)}>Runatics: ${escape_html(runaticsVersion)}</a></li>`;
      } else {
        $$payload2.out += "<!--[!-->";
      }
      $$payload2.out += `<!--]--> `;
      if (runesMetaTagsVersion) {
        $$payload2.out += "<!--[-->";
        $$payload2.out += `<li${attr("class", liClass)}><a href="https://runes-meta-tags.codewithshin.com/"${attr("class", aClass)}>Runes Meta Tags: ${escape_html(runesMetaTagsVersion)}</a></li>`;
      } else {
        $$payload2.out += "<!--[!-->";
      }
      $$payload2.out += `<!--]--> `;
      if (svelteRuneHighlight) {
        $$payload2.out += "<!--[-->";
        $$payload2.out += `<li${attr("class", liClass)}><a href="https://svelte-rune-highlight.codewithshin.com/"${attr("class", aClass)}>Svelte Rune Highlight: ${escape_html(svelteRuneHighlight)}</a></li>`;
      } else {
        $$payload2.out += "<!--[!-->";
      }
      $$payload2.out += `<!--]--> `;
      if (runeswebkitVersion) {
        $$payload2.out += "<!--[-->";
        $$payload2.out += `<li${attr("class", liClass)}><a href="https://runes-webkit.codewithshin.com/"${attr("class", aClass)}>Runes Webkit: ${escape_html(runeswebkitVersion)}</a></li>`;
      } else {
        $$payload2.out += "<!--[!-->";
      }
      $$payload2.out += `<!--]--> `;
      if (svelteVersion) {
        $$payload2.out += "<!--[-->";
        $$payload2.out += `<li${attr("class", liClass)}><a href="https://svelte-5-preview.vercel.app/docs/introduction"${attr("class", aClass)}>Svelte: ${escape_html(svelteVersion)}</a></li>`;
      } else {
        $$payload2.out += "<!--[!-->";
      }
      $$payload2.out += `<!--]--> `;
      if (svelteKitVersion) {
        $$payload2.out += "<!--[-->";
        $$payload2.out += `<li${attr("class", liClass)}><a href="https://kit.svelte.dev/docs/introduction"${attr("class", aClass)}>SvelteKit: ${escape_html(svelteKitVersion)}</a></li>`;
      } else {
        $$payload2.out += "<!--[!-->";
      }
      $$payload2.out += `<!--]--> `;
      if (svelte5uilib) {
        $$payload2.out += "<!--[-->";
        $$payload2.out += `<li${attr("class", liClass)}><a href="https://svelte-5-ui-lib.codewithshin.com/"${attr("class", aClass)}>Svelte 5 UI Lib: ${escape_html(svelte5uilib)}</a></li>`;
      } else {
        $$payload2.out += "<!--[!-->";
      }
      $$payload2.out += `<!--]--> `;
      if (viteVersion) {
        $$payload2.out += "<!--[-->";
        $$payload2.out += `<li${attr("class", liClass)}><a href="https://vitejs.dev/"${attr("class", aClass)}>Vite: ${escape_html(viteVersion)}</a></li>`;
      } else {
        $$payload2.out += "<!--[!-->";
      }
      $$payload2.out += `<!--]--> `;
      if (children) {
        $$payload2.out += "<!--[-->";
        children($$payload2);
        $$payload2.out += `<!---->`;
      } else {
        $$payload2.out += "<!--[!-->";
      }
      $$payload2.out += `<!--]--></ul>`;
    },
    $$slots: { default: true }
  });
  $$payload.out += `<!----></div>`;
  pop();
}
const __vite_glob_0_0 = 'ANALYTICS_ID="G-12345ABCDE"\n';
const __vite_glob_0_1 = "pnpm i -D runatics\n";
const __vite_glob_0_2 = "import { ANALYTICS_ID } from '$env/static/private';\n  /** @type {import('./$types').LayoutServerLoad} \\*/\nexport async function load () {\nreturn { ANALYTICS_ID };\n}\n";
const __vite_glob_0_3 = " <script>\n  import { Runatics } from 'runatics';\n  let { children, data } = $props();\n  const analyticsId = data.ANALYTICS_ID\n<\/script>\n\n<Runatics {analyticsId} />\n\n{@render children()}\n";
function _page($$payload, $$props) {
  push();
  const modules = /* @__PURE__ */ Object.assign({
    "./md/env.md": __vite_glob_0_0,
    "./md/installation.md": __vite_glob_0_1,
    "./md/layout-server-ts.md": __vite_glob_0_2,
    "./md/layout-svelte.md": __vite_glob_0_3
  });
  const pkg = {
    pkgName: "runatics",
    pkgVersion: "0.1.3",
    repoUrl: "https://github.com/shinokada/runatics",
    runesMetaTagsVersion: "0.4.2",
    svelteVersion: "5.2.7",
    svelteKitVersion: "2.8.1",
    svelte5uilib: "0.11.0",
    svelteRuneHighlight: "0.5.13",
    viteVersion: "5.4.11"
  };
  SupportBanner($$payload, {
    class: "mt-8",
    children: ($$payload2) => {
      $$payload2.out += `<!---->To Keep It Going, Please Show Your Love.<a href="https://ko-fi.com/Z8Z2CHALG" target="_blank" aria-label="Buy Me a Coffee at ko-fi.com"><img height="40" style="border:0px;height:40px;" src="https://storage.ko-fi.com/cdn/kofi3.png?v=3" alt="Buy Me a Coffee at ko-fi.com"></a>`;
    },
    $$slots: { default: true }
  });
  $$payload.out += `<!----> <h1 class="my-8 flex justify-center">${escape_html(removeHyphensAndCapitalize("runatics"))}</h1> <p>A simple Google analyics component for Svelte Runes project. Please follow the following steps to
  set it up.</p> `;
  H2($$payload, {
    children: ($$payload2) => {
      $$payload2.out += `<!---->Installation`;
    },
    $$slots: { default: true }
  });
  $$payload.out += `<!----> `;
  HighlightCompo($$payload, { code: modules["./md/installation.md"] });
  $$payload.out += `<!----> `;
  H2($$payload, {
    children: ($$payload2) => {
      $$payload2.out += `<!---->.env`;
    },
    $$slots: { default: true }
  });
  $$payload.out += `<!----> <p>Add your ANALYTICS_ID to .env</p> `;
  HighlightCompo($$payload, { code: modules["./md/env.md"] });
  $$payload.out += `<!----> `;
  H2($$payload, {
    children: ($$payload2) => {
      $$payload2.out += `<!---->+layout.server.js`;
    },
    $$slots: { default: true }
  });
  $$payload.out += `<!----> <p>Add the following code to +layout.server.js</p> `;
  HighlightCompo($$payload, { code: modules["./md/layout-server-ts.md"] });
  $$payload.out += `<!----> `;
  H2($$payload, {
    children: ($$payload2) => {
      $$payload2.out += `<!---->+layout.svelte`;
    },
    $$slots: { default: true }
  });
  $$payload.out += `<!----> <p>Add the following code to +layout.svelte</p> `;
  HighlightCompo($$payload, { code: modules["./md/layout-svelte.md"] });
  $$payload.out += `<!----> `;
  TechInfo($$payload, spread_props([pkg]));
  $$payload.out += `<!---->`;
  pop();
}
export {
  _page as default
};
