// ============================================================================
// SKIN TYPE QUIZ - Onboarding flow for personalized recommendations
// ============================================================================

import { ArrowLeft, CheckCircle2, Sparkles, Sun } from 'lucide-react'
import { motion, AnimatePresence } from 'motion/react'
import { useState } from 'react'

interface QuizQuestion {
  id: string
  question: string
  subtitle?: string
  options: {
    label: string
    value: string
    emoji?: string
    description?: string
  }[]
}

interface QuizResult {
  skinType: number
  label: string
  description: string
  recommendations: string[]
  spfRecommendation: number
  tentRecommendation: string
  riskLevel: 'low' | 'moderate' | 'high' | 'very-high'
}

const QUIZ_QUESTIONS: QuizQuestion[] = [
  {
    id: 'eye-color',
    question: 'What is your natural eye color?',
    subtitle: 'This helps determine your skin sensitivity',
    options: [
      { label: 'Light blue, light gray, or light green', value: '1', emoji: '👁️' },
      { label: 'Blue, gray, or green', value: '2', emoji: '👁️' },
      { label: 'Hazel or light brown', value: '3', emoji: '👁️' },
      { label: 'Dark brown', value: '4', emoji: '👁️' },
      { label: 'Brownish black', value: '5', emoji: '👁️' },
    ],
  },
  {
    id: 'hair-color',
    question: 'What is your natural hair color?',
    options: [
      { label: 'Red or light blonde', value: '1', emoji: '💇' },
      { label: 'Blonde', value: '2', emoji: '💇' },
      { label: 'Dark blonde or light brown', value: '3', emoji: '💇' },
      { label: 'Dark brown', value: '4', emoji: '💇' },
      { label: 'Black', value: '5', emoji: '💇' },
    ],
  },
  {
    id: 'skin-reaction',
    question: 'How does your skin react to sun exposure?',
    subtitle: 'Think about unprotected sun exposure for 30 minutes',
    options: [
      { label: 'Always burns, never tans', value: '1', emoji: '🔴' },
      { label: 'Burns easily, tans minimally', value: '2', emoji: '🟠' },
      { label: 'Burns moderately, tans gradually', value: '3', emoji: '🟡' },
      { label: 'Burns minimally, tans well', value: '4', emoji: '🟢' },
      { label: 'Rarely burns, tans darkly', value: '5', emoji: '🟤' },
    ],
  },
  {
    id: 'freckling',
    question: 'Do you have freckles?',
    options: [
      { label: 'Many freckles', value: '1', emoji: '✨' },
      { label: 'Several freckles', value: '2', emoji: '✨' },
      { label: 'A few freckles', value: '3', emoji: '✨' },
      { label: 'Very few freckles', value: '4', emoji: '✨' },
      { label: 'No freckles', value: '5', emoji: '✨' },
    ],
  },
  {
    id: 'activity',
    question: 'What outdoor activity do you enjoy most?',
    subtitle: 'This helps us recommend the right Sun Ninja setup',
    options: [
      { label: 'Beach & Swimming', value: 'beach', emoji: '🏖️', description: 'Max UV exposure' },
      {
        label: 'Hiking & Camping',
        value: 'hiking',
        emoji: '🥾',
        description: 'Extended outdoor time',
      },
      { label: 'Sports & Fitness', value: 'sports', emoji: '⚽', description: 'Active movement' },
      { label: 'Picnics & Parks', value: 'picnic', emoji: '🧺', description: 'Relaxed shade time' },
      { label: 'Backyard & Pool', value: 'pool', emoji: '🏊', description: 'Home base coverage' },
    ],
  },
]

function calculateResult(answers: Record<string, string>): QuizResult {
  const numericAnswers = ['eye-color', 'hair-color', 'skin-reaction', 'freckling']
  const avgScore =
    numericAnswers.reduce((sum, key) => sum + parseInt(answers[key] || '3'), 0) /
    numericAnswers.length

  let skinType: number
  let riskLevel: 'low' | 'moderate' | 'high' | 'very-high'

  if (avgScore <= 1.5) {
    skinType = 1
    riskLevel = 'very-high'
  } else if (avgScore <= 2.5) {
    skinType = 2
    riskLevel = 'high'
  } else if (avgScore <= 3.5) {
    skinType = 3
    riskLevel = 'moderate'
  } else if (avgScore <= 4.5) {
    skinType = 4
    riskLevel = 'low'
  } else {
    skinType = 5
    riskLevel = 'low'
  }

  const activity = answers['activity'] || 'beach'

  const recommendations: Record<number, string[]> = {
    1: [
      'Apply SPF 50+ every 90 minutes',
      'Wear UV-protective clothing',
      'Set up Sun Ninja tent immediately on arrival',
      'Avoid peak UV hours (10AM-4PM)',
      'Use wide-brim hat and UV-blocking sunglasses',
    ],
    2: [
      'Apply SPF 50 every 2 hours',
      'Seek shade during peak hours',
      'Sun Ninja tent is strongly recommended',
      'Wear light long-sleeve layers when possible',
      'Stay hydrated — UV exposure increases dehydration',
    ],
    3: [
      'Apply SPF 30-50 every 2 hours',
      'Use Sun Ninja tent for extended outdoor time',
      'Monitor UV index throughout the day',
      'Reapply sunscreen after swimming',
    ],
    4: [
      'Apply SPF 30 regularly',
      'Sun Ninja tent great for family comfort',
      'Still monitor UV index on very high days',
      'Enjoy outdoor activities with basic protection',
    ],
    5: [
      'Apply SPF 15-30 as needed',
      'Sun Ninja tent provides comfort & wind protection',
      'UV protection still recommended on extreme days',
    ],
  }

  const tentRecommendations: Record<string, string> = {
    beach: 'Sun Ninja XL Beach Tent — Maximum coverage for beach days',
    hiking: 'Sun Ninja Compact Tent — Lightweight and portable for trails',
    sports: 'Sun Ninja Sport Shelter — Quick setup between activities',
    picnic: 'Sun Ninja Family Tent — Spacious shade for groups',
    pool: 'Sun Ninja Pop-Up Canopy — Quick shade for your backyard',
  }

  return {
    skinType,
    label: `Type ${skinType}`,
    description:
      skinType <= 2
        ? 'High sensitivity to UV'
        : skinType <= 3
          ? 'Moderate sensitivity'
          : 'Lower sensitivity',
    recommendations: recommendations[skinType] || recommendations[3],
    spfRecommendation: skinType <= 2 ? 50 : skinType <= 3 ? 30 : 15,
    tentRecommendation: tentRecommendations[activity] || tentRecommendations.beach,
    riskLevel,
  }
}

export function SkinTypeQuiz({ onComplete }: { onComplete?: (result: QuizResult) => void }) {
  const [currentStep, setCurrentStep] = useState(0)
  const [answers, setAnswers] = useState<Record<string, string>>({})
  const [result, setResult] = useState<QuizResult | null>(null)
  const [direction, setDirection] = useState(1)

  const progress = (currentStep / QUIZ_QUESTIONS.length) * 100
  const currentQuestion = QUIZ_QUESTIONS[currentStep]
  const isLastQuestion = currentStep === QUIZ_QUESTIONS.length - 1

  const handleAnswer = (value: string) => {
    const newAnswers = { ...answers, [currentQuestion.id]: value }
    setAnswers(newAnswers)

    if (isLastQuestion) {
      const quizResult = calculateResult(newAnswers)
      setResult(quizResult)
      onComplete?.(quizResult)
    } else {
      setDirection(1)
      setTimeout(() => setCurrentStep((prev) => prev + 1), 200)
    }
  }

  const goBack = () => {
    if (result) {
      setResult(null)
      return
    }
    if (currentStep > 0) {
      setDirection(-1)
      setCurrentStep((prev) => prev - 1)
    }
  }

  return (
    <div className="max-w-lg mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="rounded-2xl bg-white border border-border shadow-xl overflow-hidden"
      >
        {/* Header */}
        <div className="px-6 py-5 bg-gradient-to-r from-[#0EA5E9] to-[#FF6B6B] text-white">
          <div className="flex items-center gap-3">
            <Sun className="w-8 h-8" />
            <div>
              <h2 className="text-lg font-bold">Sun Protection Quiz</h2>
              <p className="text-white/80 text-sm">
                Get personalized UV protection recommendations
              </p>
            </div>
          </div>
        </div>

        {/* Progress Bar */}
        {!result && (
          <div className="px-6 pt-4">
            <div className="flex items-center justify-between text-xs text-muted-foreground mb-2">
              <span>
                Question {currentStep + 1} of {QUIZ_QUESTIONS.length}
              </span>
              <span>{Math.round(progress)}%</span>
            </div>
            <div className="h-2 bg-neutral-100 rounded-full overflow-hidden">
              <motion.div
                className="h-full bg-gradient-to-r from-[#0EA5E9] to-[#FF6B6B] rounded-full"
                animate={{ width: `${progress}%` }}
                transition={{ duration: 0.3 }}
              />
            </div>
          </div>
        )}

        {/* Content */}
        <div className="p-6 min-h-[340px]">
          <AnimatePresence mode="wait">
            {result ? (
              <motion.div
                key="result"
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                className="space-y-5"
              >
                <div className="text-center">
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                    className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-green-100 mb-3"
                  >
                    <CheckCircle2 className="w-8 h-8 text-green-600" />
                  </motion.div>
                  <h3 className="text-xl font-bold">Your Sun Profile</h3>
                  <p className="text-muted-foreground text-sm mt-1">
                    {result.label} — {result.description}
                  </p>
                </div>

                <div className="bg-[#0EA5E9]/5 rounded-xl p-4">
                  <div className="flex items-center gap-2 text-[#0EA5E9] font-semibold text-sm mb-2">
                    <Sparkles className="w-4 h-4" />
                    Recommended Setup
                  </div>
                  <p className="text-sm font-medium">{result.tentRecommendation}</p>
                  <p className="text-xs text-muted-foreground mt-1">
                    SPF {result.spfRecommendation}+ recommended for your skin type
                  </p>
                </div>

                <div className="space-y-2">
                  <h4 className="text-sm font-semibold">Your Protection Plan:</h4>
                  {result.recommendations.map((rec, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.1 }}
                      className="flex items-start gap-2 text-sm"
                    >
                      <CheckCircle2 className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                      <span>{rec}</span>
                    </motion.div>
                  ))}
                </div>

                <button className="w-full py-3 rounded-xl bg-gradient-to-r from-[#FF6B6B] to-[#FFD700] text-white font-semibold text-sm hover:opacity-90 transition-opacity">
                  Shop Recommended Products →
                </button>
              </motion.div>
            ) : (
              <motion.div
                key={currentStep}
                initial={{ opacity: 0, x: direction * 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: direction * -50 }}
                transition={{ duration: 0.3 }}
                className="space-y-4"
              >
                <div>
                  <h3 className="text-lg font-bold">{currentQuestion.question}</h3>
                  {currentQuestion.subtitle && (
                    <p className="text-sm text-muted-foreground mt-1">{currentQuestion.subtitle}</p>
                  )}
                </div>

                <div className="space-y-2" role="radiogroup" aria-label={currentQuestion.question}>
                  {currentQuestion.options.map((option) => (
                    <button
                      key={option.value}
                      role="radio"
                      aria-checked={answers[currentQuestion.id] === option.value}
                      onClick={() => handleAnswer(option.value)}
                      className={`w-full flex items-center gap-3 px-4 py-3.5 rounded-xl border text-left transition-all hover:border-[#0EA5E9] hover:bg-[#0EA5E9]/5 ${
                        answers[currentQuestion.id] === option.value
                          ? 'border-[#0EA5E9] bg-[#0EA5E9]/5'
                          : 'border-border'
                      }`}
                    >
                      <span className="text-xl">{option.emoji}</span>
                      <div>
                        <span className="text-sm font-medium">{option.label}</span>
                        {option.description && (
                          <p className="text-xs text-muted-foreground">{option.description}</p>
                        )}
                      </div>
                    </button>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Navigation */}
        <div className="px-6 py-4 border-t border-border flex items-center justify-between">
          <button
            onClick={goBack}
            disabled={currentStep === 0 && !result}
            className="flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground transition-colors disabled:opacity-30 disabled:cursor-not-allowed"
          >
            <ArrowLeft className="w-4 h-4" /> Back
          </button>

          {!result && (
            <span className="text-xs text-muted-foreground">Select an option to continue</span>
          )}
        </div>
      </motion.div>
    </div>
  )
}
