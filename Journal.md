Silent Disco Journal
Phase 1

I used setInterval() to make the lighting change automatically. I created a function called randomColor() that generates three random numbers for the red, green, and blue values. Each value is generated using Math.floor(Math.random() * 255), and the three values are combined into an RGB color string. I then used setInterval() to change the background color of both panels every 1.5 seconds.

Using a consistent interval is important because it makes the lighting changes happen at a predictable rate. If the interval were too short, the colors could change too quickly and be distracting. If it were too long, the lighting might not feel like an active disco environment.