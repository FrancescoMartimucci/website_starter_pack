<div id="page">
<h1>Website Starter (
    <a href="#english">EN</a>
    | 
    <a href="#italian">IT</a>)
</h1>

<p>
Made By <a href="https://www.francescomartimucci.it" target="_blank">Francesco Martimucci</a> |
<a href="https://www.linkedin.com/in/francescomartimucci/" target="_blank">LinkedIn</a>
</p> 

<h2 id="english">English</h2>
<p>
    Ready-to-use starter pack to build a website with
    <a href="https://webpack.js.org/">Webpack</a> and <a href="https://getbootstrap.com/">Bootstrap</a>. <br><br>
    Contains:
</p>
<ul>
    <li>Pre-configured Webpack 5 with Bootstrap (v5.2);</li>
    <li>Include <a href="https://babeljs.io/">Babel.js</a> (v8.5.5);</li>
    <li>Ready SCSS file for custom your code;</li>
    <li>SEO and Open Graph Tag simplified and managed with JavaScript;</li>
</ul>

<h3>Step-by-step guide</h3>
<ol>
    <li>
        Download the project and extract it.
    </li>
    <li>
        Install dependencies <br>
        <code>npm install</code>
    </li>
    <li>
        Activate watch mode <br>
        <code>npm run watch</code>
    </li>
    <li>
        After activating watch mode, Webpack will take Bootstrap and your custom code (JavaScript and SCSS from the src/ folder) and turn them into two files ready for publishing. The files will be automatically transpiled with Babel.js. You will find the ready files in dist/assets/js folder.
    </li>
    <li>
        In dist/ repository you can find index.html
        and other pages in pages/ repository. <br>
        They contain a script that allows you to write seo meta tags and Open Graphs easily.
    </li>
    <li>
        Before publishing, go to the seo.js file (in the src folder) on line 73
        and remove "/dist" from the link.
        Leave the link absolute, so that all pages have access to the icon.
        On line 73 you must have: icon.setAttribute("href", "/assets/img/icon.png");
    </li>
    <li>
        Once you have applied all the changes and stopped the 'watch mode' with Ctrl + C and then Y to confirm, remember to modify the webpack.config.js file, changing the property mode: "development" to "production".
    </li>
</ol>
<p>
It's all! <br>
You are ready to create your fantastic website. <br>
Good code :)
</p>

<h2 id="italian">Italiano</h2>
<p>Starter pack pronto all'uso per realizzare un sito web con <a href="https://webpack.js.org/">Webpack</a> e <a href="https://getbootstrap.com/">Bootstrap</a>. <br><br>
    Include:</p>
<ul>
    <li>Webpack 5 pre-configurato con Bootstrap (v5.2);</li>
    <li>Include <a href="https://babeljs.io/">Babel.js</a> (v8.5.5);</li>
    <li>File SCSS pronto per personalizzare lo stile del tuo sito;</li>
    <li>Gestione semplificata dei meta tag SEO e degli Open Graph tramite JavaScript.</li>
</ul>

<h3>Guida step-by-step</h3>
<ol>
    <li>Scarica il progetto e estrailo.</li>
    <li>Installa le dipendenze <br>
    <code>npm install</code>
    </li>
    <li>Attiva la modalità 'watch', ti permetterà di lavorare sui file nella cartella src/ e compilare automaticamente i file nella cartella dist/ <br>
    <code>npm run watch</code>
    </li>
    <li>
        Dopo aver attivato la 'watch mode', Webpack preleverà Bootstrap e il tuo codice custom (JavaScript e SCSS dalla cartella src/), li assemblerà e li trasformerà in file pronti all'uso. I file saranno automaticamente transpilati con babel.js. Troverai i file compilati nella cartella dist/assets/js.
    </li>
    <li>Nella cartella dist/ troverai il file index.html e le altre pagine nella cartella pages/. Queste pagine contengono uno script nell'head che ti permetterà di gestire facilmente e velocemente i meta tag SEO e gli Open Graph.</li>
    <li>
        Prima di pubblicare il sito, recati sul file seo.js (nella cartella src/) alla linea 73 e rimuovi "/dist" dal link.
        Lascia il link assoluto, in modo tale che tutte le pagine riescano ad accedere al link dell'icona (icon.png).
        Alla linea 73 avrai quindi: icon.setAttribute("href", "/assets/img/icon.png");
    </li>
    <li>
        Una volta che hai applicato tutte le modifiche e interrotto la 'watch mode' con Ctrl + C e successivamente Y per confermare, ricordati di modificare il file webpack.config.js, modificando la proprietà mode: "development" in "production".
    </li>
</ol>
<p>
È tutto! <br>
Sei pronto/a a creare il tuo sito fantastico! <br>
Buon divertimento :)
</p>
<h3>
Breve storia
</h3>
<p>
Quando ho inziato a programmare non avevo capito l'utilità di Webpack e lo trovavo molto difficile da usare. Probabilmente non avevo ancora un buon livello di competenze tale da poterci mettere mano con agilità. Oggi ci ho riprovato ed ho pensato di creare qualcosa che potesse sia velocizzarmi durante il processo iniziale di sviluppo di semplici pagine web, sia aiutare chi ha meno dimistichezza a creare una pagina web, sfruttando la comodità di Webpack.
<br><br>
Se hai qualche consiglio o miglioria, sono felice di applicarla, per rendere il progetto più completo. Sentiti libero di invarmi un collegamento su <a href="https://www.linkedin.com/in/francescomartimucci/" target="_blank">LinkedIn</a>.
<br><br>
Buona programmazione!
</p>

</div>