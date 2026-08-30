interface QuizQuestionProps {
  question: {
    id: string;
    text: string;
    options: string[];
    answer: number;
    explanation: string;
    tcodeRef?: string;
    mode: "sap-focus" | "process-flow";
  };
  /** Index in the quiz (0-based) */
  index: number;
  /** Selected option index, or null if unanswered */
  selected: number | null;
  /** Whether the answer has been revealed */
  revealed: boolean;
  onSelect: (optionIndex: number) => void;
}

export function QuizQuestion({
  question,
  index,
  selected,
  revealed,
  onSelect,
}: QuizQuestionProps) {
  const isCorrect = selected === question.answer;

  return (
    <div className="flex flex-col gap-4">
      {/* Question header */}
      <div className="flex items-start gap-3">
        <span
          className={`shrink-0 w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold
            ${revealed
              ? isCorrect
                ? "bg-[#E8F0E4] text-[#1C3A2B] border-2 border-[#4E7862]"
                : "bg-[#FCDEDE] text-[#9B3030] border-2 border-[#9B3030]"
              : "bg-[#1C3A2B] text-white"
            }`}
          aria-hidden="true"
        >
          {revealed ? (isCorrect ? "✓" : "✗") : index + 1}
        </span>
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 mb-2 flex-wrap">
            <span
              className={`text-[10px] font-semibold uppercase tracking-wider px-2 py-0.5 rounded-full
                ${question.mode === "sap-focus"
                  ? "bg-[#F8EBC5] text-[#7A5E0A]"
                  : "bg-[#E8F0E4] text-[#1C3A2B]"
                }`}
            >
              {question.mode === "sap-focus" ? "SAP Focus" : "Process Flow"}
            </span>
            {question.tcodeRef && (
              <span className="font-mono text-[10px] px-1.5 py-0.5 rounded bg-[#EDE9E1] text-[#6B7A6F]">
                {question.tcodeRef}
              </span>
            )}
          </div>
          <p className="text-[#2A2E2B] text-sm leading-relaxed font-medium">{question.text}</p>
        </div>
      </div>

      {/* Options */}
      <div className="flex flex-col gap-2 pl-11">
        {question.options.map((option, optIdx) => {
          let state: "default" | "selected" | "correct" | "wrong" | "missed" = "default";
          if (revealed) {
            if (optIdx === question.answer) state = "correct";
            else if (optIdx === selected) state = "wrong";
            else state = "missed";
          } else if (optIdx === selected) {
            state = "selected";
          }

          const stateClasses: Record<typeof state, string> = {
            default:
              "border-[#D9D4C8] bg-[#FAFAF8] hover:border-[#4E7862] hover:bg-[#E8F0E4] cursor-pointer",
            selected:
              "border-[#1C3A2B] bg-[#E8F0E4] cursor-pointer",
            correct:
              "border-[#4E7862] bg-[#E8F0E4] text-[#1C3A2B] font-medium cursor-default",
            wrong:
              "border-[#9B3030] bg-[#FCDEDE] text-[#9B3030] cursor-default",
            missed:
              "border-[#D9D4C8] bg-[#FAFAF8] text-[#6B7A6F] cursor-default opacity-60",
          };

          const optionLetter = String.fromCharCode(65 + optIdx); // A, B, C, D

          return (
            <button
              key={optIdx}
              onClick={() => !revealed && onSelect(optIdx)}
              disabled={revealed}
              className={`flex items-start gap-3 w-full text-left p-3 rounded-lg border text-sm
                          transition-all ${stateClasses[state]}`}
              aria-pressed={selected === optIdx}
            >
              <span
                className={`shrink-0 w-5 h-5 rounded flex items-center justify-center text-[10px] font-bold mt-0.5
                  ${state === "correct" ? "bg-[#1C3A2B] text-white" :
                    state === "wrong" ? "bg-[#9B3030] text-white" :
                    state === "selected" ? "bg-[#1C3A2B] text-white" :
                    "bg-[#EDE9E1] text-[#6B7A6F]"
                  }`}
              >
                {optionLetter}
              </span>
              <span className="flex-1 leading-relaxed">{option}</span>
              {state === "correct" && (
                <span className="shrink-0 text-[#4E7862] font-bold" aria-hidden="true">✓</span>
              )}
              {state === "wrong" && (
                <span className="shrink-0 text-[#9B3030] font-bold" aria-hidden="true">✗</span>
              )}
            </button>
          );
        })}
      </div>

      {/* Explanation — shown after reveal */}
      {revealed && (
        <div
          className={`pl-11 p-4 rounded-lg text-sm leading-relaxed border
            ${isCorrect
              ? "bg-[#E8F0E4] border-[#C8DFC5] text-[#1C3A2B]"
              : "bg-[#FFF9EC] border-[#E8D585] text-[#5A4200]"
            }`}
          role="alert"
        >
          <strong className="font-semibold">{isCorrect ? "Correct! " : "Not quite — "}</strong>
          {question.explanation}
        </div>
      )}
    </div>
  );
}
