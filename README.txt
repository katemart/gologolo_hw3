GoLogoLo App (HW3)
Author: Katheryn Martinez Hernandez
ID# 110025722

The following set of queries can be entered right into GraphiQL Web App for adding, querying, updating, and removing logos from GoLogoLo Database. 
***** IMPORTANT NOTE: Please make sure to input proper ID when querying data - as ID may change from system to system. If unsure as to what the ID field is, please run the query to retrieve all logos first and choose one from the list ***** 

EXAMPLE QUERIES:

FIELDS QUERY (copy/paste this every time when running a query - can be typed right under query, NOTE: query won’t work unless this is specified):

fragment fields on logo {
  _id
  text
  color
  fontSize
  backgroundColor
  borderColor
  borderRadius
  borderWidth
  padding
  margin
  lastUpdate
}


QUERY TO RETRIEVE ALL LOGOS:

{
  logos {
    ...fields
  }
}



QUERY TO RETRIEVE A SPECIFIC LOGO:
{ 
 logo(id:"5e8d1fb8bcafaa0288ce754c") {
    ...fields
  }
}



QUERY TO RETRIEVE MULTIPLE LOGOS AT A TIME:

{ 
 logo1: logo(id:"5e8d1fb8bcafaa0288ce754c") {
    ...fields
  }
 logo2: logo(id:"5e8e3825e95d56025282f2f8") {
    ...fields
  }
}



QUERY TO ADD A LOGO:

mutation {
  addLogo(text:"quarantine sucks", color:"#a52a2a", fontSize:50, backgroundColor:"#ffebcd", 
  borderColor:"#6495ed", borderRadius:8, borderWidth:10, padding:6, margin:10) {
    ...fields
  }
}



QUERY TO ADD MULTIPLE LOGOS AT A TIME:

mutation{
  logo1: addLogo(text:"APPLE", color:"#dc143c", fontSize:25, backgroundColor:"#ffffff", 
	borderColor:"#fffaf0", borderRadius:5, borderWidth:15, padding:6, margin:10) {
    ...fields
  }
  logo2: addLogo(text:"ORANGE", color:"#fff0f5", fontSize:25, backgroundColor:"#778899", 
	borderColor:"#000000", borderRadius:10, borderWidth:10, padding:6, margin:10) {
    ...fields
  }
}



QUERY TO UPDATE A LOGO:

mutation {
  updateLogo(id:"5e92939ae94eff0275625aee", text:"i want to go out", color:"#a52a2a", fontSize:25, backgroundColor:"#ffebcd", 
  borderColor:"#b8860b", borderRadius:5, borderWidth:15, padding:6, margin:10) {
    ...fields
  }
}



QUERY TO UPDATE MULTIPLE LOGOS AT A TIME:

mutation{
  logo1: updateLogo(id:"5e8d1fb8bcafaa0288ce754c", text:"GOODBYE", color:"#ffffff", fontSize:25, backgroundColor:"#dc143c", 
	borderColor:"#fffaf0", borderRadius:5, borderWidth:15, padding:6, margin:10) {
    ...fields
  }
  logo2: updateLogo(id: "5e939ee12b78a504a6fa07da", text:"HI", color:"#778899", fontSize:25, backgroundColor:"#fff0f5", 
	borderColor:"#000000", borderRadius:10, borderWidth:10, padding:6, margin:10) {
    ...fields
  }
}



QUERY TO DELETE A LOGO:

mutation {
  removeLogo(id:"5e92939ae94eff0275625aee") {
    ...fields
  }
}



QUERY TO DELETE MULTIPLE LOGOS AT A TIME:

mutation {
  logo1: removeLogo(id:"5e93a1372b78a504a6fa07db") {
    ...fields
  }
  logo2: removeLogo(id: "5e93a1372b78a504a6fa07dc") {
    ...fields
  }
}
