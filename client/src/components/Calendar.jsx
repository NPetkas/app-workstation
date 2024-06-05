import React from "react";

const Calendar = () => {
    return (

// how could i fix the style attribute for a jsx file?

<iframe src="https://calendar.google.com/calendar/embed?height=500&wkst=1&ctz=America%2FLos_Angeles&bgcolor=%23039BE5&src=ZW4udXNhI2hvbGlkYXlAZ3JvdXAudi5jYWxlbmRhci5nb29nbGUuY29t&color=%230B8043" 
style={{border: '2px solid black',
borderRadius: '5px',
boxShadow: '0 2px 8px 1px black'
}}
width="600" height="500" 
frameborder="0" 
scrolling="no"
allowFullScreen=""
loading="lazy"
></iframe>
  );
};

export default Calendar;