"use client";

import { useState } from 'react';
import Link from 'next/link';
import confetti from 'canvas-confetti';
import { ArrowLeft, Gavel, AlertOctagon, CheckCircle2, Scale } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const CASI = [
  {
    id: 1,
    titolo: "Il caso 'Distracted Boyfriend'",
    descrizione: "Un utente prende la famosa foto stock del fidanzato distratto e aggiunge del testo per fare ironia sui propri professori. La foto originale è protetta da licenza.",
    opzioni: ["È REATO (Violazione)", "È LEGALE (Parodia)"],
    corretta: 1,
    spiegazione: "Legale! È considerata 'opera trasformativa', non ha scopo di lucro e non toglie mercato al fotografo originale. È tutelata come satira."
  },
  {
    id: 2,
    titolo: "La Pubblicità del Fast Food",
    descrizione: "Una multinazionale usa il meme di 'Hide the Pain Harold' stampandolo sui propri volantini per pubblicizzare un nuovo panino, senza pagare l'attore.",
    opzioni: ["È REATO (Violazione)", "È LEGALE (Parodia)"],
    corretta: 0,
    spiegazione: "Reato palese. L'uso commerciale e a scopo di lucro fa decadere immediatamente le protezioni del Fair Use. Servono le licenze d'immagine."
  },
  {
    id: 3,
    titolo: "La React in Live su Twitch",
    descrizione: "Uno streamer trasmette per intero l'ultimo episodio di una serie TV, tenendo la propria webcam in un angolo e commentando ogni tanto.",
    opzioni: ["È REATO (Violazione)", "È LEGALE (Critica)"],
    corretta: 0,
    spiegazione: "Reato. Mostrare l'intera opera sostituisce la visione originale. Il diritto di 'critica' permette di mostrare solo brevi spezzoni strettamente necessari."
  },
  {
    id: 4,
    titolo: "Il Meme in Campagna Elettorale",
    descrizione: "Un politico usa un frame del film del Signore degli Anelli, aggiungendo il logo del suo partito per attaccare l'avversario sui social.",
    opzioni: ["È REATO (Violazione)", "È LEGALE (Satira)"],
    corretta: 0,
    spiegazione: "Reato. La propaganda politica viene equiparata all'uso commerciale (promozione). I detentori dei diritti cinematografici vietano l'associazione non autorizzata a partiti politici."
  },
  {
    id: 5,
    titolo: "Pepe the Frog e l'Estremismo",
    descrizione: "Dei gruppi estremisti iniziano a usare un meme (creato da un fumettista) come proprio simbolo di odio. Il creatore originale fa causa per bloccarli.",
    opzioni: ["VINCE IL CREATORE (Ha il copyright)", "VINCONO GLI UTENTI (È di dominio pubblico)"],
    corretta: 0,
    spiegazione: "Vince il creatore. È successo davvero (Matt Furie con Pepe the Frog). Un meme non annulla il diritto d'autore del creatore originale, che può intervenire se l'uso lede la sua immagine."
  },
  {
    id: 6,
    titolo: "Gameplay con Musica Protetta",
    descrizione: "Un utente carica un montaggio dei suoi migliori gol su un videogioco sportivo e in sottofondo mette l'ultima hit musicale di un cantante famoso presa da Spotify.",
    opzioni: ["È REATO (Violazione)", "È LEGALE (Fair Use)"],
    corretta: 0,
    spiegazione: "Reato (e Strike assicurato). Sincronizzare brani musicali protetti su video richiede una 'licenza di sincronizzazione', la musica non c'entra col gameplay, quindi non è trasformativa."
  }
];

export default function Tribunale() {
  const [casoCorrente, setCasoCorrente] = useState(0);
  const [punteggio, setPunteggio] = useState(0);
  const [mostraRisultato, setMostraRisultato] = useState(false);
  const [sceltaUtente, setSceltaUtente] = useState<number | null>(null);

  const caso = CASI[casoCorrente];

  const handleScelta = (indice: number) => {
    if (sceltaUtente !== null) return;
    setSceltaUtente(indice);
    if (indice === caso.corretta) {
      setPunteggio(punteggio + 1);
      confetti({ particleCount: 150, spread: 80, origin: { y: 0.6 } });
    }
  };

  const avanti = () => {
    if (casoCorrente + 1 < CASI.length) {
      setCasoCorrente(casoCorrente + 1);
      setSceltaUtente(null);
    } else {
      setMostraRisultato(true);
    }
  };

  if (mostraRisultato) {
    return (
      <main className="min-h-screen bg-neutral-950 flex items-center justify-center p-6">
        <motion.div initial={{ scale: 0.8, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} className="bg-neutral-900 border border-neutral-800 p-8 rounded-2xl max-w-lg w-full text-center shadow-2xl">
          <Scale className="w-24 h-24 mx-auto text-yellow-500 mb-6" />
          <h2 className="text-4xl font-bold text-white mb-4">L'Udienza è Tolta</h2>
          <p className="text-xl text-neutral-300 mb-8">
            Hai emesso sentenze corrette su <span className="text-yellow-500 font-bold">{punteggio}</span> casi su {CASI.length}.
          </p>
          <div className="w-full bg-neutral-800 rounded-full h-4 mb-8">
            <motion.div 
              initial={{ width: 0 }} 
              animate={{ width: `${(punteggio / CASI.length) * 100}%` }} 
              transition={{ duration: 1, delay: 0.5 }}
              className="bg-yellow-500 h-4 rounded-full"
            />
          </div>
          <Link href="/" className="inline-block bg-yellow-600 hover:bg-yellow-500 text-white font-semibold py-4 px-8 rounded-xl transition-colors">
            Chiudi il Fascicolo
          </Link>
        </motion.div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-neutral-950 text-white py-12 px-6 overflow-hidden">
      <div className="max-w-3xl mx-auto">
        <Link href="/" className="inline-flex items-center text-yellow-500 hover:text-yellow-400 mb-8 transition-colors">
          <ArrowLeft className="w-4 h-4 mr-2" /> Abbandona l'aula
        </Link>

        <motion.div 
          key={casoCorrente}
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -50 }}
          transition={{ duration: 0.4 }}
          className="bg-neutral-900 border border-neutral-800 rounded-2xl overflow-hidden shadow-2xl"
        >
          <div className="bg-neutral-800 px-6 py-4 border-b border-neutral-700 flex justify-between items-center">
            <span className="font-mono text-neutral-400 font-semibold tracking-wider">FASCICOLO {casoCorrente + 1}/{CASI.length}</span>
            <span className="font-mono text-yellow-500 font-bold">REPUTAZIONE: {punteggio}</span>
          </div>
          
          <div className="p-8">
            <h2 className="text-3xl font-bold mb-4">{caso.titolo}</h2>
            <p className="text-xl text-neutral-300 mb-10 leading-relaxed">
              {caso.descrizione}
            </p>

            <AnimatePresence mode="wait">
              {sceltaUtente === null ? (
                <motion.div key="opzioni" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {caso.opzioni.map((opzione, idx) => (
                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      key={idx}
                      onClick={() => handleScelta(idx)}
                      className="p-6 rounded-xl border-2 border-neutral-700 hover:border-yellow-500 hover:bg-neutral-800 transition-colors text-left font-bold text-lg"
                    >
                      {opzione}
                    </motion.button>
                  ))}
                </motion.div>
              ) : (
                <motion.div key="risultato" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="space-y-6">
                  <div className={`p-6 rounded-xl border-2 flex items-start gap-4 ${sceltaUtente === caso.corretta ? 'bg-green-950/40 border-green-500/50 text-green-100' : 'bg-red-950/40 border-red-500/50 text-red-100'}`}>
                    {sceltaUtente === caso.corretta ? <CheckCircle2 className="w-10 h-10 shrink-0 text-green-500" /> : <AlertOctagon className="w-10 h-10 shrink-0 text-red-500" />}
                    <div>
                      <h3 className="font-bold text-2xl mb-3">
                        {sceltaUtente === caso.corretta ? "Sentenza Corretta!" : "Errore di Giudizio!"}
                      </h3>
                      <p className="text-lg leading-relaxed opacity-90">{caso.spiegazione}</p>
                    </div>
                  </div>
                  
                  <button
                    onClick={avanti}
                    className="w-full bg-white text-black hover:bg-neutral-200 font-bold py-4 rounded-xl transition-colors text-lg"
                  >
                    Chiama il Prossimo Caso ➜
                  </button>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </motion.div>
      </div>
    </main>
  );
}
