var currentPhotoIndex = 0;

function show_opinions() {
    var popUpContainer = document.getElementsByClassName("popup-container")[0];
    popUpContainer.classList.add("active");
  }

function popup_close() {
    var popUpContainer = document.getElementsByClassName("popup-container")[0];
    popUpContainer.classList.remove("active");
    var popUpContainer = document.getElementsByClassName("popup-container")[1];
    popUpContainer.classList.remove("active");
    var popUpContainer = document.getElementsByClassName("afis-container")[0];
    popUpContainer.classList.remove("active")
    currentPhotoIndex = 0;
    console.log("afis kapandi")
}

function show_stories() {
    currentPhotoIndex = 0;
    var popUpContainer = document.getElementsByClassName("popup-container")[1];
    popUpContainer.classList.add("active");
  }

function goRight() {
    currentPhotoIndex +=1;
    if (currentPhotoIndex === 13)
    {
        currentPhotoIndex = 0;
    }
    console.log("current photo index:",currentPhotoIndex)
    changeCharacter()
}

function goLeft() {
    currentPhotoIndex -=1;
    if  (currentPhotoIndex === -1)
    {
        currentPhotoIndex = 12;
    }

    console.log("current photo index:",currentPhotoIndex)
    changeCharacter()
}



function chooseImgToShow() {
    var characterImage = document.getElementById("character");
    if (currentPhotoIndex === 0)
        characterImage.src = "karakterler/karakter" + String(currentPhotoIndex) + ".PNG"
    else
        characterImage.src = "karakterler/karakter" + String(currentPhotoIndex) + ".PNG"
    characterImage.alt = String(currentPhotoIndex) + ". karakter"
}

function changeHref() {
    var characterChangeBtn = document.getElementById("character-btn")
    characterChangeBtn.href = "/yazilar/hikayeler/hikaye" + String(currentPhotoIndex) + ".html"
    console.log(characterChangeBtn.href)
}
function changeStoryName() {
    var storyName = document.getElementById("story-name")
    document.getElementById("story-row").innerHTML = String(currentPhotoIndex + 1) + ". HİKAYE"
    var newStoryName = "test"
    if (currentPhotoIndex === 0) {
        newStoryName = "Dirse Han Oğlu Boğaç Han Destanı" ;
    }   
    else if (currentPhotoIndex === 1)   {
        newStoryName = "Salur Kazan'ın Evi Yağmalanması  Destanı"
    }
    else if (currentPhotoIndex === 2) {
        newStoryName = "Kam Büre Bey Oğlu Bamsı Beyrek  Destanı" 
    }
    else if (currentPhotoIndex === 3 ){
        newStoryName = "Kazan Bey Oğlu Uruz'un Esir Olduğu Destan"  
    }      
    else if (currentPhotoIndex === 4) {
        newStoryName = "Duha Koca Oğlu Deli Dumrul  Destanı"  
    }       
    else if (currentPhotoIndex === 5) {
        newStoryName = "Kanglı Koca Oğlu Kan Turalı  Destanı" 
    }        
    else if (currentPhotoIndex === 6 ){
        newStoryName = "Kazılık Koca Oğlu Yigenek  Destanı" 
    }       
    else if (currentPhotoIndex === 7) {
        newStoryName = "Basat'ın Tepegöz'ü Öldürdüğü  Destan" 
    }         
    else if (currentPhotoIndex === 8) {
        newStoryName = "Begil Oğlu Emren  Destanı"

    }          
    else if (currentPhotoIndex === 9) {
        newStoryName = "Uşun Koca Oğlu Segrek  Destanı"
    }        
    else if (currentPhotoIndex === 10) {
        newStoryName = "Salur Kazanın Esir Olup Oğlu Uruz'un Çıkardığı Destan"
    }           
    else if (currentPhotoIndex === 11) {
        newStoryName = "İç Oğuz'a Taş Oğuz Asi Olup Beyrek Öldüğü Destan"
    }      
    else if (currentPhotoIndex === 12 ) {
    newStoryName = "Salur Kazan’ın Yedi Başlı Ejderhayı Öldürmesi  Destanı"
    }     
    
    storyName.innerHTML = '"' + newStoryName + '"'
    console.log(newStoryName)
}
function changeCharacter() {
    chooseImgToShow()
    changeHref()
    changeStoryName()
}
