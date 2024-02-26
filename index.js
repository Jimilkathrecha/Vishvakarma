
  const insertAfter = (el, htmlString) =>
    el.insertAdjacentHTML('afterend', htmlString);

  insertAfter(document.getElementById('root'), '<!-- Created By Jimil Kathrecha -->');
