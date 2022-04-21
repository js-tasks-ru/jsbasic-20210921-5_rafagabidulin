/**
 * Компонент, который реализует таблицу
 * с возможностью удаления строк
 *
 * Пример одного элемента, описывающего строку таблицы
 *
 *      {
     *          name: 'Ilia',
     *          age: 25,
     *          salary: '1000',
     *          city: 'Petrozavodsk'
     *      },
 *
 */
export default class UserTable {
  constructor(rows) {
    this.elem = document.createElement('table');

    this.elem.innerHTML = `
<<<<<<< HEAD
    <thead>
        <tr>
=======
      <thead>
          <tr>
>>>>>>> 33ad2ce198a1f238a1cebe5dde620569953ba9c7
            <td>Имя</td>
            <td>Возраст</td>
            <td>Зарплата</td>
            <td>Город</td>
            <td></td>
<<<<<<< HEAD
        </tr>
    </thead>
    `;
    let tableInner = rows.map(row => {
      let cellsWithData = Object.values(row)
      .map(value => `<td>${value}</td>`)
      .join('');
      
      return `
      <tr>
        ${cellsWithData}
        <td><button>X</td>
      </tr>
      `;
=======
          </tr>
      </thead>
    `;

    let tableInner = rows.map(row => {
      let cellsWithData = Object.values(row) // для каждого значения из объекта row
        .map(value => `<td>${value}</td>`) // обернуть его в <td>
        .join(''); // полученный массив <td>...</td> объединить в одну строку

      return `
          <tr>
            ${cellsWithData}
            <td><button>X</button></td>
          </tr>
        `; // возвращаем верстку одной строки
>>>>>>> 33ad2ce198a1f238a1cebe5dde620569953ba9c7
    }).join('');

    this.elem.innerHTML += `
      <tbody>
        ${tableInner}
<<<<<<< HEAD
      </body>
    `;

    this.elem.addEventListener('click', (event) => this.onClick(event));
  }

  onClick(event) {
    if (event.target.tagName != 'BUTTON') {
      return;
    }

    let tr = event.target.closest('tr');

    tr.remove();
=======
      <tbody>
    `; // оборачиваем полученные строчки в tbody

    this.elem.addEventListener('click', (event) => this.onClick(event));
>>>>>>> 33ad2ce198a1f238a1cebe5dde620569953ba9c7
  }

  onClick(event) {
    if (event.target.tagName != 'BUTTON') {
      return;
    }

    let tr = event.target.closest('tr');

    tr.remove();
  }

}
    


