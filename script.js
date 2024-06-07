document.getElementById('contactForm').addEventListener('submit',function(event){
    event.preventDefault()

    document.getElementById('SendFormMessage').classList.remove('hidden')

    document.getElementById('contactForm').reset()
})