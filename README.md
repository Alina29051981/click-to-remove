# The game “Give up the group”

Task description

We have a rectangular game board made of cells.
Each cell contains a single game element (a letter or a symbol).

When selecting any cell on the board, we must remove:

- the selected cell itself
- all neighboring cells (up, down, left, right) with the same value that form a connected group.

The task was to implement the search for such a group and remove it from the board using JavaScript and OOP principles, without any third-party libraries.

## Solution idea

The board is represented as a two-dimensional array.

The group search is implemented using a recursive traversal of neighboring cells:
1.The user “clicks” a cell (coordinates are passed).
2.We store the value of this cell.
3.We check all neighboring cells.
4.If a neighbor has the same value — we continue checking from that cell.
5.This way, a group of connected cells is formed.
6.After the search is complete — all cells in the group are removed (replaced with null).

### Project structure

click-to-remove/
├─ index.html
├─ src/
│ └─ game.js
└─ README.md

#### Classes description

Field

This class is responsible for:

storing the game board

accessing cells

updating cell values

printing the board to the console

Main methods:

getCell(row, col) — get the value of a cell

setCell(row, col, value) — change the value of a cell

print() — print the board to the console

Game

This class contains the game logic.

Main methods:

findGroup(row, col) — recursively finds all cells in the group

click(row, col) — performs a “click” on a cell and removes the found group

##### How to run the project

Clone or download the repository.

Open the project folder.

Open the index.html file in a browser.

Press F12 → open the Console tab.

In the console you will see:

the board before the click

the board after removing the group

simple test examples

###### Example

In game.js there is an example board:

A A B C | \_ _ B C
A B B C | _ B B C
D B A C | D B A C
D D A A | D D A A

After clicking on the cell (0,0), the whole connected group of A elements will be removed.

####### Tests

At the end of the file, there are simple tests that demonstrate how the algorithm works with different board configurations.
The test results can also be seen in the browser console.

######## Technologies used

- Pure JavaScript (ES6)
- OOP principles
- Two-dimensional arrays
- Recursion for traversing cells

######## Conclusion

A simple game model was implemented to demonstrate an algorithm for finding connected elements on a board and removing them.
The solution does not use any third-party libraries and shows the basic work with arrays, classes, and recursion in JavaScript.

---

Гра «Видали групу»

# Опис задачі

Маємо прямокутне ігрове поле, яке складається з комірок.
У кожній комірці знаходиться один ігровий елемент (літера або символ).

При виборі будь-якої клітинки з поля потрібно видалити:

- саму цю клітинку
- усі сусідні клітинки (вгору, вниз, ліво, право) з таким самим значенням, які утворюють з нею групу.

Завданням було реалізувати пошук такої групи та видалення її з поля, використовуючи JavaScript та принципи ООП, без сторонніх бібліотек.

## Ідея рішення

Поле представлено у вигляді двовимірного масиву.

Пошук групи реалізовано за допомогою рекурсивного обходу сусідніх клітинок:
1.Користувач «клікає» на клітинку (передаємо координати).
2.Запам’ятовуємо значення цієї клітинки.
3.Перевіряємо сусідні клітинки.
4.Якщо сусід має таке саме значення — продовжуємо перевірку вже від нього.
5.Так формується група клітинок.
6.Після завершення пошуку — всі клітинки цієї групи видаляються (замінюються на null).

### Структура проєкту

click-to-remove/
├─ index.html
├─ src/
│ └─ game.js
└─ README.md

#### Опис класів

Field

Клас відповідає за:

- зберігання ігрового поля
- доступ до клітинок
- зміну значень клітинок
- виведення поля в консоль

Основні методи:

- getCell(row, col) — отримати значення клітинки
- setCell(row, col, value) — змінити значення клітинки
- print() — вивести поле у консоль

Game

Клас містить ігрову логіку.

Основні методи:

- findGroup(row, col) — рекурсивно шукає всі клітинки групи
- click(row, col) — виконує «клік» по клітинці і видаляє знайдену групу

##### Як запустити проєкт

- Склонуйте або завантажте репозиторій.
- Відкрийте папку проєкту.
- Відкрийте файл index.html у браузері.
- Натисніть F12 → вкладка Console.

У консолі буде показано:

- поле до кліку
- поле після видалення групи
- приклади простих тестів

###### Приклад роботи

У файлі game.js є приклад поля:

A A B C | \_ _ B C
A B B C | _ B B C
D B A C | D B A C
D D A A | D D A A

Після кліку на клітинку (0,0) буде видалена вся група елементів A, які з’єднані між собою.

####### Тести

У кінці файлу додані прості тести, які показують роботу алгоритму на різних варіантах поля.
Результат тестів також можна побачити у консолі браузера.

######## Використані технології

- Чистий JavaScript (ES6)
- Принципи ООП
- Двовимірні масиви
- Рекурсія для обходу клітинок
