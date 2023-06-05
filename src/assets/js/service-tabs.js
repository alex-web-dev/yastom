const $serviceTabs = document.querySelectorAll('.service-tabs');
$serviceTabs.forEach($serviceTab => {
  const $moreBtn = $serviceTab.querySelector('.service-tabs__btn--more');
  if ($moreBtn) {
    $moreBtn.addEventListener('click', () => {
      $serviceTab.classList.toggle('service-tabs--opened');
    });
  }
});