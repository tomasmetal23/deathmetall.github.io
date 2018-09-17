const hide = (id) => {
  document.getElementById(id).style = 'display:none;';
}

const show = (id) => {
  document.getElementById(id).style = 'display:block;';
}

const html = (id,html) => {
  const elt = document.getElementById(id);
  if(html !== undefined) {
    elt.innerHTML = html;
  }
  return elt.innerHTML;
}

const class_attr = (id,cl) => {
  const elt = document.getElementById(id);
  if(cl !== undefined) {
    elt.className = cl;
  }
  return elt.className;
}

const value = (id,value) => {
  const elt = document.getElementById(id);
  if(value !== undefined) {
    elt.value = value;
  }
  return elt.value;
}

const xlink_href = (id,value) => {
  const elt = document.getElementById(id);
  if(elt == null) {
    return null;
  }
  // console.log('xlink_href',id,value,elt);
  if(value !== null) {
    elt.setAttribute('xlink:href',value);
  }
  return elt.getAttribute('xlink:href');
}

// fill in the URL parameters into the form.
const fillInUrlParameters = () => {
  const url = new URL(window.location.href);
  url.searchParams.forEach((value,name) => {
    // console.log('nv',name,value);
  const fields = document.getElementsByName(name);
  fields.forEach((field) => {
    // console.log('set',field.name,field.id,value);
      field.value = value;
    });
  });
}


const addChildElement = (parent,childType,childText) => {
  const child = document.createElement(childType);
  parent.appendChild(child);
  if(childText !== undefined) {
    if(childText instanceof HTMLImageElement) {
      child.appendChild(childText);
    } else {
      child.appendChild(document.createTextNode(childText));
    }
  }
  return child;
}

const createTable = (id,json) => {
  const banano = document.getElementById(id);
  
  const table = addChildElement(banano,'table');
  table.className = 'cb w100pct';
  
  const tableHeaderRow = addChildElement(table,'tr');
  tableHeaderRow.className = 'cb';

  if(json.length == 0) {
    return;
  }
  
  for (const [key, value] of Object.entries(json[0])) {
    const tableDataHeader = addChildElement(tableHeaderRow,'th',key);
    tableDataHeader.className = 'cb';
  }
  
  json.forEach((jsonElt,jsonEltIx) => {
    const tableDataRow = addChildElement(table,'tr');
    tableDataRow.className = 'cb';
    for (const [key, value] of Object.entries(jsonElt)) {
      const tableDataCell = addChildElement(tableDataRow,'td',value);
      tableDataCell.className = 'cb';
    }
  });
}

const loadJson = (url,callback) => {
  const xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      callback(this.response);
    }
  }
  xhttp.responseType = 'json';
  xhttp.open('GET', url, true);
  xhttp.send();
}
