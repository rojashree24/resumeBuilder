var fname,mailV,phnoV,linkV,gitV,obj,workTitleV,workDesV,internTitleV,internDesV,projTitleV,projDesV;
function generate(){
  fname=document.getElementById("fullName").value;
  document.getElementById("fname").innerHTML=fname;
  mailV=document.getElementById("mail").value;
  document.getElementById("mailh2").innerHTML=mailV;
  phnoV=document.getElementById("phno").value;
  document.getElementById("phnoh2").innerHTML=phnoV;
  linkV=document.getElementById("linkedIn").value;
  document.getElementById("linkh4").innerHTML=linkV;
  gitV=document.getElementById("git").value;
  document.getElementById("gith4").innerHTML=gitV;
  obj=document.getElementById("objective").value;
  console.log(obj);
  document.getElementById("objective").style.display="none";
  document.getElementById("objectContent").innerHTML=obj;
  document.getElementById("objectContent").style.display="block";
  document.getElementById("addskills").style.display="none";
  document.getElementById("skill").style.display="none";
  document.getElementById("addLikes").style.display="none";
  document.getElementById("Interest").style.display="none";
  document.getElementById("studyInst").style.display="none";
  document.getElementById("StudyCourse").style.display="none";
  document.getElementById("StudyAdds").style.display="none";
  document.getElementById("addStudy").style.display="none";
  console.log(obj);

  workTitleV=document.getElementById("workTitle").value;
  document.getElementById("workTitleh3").innerHTML=workTitleV;
  workDesV=document.getElementById("workDes").value;
  document.getElementById("workDes").style.display="none";
  document.getElementById("workDesP").innerHTML=workDesV;
  
  internTitleV=document.getElementById("internTitle").value;
  document.getElementById("internTitleh3").innerHTML=internTitleV;
  internDesV=document.getElementById("internDes").value;
  document.getElementById("internDes").style.display="none";
  document.getElementById("internDesP").innerHTML=internDesV;

  projTitleV=document.getElementById("projTitle").value;
  document.getElementById("projTitleh3").innerHTML=projTitleV;
  projDesV=document.getElementById("projDes").value;
  document.getElementById("projDes").style.display="none";
  document.getElementById("projDesP").innerHTML=projDesV;
  
  document.getElementById("Certificate").style.display="none";
  document.getElementById("addCertificates").style.display="none";
  document.getElementById("competTitile").style.display="none";
  document.getElementById("competPrize").style.display="none";
  document.getElementById("addCompet").style.display="none";
  document.getElementById("paperTitle").style.display="none";
  document.getElementById("paperMag").style.display="none";
  document.getElementById("addPaper").style.display="none";
  console.log(obj);
}

function edit(){
  //fullname
  document.getElementById("fname").innerHTML='<input id="fullName" placeholder="Your Name" type="text" name="fullName" vakue="'+fname+'">';
  document.getElementById("mailh2").innerHTML='<input id="mail" placeholder="Your Email" type="text" name="fullName">';
  document.getElementById("phnoh2").innerHTML='<input id="phno" placeholder="Your Phone Number" type="text" name="fullName">';
  document.getElementById("linkh4").innerHTML='<input id="linkedIn" placeholder="Attatch LinkedIn Link here" type="text" name="fullName">';
  document.getElementById("gith4").innerHTML='<input id="git" placeholder="Attatch GitHub link here" type="text" name="fullName">';
  //objective
  document.getElementById("objective").style.display="block";
  document.getElementById("objectContent").style.display="none";
  //done
  document.getElementById("skill").style.display="block";
  document.getElementById("addskills").style.display="block";
  document.getElementById("Interest").style.display="block";
  document.getElementById("addLikes").style.display="block";
  document.getElementById("StudyCourse").style.display="block";
  document.getElementById("studyInst").style.display="block";
  document.getElementById("StudyAdds").style.display="block";
  document.getElementById("addStudy").style.display="block";
  
  document.getElementById("workDesP").innerHTML='<textarea id="workDes" placeholder="Skills lernt from Workshop" row="10" col="400"></textarea>';
  document.getElementById("workTitleh3").innerHTML='<input id="workTitle" type="text" placeholder="WorkshopTitle"><br>';
  
  document.getElementById("internTitleh3").innerHTML='<input id="internTitle" type="text" placeholder="InternTitle"><br>';
  document.getElementById("internDesP").innerHTML='<textarea id="internDes" placeholder="Skills lernt from internship"></textarea>';
  
  document.getElementById("projTitleh3").innerHTML='<input id="projTitle" type="text" placeholder="ProjectTitle" name="projTitle">';
  document.getElementById("projDesP").innerHTML='<textarea id="projDes" placeholder="Project Description"></textarea>';

  document.getElementById("Certificate").style.display="block";
  document.getElementById("addCertificates").style.display="block";
  document.getElementById("competTitile").style.display="block";
  document.getElementById("addCompet").style.display="block";
  document.getElementById("competPrize").style.display="block";
  document.getElementById("paperTitle").style.display="block";
  document.getElementById("paperMag").style.display="block";
  document.getElementById("addPapers").style.display="block";

  
}

/**
 * The function "addskillset" adds a new skill to a list of skills.
 */
function addskillset(){
  ulElement=document.getElementById("mySkills");
  liElement=document.createElement("li")
  skill=document.getElementById("skill").value
  liElement.appendChild(document.createTextNode(skill));
  document.getElementById('skills').value = "";
  ulElement.appendChild(liElement);
}

function addlikeset(){
  ulElement=document.getElementById("myInterests")
  liElement=document.createElement("li")
  like=document.getElementById("Interest").value
  liElement.appendChild(document.createTextNode(like));
  document.getElementById('Interest').value = "";
   ulElement.appendChild(liElement);
}

function addStudy(){
  var parentList = document.getElementById("Studies");
  var liElement=document.createElement("li");
  var edu=document.getElementById("StudyCourse").value;
  liElement.appendChild(document.createTextNode(edu));
  parentList.appendChild(liElement)
  var childList = document.createElement("ul");
  parentList.appendChild(childList);
  var childListItem1 = document.createElement("li");
  var eduCou=document.getElementById("studyInst").value;
  childListItem1.appendChild(document.createTextNode(eduCou));
  childList.appendChild(childListItem1);
  var childListItem2 = document.createElement("li");
  var eduCou=document.getElementById("StudyAdds").value;
  childListItem2.appendChild(document.createTextNode(eduCou));
  childList.appendChild(childListItem2);
  document.getElementById('studyInst').value = "";
  document.getElementById('StudyCourse').value = "";
  document.getElementById('StudyAdds').value = "";
}

function addCertificate(){
  ulElement=document.getElementById("myCertificates")
  liElement=document.createElement("li")
  CertificateV=document.getElementById("Certificate").value
  liElement.appendChild(document.createTextNode(CertificateV));
  document.getElementById('Certificate').value = "";
  ulElement.appendChild(liElement)
}

function addCompet(){
  var parentList = document.getElementById("myCompetition");
  var liElement=document.createElement("li");
  var compT=document.getElementById("competTitile").value;
  liElement.appendChild(document.createTextNode(compT));
  parentList.appendChild(liElement)
  var childList = document.createElement("ul");
  parentList.appendChild(childList);
  var childListItem= document.createElement("li");
  var compP=document.getElementById("competPrize").value;
  childListItem.appendChild(document.createTextNode(compP));
  childList.appendChild(childListItem);
  document.getElementById('competTitile').value = "";
  document.getElementById('competPrize').value = "";
}

function addPaper(){
  var parentList = document.getElementById("Paper");
  var liElement=document.createElement("li");
  var compT=document.getElementById("paperTitle").value;
  liElement.appendChild(document.createTextNode(compT));
  parentList.appendChild(liElement)
  var childList = document.createElement("ul");
  parentList.appendChild(childList);
  var childListItem= document.createElement("li");
  var compP=document.getElementById("paperMag").value;
  childListItem.appendChild(document.createTextNode(compP));
  childList.appendChild(childListItem);
  document.getElementById('paperTitle').value = "";
  document.getElementById('paperMag').value = "";
}