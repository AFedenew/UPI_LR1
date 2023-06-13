let currencyRates;

const fetchCbrCurrencyRates = () => {
    fetch('http://www.cbr.ru/scripts/XML_daily.asp')
        .then(result => result.text())
        .then(result => {
            const parser = new XMLParser();
            currencyRates = parser.parse(result);
        })
        .catch(error => {
            console.error(error);
            alert('Failed to fetch currencies rates \u{1F622}');
        });
};

fetchCbrCurrencyRates();

const inputFrom = document.getElementById('inputFrom');
const inputTo = document.getElementById('inputTo');
const selectFrom = document.getElementById('selectFrom');
const selectTo = document.getElementById('selectTo');

const convertValue = () => {
    const initialValue = inputFrom.value || 0;
    const initialCurrency = selectFrom.value;
    const usdRate = currencyRates?.ValCurs?.Valute?.find(currency => currency.CharCode === 'USD')?.Value || '1';
    const result = initialCurrency === 'usd'
        ? initialValue * usdRate.replace(',', '.')
        : initialValue / usdRate.replace(',', '.');
    inputTo.value = result.toFixed(2);
};

inputFrom.oninput = convertValue;

selectFrom.onchange = function () {
    selectTo.value = selectFrom.value === 'rub' ? 'usd' : 'rub';
    convertValue();
}
