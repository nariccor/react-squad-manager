import { createStore } from "redux";

const initialState = {
  players: [
    {
      id: 1,
      name: "Erling Haaland",
      photo:  "https://api.statorium.com/media/bearleague/bl15544573321057.png",
    },
    {
      id: 2,
      name: "Lionel Messi",
      photo: "https://www.placecage.com/80/80",
    },
    {
      id: 3,
      name: "Thomas Müller",
      photo:"https://www.placecage.com/80/80"
    },
    {
      id: 4,
      name: "Edison Cavanni",
      photo:"https://www.placecage.com/80/80"
    },    
    {
      id: 5,
      name: "Marco Verrati",
      photo:"https://www.placecage.com/80/80"
    },
    {
      id: 6,
      name: "D. Calvert-Lewin",
      photo:"https://www.statorium.com/media/bearleague/bl1581673516471.png"
    },
    {
      id: 7,
      name: "Alexandre Lacazette",
      photo:"https://www.statorium.com/media/bearleague/bl15816735322887.png"
    },
    {
      id: 8,
      name: "Mohamed Salah",
      photo:"https://www.statorium.com/media/bearleague/bl1581673500905.png"
    },
    {
      id: 9,
      name: "Marco Verrati",
      photo:"https://www.placecage.com/80/80"
    },
    {
      id: 10,
      name: "Marco Verrati",
      photo:"https://www.placecage.com/80/80"
    },
    {
      id: 11,
      name: "Marco Verrati",
      photo:"https://www.placecage.com/80/80"
    },
  ],
  titulars: [],
  substitutes: [],
};

const reducerCoach = (state = initialState, action) => {

  if(action.type === 'ADD_TITULAR'){
    return {
      ...state,
      titulars: state.titulars.concat(action.player),
      players: state.players.filter(p =>p.id !==action.player.id)
    }
  }

  if(action.type ==='ADD_SUBSTITUTE'){
    return {
      ...state,
      substitutes: state.substitutes.concat(action.player),
      players: state.players.filter(p => p.id !== action.player.id)
    }
  }

  if(action.type ==='REMOVE_TITULAR'){
    return {
      ...state,
      titulars: state.titulars.filter(p=> p.id !== action.player.id),
      players: state.players.concat(action.player) 
    }
  }

  if(action.type ==='REMOVE_SUBSTITUTE'){
    return {
      ...state,
      substitutes: state.substitutes.filter(p=> p.id !== action.player.id),
      players: state.players.concat(action.player) 
    }
  }

  return state;
};

export default createStore(reducerCoach);
