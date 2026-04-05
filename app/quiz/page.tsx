"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Check, X, ArrowRight, Trophy } from "lucide-react";
import Link from "next/link";

const questions = [
  { id: 1, text: "Apa arti dari ungkapan 'Good Morning'?", options: ["Selamat Malam", "Selamat Pagi", "Selamat Siang", "Selamat Datang"], answer: "Selamat Pagi" },
  { id: 2, text: "Dalam Bahasa Inggris, kata untuk hewan 'Kucing' adalah...", options: ["Dog", "Cat", "Bird", "Fish"], answer: "Cat" },
  { id: 3, text: "Jika seseorang berkata 'How are you?', jawaban yang tepat adalah?", options: ["My name is Andi", "I am fine, thank you", "Nice to meet you", "See you later"], answer: "I am fine, thank you" },
  { id: 4, text: "Angka 'Lima' dalam Bahasa Inggris adalah?", options: ["Four", "Six", "Five", "Three"], answer: "Five" },
  { id: 5, text: "Warna langit pada siang hari yang cerah adalah? (Biru)", options: ["Red", "Green", "Blue", "Black"], answer: "Blue" },
  { id: 6, text: "Apa Bahasa Inggris dari keluarga 'Ayah'?", options: ["Mother", "Father", "Brother", "Sister"], answer: "Father" },
  { id: 7, text: "Kapan kamu biasanya mengucapkan 'Good Night'?", options: ["Saat bangun tidur", "Saat makan siang", "Saat akan tidur", "Saat bertemu teman"], answer: "Saat akan tidur" },
  { id: 8, text: "Benda apakah ini? 'A tool used for writing.' (Sebuah alat untuk menulis)", options: ["Book", "Eraser", "Pencil", "Bag"], answer: "Pencil" },
  { id: 9, text: "Tebak hewan ini: 'It is very big and has a long trunk.' (Sangat besar dan punya belalai)", options: ["Tiger", "Monkey", "Elephant", "Snake"], answer: "Elephant" },
  { id: 10, text: "Manakah kalimat yang berarti 'Saya suka apel'?", options: ["I have an apple", "I like apples", "I eat oranges", "I want a banana"], answer: "I like apples" },
];

export default function QuizPage() {
  const [currentStep, setCurrentStep] = useState(0);
  const [selected, setSelected] = useState<string | null>(null);
  const [score, setScore] = useState(0);

  const isFinished = currentStep >= questions.length;
  const currentQ = questions[currentStep];

  const handleNext = () => {
    if (selected === currentQ.answer) setScore(s => s + 1);
    setSelected(null);
    setCurrentStep(s => s + 1);
  };

  return (
    <div className="flex flex-col min-h-screen px-4 pt-12 pb-24 md:pb-12 max-w-lg mx-auto w-full">
      <AnimatePresence mode="wait">
        {!isFinished ? (
          <motion.div
            key="quiz"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            className="flex-1 flex flex-col"
          >
            {/* Progress Bar */}
            <div className="w-full h-2 bg-secondary rounded-full overflow-hidden mb-8">
              <motion.div 
                className="h-full bg-primary" 
                initial={{ width: 0 }}
                animate={{ width: `${(currentStep / questions.length) * 100}%` }}
              />
            </div>

            <span className="text-primary font-semibold text-sm mb-2">Pertanyaan {currentStep + 1} dari {questions.length}</span>
            <h2 className="text-2xl font-bold text-foreground mb-8">{currentQ.text}</h2>

            <div className="flex flex-col gap-3">
              {currentQ.options.map((opt) => (
                <button
                  key={opt}
                  onClick={() => setSelected(opt)}
                  className={`p-4 rounded-2xl border-2 text-left font-medium transition-all ${
                    selected === opt 
                      ? "border-primary bg-primary/5 text-primary" 
                      : "border-border bg-card hover:border-primary/30"
                  }`}
                >
                  {opt}
                </button>
              ))}
            </div>

            <div className="mt-auto pt-8">
              <button
                disabled={!selected}
                onClick={handleNext}
                className="w-full bg-primary flex items-center justify-center gap-2 text-primary-foreground font-semibold py-4 rounded-2xl text-lg hover:bg-primary/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Selanjutnya <ArrowRight className="w-5 h-5" />
              </button>
            </div>
          </motion.div>
        ) : (
          <motion.div
            key="result"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="flex-1 flex flex-col items-center justify-center text-center mt-12"
          >
            <div className="w-24 h-24 bg-yellow-100 text-yellow-500 rounded-full flex items-center justify-center mb-6 shadow-inner">
              <Trophy className="w-12 h-12" />
            </div>
            <h2 className="text-3xl font-bold text-foreground mb-2">Luar Biasa!</h2>
            <p className="text-foreground/70 mb-8">Kamu berhasil menyelesaikan kuis ini.</p>
            
            <div className="bg-card w-full p-6 rounded-3xl border border-border flex items-center justify-around mb-12">
              <div className="text-center">
                <span className="block text-3xl font-bold text-primary">{score}</span>
                <span className="text-xs text-foreground/50 uppercase font-bold tracking-wider">Benar</span>
              </div>
              <div className="w-px h-12 bg-border"></div>
              <div className="text-center">
                <span className="block text-3xl font-bold text-red-500">{questions.length - score}</span>
                <span className="text-xs text-foreground/50 uppercase font-bold tracking-wider">Salah</span>
              </div>
            </div>

            <Link href="/" className="w-full bg-primary text-primary-foreground font-semibold py-4 rounded-2xl text-lg hover:bg-primary/90 transition-colors block text-center">
              Kembali ke Beranda
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
