


function App() {
  return (
    <>
    <body class="bg-black">
    <div class="bg-gradient-to-r from-gray-800 to-black">
    <nav class="relative container mx-auto bg-black ">
        <div class="flex items-center justify-between ">
            <div class="pt-2 flex space-x-6 bg-black-500 ">
              <img src="https://www.tccommunications.co.uk/wp-content/uploads/2020/10/sony-logo-white.png" alt="react logo" class="h-10 w-24" />
            </div>
            <div class="flex sm:hidden lg:flex">
              <a href="#" class="hover:text-green text-white">Sign In</a>
              <img src="https://newsboilerv1storage.blob.core.windows.net/news/1928183_0.jpg" class="h-10 w-24"/>
            </div>
        </div>
    </nav>
    <div id="banner" class='bg-red-500 flex justify-center'>25% off! Preorder God of War 5 today...</div>
    <section id="mainContainer" class="container flex flex-col md:flex-row items-center px-6 mx-auto space-y-0 md:space-y-0"> 
        <div id="leftSide" class="container flex flex-col md:flex-row items-center space-y-0 md:space-y-0 bg-#355C3E">
          <img src="/20474279.png" alt="react logo" class="" />
        </div>
        <div id="rightSide" class="container flex flex-col items-center px-6 mx-auto mt-10 space-y-0 md:space-y-0 ">
            <h6 class="text-white">God of War 4</h6>
            <h3 class="text-white">A bold new beginning</h3>
            <p class="text-white">Kratos is a father again. As mentor and protector to Atreus, a son determined to earn his respect, he is forced to deal with and control the rage that has long defined him while out in a very dangerous world with his son.
                His vengeance against the Gods of Olympus behind him, Kratos now lives in the realm of Norse deities and monsters.
                It's in this harsh, unforgiving world that he must fight to survive, and not only teach his son to do the same… but also prevent him from repeating the Ghost of Sparta's bloodstained mistakes.
                This staggering reimagining of God of War combines all the hallmarks of the iconic series – brutal combat, epic boss fights, and breathtaking scale & and fuses them with a powerful and moving narrative that re-establishes Kratos' world. </p>
            <a class="text-white">Buy Now</a>     
        </div>
    </section>
    <section class="flex justify-center px-6 mx-auto mt-10 space-y-0">
      <img src="/banner.webp" class=""/>
    </section>
    <footer class="bg-black">
        <div class="container flex flex-col justify-between px-6 py-10 mx-auto space-y-8 md:flex-row md:space-y-0">
            <div class="flex flex-col-reverse items-center justify-between space-y-12 md:flex-col md:space-y-0 md:items-start">
               
                <div>
                    <img src="img/logo-white.svg" class="h-8" alt=""/>
                </div>
                <div class="flex justify-center space-x-4">
                    <a href="#">
                        <img src="/icon-facebook.svg" class="h-8" alt=""/>
                    </a>
                    <a href="#">
                        <img src="/icon-youtube.svg" class="h-8" alt=""/>
                    </a>
                    <a href="#">
                        <img src="/icon-twitter.svg" class="h-8" alt=""/>
                    </a>
                    <a href="#">
                        <img src="/icon-pinterest.svg" class="h-8" alt=""/>
                    </a>
                    <a href="#">
                        <img src="/icon-instagram.svg" class="h-8" alt=""/>
                    </a>
                </div>
            </div>
            <div class="flex justify-around space-x-32">
                <div class="flex flex-col space-y-3 text-white">
                    <a href="" class="hover:text-brightRed">Home</a>
                    <a href="" class="hover:text-brightRed">Pricing</a>
                    <a href="" class="hover:text-brightRed">Products</a>
                    <a href="" class="hover:text-brightRed">About</a>
                </div>
                <div class="flex flex-col space-y-3 text-white">
                    <a href="" class="hover:text-brightRed">Careers</a>
                    <a href="" class="hover:text-brightRed">Community</a>
                    <a href="" class="hover:text-brightRed">Privacy Policy</a>
            
                </div>
            </div>
            <div class="flex flex-col justify-between">
            <img src="https://www.tccommunications.co.uk/wp-content/uploads/2020/10/sony-logo-white.png" alt="react logo" class="h-10 w-24" />
                 <div class="mx-auto my-6 text-center text-white md:hidden">
                    Copyright &copy; 2022, All Rights Reserved
                </div>
        </div>
        </div>
    </footer>
    </div>
    </body>

    </>
  );
}

export default App;
