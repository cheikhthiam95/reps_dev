<template lang="">
<div >
 
    
<!-- header section starts  -->

<header>

    <div id="menu-bar" class="fas fa-bars"></div>

    <a href="#" class="logo"><span>T</span>ravel</a>

    <nav class="navbar">
        <a href="#home">home</a>
        <a href="#book">book</a>
        <a href="#packages">packages</a>
        <a href="#services">services</a>
        <a href="#gallery">gallery</a>
        <a href="#review">review</a>
        <a href="#contact">contact</a>
    </nav>

    <div class="icons">
        <i class="fas fa-search" id="search-btn"></i>
        <i class="fas fa-user" id="login-btn"></i>
    </div>

    <form action="" class="search-bar-container">
        <input type="search" id="search-bar" placeholder="search here...">
        <label for="search-bar" class="fas fa-search"></label>
    </form>

</header>

<!-- header section ends -->

<!-- login form container  -->

<div class="login-form-container">

    <i class="fas fa-times" id="form-close"></i>

    <form action="">
        <h3>login</h3>
        <input type="email" class="box" placeholder="enter your email">
        <input type="password" class="box" placeholder="enter your password">
        <input type="submit" value="login now" class="btn">
        <input type="checkbox" id="remember">
        <label for="remember">remember me</label>
        <p>forget password? <a href="#">click here</a></p>
        <p>don't have and account? <a href="#">register now</a></p>
    </form>

</div>

<!-- home section starts  -->

<section class="home" id="home">

    <div class="content">
        <h3>adventure is worthwhile</h3>
        <p>dicover new places with us, adventure awaits</p>
        <a href="#" class="btn">discover more</a>
    </div>

    <div class="controls">
        <span class="vid-btn active" data-src="~/assets/images/vid-1.mp4"></span>
        <span class="vid-btn" data-src="~/assets/images/vid-2.mp4"></span>
        <span class="vid-btn" data-src="~/assets/images/vid-3.mp4"></span>
        <span class="vid-btn" data-src="~/assets/images/vid-4.mp4"></span>
        <span class="vid-btn" data-src="~/assets/images/vid-5.mp4"></span>
    </div>

    <div class="video-container">
        <video src="~/assets/images/vid-1.mp4" id="video-slider" loop autoplay muted></video>
    </div>

</section>

<!-- home section ends -->

<!-- book section starts  -->

<section class="book" id="book">

    <h1 class="heading">
        <span>b</span>
        <span>o</span>
        <span>o</span>
        <span>k</span>
        <span class="space"></span>
        <span>n</span>
        <span>o</span>
        <span>w</span>
    </h1>

    <div class="row">

        <div class="image">
            <img src="~/assets/images/book-img.svg" alt="">
        </div>

        <form action="">
            <div class="inputBox">
                <h3>where to</h3>
                <input type="text" placeholder="place name">
            </div>
            <div class="inputBox">
                <h3>how many</h3>
                <input type="number" placeholder="number of guests">
            </div>
            <div class="inputBox">
                <h3>arrivals</h3>
                <input type="date">
            </div>
            <div class="inputBox">
                <h3>leaving</h3>
                <input type="date">
            </div>
            <input type="submit" class="btn" value="book now">
        </form>

    </div>

</section>

<!-- book section ends -->

<!-- packages section starts  -->

<section class="packages" id="packages">

    <h1 class="heading">
        <span>p</span>
        <span>a</span>
        <span>c</span>
        <span>k</span>
        <span>a</span>
        <span>g</span>
        <span>e</span>
        <span>s</span>
    </h1>

    <div class="box-container">

        <div class="box">
            <img src="~/assets/images/p-1.jpg" alt="">
            <div class="content">
                <h3> <i class="fas fa-map-marker-alt"></i> mumbai </h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis, nam!</p>
                <div class="stars">
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="far fa-star"></i>
                </div>
                <div class="price"> $90.00 <span>$120.00</span> </div>
                <a href="#" class="btn">book now</a>
            </div>
        </div>

        <div class="box">
            <img src="~/assets/images/p-2.jpg" alt="">
            <div class="content">
                <h3> <i class="fas fa-map-marker-alt"></i> hawaii </h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis, nam!</p>
                <div class="stars">
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="far fa-star"></i>
                </div>
                <div class="price"> $90.00 <span>$120.00</span> </div>
                <a href="#" class="btn">book now</a>
            </div>
        </div>

        <div class="box">
            <img src="~/assets/images/p-3.jpg" alt="">
            <div class="content">
                <h3> <i class="fas fa-map-marker-alt"></i> sydney </h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis, nam!</p>
                <div class="stars">
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="far fa-star"></i>
                </div>
                <div class="price"> $90.00 <span>$120.00</span> </div>
                <a href="#" class="btn">book now</a>
            </div>
        </div>

        <div class="box">
            <img src="~/assets/images/p-4.jpg" alt="">
            <div class="content">
                <h3> <i class="fas fa-map-marker-alt"></i> paris </h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis, nam!</p>
                <div class="stars">
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="far fa-star"></i>
                </div>
                <div class="price"> $90.00 <span>$120.00</span> </div>
                <a href="#" class="btn">book now</a>
            </div>
        </div>

        <div class="box">
            <img src="~/assets/images/p-5.jpg" alt="">
            <div class="content">
                <h3> <i class="fas fa-map-marker-alt"></i> tokyo </h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis, nam!</p>
                <div class="stars">
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="far fa-star"></i>
                </div>
                <div class="price"> $90.00 <span>$120.00</span> </div>
                <a href="#" class="btn">book now</a>
            </div>
        </div>

        <div class="box">
            <img src="~/assets/images/p-6.jpg" alt="">
            <div class="content">
                <h3> <i class="fas fa-map-marker-alt"></i> eypt </h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis, nam!</p>
                <div class="stars">
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="far fa-star"></i>
                </div>
                <div class="price"> $90.00 <span>$120.00</span> </div>
                <a href="#" class="btn">book now</a>
            </div>
        </div>

    </div>

</section>

<!-- packages section ends -->

<!-- services section starts  -->

<section class="services" id="services">

    <h1 class="heading">
        <span>s</span>
        <span>e</span>
        <span>r</span>
        <span>v</span>
        <span>i</span>
        <span>c</span>
        <span>e</span>
        <span>s</span>
    </h1>

    <div class="box-container">

        <div class="box">
            <i class="fas fa-hotel"></i>
            <h3>affordable hotels</h3>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Inventore commodi earum, quis voluptate exercitationem ut minima itaque iusto ipsum corrupti!</p>
        </div>
        <div class="box">
            <i class="fas fa-utensils"></i>
            <h3>food and drinks</h3>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Inventore commodi earum, quis voluptate exercitationem ut minima itaque iusto ipsum corrupti!</p>
        </div>
        <div class="box">
            <i class="fas fa-bullhorn"></i>
            <h3>safty guide</h3>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Inventore commodi earum, quis voluptate exercitationem ut minima itaque iusto ipsum corrupti!</p>
        </div>
        <div class="box">
            <i class="fas fa-globe-asia"></i>
            <h3>around the world</h3>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Inventore commodi earum, quis voluptate exercitationem ut minima itaque iusto ipsum corrupti!</p>
        </div>
        <div class="box">
            <i class="fas fa-plane"></i>
            <h3>fastest travel</h3>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Inventore commodi earum, quis voluptate exercitationem ut minima itaque iusto ipsum corrupti!</p>
        </div>
        <div class="box">
            <i class="fas fa-hiking"></i>
            <h3>adventures</h3>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Inventore commodi earum, quis voluptate exercitationem ut minima itaque iusto ipsum corrupti!</p>
        </div>

    </div>

</section>

<!-- services section ends -->

<!-- gallery section starts  -->

<section class="gallery" id="gallery">

    <h1 class="heading">
        <span>g</span>
        <span>a</span>
        <span>l</span>
        <span>l</span>
        <span>e</span>
        <span>r</span>
        <span>y</span>
    </h1>

    <div class="box-container">

        <div class="box">
            <img src="~/assets/images/g-1.jpg" alt="">
            <div class="content">
                <h3>amazing places</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus, tenetur.</p>
                <a href="#" class="btn">see more</a>
            </div>
        </div>
        <div class="box">
            <img src="~/assets/images/g-2.jpg" alt="">
            <div class="content">
                <h3>amazing places</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus, tenetur.</p>
                <a href="#" class="btn">see more</a>
            </div>
        </div>
        <div class="box">
            <img src="~/assets/images/g-3.jpg" alt="">
            <div class="content">
                <h3>amazing places</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus, tenetur.</p>
                <a href="#" class="btn">see more</a>
            </div>
        </div>
        <div class="box">
            <img src="~/assets/images/g-4.jpg" alt="">
            <div class="content">
                <h3>amazing places</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus, tenetur.</p>
                <a href="#" class="btn">see more</a>
            </div>
        </div>
        <div class="box">
            <img src="~/assets/images/g-5.jpg" alt="">
            <div class="content">
                <h3>amazing places</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus, tenetur.</p>
                <a href="#" class="btn">see more</a>
            </div>
        </div>
        <div class="box">
            <img src="~/assets/images/g-6.jpg" alt="">
            <div class="content">
                <h3>amazing places</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus, tenetur.</p>
                <a href="#" class="btn">see more</a>
            </div>
        </div>
        <div class="box">
            <img src="~/assets/images/g-7.jpg" alt="">
            <div class="content">
                <h3>amazing places</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus, tenetur.</p>
                <a href="#" class="btn">see more</a>
            </div>
        </div>
        <div class="box">
            <img src="~/assets/images/g-8.jpg" alt="">
            <div class="content">
                <h3>amazing places</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus, tenetur.</p>
                <a href="#" class="btn">see more</a>
            </div>
        </div>
        <div class="box">
            <img src="~/assets/images/g-9.jpg" alt="">
            <div class="content">
                <h3>amazing places</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus, tenetur.</p>
                <a href="#" class="btn">see more</a>
            </div>
        </div>

    </div>

</section>

<!-- gallery section ends -->

<!-- review section starts  -->

<section class="review" id="review">

    <h1 class="heading">
        <span>r</span>
        <span>e</span>
        <span>v</span>
        <span>i</span>
        <span>e</span>
        <span>w</span>
    </h1>

    <div class="swiper-container review-slider">

        <div class="swiper-wrapper">

            <div class="swiper-slide">
                <div class="box">
                    <img src="~/assets/images/pic1.png" alt="">
                    <h3>john deo</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa adipisci quisquam sunt nesciunt fugiat odit minus illum asperiores dolorum enim sint quod ipsam distinctio molestias consectetur ducimus beatae, reprehenderit exercitationem!</p>
                    <div class="stars">
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="far fa-star"></i>
                    </div>
                </div>
            </div>
            <div class="swiper-slide">
                <div class="box">
                    <img src="~/assets/images/pic2.png" alt="">
                    <h3>john deo</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa adipisci quisquam sunt nesciunt fugiat odit minus illum asperiores dolorum enim sint quod ipsam distinctio molestias consectetur ducimus beatae, reprehenderit exercitationem!</p>
                    <div class="stars">
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="far fa-star"></i>
                    </div>
                </div>
            </div>
            <div class="swiper-slide">
                <div class="box">
                    <img src="~/assets/images/pic3.png" alt="">
                    <h3>john deo</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa adipisci quisquam sunt nesciunt fugiat odit minus illum asperiores dolorum enim sint quod ipsam distinctio molestias consectetur ducimus beatae, reprehenderit exercitationem!</p>
                    <div class="stars">
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="far fa-star"></i>
                    </div>
                </div>
            </div>
            <div class="swiper-slide">
                <div class="box">
                    <img src="~/assets/images/pic4.png" alt="">
                    <h3>john deo</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa adipisci quisquam sunt nesciunt fugiat odit minus illum asperiores dolorum enim sint quod ipsam distinctio molestias consectetur ducimus beatae, reprehenderit exercitationem!</p>
                    <div class="stars">
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="far fa-star"></i>
                    </div>
                </div>
            </div>

        </div>

    </div>

</section>

<!-- review section ends -->

<!-- contact section starts  -->

<section class="contact" id="contact">
    
    <h1 class="heading">
        <span>c</span>
        <span>o</span>
        <span>n</span>
        <span>t</span>
        <span>a</span>
        <span>c</span>
        <span>t</span>
    </h1>

    <div class="row">

        <div class="image">
            <img src="~/assets/images/contact-img.svg" alt="">
        </div>

        <form action="">
            <div class="inputBox">
                <input type="text" placeholder="name">
                <input type="email" placeholder="email">
            </div>
            <div class="inputBox">
                <input type="number" placeholder="number">
                <input type="text" placeholder="subject">
            </div>
            <textarea placeholder="message" name="" id="" cols="30" rows="10"></textarea>
            <input type="submit" class="btn" value="send message">
        </form>

    </div>
    
</section>

<!-- contact section ends -->

<!-- brand section  -->
<section class="brand-container">

    <div class="swiper-container brand-slider">
        <div class="swiper-wrapper">
            <div class="swiper-slide"><img src="~/assets/images/1.jpg" alt=""></div>
            <div class="swiper-slide"><img src="~/assets/images/2.jpg" alt=""></div>
            <div class="swiper-slide"><img src="~/assets/images/3.jpg" alt=""></div>
            <div class="swiper-slide"><img src="~/assets/images/4.jpg" alt=""></div>
            <div class="swiper-slide"><img src="~/assets/images/5.jpg" alt=""></div>
            <div class="swiper-slide"><img src="~/assets/images/6.jpg" alt=""></div>
        </div>
    </div>

</section>

<!-- footer section  -->

<section class="footer">

    <div class="box-container">

        <div class="box">
            <h3>about us</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda quas magni pariatur est accusantium voluptas enim nemo facilis sit debitis.</p>
        </div>
        <div class="box">
            <h3>branch locations</h3>
            <a href="#">india</a>
            <a href="#">USA</a>
            <a href="#">japan</a>
            <a href="#">france</a>
        </div>
        <div class="box">
            <h3>quick links</h3>
            <a href="#">home</a>
            <a href="#">book</a>
            <a href="#">packages</a>
            <a href="#">services</a>
            <a href="#">gallery</a>
            <a href="#">review</a>
            <a href="#">contact</a>
        </div>
        <div class="box">
            <h3>follow us</h3>
            <a href="#">facebook</a>
            <a href="#">instagram</a>
            <a href="#">twitter</a>
            <a href="#">linkedin</a>
        </div>

    </div>

    <h1 class="credit"> created by <span> mr. web designer </span> | all rights reserved! </h1>

</section>















 
</div>
</template>

<script>
export default {
    layout: "index_layout",
    data() {
        return {
            habitats: {},
            categories: {},

            number: 0,
        };
    },

    mounted() {



let searchBtn = document.querySelector('#search-btn');
let searchBar = document.querySelector('.search-bar-container');
let formBtn = document.querySelector('#login-btn');
let loginForm = document.querySelector('.login-form-container');
let formClose = document.querySelector('#form-close');
let menu = document.querySelector('#menu-bar');
let navbar = document.querySelector('.navbar');
let videoBtn = document.querySelectorAll('.vid-btn');

window.onscroll = () =>{
    searchBtn.classList.remove('fa-times');
    searchBar.classList.remove('active');
    menu.classList.remove('fa-times');
    navbar.classList.remove('active');
    loginForm.classList.remove('active');
}

menu.addEventListener('click', () =>{
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
});

searchBtn.addEventListener('click', () =>{
    searchBtn.classList.toggle('fa-times');
    searchBar.classList.toggle('active');
});

formBtn.addEventListener('click', () =>{
    loginForm.classList.add('active');
});

formClose.addEventListener('click', () =>{
    loginForm.classList.remove('active');
});

videoBtn.forEach(btn =>{
    btn.addEventListener('click', ()=>{
        document.querySelector('.controls .active').classList.remove('active');
        btn.classList.add('active');
        let src = btn.getAttribute('data-src');
        document.querySelector('#video-slider').src = src;
    });
});

var swiper = new Swiper(".review-slider", {
    spaceBetween: 20,
    loop:true,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
    breakpoints: {
        640: {
          slidesPerView: 1,
        },
        768: {
          slidesPerView: 2,
        },
        1024: {
          slidesPerView: 3,
        },
    },
});

var swiper = new Swiper(".brand-slider", {
    spaceBetween: 20,
    loop:true,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
    breakpoints: {
        450: {
          slidesPerView: 2,
        },
        768: {
          slidesPerView: 3,
        },
        991: {
          slidesPerView: 4,
        },
        1200: {
          slidesPerView: 5,
        },
      },
});
        // var self = this;

        // self.navbar = document.getElementById("navbar");
        // self.cadre = document.getElementById("cadre");
        // self.second_menu =  document.getElementById("second_menu");

        // this.sticky = self.navbar.offsetTop;

        // window.onscroll = function () {
        //     self.documentIsCrolled();
        // };

        // this.getCategories();
        // this.gethabitatsReserved();

    },
    methods: {

        documentIsCrolled() {
            console.log("Akkkkkkkkkkkkk", window.pageYOffset, self.navbar.offsetTop)

            if (window.pageYOffset >= this.sticky) {
                if (self.navbar) {
                    self.navbar.style.paddingTop = ".20cm";
                    self.navbar.classList.add("sticky");
                    self.navbar.classList.add("bg-white");
                    self.navbar.style.zIndex = "1";

                }
                if (self.cadre) {
                    self.cadre.style.top = this.getCurrentHeight(["navbar"]) - 1 + "px";
                    // self.cadre.classList.add("sticky");
                    // self.cadre.classList.remove("bg-dark");
                    // self.cadre.classList.add("bg-white");
                    // self.cadre.style.zIndex = "1";
                    self.cadre.style.display = "none";
                   if(!this.hasClass(self.cadre,'sticky')){
                        self.second_menu.style.display = "block";
                   }else{
                    // self.cadre.classList.remove("sticky");

                   }


                }

            } else {
                if (self.navbar) {
                    self.navbar.classList.remove("sticky");
                    self.navbar.classList.remove("bg-white");
                    self.navbar.style.paddingTop = "unset"; 
                }
                if (self.cadre) {
                    self.cadre.classList.remove("sticky");
                    self.cadre.style.paddingTop = "0";
                    self.cadre.style.zIndex = "0"; 
                    self.cadre.style.display = "block";
                    self.second_menu.style.display = "none";
                }

            }
        },
        async getHabitatsByCategories(catId) {
            try {
                this.categories = await this.$axios.$get("/categories/", catId);
                console.log(this.categories);
            } catch (error) {
                console.log(error);
            }
        },
        async getCategories() {
            try {
                this.categories = await this.$axios.$get("/categories/");
                console.log(this.categories);
            } catch (error) {
                console.log(error);
            }
        },
        async gethabitatsReserved() {
            try {
                this.number = await this.$axios.$get("/reservations/count");
                console.log(this.number);
            } catch (error) {
                console.log(error);
            }
        },
        async gethabitats() {
            try {
                this.habitats = await this.$axios.$get("/habitats/");
                console.log(this.habitats);
            } catch (error) {
                console.log(error);
            }
        },
        async reserver(habitat) {
            console.log("Réservercalled", habitat);
            const args = {
                id_locataire: "9999999999999999999",
                id_habitat: habitat.id,
                periode: "du  12 au 20",
            };

            const response = await this.$axios.$post(
                "/reservations/newReservation/",
                args
            );
            console.log(response);
            console.log("La réponse de addReservation est : ", response);
            this.gethabitatsReserved();
            if (response && response.id) {
                // this.$router.push('/habitats/'+response.id)
                console.log("La réponse de addReservation est : ", response);
            }
        },
        getCurrentHeight(ids) {
            let height = 0;
            for (var i = 0; i < ids.length; i++) {
                if (document.getElementById(ids[i])) {
                    height = height + document.getElementById(ids[i]).offsetHeight;
                }
            }
            console.log('Houyaaa', height)
            return height;
        },

        hasClass(element, className) {
            return (
                (" " + element.className + " ").indexOf(" " + className + " ") > -1
            );
        }
    },
};
</script> 

<style>
 


@import url('https://fonts.googleapis.com/css2?family=Nunito:wght@200;300;400;600;700&display=swap');

:root{
  --orange:#ffa500;
}

*{
  font-family: 'Nunito', sans-serif;
  margin:0; padding:0;
  box-sizing: border-box;
  text-transform: capitalize;
  outline: none; border:none;
  text-decoration: none;
  transition: all .2s linear;
}

*::selection{
  background:var(--orange);
  color:#fff;
}

html{
  font-size: 62.5%;
  overflow-x: hidden;
  scroll-padding-top: 6rem;
  scroll-behavior: smooth;
}

section{
  padding:2rem 9%;
}

.heading{
  text-align: center;
  padding:2.5rem 0
}

.heading span{
  font-size: 3.5rem;
  background:rgba(255, 165, 0,.2);
  color:var(--orange);
  border-radius: .5rem;
  padding:.2rem 1rem;
}

.heading span.space{
  background:none;
}

.btn{
  display: inline-block;
  margin-top: 1rem;
  background:var(--orange);
  color:#fff;
  padding:.8rem 3rem;
  border:.2rem solid var(--orange);
  cursor: pointer;
  font-size: 1.7rem;
}

.btn:hover{
  background:rgba(255, 165, 0,.2);
  color:var(--orange);
}

header{
  position: fixed;
  top:0; left: 0; right:0;
  background:#333;
  z-index: 1000;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding:2rem 9%;
}

header .logo{
  font-size: 2.5rem;
  font-weight: bolder;
  color:#fff;
  text-transform: uppercase;
}

header .logo span{
  color:var(--orange);
}

header .navbar a{
  color:#fff;
  font-size: 2rem;
  margin:0 .8rem;
}

header .navbar a:hover{
  color:var(--orange);
}

header .icons i{
  font-size: 2.5rem;
  color:#fff;
  cursor: pointer;
  margin-right: 2rem;
}

header .icons i:hover{
  color:var(--orange);
}

header .search-bar-container{
  position: absolute;
  top:100%; left: 0; right:0;
  padding:1.5rem 2rem;
  background:#333;
  border-top: .1rem solid rgba(255,255,255,.2);
  display: flex;
  align-items: center;
  z-index: 1001;
  clip-path: polygon(0 0, 100% 0, 100% 0, 0 0);
}

header .search-bar-container.active{
  clip-path: polygon(0 0, 100% 0, 100% 100%, 0 100%);
}

header .search-bar-container #search-bar{
  width:100%;
  padding:1rem;
  text-transform: none;
  color:#333;
  font-size: 1.7rem;
  border-radius: .5rem;
}

header .search-bar-container label{
  color:#fff;
  cursor: pointer;
  font-size: 3rem;
  margin-left: 1.5rem;
}

header .search-bar-container label:hover{
  color:var(--orange);
}

.login-form-container{
  position: fixed;
  top:-120%; left: 0;
  z-index: 10000;
  min-height: 100vh;
  width:100%;
  background:rgba(0,0,0,.7);
  display: flex;
  align-items: center;
  justify-content: center;
}

.login-form-container.active{
  top:0;
}

.login-form-container form{
  margin:2rem;
  padding:1.5rem 2rem;
  border-radius: .5rem;
  background:#fff;
  width:50rem;
}

.login-form-container form h3{
  font-size: 3rem;
  color:#444;
  text-transform: uppercase;
  text-align: center;
  padding:1rem 0;
}

.login-form-container form .box{
  width:100%;
  padding:1rem;
  font-size: 1.7rem;
  color:#333;
  margin:.6rem 0;
  border:.1rem solid rgba(0,0,0,.3);
  text-transform: none;
}

.login-form-container form .box:focus{
  border-color: var(--orange);;
}

.login-form-container form #remember{
  margin:2rem 0;
}

.login-form-container form label{
  font-size: 1.5rem;
}

.login-form-container form .btn{
  display: block;
  width:100%;
}

.login-form-container form p{
  padding:.5rem 0;
  font-size: 1.5rem;
  color:#666;
}

.login-form-container form p a{
  color:var(--orange);
}

.login-form-container form p a:hover{
  color:#333;
  text-decoration: underline;
}

.login-form-container #form-close{
  position: absolute;
  top:2rem; right:3rem;
  font-size: 5rem;
  color:#fff;
  cursor: pointer;
}

#menu-bar{
  color:#fff;
  border:.1rem solid #fff;
  border-radius: .5rem;
  font-size: 3rem;
  padding:.5rem 1.2rem;
  cursor: pointer;
  display: none;
}

.home{
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-flow: column;
  position: relative;
  z-index: 0;
}

.home .content{
  text-align: center;
}

.home .content h3{
  font-size: 4.5rem;
  color:#fff;
  text-transform: uppercase;
  text-shadow: 0 .3rem .5rem rgba(0,0,0,.1);
}

.home .content p{
  font-size: 2.5rem;
  color:#fff;
  padding:.5rem 0;
}

.home .video-container video{
  position: absolute;
  top:0; left: 0;
  z-index: -1;
  height: 100%;
  width:100%;
  object-fit: cover;
}

.home .controls{
  padding:1rem;
  border-radius: 5rem;
  background:rgba(0,0,0,.7);
  position: relative;
  top:10rem;
}

.home .controls .vid-btn{
  height:2rem;
  width:2rem;
  display: inline-block;
  border-radius: 50%;
  background:#fff;
  cursor: pointer;
  margin:0 .5rem;
}

.home .controls .vid-btn.active{
  background:var(--orange);
}

.book .row{
  display: flex;
  flex-wrap: wrap;
  gap:1.5rem;
  align-items: center;
}

.book .row .image{
  flex:1 1 40rem;
}

.book .row .image img{
  width:100%;
}

.book .row form{
  flex:1 1 40rem;
  padding:2rem;
  box-shadow: 0 1rem 2rem rgba(0,0,0,.1);
  border-radius: .5rem;
}

.book .row form .inputBox{
  padding:.5rem 0;
}

.book .row form .inputBox input{
  width:100%;
  padding:1rem;
  border:.1rem solid rgba(0,0,0,.1);
  font-size: 1.7rem;
  color:#333;
  text-transform: none;
}

.book .row form .inputBox h3{
  font-size: 2rem;
  padding:1rem 0;
  color:#666;
}

.packages .box-container{
  display: flex;
  flex-wrap: wrap;
  gap:2rem;
}

.packages .box-container .box{
  flex:1 1 30rem;
  border-radius: .5rem;
  overflow: hidden;
  box-shadow: 0 1rem 2rem rgba(0,0,0,.1);
}

.packages .box-container .box img{
  height: 25rem;
  width:100%;
  object-fit: cover;
}

.packages .box-container .box .content{
  padding:2rem;
}

.packages .box-container .box .content h3{
  font-size:2rem;
  color:#333;
}

.packages .box-container .box .content h3 i{
  color:var(--orange);
}

.packages .box-container .box .content p{
  font-size:1.7rem;
  color:#666;
  padding:1rem 0;
}

.packages .box-container .box .content .stars i{
  font-size:1.7rem;
  color:var(--orange);
}

.packages .box-container .box .content .price{
  font-size: 2rem;
  color:#333;
  padding-top: 1rem;
}

.packages .box-container .box .content .price span{
  color:#666;
  font-size: 1.5rem;
  text-decoration: line-through;
}

.services .box-container{
  display: flex;
  flex-wrap: wrap;
  gap:1.5rem;
}

.services .box-container .box{
  flex: 1 1 30rem;
  border-radius: .5rem;
  padding:1rem;
  text-align: center;
}

.services .box-container .box i{
  padding:1rem;
  font-size: 5rem;
  color:var(--orange);
}

.services .box-container .box h3{
  font-size: 2.5rem;
  color:#333;
}

.services .box-container .box p{
  font-size: 1.5rem;
  color:#666;
  padding:1rem 0;
}

.services .box-container .box:hover{
  box-shadow: 0 1rem 2rem rgba(0,0,0,.1);
}

.gallery .box-container{
  display: flex;
  flex-wrap: wrap;
  gap:1.5rem;
}

.gallery .box-container .box{
  overflow: hidden;
  box-shadow: 0 1rem 2rem rgba(0,0,0,.1);
  border:1rem solid #fff;
  border-radius: .5rem;
  flex:1 1 30rem;
  height: 25rem;
  position: relative;
}

.gallery .box-container .box img{
  height: 100%;
  width:100%;
  object-fit: cover;
}

.gallery .box-container .box .content{
  position: absolute;
  top:-100%; left:0;
  height: 100%;
  width:100%;
  text-align: center;
  background:rgba(0,0,0,.7);
  padding:2rem;
  padding-top: 5rem;
}

.gallery .box-container .box:hover .content{
  top:0;
}

.gallery .box-container .box .content h3{
  font-size: 2.5rem;
  color:var(--orange);
}

.gallery .box-container .box .content p{
  font-size: 1.5rem;
  color:#eee;
  padding:.5rem 0;
}

.review .review-slider{
  padding-bottom: 2rem;
}

.review .box{
  padding:2rem;
  text-align: center;
  box-shadow: 0 1rem 2rem rgba(0,0,0,.1);
  border-radius: .5rem;
}

.review .box img{
  height:13rem;
  width:13rem;
  border-radius: 50%;
  object-fit: cover;
  margin-bottom: 1rem;
}

.review .box h3{
  color:#333;
  font-size: 2.5rem;
}

.review .box p{
  color:#666;
  font-size: 1.5rem;
  padding:1rem 0;
}

.review .box .stars i{
  color:var(--orange);
  font-size: 1.7rem;
}

.contact .row{
  display: flex;
  flex-wrap: wrap;
  gap:1.5rem;
  align-items: center;
}

.contact .row .image{
  flex:1 1 35rem;
}

.contact .row .image img{
  width:100%;
}

.contact .row form{
  flex:1 1 50rem;
  padding:2rem;
  box-shadow: 0 1rem 2rem rgba(0,0,0,.1);
  border-radius: .5rem;
}

.contact .row form .inputBox{
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}

.contact .row form .inputBox input, .contact .row form textarea{
  width:49%;
  margin:1rem 0;
  padding:1rem;
  font-size: 1.7rem;
  color:#333;
  background:#f7f7f7;
  text-transform: none;
}

.contact .row form textarea{
  height: 15rem;
  resize: none;
  width:100%;
}

.brand-container{
  text-align: center;
}

.footer{
  background:#333;
}

.footer .box-container{
  display: flex;
  flex-wrap: wrap;
  gap:1.5rem;
}

.footer .box-container .box{
  padding:1rem 0;
  flex:1 1 25rem;
}

.footer .box-container .box h3{
  font-size: 2.5rem;
  padding:.7rem 0;
  color:#fff;
}

.footer .box-container .box p{
  font-size: 1.5rem;
  padding:.7rem 0;
  color:#eee;
}

.footer .box-container .box a{
  display: block;
  font-size: 1.5rem;
  padding:.7rem 0;
  color:#eee;
}

.footer .box-container .box a:hover{
  color:var(--orange);
  text-decoration: underline;
}

.footer .credit{
  text-align: center;
  padding:2rem 1rem;
  margin-top: 1rem;
  font-size: 2rem;
  font-weight: normal;
  color:#fff;
  border-top: .1rem solid rgba(255,255,255,.2);
}

.footer .credit span{
  color:var(--orange);
}
















/* media queries  */

@media (max-width:1200px){

  html{
    font-size: 55%;
  }

}

@media (max-width:991px){

  header{
    padding:2rem;
  }

  section{
    padding:2rem;
  }

}

@media (max-width:768px){

  #menu-bar{
    display: initial;
  }

  header .navbar{
    position: absolute;
    top:100%; right:0; left: 0;
    background: #333;
    border-top: .1rem solid rgba(255,255,255,.2);
    padding:1rem 2rem;
    clip-path: polygon(0 0, 100% 0, 100% 0, 0 0);
  }

  header .navbar.active{
    clip-path: polygon(0 0, 100% 0, 100% 100%, 0 100%);
  }

  header .navbar a{
    display: block;
    border-radius: .5rem;
    padding:1.5rem;
    margin:1.5rem 0;    
    background:#222;
  }

}

@media (max-width:450px){

  html{
    font-size: 50%;
  }

  .heading span{
    font-size: 2.5rem;
  }

  .contact .row form .inputBox input{
    width:100%;
  }

}
</style>
