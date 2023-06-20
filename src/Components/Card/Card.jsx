import React from 'react'
import "./Card.css"
import {X} from 'react-feather'

function Card(props) {
  return (
    <div className="card"  

    >
      <div className="card_top">
        <div className="card_top_labels card_title">
          {props.card?.title}
        </div>
        <X onClick={()=>props.removeCard(props.card.id, props.boardId)}></X>
      </div>

      <div className="card_footer">
        {
          <p>
            {props.card?.desc}
          </p>
        }
      </div>
    </div>
  )
}

export default Card