function loader() {
    myVar = setTimeout(loader_main, 3500);
  }
  
  function loader_main() {
    document.getElementById("loader").style.display = "none";
    document.getElementById("main_div").style.display = "block";
    document.getElementById("body").style.backgroundColor = "#fff"
  }


