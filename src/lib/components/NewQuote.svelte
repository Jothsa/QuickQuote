<script lang="ts">
  import { quote } from '$lib/QuoteStore';
  import { Quote } from '$lib/Quote';


  async function generateCopyLink() {
    try {
      await navigator.clipboard.writeText(generateLink($quote).toString());
      console.log('Content copied to clipboard');
    } catch (err) {
      console.error('Failed to copy: ', err);
    }
  }

  function generateLink(quote: Quote): URL {
    const encodedQuote = btoa(JSON.stringify(quote));
    const params = new URLSearchParams({ quote: encodedQuote });
    const url = new URL(`${window.location.origin}/view/?${params}`);
    return url;
  }
  function resetQuote() {
    $quote.author = '';
    $quote.source = '';
    $quote.text = '';
    $quote.theme = 'Default';
  }
</script>

<div class="new-quote-form">
  <div class="input-wrapper-stacked">
    <textarea
      id="quote"
      class="quote-text"
      aria-label="enter your quote text here"
      bind:value={$quote.text}
      required />
  </div>
  <div class="input-wrapper">
    <label for="author">Author</label><input
      id="author"
      bind:value={$quote.author}
      required
      type="text" />
  </div>
  <div class="input-wrapper">
    <label for="source">Source (optional)</label><input
      id="source"
      type="text"
      bind:value={$quote.source} />
  </div>
  <div class="input-wrapper-stacked">
    <label for="theme">Theme</label><select
      id="theme"
      bind:value={$quote.theme}>
      {#each Quote.Themes as theme}
        <option value={theme}>{theme}</option>
      {/each}
    </select>
  </div>
  <div class="quote-link-wrapper">
    <button class="quote-link-button" on:click={generateCopyLink}
      >Copy Link</button
    ><span id="quote-link" />
    <button class="quote-link-button" on:click={resetQuote}>Clear</button>
  </div>
</div>

<style>
  label {
    font-size: var(--step-1);
  }

  .new-quote-form {
    display: grid;
    gap: var(--space-xs);
    grid-template-columns: repeat(1, fit-content(55ch));
  }

  .input-wrapper,
  .input-wrapper-stacked,
  .quote-link-wrapper {
    display: flex;
    gap: var(--space-xs);
  }

  .input-wrapper,
  .quote-link-wrapper {
    flex-direction: row;
  }

  .input-wrapper-textarea {
    flex-direction: column;
  }

  .quote-text {
    min-inline-size: 55ch;
    min-block-size: 15ch;
    padding: var(--space-2xs);
  }

  /* .quote-link-wrapper {
    justify-content: center;
  } */
</style>
