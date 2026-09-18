class CustomHeader extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
        <div class="bg-brand-700 text-slate-300 text-xs sm:text-sm py-2 px-4 sm:px-8 flex flex-wrap justify-between items-center border-b border-slate-700">
            <div class="flex items-center gap-6">
                <span class="flex items-center gap-1.5"><i data-lucide="shield-check" class="w-4 h-4 text-brand-accent"></i> ISO 9001:2008 Certified</span>
                <span class="hidden md:flex items-center gap-1.5"><i data-lucide="award" class="w-4 h-4 text-brand-accent"></i> Authorised Hindalco & NALCO Distributor</span>
            </div>
            <div class="flex items-center gap-6">
                <a href="tel:+919891300031" class="hover:text-white flex items-center gap-1.5 transition"><i data-lucide="phone" class="w-4 h-4 text-brand-accent"></i> +91-9891300031</a>
                <a href="mailto:bkbhuraria@hotmail.com" class="hidden sm:flex items-center gap-1.5 hover:text-white transition"><i data-lucide="mail" class="w-4 h-4 text-brand-accent"></i> bkbhuraria@hotmail.com</a>
            </div>
        </div>

        <nav class="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-slate-200 shadow-sm">
            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center h-20">
                <a href="index.html" class="flex items-center gap-3">
                    <div class="w-10 h-10 bg-brand-700 text-white flex items-center justify-center rounded-lg font-bold text-xl tracking-wider">
                        MC
                    </div>
                    <div>
                        <span class="font-extrabold text-xl text-brand-700 tracking-tight block leading-tight">MAHESHWARI CO.</span>
                        <span class="text-[10px] uppercase font-semibold text-slate-500 tracking-widest block">Aluminium Products</span>
                    </div>
                </a>

                <div class="hidden md:flex items-center space-x-8 font-medium text-slate-600 text-sm">
                    <a href="index.html" class="hover:text-brand-800 transition">Home</a>
                    <a href="about.html" class="hover:text-brand-800 transition">About Us</a>
                    <a href="products.html" class="hover:text-brand-800 transition">Products</a>
                    <a href="catalogues.html" class="hover:text-brand-800 transition font-semibold text-brand-800">PDF Catalogues</a>
                    <a href="tech-specs.html" class="hover:text-brand-800 transition">Technical Specs</a>
                    <a href="contact.html" class="hover:text-brand-800 transition">Contact</a>
                </div>

                <div class="hidden md:flex items-center">
                    <a href="catalogues.html" class="bg-brand-800 hover:bg-brand-700 text-white text-sm px-5 py-2.5 rounded-lg font-semibold transition-all shadow-md flex items-center gap-2">
                        <i data-lucide="download" class="w-4 h-4"></i> Download Catalogues
                    </a>
                </div>

                <button id="menu-btn" onclick="toggleMobileMenu()" class="md:hidden p-2 text-slate-600 hover:text-slate-900 focus:outline-none">
                    <i data-lucide="menu" class="w-6 h-6"></i>
                </button>
            </div>

            <div id="mobile-menu" class="hidden md:hidden border-b border-slate-200 bg-white px-4 py-4 space-y-3">
                <a href="index.html" class="block text-slate-600 hover:text-brand-800 font-medium py-1">Home</a>
                <a href="about.html" class="block text-slate-600 hover:text-brand-800 font-medium py-1">About Us</a>
                <a href="products.html" class="block text-slate-600 hover:text-brand-800 font-medium py-1">Products</a>
                <a href="catalogues.html" class="block text-slate-600 hover:text-brand-800 font-medium py-1 font-semibold text-brand-800">PDF Catalogues</a>
                <a href="tech-specs.html" class="block text-slate-600 hover:text-brand-800 font-medium py-1">Technical Specs</a>
                <a href="contact.html" class="block text-slate-600 hover:text-brand-800 font-medium py-1">Contact</a>
                <a href="catalogues.html" class="block bg-brand-800 text-white text-center py-2.5 rounded-lg font-semibold mt-2">Download Catalogues</a>
            </div>
        </nav>
        `;
    }
}

class CustomFooter extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
        <footer class="bg-brand-700 text-slate-300 py-12 border-t border-slate-800">
            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-3 gap-8">
                <div>
                    <h3 class="text-white font-bold text-lg mb-4">MAHESHWARI CO.</h3>
                    <p class="text-xs text-slate-400 mb-4">An ISO 9001:2008 Certified Company. Leading supplier and authorized distributor for Hindalco & NALCO aluminium products in India.</p>
                    <p class="text-xs text-slate-400">© 2026 Maheshwari Co. All Rights Reserved.</p>
                </div>
                <div>
                    <h4 class="text-white font-semibold text-sm mb-4">Head Office</h4>
                    <p class="text-xs text-slate-400 leading-relaxed">
                        Thomson House - 45, First Floor,<br>
                        Rani Jhansi Road, New Delhi - 110055, India
                    </p>
                </div>
                <div>
                    <h4 class="text-white font-semibold text-sm mb-4">Direct Contact & Downloads</h4>
                    <p class="text-xs text-slate-400 mb-2">Phone: +91-9891300031</p>
                    <p class="text-xs text-slate-400 mb-3">Email: bkbhuraria@hotmail.com</p>
                    <a href="catalogues.html" class="text-xs text-brand-accent hover:underline flex items-center gap-1"><i data-lucide="file-text" class="w-3.5 h-3.5"></i> Download Product Catalogues (PDF)</a>
                </div>
            </div>
        </footer>
        `;
    }
}

customElements.define('custom-header', CustomHeader);
customElements.define('custom-footer', CustomFooter);

function toggleMobileMenu() {
    const mobileMenu = document.getElementById('mobile-menu');
    mobileMenu.classList.toggle('hidden');
}