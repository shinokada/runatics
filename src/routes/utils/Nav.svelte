<script lang="ts">
	import { twMerge } from 'tailwind-merge';
	import type { Component } from 'svelte';
	import {
		Navbar,
		NavLi,
		NavBrand,
		NavUl,
		uiHelpers,
		DarkMode,
		Dropdown,
		DropdownItem
	} from 'flowbite-svelte';
	import { page } from '$app/state';
	import { GithubSolid, DotsHorizontalOutline, XSolid, Bluesky } from 'runes-webkit';
	import DynamicCodeBlockStyle from './DynamicCodeBlockStyle.svelte';
	import { sineIn } from 'svelte/easing';

	let activeUrl = $state(page.url.pathname);
	$effect(() => {
		activeUrl = page.url.pathname;
	});

	type LiType = {
		name: string;
		href: string;
		icon?: Component;
	};
	interface Props {
		lis?: LiType[];
		headerClass?: string;
		urlsToIncludeSwitcher?: string[];
	}
	let { lis, headerClass }: Props = $props();
	/* eslint-disable @typescript-eslint/no-unused-vars */
	let currentUrl = $state(page.url.pathname);
	let nav = uiHelpers();
	let navStatus = $state(false);
	let toggleNav = nav.toggle;
	let closeNav = nav.close;
	let divClass = 'ml-auto w-full';
	let ulclass = 'dark:lg:bg-transparent lg:space-x-4';
	let navClass =
		'w-full divide-gray-200 border-gray-200 bg-gray-50 dark:bg-stone-900 text-gray-500 dark:divide-gray-700 dark:border-gray-700 dark:transparent dark:text-gray-400 sm:px-4';
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
		currentUrl = page.url.pathname;
	});

	const githubUrl = `https://github.com/shinokada/${__NAME__}`;
	const twitterUrl = 'https://twitter.com/shinokada';
	const blueskyUrl = 'https://bsky.app/profile/codewithshin.com';
	let activeClass = 'p-2 text-base hover:text-gray-600';
	let nonActiveClass = 'p-2 text-base hover:text-gray-600';
</script>

<Navbar
	fluid
	class="sticky top-0 z-40 mx-auto w-full flex-none border-b border-gray-200 bg-gray-100 dark:border-gray-600 dark:bg-stone-950"
	navContainerClass="lg:justify-between"
>
	<NavBrand href="/">
		<span
			class="text-primary-900 dark:text-primary-500 self-center text-2xl lg:text-3xl font-semibold whitespace-nowrap"
			>Runatics</span
		>
	</NavBrand>
	<div class="flex justify-end">
		<DynamicCodeBlockStyle />
		<DotsHorizontalOutline class="mt-1.5 mr-4 ml-6 dark:text-white" size="lg" />
		<Dropdown simple class="p-1">
			{#if blueskyUrl}
				<DropdownItem href={blueskyUrl} target="_blank" class="m-0 p-0.5">
					<Bluesky size="30" />
				</DropdownItem>
			{/if}
			{#if twitterUrl}
				<DropdownItem href={twitterUrl} target="_blank" class="m-0 p-2"><XSolid /></DropdownItem>
			{/if}
			{#if githubUrl}
				<DropdownItem href={githubUrl} target="_blank" class="m-0 p-2">
					<GithubSolid />
				</DropdownItem>
			{/if}
		</Dropdown>
		<DarkMode class="m-0 p-2" />
	</div>
</Navbar>

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
