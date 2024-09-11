let btns = document.querySelectorAll('button');
    function insertAtPosition(arr, index, item) {
      let newarr = []
      let i = 0;
      while (i < index) {
        newarr.push(arr[i])
        i++;
      }

      newarr.push(item);

      while (i < arr.length) {
        newarr.push(arr[i])
        i++;
      }

      return newarr;
    }


    let totalColor = ['aqua', 'teal', 'goldenrod', 'violet', 'brown']
    displayColors()

    function displayColors() {

      document.body.innerHTML = '';
      let i=0;

      totalColor.forEach(color => {

        document.body.innerHTML += `
        
        <div style="background-color: ${color}">
          <button class="a-${i}">+</button>
          <button class="c-${i}">&copy;</button>
          </div>
          
          `
          i++;

      })


      document.body.style.gridTemplateColumns = `repeat(${totalColor.length}, 1fr)`
      btns = document.querySelectorAll('button');

    }


    document.body.addEventListener('click', (e) => {
      if(e.target.matches('button')) {

        const cl = e.target.getAttribute('class');
        if(cl[0] == 'a') {
          let id = Number(cl.split('-')[1])
          let newcolor = `rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)})`;
          totalColor = insertAtPosition(totalColor, id, newcolor)
        }
        else {
          let id = Number(cl.split('-')[1])
          console.log(totalColor[id])
          navigator.clipboard.writeText(totalColor[id]).then(() => alert('copied'))
        }
        
      }
      else {

      // e.target.remove()
      // console.log((e.target.querySelector('button').getAttribute('class').split('-')[1]));
       totalColor.splice(e.target.querySelector('button').getAttribute('class').split('-')[1], 1);
      }

      displayColors()
    })