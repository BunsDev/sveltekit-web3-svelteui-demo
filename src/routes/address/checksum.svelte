<script>
    import { TextInput, Card, Button, Text } from '@svelteuidev/core';
    import { web3 } from 'svelte-web3';

    let address = ''
    let errors = ''

    let checksumAddress = () => {
        errors = ''
        console.log(errors)

        try {
            address = $web3.utils.toChecksumAddress(address)
        } catch {
            errors = 'Invalid address entered. Please enter a valid EVM address.'
        }
    }
</script>

<Card p="lg">
    <TextInput
        bind:value={address}
        label="Address Checksum" 
        description="A small utility that returns a checksummed address." 
        placeholder="Enter Address" 
        override={{ mb: '$4' }}
    />
    <Button 
        on:click={checksumAddress}
        ripple
    >
        Submit
    </Button>

    {#if errors}   
    <Text color='red' override={{ mt: '$4' }}>{errors}</Text>
    {/if}
</Card>
	