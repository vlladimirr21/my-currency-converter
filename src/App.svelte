<style>

	body {
  	background-color: #f7f7f7; /* A soft, neutral gray background color */
	}
	
	main {
		text-align: center;
		padding: 1em;
		max-width: 240px;
		margin: 0 auto;
	}

	h1 {
		color: #ff3e00;
		text-transform: uppercase;
		font-size: 4em;
		font-weight: 100;
	}

	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}


.currency-converter {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin-bottom: 20px;
}

.currency-converter label {
  width: 45%;
  margin-right: 10px;
}

.currency-converter input[type='number'] {
  width: 45%;
  margin-right: 10px;
}

.currency-converter select {
  width: 45%;
  margin-right: 10px;
}

.currency-converter button {
  background-color: #337ab7;
  color: #fff;
  padding: 10px 20px;
  border: none;
  border-radius: 2px;
  cursor: pointer;
}

.currency-converter button:hover {
  background-color: #23527c;
}

.currency-converter button:disabled {
  background-color: #ccc;
  color: #666;
  cursor: not-allowed;
}

.result {
  font-size: 24px;
  font-weight: bold;
  margin-top: 20px;
}

.result span {
  color: #337ab7;
}

</style>
<style global>
  @import './global.css';
</style>