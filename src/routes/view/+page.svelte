<script lang="ts">
  import ViewQuote from '$components/ViewQuote.svelte';
  import type { Quote } from '$lib/Quote';
  import { quote } from '$lib/QuoteStore';
  import { onMount } from 'svelte';
  let urlParams: URLSearchParams;
  let dataQuote: Quote;
  onMount(async () => {
    urlParams = new URLSearchParams(window.location.search);
    try {
      const data = urlParams.get('quote');
      if (data) {
        const dataDecoded = atob(data);
        dataQuote = JSON.parse(dataDecoded);
      }
      const { text, author, theme, source } = dataQuote;
      if (text) $quote.text = text;
      else throw new Error('uh oh');
      if (author) $quote.author = author;
      else $quote.author = '';
      if (source) $quote.source = source;
      else $quote.source = '';
      if (theme) $quote.theme = theme;
      else $quote.theme = 'Default';
    } catch (err) {
      console.error('uh oh', err);
    }
  });
</script>

<ViewQuote quote={$quote} />
