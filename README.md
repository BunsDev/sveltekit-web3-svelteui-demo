# SvelteKit Web3 Demo

## Summary

This project is a demo of how to use both [web3.js](https://web3js.readthedocs.io/en/v1.7.4/getting-started.html) and [SvelteUI](https://www.svelteui.org/) in a SvelteKit project.

This project is currently being built out, see the roadmap below.

## Features

- SvelteKit
- web3.js
- [svelte-web3](https://github.com/clbrge/svelte-web3) - a library that provides a nice API for managing web3js connections and objects with svelte stores.
- [SvelteUI](https://www.svelteui.org/) - the UI kit used in the project. Note that SvelteUI is in beta and under active development at the time of this writing.
- Tailwind CSS

## Roadmap & to do's

### Misc:

- [] Hamburger not showing when collapse at middle break point. Hamburger only shows on small break point.
- [] Supported chain IDs. Throw error if injected chain ID is not the chain ID we want to support.
- [] Persistent web3 via HTTP RPC to make certain calls, so user doesn't need to connect MM for things they shouldn't have to

### Block Search

- [] Change to use non-injected web3 provider. User should not be prompted to connect MM to look at block data from chain
- [] Block detail page at `/block/[block]` - add table of transactions from that block with link to transaction detail page
- [] Block detail page at `/block/[block]` - make all cards the same height
- [] Block detail page at `/block/[block]` - make block hash line wrap or show only portion of it with copy button

### Address Search

- [] Get address search working
- [] Show balance (what else) on address page

### Transaction Search

- [] Get transaction search working
- [] Show from, to, txn receipt

### Future

- [] Add chain status page that shows current block, chain id, gas price
- [] Support multichain connections
- [] Utility for converting wei units
- [] Interactions with popular NFT contracts. Just read only, read-only contracts calls for popular NFT contracts. Need to figure out how to do state change contract calls in a manner that people are comfortable doing.
