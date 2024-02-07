import styles from "./page.module.css";
const Equipos = ({ equipos }) => {
  return (
    <div className={styles.container__list}>
    <h2 className={styles.title}>Equipos de Fútbol</h2>

      {equipos.map((equipo) => (
        <div key={equipo.id}>
          <h3 className={styles.nameclub}>{equipo.nombre}</h3>
          <ul >

            {equipo.plantilla.map((jugador) => (
              <li className={styles.container__list} key={jugador.id}> <img src={jugador.imagen} className={styles.playerImage}/>
              <strong>{jugador.nombre}</strong>
              <p>Altura: {jugador.Altura}m <br></br> Peso:{jugador.Peso}Kg</p>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default function Home() {
  // Simula la obtención de datos desde tu JSON
const equiposData = [
  {"id": 1,
  "nombre": "Real Madrid",
  "plantilla":[
  {"id": 1,"imagen":"https://phantom-marca-mx.unidadeditorial.es/df664815ec965603571f9a5cf0a1f195/resize/828/f/jpg/mx/assets/multimedia/imagenes/2024/02/03/17069586953729.jpg", "nombre":"Eden Hazard","Altura":"1.75","Peso":"74Kg"},
  {"id": 2,"imagen":"https://s.hs-data.com/bilder/spieler/gross/600867.jpg","nombre":"Gonzalo García","Altura":"1.82","Peso":"74Kg"},
  {"id": 3,"imagen":"https://upload.wikimedia.org/wikipedia/commons/thumb/e/ec/Karim_Benzema_wearing_Real_Madrid_home_kit_2021-2022.jpg/1200px-Karim_Benzema_wearing_Real_Madrid_home_kit_2021-2022.jpg", "nombre":"Karim Benzema","Altura":"1.85","Peso":"81Kg"}
  ]},
  {"id": 2,
  "nombre": "Barcelona",
  "plantilla":[
  {"id": 1, "imagen":"https://s.hs-data.com/bilder/spieler/gross/150720.jpg","nombre":"Marc-André ter Stegen","Altura":"1.75","Peso":"74Kg"},
  {"id": 2,"imagen":"https://cdn.vox-cdn.com/thumbor/kyjvmBK9Mk_12BdVpIo2f4IFYX8=/0x0:2357x1571/1200x800/filters:focal(984x110:1360x486)/cdn.vox-cdn.com/uploads/chorus_image/image/73032733/1793442924.0.jpg","nombre":"Iñigo Martinez","Altura":"1.82","Peso":"74Kg"},
  {"id": 3,"imagen":"https://s.hs-data.com/bilder/spieler/gross/511270.jpg","nombre":"Gavi","Altura":"1.85","Peso":"81Kg"}
  ]},
  {"id": 3,
  "nombre": "Atletico de Madrid",
  "plantilla":[
  {"id": 1,"imagen":"https://upload.wikimedia.org/wikipedia/commons/thumb/a/a1/Jan_Oblak_2019.jpg/800px-Jan_Oblak_2019.jpg","nombre":"Jan Oblack","Altura":"1.75","Peso":"74Kg"},
  {"id": 2,"imagen":"https://s.hs-data.com/bilder/spieler/gross/153546.jpg","nombre":"Antoine Griezmann","Altura":"1.82","Peso":"74Kg"},
  {"id": 3,"imagen":"https://www.diez.hn/binrepository/fmx77xxwiaenw8_3491166_20230118141235.jpg","nombre":"Memphis Depay","Altura":"1.85","Peso":"81Kg"}
  ]}
  ];
  return (
  <main className={styles.main}>
  <div>
  <h1>Mi Aplicación de Fútbol</h1>
  <Equipos equipos={equiposData} />
  </div>
  </main>
  );
  }