<script lang="ts">
  import { Navbar, NavBrand, DarkMode, Dropdown, DropdownItem } from 'flowbite-svelte';
  import { GithubSolid, DotsHorizontalOutline, XSolid, Bluesky } from 'runes-webkit';
  import DynamicCodeBlockStyle from './DynamicCodeBlockStyle.svelte';

  const githubUrl = `https://github.com/shinokada/${__NAME__}`;
  const twitterUrl = 'https://twitter.com/shinokada';
  const blueskyUrl = 'https://bsky.app/profile/codewithshin.com';
</script>

<Navbar
  fluid
  class="sticky top-0 z-40 mx-auto w-full flex-none border-b border-gray-200 bg-gray-100 dark:border-gray-600 dark:bg-stone-950"
  navContainerClass="lg:justify-between"
>
  <NavBrand href="/">
    <span
      class="text-primary-900 dark:text-primary-500 self-center text-2xl font-semibold whitespace-nowrap lg:text-3xl"
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
