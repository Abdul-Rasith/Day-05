let myResume = {
   "Profile":{
        "Name":"Mohamed Abdul Rasith",
        "Email":"mscrasith@gamil.com",
        "Mobile": +918608044939,
        "Address": "80, quide millath street melapalayam tirunelveli",
        "Pincode": 627005
    },
    "Education":{
        "Institution": "Sadakathullah Appa College",
        "Department": "M.sc Microbiology",
        "StudyType": "fulltime",
        "Batch start year": 2019,
        "Batch end year": 2021,   
        //
        "Institution": "Sadakathullah Appa College",
        "Department": "B.sc Microbiology",
        "StudyType": "fulltime",
        "Batch start year": 2016,
        "Batch end year": 2019, 
    },
    "Skill":{
        "Typewriting": "Tamil and English",
    },
    "Computer Skills":{
        "Name":"Html,Css,Javascript"
    },
    "Language":[
    {
        "Name":"Tamil And English" 
    }
]
}
for(var i in myResume){
    console.log(i,myResume)
}
//
for(var key of Object.keys(myResume)){
    console.log(`value: ${myResume[key]}`);
}
//
Object.values(myResume).forEach((fach)=>console.log(fach))

