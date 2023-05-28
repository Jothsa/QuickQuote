<script lang="ts">
  import NewQuote from '$components/NewQuote.svelte';
  import ViewQuote from '$components/ViewQuote.svelte';
  import { quote } from '$lib/QuoteStore';
</script>

<div class="quotes-wrapper">
  <NewQuote />
  <ViewQuote quote={$quote} />
</div>

<style>
  .quotes-wrapper {
    display: grid;
    gap: var(--space-s);
    grid-template-columns: repeat(2, auto);
  }
</style>
