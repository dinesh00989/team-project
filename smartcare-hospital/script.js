// AUTH
function login(){
  if(username.value==="admin" && password.value==="admin")
    location.href="index.html";
  else alert("Invalid");
}

// DATA
let doctors=[
 {name:"Dr. Rao"}, {name:"Dr. Meena"}
];
let patients=JSON.parse(localStorage.getItem("patients"))||[];
let appointments=JSON.parse(localStorage.getItem("appointments"))||[];
let prescriptions=JSON.parse(localStorage.getItem("prescriptions"))||[];

function save(){
 localStorage.setItem("patients",JSON.stringify(patients));
 localStorage.setItem("appointments",JSON.stringify(appointments));
 localStorage.setItem("prescriptions",JSON.stringify(prescriptions));
}

// DOCTORS
const dList=document.getElementById("doctorList");
if(dList) doctors.forEach(d=>{
 let li=document.createElement("li"); li.textContent=d.name; dList.appendChild(li);
});

// PATIENTS
function addPatient(){
 patients.push({name:pname.value,age:page.value,problem:pproblem.value});
 save(); location.reload();
}
const pList=document.getElementById("patientList");
if(pList) patients.forEach(p=>{
 let li=document.createElement("li"); li.textContent=p.name+" - "+p.problem; pList.appendChild(li);
});

// APPOINTMENTS
const aptDoc=document.getElementById("aptDoctor");
if(aptDoc) doctors.forEach(d=>{
 let o=document.createElement("option"); o.text=d.name; aptDoc.add(o);
});
function addAppointment(){
 appointments.push({p:aptPatient.value,d:aptDoctor.value,date:aptDate.value});
 save(); location.reload();
}
const aList=document.getElementById("appointmentList");
if(aList) appointments.forEach(a=>{
 let li=document.createElement("li");
 li.textContent=`${a.p} with ${a.d} on ${a.date}`;
 aList.appendChild(li);
});

// PRESCRIPTION
const preDoc=document.getElementById("preDoctor");
if(preDoc) doctors.forEach(d=>{
 let o=document.createElement("option"); o.text=d.name; preDoc.add(o);
});
function addPrescription(){
 prescriptions.push({p:prePatient.value,d:preDoctor.value,m:medicine.value});
 save(); location.reload();
}
const prList=document.getElementById("prescriptionList");
if(prList) prescriptions.forEach(p=>{
 let li=document.createElement("li");
 li.textContent=`${p.p} - ${p.d}: ${p.m}`;
 prList.appendChild(li);
});

// REPORTS
const r=document.getElementById("report");
if(r) r.innerHTML=`
Total Doctors: ${doctors.length}<br>
Total Patients: ${patients.length}<br>
Appointments: ${appointments.length}<br>
Prescriptions: ${prescriptions.length}
`;
