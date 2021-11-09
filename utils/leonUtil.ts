const pixelRatio:number = 2;
let isDown:boolean = false, moveX:number = 0, moveY:number = 0, offsetX:number = 0, offsetY:number = 0;
let canvas: any, ctx: any;
let renderer: any, stage : any;
let sw = document.body.clientWidth;
let sh = document.body.clientHeight;

const generateCanvas = () =>{
    canvas = document.createElement('canvas');
    canvas.setAttribute("id","leonCanvas");
    document.body.appendChild(canvas);
    ctx = canvas.getContext("2d");

    window.addEventListener('resize', canvasResize, false);
    canvasResize();

    moveEvent(canvas);
}

const canvasResize = () => {
    sw = document.body.clientWidth;
    sh = document.body.clientHeight;

    canvas.width = sw * pixelRatio;
    canvas.height = sh * pixelRatio;
    canvas.style.width = sw + 'px';
    canvas.style.height = sh + 'px';
    ctx.scale(pixelRatio, pixelRatio);
}

const generatePixi = (bgcolor: any) => {
    renderer = new window.PIXI.Renderer({
        width: sw,
        height: sh,
        antialias: true,
        transparent: false,
        autoDensity: true,
        resolution: pixelRatio,//window.devicePixelRatio > 1 ? 2 : 1,
        powerPreference: "high-performance",
        backgroundColor: bgcolor
    });
    document.body.appendChild(renderer.view);
    stage = new window.PIXI.Container();

    window.addEventListener('resize', pixiResize, false);
    pixiResize();

    moveEvent(renderer.view);
}

const pixiResize = () => {
    sw = document.body.clientWidth;
    sh = document.body.clientHeight;

    renderer.resize(sw, sh);
}

const moveEvent = (canvas: any) => {
    const hammer = new window.Hammer(canvas);
    hammer.add(new window.Hammer.Pan({direction: window.Hammer.DIRECTION_ALL, threshold: 0}));
    hammer.on("pan", (e: any) => {                
        moveX = e.deltaX + offsetX;
        moveY = e.deltaY + offsetY;
        if (e.isFinal) {
            offsetX = moveX;
            offsetY = moveY;
        }
    });
}

const getSize = (size:number) =>{
    let ratio = Math.sqrt(sw * sw + sh * sh) / 1800;
    //console.log(`sh : ${sh} // sw: ${sw}`);
    if (ratio > 1) ratio = 1;
    else if (ratio < 0.5) ratio = 0.5;    
    return size * ratio;
}

export {getSize, moveEvent, pixiResize, generatePixi, canvasResize, generateCanvas, sw, sh, canvas, ctx, renderer, stage };
