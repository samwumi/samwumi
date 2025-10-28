function opentab(tabName, event){
    const tabPanels = document.querySelectorAll('.tab-panel');
    const tabButtons = document.querySelectorAll('.tab-link');

    tabPanels.forEach(panel => panel.classList.add('hidden'));
    tabButtons.forEach(btn => {
        btn.classList.remove('border-b-2','border-brand','text-white');
        btn.classList.add('text-white/70');
    });

    const activePanel = document.getElementById(tabName);
    if (activePanel) activePanel.classList.remove('hidden');
    if (event && event.currentTarget){
        event.currentTarget.classList.add('border-b-2','border-brand','text-white');
        event.currentTarget.classList.remove('text-white/70');
    }
}

const sideMenu = document.getElementById('sidemenu')

function openmenu(){
    if (!sideMenu) return;
    sideMenu.classList.remove('translate-x-full');
    sideMenu.classList.add('translate-x-0');
}

function closemenu(){
    if (!sideMenu) return;
    sideMenu.classList.add('translate-x-full');
    sideMenu.classList.remove('translate-x-0');
}



  const scriptURL = 'https://script.google.com/macros/s/AKfycbz8cRlEiSjcD-TNEJNHDB5mnoHYWxtwkbv-JaqYs8WMl_na2XiU_84PYW_05LlWqA/exec'
  const form = document.forms['submit-to-google-sheet']
  const msg = document.getElementById('msg')

  form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
      .then(response => {
        msg.innerHTML = "Message sent successfully"
        setTimeout(() => {
            msg.innerHTML = ''
        }, 5000);
        form.reset()
      })
      .catch(error => console.error('Error!', error.message))
  })


  document.addEventListener('DOMContentLoaded', function () {
    var initialVisibleItems = 3;  
    var items = document.querySelectorAll('.work');
    var seeMoreButton = document.getElementById('see-more');

    // Display the first 'initialVisibleItems' items initially
    items.forEach(function (item, index) {
        if (index < initialVisibleItems) {
            item.style.display = 'block';
        }
    });

    seeMoreButton.addEventListener('click', function (e) {
        e.preventDefault()
        items.forEach(function (item, index) {
            if (index >= initialVisibleItems) {
                item.style.display = (item.style.display === 'none' || item.style.display === '') ? 'block' : 'none';
            }
        });

        seeMoreButton.textContent = (seeMoreButton.textContent === 'See Less') ? 'See More' : 'See Less';

    });
});
