import React from "react";
import { connect } from "react-redux";
import field from "../soccer-field.svg";
import jersey from "../jersey.svg";


const Titulars = ({ titulars, removeTitular }) => (
  <section>
    <h2 className="subtitle is-3 has-text-centered">Titulars</h2>
    <div className="field">
      {titulars.map((t) => (
        <article className="titular" key={t.id}>
          <div>
            <img src={jersey} alt={t.name} />

            <button onClick={() => removeTitular(t)}>X</button>
          </div>
          <p>{t.name}</p>
        </article>
      ))}
      <img src={field} alt="soccer field" />
    </div>
  </section>
);

const mapStateToProps = (state) => ({
  titulars: state.titulars,
});

const mapDispatchToProps = (dispatch) => ({
  removeTitular(player) {
    dispatch({
      type: "REMOVE_TITULAR",
      player,
    });
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Titulars);
