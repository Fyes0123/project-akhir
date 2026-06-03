import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

export default function Quiz() {
  const navigate = useNavigate()

  const [error, setError] = useState('')

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

  const handleSubmit = () => {
    if (
      Object.keys(quizAnswers).length !==
      questions.length
    ) {
      setError('Semua pertanyaan wajib dijawab.')
      return
    }

    const allCorrect = questions.every(
      question =>
        quizAnswers[question.id] === 'A'
    )

    if (!allCorrect) {
      setError(
        'Anda belum memenuhi syarat peminjaman. Semua jawaban harus A.'
      )
      return
    }

    setError('')
    navigate('/applyloan')
  }

  return (
    <div className="min-h-screen bg-gray-100 py-10 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="bg-lime-600 text-white text-center font-bold text-xl py-4 rounded-t-lg">
          Training
        </div>

        {/* Quiz Box */}
        <div className="bg-white border border-gray-300 p-8 shadow rounded-b-lg">
          <div className="space-y-8">
            {questions.map(question => (
              <div key={question.id}>
                <h3 className="font-semibold mb-4">
                  Question {question.id}
                </h3>

                <div className="flex flex-wrap gap-6">
                  {[
                    {
                      value: 'A',
                      label: 'Ya',
                    },
                    {
                      value: 'B',
                      label: 'Tidak',
                    },
                    {
                      value: 'C',
                      label: 'Ragu-ragu',
                    },
                    {
                      value: 'D',
                      label: 'Tidak Tahu',
                    },
                  ].map(option => (
                    <label
                      key={option.value}
                      className="flex items-center gap-2 cursor-pointer"
                    >
                      <input
                        type="radio"
                        name={`question-${question.id}`}
                        value={option.value}
                        checked={
                          quizAnswers[
                            question.id
                          ] === option.value
                        }
                        onChange={() =>
                          setQuizAnswers(prev => ({
                            ...prev,
                            [question.id]:
                              option.value,
                          }))
                        }
                      />

                      <span>
                        {option.value}.{' '}
                        {option.label}
                      </span>
                    </label>
                  ))}
                </div>

                <p className="text-gray-600 mt-2 text-sm">
                  {question.question}
                </p>
              </div>
            ))}
          </div>

          {error && (
            <div className="mt-6 bg-red-100 border border-red-300 text-red-700 p-3 rounded">
              {error}
            </div>
          )}

          <div className="flex justify-between mt-10">
            <button
              onClick={() => navigate(-1)}
              className="bg-lime-600 hover:bg-lime-700 text-white px-8 py-3 rounded"
              onClick={() => navigate('/module')}
            >
              Go Back
            </button>

            <button
              onClick={handleSubmit}
              className="bg-lime-600 hover:bg-lime-700 text-white px-8 py-3 rounded"
              onClick={() => navigate('/dashboardnasabah')}
            >
              Proceed
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}