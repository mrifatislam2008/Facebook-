async function create(){
  let name = document.getElementById("name").value;
  let code = document.getElementById("code").value;

  await fetch("/api/create", {
    method:"POST",
    headers:{ "Content-Type":"application/json" },
    body: JSON.stringify({ name, code })
  });

  load();
}

async function load(){
  let res = await fetch("/api/sites");
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

async function toggle(name){
  await fetch("/api/toggle", {
    method:"POST",
    headers:{ "Content-Type":"application/json" },
    body: JSON.stringify({ name })
  });

  load();
}

async function del(name){
  await fetch("/api/delete", {
    method:"POST",
    headers:{ "Content-Type":"application/json" },
    body: JSON.stringify({ name })
  });

  load();
}

load();
