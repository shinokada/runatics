import { T as head, S as pop, Q as push, V as escape_html, W as attr, X as spread_attributes, R as setContext, Y as bind_props, Z as getContext, _ as spread_props, $ as ensure_array_like, a0 as stringify, a1 as store_get, a2 as unsubscribe_stores } from "../../chunks/index.js";
import { p as page } from "../../chunks/stores.js";
import { d as darkmode, a as dropdown, f as fly, b as dropdownul, c as dropdownli, e as footer, g as footerBrand, h as footerLi, i as footerUl, n as navbar, j as navbrand, k as navLi, l as navUl, t as toUpperSnakeCase, r as removeHyphensAndCapitalize } from "../../chunks/theme.js";
import { twMerge } from "tailwind-merge";
import { w as writable } from "../../chunks/index2.js";
import "../../chunks/client.js";
function deepMerge(target, source) {
  const merged = { ...target };
  for (const key in source) {
    if (key in target) {
      const targetValue = target[key];
      const sourceValue = source[key];
      if (sourceValue && targetValue && typeof sourceValue === "object" && typeof targetValue === "object" && !Array.isArray(sourceValue) && !Array.isArray(targetValue)) {
        merged[key] = deepMerge(targetValue, sourceValue);
      } else if (sourceValue !== void 0) {
        merged[key] = sourceValue;
      }
    }
  }
  return merged;
}
function RunesMetaTags($$payload, $$props) {
  push();
  let {
    title,
    robots,
    description,
    keywords,
    twitter,
    og
  } = $$props;
  head($$payload, ($$payload2) => {
    if (title) {
      $$payload2.out += "<!--[-->";
      $$payload2.title = `<title>${escape_html(title)}</title>`;
    } else {
      $$payload2.out += "<!--[!-->";
    }
    $$payload2.out += `<!--]--> `;
    if (description) {
      $$payload2.out += "<!--[-->";
      $$payload2.out += `<meta name="description"${attr("content", description)}>`;
    } else {
      $$payload2.out += "<!--[!-->";
    }
    $$payload2.out += `<!--]--> `;
    if (keywords) {
      $$payload2.out += "<!--[-->";
      $$payload2.out += `<meta name="keywords"${attr("content", keywords)}>`;
    } else {
      $$payload2.out += "<!--[!-->";
    }
    $$payload2.out += `<!--]--> `;
    if (robots !== false) {
      $$payload2.out += "<!--[-->";
      $$payload2.out += `<meta name="robots" content="index,follow">`;
    } else {
      $$payload2.out += "<!--[!-->";
    }
    $$payload2.out += `<!--]--> `;
    if (twitter) {
      $$payload2.out += "<!--[-->";
      if (twitter?.card) {
        $$payload2.out += "<!--[-->";
        $$payload2.out += `<meta name="twitter:card"${attr("content", twitter.card)}>`;
      } else {
        $$payload2.out += "<!--[!-->";
      }
      $$payload2.out += `<!--]--> `;
      if (twitter?.handle) {
        $$payload2.out += "<!--[-->";
        $$payload2.out += `<meta name="twitter:creator"${attr("content", twitter.handle)}>`;
      } else {
        $$payload2.out += "<!--[!-->";
      }
      $$payload2.out += `<!--]--> `;
      if (twitter?.title) {
        $$payload2.out += "<!--[-->";
        $$payload2.out += `<meta name="twitter:title"${attr("content", twitter.title)}>`;
      } else {
        $$payload2.out += "<!--[!-->";
      }
      $$payload2.out += `<!--]--> `;
      if (twitter?.site) {
        $$payload2.out += "<!--[-->";
        $$payload2.out += `<meta name="twitter:site"${attr("content", twitter.site)}>`;
      } else {
        $$payload2.out += "<!--[!-->";
      }
      $$payload2.out += `<!--]--> `;
      if (twitter?.description) {
        $$payload2.out += "<!--[-->";
        $$payload2.out += `<meta name="twitter:description"${attr("content", twitter.description)}>`;
      } else {
        $$payload2.out += "<!--[!-->";
      }
      $$payload2.out += `<!--]--> `;
      if (twitter?.image) {
        $$payload2.out += "<!--[-->";
        $$payload2.out += `<meta name="twitter:image"${attr("content", twitter.image)}>`;
      } else {
        $$payload2.out += "<!--[!-->";
      }
      $$payload2.out += `<!--]--> `;
      if (twitter?.imageAlt) {
        $$payload2.out += "<!--[-->";
        $$payload2.out += `<meta name="twitter:image:alt"${attr("content", twitter.imageAlt)}>`;
      } else {
        $$payload2.out += "<!--[!-->";
      }
      $$payload2.out += `<!--]-->`;
    } else {
      $$payload2.out += "<!--[!-->";
    }
    $$payload2.out += `<!--]--> `;
    if (og) {
      $$payload2.out += "<!--[-->";
      if (og?.url) {
        $$payload2.out += "<!--[-->";
        $$payload2.out += `<meta property="og:url"${attr("content", og.url)}>`;
      } else {
        $$payload2.out += "<!--[!-->";
      }
      $$payload2.out += `<!--]--> `;
      if (og?.type) {
        $$payload2.out += "<!--[-->";
        $$payload2.out += `<meta property="og:type"${attr("content", og.type)}>`;
      } else {
        $$payload2.out += "<!--[!-->";
      }
      $$payload2.out += `<!--]--> `;
      if (og?.title) {
        $$payload2.out += "<!--[-->";
        $$payload2.out += `<meta property="og:title"${attr("content", og.title)}>`;
      } else {
        $$payload2.out += "<!--[!-->";
      }
      $$payload2.out += `<!--]--> `;
      if (og?.description) {
        $$payload2.out += "<!--[-->";
        $$payload2.out += `<meta property="og:description"${attr("content", og.description)}>`;
      } else {
        $$payload2.out += "<!--[!-->";
      }
      $$payload2.out += `<!--]--> `;
      if (og?.image) {
        $$payload2.out += "<!--[-->";
        $$payload2.out += `<meta property="og:image"${attr("content", og.image)}>`;
      } else {
        $$payload2.out += "<!--[!-->";
      }
      $$payload2.out += `<!--]--> `;
      if (og?.imageAlt) {
        $$payload2.out += "<!--[-->";
        $$payload2.out += `<meta property="og:image:alt"${attr("content", og.imageAlt)}>`;
      } else {
        $$payload2.out += "<!--[!-->";
      }
      $$payload2.out += `<!--]--> `;
      if (og?.imageWidth) {
        $$payload2.out += "<!--[-->";
        $$payload2.out += `<meta property="og:image:width"${attr("content", og.imageWidth)}>`;
      } else {
        $$payload2.out += "<!--[!-->";
      }
      $$payload2.out += `<!--]--> `;
      if (og?.imageHeight) {
        $$payload2.out += "<!--[-->";
        $$payload2.out += `<meta property="og:image:height"${attr("content", og.imageHeight)}>`;
      } else {
        $$payload2.out += "<!--[!-->";
      }
      $$payload2.out += `<!--]--> `;
      if (og?.siteName) {
        $$payload2.out += "<!--[-->";
        $$payload2.out += `<meta property="og:site_name"${attr("content", og.siteName)}>`;
      } else {
        $$payload2.out += "<!--[!-->";
      }
      $$payload2.out += `<!--]-->`;
    } else {
      $$payload2.out += "<!--[!-->";
    }
    $$payload2.out += `<!--]-->`;
  });
  pop();
}
function uiHelpers() {
  let isOpen = false;
  function toggle() {
    isOpen = !isOpen;
  }
  function close() {
    isOpen = false;
  }
  function open() {
    isOpen = true;
  }
  return {
    get isOpen() {
      return isOpen;
    },
    set isOpen(value) {
      isOpen = value;
    },
    toggle,
    close,
    open
  };
}
function Darkmode($$payload, $$props) {
  push();
  let {
    class: className,
    lightIcon,
    darkIcon,
    size = "md",
    ariaLabel = "Dark mode",
    $$slots,
    $$events,
    ...restProps
  } = $$props;
  const btnCls = darkmode({ class: className });
  const sizes = { sm: "w-4 h-4", md: "w-5 h-5", lg: "w-6 h-6" };
  head($$payload, ($$payload2) => {
    $$payload2.out += `<script>
    if ("THEME_PREFERENCE_KEY" in localStorage) {
      localStorage.getItem("THEME_PREFERENCE_KEY") === "dark" ? window.document.documentElement.classList.add("dark") : window.document.documentElement.classList.remove("dark");
    } else {
      if (window.matchMedia("(prefers-color-scheme: dark)").matches) window.document.documentElement.classList.add("dark");
    }
  <\/script><!---->`;
  });
  $$payload.out += `<button${spread_attributes({
    "aria-label": ariaLabel,
    type: "button",
    ...restProps,
    class: btnCls
  })}><span class="hidden dark:block">`;
  if (lightIcon) {
    $$payload.out += "<!--[-->";
    lightIcon($$payload);
    $$payload.out += `<!---->`;
  } else {
    $$payload.out += "<!--[!-->";
    $$payload.out += `<svg role="img" aria-label="Light mode"${attr("class", sizes[size])} fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1
    0 100-2H3a1 1 0 000 2h1z" fill-rule="evenodd" clip-rule="evenodd"></path></svg>`;
  }
  $$payload.out += `<!--]--></span> <span class="block dark:hidden">`;
  if (darkIcon) {
    $$payload.out += "<!--[-->";
    darkIcon($$payload);
    $$payload.out += `<!---->`;
  } else {
    $$payload.out += "<!--[!-->";
    $$payload.out += `<svg role="img" aria-label="Dark mode"${attr("class", sizes[size])} fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"></path></svg>`;
  }
  $$payload.out += `<!--]--></span></button>`;
  pop();
}
function Dropdown($$payload, $$props) {
  push();
  let {
    children,
    dropdownStatus = void 0,
    closeDropdown,
    class: className,
    backdropClass,
    params,
    transition = fly,
    activeUrl = "",
    $$slots,
    $$events,
    ...restProps
  } = $$props;
  const { base, backdrop } = dropdown();
  const activeUrlStore = writable("");
  setContext("activeUrl", activeUrlStore);
  if (dropdownStatus) {
    $$payload.out += "<!--[-->";
    $$payload.out += `<div${spread_attributes({
      ...restProps,
      class: base({ class: className })
    })}>`;
    children($$payload);
    $$payload.out += `<!----></div> <div role="presentation"${attr("class", backdrop({ class: backdropClass }))}></div>`;
  } else {
    $$payload.out += "<!--[!-->";
  }
  $$payload.out += `<!--]-->`;
  bind_props($$props, { dropdownStatus });
  pop();
}
function DropdownUl($$payload, $$props) {
  push();
  let {
    children,
    class: className,
    $$slots,
    $$events,
    ...restProps
  } = $$props;
  const ulCls = dropdownul({ class: className });
  $$payload.out += `<ul${spread_attributes({ ...restProps, class: ulCls })}>`;
  children($$payload);
  $$payload.out += `<!----></ul>`;
  pop();
}
function DropdownLi($$payload, $$props) {
  push();
  let {
    aClass,
    children,
    href,
    activeClass,
    liClass,
    $$slots,
    $$events,
    ...restProps
  } = $$props;
  const activeUrlStore = getContext("activeUrl");
  activeUrlStore.subscribe((value) => {
  });
  const { anchor, activeAnchor } = dropdownli();
  $$payload.out += `<li${attr("class", liClass)}>`;
  if (href) {
    $$payload.out += "<!--[-->";
    $$payload.out += `<a${spread_attributes({
      href,
      ...restProps,
      class: anchor({ class: aClass })
    })}>`;
    children($$payload);
    $$payload.out += `<!----></a>`;
  } else {
    $$payload.out += "<!--[!-->";
    children($$payload);
    $$payload.out += `<!---->`;
  }
  $$payload.out += `<!--]--></li>`;
  pop();
}
function sineIn(t) {
  const v = Math.cos(t * Math.PI * 0.5);
  if (Math.abs(v) < 1e-14) return 1;
  else return 1 - v;
}
function Footer($$payload, $$props) {
  push();
  let {
    children,
    footerType = "default",
    class: className,
    $$slots,
    $$events,
    ...restProps
  } = $$props;
  const footerCls = footer({ footerType, className });
  $$payload.out += `<footer${spread_attributes({ ...restProps, class: footerCls })}>`;
  children($$payload);
  $$payload.out += `<!----></footer>`;
  pop();
}
function FooterBrand($$payload, $$props) {
  push();
  let {
    children,
    aClass,
    spanClass,
    imgClass,
    href,
    src,
    alt,
    name,
    $$slots,
    $$events,
    ...restProps
  } = $$props;
  const { base, span, img } = footerBrand();
  if (href) {
    $$payload.out += "<!--[-->";
    $$payload.out += `<a${spread_attributes({
      ...restProps,
      href,
      class: base({ class: aClass })
    })}>`;
    if (src) {
      $$payload.out += "<!--[-->";
      $$payload.out += `<img${attr("src", src)}${attr("class", img({ class: imgClass }))}${attr("alt", alt)}>`;
    } else {
      $$payload.out += "<!--[!-->";
    }
    $$payload.out += `<!--]--> `;
    if (name) {
      $$payload.out += "<!--[-->";
      $$payload.out += `<span${attr("class", span({ class: spanClass }))}>${escape_html(name)}</span>`;
    } else {
      $$payload.out += "<!--[!-->";
    }
    $$payload.out += `<!--]--> `;
    if (children) {
      $$payload.out += "<!--[-->";
      children($$payload);
      $$payload.out += `<!---->`;
    } else {
      $$payload.out += "<!--[!-->";
    }
    $$payload.out += `<!--]--></a>`;
  } else {
    $$payload.out += "<!--[!-->";
    $$payload.out += `<img${attr("src", src)}${attr("class", img({ class: imgClass }))}${attr("alt", alt)}>`;
  }
  $$payload.out += `<!--]-->`;
  pop();
}
function FooterLi($$payload, $$props) {
  push();
  let {
    children,
    liClass,
    aClass,
    href,
    $$slots,
    $$events,
    ...restProps
  } = $$props;
  const { base, link } = footerLi();
  $$payload.out += `<li${attr("class", base({ class: liClass }))}><a${spread_attributes({
    ...restProps,
    href,
    class: link({ class: aClass })
  })}>`;
  children($$payload);
  $$payload.out += `<!----></a></li>`;
  pop();
}
function FooterUl($$payload, $$props) {
  push();
  let {
    class: ulClass,
    children,
    $$slots,
    $$events,
    ...restProps
  } = $$props;
  const base = footerUl({ class: ulClass });
  $$payload.out += `<ul${spread_attributes({ ...restProps, class: base })}>`;
  children($$payload);
  $$payload.out += `<!----></ul>`;
  pop();
}
function Navbar($$payload, $$props) {
  push();
  let {
    children,
    navSlotBlock,
    navSlotHiddenTop,
    navSlotHiddenBottom,
    toggleNav,
    closeNav = () => {
    },
    navStatus,
    fluid,
    brand,
    hamburgerMenu = true,
    breakPoint = "md",
    navClass,
    divClass,
    btnClass,
    div2Class,
    activeClass,
    nonActiveClass,
    $$slots,
    $$events,
    ...restProps
  } = $$props;
  const {
    base,
    container,
    toggleButton,
    menuContainer,
    activeLink,
    inactiveLink
  } = navbar({ fluid, breakPoint, navStatus });
  setContext("navbarContext", {
    navStatus,
    breakPoint,
    get activeClass() {
      return activeLink({ class: activeClass });
    },
    get nonActiveClass() {
      return inactiveLink({ class: nonActiveClass });
    },
    closeNav
  });
  function getMenuProps(isOpen) {
    return isOpen ? { role: "menu", tabindex: 0 } : { role: "none", tabindex: -1 };
  }
  $$payload.out += `<nav${spread_attributes({
    ...restProps,
    class: base({ class: navClass })
  })}><div${attr("class", container({ class: divClass }))}>`;
  if (brand) {
    $$payload.out += "<!--[-->";
    brand($$payload);
    $$payload.out += `<!---->`;
  } else {
    $$payload.out += "<!--[!-->";
  }
  $$payload.out += `<!--]--> `;
  if (hamburgerMenu) {
    $$payload.out += "<!--[-->";
    $$payload.out += `<button type="button"${attr("class", toggleButton({ class: btnClass }))}><span class="sr-only">Open main menu</span> <svg class="h-5 w-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15"></path></svg></button>`;
  } else {
    $$payload.out += "<!--[!-->";
  }
  $$payload.out += `<!--]--> `;
  if (navSlotBlock) {
    $$payload.out += "<!--[-->";
    navSlotBlock($$payload);
    $$payload.out += `<!---->`;
  } else {
    $$payload.out += "<!--[!-->";
  }
  $$payload.out += `<!--]--> `;
  if (navStatus) {
    $$payload.out += "<!--[-->";
    if (navSlotHiddenTop) {
      $$payload.out += "<!--[-->";
      navSlotHiddenTop($$payload);
      $$payload.out += `<!---->`;
    } else {
      $$payload.out += "<!--[!-->";
    }
    $$payload.out += `<!--]--> <div${spread_attributes({
      class: menuContainer({ class: div2Class }),
      ...getMenuProps(true)
    })}>`;
    children($$payload);
    $$payload.out += `<!----></div> `;
    if (navSlotHiddenBottom) {
      $$payload.out += "<!--[-->";
      navSlotHiddenBottom($$payload);
      $$payload.out += `<!---->`;
    } else {
      $$payload.out += "<!--[!-->";
    }
    $$payload.out += `<!--]-->`;
  } else {
    $$payload.out += "<!--[!-->";
    $$payload.out += `<div${spread_attributes({
      class: menuContainer({ class: div2Class }),
      ...getMenuProps(false)
    })}>`;
    children($$payload);
    $$payload.out += `<!----></div>`;
  }
  $$payload.out += `<!--]--></div></nav>`;
  pop();
}
function NavBrand($$payload, $$props) {
  push();
  let {
    children,
    siteName,
    closeNav,
    aClass,
    spanClass,
    $$slots,
    $$events,
    ...restProps
  } = $$props;
  const context = getContext("navbarContext");
  closeNav = context.closeNav ?? closeNav;
  const { base, span } = navbrand();
  $$payload.out += `<a${spread_attributes({
    href: "/",
    ...restProps,
    class: base({ class: aClass })
  })}>`;
  if (children) {
    $$payload.out += "<!--[-->";
    children($$payload);
    $$payload.out += `<!---->`;
  } else {
    $$payload.out += "<!--[!-->";
  }
  $$payload.out += `<!--]--> `;
  if (siteName) {
    $$payload.out += "<!--[-->";
    $$payload.out += `<span${attr("class", span({ class: spanClass }))}>${escape_html(siteName)}</span>`;
  } else {
    $$payload.out += "<!--[!-->";
  }
  $$payload.out += `<!--]--></a>`;
  pop();
}
function NavLi($$payload, $$props) {
  push();
  let {
    closeNav,
    href,
    children,
    aClass,
    class: className,
    $$slots,
    $$events,
    ...restProps
  } = $$props;
  let breakPoint;
  const context = getContext("navbarContext");
  breakPoint = context.breakPoint ?? "md";
  closeNav = context.closeNav ?? closeNav;
  const activeUrlStore = getContext("activeUrl");
  let navUrl = "";
  activeUrlStore.subscribe((value) => {
    navUrl = value;
  });
  let isActive = navUrl ? href === navUrl : false;
  const { base, link } = navLi({ active: isActive, breakPoint });
  $$payload.out += `<li${attr("class", base({ class: className }))}><a${spread_attributes({
    href,
    ...restProps,
    "aria-current": isActive,
    class: link({ class: aClass })
  })}>`;
  children($$payload);
  $$payload.out += `<!----></a></li>`;
  pop();
}
function NavUl($$payload, $$props) {
  push();
  let {
    children,
    activeUrl = "",
    class: className,
    $$slots,
    $$events,
    ...restProps
  } = $$props;
  let breakPoint;
  const context = getContext("navbarContext");
  breakPoint = context.breakPoint ?? "md";
  const base = navUl({ breakPoint, className });
  const activeUrlStore = writable("");
  setContext("activeUrl", activeUrlStore);
  $$payload.out += `<ul${spread_attributes({ ...restProps, class: base })}>`;
  children($$payload);
  $$payload.out += `<!----></ul>`;
  pop();
}
function Footer_1($$payload, $$props) {
  push();
  let {
    brand,
    classDiv = "mx-auto max-w-4xl sm:flex sm:items-center sm:justify-between lg:ml-64",
    divClass,
    classFooter = "shadow-none rounded-none border-t border-gray-100 dark:border-gray-600 dark_bg_theme",
    footerClass,
    classUl = "flex flex-wrap items-center mt-3 text-sm text-gray-500 dark:text-gray-400 sm:mt-0",
    ulClass,
    lis,
    footerType = "logo",
    $$slots,
    $$events,
    ...restProps
  } = $$props;
  function li($$payload2, lis2) {
    const each_array = ensure_array_like(lis2);
    $$payload2.out += `<!--[-->`;
    for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
      let { name, href } = each_array[$$index];
      FooterLi($$payload2, {
        href,
        children: ($$payload3) => {
          $$payload3.out += `<!---->${escape_html(name)}`;
        },
        $$slots: { default: true }
      });
    }
    $$payload2.out += `<!--]-->`;
  }
  Footer($$payload, spread_props([
    {
      class: twMerge(classFooter, footerClass),
      footerType
    },
    restProps,
    {
      children: ($$payload2) => {
        $$payload2.out += `<div${attr("class", twMerge(classDiv, divClass))}>`;
        if (brand) {
          $$payload2.out += "<!--[-->";
          FooterBrand($$payload2, { href: brand?.href, name: brand?.name });
        } else {
          $$payload2.out += "<!--[!-->";
        }
        $$payload2.out += `<!--]--> `;
        if (lis) {
          $$payload2.out += "<!--[-->";
          FooterUl($$payload2, {
            class: twMerge(classUl, ulClass),
            children: ($$payload3) => {
              li($$payload3, lis);
            },
            $$slots: { default: true }
          });
        } else {
          $$payload2.out += "<!--[!-->";
        }
        $$payload2.out += `<!--]--></div>`;
      },
      $$slots: { default: true }
    }
  ]));
  pop();
}
function Bluesky($$payload, $$props) {
  push();
  const ctx = getContext("iconCtx") ?? {};
  let {
    size = ctx.size || "24",
    role = ctx.role || "img",
    ariaLabel = "bluesky",
    class: classname,
    title,
    desc,
    $$slots,
    $$events,
    ...restProps
  } = $$props;
  let ariaDescribedby = `${title?.id || ""} ${desc?.id || ""}`;
  const hasDescription = !!(title?.id || desc?.id);
  $$payload.out += `<svg${spread_attributes(
    {
      xmlns: "http://www.w3.org/2000/svg",
      width: size,
      height: size,
      class: classname,
      ...restProps,
      "aria-label": ariaLabel,
      role,
      viewBox: "0 0 512 512",
      "aria-describedby": hasDescription ? ariaDescribedby : void 0
    },
    void 0,
    void 0,
    3
  )}>`;
  if (title?.id && title.title) {
    $$payload.out += "<!--[-->";
    $$payload.out += `<title${attr("id", title.id)}>${escape_html(title.title)}</title>`;
  } else {
    $$payload.out += "<!--[!-->";
  }
  $$payload.out += `<!--]-->`;
  if (desc?.id && desc.desc) {
    $$payload.out += "<!--[-->";
    $$payload.out += `<desc${attr("id", desc.id)}>${escape_html(desc.desc)}</desc>`;
  } else {
    $$payload.out += "<!--[!-->";
  }
  $$payload.out += `<!--]--><path d="m0 0H512V512H0" fill="none"></path><path d="M159 126c-28-22-74-38-74 14 0 11 6 88 9 101 13 43 57 54 97 48-69 11-87 50-49 89 72 75 104-18 112-42l2-5 2 5c8 24 40 117 112 42 38-39 20-78-49-89 40 6 84-5 97-48 3-13 9-90 9-101 0-52-46-36-74-14-39 29-82 89-97 121-15-32-58-92-97-121Z" fill="#1185fe"></path></svg>`;
  pop();
}
function DotsHorizontalOutline($$payload, $$props) {
  push();
  const ctx = getContext("iconCtx") ?? {};
  const sizes = {
    xs: "w-3 h-3",
    sm: "w-4 h-4",
    md: "w-5 h-5",
    lg: "w-6 h-6",
    xl: "w-8 h-8"
  };
  let {
    size = ctx.size || "md",
    role,
    color = ctx.color || "currentColor",
    title,
    desc,
    class: classname,
    ariaLabel = "dots horizontal outline",
    $$slots,
    $$events,
    ...restProps
  } = $$props;
  let ariaDescribedby = `${title?.id || ""} ${desc?.id || ""}`;
  const hasDescription = !!(title?.id || desc?.id);
  $$payload.out += `<svg${spread_attributes(
    {
      xmlns: "http://www.w3.org/2000/svg",
      fill: "none",
      color,
      ...restProps,
      class: twMerge("shrink-0", sizes[size], classname),
      role,
      "aria-label": ariaLabel,
      "aria-describedby": hasDescription ? ariaDescribedby : void 0,
      viewBox: "0 0 24 24"
    },
    void 0,
    void 0,
    3
  )}>`;
  if (title?.id && title.title) {
    $$payload.out += "<!--[-->";
    $$payload.out += `<title${attr("id", title.id)}>${escape_html(title.title)}</title>`;
  } else {
    $$payload.out += "<!--[!-->";
  }
  $$payload.out += `<!--]-->`;
  if (desc?.id && desc.desc) {
    $$payload.out += "<!--[-->";
    $$payload.out += `<desc${attr("id", desc.id)}>${escape_html(desc.desc)}</desc>`;
  } else {
    $$payload.out += "<!--[!-->";
  }
  $$payload.out += `<!--]--><path stroke="currentColor" stroke-linecap="round" stroke-width="3" d="M6 12h.01m6 0h.01m5.99 0h.01"></path></svg>`;
  pop();
}
function GithubSolid($$payload, $$props) {
  push();
  const ctx = getContext("iconCtx") ?? {};
  const sizes = {
    xs: "w-3 h-3",
    sm: "w-4 h-4",
    md: "w-5 h-5",
    lg: "w-6 h-6",
    xl: "w-8 h-8"
  };
  let {
    size = ctx.size || "md",
    role,
    color = ctx.color || "currentColor",
    title,
    desc,
    class: classname,
    ariaLabel = "github solid",
    $$slots,
    $$events,
    ...restProps
  } = $$props;
  let ariaDescribedby = `${title?.id || ""} ${desc?.id || ""}`;
  const hasDescription = !!(title?.id || desc?.id);
  $$payload.out += `<svg${spread_attributes(
    {
      xmlns: "http://www.w3.org/2000/svg",
      fill: color,
      ...restProps,
      class: twMerge("shrink-0", sizes[size], classname),
      role,
      "aria-label": ariaLabel,
      "aria-describedby": hasDescription ? ariaDescribedby : void 0,
      viewBox: "0 0 24 24"
    },
    void 0,
    void 0,
    3
  )}>`;
  if (title?.id && title.title) {
    $$payload.out += "<!--[-->";
    $$payload.out += `<title${attr("id", title.id)}>${escape_html(title.title)}</title>`;
  } else {
    $$payload.out += "<!--[!-->";
  }
  $$payload.out += `<!--]-->`;
  if (desc?.id && desc.desc) {
    $$payload.out += "<!--[-->";
    $$payload.out += `<desc${attr("id", desc.id)}>${escape_html(desc.desc)}</desc>`;
  } else {
    $$payload.out += "<!--[!-->";
  }
  $$payload.out += `<!--]--><path fill-rule="evenodd" d="M12.006 2a9.847 9.847 0 0 0-6.484 2.44 10.32 10.32 0 0 0-3.393 6.17 10.48 10.48 0 0 0 1.317 6.955 10.045 10.045 0 0 0 5.4 4.418c.504.095.683-.223.683-.494 0-.245-.01-1.052-.014-1.908-2.78.62-3.366-1.21-3.366-1.21a2.711 2.711 0 0 0-1.11-1.5c-.907-.637.07-.621.07-.621.317.044.62.163.885.346.266.183.487.426.647.71.135.253.318.476.538.655a2.079 2.079 0 0 0 2.37.196c.045-.52.27-1.006.635-1.37-2.219-.259-4.554-1.138-4.554-5.07a4.022 4.022 0 0 1 1.031-2.75 3.77 3.77 0 0 1 .096-2.713s.839-.275 2.749 1.05a9.26 9.26 0 0 1 5.004 0c1.906-1.325 2.74-1.05 2.74-1.05.37.858.406 1.828.101 2.713a4.017 4.017 0 0 1 1.029 2.75c0 3.939-2.339 4.805-4.564 5.058a2.471 2.471 0 0 1 .679 1.897c0 1.372-.012 2.477-.012 2.814 0 .272.18.592.687.492a10.05 10.05 0 0 0 5.388-4.421 10.473 10.473 0 0 0 1.313-6.948 10.32 10.32 0 0 0-3.39-6.165A9.847 9.847 0 0 0 12.007 2Z" clip-rule="evenodd"></path></svg>`;
  pop();
}
function XSolid($$payload, $$props) {
  push();
  const ctx = getContext("iconCtx") ?? {};
  const sizes = {
    xs: "w-3 h-3",
    sm: "w-4 h-4",
    md: "w-5 h-5",
    lg: "w-6 h-6",
    xl: "w-8 h-8"
  };
  let {
    size = ctx.size || "md",
    role,
    color = ctx.color || "currentColor",
    title,
    desc,
    class: classname,
    ariaLabel = "X solid",
    $$slots,
    $$events,
    ...restProps
  } = $$props;
  let ariaDescribedby = `${title?.id || ""} ${desc?.id || ""}`;
  const hasDescription = !!(title?.id || desc?.id);
  $$payload.out += `<svg${spread_attributes(
    {
      xmlns: "http://www.w3.org/2000/svg",
      fill: color,
      ...restProps,
      class: twMerge("shrink-0", sizes[size], classname),
      role,
      "aria-label": ariaLabel,
      "aria-describedby": hasDescription ? ariaDescribedby : void 0,
      viewBox: "0 0 24 24"
    },
    void 0,
    void 0,
    3
  )}>`;
  if (title?.id && title.title) {
    $$payload.out += "<!--[-->";
    $$payload.out += `<title${attr("id", title.id)}>${escape_html(title.title)}</title>`;
  } else {
    $$payload.out += "<!--[!-->";
  }
  $$payload.out += `<!--]-->`;
  if (desc?.id && desc.desc) {
    $$payload.out += "<!--[-->";
    $$payload.out += `<desc${attr("id", desc.id)}>${escape_html(desc.desc)}</desc>`;
  } else {
    $$payload.out += "<!--[!-->";
  }
  $$payload.out += `<!--]--><path d="M13.795 10.533 20.68 2h-3.073l-5.255 6.517L7.69 2H1l7.806 10.91L1.47 22h3.074l5.705-7.07L15.31 22H22l-8.205-11.467Zm-2.38 2.95L9.97 11.464 4.36 3.627h2.31l4.528 6.317 1.443 2.02 6.018 8.409h-2.31l-4.934-6.89Z"></path></svg>`;
  pop();
}
function Runatics($$payload, $$props) {
  push();
  let { analyticsId } = $$props;
  head($$payload, ($$payload2) => {
    $$payload2.out += `<script async${attr("src", `https://www.googletagmanager.com/gtag/js?id=${stringify(analyticsId)}`)}><\/script><!---->`;
  });
  if (!analyticsId) {
    $$payload.out += "<!--[-->";
    $$payload.out += `<h2>You need to provide your Google Analytics ID, "ANALYTICS_ID", in .env file.</h2> <p>Please read the <a href="https://runatics.codewithshin.com/">docs</a> how to set it up.</p>`;
  } else {
    $$payload.out += "<!--[!-->";
  }
  $$payload.out += `<!--]-->`;
  pop();
}
function DynamicCodeBlockStyle($$payload, $$props) {
  push();
  const stylesImport = /* @__PURE__ */ Object.assign({ "./highlight/styles/3024.css": () => Promise.resolve({           }), "./highlight/styles/a11y-dark.css": () => Promise.resolve({                }), "./highlight/styles/a11y-light.css": () => Promise.resolve({                 }), "./highlight/styles/agate.css": () => Promise.resolve({            }), "./highlight/styles/an-old-hope.css": () => Promise.resolve({                  }), "./highlight/styles/androidstudio.css": () => Promise.resolve({                    }), "./highlight/styles/apathy.css": () => Promise.resolve({             }), "./highlight/styles/apprentice.css": () => Promise.resolve({                 }), "./highlight/styles/arduino-light.css": () => Promise.resolve({                    }), "./highlight/styles/arta.css": () => Promise.resolve({           }), "./highlight/styles/ascetic.css": () => Promise.resolve({              }), "./highlight/styles/ashes.css": () => Promise.resolve({            }), "./highlight/styles/atelier-cave-light.css": () => Promise.resolve({                         }), "./highlight/styles/atelier-cave.css": () => Promise.resolve({                   }), "./highlight/styles/atelier-dune-light.css": () => Promise.resolve({                         }), "./highlight/styles/atelier-dune.css": () => Promise.resolve({                   }), "./highlight/styles/atelier-estuary-light.css": () => Promise.resolve({                            }), "./highlight/styles/atelier-estuary.css": () => Promise.resolve({                      }), "./highlight/styles/atelier-forest-light.css": () => Promise.resolve({                           }), "./highlight/styles/atelier-forest.css": () => Promise.resolve({                     }), "./highlight/styles/atelier-heath-light.css": () => Promise.resolve({                          }), "./highlight/styles/atelier-heath.css": () => Promise.resolve({                    }), "./highlight/styles/atelier-lakeside-light.css": () => Promise.resolve({                             }), "./highlight/styles/atelier-lakeside.css": () => Promise.resolve({                       }), "./highlight/styles/atelier-plateau-light.css": () => Promise.resolve({                            }), "./highlight/styles/atelier-plateau.css": () => Promise.resolve({                      }), "./highlight/styles/atelier-savanna-light.css": () => Promise.resolve({                            }), "./highlight/styles/atelier-savanna.css": () => Promise.resolve({                      }), "./highlight/styles/atelier-seaside-light.css": () => Promise.resolve({                            }), "./highlight/styles/atelier-seaside.css": () => Promise.resolve({                      }), "./highlight/styles/atelier-sulphurpool-light.css": () => Promise.resolve({                                }), "./highlight/styles/atelier-sulphurpool.css": () => Promise.resolve({                          }), "./highlight/styles/atlas.css": () => Promise.resolve({            }), "./highlight/styles/atom-one-dark-reasonable.css": () => Promise.resolve({                               }), "./highlight/styles/atom-one-dark.css": () => Promise.resolve({                    }), "./highlight/styles/atom-one-light.css": () => Promise.resolve({                     }), "./highlight/styles/base16-github.css": () => Promise.resolve({                    }), "./highlight/styles/base16-ir-black.css": () => Promise.resolve({                      }), "./highlight/styles/base16-monokai.css": () => Promise.resolve({                     }), "./highlight/styles/base16-nord.css": () => Promise.resolve({                  }), "./highlight/styles/bespin.css": () => Promise.resolve({             }), "./highlight/styles/black-metal-bathory.css": () => Promise.resolve({                          }), "./highlight/styles/black-metal-burzum.css": () => Promise.resolve({                         }), "./highlight/styles/black-metal-dark-funeral.css": () => Promise.resolve({                               }), "./highlight/styles/black-metal-gorgoroth.css": () => Promise.resolve({                            }), "./highlight/styles/black-metal-immortal.css": () => Promise.resolve({                           }), "./highlight/styles/black-metal-khold.css": () => Promise.resolve({                        }), "./highlight/styles/black-metal-marduk.css": () => Promise.resolve({                         }), "./highlight/styles/black-metal-mayhem.css": () => Promise.resolve({                         }), "./highlight/styles/black-metal-nile.css": () => Promise.resolve({                       }), "./highlight/styles/black-metal-venom.css": () => Promise.resolve({                        }), "./highlight/styles/black-metal.css": () => Promise.resolve({                  }), "./highlight/styles/brewer.css": () => Promise.resolve({             }), "./highlight/styles/bright.css": () => Promise.resolve({             }), "./highlight/styles/brogrammer.css": () => Promise.resolve({                 }), "./highlight/styles/brown-paper.css": () => Promise.resolve({                  }), "./highlight/styles/brush-trees-dark.css": () => Promise.resolve({                       }), "./highlight/styles/brush-trees.css": () => Promise.resolve({                  }), "./highlight/styles/chalk.css": () => Promise.resolve({            }), "./highlight/styles/circus.css": () => Promise.resolve({             }), "./highlight/styles/classic-dark.css": () => Promise.resolve({                   }), "./highlight/styles/classic-light.css": () => Promise.resolve({                    }), "./highlight/styles/codepen-embed.css": () => Promise.resolve({                    }), "./highlight/styles/codeschool.css": () => Promise.resolve({                 }), "./highlight/styles/color-brewer.css": () => Promise.resolve({                   }), "./highlight/styles/colors.css": () => Promise.resolve({             }), "./highlight/styles/cupcake.css": () => Promise.resolve({              }), "./highlight/styles/cupertino.css": () => Promise.resolve({                }), "./highlight/styles/danqing.css": () => Promise.resolve({              }), "./highlight/styles/darcula.css": () => Promise.resolve({              }), "./highlight/styles/dark-violet.css": () => Promise.resolve({                  }), "./highlight/styles/dark.css": () => Promise.resolve({           }), "./highlight/styles/darkmoss.css": () => Promise.resolve({               }), "./highlight/styles/darktooth.css": () => Promise.resolve({                }), "./highlight/styles/decaf.css": () => Promise.resolve({            }), "./highlight/styles/default-dark.css": () => Promise.resolve({                   }), "./highlight/styles/default-light.css": () => Promise.resolve({                    }), "./highlight/styles/default.css": () => Promise.resolve({              }), "./highlight/styles/devibeans.css": () => Promise.resolve({                }), "./highlight/styles/dirtysea.css": () => Promise.resolve({               }), "./highlight/styles/docco.css": () => Promise.resolve({            }), "./highlight/styles/dracula.css": () => Promise.resolve({              }), "./highlight/styles/edge-dark.css": () => Promise.resolve({                }), "./highlight/styles/edge-light.css": () => Promise.resolve({                 }), "./highlight/styles/eighties.css": () => Promise.resolve({               }), "./highlight/styles/embers.css": () => Promise.resolve({             }), "./highlight/styles/equilibrium-dark.css": () => Promise.resolve({                       }), "./highlight/styles/equilibrium-gray-dark.css": () => Promise.resolve({                            }), "./highlight/styles/equilibrium-gray-light.css": () => Promise.resolve({                             }), "./highlight/styles/equilibrium-light.css": () => Promise.resolve({                        }), "./highlight/styles/espresso.css": () => Promise.resolve({               }), "./highlight/styles/eva-dim.css": () => Promise.resolve({              }), "./highlight/styles/eva.css": () => Promise.resolve({          }), "./highlight/styles/far.css": () => Promise.resolve({          }), "./highlight/styles/felipec.css": () => Promise.resolve({              }), "./highlight/styles/flat.css": () => Promise.resolve({           }), "./highlight/styles/foundation.css": () => Promise.resolve({                 }), "./highlight/styles/framer.css": () => Promise.resolve({             }), "./highlight/styles/fruit-soda.css": () => Promise.resolve({                 }), "./highlight/styles/gigavolt.css": () => Promise.resolve({               }), "./highlight/styles/github-dark-dimmed.css": () => Promise.resolve({                         }), "./highlight/styles/github-dark.css": () => Promise.resolve({                  }), "./highlight/styles/github.css": () => Promise.resolve({             }), "./highlight/styles/gml.css": () => Promise.resolve({          }), "./highlight/styles/google-dark.css": () => Promise.resolve({                  }), "./highlight/styles/google-light.css": () => Promise.resolve({                   }), "./highlight/styles/googlecode.css": () => Promise.resolve({                 }), "./highlight/styles/gradient-dark.css": () => Promise.resolve({                    }), "./highlight/styles/gradient-light.css": () => Promise.resolve({                     }), "./highlight/styles/grayscale-dark.css": () => Promise.resolve({                     }), "./highlight/styles/grayscale-light.css": () => Promise.resolve({                      }), "./highlight/styles/grayscale.css": () => Promise.resolve({                }), "./highlight/styles/green-screen.css": () => Promise.resolve({                   }), "./highlight/styles/gruvbox-dark-hard.css": () => Promise.resolve({                        }), "./highlight/styles/gruvbox-dark-medium.css": () => Promise.resolve({                          }), "./highlight/styles/gruvbox-dark-pale.css": () => Promise.resolve({                        }), "./highlight/styles/gruvbox-dark-soft.css": () => Promise.resolve({                        }), "./highlight/styles/gruvbox-light-hard.css": () => Promise.resolve({                         }), "./highlight/styles/gruvbox-light-medium.css": () => Promise.resolve({                           }), "./highlight/styles/gruvbox-light-soft.css": () => Promise.resolve({                         }), "./highlight/styles/hardcore.css": () => Promise.resolve({               }), "./highlight/styles/harmonic16-dark.css": () => Promise.resolve({                      }), "./highlight/styles/harmonic16-light.css": () => Promise.resolve({                       }), "./highlight/styles/heetch-dark.css": () => Promise.resolve({                  }), "./highlight/styles/heetch-light.css": () => Promise.resolve({                   }), "./highlight/styles/helios.css": () => Promise.resolve({             }), "./highlight/styles/hopscotch.css": () => Promise.resolve({                }), "./highlight/styles/horizon-dark.css": () => Promise.resolve({                   }), "./highlight/styles/horizon-light.css": () => Promise.resolve({                    }), "./highlight/styles/humanoid-dark.css": () => Promise.resolve({                    }), "./highlight/styles/humanoid-light.css": () => Promise.resolve({                     }), "./highlight/styles/hybrid.css": () => Promise.resolve({             }), "./highlight/styles/ia-dark.css": () => Promise.resolve({              }), "./highlight/styles/ia-light.css": () => Promise.resolve({               }), "./highlight/styles/icy-dark.css": () => Promise.resolve({               }), "./highlight/styles/idea.css": () => Promise.resolve({           }), "./highlight/styles/intellij-light.css": () => Promise.resolve({                     }), "./highlight/styles/ir-black.css": () => Promise.resolve({               }), "./highlight/styles/isbl-editor-dark.css": () => Promise.resolve({                       }), "./highlight/styles/isbl-editor-light.css": () => Promise.resolve({                        }), "./highlight/styles/isotope.css": () => Promise.resolve({              }), "./highlight/styles/kimber.css": () => Promise.resolve({             }), "./highlight/styles/kimbie-dark.css": () => Promise.resolve({                  }), "./highlight/styles/kimbie-light.css": () => Promise.resolve({                   }), "./highlight/styles/lightfair.css": () => Promise.resolve({                }), "./highlight/styles/lioshi.css": () => Promise.resolve({             }), "./highlight/styles/london-tube.css": () => Promise.resolve({                  }), "./highlight/styles/macintosh.css": () => Promise.resolve({                }), "./highlight/styles/magula.css": () => Promise.resolve({             }), "./highlight/styles/marrakesh.css": () => Promise.resolve({                }), "./highlight/styles/materia.css": () => Promise.resolve({              }), "./highlight/styles/material-darker.css": () => Promise.resolve({                      }), "./highlight/styles/material-lighter.css": () => Promise.resolve({                       }), "./highlight/styles/material-palenight.css": () => Promise.resolve({                         }), "./highlight/styles/material-vivid.css": () => Promise.resolve({                     }), "./highlight/styles/material.css": () => Promise.resolve({               }), "./highlight/styles/mellow-purple.css": () => Promise.resolve({                    }), "./highlight/styles/mexico-light.css": () => Promise.resolve({                   }), "./highlight/styles/mocha.css": () => Promise.resolve({            }), "./highlight/styles/mono-blue.css": () => Promise.resolve({                }), "./highlight/styles/monokai-sublime.css": () => Promise.resolve({                      }), "./highlight/styles/monokai.css": () => Promise.resolve({              }), "./highlight/styles/nebula.css": () => Promise.resolve({             }), "./highlight/styles/night-owl.css": () => Promise.resolve({                }), "./highlight/styles/nnfx-dark.css": () => Promise.resolve({                }), "./highlight/styles/nnfx-light.css": () => Promise.resolve({                 }), "./highlight/styles/nord.css": () => Promise.resolve({           }), "./highlight/styles/nova.css": () => Promise.resolve({           }), "./highlight/styles/obsidian.css": () => Promise.resolve({               }), "./highlight/styles/ocean.css": () => Promise.resolve({            }), "./highlight/styles/oceanicnext.css": () => Promise.resolve({                  }), "./highlight/styles/one-light.css": () => Promise.resolve({                }), "./highlight/styles/onedark.css": () => Promise.resolve({              }), "./highlight/styles/outrun-dark.css": () => Promise.resolve({                  }), "./highlight/styles/panda-syntax-dark.css": () => Promise.resolve({                        }), "./highlight/styles/panda-syntax-light.css": () => Promise.resolve({                         }), "./highlight/styles/papercolor-dark.css": () => Promise.resolve({                      }), "./highlight/styles/papercolor-light.css": () => Promise.resolve({                       }), "./highlight/styles/paraiso-dark.css": () => Promise.resolve({                   }), "./highlight/styles/paraiso-light.css": () => Promise.resolve({                    }), "./highlight/styles/paraiso.css": () => Promise.resolve({              }), "./highlight/styles/pasque.css": () => Promise.resolve({             }), "./highlight/styles/phd.css": () => Promise.resolve({          }), "./highlight/styles/pico.css": () => Promise.resolve({           }), "./highlight/styles/pojoaque.css": () => Promise.resolve({               }), "./highlight/styles/pop.css": () => Promise.resolve({          }), "./highlight/styles/porple.css": () => Promise.resolve({             }), "./highlight/styles/purebasic.css": () => Promise.resolve({                }), "./highlight/styles/qtcreator-dark.css": () => Promise.resolve({                     }), "./highlight/styles/qtcreator-light.css": () => Promise.resolve({                      }), "./highlight/styles/qualia.css": () => Promise.resolve({             }), "./highlight/styles/railscasts.css": () => Promise.resolve({                 }), "./highlight/styles/rainbow.css": () => Promise.resolve({              }), "./highlight/styles/rebecca.css": () => Promise.resolve({              }), "./highlight/styles/ros-pine-dawn.css": () => Promise.resolve({                    }), "./highlight/styles/ros-pine-moon.css": () => Promise.resolve({                    }), "./highlight/styles/ros-pine.css": () => Promise.resolve({               }), "./highlight/styles/routeros.css": () => Promise.resolve({               }), "./highlight/styles/sagelight.css": () => Promise.resolve({                }), "./highlight/styles/sandcastle.css": () => Promise.resolve({                 }), "./highlight/styles/school-book.css": () => Promise.resolve({                  }), "./highlight/styles/seti-ui.css": () => Promise.resolve({              }), "./highlight/styles/shades-of-purple.css": () => Promise.resolve({                       }), "./highlight/styles/shapeshifter.css": () => Promise.resolve({                   }), "./highlight/styles/silk-dark.css": () => Promise.resolve({                }), "./highlight/styles/silk-light.css": () => Promise.resolve({                 }), "./highlight/styles/snazzy.css": () => Promise.resolve({             }), "./highlight/styles/solar-flare-light.css": () => Promise.resolve({                        }), "./highlight/styles/solar-flare.css": () => Promise.resolve({                  }), "./highlight/styles/solarized-dark.css": () => Promise.resolve({                     }), "./highlight/styles/solarized-light.css": () => Promise.resolve({                      }), "./highlight/styles/spacemacs.css": () => Promise.resolve({                }), "./highlight/styles/srcery.css": () => Promise.resolve({             }), "./highlight/styles/stackoverflow-dark.css": () => Promise.resolve({                         }), "./highlight/styles/stackoverflow-light.css": () => Promise.resolve({                          }), "./highlight/styles/summercamp.css": () => Promise.resolve({                 }), "./highlight/styles/summerfruit-dark.css": () => Promise.resolve({                       }), "./highlight/styles/summerfruit-light.css": () => Promise.resolve({                        }), "./highlight/styles/sunburst.css": () => Promise.resolve({               }), "./highlight/styles/synth-midnight-terminal-dark.css": () => Promise.resolve({                                   }), "./highlight/styles/synth-midnight-terminal-light.css": () => Promise.resolve({                                    }), "./highlight/styles/tango.css": () => Promise.resolve({            }), "./highlight/styles/tender.css": () => Promise.resolve({             }), "./highlight/styles/tokyo-night-dark.css": () => Promise.resolve({                       }), "./highlight/styles/tokyo-night-light.css": () => Promise.resolve({                        }), "./highlight/styles/tomorrow-night-blue.css": () => Promise.resolve({                          }), "./highlight/styles/tomorrow-night-bright.css": () => Promise.resolve({                            }), "./highlight/styles/tomorrow-night.css": () => Promise.resolve({                     }), "./highlight/styles/tomorrow.css": () => Promise.resolve({               }), "./highlight/styles/twilight.css": () => Promise.resolve({               }), "./highlight/styles/unikitty-dark.css": () => Promise.resolve({                    }), "./highlight/styles/unikitty-light.css": () => Promise.resolve({                     }), "./highlight/styles/vs.css": () => Promise.resolve({         }), "./highlight/styles/vs2015.css": () => Promise.resolve({             }), "./highlight/styles/vulcan.css": () => Promise.resolve({             }), "./highlight/styles/windows-10-light.css": () => Promise.resolve({                       }), "./highlight/styles/windows-10.css": () => Promise.resolve({                 }), "./highlight/styles/windows-95-light.css": () => Promise.resolve({                       }), "./highlight/styles/windows-95.css": () => Promise.resolve({                 }), "./highlight/styles/windows-high-contrast-light.css": () => Promise.resolve({                                  }), "./highlight/styles/windows-high-contrast.css": () => Promise.resolve({                            }), "./highlight/styles/windows-nt-light.css": () => Promise.resolve({                       }), "./highlight/styles/windows-nt.css": () => Promise.resolve({                 }), "./highlight/styles/woodland.css": () => Promise.resolve({               }), "./highlight/styles/xcode-dusk.css": () => Promise.resolve({                 }), "./highlight/styles/xcode.css": () => Promise.resolve({            }), "./highlight/styles/xt256.css": () => Promise.resolve({            }), "./highlight/styles/zenburn.css": () => Promise.resolve({              }) });
  toUpperSnakeCase("runatics") + "_CODE_BLOCK_STYLE";
  const styles = Object.entries(stylesImport).map(([path]) => ({
    value: path.slice(path.lastIndexOf("/") + 1, -4),
    name: path.slice(path.lastIndexOf("/") + 1, -4)
  }));
  const each_array = ensure_array_like(styles);
  $$payload.out += `<select class="w-32 border border-gray-200 p-1 text-gray-800 dark:text-gray-800 md:w-36"><!--[-->`;
  for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
    let theme = each_array[$$index];
    $$payload.out += `<option${attr("value", theme.value)}>${escape_html(theme.value)}</option>`;
  }
  $$payload.out += `<!--]--></select>`;
  pop();
}
function Nav($$payload, $$props) {
  push();
  var $$store_subs;
  let activeUrl = store_get($$store_subs ??= {}, "$page", page).url.pathname;
  let {
    lis,
    siteName,
    twitterUrl,
    githubUrl,
    blueskyUrl,
    headerClass
  } = $$props;
  store_get($$store_subs ??= {}, "$page", page).url.pathname;
  let nav = uiHelpers();
  let navStatus = false;
  let toggleNav = nav.toggle;
  let closeNav = nav.close;
  let divClass = "ml-auto w-full";
  let ulclass = "dark:lg:bg-transparent lg:space-x-4";
  let navClass = "w-full divide-gray-200 border-gray-200 bg-gray-50 dark_bg_theme text-gray-500 dark:divide-gray-700 dark:border-gray-700 dark:transparent dark:text-gray-400 sm:px-4";
  let headerCls = twMerge("sticky top-0 z-40 mx-auto w-full flex-none border-b border-gray-200 bg-gray-100 dark:border-gray-600 dark:bg-sky-950", headerClass);
  let transitionParams = { y: 0, duration: 200, easing: sineIn };
  let dropdown2 = uiHelpers();
  let dropdownStatus = false;
  let closeDropdown = dropdown2.close;
  function navLi2($$payload2, lis2) {
    const each_array = ensure_array_like(lis2);
    $$payload2.out += `<!--[-->`;
    for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
      let { name, href, icon } = each_array[$$index];
      if (icon) {
        $$payload2.out += "<!--[-->";
        $$payload2.out += `<icon class="mb-3 h-8 w-8"></icon>`;
      } else {
        $$payload2.out += "<!--[!-->";
      }
      $$payload2.out += `<!--]--> `;
      NavLi($$payload2, {
        href,
        children: ($$payload3) => {
          $$payload3.out += `<!---->${escape_html(name)}`;
        },
        $$slots: { default: true }
      });
      $$payload2.out += `<!---->`;
    }
    $$payload2.out += `<!--]-->`;
  }
  $$payload.out += `<header${attr("class", headerCls)}>`;
  {
    let brand = function($$payload2) {
      NavBrand($$payload2, {
        siteName,
        spanClass: "self-center whitespace-nowrap text-2xl font-semibold text-primary-900 dark:text-primary-500"
      });
      $$payload2.out += `<!----> <div class="ml-auto flex items-center gap-4 lg:order-1">`;
      DynamicCodeBlockStyle($$payload2);
      $$payload2.out += `<!----> `;
      DotsHorizontalOutline($$payload2, {
        onclick: dropdown2.toggle,
        class: "ml-4 dark:text-white",
        size: "lg"
      });
      $$payload2.out += `<!----> `;
      Darkmode($$payload2, { class: "m-0 p-2" });
      $$payload2.out += `<!----> <div class="relative">`;
      Dropdown($$payload2, {
        dropdownStatus,
        closeDropdown,
        params: transitionParams,
        class: "absolute -left-[102px] top-2 w-12 pl-1.5",
        children: ($$payload3) => {
          DropdownUl($$payload3, {
            class: "py-0",
            children: ($$payload4) => {
              if (blueskyUrl) {
                $$payload4.out += "<!--[-->";
                DropdownLi($$payload4, {
                  href: blueskyUrl,
                  target: "_blank",
                  aClass: "p-0.5 m-0",
                  children: ($$payload5) => {
                    Bluesky($$payload5, { size: "30" });
                  },
                  $$slots: { default: true }
                });
              } else {
                $$payload4.out += "<!--[!-->";
              }
              $$payload4.out += `<!--]--> `;
              if (twitterUrl) {
                $$payload4.out += "<!--[-->";
                DropdownLi($$payload4, {
                  href: twitterUrl,
                  target: "_blank",
                  aClass: "p-2 m-0",
                  children: ($$payload5) => {
                    XSolid($$payload5, {});
                  },
                  $$slots: { default: true }
                });
              } else {
                $$payload4.out += "<!--[!-->";
              }
              $$payload4.out += `<!--]--> `;
              if (githubUrl) {
                $$payload4.out += "<!--[-->";
                DropdownLi($$payload4, {
                  href: githubUrl,
                  target: "_blank",
                  aClass: "p-2 m-0",
                  children: ($$payload5) => {
                    GithubSolid($$payload5, {});
                  },
                  $$slots: { default: true }
                });
              } else {
                $$payload4.out += "<!--[!-->";
              }
              $$payload4.out += `<!--]-->`;
            },
            $$slots: { default: true }
          });
        },
        $$slots: { default: true }
      });
      $$payload2.out += `<!----></div></div>`;
    };
    Navbar($$payload, {
      navClass,
      toggleNav,
      closeNav,
      navStatus,
      breakPoint: "lg",
      fluid: true,
      hamburgerMenu: false,
      div2Class: divClass,
      brand,
      children: ($$payload2) => {
        if (lis) {
          $$payload2.out += "<!--[-->";
          NavUl($$payload2, {
            activeUrl,
            class: ulclass,
            children: ($$payload3) => {
              navLi2($$payload3, lis);
            },
            $$slots: { default: true }
          });
        } else {
          $$payload2.out += "<!--[!-->";
        }
        $$payload2.out += `<!--]-->`;
      },
      $$slots: { brand: true, default: true }
    });
  }
  $$payload.out += `<!----></header>`;
  if ($$store_subs) unsubscribe_stores($$store_subs);
  pop();
}
function _layout($$payload, $$props) {
  push();
  var $$store_subs;
  let { children, data } = $$props;
  store_get($$store_subs ??= {}, "$page", page).url.pathname;
  const analyticsId = data.ANALYTICS_ID;
  let metaTags = store_get($$store_subs ??= {}, "$page", page).data.pageMetaTags ? deepMerge(store_get($$store_subs ??= {}, "$page", page).data.layoutMetaTags, store_get($$store_subs ??= {}, "$page", page).data.pageMetaTags) : data.layoutMetaTags;
  const brand = {
    name: "codewithshin.com",
    href: "https://codewithshin.com"
  };
  const siteName = removeHyphensAndCapitalize("runatics");
  const twitterUrl = "https://twitter.com/shinokada";
  const githubUrl = `https://github.com/shinokada/${"runatics"}`;
  const blueskyUrl = "https://bsky.app/profile/shinichiokada.bsky.social";
  RunesMetaTags($$payload, spread_props([metaTags]));
  $$payload.out += `<!----> `;
  Runatics($$payload, { analyticsId });
  $$payload.out += `<!----> `;
  Nav($$payload, { siteName, twitterUrl, githubUrl, blueskyUrl });
  $$payload.out += `<!----> <div class="mx-auto max-w-4xl lg:flex"><div class="relative h-full w-full overflow-y-auto px-8">`;
  children($$payload);
  $$payload.out += `<!----> `;
  Footer_1($$payload, { brand, ulClass: "dark_bg_theme" });
  $$payload.out += `<!----></div></div>`;
  if ($$store_subs) unsubscribe_stores($$store_subs);
  pop();
}
export {
  _layout as default
};
