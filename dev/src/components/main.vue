<script setup lang="ts">
</script>

<template>
    <div id="main-container" class="flex flex-col h-full place-content-center">
        
        <video id="background-video" autoplay loop muted poster="assets/manta.jpg">
            <source src="assets/manta.mp4" type="video/mp4">
        </video>

        <div class="profile-image-content mx-auto">
        </div>

        <div class="font-mono text-9xl text-center text-slate-400">
            Michael Bao
        </div>

        <div class="font-mono text-base text-center text-slate-500">
            Computer Graphics. Machine Learning. And a little bit of everything else.
        </div>

        <div class="text-4xl text-center text-slate-500">
            <a class="mx-1" target="_blank" href="https://www.linkedin.com/in/mikehbao/">
                <i class="fa-brands fa-linkedin"></i>
            </a>

            <a class="mx-1" target="_blank" href="https://scholar.google.com/citations?user=j_ZoCfkAAAAJ">
                <i class="fa-brands fa-google-scholar"></i>
            </a>

            <a class="mx-1" target="_blank" href="https://github.com/b3h47pte/">
                <i class="fa-brands fa-github"></i>
            </a>
        </div>
    </div>
</template>

<style>

#main-container {
    background: linear-gradient(
        90deg,
        rgba(30, 41, 59, 0.8) 50%,
        rgba(30, 41, 59, 0.802) 52.025%,
        rgba(30, 41, 59, 0.809) 53.875%,
        rgba(30, 41, 59, 0.820) 55.625%,
        rgba(30, 41, 59, 0.835) 57.25%,
        rgba(30, 41, 59, 0.852) 58.825%,
        rgba(30, 41, 59, 0.870) 60.3%,
        rgba(30, 41, 59, 0.89) 61.775%,
        rgba(30, 41, 59, 0.91) 63.225%,
        rgba(30, 41, 59, 0.9296) 64.7%,
        rgba(30, 41, 59, 0.9482) 66.175%,
        rgba(30, 41, 59, 0.965) 67.75%,
        rgba(30, 41, 59, 0.9792) 69.375%,
        rgba(30, 41, 59, 0.9902) 71.125%,
        rgba(30, 41, 59, 0.997) 72.975%,
        rgb(30, 41, 59) 75%
    );
}

.profile-image-content {
    background-image: url("assets/profile.jpg");
    background-repeat: no-repeat;
    background-position: -140px -270px;
    height: 360px;
    width: 360px;
    mask-image: radial-gradient(rgba(0,0,0,1.0) 0%, rgba(0,0,0,1.0) 40%, transparent 65%);
}

#background-video {
    width: 100vw;
    height: 100vh;
    object-fit: cover;
    position: fixed;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    z-index: -1;
    transform: translateX(-20%);
    background-color: rgb(30, 41, 59);
    animation-name: mantafade;
    animation-duration: 20s;
    animation-iteration-count: infinite;
    animation-timing-function: ease-in-out;
}

#background-video::before {
    position: fixed;
    width: 100vw;
    height: 100vh;
    backdrop-filter: blur(15px);
}

@keyframes mantafade {
    0% { opacity: 0% }
    10% { opacity: 100% }
    90% { opacity: 100% }
    100% { opacity: 0% }
}

</style>