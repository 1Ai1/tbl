function doo() {
  let p = document.getElementById("password");
  console.log(p.value);
  if(p.value == 73){
     let f = document.getElementsByClassName("f");
      for(let i = 0 ; i < 64 ; i++){
         f[i].innerHTML =   `<span class = 'red' style = ''>${i}</span>`;
      }
      let a = 65;
      for(let i = 9; i <64; i+=9){
         f[i].innerHTML += String.fromCharCode(a);
         a++;
      }
      a = 72
      for(let i = 8; i <63; i+=9){
         f[i].innerHTML += String.fromCharCode(a);
         a++;
      }
      a = 79
      for(let i = 1; i <56; i+=9){
         f[i].innerHTML += String.fromCharCode(a);
         a++;
      }
      a = 86
      for(let i = 16; i <53; i+=9){
         f[i].innerHTML += String.fromCharCode(a);
         a++;
      }
      a = 0
      for(let i = 42; i <61; i+=9){
         f[i].innerHTML += a;
         a++;
      }
       a = 3
      for(let i = 3; i <40; i+=9){
         f[i].innerHTML += a;
         a++;
      }
      f[32].innerHTML += 8;
      f[41].innerHTML += 9;
      f[61].innerHTML += '&#199';
      f[2].innerHTML += "'";
      f[7].innerHTML += '&#8593';
      f[11].innerHTML += '&#286';
      f[20].innerHTML += '&#214';
      f[29].innerHTML += '&#219';
      f[38].innerHTML += '&#193';
      f[47].innerHTML += '&#209';
      f[24].innerHTML += '^';
      f[33].innerHTML += '&#9166';
      f[4].innerHTML += '—';
      f[5].innerHTML += ':';
      f[6].innerHTML += ',';
      f[22].innerHTML += '.';
      f[14].innerHTML += '(';
      f[23].innerHTML += ')';
      f[13].innerHTML += '!';
      f[15].innerHTML += '"';
      f[31].innerHTML += '?';
      f[40].innerHTML += ';';
      f[50].innerHTML += '%';
      f[48].innerHTML += '/';
      f[49].innerHTML += '*';
      f[56].innerHTML += '+';
      f[57].innerHTML += '=';
      f[58].innerHTML += '@';
      f[59].innerHTML += '#';
   }

}














document.addEventListener('keypress',(event) => {
  doo()
}, false);