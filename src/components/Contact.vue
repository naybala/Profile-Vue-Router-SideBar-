<template>
	<main id="contact-page">
	<div class="container text-center">
                <div class="row">
                    <div class="col-md-4 mb-3">
                        <a href="tel:+959763684400">
                            <button class="button text-decoration-none">Call
                               <i class="fa-solid fa-square-phone"></i>
                            </button>
                        </a>
                    </div>
                    <div class="col-md-4 mb-3">
                        <a href="mailto: naybala.153808@gmail.com">
                            <button class="button text-decoration-none">Email
                                <i class="fa-solid fa-paper-plane"></i>
                            </button>
                        </a>
                    </div>
                    <div class="col-md-4 mb-3">
                        <a href="https://www.facebook.com/profile.php?id=100076412994170" target="_blink">
                            <button class="button text-decoration-none">facebook
                               <i class="fa-brands fa-facebook"></i>
                            </button>
                        </a>
                    </div>
                </div>
				<br><br><br>
                <img src="../assets/images/Footer-Up.jpg" class="rounded-3" alt="" id="galleryEight" @click="imageViewOne">
                <div class="div" id="popup">
                    <img src="" alt="" id="selectedImage">
                </div>
            </div>
	</main>
</template>

<script>
export default {
    methods:{
    imageViewOne(){
      const popup = document.querySelector('#popup');
      const gallery = document.querySelector('#galleryEight');
      const selectedImage = document.querySelector('#selectedImage');
      selectedImage.src = gallery.src;
      popup.style.transform = `translateY(0%)`;
       popup.addEventListener('click', () => {
            popup.style.transform = `translateY(-100%)`;
            popup.src = '';
        })
      },
    }
}
</script>

<style scoped>
.button {
  display: inline-block;
  background-color: var(--primary);
  color: var(--light);
  padding: .75rem 2.5rem;
  font-weight: var(--font-semi);
  border-radius: .5rem;
  transition: .3s;
}

.button:hover {
  transform: translateY(-3px);
  box-shadow: 3px 3px 10px black;
}
img{
	width: 80%;
}
#galleryEight{
  cursor: pointer;
  transform: translateY(0px);
  transition: .3s;
}
#galleryEight:hover{
  transform: translateY(-3px);
  box-shadow: 3px 3px 10px black;
  transition: .3s;
}
#popup{
  cursor: pointer;
  
  position: fixed;
  top: 0px;
  bottom: 0px;
  left: 0px;
  right: 0px;
  background-color: rgba(23, 22, 22, 0.95);
  display: flex;
  justify-content: center;
  align-items: center;
  transform: translateY(-100%);
  transition: 250ms transform;
  padding: 50px;
  z-index: 2000;
  overflow-x:hidden;
}
#selectedImage{
  max-height: 100%;
  border-radius: 1rem;
  max-width: 100%;
}

@media (min-width: 290px) and (max-width: 349px){
	.container{
		margin-top: 3rem;
	}
	img{
	width: 100%;
	}
	.button {
		padding: .55rem 1.5rem;
		border-radius: .5rem;
	}
}

@media (min-width: 350px) and (max-width: 500px){
	.container{
		margin-top: 8rem;
	}
	img{
		width: 100%;
	}
	.button {
		padding: .55rem 1.5rem;
		border-radius: .5rem;
	}
}
@media (min-width: 500px) and (max-width: 992px) {
	.container{
		margin-top: 15rem;
	}
}

</style>