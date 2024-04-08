<script lang="ts">
  import { twMerge } from 'tailwind-merge';
  import type { ComponentType } from 'svelte';
  import {
    Navbar,
    NavLi,
    NavBrand,
    NavUl,
    uiHelpers,
    Darkmode,
    Dropdown,
    DropdownItem
  } from 'svelte-5-ui-lib';
  import { page } from '$app/stores';
  import {
    GithubSolid,
    random_tailwind_color,
    DotsHorizontalOutline,
    XSolid
  } from 'svelte-icon-webkit';
  import DynamicCodeBlockStyle from './DynamicCodeBlockStyle.svelte';

  function isIncluded(url: string, allowedUrls: string[]): boolean {
    return allowedUrls.some((allowedUrl) => url.startsWith(allowedUrl));
  }

  type LiType = {
    name: string;
    href: string;
    icon?: ComponentType;
  };
  interface Props {
    lis: LiType[];
    siteName: string;
    twitterUrl?: string;
    githubUrl?: string;
    headerClass?: string;
    urlsToIncludeSwitcher?: string[];
  }
  let {
    lis,
    siteName,
    twitterUrl,
    githubUrl,
    headerClass,
    urlsToIncludeSwitcher = ['/guide'],
    ...restProps
  }: Props = $props();

  let currentUrl = $state($page.url.pathname);
  let nav = uiHelpers();

  let include = $derived(isIncluded(currentUrl, urlsToIncludeSwitcher));

  let navStatus = $state(false);
  let toggleNav = nav.toggle;
  let closeNav = nav.close;
  let divClass = 'ml-auto w-full';
  let ulclass = 'dark:lg:bg-transparent lg:space-x-4';
  let navclass =
    'w-full divide-gray-200 border-gray-200 bg-gray-50 dark_bg_theme text-gray-500 dark:divide-gray-700 dark:border-gray-700 dark:transparent dark:text-gray-400 sm:px-4';
  let headerCls = twMerge(
    'sticky top-0 z-40 mx-auto w-full flex-none border-b border-gray-200 bg-gray-100 dark:border-gray-600 dark:bg-sky-950',
    headerClass
  );
  let dropdown = uiHelpers();

  let isOpen = $state(false);
  let toggle = dropdown.toggle;
  let close = dropdown.close;

  $effect(() => {
    navStatus = nav.isOpen;
    isOpen = dropdown.isOpen;
    currentUrl = $page.url.pathname;
  });
</script>

{#snippet navLi(lis)}
  {#each lis as { name, href, icon }}
    {#if icon}
      <svelte:component this={icon} class="mb-3 h-8 w-8 {random_tailwind_color()}" />
    {/if}
    <NavLi {href}>{name}</NavLi>
  {/each}
{/snippet}

<header class={headerCls}>
  <Navbar {navclass} {toggleNav} {closeNav} {navStatus} breakPoint="lg" fluid div2class={divClass}>
    {#snippet brand()}
      <NavBrand
        {siteName}
        spanclass="self-center whitespace-nowrap text-2xl font-semibold text-primary-900 dark:text-primary-500"
      />
      <div class="ml-auto flex items-center lg:order-1">
        {#if include}
          <DynamicCodeBlockStyle />
        {/if}
        <DotsHorizontalOutline onclick={toggle} class="ml-4 dark:text-white" size="lg" />
        <div class="relative">
          <Dropdown {isOpen} divclass="absolute -left-[30px] w-9">
            {#if twitterUrl}
              <DropdownItem href={twitterUrl} target="_blank" aclass="p-2 m-0"
                ><XSolid /></DropdownItem
              >
            {/if}
            {#if githubUrl}
              <DropdownItem href={githubUrl} target="_blank" aclass="p-2 m-0">
                <GithubSolid />
              </DropdownItem>
            {/if}
            <DropdownItem>
              <Darkmode btnclass="p-2 m-0" />
            </DropdownItem>
          </Dropdown>
        </div>
      </div>
    {/snippet}
    <NavUl {ulclass}>
      {@render navLi(lis)}
    </NavUl>
  </Navbar>
</header>

<!--
@component
[Go to docs](https://svelte-icon-webkit.codewithshin.com/)
## Props
@props: lis: LiType[];
@props:siteName: string;
@props:twitterUrl?: string;
@props:githubUrl?: string;
@props:headerClass?: string;
@props:urlsToIncludeSwitcher?: string[];
-->
