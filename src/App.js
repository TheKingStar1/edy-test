import React from 'react';
import logo from './logo.svg';
import './App.css';

// Calcul total suma
// 1 + 2 + 3 + ..... + n

function App() {

  function sum(n) {
    return (n * (n + 1)) / 2
  }

  function sumcupentru(n) {
    let suma = 0

    for (let i = 1; i <= n; i = i + 1) {
      suma = (suma + i);
    }

    return suma
  }

  // returnezi daca numarul este par: true sau false
  // n = 10 => return true
  // n = 3 => return false  

  function Zile(a) {
    if (a == 1)
      return 'luni'
    else
      if (a == 2)
        return 'marti'
  }

  function Prob(a, b) {
    let n = 0;
    let x = 0;
    let y = 0;

    if (a !== b)
      do {
        x = a % 10
        y = b % 10
        if (x < y) {
          n = n * 10 + x
        }
        else {
          n = n * 10 + y
        }
        console.log(n);
        a = Math.floor(a / 10)
        b = Math.floor(b / 10)

        console.log(a);
      }
      while (a !== b)

    return n
  }

  function Prob2(nr) {
    let a = 0;
    let b = 0;
    let c = 0;
    while (nr !== 0) {
      c = nr % 10
      if (c == 2) {
        a = a + 1
        console.log(c)
      }
      else {
        b = b + 1
      }
      nr = Math.floor(nr / 10)
      console.log("numarul este " + nr)
    }

    if (a > b) {
      return '2'
    }
    else {
      if (a < b) {
        return '3'
      }
      else {
        return '2,3'
      }
    }
  }

  function Prob3(x, y, S1, S2) {
    let S1 = 0
    let S2 = 0
    do {
      c1 == x % 10
      S1 == S1 + c1
      x == Math.floor(x / 10)
    }
    while x != 0
  return 'S1'
  }



  include < iostream >
    using namespace std;
  //se declara variabilele a si b de tip intreg
  //variabila a memoreaza primul numar introdus de la tastatura
  //variabila b memoreaza al doilea numar introdus de la tastatura
  int a, b;
  int main()
  {
    //se citesc numerele a si b
    cout << "Introduceti numerele a si b: " << endl;
    cin >> a >> b;
    //se determina cel mai mic divizor comun prin scaderi repetate
    while (a != b) {
      if (a > b)
        a = a - b;
      else
        b = b - a;
    }
    //se afiseaza a (care memoreaza acum cmmdc-ul dintre cele 2 numere)
    cout << "Cmmdc = " << a;
  }



  function Prob4(a, b) {
    let r = a % b
    cin >> a >> b;
    while (a != b) {
      if (a > b)
        a = a - b;
      else
        b = b - a;
        cout << a;
        return 0
    }
    while (r != 0)
      a = b
      b = r
      r == a % b
    }
    cmmdc = b
    if (cmmdc = 1)
    return 'Numerele sunt prime intre ele'
    else
      return 'Numerele nu sunt prime intre ele'
  }







  return (
    <div className="App">
      <header className="App-header">
        <p>
          {/* Aici poti sa pui orice functie */}
          {/* Suma cu pentru este {sumcupentru(1000)} */}
          Numarul este {Prob4(12, 45)}
        </p>
      </header>
    </div>
  );


function Suma(a, b) {
  return a + b
}


export default App;
