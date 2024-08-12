var i = 0;
var header_txt = 'Kari Vanessa McMahon';
var bio_txt = 'Journalist. Editor. Media Consultant.'
var speed = 60;

$( document ).ready(function() {
  console.log("Writing header....");
  typeWriterHeader(); 
});

function typeWriterHeader() {
  if (i < header_txt.length) {
    document.getElementById("introHeader").innerHTML += header_txt.charAt(i);
    i++;
    setTimeout(typeWriterHeader, speed);
  }
  else {
    i = 0;
    typeWriterBio();
  }
}

function typeWriterBio() {
  if (i < bio_txt.length) {
    document.getElementById("introBio").innerHTML += bio_txt.charAt(i);
    i++;
    setTimeout(typeWriterBio, 80);
  }
}
