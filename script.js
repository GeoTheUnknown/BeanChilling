
/* Colors */
:root {
    --font-heading: #a27250;
    --black: #222222;
    --bg: rgba(162, 114, 80);
    --white: #fff;
    --bean: #f4b183;
    --chilling: #9dc3e6;
    --border:.1rem solid rgba(255,255,255,.3);
}
/* Colors */

* {
    font-family: 'Arial Rounded MT Bold', sans-serif;
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: none;
    border: none;
    text-decoration: none;
    text-transform: capitalize;
    transition: 0.2s linear;
}

html {
    font-size: 62.5%;
    overflow-x: hidden;
    scroll-behavior: smooth;
    scroll-padding-top: 9rem;
}

section {
    padding: 8rem 5%;
}

nav {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 1.5rem 7%;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 1000;
}

.logo img {
    width: 15%;
    height: 15%;
}

.links {
    margin-right: 20%;
}

nav .links a {
    color: var(--white);
    font-size: 1.5rem;
    margin-right: 1.8rem;
    text-transform: uppercase;
    letter-spacing: 0.1rem;
    position: relative;
}

nav .links a:after {
    content: '';
    width: 0%;
    height: 2px;
    background: var(--bg);
    position: absolute;
    left: 0;
    bottom: -12px;
    transition: 0.4s;
}

nav .links a:hover::after {
    width: 100%;
}

nav #menu-btn, nav #close {
    color: var(--white);
    font-size: 2.5rem;
    cursor: pointer;
    display: none;
}

nav #cart-btn {
    color: #a27250;
    font-size: 2.5rem;
    cursor: pointer;
    width: auto;
    margin-right: 5%;
    margin-left: 5%;
}

.header {
    width: 100%;
    height: 100vh;
    background: url(./img/home-img.png);
    background-repeat: no-repeat;
    background-size: cover;
}

.header .content {
    padding: 150px 7%;
    color: var(--white);
    position: relative;
}

.header .content h3 {
    font-size: 3rem;
    font-weight: 600;
    letter-spacing: 2px;
    padding: 3rem 0;
    text-align: center;
}

.header .content h1 {
    font-size: 5rem;
    margin-top: 10rem;
    letter-spacing: 2px;
    text-align: center;
}

.content-btn {
    position: absolute;
    padding: 1.3rem 4.8rem;
    margin: 2.8rem 0;
    cursor: pointer;
    color: var(--white);
    font-size: 1.4rem;
    font-weight: 500;
    border: 0.3rem solid var(--font-heading);
    border-radius: 7px;
    background: none;
    transition: all linear 0.5s;
    top: 75%;
    left: 44%;
}

.content-btn:hover {
    background: var(--bg);
    color: var(--white);
    transform: translate(0px, -3px);
}

.content-btn a {
    color: white;
    text-decoration: none;
}

.btn {
    position: absolute;
    padding: 1.3rem 5rem;
    margin: 3rem 0;
    cursor: pointer;
    color: var(--white);
    font-size: 1.4rem;
    font-weight: 500;
    border: 0.3rem solid var(--font-heading);
    border-radius: 7px;
    background: none;
    transition: all linear 0.5s;
}

.btn:hover {
    background: var(--bg);
    color: var(--white);
    transform: translate(0px, -3px);
}

.nav-change {
    background: rgba(0, 0, 0, 0.9);
}

.heading {
    font-size: 5rem;
    text-align: center;
}

.heading span {
    color: var(--font-heading);
}

.heading-description {
    text-align: center;
    padding: 1.3rem 0;
    font-size: 1.6rem;
    font-weight: 300;
}

/* About Section Start */
.about .row{
    display: flex;
    align-items: center;
    background: var(--font-heading);
    flex-wrap: wrap;
    border-radius: 2%;
}

.about .row .image{
    margin: 1%;
    flex: 1 1 45rem;
    border-radius: 100%;
    background-color: white;
}

.about .row .image img{
    width: 100%;
    padding: 10%;
}
.about .row .content{
    flex:1 1 45rem;
    padding: 2rem;
}

.about .row .content h3{
    font-size: 3rem;
    color: #fff;
}

.about .row .content p{
    font-size: 1.6rem;
    color: var(--white);
    padding: 1rem 0;
    line-height: 1.8;
}
/* About Section End */

/* Menu Section Start */
.menu .container {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(28rem, 1fr));
    gap: 2rem;
    padding: 2.5rem 0;
    grid-row-gap: 4rem;
}

.menu .container .menu-box {
    background: var(--white);
    height: auto;
    cursor: pointer;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
    transition: box-shadow 0.3s ease-in-out;
    padding-bottom: 3rem;
    border-radius: 10px;
}

.menu .container .menu-box img {
    width: 100%;
    border-radius: 10px;
}

.menu .container .menu-box .menu-content {
    padding: 1.5rem;
}

.menu .container .menu-box .menu-content h3 {
    font-size: 2.3rem;
    padding: 1.3rem 0;
}

.menu .container .menu-box .menu-content p {
    font-size: 1.6rem;
    padding: 1.3rem 0;
    font-weight: 400;
    color: var(--black);
}

.menu .container .menu-box:hover {
    transform: translateY(-1rem);
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.6);
}

.menu-btn{
    display: inline-block;
    padding: 10px 20px;
    background-color: #a27250;
    color: #fff;
    font-size: 15px;
    border: none;
    cursor: pointer;
    border-radius: 4px;
    transition: background-color 0.3s ease;
}

.menu-btn:hover {
    background-color: #664a38;
}

/* Menu Section End */

/* Menu-description Section Start */
.menu-description {
    display: none;
    position: fixed;
    top: 15%;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.8);
    color: #fff;
    z-index: 9999;
    padding: 20px;
    box-sizing: border-box;
    font-size: 24px;
    line-height: 3.0rem;
    animation: fade-in 1s ease-in;
}

@keyframes fade-in {
    0% {
        opacity: 0;
    }
    100% {
        opacity: 1;
    }
}

.menu-description p {
    margin left: 5%;
}

.close-btn {
    position: absolute;
    top: 0;
    right: 5%;
    margin-left: 95%;
    cursor: pointer;
    font-size: 2.5rem;
    color: var(--white);
}

.menu-information {
    display: flex;
    margin-bottom: 20px;
}

.menu-image {
    width: 100%;
    height: 100%;
    margin-right: 20px;
    border-radius: 10px;
}

.menu-info {
    flex-grow: 1;
    margin-right: 30px;
}

.menu-information h2 {
    font-size: 20px;
    margin-bottom: 10px;
}

.menu-information p {
    font-size: 16px;
    margin-bottom: 10px;
}

.menu-information .price {
    font-size: 18px;
    font-weight: bold;
}

.list-des {
    font-size: 16px;
    margin-left: 19px;
    margin-bottom: 10px;
}

.menu-information button {
    padding: 10px 20px;
    background-color: #4CAF50;
    color: white;
    border: none;
    cursor: pointer;
}

.menu-information button:hover {
    background-color: #45a049;
}
/* Menu-description Section End */

/* Cart Section Start */
.cart-container {
    position: fixed;
    top: 12%;
    right: 50px;
    width: 25%;
    background-color: #fff;
    border: 1px solid #ccc;
    border-radius: 5px;
    padding: 10px;
    opacity: 0;
    transform: translateY(-20px);
    transition: opacity 0.3s ease, transform 0.3s ease;
    z-index: 999;
}

.cart-container.open {
    opacity: 1;
    transform: translateY(0);
}

.cart-container h2 {
    margin-top: 0;
    margin-bottom: 10px;
    color: #333;
}
    
.cart-item {
    margin-bottom: 10px;
    display: flex;
    align-items: center;
    border-bottom: 1px solid #ccc;
    padding-bottom: 10px;
    position: relative;
    opacity: 0;
    animation: fade-in 0.5s ease forwards;
}

.cart-item:first-child {
      animation-delay: 0.2s;
}

.cart-item:nth-child(2) {
    animation-delay: 0.4s;
}

.cart-item:nth-child(3) {
    animation-delay: 0.6s;
}

.cart-item:nth-child(4) {
    animation-delay: 0.8s;
}

.cart-item:nth-child(5) {
    animation-delay: 1s;
}

.cart-item:nth-child(6) {
    animation-delay: 1.2s;
}

.cart-item:nth-child(7) {
    animation-delay: 1.4s;
}

.cart-item img {
    width: 60px;
    height: 60px;
    margin-right: 10px;
    border-radius: 4px;
    object-fit: cover;
}
    
.cart-item-details {
    flex-grow: 1;
}

.cart-item-name {
    font-weight: bold;
    color: #333;
}

.cart-item-price {
    font-size: 14px;
    color: #777;
}

.cart-item-quantity {
    display: flex;
    align-items: center;
    margin-top: 5px;
}

.quantity-label {
    margin-right: 5px;
    color: #555;
}

.quantity-btn {
    cursor: pointer;
    border: none;
    background-color: #eee;
    font-size: 16px;
    padding: 2px 5px;
    margin-right: 5px;
}

.quantity-btn:first-child {
    margin-right: 5px;
}

.buy-now-btn {
    background-color: var(--font-heading);
    color: #fff;
    border: none;
    padding: 5px 10px;
    cursor: pointer;
    margin-top: 10px;
}

.payment-methods {
    margin-top: 10px;
}

.payment-label {
    margin-right: 10px;
    color: #555;
}

.total-price {
    margin-top: 10px;
    font-weight: bold;
    color: #333;
}

.cart-close-btn {
    position: absolute;
    top: 5px;
    right: 5px;
    font-size: 16px;
    font-weight: bold;
    color: #333;
    border: none;
    background-color: transparent;
    cursor: pointer;
}
/* Cart Section End */


/* Team Section Start */
.team .container {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(25rem, 1fr));
    gap: 2rem;
    padding: 2.5rem 0;
}

.team .container .team-box {
    width: auto;
    cursor: pointer;
}

.team .container .team-box .team-img {
    width: 100%;
    height: auto;
    overflow: hidden;
    border-radius: 1rem;
    transition: all linear 0.5s;
}

.team .container .team-box .team-img:hover {
    box-shadow: 0px 0px 10px 0px red;
}

.team .container .team-box .team-img img {
    width: 100%;
}

.team .container .team-box .team-img:hover img {
    transform: scale(1.1);
}

.team .container .team-box .team-content {
    box-shadow: 3px 3px 10px rgba(179, 179, 179, 0.2);
    text-align: center;
    width: 80%;
    position: relative;
    top: -10%;
    z-index: 2;
    background: var(--white);
    left: 10%;
    border-radius: 0.8rem;
}

.team .container .team-box .team-content h3 {
    font-size: 2rem;
    color: var(--black);
    padding: 1.2rem 0;

}

.team .container .team-box .team-content p {
    font-size: 1.5rem;
    padding: 1.2rem 0;
}

.team .container .team-box .team-content .social a {
    display: inline-block;
    margin: 0.7rem;
    width: 4rem;
    height: 4rem;
    background: var(--bg);
    color: var(--white);
    line-height: 4rem;
    font-size: 1.5rem;
}

.team .container .team-box .team-content .social a:hover {
    border-radius: 100%;
}

.team .container .team-box:hover .team-content {
    transform: translateY(-1rem);
}
/* Team Section End */

/* Contact Section Start */
}
.contact{
    background-color: black;
}
.contact .row{
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-radius: 2%;
    width: 90%;
    margin: 0 auto;
    gap: 1.5rem;
}
.contact .row .form-c h3{
    font-size: 2.5rem;
    text-align: center;
}
.contact .row .form-c input{
    background: #fff;
    border-radius: 0.5rem;
    border: 0.1rem solid var(--font-heading);
    padding: 0.9rem 0.8rem;
    height: 2.3rem; width: 90%;
    margin: 0.5rem 0;
    color: #000;
    font-size: 1.5rem;
}
.contact .row .form-c input[type="submit"]{
    background: var(--font-heading);
    cursor: pointer;
    font-size: 1.6rem;
    height: 3.5rem; width: 90%;
    margin-bottom: 2rem;
    color: #fff;
}
.contact .row .form-c input[type="submit"]:hover{
    background: #fff;
    color: var(--font-heading);
}
.contact .row textarea{
    background: #fff;
    border: 0.1rem solid var(--font-heading);
    height: 12rem; width: 90%;
    padding: 0.5rem 1rem; 
    font-size: 1.5rem;
}
/* Contact Section End */

/* Footer Section Start */
.footer {
    width: 100%;
    height: 20%;
    background: url(./img/home-img.png);
    background-size: cover;
    background-repeat: no-repeat;
    padding-top: 20rem;
}

.footer .container {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(30rem, 1fr));
    gap: 2rem;
    padding: 0;
}

.footer .container .footer-box {
    padding: 1rem;
}

.footer .container .footer-box h3 {
    color: var(--white);
    font-size: 1.8rem;
    letter-spacing: 0.1rem;
}

.footer .container .footer-box p {
    color: var(--white);
    font-size: 1.5rem;
    line-height: 2.5rem;
    font-weight: 400;
    padding: 0;
}

.footer .container .footer-box form input {
    width: 70%;
    padding: 1rem;
}

.footer .container .footer-box p a {
    color: var(--bg);
}

.footer .container .footer-box form button {
    background: var(--bg);
    color: var(--white);
    padding: 1rem;
    cursor: pointer;
}

.footer .container .footer-box div a {
    margin: 0.5rem;
    color: var(--white);
    display: inline-block;
    width: 3rem;
    height: 3rem;
    line-height: 3rem;
    text-align: center;
    background: var(--bg);
}
/* Footer Section End */

@media only screen and (max-width: 991px) {
    html {
        font-size: 55%;

    }

    nav {
        padding: 3rem 3rem;
    }

    .content {
        text-align: center;
    }
}


@media only screen and (max-width: 768px) {


    nav #menu-btn {
        display: inline-block;
    }

    nav .links {
        position: absolute;
        top: 100%;
        left: -100%;
        width: 100%;
        height: 100vh;
        background: #eee;
        transition: 0.5s;
        background: black;
    }

    nav .links a {
        display: block;
        padding: 1.5rem;
        margin: 1rem;
        font-size: 1.5rem;
        font-weight: 600;
        color: var(--white);
        text-align: center;
    }

    .about .container {
        flex-direction: column;
    }

    .about .container .about-content {
        text-align: center;
    }
}
