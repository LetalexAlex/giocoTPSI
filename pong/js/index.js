const app = new PIXI.Application();
await app.init({ width: document.width, height: document.height });

document.body.appendChild(app.canvas);

await PIXI.Assets.load('../assets/arts/Computer.png');
let p1 = PIXI.sprite.from('../assets/arts/Computer.png');
app.stage.addChild(p1);

let elapsed = 0.0;

app.ticker.add((ticker) => {
    elapsed += ticker.deltaTime;
    p1.y = 100.0 + Math.cos(elapsed/50.0) * 100.0;
})
