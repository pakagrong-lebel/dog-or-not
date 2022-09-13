const dogImagesURL = "https://static-assets.codecademy.com/blog/dog-or-not/dog/";
const notImagesURL = "https://static-assets.codecademy.com/blog/dog-or-not/not/"

const imgLength = 12;

let checked = false;

function displayAnswer(){
  if(!checked){
    if(this.id === 'dog'){
      document.getElementById('correct').style.display = 'block';
    }else{
      document.getElementById('incorrect').style.display = 'block';
    }

    document.getElementById('dog').parentNode.style.border = 'solid green 5px';
    document.getElementById('replay').style.display = 'block'; 

    checked = true;
  }
}

function selectImages(){
  let randomIndex = Math.floor(Math.random() * imgLength);
  let dogImage = document.createElement('img');
  dogImage.src = dogImagesURL + randomIndex + ".png";
  dogImage.id = 'dog';
  dogImage.addEventListener('click', displayAnswer);

  let breadImage = document.createElement('img');
  breadImage.src = notImagesURL + randomIndex + ".png";
  breadImage.id = 'bread';
  breadImage.addEventListener('click', displayAnswer);

  let randomNum = Math.random();

  if(randomNum > 0.5){
    document.getElementById('leftImage').append(dogImage);
    document.getElementById('rightImage').append(breadImage);
  }else{
    document.getElementById('leftImage').append(breadImage);
    document.getElementById('rightImage').append(dogImage);
  }
}

function replaceImages(){
  document.getElementById('correct').style.display = 'none';
  document.getElementById('incorrect').style.display = 'none';
  document.getElementById('replay').style.display = 'none'; 

  document.getElementById('dog').parentNode.style.border = null;

  checked = false;

  let leftImage = document.getElementById('leftImage').children[0];
  let rightImage = document.getElementById('rightImage').children[0];

  let randomNum = Math.random();
  let randomIndex = Math.floor(Math.random() * imgLength);

  if(randomNum > 0.5){
    leftImage.src = dogImagesURL + randomIndex + ".png";
    leftImage.id = 'dog';
    rightImage.src = notImagesURL + randomIndex + ".png";
    rightImage.id = 'bread';
  }else{
    leftImage.src = notImagesURL + randomIndex + ".png";
    leftImage.id = 'bread';
    rightImage.src = dogImagesURL + randomIndex + ".png";
    rightImage.id = 'dog';
  }
}

document.getElementById('replay').addEventListener('click', replaceImages);

selectImages();
