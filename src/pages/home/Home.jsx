import { useEffect, useState } from "react";
import Menu from "../../global/menu/Menu";
import './cards.css'
import { GET_ALL_EVENTS } from "../../services/eventsServices";

function Home() {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    const getAllEvents = async () => {
      try {
        const fetchedEvents = await GET_ALL_EVENTS();
        setEvents(fetchedEvents);
      } catch (error) {
        console.error("Error fetching events:", error);
      }
    };

    getAllEvents();
  }, []);

  const clickEnvent = (card) => {
    alert(`Click en card numero ${card}`)
  }
  return (
    <>
      <Menu />
      <div>Este es el contenido del Home</div>

      <span>Algunos eventos</span>

      <div className="contenedor_eventos">
        {events.length > 0 ? (
          events.map((event, index) => (
            <div key={index} className="card" onClick={()=>{clickEnvent(index + 1)}}>
              <div className="card-body">
                <div className="cont-img">
                  <img
                    src={event.cover || "placeholder.jpg"}
                    alt={event.name || "Evento sin nombre"}
                    className="img"
                  />
                </div>
                <h5 className="card-title">{event.name}</h5>
                <p className="card-text">{event.descripcion}</p>
              </div>
            </div>
          ))
        ) : (
          <p>No hay eventos disponibles.</p>
        )}
      </div>
    </>
  );
}

export default Home;
