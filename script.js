// Modal Controls
function openBooking() {
    document.getElementById('bookingModal').style.display = 'block';
}

function closeBooking() {
    document.getElementById('bookingModal').style.display = 'none';
    // Reset steps
    document.getElementById('bookingStep1').classList.remove('hidden');
    document.getElementById('paymentStep').classList.add('hidden');
    document.getElementById('successStep').classList.add('hidden');
}

// Flow Logic
function goToPayment() {
    document.getElementById('bookingStep1').classList.add('hidden');
    document.getElementById('paymentStep').classList.remove('hidden');
}

function simulatePayment() {
    const btn = document.getElementById('payBtn');
    btn.innerHTML = "Processing STK Push...";
    btn.style.opacity = "0.7";
    btn.disabled = true;

    // Simulate STK Push delay
    setTimeout(() => {
        document.getElementById('paymentStep').classList.add('hidden');
        document.getElementById('successStep').classList.remove('hidden');
        lucide.createIcons(); // Refresh icons for success check
    }, 3000);
}

// Close modal when clicking outside
window.onclick = function(event) {
    const modal = document.getElementById('bookingModal');
    if (event.target == modal) {
        closeBooking();
    }
                                                             }
