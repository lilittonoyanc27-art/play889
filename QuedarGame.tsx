import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  MapPin, 
  ArrowLeft, 
  Sparkles, 
  Home, 
  ShoppingBag,
  Clock,
  User,
  CheckCircle2,
  XCircle,
  PartyPopper
} from 'lucide-react';
import { QUEDAR_QUESTIONS } from './data';
import { CharacterType } from './types';

interface QuedarGameProps {
  onBack: () => void;
}

const QuedarGame: React.FC<QuedarGameProps> = ({ onBack }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [gameState, setGameState] = useState<'playing' | 'feedback' | 'finished'>('playing');
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [isCorrect, setIsCorrect] = useState<boolean | null>(null);
  const [turn, setTurn] = useState<CharacterType>('Gor');

  const currentQuestion = QUEDAR_QUESTIONS[currentIndex];

  const handleAnswer = (option: string) => {
    if (gameState !== 'playing') return;

    setSelectedOption(option);
    const correct = option === currentQuestion.correctAnswer;
    setIsCorrect(correct);
    setGameState('feedback');

    if (correct) {
      setScore(prev => prev + 10);
    }

    setTimeout(() => {
      if (currentIndex < QUEDAR_QUESTIONS.length - 1) {
        setCurrentIndex(prev => prev + 1);
        setTurn(prev => prev === 'Gor' ? 'Gayane' : 'Gor');
        setGameState('playing');
        setSelectedOption(null);
        setIsCorrect(null);
      } else {
        setGameState('finished');
      }
    }, 1500);
  };

  if (gameState === 'finished') {
    return (
      <div className="flex flex-col items-center justify-center py-20 px-4">
        <motion.div 
          initial={{ scale: 0, rotate: -180 }}
          animate={{ scale: 1, rotate: 0 }}
          className="w-40 h-40 bg-brand-blue rounded-[60px] flex items-center justify-center shadow-2xl mb-12"
        >
          <PartyPopper className="w-20 h-20 text-white" />
        </motion.div>
        
        <div className="text-center space-y-6 mb-12">
          <h2 className="text-6xl font-black text-slate-800 uppercase italic tracking-tighter">Գերազանց է!</h2>
          <p className="text-2xl font-bold text-slate-400 uppercase tracking-widest leading-none">Դուք հաղթահարեցիք Quedar-ի փորձությունը</p>
          <div className="text-8xl font-black text-brand-blue italic">{score}</div>
          <p className="text-slate-400 font-bold uppercase tracking-widest text-sm">Վաստակած միավորներ</p>
        </div>

        <button 
          onClick={onBack}
          className="group px-12 py-6 bg-slate-800 text-white rounded-full font-black uppercase italic tracking-widest hover:scale-105 transition-all flex items-center gap-4 shadow-xl border-b-8 border-slate-900 active:border-b-0 active:translate-y-2"
        >
          <ArrowLeft className="w-6 h-6 group-hover:-translate-x-2 transition-transform" /> Գլխավոր Մենյու
        </button>
      </div>
    );
  }

  return (
    <div className="max-w-6xl mx-auto py-8 px-4 perspective-1000">
      {/* 3D-ish Header */}
      <div className="relative z-20 flex justify-between items-end mb-12">
        <div className="bg-white p-6 rounded-[32px] shadow-2xl border-b-4 border-slate-100 flex items-center gap-6 transform -rotate-1">
          <div className={`w-16 h-16 rounded-2xl flex items-center justify-center text-white shadow-lg ${turn === 'Gor' ? 'bg-brand-blue' : 'bg-amber-500'} transition-colors`}>
            <User className="w-10 h-10" />
          </div>
          <div>
            <p className="text-[10px] font-black uppercase text-slate-400 tracking-[0.3em]">Խաղացող</p>
            <p className="text-3xl font-black text-slate-800 italic uppercase">{turn === 'Gor' ? 'Գոռ' : 'Գայանե'}</p>
          </div>
        </div>

        <div className="bg-slate-800 px-8 py-4 rounded-[32px] shadow-2xl flex flex-col items-center transform rotate-1">
          <p className="text-brand-blue text-[10px] font-black uppercase tracking-[0.4em]">Միավորներ</p>
          <span className="text-4xl font-black text-white italic">{score}</span>
        </div>
      </div>

      {/* 3D-ish Stage */}
      <div className="relative h-[400px] mb-12 group">
        {/* Ground */}
        <div className="absolute inset-0 bg-slate-100 rounded-[60px] shadow-inner border-4 border-white/50 overflow-hidden">
          <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(#000 1px, transparent 1px)', backgroundSize: '20px 20px' }} />
          
          {/* Street Lines */}
          <div className="absolute inset-x-0 top-1/2 h-2 bg-white/40 -translate-y-1/2" />
          <div className="absolute inset-y-0 left-1/4 w-px bg-white/20" />
          <div className="absolute inset-y-0 left-2/4 w-px bg-white/20" />
          <div className="absolute inset-y-0 left-3/4 w-px bg-white/20" />
        </div>

        {/* Props */}
        <div className="absolute inset-0 flex items-center justify-around px-20">
          <motion.div 
            animate={{ scale: turn === 'Gor' ? 1.2 : 1, y: turn === 'Gor' ? -20 : 0 }}
            className={`flex flex-col items-center gap-4 ${turn === 'Gor' ? 'z-30' : 'z-10 opacity-50'}`}
          >
            <div className="relative">
              <div className="absolute -inset-4 bg-brand-blue/20 blur-2xl rounded-full" />
              <div className="w-24 h-24 bg-white rounded-[32px] shadow-2xl flex items-center justify-center text-brand-blue border-b-8 border-slate-100">
                <User className="w-16 h-16" />
              </div>
            </div>
            <span className="bg-slate-800 text-white px-4 py-1 rounded-full text-xs font-black uppercase">Գոռ</span>
          </motion.div>

          <div className="h-32 w-px bg-slate-200" />

          <motion.div 
            animate={{ scale: turn === 'Gayane' ? 1.2 : 1, y: turn === 'Gayane' ? -20 : 0 }}
            className={`flex flex-col items-center gap-4 ${turn === 'Gayane' ? 'z-30' : 'z-10 opacity-50'}`}
          >
            <div className="relative">
              <div className="absolute -inset-4 bg-amber-500/20 blur-2xl rounded-full" />
              <div className="w-24 h-24 bg-white rounded-[32px] shadow-2xl flex items-center justify-center text-amber-500 border-b-8 border-slate-100">
                <User className="w-16 h-16" />
              </div>
            </div>
            <span className="bg-slate-800 text-white px-4 py-1 rounded-full text-xs font-black uppercase">Գայանե</span>
          </motion.div>
        </div>

        {/* Feedback Overlay */}
        <AnimatePresence>
          {gameState === 'feedback' && (
            <motion.div 
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 1.2 }}
              className="absolute inset-0 z-50 flex items-center justify-center bg-white/20 backdrop-blur-sm rounded-[60px]"
            >
              <div className={`p-8 rounded-[40px] shadow-2xl flex items-center gap-6 ${isCorrect ? 'bg-green-500' : 'bg-rose-500'} text-white`}>
                {isCorrect ? <CheckCircle2 className="w-12 h-12" /> : <XCircle className="w-12 h-12" />}
                <span className="text-3xl font-black uppercase italic tracking-widest">{isCorrect ? 'Ճիշտ է!' : 'Սխալ է!'}</span>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Question Card */}
      <div className="bg-white p-8 sm:p-16 rounded-[60px] shadow-2xl border-t-8 border-slate-50 space-y-12 relative overflow-hidden">
        {/* Progress Bar */}
        <div className="absolute top-0 left-0 w-full h-2 bg-slate-100">
          <motion.div 
            className="h-full bg-brand-blue" 
            initial={{ width: 0 }}
            animate={{ width: `${(currentIndex / QUEDAR_QUESTIONS.length) * 100}%` }}
          />
        </div>

        <div className="text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1 bg-brand-blue/10 text-brand-blue rounded-full text-[10px] font-black uppercase tracking-[0.2em] mb-4">
             <Clock className="w-3 h-3" /> Հարց {currentIndex + 1} / {QUEDAR_QUESTIONS.length}
          </div>
          <h3 className="text-4xl sm:text-6xl font-black text-slate-800 italic leading-tight tracking-tight">
             {currentQuestion.sentence.split('___').map((part, i, arr) => (
               <React.Fragment key={i}>
                 {part}
                 {i < arr.length - 1 && (
                   <span className="inline-block px-8 mx-2 border-b-8 border-brand-blue min-w-[120px] h-12 sm:h-20" />
                 )}
               </React.Fragment>
             ))}
          </h3>
          <p className="text-2xl font-bold text-slate-400 uppercase tracking-widest italic">{currentQuestion.translation}</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {currentQuestion.options.map((option, idx) => (
            <motion.button
              key={idx}
              whileHover={{ scale: 1.02, y: -5 }}
              whileTap={{ scale: 0.98 }}
              disabled={gameState !== 'playing'}
              onClick={() => handleAnswer(option)}
              className={`
                p-8 rounded-[40px] font-black uppercase italic tracking-[0.2em] text-xl transition-all border-b-8
                ${selectedOption === option 
                  ? (isCorrect ? 'bg-green-500 text-white border-green-700' : 'bg-rose-500 text-white border-rose-700')
                  : 'bg-slate-50 text-slate-600 border-slate-200 hover:bg-white hover:shadow-2xl hover:border-brand-blue'}
              `}
            >
              {option}
            </motion.button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default QuedarGame;
