export type QuoteThemes = (typeof Quote.Themes)[number];
export class Quote {
  text: string;
  author: string;
  source: string;
  theme: QuoteThemes;
  static Themes = ['Default', 'Bookish', 'SciFi', 'Fantasy', 'Holy'];

  constructor(
    text: string,
    author: string,
    theme: QuoteThemes,
    source: string,
  ) {
    this.text = text;
    this.author = author;
    this.theme = theme;
    this.source = source;
  }

  //  reset() {
  //   this.author = '';
  //   this.source = '';
  //   this.text = '';
  //   this.theme = 'Default';
  // }
}
