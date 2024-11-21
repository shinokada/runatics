<script lang="ts">
  import { twMerge } from 'tailwind-merge';
  import type { Component } from 'svelte';
  import {
    Navbar,
    NavLi,
    NavBrand,
    NavUl,
    uiHelpers,
    Darkmode,
    Dropdown,
    DropdownUl,
    DropdownLi
  } from 'svelte-5-ui-lib';
  import { page } from '$app/stores';
  import { GithubSolid, DotsHorizontalOutline, XSolid, Bluesky } from 'runes-webkit';
  import DynamicCodeBlockStyle from './DynamicCodeBlockStyle.svelte';
  import { sineIn } from 'svelte/easing';

  let activeUrl = $state($page.url.pathname);
  $effect(() => {
    activeUrl = $page.url.pathname;
  });

  type LiType = {
    name: string;
    href: string;
    icon?: Component;
  };
  interface Props {
    lis?: LiType[];
    siteName: string;
    twitterUrl?: string;
    githubUrl?: string;
    blueskyUrl?: string;
    headerClass?: string;
    urlsToIncludeSwitcher?: string[];
  }
  let { lis, siteName, twitterUrl, githubUrl, blueskyUrl, headerClass }: Props = $props();
  /* eslint-disable @typescript-eslint/no-unused-vars */
  let currentUrl = $state($page.url.pathname);
  let nav = uiHelpers();
  let navStatus = $state(false);
  let toggleNav = nav.toggle;
  let closeNav = nav.close;
  let divClass = 'ml-auto w-full';
  let ulclass = 'dark:lg:bg-transparent lg:space-x-4';
  let navClass =
    'w-full divide-gray-200 border-gray-200 bg-gray-50 dark_bg_theme text-gray-500 dark:divide-gray-700 dark:border-gray-700 dark:transparent dark:text-gray-400 sm:px-4';
  let headerCls = twMerge(
    'sticky top-0 z-40 mx-auto w-full flex-none border-b border-gray-200 bg-gray-100 dark:border-gray-600 dark:bg-sky-950',
    headerClass
  );
  let transitionParams = {
    y: 0,
    duration: 200,
    easing: sineIn
  };
  let dropdown = uiHelpers();

  let dropdownStatus = $state(false);
  let closeDropdown = dropdown.close;

  $effect(() => {
    navStatus = nav.isOpen;
    dropdownStatus = dropdown.isOpen;
    currentUrl = $page.url.pathname;
  });
</script>

{#snippet navLi(lis: LiType[])}
  {#each lis as { name, href, icon }}
    {#if icon}
      <icon class="mb-3 h-8 w-8"></icon>
    {/if}
    <NavLi {href}>{name}</NavLi>
  {/each}
{/snippet}

<header class={headerCls}>
  <Navbar
    {navClass}
    {toggleNav}
    {closeNav}
    {navStatus}
    breakPoint="lg"
    fluid
    hamburgerMenu={false}
    div2Class={divClass}
  >
    {#snippet brand()}
      <NavBrand
        {siteName}
        spanClass="self-center whitespace-nowrap text-2xl font-semibold text-primary-900 dark:text-primary-500"
      />
      <div class="ml-auto flex items-center gap-4 lg:order-1">
        <DynamicCodeBlockStyle />

        <DotsHorizontalOutline onclick={dropdown.toggle} class="ml-4 dark:text-white" size="lg" />
        <Darkmode class="m-0 p-2" />
        <div class="relative">
          <Dropdown
            {dropdownStatus}
            {closeDropdown}
            params={transitionParams}
            class="absolute -left-[102px] top-2 w-12 pl-1.5"
          >
            <DropdownUl class="py-0">
              {#if blueskyUrl}
                <DropdownLi href={blueskyUrl} target="_blank" aClass="p-0.5 m-0">
                  <Bluesky size="30" />
                </DropdownLi>
              {/if}
              {#if twitterUrl}
                <DropdownLi href={twitterUrl} target="_blank" aClass="p-2 m-0"
                  ><XSolid /></DropdownLi
                >
              {/if}
              {#if githubUrl}
                <DropdownLi href={githubUrl} target="_blank" aClass="p-2 m-0">
                  <GithubSolid />
                </DropdownLi>
              {/if}
            </DropdownUl>
          </Dropdown>
        </div>
      </div>
    {/snippet}
    {#if lis}
      <NavUl {activeUrl} class={ulclass}>
        {@render navLi(lis)}
      </NavUl>
    {/if}
  </Navbar>
</header>

<!--
@component
[Go to docs](https://runes-webkit.codewithshin.com/)
## Props
@props: lis: LiType[];
@props:siteName: string;
@props:twitterUrl?: string;
@props:githubUrl?: string;
@props:headerClass?: string;
@props:urlsToIncludeSwitcher?: string[];
-->
