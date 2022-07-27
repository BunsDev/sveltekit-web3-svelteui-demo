import Web3 from 'web3'

import { httpProvider } from "$lib/config"

export async function get({ params }) {
    const { block } = params

    let httpEndpoint = `${httpProvider}/${import.meta.env.VITE_INFURA_KEY}`
    var web3 = new Web3(httpEndpoint);

    let blockData = await web3.eth.getBlock(block)

    let body
    if (blockData) {
        body = blockData
    } else {
        body = {message: 'block not found'}
    }

    return {
        body
    }
}