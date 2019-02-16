const lista_filmow = [
  'Władca much (1990)',
  'Władca Pierścieni (1978)',
  'Milczenie owiec (1991)',
  'Moja dziewczyna (1991)',
  'Dziewczyna z tatuażem (2011)',
  'Jestem Bogiem (2011)',
  'Jestem legendą (2007)',
  'Matrix (1999)',
  'Zielona mila (1999)',
  '8 Mila (2002)',
  'Uciekająca panna młoda (1999)',
  'Gnijąca panna młoda (2005)',
  'Dzień świra (2002)',
  'Dzień Niepodległości (1996)',
  'Dzień świstaka (1993)',
  'Lista Schindlera (1993)',
  'Czarna lista Hollywood (1991)',
  'Lista klientów (2012)',
  'Teraz albo nigdy (2018)',
  'Niech będzie teraz (2012)',
  'Zabójcze maszyny (2018)',
  'Zabójcza broń (1987)',
  'Znaki (2002)',
  'Znaki na drodze (1969)',
  'Wodne znaki (2013)',
  'Znaki dymne (1998)',
  'Jeden dzień (2011)',
  'Dzień próby (2001)',
  'Dzień z życia blondynki (2014)',
  'Panna Nikt (1996)',
  'Panna Meadows (2014)',
  'Panna Nikt (2010)',
  'Panna Julia (1951)'
]

function clear(){
    document.getElementById("film").innerHTML = "";    
}

//Zadanie 1
function load(filtr){
var wyswietl_kafelek = document.getElementById("film")
wyswietl_kafelek.innerHTML = '';
lf=lista_filmow.length;
var licznik=1;
for(let i=0; i<lf;i++){
  if (!lista_filmow[i].toUpperCase().includes(filtr))
    continue;
  if (licznik%2==0){
    var kafelek = document.createElement("p")
    var value = document.createTextNode(lista_filmow[i])
    kafelek.appendChild(value)
    kafelek.setAttribute("class","inne_tlo")
    wyswietl_kafelek.appendChild(kafelek)
    licznik++
  }
  else{
    var kafelek = document.createElement("p")
    var value = document.createTextNode(lista_filmow[i])
    kafelek.appendChild(value)
    wyswietl_kafelek.appendChild(kafelek)
    licznik++     
  }
}
}
load("");
//Zadanie 2
function listafilmow(){
document.getElementById("liczba_filmow").innerHTML="Liczba wyświetlonych filmów: "+document.getElementsByTagName("p").length+"</br></br></br>"
}
listafilmow();
//Zadanie 3
const chmura=[]
for (i=0; i<lista_filmow.length;i++){
    var text = lista_filmow[i]
    const slowa = text.split(" ")
    for (j=0; j<slowa.length;j++){
      var e=slowa[j]
      var d=e.toUpperCase()
      chmura.push(d)
    }
}
console.log("Chmura: "+chmura)
console.log("Długość chmury: "+chmura.length)
var tab_sort = chmura.sort()
console.log("Tablica posortowana: "+tab_sort)

//Tworzenie tablicy tagów
var dodaj_tab = document.createElement("table")
var value = document.createTextNode("Chmura tagów: ")
dodaj_tab.appendChild(value)
var dorzuc = document.getElementById("chmura")
dorzuc.appendChild(dodaj_tab)
var dodaj_wiersz = document.createElement("tr")
var value = document.createTextNode("")
dodaj_wiersz.appendChild(value)
var dorzuc = document.getElementById("chmura")
dorzuc.appendChild(dodaj_wiersz)


for(i=0; i<tab_sort.length;i++){
  var licznik=0
  var sprawdzane_slowo = tab_sort[i]
  console.log("Sprawdzane słowo: "+sprawdzane_slowo)

  for(j=0;j<tab_sort.length;j++){
    if(sprawdzane_slowo==tab_sort[j]){
      licznik++
    }
  }
  console.log("Licznik dla "+ sprawdzane_slowo+": " +licznik)
  if (tab_sort[i]!=tab_sort[i+1]){
    var dodaj_kolumne = document.createElement("td")
    var tag_link = document.createElement("a")
    dodaj_kolumne.appendChild(tag_link)
    tag_link.addEventListener('click', function() {
      load(this.innerText);
      listafilmow();
    });

    var value = document.createTextNode(sprawdzane_slowo)
    tag_link.appendChild(value)
    var dorzuc = document.getElementById("chmura")
    dorzuc.appendChild(dodaj_kolumne)
    console.log(dodaj_kolumne)   
    if(licznik==1){
      dodaj_kolumne.style.fontSize="8px";
    }
    else if(licznik>=2 && licznik<5){
      dodaj_kolumne.style.fontSize="12px";
  
    }
    else if (licznik>5){
      dodaj_kolumne.style.fontSize="20px";
    }
  }
}

//Zadanie 5

const btn = document.getElementById("wlacznik");
var on = false;
btn.addEventListener("click", function() {
  var kafelek_zmiana = document.getElementsByTagName("p")
  if(on==false){  
    this.style.backgroundColor = "yellow";
    this.style.color="black";
    on=true
    console.log("ON:" +on)
    for(i=0;i<kafelek_zmiana.length;i++){
      kafelek_zmiana[i].style.background = "yellow";
      kafelek_zmiana[i].style.color = "black";
    }
  }
  else if(on==true){
    this.style.backgroundColor= "black";
    this.style.color="white";
    on=false
    console.log("ON:" +on)
    for(i=0;i<kafelek_zmiana.length;i++){
      if(i%2==0){
        kafelek_zmiana[i].style.background = "lightgray";
      }
      else{
        kafelek_zmiana[i].style.background = "grey";
      } 
   }
  } 
});


//Zadanie 6
function Dodaj(){    
  var tytul=document.getElementById("tytul");
  console.log("Tytuł: "+tytul.value)
  var rok=document.getElementById("rok");
  console.log("Rok: "+rok.value)
  if (!tytul.value){
    alert("Nie wprowadzono tytułu filmu!")
  }
  else if(!rok.value){
    alert("Nie wprowadzono roku produkcji!")
  }
  else if(isNaN(rok.value)){
    alert("Wisany rocznik nie jest liczbą!")
  }
  else{
  lista_filmow.push(document.getElementById("tytul").value+" ("+document.getElementById("rok").value+")");
  clear();
  load();
  listafilmow();
  alert("Wprowadzony film zostanie dopisany do listy filmów.")  
}
}
