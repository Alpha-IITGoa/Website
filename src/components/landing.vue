<template>
<div>
    <div class="landing">
        <div class="content">
            <h3>Alpha Club</h3>
            <p>Official Finance Club of IIT Goa, student driven body which aims at increasing the awareness of Finance as a viable career option through conducting keynote sessions, workshops and competitions for student community.</p>
            <router-link v-if="!user" class="link btn" :to="{ name: 'Login' }">Login</router-link>
        </div>

        <div class="image">
            <img src="./images/land1.png" alt="hello">
        </div>

    </div>
</div>
</template>
<script>
    export default {
        name: 'landing',
        component: {},
         computed: {
    user() {
      return this.$store.state.user;
    },
    admin() {
      return this.$store.state.profileAdmin;
    },
  },
};
</script>

<style lang="scss" scoped>
    .landing {
        margin-top: 4em;
    }
    
.landing{
    display: flex;
    align-items: center;
    justify-content: center;
    background:url("./images/land-bg.png") no-repeat;
    background-size: cover;
    background-position: center;
}

.landing .image img{
    width:40vw;
    animation: float 3s linear infinite;
}

@keyframes float{
    0%, 100%{
        transform: translateY(0rem);
    }
    50%{
        transform: translateY(-3.5rem);
    }
}

.landing .content h3{
    font-size: 4rem;
    color:#333;
    padding-left: 1em;
    text-transform: uppercase;
}

.landing .content h3 span{
    color:var(--pink);
    text-transform: uppercase;
}

.landing .content p{
    font-size: 1.5rem;
    margin-left: 2em;
    color:#666;
    padding:1rem 0;
}
.btn{
    display: inline-block;
    margin-top: 1rem;
    margin-left: 2em;
    padding:0.8rem 3rem;
    border-radius: 5rem;
    background:radial-gradient(circle,black, #2d2a2e);
    font-size: 1.7rem;
    color:rgb(255, 255, 255);
    cursor: pointer;
    box-shadow: 0 .5rem 1rem rgba(0,0,0,.1);
    transition: all .3s linear;
}

.btn:hover{
    transform: scale(1.1);
}

.heading{
    text-align: center;
    background:var(--gradient);
    color:transparent;
    -webkit-background-clip: text;
    background-clip: text;
    font-size: 3rem;
    text-transform: uppercase;
    padding:1rem;

    
@media (max-width:768px){

    header label{
        visibility: visible;
        opacity: 1;
    }

    header .navbar{
        position: absolute;
        top:100%; left: 0;
        width:100%;
        background:#fff;
        padding:1rem 2rem;
        border-top: .1rem solid rgba(0,0,0,.2);
        box-shadow: 0 .5rem 1rem rgba(0,0,0,.1);
        transform-origin: top;
        transform: scaleY(0);
        opacity: 0;
        transition: .2s linear;
    }

    header .navbar a{
        display: block;
        margin:2rem 0;
        font-size: 2rem;
    }

    header input:checked ~ .navbar{
        transform: scaleY(1);
        opacity: 1;
    }

    header input:checked ~ label::before{
        content:'\f00d';
    }

    .landing{
        flex-flow: column-reverse;
    }

    .landing .image img{
        width:100%;
    }

    .landing .content h3{
        font-size: 2rem;
    }

    .landing .content p{
        font-size: 0.8rem;
    }

    
}
}
</style>