<template>
    <body ontouchstart="">
        <button class="glass">
            <span class="text">Glass Button</span>
        </button>

        <button class="flannel">
            <span class="text">Flannel Button</span>
        </button>

        <button class="metal">
            <span class="text">Metal Button</span>
        </button>
    </body>
</template>

<style scoped>
template, body {
	 height: 100%;
	 min-height: 100%;
	 margin: 0;
	 padding: 0;
}
 body {
	 display: flex;
	 flex-wrap: wrap;
	 align-content: center;
	 justify-content: center;
	 background-size: cover;
}
 body button {
	 margin: 10px;
	 padding: 20px 30px;
	 border: none;
	 background: none;
	 border-radius: 5px;
	 font-size: 18px;
	 cursor: pointer;
	 overflow: hidden;
}
 body button .text {
	 position: relative;
	 z-index: 2;
	 display: block;
}
 body button:before, body button:after {
	 position: relative;
	 z-index: 1;
}
 body button:active {
	 transform: translateY(1px);
}
 body button:active .text {
	 transform: scale(0.95);
}
 body button.glass {
	 overflow: hidden;
	 color: white;
	 text-shadow: 0 1px 2px rgba(0, 0, 0, 0.7);
	 background-image: radial-gradient(circle at center, rgba(0, 167, 225, 0.25), rgba(0, 110, 149, 0.5));
	 box-shadow: 0 5px 10px rgba(0, 0, 0, 0.75), inset 0 0 0 2px rgba(0, 0, 0, 0.3), inset 0 -6px 6px -3px rgba(0, 129, 174, 0.2);
	 position: relative;
}
 body button.glass:after {
	 content: '';
	 background: rgba(0, 167, 225, 0.2);
	 display: block;
	 position: absolute;
	 z-index: 0;
	 height: 100%;
	 width: 100%;
	 top: 0;
	 left: 0;
	 backdrop-filter: blur(3px) saturate(400%);
	 -webkit-backdrop-filter: blur(3px) saturate(400%);
}
 body button.glass:before {
	 content: '';
	 display: block;
	 position: absolute;
	 width: calc(100% - 4px);
	 height: 35px;
	 background-image: linear-gradient(rgba(255, 255, 255, 0.7), rgba(255, 255, 255, 0));
	 top: 2px;
	 left: 2px;
	 border-radius: 30px 30px 200px 200px;
	 opacity: 0.7;
}
 body button.glass:hover {
	 text-shadow: 0 1px 2px rgba(0, 0, 0, 0.9);
}
 body button.glass:hover:before {
	 opacity: 1;
}
 body button.glass:active {
	 text-shadow: 0 0 2px rgba(0, 0, 0, 0.9);
	 box-shadow: 0 3px 8px rgba(0, 0, 0, 0.75), inset 0 0 0 2px rgba(0, 0, 0, 0.3), inset 0 -6px 6px -3px rgba(0, 129, 174, 0.2);
}
 body button.glass:active:before {
	 height: 25px;
}
 body button.flannel {
	 background-color: #900;
	 box-shadow: 0 5px 10px rgba(0, 0, 0, 0.75);
	 color: white;
	 text-shadow: 0 1px 2px #20170c;
	 background-position: 0px 0px;
	 transition: background-color 0.25s ease-in-out;
	 background-image: repeating-linear-gradient(90deg, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2) 1px, transparent 1px, transparent 4px), repeating-linear-gradient(90deg, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2) 1px, transparent 1px, transparent 2px), repeating-linear-gradient(45deg, rgba(51, 0, 0, 0.5), rgba(51, 0, 0, 0.5) 8px, transparent 8px, transparent 16px), repeating-linear-gradient(-45deg, rgba(102, 0, 0, 0.5), rgba(102, 0, 0, 0.5) 8px, transparent 8px, transparent 16px);
}
 body button.flannel:hover {
	 background-color: #b30000;
	 text-shadow: 0 1px 2px #000;
}
 body button.flannel:active {
	 text-shadow: 0 0px 2px #000;
	 box-shadow: 0 3px 8px rgba(0, 0, 0, 0.75);
}
 body button.metal {
	 color: white;
	 text-shadow: 0 1px 2px rgba(0, 0, 0, 0.75);
	 box-shadow: 0 5px 10px rgba(0, 0, 0, 0.75), inset 0 0 1px 1px gray;
	 position: relative;
	 background-image: linear-gradient(-45deg, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.4) 90px), repeating-linear-gradient(45deg, rgba(147, 147, 147, 0.3), rgba(147, 147, 147, 0.3) 1.5px, transparent 1.5px, transparent 3px), linear-gradient(45deg, rgba(255, 255, 255, 0), rgba(255, 255, 255, 0.7) 60px), radial-gradient(circle at center, #3f87a6, #ebf8e1, darkgray);
}
 body button.metal:before, body button.metal:after {
	 content: '';
	 display: block;
	 height: 100%;
	 width: 35px;
	 background: white;
	 position: absolute;
	 top: 0;
	 opacity: 0.2;
	 filter: blur(10px);
	 transition: transform 0.25s ease-in-out, filter 0.25s ease-in-out;
}
 body button.metal:before {
	 transform: skew(45deg, 0deg) translateX(-40px);
}
 body button.metal:after {
	 transform: skew(45deg, 0deg) translateX(60px);
}
 body button.metal:hover {
	 text-shadow: 0 1px 3px black;
}
 body button.metal:hover:before {
	 transform: skew(45deg, 0deg) translateX(0px);
}
 body button.metal:hover:after {
	 transform: skew(45deg, 0deg) translateX(80px);
}
 body button.metal:active {
	 box-shadow: 0 3px 8px rgba(0, 0, 0, 0.75), inset 0 0 1px 1px gray;
}
 body button.metal:active:before, body button.metal:active:after {
	 filter: blur(40px);
}
 
</style>