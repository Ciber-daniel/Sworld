(function () {
    const proSword = './image/pro.png'
    const masterSword = './image/master.png'
    const diamontSword = './image/diamont'
    const worldContainer = document.getElementById('swordcontainer')
    const button = document.getElementById('button')
    const masterBtn = document.getElementById('masterSelected')
    const otherSwordBtn = document.getElementById('otherSelected')
    const diamondbtn = document.getElementById('diamondSelected')
    const closeBtn = document.getElementById('exit_button')

    button.addEventListener('click', function () {
        document.getElementById('displayModal').style.display = 'block'
    })

    closeBtn.addEventListener('click', function () {
        document.getElementById('displayModal').style.display = 'none'
    })


    masterBtn.addEventListener('click', function () {
        worldContainer.innerHTML = `<div id="swordcontainer">
                  <h2>Esta es tu espada ideal</h2>
                  <div id="swordSilhouette" class="image_container">
                      <img src="${masterSword}" alt="">
                  </div>
                  <div class="btn-position" id="btn">           
                      <button class="btn_style" id="Rbutton">
                          Volver a elegir
                      </button>
                  </div>`
        document.getElementById('displayModal').style.display = 'none'
        const reload = document.getElementById('Rbutton')

        reload.addEventListener('click', function () {
            window.location.reload();

        })
    })


    otherSwordBtn.addEventListener('click', function () {
        worldContainer.innerHTML = `<div id="swordcontainer">
                 <h2>Esta es tu espada ideal</h2>
                 <div id="swordSilhouette" class="image_container">
                     <img src="${proSword}" alt="">
                 </div>
                 <div id="btn">           
                     <button class="btn_style" id="Rbutton">
                         Volver a elegir
                     </button>
                 </div>`

        document.getElementById('displayModal').style.display = 'none'
        const reload = document.getElementById('Rbutton')

        reload.addEventListener('click', function () {
            window.location.reload();

        })
    })

    diamondbtn.addEventListener('click', function () {
        worldContainer.innerHTML = `<div id="swordcontainer">
                  <h2>Esta es tu espada ideal</h2>
                  <div id="swordSilhouette" class="image_container">
                      <img src="${diamontSword}" alt="">
                  </div>
                  <div id= class="btn-position" "btn">           
                      <button class="btn_style" id="Rbutton">
                          Volver a elegir
                      </button>
                  </div>`
        document.getElementById('displayModal').style.display = 'none'
        const reload = document.getElementById('Rbutton')

        reload.addEventListener('click', function () {
            window.location.reload();

        })
    })
})()
