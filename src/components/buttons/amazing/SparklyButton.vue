<template>
    <main id="app">
    
        <button class="sparkles">
            <span>Sparkly Button</span>
        </button>

    </main>

    <input type="range" min=0 max=360>

    <!-- 
        social icons
    -->
    <!-- <a class="social-icon codepen" href="https://codepen.io/simeydotme">
        Made by Simey
    </a> -->

    <!-- <a class="social-icon twitter" href="https://twitter.com/simeydotme">
        <svg viewBox="0 0 24 24">
            <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
            <path d="M22 4.01c-1 .49 -1.98 .689 -3 .99c-1.121 -1.265 -2.783 -1.335 -4.38 -.737s-2.643 2.06 -2.62 3.737v1c-3.245 .083 -6.135 -1.395 -8 -4c0 0 -4.182 7.433 4 11c-1.872 1.247 -3.739 2.088 -6 2c3.308 1.803 6.913 2.423 10.034 1.517c3.58 -1.04 6.522 -3.723 7.651 -7.742a13.84 13.84 0 0 0 .497 -3.753c-.002 -.249 1.51 -2.772 1.818 -4.013z"></path>
        </svg>
    </a> -->
    <!-- <a class="social-icon github" href="https://github.com/simeydotme">
        <svg viewBox="0 0 24 24">
            <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
            <path d="M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5"></path>
        </svg>
    </a> -->
</template>

<script setup>
import { ref, onMounted } from 'vue';

// Estado para el color seleccionado
const color = ref('#ff0000');

// Referencia al botón
const btn = ref(null);

// Animación inicial del botón
onMounted(() => {
  setTimeout(() => {
    if (btn.value) {
      btn.value.classList.add('over');
      setTimeout(() => {
        btn.value.classList.remove('over');
      }, 2500);
    }
  }, 500);
});


</script>

<style escoped >
.sparkles {
    --clr: 260;
    --shadows: 0%;
    --shadowl: 0%;

    font-size: max(2.5vw, 1.25rem);
    font-weight: 700;
    letter-spacing: 0.5px;
    border-radius: 5em;
    background: linear-gradient(
        0deg,
        hsla(var(--clr), 100%, 70%) 0%,
        hsla(var(--clr), 100%, 65%) 5%,
        hsla(var(--clr), 80%, 35%) 15%,
        hsla(var(--clr), 10%, 0%) 40%,
        hsla(var(--clr), 25%, 12%) 90%
    );
    background-size: 200% 300%;
    background-position: 0% 0%;
    box-shadow: inset 0 0 2px hsla(var(--clr), 30%, 20%);
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 1fr;
    place-items: center;
    padding: 0;
    position: relative;
    overflow: hidden;
    transform: translate(0px);

    transition: all 0.5s cubic-bezier(0.77, 0, 0.18, 1);

    box-shadow: 0 -0.5em 0.5em transparent, 0 0.5em 0.5em transparent, 0 0.5em 0.5em transparent, 0 0.5em 0.5em transparent,
        0 0.25em 0.3em -0.2em hsla(var(--clr), 0%, 0%, 0.5),
        0 0.35em 0.75em hsla(var(--clr), 0%, 0%, 0.75);
}

.sparkles::before,
.sparkles::after {
    --gradientPos: 50% 100%;
    content: " ";
    grid-column: 1;
    grid-row: 1;
    width: 100%;
    height: 100%;
    transition: inherit;
}

.sparkles:before {
    inset: 0;
    position: absolute;
    transform: translate3d(0, 0, 0.01px);
    border-radius: inherit;

    background-image: var(--glitter), var(--glitter),
        linear-gradient(180deg, black 0%, white 80%);
    background-size: 300px 170px, 280px 130px, 200% 200%;
    background-blend-mode: multiply, multiply, overlay;
    background-position: 0px 0px, 0px 0px, var(--gradientPos);
    background-repeat: repeat;

    mix-blend-mode: color-dodge;
    filter: brightness(2) contrast(.75);
    animation: bubble 20s linear infinite;
    animation-play-state: paused;
    opacity: 0.5;
    box-shadow: inset 0 -8px 10px -7px hsla(var(--clr), 70%, 80%, 0.75);
}

.sparkles:after {
    background-image: radial-gradient(
            ellipse at center 70%,
            hsla(var(--clr), 100%, 99%, 0.8) 5%,
            hsla(var(--clr), 90%, 80%, 1) 20%,
            transparent 50%,
            transparent 200%
        ),
        linear-gradient(
            90deg,
            hsla(var(--clr), 80%, 10%, 1) -10%,
            transparent 25%,
            transparent 75%,
            hsla(var(--clr), 80%, 10%, 1) 110%
        );
    box-shadow: inset 0 0.25em 0.75em rgba(0, 0, 0, 1),
        inset 0 -0.05em 0.2em rgba(255, 255, 255, 0.4),
        inset 0 -1px 3px hsla(var(--clr), 80%, 50%, 0.75);
    background-blend-mode: darken;
    background-repeat: no-repeat;
    background-size: 180% 80%, cover;
    background-position: center 220%;
    mix-blend-mode: hard-light;
    filter: blur(5px);
    opacity: 0;
}

.sparkles:hover,
.sparkles.over {
    --shadows: 90%;
    --shadowl: 80%;
    background-position: 100% 100%;

    transition: all 0.2s cubic-bezier(0.17, 0.84, 0.44, 1);

    box-shadow: 0 -0.2em 1.5em hsla(var(--clr), 90%, 50%, 0.3),
        0 0.5em 2em hsla(var(--clr), 90%, 70%, 0.55),
        0 0.25em 0.3em -0.2em hsla(var(--clr), 0%, 0%, 1),
        0 0.35em 0.75em hsla(var(--clr), 0%, 0%, 1),
        0 0.25em 0.5em -0.3em hsl(var(--clr), 30%, 99%, 1),
        0 0.25em 0.5em hsla(var(--clr), 20%, 30%, 0.35),
        inset 0 -2px 5px -2px rgba(255, 255, 255, 0.5);
}

.sparkles.over {
    transition-duration: 2s;
}

.sparkles:hover:before,
.sparkles.over:before {
    --gradientPos: 50% 50%;
    animation-play-state: running;
    filter: brightness(2) contrast(1);
    box-shadow: inset 0 -5px 10px -4px hsla(var(--clr), 70%, 80%, 0.3);
    opacity: .8;
}

.sparkles:hover:after,
.sparkles.over:after {
    opacity: .8;
    transform: translateY(0px);
}

.sparkles span {
    grid-column: 1;
    grid-row: 1;
    background-image: linear-gradient(
        hsl(calc(var(--clr) - 43), 27%, 85%) 0%,
        hsl(calc(var(--clr) - 60), 22%, 80%) 19%,
        hsl(calc(var(--clr) - 50), 20%, 75%) 30%,
        hsl(calc(var(--clr) - 52), 36%, 98%) 43%,
        hsl(var(--clr), 70%, 70%, 1) 51%,
        hsl(var(--clr), 50%, 85%, 1) 52%,
        rgb(255, 255, 255) 100%
    );
    background-size: 1em 3.45em;
    color: rgb(214, 222, 226);
    -webkit-text-fill-color: transparent;
    -webkit-background-clip: text;
    filter: drop-shadow(0 0 0.05em rgba(0,0,0,0.5)) drop-shadow(0 0.05em 0.05em rgba(0,0,0,0.5));
    transition-timing-function: inherit;
    transition-duration: inherit;
    transition-delay: 0s;
    padding: 0.75em 1.5em;
    transform: translateY(0);
    z-index: 10;
}

.sparkles:hover span,
.sparkles:active span,
.sparkles.over span {
    background-position-y: -100%;
}

.sparkles:active {
    transform: translateY(0.075em);
    box-shadow: 0 -0.2em 1.5em hsla(var(--clr), 90%, 50%, 0.4),
    0 0.5em 2em hsla(var(--clr), 90%, 70%, 0.65),
    0 0.15em 0.3em -0.2em hsla(var(--clr), 0%, 0%, 1),
    0 0.25em 0.75em hsla(var(--clr), 0%, 0%, 1),
    0 0.25em 0.5em -0.3em hsl(var(--clr), 30%, 99%, 1),
    0 0.25em 0.5em hsla(var(--clr), 20%, 30%, 0.45),
    inset 0 -2px 5px -2px rgba(255, 255, 255, 0.65);
    transition-duration: 0.1s;
}

.sparkles:active:before,
.sparkles:active:after {
    opacity: 1;
    filter: brightness(3) contrast(.75);
    animation-duration: 8s;
}
.sparkles:active:after {
    filter: brightness(1.35) contrast(.8) blur(5px);
}

:root {
    --glitter: url("https://assets.codepen.io/13471/silver-glitter-background.png");
}

@keyframes bubble {
    0% {
        background-position: 0px 340px, 0px 130px, var(--gradientPos);
    }
    100% {
        background-position: 0px 0px, 0px 0px, var(--gradientPos);
    }
}

input {
    position: relative;
    bottom: 30px;
    width: 300px;
}
</style>