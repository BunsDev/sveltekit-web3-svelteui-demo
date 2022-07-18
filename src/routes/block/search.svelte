<script>
    import { TextInput, Card, Text, Button } from '@svelteuidev/core';
    import { web3 } from 'svelte-web3'
    import { goto } from '$app/navigation'

    let input = ''
    let errors = ''
    let loading = false

    const search = async () => {
        loading = true
        let currentBlock = await $web3.eth.getBlockNumber()

        if (input <= currentBlock) {
            goto('/block/' + input)
        } else {    
            errors = 'Entered block has not been mined yet. It is greater than current block: ' + currentBlock
            loading = false
        }
    }

</script>

<Card p="lg">
    <TextInput 
        bind:value={input}
        type="number"
        label="Block Search" 
        description="Retrieve information for a given block." 
        placeholder="Enter Block" 
        override={{ mb: '$4' }}/>
    
    <Button 
        on:click={search}
        ripple
        loading={loading}
    >
        Submit
    </Button>

    {#if errors}   
    <Text color='red' override={{ mt: '$4' }}>{errors}</Text>
    {/if}
</Card>
