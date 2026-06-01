import { useState } from 'react'

export default function LoanApplicationPage() {
  const [step, setStep] = useState(1)

  // disimpan di parent agar tidak reset
  const [quizAnswers, setQuizAnswers] = useState({})

  const questions = [
    {
      id: 1,
      question:
        'Apakah Anda memiliki KTP atau identitas resmi yang masih berlaku?',
    },
    {
      id: 2,
      question:
        'Apakah data yang Anda berikan sesuai dengan kondisi sebenarnya?',
    },
    {
      id: 3,
      question:
        'Apakah Anda memahami kewajiban pembayaran pinjaman tepat waktu?',
    },
    {
      id: 4,
      question:
        'Apakah Anda bersedia mengikuti proses verifikasi data?',
    },
    {
      id: 5,
      question:
        'Apakah Anda menyetujui seluruh syarat dan ketentuan peminjaman?',
    },
  ]

  const [error, setError] = useState('')

  const handleQuizSubmit = () => {
    // semua soal wajib dijawab
    if (Object.keys(quizAnswers).length !== questions.length) {
      setError('Semua pertanyaan wajib dijawab.')
      return
    }

    // semua jawaban harus A
    const allCorrect = questions.every(
      question => quizAnswers[question.id] === 'A'
    )

    if (!allCorrect) {
      setError(
        'Anda belum memenuhi syarat peminjaman. Semua jawaban harus A untuk melanjutkan.'
      )
      return
    }

    setError('')
    setStep(3)
  }

  return (
    <div className="max-w-4xl mx-auto p-6">
      {/* STEP 1 */}
      {step === 1 && (
        <div className="bg-white p-6 rounded-xl shadow">
          <h2 className="text-2xl font-bold mb-4">
            Step 1 - Data Diri
          </h2>

          <div className="space-y-4">
            <input
              type="text"
              placeholder="Nama Lengkap"
              className="w-full border p-3 rounded"
            />

            <input
              type="text"
              placeholder="Alamat"
              className="w-full border p-3 rounded"
            />

            <button
              onClick={() => setStep(2)}
              className="bg-blue-600 text-white px-6 py-3 rounded"
            >
              Lanjut
            </button>
          </div>
        </div>
      )}

      {/* STEP 2 */}
      {step === 2 && (
        <div className="bg-white p-6 rounded-xl shadow">
          <h2 className="text-2xl font-bold mb-2">
            Step 2 - Verifikasi Persyaratan
          </h2>

          <p className="text-gray-600 mb-6">
            Semua jawaban harus benar untuk
            melanjutkan proses peminjaman.
          </p>

          <div className="space-y-6">
            {questions.map(question => (
              <div
                key={question.id}
                className="border rounded-lg p-4"
              >
                <h3 className="font-semibold mb-4">
                  {question.id}. {question.question}
                </h3>

                <div className="space-y-2">
                  <label className="flex items-center gap-2">
                    <input
                      type="radio"
                      name={`question-${question.id}`}
                      value="A"
                      checked={
                        quizAnswers[question.id] === 'A'
                      }
                      onChange={() =>
                        setQuizAnswers(prev => ({
                          ...prev,
                          [question.id]: 'A',
                        }))
                      }
                    />
                    A. Ya
                  </label>

                  <label className="flex items-center gap-2">
                    <input
                      type="radio"
                      name={`question-${question.id}`}
                      value="B"
                      checked={
                        quizAnswers[question.id] === 'B'
                      }
                      onChange={() =>
                        setQuizAnswers(prev => ({
                          ...prev,
                          [question.id]: 'B',
                        }))
                      }
                    />
                    B. Tidak
                  </label>

                  <label className="flex items-center gap-2">
                    <input
                      type="radio"
                      name={`question-${question.id}`}
                      value="C"
                      checked={
                        quizAnswers[question.id] === 'C'
                      }
                      onChange={() =>
                        setQuizAnswers(prev => ({
                          ...prev,
                          [question.id]: 'C',
                        }))
                      }
                    />
                    C. Ragu-ragu
                  </label>

                  <label className="flex items-center gap-2">
                    <input
                      type="radio"
                      name={`question-${question.id}`}
                      value="D"
                      checked={
                        quizAnswers[question.id] === 'D'
                      }
                      onChange={() =>
                        setQuizAnswers(prev => ({
                          ...prev,
                          [question.id]: 'D',
                        }))
                      }
                    />
                    D. Tidak Tahu
                  </label>
                </div>
              </div>
            ))}

            {error && (
              <div className="bg-red-100 border border-red-300 text-red-700 p-3 rounded">
                {error}
              </div>
            )}

            <div className="flex justify-between">
              <button
                onClick={() => setStep(1)}
                className="border border-gray-300 px-6 py-3 rounded hover:bg-gray-100"
              >
                Kembali
              </button>

              <button
                onClick={handleQuizSubmit}
                className="bg-blue-600 text-white px-6 py-3 rounded"
              >
                Lanjutkan
              </button>
            </div>
          </div>
        </div>
      )}

      {/* STEP 3 */}
      {step === 3 && (
        <div className="bg-white p-6 rounded-xl shadow">
          <h2 className="text-2xl font-bold mb-4">
            Step 3 - Form Peminjaman
          </h2>

          <div className="space-y-4">
            <input
              type="number"
              placeholder="Jumlah Pinjaman"
              className="w-full border p-3 rounded"
            />

            <input
              type="number"
              placeholder="Jangka Waktu"
              className="w-full border p-3 rounded"
            />

            <div className="flex justify-between">
              <button
                onClick={() => setStep(2)}
                className="border border-gray-300 px-6 py-3 rounded hover:bg-gray-100"
              >
                Kembali
              </button>

              <button
                className="bg-green-600 text-white px-6 py-3 rounded"
              >
                Ajukan Pinjaman
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}