function musician_silhouette_randomizer() {
	
	images = new Array(5);  
	  
	images[0] = "<img src='img/rock-band.png' alt='Rock band silhouette'>";  
	  
	images[1] = "<img src='img/jazz-band.png' alt='Jazz band silhouette'>";  
	  
	images[2] = "<img src='img/bluegrass-band.png' alt='Bluegrass band silhouette'>";  
	  
	images[3] = "<img src='img/hip-hop-duo.png' alt='Hip-hop duo silhouette'>";  
	  
	images[4] = "<img src='img/dj-with-crowd.png' alt='Silhouette of DJ with crowd'>";  
	  
	index = Math.floor(Math.random() * images.length);  
  
	document.write(images[index]);  

}