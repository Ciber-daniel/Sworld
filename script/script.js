class SwordSelector {

     modal = document.getElementById('displayModal')
     diamontSword = './image/diamont'
     masterSword = '"./image/master.png"'
     proSword = './image/pro.png'

constructor() {
    this.addListeners()
    this.otrometodo()
    this.listeners = this.listeners
    this.display = this.display.bind(this)
    this.listenersModal = this.listenersModal.bind(this)
}

    listenersModal = () => {
        this.modal.style.display = 'block'
        console.log(this.diamontSword)
     
    }
    

    otrometodo() {
        const diamondbtn = document.getElementById('diamondSelected')
        const otherSwordBtn = document.getElementById('otherSelected')
        const masterBtn = document.getElementById('masterSelected')
       

         this.listeners(diamondbtn,this.diamontSword)
         this.listeners(otherSwordBtn,this.proSword)
         this.listeners(masterBtn,this.masterSword)
        
    }

    addListeners() {    
        const button = document.getElementById('button')
        const closeBtn = document.getElementById('exit_button')
        button.addEventListener('click', this.listenersModal)
     
    }

    display() {
         this.modal.style.display = 'none'
    }

    listeners(btn,image) {
            btn.addEventListener('click', () => {
                const swordcontainer = document.getElementById('swordcontainer')
                swordcontainer.innerHTML = `<div id="swordcontainer">
                <h2>Esta es tu espada ideal</h2>
                <div id="swordSilhouette" class="image_container">
                    <img src="${image}" alt="">
                </div>
                <div class="btn-position" id="btn">           
                    <button class="btn_style" id="Rbutton">
                        Volver a elegir
                    </button>
                </div>`    
       
            
               this.display()
               const reload = document.getElementById('Rbutton')
               reload.addEventListener('click', () => {
               window.location.reload();
               })
            }) 
    }
         }
    
   


const juego = new SwordSelector()

        // button.addEventListener('click', function () {
        //     document.getElementById('displayModal').style.display = 'block'
        // })

        // closeBtn.addEventListener('click', function () {
        //     document.getElementById('displayModal').style.display = 'none'
        // })

        // closeModal.addEventListener('click' , function() {
        //     closeModal.style.display = 'none'
        // })

