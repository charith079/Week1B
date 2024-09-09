document.getElementById("button").addEventListener('click', () => {
  var str = document.getElementById("name").value;
  if(str.length>25)alert("name should not exceed more than 25 characters")
    else alert("registration sucessful");
})