import hljs from 'highlight.js';
import hljsSvelte from 'highlightjs-svelte';
import xml from 'highlight.js/lib/languages/xml';

hljsSvelte(hljs);
hljs.registerLanguage('vue', xml);
