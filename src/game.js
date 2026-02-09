class Field {
  constructor(board) {
    this.grid = board;
    this.rows = board.length;
    this.cols = board[0].length;
  }

  getCell(row, col) {
    if (row < 0 || col < 0 || row >= this.rows || col >= this.cols) return null;
    return this.grid[row][col];
  }

  setCell(row, col, x) {
    this.grid[row][col] = x;
  }

  print() {
    console.table(this.grid);
  }
}

class Game {
  constructor(field) {
    this.field = field;
  }

  findGroup(row, col, group = []) {
    const object = this.field.getCell(row, col);
    if (!object) return group;

    if (group.some(([r, c]) => r === row && c === col)) return group;

    group.push([row, col]);

    const beside = [
      [row - 1, col],
      [row + 1, col],
      [row, col - 1],
      [row, col + 1],
    ];

    for (const [r, c] of beside) {
      if (this.field.getCell(r, c) === object) {
        this.findGroup(r, c, group);
      }
    }
    return group;
  }

  click(row, col) {
    const group = this.findGroup(row, col);
    if (!group.length) return;

    group.forEach(([row, col]) => this.field.setCell(row, col, null));
  }
}

const board = [
  ["A", "A", "B", "C"],
  ["A", "B", "B", "C"],
  ["D", "B", "A", "C"],
  ["D", "D", "A", "A"],
];

const field = new Field(board);
const game = new Game(field);

console.log("Перед кліком:");
field.print();

game.click(0, 0);

console.log("Після кліку:");
field.print();

function test(name, fieldArray, clickRow, clickCol) {
  const field = new Field(fieldArray.map((row) => [...row]));
  const game = new Game(field);

  console.log(`Тест: ${name}`);
  console.log("Перед кліком:");
  field.print();

  game.click(clickRow, clickCol);

  console.log("Після кліку:");
  field.print();
}

test(
  "Видалити групу A",
  [
    ["A", "A", "B"],
    ["A", "B", "B"],
    ["C", "C", "B"],
  ],
  0,
  0,
);

test(
  "Видалити D",
  [
    ["A", "B"],
    ["C", "D"],
  ],
  1,
  1,
);

test(
  "Клік по порожній клітинці",
  [
    [null, "A"],
    ["A", "A"],
  ],
  0,
  0,
);
