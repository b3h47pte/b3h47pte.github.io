<script setup lang="ts">
</script>

<template>
    <div class="flex flex-col h-full place-content-center">
        <div id="video-container">
            <video id="background-video" autoplay loop muted poster="assets/manta.jpg">
                <source src="assets/manta.mp4" type="video/mp4">
            </video>
        </div>
        
        <div id="nav">
            <div class="nav-text">Nav Text Here</div>
            <div id="experience-button" class="nav-button"></div>
            <div id="academic-button" class="nav-button"></div>
            <div id="scuba-button" class="nav-button"></div>
        </div>

        <div class="profile-image-content mx-auto"></div>
        
        <div id="content">
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
    </div>
</template>

<style>

.profile-image-content {
    background-image: url("assets/profile.jpg");
    background-repeat: no-repeat;
    background-position: -140px -270px;
    height: 360px;
    min-height: 360px;
    width: 360px;
    min-width: 360px;
    mask-image: radial-gradient(rgba(0,0,0,1.0) 0%, rgba(0,0,0,1.0) 40%, transparent 65%);
    position: absolute;
    left: calc(50% - 180px);
    top: calc(40% - 180px);
}

.nav-text {

}

#experience-button {
    mask: conic-gradient(transparent 0deg, black 1deg, black 119deg, transparent 120deg), radial-gradient(transparent 180px, black 190px);
    mask-composite: intersect;
}

#academic-button {
    mask: conic-gradient(transparent 0deg, transparent 120deg, black 121deg, black 239deg, transparent 240deg), radial-gradient(transparent 180px, black 190px);
    mask-composite: intersect;
}

#scuba-button {
    mask: conic-gradient(transparent 0deg, transparent 240deg, black 241deg, black 359deg, transparent 360deg), radial-gradient(transparent 180px, black 190px);
    mask-composite: intersect;
}

#content {
    position: relative;
    top: 250px;
}

.nav-button {
    position: absolute;
    left: calc(50% - 250px);
    top: calc(40% - 250px);
    height: 500px;
    min-height: 500px;
    width: 500px;
    min-width: 500px;
    background-repeat: no-repeat;
    background-size: contain;
    background-image: url('https://m.media-amazon.com/images/I/61mznKG6ClL.jpg');
    border-radius: 50%;
}

#video-container {
    width: 100vw;
    height: 100vh;
    object-fit: cover;
    position: fixed;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    z-index: -2;
    animation-name: mantafade;
    animation-duration: 20s;
    animation-iteration-count: infinite;
    animation-timing-function: linear;
    filter: blur(10px);
}

#background-video {
    width: 100vw;
    height: 100vh;
    object-fit: cover;
    position: fixed;
    opacity: 0.15;
    z-index: -1;
}

@keyframes mantafade {
    0% { opacity: 0% }
    10% { opacity: 100% }
    90% { opacity: 100% }
    100% { opacity: 0% }
}

</style>