document.addEventListener("DOMContentLoaded", () => {
  const footerHTML = `
<footer class="bg-primary text-white pt-14 pb-6 px-4 sm:px-6">
  <div class="container mx-auto max-w-7xl">

    <!-- Logo + Réseaux -->
    <div class="flex flex-col md:flex-row justify-between items-center gap-8 mb-12">
      <div class="bg-white/10 p-3 rounded-full backdrop-blur-sm border border-white/10">
        <img src="images/logo.png" alt="Logo Montataire Basket-ball" class="h-16 w-auto transition-transform hover:rotate-6 duration-500" loading="lazy">
      </div>

      <div class="flex space-x-5">
        <!-- Instagram -->
        <a href="https://www.instagram.com/montataire_basket_ball/" target="_blank" aria-label="Instagram" class="hover:text-secondary transition">
          <svg class="w-8 h-8 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
            <path d="M224,202.66A53.34,53.34,0,1,0,277.34,256,53.38,53.38,0,0,0,224,202.66Zm124.71-41a54,54,0,0,0-30.45-30.45C297.2,120,224,120,224,120s-73.2,0-94.26,11.23a54,54,0,0,0-30.45,30.45C88,144.8,88,224,88,224s0,79.2,11.23,100.26a54,54,0,0,0,30.45,30.45C150.8,344,224,344,224,344s73.2,0,94.26-11.23a54,54,0,0,0,30.45-30.45C360,303.2,360,224,360,224S360,144.8,348.71,161.66ZM224,312a88,88,0,1,1,88-88A88,88,0,0,1,224,312Zm92.1-160.2a20.48,20.48,0,1,1,20.48-20.48A20.48,20.48,0,0,1,316.1,151.8ZM398.8,80.2C378.4,60.8,349.4,48,316.1,48H131.9C98.6,48,69.6,60.8,49.2,80.2,28.8,100.6,16,129.6,16,162.9V349.1c0,33.3,12.8,62.3,33.2,82.7C69.6,472.4,98.6,485.2,131.9,485.2H316.1c33.3,0,62.3-12.8,82.7-33.2,20.4-20.4,33.2-49.4,33.2-82.7V162.9C432,129.6,419.2,100.6,398.8,80.2Z"/>
          </svg>
        </a>

        <!-- Facebook -->
        <a href="https://www.facebook.com/montatairebasketball" target="_blank" aria-label="Facebook" class="hover:text-secondary transition">
          <svg class="w-8 h-8 fill-current" viewBox="0 0 320 512" xmlns="http://www.w3.org/2000/svg">
            <path d="M279.14 288l14.22-92.66h-88.91V127.61c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z"/>
          </svg>
        </a>
      </div>
    </div>

    <!-- Coordonnées + Carte -->
    <div class="grid grid-cols-1 md:grid-cols-2 gap-8 text-sm mb-10">
      
      <!-- Coordonnées -->
      <div>
        <h4 class="text-lg font-semibold mb-4 text-white">Nous trouver</h4>
        <ul class="space-y-2 text-gray-200">
          <li>📍 Complexe Sportif Marcel Coene</li>
          <li>60160 Montataire, France</li>
          <li>📧 <a href="mailto:montatairebb@gmail.com" class="hover:text-secondary">montatairebb@gmail.com</a></li>
        </ul>
      </div>

      <!-- Google Maps -->
      <div class="w-full h-64 rounded-lg overflow-hidden shadow-md">
        <iframe 
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2627.621008368819!2d2.424839315673082!3d49.2710703793255!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e6416f8d86d4d1%3A0x58c88b0e34076831!2sComplexe%20Sportif%20Marcel%20Coene!5e0!3m2!1sfr!2sfr!4v1712123456789"
          width="100%" height="100%" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade">
        </iframe>
      </div>
    </div>

    <!-- Mentions & copyright -->
    <div class="border-t border-white/20 pt-6 text-center text-sm text-gray-300 space-y-2">
      <div class="flex flex-wrap justify-center gap-4">
        <a href="mentions-legales.html" class="hover:text-white underline">Mentions légales</a>
        <a href="confidentialite.html" class="hover:text-white underline">Politique de confidentialité</a>
        <a href="cgu.html" class="hover:text-white underline">CGU</a>
      </div>
      <p class="mt-2">&copy; 2025 Montataire Basket-ball — Tous droits réservés</p>
    </div>

  </div>
</footer>
  `;
  document.body.insertAdjacentHTML("beforeend", footerHTML);
});
