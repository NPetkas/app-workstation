import React from "react";

const Calendar = () => {
    return (

// how could i fix the style attribute for a jsx file?

<iframe src="https://calendar.google.com/calendar/embed?height=500&wkst=1&ctz=America%2FLos_Angeles&bgcolor=%23039BE5&src=ZW4udXNhI2hvbGlkYXlAZ3JvdXAudi5jYWxlbmRhci5nb29nbGUuY29t&color=%230B8043" 
style={{border: '1px solid black',
borderRadius: '5px',
boxShadow: '2px 3px 5px #000000'
}}
width="950
" height="400" 
frameborder="0" 
scrolling="no"
allowFullScreen=""
loading="lazy"
></iframe>
  );
};

export default Calendar;