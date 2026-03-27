const target = 1000;
const donationRange = document.getElementById('donationRange');
const progressBar = document.getElementById('progressBar');

function updateProgress(value) {
  const percentage = Math.min((value / target) * 100, 100);
  progressBar.style.width = percentage + '%';
  progressBar.textContent = `EUR ${value} / EUR ${target}`;
}

if (donationRange && progressBar) {
  donationRange.addEventListener('input', (e) => {
    updateProgress(Number(e.target.value));
  });

  updateProgress(Number(donationRange.value));
}
