<template>
    <div>
        <link href="https://fonts.googleapis.com/css2?family=Raleway:wght@400&display=swap" rel="stylesheet">

<div class="gallery">
	<div class="gallery__column">
		<a href="https://unsplash.com/@jeka_fe" target="_blank" class="gallery__link">
			<figure class="gallery__thumb">
				<img src="https://source.unsplash.com/_cvwXhGqG-o/300x300" alt="Portrait by Jessica Felicio" class="gallery__image">
				<figcaption class="gallery__caption">Portrait by Jessica Felicio</figcaption>
			</figure>
		</a>

		<a href="https://unsplash.com/@oladimeg" target="_blank" class="gallery__link">
			<figure class="gallery__thumb">
				<img src="https://source.unsplash.com/AHBvAIVqk64/300x500" alt="Portrait by Oladimeji Odunsi" class="gallery__image">
				<figcaption class="gallery__caption">Portrait by Oladimeji Odunsi</figcaption>
			</figure>
		</a>

	 
	</div>
	
	<div class="gallery__column">
		<a href="https://unsplash.com/@noahbuscher" target="_blank" class="gallery__link">
			<figure class="gallery__thumb">
				<img src="https://source.unsplash.com/AR7aumwKr2s/300x300" alt="Portrait by Noah Buscher" class="gallery__image">
				<figcaption class="gallery__caption">Portrait by Noah Buscher</figcaption>
			</figure>
		</a>
		
		<a href="https://unsplash.com/@von_co" target="_blank" class="gallery__link">
			<figure class="gallery__thumb">
				<img src="https://source.unsplash.com/dnL6ZIpht2s/300x300" alt="Portrait by Ivana Cajina" class="gallery__image">
				<figcaption class="gallery__caption">Portrait by Ivana Cajina</figcaption>
			</figure>
		</a>

	 
	</div>
	
	<div class="gallery__column">
		<a href="https://unsplash.com/@marilezhava" target="_blank" class="gallery__link">
			<figure class="gallery__thumb">
				<img src="https://source.unsplash.com/Xm9-vA_bhm0/300x500" alt="Portrait by Mari Lezhava" class="gallery__image">
				<figcaption class="gallery__caption">Portrait by Mari Lezhava</figcaption>
			</figure>
		</a>
		
		<a href="https://unsplash.com/@ethanhaddox" target="_blank" class="gallery__link">
			<figure class="gallery__thumb">
				<img src="https://source.unsplash.com/NTjSR3zYpsY/300x300" alt="Portrait by Ethan Haddox" class="gallery__image">
				<figcaption class="gallery__caption">Portrait by Ethan Haddox</figcaption>
			</figure>
		</a>
 
	</div>
 
</div>
    </div>
</template>
<script>
export default {
    
}
</script>

<style lang="scss" scoped>
.gallery {
	display: flex;
	padding: 2px;
	transition: .3s;
	
	&:hover &__image {
		filter: grayscale(1);
	}
	
	&__column {
		display: flex;
		flex-direction: column;
		width: 25%;
	}
	
	&__link {
		margin: 2px;
		overflow: hidden;
		
		&:hover {
			.gallery__image {
				filter: grayscale(0);
			}
			
			.gallery__caption {
				opacity: 1;
			}
		}
	}
	
	&__thumb {
		position: relative;
	}
	
	&__image {
		display: block;
		width: 100%;
		transition: .3s;
		
		&:hover {
			transform: scale(1.1);
		}
	}
	
	&__caption {
		position: absolute;
		bottom: 0;
		left: 0;
		padding: 25px 15px 15px;
		width: 100%;
		font-family: 'Raleway', sans-serif;
		font-size: 16px;
		color: white;
		opacity: 0;
		background: linear-gradient(0deg, rgba(0, 0, 0, .5) 0%, rgba(255, 255 ,255 , 0) 100%);
		transition: .3s;
	}
}

</style>