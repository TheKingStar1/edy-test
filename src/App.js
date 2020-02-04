import React from 'react';
import logo from './logo.svg';
import './App.css';

// Calcul total suma
// 1 + 2 + 3 + ..... + n

function App() {

  function sum(n) {
    return (n*(n+1))/2
  }

  function sumcupentru(n) {
    let suma = 0
    
    for (let i=1; i <= n; i = i + 1) {
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

  function Prob(a,b) {
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
    console.log(b);
    }
    while (a !== b) 

    return n
  }


  function Prob2(nr) {
    let a = 0
    let b = 0
    let c = 0
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



  








    return (
    <div className="App">
      <header className="App-header">
        <p>
        {/* Aici poti sa pui orice functie */}
        {/* Suma cu pentru este {sumcupentru(1000)} */}
        Numarul este {Prob2(223)}
        </p>
      </header>
    </div>
  );
}

export default App;
