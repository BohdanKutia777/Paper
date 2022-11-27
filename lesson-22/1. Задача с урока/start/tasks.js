const tasks = [
  { text: 'Buy milk', done: false },
  { text: 'Pick up Tom from airport', done: false },
  { text: 'Visit party', done: false },
  { text: 'Visit doctor', done: true },
  { text: 'Buy meat', done: true },
];
const listElem = document.querySelector('.list');
const renderListIteams = listIteams => {

  const listIteamsElems = listIteams
  .sort((a,b) => a.done - b.done)
  .map(({text, done}) => {
    
      const listItemElem = document.createElement('li');
      listItemElem.classList.add('list__item');

      if (done) {
        listItemElem.classList.add('list__item_done');
      }

      const chekboxElem = document.createElement('input');
      chekboxElem.setAttribute('type','checkbox');
      chekboxElem.checked = done;
      chekboxElem.classList.add('list__item-checkbox');
      listItemElem.append(chekboxElem, text);

      return listItemElem;
  });
  console.log(Array.from(listIteamsElems));
  listElem.append(Array.from(listIteamsElems));

};


renderListIteams(tasks);