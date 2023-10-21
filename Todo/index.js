async function init() {
    try {
      let res = await fetch(`https://jsonplaceholder.typicode.com/todos`);
      let data = await res.json();
      let tableData = data.map((value) => {
        return `<tr>
                  <td>${value.id}</td>
                  <td>${value.title}</td>
                  <td>${value.completed}</td>
                  <td>${value.userId}</td>
              </tr>`;
      }).join('');
      const tableBody = document.querySelector("#tableBody");
      tableBody.innerHTML = tableData;
    } catch (error) {
      console.log(error);
    }
  }
  
  init();
  