<script>
  let fromCurrency = 'USD';
  let toCurrency = 'EUR';
  let fromAmount = 1;
  let toAmount = 0;

  let exchangeRates = {};

  async function fetchExchangeRates() {
    const response = await fetch('https://api.exchangerate-api.com/v4/latest/USD');
    const data = await response.json();
    exchangeRates = data.rates;
  }

  fetchExchangeRates();

  $: fromAmount = fromAmount;
  $: toAmount = (fromAmount * exchangeRates[toCurrency] / exchangeRates[fromCurrency]).toFixed(2);

  function handleFromAmountChange(event) {
    fromAmount = parseFloat(event.target.value);
  }

  function handleToAmountChange(event) {
    toAmount = parseFloat(event.target.value);
    fromAmount = (toAmount * exchangeRates[fromCurrency] / exchangeRates[toCurrency]).toFixed(2);
  }

  function handleFromCurrencyChange(event) {
    fromCurrency = event.target.value;
    fetchExchangeRates();
  }

  function handleToCurrencyChange(event) {
    toCurrency = event.target.value;
    fetchExchangeRates();
  }
</script>

<main>
  <h1>Конвертер валют</h1>
  <form>
    <label>
      От:
      <select bind:value={toCurrency} on:change={handleToCurrencyChange}>
        {#each Object.keys(exchangeRates) as currency}
          <option value={currency}>{currency}</option>
        {/each}
      </select>

      <input type="number" bind:value={fromAmount} on:input={handleFromAmountChange} />
    </label>
    <label>
      К:
      <select bind:value={toCurrency} on:change={handleToCurrencyChange}>
        {#each Object.keys(exchangeRates) as currency}
          <option value={currency}>{currency}</option>
        {/each}
      </select>

      <input type="number" bind:value={toAmount} on:input={handleToAmountChange} />
    </label>
  </form>
  <p>{fromAmount} {fromCurrency} = {toAmount} {toCurrency}</p>
</main>
