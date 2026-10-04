Silent Disco Journal

Phase 1

I used setInterval() to make the lighting change automatically. I created a function called randomColor() that generates three random numbers for the red, green, and blue values. Each value is generated using Math.floor(Math.random() * 255), and the three values are combined into an RGB color string. I then used setInterval() to change the background color of both panels every 1.5 seconds.
Using a consistent interval is important because it makes the lighting changes happen at a predictable rate. If the interval were too short, the colors could change too quickly and be distracting. If it were too long, the lighting might not feel like an active disco environment.

Phase 2

Event bubbling is when an event that occurs on an element can also travel upward through its parent elements. Since the Dancer is inside the Dance Floor, clicking the Dancer could also trigger the Dance Floor's click event. I used event.stopPropagation() inside the Dancer's click listener to stop the event from continuing to the Dance Floor. This allows the Dancer to have its own interaction without accidentally triggering the Floor's interaction.

Phase 3

A global window keyboard listener is more effective for keyboard shortcuts because it can detect key presses regardless of which part of the page currently has focus. This makes the arrow keys and the reset shortcut easier to use without requiring the user to click on a specific element first.
One challenge with held-down keys is that the browser can generate repeated keydown events while the key is being held. This could cause the dancer's action to happen repeatedly and very quickly. For a simple assignment like this, allowing the browser's normal keyboard behavior is acceptable, but a more advanced program could track whether a key is already being held or use additional keyboard events to manage that behavior.