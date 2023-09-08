const tabContents = document.getElementsByClassName('tab-contents');
const tabLinks = document.getElementsByClassName('tab-links')

function opentab(tabName){
    for(tabLink of tabLinks){
        tabLink.classList.remove('active-link')
    }

    for(tabContent of tabContents){
        tabContent.classList.remove('active-tab')
    }

    event.currentTarget.classList.add('active-link')
    document.getElementById(tabName).classList.add('active-tab')
}

const sideMenu = document.getElementById('sidemenu')

function openmenu(){
    sideMenu.style.right = '0px'
}

function closemenu(){
    sideMenu.style.right = '-200px'
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