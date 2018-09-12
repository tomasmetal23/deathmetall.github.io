<!DOCTYPE html>
<html>
<meta charset="utf-8" />
<head>
<title>Banano</title>
<link rel="stylesheet" type="text/css" href="index.css">
</head>
<body onload="onLoad();">
  <div id="banano"></div>
  <ol>
    <li><img class="small_image" src="https://i.imgur.com/tQwwFx2.jpg" /></li>
  </ol>
  <table>
    <tr>
      <th>Id</th>
      <th>Name</th>
    </tr>
    <tr>
      <td>1</td>
      <td>deathmetall</td>
    </tr>
    <tr>
      <td>2</td>
      <td>tomasmetal23</td>
    </tr>
  </table>
  <script>
      const addChildText = (parent,childText) => {
        const node = document.createTextNode(childText);
        parent.appendChild(node);
        return node;
      }
  
      const addChildElement = (parent,childType,childText) => {
        const child = document.createElement(childType);
        parent.appendChild(child);
        if(childText !== undefined) {
          child.appendChild(document.createTextNode(childText));
        }
        return child;
      }
  
	  const loadJson = () => {
        const xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function () {
          if (this.readyState == 4 && this.status == 200) {
            loadJsonCallback(this.response);
          }
        }
        xhttp.responseType = 'json';
        xhttp.open('GET', 'index.json', true);
        xhttp.send();
      }
      const loadJsonCallback = (json) => {
        const banano = document.getElementById('banano');
        
        addChildText(banano, 'Deathmetall Bananos');
        const table = addChildElement(banano,'table');
        
        const tableHeaderRow = addChildElement(table,'tr');
        if(json.length == 0) {
          return;
        }
        
        for (const [key, value] of Object.entries(json[0])) {
          addChildElement(tableHeaderRow,'th',key);
        }
        
        json.forEach((jsonElt,jsonEltIx) => {
          const tableDataRow = addChildElement(table,'tr');
          for (const [key, value] of Object.entries(jsonElt)) {
            addChildElement(tableDataRow,'td',value);
          }
        });
      }
      const onLoad = () => {
        loadJson();
      }
    </script>
</body>
</html>

.small_image {
  height: 100px;
  width: 100px;
}

table, tr, td, th {
  border: solid;
  border-width: 0.5px;
  font-family: monospace;
}


.text_align_center{
  text-align: center;
}

.w100pct {
  width: 100%;
}

.w99pct {
  width: 99%;
}

.w96pct {
  width: 96%;
}

.w600px {
  width: 600px;
}

.selected_button {
  box-shadow: 0px -2px #999;
}

.unselected_button {
  box-shadow: 0 0px #999;
}

.button {
  padding: 3px 3px;
  margin: 3px 3px;
  font-size: 12px;
  text-align: center;
  cursor: pointer;
  outline: none;
  color: #000;
  background-color: #EEE;
  border: solid;
  border-width: 0.5px;
  border-radius: 5px;
  border-color: #AAA;
}

.button:hover {
  background-color: #DDD;
  box-shadow: 0px 2px #999;
}

.button:active {
  background-color: #EEE;
  box-shadow: 0 1px #666;
  transform: translateY(2px);
}