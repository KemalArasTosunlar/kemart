import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { AddressStep } from './steps/AddressStep'
import { PaymentStep } from './steps/PaymentStep'
import { Button } from '../components/ui/button'
import { LoadingSpinner } from '../components/ui/loading-spinner'

const steps = ['Address', 'Payment']

export default function CreateOrderPage() {
  const [currentStep, setCurrentStep] = useState(0)
  const navigate = useNavigate()
  const addressState = useSelector((state) => state.address) || { selectedAddresses: {}, loading: false, error: null }
  const { selectedAddresses, loading, error } = addressState
  const cart = useSelector((state) => state.shoppingCart?.cart) || []

  const canProceedToPayment = () => {
    return (
      selectedAddresses?.shipping &&
      (selectedAddresses?.sameAsShipping || selectedAddresses?.billing)
    )
  }

  const handleNext = () => {
    if (currentStep === 0 && !canProceedToPayment()) {
      alert('Lütfen teslimat ve fatura adreslerini seçin')
      return
    }
    setCurrentStep((prev) => Math.min(prev + 1, steps.length - 1))
  }

  const handleBack = () => {
    setCurrentStep((prev) => Math.max(prev - 1, 0))
  }

  if (loading) {
    return (
      <div className="container mx-auto py-8">
        <LoadingSpinner className="h-[400px]" />
      </div>
    )
  }

  if (error) {
    return (
      <div className="container mx-auto py-8">
        <div className="bg-red-50 p-4 rounded text-red-600">
          {error}
        </div>
      </div>
    )
  }

  return (
    <div className="container mx-auto py-8">
      <div className="max-w-3xl mx-auto">
        {/* Progress Steps */}
        <div className="mb-8 flex justify-between">
          {steps.map((step, index) => (
            <div
              key={step}
              className={`flex items-center ${
                index === currentStep ? 'text-[#23A6F0]' : 'text-gray-500'
              }`}
            >
              <div
                className={`w-8 h-8 rounded-full flex items-center justify-center border-2 ${
                  index === currentStep
                    ? 'border-[#23A6F0] text-[#23A6F0]'
                    : 'border-gray-300'
                }`}
              >
                {index + 1}
              </div>
              <span className="ml-2">{step}</span>
              {index < steps.length - 1 && (
                <div className="mx-4 h-[2px] w-16 bg-gray-300" />
              )}
            </div>
          ))}
        </div>

        {/* Step Content */}
        <div className="bg-white rounded-lg shadow p-6">
          {currentStep === 0 ? (
            <AddressStep />
          ) : (
            <PaymentStep />
          )}
        </div>

        {/* Navigation Buttons */}
        <div className="mt-6 flex justify-between">
          <Button
            variant="outline"
            onClick={handleBack}
            disabled={currentStep === 0}
          >
            Geri
          </Button>
          <Button
            className="bg-[#23A6F0] hover:bg-[#1a7fb8]"
            onClick={handleNext}
            disabled={currentStep === 0 && !canProceedToPayment()}
          >
            {currentStep === steps.length - 1 ? 'Siparişi Tamamla' : 'Devam Et'}
          </Button>
        </div>
      </div>
    </div>
  )
}
