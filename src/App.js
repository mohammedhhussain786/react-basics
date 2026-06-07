import React from "react";

const firstName = "Mohammed"; const lastName = "Sohel";
const greeting = `Hello, ${firstName} ${lastName}!`;

export default function App() { return (
 
<div>
<h1>{greeting}</h1>
<p>{`Your name has ${firstName.length + lastName.length}
characters.`}</p>
<p>{`Today's date is: ${new
Date().toLocaleDateString("en-GB")}`}</p>
</div>
);
}
