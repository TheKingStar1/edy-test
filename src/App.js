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


  function Prob3(x, S1) {
    S1 = 0
    while (x !== 0) {
      c1 == x % 10
      S1 == S1 + c1
      x == Math.floor(x / 10)
    }
    
  return 'S1'
  }



  include < iostream >
  
  function Prob4(a, b) {
    let r = a % b
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
  



  return (
    <div className="App">
      <header className="App-header">
        <p>
          {/* Aici poti sa pui orice functie */}
          {/* Suma cu pentru este {sumcupentru(1000)} */}
          Numarul este {Prob8(3)}
        </p>
      </header>
    </div>
  );



function Prob5(i, j){
  S = 0
  for (int i = 1; i <= n; i++){
    S += P
    for (int j = 1; j <= i; j++){
      P = 1
    }
  }
  return n;
}

  
function Prob6(n, i){
  S = 0
  for(i = 1; i <= n; i++){
    S = S+2*i
  }
  return n
} 

function Prob7(n, i){
  S = 0
  P = 1
  for(i = 1; i <= n; i++){
    P = i
    S += P
  }
  return n
}

function Prob8(n, i){
  P = 1
  for(i = 1; i <= n; i++){
    S = S+P*i*(i+1);
    P = P*(-1);
  }
}

