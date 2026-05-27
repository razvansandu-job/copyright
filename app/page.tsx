import Link from 'next/link';
import { Scale, BookOpen, Gavel } from 'lucide-react';

export default function Home() {
  return (
    <main className="min-h-screen bg-neutral-950 text-neutral-100 flex flex-col items-center justify-center p-4 md:p-8">
      <div className="max-w-3xl w-full text-center space-y-6 md:space-y-8">
        <Scale className="w-20 h-20 md:w-24 md:h-24 mx-auto text-yellow-500 mb-4 md:mb-8" />
        <h1 className="text-4xl md:text-6xl font-bold tracking-tight">Il Tribunale dei Meme</h1>
        <p className="text-lg md:text-xl text-neutral-400 px-2">
          Dove finisce il diritto d'autore e inizia la libertà d'espressione? 
          Un'analisi interattiva tra storia, legge e cultura di internet.
        </p>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6 mt-8 md:mt-12">
          <Link href="/storia" className="group p-6 md:p-8 rounded-2xl bg-neutral-900 border border-neutral-800 hover:border-yellow-500/50 transition-all flex flex-col items-center text-center">
            <BookOpen className="w-10 h-10 md:w-12 md:h-12 text-blue-400 mb-3 md:mb-4 group-hover:scale-110 transition-transform" />
            <h2 className="text-xl md:text-2xl font-semibold mb-2">Le Origini</h2>
            <p className="text-sm md:text-base text-neutral-500">Dall'antica Roma al Web 3.0. Scopri come è nato il Copyright.</p>
          </Link>
          
          <Link href="/quiz" className="group p-6 md:p-8 rounded-2xl bg-neutral-900 border border-neutral-800 hover:border-yellow-500/50 transition-all flex flex-col items-center text-center">
            <Gavel className="w-10 h-10 md:w-12 md:h-12 text-red-400 mb-3 md:mb-4 group-hover:scale-110 transition-transform" />
            <h2 className="text-xl md:text-2xl font-semibold mb-2">Il Processo</h2>
            <p className="text-sm md:text-base text-neutral-500">Mettiti alla prova. Giudica casi reali di meme: è Fair Use o Reato?</p>
          </Link>
        </div>
      </div>
    </main>
  );
}
