<script lang="ts">
  import type { Quote } from '$lib/Quote';
  export let quote: Quote;
</script>

<figure class={`quote ${quote.theme}`} >
  <blockquote>{quote.text}</blockquote>
  <figcaption>
    —{quote.author} {#if quote.source !== ''} from {quote.source}{/if}
  </figcaption>
</figure>

<style>
  .quote {
    display: grid;
    grid-template-columns: fit-content(20ch);
  }
</style>
