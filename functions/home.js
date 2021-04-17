const toggleSwitch = document.querySelector('[data-switch]'),
    toggleBtn = document.querySelector('[data-toggle]'),
    btn = document.querySelector('[data-button]'),
    cards = document.querySelectorAll('.card');
  

toggleSwitch.addEventListener('click', () =>{
    toggleBtn.classList.toggle('active');
    toggleSwitch.classList.toggle('switches-active');
    document.body.classList.toggle('bg');
    cards.forEach(card =>{
      card.classList.toggle('active-border');
    })
})