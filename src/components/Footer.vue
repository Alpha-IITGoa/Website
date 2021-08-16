<template>
  <footer>
    <!-- <div class="container">
      <div class="left">
        <div class="col-2">
          <router-link class="header" :to="{ name: 'Home' }"><img src="../assets/footerlogo.jpg"></router-link>
          <ul>
            <li>
              <a href="#"><youTube class="svg-icon"/> </a>
            </li>
            <li>
              <a href="#"><twitter class="svg-icon"/> </a>
            </li>
            <li>
              <a href="https://www.instagram.com/alpha_iitgoa/"><instagram class="svg-icon"/> </a>
            </li>
            <li>
              <a href="#"><linkedin class="svg-icon"/> </a>
            </li>
          </ul>
        </div>
        <div class="col-2">
          <ul>
            <router-link class="link" :to="{ name: 'Home' }">Home</router-link>
            <router-link class="link" :to="{ name: 'Blogs' }">Blogs</router-link>
            <router-link v-if="admin" class="link" :to="{ name: 'CreatePost' }">Create Post</router-link>
            <router-link v-if="!user" class="link" :to="{ name: 'Login' }">Login In / Register</router-link>
          </ul>
        </div>
      </div>
      <div class="right">
        <p>Copyright © 2021 All Rights Reserved</p>
      </div>
    </div> -->
    <div class="footer">
    <div class="box-container">

            <div class="box">
                <h3>About Us</h3>
                <p>Alpha Club is community of finance fanatics consisting of highly dedicated indidviduals to help everyone from those with no background in finance to those coming from finance looking to switch focus within the industry.</p>
            </div>

            <div class="box">
                <h3>Quick Links</h3>
                <router-link class="link" :to="{ name: 'Home' }">Home</router-link>
                <router-link class="link" :to="{ name: 'Blogs' }">Blogs</router-link>
            </div>

            <div class="box">
                <h3>Follow Us</h3>
                <a href="https://in.linkedin.com/company/alpha-iitgoa">LinkedIn</a>
                <a href="https://www.instagram.com/alpha_iitgoa/">Instagram</a>
                <a href="#">YouTube </a>
                <a href="#">Twitter </a>
            </div>

            <div class="box">
                <h3>Contact Info</h3>
                <div class="info">
                    <mail class="svg-icon"/>
                    <p> alpha-club@iitgoa.ac.in </p>
                </div>
                <div class="info">
                    <location class = "svg-icon"/>
                    <p> IIT Goa, india - 403401 </p>
                </div>
            </div>

        </div>

        <h1 class="credit"> &copy; Copyright 2021 All Rights Reserved </h1>
    </div>
  </footer>
</template>

<script>
// import youTube from "../assets/Icons/youtube-brands.svg";
import mail from  "../assets/Icons/envelope-regular.svg";
import location from "../assets/Icons/map-marker-alt-solid.svg";
// import twitter from "../assets/Icons/twitter-brands.svg";
// import instagram from "../assets/Icons/instagram-brands.svg";
// import linkedin from "../assets/Icons/linkedin-brands.svg";

export default {
  name: "footer-vue",
  components: { mail, location},
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
// footer {
//   margin-top: auto;
//   padding: 100px 25px;
//   background-color: #303030;
//   .container {
//     display: flex;
//     flex-direction: column;
//     gap: 32px;
//     @media (min-width: 800px) {
//       flex-direction: row;
//       gap: 0px;
//     }

//     > div {
//       display: flex;
//       flex: 1;
//     }

//     .left {
//       gap: 32px;
//       color: #fff;
//       display: flex;
//       flex-direction: column;
//       align-items: center;
//       @media (min-width: 800px) {
//         flex-direction: row;
//         align-items: initial;
//         gap: 0;
//       }

//       .header {
//         text-align: center;
//         font-size: 24px;
//         color: #fff;
//         margin-bottom: 16px;
//         text-decoration: none;
//         font-weight: 600;
//         @media (min-width: 800px) {
//           text-align: initial;
//         }
//       }
//       ul {
//         gap: 16px;
//         list-style: none;
//         display: flex;
//       }

//       .col-1,
//       .col-2 {
//         gap: 32px;
//         display: flex;
//         flex: 1;
//         @media (min-width: 800px) {
//           gap: 0;
//         }
//       }

//       .col-1 {
//         flex-direction: column;

//         h2 {
//           text-align: center;
//           @media (min-width: 800px) {
//             text-align: initial;
//           }
//         }
//         ul {
//           margin-top: auto;

//           li {
//             display: flex;
//             align-items: center;
//             .svg-icon {
//               width: 24px;
//               height: auto;
//               color: #fff;
//             }
//           }
//         }
//       }

//       .col-2 {
//         ul {
//           height: 100%;
//           justify-content: center;
//           flex-direction: row;
//           flex-wrap: wrap;
//           @media (min-width: 800px) {
//             flex-direction: column;
//           }
//           .link {
//             font-size: 16px;
//             font-weight: 500;
//             color: #fff;
//             text-decoration: none;
//           }
//         }
//       }
//     }

//     .right {
//       gap: 32px;
//       color: #fff;
//       align-items: center;
//       flex-direction: column;
//       @media (min-width: 800px) {
//         align-items: flex-end;
//         gap: 0;
//       }
//     }

//     p {
//       margin-top: auto;
//     }
//   }
// }
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;300;400&display=swap'); 
:root{
    --purple:#814096;
    --pink:#F83292;
    --gradient:linear-gradient(90deg, var(--purple), var(--pink));
}

*{
    font-family: 'Poppins', sans-serif;
    margin:0; padding:0;
    box-sizing: border-box;
    text-decoration: none;
    outline: none; border:none;
    // text-transform: capitalize;
}

*::selection{
    background:var(--black);
    color:#fff;
}

.footer{
    padding-top: 3rem;
    background:url(./images/footer-bg.png) no-repeat;
    background-size: cover;
    background-position: center;
}

.footer .box-container{
    display: flex;
    flex-wrap: wrap;
}

.footer .box-container .box{
    flex:1 1 15rem;
    margin:1.5rem;
}

.footer .box-container .box h3{
    font-size: 1.5rem;
    padding:1rem 0;
    color:#fff;
    text-decoration: underline;
    text-underline-offset: 1rem;
}
.footer .box-container .box .svg-icon{
    width: 24px;
    height: auto;
    color: #fff;
    margin: 0.5rem;
}

.footer .box-container .box p{
    font-size: 1rem;
    padding:.5rem 0;
    color:#eee;
}

.footer .box-container .box a{
    display: block;
    font-size: 1rem;
    padding:.5rem 0;
    color:#eee;
}

.footer .box-container .box a:hover{
    text-decoration: underline;
}

.footer .box-container .box .info{
    display: flex;
    align-items: center;
}

.footer .box-container .box .info i{
    margin:.5rem 0;
    margin-right: 1rem;
    border-radius: 50%;
    background:#fff;
    color:var(--pink);
    font-size: 1rem;
    height:4.5rem;
    width:4.5rem;
    line-height: 4.5rem;
    text-align: center;
}

.footer .credit{
    font-size: 0.8rem;
    font-weight: normal;
    letter-spacing: .1rem;
    color:#fff;
    border-top: .1rem solid #fff5;
    padding:1.5rem 1rem;
    text-align: center;
}
</style>
