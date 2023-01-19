import React, { useEffect } from "react";
import { useState } from "react";
import childrenService from "../services/childrenApi";
import eventsService from "../services/eventsApi";

const Context = React.createContext(null);

export default Context;

const ProviderWrapper = (props) => {
  const [childrens, setChildrens] = useState([]);
  const [events, setEvents] = useState([]);

  const initialLoadChild = () => {
    childrenService.retrieveAll().then((reponse) => {
      setChildrens(reponse.data);
    });
  };

  const initialLoadEvent = () => {
    eventsService.retrieveAll().then((reponse) => {
      setEvents(reponse.data);
    });
  };

  const getChildWithEvents = (id) => {
    let children;
    let eventList;
    childrenService.find(id).then((reponse) => {
      children = reponse.data;
      eventsService.retrieveAll().then((reponse) => {
        eventList = reponse.data;
        const event = eventList.filter((e) => e.child === id);
        const child = {
          name: children.name,
          birthDate: children.birthDate,
          gender: children.gender,
          events: [],
        };

        event.map((e) => {
          let eventAdd = {
            date: e.date,
            name: e.name,
          };
          child.events.push(eventAdd);
        });
        console.log("hello");
        return child;
      });
    });
  };

  useEffect(initialLoadChild, []);
  useEffect(initialLoadEvent, []);

  const exposedValue = {
    childrens,
    events,
    initialLoadChild,
    initialLoadEvent,
    getChildWithEvents,
  };

  return (
    <Context.Provider value={exposedValue}>{props.children}</Context.Provider>
  );
};

export { Context, ProviderWrapper };
