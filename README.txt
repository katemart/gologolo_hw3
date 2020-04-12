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


QUERY TO RETRIVE A SPECIFIC LOGO:
{ 
 logo(id:"5e8d1fb8bcafaa0288ce754c") {
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


QUERY TO UPDATE A LOGO:

mutation {
  updateLogo(id:"5e92939ae94eff0275625aee", text:"i want to go out", color:"#a52a2a", fontSize:25, backgroundColor:"#ffebcd", 
  borderColor:"#b8860b", borderRadius:5, borderWidth:15, padding:6, margin:10) {
    ...fields
  }
}


QUERY TO DELETE A LOGO:

mutation {
  removeLogo(id:"5e92939ae94eff0275625aee") {
    ...fields
  }
}
