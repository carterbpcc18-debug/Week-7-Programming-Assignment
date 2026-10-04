Silent Disco Journal

Phase 1

I used setInterval() to make the lighting change automatically. I created a function called randomColor() that generates three random numbers for the red, green, and blue values. Each value is generated using Math.floor(Math.random() * 255), and the three values are combined into an RGB color string. I then used setInterval() to change the background color of both panels every 1.5 seconds.
Using a consistent interval is important because it makes the lighting changes happen at a predictable rate. If the interval were too short, the colors could change too quickly and be distracting. If it were too long, the lighting might not feel like an active disco environment.

Phase 2

Event bubbling is when an event that occurs on an element can also travel upward through its parent elements. Since the Dancer is inside the Dance Floor, clicking the Dancer could also trigger the Dance Floor's click event. I used event.stopPropagation() inside the Dancer's click listener to stop the event from continuing to the Dance Floor. This allows the Dancer to have its own interaction without accidentally triggering the Floor's interaction.