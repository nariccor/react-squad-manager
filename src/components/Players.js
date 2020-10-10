import React from "react";
import { connect } from "react-redux";

const Players = ({ players, addTitular, addSubstitute }) => (
  <section>
    <h2 className="subtitle is-2 has-text-centered">Select Players</h2>
    <div className="players-container carousel" id="carousel">
      {players.map((p) => (
        <article className="player" key={p.id}>
          <img src={p.photo} alt={p.name} />
          <h3>{p.name}</h3>
          <div>
            <button onClick={()=> addTitular(p)}> Titular</button>
            <button onClick={()=> addSubstitute(p)}>Substitute</button>
          </div>
        </article>
      ))}
    </div>
  </section>
);



const mapStateToProps = state => ({
  players: state.players,
});

const mapDispatchToProps = dispatch => ({
  addTitular(player) {
    dispatch({
      type:"ADD_TITULAR",
      player
    })
  },
  addSubstitute(player) {
    dispatch({
      type:"ADD_SUBSTITUTE",
      player
    })
  }

});

export default connect(mapStateToProps, mapDispatchToProps)(Players);
