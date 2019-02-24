// UI Hooks
const parentOnet = document.getElementById('parent-onet');
const childOnet = document.getElementById('child-onet');
const occTitle = document.getElementById('occupation-title');

const clusters = document.querySelectorAll('.cluster');

const agr = document.getElementById('agr');
const arc = document.getElementById('arc');
const art = document.getElementById('art');
const bus = document.getElementById('bus');
const edu = document.getElementById('edu');
const fin = document.getElementById('fin');
const gov = document.getElementById('gov');
const hea = document.getElementById('hea');
const hos = document.getElementById('hos');
const hum = document.getElementById('hum');
const it = document.getElementById('it');
const la = document.getElementById('la');
const man = document.getElementById('man');
const mar = document.getElementById('mar');
const ste = document.getElementById('ste');
const tra = document.getElementById('tra');

const agrM = document.getElementById('agrM');
const arcM = document.getElementById('arcM');
const artM = document.getElementById('artM');
const busM = document.getElementById('busM');
const eduM = document.getElementById('eduM');
const finM = document.getElementById('finM');
const govM = document.getElementById('govM');
const heaM = document.getElementById('heaM');
const hosM = document.getElementById('hosM');
const humM = document.getElementById('humM');
const itM = document.getElementById('itM');
const laM = document.getElementById('laM');
const manM = document.getElementById('manM');
const marM = document.getElementById('marM');
const steM = document.getElementById('steM');
const traM = document.getElementById('traM');

// Array for current batch of videos being added
var videoBatch = [];

// Individual Arrays for each cluster
var agriculture = [];
var architecture = [];
var arts = [];
var business = [];
var education = [];
var finance = [];
var government = [];
var health = [];
var hospitality = [];
var human = [];
var information = [];
var law = [];
var manufacturing = [];
var marketing = [];
var stem = [];
var transportation = [];

// Array of individual arrays for each cluster
var videoClusters= [agriculture,architecture,arts,business,education,finance,government,health,hospitality,human,information,law,manufacturing,marketing,stem,transportation];





const add = document.getElementById('add');
const doneAdding = document.getElementById('clear-parent');
const createHtml = document.getElementById('create-html');
const newHtml = document.querySelector('.new-html');
var vidHtml = [];



clusters.forEach((cluster) => cluster.addEventListener('click', handleChange));


// EVENT LISTENERS
add.addEventListener('click', addVideo);
doneAdding.addEventListener('click', resetParent);
parentOnet.addEventListener('click', resetParent);

createHtml.addEventListener('click', createCode);


// FUNCTIONS    **acquiring data**
function handleChange() {
  this.classList.toggle('selected');
}

function resetChildTitle() {
  childOnet.value = '';
  occTitle.value = '';
}

function resetParent() {
  parentOnet.value = '';
}

// Loading data into arrays 
function addVideo() {
  let selected = document.querySelectorAll('.selected');
  selected.forEach((clstr) => {
    let newVideo = {onet: '', videocode: '', title: '', parent: '', cluster: '', html: ''};
    newVideo.cluster = clstr.id;
    newVideo.onet = childOnet.value;
    newVideo.videocode = newVideo.onet.replace('-','').replace('.','');
    newVideo.parent = parentOnet.value;
    newVideo.title = occTitle.value; 
    newVideo.html = '<p><a title="'+ newVideo.title +'" href="/videos/careeronestop-videos.aspx?videocode='+newVideo.videocode+'">'+newVideo.title+' - NEW!</a></p>';
    videoBatch.push(newVideo);
//    vidHtml.push(`<p><a title="${newVideo.title}" href="/videos/careeronestop-videos.aspx?videocode=${newVideo.videocode}">${newVideo.title} - NEW!</a></p>`);
    vidHtml.push(`{"${newVideo.title}" : "<p><a title="${newVideo.title}" href="/videos/careeronestop-videos.aspx?videocode=${newVideo.videocode}">${newVideo.title} - NEW!</a></p>"}`);
    loadToClusters(newVideo)
  });
  selected.forEach((clstr) => clstr.classList.toggle('selected'));  
  resetChildTitle();
}

// Load newVideo object into each associated cluster array
  /* NEXT STEPS 
     --> consolidate function(a,b) in cluser.sort()
     --> instead of agriculture.push(newVideo);  -->  db.collections('agriculture',function(err, collection) {collection.insert(newVideo);
  */
function loadToClusters(newVideo) {
  switch (newVideo.cluster.toLowerCase()) {
    case 'agriculture': agriculture.push(newVideo); agriculture.sort(function(a,b){let x = a.title.toLowerCase(); let y = b.title.toLowerCase(); if (x < y) {return -1;} if(x>y) {return 1;} return 0;}); break;  //instead of agriculture.push(newVideo); .. db.collections('agriculture',function(err, collection) {collection.insert(newVideo);
    case 'architecture': architecture.push(newVideo); architecture.sort(function(a,b){let x = a.title.toLowerCase(); let y = b.title.toLowerCase(); if (x < y) {return -1;} if(x>y) {return 1;} return 0;}); break;
    case 'arts': arts.push(newVideo); arts.sort(function(a,b){let x = a.title.toLowerCase(); let y = b.title.toLowerCase(); if (x < y) {return -1;} if(x>y) {return 1;} return 0;}); break;
    case 'business': business.push(newVideo); business.sort(function(a,b){let x = a.title.toLowerCase(); let y = b.title.toLowerCase(); if (x < y) {return -1;} if(x>y) {return 1;} return 0;}); break;
    case 'education': education.push(newVideo); education.sort(function(a,b){let x = a.title.toLowerCase(); let y = b.title.toLowerCase(); if (x < y) {return -1;} if(x>y) {return 1;} return 0;}); break;
    case 'finance': finance.push(newVideo); finance.sort(function(a,b){let x = a.title.toLowerCase(); let y = b.title.toLowerCase(); if (x < y) {return -1;} if(x>y) {return 1;} return 0;}); break;
    case 'government': government.push(newVideo); government.sort(function(a,b){let x = a.title.toLowerCase(); let y = b.title.toLowerCase(); if (x < y) {return -1;} if(x>y) {return 1;} return 0;}); break;
    case 'health': health.push(newVideo); health.sort(function(a,b){let x = a.title.toLowerCase(); let y = b.title.toLowerCase(); if (x < y) {return -1;} if(x>y) {return 1;} return 0;}); break;
    case 'hospitality': hospitality.push(newVideo); hospitality.sort(function(a,b){let x = a.title.toLowerCase(); let y = b.title.toLowerCase(); if (x < y) {return -1;} if(x>y) {return 1;} return 0;}); break;
    case 'human': human.push(newVideo); human.sort(function(a,b){let x = a.title.toLowerCase(); let y = b.title.toLowerCase(); if (x < y) {return -1;} if(x>y) {return 1;} return 0;}); break;
    case 'information': information.push(newVideo); information.sort(function(a,b){let x = a.title.toLowerCase(); let y = b.title.toLowerCase(); if (x < y) {return -1;} if(x>y) {return 1;} return 0;}); break;
    case 'law': law.push(newVideo); law.sort(function(a,b){let x = a.title.toLowerCase(); let y = b.title.toLowerCase(); if (x < y) {return -1;} if(x>y) {return 1;} return 0;}); break;
    case 'manufacturing': manufacturing.push(newVideo); manufacturing.sort(function(a,b){let x = a.title.toLowerCase(); let y = b.title.toLowerCase(); if (x < y) {return -1;} if(x>y) {return 1;} return 0;}); break;
    case 'marketing': marketing.push(newVideo); marketing.sort(function(a,b){let x = a.title.toLowerCase(); let y = b.title.toLowerCase(); if (x < y) {return -1;} if(x>y) {return 1;} return 0;}); break;
    case 'stem': stem.push(newVideo); stem.sort(function(a,b){let x = a.title.toLowerCase(); let y = b.title.toLowerCase(); if (x < y) {return -1;} if(x>y) {return 1;} return 0;}); break;
    case 'transportation':transportation.push(newVideo); transportation.sort(function(a,b){let x = a.title.toLowerCase(); let y = b.title.toLowerCase(); if (x < y) {return -1;} if(x>y) {return 1;} return 0;}); break;
  } 
};

//Creating HTML for each video listed in CareerOneStop's NEW and MAIN video pages.  Then loading into arrays for later use.
function createCode() {
  agriculture.forEach((video) => {
    let p = document.createElement('p');
    p.textContent = video.html;
    agr.appendChild(p);
    agrNew.push(video.html); 
    agrMain.push(video.html);  
  }); 
  
  architecture.forEach((video) => {
    let p = document.createElement('p');
    p.textContent = video.html;
    arc.appendChild(p); 
    arcNew.push(video.html);  
    arcMain.push(video.html);  
  }); 
  
  arts.forEach((video) => {
    let p = document.createElement('p');
    p.textContent = video.html;
    art.appendChild(p);      
    artNew.push(video.html);  
    artMain.push(video.html);  
  }); 
  
  business.forEach((video) => {
    let p = document.createElement('p');
    p.textContent = video.html;
    bus.appendChild(p);  
    busNew.push(video.html);  
    busMain.push(video.html);  
  }); 
  
  education.forEach((video) => {
    let p = document.createElement('p');
    p.textContent = video.html;
    edu.appendChild(p);  
    eduNew.push(video.html);  
    eduMain.push(video.html);  
  });
  
  finance.forEach((video) => {
    let p = document.createElement('p');
    p.textContent = video.html;
    fin.appendChild(p); 
    finNew.push(video.html);  
    finMain.push(video.html);  
  });  

  government.forEach((video) => {
    let p = document.createElement('p');
    p.textContent = video.html;
    gov.appendChild(p);  
    govNew.push(video.html);  
    govMain.push(video.html);  
  });  
  
  health.forEach((video) => {
    let p = document.createElement('p');
    p.textContent = video.html;
    hea.appendChild(p); 
    heaNew.push(video.html);  
    heaMain.push(video.html);  
  });  
  
  hospitality.forEach((video) => {
    let p = document.createElement('p');
    p.textContent = video.html;
    hos.appendChild(p); 
    hosNew.push(video.html);  
    hosMain.push(video.html);  
  }); 
  
  human.forEach((video) => {
    let p = document.createElement('p');
    p.textContent = video.html;
    hum.appendChild(p); 
    humNew.push(video.html);  
    humMain.push(video.html);  
  });  

  information.forEach((video) => {
    let p = document.createElement('p');
    p.textContent = video.html;
    it.appendChild(p); 
    itNew.push(video.html);  
    itMain.push(video.html);  
  });  

  law.forEach((video) => {
    let p = document.createElement('p');
    p.textContent = video.html;
    la.appendChild(p); 
    laNew.push(video.html);  
    laMain.push(video.html);  
  });  
  
  manufacturing.forEach((video) => {
    let p = document.createElement('p');
    p.textContent = video.html;
    man.appendChild(p); 
    manNew.push(video.html);  
    manMain.push(video.html); 
  });  
  
  marketing.forEach((video) => {
    let p = document.createElement('p');
    p.textContent = video.html;
    mar.appendChild(p); 
    marNew.push(video.html);  
    marMain.push(video.html);  
  }); 
  
  stem.forEach((video) => {
    let p = document.createElement('p');
    p.textContent = video.html;
    ste.appendChild(p); 
    steNew.push(video.html);  
    steMain.push(video.html);  
  }); 
  
  transportation.forEach((video) => {
    let p = document.createElement('p');
    p.textContent = video.html;
    tra.appendChild(p); 
    traNew.push(video.html);  
    traMain.push(video.html);  
  }); 

  //Alpha sorting video HTML in each cluster array to display on COS NEW and MAIN video pages.
  agrNew.sort(function(a,b){let x = a.toLowerCase(); let y = b.toLowerCase(); if (x < y) {return -1;} if(x>y) {return 1;} return 0;});
  agrMain.sort(function(a,b){let x = a.toLowerCase(); let y = b.toLowerCase(); if (x < y) {return -1;} if(x>y) {return 1;} return 0;});
  arcNew.sort(function(a,b){let x = a.toLowerCase(); let y = b.toLowerCase(); if (x < y) {return -1;} if(x>y) {return 1;} return 0;});
  arcMain.sort(function(a,b){let x = a.toLowerCase(); let y = b.toLowerCase(); if (x < y) {return -1;} if(x>y) {return 1;} return 0;});
  artNew.sort(function(a,b){let x = a.toLowerCase(); let y = b.toLowerCase(); if (x < y) {return -1;} if(x>y) {return 1;} return 0;});
  artMain.sort(function(a,b){let x = a.toLowerCase(); let y = b.toLowerCase(); if (x < y) {return -1;} if(x>y) {return 1;} return 0;});
  busNew.sort(function(a,b){let x = a.toLowerCase(); let y = b.toLowerCase(); if (x < y) {return -1;} if(x>y) {return 1;} return 0;});
  busMain.sort(function(a,b){let x = a.toLowerCase(); let y = b.toLowerCase(); if (x < y) {return -1;} if(x>y) {return 1;} return 0;});
  eduNew.sort(function(a,b){let x = a.toLowerCase(); let y = b.toLowerCase(); if (x < y) {return -1;} if(x>y) {return 1;} return 0;});
  eduMain.sort(function(a,b){let x = a.toLowerCase(); let y = b.toLowerCase(); if (x < y) {return -1;} if(x>y) {return 1;} return 0;});
  finNew.sort(function(a,b){let x = a.toLowerCase(); let y = b.toLowerCase(); if (x < y) {return -1;} if(x>y) {return 1;} return 0;});
  finMain.sort(function(a,b){let x = a.toLowerCase(); let y = b.toLowerCase(); if (x < y) {return -1;} if(x>y) {return 1;} return 0;});
  govNew.sort(function(a,b){let x = a.toLowerCase(); let y = b.toLowerCase(); if (x < y) {return -1;} if(x>y) {return 1;} return 0;});
  govMain.sort(function(a,b){let x = a.toLowerCase(); let y = b.toLowerCase(); if (x < y) {return -1;} if(x>y) {return 1;} return 0;});
  heaNew.sort(function(a,b){let x = a.toLowerCase(); let y = b.toLowerCase(); if (x < y) {return -1;} if(x>y) {return 1;} return 0;});
  heaMain.sort(function(a,b){let x = a.toLowerCase(); let y = b.toLowerCase(); if (x < y) {return -1;} if(x>y) {return 1;} return 0;});
  hosNew.sort(function(a,b){let x = a.toLowerCase(); let y = b.toLowerCase(); if (x < y) {return -1;} if(x>y) {return 1;} return 0;});
  hosMain.sort(function(a,b){let x = a.toLowerCase(); let y = b.toLowerCase(); if (x < y) {return -1;} if(x>y) {return 1;} return 0;});
  humNew.sort(function(a,b){let x = a.toLowerCase(); let y = b.toLowerCase(); if (x < y) {return -1;} if(x>y) {return 1;} return 0;});
  humMain.sort(function(a,b){let x = a.toLowerCase(); let y = b.toLowerCase(); if (x < y) {return -1;} if(x>y) {return 1;} return 0;});
  itNew.sort(function(a,b){let x = a.toLowerCase(); let y = b.toLowerCase(); if (x < y) {return -1;} if(x>y) {return 1;} return 0;});
  itMain.sort(function(a,b){let x = a.toLowerCase(); let y = b.toLowerCase(); if (x < y) {return -1;} if(x>y) {return 1;} return 0;});
  laNew.sort(function(a,b){let x = a.toLowerCase(); let y = b.toLowerCase(); if (x < y) {return -1;} if(x>y) {return 1;} return 0;});
  laMain.sort(function(a,b){let x = a.toLowerCase(); let y = b.toLowerCase(); if (x < y) {return -1;} if(x>y) {return 1;} return 0;});
  manNew.sort(function(a,b){let x = a.toLowerCase(); let y = b.toLowerCase(); if (x < y) {return -1;} if(x>y) {return 1;} return 0;});
  manMain.sort(function(a,b){let x = a.toLowerCase(); let y = b.toLowerCase(); if (x < y) {return -1;} if(x>y) {return 1;} return 0;});
  marNew.sort(function(a,b){let x = a.toLowerCase(); let y = b.toLowerCase(); if (x < y) {return -1;} if(x>y) {return 1;} return 0;});
  marMain.sort(function(a,b){let x = a.toLowerCase(); let y = b.toLowerCase(); if (x < y) {return -1;} if(x>y) {return 1;} return 0;});
  steNew.sort(function(a,b){let x = a.toLowerCase(); let y = b.toLowerCase(); if (x < y) {return -1;} if(x>y) {return 1;} return 0;});
  steMain.sort(function(a,b){let x = a.toLowerCase(); let y = b.toLowerCase(); if (x < y) {return -1;} if(x>y) {return 1;} return 0;});
  traNew.sort(function(a,b){let x = a.toLowerCase(); let y = b.toLowerCase(); if (x < y) {return -1;} if(x>y) {return 1;} return 0;});
  traMain.sort(function(a,b){let x = a.toLowerCase(); let y = b.toLowerCase(); if (x < y) {return -1;} if(x>y) {return 1;} return 0;});
} 




// NOTES: 
//////////////////////////////////////////////////////////////////////
//
//              Video Object Constructor Function
//
//function Video(onet, cluster, title, parent, videocode, html) {
//  this.onet = onet;
//  this.cluster = cluster;
//  this.title = title;
//  this.parent = parent;
//  this.videocode = videocode;
//  this.html = html;
//}
// --> code to include inside addVideo() 
//    
//  let newerVideo = new Video(`${newVideo.onet}`, `${newVideo.cluster}`, `${newVideo.title}`, `${newVideo.parent}`, `${newVideo.videocode}`, `${newVideo.html}`);
//  batch.push(newerVideo);
////////////////////////////////////////////////////////////////////////
//
//      -------------------   OR    -----------------------------
//
////////////////////////////////////////////////////////////////////////
//
//                     Create Video Class
//
//class Video {
//	constructor(onet, title, parent, clusters, videocode) {
//    this.onet = onet;
//    this.title = title;
//    this.parent = parent;
//    this.clusters = clusters;
//    this.videocode = videocode;
//	}
//}
//-----------------------------------------------------------
/*
var vidHtml = [];  for (i=0; i<videoBatch.length; i++) { 
  let title = videoBatch[i].title;
  let videocode = videoBatch[i].videocode;
  vidHtml.push(`{"${title}" : "<p><a title="${title}" href="/videos/careeronestop-videos.aspx?videocode=${videocode}">${title} - NEW!</a></p>"}`);
};

*/

//NewVideosPage Cluster Arrays
const agrNew =[
'<p><a title="Agricultural Equipment Operators" href="/videos/careeronestop-videos.aspx?videocode=45209100">Agricultural Equipment Operators - NEW!</a></p>',
'<p><a title="Agricultural and Food Science Technicians" href="/videos/careeronestop-videos.aspx?videocode=19401100">Agricultural and Food Science Technicians - NEW!</a></p>',
'<p><a title="Animal Breeders" href="/videos/careeronestop-videos.aspx?videocode=45202100">Animal Breeders - NEW!</a></p>',
'<p><a title="Animal Scientists" href="/videos/careeronestop-videos.aspx?videocode=19101100">Animal Scientists - NEW!</a></p>',
'<p><a title="Animal Trainers" href="/videos/careeronestop-videos.aspx?videocode=39201100">Animal Trainers - NEW!</a></p>',
'<p><a title="Aquacultural Managers" href="/videos/careeronestop-videos.aspx?videocode=11901303">Aquacultural Managers - NEW!</a></p>',
'<p><a title="Biochemists and Biophysicists" href="/videos/careeronestop-videos.aspx?videocode=19102100">Biochemists and Biophysicists - NEW!</a></p>',
'<p><a title="Biofuels / Biodiesel Technology and Product Development Managers" href="/videos/careeronestop-videos.aspx?videocode=11904101">Biofuels / Biodiesel Technology and Product Development Managers - NEW!</a></p>',
'<p><a title="Biomass Power Plant Managers" href="/videos/careeronestop-videos.aspx?videocode=11305104">Biomass Power Plant Managers - NEW!</a></p>',
'<p><a title="Brownfield Redevelopment Specialists and Site Managers" href="/videos/careeronestop-videos.aspx?videocode=11919911">Brownfield Redevelopment Specialists and Site Managers - NEW!</a></p>',
'<p><a title="Butchers and Meat Cutters" href="/videos/careeronestop-videos.aspx?videocode=51302100">Butchers and Meat Cutters - NEW!</a></p>',
'<p><a title="Buyers Purchasing Agents - Farm Products" href="/videos/careeronestop-videos.aspx?videocode=13102100">Buyers Purchasing Agents - Farm Products - NEW!</a></p>',
'<p><a title="Chemical Technicians" href="/videos/careeronestop-videos.aspx?videocode=19403100">Chemical Technicians - NEW!</a></p>',
'<p><a title="Chemists" href="/videos/careeronestop-videos.aspx?videocode=19203100">Chemists - NEW!</a></p>',
'<p><a title="Chief Sustainability Officers" href="/videos/careeronestop-videos.aspx?videocode=11101103">Chief Sustainability Officers - NEW!</a></p>',
'<p><a title="Commercial Divers" href="/videos/careeronestop-videos.aspx?videocode=49909200">Commercial Divers - NEW!</a></p>',
'<p><a title="Conservation Scientists" href="/videos/careeronestop-videos.aspx?videocode=19103100">Conservation Scientists - NEW!</a></p>',
'<p><a title="Economists" href="/videos/careeronestop-videos.aspx?videocode=19301100">Economists - NEW!</a></p>',
'<p><a title="Environmental Engineering Technicians" href="/videos/careeronestop-videos.aspx?videocode=17302500">Environmental Engineering Technicians - NEW!</a></p>',
'<p><a title="Environmental Engineers" href="/videos/careeronestop-videos.aspx?videocode=17208100">Environmental Engineers - NEW!</a></p>',
'<p><a title="Environmental Restoration Planners" href="/videos/careeronestop-videos.aspx?videocode=19204102">Environmental Restoration Planners - NEW!</a></p>',
'<p><a title="Environmental Scientists and Specialists, Including Health" href="/videos/careeronestop-videos.aspx?videocode=19204100">Environmental Scientists and Specialists, Including Health - NEW!</a></p>',
'<p><a title="Fallers" href="/videos/careeronestop-videos.aspx?videocode=45402100">Fallers - NEW!</a></p>',
'<p><a title="Farm Equipment Mechanics and Service Technicians" href="/videos/careeronestop-videos.aspx?videocode=49304100">Farm Equipment Mechanics and Service Technicians - NEW!</a></p>',
'<p><a title="Farm Labor Contractors" href="/videos/careeronestop-videos.aspx?videocode=13107400">Farm Labor Contractors - NEW!</a></p>',
'<p><a title="Farmers Ranchers and other Agricultural Managers" href="/videos/careeronestop-videos.aspx?videocode=11901300">Farmers, Ranchers, and other Agricultural Managers - NEW!</a></p>',
'<p><a title="Farmworkers and Laborers, Crop, Nursery, and Greenhouse" href="/videos/careeronestop-videos.aspx?videocode=45209200">Farmworkers and Laborers, Crop, Nursery, and Greenhouse - NEW!</a></p>',
'<p><a title="Farmworkers, Farm, Ranch, and Aquacultural Animals" href="/videos/careeronestop-videos.aspx?videocode=45209300">Farmworkers, Farm, Ranch, and Aquacultural Animals - NEW!</a></p>',
'<p><a title="First Line Supervisors - Managers of Construction Trades and Extraction Workers" href="/videos/careeronestop-videos.aspx?videocode=47101100">First Line Supervisors - Managers of Construction Trades and Extraction Workers - NEW!</a></p>',
'<p><a title="First-Line Supervisors of Logging Workers" href="/videos/careeronestop-videos.aspx?videocode=45101105">First-Line Supervisors of Logging Workers - NEW!</a></p>',
'<p><a title="Fish and Game Wardens" href="/videos/careeronestop-videos.aspx?videocode=33303100">Fish and Game Wardens - NEW!</a></p>',
'<p><a title="Fishers and Related Fishing Workers" href="/videos/careeronestop-videos.aspx?videocode=45301100">Fishers and Related Fishing Workers - NEW!</a></p>',
'<p><a title="Floral Designers" href="/videos/careeronestop-videos.aspx?videocode=27102300">Floral Designers - NEW!</a></p>',
'<p><a title="Food Scientists and Technologists" href="/videos/careeronestop-videos.aspx?videocode=19101200">Food Scientists and Technologists - NEW!</a></p>',
'<p><a title="Geothermal Production Managers" href="/videos/careeronestop-videos.aspx?videocode=11305102">Geothermal Production Managers - NEW!</a></p>',
'<p><a title="Hazardous Materials Removal Workers" href="/videos/careeronestop-videos.aspx?videocode=47404100">Hazardous Materials Removal Workers - NEW!</a></p>',
'<p><a title="Hunters and Trappers" href="/videos/careeronestop-videos.aspx?videocode=45302100">Hunters and Trappers - NEW!</a></p>',
'<p><a title="Landscape and Groundskeeping Workers" href="/videos/careeronestop-videos.aspx?videocode=37301100">Landscape and Groundskeeping Workers - NEW!</a></p>',
'<p><a title="Loading Machine Operators, Underground Mining" href="/videos/careeronestop-videos.aspx?videocode=53703300">Loading Machine Operators, Underground Mining - NEW!</a></p>',
'<p><a title="Logging Equipment Operators" href="/videos/careeronestop-videos.aspx?videocode=45402200">Logging Equipment Operators - NEW!</a></p>',
'<p><a title="Log Graders and Scalers" href="/videos/careeronestop-videos.aspx?videocode=45402300">Log Graders and Scalers - NEW!</a></p>',
'<p><a title="Meat, Poultry, and Fish Cutters and Trimmers" href="/videos/careeronestop-videos.aspx?videocode=51302200">Meat, Poultry, and Fish Cutters and Trimmers - NEW!</a></p>',
'<p><a title="Mobile Heavy Equipment Mechanics, Except Engines" href="/videos/careeronestop-videos.aspx?videocode=49304200">Mobile Heavy Equipment Mechanics, Except Engines - NEW!</a></p>',
'<p><a title="Natural Sciences Managers" href="/videos/careeronestop-videos.aspx?videocode=11912100">Natural Sciences Managers - NEW!</a></p>',
'<p><a title="Nonfarm Animal Caretakers" href="/videos/careeronestop-videos.aspx?videocode=39202100">Nonfarm Animal Caretakers - NEW!</a></p>',
'<p><a title="Nursery and Greenhouse Managers" href="/videos/careeronestop-videos.aspx?videocode=11901301">Nursery and Greenhouse Managers - NEW!</a></p>',
'<p><a title="Occupational Health and Safety Specialists and Technicians" href="/videos/careeronestop-videos.aspx?videocode=29901100">Occupational Health and Safety Specialists and Technicians - NEW!</a></p>',
'<p><a title="Park Naturalists" href="/videos/careeronestop-videos.aspx?videocode=19103103">Park Naturalists - NEW!</a></p>',
'<p><a title="Pest Control Workers" href="/videos/careeronestop-videos.aspx?videocode=37202100">Pest Control Workers - NEW!</a></p>',
'<p><a title="Pesticide Handlers, Sprayers, and Applicators, Vegetation" href="/videos/careeronestop-videos.aspx?videocode=37301200">Pesticide Handlers, Sprayers, and Applicators, Vegetation - NEW!</a></p>',
'<p><a title="Refuse and Recyclable Material Collectors" href="/videos/careeronestop-videos.aspx?videocode=53708100">Refuse and Recyclable Material Collectors - NEW!</a></p>',
'<p><a title="Retail Salesperson" href="/videos/careeronestop-videos.aspx?videocode=41203100">Retail Salesperson - NEW!</a></p>',
'<p><a title="Sales Representatives, Wholesale and Manufacturing, Technical and Scientific Products" href="/videos/careeronestop-videos.aspx?videocode=41401100">Sales Representatives, Wholesale and Manufacturing, Technical and Scientific Products - NEW!</a></p>',
'<p><a title="Sales Representatives, Wholesale and Manufacturing, Except Technical and Scientific" href="/videos/careeronestop-videos.aspx?videocode=41401200"> Sales Representatives, Wholesale and Manufacturing, Except Technical and Scientific - NEW!</a></p>',
'<p><a title="Soil and Plant Scientists" href="/videos/careeronestop-videos.aspx?videocode=19101300">Soil and Plant Scientists - NEW!</a></p>',
'<p><a title="Tree Trimmers and Pruners" href="/videos/careeronestop-videos.aspx?videocode=37301300">Tree Trimmers and Pruners - NEW!</a></p>',
'<p><a title="Veterinarians" href="/videos/careeronestop-videos.aspx?videocode=29113100">Veterinarians - NEW!</a></p>',
'<p><a title="Veterinary Assistants and Laboratory Animal Caretakers" href="/videos/careeronestop-videos.aspx?videocode=31909600">Veterinary Assistants and Laboratory Animal Caretakers - NEW!</a></p>',
'<p><a title="Veterinary Technologists and Technicians" href="/videos/careeronestop-videos.aspx?videocode=29205600">Veterinary Technologists and Technicians - NEW!</a></p>',
'<p><a title="Water and Wastewater Treatment Plant and System Operators" href="/videos/careeronestop-videos.aspx?videocode=51803100">Water and Wastewater Treatment Plant and System Operators - NEW!</a></p>',
'<p><a title="Water Resource Specialists" href="/videos/careeronestop-videos.aspx?videocode=11912102">Water Resource Specialists - NEW!</a></p>',
'<p><a title="Wind Turbine Service Technicians" href="/videos/careeronestop-videos.aspx?videocode=49908100">Wind Turbine Service Technicians - NEW!</a></p>',
'<p><a title="Zoologists and Wildlife Biologists" href="/videos/careeronestop-videos.aspx?videocode=19102300">Zoologists and Wildlife Biologists - NEW!</a></p>'
];

const arcNew = [
'<p><a title="Architectural and Engineering Managers" href="/videos/careeronestop-videos.aspx?videocode=11904100">Architectural and Engineering Managers - NEW!</a></p>',
'<p><a title="Brickmasons and Blockmasons" href="/videos/careeronestop-videos.aspx?videocode=47202100">Brickmasons and Blockmasons - NEW!</a></p>',
'<p><a title="Cabinetmakers and Bench Carpenters" href="/videos/careeronestop-videos.aspx?videocode=51701100">Cabinetmakers and Bench Carpenters - NEW!</a></p>',
'<p><a title="Carpenters" href="/videos/careeronestop-videos.aspx?videocode=47203100">Carpenters - NEW!</a></p>',
'<p><a title="Carpet Installers" href="/videos/careeronestop-videos.aspx?videocode=47204100">Carpet Installers - NEW!</a></p>',
'<p><a title="Cartographers and Photogrammetrists" href="/videos/careeronestop-videos.aspx?videocode=17102100">Cartographers and Photogrammetrists - NEW!</a></p>',
'<p><a title="Cement Masons and Concrete Finishers" href="/videos/careeronestop-videos.aspx?videocode=47205100">Cement Masons and Concrete Finishers - NEW!</a></p>',
'<p><a title="Construction Carpenters" href="/videos/careeronestop-videos.aspx?videocode=47203101">Construction Carpenters - NEW!</a></p>',
'<p><a title="Civil Engineering Technicians" href="/videos/careeronestop-videos.aspx?videocode=17302200">Civil Engineering Technicians - NEW!</a></p>',
'<p><a title="Civil Engineers" href="/videos/careeronestop-videos.aspx?videocode=17205100">Civil Engineers - NEW!</a></p>',
'<p><a title="Construction Laborers" href="/videos/careeronestop-videos.aspx?videocode=47206100">Construction Laborers - NEW!</a></p>',
'<p><a title="Construction Managers" href="/videos/careeronestop-videos.aspx?videocode=11902100">Construction Managers - NEW!</a></p>',
'<p><a title="Construction and Building Inspectors" href="/videos/careeronestop-videos.aspx?videocode=47401100">Construction and Building Inspectors - NEW!</a></p>',
'<p><a title="Cost Estimators" href="/videos/careeronestop-videos.aspx?videocode=13105100">Cost Estimators - NEW!</a></p>',
'<p><a title="Dredge Operators" href="/videos/careeronestop-videos.aspx?videocode=53703100">Dredge Operators - NEW!</a></p>',
'<p><a title="Drywall and Ceiling Tile Installers" href="/videos/careeronestop-videos.aspx?videocode=47208100">Drywall and Ceiling Tile Installers - NEW!</a></p>',
'<p><a title="Electrical Power-Line Installers and Repairers" href="/videos/careeronestop-videos.aspx?videocode=49905100">Electrical Power-Line Installers and Repairers - NEW!</a></p>',
'<p><a title="Electricians" href="/videos/careeronestop-videos.aspx?videocode=47211100">Electricians - NEW!</a></p>',
'<p><a title="Elevator Installers and Repairers" href="/videos/careeronestop-videos.aspx?videocode=47402100">Elevator Installers and Repairers - NEW!</a></p>',
'<p><a title="Excavating and Loading Machine and Dragline Operators" href="/videos/careeronestop-videos.aspx?videocode=53703200">Excavating and Loading Machine and Dragline Operators - NEW!</a></p>',
'<p><a title="First Line Supervisors - Managers of Construction Trades and Extraction Workers" href="/videos/careeronestop-videos.aspx?videocode=47101100">First Line Supervisors - Managers of Construction Trades and Extraction Workers - NEW!</a></p>',
'<p><a title="Floor Layers, Except Carpet, Wood, and Hard Tiles" href="/videos/careeronestop-videos.aspx?videocode=47204200">Floor Layers, Except Carpet, Wood, and Hard Tiles - NEW!</a></p>',
'<p><a title="Floor Sanders and Finishers" href="/videos/careeronestop-videos.aspx?videocode=47204300">Floor Sanders and Finishers - NEW!</a></p>',
'<p><a title="Furniture Finishers" href="/videos/careeronestop-videos.aspx?videocode=51702100">Furniture Finishers - NEW!</a></p>',
'<p><a title="Glaziers" href="/videos/careeronestop-videos.aspx?videocode=47212100">Glaziers - NEW!</a></p>',
'<p><a title="Hazardous Materials Removal Workers" href="/videos/careeronestop-videos.aspx?videocode=47404100">Hazardous Materials Removal Workers - NEW!</a></p>',
'<p><a title="Helpers – Brickmasons Stonemasons and Tile and Marble Setters" href="/videos/careeronestop-videos.aspx?videocode=47301100">Helpers – Brickmasons Stonemasons and Tile and Marble Setters - NEW!</a></p>',
'<p><a title="Helpers--Carpenters" href="/videos/careeronestop-videos.aspx?videocode=47203200">Helpers--Carpenters - NEW!</a></p>',
'<p><a title="Helpers--Electricians" href="/videos/careeronestop-videos.aspx?videocode=47301300">Helpers--Electricians - NEW!</a></p>',
'<p><a title="Helpers--Painters, Paperhangers, Plasterers, and Stucco Masons" href="/videos/careeronestop-videos.aspx?videocode=473014.00">Helpers--Painters, Paperhangers, Plasterers, and Stucco Masons - NEW!</a></p>',
'<p><a title="Helpers--Pipelayers, Plumbers, Pipefitters, and Steamfitters" href="/videos/careeronestop-videos.aspx?videocode=47301500">Helpers--Pipelayers, Plumbers, Pipefitters, and Steamfitters - NEW!</a></p>',
'<p><a title="Helpers--Roofers" href="/videos/careeronestop-videos.aspx?videocode=47301600">Helpers--Roofers - NEW!</a></p>',
'<p><a title="Hoist and Winch Operators" href="/videos/careeronestop-videos.aspx?videocode=53704100">Hoist and Winch Operators - NEW!</a></p>',
'<p><a title="Insulation Workers, Floor, Ceiling, and Wall" href="/videos/careeronestop-videos.aspx?videocode=47213100">Insulation Workers, Floor, Ceiling, and Wall - NEW!</a></p>',
'<p><a title="Insulation Workers, Mechanical" href="/videos/careeronestop-videos.aspx?videocode=47213200">Insulation Workers, Mechanical - NEW!</a></p>',
'<p><a title="Interior Designers" href="/videos/careeronestop-videos.aspx?videocode=27102500">Interior Designers - NEW!</a></p>',
'<p><a title="Landscape Architects" href="/videos/careeronestop-videos.aspx?videocode=17101200">Landscape Architects - NEW!</a></p>',
'<p><a title="Landscape and Groundskeeping Workers" href="/videos/careeronestop-videos.aspx?videocode=37301100">Landscape and Groundskeeping Workers - NEW!</a></p>',
'<p><a title="Maintenance and Repair Workers, General" href="/videos/careeronestop-videos.aspx?videocode=49907100">Maintenance and Repair Workers, General - NEW!</a></p>',
'<p><a title="Mechanical Drafters" href="/videos/careeronestop-videos.aspx?videocode=17301300">Mechanical Drafters - NEW!</a></p>',
'<p><a title="Operating Engineers and Other Construction Equipment Operators" href="/videos/careeronestop-videos.aspx?videocode=47207100">Operating Engineers and Other Construction Equipment Operators - NEW!</a></p>',
'<p><a title="Painters, Construction and Maintenance" href="/videos/careeronestop-videos.aspx?videocode=47214100">Painters, Construction and Maintenance - NEW!</a></p>',
'<p><a title="Paving, Surfacing, and Tamping Equipment Operators" href="/videos/careeronestop-videos.aspx?videocode=47207100">Paving, Surfacing, and Tamping Equipment Operators - NEW!</a></p>',
'<p><a title="Pile-Driver Operators" href="/videos/careeronestop-videos.aspx?videocode=47207200">Pile-Driver Operators - NEW!</a></p>',
'<p><a title="Pipefitters and Steamfitters" href="/videos/careeronestop-videos.aspx?videocode=47215201">Pipefitters and Steamfitters - NEW!</a></p>',
'<p><a title="Plumbers" href="/videos/careeronestop-videos.aspx?videocode=47215202">Plumbers - NEW!</a></p>',
'<p><a title="Plumbers, Pipefitters, and Steamfitters" href="/videos/careeronestop-videos.aspx?videocode=47215200">Plumbers, Pipefitters, and Steamfitters - NEW!</a></p>',
'<p><a title="Reinforcing Iron and Rebar Workers" href="/videos/careeronestop-videos.aspx?videocode=47217100">Reinforcing Iron and Rebar Workers - NEW!</a></p>',
'<p><a title="Roofers" href="/videos/careeronestop-videos.aspx?videocode=47218100">Roofers - NEW!</a></p>',
'<p><a title="Rough Carpenters" href="/videos/careeronestop-videos.aspx?videocode=47203102">Rough Carpenters - NEW!</a></p>',
'<p><a title="Segmental Pavers" href="/videos/careeronestop-videos.aspx?videocode=47409100">Segmental Pavers - NEW!</a></p>',
'<p><a title="Set and Exhibit Designers" href="/videos/careeronestop-videos.aspx?videocode=27102700">Set and Exhibit Designers - NEW!</a></p>',
'<p><a title="Sheet Metal Workers" href="/videos/careeronestop-videos.aspx?videocode=47221100">Sheet Metal Workers - NEW!</a></p>',
'<p><a title="Solar Photovoltaic Installer" href="/videos/careeronestop-videos.aspx?videocode=47223100">Solar Photovoltaic Installer - NEW!</a></p>',
'<p><a title="Stonemasons" href="/videos/careeronestop-videos.aspx?videocode=47202200">Stonemasons - NEW!</a></p>',
'<p><a title="Structural Iron and Steel Workers" href="/videos/careeronestop-videos.aspx?videocode=47222100">Structural Iron and Steel Workers - NEW!</a></p>',
'<p><a title="Structural Metal Fabricators and Fitters" href="/videos/careeronestop-videos.aspx?videocode=51204100">Structural Metal Fabricators and Fitters - NEW!</a></p>',
'<p><a title="Surveyors" href="/videos/careeronestop-videos.aspx?videocode=17102200">Surveyors - NEW!</a></p>',
'<p><a title="Tapers" href="/videos/careeronestop-videos.aspx?videocode=47208200">Tapers - NEW!</a></p>',
'<p><a title="Terrazzo Workers and Finishers" href="/videos/careeronestop-videos.aspx?videocode=47205300">Terrazzo Workers and Finishers - NEW!</a></p>',
'<p><a title="Tile and Marble Setters" href="/videos/careeronestop-videos.aspx?videocode=47204400">Tile and Marble Setters - NEW!</a></p>',
'<p><a title="Woodworking Machine Setters, Operators, and Tenders, Except Sawing" href="/videos/careeronestop-videos.aspx?videocode=51704200">Woodworking Machine Setters, Operators, and Tenders, Except Sawing - NEW!</a></p>',
'<p><a title="Wood Sawing Machine Setters, Operators, and Tenders" href="/videos/careeronestop-videos.aspx?videocode=51704100">Wood Sawing Machine Setters, Operators, and Tenders - NEW!</a></p>'
];

const artNew = [
'<p><a title="Actors" href="/videos/careeronestop-videos.aspx?videocode=27201100">Actors - NEW!</a></p>',
'<p><a title="Archivists" href="/videos/careeronestop-videos.aspx?videocode=25401100">Archivists - NEW!</a></p>',
'<p><a title="Art Directors" href="/videos/careeronestop-videos.aspx?videocode=27101100">Art Directors - NEW!</a></p>',
'<p><a title="Art Therapists" href="/videos/careeronestop-videos.aspx?videocode=29112501">Art Therapists - NEW!</a></p>',
'<p><a title="Audio and Video Equipment Technicians" href="/videos/careeronestop-videos.aspx?videocode=27401100">Audio and Video Equipment Technicians - NEW!</a></p>',
'<p><a title="Broadcast Announcers and Radio Disc Jockeys" href="/videos/careeronestop-videos.aspx?videocode=27301100">Broadcast Announcers and Radio Disc Jockeys - NEW!</a></p>',
'<p><a title="Broadcast News Analysts" href="/videos/careeronestop-videos.aspx?videocode=27302100">Broadcast News Analysts - NEW!</a></p>',
'<p><a title="Broadcast Technicians" href="/videos/careeronestop-videos.aspx?videocode=27401200">Broadcast Technicians - NEW!</a></p>',
'<p><a title="Camera Operators - Television - Video - and Motion Picture" href="/videos/careeronestop-videos.aspx?videocode=27403100">Camera Operators - Television - Video - and Motion Picture - NEW!</a></p>',
'<p><a title="Choreographer" href="/videos/careeronestop-videos.aspx?videocode=27203200">Choreographer - NEW!</a></p>',
'<p><a title="Commercial and Industrial Designers" href="/videos/careeronestop-videos.aspx?videocode=27102100">Commercial and Industrial Designers - NEW!</a></p>',
'<p><a title="Craft Artists" href="/videos/careeronestop-videos.aspx?videocode=27101200">Craft Artists - NEW!</a></p>',
'<p><a title="Curators" href="/videos/careeronestop-videos.aspx?videocode=25401200">Curators - NEW!</a></p>',
'<p><a title="Dancers" href="/videos/careeronestop-videos.aspx?videocode=27203100">Dancers - NEW!</a></p>',
'<p><a title="Desktop Publishers" href="/videos/careeronestop-videos.aspx?videocode=43903100">Desktop Publishers - NEW!</a></p>',
'<p><a title="Directors - Stage, Motion Pictures, Television, and Radio" href="/videos/careeronestop-videos.aspx?videocode=27201202">Directors - Stage, Motion Pictures, Television, and Radio - NEW!</a></p>',
'<p><a title="Editors" href="/videos/careeronestop-videos.aspx?videocode=27304100">Editors - NEW!</a></p>',
'<p><a title="Electrical Power-Line Installers and Repairers" href="/videos/careeronestop-videos.aspx?videocode=49905100">Electrical Power-Line Installers and Repairers - NEW!</a></p>',
'<p><a title="Etchers and Engravers" href="/videos/careeronestop-videos.aspx?videocode=51919400">Etchers and Engravers - NEW!</a></p>',
'<p><a title="Fashion Designers" href="/videos/careeronestop-videos.aspx?videocode=27102200">Fashion Designers - NEW!</a></p>',
'<p><a title="Film and Video Editors" href="/videos/careeronestop-videos.aspx?videocode=27403200">Film and Video Editors - NEW!</a></p>',
'<p><a title="Graphic Designers" href="/videos/careeronestop-videos.aspx?videocode=27102400">Graphic Designers - NEW!</a></p>',
'<p><a title="Interior Designers" href="/videos/careeronestop-videos.aspx?videocode=27102500">Interior Designers - NEW!</a></p>',
'<p><a title="Motion Picture Projectionists" href="/videos/careeronestop-videos.aspx?videocode=39302100">Motion Picture Projectionists - NEW!</a></p>',
'<p><a title="Multimedia Artists and Animators" href="/videos/careeronestop-videos.aspx?videocode=27101400">Multimedia Artists and Animators - NEW!</a></p>',
'<p><a title="Museum Technicians and Conservators" href="/videos/careeronestop-videos.aspx?videocode=25401300">Museum Technicians and Conservators - NEW!</a></p>',
'<p><a title="Music Directors and Composers" href="/videos/careeronestop-videos.aspx?videocode=27204100">Music Directors and Composers - NEW!</a></p>',
'<p><a title="Music Therapists" href="/videos/careeronestop-videos.aspx?videocode=29112502">Music Therapists - NEW!</a></p>',
'<p><a title="Musicians and Singers" href="/videos/careeronestop-videos.aspx?videocode=27204200">Musicians and Singers - NEW!</a></p>',
'<p><a title="Photographers" href="/videos/careeronestop-videos.aspx?videocode=27402100">Photographers - NEW!</a></p>',
'<p><a title="Prepress Technicians and Workers" href="/videos/careeronestop-videos.aspx?videocode=51511100">Prepress Technicians and Workers - NEW!</a></p>',
'<p><a title="Print Binding and Finishing Workers" href="/videos/careeronestop-videos.aspx?videocode=51511300">Print Binding and Finishing Workers - NEW!</a></p>',
'<p><a title="Producers and Directors" href="/videos/careeronestop-videos.aspx?videocode=27201200">Producers and Directors - NEW!</a></p>',
'<p><a title="Program Directors" href="/videos/careeronestop-videos.aspx?videocode=27201203">Program Directors - NEW!</a></p>',
'<p><a title="Public Address System and Other Announcers" href="/videos/careeronestop-videos.aspx?videocode=27301200">Public Address System and Other Announcers - NEW!</a></p>',
'<p><a title="Radio and Television Announcers" href="/videos/careeronestop-videos.aspx?videocode=27301100">Radio and Television Announcers - NEW!</a></p>',
'<p><a title="Reporters and Correspondents" href="/videos/careeronestop-videos.aspx?videocode=27302200">Reporters and Correspondents - NEW!</a></p>',
'<p><a title="Set and Exhibit Designers" href="/videos/careeronestop-videos.aspx?videocode=27102700">Set and Exhibit Designers - NEW!</a></p>',
'<p><a title="Sound Engineering Technicians" href="/videos/careeronestop-videos.aspx?videocode=27401400">Sound Engineering Technicians - NEW!</a></p>',
'<p><a title="Technical Directors/Managers" href="/videos/careeronestop-videos.aspx?videocode=27201205">Technical Directors/Managers - NEW!</a></p>',
'<p><a title="Talent Directors" href="/videos/careeronestop-videos.aspx?videocode=27201204">Talent Directors - NEW!</a></p>',
'<p><a title="Telecommunications Equipment Installers and Repairers, Except Line Installers" href="/videos/careeronestop-videos.aspx?videocode=49202200">Telecommunications Equipment Installers and Repairers, Except Line Installers - NEW!</a></p>',
'<p><a title="Telecommunications Line Installers and Repairers" href="/videos/careeronestop-videos.aspx?videocode=49905200">Telecommunications Line Installers and Repairers - NEW!</a></p>',
'<p><a title="Video Game Designers" href="/videos/careeronestop-videos.aspx?videocode=15119911">Video Game Designers - NEW!</a></p>',
'<p><a title="Web Developer" href="/videos/careeronestop-videos.aspx?videocode=15113400">Web Developer - NEW!</a></p>'
];

const busNew = [
'<p><a title="Accountants and Auditors" href="/videos/careeronestop-videos.aspx?videocode=13201100">Accountants and Auditors - NEW!</a></p>',
'<p><a title="Administrative Services Managers" href="/videos/careeronestop-videos.aspx?videocode=11301100">Administrative Services Managers - NEW!</a></p>',
'<p><a title="Advertising and Promotions Managers" href="/videos/careeronestop-videos.aspx?videocode=11201100">Advertising and Promotions Managers - NEW!</a></p>',
'<p><a title="Advertising Sales Agents" href="/videos/careeronestop-videos.aspx?videocode=41301100">Advertising Sales Agents - NEW!</a></p>',
'<p><a title="Art Directors" href="/videos/careeronestop-videos.aspx?videocode=27101100">Art Directors - NEW!</a></p>',
'<p><a href="/videos/careeronestop-videos.aspx?videocode=11904101">Biofuels/Biodiesel Technology and Product Development Managers - NEW!</a></p>',
'<p><a title="Biomass Power Plant Managers" href="/videos/careeronestop-videos.aspx?videocode=11305104">Biomass Power Plant Managers - NEW!</a></p>',
'<p><a title="Bookkeeping, Accounting, and Auditing Clerks" href="/videos/careeronestop-videos.aspx?videocode=43303100">Bookkeeping, Accounting, and Auditing Clerks - NEW!</a></p>',
'<p><a title="Brokerage Clerks" href="/videos/careeronestop-videos.aspx?videocode=43401100">Brokerage Clerks - NEW!</a></p>',
'<p><a title="Brownfield Redevelopment Specialists and Site Managers" href="/videos/careeronestop-videos.aspx?videocode=11919911">Brownfield Redevelopment Specialists and Site Managers - NEW!</a></p>',
'<p><a title="Budget Analysts" href="/videos/careeronestop-videos.aspx?videocode=13203100">Budget Analysts - NEW!</a></p>',
'<p><a title="Buyers Purchasing Agents - Farm Products" href="/videos/careeronestop-videos.aspx?videocode=13102100">Buyers Purchasing Agents - Farm Products - NEW!</a></p>',
'<p><a title="Cargo and Freight Agents" href="/videos/careeronestop-videos.aspx?videocode=43501100">Cargo and Freight Agents - NEW!</a></p>',
'<p><a title="Chief Executives" href="/videos/careeronestop-videos.aspx?videocode=11101100">Chief Executives - NEW!</a></p>',
'<p><a title="Chief Sustainability Officers" href="/videos/careeronestop-videos.aspx?videocode=11101103">Chief Sustainability Officers - NEW!</a></p>',
'<p><a title="Compensation, Benefits, and Job Analysis Specialists" href="/videos/careeronestop-videos.aspx?videocode=13114100">Compensation, Benefits, and Job Analysis Specialists - NEW!</a></p>',
'<p><a title="Computer and Information Systems Managers" href="/videos/careeronestop-videos.aspx?videocode=11302100">Computer and Information Systems Managers - NEW!</a></p>',
'<p><a title="Computer Operators" href="/videos/careeronestop-videos.aspx?videocode=43901100">Computer Operators - NEW!</a></p>',
'<p><a title="Construction Managers" href="/videos/careeronestop-videos.aspx?videocode=11902100">Construction Managers - NEW!</a></p>',
'<p><a title="Correspondence Clerks" href="/videos/careeronestop-videos.aspx?videocode=43402100">Correspondence Clerks - NEW!</a></p>',
'<p><a title="Cost Estimators" href="/videos/careeronestop-videos.aspx?videocode=13105100">Cost Estimators - NEW!</a></p>',
'<p><a title="Couriers and Messengers" href="/videos/careeronestop-videos.aspx?videocode=43502100">Couriers and Messengers - NEW!</a></p>',
'<p><a title="Credit Analyst" href="/videos/careeronestop-videos.aspx?videocode=13204100">Credit Analyst - NEW!</a></p>',
'<p><a title="Customer Service Representatives" href="/videos/careeronestop-videos.aspx?videocode=43405100">Customer Service Representatives - NEW!</a></p>',
'<p><a title="Driver/Sales Workers" href="/videos/careeronestop-videos.aspx?videocode=53303100">Driver/Sales Workers - NEW!</a></p>',
'<p><a title="Economists" href="/videos/careeronestop-videos.aspx?videocode=19301100">Economists - NEW!</a></p>',
'<p><a title="Energy Auditors" href="/videos/careeronestop-videos.aspx?videocode=13119901">Energy Auditors - NEW!</a></p>',
'<p><a title="Equal Opportunity Representatives and Officers" href="/videos/careeronestop-videos.aspx?videocode=13104103">Equal Opportunity Representatives and Officers - NEW!</a></p>',
'<p><a title="Executive Secretaries and Executive Administrative Assistants" href="/videos/careeronestop-videos.aspx?videocode=43601100">Executive Secretaries and Executive Administrative Assistants - NEW!</a></p>',
'<p><a title="Farm Labor Contractors" href="/videos/careeronestop-videos.aspx?videocode=13107400">Farm Labor Contractors - NEW!</a></p>',
'<p><a title="File Clerks" href="/videos/careeronestop-videos.aspx?videocode=43407100">File Clerks - NEW!</a></p>',
'<p><a title="Financial Analysts" href="/videos/careeronestop-videos.aspx?videocode=13205100">Financial Analysts - NEW!</a></p>',
'<p><a title="Financial Examiners" href="/videos/careeronestop-videos.aspx?videocode=13206100">Financial Examiners - NEW!</a></p>',
'<p><a title="Financial Managers" href="/videos/careeronestop-videos.aspx?videocode=11303100">Financial Managers - NEW!</a></p>',
'<p><a title="Gambling Cage Workers" href="/videos/careeronestop-videos.aspx?videocode=43304100">Gambling Cage Workers - NEW!</a></p>',
'<p><a title="Geothermal Production Managers" href="/videos/careeronestop-videos.aspx?videocode=11305102">Geothermal Production Managers - NEW!</a></p>',
'<p><a title="Green Marketers" href="/videos/careeronestop-videos.aspx?videocode=11201101">Green Marketers - NEW!</a></p>',
'<p><a title="Human Resources Assistants, Except Payroll and Timekeeping " href="/videos/careeronestop-videos.aspx?videocode=43416100">Human Resources Assistants, Except Payroll and Timekeeping - NEW!</a></p>',
'<p><a title="Human Resources Managers" href="/videos/careeronestop-videos.aspx?videocode=11312100">Human Resources Managers - NEW!</a></p>',
'<p><a title="Human Resources Specialists" href="/videos/careeronestop-videos.aspx?videocode=13107100">Human Resources Specialists - NEW!</a></p>',
'<p><a title="Industrial Organizational Psychologists" href="/videos/careeronestop-videos.aspx?videocode=19303200">Industrial Organizational Psychologists - NEW!</a></p>',
'<p><a title="Industrial Production Managers" href="/videos/careeronestop-videos.aspx?videocode=11305100">Industrial Production Managers - NEW!</a></p>',
'<p><a title="Insurance Claims and Policy Processing Clerks" href="/videos/careeronestop-videos.aspx?videocode=43904100">Insurance Claims and Policy Processing Clerks - NEW!</a></p>',
'<p><a title="Interviewers Except Eligibility and Loan" href="/videos/careeronestop-videos.aspx?videocode=43411100">Interviewers Except Eligibility and Loan - NEW!</a></p>',
'<p><a title="Labor Relations Specialists" href="/videos/careeronestop-videos.aspx?videocode=13107500">Labor Relations Specialists - NEW!</a></p>',
'<p><a title="Legal Secretaries" href="/videos/careeronestop-videos.aspx?videocode=43601200">Legal Secretaries - NEW!</a></p>',
'<p><a title="Logisticians" href="/videos/careeronestop-videos.aspx?videocode=13108100">Logisticians - NEW!</a></p>',
'<p><a title="Logistics Analysts" href="/videos/careeronestop-videos.aspx?videocode=13108102">Logistics Analysts - NEW!</a></p>',
'<p><a title="Logistics Engineers" href="/videos/careeronestop-videos.aspx?videocode=13108101">Logistics Engineers - NEW!</a></p>',
'<p><a title="Logistics Manager" href="/videos/careeronestop-videos.aspx?videocode=11307103">Logistics Manager - NEW!</a></p>',
'<p><a title="Management Analysts" href="/videos/careeronestop-videos.aspx?videocode=13-1111.00">Management Analysts - NEW!</a></p>',
'<p><a title="Market Research Analysts and Marketing Specialists" href="/videos/careeronestop-videos.aspx?videocode=13116100">Market Research Analysts and Marketing Specialists - NEW!</a></p>',
'<p><a title="Marketing Managers" href="/videos/careeronestop-videos.aspx?videocode=11202100">Marketing Managers - NEW!</a></p>',
'<p><a title="Medical Secretaries" href="/videos/careeronestop-videos.aspx?videocode=43601300">Medical Secretaries - NEW!</a></p>',
'<p><a title="Medical and Health Services Managers" href="/videos/careeronestop-videos.aspx?videocode=11911100">Medical and Health Services Managers - NEW!</a></p>',
'<p><a title="Natural Sciences Managers" href="/videos/careeronestop-videos.aspx?videocode=11912100">Natural Sciences Managers - NEW!</a></p>',
'<p><a title="Operations Research Analysts" href="/videos/careeronestop-videos.aspx?videocode=15203100">Operations Research Analysts - NEW!</a></p>',
'<p><a title="Order Clerks" href="/videos/careeronestop-videos.aspx?videocode=43415100">Order Clerks - NEW!</a></p>',
'<p><a title="Office Clerks, General" href="/videos/careeronestop-videos.aspx?videocode=43906100">Office Clerks, General - NEW!</a></p>',
'<p><a title="Payroll and Timekeeping Clerks" href="/videos/careeronestop-videos.aspx?videocode=43305100">Payroll and Timekeeping Clerks - NEW!</a></p>',
'<p><a title="Public Relations and Fundraising Managers" href="/videos/careeronestop-videos.aspx?videocode=11203100">Public Relations and Fundraising Managers - NEW!</a></p>',
'<p><a title="Public Relations Specialists" href="/videos/careeronestop-videos.aspx?videocode=27303100">Public Relations Specialists - NEW!</a></p>',
'<p><a title="Purchasing Agents, Except Wholesale, Retail, and Farm Products" href="/videos/careeronestop-videos.aspx?videocode=13102300">Purchasing Agents, Except Wholesale, Retail, and Farm Products - NEW!</a></p>',
'<p><a title="Purchasing Managers" href="/videos/careeronestop-videos.aspx?videocode=11306100">Purchasing Managers - NEW!</a></p>',
'<p><a title="Receptionists and Information Clerks" href="/videos/careeronestop-videos.aspx?videocode=43417100">Receptionists and Information Clerks - NEW!</a></p>',
'<p><a title="Regulatory Affairs Managers" href="/videos/careeronestop-videos.aspx?videocode=11919901">Regulatory Affairs Managers - NEW!</a></p>',
'<p><a title="Sales Managers" href="/videos/careeronestop-videos.aspx?videocode=11202200">Sales Managers - NEW!</a></p>',
'<p><a title="Sales Representatives, Wholesale and Manufacturing, Technical and Scientific Products" href="/videos/careeronestop-videos.aspx?videocode=41401100">Sales Representatives, Wholesale and Manufacturing, Technical and Scientific Products - NEW!</a></p>',
'<p><a title=" Sales Representatives, Wholesale and Manufacturing, Except Technical and Scientific" href="/videos/careeronestop-videos.aspx?videocode=41401200"> Sales Representatives, Wholesale and Manufacturing, Except Technical and Scientific - NEW!</a></p>',
'<p><a title="Secretaries and Administrative Assistants, Except Legal, Medical, and Executive" href="/videos/careeronestop-videos.aspx?videocode=43601400">Secretaries and Administrative Assistants, Except Legal, Medical, and Executive - NEW!</a></p>',
'<p><a title="Shipping, Receiving, and Traffic Clerks" href="/videos/careeronestop-videos.aspx?videocode=43507100">Shipping, Receiving, and Traffic Clerks - NEW!</a></p>',
'<p><a title="Social and Community Service Managers" href="/videos/careeronestop-videos.aspx?videocode=11915100">Social and Community Service Managers - NEW!</a></p>',
'<p><a title="Stock Clerks and Order Fillers" href="/videos/careeronestop-videos.aspx?videocode=43508100">Stock Clerks and Order Fillers - NEW!</a></p>',
'<p><a title="Survey Researchers" href="/videos/careeronestop-videos.aspx?videocode=19302200">Survey Researchers - NEW!</a></p>',
'<p><a title="Tax Examiners and Collectors, and Revenue Agents" href="/videos/careeronestop-videos.aspx?videocode=13208100">Tax Examiners and Collectors, and Revenue Agents - NEW!</a></p>',
'<p><a title="Telephone Operators" href="/videos/careeronestop-videos.aspx?videocode=43202100">Telephone Operators - NEW!</a></p>',
'<p><a title="Training and Development Managers" href="/videos/careeronestop-videos.aspx?videocode=11313100">Training and Development Managers - NEW!</a></p>',
'<p><a title="Training and Development Specialists" href="/videos/careeronestop-videos.aspx?videocode=13115100">Training and Development Specialists - NEW!</a></p>',
'<p><a title="Transportation Managers" href="/videos/careeronestop-videos.aspx?videocode=11307101">Transportation Managers - NEW!</a></p>',
'<p><a title="Treasurers and Controllers" href="/videos/careeronestop-videos.aspx?videocode=11303101">Treasurers and Controllers - NEW!</a></p>',
'<p><a title="Weighers, Measurers, Checkers, and Samplers, Recordkeeping" href="/videos/careeronestop-videos.aspx?videocode=43511100">Weighers, Measurers, Checkers, and Samplers, Recordkeeping - NEW!</a></p>'
];

const eduNew = [
'<p><a title="Adult Basic and Secondary Education and Literacy Teachers and Instructors" href="/videos/careeronestop-videos.aspx?videocode=25301100">Adult Basic and Secondary Education and Literacy Teachers and Instructors - NEW!</a></p>',
'<p><a title="Athletes and Sports Competitors" href="/videos/careeronestop-videos.aspx?videocode=27202100">Athletes and Sports Competitors - NEW!</a></p>',
'<p><a title="Archivists" href="/videos/careeronestop-videos.aspx?videocode=25401100">Archivists - NEW!</a></p>',
'<p><a title="Career/Technical Education Teachers, Middle School" href="/videos/careeronestop-videos.aspx?videocode=25202300">Career/Technical Education Teachers, Middle School - NEW!</a></p>',
'<p><a title="Career/Technical Education Teachers, Secondary School" href="/videos/careeronestop-videos.aspx?videocode=25203200">Career/Technical Education Teachers, Secondary School - NEW!</a></p>',
'<p><a title="Clinical, Counseling, and School Psychologists" href="/videos/careeronestop-videos.aspx?videocode=19303100">Clinical, Counseling, and School Psychologists - NEW!</a></p>',
'<p><a title="Coaches and Scouts" href="/videos/careeronestop-videos.aspx?videocode=27202200">Coaches and Scouts - NEW!</a></p>',
'<p><a title="Dietitians and Nutritionists" href="/videos/careeronestop-videos.aspx?videocode=29103100">Dietitians and Nutritionists - NEW!</a></p>',
'<p><a title="Distance Learning Coordinators" href="/videos/careeronestop-videos.aspx?videocode=11903901">Distance Learning Coordinators - NEW!</a></p>',
'<p><a title="Education Administrators - Preschool and Childcare Centers" href="/videos/careeronestop-videos.aspx?videocode=11903100">Education Administrators - Preschool and Childcare Centers - NEW!</a></p>',
'<p><a title="Education Administrators - Postsecondary" href="/videos/careeronestop-videos.aspx?videocode=11903300">Education Administrators - Postsecondary - NEW!</a></p>',
'<p><a title="Educational, Guidance, School, and Vocational Counselors" href="/videos/careeronestop-videos.aspx?videocode=21101200">Educational, Guidance, School, and Vocational Counselors - NEW!</a></p>',
'<p><a title="Elementary School Teachers - Except Special Education" href="/videos/careeronestop-videos.aspx?videocode=25202100">Elementary School Teachers - Except Special Education - NEW!</a></p>',
'<p><a title="Fitness and Wellness Coordinators" href="/videos/careeronestop-videos.aspx?videocode=11903902">Fitness and Wellness Coordinators - NEW!</a></p>',
'<p><a title="Fitness Trainers and Aerobics Instructors" href="/videos/careeronestop-videos.aspx?videocode=39903100">Fitness Trainers and Aerobics Instructors - NEW!</a></p>',
'<p><a title="Graduate Teaching Assistants" href="/videos/careeronestop-videos.aspx?videocode=25119100">Graduate Teaching Assistants - NEW!</a></p>',
'<p><a title="Interpreters and Translators" href="/videos/careeronestop-videos.aspx?videocode=27309100">Interpreters and Translators - NEW!</a></p>',
'<p><a title="Instructional Coordinators" href="/videos/careeronestop-videos.aspx?videocode=25903100">Instructional Coordinators - NEW!</a></p>',
'<p><a title="Librarians" href="/videos/careeronestop-videos.aspx?videocode=25402100">Librarians - NEW!</a></p>',
'<p><a title="Library Assistants, Clerical" href="/videos/careeronestop-videos.aspx?videocode=43412100">Library Assistants, Clerical - NEW!</a></p>',
'<p><a title="Library Technicians" href="/videos/careeronestop-videos.aspx?videocode=25403100">Library Technicians - NEW!</a></p>',
'<p><a title="Preschool Teachers Except Special Education" href="/videos/careeronestop-videos.aspx?videocode=25201100">Preschool Teachers Except Special Education - NEW!</a></p>',
'<p><a title="Regulatory Affairs Managers" href="/videos/careeronestop-videos.aspx?videocode=11919901">Regulatory Affairs Managers - NEW!</a></p>',
'<p><a title="Secondary School Teachers - Except Special and Career/Technical Education" href="/videos/careeronestop-videos.aspx?videocode=25203100">Secondary School Teachers - NEW!</a></p>',
'<p><a title="Special Education Teachers Kindergarten and Elementary School" href="/videos/careeronestop-videos.aspx?videocode=25205200">Special Education Teachers Kindergarten and Elementary School - NEW!</a></p>',
'<p><a title="Special Education Teachers, Middle School" href="/videos/careeronestop-videos.aspx?videocode=25205300">Special Education Teachers, Middle School - NEW!</a></p>',
'<p><a title="Special Education Teachers, Secondary School" href="/videos/careeronestop-videos.aspx?videocode=25205400">Special Education Teachers, Secondary School - NEW!</a></p>',
'<p><a title="Teacher Assistants" href="/videos/careeronestop-videos.aspx?videocode=25904100">Teacher Assistants - NEW!</a></p>',
'<p><a title="Training and Development Managers" href="/videos/careeronestop-videos.aspx?videocode=11313100">Training and Development Managers - NEW!</a></p>',
'<p><a title="Training and Development Specialists" href="/videos/careeronestop-videos.aspx?videocode=13115100">Training and Development Specialists - NEW!</a></p>',
'<p><a title="Tutors" href="/videos/careeronestop-videos.aspx?videocode=25309902">Tutors - NEW!</a></p>'
];

const finNew = [
'<p><a title="Actuaries" href="/videos/careeronestop-videos.aspx?videocode=15201100">Actuaries - NEW!</a></p>',
'<p><a title="Bill and Account Collectors" href="/videos/careeronestop-videos.aspx?videocode=43301100">Bill and Account Collectors - NEW!</a></p>',
'<p><a title="Billing, Cost, and Rate Clerks" href="/videos/careeronestop-videos.aspx?videocode=43302102">Billing, Cost, and Rate Clerks - NEW!</a></p>',
'<p><a title="Billing and Posting Clerks" href="/videos/careeronestop-videos.aspx?videocode=43302100">Billing and Posting Clerks - NEW!</a></p>',
'<p><a title="Brokerage Clerks" href="/videos/careeronestop-videos.aspx?videocode=43401100">Brokerage Clerks - NEW!</a></p>',
'<p><a title="Budget Analysts" href="/videos/careeronestop-videos.aspx?videocode=13203100">Budget Analysts - NEW!</a></p>',
'<p><a title="Claims Adjusters, Examiners, and Investigators" href="/videos/careeronestop-videos.aspx?videocode=13103100">Claims Adjusters, Examiners, and Investigators - NEW!</a></p>',
'<p><a title="Claims Examiners, Property and Casualty Insurance" href="/videos/careeronestop-videos.aspx?videocode=13103101">Claims Examiners, Property and Casualty Insurance - NEW!</a></p>',
'<p><a title="Credit Analyst" href="/videos/careeronestop-videos.aspx?videocode=13204100">Credit Analyst - NEW!</a></p>',
'<p><a title="Credit Authorizers Checkers and Clerks" href="/videos/careeronestop-videos.aspx?videocode=43404100">Credit Authorizers Checkers and Clerks - NEW!</a></p>',
'<p><a title="Credit Counselors" href="/videos/careeronestop-videos.aspx?videocode=13207100">Credit Counselors - NEW!</a></p>',
'<p><a title="Economists" href="/videos/careeronestop-videos.aspx?videocode=19301100">Economists - NEW!</a></p>',
'<p><a title="Financial Analysts" href="/videos/careeronestop-videos.aspx?videocode=13205100">Financial Analysts - NEW!</a></p>',
'<p><a title="Financial Managers" href="/videos/careeronestop-videos.aspx?videocode=11303100">Financial Managers - NEW!</a></p>',
'<p><a title="Insurance Adjusters, Examniers, and Investigators" href="/videos/careeronestop-videos.aspx?videocode=13103102">Insurance Adjusters, Examniers, and Investigators - NEW!</a></p>',
'<p><a title="Insurance Appraisers, Auto Damage" href="/videos/careeronestop-videos.aspx?videocode=13103200">Insurance Appraisers, Auto Damage - NEW!</a></p>',
'<p><a title="Insurance Claims and Policy Processing Clerks" href="/videos/careeronestop-videos.aspx?videocode=43904100">Insurance Claims and Policy Processing Clerks - NEW!</a></p>',
'<p><a title="Insurance Sales Agents" href="/videos/careeronestop-videos.aspx?videocode=41302100">Insurance Sales Agents - NEW!</a></p>',
'<p><a title="Insurance Underwriters" href="/videos/careeronestop-videos.aspx?videocode=13205300">Insurance Underwriters - NEW!</a></p>',
'<p><a title="Investment Fund Managers" href="/videos/careeronestop-videos.aspx?videocode=11919903">Investment Fund Managers - NEW!</a></p>',
'<p><a title="Loan Counselors" href="/videos/careeronestop-videos.aspx?videocode=13207101">Loan Counselors - NEW!</a></p>',
'<p><a title="New Accounts Clerks" href="/videos/careeronestop-videos.aspx?videocode=43414100">New Accounts Clerks - NEW!</a></p>',
'<p><a title="Procurement Clerks" href="/videos/careeronestop-videos.aspx?videocode=43306100">Procurement Clerks - NEW!</a></p>',
'<p><a title="Personal Financial Advisors" href="/videos/careeronestop-videos.aspx?videocode=13205200">Personal Financial Advisors - NEW!</a></p>',
'<p><a title="Securities, Commodities, and Financial Services Sales Agents" href="/videos/careeronestop-videos.aspx?videocode=41303100">Securities, Commodities, and Financial Services Sales Agents - NEW!</a></p>',
'<p><a title="Securities and Commodities Traders" href="/videos/careeronestop-videos.aspx?videocode=41303103">Securities and Commodities Traders - NEW!</a></p>',
'<p><a title="Statement Clerks" href="/videos/careeronestop-videos.aspx?videocode=43302101">Statement Clerks - NEW!</a></p>',
'<p><a title="Tax Examiners and Collectors, and Revenue Agents" href="/videos/careeronestop-videos.aspx?videocode=13208100">Tax Examiners and Collectors, and Revenue Agents - NEW!</a></p>',
'<p><a title="Tellers" href="/videos/careeronestop-videos.aspx?videocode=43307100">Tellers - NEW!</a></p>',
'<p><a title="Treasurers and Controllers" href="/videos/careeronestop-videos.aspx?videocode=11303101">Treasurers and Controllers - NEW!</a></p>'
];

const govNew = [
'<p><a title="Accountants and Auditors" href="/videos/careeronestop-videos.aspx?videocode=13201100">Accountants and Auditors - NEW!</a></p>',
'<p><a title="Administrative Services Managers" href="/videos/careeronestop-videos.aspx?videocode=11301100">Administrative Services Managers - NEW!</a></p>',
'<p><a title="Architectural and Engineering Managers" href="/videos/careeronestop-videos.aspx?videocode=11904100">Architectural and Engineering Managers - NEW!</a></p>',
'<p><a title="Chief Executives" href="/videos/careeronestop-videos.aspx?videocode=11101100">Chief Executives - NEW!</a></p>',
'<p><a title="Construction and Building Inspectors" href="/videos/careeronestop-videos.aspx?videocode=47401100">Construction and Building Inspectors - NEW!</a></p>',
'<p><a title="Coroners" href="/videos/careeronestop-videos.aspx?videocode=13104106">Coroners - NEW!</a></p>',
'<p><a title="Court, Municipal, and License Clerks" href="/videos/careeronestop-videos.aspx?videocode=43403100">Court, Municipal, and License Clerks - NEW!</a></p>',
'<p><a title="Economists" href="/videos/careeronestop-videos.aspx?videocode=19301100">Economists - NEW!</a></p>',
'<p><a title="Emergency Management Directors" href="/videos/careeronestop-videos.aspx?videocode=11916100">Emergency Management Directors - NEW!</a></p>',
'<p><a title="Equal Opportunity Representatives and Officers" href="/videos/careeronestop-videos.aspx?videocode=13104103">Equal Opportunity Representatives and Officers - NEW!</a></p>',
'<p><a title="File Clerks" href="/videos/careeronestop-videos.aspx?videocode=43407100">File Clerks - NEW!</a></p>',
'<p><a title="Financial Examiners" href="/videos/careeronestop-videos.aspx?videocode=13206100">Financial Examiners - NEW!</a></p>',
'<p><a title="Interviewers Except Eligibility and Loan" href="/videos/careeronestop-videos.aspx?videocode=43411100">Interviewers Except Eligibility and Loan - NEW!</a></p>',
'<p><a title="Legislators" href="/videos/careeronestop-videos.aspx?videocode=11103100">Legislators - NEW!</a></p>',
'<p><a title="Licensing Examiners and Inspectors" href="/videos/careeronestop-videos.aspx?videocode=13104102">Licensing Examiners and Inspectors - NEW!</a></p>',
'<p><a title="Meter Readers-Utilities" href="/videos/careeronestop-videos.aspx?videocode=43504100">Meter Readers-Utilities - NEW!</a></p>',
'<p><a title="Public Relations Specialists" href="/videos/careeronestop-videos.aspx?videocode=27303100">Public Relations Specialists - NEW!</a></p>',
'<p><a title="Regulatory Affairs Managers" href="/videos/careeronestop-videos.aspx?videocode=11919901">Regulatory Affairs Managers - NEW!</a></p>',
'<p><a title="Social and Community Service Managers" href="/videos/careeronestop-videos.aspx?videocode=11915100">Social and Community Service Managers - NEW!</a></p>',
'<p><a title="Surveying and Mapping Technicians" href="/videos/careeronestop-videos.aspx?videocode=17303100">Surveying and Mapping Technicians - NEW!</a></p>',
'<p><a title="Tax Examiners and Collectors, and Revenue Agents" href="/videos/careeronestop-videos.aspx?videocode=13208100">Tax Examiners and Collectors, and Revenue Agents - NEW!</a></p>',
'<p><a title="Transportation Managers" href="/videos/careeronestop-videos.aspx?videocode=11307101">Transportation Managers - NEW!</a></p>',
'<p><a title="Urban and Regional Planners" href="/videos/careeronestop-videos.aspx?videocode=19305100">Urban and Regional Planners - NEW!</a></p>'
];

const heaNew = [
'<p><a title="Acupuncturists" href="/videos/careeronestop-videos.aspx?videocode=29119901">Acupuncturists - NEW!</a></p>',
'<p><a title="Anesthesiologist" href="/videos/careeronestop-videos.aspx?videocode=29106100">Anesthesiologist - NEW!</a></p>',
'<p><a title="Art Therapists" href="/videos/careeronestop-videos.aspx?videocode=29112501">Art Therapists - NEW!</a></p>',
'<p><a title="Athletic Trainers" href="/videos/careeronestop-videos.aspx?videocode=29909100">Athletic Trainers - NEW!</a></p>',
'<p><a title="Audiologists" href="/videos/careeronestop-videos.aspx?videocode=29118100">Audiologists - NEW!</a></p>',
'<p><a title="Biomedical Engineers" href="/videos/careeronestop-videos.aspx?videocode=17203100">Biomedical Engineers - NEW!</a></p>',
'<p><a title="Cardiovascular Technologists and Technicians" href="/videos/careeronestop-videos.aspx?videocode=29203100">Cardiovascular Technologists and Technicians - NEW!</a></p>',
'<p><a title="Chiropractors" href="/videos/careeronestop-videos.aspx?videocode=29101100">Chiropractors - NEW!</a></p>',
'<p><a title="Clinical, Counseling, and School Psychologists" href="/videos/careeronestop-videos.aspx?videocode=19303100">Clinical, Counseling, and School Psychologists - NEW!</a></p>',
'<p><a title="Clinical Research Coordinators" href="/videos/careeronestop-videos.aspx?videocode=11912101">Clinical Research Coordinators - NEW!</a></p>',
'<p><a title="Community Health Workers" href="/videos/careeronestop-videos.aspx?videocode=21109400">Community Health Workers - NEW!</a></p>',
'<p><a title="Cooks - Institution and Cafeteria" href="/videos/careeronestop-videos.aspx?videocode=35201200">Cooks, Institution and Cafeteria - NEW!</a></p>',
'<p><a title="Coroners" href="/videos/careeronestop-videos.aspx?videocode=13104106">Coroners - NEW!</a></p>',
'<p><a title="Dental Assistants" href="/videos/careeronestop-videos.aspx?videocode=31909100">Dental Assistants - NEW!</a></p>',
'<p><a title="Dental Hygienists" href="/videos/careeronestop-videos.aspx?videocode=29202100">Dental Hygienists - NEW!</a></p>',
'<p><a title="Dental Laboratory Technicians" href="/videos/careeronestop-videos.aspx?videocode=51908100">Dental Laboratory Technicians - NEW!</a></p>',
'<p><a title="Dentists" href="/videos/careeronestop-videos.aspx?videocode=29102100">Dentists - NEW!</a></p>',
'<p><a title="Diagnostic Medical Sonographers" href="/videos/careeronestop-videos.aspx?videocode=29203200">Diagnostic Medical Sonographers - NEW!</a></p>',
'<p><a title="Dietetic Technicians" href="/videos/careeronestop-videos.aspx?videocode=29205100">Dietetic Technicians - NEW!</a></p>',
'<p><a title="Dietitians and Nutritionists" href="/videos/careeronestop-videos.aspx?videocode=29103100">Dietitians and Nutritionists - NEW!</a></p>',
'<p><a title="Emergency Medical Technicians and Paramedics" href="/videos/careeronestop-videos.aspx?videocode=29204100">Emergency Medical Technicians and Paramedics - NEW!</a></p>',
'<p><a title="Epidemiologists" href="/videos/careeronestop-videos.aspx?videocode=19104100">Epidemiologists - NEW!</a></p>',
'<p><a title="Exercise Physiologists" href="/videos/careeronestop-videos.aspx?videocode=29112800">Exercise Physiologists - NEW!</a></p>',
'<p><a title="Family and General Practitioners" href="/videos/careeronestop-videos.aspx?videocode=29106200">Family and General Practitioners - NEW!</a></p>',
'<p><a title="Genetic Counselors" href="/videos/careeronestop-videos.aspx?videocode=29909200">Genetic Counselors - NEW!</a></p>',
'<p><a title="Home Health Aides" href="/videos/careeronestop-videos.aspx?videocode=31101100">Home Health Aides - NEW!</a></p>',
'<p><a title="Informatics Nurse Specialists" href="/videos/careeronestop-videos.aspx?videocode=15112101">Informatics Nurse Specialists - NEW!</a></p>',
'<p><a title="Internists, General" href="/videos/careeronestop-videos.aspx?videocode=29106300">Internists, General - NEW!</a></p>',
'<p><a title="Licensed Practical and Licensed Vocational Nurses" href="/videos/careeronestop-videos.aspx?videocode=29206100">Licensed Practical and Licensed Vocational Nurses - NEW!</a></p>',
'<p><a title="Magnetic Resonance Imaging (MRI) Technologists" href="/videos/careeronestop-videos.aspx?videocode=29203500">Magnetic Resonance Imaging (MRI) Technologists - NEW!</a></p>',
'<p><a title="Massage Therapists" href="/videos/careeronestop-videos.aspx?videocode=31901100">Massage Therapists - NEW!</a></p>',
'<p><a title="Medical and Clinical Laboratory Technicians" href="/videos/careeronestop-videos.aspx?videocode=29201200">Medical and Clinical Laboratory Technicians - NEW!</a></p>',
'<p><a title="Medical and Clinical Laboratory Technologists" href="/videos/careeronestop-videos.aspx?videocode=29201100">Medical and Clinical Laboratory Technologists - NEW!</a></p>',
'<p><a title="Medical and Health Services Managers" href="/videos/careeronestop-videos.aspx?videocode=11911100">Medical and Health Services Managers - NEW!</a></p>',
'<p><a title="Medical Appliance Technicians" href="/videos/careeronestop-videos.aspx?videocode=51908200">Medical Appliance Technicians - NEW!</a></p>',
'<p><a title="Medical Assistants" href="/videos/careeronestop-videos.aspx?videocode=31909200">Medical Assistants - NEW!</a></p>',
'<p><a title="Medical Records and Health Information Technicians" href="/videos/careeronestop-videos.aspx?videocode=29207100">Medical Records and Health Information Technicians- NEW!</a></p>',
'<p><a title="Medical Scientists, Except Epidemiologists" href="/videos/careeronestop-videos.aspx?videocode=19104200">Medical Scientists, Except Epidemiologists - NEW!</a></p>',
'<p><a title="Medical Secretaries" href="/videos/careeronestop-videos.aspx?videocode=43601300">Medical Secretaries - NEW!</a></p>',
'<p><a title="Medical Transcriptionists" href="/videos/careeronestop-videos.aspx?videocode=31909400">Medical Transcriptionists - NEW!</a></p>',
'<p><a title="Mental Health and Substance Abuse Social Workers" href="/videos/careeronestop-videos.aspx?videocode=21102300">Mental Health and Substance Abuse Social Workers - NEW!</a></p>',
'<p><a title="Mental Health Counselors" href="/videos/careeronestop-videos.aspx?videocode=21101400">Mental Health Counselors - NEW!</a></p>',
'<p><a title="Musicians and Singers" href="/videos/careeronestop-videos.aspx?videocode=27204200">Musicians and Singers - NEW!</a></p>',
'<p><a title="Natural Sciences Managers" href="/videos/careeronestop-videos.aspx?videocode=11912100">Natural Sciences Managers - NEW!</a></p>',
'<p><a title="Naturopathic Physicians" href="/videos/careeronestop-videos.aspx?videocode=29119904">Naturopathic Physicians - NEW!</a></p>',
'<p><a title="Nuclear Medicine Technologists" href="/videos/careeronestop-videos.aspx?videocode=29203300">Nuclear Medicine Technologists - NEW!</a></p>',
'<p><a title="Nurse Anesthetists" href="/videos/careeronestop-videos.aspx?videocode=29115100">Nurse Anesthetists - NEW!</a></p>',
'<p><a title="Nurse Midwives" href="/videos/careeronestop-videos.aspx?videocode=29116100">Nurse Midwives - NEW!</a></p>',
'<p><a title="Nurse Practitioners" href="/videos/careeronestop-videos.aspx?videocode=29117100">Nurse Practitioners - NEW!</a></p>',
'<p><a title="Nursing Assistants" href="/videos/careeronestop-videos.aspx?videocode=31101400">Nursing Assistants - NEW!</a></p>',
'<p><a title="Occupational Health and Safety Specialists and Technicians" href="/videos/careeronestop-videos.aspx?videocode=29901100">Occupational Health and Safety Specialists and Technicians - NEW!</a></p>',
'<p><a title="Occupational Therapy Aides" href="/videos/careeronestop-videos.aspx?videocode=31201200">Occupational Therapy Aides - NEW!</a></p>',
'<p><a title="Occupational Therapy Assistants" href="/videos/careeronestop-videos.aspx?videocode=31201100">Occupational Therapy Assistants - NEW!</a></p>',
'<p><a title="Occupational Therapists" href="/videos/careeronestop-videos.aspx?videocode=29112200">Occupational Therapists - NEW!</a></p>',
'<p><a title="Ophthalmic Laboratory Technicians" href="/videos/careeronestop-videos.aspx?videocode=51908300">Ophthalmic Laboratory Technicians - NEW!</a></p>',
'<p><a title="Ophthalmic Medical Technicians" href="/videos/careeronestop-videos.aspx?videocode=29205700">Ophthalmic Medical Technicians - NEW!</a></p>',
'<p><a title="Ophthalmic Medical Technologists" href="/videos/careeronestop-videos.aspx?videocode=29209905">Ophthalmic Medical Technologists - NEW!</a></p>',
'<p><a title="Opticians, Dispensing" href="/videos/careeronestop-videos.aspx?videocode=29208100">Opticians, Dispensing - NEW!</a></p>',
'<p><a title="Optometrists" href="/videos/careeronestop-videos.aspx?videocode=29104100">Optometrists - NEW!</a></p>',
'<p><a title="Oral and Maxillofacial Surgeons" href="/videos/careeronestop-videos.aspx?videocode=29102200">Oral and Maxillofacial Surgeons - NEW!</a></p>',
'<p><a title="Orderlies" href="/videos/careeronestop-videos.aspx?videocode=31101500">Orderlies - NEW!</a></p>',
'<p><a title="Orthodontists" href="/videos/careeronestop-videos.aspx?videocode=29102300">Orthodontists - NEW!</a></p>',
'<p><a title="Orthotists and Prosthetists" href="/videos/careeronestop-videos.aspx?videocode=29209100">Orthotists and Prosthetists - NEW!</a></p>',
'<p><a title="Pediatricians, General" href="/videos/careeronestop-videos.aspx?videocode=29106500">Pediatricians, General - NEW!</a></p>',
'<p><a title="Pharmacists" href="/videos/careeronestop-videos.aspx?videocode=29105100">Pharmacists - NEW!</a></p>',
'<p><a title="Pharmacy Aides" href="/videos/careeronestop-videos.aspx?videocode=31909500">Pharmacy Aides - NEW!</a></p>',
'<p><a title="Pharmacy Technicians" href="/videos/careeronestop-videos.aspx?videocode=29205200">Pharmacy Technicians - NEW!</a></p>',
'<p><a title="Phlebotomists" href="/videos/careeronestop-videos.aspx?videocode=31909700">Phlebotomists - NEW!</a></p>',
'<p><a title="Physical Therapist Aides" href="/videos/careeronestop-videos.aspx?videocode=31202200">Physical Therapist Aides - NEW!</a></p>',
'<p><a title="Physical Therapist Assistants" href="/videos/careeronestop-videos.aspx?videocode=31202100">Physical Therapist Assistants - NEW!</a></p>',
'<p><a title="Physical Therapists" href="/videos/careeronestop-videos.aspx?videocode=29112300">Physical Therapists - NEW!</a></p>',
'<p><a title="Physician Assistants" href="/videos/careeronestop-videos.aspx?videocode=29107100">Physician Assistants - NEW!</a></p>',
'<p><a title="Podiatrists" href="/videos/careeronestop-videos.aspx?videocode=29108100">Podiatrists - NEW!</a></p>',
'<p><a title="Prosthodontists" href="/videos/careeronestop-videos.aspx?videocode=29102400">Prosthodontists - NEW!</a></p>',
'<p><a title="Psychologists" href="/videos/careeronestop-videos.aspx?videocode=19303900">Psychologists - NEW!</a></p>',
'<p><a title="Radiologic Technologists and Technicians" href="/videos/careeronestop-videos.aspx?videocode=29203400">Radiologic Technologists and Technicians - NEW!</a></p>',
'<p><a title="Receptionists and Information Clerks" href="/videos/careeronestop-videos.aspx?videocode=43417100">Receptionists and Information Clerks - NEW!</a></p>',
'<p><a title="Recreational Therapists" href="/videos/careeronestop-videos.aspx?videocode=29112500">Recreational Therapists - NEW!</a></p>',
'<p><a title="Registered Nurses" href="/videos/careeronestop-videos.aspx?videocode=29114100">Registered Nurses - NEW!</a></p>',
'<p><a title="Rehabilitation Counselors" href="/videos/careeronestop-videos.aspx?videocode=21101500">Rehabilitation Counselors - NEW!</a></p>',
'<p><a title="Respiratory Therapists" href="/videos/careeronestop-videos.aspx?videocode=29112600">Respiratory Therapists - NEW!</a></p>',
'<p><a title="Speech-Language Pathologists" href="/videos/careeronestop-videos.aspx?videocode=29112700">Speech-Language Pathologists - NEW!</a></p>',
'<p><a title="Social and Human Service Assistants" href="/videos/careeronestop-videos.aspx?videocode=21109300">Social and Human Service Assistants - NEW!</a></p>',
'<p><a title="Substance Abuse and Behavioral Disorder Counselors" href="/videos/careeronestop-videos.aspx?videocode=21101100">Substance Abuse and Behavioral Disorder Counselors - NEW!</a></p>',
'<p><a title="Surgeons" href="/videos/careeronestop-videos.aspx?videocode=29106700">Surgeons - NEW!</a></p>',
'<p><a title="Surgical Assistants" href="/videos/careeronestop-videos.aspx?videocode=29209907">Surgical Assistants - NEW!</a></p>',
'<p><a title="Surgical Technologists" href="/videos/careeronestop-videos.aspx?videocode=29205500">Surgical Technologists - NEW!</a></p>'
];

const hosNew = [
'<p><a title="Animal Trainers" href="/videos/careeronestop-videos.aspx?videocode=39201100">Animal Trainers - NEW!</a></p>',
'<p><a title="Athletes and Sports Competitors" href="/videos/careeronestop-videos.aspx?videocode=27202100">Athletes and Sports Competitors - NEW!</a></p>',
'<p><a title="Bakers" href="/videos/careeronestop-videos.aspx?videocode=51301100">Bakers - NEW!</a></p>',
'<p><a title="Baristas" href="/videos/careeronestop-videos.aspx?videocode=35302201">Baristas - NEW!</a></p>',
'<p><a title="Bartenders" href="/videos/careeronestop-videos.aspx?videocode=35301100">Bartenders - NEW!</a></p>',
'<p><a title="Chefs and Head Cooks" href="/videos/careeronestop-videos.aspx?videocode=35101100">Chefs and Head Cooks - NEW!</a></p>',
'<p><a title="Combined Food Preparation and Serving Workers, Including Fast Food" href="/videos/careeronestop-videos.aspx?videocode=35302100">Combined Food Preparation and Serving Workers, Including Fast Food - NEW!</a></p>',
'<p><a title="Concierges" href="/videos/careeronestop-videos.aspx?videocode=39601200">Concierges - NEW!</a></p>',
'<p><a title="Cooks, Fast Food" href="/videos/careeronestop-videos.aspx?videocode=35201100">Cooks, Fast Food - NEW!</a></p>',
'<p><a title="Cooks, Private Household" href="/videos/careeronestop-videos.aspx?videocode=35201300">Cooks, Private Household - NEW!</a></p>',
'<p><a title="Cooks - Institution and Cafeteria" href="/videos/careeronestop-videos.aspx?videocode=35201200">Cooks, Institution and Cafeteria - NEW!</a></p>',
'<p><a title="Cooks, Restaurant" href="/videos/careeronestop-videos.aspx?videocode=35201400">Cooks, Restaurant - NEW!</a></p>',
'<p><a title="Cook - Short Order" href="/videos/careeronestop-videos.aspx?videocode=35201500">Cook - Short Order - NEW!</a></p>',
'<p><a title="Counter Attendants, Cafeteria, Food Concession, and Coffee Shop" href="/videos/careeronestop-videos.aspx?videocode=35302200">Counter Attendants, Cafeteria, Food Concession, and Coffee Shop - NEW!</a></p>',
'<p><a title="Curators" href="/videos/careeronestop-videos.aspx?videocode=25401200">Curators - NEW!</a></p>',
'<p><a title="Dining Room and Cafeteria Attendants and Bartender Helpers" href="/videos/careeronestop-videos.aspx?videocode=35901100">Dining Room and Cafeteria Attendants and Bartender Helpers - NEW!</a></p>',
'<p><a title="Food Preparation Workers" href="/videos/careeronestop-videos.aspx?videocode=35202100">Food Preparation Workers - NEW!</a></p>',
'<p><a title="Food Servers, Nonrestaurant" href="/videos/careeronestop-videos.aspx?videocode=35304100">Food Servers, Nonrestaurant - NEW!</a></p>',
'<p><a title="Food Service Managers" href="/videos/careeronestop-videos.aspx?videocode=11905100">Food Service Managers - NEW!</a></p>',
'<p><a title="Gambling Cage Workers" href="/videos/careeronestop-videos.aspx?videocode=43304100">Gambling Cage Workers - NEW!</a></p>',
'<p><a title="Gambling and Sports Book Writers and Runners" href="/videos/careeronestop-videos.aspx?videocode=39301200">Gambling and Sports Book Writers and Runners - NEW!</a></p>',
'<p><a title="Gambling Dealers" href="/videos/careeronestop-videos.aspx?videocode=39301100">Gambling Dealers - NEW!</a></p>',
'<p><a title="Gaming Managers" href="/videos/careeronestop-videos.aspx?videocode=11907100">Gaming Managers - NEW!</a></p>',
'<p><a title="Gaming Supervisors" href="/videos/careeronestop-videos.aspx?videocode=39101100">Gaming Supervisors - NEW!</a></p>',
'<p><a title="Hosts and Hostesses, Restaurant, Lounge, and Coffee Shop" href="/videos/careeronestop-videos.aspx?videocode=35903100">Hosts and Hostesses, Restaurant, Lounge, and Coffee Shop - NEW!</a></p>',
'<p><a title="Hotel, Motel, and Resort Desk Clerks" href="/videos/careeronestop-videos.aspx?videocode=43408100">Hotel, Motel, and Resort Desk Clerks - NEW!</a></p>',
'<p><a title="Interpreters and Translators" href="/videos/careeronestop-videos.aspx?videocode=27309100">Interpreters and Translators - NEW!</a></p>',
'<p><a title="Janitors" href="/videos/careeronestop-videos.aspx?videocode=37201100">Janitors - NEW!</a></p>',
'<p><a title="Laundry and Dry-Cleaning Workers" href="/videos/careeronestop-videos.aspx?videocode=51601100">Laundry and Dry-Cleaning Workers - NEW!</a></p>',
'<p><a title="Lodging Managers" href="/videos/careeronestop-videos.aspx?videocode=11908100">Lodging Managers - NEW!</a></p>',
'<p><a title="Meeting Convention and Event Planners" href="/videos/careeronestop-videos.aspx?videocode=13-1121.00">Meeting Convention and Event Planners - NEW!</a></p>',
'<p><a title="Museum Technicians and Conservators" href="/videos/careeronestop-videos.aspx?videocode=25401300">Museum Technicians and Conservators - NEW!</a></p>',
'<p><a title="Reservation and Transportation Ticket Agents and Travel Clerks" href="/videos/careeronestop-videos.aspx?videocode=43-4181.00">Reservation and Transportation Ticket Agents and Travel Clerks - NEW!</a></p>',
'<p><a title="Set and Exhibit Designers" href="/videos/careeronestop-videos.aspx?videocode=27102700">Set and Exhibit Designers - NEW!</a></p>',
'<p><a title="Slot Supervisors" href="/videos/careeronestop-videos.aspx?videocode=39101200">Slot Supervisors - NEW!</a></p>',
'<p><a title="Travel Guides, Tour Guides/Escorts" href="/videos/careeronestop-videos.aspx?videocode=39701100">Travel Guides, Tour Guides/Escorts - NEW!</a></p>',
'<p><a title="Travel Agents" href="/videos/careeronestop-videos.aspx?videocode=41304100">Travel Agents - NEW!</a></p>',
'<p><a title="Umpires Referees and other Sports Officials" href="/videos/careeronestop-videos.aspx?videocode=27202300">Umpires, Referees and other Sports Officials - NEW!</a></p>',
'<p><a title="Waiters and Waitresses" href="/videos/careeronestop-videos.aspx?videocode=35303100">Waiters and Waitresses - NEW!</a></p>'
];

const humNew = [
'<p><a title="Art Therapists" href="/videos/careeronestop-videos.aspx?videocode=29112501">Art Therapists - NEW!</a></p>',
'<p><a title="Barbers" href="/videos/careeronestop-videos.aspx?videocode=39501100">Barbers - NEW!</a></p>',
'<p><a title="Chief Executives" href="/videos/careeronestop-videos.aspx?videocode=11101100">Chief Executives - NEW!</a></p>',
'<p><a title="Child Care Workers" href="/videos/careeronestop-videos.aspx?videocode=39901100">Child Care Workers - NEW!</a></p>',
'<p><a title="Child - Family - School Social Workers" href="/videos/careeronestop-videos.aspx?videocode=21102100">Child - Family - School Social Workers - NEW!</a></p>',
'<p><a title="Clinical, Counseling, and School Psychologists" href="/videos/careeronestop-videos.aspx?videocode=19303100">Clinical, Counseling, and School Psychologists - NEW!</a></p>',
'<p><a title="Community Health Workers" href="/videos/careeronestop-videos.aspx?videocode=21109400">Community Health Workers - NEW!</a></p>',
'<p><a title="Customer Service Representatives" href="/videos/careeronestop-videos.aspx?videocode=43405100">Customer Service Representatives - NEW!</a></p>',
'<p><a title="Emergency Management Directors" href="/videos/careeronestop-videos.aspx?videocode=11916100">Emergency Management Directors - NEW!</a></p>',
'<p><a title="Epidemiologists" href="/videos/careeronestop-videos.aspx?videocode=19104100">Epidemiologists - NEW!</a></p>',
'<p><a title="Fashion Designers" href="/videos/careeronestop-videos.aspx?videocode=27102200">Fashion Designers - NEW!</a></p>',
'<p><a title="Fitness Trainers and Aerobics Instructors" href="/videos/careeronestop-videos.aspx?videocode=39903100">Fitness Trainers and Aerobics Instructors - NEW!</a></p>',
'<p><a title="Hairdressers, Hairstylists, and Cosmetologists" href="/videos/careeronestop-videos.aspx?videocode=39501200">Hairdressers, Hairstylists, and Cosmetologists - NEW!</a></p>',
'<p><a title="Healthcare Social Workers" href="/videos/careeronestop-videos.aspx?videocode=21102200">Healthcare Social Workers - NEW!</a></p>',
'<p><a title="Interpreters and Translators" href="/videos/careeronestop-videos.aspx?videocode=27309100">Interpreters and Translators - NEW!</a></p>',
'<p><a title="Laundry and Dry-Cleaning Workers" href="/videos/careeronestop-videos.aspx?videocode=51601100">Laundry and Dry-Cleaning Workers - NEW!</a></p>',
'<p><a title="Legislators" href="/videos/careeronestop-videos.aspx?videocode=11103100">Legislators - NEW!</a></p>',
'<p><a title="Locker Room Coatroom and Dressing Room Attendants" href="/videos/careeronestop-videos.aspx?videocode=39309300">Locker Room Coatroom and Dressing Room Attendants - NEW!</a></p>',
'<p><a title="Manicurists and Pedicurists" href="/videos/careeronestop-videos.aspx?videocode=39509200">Manicurists and Pedicurists - NEW!</a></p>',
'<p><a title="Marketing Managers" href="/videos/careeronestop-videos.aspx?videocode=11202100">Marketing Managers - NEW!</a></p>',
'<p><a title="Marriage and Family Therapists" href="/videos/careeronestop-videos.aspx?videocode=21101300">Marriage and Family Therapists - NEW!</a></p>',
'<p><a title="Massage Therapists" href="/videos/careeronestop-videos.aspx?videocode=31901100">Massage Therapists - NEW!</a></p>',
'<p><a title="Mathematicians" href="/videos/careeronestop-videos.aspx?videocode=15202100">Mathematicians - NEW!</a></p>',
'<p><a title="Mental Health and Substance Abuse Social Workers" href="/videos/careeronestop-videos.aspx?videocode=21102300">Mental Health and Substance Abuse Social Workers - NEW!</a></p>',
'<p><a title="Mental Health Counselors" href="/videos/careeronestop-videos.aspx?videocode=21101400">Mental Health Counselors - NEW!</a></p>',
'<p><a title="Morticians Undertakers and Funeral Directors" href="/videos/careeronestop-videos.aspx?videocode=39403100">Morticians Undertakers and Funeral Directors - NEW!</a></p>',
'<p><a title="Music Directors and Composers" href="/videos/careeronestop-videos.aspx?videocode=27204100">Music Directors and Composers - NEW!</a></p>',
'<p><a title="Music Therapists" href="/videos/careeronestop-videos.aspx?videocode=29112502">Music Therapists - NEW!</a></p>',
'<p><a title="Natural Sciences Managers" href="/videos/careeronestop-videos.aspx?videocode=11912100">Natural Sciences Managers - NEW!</a></p>',
'<p><a title="Personal Care Aides" href="/videos/careeronestop-videos.aspx?videocode=39902100">Personal Care Aides - NEW!</a></p>',
'<p><a title="Preschool Teachers Except Special Education" href="/videos/careeronestop-videos.aspx?videocode=25201100">Preschool Teachers Except Special Education - NEW!</a></p>',
'<p><a title="Property, Real Estate, and Community Association Managers" href="/videos/careeronestop-videos.aspx?videocode=11914100">Property, Real Estate, and Community Association Managers - NEW!</a></p>',
'<p><a title="Psychologists" href="/videos/careeronestop-videos.aspx?videocode=19303900">Psychologists - NEW!</a></p>',
'<p><a title="Public Relations Specialists" href="/videos/careeronestop-videos.aspx?videocode=27303100">Public Relations Specialists - NEW!</a></p>',
'<p><a title="Rehabilitation Counselors" href="/videos/careeronestop-videos.aspx?videocode=21101500">Rehabilitation Counselors - NEW!</a></p>',
'<p><a title="Sales Managers" href="/videos/careeronestop-videos.aspx?videocode=11202200">Sales Managers - NEW!</a></p>',
'<p><a title="Skincare Specialists" href="/videos/careeronestop-videos.aspx?videocode=39509400">Skincare Specialists - NEW!</a></p>',
'<p><a title="Social and Community Service Managers" href="/videos/careeronestop-videos.aspx?videocode=11915100">Social and Community Service Managers - NEW!</a></p>',
'<p><a title="Sociologists" href="/videos/careeronestop-videos.aspx?videocode=19304100">Sociologists - NEW!</a></p>',
'<p><a title="Substance Abuse and Behavioral Disorder Counselors" href="/videos/careeronestop-videos.aspx?videocode=21101100">Substance Abuse and Behavioral Disorder Counselors - NEW!</a></p>'
];

const itNew = [
'<p><a title="Architectural and Engineering Managers" href="/videos/careeronestop-videos.aspx?videocode=11904100">Architectural and Engineering Managers - NEW!</a></p>',
'<p><a title="Computer and Information Research Scientists" href="/videos/careeronestop-videos.aspx?videocode=15111100">Computer and Information Research Scientists - NEW!</a></p>',
'<p><a title="Computer and Information Systems Managers" href="/videos/careeronestop-videos.aspx?videocode=11302100">Computer and Information Systems Managers - NEW!</a></p>',
'<p><a title="Computer Hardware Engineers" href="/videos/careeronestop-videos.aspx?videocode=17206100">Computer Hardware Engineers - NEW!</a></p>',
'<p><a title="Computer Network Architects" href="/videos/careeronestop-videos.aspx?videocode=15114300">Computer Network Architects - NEW!</a></p>',
'<p><a title="Computer Network Support Specialists" href="/videos/careeronestop-videos.aspx?videocode=15115200">Computer Network Support Specialists - NEW!</a></p>',
'<p><a title="Computer Operators" href="/videos/careeronestop-videos.aspx?videocode=43901100">Computer Operators - NEW!</a></p>',
'<p><a title="Computer Programmers" href="/videos/careeronestop-videos.aspx?videocode=15113100">Computer Programmers - NEW!</a></p>',
'<p><a title="Computer Systems Analyst" href="/videos/careeronestop-videos.aspx?videocode=15112100">Computer Systems Analyst - NEW!</a></p>',
'<p><a title="Computer User Support Specialists" href="/videos/careeronestop-videos.aspx?videocode=15115100">Computer User Support Specialists - NEW!</a></p>',
'<p><a title="Information Security Analysts" href="/videos/careeronestop-videos.aspx?videocode=15112200">Information Security Analysts - NEW!</a></p>',
'<p><a title="Database Administrators" href="/videos/careeronestop-videos.aspx?videocode=15114100">Database Administrators - NEW!</a></p>',
'<p><a title="Multimedia Artists and Animators" href="/videos/careeronestop-videos.aspx?videocode=27101400">Multimedia Artists and Animators - NEW!</a></p>',
'<p><a title="Network and Computer Systems Administrators" href="/videos/careeronestop-videos.aspx?videocode=15114200">Network and Computer Systems Administrators - NEW!</a></p>',
'<p><a title="Software Developers Applications" href="/videos/careeronestop-videos.aspx?videocode=15113200">Software Developers Applications - NEW!</a></p>',
'<p><a title="Video Game Designers" href="/videos/careeronestop-videos.aspx?videocode=15119911">Video Game Designers - NEW!</a></p>',
'<p><a title="Web Developer" href="/videos/careeronestop-videos.aspx?videocode=15113400">Web Developer - NEW!</a></p>'
];

const laNew = [
'<p><a title="Administrative Law Judges Adjudicators and Hearing Officers" href="/videos/careeronestop-videos.aspx?videocode=23102100">Administrative Law Judges Adjudicators and Hearing Officers - NEW!</a></p>',
'<p><a title="Arbitrators Mediators and Conciliators" href="/videos/careeronestop-videos.aspx?videocode=23102200">Arbitrators Mediators and Conciliators - NEW!</a></p>',
'<p><a title="Animal Control Workers" href="/videos/careeronestop-videos.aspx?videocode=33901100">Animal Control Workers - NEW!</a></p>',
'<p><a title="Bailiffs" href="/videos/careeronestop-videos.aspx?videocode=33301100">Bailiffs - NEW!</a></p>',
'<p><a title="Child - Family - School Social Workers" href="/videos/careeronestop-videos.aspx?videocode=21102100">Child - Family - School Social Workers - NEW!</a></p>',
'<p><a title="Correctional Officers and Jailers" href="/videos/careeronestop-videos.aspx?videocode=33301200">Correctional Officers and Jailers - NEW!</a></p>',
'<p><a title="Emergency Management Directors" href="/videos/careeronestop-videos.aspx?videocode=11916100">Emergency Management Directors - NEW!</a></p>',
'<p><a title="Emergency Medical Technicians and Paramedics" href="/videos/careeronestop-videos.aspx?videocode=29204100">Emergency Medical Technicians and Paramedics - NEW!</a></p>',
'<p><a title="Firefighters" href="/videos/careeronestop-videos.aspx?videocode=33201100">Firefighters - NEW!</a></p>',
'<p><a title="Fire Inspectors and Investigators" href="/videos/careeronestop-videos.aspx?videocode=33202100">Fire Inspectors and Investigators - NEW!</a></p>',
'<p><a title="Forensic Science Technicians" href="/videos/careeronestop-videos.aspx?videocode=19409200">Forensic Science Technicians - NEW!</a></p>',
'<p><a title="Forest Fire Fighters" href="/videos/careeronestop-videos.aspx?videocode=33201102">Forest Fire Fighters - NEW!</a></p>',
'<p><a title="Forest Fire Inspectors and Prevention Specialists" href="/videos/careeronestop-videos.aspx?videocode=33202200">Forest Fire Inspectors and Prevention Specialists - NEW!</a></p>',
'<p><a title="Gaming Surveillance Officers and Gaming Investigators" href="/videos/careeronestop-videos.aspx?videocode=33903100">Gaming Surveillance Officers and Gaming Investigators - NEW!</a></p>',
'<p><a title="Hazardous Materials Removal Workers" href="/videos/careeronestop-videos.aspx?videocode=47404100">Hazardous Materials Removal Workers - NEW!</a></p>',
'<p><a title="Immigration and Customs Inspectors" href="/videos/careeronestop-videos.aspx?videocode=33302105">Immigration and Customs Inspectors - NEW!</a></p>',
'<p><a title="Judges, Magistrate Judges, and Magistrates" href="/videos/careeronestop-videos.aspx?videocode=23102300">Judges, Magistrate Judges, and Magistrates - NEW!</a></p>',
'<p><a title="Lawyers" href="/videos/careeronestop-videos.aspx?videocode=23101100">Lawyers - NEW!</a></p>',
'<p><a title="Legal Secretaries" href="/videos/careeronestop-videos.aspx?videocode=43601200">Legal Secretaries - NEW!</a></p>',
'<p><a title="Loss Prevention Managers" href="/videos/careeronestop-videos.aspx?videocode=11919908">Loss Prevention Managers - NEW!</a></p>',
'<p><a title="Paralegals and Legal Assistants" href="/videos/careeronestop-videos.aspx?videocode=23201100">Paralegals and Legal Assistants - NEW!</a></p>',
'<p><a title="Police, Fire, and Ambulance Dispatchers" href="/videos/careeronestop-videos.aspx?videocode=43503100">Police, Fire, and Ambulance Dispatchers - NEW!</a></p>',
'<p><a title="Police Patrol Officers" href="/videos/careeronestop-videos.aspx?videocode=33305101">Police Patrol Officers - NEW!</a></p>',
'<p><a title="Private Detectives and Investigators" href="/videos/careeronestop-videos.aspx?videocode=33902100">Private Detectives and Investigators - NEW!</a></p>',
'<p><a title="Probation Officers and Correctional Treatment Specialists" href="/videos/careeronestop-videos.aspx?videocode=21109200">Probation Officers and Correctional Treatment Specialists - NEW!</a></p>',
'<p><a title="Security Guards" href="/videos/careeronestop-videos.aspx?videocode=33903200">Security Guards - NEW!</a></p>',
'<p><a title="Security Managers" href="/videos/careeronestop-videos.aspx?videocode=11919907">Security Managers - NEW!</a></p>',
'<p><a title="Transportation Security Screeners" href="/videos/careeronestop-videos.aspx?videocode=33909300">Transportation Security Screeners - NEW!</a></p>'
];

const manNew = [
'<p><a title="Aircraft Structure, Surfaces, Rigging, and Systems Assemblers" href="/videos/careeronestop-videos.aspx?videocode=51201100">Aircraft Structure, Surfaces, Rigging, and Systems Assemblers - NEW!</a></p>',
'<p><a title="Bakers" href="/videos/careeronestop-videos.aspx?videocode=51301100">Bakers - NEW!</a></p>',
'<p><a title="Biological Technicians" href="/videos/careeronestop-videos.aspx?videocode=19402100">Biological Technicians - NEW!</a></p>',
'<p><a title="Boilermakers" href="/videos/careeronestop-videos.aspx?videocode=47201100">Boilermakers - NEW!</a></p>',
'<p><a title="Cabinetmakers and Bench Carpenters" href="/videos/careeronestop-videos.aspx?videocode=51701100">Cabinetmakers and Bench Carpenters - NEW!</a></p>',
'<p><a title="Chemical Technicians" href="/videos/careeronestop-videos.aspx?videocode=19403100">Chemical Technicians - NEW!</a></p>',
'<p><a title="Chemists" href="/videos/careeronestop-videos.aspx?videocode=19203100">Chemists - NEW!</a></p>',
'<p><a title="Civil Engineering Technicians" href="/videos/careeronestop-videos.aspx?videocode=17302200">Civil Engineering Technicians - NEW!</a></p>',
'<p><a title="Coating, Painting, and Spraying Machine Setters, Operators, and Tenders" href="/videos/careeronestop-videos.aspx?videocode=51912100">Coating, Painting, and Spraying Machine Setters, Operators, and Tenders - NEW!</a></p>',
'<p><a title="Coil Winders, Tapers, and Finishers" href="/videos/careeronestop-videos.aspx?videocode=51202100">Coil Winders, Tapers, and Finishers - NEW!</a></p>',
'<p><a title="Computer-Controlled Machine Tool Operators, Metal and Plastic" href="/videos/careeronestop-videos.aspx?videocode=51401100">Computer-Controlled Machine Tool Operators, Metal and Plastic - NEW!</a></p>',
'<p><a title="Computer Numerically Controlled Machine Tool Programmers, Metal and Plastic" href="/videos/careeronestop-videos.aspx?videocode=51401200">Computer Numerically Controlled Machine Tool Programmers, Metal and Plastic - NEW!</a></p>',
'<p><a title="Conveyor Operators and Tenders" href="/videos/careeronestop-videos.aspx?videocode=53701100">Conveyor Operators and Tenders - NEW!</a></p>',
'<p><a title="Crushing, Grinding, and Polishing Machine Setters, Operators, and Tenders" href="/videos/careeronestop-videos.aspx?videocode=51902100">Crushing, Grinding, and Polishing Machine Setters, Operators, and Tenders - NEW!</a></p>',
'<p><a title="Cutting, Punching and Press Machine Setters, Operators, and Tenders, Metal and Plastic" href="/videos/careeronestop-videos.aspx?videocode=51403100">Cutting, Punching and Press Machine Setters, Operators, and Tenders, Metal and Plastic - NEW!</a></p>',
'<p><a title="Dental Laboratory Technicians" href="/videos/careeronestop-videos.aspx?videocode=51908100">Dental Laboratory Technicians - NEW!</a></p>',
'<p><a title="Drilling and Boring Machine Tool Setters, Operators, and Tenders, Metal and Plastic" href="/videos/careeronestop-videos.aspx?videocode=51403200">Drilling and Boring Machine Tool Setters, Operators, and Tenders, Metal and Plastic - NEW!</a></p>',
'<p><a title="Electric Motor, Power Tool, and Related Repairers" href="/videos/careeronestop-videos.aspx?videocode=49209200">Electric Motor, Power Tool, and Related Repairers - NEW!</a></p>',
'<p><a title="Electrical and Electronic Engineering Technicians" href="/videos/careeronestop-videos.aspx?videocode=17302300">Electrical and Electronic Engineering Technicians - NEW!</a></p>',
'<p><a title="Electrical and Electronic Equipment Assemblers" href="/videos/careeronestop-videos.aspx?videocode=51202200">Electrical and Electronic Equipment Assemblers - NEW!</a></p>',
'<p><a title="Electrical and Electronics Installers and Repairers, Transportation Equipment" href="/videos/careeronestop-videos.aspx?videocode=49209300">Electrical and Electronics Installers and Repairers, Transportation Equipment - NEW!</a></p>',
'<p><a title="Electrical and Electronics Repairers, Commercial and Industrial Equipment" href="/videos/careeronestop-videos.aspx?videocode=49209400">Electrical and Electronics Repairers, Commercial and Industrial Equipment - NEW!</a></p>',
'<p><a title="Electrical and Electronics Repairers, Powerhouse, Substation, and Relay" href="/videos/careeronestop-videos.aspx?videocode=49209500">Electrical and Electronics Repairers, Powerhouse, Substation, and Relay - NEW!</a></p>',
'<p><a title="Electromechanical Equipment Assemblers" href="/videos/careeronestop-videos.aspx?videocode=51202300">Electromechanical Equipment Assemblers - NEW!</a></p>',
'<p><a title="Electronic Equipment Installers and Repairers, Motor Vehicles" href="/videos/careeronestop-videos.aspx?videocode=49209600">Electronic Equipment Installers and Repairers, Motor Vehicles - NEW!</a></p>',
'<p><a title="Engine and Other Machine Assemblers" href="/videos/careeronestop-videos.aspx?videocode=51203100">Engine and Other Machine Assemblers - NEW!</a></p>',
'<p><a title="Environmental Engineers" href="/videos/careeronestop-videos.aspx?videocode=17208100">Environmental Engineers - NEW!</a></p>',
'<p><a title="Etchers and Engravers" href="/videos/careeronestop-videos.aspx?videocode=51919400">Etchers and Engravers - NEW!</a></p>',
'<p><a title="Extruding and Drawing Machine Setters, Operators, and Tenders, Metal and Plastic" href="/videos/careeronestop-videos.aspx?videocode=51202100">Extruding and Drawing Machine Setters, Operators, and Tenders, Metal and Plastic - NEW!</a></p>',
'<p><a title="Extruding, Forming, Pressing, and Compacting Machine Setters, Operators and Tenders" href="/videos/careeronestop-videos.aspx?videocode=51904100">Extruding, Forming, Pressing, and Compacting Machine Setters, Operators and Tenders - NEW!</a></p>',
'<p><a title="Fashion Designers" href="/videos/careeronestop-videos.aspx?videocode=27102200">Fashion Designers - NEW!</a></p>',
'<p><a title="Fiberglass Laminators and Fabricators" href="/videos/careeronestop-videos.aspx?videocode=51209100">Fiberglass Laminators and Fabricators - NEW!</a></p>',
'<p><a title="Food Batchmakers" href="/videos/careeronestop-videos.aspx?videocode=51309200">Food Batchmakers - NEW!</a></p>',
'<p><a title="Food Cooking Machine Operators and Tenders" href="/videos/careeronestop-videos.aspx?videocode=51309300">Food Cooking Machine Operators and Tenders - NEW!</a></p>',
'<p><a title="Food and Tobacco Roasting, Baking, and Drying Machine Operators and Tenders" href="/videos/careeronestop-videos.aspx?videocode=51309100">Food and Tobacco Roasting, Baking, and Drying Machine Operators and Tenders - NEW!</a></p>',
'<p><a title="Forging Machine Setters, Operators, and Tenders, Metal and Plastic" href="/videos/careeronestop-videos.aspx?videocode=51402200">Forging Machine Setters, Operators, and Tenders, Metal and Plastic - NEW!</a></p>',
'<p><a title="Foundry Mold and Coremakers" href="/videos/careeronestop-videos.aspx?videocode=51407100">Foundry Mold and Coremakers - NEW!</a></p>',
'<p><a title="Furniture Finishers" href="/videos/careeronestop-videos.aspx?videocode=51702100">Furniture Finishers - NEW!</a></p>',
'<p><a title="Gem and Diamond Workers" href="/videos/careeronestop-videos.aspx?videocode=51907106">Gem and Diamond Workers - NEW!</a></p>',
'<p><a title="Hazardous Materials Removal Workers" href="/videos/careeronestop-videos.aspx?videocode=47404100">Hazardous Materials Removal Workers - NEW!</a></p>',
'<p><a title="Heat Treating Equipment Setters, Operators, and Tenders, Metal and Plastic" href="/videos/careeronestop-videos.aspx?videocode=51419100">Heat Treating Equipment Setters, Operators, and Tenders, Metal and Plastic - NEW!</a></p>',
'<p><a title="Industrial Engineering Technicians" href="/videos/careeronestop-videos.aspx?videocode=17302600">Industrial Engineering Technicians - NEW!</a></p>',
'<p><a title="Industrial Machinery Mechanics" href="/videos/careeronestop-videos.aspx?videocode=49904100">Industrial Machinery Mechanics - NEW!</a></p>',
'<p><a title="Industrial Production Managers" href="/videos/careeronestop-videos.aspx?videocode=11305100">Industrial Production Managers - NEW!</a></p>',
'<p><a title="Inspectors, Testers, Sorters, Samplers, and Weighers" href="/videos/careeronestop-videos.aspx?videocode=51906100">Inspectors, Testers, Sorters, Samplers, and Weighers - NEW!</a></p>',
'<p><a title="Interior Designers" href="/videos/careeronestop-videos.aspx?videocode=27102500">Interior Designers - NEW!</a></p>',
'<p><a title="Jewelers" href="/videos/careeronestop-videos.aspx?videocode=51907101">Jewelers - NEW!</a></p>',
'<p><a title="Jewelers and Precious Stone and Metal Workers" href="/videos/careeronestop-videos.aspx?videocode=51907100">Jewelers and Precious Stone and Metal Workers - NEW!</a></p>',
'<p><a title="Lathe and Turning Machine Tool Setters, Operators, and Tenders, Metal and Plastic" href="/videos/careeronestop-videos.aspx?videocode=51403400">Lathe and Turning Machine Tool Setters, Operators, and Tenders, Metal and Plastic - NEW!</a></p>',
'<p><a title="Locksmiths and Safe Repairers" href="/videos/careeronestop-videos.aspx?videocode=49909400">Locksmiths and Safe Repairers - NEW!</a></p>',
'<p><a title="Machine Feeders and Offbearers" href="/videos/careeronestop-videos.aspx?videocode=53706300">Machine Feeders and Offbearers - NEW!</a></p>',
'<p><a title="Machinists" href="/videos/careeronestop-videos.aspx?videocode=51404100">Machinists - NEW!</a></p>',
'<p><a title="Maintenance and Repair Workers, General" href="/videos/careeronestop-videos.aspx?videocode=49907100">Maintenance and Repair Workers, General - NEW!</a></p>',
'<p><a title="Maintenance Workers - Machinery" href="/videos/careeronestop-videos.aspx?videocode=49904300">Maintenance Workers - Machinery - NEW!</a></p>',
'<p><a title="Mechanical Engineering Technicians" href="/videos/careeronestop-videos.aspx?videocode=17302700">Mechanical Engineering Technicians - NEW!</a></p>',
'<p><a title="Medical Appliance Technicians" href="/videos/careeronestop-videos.aspx?videocode=51908200">Medical Appliance Technicians - NEW!</a></p>',
'<p><a title="Medical Equipment Repairers" href="/videos/careeronestop-videos.aspx?videocode=49906200">Medical Equipment Repairers - NEW!</a></p>',
'<p><a title="Metal-Refining Furnace Operators and Tenders" href="/videos/careeronestop-videos.aspx?videocode=51405100">Metal-Refining Furnace Operators and Tenders - NEW!</a></p>',
'<p><a title="Milling and Planning Machine Setters, Operators, and Tenders, Metal and Plastic" href="/videos/careeronestop-videos.aspx?videocode=51403500">Milling and Planning Machine Setters, Operators, and Tenders, Metal and Plastic - NEW!</a></p>',
'<p><a title="Millwrights" href="/videos/careeronestop-videos.aspx?videocode=49904400">Millwrights - NEW!</a></p>',
'<p><a title="Mobile Heavy Equipment Mechanics, Except Engines" href="/videos/careeronestop-videos.aspx?videocode=49304200">Mobile Heavy Equipment Mechanics, Except Engines - NEW!</a></p>',
'<p><a title="Model Makers, Metal and Plastic" href="/videos/careeronestop-videos.aspx?videocode=51406100">Model Makers, Metal and Plastic - NEW!</a></p>',
'<p><a title="Molding, Coremaking, and Casting Machine Setters, Operators, and Tenders, Metal and Plastic" href="/videos/careeronestop-videos.aspx?videocode=51407200">Molding, Coremaking, and Casting Machine Setters, Operators, and Tenders, Metal and Plastic - NEW!</a></p>',
'<p><a title="Multiple Machine Tool Setters, Operators, and Tenders, Metal and Plastic" href="/videos/careeronestop-videos.aspx?videocode=51408100">Multiple Machine Tool Setters, Operators, and Tenders, Metal and Plastic - NEW!</a></p>',
'<p><a title="Nuclear Power Reactor Operators" href="/videos/careeronestop-videos.aspx?videocode=51801100">Nuclear Power Reactor Operators - NEW!</a></p>',
'<p><a title="Ophthalmic Laboratory Technicians" href="/videos/careeronestop-videos.aspx?videocode=51908300">Ophthalmic Laboratory Technicians - NEW!</a></p>',
'<p><a title="Packers and Packagers, Hand" href="/videos/careeronestop-videos.aspx?videocode=53706400">Packers and Packagers, Hand - NEW!</a></p>',
'<p><a title="Painters, Transportation Equipment" href="/videos/careeronestop-videos.aspx?videocode=51912200">Painters, Transportation Equipment - NEW!</a></p>',
'<p><a title="Painting, Coating, and Decorating Workers" href="/videos/careeronestop-videos.aspx?videocode=51912300">Painting, Coating, and Decorating Workers - NEW!</a></p>',
'<p><a title="Patternmakers, Metal and Plastic" href="/videos/careeronestop-videos.aspx?videocode=51406200">Patternmakers, Metal and Plastic - NEW!</a></p>',
'<p><a title="Plating and Coating Machine Setters, Operators, and Tenders, Metal and Plastic" href="/videos/careeronestop-videos.aspx?videocode=51419300">Plating and Coating Machine Setters, Operators, and Tenders, Metal and Plastic - NEW!</a></p>',
'<p><a title="Pourers and Casters, Metal" href="/videos/careeronestop-videos.aspx?videocode=51405200">Pourers and Casters, Metal - NEW!</a></p>',
'<p><a title="Power Distributors and Dispatchers" href="/videos/careeronestop-videos.aspx?videocode=51801200">Power Distributors and Dispatchers - NEW!</a></p>',
'<p><a title="Power Plant Operators" href="/videos/careeronestop-videos.aspx?videocode=51801300">Power Plant Operators - NEW!</a></p>',
'<p><a title="Precious Metal Workers" href="/videos/careeronestop-videos.aspx?videocode=51907107">Precious Metal Workers - NEW!</a></p>',
'<p><a title="Production, Planning, and Expediting Clerks" href="/videos/careeronestop-videos.aspx?videocode=43506100">Production, Planning, and Expediting Clerks - NEW!</a></p>',
'<p><a title="Quality Control Systems Managers" href="/videos/careeronestop-videos.aspx?videocode=11305101">Quality Control Systems Managers - NEW!</a></p>',
'<p><a title="Rail Car Repairers" href="/videos/careeronestop-videos.aspx?videocode=49304300">Rail Car Repairers - NEW!</a></p>',
'<p><a title="Rolling Machine Setters, Operators, and Tenders, Metal and Plastic" href="/videos/careeronestop-videos.aspx?videocode=51402300">Rolling Machine Setters, Operators, and Tenders, Metal and Plastic - NEW!</a></p>',
'<p><a title="Sheet Metal Workers" href="/videos/careeronestop-videos.aspx?videocode=47221100">Sheet Metal Workers - NEW!</a></p>',
'<p><a title="Structural Metal Fabricators and Fitters" href="/videos/careeronestop-videos.aspx?videocode=51204100">Structural Metal Fabricators and Fitters - NEW!</a></p>',
'<p><a title="Team Assemblers" href="/videos/careeronestop-videos.aspx?videocode=51209200">Team Assemblers - NEW!</a></p>',
'<p><a title="Telecommunications Equipment Installers and Repairers, Except Line Installers" href="/videos/careeronestop-videos.aspx?videocode=49202200">Telecommunications Equipment Installers and Repairers, Except Line Installers - NEW!</a></p>',
'<p><a title="Telecommunications Line Installers and Repairers" href="/videos/careeronestop-videos.aspx?videocode=49905200">Telecommunications Line Installers and Repairers - NEW!</a></p>',
'<p><a title="Timing Device Assemblers and Adjusters" href="/videos/careeronestop-videos.aspx?videocode=51209300">Timing Device Assemblers and Adjusters - NEW!</a></p>',
'<p><a title="Tool and Die Makers" href="/videos/careeronestop-videos.aspx?videocode=51411100">Tool and Die Makers - NEW!</a></p>',
'<p><a title="Watch Repairers" href="/videos/careeronestop-videos.aspx?videocode=49906400">Watch Repairers - NEW!</a></p>',
'<p><a title="Welders, cutters, solderers, and brazers" href="/videos/careeronestop-videos.aspx?videocode=51412100">Welders, cutters, solderers, and brazers - NEW!</a></p>',
'<p><a title="Woodworking Machine Setters, Operators, and Tenders, Except Sawing" href="/videos/careeronestop-videos.aspx?videocode=51704200">Woodworking Machine Setters, Operators, and Tenders, Except Sawing - NEW!</a></p>',
'<p><a title="Wood Sawing Machine Setters, Operators, and Tenders" href="/videos/careeronestop-videos.aspx?videocode=51704100">Wood Sawing Machine Setters, Operators, and Tenders - NEW!</a></p>'
];

const marNew = [
'<p><a title="Advertising and Promotions Managers" href="/videos/careeronestop-videos.aspx?videocode=11201100">Advertising and Promotions Managers - NEW!</a></p>',
'<p><a title="Appraisers - Real Estate" href="/videos/careeronestop-videos.aspx?videocode=13202102">Appraisers - Real Estate - NEW!</a></p>',
'<p><a title="Art Directors" href="/videos/careeronestop-videos.aspx?videocode=27101100">Art Directors - NEW!</a></p>',
'<p><a title="Cashiers" href="/videos/careeronestop-videos.aspx?videocode=41201100">Cashiers - NEW!</a></p>',
'<p><a title="Customer Service Representatives" href="/videos/careeronestop-videos.aspx?videocode=43405100">Customer Service Representatives - NEW!</a></p>',
'<p><a title="Driver/Sales Workers" href="/videos/careeronestop-videos.aspx?videocode=53303100">Driver/Sales Workers - NEW!</a></p>',
'<p><a title="Fashion Designers" href="/videos/careeronestop-videos.aspx?videocode=27102200">Fashion Designers - NEW!</a></p>',
'<p><a title="Gem and Diamond Workers" href="/videos/careeronestop-videos.aspx?videocode=51907106">Gem and Diamond Workers - NEW!</a></p>',
'<p><a title="Graphic Designers" href="/videos/careeronestop-videos.aspx?videocode=27102400">Graphic Designers - NEW!</a></p>',
'<p><a title="Green Marketers" href="/videos/careeronestop-videos.aspx?videocode=11201101">Green Marketers - NEW!</a></p>',
'<p><a title="Hotel, Motel, and Resort Desk Clerks" href="/videos/careeronestop-videos.aspx?videocode=43408100">Hotel, Motel, and Resort Desk Clerks - NEW!</a></p>',
'<p><a title="Interior Designers" href="/videos/careeronestop-videos.aspx?videocode=27102500">Interior Designers - NEW!</a></p>',
'<p><a title="Jewelers" href="/videos/careeronestop-videos.aspx?videocode=51907101">Jewelers - NEW!</a></p>',
'<p><a title="Lodging Managers" href="/videos/careeronestop-videos.aspx?videocode=11908100">Lodging Managers - NEW!</a></p>',
'<p><a title="Marketing Managers" href="/videos/careeronestop-videos.aspx?videocode=11202100">Marketing Managers - NEW!</a></p>',
'<p><a title="Market Research Analysts and Marketing Specialists" href="/videos/careeronestop-videos.aspx?videocode=13116100">Market Research Analysts and Marketing Specialists - NEW!</a></p>',
'<p><a title="Models" href="/videos/careeronestop-videos.aspx?videocode=41901200">Models - NEW!</a></p>',
'<p><a title="Office Clerks, General" href="/videos/careeronestop-videos.aspx?videocode=43906100">Office Clerks, General - NEW!</a></p>',
'<p><a title="Online Merchants" href="/videos/careeronestop-videos.aspx?videocode=13119906">Online Merchants - NEW!</a></p>',
'<p><a title="Order Clerks" href="/videos/careeronestop-videos.aspx?videocode=43415100">Order Clerks - NEW!</a></p>',
'<p><a title="Parking Lot Attendants" href="/videos/careeronestop-videos.aspx?videocode=53602100">Parking Lot Attendants - NEW!</a></p>',
'<p><a title="Parts Salesperson" href="/videos/careeronestop-videos.aspx?videocode=41202200">Parts Salesperson - NEW!</a></p>',
'<p><a title="Property, Real Estate, and Community Association Managers" href="/videos/careeronestop-videos.aspx?videocode=11914100">Property, Real Estate, and Community Association Managers - NEW!</a></p>',
'<p><a title="Real Estate Sales Agents" href="/videos/careeronestop-videos.aspx?videocode=41902200">Real Estate Sales Agents - NEW!</a></p>',
'<p><a title="Real Estate Brokers" href="/videos/careeronestop-videos.aspx?videocode=41902100">Real Estate Brokers - NEW!</a></p>',
'<p><a title="Retail Salesperson" href="/videos/careeronestop-videos.aspx?videocode=41203100">Retail Salesperson - NEW!</a></p>',
'<p><a title="Sales Engineers" href="/videos/careeronestop-videos.aspx?videocode=41903100">Sales Engineers - NEW!</a></p>',
'<p><a title="Sales Managers" href="/videos/careeronestop-videos.aspx?videocode=11202200">Sales Managers - NEW!</a></p>',
'<p><a title="Sales Representatives, Wholesale and Manufacturing, Technical and Scientific Products" href="/videos/careeronestop-videos.aspx?videocode=41401100">Sales Representatives, Wholesale and Manufacturing, Technical and Scientific Products - NEW!</a></p>',
'<p><a title=" Sales Representatives, Wholesale and Manufacturing, Except Technical and Scientific" href="/videos/careeronestop-videos.aspx?videocode=41401200"> Sales Representatives, Wholesale and Manufacturing, Except Technical and Scientific - NEW!</a></p>',
'<p><a title="Stock Clerks and Order Fillers" href="/videos/careeronestop-videos.aspx?videocode=43508100">Stock Clerks and Order Fillers - NEW!</a></p>',
'<p><a title="Stock Clerk - Sales Floor" href="/videos/careeronestop-videos.aspx?videocode=43508101">Stock Clerk - Sales Floor - NEW!</a></p>',
'<p><a title="Travel Agents" href="/videos/careeronestop-videos.aspx?videocode=41304100">Travel Agents - NEW!</a></p>',
'<p><a title="Weighers, Measurers, Checkers, and Samplers, Recordkeeping" href="/videos/careeronestop-videos.aspx?videocode=43511100">Weighers, Measurers, Checkers, and Samplers, Recordkeeping - NEW!</a></p>',
'<p><a title="Wholesale and Retail Buyers - Except Farm Products" href="/videos/careeronestop-videos.aspx?videocode=13102200">Wholesale and Retail Buyers - Except Farm Products - NEW!</a></p>'
];

const steNew = [
'<p><a title="Aerospace Engineers" href="/videos/careeronestop-videos.aspx?videocode=17201100">Aerospace Engineers - NEW!</a></p>',
'<p><a title="Agricultural Engineers" href="/videos/careeronestop-videos.aspx?videocode=17202100">Agricultural Engineers - NEW!</a></p>',
'<p><a title="Agricultural and Food Science Technicians" href="/videos/careeronestop-videos.aspx?videocode=19401100">Agricultural and Food Science Technicians - NEW!</a></p>',
'<p><a title="Animal Scientists" href="/videos/careeronestop-videos.aspx?videocode=19101100">Animal Scientists - NEW!</a></p>',
'<p><a title="Anthropologists" href="/videos/careeronestop-videos.aspx?videocode=19309101">Anthropologists - NEW!</a></p>',
'<p><a title="Archaeologists" href="/videos/careeronestop-videos.aspx?videocode=19309102">Archaeologists - NEW!</a></p>',
'<p><a title="Architectural Drafters" href="/videos/careeronestop-videos.aspx?videocode=17301101">Architectural Drafters - NEW!</a></p>',
'<p><a title="Architectural and Engineering Managers" href="/videos/careeronestop-videos.aspx?videocode=11904100">Architectural and Engineering Managers - NEW!</a></p>',
'<p><a title="Archivists" href="/videos/careeronestop-videos.aspx?videocode=25401100">Archivists - NEW!</a></p>',
'<p><a title="Astronomers" href="/videos/careeronestop-videos.aspx?videocode=19201100">Astronomers - NEW!</a></p>',
'<p><a title="Atmospheric and Space Scientists" href="/videos/careeronestop-videos.aspx?videocode=19202100">Atmospheric and Space Scientists - NEW!</a></p>',
'<p><a title="Biochemists and Biophysicists" href="/videos/careeronestop-videos.aspx?videocode=19102100">Biochemists and Biophysicists - NEW!</a></p>',
'<p><a title="Biofuels / Biodiesel Technology and Product Development Managers" href="/videos/careeronestop-videos.aspx?videocode=11904101">Biofuels / Biodiesel Technology and Product Development Managers - NEW!</a></p>',
'<p><a title="Biological Technicians" href="/videos/careeronestop-videos.aspx?videocode=19402100">Biological Technicians - NEW!</a></p>',
'<p><a title="Biomedical Engineers" href="/videos/careeronestop-videos.aspx?videocode=17203100">Biomedical Engineers - NEW!</a></p>',
'<p><a title="Cartographers and Photogrammetrists" href="/videos/careeronestop-videos.aspx?videocode=17102100">Cartographers and Photogrammetrists - NEW!</a></p>',
'<p><a title="Chemical Engineers" href="/videos/careeronestop-videos.aspx?videocode=17204100">Chemical Engineers - NEW!</a></p>',
'<p><a title="Chemical Technicians" href="/videos/careeronestop-videos.aspx?videocode=19403100">Chemical Technicians - NEW!</a></p>',
'<p><a title="Chemists" href="/videos/careeronestop-videos.aspx?videocode=19203100">Chemists - NEW!</a></p>',
'<p><a title="Civil Drafters" href="/videos/careeronestop-videos.aspx?videocode=17301102">Civil Drafters - NEW!</a></p>',
'<p><a title="Civil Engineers" href="/videos/careeronestop-videos.aspx?videocode=17205100">Civil Engineers - NEW!</a></p>',
'<p><a title="Civil Engineering Technicians" href="/videos/careeronestop-videos.aspx?videocode=17302200">Civil Engineering Technicians - NEW!</a></p>',
'<p><a title="Climate Change Analysts" href="/videos/careeronestop-videos.aspx?videocode=19204101">Climate Change Analysts - NEW!</a></p>',
'<p><a title="Computer Hardware Engineers" href="/videos/careeronestop-videos.aspx?videocode=17206100">Computer Hardware Engineers - NEW!</a></p>',
'<p><a title="Computer and Information Research Scientists" href="/videos/careeronestop-videos.aspx?videocode=15111100">Computer and Information Research Scientists - NEW!</a></p>',
'<p><a title="Conservation Scientists" href="/videos/careeronestop-videos.aspx?videocode=19103100">Conservation Scientists - NEW!</a></p>',
'<p><a title="Cost Estimators" href="/videos/careeronestop-videos.aspx?videocode=13105100">Cost Estimators - NEW!</a></p>',
'<p><a title="Dietetic Technicians" href="/videos/careeronestop-videos.aspx?videocode=29205100">Dietetic Technicians - NEW!</a></p>',
'<p><a title="Dietitians and Nutritionists" href="/videos/careeronestop-videos.aspx?videocode=29103100">Dietitians and Nutritionists - NEW!</a></p>',
'<p><a title="Economists" href="/videos/careeronestop-videos.aspx?videocode=19301100">Economists - NEW!</a></p>',
'<p><a title="Electrical and Electronic Engineering Technicians" href="/videos/careeronestop-videos.aspx?videocode=17302300">Electrical and Electronic Engineering Technicians - NEW!</a></p>',
'<p><a title="Electrical Engineers" href="/videos/careeronestop-videos.aspx?videocode=17207100">Electrical Engineers - NEW!</a></p>',
'<p><a title="Electro-mechanical Technicians" href="/videos/careeronestop-videos.aspx?videocode=17302400">Electro-mechanical Technicians - NEW!</a></p>',
'<p><a title="Electronics Engineers, Except Computer" href="/videos/careeronestop-videos.aspx?videocode=17207200">Electronics Engineers, Except Computer - NEW!</a></p>',
'<p><a title="Electrical Drafters" href="/videos/careeronestop-videos.aspx?videocode=17301202">Electrical Drafters - NEW!</a></p>',
'<p><a title="Electronic Drafters" href="/videos/careeronestop-videos.aspx?videocode=17301201">Electronic Drafters - NEW!</a></p>',
'<p><a title="Environmental Engineers" href="/videos/careeronestop-videos.aspx?videocode=17208100">Environmental Engineers - NEW!</a></p>',
'<p><a title="Epidemiologists" href="/videos/careeronestop-videos.aspx?videocode=19104100">Epidemiologists - NEW!</a></p>',
'<p><a title="Family and General Practitioners" href="/videos/careeronestop-videos.aspx?videocode=29106200">Family and General Practitioners - NEW!</a></p>',
'<p><a title="Fire Prevention and Protection Engineers" href="/videos/careeronestop-videos.aspx?videocode=17211102">Fire Prevention and Protection Engineers - NEW!</a></p>',
'<p><a title="Food Scientists and Technologists" href="/videos/careeronestop-videos.aspx?videocode=19101200">Food Scientists and Technologists - NEW!</a></p>',
'<p><a title="Geographers" href="/videos/careeronestop-videos.aspx?videocode=19309200">Geographers - NEW!</a></p>',
'<p><a title="Geological and Petroleum Technicians" href="/videos/careeronestop-videos.aspx?videocode=19404100">Geological and Petroleum Technicians - NEW!</a></p>',
'<p><a title="Geological Sample Test Technicians" href="/videos/careeronestop-videos.aspx?videocode=19404102">Geological Sample Test Technicians - NEW!</a></p>',
'<p><a title="Geophysical Data Technicians" href="/videos/careeronestop-videos.aspx?videocode=19404101">Geophysical Data Technicians - NEW!</a></p>',
'<p><a title="Geoscientists, Except Hydrologists and Geographers" href="/videos/careeronestop-videos.aspx?videocode=19204200">Geoscientists, Except Hydrologists and Geographers - NEW!</a></p>',
'<p><a title="Health and Safety Engineers, Except Mining Safety Engineers and Inspectors" href="/videos/careeronestop-videos.aspx?videocode=17211100">Health and Safety Engineers, Except Mining Safety Engineers and Inspectors - NEW!</a></p>',
'<p><a title="Hydrologists" href="/videos/careeronestop-videos.aspx?videocode=19204300">Hydrologists - NEW!</a></p>',
'<p><a title="Industrial Ecologists" href="/videos/careeronestop-videos.aspx?videocode=19204103">Industrial Ecologists - NEW!</a></p>',
'<p><a title="Industrial Engineers" href="/videos/careeronestop-videos.aspx?videocode=17211200">Industrial Engineers - NEW!</a></p>',
'<p><a title="Industrial Safety and Health Engineers" href="/videos/careeronestop-videos.aspx?videocode=17211101">Industrial Safety and Health Engineers - NEW!</a></p>',
'<p><a title="Marine Engineers and Naval Architects" href="/videos/careeronestop-videos.aspx?videocode=17212100">Marine Engineers and Naval Architects - NEW!</a></p>',
'<p><a title="Market Research Analysts and Marketing Specialists" href="/videos/careeronestop-videos.aspx?videocode=13116100">Market Research Analysts and Marketing Specialists - NEW!</a></p>',
'<p><a title="Materials Engineers" href="/videos/careeronestop-videos.aspx?videocode=17213100">Materials Engineers - NEW!</a></p>',
'<p><a title="Materials Scientists" href="/videos/careeronestop-videos.aspx?videocode=19203200">Materials Scientists - NEW!</a></p>',
'<p><a title="Mathematicians" href="/videos/careeronestop-videos.aspx?videocode=15202100">Mathematicians - NEW!</a></p>',
'<p><a title="Medical Scientists, Except Epidemiologists" href="/videos/careeronestop-videos.aspx?videocode=19104200">Medical Scientists, Except Epidemiologists - NEW!</a></p>',
'<p><a title="Mining and Geological Engineers, including Mining Safety Engineers" href="/videos/careeronestop-videos.aspx?videocode=17215100">Mining and Geological Engineers, including Mining Safety Engineers - NEW!</a></p>',
'<p><a title="Natural Sciences Managers" href="/videos/careeronestop-videos.aspx?videocode=11912100">Natural Sciences Managers - NEW!</a></p>',
'<p><a title="Nuclear Engineers" href="/videos/careeronestop-videos.aspx?videocode=17216100">Nuclear Engineers - NEW!</a></p>',
'<p><a title="Nuclear Medicine Technologists" href="/videos/careeronestop-videos.aspx?videocode=29203300">Nuclear Medicine Technologists - NEW!</a></p>',
'<p><a title="Petroleum Engineers" href="/videos/careeronestop-videos.aspx?videocode=17217100">Petroleum Engineers - NEW!</a></p>',
'<p><a title="Physicists" href="/videos/careeronestop-videos.aspx?videocode=19201200">Physicists - NEW!</a></p>',
'<p><a title="Product Safety Engineers" href="/videos/careeronestop-videos.aspx?videocode=17211103">Product Safety Engineers - NEW!</a></p>',
'<p><a title="Quality Control Systems Managers" href="/videos/careeronestop-videos.aspx?videocode=11305101">Quality Control Systems Managers - NEW!</a></p>',
'<p><a title="Soil and Plant Scientists" href="/videos/careeronestop-videos.aspx?videocode=19101300">Soil and Plant Scientists - NEW!</a></p>',
'<p><a title="Statisticians" href="/videos/careeronestop-videos.aspx?videocode=15204100">Statisticians - NEW!</a></p>',
'<p><a title="Surveying and Mapping Technicians" href="/videos/careeronestop-videos.aspx?videocode=17303100">Surveying and Mapping Technicians - NEW!</a></p>',
'<p><a title="Water Resource Specialists" href="/videos/careeronestop-videos.aspx?videocode=11912102">Water Resource Specialists - NEW!</a></p>',
'<p><a title="Wind Turbine Service Technicians" href="/videos/careeronestop-videos.aspx?videocode=49908100">Wind Turbine Service Technicians - NEW!</a></p>',
'<p><a title="Zoologists and Wildlife Biologists" href="/videos/careeronestop-videos.aspx?videocode=19102300">Zoologists and Wildlife Biologists - NEW!</a></p>'
];

const traNew = [
'<p><a title="Administrative Services Managers" href="/videos/careeronestop-videos.aspx?videocode=11301100">Administrative Services Managers - NEW!</a></p>',
'<p><a title="Aerospace Engineering and Operations Technicians" href="/videos/careeronestop-videos.aspx?videocode=17302100">Aerospace Engineering and Operations Technicians - NEW!</a></p>',
'<p><a title="Air Traffic Controllers" href="/videos/careeronestop-videos.aspx?videocode=53202100">Air Traffic Controllers - NEW!</a></p>',
'<p><a title="Aircraft Mechanics and Service Technicians" href="/videos/careeronestop-videos.aspx?videocode=49301100">Aircraft Mechanics and Service Technicians - NEW!</a></p>',
'<p><a title="Airline Pilots, Copilots, and Flight Engineers" href="/videos/careeronestop-videos.aspx?videocode=53201100">Airline Pilots, Copilots, and Flight Engineers - NEW!</a></p>',
'<p><a title="Ambulance Drivers and Attendants, Except EMTs" href="/videos/careeronestop-videos.aspx?videocode=53301100">Ambulance Drivers and Attendants, Except EMTs - NEW!</a></p>',
'<p><a title="Automotive Body and Related Repairers" href="/videos/careeronestop-videos.aspx?videocode=49302100">Automotive Body and Related Repairers - NEW!</a></p>',
'<p><a title="Automotive Glass Installers and Repairers" href="/videos/careeronestop-videos.aspx?videocode=49302200">Automotive Glass Installers and Repairers - NEW!</a></p>',
'<p><a title="Automotive Service Technicians and Mechanics" href="/videos/careeronestop-videos.aspx?videocode=49302300">Automotive Service Technicians and Mechanics - NEW!</a></p>',
'<p><a title="Avionics Technicians" href="/videos/careeronestop-videos.aspx?videocode=49209100">Avionics Technicians - NEW!</a></p>',
'<p><a title="Bus Drivers, School or Special Client" href="/videos/careeronestop-videos.aspx?videocode=53302200">Bus Drivers, School or Special Client - NEW!</a></p>',
'<p><a title="Bus Drivers, Transit and Intercity" href="/videos/careeronestop-videos.aspx?videocode=53302100">Bus Drivers, Transit and Intercity - NEW!</a></p>',
'<p><a title="Bus and Truck Mechanics and Diesel Engine Specialists" href="/videos/careeronestop-videos.aspx?videocode=49303100">Bus and Truck Mechanics and Diesel Engine Specialists - NEW!</a></p>',
'<p><a title="Captains Mates and Pilots of Water Vessels" href="/videos/careeronestop-videos.aspx?videocode=53502100">Captains, Mates and Pilots of Water Vessels - NEW!</a></p>',
'<p><a title="Cargo and Freight Agents" href="/videos/careeronestop-videos.aspx?videocode=43501100">Cargo and Freight Agents - NEW!</a></p>',
'<p><a title="Chief Executives" href="/videos/careeronestop-videos.aspx?videocode=11101100">Chief Executives - NEW!</a></p>',
'<p><a title="Cleaners of Vehicles and Equipment" href="/videos/careeronestop-videos.aspx?videocode=53706100">Cleaners of Vehicles and Equipment - NEW!</a></p>',
'<p><a title="Commercial Pilots" href="/videos/careeronestop-videos.aspx?videocode=53201200">Commercial Pilots - NEW!</a></p>',
'<p><a title="Couriers and Messengers" href="/videos/careeronestop-videos.aspx?videocode=43502100">Couriers and Messengers - NEW!</a></p>',
'<p><a title="Crane and Tower Operators" href="/videos/careeronestop-videos.aspx?videocode=53702100">Crane and Tower Operators - NEW!</a></p>',
'<p><a title="Electronic Equipment Installers and Repairers, Motor Vehicles" href="/videos/careeronestop-videos.aspx?videocode=49209600">Electronic Equipment Installers and Repairers, Motor Vehicles - NEW!</a></p>',
'<p><a title="Flight Attendants" href="/videos/careeronestop-videos.aspx?videocode=53203100">Flight Attendants - NEW!</a></p>',
'<p><a title="Hand Laborers and Freight, Stock, and Material Movers" href="/videos/careeronestop-videos.aspx?videocode=53706200">Hand Laborers and Freight, Stock, and Material Movers - NEW!</a></p>',
'<p><a title="Industrial Safety and Health Engineers" href="/videos/careeronestop-videos.aspx?videocode=17211101">Industrial Safety and Health Engineers - NEW!</a></p>',
'<p><a title="Industrial Truck and Tractor Operators" href="/videos/careeronestop-videos.aspx?videocode=53705100">Industrial Truck and Tractor Operators - NEW!</a></p>',
'<p><a title="Locomotive Engineers" href="/videos/careeronestop-videos.aspx?videocode=53401100">Locomotive Engineers - NEW!</a></p>',
'<p><a title="Locomotive Firers" href="/videos/careeronestop-videos.aspx?videocode=53401200">Locomotive Firers - NEW!</a></p>',
'<p><a title="Logistics Manager" href="/videos/careeronestop-videos.aspx?videocode=11307103">Logistics Manager - NEW!</a></p>',
'<p><a title="Mobile Heavy Equipment Mechanics, Except Engines" href="/videos/careeronestop-videos.aspx?videocode=49304200">Mobile Heavy Equipment Mechanics, Except Engines - NEW!</a></p>',
'<p><a title="Motorboat Mechanics and Service Technicians" href="/videos/careeronestop-videos.aspx?videocode=49305100">Motorboat Mechanics and Service Technicians - NEW!</a></p>',
'<p><a title="Motorboat Operators" href="/videos/careeronestop-videos.aspx?videocode=53502200">Motorboat Operators - NEW!</a></p>',
'<p><a title="Motorcycle Mechanics" href="/videos/careeronestop-videos.aspx?videocode=49305200">Motorcycle Mechanics - NEW!</a></p>',
'<p><a title="Parking Lot Attendants" href="/videos/careeronestop-videos.aspx?videocode=53602100">Parking Lot Attendants - NEW!</a></p>',
'<p><a title="Print Binding and Finishing Workers" href="/videos/careeronestop-videos.aspx?videocode=51511300">Print Binding and Finishing Workers - NEW!</a></p>',
'<p><a title="Production, Planning, and Expediting Clerks" href="/videos/careeronestop-videos.aspx?videocode=43506100">Production, Planning, and Expediting Clerks - NEW!</a></p>',
'<p><a title="Outdoor Power Equipment and Other Small Engine Mechanics" href="/videos/careeronestop-videos.aspx?videocode=49305300">Outdoor Power Equipment and Other Small Engine Mechanics - NEW!</a></p>',
'<p><a title="Rail Car Repairers" href="/videos/careeronestop-videos.aspx?videocode=49304300">Rail Car Repairers - NEW!</a></p>',
'<p><a title="Rail Yard Engineers, Dinkey Operators, and Hostlers " href="/videos/careeronestop-videos.aspx?videocode=53401300">Rail Yard Engineers, Dinkey Operators, and Hostlers - NEW!</a></p>',
'<p><a title="Railroad Brake, Signal, and Switch Operators" href="/videos/careeronestop-videos.aspx?videocode=53402100">Railroad Brake, Signal, and Switch Operators - NEW!</a></p>',
'<p><a title="Railroad Conductors and Yardmasters" href="/videos/careeronestop-videos.aspx?videocode=53403100">Railroad Conductors and Yardmasters - NEW!</a></p>',
'<p><a title="Sailors and Marine Oilers" href="/videos/careeronestop-videos.aspx?videocode=53501100">Sailors and Marine Oilers - NEW!</a></p>',
'<p><a title="Shipping, Receiving, and Traffic Clerks" href="/videos/careeronestop-videos.aspx?videocode=43507100">Shipping, Receiving, and Traffic Clerks - NEW!</a></p>',
'<p><a title="Supply Chain Managers" href="/videos/careeronestop-videos.aspx?videocode=11919904">Supply Chain Managers - NEW!</a></p>',
'<p><a title="Taxi Drivers and Chauffeurs" href="/videos/careeronestop-videos.aspx?videocode=53304100">Taxi Drivers and Chauffeurs - NEW!</a></p>',
'<p><a title="Transportation Managers" href="/videos/careeronestop-videos.aspx?videocode=11307101">Transportation Managers - NEW!</a></p>',
'<p><a title="Transportation Vehicle, Equipment and Systems Inspectors, Except Aviation" href="/videos/careeronestop-videos.aspx?videocode=53605107">Transportation Vehicle, Equipment and Systems Inspectors, Except Aviation - NEW!</a></p>',
'<p><a title="Truck Drivers - Heavy and Tractor-Trailer" href="/videos/careeronestop-videos.aspx?videocode=53303200">Truck Drivers - Heavy and Tractor-Trailer - NEW!</a></p>',
'<p><a title="Truck Drivers - Light or Delivery Services" href="/videos/careeronestop-videos.aspx?videocode=53303300">Truck Drivers - Light or Delivery Services - NEW!</a></p>'
];

//Main Videos Page Cluster Arrays
const agrMain = [
'<p><a title="Agriculture and Natural Resources" href="https://cdn.careeronestop.org/CareerVideos/00-0000.01.mp4">Agriculture and Natural Resources (Cluster Video)</a></p>',
'<p><a title="Agricultural and Food Science Technicians" href="/videos/careeronestop-videos.aspx?videocode=19401100">Agricultural and Food Science Technicians - NEW!</a></p>',
'<p><a title="Agricultural Equipment Operators" href="/videos/careeronestop-videos.aspx?videocode=45209100">Agricultural Equipment Operators - NEW!</a></p>',
'<p><a title="Agricultural Inspectors" href="https://cdn.careeronestop.org/CareerVideos/45-2011.00.mp4">Agricultural Inspectors</a></p>',
'<p><a title="Agricultural Sciences Teachers Postsecondary" href="https://cdn.careeronestop.org/CareerVideos/25-1041.00.mp4">Agricultural Sciences Teachers, Postsecondary</a></p>',
'<p><a title="Animal Breeders" href="/videos/careeronestop-videos.aspx?videocode=45202100">Animal Breeders - NEW!</a></p>',
'<p><a title="Animal Scientists" href="/videos/careeronestop-videos.aspx?videocode=19101100">Animal Scientists - NEW!</a></p>',
'<p><a title="Animal Trainers" href="/videos/careeronestop-videos.aspx?videocode=39201100">Animal Trainers - NEW!</a></p>',
'<p><a title="Aquacultural Managers" href="/videos/careeronestop-videos.aspx?videocode=11901303">Aquacultural Managers - NEW!</a></p>',
'<p><a title="Biochemists and Biophysicists" href="/videos/careeronestop-videos.aspx?videocode=19102100">Biochemists and Biophysicists - NEW!</a></p>',
'<p><a title="Biofuels / Biodiesel Technology and Product Development Managers" href="/videos/careeronestop-videos.aspx?videocode=11904101">Biofuels / Biodiesel Technology and Product Development Managers - NEW!</a></p>',
'<p><a title="Biomass Power Plant Managers" href="/videos/careeronestop-videos.aspx?videocode=11305104">Biomass Power Plant Managers - NEW!</a></p>',
'<p><a title="Brownfield Redevelopment Specialists and Site Managers" href="/videos/careeronestop-videos.aspx?videocode=11919911">Brownfield Redevelopment Specialists and Site Managers - NEW!</a></p>',
'<p><a title="Butchers and Meat Cutters" href="/videos/careeronestop-videos.aspx?videocode=51302100">Butchers and Meat Cutters - NEW!</a></p>',
'<p><a title="Buyers Purchasing Agents - Farm Products" href="/videos/careeronestop-videos.aspx?videocode=13102100">Buyers Purchasing Agents - Farm Products - NEW!</a></p>',
'<p><a title="Chemical Technicians" href="/videos/careeronestop-videos.aspx?videocode=19403100">Chemical Technicians - NEW!</a></p>',
'<p><a title="Chemists" href="/videos/careeronestop-videos.aspx?videocode=19203100">Chemists - NEW!</a></p>',
'<p><a title="Chief Sustainability Officers" href="/videos/careeronestop-videos.aspx?videocode=11101103">Chief Sustainability Officers - NEW!</a></p>',
'<p><a title="Commercial Divers" href="/videos/careeronestop-videos.aspx?videocode=49909200">Commercial Divers - NEW!</a></p>',
'<p><a title="Conservation Scientists" href="/videos/careeronestop-videos.aspx?videocode=19103100">Conservation Scientists - NEW!</a></p>',
'<p><a title="Earth Drillers, Except Oil and Gas" href="https://cdn.careeronestop.org/CareerVideos/47-5021.00.mp4">Earth Drillers, Except Oil and Gas</a></p>',
'<p><a title="Economists" href="/videos/careeronestop-videos.aspx?videocode=19301100">Economists - NEW!</a></p>',
'<p><a title="Environmental Engineering Technicians" href="/videos/careeronestop-videos.aspx?videocode=17302500">Environmental Engineering Technicians - NEW!</a></p>',
'<p><a title="Environmental Engineers" href="/videos/careeronestop-videos.aspx?videocode=17208100">Environmental Engineers - NEW!</a></p>',
'<p><a title="Environmental Restoration Planners" href="/videos/careeronestop-videos.aspx?videocode=19204102">Environmental Restoration Planners - NEW!</a></p>',
'<p><a title="Environmental Scientists and Specialists, Including Health" href="/videos/careeronestop-videos.aspx?videocode=19204100">Environmental Scientists and Specialists, Including Health - NEW!</a></p>',
'<p><a title="Explosives Workers, Ordnance Handling Experts, and Blasters" href="https://cdn.careeronestop.org/CareerVideos/47-5031.00.mp4">Explosives Workers, Ordnance Handling Experts, and Blasters</a></p>',
'<p><a title="Fallers" href="/videos/careeronestop-videos.aspx?videocode=45402100">Fallers - NEW!</a></p>',
'<p><a title="Farm Equipment Mechanics and Service Technicians" href="/videos/careeronestop-videos.aspx?videocode=49304100">Farm Equipment Mechanics and Service Technicians - NEW!</a></p>',
'<p><a title="Farm Labor Contractors" href="/videos/careeronestop-videos.aspx?videocode=13107400">Farm Labor Contractors - NEW!</a></p>',
'<p><a title="Farmers Ranchers and other Agricultural Managers" href="/videos/careeronestop-videos.aspx?videocode=11901300">Farmers, Ranchers, and other Agricultural Managers - NEW!</a></p>',
'<p><a title="Farmworkers and Laborers, Crop, Nursery, and Greenhouse" href="/videos/careeronestop-videos.aspx?videocode=45209200">Farmworkers and Laborers, Crop, Nursery, and Greenhouse - NEW!</a></p>',
'<p><a title="Farmworkers, Farm, Ranch, and Aquacultural Animals" href="/videos/careeronestop-videos.aspx?videocode=45209300">Farmworkers, Farm, Ranch, and Aquacultural Animals - NEW!</a></p>',
'<p><a title="First Line Supervisors - Managers of Construction Trades and Extraction Workers" href="/videos/careeronestop-videos.aspx?videocode=47101100">First Line Supervisors - Managers of Construction Trades and Extraction Workers - NEW!</a></p>',
'<p><a title="First-Line Supervisors/Managers of Farming Fishing and Forestry" href="https://cdn.careeronestop.org/CareerVideos/45-1011.00.mp4">First-Line Supervisors/Managers of Farming, Fishing, and Forestry</a></p>',
'<p><a title="First-Line Supervisors/Managers of Landscaping Lawn Service and Groundskeeping Workers" href="https://cdn.careeronestop.org/CareerVideos/37-1012.00.mp4">First-Line Supervisors/Managers of Landscaping, Lawn Service, and Groundskeeping Workers</a></p>',
'<p><a title="First-Line Supervisors of Logging Workers" href="/videos/careeronestop-videos.aspx?videocode=45101105">First-Line Supervisors of Logging Workers - NEW!</a></p>',
'<p><a title="First-Line Supervisors/Managers of Retail Sales Workers" href="https://cdn.careeronestop.org/CareerVideos/41-1011.00.mp4">First-Line Supervisors/Managers of Retail Sales Workers</a></p>',
'<p><a title="Fish and Game Wardens" href="/videos/careeronestop-videos.aspx?videocode=33303100">Fish and Game Wardens - NEW!</a></p>',
'<p><a title="Fish Hatchery Managers" href="https://cdn.careeronestop.org/CareerVideos/11-9011.03.mp4">Fish Hatchery Managers</a></p>',
'<p><a title="Fishers and Related Fishing Workers" href="/videos/careeronestop-videos.aspx?videocode=45301100">Fishers and Related Fishing Workers - NEW!</a></p>',
'<p><a title="Floral Designers" href="/videos/careeronestop-videos.aspx?videocode=27102300">Floral Designers - NEW!</a></p>',
'<p><a title="Food Scientists and Technologists" href="/videos/careeronestop-videos.aspx?videocode=19101200">Food Scientists and Technologists - NEW!</a></p>',
'<p><a title="Forest and Conservation Technicians" href="https://cdn.careeronestop.org/CareerVideos/19-4093.00.mp4">Forest and Conservation Technicians</a></p>',
'<p><a title="Forest and Conservation Workers" href="https://cdn.careeronestop.org/CareerVideos/45-4011.00.mp4">Forest and Conservation Workers</a></p>',
'<p><a title="Foresters" href="https://cdn.careeronestop.org/CareerVideos/19-1032.00.mp4">Foresters</a></p>',
'<p><a title="Gas Plant Operators" href="https://cdn.careeronestop.org/CareerVideos/51-8092.00.mp4">Gas Plant Operators</a></p>',
'<p><a title="Geothermal Production Managers" href="/videos/careeronestop-videos.aspx?videocode=11305102">Geothermal Production Managers - NEW!</a></p>',
'<p><a title="Graders and Sorters Agricultural Products" href="https://cdn.careeronestop.org/CareerVideos/45-2041.00.mp4">Graders and Sorters, Agricultural Products</a></p>',
'<p><a title="Hazardous Materials Removal Workers" href="/videos/careeronestop-videos.aspx?videocode=47404100">Hazardous Materials Removal Workers - NEW!</a></p>',
'<p><a title="Hunters and Trappers" href="/videos/careeronestop-videos.aspx?videocode=45302100">Hunters and Trappers - NEW!</a></p>',
'<p><a title="Industrial Truck and Tractor Operators" href="https://cdn.careeronestop.org/CareerVideos/53-7051.00.mp4">Industrial Truck and Tractor Operators</a></p>',
'<p><a title="Landscape and Groundskeeping Workers" href="/videos/careeronestop-videos.aspx?videocode=37301100">Landscape and Groundskeeping Workers - NEW!</a></p>',
'<p><a title="Loading Machine Operators, Underground Mining" href="/videos/careeronestop-videos.aspx?videocode=53703300">Loading Machine Operators, Underground Mining - NEW!</a></p>',
'<p><a title="Logging Equipment Operators" href="/videos/careeronestop-videos.aspx?videocode=45402200">Logging Equipment Operators - NEW!</a></p>',
'<p><a title="Log Graders and Scalers" href="/videos/careeronestop-videos.aspx?videocode=45402300">Log Graders and Scalers - NEW!</a></p>',
'<p><a title="Meat, Poultry, and Fish Cutters and Trimmers" href="/videos/careeronestop-videos.aspx?videocode=51302200">Meat, Poultry, and Fish Cutters and Trimmers - NEW!</a></p>',
'<p><a title="Mine Cutting and Channeling Machine Operators" href="https://cdn.careeronestop.org/CareerVideos/47-5042.00.mp4">Mine Cutting and Channeling Machine Operators</a></p>',
'<p><a title="Mobile Heavy Equipment Mechanics, Except Engines" href="/videos/careeronestop-videos.aspx?videocode=49304200">Mobile Heavy Equipment Mechanics, Except Engines - NEW!</a></p>',
'<p><a title="Natural Sciences Managers" href="/videos/careeronestop-videos.aspx?videocode=11912100">Natural Sciences Managers - NEW!</a></p>',
'<p><a title="Nonfarm Animal Caretakers" href="/videos/careeronestop-videos.aspx?videocode=39202100">Nonfarm Animal Caretakers - NEW!</a></p>',
'<p><a title="Nursery Workers" href="https://cdn.careeronestop.org/CareerVideos/45-2092.01.mp4">Nursery Workers</a></p>',
'<p><a title="Nursery and Greenhouse Managers" href="/videos/careeronestop-videos.aspx?videocode=11901301">Nursery and Greenhouse Managers - NEW!</a></p>',
'<p><a title="Occupational Health and Safety Specialists and Technicians" href="/videos/careeronestop-videos.aspx?videocode=29901100">Occupational Health and Safety Specialists and Technicians - NEW!</a></p>',
'<p><a title="Park Naturalists" href="/videos/careeronestop-videos.aspx?videocode=19103103">Park Naturalists - NEW!</a></p>',
'<p><a title="Pest Control Workers" href="/videos/careeronestop-videos.aspx?videocode=37202100">Pest Control Workers - NEW!</a></p>',
'<p><a title="Pesticide Handlers, Sprayers, and Applicators, Vegetation" href="/videos/careeronestop-videos.aspx?videocode=37301200">Pesticide Handlers, Sprayers, and Applicators, Vegetation - NEW!</a></p>',
'<p><a title="Petroleum Pump System Operators Refinery Operators and Gaugers" href="https://cdn.careeronestop.org/CareerVideos/51-8093.00.mp4">Petroleum Pump System Operators, Refinery Operators, and Gaugers</a></p>',
'<p><a title="Pump Operators Except Wellhead Pumpers" href="https://cdn.careeronestop.org/CareerVideos/53-7072.00.mp4">Pump Operators, Except Wellhead Pumpers</a></p>',
'<p><a title="Purchasing Agents and Buyers Farm Products" href="https://cdn.careeronestop.org/CareerVideos/13-1021.00.mp4">Purchasing Agents and Buyers, Farm Products</a></p>',
'<p><a title="Recreation Workers" href="https://cdn.careeronestop.org/CareerVideos/39-9032.00.mp4">Recreation Workers</a></p>',
'<p><a title="Refuse and Recyclable Material Collectors" href="/videos/careeronestop-videos.aspx?videocode=53708100">Refuse and Recyclable Material Collectors - NEW!</a></p>',
'<p><a title="Retail Salesperson" href="/videos/careeronestop-videos.aspx?videocode=41203100">Retail Salesperson - NEW!</a></p>',
'<p><a title="Rock Splitters, Quarry" href="https://cdn.careeronestop.org/CareerVideos/47-5051.00.mp4">Rock Splitters, Quarry</a></p>',
'<p><a title="Rotary Drill Operators Oil and Gas" href="https://cdn.careeronestop.org/CareerVideos/47-5012.00.mp4">Rotary Drill Operators, Oil and Gas</a></p>',
'<p><a title="Sales Representatives, Wholesale and Manufacturing, Technical and Scientific Products" href="/videos/careeronestop-videos.aspx?videocode=41401100">Sales Representatives, Wholesale and Manufacturing, Technical and Scientific Products - NEW!</a></p>',
'<p><a title="Sales Representatives, Wholesale and Manufacturing, Except Technical and Scientific" href="/videos/careeronestop-videos.aspx?videocode=41401200"> Sales Representatives, Wholesale and Manufacturing, Except Technical and Scientific - NEW!</a></p>',
'<p><a title="Soil Conservationists" href="https://cdn.careeronestop.org/CareerVideos/19-1031.01.mp4">Soil Conservationists</a></p>',
'<p><a title="Soil and Plant Scientists" href="/videos/careeronestop-videos.aspx?videocode=19101300">Soil and Plant Scientists - NEW!</a></p>',
'<p><a title="Tree Trimmers and Pruners" href="/videos/careeronestop-videos.aspx?videocode=37301300">Tree Trimmers and Pruners - NEW!</a></p>',
'<p><a title="Veterinarians" href="/videos/careeronestop-videos.aspx?videocode=29113100">Veterinarians - NEW!</a></p>',
'<p><a title="Veterinary Assistants and Laboratory Animal Caretakers" href="/videos/careeronestop-videos.aspx?videocode=31909600">Veterinary Assistants and Laboratory Animal Caretakers - NEW!</a></p>',
'<p><a title="Veterinary Technologists and Technicians" href="/videos/careeronestop-videos.aspx?videocode=29205600">Veterinary Technologists and Technicians - NEW!</a></p>',
'<p><a title="Water and Wastewater Treatment Plant and System Operators" href="/videos/careeronestop-videos.aspx?videocode=51803100">Water and Wastewater Treatment Plant and System Operators - NEW!</a></p>',
'<p><a title="Water Resource Specialists" href="/videos/careeronestop-videos.aspx?videocode=11912102">Water Resource Specialists - NEW!</a></p>',
'<p><a title="Wind Turbine Service Technicians" href="/videos/careeronestop-videos.aspx?videocode=49908100">Wind Turbine Service Technicians - NEW!</a></p>',
'<p><a title="Zoologists and Wildlife Biologists" href="/videos/careeronestop-videos.aspx?videocode=19102300">Zoologists and Wildlife Biologists - NEW!</a></p>'
];

const arcMain = [
'<p><a title="Architecture and Construction (Cluster Video)" href="https://cdn.careeronestop.org/CareerVideos/00-0000.02.mp4">Architecture and Construction (Cluster Video)</a></p>',
'<p><a title="Architectural and Engineering Managers" href="/videos/careeronestop-videos.aspx?videocode=11904100">Architectural and Engineering Managers - NEW!</a></p>',
'<p><a title="Architects, Except Landscape and Naval" href="https://cdn.careeronestop.org/CareerVideos/17-1011.00.mp4">Architects, Except Landscape and Naval</a></p>',
'<p><a title="Boat Builders and Shipwrights" href="https://cdn.careeronestop.org/CareerVideos/47-2031.05.mp4">Boat Builders and Shipwrights</a></p>',
'<p><a title="Brickmasons and Blockmasons" href="/videos/careeronestop-videos.aspx?videocode=47202100">Brickmasons and Blockmasons - NEW!</a></p>',
'<p><a title="Cabinetmakers and Bench Carpenters" href="/videos/careeronestop-videos.aspx?videocode=51701100">Cabinetmakers and Bench Carpenters - NEW!</a></p>',
'<p><a title="Carpenters" href="/videos/careeronestop-videos.aspx?videocode=47203100">Carpenters - NEW!</a></p>',
'<p><a title="Carpet Installers" href="/videos/careeronestop-videos.aspx?videocode=47204100">Carpet Installers - NEW!</a></p>',
'<p><a title="Cartographers and Photogrammetrists" href="/videos/careeronestop-videos.aspx?videocode=17102100">Cartographers and Photogrammetrists - NEW!</a></p>',
'<p><a title="Cement Masons and Concrete Finishers" href="/videos/careeronestop-videos.aspx?videocode=47205100">Cement Masons and Concrete Finishers - NEW!</a></p>',
'<p><a title="Construction Carpenters" href="/videos/careeronestop-videos.aspx?videocode=47203101">Construction Carpenters - NEW!</a></p>',
'<p><a title="Cement Masons and Concrete Finishers" href="https://cdn.careeronestop.org/CareerVideos/47-2051.00.mp4">Cement Masons and Concrete Finishers</a></p>',
'<p><a title="Civil Engineering Technicians" href="/videos/careeronestop-videos.aspx?videocode=17302200">Civil Engineering Technicians - NEW!</a></p>',
'<p><a title="Civil Engineers" href="/videos/careeronestop-videos.aspx?videocode=17205100">Civil Engineers - NEW!</a></p>',
'<p><a title="Coin - Vending - and Amusement Machine Servicers and Repairers" href="https://cdn.careeronestop.org/CareerVideos/49-9091.00.mp4">Coin - Vending - and Amusement Machine Servicers and Repairers</a></p>',
'<p><a title="Construction Laborers" href="/videos/careeronestop-videos.aspx?videocode=47206100">Construction Laborers - NEW!</a></p>',
'<p><a title="Construction Managers" href="/videos/careeronestop-videos.aspx?videocode=11902100">Construction Managers - NEW!</a></p>',
'<p><a title="Construction and Building Inspectors" href="/videos/careeronestop-videos.aspx?videocode=47401100">Construction and Building Inspectors - NEW!</a></p>',
'<p><a title="Cost Estimators" href="/videos/careeronestop-videos.aspx?videocode=13105100">Cost Estimators - NEW!</a></p>',
'<p><a title="Crane and Tower Operators" href="https://cdn.careeronestop.org/CareerVideos/53-7021.00.mp4">Crane and Tower Operators</a></p>',
'<p><a title="Dredge Operators" href="/videos/careeronestop-videos.aspx?videocode=53703100">Dredge Operators - NEW!</a></p>',
'<p><a title="Drywall and Ceiling Tile Installers" href="/videos/careeronestop-videos.aspx?videocode=47208100">Drywall and Ceiling Tile Installers - NEW!</a></p>',
'<p><a title="Earth Drillers, Except Oil and Gas" href="https://cdn.careeronestop.org/CareerVideos/47-5021.00.mp4">Earth Drillers, Except Oil and Gas</a></p>',
'<p><a title="Electrical and Electronics Drafters" href="https://cdn.careeronestop.org/CareerVideos/17-3012.00.mp4">Electrical and Electronics Drafters</a></p>',
'<p><a title="Electric Home Appliance and Power Tool Repairers" href="https://cdn.careeronestop.org/CareerVideos/49-2092.01.mp4">Electric Home Appliance and Power Tool Repairers</a></p>',
'<p><a title="Electrical Power-Line Installers and Repairers" href="/videos/careeronestop-videos.aspx?videocode=49905100">Electrical Power-Line Installers and Repairers - NEW!</a></p>',
'<p><a title="Electricians" href="/videos/careeronestop-videos.aspx?videocode=47211100">Electricians - NEW!</a></p>',
'<p><a title="Elevator Installers and Repairers" href="/videos/careeronestop-videos.aspx?videocode=47402100">Elevator Installers and Repairers - NEW!</a></p>',
'<p><a title="Electromechanical Equipment Assemblers" href="https://cdn.careeronestop.org/CareerVideos/51-2023.00.mp4">Electromechanical Equipment Assemblers</a></p>',
'<p><a title="Excavating and Loading Machine and Dragline Operators" href="/videos/careeronestop-videos.aspx?videocode=53703200">Excavating and Loading Machine and Dragline Operators - NEW!</a></p>',
'<p><a title="First Line Supervisors - Managers of Construction Trades and Extraction Workers" href="/videos/careeronestop-videos.aspx?videocode=47101100">First Line Supervisors - Managers of Construction Trades and Extraction Workers - NEW!</a></p>',
'<p><a title="Floor Layers, Except Carpet, Wood, and Hard Tiles" href="/videos/careeronestop-videos.aspx?videocode=47204200">Floor Layers, Except Carpet, Wood, and Hard Tiles - NEW!</a></p>',
'<p><a title="Floor Sanders and Finishers" href="/videos/careeronestop-videos.aspx?videocode=47204300">Floor Sanders and Finishers - NEW!</a></p>',
'<p><a title="Furniture Finishers" href="/videos/careeronestop-videos.aspx?videocode=51702100">Furniture Finishers - NEW!</a></p>',
'<p><a title="Glaziers" href="/videos/careeronestop-videos.aspx?videocode=47212100">Glaziers - NEW!</a></p>',
'<p><a title="Grader, Bulldozer, and Scraper Operators" href="https://cdn.careeronestop.org/CareerVideos/47-2073.01.mp4">Grader, Bulldozer, and Scraper Operators</a></p>',
'<p><a title="Hazardous Materials Removal Workers" href="/videos/careeronestop-videos.aspx?videocode=47404100">Hazardous Materials Removal Workers - NEW!</a></p>',
'<p><a title="Heating, Air Conditioning, and Refrigeration Mechanics and Installers" href="https://cdn.careeronestop.org/CareerVideos/49-9021.00.mp4">Heating, Air Conditioning, and Refrigeration Mechanics and Installers</a></p>',
'<p><a title="Helpers – Brickmasons Stonemasons and Tile and Marble Setters" href="/videos/careeronestop-videos.aspx?videocode=47301100">Helpers – Brickmasons Stonemasons and Tile and Marble Setters - NEW!</a></p>',
'<p><a title="Highway Maintenance Workers" href="https://cdn.careeronestop.org/CareerVideos/47-4051.00.mp4">Highway Maintenance Workers</a></p>',
'<p><a title="Helpers--Carpenters" href="/videos/careeronestop-videos.aspx?videocode=47203200">Helpers--Carpenters - NEW!</a></p>',
'<p><a title="Helpers--Electricians" href="/videos/careeronestop-videos.aspx?videocode=47301300">Helpers--Electricians - NEW!</a></p>',
'<p><a title="Helpers--Painters, Paperhangers, Plasterers, and Stucco Masons" href="/videos/careeronestop-videos.aspx?videocode=473014.00">Helpers--Painters, Paperhangers, Plasterers, and Stucco Masons - NEW!</a></p>',
'<p><a title="Helpers--Pipelayers, Plumbers, Pipefitters, and Steamfitters" href="/videos/careeronestop-videos.aspx?videocode=47301500">Helpers--Pipelayers, Plumbers, Pipefitters, and Steamfitters - NEW!</a></p>',
'<p><a title="Helpers--Roofers" href="/videos/careeronestop-videos.aspx?videocode=47301600">Helpers--Roofers - NEW!</a></p>',
'<p><a title="Hoist and Winch Operators" href="/videos/careeronestop-videos.aspx?videocode=53704100">Hoist and Winch Operators - NEW!</a></p>',
'<p><a title="Home Appliance Repairers" href="https://cdn.careeronestop.org/CareerVideos/49-9031.00.mp4">Home Appliance Repairers</a></p>',
'<p><a title="Insulation Workers, Floor, Ceiling, and Wall" href="/videos/careeronestop-videos.aspx?videocode=47213100">Insulation Workers, Floor, Ceiling, and Wall - NEW!</a></p>',
'<p><a title="Insulation Workers, Mechanical" href="/videos/careeronestop-videos.aspx?videocode=47213200">Insulation Workers, Mechanical - NEW!</a></p>',
'<p><a title="Interior Designers" href="/videos/careeronestop-videos.aspx?videocode=27102500">Interior Designers - NEW!</a></p>',
'<p><a title="Landscape Architects" href="/videos/careeronestop-videos.aspx?videocode=17101200">Landscape Architects - NEW!</a></p>',
'<p><a title="Landscape and Groundskeeping Workers" href="/videos/careeronestop-videos.aspx?videocode=37301100">Landscape and Groundskeeping Workers - NEW!</a></p>',
'<p><a title="Lawn Maintenance Workers" href="https://cdn.careeronestop.org/CareerVideos/37-3011.09.mp4">Lawn Maintenance Workers</a></p>',
'<p><a title="Maintenance and Repair Workers, General" href="/videos/careeronestop-videos.aspx?videocode=49907100">Maintenance and Repair Workers, General - NEW!</a></p>',
'<p><a title="Mechanical Door Repairers" href="https://cdn.careeronestop.org/CareerVideos/49-9011.00.mp4">Mechanical Door Repairers</a></p>',
'<p><a title="Mechanical Drafters" href="/videos/careeronestop-videos.aspx?videocode=17301300">Mechanical Drafters - NEW!</a></p>',
'<p><a title="Operating Engineers" href="https://cdn.careeronestop.org/CareerVideos/47-2073.02.mp4">Operating Engineers</a></p>',
'<p><a title="Operating Engineers and Other Construction Equipment Operators" href="/videos/careeronestop-videos.aspx?videocode=47207100">Operating Engineers and Other Construction Equipment Operators - NEW!</a></p>',
'<p><a title="Painters, Construction and Maintenance" href="/videos/careeronestop-videos.aspx?videocode=47214100">Painters, Construction and Maintenance - NEW!</a></p>',
'<p><a title="Paperhangers" href="https://cdn.careeronestop.org/CareerVideos/47-2142.00.mp4">Paperhangers</a></p>',
'<p><a title="Paving, Surfacing, and Tamping Equipment Operators" href="/videos/careeronestop-videos.aspx?videocode=47207100">Paving, Surfacing, and Tamping Equipment Operators - NEW!</a></p>',
'<p><a title="Pile-Driver Operators" href="/videos/careeronestop-videos.aspx?videocode=47207200">Pile-Driver Operators - NEW!</a></p>',
'<p><a title="Pipefitters and Steamfitters" href="/videos/careeronestop-videos.aspx?videocode=47215201">Pipefitters and Steamfitters - NEW!</a></p>',
'<p><a title="Plasterers and Stucco Masons" href="https://cdn.careeronestop.org/CareerVideos/47-2161.00.mp4">Plasterers and Stucco Masons</a></p>',
'<p><a title="Plumbers" href="/videos/careeronestop-videos.aspx?videocode=47215202">Plumbers - NEW!</a></p>',
'<p><a title="Plumbers, Pipefitters, and Steamfitters" href="/videos/careeronestop-videos.aspx?videocode=47215200">Plumbers, Pipefitters, and Steamfitters - NEW!</a></p>',
'<p><a title="Rail-Track Laying and Maintenance Equipment Operators" href="https://cdn.careeronestop.org/CareerVideos/47-4061.00.mp4">Rail-Track Laying and Maintenance Equipment Operators</a></p>',
'<p><a title="Reinforcing Iron and Rebar Workers" href="/videos/careeronestop-videos.aspx?videocode=47217100">Reinforcing Iron and Rebar Workers - NEW!</a></p>',
'<p><a title="Riggers" href="https://cdn.careeronestop.org/CareerVideos/49-9096.00.mp4">Riggers</a></p>',
'<p><a title="Roofers" href="/videos/careeronestop-videos.aspx?videocode=47218100">Roofers - NEW!</a></p>',
'<p><a title="Rough Carpenters" href="/videos/careeronestop-videos.aspx?videocode=47203102">Rough Carpenters - NEW!</a></p>',
'<p><a title="Security and Fire Alarm Systems Installers" href="https://cdn.careeronestop.org/CareerVideos/49-2098.00.mp4">Security and Fire Alarm Systems Installers</a></p>',
'<p><a title="Segmental Pavers" href="/videos/careeronestop-videos.aspx?videocode=47409100">Segmental Pavers - NEW!</a></p>',
'<p><a title="Set and Exhibit Designers" href="https://cdn.careeronestop.org/CareerVideos/27-1027.00.mp4">Set and Exhibit Designers</a></p>',
'<p><a title="Sheet Metal Duct Installers" href="https://cdn.careeronestop.org/CareerVideos/47-2211.09.mp4">Sheet Metal Duct Installers</a></p>',
'<p><a title="Sheet Metal Workers" href="https://cdn.careeronestop.org/CareerVideos/47-2211.00.mp4">Sheet Metal Workers</a></p>',
'<p><a title="Solar Photovoltaic Installer" href="/videos/careeronestop-videos.aspx?videocode=47223100">Solar Photovoltaic Installer - NEW!</a></p>',
'<p><a title="Stationary Engineers" href="https://cdn.careeronestop.org/CareerVideos/51-8021.02.mp4">Stationary Engineers</a></p>',
'<p><a title="Stonemasons" href="/videos/careeronestop-videos.aspx?videocode=47202200">Stonemasons - NEW!</a></p>',
'<p><a title="Structural Iron and Steel Workers" href="/videos/careeronestop-videos.aspx?videocode=47222100">Structural Iron and Steel Workers - NEW!</a></p>',
'<p><a title="Structural Metal Fabricators and Fitters" href="/videos/careeronestop-videos.aspx?videocode=51204100">Structural Metal Fabricators and Fitters - NEW!</a></p>',
'<p><a title="Subway and Streetcar Operators" href="https://cdn.careeronestop.org/CareerVideos/53-4041.00.mp4">Subway and Streetcar Operators</a></p>',
'<p><a title="Surveyors" href="/videos/careeronestop-videos.aspx?videocode=17102200">Surveyors - NEW!</a></p>',
'<p><a title="Tapers" href="/videos/careeronestop-videos.aspx?videocode=47208200">Tapers - NEW!</a></p>',
'<p><a title="Terrazzo Workers and Finishers" href="/videos/careeronestop-videos.aspx?videocode=47205300">Terrazzo Workers and Finishers - NEW!</a></p>',
'<p><a title="Tile and Marble Setters" href="/videos/careeronestop-videos.aspx?videocode=47204400">Tile and Marble Setters - NEW!</a></p>',
'<p><a title="Woodworking Machine Setters, Operators, and Tenders, Except Sawing" href="/videos/careeronestop-videos.aspx?videocode=51704200">Woodworking Machine Setters, Operators, and Tenders, Except Sawing - NEW!</a></p>',
'<p><a title="Wood Sawing Machine Setters, Operators, and Tenders" href="/videos/careeronestop-videos.aspx?videocode=51704100">Wood Sawing Machine Setters, Operators, and Tenders - NEW!</a></p>'
];

const artMain = [
'<p><a title="Arts, A/V Technology, and Communications (Cluster Video)" href="https://cdn.careeronestop.org/CareerVideos/00-0000.03.mp4">Arts, A/V Technology, and Communications (Cluster Video)</a></p>',
'<p><a title="Agents and Business Managers of Artists - Performers - Athletes" href="https://cdn.careeronestop.org/CareerVideos/13-1011.00.mp4">Agents and Business Managers of Artists - Performers - Athletes</a></p>',
'<p><a title="Actors" href="/videos/careeronestop-videos.aspx?videocode=27201100">Actors - NEW!</a></p>',
'<p><a title="Archivists" href="/videos/careeronestop-videos.aspx?videocode=25401100">Archivists - NEW!</a></p>',
'<p><a title="Art Directors" href="/videos/careeronestop-videos.aspx?videocode=27101100">Art Directors - NEW!</a></p>',
'<p><a title="Art Therapists" href="/videos/careeronestop-videos.aspx?videocode=29112501">Art Therapists - NEW!</a></p>',
'<p><a title="Audio and Video Equipment Technicians" href="/videos/careeronestop-videos.aspx?videocode=27401100">Audio and Video Equipment Technicians - NEW!</a></p>',
'<p><a title="Bindery Workers" href="https://cdn.careeronestop.org/CareerVideos/51-5011.00.mp4">Bindery Workers</a></p>',
'<p><a title="Broadcast Announcers and Radio Disc Jockeys" href="/videos/careeronestop-videos.aspx?videocode=27301100">Broadcast Announcers and Radio Disc Jockeys - NEW!</a></p>',
'<p><a title="Broadcast News Analysts" href="/videos/careeronestop-videos.aspx?videocode=27302100">Broadcast News Analysts - NEW!</a></p>',
'<p><a title="Broadcast Technicians" href="/videos/careeronestop-videos.aspx?videocode=27401200">Broadcast Technicians - NEW!</a></p>',
'<p><a title="Camera Operators - Television - Video - and Motion Picture" href="/videos/careeronestop-videos.aspx?videocode=27403100">Camera Operators - Television - Video - and Motion Picture - NEW!</a></p>',
'<p><a title="Camera and Photographic Equipment Repairers" href="https://cdn.careeronestop.org/CareerVideos/49-9061.00.mp4">Camera and Photographic Equipment Repairers</a></p>',
'<p><a title="Choreographer" href="/videos/careeronestop-videos.aspx?videocode=27203200">Choreographer - NEW!</a></p>',
'<p><a title="Coin - Vending - and Amusement Machine Servicers and Repairers" href="https://cdn.careeronestop.org/CareerVideos/49-9091.00.mp4">Coin - Vending - and Amusement Machine Servicers and Repairers</a></p>',
'<p><a title="Commercial Artists" href="https://cdn.careeronestop.org/CareerVideos/27-1021.09.mp4">Commercial Artists</a></p>',
'<p><a title="Commercial and Industrial Designers" href="/videos/careeronestop-videos.aspx?videocode=27102100">Commercial and Industrial Designers - NEW!</a></p>',
'<p><a title="Communications Equipment Operators" href="https://cdn.careeronestop.org/CareerVideos/43-2010.00.mp4">Communications Equipment Operators</a></p>',
'<p><a title="Court Reporters" href="https://cdn.careeronestop.org/CareerVideos/23-2091.00.mp4">Court Reporters</a></p>',
'<p><a title="Craft Artists" href="/videos/careeronestop-videos.aspx?videocode=27101200">Craft Artists - NEW!</a></p>',
'<p><a title="Curators" href="/videos/careeronestop-videos.aspx?videocode=25401200">Curators - NEW!</a></p>',
'<p><a title="Dancers" href="/videos/careeronestop-videos.aspx?videocode=27203100">Dancers - NEW!</a></p>',
'<p><a title="Desktop Publishers" href="/videos/careeronestop-videos.aspx?videocode=43903100">Desktop Publishers - NEW!</a></p>',
'<p><a title="Directors - Stage, Motion Pictures, Television, and Radio" href="/videos/careeronestop-videos.aspx?videocode=27201202">Directors - Stage, Motion Pictures, Television, and Radio - NEW!</a></p>',
'<p><a title="Editors" href="/videos/careeronestop-videos.aspx?videocode=27304100">Editors - NEW!</a></p>',
'<p><a title="Electrical Power-Line Installers and Repairers" href="/videos/careeronestop-videos.aspx?videocode=49905100">Electrical Power-Line Installers and Repairers - NEW!</a></p>',
'<p><a title="Electronic Home Entertainment Equipment Installers and Repairers" href="https://cdn.careeronestop.org/CareerVideos/49-2097.00.mp4">Electronic Home Entertainment Equipment Installers and Repairers</a></p>',
'<p><a title="Etchers and Engravers" href="/videos/careeronestop-videos.aspx?videocode=51919400">Etchers and Engravers - NEW!</a></p>',
'<p><a title="Fashion Designers" href="/videos/careeronestop-videos.aspx?videocode=27102200">Fashion Designers - NEW!</a></p>',
'<p><a title="Fiber Optic Technicians" href="https://cdn.careeronestop.org/CareerVideos/49-9052.09.mp4">Fiber Optic Technicians</a></p>',
'<p><a title="Film and Video Editors" href="/videos/careeronestop-videos.aspx?videocode=27403200">Film and Video Editors - NEW!</a></p>',
'<p><a title="Fine Artists - Including Painters - Sculptors - and Illustrators" href="https://cdn.careeronestop.org/CareerVideos/27-1013.00.mp4">Fine Artists - Including Painters - Sculptors - and Illustrators</a></p>',
'<p><a title="Graphic Designers" href="/videos/careeronestop-videos.aspx?videocode=27102400">Graphic Designers - NEW!</a></p>',
'<p><a title="Interior Designers" href="/videos/careeronestop-videos.aspx?videocode=27102500">Interior Designers - NEW!</a></p>',
'<p><a title="Makeup Artists, Theatrical and Performance" href="https://cdn.careeronestop.org/CareerVideos/39-5091.00.mp4">Makeup Artists, Theatrical and Performance</a></p>',
'<p><a title="Motion Picture Projectionists" href="/videos/careeronestop-videos.aspx?videocode=39302100">Motion Picture Projectionists - NEW!</a></p>',
'<p><a title="Multimedia Artists and Animators" href="/videos/careeronestop-videos.aspx?videocode=27101400">Multimedia Artists and Animators - NEW!</a></p>',
'<p><a title="Museum Technicians and Conservators" href="/videos/careeronestop-videos.aspx?videocode=25401300">Museum Technicians and Conservators - NEW!</a></p>',
'<p><a title="Music Directors and Composers" href="/videos/careeronestop-videos.aspx?videocode=27204100">Music Directors and Composers - NEW!</a></p>',
'<p><a title="Music Therapists" href="/videos/careeronestop-videos.aspx?videocode=29112502">Music Therapists - NEW!</a></p>',
'<p><a title="Musicians and Singers" href="/videos/careeronestop-videos.aspx?videocode=27204200">Musicians and Singers - NEW!</a></p>',
'<p><a title="Musicians - Instrumental" href="https://cdn.careeronestop.org/CareerVideos/27-2042.02.mp4">Musicians - Instrumental</a></p>',
'<p><a title="Photographers" href="/videos/careeronestop-videos.aspx?videocode=27402100">Photographers - NEW!</a></p>',
'<p><a title="Prepress Technicians and Workers" href="/videos/careeronestop-videos.aspx?videocode=51511100">Prepress Technicians and Workers - NEW!</a></p>',
'<p><a title="Print Binding and Finishing Workers" href="/videos/careeronestop-videos.aspx?videocode=51511300">Print Binding and Finishing Workers - NEW!</a></p>',
'<p><a title="Printing Machine Operators" href="https://cdn.careeronestop.org/CareerVideos/51-5023.00.mp4">Printing Machine Operators</a></p>',
'<p><a title="Printing Press Machine Operators and Tenders" href="https://cdn.careeronestop.org/CareerVideos/51-5023.09.mp4">Printing Press Machine Operators and Tenders</a></p>',
'<p><a title="Producers and Directors" href="/videos/careeronestop-videos.aspx?videocode=27201200">Producers and Directors - NEW!</a></p>',
'<p><a title="Program Directors" href="/videos/careeronestop-videos.aspx?videocode=27201203">Program Directors - NEW!</a></p>',
'<p><a title="Proofreaders and Copy Markers" href="https://cdn.careeronestop.org/CareerVideos/43-9081.00.mp4">Proofreaders and Copy Markers</a></p>',
'<p><a title="Public Address System and Other Announcers" href="/videos/careeronestop-videos.aspx?videocode=27301200">Public Address System and Other Announcers - NEW!</a></p>',
'<p><a title="Radio and Television Announcers" href="/videos/careeronestop-videos.aspx?videocode=27301100">Radio and Television Announcers - NEW!</a></p>',
'<p><a title="Reporters and Correspondents" href="/videos/careeronestop-videos.aspx?videocode=27302200">Reporters and Correspondents - NEW!</a></p>',
'<p><a title="Set and Exhibit Designers" href="/videos/careeronestop-videos.aspx?videocode=27102700">Set and Exhibit Designers - NEW!</a></p>',
'<p><a title="Sound Engineering Technicians" href="/videos/careeronestop-videos.aspx?videocode=27401400">Sound Engineering Technicians - NEW!</a></p>',
'<p><a title="Technical Directors/Managers" href="/videos/careeronestop-videos.aspx?videocode=27201205">Technical Directors/Managers - NEW!</a></p>',
'<p><a title="Talent Directors" href="/videos/careeronestop-videos.aspx?videocode=27201204">Talent Directors - NEW!</a></p>',
'<p><a title="Technical Writers" href="https://cdn.careeronestop.org/CareerVideos/27-3042.00.mp4">Technical Writers</a></p>',
'<p><a title="Telecommunications Equipment Installers and Repairers, Except Line Installers" href="/videos/careeronestop-videos.aspx?videocode=49202200">Telecommunications Equipment Installers and Repairers, Except Line Installers - NEW!</a></p>',
'<p><a title="Telecommunications Line Installers and Repairers" href="/videos/careeronestop-videos.aspx?videocode=49905200">Telecommunications Line Installers and Repairers - NEW!</a></p>',
'<p><a title="Video Game Designers" href="/videos/careeronestop-videos.aspx?videocode=15119911">Video Game Designers - NEW!</a></p>',
'<p><a title="Web Developer" href="/videos/careeronestop-videos.aspx?videocode=15113400">Web Developer - NEW!</a></p>',
'<p><a title="Writers and Authors" href="https://cdn.careeronestop.org/CareerVideos/27-3043.00.mp4">Writers and Authors</a></p>'
];

const busMain = [
'<p><a title="Business and Administration (Cluster Video)" href="https://cdn.careeronestop.org/CareerVideos/00-0000.04.mp4">Business and Administration (Cluster Video)</a></p>',
'<p><a title="Accountants" href="https://cdn.careeronestop.org/CareerVideos/13-2011.01.mp4">Accountants</a></p>',
'<p><a title="Accountants and Auditors" href="/videos/careeronestop-videos.aspx?videocode=13201100">Accountants and Auditors - NEW!</a></p>',
'<p><a title="Administrative Services Managers" href="/videos/careeronestop-videos.aspx?videocode=11301100">Administrative Services Managers - NEW!</a></p>',
'<p><a title="Advertising and Promotions Managers" href="/videos/careeronestop-videos.aspx?videocode=11201100">Advertising and Promotions Managers - NEW!</a></p>',
'<p><a title="Advertising Sales Agents" href="/videos/careeronestop-videos.aspx?videocode=41301100">Advertising Sales Agents - NEW!</a></p>',
'<p><a title="Agents and Business Managers of Artists - Performers - Athletes" href="https://cdn.careeronestop.org/CareerVideos/13-1011.00.mp4">Agents and Business Managers of Artists - Performers - Athletes</a></p>',
'<p><a title="Art Directors" href="/videos/careeronestop-videos.aspx?videocode=27101100">Art Directors - NEW!</a></p>',
'<p><a href="/videos/careeronestop-videos.aspx?videocode=11904101">Biofuels/Biodiesel Technology and Product Development Managers - NEW!</a></p>',
'<p><a title="Biomass Power Plant Managers" href="/videos/careeronestop-videos.aspx?videocode=11305104">Biomass Power Plant Managers - NEW!</a></p>',
'<p><a title="Bookkeeping, Accounting, and Auditing Clerks" href="/videos/careeronestop-videos.aspx?videocode=43303100">Bookkeeping, Accounting, and Auditing Clerks - NEW!</a></p>',
'<p><a title="Brokerage Clerks" href="/videos/careeronestop-videos.aspx?videocode=43401100">Brokerage Clerks - NEW!</a></p>',
'<p><a title="Brownfield Redevelopment Specialists and Site Managers" href="/videos/careeronestop-videos.aspx?videocode=11919911">Brownfield Redevelopment Specialists and Site Managers - NEW!</a></p>',
'<p><a title="Budget Analysts" href="/videos/careeronestop-videos.aspx?videocode=13203100">Budget Analysts - NEW!</a></p>',
'<p><a title="Buyers Purchasing Agents - Farm Products" href="/videos/careeronestop-videos.aspx?videocode=13102100">Buyers Purchasing Agents - Farm Products - NEW!</a></p>',
'<p><a title="Cargo and Freight Agents" href="/videos/careeronestop-videos.aspx?videocode=43501100">Cargo and Freight Agents - NEW!</a></p>',
'<p><a title="Chief Executives" href="/videos/careeronestop-videos.aspx?videocode=11101100">Chief Executives - NEW!</a></p>',
'<p><a title="Chief Sustainability Officers" href="/videos/careeronestop-videos.aspx?videocode=11101103">Chief Sustainability Officers - NEW!</a></p>',
'<p><a title="Compensation, Benefits, and Job Analysis Specialists" href="/videos/careeronestop-videos.aspx?videocode=13114100">Compensation, Benefits, and Job Analysis Specialists - NEW!</a></p>',
'<p><a title="Computer and Information Systems Managers" href="/videos/careeronestop-videos.aspx?videocode=11302100">Computer and Information Systems Managers - NEW!</a></p>',
'<p><a title="Computer Operators" href="/videos/careeronestop-videos.aspx?videocode=43901100">Computer Operators - NEW!</a></p>',
'<p><a title="Construction Managers" href="/videos/careeronestop-videos.aspx?videocode=11902100">Construction Managers - NEW!</a></p>',
'<p><a title="Correspondence Clerks" href="/videos/careeronestop-videos.aspx?videocode=43402100">Correspondence Clerks - NEW!</a></p>',
'<p><a title="Cost Estimators" href="/videos/careeronestop-videos.aspx?videocode=13105100">Cost Estimators - NEW!</a></p>',
'<p><a title="Couriers and Messengers" href="/videos/careeronestop-videos.aspx?videocode=43502100">Couriers and Messengers - NEW!</a></p>',
'<p><a title="Court Clerks" href="https://cdn.careeronestop.org/CareerVideos/43-4031.01.mp4">Court Clerks</a></p>',
'<p><a title="Court Reporters" href="https://cdn.careeronestop.org/CareerVideos/23-2091.00.mp4">Court Reporters</a></p>',
'<p><a title="Credit Analyst" href="/videos/careeronestop-videos.aspx?videocode=13204100">Credit Analyst - NEW!</a></p>',
'<p><a title="Customer Service Representatives" href="/videos/careeronestop-videos.aspx?videocode=43405100">Customer Service Representatives - NEW!</a></p>',
'<p><a title="" href="https://cdn.careeronestop.org/CareerVideos/43-4051.00.mp4"></a></p>',
'<p><a title="Data Entry and Information Processing Workers" href="https://cdn.careeronestop.org/CareerVideos/43-9020.00.mp4">Data Entry and Information Processing Workers</a></p>',
'<p><a title="Driver/Sales Workers" href="/videos/careeronestop-videos.aspx?videocode=53303100">Driver/Sales Workers - NEW!</a></p>',
'<p><a title="Economists" href="/videos/careeronestop-videos.aspx?videocode=19301100">Economists - NEW!</a></p>',
'<p><a title="Employment Interviewers - Private or Public Employment Service" href="https://cdn.careeronestop.org/CareerVideos/13-1071.01.mp4">Employment Interviewers - Private or Public Employment Service</a></p>',
'<p><a title="Energy Auditors" href="/videos/careeronestop-videos.aspx?videocode=13119901">Energy Auditors - NEW!</a></p>',
'<p><a title="Entrepreneurs" href="https://cdn.careeronestop.org/CareerVideos/11-1010.09.mp4">Entrepreneurs</a></p>',
'<p><a title="Equal Opportunity Representatives and Officers" href="/videos/careeronestop-videos.aspx?videocode=13104103">Equal Opportunity Representatives and Officers - NEW!</a></p>',
'<p><a title="Executive Secretaries and Executive Administrative Assistants" href="/videos/careeronestop-videos.aspx?videocode=43601100">Executive Secretaries and Executive Administrative Assistants - NEW!</a></p>',
'<p><a title="Farm Labor Contractors" href="/videos/careeronestop-videos.aspx?videocode=13107400">Farm Labor Contractors - NEW!</a></p>',
'<p><a title="File Clerks" href="/videos/careeronestop-videos.aspx?videocode=43407100">File Clerks - NEW!</a></p>',
'<p><a title="Financial Analysts" href="/videos/careeronestop-videos.aspx?videocode=13205100">Financial Analysts - NEW!</a></p>',
'<p><a title="Financial Examiners" href="/videos/careeronestop-videos.aspx?videocode=13206100">Financial Examiners - NEW!</a></p>',
'<p><a title="Financial Managers" href="/videos/careeronestop-videos.aspx?videocode=11303100">Financial Managers - NEW!</a></p>',
'<p><a title="First-Line Supervisors - Administrative Support" href="https://cdn.careeronestop.org/CareerVideos/43-1011.02.mp4">First-Line Supervisors - Administrative Support</a></p>',
'<p><a title="First-Line Supervisors - Customer Service" href="https://cdn.careeronestop.org/CareerVideos/43-1011.01.mp4">First-Line Supervisors - Customer Service</a></p>',
'<p><a title="Gambling Cage Workers" href="/videos/careeronestop-videos.aspx?videocode=43304100">Gambling Cage Workers - NEW!</a></p>',
'<p><a title="Geothermal Production Managers" href="/videos/careeronestop-videos.aspx?videocode=11305102">Geothermal Production Managers - NEW!</a></p>',
'<p><a title="General and Operations Managers" href="https://cdn.careeronestop.org/CareerVideos/11-1021.00.mp4">General and Operations Managers</a></p>',
'<p><a href="/videos/careeronestop-videos.aspx?videocode=11201101">Green Marketers - NEW!</a></p>',
'<p><a title="Human Resources Assistants, Except Payroll and Timekeeping " href="/videos/careeronestop-videos.aspx?videocode=43416100">Human Resources Assistants, Except Payroll and Timekeeping - NEW!</a></p>',
'<p><a title="Human Resources Managers" href="/videos/careeronestop-videos.aspx?videocode=11312100">Human Resources Managers - NEW!</a></p>',
'<p><a title="Human Resources Specialists" href="/videos/careeronestop-videos.aspx?videocode=13107100">Human Resources Specialists - NEW!</a></p>',
'<p><a title="Industrial Organizational Psychologists" href="/videos/careeronestop-videos.aspx?videocode=19303200">Industrial Organizational Psychologists - NEW!</a></p>',
'<p><a title="Industrial Production Managers" href="/videos/careeronestop-videos.aspx?videocode=11305100">Industrial Production Managers - NEW!</a></p>',
'<p><a title="Insurance Claims and Policy Processing Clerks" href="/videos/careeronestop-videos.aspx?videocode=43904100">Insurance Claims and Policy Processing Clerks - NEW!</a></p>',
'<p><a title="Interviewers Except Eligibility and Loan" href="/videos/careeronestop-videos.aspx?videocode=43411100">Interviewers Except Eligibility and Loan - NEW!</a></p>',
'<p><a title="Labor Relations Specialists" href="/videos/careeronestop-videos.aspx?videocode=13107500">Labor Relations Specialists - NEW!</a></p>',
'<p><a title="Legal Secretaries" href="/videos/careeronestop-videos.aspx?videocode=43601200">Legal Secretaries - NEW!</a></p>',
'<p><a title="Logisticians" href="/videos/careeronestop-videos.aspx?videocode=13108100">Logisticians - NEW!</a></p>',
'<p><a title="Logistics Analysts" href="/videos/careeronestop-videos.aspx?videocode=13108102">Logistics Analysts - NEW!</a></p>',
'<p><a title="Logistics Engineers" href="/videos/careeronestop-videos.aspx?videocode=13108101">Logistics Engineers - NEW!</a></p>',
'<p><a title="Logistics Manager" href="/videos/careeronestop-videos.aspx?videocode=11307103">Logistics Manager - NEW!</a></p>',
'<p><a title="Mail Clerks - Except Mail Machine Operators and Postal Service" href="https://cdn.careeronestop.org/CareerVideos/43-9051.02.mp4">Mail Clerks - Except Mail Machine Operators and Postal Service</a></p>',
'<p><a title="Management Analysts" href="/videos/careeronestop-videos.aspx?videocode=13111100">Management Analysts - NEW!</a></p>',
'<p><a title="Market Research Analysts and Marketing Specialists" href="/videos/careeronestop-videos.aspx?videocode=13116100">Market Research Analysts and Marketing Specialists - NEW!</a></p>',
'<p><a title="Marketing Managers" href="/videos/careeronestop-videos.aspx?videocode=11202100">Marketing Managers - NEW!</a></p>',
'<p><a title="Medical Secretaries" href="/videos/careeronestop-videos.aspx?videocode=43601300">Medical Secretaries - NEW!</a></p>',
'<p><a title="Medical and Health Services Managers" href="/videos/careeronestop-videos.aspx?videocode=11911100">Medical and Health Services Managers - NEW!</a></p>',
'<p><a title="Natural Sciences Managers" href="/videos/careeronestop-videos.aspx?videocode=11912100">Natural Sciences Managers - NEW!</a></p>',
'<p><a title="Operations Research Analysts" href="/videos/careeronestop-videos.aspx?videocode=15203100">Operations Research Analysts - NEW!</a></p>',
'<p><a title="Order Clerks" href="/videos/careeronestop-videos.aspx?videocode=43415100">Order Clerks - NEW!</a></p>',
'<p><a title="" href="https://cdn.careeronestop.org/CareerVideos/43-4151.00.mp4"></a></p>',
'<p><a title="Order Fillers - Wholesale and Retail Sales" href="https://cdn.careeronestop.org/CareerVideos/43-5081.04.mp4">Order Fillers - Wholesale and Retail Sales</a></p>',
'<p><a title="Office Clerks, General" href="/videos/careeronestop-videos.aspx?videocode=43906100">Office Clerks, General - NEW!</a></p>',
'<p><a title="Payroll and Timekeeping Clerks" href="/videos/careeronestop-videos.aspx?videocode=43305100">Payroll and Timekeeping Clerks - NEW!</a></p>',
'<p><a title="Personnel Recruiters" href="https://cdn.careeronestop.org/CareerVideos/13-1071.02.mp4">Personnel Recruiters</a></p>',
'<p><a title="Postal Service Mail Carriers" href="https://cdn.careeronestop.org/CareerVideos/43-5052.00.mp4">Postal Service Mail Carriers</a></p>',
'<p><a title="Postal Service Mail Sorters - Processors - Processing Machine Operators" href="https://cdn.careeronestop.org/CareerVideos/43-5053.00.mp4">Postal Service Mail Sorters - Processors - Processing Machine Operators</a></p>',
'<p><a title="Public Relations and Fundraising Managers" href="/videos/careeronestop-videos.aspx?videocode=11203100">Public Relations and Fundraising Managers - NEW!</a></p>',
'<p><a title="Public Relations Specialists" href="/videos/careeronestop-videos.aspx?videocode=27303100">Public Relations Specialists - NEW!</a></p>',
'<p><a title="Purchasing Agents, Except Wholesale, Retail, and Farm Products" href="/videos/careeronestop-videos.aspx?videocode=13102300">Purchasing Agents, Except Wholesale, Retail, and Farm Products - NEW!</a></p>',
'<p><a title="Purchasing Managers" href="/videos/careeronestop-videos.aspx?videocode=11306100">Purchasing Managers - NEW!</a></p>',
'<p><a title="Receptionists and Information Clerks" href="/videos/careeronestop-videos.aspx?videocode=43417100">Receptionists and Information Clerks - NEW!</a></p>',
'<p><a title="Regulatory Affairs Managers" href="/videos/careeronestop-videos.aspx?videocode=11919901">Regulatory Affairs Managers - NEW!</a></p>',
'<p><a title="Sales Managers" href="/videos/careeronestop-videos.aspx?videocode=11202200">Sales Managers - NEW!</a></p>',
'<p><a title="Sales Representatives, Wholesale and Manufacturing, Technical and Scientific Products" href="/videos/careeronestop-videos.aspx?videocode=41401100">Sales Representatives, Wholesale and Manufacturing, Technical and Scientific Products - NEW!</a></p>',
'<p><a title=" Sales Representatives, Wholesale and Manufacturing, Except Technical and Scientific" href="/videos/careeronestop-videos.aspx?videocode=41401200"> Sales Representatives, Wholesale and Manufacturing, Except Technical and Scientific - NEW!</a></p>',
'<p><a title="Secretaries and Administrative Assistants, Except Legal, Medical, and Executive" href="/videos/careeronestop-videos.aspx?videocode=43601400">Secretaries and Administrative Assistants, Except Legal, Medical, and Executive - NEW!</a></p>',
'<p><a title="Shipping, Receiving, and Traffic Clerks" href="/videos/careeronestop-videos.aspx?videocode=43507100">Shipping, Receiving, and Traffic Clerks - NEW!</a></p>',
'<p><a title="Social and Community Service Managers" href="/videos/careeronestop-videos.aspx?videocode=11915100">Social and Community Service Managers - NEW!</a></p>',
'<p><a title="Stock Clerks and Order Fillers" href="/videos/careeronestop-videos.aspx?videocode=43508100">Stock Clerks and Order Fillers - NEW!</a></p>',
'<p><a title="Survey Researchers" href="/videos/careeronestop-videos.aspx?videocode=19302200">Survey Researchers - NEW!</a></p>',
'<p><a title="Tax Examiners and Collectors, and Revenue Agents" href="/videos/careeronestop-videos.aspx?videocode=13208100">Tax Examiners and Collectors, and Revenue Agents - NEW!</a></p>',
'<p><a title="Tax Preparers" href="https://cdn.careeronestop.org/CareerVideos/13-2082.00.mp4">Tax Preparers</a></p>',
'<p><a title="Technical Writers" href="https://cdn.careeronestop.org/CareerVideos/27-3042.00.mp4">Technical Writers</a></p>',
'<p><a title="Telephone Operators" href="/videos/careeronestop-videos.aspx?videocode=43202100">Telephone Operators - NEW!</a></p>',
'<p><a title="Training and Development Managers" href="/videos/careeronestop-videos.aspx?videocode=11313100">Training and Development Managers - NEW!</a></p>',
'<p><a title="Training and Development Specialists" href="/videos/careeronestop-videos.aspx?videocode=13115100">Training and Development Specialists - NEW!</a></p>',
'<p><a title="Transportation Managers" href="/videos/careeronestop-videos.aspx?videocode=11307101">Transportation Managers - NEW!</a></p>',
'<p><a title="Treasurers and Controllers" href="/videos/careeronestop-videos.aspx?videocode=11303101">Treasurers and Controllers - NEW!</a></p>',
'<p><a title="Weighers, Measurers, Checkers, and Samplers, Recordkeeping" href="/videos/careeronestop-videos.aspx?videocode=43511100">Weighers, Measurers, Checkers, and Samplers, Recordkeeping - NEW!</a></p>',
'<p><a title="Writers and Authors" href="https://cdn.careeronestop.org/CareerVideos/27-3043.00.mp4">Writers and Authors</a></p>'
];

const eduMain = [
'<p><a title="Education and Training (Cluster Video)" href="https://cdn.careeronestop.org/CareerVideos/00-0000.05.mp4">Education and Training (Cluster Video)</a></p>',
'<p><a title="Adult Basic and Secondary Education and Literacy Teachers and Instructors" href="/videos/careeronestop-videos.aspx?videocode=25301100">Adult Basic and Secondary Education and Literacy Teachers and Instructors - NEW!</a></p>',
'<p><a title="Athletes and Sports Competitors" href="/videos/careeronestop-videos.aspx?videocode=27202100">Athletes and Sports Competitors - NEW!</a></p>',
'<p><a title="Archivists" href="/videos/careeronestop-videos.aspx?videocode=25401100">Archivists - NEW!</a></p>',
'<p><a title="Career/Technical Education Teachers, Middle School" href="/videos/careeronestop-videos.aspx?videocode=25202300">Career/Technical Education Teachers, Middle School - NEW!</a></p>',
'<p><a title="Career/Technical Education Teachers, Secondary School" href="/videos/careeronestop-videos.aspx?videocode=25203200">Career/Technical Education Teachers, Secondary School - NEW!</a></p>',
'<p><a title="Clinical, Counseling, and School Psychologists" href="/videos/careeronestop-videos.aspx?videocode=19303100">Clinical, Counseling, and School Psychologists - NEW!</a></p>',
'<p><a title="Coaches and Scouts" href="/videos/careeronestop-videos.aspx?videocode=27202200">Coaches and Scouts - NEW!</a></p>',
'<p><a title="Computer Science Teachers - Postsecondary" href="https://cdn.careeronestop.org/CareerVideos/25-1021.00.mp4">Computer Science Teachers - Postsecondary</a></p>',
'<p><a title="Dietitians and Nutritionists" href="/videos/careeronestop-videos.aspx?videocode=29103100">Dietitians and Nutritionists - NEW!</a></p>',
'<p><a title="Distance Learning Coordinators" href="/videos/careeronestop-videos.aspx?videocode=11903901">Distance Learning Coordinators - NEW!</a></p>',
'<p><a title="Education Administrators - Elementary and Secondary School" href="https://cdn.careeronestop.org/CareerVideos/11-9032.00.mp4">Education Administrators - Elementary and Secondary School</a></p>',
'<p><a title="Education Administrators - Postsecondary" href="/videos/careeronestop-videos.aspx?videocode=11903300">Education Administrators - Postsecondary - NEW!</a></p>',
'<p><a title="Education Administrators - Preschool and Childcare Centers" href="/videos/careeronestop-videos.aspx?videocode=11903100">Education Administrators - Preschool and Childcare Centers - NEW!</a></p>',
'<p><a title="Educational Teachers - Postsecondary" href="https://cdn.careeronestop.org/CareerVideos/25-1000.00.mp4">Educational Teachers - Postsecondary</a></p>',
'<p><a title="Educational, Guidance, School, and Vocational Counselors" href="/videos/careeronestop-videos.aspx?videocode=21101200">Educational, Guidance, School, and Vocational Counselors - NEW!</a></p>',
'<p><a title="Elementary School Teachers - Except Special Education" href="/videos/careeronestop-videos.aspx?videocode=25202100">Elementary School Teachers - Except Special Education - NEW!</a></p>',
'<p><a title="Fitness and Wellness Coordinators" href="/videos/careeronestop-videos.aspx?videocode=11903902">Fitness and Wellness Coordinators - NEW!</a></p>',
'<p><a title="Fitness Trainers and Aerobics Instructors" href="/videos/careeronestop-videos.aspx?videocode=39903100">Fitness Trainers and Aerobics Instructors - NEW!</a></p>',
'<p><a title="Graduate Teaching Assistants" href="/videos/careeronestop-videos.aspx?videocode=25119100">Graduate Teaching Assistants - NEW!</a></p>',
'<p><a title="Home Appliance Repairers" href="https://cdn.careeronestop.org/CareerVideos/49-9031.00.mp4">Home Appliance Repairers</a></p>',
'<p><a title="Interpreters and Translators" href="/videos/careeronestop-videos.aspx?videocode=27309100">Interpreters and Translators - NEW!</a></p>',
'<p><a title="Instructional Coordinators" href="/videos/careeronestop-videos.aspx?videocode=25903100">Instructional Coordinators - NEW!</a></p>',
'<p><a title="Librarians" href="/videos/careeronestop-videos.aspx?videocode=25402100">Librarians - NEW!</a></p>',
'<p><a title="Library Assistants, Clerical" href="/videos/careeronestop-videos.aspx?videocode=43412100">Library Assistants, Clerical - NEW!</a></p>',
'<p><a title="Library Technicians" href="/videos/careeronestop-videos.aspx?videocode=25403100">Library Technicians - NEW!</a></p>',
'<p><a title="Nursing Instructors and Teachers - Postsecondary" href="https://cdn.careeronestop.org/CareerVideos/25-1072.00.mp4">Nursing Instructors and Teachers - Postsecondary</a></p>',
'<p><a title="Preschool Teachers Except Special Education" href="/videos/careeronestop-videos.aspx?videocode=25201100">Preschool Teachers Except Special Education - NEW!</a></p>',
'<p><a title="Recreation Workers" href="https://cdn.careeronestop.org/CareerVideos/39-9032.00.mp4">Recreation Workers</a></p>',
'<p><a title="Regulatory Affairs Managers" href="/videos/careeronestop-videos.aspx?videocode=11919901">Regulatory Affairs Managers - NEW!</a></p>',
'<p><a title="Secondary School Teachers - Except Special and Career/Technical Education" href="/videos/careeronestop-videos.aspx?videocode=25203100">Secondary School Teachers - NEW!</a></p>',
'<p><a title="Self-Enrichment Education Teachers" href="https://cdn.careeronestop.org/CareerVideos/25-3021.00.mp4">Self-Enrichment Education Teachers</a></p>',
'<p><a title="Special Education Teachers Kindergarten and Elementary School" href="/videos/careeronestop-videos.aspx?videocode=25205200">Special Education Teachers Kindergarten and Elementary School - NEW!</a></p>',
'<p><a title="Special Education Teachers, Middle School" href="/videos/careeronestop-videos.aspx?videocode=25205300">Special Education Teachers, Middle School - NEW!</a></p>',
'<p><a title="Special Education Teachers, Secondary School" href="/videos/careeronestop-videos.aspx?videocode=25205400">Special Education Teachers, Secondary School - NEW!</a></p>',
'<p><a title="Teacher Assistants" href="/videos/careeronestop-videos.aspx?videocode=25904100">Teacher Assistants - NEW!</a></p>',
'<p><a title="Training and Development Managers" href="/videos/careeronestop-videos.aspx?videocode=11313100">Training and Development Managers - NEW!</a></p>',
'<p><a title="Training and Development Specialists" href="/videos/careeronestop-videos.aspx?videocode=13115100">Training and Development Specialists - NEW!</a></p>',
'<p><a title="Tutors" href="/videos/careeronestop-videos.aspx?videocode=25309902">Tutors - NEW!</a></p>',
'<p><a title="Vocational Education Teachers - Postsecondary" href="https://cdn.careeronestop.org/CareerVideos/25-1194.00.mp4">Vocational Education Teachers - Postsecondary</a></p>',
'<p><a title="Writers and Authors" href="https://cdn.careeronestop.org/CareerVideos/27-3043.00.mp4">Writers and Authors</a></p>'
];

const finMain = [
'<p><a title="Finance (Cluster Video)" href="https://cdn.careeronestop.org/CareerVideos/00-0000.06.mp4">Finance (Cluster Video)</a></p>',
'<p><a title="Actuaries" href="/videos/careeronestop-videos.aspx?videocode=15201100">Actuaries - NEW!</a></p>',
'<p><a title="Bill and Account Collectors" href="/videos/careeronestop-videos.aspx?videocode=43301100">Bill and Account Collectors - NEW!</a></p>',
'<p><a title="Billing, Cost, and Rate Clerks" href="/videos/careeronestop-videos.aspx?videocode=43302102">Billing, Cost, and Rate Clerks - NEW!</a></p>',
'<p><a title="Billing and Posting Clerks" href="/videos/careeronestop-videos.aspx?videocode=43302100">Billing and Posting Clerks - NEW!</a></p>',
'<p><a title="Brokerage Clerks" href="/videos/careeronestop-videos.aspx?videocode=43401100">Brokerage Clerks - NEW!</a></p>',
'<p><a title="Budget Analysts" href="/videos/careeronestop-videos.aspx?videocode=13203100">Budget Analysts - NEW!</a></p>',
'<p><a title="Claims Adjusters, Examiners, and Investigators" href="/videos/careeronestop-videos.aspx?videocode=13103100">Claims Adjusters, Examiners, and Investigators - NEW!</a></p>',
'<p><a title="Claims Examiners, Property and Casualty Insurance" href="/videos/careeronestop-videos.aspx?videocode=13103101">Claims Examiners, Property and Casualty Insurance - NEW!</a></p>',
'<p><a title="Credit Analyst" href="/videos/careeronestop-videos.aspx?videocode=13204100">Credit Analyst - NEW!</a></p>',
'<p><a title="Credit Authorizers Checkers and Clerks" href="/videos/careeronestop-videos.aspx?videocode=43404100">Credit Authorizers Checkers and Clerks - NEW!</a></p>',
'<p><a title="Credit Counselors" href="/videos/careeronestop-videos.aspx?videocode=13207100">Credit Counselors - NEW!</a></p>',
'<p><a title="Economists" href="/videos/careeronestop-videos.aspx?videocode=19301100">Economists - NEW!</a></p>',
'<p><a title="Financial Analysts" href="/videos/careeronestop-videos.aspx?videocode=13205100">Financial Analysts - NEW!</a></p>',
'<p><a title="Financial Managers" href="/videos/careeronestop-videos.aspx?videocode=11303100">Financial Managers - NEW!</a></p>',
'<p><a title="Insurance Adjusters, Examniers, and Investigators" href="/videos/careeronestop-videos.aspx?videocode=13103102">Insurance Adjusters, Examniers, and Investigators - NEW!</a></p>',
'<p><a title="Insurance Appraisers, Auto Damage" href="/videos/careeronestop-videos.aspx?videocode=13103200">Insurance Appraisers, Auto Damage - NEW!</a></p>',
'<p><a title="Insurance Claims and Policy Processing Clerks" href="/videos/careeronestop-videos.aspx?videocode=43904100">Insurance Claims and Policy Processing Clerks - NEW!</a></p>',
'<p><a title="Insurance Sales Agents" href="/videos/careeronestop-videos.aspx?videocode=41302100">Insurance Sales Agents - NEW!</a></p>',
'<p><a title="Insurance Underwriters" href="/videos/careeronestop-videos.aspx?videocode=13205300">Insurance Underwriters - NEW!</a></p>',
'<p><a title="Investment Fund Managers" href="/videos/careeronestop-videos.aspx?videocode=11919903">Investment Fund Managers - NEW!</a></p>',
'<p><a title="Loan Counselors" href="/videos/careeronestop-videos.aspx?videocode=13207101">Loan Counselors - NEW!</a></p>',
'<p><a title="Loan Interviewers and Clerks" href="https://cdn.careeronestop.org/CareerVideos/43-4131.00.mp4">Loan Interviewers and Clerks</a></p>',
'<p><a title="Loan Officers" href="https://cdn.careeronestop.org/CareerVideos/13-2072.00.mp4">Loan Officers</a></p>',
'<p><a title="New Accounts Clerks" href="/videos/careeronestop-videos.aspx?videocode=43414100">New Accounts Clerks - NEW!</a></p>',
'<p><a title="Procurement Clerks" href="/videos/careeronestop-videos.aspx?videocode=43306100">Procurement Clerks - NEW!</a></p>',
'<p><a title="Personal Financial Advisors" href="/videos/careeronestop-videos.aspx?videocode=13205200">Personal Financial Advisors - NEW!</a></p>',
'<p><a title="Proofreaders and Copy Markers" href="https://cdn.careeronestop.org/CareerVideos/43-9081.00.mp4">Proofreaders and Copy Markers</a></p>',
'<p><a title="Securities, Commodities, and Financial Services Sales Agents" href="/videos/careeronestop-videos.aspx?videocode=41303100">Securities, Commodities, and Financial Services Sales Agents - NEW!</a></p>',
'<p><a title="Securities and Commodities Traders" href="/videos/careeronestop-videos.aspx?videocode=41303103">Securities and Commodities Traders - NEW!</a></p>',
'<p><a title="Statement Clerks" href="/videos/careeronestop-videos.aspx?videocode=43302101">Statement Clerks - NEW!</a></p>',
'<p><a title="Tax Preparers" href="https://cdn.careeronestop.org/CareerVideos/13-2082.00.mp4">Tax Preparers</a></p>',
'<p><a title="Tax Examiners and Collectors, and Revenue Agents" href="/videos/careeronestop-videos.aspx?videocode=13208100">Tax Examiners and Collectors, and Revenue Agents - NEW!</a></p>',
'<p><a title="Telemarketers" href="https://cdn.careeronestop.org/CareerVideos/41-9041.00.mp4">Telemarketers</a></p>',
'<p><a title="Tellers" href="/videos/careeronestop-videos.aspx?videocode=43307100">Tellers - NEW!</a></p>',
'<p><a title="Title Examiners - Abstractors - and Searchers" href="https://cdn.careeronestop.org/CareerVideos/23-2093.00.mp4">Title Examiners - Abstractors - and Searchers</a></p>',
'<p><a title="Treasurers and Controllers" href="/videos/careeronestop-videos.aspx?videocode=11303101">Treasurers and Controllers - NEW!</a></p>'
];

const govMain = [
'<p><a title="Government and Public Administration (Cluster Video)" href="https://cdn.careeronestop.org/CareerVideos/00-0000.07.mp4">Government and Public Administration (Cluster Video)</a></p>',
'<p><a title="Accountants and Auditors" href="/videos/careeronestop-videos.aspx?videocode=13201100">Accountants and Auditors - NEW!</a></p>',
'<p><a title="Administrative Services Managers" href="/videos/careeronestop-videos.aspx?videocode=11301100">Administrative Services Managers - NEW!</a></p>',
'<p><a title="Architectural and Engineering Managers" href="/videos/careeronestop-videos.aspx?videocode=11904100">Architectural and Engineering Managers - NEW!</a></p>',
'<p><a title="Chief Executives" href="/videos/careeronestop-videos.aspx?videocode=11101100">Chief Executives - NEW!</a></p>',
'<p><a title="Claims Takers - Unemployment Benefits" href="https://cdn.careeronestop.org/CareerVideos/43-4061.01.mp4">Claims Takers - Unemployment Benefits</a></p>',
'<p><a title="Construction and Building Inspectors" href="/videos/careeronestop-videos.aspx?videocode=47401100">Construction and Building Inspectors - NEW!</a></p>',
'<p><a title="Coroners" href="/videos/careeronestop-videos.aspx?videocode=13104106">Coroners - NEW!</a></p>',
'<p><a title="Court, Municipal, and License Clerks" href="/videos/careeronestop-videos.aspx?videocode=43403100">Court, Municipal, and License Clerks - NEW!</a></p>',
'<p><a title="Detectives and Criminal Investigators" href="https://cdn.careeronestop.org/CareerVideos/33-3021.00.mp4">Detectives and Criminal Investigators</a></p>',
'<p><a title="Economists" href="/videos/careeronestop-videos.aspx?videocode=19301100">Economists - NEW!</a></p>',
'<p><a title="Eligibility Interviewers - Government Programs" href="https://cdn.careeronestop.org/CareerVideos/43-4061.00.mp4">Eligibility Interviewers - Government Programs</a></p>',
'<p><a title="Emergency Management Directors" href="/videos/careeronestop-videos.aspx?videocode=11916100">Emergency Management Directors - NEW!</a></p>',
'<p><a title="Equal Opportunity Representatives and Officers" href="/videos/careeronestop-videos.aspx?videocode=13104103">Equal Opportunity Representatives and Officers - NEW!</a></p>',
'<p><a title="File Clerks" href="/videos/careeronestop-videos.aspx?videocode=43407100">File Clerks - NEW!</a></p>',
'<p><a title="Financial Examiners" href="/videos/careeronestop-videos.aspx?videocode=13206100">Financial Examiners - NEW!</a></p>',
'<p><a title="General and Operations Managers" href="https://cdn.careeronestop.org/CareerVideos/11-1021.00.mp4">General and Operations Managers</a></p>',
'<p><a title="Interviewers Except Eligibility and Loan" href="/videos/careeronestop-videos.aspx?videocode=43411100">Interviewers Except Eligibility and Loan - NEW!</a></p>',
'<p><a title="Legislators" href="/videos/careeronestop-videos.aspx?videocode=11103100">Legislators - NEW!</a></p>',
'<p><a title="Licensing Examiners and Inspectors" href="/videos/careeronestop-videos.aspx?videocode=13104102">Licensing Examiners and Inspectors - NEW!</a></p>',
'<p><a title="Meter Readers-Utilities" href="/videos/careeronestop-videos.aspx?videocode=43504100">Meter Readers-Utilities - NEW!</a></p>',
'<p><a title="Postal Service Mail Carriers" href="https://cdn.careeronestop.org/CareerVideos/43-5052.00.mp4">Postal Service Mail Carriers</a></p>',
'<p><a title="Postal Service Mail Sorters - Processors - Processing Machine Operators" href="https://cdn.careeronestop.org/CareerVideos/43-5053.00.mp4">Postal Service Mail Sorters - Processors - Processing Machine Operators</a></p>',
'<p><a title="Postmasters and Mail Superintendents" href="https://cdn.careeronestop.org/CareerVideos/11-9131.00.mp4">Postmasters and Mail Superintendents</a></p>',
'<p><a title="Public Relations Specialists" href="/videos/careeronestop-videos.aspx?videocode=27303100">Public Relations Specialists - NEW!</a></p>',
'<p><a title="Regulatory Affairs Managers" href="/videos/careeronestop-videos.aspx?videocode=11919901">Regulatory Affairs Managers - NEW!</a></p>',
'<p><a title="Social and Community Service Managers" href="/videos/careeronestop-videos.aspx?videocode=11915100">Social and Community Service Managers - NEW!</a></p>',
'<p><a title="Surveying and Mapping Technicians" href="/videos/careeronestop-videos.aspx?videocode=17303100">Surveying and Mapping Technicians - NEW!</a></p>',
'<p><a title="Tax Examiners and Collectors, and Revenue Agents" href="/videos/careeronestop-videos.aspx?videocode=13208100">Tax Examiners and Collectors, and Revenue Agents - NEW!</a></p>',
'<p><a title="Tax Preparers" href="https://cdn.careeronestop.org/CareerVideos/13-2082.00.mp4">Tax Preparers</a></p>',
'<p><a title="Transportation Managers" href="/videos/careeronestop-videos.aspx?videocode=11307101">Transportation Managers - NEW!</a></p>',
'<p><a title="Urban and Regional Planners" href="/videos/careeronestop-videos.aspx?videocode=19305100">Urban and Regional Planners - NEW!</a></p>'
];

const heaMain = [
'<p><a title="Health Science (Cluster Video)" href="https://cdn.careeronestop.org/CareerVideos/00-0000.08.mp4">Health Science (Cluster Video)</a></p>',
'<p><a title="Acupuncturists" href="/videos/careeronestop-videos.aspx?videocode=29119901">Acupuncturists - NEW!</a></p>',
'<p><a title="Anesthesiologist" href="/videos/careeronestop-videos.aspx?videocode=29106100">Anesthesiologist - NEW!</a></p>',
'<p><a title="Art Therapists" href="/videos/careeronestop-videos.aspx?videocode=29112501">Art Therapists - NEW!</a></p>',
'<p><a title="Athletic Trainers" href="/videos/careeronestop-videos.aspx?videocode=29909100">Athletic Trainers - NEW!</a></p>',
'<p><a title="Audiologists" href="/videos/careeronestop-videos.aspx?videocode=29118100">Audiologists - NEW!</a></p>',
'<p><a title="Biologists" href="https://cdn.careeronestop.org/CareerVideos/19-1020.01.mp4">Biologists</a></p>',
'<p><a title="Biomedical Engineers" href="/videos/careeronestop-videos.aspx?videocode=17203100">Biomedical Engineers - NEW!</a></p>',
'<p><a title="Cardiovascular Technologists and Technicians" href="/videos/careeronestop-videos.aspx?videocode=29203100">Cardiovascular Technologists and Technicians - NEW!</a></p>',
'<p><a title="Chiropractors" href="/videos/careeronestop-videos.aspx?videocode=29101100">Chiropractors - NEW!</a></p>',
'<p><a title="Claims Examiners - Property and Casualty Insurance" href="https://cdn.careeronestop.org/CareerVideos/13-1031.01.mp4">Claims Examiners - Property and Casualty Insurance</a></p>',
'<p><a title="Clinical, Counseling, and School Psychologists" href="/videos/careeronestop-videos.aspx?videocode=19303100">Clinical, Counseling, and School Psychologists - NEW!</a></p>',
'<p><a title="Clinical Research Coordinators" href="/videos/careeronestop-videos.aspx?videocode=11912101">Clinical Research Coordinators - NEW!</a></p>',
'<p><a title="Community Health Workers" href="/videos/careeronestop-videos.aspx?videocode=21109400">Community Health Workers - NEW!</a></p>',
'<p><a title="Cooks - Institution and Cafeteria" href="/videos/careeronestop-videos.aspx?videocode=35201200">Cooks, Institution and Cafeteria - NEW!</a></p>',
'<p><a title="Coroners" href="/videos/careeronestop-videos.aspx?videocode=13104106">Coroners - NEW!</a></p>',
'<p><a title="Dental Assistants" href="/videos/careeronestop-videos.aspx?videocode=31909100">Dental Assistants - NEW!</a></p>',
'<p><a title="Dental Hygienists" href="/videos/careeronestop-videos.aspx?videocode=29202100">Dental Hygienists - NEW!</a></p>',
'<p><a title="Dental Laboratory Technicians" href="/videos/careeronestop-videos.aspx?videocode=51908100">Dental Laboratory Technicians - NEW!</a></p>',
'<p><a title="Dentists" href="/videos/careeronestop-videos.aspx?videocode=29102100">Dentists - NEW!</a></p>',
'<p><a title="Diagnostic Medical Sonographers" href="/videos/careeronestop-videos.aspx?videocode=29203200">Diagnostic Medical Sonographers - NEW!</a></p>',
'<p><a title="" href="https://cdn.careeronestop.org/CareerVideos/29-2032.00.mp4"></a></p>',
'<p><a title="Dietetic Technicians" href="/videos/careeronestop-videos.aspx?videocode=29205100">Dietetic Technicians - NEW!</a></p>',
'<p><a title="Dietitians and Nutritionists" href="/videos/careeronestop-videos.aspx?videocode=29103100">Dietitians and Nutritionists - NEW!</a></p>',
'<p><a title="Emergency Medical Technicians and Paramedics" href="/videos/careeronestop-videos.aspx?videocode=29204100">Emergency Medical Technicians and Paramedics - NEW!</a></p>',
'<p><a title="Epidemiologists" href="/videos/careeronestop-videos.aspx?videocode=19104100">Epidemiologists - NEW!</a></p>',
'<p><a title="Exercise Physiologists" href="/videos/careeronestop-videos.aspx?videocode=29112800">Exercise Physiologists - NEW!</a></p>',
'<p><a title="Family and General Practitioners" href="/videos/careeronestop-videos.aspx?videocode=29106200">Family and General Practitioners - NEW!</a></p>',
'<p><a title="Fine Artists - Including Painters - Sculptors - and Illustrators" href="https://cdn.careeronestop.org/CareerVideos/27-1013.00.mp4">Fine Artists - Including Painters - Sculptors - and Illustrators</a></p>',
'<p><a title="First-Line Supervisors/Managers of Food Preparation and Serving Workers" href="https://cdn.careeronestop.org/CareerVideos/35-1012.00.mp4">First-Line Supervisors/Managers of Food Preparation and Serving Workers</a></p>',
'<p><a title="Genetic Counselors" href="/videos/careeronestop-videos.aspx?videocode=29909200">Genetic Counselors - NEW!</a></p>',
'<p><a title="Health Educators" href="https://cdn.careeronestop.org/CareerVideos/21-1091.00.mp4">Health Educators</a></p>',
'<p><a title="Home Health Aides" href="/videos/careeronestop-videos.aspx?videocode=31101100">Home Health Aides - NEW!</a></p>',
'<p><a title="Internists, General" href="/videos/careeronestop-videos.aspx?videocode=29106300">Internists, General - NEW!</a></p>',
'<p><a title="Informatics Nurse Specialists" href="/videos/careeronestop-videos.aspx?videocode=15112101">Informatics Nurse Specialists - NEW!</a></p>',
'<p><a title="Licensed Practical and Licensed Vocational Nurses" href="/videos/careeronestop-videos.aspx?videocode=29206100">Licensed Practical and Licensed Vocational Nurses - NEW!</a></p>',
'<p><a title="Magnetic Resonance Imaging (MRI) Technologists" href="/videos/careeronestop-videos.aspx?videocode=29203500">Magnetic Resonance Imaging (MRI) Technologists - NEW!</a></p>',
'<p><a title="Massage Therapists" href="/videos/careeronestop-videos.aspx?videocode=31901100">Massage Therapists - NEW!</a></p>',
'<p><a title="Medical and Clinical Laboratory Technicians" href="/videos/careeronestop-videos.aspx?videocode=29201200">Medical and Clinical Laboratory Technicians - NEW!</a></p>',
'<p><a title="Medical and Clinical Laboratory Technologists" href="/videos/careeronestop-videos.aspx?videocode=29201100">Medical and Clinical Laboratory Technologists - NEW!</a></p>',
'<p><a title="Medical and Health Services Managers" href="/videos/careeronestop-videos.aspx?videocode=11911100">Medical and Health Services Managers - NEW!</a></p>',
'<p><a title="Medical Appliance Technicians" href="/videos/careeronestop-videos.aspx?videocode=51908200">Medical Appliance Technicians - NEW!</a></p>',
'<p><a title="Medical Assistants" href="/videos/careeronestop-videos.aspx?videocode=31909200">Medical Assistants - NEW!</a></p>',
'<p><a title="Medical Equipment Preparers" href="https://cdn.careeronestop.org/CareerVideos/31-9093.00.mp4">Medical Equipment Preparers</a></p>',
'<p><a href="https://cdn.careeronestop.org/CareerVideos/LabTech.mp4">Medical Lab Technician</a></p>',
'<p><a title="Medical Records and Health Information Technicians" href="/videos/careeronestop-videos.aspx?videocode=29207100">Medical Records and Health Information Technicians- NEW!</a></p>',
'<p><a title="Medical Scientists, Except Epidemiologists" href="/videos/careeronestop-videos.aspx?videocode=19104200">Medical Scientists, Except Epidemiologists - NEW!</a></p>',
'<p><a title="Medical Secretaries" href="/videos/careeronestop-videos.aspx?videocode=43601300">Medical Secretaries - NEW!</a></p>',
'<p><a title="Medical Transcriptionists" href="/videos/careeronestop-videos.aspx?videocode=31909400">Medical Transcriptionists - NEW!</a></p>',
'<p><a title="Mental Health and Substance Abuse Social Workers" href="/videos/careeronestop-videos.aspx?videocode=21102300">Mental Health and Substance Abuse Social Workers - NEW!</a></p>',
'<p><a title="Mental Health Counselors" href="/videos/careeronestop-videos.aspx?videocode=21101400">Mental Health Counselors - NEW!</a></p>',
'<p><a title="Musicians and Singers" href="/videos/careeronestop-videos.aspx?videocode=27204200">Musicians and Singers - NEW!</a></p>',
'<p><a title="Musicians - Instrumental" href="https://cdn.careeronestop.org/CareerVideos/27-2042.02.mp4">Musicians - Instrumental</a></p>',
'<p><a title="Natural Sciences Managers" href="/videos/careeronestop-videos.aspx?videocode=11912100">Natural Sciences Managers - NEW!</a></p>',
'<p><a title="Naturopathic Physicians" href="/videos/careeronestop-videos.aspx?videocode=29119904">Naturopathic Physicians - NEW!</a></p>',
'<p><a title="Nuclear Medicine Technologists" href="/videos/careeronestop-videos.aspx?videocode=29203300">Nuclear Medicine Technologists - NEW!</a></p>',
'<p><a title="Nuclear Technicians" href="https://cdn.careeronestop.org/CareerVideos/19-4051.00.mp4">Nuclear Technicians</a></p>',
'<p><a title="Nurse Anesthetists" href="/videos/careeronestop-videos.aspx?videocode=29115100">Nurse Anesthetists - NEW!</a></p>',
'<p><a title="Nurse Midwives" href="/videos/careeronestop-videos.aspx?videocode=29116100">Nurse Midwives - NEW!</a></p>',
'<p><a title="Nurse Practitioners" href="/videos/careeronestop-videos.aspx?videocode=29117100">Nurse Practitioners - NEW!</a></p>',
'<p><a title="Nursing Assistants" href="/videos/careeronestop-videos.aspx?videocode=31101400">Nursing Assistants - NEW!</a></p>',
'<p><a title="Nursing Instructors and Teachers - Postsecondary" href="https://cdn.careeronestop.org/CareerVideos/25-1072.00.mp4">Nursing Instructors and Teachers - Postsecondary</a></p>',
'<p><a title="Obstetricians and Gynecologists" href="https://cdn.careeronestop.org/CareerVideos/29-1064.00.mp4">Obstetricians and Gynecologists</a></p>',
'<p><a title="Occupational Health and Safety Specialists and Technicians" href="/videos/careeronestop-videos.aspx?videocode=29901100">Occupational Health and Safety Specialists and Technicians - NEW!</a></p>',
'<p><a title="Occupational Therapy Aides" href="/videos/careeronestop-videos.aspx?videocode=31201200">Occupational Therapy Aides - NEW!</a></p>',
'<p><a title="Occupational Therapy Assistants" href="/videos/careeronestop-videos.aspx?videocode=31201100">Occupational Therapy Assistants - NEW!</a></p>',
'<p><a title="Occupational Therapists" href="/videos/careeronestop-videos.aspx?videocode=29112200">Occupational Therapists - NEW!</a></p>',
'<p><a title="Ophthalmic Laboratory Technicians" href="/videos/careeronestop-videos.aspx?videocode=51908300">Ophthalmic Laboratory Technicians - NEW!</a></p>',
'<p><a title="Ophthalmic Medical Technicians" href="/videos/careeronestop-videos.aspx?videocode=29205700">Ophthalmic Medical Technicians - NEW!</a></p>',
'<p><a title="Ophthalmic Medical Technologists" href="/videos/careeronestop-videos.aspx?videocode=29209905">Ophthalmic Medical Technologists - NEW!</a></p>',
'<p><a title="Opticians, Dispensing" href="/videos/careeronestop-videos.aspx?videocode=29208100">Opticians, Dispensing - NEW!</a></p>',
'<p><a title="Optometrists" href="/videos/careeronestop-videos.aspx?videocode=29104100">Optometrists - NEW!</a></p>',
'<p><a title="Oral and Maxillofacial Surgeons" href="/videos/careeronestop-videos.aspx?videocode=29102200">Oral and Maxillofacial Surgeons - NEW!</a></p>',
'<p><a title="Orderlies" href="/videos/careeronestop-videos.aspx?videocode=31101500">Orderlies - NEW!</a></p>',
'<p><a title="Orthodontists" href="/videos/careeronestop-videos.aspx?videocode=29102300">Orthodontists - NEW!</a></p>',
'<p><a title="Orthotists and Prosthetists" href="/videos/careeronestop-videos.aspx?videocode=29209100">Orthotists and Prosthetists - NEW!</a></p>',
'<p><a title="Pediatricians, General" href="/videos/careeronestop-videos.aspx?videocode=29106500">Pediatricians, General - NEW!</a></p>',
'<p><a title="Pharmacists" href="/videos/careeronestop-videos.aspx?videocode=29105100">Pharmacists - NEW!</a></p>',
'<p><a title="Pharmacy Aides" href="/videos/careeronestop-videos.aspx?videocode=31909500">Pharmacy Aides - NEW!</a></p>',
'<p><a title="Pharmacy Technicians" href="/videos/careeronestop-videos.aspx?videocode=29205200">Pharmacy Technicians - NEW!</a></p>',
'<p><a title="Phlebotomists" href="/videos/careeronestop-videos.aspx?videocode=31909700">Phlebotomists - NEW!</a></p>',
'<p><a title="Physical Therapist Aides" href="/videos/careeronestop-videos.aspx?videocode=31202200">Physical Therapist Aides - NEW!</a></p>',
'<p><a title="Physical Therapist Assistants" href="/videos/careeronestop-videos.aspx?videocode=31202100">Physical Therapist Assistants - NEW!</a></p>',
'<p><a title="Physical Therapists" href="/videos/careeronestop-videos.aspx?videocode=29112300">Physical Therapists - NEW!</a></p>',
'<p><a title="Physician Assistants" href="/videos/careeronestop-videos.aspx?videocode=29107100">Physician Assistants - NEW!</a></p>',
'<p><a title="Podiatrists" href="/videos/careeronestop-videos.aspx?videocode=29108100">Podiatrists - NEW!</a></p>',
'<p><a title="Prosthodontists" href="/videos/careeronestop-videos.aspx?videocode=29102400">Prosthodontists - NEW!</a></p>',
'<p><a title="Psychiatric Aides" href="https://cdn.careeronestop.org/CareerVideos/31-1013.00.mp4">Psychiatric Aides</a></p>',
'<p><a title="Psychiatrists" href="https://cdn.careeronestop.org/CareerVideos/29-1066.00.mp4">Psychiatrists</a></p>',
'<p><a title="Psychologists" href="/videos/careeronestop-videos.aspx?videocode=19303900">Psychologists - NEW!</a></p>',
'<p><a title="Radiation Therapists" href="https://cdn.careeronestop.org/CareerVideos/29-1124.00.mp4">Radiation Therapists</a></p>',
'<p><a title="Radiologic Technologists and Technicians" href="/videos/careeronestop-videos.aspx?videocode=29203400">Radiologic Technologists and Technicians - NEW!</a></p>',
'<p><a title="Receptionists and Information Clerks" href="/videos/careeronestop-videos.aspx?videocode=43417100">Receptionists and Information Clerks - NEW!</a></p>',
'<p><a title="Recreational Therapists" href="/videos/careeronestop-videos.aspx?videocode=29112500">Recreational Therapists - NEW!</a></p>',
'<p><a title="Registered Nurses" href="/videos/careeronestop-videos.aspx?videocode=29114100">Registered Nurses - NEW!</a></p>',
'<p><a title="Rehabilitation Counselors" href="/videos/careeronestop-videos.aspx?videocode=21101500">Rehabilitation Counselors - NEW!</a></p>',
'<p><a title="Respiratory Therapists" href="/videos/careeronestop-videos.aspx?videocode=29112600">Respiratory Therapists - NEW!</a></p>',
'<p><a title="Speech-Language Pathologists" href="/videos/careeronestop-videos.aspx?videocode=29112700">Speech-Language Pathologists - NEW!</a></p>',
'<p><a title="Social and Human Service Assistants" href="/videos/careeronestop-videos.aspx?videocode=21109300">Social and Human Service Assistants - NEW!</a></p>',
'<p><a title="Substance Abuse and Behavioral Disorder Counselors" href="/videos/careeronestop-videos.aspx?videocode=21101100">Substance Abuse and Behavioral Disorder Counselors - NEW!</a></p>',
'<p><a title="Surgeons" href="/videos/careeronestop-videos.aspx?videocode=29106700">Surgeons - NEW!</a></p>',
'<p><a title="Surgical Assistants" href="/videos/careeronestop-videos.aspx?videocode=29209907">Surgical Assistants - NEW!</a></p>',
'<p><a title="Surgical Technologists" href="/videos/careeronestop-videos.aspx?videocode=29205500">Surgical Technologists - NEW!</a></p>'
];

const hosMain = [
'<p><a title="Hospitality and Tourism (Cluster Video)" href="https://cdn.careeronestop.org/CareerVideos/00-0000.09.mp4">Hospitality and Tourism (Cluster Video)</a></p>',
'<p><a title="Amusement and Recreation Attendants" href="https://cdn.careeronestop.org/CareerVideos/39-3091.00.mp4">Amusement and Recreation Attendants</a></p>',
'<p><a title="Animal Trainers" href="/videos/careeronestop-videos.aspx?videocode=39201100">Animal Trainers - NEW!</a></p>',
'<p><a title="Athletes and Sports Competitors" href="/videos/careeronestop-videos.aspx?videocode=27202100">Athletes and Sports Competitors - NEW!</a></p>',
'<p><a title="Baggage Porters and Bellhops" href="https://cdn.careeronestop.org/CareerVideos/39-6011.00.mp4">Baggage Porters and Bellhops</a></p>',
'<p><a title="Bakers" href="/videos/careeronestop-videos.aspx?videocode=51301100">Bakers - NEW!</a></p>',
'<p><a title="Bakers - Bread and Pastry" href="https://cdn.careeronestop.org/CareerVideos/51-3011.01.mp4">Bakers - Bread and Pastry</a></p>',
'<p><a title="Bakers - Manufacturing" href="https://cdn.careeronestop.org/CareerVideos/51-3011.02.mp4">Bakers - Manufacturing</a></p>',
'<p><a title="Baristas" href="/videos/careeronestop-videos.aspx?videocode=35302201">Baristas - NEW!</a></p>',
'<p><a title="Bartenders" href="/videos/careeronestop-videos.aspx?videocode=35301100">Bartenders - NEW!</a></p>',
'<p><a title="Chefs and Head Cooks" href="/videos/careeronestop-videos.aspx?videocode=35101100">Chefs and Head Cooks - NEW!</a></p>',
'<p><a title="Combined Food Preparation and Serving Workers, Including Fast Food" href="/videos/careeronestop-videos.aspx?videocode=35302100">Combined Food Preparation and Serving Workers, Including Fast Food - NEW!</a></p>',
'<p><a title="Concierges" href="/videos/careeronestop-videos.aspx?videocode=39601200">Concierges - NEW!</a></p>',
'<p><a title="Cooks, Fast Food" href="/videos/careeronestop-videos.aspx?videocode=35201100">Cooks, Fast Food - NEW!</a></p>',
'<p><a title="Cooks, Private Household" href="/videos/careeronestop-videos.aspx?videocode=35201300">Cooks, Private Household - NEW!</a></p>',
'<p><a title="Cooks - Institution and Cafeteria" href="/videos/careeronestop-videos.aspx?videocode=35201200">Cooks, Institution and Cafeteria - NEW!</a></p>',
'<p><a title="Cooks, Restaurant" href="/videos/careeronestop-videos.aspx?videocode=35201400">Cooks, Restaurant - NEW!</a></p>',
'<p><a title="Cook - Short Order" href="/videos/careeronestop-videos.aspx?videocode=35201500">Cook - Short Order - NEW!</a></p>',
'<p><a title="Counter Attendants, Cafeteria, Food Concession, and Coffee Shop" href="/videos/careeronestop-videos.aspx?videocode=35302200">Counter Attendants, Cafeteria, Food Concession, and Coffee Shop - NEW!</a></p>',
'<p><a title="Curators" href="/videos/careeronestop-videos.aspx?videocode=25401200">Curators - NEW!</a></p>',
'<p><a title="Dining Room and Cafeteria Attendants and Bartender Helpers" href="/videos/careeronestop-videos.aspx?videocode=35901100">Dining Room and Cafeteria Attendants and Bartender Helpers - NEW!</a></p>',
'<p><a title="First-Line Supervisors/Managers of Food Preparation and Serving Workers" href="https://cdn.careeronestop.org/CareerVideos/35-1012.00.mp4">First-Line Supervisors/Managers of Food Preparation and Serving Workers</a></p>',
'<p><a title="Food Preparation Workers" href="/videos/careeronestop-videos.aspx?videocode=35202100">Food Preparation Workers - NEW!</a></p>',
'<p><a title="Food Servers, Nonrestaurant" href="/videos/careeronestop-videos.aspx?videocode=35304100">Food Servers, Nonrestaurant - NEW!</a></p>',
'<p><a title="Food Service Managers" href="/videos/careeronestop-videos.aspx?videocode=11905100">Food Service Managers - NEW!</a></p>',
'<p><a title="Gaming and Sports Book Writers and Runners" href="https://cdn.careeronestop.org/CareerVideos/39-3012.00.mp4">Gaming and Sports Book Writers and Runners</a></p>',
'<p><a title="Gambling Cage Workers" href="/videos/careeronestop-videos.aspx?videocode=43304100">Gambling Cage Workers - NEW!</a></p>',
'<p><a title="Gambling and Sports Book Writers and Runners" href="/videos/careeronestop-videos.aspx?videocode=39301200">Gambling and Sports Book Writers and Runners - NEW!</a></p>',
'<p><a title="Gaming Change Persons and Booth Cashiers" href="https://cdn.careeronestop.org/CareerVideos/41-2012.00.mp4">Gaming Change Persons and Booth Cashiers</a></p>',
'<p><a title="Gambling Dealers" href="/videos/careeronestop-videos.aspx?videocode=39301100">Gambling Dealers - NEW!</a></p>',
'<p><a title="Gaming Managers" href="/videos/careeronestop-videos.aspx?videocode=11907100">Gaming Managers - NEW!</a></p>',
'<p><a title="Gaming Supervisors" href="/videos/careeronestop-videos.aspx?videocode=39101100">Gaming Supervisors - NEW!</a></p>',
'<p><a title="Hosts and Hostesses, Restaurant, Lounge, and Coffee Shop" href="/videos/careeronestop-videos.aspx?videocode=35903100">Hosts and Hostesses, Restaurant, Lounge, and Coffee Shop - NEW!</a></p>',
'<p><a title="Hotel, Motel, and Resort Desk Clerks" href="/videos/careeronestop-videos.aspx?videocode=43408100">Hotel, Motel, and Resort Desk Clerks - NEW!</a></p>',
'<p><a title="Housekeeping Supervisors" href="https://cdn.careeronestop.org/CareerVideos/37-1011.01.mp4">Housekeeping Supervisors</a></p>',
'<p><a title="Interpreters and Translators" href="/videos/careeronestop-videos.aspx?videocode=27309100">Interpreters and Translators - NEW!</a></p>',
'<p><a title="Janitors" href="/videos/careeronestop-videos.aspx?videocode=37201100">Janitors - NEW!</a></p>',
'<p><a title="Laundry and Dry-Cleaning Workers" href="/videos/careeronestop-videos.aspx?videocode=51601100">Laundry and Dry-Cleaning Workers - NEW!</a></p>',
'<p><a title="Lodging Managers" href="/videos/careeronestop-videos.aspx?videocode=11908100">Lodging Managers - NEW!</a></p>',
'<p><a title="Maids and Housekeeping Cleaners" href="https://cdn.careeronestop.org/CareerVideos/37-2012.00.mp4">Maids and Housekeeping Cleaners</a></p>',
'<p><a title="Meeting Convention and Event Planners" href="/videos/careeronestop-videos.aspx?videocode=13-1121.00">Meeting Convention and Event Planners - NEW!</a></p>',
'<p><a title="Museum Technicians and Conservators" href="/videos/careeronestop-videos.aspx?videocode=25401300">Museum Technicians and Conservators - NEW!</a></p>',
'<p><a title="Recreation Workers" href="https://cdn.careeronestop.org/CareerVideos/39-9032.00.mp4">Recreation Workers</a></p>',
'<p><a title="Reservation and Transportation Ticket Agents and Travel Clerks" href="/videos/careeronestop-videos.aspx?videocode=43-4181.00">Reservation and Transportation Ticket Agents and Travel Clerks - NEW!</a></p>',
'<p><a title="" href="https://cdn.careeronestop.org/CareerVideos/43-4181.02.mp4"></a></p>',
'<p><a title="Residential Advisors" href="https://cdn.careeronestop.org/CareerVideos/39-9041.00.mp4">Residential Advisors</a></p>',
'<p><a title="Self-Enrichment Education Teachers" href="https://cdn.careeronestop.org/CareerVideos/25-3021.00.mp4">Self-Enrichment Education Teachers</a></p>',
'<p><a title="Set and Exhibit Designers" href="https://cdn.careeronestop.org/CareerVideos/27-1027.00.mp4">Set and Exhibit Designers</a></p>',
'<p><a title="Sign Language Interpreters" href="https://cdn.careeronestop.org/CareerVideos/27-3091.09.mp4">Sign Language Interpreters</a></p>',
'<p><a title="Slot Supervisors" href="/videos/careeronestop-videos.aspx?videocode=39101200">Slot Supervisors - NEW!</a></p>',
'<p><a title="Travel Guides, Tour Guides/Escorts" href="/videos/careeronestop-videos.aspx?videocode=39701100">Travel Guides, Tour Guides/Escorts - NEW!</a></p>',
'<p><a title="Transportation Attendants - Except Flight Attendants and Baggage Porters" href="https://cdn.careeronestop.org/CareerVideos/39-6032.00.mp4">Transportation Attendants - Except Flight Attendants and Baggage Porters</a></p>',
'<p><a title="Travel Agents" href="/videos/careeronestop-videos.aspx?videocode=41304100">Travel Agents - NEW!</a></p>',
'<p><a title="Umpires Referees and other Sports Officials" href="/videos/careeronestop-videos.aspx?videocode=27202300">Umpires, Referees and other Sports Officials - NEW!</a></p>',
'<p><a title="Waiters and Waitresses" href="/videos/careeronestop-videos.aspx?videocode=35303100">Waiters and Waitresses - NEW!</a></p>'
];

const humMain = [
'<p><a title="Human Services (Cluster Video)" href="https://cdn.careeronestop.org/CareerVideos/00-0000.10.mp4">Human Services (Cluster Video)</a></p>',
'<p><a title="Art Therapists" href="/videos/careeronestop-videos.aspx?videocode=29112501">Art Therapists - NEW!</a></p>',
'<p><a title="Barbers" href="/videos/careeronestop-videos.aspx?videocode=39501100">Barbers - NEW!</a></p>',
'<p><a title="Chief Executives" href="/videos/careeronestop-videos.aspx?videocode=11101100">Chief Executives - NEW!</a></p>',
'<p><a title="Child Care Workers" href="/videos/careeronestop-videos.aspx?videocode=39901100">Child Care Workers - NEW!</a></p>',
'<p><a title="Child - Family - School Social Workers" href="/videos/careeronestop-videos.aspx?videocode=21102100">Child - Family - School Social Workers - NEW!</a></p>',
'<p><a title="Clergy" href="https://cdn.careeronestop.org/CareerVideos/21-2011.00.mp4">Clergy</a></p>',
'<p><a title="Clinical, Counseling, and School Psychologists" href="/videos/careeronestop-videos.aspx?videocode=19303100">Clinical, Counseling, and School Psychologists - NEW!</a></p>',
'<p><a title="Community Health Workers" href="/videos/careeronestop-videos.aspx?videocode=21109400">Community Health Workers - NEW!</a></p>',
'<p><a title="Customer Service Representatives" href="/videos/careeronestop-videos.aspx?videocode=43405100">Customer Service Representatives - NEW!</a></p>',
'<p><a title="Directors - Religious Activities and Education" href="https://cdn.careeronestop.org/CareerVideos/21-2021.00.mp4">Directors - Religious Activities and Education</a></p>',
'<p><a title="Eligibility Interviewers - Government Programs" href="https://cdn.careeronestop.org/CareerVideos/43-4061.00.mp4">Eligibility Interviewers - Government Programs</a></p>',
'<p><a title="Embalmers" href="https://cdn.careeronestop.org/CareerVideos/39-4011.00.mp4">Embalmers</a></p>',
'<p><a title="Emergency Management Directors" href="/videos/careeronestop-videos.aspx?videocode=11916100">Emergency Management Directors - NEW!</a></p>',
'<p><a title="Epidemiologists" href="/videos/careeronestop-videos.aspx?videocode=19104100">Epidemiologists - NEW!</a></p>',
'<p><a title="Fashion Designers" href="/videos/careeronestop-videos.aspx?videocode=27102200">Fashion Designers - NEW!</a></p>',
'<p><a title="Fitness Trainers and Aerobics Instructors" href="/videos/careeronestop-videos.aspx?videocode=39903100">Fitness Trainers and Aerobics Instructors - NEW!</a></p>',
'<p><a title="Funeral Directors" href="https://cdn.careeronestop.org/CareerVideos/11-9061.00.mp4">Funeral Directors</a></p>',
'<p><a title="Hairdressers, Hairstylists, and Cosmetologists" href="/videos/careeronestop-videos.aspx?videocode=39501200">Hairdressers, Hairstylists, and Cosmetologists - NEW!</a></p>',
'<p><a title="Health Educators" href="https://cdn.careeronestop.org/CareerVideos/21-1091.00.mp4">Health Educators</a></p>',
'<p><a title="Healthcare Social Workers" href="/videos/careeronestop-videos.aspx?videocode=21102200">Healthcare Social Workers - NEW!</a></p>',
'<p><a title="Interpreters and Translators" href="/videos/careeronestop-videos.aspx?videocode=27309100">Interpreters and Translators - NEW!</a></p>',
'<p><a title="Laundry and Dry-Cleaning Workers" href="/videos/careeronestop-videos.aspx?videocode=51601100">Laundry and Dry-Cleaning Workers - NEW!</a></p>',
'<p><a title="Legislators" href="/videos/careeronestop-videos.aspx?videocode=11103100">Legislators - NEW!</a></p>',
'<p><a title="Loan Counselors" href="https://cdn.careeronestop.org/CareerVideos/13-2071.00.mp4">Loan Counselors</a></p>',
'<p><a title="Locker Room Coatroom and Dressing Room Attendants" href="/videos/careeronestop-videos.aspx?videocode=39309300">Locker Room Coatroom and Dressing Room Attendants - NEW!</a></p>',
'<p><a title="Makeup Artists, Theatrical and Performance" href="https://cdn.careeronestop.org/CareerVideos/39-5091.00.mp4">Makeup Artists, Theatrical and Performance</a></p>',
'<p><a title="Manicurists and Pedicurists" href="/videos/careeronestop-videos.aspx?videocode=39509200">Manicurists and Pedicurists - NEW!</a></p>',
'<p><a title="Marketing Managers" href="/videos/careeronestop-videos.aspx?videocode=11202100">Marketing Managers - NEW!</a></p>',
'<p><a title="Marriage and Family Therapists" href="/videos/careeronestop-videos.aspx?videocode=21101300">Marriage and Family Therapists - NEW!</a></p>',
'<p><a title="Massage Therapists" href="/videos/careeronestop-videos.aspx?videocode=31901100">Massage Therapists - NEW!</a></p>',
'<p><a title="Mathematicians" href="/videos/careeronestop-videos.aspx?videocode=15202100">Mathematicians - NEW!</a></p>',
'<p><a title="Medical and Public Health Social Workers" href="https://cdn.careeronestop.org/CareerVideos/21-1022.00.mp4">Medical and Public Health Social Workers</a></p>',
'<p><a title="Mental Health and Substance Abuse Social Workers" href="/videos/careeronestop-videos.aspx?videocode=21102300">Mental Health and Substance Abuse Social Workers - NEW!</a></p>',
'<p><a title="Mental Health Counselors" href="/videos/careeronestop-videos.aspx?videocode=21101400">Mental Health Counselors - NEW!</a></p>',
'<p><a title="Morticians Undertakers and Funeral Directors" href="/videos/careeronestop-videos.aspx?videocode=39403100">Morticians Undertakers and Funeral Directors - NEW!</a></p>',
'<p><a title="Music Directors and Composers" href="/videos/careeronestop-videos.aspx?videocode=27204100">Music Directors and Composers - NEW!</a></p>',
'<p><a title="Music Therapists" href="/videos/careeronestop-videos.aspx?videocode=29112502">Music Therapists - NEW!</a></p>',
'<p><a title="Natural Sciences Managers" href="/videos/careeronestop-videos.aspx?videocode=11912100">Natural Sciences Managers - NEW!</a></p>',
'<p><a title="Personal Care Aides" href="/videos/careeronestop-videos.aspx?videocode=39902100">Personal Care Aides - NEW!</a></p>',
'<p><a title="Preschool Teachers Except Special Education" href="/videos/careeronestop-videos.aspx?videocode=25201100">Preschool Teachers Except Special Education - NEW!</a></p>',
'<p><a title="Property, Real Estate, and Community Association Managers" href="/videos/careeronestop-videos.aspx?videocode=11914100">Property, Real Estate, and Community Association Managers - NEW!</a></p>',
'<p><a title="Psychologists" href="/videos/careeronestop-videos.aspx?videocode=19303900">Psychologists - NEW!</a></p>',
'<p><a title="Public Relations Specialists" href="/videos/careeronestop-videos.aspx?videocode=27303100">Public Relations Specialists - NEW!</a></p>',
'<p><a title="Recreation Workers" href="https://cdn.careeronestop.org/CareerVideos/39-9032.00.mp4">Recreation Workers</a></p>',
'<p><a title="Rehabilitation Counselors" href="/videos/careeronestop-videos.aspx?videocode=21101500">Rehabilitation Counselors - NEW!</a></p>',
'<p><a title="Residential Advisors" href="https://cdn.careeronestop.org/CareerVideos/39-9041.00.mp4">Residential Advisors</a></p>',
'<p><a title="Sales Managers" href="/videos/careeronestop-videos.aspx?videocode=11202200">Sales Managers - NEW!</a></p>',
'<p><a title="Sewing Machine Operators" href="https://cdn.careeronestop.org/CareerVideos/51-6031.00.mp4">Sewing Machine Operators</a></p>',
'<p><a title="Shampooers" href="https://cdn.careeronestop.org/CareerVideos/39-5093.00.mp4">Shampooers</a></p>',
'<p><a title="Skincare Specialists" href="/videos/careeronestop-videos.aspx?videocode=39509400">Skincare Specialists - NEW!</a></p>',
'<p><a title="Social and Community Service Managers" href="/videos/careeronestop-videos.aspx?videocode=11915100">Social and Community Service Managers - NEW!</a></p>',
'<p><a title="Sociologists" href="/videos/careeronestop-videos.aspx?videocode=19304100">Sociologists - NEW!</a></p>',
'<p><a title="Substance Abuse and Behavioral Disorder Counselors" href="/videos/careeronestop-videos.aspx?videocode=21101100">Substance Abuse and Behavioral Disorder Counselors - NEW!</a></p>',
'<p><a title="Tailors - Dressmakers - Custom Sewers" href="https://cdn.careeronestop.org/CareerVideos/51-6052.00.mp4">Tailors - Dressmakers - Custom Sewers</a></p>',
'<p><a title="Technical Writers" href="https://cdn.careeronestop.org/CareerVideos/27-3042.00.mp4">Technical Writers</a></p>',
'<p><a title="Writers and Authors" href="https://cdn.careeronestop.org/CareerVideos/27-3043.00.mp4">Writers and Authors</a></p>'
];

const itMain = [
'<p><a title="Information Technology (Cluster Video)" href="https://cdn.careeronestop.org/CareerVideos/00-0000.11.mp4">Information Technology (Cluster Video)</a></p>',
'<p><a title="Architectural and Engineering Managers" href="/videos/careeronestop-videos.aspx?videocode=11904100">Architectural and Engineering Managers - NEW!</a></p>',
'<p><a title="Computer and Information Research Scientists" href="/videos/careeronestop-videos.aspx?videocode=15111100">Computer and Information Research Scientists - NEW!</a></p>',
'<p><a title="Computer and Information Systems Managers" href="/videos/careeronestop-videos.aspx?videocode=11302100">Computer and Information Systems Managers - NEW!</a></p>',
'<p><a title="Computer Hardware Engineers" href="/videos/careeronestop-videos.aspx?videocode=17206100">Computer Hardware Engineers - NEW!</a></p>',
'<p><a title="Computer Network Architects" href="/videos/careeronestop-videos.aspx?videocode=15114300">Computer Network Architects - NEW!</a></p>',
'<p><a title="Computer Network Support Specialists" href="/videos/careeronestop-videos.aspx?videocode=15115200">Computer Network Support Specialists - NEW!</a></p>',
'<p><a title="Computer Operators" href="/videos/careeronestop-videos.aspx?videocode=43901100">Computer Operators - NEW!</a></p>',
'<p><a title="Computer Programmers" href="/videos/careeronestop-videos.aspx?videocode=15113100">Computer Programmers - NEW!</a></p>',
'<p><a title="Computer Software Engineers" href="https://cdn.careeronestop.org/CareerVideos/15-1031.00.mp4">Computer Software Engineers</a></p>',
'<p><a title="Computer Support Specialists" href="https://cdn.careeronestop.org/CareerVideos/15-1041.00.mp4">Computer Support Specialists</a></p>',
'<p><a title="Computer Systems Analyst" href="/videos/careeronestop-videos.aspx?videocode=15112100">Computer Systems Analyst - NEW!</a></p>',
'<p><a title="Computer User Support Specialists" href="/videos/careeronestop-videos.aspx?videocode=15115100">Computer User Support Specialists - NEW!</a></p>',
'<p><a title="Information Security Analysts" href="/videos/careeronestop-videos.aspx?videocode=15112200">Information Security Analysts - NEW!</a></p>',
'<p><a title="Computer and Information Systems Managers" href="https://cdn.careeronestop.org/CareerVideos/11-3021.00.mp4">Computer and Information Systems Managers</a></p>',
'<p><a title="Data Entry and Information Processing Workers" href="https://cdn.careeronestop.org/CareerVideos/43-9020.00.mp4">Data Entry and Information Processing Workers</a></p>',
'<p><a title="Database Administrators" href="/videos/careeronestop-videos.aspx?videocode=15114100">Database Administrators - NEW!</a></p>',
'<p><a title="Help Desk Technicians" href="https://cdn.careeronestop.org/CareerVideos/15-1081.08.mp4">Help Desk Technicians</a></p>',
'<p><a title="Multimedia Artists and Animators" href="/videos/careeronestop-videos.aspx?videocode=27101400">Multimedia Artists and Animators - NEW!</a></p>',
'<p><a title="Network and Computer Systems Administrators" href="/videos/careeronestop-videos.aspx?videocode=15114200">Network and Computer Systems Administrators - NEW!</a></p>',
'<p><a title="Numerical Tool and Process Control Programmers" href="https://cdn.careeronestop.org/CareerVideos/51-4012.00.mp4">Numerical Tool and Process Control Programmers</a></p>',
'<p><a title="Software Developers Applications" href="/videos/careeronestop-videos.aspx?videocode=15113200">Software Developers Applications - NEW!</a></p>',
'<p><a title="Video Game Designers" href="/videos/careeronestop-videos.aspx?videocode=15119911">Video Game Designers - NEW!</a></p>',
'<p><a title="Web Developer" href="/videos/careeronestop-videos.aspx?videocode=15113400">Web Developer - NEW!</a></p>',
'<p><a title="Webmasters" href="https://cdn.careeronestop.org/CareerVideos/15-1081.09.mp4">Webmasters</a></p>'
];

const laMain = [
'<p><a title="Law and Public Safety (Cluster Video)" href="https://cdn.careeronestop.org/CareerVideos/00-0000.12.mp4">Law and Public Safety (Cluster Video)</a></p>',
'<p><a title="Administrative Law Judges Adjudicators and Hearing Officers" href="/videos/careeronestop-videos.aspx?videocode=23102100">Administrative Law Judges Adjudicators and Hearing Officers - NEW!</a></p>',
'<p><a title="Airport Screeners" href="https://cdn.careeronestop.org/CareerVideos/33-9032.09.mp4">Airport Screeners</a></p>',
'<p><a title="Animal Control Workers" href="/videos/careeronestop-videos.aspx?videocode=33901100">Animal Control Workers - NEW!</a></p>',
'<p><a title="Arbitrators Mediators and Conciliators" href="/videos/careeronestop-videos.aspx?videocode=23102200">Arbitrators Mediators and Conciliators - NEW!</a></p>',
'<p><a title="Bailiffs" href="/videos/careeronestop-videos.aspx?videocode=33301100">Bailiffs - NEW!</a></p>',
'<p><a title="Chiefs of Police" href="https://cdn.careeronestop.org/CareerVideos/11-1021.09.mp4">Chiefs of Police</a></p>',
'<p><a title="Child - Family - School Social Workers" href="/videos/careeronestop-videos.aspx?videocode=21102100">Child - Family - School Social Workers - NEW!</a></p>',
'<p><a title="Correctional Officers and Jailers" href="/videos/careeronestop-videos.aspx?videocode=33301200">Correctional Officers and Jailers - NEW!</a></p>',
'<p><a title="" href="https://cdn.careeronestop.org/CareerVideos/33-3012.00.mp4"></a></p>',
'<p><a title="Crossing Guards" href="https://cdn.careeronestop.org/CareerVideos/33-9091.00.mp4">Crossing Guards</a></p>',
'<p><a title="Court Reporters" href="https://cdn.careeronestop.org/CareerVideos/23-2091.00.mp4">Court Reporters</a></p>',
'<p><a title="Detectives and Criminal Investigators" href="https://cdn.careeronestop.org/CareerVideos/33-3021.00.mp4">Detectives and Criminal Investigators</a></p>',
'<p><a title="Emergency Management Directors" href="/videos/careeronestop-videos.aspx?videocode=11916100">Emergency Management Directors - NEW!</a></p>',
'<p><a title="Emergency Medical Technicians and Paramedics" href="/videos/careeronestop-videos.aspx?videocode=29204100">Emergency Medical Technicians and Paramedics - NEW!</a></p>',
'<p><a title="Firefighters" href="/videos/careeronestop-videos.aspx?videocode=33201100">Firefighters - NEW!</a></p>',
'<p><a title="Fire Inspectors and Investigators" href="/videos/careeronestop-videos.aspx?videocode=33202100">Fire Inspectors and Investigators - NEW!</a></p>',
'<p><a title="First-Line Supervisors - Managers of Police and Detectives" href="https://cdn.careeronestop.org/CareerVideos/33-1012.00.mp4">First-Line Supervisors - Managers of Police and Detectives</a></p>',
'<p><a title="Forensic Science Technicians" href="/videos/careeronestop-videos.aspx?videocode=19409200">Forensic Science Technicians - NEW!</a></p>',
'<p><a title="Forest Fire Fighters" href="/videos/careeronestop-videos.aspx?videocode=33201102">Forest Fire Fighters - NEW!</a></p>',
'<p><a title="Forest Fire Inspectors and Prevention Specialists" href="/videos/careeronestop-videos.aspx?videocode=33202200">Forest Fire Inspectors and Prevention Specialists - NEW!</a></p>',
'<p><a title="Gaming Surveillance Officers and Gaming Investigators" href="/videos/careeronestop-videos.aspx?videocode=33903100">Gaming Surveillance Officers and Gaming Investigators - NEW!</a></p>',
'<p><a title="Hazardous Materials Removal Workers" href="/videos/careeronestop-videos.aspx?videocode=47404100">Hazardous Materials Removal Workers - NEW!</a></p>',
'<p><a title="Immigration and Customs Inspectors" href="/videos/careeronestop-videos.aspx?videocode=33302105">Immigration and Customs Inspectors - NEW!</a></p>',
'<p><a title="Judges, Magistrate Judges, and Magistrates" href="/videos/careeronestop-videos.aspx?videocode=23102300">Judges, Magistrate Judges, and Magistrates - NEW!</a></p>',
'<p><a title="Lawyers" href="/videos/careeronestop-videos.aspx?videocode=23101100">Lawyers - NEW!</a></p>',
'<p><a title="Legal Secretaries" href="/videos/careeronestop-videos.aspx?videocode=43601200">Legal Secretaries - NEW!</a></p>',
'<p><a title="Lifeguards - Ski Patrol - Other Recreational Protective Service Workers" href="https://cdn.careeronestop.org/CareerVideos/33-9092.00.mp4">Lifeguards - Ski Patrol - Other Recreational Protective Service Workers</a></p>',
'<p><a title="Loss Prevention Managers" href="/videos/careeronestop-videos.aspx?videocode=11919908">Loss Prevention Managers - NEW!</a></p>',
'<p><a title="Paralegals and Legal Assistants" href="/videos/careeronestop-videos.aspx?videocode=23201100">Paralegals and Legal Assistants - NEW!</a></p>',
'<p><a title="Police Patrol Officers" href="/videos/careeronestop-videos.aspx?videocode=33305101">Police Patrol Officers - NEW!</a></p>',
'<p><a title="Police, Fire, and Ambulance Dispatchers" href="/videos/careeronestop-videos.aspx?videocode=43503100">Police, Fire, and Ambulance Dispatchers - NEW!</a></p>',
'<p><a title="Private Detectives and Investigators" href="/videos/careeronestop-videos.aspx?videocode=33902100">Private Detectives and Investigators - NEW!</a></p>',
'<p><a title="Probation Officers and Correctional Treatment Specialists" href="/videos/careeronestop-videos.aspx?videocode=21109200">Probation Officers and Correctional Treatment Specialists - NEW!</a></p>',
'<p><a title="Security Guards" href="/videos/careeronestop-videos.aspx?videocode=33903200">Security Guards - NEW!</a></p>',
'<p><a title="Security Managers" href="/videos/careeronestop-videos.aspx?videocode=11919907">Security Managers - NEW!</a></p>',
'<p><a title="Sheriffs and Deputy Sheriffs" href="https://cdn.careeronestop.org/CareerVideos/33-3051.03.mp4">Sheriffs and Deputy Sheriffs</a></p>',
'<p><a title="Title Examiners - Abstractors - and Searchers" href="https://cdn.careeronestop.org/CareerVideos/23-2093.00.mp4">Title Examiners - Abstractors - and Searchers</a></p>',
'<p><a title="Transportation Security Screeners" href="/videos/careeronestop-videos.aspx?videocode=33909300">Transportation Security Screeners - NEW!</a></p>'
];

const manMain = [
'<p><a title="Manufacturing (Cluster Video)" href="https://cdn.careeronestop.org/CareerVideos/00-0000.13.mp4">Manufacturing (Cluster Video)</a></p>',
'<p><a title="Aircraft Structure, Surfaces, Rigging, and Systems Assemblers" href="/videos/careeronestop-videos.aspx?videocode=51201100">Aircraft Structure, Surfaces, Rigging, and Systems Assemblers - NEW!</a></p>',
'<p><a title="Assemblers and Fabricators" href="https://cdn.careeronestop.org/CareerVideos/51-2099.02.mp4">Assemblers and Fabricators</a></p>',
'<p><a title="Assemblers - Precision" href="https://cdn.careeronestop.org/CareerVideos/51-2099.01.mp4">Assemblers - Precision</a></p>',
'<p><a title="Automatic Teller Machine Servicers" href="https://cdn.careeronestop.org/CareerVideos/49-2011.01.mp4">Automatic Teller Machine Servicers</a></p>',
'<p><a title="Bakers" href="/videos/careeronestop-videos.aspx?videocode=51301100">Bakers - NEW!</a></p>',
'<p><a title="Biological Technicians" href="/videos/careeronestop-videos.aspx?videocode=19402100">Biological Technicians - NEW!</a></p>',
'<p><a title="Boilermakers" href="/videos/careeronestop-videos.aspx?videocode=47201100">Boilermakers - NEW!</a></p>',
'<p><a title="Cabinetmakers and Bench Carpenters" href="/videos/careeronestop-videos.aspx?videocode=51701100">Cabinetmakers and Bench Carpenters - NEW!</a></p>',
'<p><a title="Camera and Photographic Equipment Repairers" href="https://cdn.careeronestop.org/CareerVideos/49-9061.00.mp4">Camera and Photographic Equipment Repairers</a></p>',
'<p><a title="Chemical Equipment Controllers and Operators" href="https://cdn.careeronestop.org/CareerVideos/51-9011.01.mp4">Chemical Equipment Controllers and Operators</a></p>',
'<p><a title="Chemical Plant and System Operators" href="https://cdn.careeronestop.org/CareerVideos/51-8091.00.mp4">Chemical Plant and System Operators</a></p>',
'<p><a title="Chemical Technicians" href="/videos/careeronestop-videos.aspx?videocode=19403100">Chemical Technicians - NEW!</a></p>',
'<p><a title="Chemists" href="/videos/careeronestop-videos.aspx?videocode=19203100">Chemists - NEW!</a></p>',
'<p><a title="Civil Engineering Technicians" href="/videos/careeronestop-videos.aspx?videocode=17302200">Civil Engineering Technicians - NEW!</a></p>',
'<p><a title="Coating, Painting, and Spraying Machine Setters, Operators, and Tenders" href="/videos/careeronestop-videos.aspx?videocode=51912100">Coating, Painting, and Spraying Machine Setters, Operators, and Tenders - NEW!</a></p>',
'<p><a title="Coil Winders, Tapers, and Finishers" href="/videos/careeronestop-videos.aspx?videocode=51202100">Coil Winders, Tapers, and Finishers - NEW!</a></p>',
'<p><a title="Coin - Vending - and Amusement Machine Servicers and Repairers" href="https://cdn.careeronestop.org/CareerVideos/49-9091.00.mp4">Coin - Vending - and Amusement Machine Servicers and Repairers</a></p>',
'<p><a title="Communication Equipment Mechanics - Installers - Repairers" href="https://cdn.careeronestop.org/CareerVideos/49-2022.03.mp4">Communication Equipment Mechanics - Installers - Repairers</a></p>',
'<p><a title="Computer-Controlled Machine Tool Operators, Metal and Plastic" href="/videos/careeronestop-videos.aspx?videocode=51401100">Computer-Controlled Machine Tool Operators, Metal and Plastic - NEW!</a></p>',
'<p><a title="Computer Numerically Controlled Machine Tool Programmers, Metal and Plastic" href="/videos/careeronestop-videos.aspx?videocode=51401200">Computer Numerically Controlled Machine Tool Programmers, Metal and Plastic - NEW!</a></p>',
'<p><a title="Conveyor Operators and Tenders" href="/videos/careeronestop-videos.aspx?videocode=53701100">Conveyor Operators and Tenders - NEW!</a></p>',
'<p><a title="Cutters and Trimmers - Hand" href="https://cdn.careeronestop.org/CareerVideos/51-9031.00.mp4">Cutters and Trimmers - Hand</a></p>',
'<p><a title="Crushing, Grinding, and Polishing Machine Setters, Operators, and Tenders" href="/videos/careeronestop-videos.aspx?videocode=51902100">Crushing, Grinding, and Polishing Machine Setters, Operators, and Tenders - NEW!</a></p>',
'<p><a title="Cutting, Punching and Press Machine Setters, Operators, and Tenders, Metal and Plastic" href="/videos/careeronestop-videos.aspx?videocode=51403100">Cutting, Punching and Press Machine Setters, Operators, and Tenders, Metal and Plastic - NEW!</a></p>',
'<p><a title="Data Processing Equipment Repairers" href="https://cdn.careeronestop.org/CareerVideos/49-2011.02.mp4">Data Processing Equipment Repairers</a></p>',
'<p><a title="Dental Laboratory Technicians" href="/videos/careeronestop-videos.aspx?videocode=51908100">Dental Laboratory Technicians - NEW!</a></p>',
'<p><a title="Drilling and Boring Machine Tool Setters, Operators, and Tenders, Metal and Plastic" href="/videos/careeronestop-videos.aspx?videocode=51403200">Drilling and Boring Machine Tool Setters, Operators, and Tenders, Metal and Plastic - NEW!</a></p>',
'<p><a title="Electric Motor, Power Tool, and Related Repairers" href="/videos/careeronestop-videos.aspx?videocode=49209200">Electric Motor, Power Tool, and Related Repairers - NEW!</a></p>',
'<p><a title="Electrical and Electronic Engineering Technicians" href="/videos/careeronestop-videos.aspx?videocode=17302300">Electrical and Electronic Engineering Technicians - NEW!</a></p>',
'<p><a title="Electrical and Electronic Equipment Assemblers" href="/videos/careeronestop-videos.aspx?videocode=51202200">Electrical and Electronic Equipment Assemblers - NEW!</a></p>',
'<p><a title="Electrical and Electronics Installers and Repairers, Transportation Equipment" href="/videos/careeronestop-videos.aspx?videocode=49209300">Electrical and Electronics Installers and Repairers, Transportation Equipment - NEW!</a></p>',
'<p><a title="Electrical and Electronics Repairers, Commercial and Industrial Equipment" href="/videos/careeronestop-videos.aspx?videocode=49209400">Electrical and Electronics Repairers, Commercial and Industrial Equipment - NEW!</a></p>',
'<p><a title="Electrical and Electronics Repairers, Powerhouse, Substation, and Relay" href="/videos/careeronestop-videos.aspx?videocode=49209500">Electrical and Electronics Repairers, Powerhouse, Substation, and Relay - NEW!</a></p>',
'<p><a title="Electromechanical Equipment Assemblers" href="/videos/careeronestop-videos.aspx?videocode=51202300">Electromechanical Equipment Assemblers - NEW!</a></p>',
'<p><a title="Electronic Equipment Installers and Repairers, Motor Vehicles" href="/videos/careeronestop-videos.aspx?videocode=49209600">Electronic Equipment Installers and Repairers, Motor Vehicles - NEW!</a></p>',
'<p><a title="Electronic Home Entertainment Equipment Installers and Repairers" href="https://cdn.careeronestop.org/CareerVideos/49-2097.00.mp4">Electronic Home Entertainment Equipment Installers and Repairers</a></p>',
'<p><a title="Engine and Other Machine Assemblers" href="/videos/careeronestop-videos.aspx?videocode=51203100">Engine and Other Machine Assemblers - NEW!</a></p>',
'<p><a title="Environmental Engineers" href="/videos/careeronestop-videos.aspx?videocode=17208100">Environmental Engineers - NEW!</a></p>',
'<p><a title="Etchers and Engravers" href="/videos/careeronestop-videos.aspx?videocode=51919400">Etchers and Engravers - NEW!</a></p>',
'<p><a title="Extruding and Drawing Machine Setters, Operators, and Tenders, Metal and Plastic" href="/videos/careeronestop-videos.aspx?videocode=51402100">Extruding and Drawing Machine Setters, Operators, and Tenders, Metal and Plastic - NEW!</a></p>',
'<p><a title="Extruding, Forming, Pressing, and Compacting Machine Setters, Operators and Tenders" href="/videos/careeronestop-videos.aspx?videocode=51904100">Extruding, Forming, Pressing, and Compacting Machine Setters, Operators and Tenders - NEW!</a></p>',
'<p><a title="Fabric and Apparel Patternmakers" href="https://cdn.careeronestop.org/CareerVideos/51-6092.00.mp4">Fabric and Apparel Patternmakers</a></p>',
'<p><a title="Fashion Designers" href="/videos/careeronestop-videos.aspx?videocode=27102200">Fashion Designers - NEW!</a></p>',
'<p><a title="Fiberglass Laminators and Fabricators" href="/videos/careeronestop-videos.aspx?videocode=51209100">Fiberglass Laminators and Fabricators - NEW!</a></p>',
'<p><a title="Film Laboratory Technicians" href="https://cdn.careeronestop.org/CareerVideos/51-9131.04.mp4">Film Laboratory Technicians</a></p>',
'<p><a title="Food Batchmakers" href="/videos/careeronestop-videos.aspx?videocode=51309200">Food Batchmakers - NEW!</a></p>',
'<p><a title="Food Cooking Machine Operators and Tenders" href="/videos/careeronestop-videos.aspx?videocode=51309300">Food Cooking Machine Operators and Tenders - NEW!</a></p>',
'<p><a title="Food and Tobacco Roasting, Baking, and Drying Machine Operators and Tenders" href="/videos/careeronestop-videos.aspx?videocode=51309100">Food and Tobacco Roasting, Baking, and Drying Machine Operators and Tenders - NEW!</a></p>',
'<p><a title="Forging Machine Setters, Operators, and Tenders, Metal and Plastic" href="/videos/careeronestop-videos.aspx?videocode=51402200">Forging Machine Setters, Operators, and Tenders, Metal and Plastic - NEW!</a></p>',
'<p><a title="Foundry Mold and Coremakers" href="/videos/careeronestop-videos.aspx?videocode=51407100">Foundry Mold and Coremakers - NEW!</a></p>',
'<p><a title="Furniture Finishers" href="/videos/careeronestop-videos.aspx?videocode=51702100">Furniture Finishers - NEW!</a></p>',
'<p><a title="Gem and Diamond Workers" href="/videos/careeronestop-videos.aspx?videocode=51907106">Gem and Diamond Workers - NEW!</a></p>',
'<p><a title="Glass Blowers - Molders - Benders - Finishers" href="https://cdn.careeronestop.org/CareerVideos/51-9195.04.mp4">Glass Blowers - Molders - Benders - Finishers</a></p>',
'<p><a title="Grinding and Polishing Workers - Hand" href="https://cdn.careeronestop.org/CareerVideos/51-9022.00.mp4">Grinding and Polishing Workers - Hand</a></p>',
'<p><a title="Hazardous Materials Removal Workers" href="/videos/careeronestop-videos.aspx?videocode=47404100">Hazardous Materials Removal Workers - NEW!</a></p>',
'<p><a title="Heat Treating Equipment Setters, Operators, and Tenders, Metal and Plastic" href="/videos/careeronestop-videos.aspx?videocode=51419100">Heat Treating Equipment Setters, Operators, and Tenders, Metal and Plastic - NEW!</a></p>',
'<p><a title="Helpers--Production Workers" href="https://cdn.careeronestop.org/CareerVideos/51-9198.00.mp4">Helpers--Production Workers</a></p>',
'<p><a title="Home Appliance Repairers" href="https://cdn.careeronestop.org/CareerVideos/49-9031.00.mp4">Home Appliance Repairers</a></p>',
'<p><a title="Industrial Engineering Technicians" href="/videos/careeronestop-videos.aspx?videocode=17302600">Industrial Engineering Technicians - NEW!</a></p>',
'<p><a title="Industrial Machinery Mechanics" href="/videos/careeronestop-videos.aspx?videocode=49904100">Industrial Machinery Mechanics - NEW!</a></p>',
'<p><a title="Industrial Production Managers" href="/videos/careeronestop-videos.aspx?videocode=11305100">Industrial Production Managers - NEW!</a></p>',
'<p><a title="Inspectors, Testers, Sorters, Samplers, and Weighers" href="/videos/careeronestop-videos.aspx?videocode=51906100">Inspectors, Testers, Sorters, Samplers, and Weighers - NEW!</a></p>',
'<p><a title="Interior Designers" href="/videos/careeronestop-videos.aspx?videocode=27102500">Interior Designers - NEW!</a></p>',
'<p><a title="Jewelers" href="/videos/careeronestop-videos.aspx?videocode=51907101">Jewelers - NEW!</a></p>',
'<p><a title="Jewelers and Precious Stone and Metal Workers" href="/videos/careeronestop-videos.aspx?videocode=51907100">Jewelers and Precious Stone and Metal Workers - NEW!</a></p>',
'<p><a title="Lathe and Turning Machine Tool Setters, Operators, and Tenders, Metal and Plastic" href="/videos/careeronestop-videos.aspx?videocode=51403400">Lathe and Turning Machine Tool Setters, Operators, and Tenders, Metal and Plastic - NEW!</a></p>',
'<p><a title="Locksmiths and Safe Repairers" href="/videos/careeronestop-videos.aspx?videocode=49909400">Locksmiths and Safe Repairers - NEW!</a></p>',
'<p><a title="Machine Feeders and Offbearers" href="/videos/careeronestop-videos.aspx?videocode=53706300">Machine Feeders and Offbearers - NEW!</a></p>',
'<p><a title="Machine Setters and Tenders" href="https://cdn.careeronestop.org/CareerVideos/51-4000.00.mp4">Machine Setters and Tenders</a></p>',
'<p><a title="Machinists" href="/videos/careeronestop-videos.aspx?videocode=51404100">Machinists - NEW!</a></p>',
'<p><a title="Maintenance and Repair Workers, General" href="/videos/careeronestop-videos.aspx?videocode=49907100">Maintenance and Repair Workers, General - NEW!</a></p>',
'<p><a title="Maintenance Workers - Machinery" href="/videos/careeronestop-videos.aspx?videocode=49904300">Maintenance Workers - Machinery - NEW!</a></p>',
'<p><a title="Mechanical Engineering Technicians" href="/videos/careeronestop-videos.aspx?videocode=17302700">Mechanical Engineering Technicians - NEW!</a></p>',
'<p><a title="Medical Appliance Technicians" href="/videos/careeronestop-videos.aspx?videocode=51908200">Medical Appliance Technicians - NEW!</a></p>',
'<p><a title="Medical Equipment Repairers" href="/videos/careeronestop-videos.aspx?videocode=49906200">Medical Equipment Repairers - NEW!</a></p>',
'<p><a title="Metal-Refining Furnace Operators and Tenders" href="/videos/careeronestop-videos.aspx?videocode=51405100">Metal-Refining Furnace Operators and Tenders - NEW!</a></p>',
'<p><a title="Milling and Planning Machine Setters, Operators, and Tenders, Metal and Plastic" href="/videos/careeronestop-videos.aspx?videocode=51403500">Milling and Planning Machine Setters, Operators, and Tenders, Metal and Plastic - NEW!</a></p>',
'<p><a title="Millwrights" href="/videos/careeronestop-videos.aspx?videocode=49904400">Millwrights - NEW!</a></p>',
'<p><a title="Mobile Heavy Equipment Mechanics, Except Engines" href="/videos/careeronestop-videos.aspx?videocode=49304200">Mobile Heavy Equipment Mechanics, Except Engines - NEW!</a></p>',
'<p><a title="Model Makers, Metal and Plastic" href="/videos/careeronestop-videos.aspx?videocode=51406100">Model Makers, Metal and Plastic - NEW!</a></p>',
'<p><a title="Molding, Coremaking, and Casting Machine Setters, Operators, and Tenders, Metal and Plastic" href="/videos/careeronestop-videos.aspx?videocode=51407200">Molding, Coremaking, and Casting Machine Setters, Operators, and Tenders, Metal and Plastic - NEW!</a></p>',
'<p><a title="Multiple Machine Tool Setters, Operators, and Tenders, Metal and Plastic" href="/videos/careeronestop-videos.aspx?videocode=51408100">Multiple Machine Tool Setters, Operators, and Tenders, Metal and Plastic - NEW!</a></p>',
'<p><a title="Musical Instrument Repairers and Tuners" href="https://cdn.careeronestop.org/CareerVideos/49-9063.00.mp4">Musical Instrument Repairers and Tuners</a></p>',
'<p><a title="Nuclear Power Reactor Operators" href="/videos/careeronestop-videos.aspx?videocode=51801100">Nuclear Power Reactor Operators - NEW!</a></p>',
'<p><a title="Nuclear Technicians" href="https://cdn.careeronestop.org/CareerVideos/19-4051.00.mp4">Nuclear Technicians</a></p>',
'<p><a title="Numerical Tool and Process Control Programmers" href="https://cdn.careeronestop.org/CareerVideos/51-4012.00.mp4">Numerical Tool and Process Control Programmers</a></p>',
'<p><a title="Office Machine and Cash Register Servicers" href="https://cdn.careeronestop.org/CareerVideos/49-2011.03.mp4">Office Machine and Cash Register Servicers</a></p>',
'<p><a title="Ophthalmic Laboratory Technicians" href="/videos/careeronestop-videos.aspx?videocode=51908300">Ophthalmic Laboratory Technicians - NEW!</a></p>',
'<p><a title="Packaging and Filling Machine Operators and Tenders" href="https://cdn.careeronestop.org/CareerVideos/51-9111.00.mp4">Packaging and Filling Machine Operators and Tenders</a></p>',
'<p><a title="Packers and Packagers, Hand" href="/videos/careeronestop-videos.aspx?videocode=53706400">Packers and Packagers, Hand - NEW!</a></p>',
'<p><a title="Painters, Transportation Equipment" href="/videos/careeronestop-videos.aspx?videocode=51912200">Painters, Transportation Equipment - NEW!</a></p>',
'<p><a title="Painting, Coating, and Decorating Workers" href="/videos/careeronestop-videos.aspx?videocode=51912300">Painting, Coating, and Decorating Workers - NEW!</a></p>',
'<p><a title="Patternmakers, Metal and Plastic" href="/videos/careeronestop-videos.aspx?videocode=51406200">Patternmakers, Metal and Plastic - NEW!</a></p>',
'<p><a title="Photographic Processing Machine Operators" href="https://cdn.careeronestop.org/CareerVideos/51-9132.00.mp4">Photographic Processing Machine Operators</a></p>',
'<p><a title="Plating and Coating Machine Setters, Operators, and Tenders, Metal and Plastic" href="/videos/careeronestop-videos.aspx?videocode=51419300">Plating and Coating Machine Setters, Operators, and Tenders, Metal and Plastic - NEW!</a></p>',
'<p><a title="Pourers and Casters, Metal" href="/videos/careeronestop-videos.aspx?videocode=51405200">Pourers and Casters, Metal - NEW!</a></p>',
'<p><a title="Power Distributors and Dispatchers" href="/videos/careeronestop-videos.aspx?videocode=51801200">Power Distributors and Dispatchers - NEW!</a></p>',
'<p><a title="Power Plant Operators" href="/videos/careeronestop-videos.aspx?videocode=51801300">Power Plant Operators - NEW!</a></p>',
'<p><a title="Precious Metal Workers" href="/videos/careeronestop-videos.aspx?videocode=51907107">Precious Metal Workers - NEW!</a></p>',
'<p><a title="Precision Devices Inspectors and Testers" href="https://cdn.careeronestop.org/CareerVideos/51-9061.03.mp4">Precision Devices Inspectors and Testers</a></p>',
'<p><a title="Production, Planning, and Expediting Clerks" href="/videos/careeronestop-videos.aspx?videocode=43506100">Production, Planning, and Expediting Clerks - NEW!</a></p>',
'<p><a title="Quality Control Systems Managers" href="/videos/careeronestop-videos.aspx?videocode=11305101">Quality Control Systems Managers - NEW!</a></p>',
'<p><a title="Rail Car Repairers" href="/videos/careeronestop-videos.aspx?videocode=49304300">Rail Car Repairers - NEW!</a></p>',
'<p><a title="Rolling Machine Setters, Operators, and Tenders, Metal and Plastic" href="/videos/careeronestop-videos.aspx?videocode=51402300">Rolling Machine Setters, Operators, and Tenders, Metal and Plastic - NEW!</a></p>',
'<p><a title="Robotics Technicians" href="https://cdn.careeronestop.org/CareerVideos/17-3023.09.mp4">Robotics Technicians</a></p>',
'<p><a title="Security and Fire Alarm Systems Installers" href="https://cdn.careeronestop.org/CareerVideos/49-2098.00.mp4">Security and Fire Alarm Systems Installers</a></p>',
'<p><a title="Sewing Machine Operators" href="https://cdn.careeronestop.org/CareerVideos/51-6031.00.mp4">Sewing Machine Operators</a></p>',
'<p><a title="Sheet Metal Workers" href="/videos/careeronestop-videos.aspx?videocode=47221100">Sheet Metal Workers - NEW!</a></p>',
'<p><a title="Stone Cutters and Carvers" href="https://cdn.careeronestop.org/CareerVideos/51-9195.03.mp4">Stone Cutters and Carvers</a></p>',
'<p><a title="Structural Metal Fabricators and Fitters" href="/videos/careeronestop-videos.aspx?videocode=51204100">Structural Metal Fabricators and Fitters - NEW!</a></p>',
'<p><a title="Team Assemblers" href="/videos/careeronestop-videos.aspx?videocode=51209200">Team Assemblers - NEW!</a></p>',
'<p><a title="Telecommunications Equipment Installers and Repairers, Except Line Installers" href="/videos/careeronestop-videos.aspx?videocode=49202200">Telecommunications Equipment Installers and Repairers, Except Line Installers - NEW!</a></p>',
'<p><a title="Telecommunications Line Installers and Repairers" href="/videos/careeronestop-videos.aspx?videocode=49905200">Telecommunications Line Installers and Repairers - NEW!</a></p>',
'<p><a title="Timing Device Assemblers and Adjusters" href="/videos/careeronestop-videos.aspx?videocode=51209300">Timing Device Assemblers and Adjusters - NEW!</a></p>',
'<p><a title="Tool and Die Makers" href="/videos/careeronestop-videos.aspx?videocode=51411100">Tool and Die Makers - NEW!</a></p>',
'<p><a title="Upholsterers" href="https://cdn.careeronestop.org/CareerVideos/51-6093.00.mp4">Upholsterers</a></p>',
'<p><a title="Watch Repairers" href="/videos/careeronestop-videos.aspx?videocode=49906400">Watch Repairers - NEW!</a></p>',
'<p><a title="Welders, cutters, solderers, and brazers" href="/videos/careeronestop-videos.aspx?videocode=51412100">Welders, cutters, solderers, and brazers - NEW!</a></p>',
'<p><a title="Woodworking Machine Setters, Operators, and Tenders, Except Sawing" href="/videos/careeronestop-videos.aspx?videocode=51704200">Woodworking Machine Setters, Operators, and Tenders, Except Sawing - NEW!</a></p>',
'<p><a title="Wood Sawing Machine Setters, Operators, and Tenders" href="/videos/careeronestop-videos.aspx?videocode=51704100">Wood Sawing Machine Setters, Operators, and Tenders - NEW!</a></p>'
];

const marMain = [
'<p><a title="Retail/Wholesale Sales and Service (Cluster Video)" href="https://cdn.careeronestop.org/CareerVideos/00-0000.14.mp4">Retail/Wholesale Sales and Service (Cluster Video)</a></p>',
'<p><a title="Adjustment Clerks" href="https://cdn.careeronestop.org/CareerVideos/43-4051.01.mp4">Adjustment Clerks</a></p>',
'<p><a title="Advertising and Promotions Managers" href="/videos/careeronestop-videos.aspx?videocode=11201100">Advertising and Promotions Managers - NEW!</a></p>',
'<p><a title="Appraisers - Real Estate" href="/videos/careeronestop-videos.aspx?videocode=13202102">Appraisers - Real Estate - NEW!</a></p>',
'<p><a title="Art Directors" href="/videos/careeronestop-videos.aspx?videocode=27101100">Art Directors - NEW!</a></p>',
'<p><a title="Cashiers" href="/videos/careeronestop-videos.aspx?videocode=41201100">Cashiers - NEW!</a></p>',
'<p><a title="Counter and Rental Clerks" href="https://cdn.careeronestop.org/CareerVideos/41-2021.00.mp4">Counter and Rental Clerks</a></p>',
'<p><a title="Customer Service Representatives" href="/videos/careeronestop-videos.aspx?videocode=43405100">Customer Service Representatives - NEW!</a></p>',
'<p><a title="Demonstrators and Product Promoters" href="https://cdn.careeronestop.org/CareerVideos/41-9011.00.mp4">Demonstrators and Product Promoters</a></p>',
'<p><a title="Driver/Sales Workers" href="/videos/careeronestop-videos.aspx?videocode=53303100">Driver/Sales Workers - NEW!</a></p>',
'<p><a title="Fashion Designers" href="/videos/careeronestop-videos.aspx?videocode=27102200">Fashion Designers - NEW!</a></p>',
'<p><a title="Floral Designers" href="https://cdn.careeronestop.org/CareerVideos/27-1023.00.mp4">Floral Designers</a></p>',
'<p><a title="Gaming Change Persons and Booth Cashiers" href="https://cdn.careeronestop.org/CareerVideos/41-2012.00.mp4">Gaming Change Persons and Booth Cashiers</a></p>',
'<p><a title="Gem and Diamond Workers" href="/videos/careeronestop-videos.aspx?videocode=51907106">Gem and Diamond Workers - NEW!</a></p>',
'<p><a title="Graphic Designers" href="/videos/careeronestop-videos.aspx?videocode=27102400">Graphic Designers - NEW!</a></p>',
'<p><a title="Green Marketers" href="/videos/careeronestop-videos.aspx?videocode=11201101">Green Marketers - NEW!</a></p>',
'<p><a title="Hotel, Motel, and Resort Desk Clerks" href="/videos/careeronestop-videos.aspx?videocode=43408100">Hotel, Motel, and Resort Desk Clerks - NEW!</a></p>',
'<p><a title="Interior Designers" href="/videos/careeronestop-videos.aspx?videocode=27102500">Interior Designers - NEW!</a></p>',
'<p><a title="Jewelers" href="/videos/careeronestop-videos.aspx?videocode=51907101">Jewelers - NEW!</a></p>',
'<p><a title="Lodging Managers" href="/videos/careeronestop-videos.aspx?videocode=11908100">Lodging Managers - NEW!</a></p>',
'<p><a title="Marketing Managers" href="/videos/careeronestop-videos.aspx?videocode=11202100">Marketing Managers - NEW!</a></p>',
'<p><a title="Market Research Analysts and Marketing Specialists" href="/videos/careeronestop-videos.aspx?videocode=13116100">Market Research Analysts and Marketing Specialists - NEW!</a></p>',
'<p><a title="Merchandise Displayers and Window Trimmers" href="https://cdn.careeronestop.org/CareerVideos/27-1026.00.mp4">Merchandise Displayers and Window Trimmers</a></p>',
'<p><a title="Meeting and Convention Planners" href="https://cdn.careeronestop.org/CareerVideos/13-1121.00.mp4">Meeting and Convention Planners</a></p>',
'<p><a title="Models" href="/videos/careeronestop-videos.aspx?videocode=41901200">Models - NEW!</a></p>',
'<p><a title="Office Clerks, General" href="/videos/careeronestop-videos.aspx?videocode=43906100">Office Clerks, General - NEW!</a></p>',
'<p><a title="Online Merchants" href="/videos/careeronestop-videos.aspx?videocode=13119906">Online Merchants - NEW!</a></p>',
'<p><a title="Order Clerks" href="/videos/careeronestop-videos.aspx?videocode=43415100">Order Clerks - NEW!</a></p>',
'<p><a title="Order Fillers - Wholesale and Retail Sales" href="https://cdn.careeronestop.org/CareerVideos/43-5081.04.mp4">Order Fillers - Wholesale and Retail Sales</a></p>',
'<p><a title="Parking Lot Attendants" href="/videos/careeronestop-videos.aspx?videocode=53602100">Parking Lot Attendants - NEW!</a></p>',
'<p><a title="Parts Salesperson" href="/videos/careeronestop-videos.aspx?videocode=41202200">Parts Salesperson - NEW!</a></p>',
'<p><a title="Property, Real Estate, and Community Association Managers" href="/videos/careeronestop-videos.aspx?videocode=11914100">Property, Real Estate, and Community Association Managers - NEW!</a></p>',
'<p><a title="Real Estate Sales Agents" href="/videos/careeronestop-videos.aspx?videocode=41902200">Real Estate Sales Agents - NEW!</a></p>',
'<p><a title="Real Estate Brokers" href="/videos/careeronestop-videos.aspx?videocode=41902100">Real Estate Brokers - NEW!</a></p>',
'<p><a title="Retail Salesperson" href="/videos/careeronestop-videos.aspx?videocode=41203100">Retail Salesperson - NEW!</a></p>',
'<p><a title="Sales Engineers" href="/videos/careeronestop-videos.aspx?videocode=41903100">Sales Engineers - NEW!</a></p>',
'<p><a title="Sales Managers" href="/videos/careeronestop-videos.aspx?videocode=11202200">Sales Managers - NEW!</a></p>',
'<p><a title="Sales Representatives, Wholesale and Manufacturing, Technical and Scientific Products" href="/videos/careeronestop-videos.aspx?videocode=41401100">Sales Representatives, Wholesale and Manufacturing, Technical and Scientific Products - NEW!</a></p>',
'<p><a title=" Sales Representatives, Wholesale and Manufacturing, Except Technical and Scientific" href="/videos/careeronestop-videos.aspx?videocode=41401200"> Sales Representatives, Wholesale and Manufacturing, Except Technical and Scientific - NEW!</a></p>',
'<p><a title="Service Station Attendants" href="https://cdn.careeronestop.org/CareerVideos/53-6031.00.mp4">Service Station Attendants</a></p>',
'<p><a title="Stock Clerks and Order Fillers" href="/videos/careeronestop-videos.aspx?videocode=43508100">Stock Clerks and Order Fillers - NEW!</a></p>',
'<p><a title="Stock Clerk - Sales Floor" href="/videos/careeronestop-videos.aspx?videocode=43508101">Stock Clerk - Sales Floor - NEW!</a></p>',
'<p><a title="Telemarketers" href="https://cdn.careeronestop.org/CareerVideos/41-9041.00.mp4">Telemarketers</a></p>',
'<p><a title="Travel Agents" href="/videos/careeronestop-videos.aspx?videocode=41304100">Travel Agents - NEW!</a></p>',
'<p><a title="Weighers, Measurers, Checkers, and Samplers, Recordkeeping" href="/videos/careeronestop-videos.aspx?videocode=43511100">Weighers, Measurers, Checkers, and Samplers, Recordkeeping - NEW!</a></p>',
'<p><a title="Wholesale and Retail Buyers - Except Farm Products" href="/videos/careeronestop-videos.aspx?videocode=13102200">Wholesale and Retail Buyers - Except Farm Products - NEW!</a></p>'
];

const steMain = [
'<p><a title="Scientific Research/Engineering (Cluster Video)" href="https://cdn.careeronestop.org/CareerVideos/00-0000.15.mp4">Scientific Research/Engineering (Cluster Video)</a></p>',
'<p><a title="Aerospace Engineers" href="/videos/careeronestop-videos.aspx?videocode=17201100">Aerospace Engineers - NEW!</a></p>',
'<p><a title="Agricultural Engineers" href="/videos/careeronestop-videos.aspx?videocode=17202100">Agricultural Engineers - NEW!</a></p>',
'<p><a title="Agricultural and Food Science Technicians" href="/videos/careeronestop-videos.aspx?videocode=19401100">Agricultural and Food Science Technicians - NEW!</a></p>',
'<p><a title="Animal Scientists" href="/videos/careeronestop-videos.aspx?videocode=19101100">Animal Scientists - NEW!</a></p>',
'<p><a title="Anthropologists" href="/videos/careeronestop-videos.aspx?videocode=19309101">Anthropologists - NEW!</a></p>',
'<p><a title="Archaeologists" href="/videos/careeronestop-videos.aspx?videocode=19309102">Archaeologists - NEW!</a></p>',
'<p><a title="Architectural Drafters" href="/videos/careeronestop-videos.aspx?videocode=17301101">Architectural Drafters - NEW!</a></p>',
'<p><a title="Architectural and Engineering Managers" href="/videos/careeronestop-videos.aspx?videocode=11904100">Architectural and Engineering Managers - NEW!</a></p>',
'<p><a title="Archivists" href="/videos/careeronestop-videos.aspx?videocode=25401100">Archivists - NEW!</a></p>',
'<p><a title="Astronomers" href="/videos/careeronestop-videos.aspx?videocode=19201100">Astronomers - NEW!</a></p>',
'<p><a title="Atmospheric and Space Scientists" href="/videos/careeronestop-videos.aspx?videocode=19202100">Atmospheric and Space Scientists - NEW!</a></p>',
'<p><a title="Biochemists and Biophysicists" href="/videos/careeronestop-videos.aspx?videocode=19102100">Biochemists and Biophysicists - NEW!</a></p>',
'<p><a title="Biofuels / Biodiesel Technology and Product Development Managers" href="/videos/careeronestop-videos.aspx?videocode=11904101">Biofuels / Biodiesel Technology and Product Development Managers - NEW!</a></p>',
'<p><a title="Biological Technicians" href="/videos/careeronestop-videos.aspx?videocode=19402100">Biological Technicians - NEW!</a></p>',
'<p><a title="Biomedical Engineers" href="/videos/careeronestop-videos.aspx?videocode=17203100">Biomedical Engineers - NEW!</a></p>',
'<p><a title="Cartographers and Photogrammetrists" href="/videos/careeronestop-videos.aspx?videocode=17102100">Cartographers and Photogrammetrists - NEW!</a></p>',
'<p><a title="Chemical Engineers" href="/videos/careeronestop-videos.aspx?videocode=17204100">Chemical Engineers - NEW!</a></p>',
'<p><a title="Chemical Technicians" href="/videos/careeronestop-videos.aspx?videocode=19403100">Chemical Technicians - NEW!</a></p>',
'<p><a title="Chemists" href="/videos/careeronestop-videos.aspx?videocode=19203100">Chemists - NEW!</a></p>',
'<p><a title="Civil Drafters" href="/videos/careeronestop-videos.aspx?videocode=17301102">Civil Drafters - NEW!</a></p>',
'<p><a title="Civil Engineers" href="/videos/careeronestop-videos.aspx?videocode=17205100">Civil Engineers - NEW!</a></p>',
'<p><a title="Civil Engineering Technicians" href="/videos/careeronestop-videos.aspx?videocode=17302200">Civil Engineering Technicians - NEW!</a></p>',
'<p><a title="Climate Change Analysts" href="/videos/careeronestop-videos.aspx?videocode=19204101">Climate Change Analysts - NEW!</a></p>',
'<p><a title="Computer Hardware Engineers" href="/videos/careeronestop-videos.aspx?videocode=17206100">Computer Hardware Engineers - NEW!</a></p>',
'<p><a title="Computer and Information Research Scientists" href="/videos/careeronestop-videos.aspx?videocode=15111100">Computer and Information Research Scientists - NEW!</a></p>',
'<p><a title="Conservation Scientists" href="/videos/careeronestop-videos.aspx?videocode=19103100">Conservation Scientists - NEW!</a></p>',
'<p><a title="Cost Estimators" href="/videos/careeronestop-videos.aspx?videocode=13105100">Cost Estimators - NEW!</a></p>',
'<p><a title="Dietetic Technicians" href="/videos/careeronestop-videos.aspx?videocode=29205100">Dietetic Technicians - NEW!</a></p>',
'<p><a title="Dietitians and Nutritionists" href="/videos/careeronestop-videos.aspx?videocode=29103100">Dietitians and Nutritionists - NEW!</a></p>',
'<p><a title="Drafters" href="https://cdn.careeronestop.org/CareerVideos/17-3010.00.mp4">Drafters</a></p>',
'<p><a title="Economists" href="/videos/careeronestop-videos.aspx?videocode=19301100">Economists - NEW!</a></p>',
'<p><a title="Electrical and Electronic Engineering Technicians" href="/videos/careeronestop-videos.aspx?videocode=17302300">Electrical and Electronic Engineering Technicians - NEW!</a></p>',
'<p><a title="Electrical Engineers" href="/videos/careeronestop-videos.aspx?videocode=17207100">Electrical Engineers - NEW!</a></p>',
'<p><a title="Electro-mechanical Technicians" href="/videos/careeronestop-videos.aspx?videocode=17302400">Electro-mechanical Technicians - NEW!</a></p>',
'<p><a title="Electronics Engineers, Except Computer" href="/videos/careeronestop-videos.aspx?videocode=17207200">Electronics Engineers, Except Computer - NEW!</a></p>',
'<p><a title="Electrical and Electronic Engineering Technicians" href="https://cdn.careeronestop.org/CareerVideos/17-3023.00.mp4">Electrical and Electronic Engineering Technicians</a></p>',
'<p><a title="Electrical Drafters" href="/videos/careeronestop-videos.aspx?videocode=17301202">Electrical Drafters - NEW!</a></p>',
'<p><a title="Electronic Drafters" href="/videos/careeronestop-videos.aspx?videocode=17301201">Electronic Drafters - NEW!</a></p>',
'<p><a title="Environmental Engineers" href="/videos/careeronestop-videos.aspx?videocode=17208100">Environmental Engineers - NEW!</a></p>',
'<p><a title="Environmental Scientists and Specialists - Including Health" href="https://cdn.careeronestop.org/CareerVideos/19-2041.00.mp4">Environmental Scientists and Specialists - Including Health</a></p>',
'<p><a title="Epidemiologists" href="/videos/careeronestop-videos.aspx?videocode=19104100">Epidemiologists - NEW!</a></p>',
'<p><a title="Family and General Practitioners" href="/videos/careeronestop-videos.aspx?videocode=29106200">Family and General Practitioners - NEW!</a></p>',
'<p><a title="Fire Prevention and Protection Engineers" href="/videos/careeronestop-videos.aspx?videocode=17211102">Fire Prevention and Protection Engineers - NEW!</a></p>',
'<p><a title="Food Scientists and Technologists" href="/videos/careeronestop-videos.aspx?videocode=19101200">Food Scientists and Technologists - NEW!</a></p>',
'<p><a title="Geographers" href="/videos/careeronestop-videos.aspx?videocode=19309200">Geographers - NEW!</a></p>',
'<p><a title="Geographic Information Specialists" href="https://cdn.careeronestop.org/CareerVideos/17-3031.09.mp4">Geographic Information Specialists</a></p>',
'<p><a title="Geological and Petroleum Technicians" href="/videos/careeronestop-videos.aspx?videocode=19404100">Geological and Petroleum Technicians - NEW!</a></p>',
'<p><a title="Geological Sample Test Technicians" href="/videos/careeronestop-videos.aspx?videocode=19404102">Geological Sample Test Technicians - NEW!</a></p>',
'<p><a title="Geologists" href="https://cdn.careeronestop.org/CareerVideos/19-2042.01.mp4">Geologists</a></p>',
'<p><a title="Geophysical Data Technicians" href="/videos/careeronestop-videos.aspx?videocode=19404101">Geophysical Data Technicians - NEW!</a></p>',
'<p><a title="Geoscientists, Except Hydrologists and Geographers" href="/videos/careeronestop-videos.aspx?videocode=19204200">Geoscientists, Except Hydrologists and Geographers - NEW!</a></p>',
'<p><a title="Health and Safety Engineers, Except Mining Safety Engineers and Inspectors" href="/videos/careeronestop-videos.aspx?videocode=17211100">Health and Safety Engineers, Except Mining Safety Engineers and Inspectors - NEW!</a></p>',
'<p><a title="Hydrologists" href="/videos/careeronestop-videos.aspx?videocode=19204300">Hydrologists - NEW!</a></p>',
'<p><a title="Industrial Ecologists" href="/videos/careeronestop-videos.aspx?videocode=19204103">Industrial Ecologists - NEW!</a></p>',
'<p><a title="Industrial Engineers" href="/videos/careeronestop-videos.aspx?videocode=17211200">Industrial Engineers - NEW!</a></p>',
'<p><a title="Industrial Safety and Health Engineers" href="/videos/careeronestop-videos.aspx?videocode=17211101">Industrial Safety and Health Engineers - NEW!</a></p>',
'<p><a title="Marine Engineers and Naval Architects" href="/videos/careeronestop-videos.aspx?videocode=17212100">Marine Engineers and Naval Architects - NEW!</a></p>',
'<p><a title="" href="https://cdn.careeronestop.org/CareerVideos/17-2121.00.mp4"></a></p>',
'<p><a title="Market Research Analysts and Marketing Specialists" href="/videos/careeronestop-videos.aspx?videocode=13116100">Market Research Analysts and Marketing Specialists - NEW!</a></p>',
'<p><a title="Materials Engineers" href="/videos/careeronestop-videos.aspx?videocode=17213100">Materials Engineers - NEW!</a></p>',
'<p><a title="Materials Scientists" href="/videos/careeronestop-videos.aspx?videocode=19203200">Materials Scientists - NEW!</a></p>',
'<p><a title="Mathematicians" href="/videos/careeronestop-videos.aspx?videocode=15202100">Mathematicians - NEW!</a></p>',
'<p><a title="Mechanical Engineers" href="https://cdn.careeronestop.org/CareerVideos/17-2141.00.mp4">Mechanical Engineers</a></p>',
'<p><a title="Medical Scientists, Except Epidemiologists" href="/videos/careeronestop-videos.aspx?videocode=19104200">Medical Scientists, Except Epidemiologists - NEW!</a></p>',
'<p><a title="Microbiologists" href="https://cdn.careeronestop.org/CareerVideos/19-1022.00.mp4">Microbiologists</a></p>',
'<p><a title="Mining and Geological Engineers, including Mining Safety Engineers" href="/videos/careeronestop-videos.aspx?videocode=17215100">Mining and Geological Engineers, including Mining Safety Engineers - NEW!</a></p>',
'<p><a title="Natural Sciences Managers" href="/videos/careeronestop-videos.aspx?videocode=11912100">Natural Sciences Managers - NEW!</a></p>',
'<p><a title="Nuclear Engineers" href="/videos/careeronestop-videos.aspx?videocode=17216100">Nuclear Engineers - NEW!</a></p>',
'<p><a title="Nuclear Medicine Technologists" href="/videos/careeronestop-videos.aspx?videocode=29203300">Nuclear Medicine Technologists - NEW!</a></p>',
'<p><a title="Nuclear Technicians" href="https://cdn.careeronestop.org/CareerVideos/19-4051.00.mp4">Nuclear Technicians</a></p>',
'<p><a title="Paleontologists" href="https://cdn.careeronestop.org/CareerVideos/19-3091.09.mp4">Paleontologists</a></p>',
'<p><a title="Petroleum Engineers" href="/videos/careeronestop-videos.aspx?videocode=17217100">Petroleum Engineers - NEW!</a></p>',
'<p><a title="Physicists" href="/videos/careeronestop-videos.aspx?videocode=19201200">Physicists - NEW!</a></p>',
'<p><a title="Product Safety Engineers" href="/videos/careeronestop-videos.aspx?videocode=17211103">Product Safety Engineers - NEW!</a></p>',
'<p><a title="Quality Control Systems Managers" href="/videos/careeronestop-videos.aspx?videocode=11305101">Quality Control Systems Managers - NEW!</a></p>',
'<p><a title="Soil and Plant Scientists" href="/videos/careeronestop-videos.aspx?videocode=19101300">Soil and Plant Scientists - NEW!</a></p>',
'<p><a title="Statisticians" href="/videos/careeronestop-videos.aspx?videocode=15204100">Statisticians - NEW!</a></p>',
'<p><a title="Survey Researchers" href="https://cdn.careeronestop.org/CareerVideos/19-3022.00.mp4">Survey Researchers</a></p>',
'<p><a title="Surveying and Mapping Technicians" href="/videos/careeronestop-videos.aspx?videocode=17303100">Surveying and Mapping Technicians - NEW!</a></p>',
'<p><a title="Technical Writers" href="https://cdn.careeronestop.org/CareerVideos/27-3042.00.mp4">Technical Writers</a></p>',
'<p><a title="Vocational Education Teachers - Postsecondary" href="https://cdn.careeronestop.org/CareerVideos/25-1194.00.mp4">Vocational Education Teachers - Postsecondary</a></p>',
'<p><a title="Water Resource Specialists" href="/videos/careeronestop-videos.aspx?videocode=11912102">Water Resource Specialists - NEW!</a></p>',
'<p><a title="Wind Turbine Service Technicians" href="/videos/careeronestop-videos.aspx?videocode=49908100">Wind Turbine Service Technicians - NEW!</a></p>',
'<p><a title="Zoologists and Wildlife Biologists" href="/videos/careeronestop-videos.aspx?videocode=19102300">Zoologists and Wildlife Biologists - NEW!</a></p>'
];

const traMain = [
'<p><a title="Transportation, Distribution and Logistics (Cluster Video)" href="https://cdn.careeronestop.org/CareerVideos/00-0000.16.mp4">Transportation, Distribution and Logistics (Cluster Video)</a></p>',
'<p><a title="Able Seamen" href="https://cdn.careeronestop.org/CareerVideos/53-5011.01.mp4">Able Seamen</a></p>',
'<p><a title="Administrative Services Managers" href="/videos/careeronestop-videos.aspx?videocode=11301100">Administrative Services Managers - NEW!</a></p>',
'<p><a title="Aerospace Engineering and Operations Technicians" href="/videos/careeronestop-videos.aspx?videocode=17302100">Aerospace Engineering and Operations Technicians - NEW!</a></p>',
'<p><a title="Air Traffic Controllers" href="/videos/careeronestop-videos.aspx?videocode=53202100">Air Traffic Controllers - NEW!</a></p>',
'<p><a title="Aircraft Cargo Handling Supervisors" href="https://cdn.careeronestop.org/CareerVideos/53-1011.00.mp4">Aircraft Cargo Handling Supervisors</a></p>',
'<p><a title="Aircraft Engine Specialists" href="https://cdn.careeronestop.org/CareerVideos/49-3011.02.mp4">Aircraft Engine Specialists</a></p>',
'<p><a title="Aircraft Mechanics and Service Technicians" href="/videos/careeronestop-videos.aspx?videocode=49301100">Aircraft Mechanics and Service Technicians - NEW!</a></p>',
'<p><a title="Airframe and Power Plant Mechanics" href="https://cdn.careeronestop.org/CareerVideos/49-3011.01.mp4">Airframe and Power Plant Mechanics</a></p>',
'<p><a title="Airline Pilots, Copilots, and Flight Engineers" href="/videos/careeronestop-videos.aspx?videocode=53201100">Airline Pilots, Copilots, and Flight Engineers - NEW!</a></p>',
'<p><a title="Ambulance Drivers and Attendants, Except EMTs" href="/videos/careeronestop-videos.aspx?videocode=53301100">Ambulance Drivers and Attendants, Except EMTs - NEW!</a></p>',
'<p><a title="Automotive Body and Related Repairers" href="/videos/careeronestop-videos.aspx?videocode=49302100">Automotive Body and Related Repairers - NEW!</a></p>',
'<p><a title="Automotive Glass Installers and Repairers" href="/videos/careeronestop-videos.aspx?videocode=49302200">Automotive Glass Installers and Repairers - NEW!</a></p>',
'<p><a title="Automotive Service Technicians and Mechanics" href="/videos/careeronestop-videos.aspx?videocode=49302300">Automotive Service Technicians and Mechanics - NEW!</a></p>',
'<p><a title="Aviation Inspectors" href="https://cdn.careeronestop.org/CareerVideos/53-6051.01.mp4">Aviation Inspectors</a></p>',
'<p><a title="Avionics Technicians" href="/videos/careeronestop-videos.aspx?videocode=49209100">Avionics Technicians - NEW!</a></p>',
'<p><a title="Bicycle Repairers" href="https://cdn.careeronestop.org/CareerVideos/49-3091.00.mp4">Bicycle Repairers</a></p>',
'<p><a title="Bridge and Lock Tenders" href="https://cdn.careeronestop.org/CareerVideos/53-6011.00.mp4">Bridge and Lock Tenders</a></p>',
'<p><a title="Bus Drivers, School or Special Client" href="/videos/careeronestop-videos.aspx?videocode=53302200">Bus Drivers, School or Special Client - NEW!</a></p>',
'<p><a title="Bus Drivers, Transit and Intercity" href="/videos/careeronestop-videos.aspx?videocode=53302100">Bus Drivers, Transit and Intercity - NEW!</a></p>',
'<p><a title="Bus and Truck Mechanics and Diesel Engine Specialists" href="/videos/careeronestop-videos.aspx?videocode=49303100">Bus and Truck Mechanics and Diesel Engine Specialists - NEW!</a></p>',
'<p><a title="Captains Mates and Pilots of Water Vessels" href="/videos/careeronestop-videos.aspx?videocode=53502100">Captains, Mates and Pilots of Water Vessels - NEW!</a></p>',
'<p><a title="Cargo and Freight Agents" href="/videos/careeronestop-videos.aspx?videocode=43501100">Cargo and Freight Agents - NEW!</a></p>',
'<p><a title="Chief Executives" href="/videos/careeronestop-videos.aspx?videocode=11101100">Chief Executives - NEW!</a></p>',
'<p><a title="Cleaners of Vehicles and Equipment" href="/videos/careeronestop-videos.aspx?videocode=53706100">Cleaners of Vehicles and Equipment - NEW!</a></p>',
'<p><a title="Commercial Pilots" href="/videos/careeronestop-videos.aspx?videocode=53201200">Commercial Pilots - NEW!</a></p>',
'<p><a title="Couriers and Messengers" href="/videos/careeronestop-videos.aspx?videocode=43502100">Couriers and Messengers - NEW!</a></p>',
'<p><a title="Crane and Tower Operators" href="/videos/careeronestop-videos.aspx?videocode=53702100">Crane and Tower Operators - NEW!</a></p>',
'<p><a title="Dispatchers Except Police - Fire - Ambulance" href="https://cdn.careeronestop.org/CareerVideos/43-5032.00.mp4">Dispatchers Except Police - Fire - Ambulance</a></p>',
'<p><a title="Electronic Equipment Installers and Repairers, Motor Vehicles" href="/videos/careeronestop-videos.aspx?videocode=49209600">Electronic Equipment Installers and Repairers, Motor Vehicles - NEW!</a></p>',
'<p><a title="Flight Attendants" href="/videos/careeronestop-videos.aspx?videocode=53203100">Flight Attendants - NEW!</a></p>',
'<p><a title="Grips and Set-Up Workers - Motion Picture Sets - Studios - Stages" href="https://cdn.careeronestop.org/CareerVideos/53-7062.02.mp4">Grips and Set-Up Workers - Motion Picture Sets - Studios - Stages</a></p>',
'<p><a title="Hand Laborers and Freight, Stock, and Material Movers" href="/videos/careeronestop-videos.aspx?videocode=53706200">Hand Laborers and Freight, Stock, and Material Movers - NEW!</a></p>',
'<p><a title="Industrial Safety and Health Engineers" href="/videos/careeronestop-videos.aspx?videocode=17211101">Industrial Safety and Health Engineers - NEW!</a></p>',
'<p><a title="Industrial Truck and Tractor Operators" href="/videos/careeronestop-videos.aspx?videocode=53705100">Industrial Truck and Tractor Operators - NEW!</a></p>',
'<p><a title="Locomotive Engineers" href="/videos/careeronestop-videos.aspx?videocode=53401100">Locomotive Engineers - NEW!</a></p>',
'<p><a title="Locomotive Firers" href="/videos/careeronestop-videos.aspx?videocode=53401200">Locomotive Firers - NEW!</a></p>',
'<p><a title="Logistics Manager" href="/videos/careeronestop-videos.aspx?videocode=11307103">Logistics Manager - NEW!</a></p>',
'<p><a title="Mobile Heavy Equipment Mechanics, Except Engines" href="/videos/careeronestop-videos.aspx?videocode=49304200">Mobile Heavy Equipment Mechanics, Except Engines - NEW!</a></p>',
'<p><a title="Motorboat Mechanics and Service Technicians" href="/videos/careeronestop-videos.aspx?videocode=49305100">Motorboat Mechanics and Service Technicians - NEW!</a></p>',
'<p><a title="Motorboat Operators" href="/videos/careeronestop-videos.aspx?videocode=53502200">Motorboat Operators - NEW!</a></p>',
'<p><a title="Motorcycle Mechanics" href="/videos/careeronestop-videos.aspx?videocode=49305200">Motorcycle Mechanics - NEW!</a></p>',
'<p><a title="Packers and Packagers - Hand" href="https://cdn.careeronestop.org/CareerVideos/53-7064.00.mp4">Packers and Packagers - Hand</a></p>',
'<p><a title="Parking Lot Attendants" href="/videos/careeronestop-videos.aspx?videocode=53602100">Parking Lot Attendants - NEW!</a></p>',
'<p><a title="Pilots - Ship" href="https://cdn.careeronestop.org/CareerVideos/53-5021.03.mp4">Pilots - Ship</a></p>',
'<p><a title="Power Plant Operators" href="https://cdn.careeronestop.org/CareerVideos/51-8013.00.mp4">Power Plant Operators</a></p>',
'<p><a title="Print Binding and Finishing Workers" href="/videos/careeronestop-videos.aspx?videocode=51511300">Print Binding and Finishing Workers - NEW!</a></p>',
'<p><a title="Production, Planning, and Expediting Clerks" href="/videos/careeronestop-videos.aspx?videocode=43506100">Production, Planning, and Expediting Clerks - NEW!</a></p>',
'<p><a title="Outdoor Power Equipment and Other Small Engine Mechanics" href="/videos/careeronestop-videos.aspx?videocode=49305300">Outdoor Power Equipment and Other Small Engine Mechanics - NEW!</a></p>',
'<p><a title="Rail Car Repairers" href="/videos/careeronestop-videos.aspx?videocode=49304300">Rail Car Repairers - NEW!</a></p>',
'<p><a title="Rail Yard Engineers, Dinkey Operators, and Hostlers " href="/videos/careeronestop-videos.aspx?videocode=53401300">Rail Yard Engineers, Dinkey Operators, and Hostlers - NEW!</a></p>',
'<p><a title="Railroad Brake, Signal, and Switch Operators" href="/videos/careeronestop-videos.aspx?videocode=53402100">Railroad Brake, Signal, and Switch Operators - NEW!</a></p>',
'<p><a title="Railroad Conductors and Yardmasters" href="/videos/careeronestop-videos.aspx?videocode=53403100">Railroad Conductors and Yardmasters - NEW!</a></p>',
'<p><a title="Rail-Track Laying and Maintenance Equipment Operators" href="https://cdn.careeronestop.org/CareerVideos/47-4061.00.mp4">Rail-Track Laying and Maintenance Equipment Operators</a></p>',
'<p><a title="Sailors and Marine Oilers" href="/videos/careeronestop-videos.aspx?videocode=53501100">Sailors and Marine Oilers - NEW!</a></p>',
'<p><a title="Service Station Attendants" href="https://cdn.careeronestop.org/CareerVideos/53-6031.00.mp4">Service Station Attendants</a></p>',
'<p><a title="Shipping, Receiving, and Traffic Clerks" href="/videos/careeronestop-videos.aspx?videocode=43507100">Shipping, Receiving, and Traffic Clerks - NEW!</a></p>',
'<p><a title="Stevedores - Except Equipment Operators" href="https://cdn.careeronestop.org/CareerVideos/53-7062.01.mp4">Stevedores - Except Equipment Operators</a></p>',
'<p><a title="Subway and Streetcar Operators" href="https://cdn.careeronestop.org/CareerVideos/53-4041.00.mp4">Subway and Streetcar Operators</a></p>',
'<p><a title="Supply Chain Managers" href="/videos/careeronestop-videos.aspx?videocode=11919904">Supply Chain Managers - NEW!</a></p>',
'<p><a title="Taxi Drivers and Chauffeurs" href="/videos/careeronestop-videos.aspx?videocode=53304100">Taxi Drivers and Chauffeurs - NEW!</a></p>',
'<p><a title="Tire Repairers and Changers" href="https://cdn.careeronestop.org/CareerVideos/49-3093.00.mp4">Tire Repairers and Changers</a></p>',
'<p><a title="Tractor-Trailer Truck Drivers" href="https://cdn.careeronestop.org/CareerVideos/53-3032.02.mp4">Tractor-Trailer Truck Drivers</a></p>',
'<p><a title="Traffic Technicians" href="https://cdn.careeronestop.org/CareerVideos/53-6041.00.mp4">Traffic Technicians</a></p>',
'<p><a title="Transportation Managers" href="/videos/careeronestop-videos.aspx?videocode=11307101">Transportation Managers - NEW!</a></p>',
'<p><a title="Transportation Vehicle, Equipment and Systems Inspectors, Except Aviation" href="/videos/careeronestop-videos.aspx?videocode=53605107">Transportation Vehicle, Equipment and Systems Inspectors, Except Aviation - NEW!</a></p>',
'<p><a title="Truck Drivers - Heavy and Tractor-Trailer" href="/videos/careeronestop-videos.aspx?videocode=53303200">Truck Drivers - Heavy and Tractor-Trailer - NEW!</a></p>',
'<p><a title="Truck Drivers - Light or Delivery Services" href="/videos/careeronestop-videos.aspx?videocode=53303300">Truck Drivers - Light or Delivery Services - NEW!</a></p>'
];


