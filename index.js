// Każdy podpunkt jest osobną funkcją. Na dole pliku odkomentuj to,
// co chcesz uruchomić.

function wypisz(tekst) {
    document.write(tekst + "<br />");
  }
  
  // 1. 10 kolejnych liczb całkowitych od 1
  function zad1() {
    for (var i = 1; i <= 10; i++) {
      wypisz(i);
    }
  }
  
  // 2. 10 kolejnych liczb całkowitych od 10 malejąco
  function zad2() {
    for (var i = 10; i >= 1; i--) {
      wypisz(i);
    }
  }
  
  // 3. Suma 10 kolejnych liczb całkowitych od 1
  function zad3() {
    var suma = 0;
    for (var i = 1; i <= 10; i++) {
      suma += i;
    }
    wypisz("Suma: " + suma);
  }
  
  // 4. 10 kolejnych parzystych liczb całkowitych od 2
  function zad4() {
    for (var i = 1; i <= 10; i++) {
      wypisz(2 * i);
    }
  }
  
  // 5-6. Oszczędzanie: co miesiąc wpłata Y zł, potem 8% odsetek od całej kwoty
  function zad5() {
    var x = parseInt(prompt("Przez ile miesięcy pracownik odkłada pieniądze (X)?"));
    var y = parseFloat(prompt("Ile złotych odkłada co miesiąc (Y)?"));
    var kwota = 0;
    for (var i = 1; i <= x; i++) {
      kwota += y;          // wpłata
      kwota += kwota * 0.08; // 8% odsetek od całej kwoty
    }
    wypisz("Pracownik zgromadzi: " + kwota.toFixed(2) + " zł");
  }
  
  // 7. Suma ciągu arytmetycznego: 100 elementów, pierwszy 5, różnica 10
  function zad7() {
    var element = 5;
    var suma = 0;
    for (var i = 0; i < 100; i++) {
      suma += element;
      element += 10;
    }
    wypisz("Suma elementów: " + suma);
  }
  
  // 8. Piramida o podstawie 10 x 10 cegieł (warstwy 10x10, 9x9, ..., 1x1)
  function zad8() {
    var ilosc = 0;
    for (var bok = 10; bok >= 1; bok--) {
      ilosc += bok * bok;
    }
    wypisz("Cegieł w piramidzie: " + ilosc);
  }
  
  // 9. Ściana: podstawa X cegieł, Y rzędów, każdy kolejny rząd krótszy o Z
  function zad9() {
    var x = parseInt(prompt("Ile cegieł w podstawie (X)?"));
    var y = parseInt(prompt("Ile rzędów (Y)?"));
    var z = parseInt(prompt("O ile cegieł krótszy jest każdy kolejny rząd (Z)?"));
    var ilosc = 0;
    var dlugoscRzedu = x;
    for (var i = 1; i <= y; i++) {
      if (dlugoscRzedu <= 0) {
        break; // rząd nie może mieć 0 lub mniej cegieł
      }
      ilosc += dlugoscRzedu;
      dlugoscRzedu -= z;
    }
    wypisz("Cegieł w ścianie: " + ilosc);
    return ilosc;
  }
  
  // 10. Waga ściany z poprzedniego podpunktu, jedna cegła waży K kg
  function zad10() {
    var ilosc = zad9();
    var k = parseFloat(prompt("Ile kilogramów waży jedna cegła (K)?"));
    wypisz("Waga ściany: " + ilosc * k + " kg");
  }
  
  // 11. Prosty kalkulator
  function zad11() {
    var a = parseFloat(prompt("Podaj pierwszą liczbę"));
    var dzialanie = prompt("Podaj działanie (+, -, *, /)");
    var b = parseFloat(prompt("Podaj drugą liczbę"));
    var wynik;
  
    switch (dzialanie) {
      case "+":
        wynik = a + b;
        break;
      case "-":
        wynik = a - b;
        break;
      case "*":
        wynik = a * b;
        break;
      case "/":
        if (b == 0) {
          wypisz("Nie można dzielić przez zero");
          return;
        }
        wynik = a / b;
        break;
      default:
        wypisz("Nieznane działanie");
        return;
    }
    wypisz(a + " " + dzialanie + " " + b + " = " + wynik);
  }
  
  // 12. Ciąg arytmetyczny: N elementów, pierwszy X, różnica Y
  function zad12() {
    var n = parseInt(prompt("Ile elementów (N)?"));
    var x = parseFloat(prompt("Pierwszy element (X)?"));
    var y = parseFloat(prompt("Różnica ciągu (Y)?"));
    var wyraz = x;
    for (var i = 0; i < n; i++) {
      wypisz(wyraz);
      wyraz += y;
    }
  }
  
  // 13. Suma dwóch liczb, powtarzaj aż suma będzie równa 0
  function zad13() {
    var suma;
    do {
      var a = parseFloat(prompt("Podaj pierwszą liczbę"));
      var b = parseFloat(prompt("Podaj drugą liczbę"));
      suma = a + b;
      wypisz(a + " + " + b + " = " + suma);
    } while (suma != 0);
    wypisz("Suma wynosi 0, koniec.");
  }
  
  // 14. Silnia
  function zad14() {
    var n = parseInt(prompt("Podaj liczbę całkowitą nieujemną"));
    if (n < 0 || isNaN(n)) {
      wypisz("Silnia jest określona tylko dla liczb całkowitych nieujemnych");
      return;
    }
    var silnia = 1;
    for (var i = 2; i <= n; i++) {
      silnia *= i;
    }
    wypisz(n + "! = " + silnia);
  }
  
  // 15. Ciąg n liczb, każda kolejna jest kwadratem poprzedniej
  function zad15() {
    var n = parseInt(prompt("Ile liczb wypisać (n)?"));
    var liczba = parseFloat(prompt("Podaj pierwszą liczbę"));
    for (var i = 0; i < n; i++) {
      wypisz(liczba);
      liczba = liczba * liczba;
    }
  }
  
  // 16. Suma i średnia z 10 losowych liczb z przedziału <50, 100>
  function zad16() {
    var suma = 0;
    var liczby = [];
    for (var i = 0; i < 10; i++) {
      liczby[i] = Math.floor(Math.random() * 51) + 50; // 50..100 włącznie
      suma += liczby[i];
    }
    wypisz("Liczby: " + liczby.join(", "));
    wypisz("Suma: " + suma);
    wypisz("Średnia: " + suma / 10);
  }
  
  zad1();
   zad2();
   zad3();
   zad4();
   zad5();
   zad7();
   zad8();
  zad9();
   zad10();
   zad11();
   zad12();
   zad13();
   zad14();
   zad15();
   zad16();