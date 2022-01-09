// Connect Animation
let links = document.querySelectorAll("nav a")
const connectLink = document.querySelector("[href='#connection']")
const connectPage = document.querySelector(".connect")
const pageContent = document.querySelector(".page-content")

links.forEach(element =>{
  element.addEventListener('click', function(){
    links.forEach(element => element.classList.remove("active"))
    this.classList.add("active")
    if(connectLink.getAttribute('class') === "active"){
      pageContent.classList.add('inactive')
      connectPage.classList.add('show')
    }
    else if(connectLink.getAttribute('class') !== "active"){
      pageContent.classList.remove('inactive')
      connectPage.classList.remove('show')
    }
  })
})
// Connect Animation
const language = document.querySelector(".language")
const langList = document.querySelector(".language ul")
language.onclick = function(){
  langList.style.display = "inline-block"
}

// Header
const languageIcon = document.querySelector(".language a")
const formerLink = document.querySelector("[href='#former']")
const registerLink = document.querySelector("[href='#register']")
// Landing
const landingPar = document.querySelector(".landing p")
// Former
const formerPar = document.querySelector(".description p")
// Register
const registerFullName = document.querySelector("[for = full-name]")
const formPassword = document.querySelector("[for = password]")
const phoneNumber = document.querySelector("[for = phone-number]")
const specialty = document.querySelector("[for = specialty-input]")
const IDNumber = document.querySelector("[for = id-number]")
let levelOptions = document.querySelectorAll("#level option")
let frenchOptions = ["Niveau d'etude", "Licence 1", "Licence 2", "Licence 3", "Master 1", "Master 2", "Doctorant(e)"]
let englishOptions =["Educational Level", "Licence 1", "Licence 2", "Licence 3", "Master 1", "Master 2", "Doctoral Student"]
const studentTrue = document.querySelector("[for = student-true] b")
const studentFalse = document.querySelector("[for = student-false] b")
const membreTrue = document.querySelector("[for = membre-true] b")
const membreFalse = document.querySelector("[for = membre-false] b")
const registerBtn = document.querySelector("[form = inscription-form]")
//Certificate
const CertificateH = document.querySelector(".certificate h3")
const certificateInput = document.querySelector("[for = certificate-full-name]")
const certificateBtn = document.querySelector("[form = certificat-form]")
const firstNote = document.getElementById("first-note")
const secondNote = document.getElementById("second-note")
//Contact
const contactH = document.querySelector(".contact h3")
const contactName = document.querySelector("[for = contact-name]")
const contactBnt = document.querySelector("[form = contact-form] a")
//Main Heading
const formerHeading = document.querySelector("#former h2")
const registerHeading = document.querySelector("#register h2")
const contactHeading = document.querySelector(".contact h2")
//Sign In
const connectH = document.querySelector(".connect h3")
const connectMdp = document.querySelector("[for=connection-password]")
const connectBtn = document.querySelector(".connect button")


const frenchLang = document.getElementById("french")
const englishLang = document.getElementById("english")

frenchLang.onclick = ()=>{
  setLanguage("french")
}
englishLang.onclick = ()=>{
  setLanguage("english")
}

function setLanguage(getLanguage){
  if(getLanguage === "french"){
    // Header
    languageIcon.textContent = "FR"
    formerLink.textContent = "Formateur"
    registerLink.textContent = "Inscription"
    connectLink.textContent = "Connexion"
    // Landing
    landingPar.textContent = "Rejoignez la force de travail informatique croissante de demain. Découvrez le programme de la Cisco Networking Academy, la plate-forme d'apprentissage, l'assistance et la formation."
    //Former
    formerPar.textContent = "Nous avons le plaisir de vous présenter, notre partenaire et formateur: Mr. Bachir Bouiadjra Abderrazak, Un jeune talent algérien agé de 34 ans. Il occupe le poste de maître de conférence & chercheur au sein de université «Djilali Liabes» de sidi bel abbes, et il est en même temps auditeur réseaux & instructeur cisco au sein de établissement prive de formation professionnelle «ICT TOWERS» présent a Sidi Bel Abbes et récemment a Alger (exactement a Beb Ezzouar)"
    // Register
    registerFullName.textContent = "Nom et Prénom"
    formPassword.textContent = "Mot de passe"
    phoneNumber.textContent = "N° de Telephone"
    specialty.textContent = "Spécialité"
    IDNumber.textContent = "N° de la piece d'identité"
    for(let i = 0; i < levelOptions.length; i++){
      levelOptions[i] = frenchOptions[i]
    }
    studentTrue.textContent = "OUI"
    studentFalse.textContent = "NON"
    membreTrue.textContent = "OUI"
    membreFalse.textContent = "NON"
    registerBtn.textContent = "Envoyer"
    //Certificate
    CertificateH.textContent = "FORMULAIRE DE CERTIFICAT"
    certificateInput.textContent = "Entrez votre nom et prénom"
    certificateBtn.textContent = "Exemple de certificat"
    firstNote.textContent = "Le nom doit etre complet en majuscule"
    secondNote.textContent = "Première lettre de prénom en majuscule et le reste en minuscule"
    // Contact
    contactH.textContent = "Pour plus d'information, vous pouvez nous contactez"
    contactName.textContent = "NOM COMPLET"
    contactBnt.textContent = "Envoyer"
    //Connect
    connectH.textContent = "AVEZ VOUS UN COMPTE?"
    connectMdp.textContent = "MOT DE PASSE"
    connectBtn.textContent = "CONNEXION"
    //Main Heading
    formerHeading.textContent = "FORMATEUR"
    registerHeading.textContent = "INSCRIPTION"
    contactHeading.textContent = "NOUS CONTACTER"
  }
  
  else if(getLanguage === "english"){
    // Header
    languageIcon.textContent = "EN"
    formerLink.textContent = "Former"
    registerLink.textContent = "Register"
    connectLink.textContent = "Sign In"
    // Landing
    landingPar.textContent = "Join the growing IT workforce of tomorrow. Learn about the Cisco Networking Academy curriculum, learning platform, support & training."
    //Former
    formerPar.textContent = "We are glad to present you our partner and trainer: Mr. Bachir Bouiadjra Abderrazak, a young Algerian talent aged 34 years. He is a lecturer and researcher at the University \"Djilali Liabes\" of Sidi Bel Abbes, and at the same time he is a network auditor and cisco instructor at the private vocational training institution \"ICT TOWERS\" present in Sidi Bel Abbes and recently in Algiers (exactly in Beb Ezzouar)"
    // Register
    registerFullName.textContent = "First & Last Name"
    formPassword.textContent = "Password"
    phoneNumber.textContent = "Phone Number"
    specialty.textContent = "Specialty"
    IDNumber.textContent = "ID Number"
    for(let i = 0; i < levelOptions.length; i++){
      levelOptions[i].textContent = englishOptions[i]
    }
    membreTrue.textContent = "YES"
    membreFalse.textContent = "NO"
    studentTrue.textContent = "Yes"
    studentFalse.textContent = "No"
    registerBtn.textContent = "Submit"
    //Certificate
    CertificateH.textContent = "CERTIFICATE FORM"
    certificateInput.textContent = "Write your first and last name"
    certificateBtn.textContent = "certificate example"
    firstNote.textContent = "The first name must be fully capitalized"
    secondNote.textContent = "First letter of the last name in upper case and the rest in lower case"
    // Contact
    contactH.textContent = "For more information, you can contact us"
    contactName.textContent = "Full Name"
    contactBnt.textContent = "Submit"
    //Main Heading
    formerHeading.textContent = "FORMER"
    registerHeading.textContent = "REGISTER"
    contactHeading.textContent = "CONTACT US"
    //Connect
    connectH.textContent = "DO YOU HAVE AN ACCOUNT?"
    connectMdp.textContent = "PASSWORD"
    connectBtn.textContent = "Sign In"
  }
}
