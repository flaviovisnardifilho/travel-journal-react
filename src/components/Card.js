import React from 'react';
import { FaMapMarkerAlt } from 'react-icons/fa';

export function Card(props) {
  return (
    <section className="card">
      <img
        className="card--img"
        src={props.imageUrl}
        alt={props.title}
      />
      <div className="card--text">
        <p className="card--location">
          <FaMapMarkerAlt className="card--pin-icon" />
          {props.location}
          <a
            className="card--maps-link"
            target="_blank"
            href={`https://www.google.com/maps/place/${props.title} ${props.location}`}
            rel="noreferrer"
          >
            View on Google Maps
          </a>
        </p>
        <h1 className="card--title">{props.title}</h1>
        <p className="card--date">
          {props.startDate} - {props.endDate}
        </p>
        <p className="card--description">{props.description}</p>
      </div>

    </section>
  );
}
