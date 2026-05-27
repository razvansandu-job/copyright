"use client";

import Link from 'next/link';
import { ArrowLeft, BookOpen, Globe, ShieldAlert, Scale, Brain } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Storia() {
  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <main className="min-h-screen bg-neutral-950 text-neutral-200 py-12 px-6 overflow-hidden">
      <div className="max-w-4xl mx-auto">
        <Link href="/" className="inline-flex items-center text-yellow-500 hover:text-yellow-400 mb-8 transition-colors">
          <ArrowLeft className="w-4 h-4 mr-2" /> Torna al Tribunale
        </Link>
        
        <motion.div initial="hidden" animate="visible" variants={fadeInUp} className="mb-12 border-b border-neutral-800 pb-8">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Dall'Antica Roma al Web 3.0</h1>
          <p className="text-xl text-neutral-400">L'evoluzione del Diritto d'Autore: una continua rincorsa tra legge e tecnologia.</p>
        </motion.div>
        
        <div className="space-y-16">
          
          <motion.section initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} className="space-y-6">
            <div className="flex items-center gap-3 text-yellow-500 mb-6">
              <BookOpen className="w-8 h-8" />
              <h2 className="text-3xl font-bold text-white">L'Antichità e il concetto di "Plagio"</h2>
            </div>
            <p className="text-lg leading-relaxed text-neutral-300">
              Il concetto di proprietà intellettuale non esisteva nel mondo classico come lo intendiamo oggi. Tuttavia, già nell'Antica Roma si percepiva il furto di idee. Fu il poeta Marziale, nel I secolo d.C., a usare per primo la parola <strong>"plagiarius"</strong> (che all'epoca indicava il rapitore di schiavi) per denunciare chi declamava i suoi versi spacciandoli per propri. Seneca stesso rifletteva su come le idee, una volta espresse, diventassero patrimonio comune, ma la forma appartenesse all'autore.
            </p>
          </motion.section>

          <motion.section initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} className="space-y-6">
            <div className="flex items-center gap-3 text-emerald-500 mb-6">
              <Brain className="w-8 h-8" />
              <h2 className="text-3xl font-bold text-white">Stampa e Illuminismo: Nasce il Copyright</h2>
            </div>
            <p className="text-lg leading-relaxed text-neutral-300">
              Con l'invenzione della stampa a caratteri mobili di Gutenberg (1455), la copia dei testi divenne industriale. I sovrani europei iniziarono a concedere i <em>Privilegi di Stampa</em>: monopoli temporanei concessi non agli autori, ma agli stampatori per recuperare i costi tipografici (1469 in Italia).
            </p>
            <div className="grid md:grid-cols-2 gap-6 my-8">
              <div className="p-6 bg-neutral-900 border-l-4 border-emerald-500 rounded-r-xl shadow-lg">
                <h3 className="text-xl font-bold text-white mb-2">Statuto di Anna (1710)</h3>
                <p className="text-neutral-400 text-sm">
                  In Inghilterra avviene la vera rivoluzione. Lo Statuto di Anna toglie il monopolio agli editori e <strong>riconosce per la prima volta l'autore</strong> come titolare dei diritti (per 14 anni). Il fondamento filosofico si basa su John Locke: l'opera è frutto del lavoro dell'uomo, e perciò è sua proprietà.
                </p>
              </div>
              <div className="p-6 bg-neutral-900 border-l-4 border-blue-500 rounded-r-xl shadow-lg">
                <h3 className="text-xl font-bold text-white mb-2">Il Modello Francese</h3>
                <p className="text-neutral-400 text-sm">
                  Con la Rivoluzione Francese, pensatori come Kant e Diderot spingono per il diritto morale: l'opera non è solo un bene economico, ma un'estensione della personalità dell'autore, un diritto inalienabile e inviolabile.
                </p>
              </div>
            </div>
            <p className="text-lg leading-relaxed text-neutral-300">
              Queste correnti di pensiero convergono nel 1886 con la <strong>Convenzione di Berna</strong>, fortemente voluta da Victor Hugo, che rende il diritto d'autore internazionale e automatico alla creazione dell'opera.
            </p>
          </motion.section>

          <motion.section initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} className="space-y-6">
            <div className="flex items-center gap-3 text-blue-400 mb-6">
              <Globe className="w-8 h-8" />
              <h2 className="text-3xl font-bold text-white">Internet e la Crisi del Sistema</h2>
            </div>
            <p className="text-lg leading-relaxed text-neutral-300">
              Negli anni 2000, l'avvento del P2P (es. Napster) polverizza il controllo fisico sulle opere. Il legislatore risponde inasprendo le pene e creando il <strong>DMCA (1998)</strong> negli USA, che obbliga le piattaforme a rimuovere i contenuti su segnalazione (Notice and Takedown). 
            </p>
            <p className="text-lg leading-relaxed text-neutral-300">
              In risposta a leggi troppo restrittive, Lawrence Lessig fonda le <strong>Creative Commons (2001)</strong>, permettendo agli autori di condividere opere con la formula "Alcuni diritti riservati", gettando le basi per la cultura open source, Wikipedia e la libera circolazione dei meme.
            </p>
          </motion.section>

          <motion.section initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} className="space-y-6">
            <div className="flex items-center gap-3 text-red-400 mb-6">
              <ShieldAlert className="w-8 h-8" />
              <h2 className="text-3xl font-bold text-white">Meme, IA e Direttive Europee</h2>
            </div>
            <p className="text-lg leading-relaxed text-neutral-300">
              Oggi, un meme riutilizza quasi sempre materiale protetto (frame di film, foto stock). È legale? Negli USA sono protetti dal <strong>Fair Use</strong>, in Italia dall'<strong>Art. 70 della Legge 633/1941</strong> che tutela la parodia e la satira.
            </p>
            <div className="p-6 bg-red-950/30 border border-red-900/50 rounded-xl my-6">
              <h3 className="text-xl font-bold text-red-200 mb-2">L'Articolo 17 e l'IA Generativa</h3>
              <p className="text-neutral-300 mb-4">
                La Direttiva UE sul Copyright (2019) ha terrorizzato il web. Ribattezzata "Meme Ban", imponeva filtri preventivi alle piattaforme. I meme si sono salvati grazie ad eccezioni specifiche inserite all'ultimo momento. 
              </p>
              <p className="text-neutral-300">
                Oggi la nuova frontiera è l'Intelligenza Artificiale Generativa: addestrare modelli su immagini coperte da copyright è furto o assimilabile all'apprendimento umano? Il tribunale del futuro dovrà decidere proprio questo.
              </p>
            </div>
          </motion.section>

        </div>
      </div>
    </main>
  );
}
