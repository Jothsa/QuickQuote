import { writable } from 'svelte/store';
import { Quote } from './Quote';
export const quote = writable(
  new Quote(
    'To be or not to be, that is tne question...',
    'Shakespeare',
    'Default',
    'Hamlet',
  ),
);
