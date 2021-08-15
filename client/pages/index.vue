<template lang="">
<div >
 
    
 

 

<!-- home section starts  -->

<section class="home" id="home">

    <div class="content">
        <h3>l'aventure en vaut la peine</h3>
        <p>découvrez de nouveaux endroits avec nous, l'aventure vous attend</p>
        <a href="#" class="btn">découvrir plus</a>
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
        <span>r</span>
        <span>é</span>
        <span>s</span>
        <span>e</span>
        <span>r</span>
        <span>v</span>
        <span>e</span>
        <span>r</span>
        <span class="space"></span>
        <span>m</span>
        <span>a</span>
        <span>i</span>
        <span>n</span>
        <span>t</span>
        <span>e</span>
        <span>n</span>
        <span>a</span>
        <span>n</span>
        <span>t</span>
    </h1>

    <div class="row">

        <div class="image">
            <img src="~/assets/images/book-img.svg" alt="">
        </div>

        <form action="">
            <div class="inputBox">
                <h3>Où</h3>
                <input type="text" placeholder="place name">
            </div>
            <div class="inputBox">
                <h3>Combien</h3>
                <input type="number" placeholder="number of guests">
            </div>
            <div class="inputBox">
                <h3>Arrivée</h3>
                <input type="date">
            </div>
            <div class="inputBox">
                <h3>Départ</h3>
                <input type="date">
            </div>
            <input type="submit" class="btn" value="Reserver">
        </form>

    </div>

</section>

<!-- book section ends -->

<!-- packages section starts  -->

<section class="packages" id="packages">

    <h1 class="heading">
        <span>h</span>
        <span>b</span>
        <span>i</span>
        <span>t</span>
        <span>a</span>
        <span>t</span>
        <span>s</span>
    </h1>

    <div class="box-container">
        <base-habitat v-for="(habitat, index) in habitats" :key="habitat._id" :habitat ="habitat" />

    

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




        // var self = this;

        // self.navbar = document.getElementById("navbar");
        // self.cadre = document.getElementById("cadre");
        // self.second_menu =  document.getElementById("second_menu");

        // this.sticky = self.navbar.offsetTop;

        // window.onscroll = function () {
        //     self.documentIsCrolled();
        // };

        this.gethabitats().then(response => {
            this.habitats = response;
        })
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
               return await this.$axios.$get("/habitats/findAllBy/status/2");
               
            } catch (error) {
                console.log(error);
                return []
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
 


</style>
