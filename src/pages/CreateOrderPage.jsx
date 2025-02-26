import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { AddressStep } from './steps/AddressStep'
import { PaymentStep } from './steps/PaymentStep'
import { Button } from '../components/ui/button'
import { LoadingSpinner } from '../components/ui/loading-spinner'
import { toast } from 'react-hot-toast'
import orderService from '../services/orderService'

import { resetCart } from '../store/actions/shoppingCartActions'

export default function CreateOrderPage() {
  const [currentStep, setCurrentStep] = useState(0)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const navigate = useNavigate()
  const dispatch = useDispatch()
  
  const { selectedAddresses = {}, loading: addressLoading = false, error: addressError = null } = useSelector((state) => state.address || {})
  const { selectedCard = null, loading: cardLoading = false, error: cardError = null } = useSelector((state) => state.card || {})
  const cart = useSelector((state) => state.shoppingCart?.cart ?? [])

  const canProceedToPayment = () => {
    if (!selectedAddresses?.shipping) {
      toast.error('Lütfen bir teslimat adresi seçin')
      return false
    }
    if (!selectedAddresses?.sameAsShipping && !selectedAddresses?.billing) {
      toast.error('Lütfen bir fatura adresi seçin')
      return false
    }
    return true
  }

  const canCompleteOrder = () => {
    if (currentStep === 1 && !selectedCard) {
      toast.error('Lütfen bir ödeme yöntemi seçin')
      return false
    }
    return true
  }

  const createOrder = async () => {
    const orderData = {
      address_id: selectedAddresses.shipping.id,
      order_date: new Date().toISOString(),
      card_no: selectedCard.cardNumber,
      card_name: selectedCard.cardHolderName,
      card_expire_month: selectedCard.expiryMonth,
      card_expire_year: selectedCard.expiryYear,
      card_ccv: selectedCard.cvv,
      price: cart.reduce((total, item) => total + (item.product.price * item.count), 0),
      products: cart.map(item => ({
        product_id: item.product.id,
        count: item.count,
        detail: item.product.variant || ''
      }))
    }

    try {
      setIsSubmitting(true)
      await orderService.createOrder(orderData);
      toast.success('Siparişiniz başarıyla oluşturuldu');
      dispatch(resetCart());
      navigate('/orders');
    } catch (error) {

      toast.error('Sipariş oluşturulurken bir hata oluştu')
      console.error('Order creation error:', error)
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleNext = () => {
    if (currentStep === 0 && !canProceedToPayment()) {
      toast.error('Lütfen teslimat ve fatura adreslerini seçin')
      return
    }

    if (currentStep === 1 && !canCompleteOrder()) {
      return
    }

    if (currentStep === steps.length - 1) {
      createOrder()
      return
    }

    setCurrentStep((prev) => prev + 1)
  }

  const handleBack = () => {
    setCurrentStep((prev) => Math.max(prev - 1, 0))
  }

  if (addressLoading || cardLoading) {
    return (
      <div className="container mx-auto py-8">
        <LoadingSpinner className="h-[400px]" />
      </div>
    )
  }

  if (addressError || cardError) {
    return (
      <div className="container mx-auto py-8">
        <div className="bg-red-50 p-4 rounded text-red-600">
          {addressError || cardError}
        </div>
      </div>
    )
  }

  const steps = [
    { title: 'Adres', component: AddressStep },
    { title: 'Ödeme', component: PaymentStep }
  ]

  return (
    <div className="container mx-auto py-8">
      <div className="max-w-3xl mx-auto">
        {/* Progress Steps */}
        <div className="mb-8 flex justify-between">
          {steps.map((step, index) => (
            <div
              key={step.title}
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
              <span className="ml-2">{step.title}</span>
              {index < steps.length - 1 && (
                <div className="mx-4 h-[2px] w-16 bg-gray-300" />
              )}
            </div>
          ))}
        </div>

        {/* Step Content */}
        <div className="bg-white rounded-lg shadow p-6">
          {React.createElement(steps[currentStep].component)}
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
            disabled={isSubmitting}
          >
            {isSubmitting ? 'İşleniyor...' : 
             currentStep === steps.length - 1 ? 'Siparişi Tamamla' : 'Devam Et'}
          </Button>
        </div>
      </div>
    </div>
  )
}
