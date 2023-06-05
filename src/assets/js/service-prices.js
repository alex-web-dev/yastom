const $servicePrices = document.querySelectorAll('.service-prices');
$servicePrices.forEach($servicePrice => {
  const $moreBtn = $servicePrice.querySelector('.service-prices__more');
  if ($moreBtn) {
    $moreBtn.addEventListener('click', () => {
      $servicePrice.classList.toggle('service-prices--opened');

      let toggleText = $moreBtn.dataset.toggleText;
      if (toggleText) {
        const thisText = $moreBtn.innerHTML;
        $moreBtn.innerHTML = toggleText;
        $moreBtn.dataset.toggleText = thisText;
      }
    });
  }
});