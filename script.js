var back_button = document.getElementById("back-button");
var forward_button = document.getElementById("forward-button");
var image_in_gallery = document.getElementById("gallery_image");

function changeImage(index){
	image_in_gallery.src = image_src_array[index][0];
}
function changeImageSource(index){
	var image_source = document.getElementById("image_source");
	image_source.textContent = image_src_array[index][1];
}
var image_src_array = [
["https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSe0rT1Aic9Adp4XzgL4m5ncKqB8ZxquTG99w&usqp=CAU", "ZDROJ1"], 
["https://literariness.org/wp-content/uploads/2018/03/louis-hjemslev580.jpg", "ZDROJ2"],
["https://equivalentexchange.files.wordpress.com/2010/05/hjelmslev_table1.jpg","ZDROJ3"],
["https://linguistica4u.files.wordpress.com/2015/10/sfclassicshjelmslev1.jpg?w=640","ZDROJ4"]
];

var commentary_box = document.getElementById("commentary");

var commentary_array = ["1Lorem ipsum dolor sit amet, consectetur adipisici elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquid ex ea commodi consequat. Quis aute iure reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint obcaecat cupiditat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
"2Lorem ipsum dolor sit amet, consectetur adipisici elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquid ex ea commodi consequat. Quis aute iure reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint obcaecat cupiditat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
"3Lorem ipsum dolor sit amet, consectetur adipisici elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquid ex ea commodi consequat. Quis aute iure reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint obcaecat cupiditat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
"4Lorem ipsum dolor sit amet, consectetur adipisici elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquid ex ea commodi consequat. Quis aute iure reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint obcaecat cupiditat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."]

function changeCommentary(index){
	commentary_box.textContent = commentary_array[index];
}

var index = 0;


forward_button.addEventListener("click",function(){
	index ++;
	index = index % (image_src_array.length);
	changeCommentary(index);
	changeImage(index);
	changeImageSource(index);
	
})

back_button.addEventListener("click",function(){
	index = index % (image_src_array.length);
	if (index > 0){
		index --;
		changeCommentary(index);
		changeImage(index);
		changeImageSource(index);}
		
})







