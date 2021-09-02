import React from "react";

import { video } from "./styles.module.css";

/**
 * Component for embedding YouTube videos
 * 
 * @param props
 * @param props.id The ID of the video on YouTube
 * @param props.aspect Optionally specify the video aspect ratio in terms of
 *          width divided by height. Default is `16 / 9`
 */
export function YouTube({ id, aspect = 16 / 9 }) {
  return (
    <figure className={video} style={{ paddingBottom: `${100/aspect}%` }}>
      <iframe
        src={`https://www.youtube.com/embed/${id}`}
        frameBorder="0"
        allowFullScreen
        width="100%"
      />
    </figure>
  );
}