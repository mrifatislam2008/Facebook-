let token = localStorage.getItem("token");

// CREATE
async function create(){
  let name = document.getElementById("name").value;
  let code = document.getElementById("code").value;

  await fetch("/api/create", {
    method:"POST",
    headers:{
      "Content-Type":"application/json",
      "Authorization": token
    },
    body: JSON.stringify({ name, code })
  });

  load();
}

// LOAD
async function load(){
  let res = await fetch("/api/sites", {
    headers:{
      "Authorization": token
    }
  });

  let data = await res.json();

  let html = "";

  for(let s in data){
    html += `
      <div>
        <b>${s}</b> (${data[s].status})
        <button onclick="toggle('${s}')">Toggle</button>
        <button onclick="del('${s}')">Delete</button>
      </div>
    `;
  }

  document.getElementById("list").innerHTML = html;
}

// TOGGLE
async function toggle(name){
  await fetch("/api/toggle", {
    method:"POST",
    headers:{
      "Content-Type":"application/json",
      "Authorization": token
    },
    body: JSON.stringify({ name })
  });

  load();
}

// DELETE
async function del(name){
  await fetch("/api/delete", {
    method:"POST",
    headers:{
      "Content-Type":"application/json",
      "Authorization": token
    },
    body: JSON.stringify({ name })
  });

  load();
}

// FIRST LOAD
load();
