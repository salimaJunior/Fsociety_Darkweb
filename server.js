// Current exchange rate constants (1 BTC = $95,000 | 1 XMR = $240)
const EXCHANGE_RATES = {
    BTC: 95000,
    XMR: 240
};

const modal = document.getElementById('payment-modal');
const closeBtn = document.querySelector('.close-btn');

document.querySelectorAll('.checkout-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
        const card = e.target.closest('.product-card');
        const name = card.dataset.name;
        const fiatPrice = parseFloat(card.dataset.price);

        // Compute conversions directly
        const btcCost = fiatPrice / EXCHANGE_RATES.BTC;
        const xmrCost = fiatPrice / EXCHANGE_RATES.XMR;

        // Render straight to text tags
        document.getElementById('modal-title').innerText = name;
        document.getElementById('modal-fiat').innerText = fiatPrice.toFixed(2);
        document.getElementById('btc-amount').innerText = btcCost.toFixed(6);
        document.getElementById('xmr-amount').innerText = xmrCost.toFixed(4);

        // Display panel
        modal.classList.remove('hidden');
    });
});

closeBtn.addEventListener('click', () => modal.classList.add('hidden'));
window.addEventListener('click', (e) => { if (e.target === modal) modal.classList.add('hidden'); });