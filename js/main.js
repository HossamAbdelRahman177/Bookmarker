var siteNameInput = document.getElementById("siteName")
var siteUrlInput = document.getElementById("SiteURL")
var searchSiteInput = document.getElementById("searchSite")
var addBtn = document.getElementById("addBtn")
var updateBtn = document.getElementById("updateBtn")
var indexUpdate=0;


var siteList = []
if (localStorage.getItem('Sites') != null) {
    siteList = JSON.parse(localStorage.getItem('Sites'))
    showData()
}
function addsiteList() {
    var Site = {
        site: siteNameInput.value,
        url: siteUrlInput.value
    }
    siteList.push(Site)
    localStorage.setItem('Sites', JSON.stringify(siteList))
    showData()
    clearForm()
}
function showData() {
    var temp = ''
    for (var i = 1; i < siteList.length; i++) {
        temp += `<tr>
        <td>`+ i + ` </td>
        <td>`+ siteList[i].site + ` </td>
        <td>
        <button class="btn btn-visit" onclick="visitWebsite(`+i+`)">
        <i class="fa-solid fa-eye fa-beat-fade pe-2"></i>Visit
      </button>
      </td>
        <td><button onclick="deleteRow()" class="btn btn-danger">Delete</button></td>
        <td>  <button class="btn btn-primary btn-sm p-2" onclick="setData(${i})"  >Update</button></td>
      </tr>`
    }
    document.getElementById('myData').innerHTML = temp
    clearForm()
}
function deleteRow(index) {
    siteList.splice(index, 1)
    localStorage.setItem('Sites', JSON.stringify(siteList))
    showData()
}
function clearForm() {
    siteNameInput.value = "",
        siteUrlInput.value = ""
}
function searchsiteName() {
    var searchVal = searchSiteInput.value
    var res = ''
    for (var i = 1; i < siteList.length; i++) {
        if (siteList[i].site.toLowerCase().includes(searchVal) == true) {
            res += `<tr>
            <td>`+ i + ` </td>
            <td>`+ siteList[i].site + ` </td>
            <td><button class="btn btn-visit">Visit</button></td>
            <td><button onclick="deleteRow()" class="btn btn-danger">Delete</button></td>
          </tr>`
        }
    }
    document.getElementById('myData').innerHTML = res
 
}
function updatForm(){
    d-inline
   submitSiteInput.classList.replace('d-inline','d-none')
   updateSiteInput.classList.replace('d-none','d-inline')


}
///validaiton
siteNameInput.addEventListener('change',function(){
    var validName= /^[a-zA-Z ]{2,30}$/;
    if(validName.test(siteNameInput.value)==true){
        siteNameInput.classList.add('is-valid')
        siteNameInput.classList.remove('is-invalid')
    }
    else{
        siteNameInput.classList.add('is-invalid') 
        siteNameInput.classList.remove('is-valid') 
    }
}) 
searchSiteInput.addEventListener('change',function(){
    var validSearch= /^[a-zA-Z ]{2,30}$/;
    if(validSearch.test(searchSiteInput.value)==true){
        searchSiteInput.classList.add('is-valid')
        searchSiteInput.classList.remove('is-invalid')
    }
    else{
        searchSiteInput.classList.add('is-invalid') 
        searchSiteInput.classList.remove('is-valid') 
    }
}) 
siteUrlInput.addEventListener('change',function(){
    var validUrl= /^((ftp|http|https):\/\/)?www\.([A-z]+)\.([A-z]{2,})/
    if(validUrl.test(siteUrlInput.value)==true){
        siteUrlInput.classList.add('is-valid')
        siteUrlInput.classList.remove('is-invalid')
    }
    else{
        siteUrlInput.classList.add('is-invalid') 
        siteUrlInput.classList.remove('is-valid') 
    }
}) 


function visitWebsite(vistedWebsite) {
    var httpsRegex = /^https?:\/\//;
    if (httpsRegex.test(siteList[vistedWebsite].url)) {
      open(siteList[vistedWebsite].url);
    } else {
      open(`https://${s[vistedWebsite].url}`);
    }
}

function addSite() {
    if( 
        siteNameInput.value == "" ||
         siteUrlInput.value == ""
     )
    {
            alert("Please make Sure you did fill up all fields");

    }
}
    
   








function setData(index) {
    indexUpdate = index;
    var curen = siteList[index];
     siteNameInput.value= curen.site;
     siteUrlInput.value= curen.url;
    updateBtn.classList.remove("d-none");
    addBtn.classList.add("d-none");
 }



function updateSite() {
    var site= {
      site:siteNameInput.value,
      url:siteUrlInput.value
    };
   siteList.splice(indexUpdate, 1, site);
 
    localStorage.setItem("Sites", JSON.stringify(siteList));
    showData();
 
    updateBtn.classList.add("d-none");
    addBtn.classList.remove("d-none");
 
    clearForm();
 }


