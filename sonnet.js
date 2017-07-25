var sonnetString = document.getElemendById("sonnet").innerHTML;

console.log("index of 'orphans'", sonnetString.indexOf("orphans"));
console.log("length of sonnet", sonnetString.length);

sonnetString = sonnetString.replace("winter", "yuletide");
sonnetString = sonnetString.replace(/the/g, "a large");

document.getElementById("sonnet").innerHTML = sonnetString;