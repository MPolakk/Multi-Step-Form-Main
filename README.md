# Frontend Mentor - Multi-step form

Projekt do wykonania z [Frontend Mentor](https://www.frontendmentor.io)

### [mpolakk.github.io/Multi-Step-Form-Main/](https://mpolakk.github.io/Multi-Step-Form-Main/)
### **Rozwiązanie z SS'ami znajduje się na samym dole**

## **Projekt**

Formularz w dwóch wersjach mobile i desktop(1440px). Wykonałem minimalną walidację przy wprowadzaniu danych. O ile z imieniem i nazwiskiem(sprawdzenie spacji, maksymalnie dwóch członów, dużej pierwszej litery w każdym z członów) i mailem(sprawdzenie symbolu "at" oraz kropki w drugiej części emaila) nie było dużego problemu tak z numerem telefonu napotkałem kilka problemów.

Chciałem uzyskać efekt autouzupełniania poprawną formą numeru telefonu dla wszystkich kierunkowych po wpisaniu wszystkich cyfr ostatecznie zostało tak jak miało być w projekcie czyli +1. Użyłem do tego metody replace() i REGEX'a. Walidacja wykonuje się przez useEffect przy każdej zmianie stanu, nie wiem czy to dobrze wpływa na optymalizacje.

Stan aplikacji jest postawiony na Reduxie. Być może znalazłoby się kilka zbędnych wartości które można by usunąć bądź zamienić i nie mam pewności czy użycie createSlice jest poprawne(sprawdziłem i createSlice zastępuje stare metody implementacji reduxa i usuwa zbędny boilerplate).

## **Do poćwiczenia**

Można jeszcze bardziej wykorzystać potencjał Reacta i zrobić kilka mniejszych komponentów dla elementów które się powtarzają.

Napisać jakiś backend z bazą danych.

## **Wyniesione doświadczenie z projektu**

Napewno bardziej przemyśleć plan nazewnictwa i rozdzielenia na komponenty. Gdybym wrócił do tego projektu za kilka miesięcy dłuższą chwile zajęło by przypomnienie sobie co gdzie jest.

Napotkałem się z jednym bardzo poważnym problemem który mnie męczył czyli podwójne wywołanie useEffect nawet przy zależnościach z pustą tablicą. Problemem był StrictMode co oczywiście było zawarte w dokumentacji no ale komu by się chciało tam zaglądnąć :>

## **Rozwiązanie**


### **First Step**
| <img src="./design/mobile-design-step-1.jpg" height="400"/> | <img src="./my-solution/1-mobile.png" height="400"/> |
| :---------------------------------------------------------: | :--------------------------------------------------: |
|                      *Frontend Mentor*                      |                    *My Solution*                     |

| <img src="./design\desktop-design-step-1.jpg" /> |
| :----------------------------------------------: |
|                *Frontend Mentor*                 |

| <img src="./my-solution/1.png" /> |
| :-------------------------------: |
|           *My Solution*           |

### **Second Step**

| <img src="design\mobile-design-step-2-monthly.jpg" height="400"/> | <img src="./my-solution/2-mobile.png" height="400"/> |
| :---------------------------------------------------------------: | :--------------------------------------------------: |
|                         *Frontend Mentor*                         |                    *My Solution*                     |

| <img src="./design\desktop-design-step-2-monthly.jpg" /> |
| :------------------------------------------------------: |
|                    *Frontend Mentor*                     |

| <img src="./my-solution/2.png" /> |
| :-------------------------------: |
|           *My Solution*           |

### **Third Step**

| <img src="./design\mobile-design-step-3-monthly.jpg" height="400"/> | <img src="./my-solution/3-mobile.png" height="400"/> |
| :-----------------------------------------------------------------: | :--------------------------------------------------: |
|                          *Frontend Mentor*                          |                    *My Solution*                     |

| <img src="./design\desktop-design-step-3-monthly.jpg" /> |
| :------------------------------------------------------: |
|                    *Frontend Mentor*                     |

| <img src="./my-solution/3.png" /> |
| :-------------------------------: |
|           *My Solution*           |

### **Fourth Step**

| <img src="./design\mobile-design-step-4-monthly.jpg" height="400"/> | <img src="./my-solution/4-mobile.png" height="400"/> |
| :-----------------------------------------------------------------: | :--------------------------------------------------: |
|                          *Frontend Mentor*                          |                    *My Solution*                     |

| <img src="./design\desktop-design-step-4-monthly.jpg" /> |
| :------------------------------------------------------: |
|                    *Frontend Mentor*                     |

| <img src="./my-solution/4.png" /> |
| :-------------------------------: |
|           *My Solution*           |

### **Fifth Step**

| <img src="./design/mobile-design-step-1.jpg" height="400"/> | <img src="./my-solution/1-mobile.png" height="400"/> |
| :---------------------------------------------------------: | :--------------------------------------------------: |
|                      *Frontend Mentor*                      |                    *My Solution*                     |

| <img src="./design\desktop-design-step-5.jpg" /> |
| :----------------------------------------------: |
|                *Frontend Mentor*                 |

| <img src="./my-solution/5.png" /> |
| :-------------------------------: |
|           *My Solution*           |

