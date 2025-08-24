export class GouvernanteView {
  render() {
    const el = document.getElementById("root");
    if (el) {
      el.innerHTML = `
        <div class="box">
          <p>Gouvernante</p>
          <form>
            <div>
              <label>Insert a planning</label>
              <input type="file" name="planningGouvernante" id="f" accept=".pdf,.xlsx,.xls"/>
            </div>
          </form>
 
            <button class="btn btn-capture">DLL planning</button>
            <button class="btn btn-conso">Dll Conso</button>
        <div class="gourvernante" id="zoneToDll"></div>
        </div>`;
    }
  }

  renderGouvernante(data) {
    const el = document.querySelector(".gourvernante");
    if (el) {
      el.innerHTML = "";

      const title = document.createElement("h2");
      const date = new Date(data.date);

      title.innerHTML = `<span class="db-red">Planning</span> <span class="db-orange">Gourvernante</span> - ${date.toLocaleDateString('fr-FR')}`;

      const container = document.createElement("div");
      container.appendChild(title);
      const header = document.createElement("ul");
      header.className = "gourvernante__header";
      header.innerHTML = `
      <li>Check</li>
      <li>Type</li>
      <li>N°</li>
      <li>name</li>
      <li>Phone</li>
      <li>Nb clients</li>
      <li>Source</li>
      <li>Extra</li>
      `;
      container.appendChild(header);
      const fiche = document.createElement("ul");
      fiche.className = "gourvernante__fiches";
      const rooms = data.rooms;
      for (let i = 0; i < rooms.length; i++) {
        if (rooms[i].roomNum === 13) continue;
        const li = document.createElement("li");
        li.className = `${rooms[i].type === "" ? "virgin" : (rooms[i].type === "Checks-ins" ? "checksIn" : "surPlace")}`
        li.innerHTML = `
        <p class="check"></p>
        <p>${rooms[i].type}</p>
        <p>${rooms[i].roomNum === 15 ? "Appart" : rooms[i].roomNum === 14 ? '14 / 1-bis' : rooms[i].roomNum}</p>
        <p>${rooms[i].clientName}</p>
        <p>${rooms[i].clientPhone}</p>
        <p>${rooms[i].nbClient}</p>
        <p>${rooms[i].source}</p>
        <p>${rooms[i].extras}</p>
        `;
        fiche.appendChild(li);
      }
      container.appendChild(fiche);
      el.appendChild(container);
    }
  }

  renderConsomations() {
    const el = document.querySelector(".gourvernante");
    if (el) {
      el.innerHTML = "";

      const container = document.createElement("ul");
      container.className = "consoContainer";
      for (let i = 0; i < 15; i++) {
        const li = document.createElement("li");
        const room = document.createElement("p");
        if (i < 12) {
          room.textContent = i + 1;
        }
        if (i === 12) {
          continue;
        }
        if (i === 13) {
          room.textContent = `14`;
        }
        if (i === 14) {
          room.textContent = "App";
        }
        const conso = document.createElement("p");
        li.appendChild(room);
        li.appendChild(conso);
        container.appendChild(li);

      }
      el.appendChild(container);
    }
  }



}

