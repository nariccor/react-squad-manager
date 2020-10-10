import React from 'react';

import { connect } from "react-redux";

const Substitutes = ({substitutes, removeSubstitute}) => (
    <section>
        <h2 className="subtitle is-3 has-text-centered">Substitutes Bench</h2>
        <div className="substitutes carousel">
            {substitutes.map(t => (
                    <article className="substitute" key={t.id}>
                            <img src={t.photo} alt={t.name} />
                            <h3 className="has-text-centered">{t.name}</h3>
                            <button onClick={()=>removeSubstitute(t)}>Remove</button>
                    </article>
                ))
            }
        </div>
    </section>
)

const mapStateToProps = (state) => ({
    substitutes: state.substitutes,
  });
  
  
const mapDispatchToProps = (dispatch) => ({
    removeSubstitute(player){
        dispatch({
            type: 'REMOVE_SUBSTITUTE',
            player
        })
    }
});
  
export default connect(mapStateToProps, mapDispatchToProps)(Substitutes)