import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Card, CardContent, CardHeader, CardTitle } from '../../components/ui/card'
import { Label } from '../../components/ui/label'
import { RadioGroup, RadioGroupItem } from '../../components/ui/radio-group'
import { Button } from '../../components/ui/button'
import { Plus, CreditCard, Building2, AlertCircle } from 'lucide-react'
import { CardForm } from '../../components/card/CardForm'
import { CardList } from '../../components/card/CardList'
import { LoadingSpinner } from '../../components/ui/loading-spinner'
import { fetchCards } from '../../store/actions/cardActions'
import { toast } from 'react-hot-toast'
import { Alert, AlertDescription } from '../../components/ui/alert'

const PAYMENT_METHODS = {
  CREDIT_CARD: 'credit-card',
  BANK_TRANSFER: 'bank-transfer'
}

const BANK_DETAILS = [
  {
    bank: 'Example Bank',
    iban: 'TR00 0000 0000 0000 0000 0000 00',
    accountHolder: 'Company Name',
    branch: 'Main Branch'
  }
]

export function PaymentStep() {
  const dispatch = useDispatch()
  const { cards, selectedCard, loading, error } = useSelector((state) => state.card)
  const [paymentMethod, setPaymentMethod] = useState(PAYMENT_METHODS.CREDIT_CARD)
  const [showAddCard, setShowAddCard] = useState(false)
  const [cardsLoaded, setCardsLoaded] = useState(false)

  const handleLoadCards = async () => {
    try {
      await dispatch(fetchCards())
      setCardsLoaded(true)
      toast.success('Cards loaded successfully')
    } catch (error) {
      toast.error('Failed to load cards')
    }
  }


  const handleAddCardSuccess = () => {
    setShowAddCard(false)
    dispatch(fetchCards())
    toast.success('Card added successfully')
  }

  const renderError = () => (
    <Alert variant="destructive" className="mb-6">
      <AlertCircle className="h-4 w-4" />
      <AlertDescription>{error}</AlertDescription>
    </Alert>
  )

  const renderPaymentMethodSelection = () => (
    <RadioGroup
      value={paymentMethod}
      onValueChange={setPaymentMethod}
      className="space-y-4"
    >
      <div className="flex items-center space-x-3 p-4 border rounded-lg hover:bg-accent transition-colors">
        <RadioGroupItem value={PAYMENT_METHODS.CREDIT_CARD} id="credit-card" />
        <Label htmlFor="credit-card" className="flex items-center gap-2 cursor-pointer">
          <CreditCard className="h-4 w-4" />
          Credit/Debit Card
        </Label>
      </div>
      <div className="flex items-center space-x-3 p-4 border rounded-lg hover:bg-accent transition-colors">
        <RadioGroupItem value={PAYMENT_METHODS.BANK_TRANSFER} id="bank-transfer" />
        <Label htmlFor="bank-transfer" className="flex items-center gap-2 cursor-pointer">
          <Building2 className="h-4 w-4" />
          Bank Transfer
        </Label>
      </div>
    </RadioGroup>
  )

  const renderCreditCardSection = () => (
    <div className="mt-6 space-y-4">
      <div className="flex flex-col gap-2">
        {!cardsLoaded && (
          <Button
            type="button"
            variant="outline"
            className="w-full"
            onClick={handleLoadCards}
          >
            <CreditCard className="mr-2 h-4 w-4" />
            Load Saved Cards
          </Button>
        )}
        <Button
          type="button"
          variant="outline"
          className="w-full"
          onClick={() => setShowAddCard(true)}
        >
          <Plus className="mr-2 h-4 w-4" />
          Add New Card
        </Button>
      </div>



      {showAddCard && (
        <div className="space-y-4">
          <CardForm 
            onClose={() => setShowAddCard(false)}
            onSuccess={handleAddCardSuccess}
          />
        </div>
      )}
      {cardsLoaded && !showAddCard && <CardList />}

    </div>
  )

  const renderBankTransferSection = () => (
    <div className="mt-6 space-y-4">
      {BANK_DETAILS.map((bank, index) => (
        <Card key={index}>
          <CardContent className="p-4">
            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <Building2 className="h-5 w-5 text-muted-foreground" />
                <h3 className="font-medium">{bank.bank}</h3>
              </div>
              <div className="space-y-2 text-sm">
                <div className="grid grid-cols-3 gap-2">
                  <span className="text-muted-foreground">IBAN:</span>
                  <span className="col-span-2 font-mono">{bank.iban}</span>
                </div>
                <div className="grid grid-cols-3 gap-2">
                  <span className="text-muted-foreground">Account Holder:</span>
                  <span className="col-span-2">{bank.accountHolder}</span>
                </div>
                <div className="grid grid-cols-3 gap-2">
                  <span className="text-muted-foreground">Branch:</span>
                  <span className="col-span-2">{bank.branch}</span>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      ))}
      <Alert>
        <AlertDescription>
          Please include your order number in the transfer description for faster processing.
        </AlertDescription>
      </Alert>
    </div>
  )

  if (loading) {
    return (
      <div className="flex justify-center items-center p-8">
        <LoadingSpinner />
      </div>
    )
  }

  return (
    <div className="space-y-6">
      {error && renderError()}
      
      <Card>
        <CardHeader>
          <CardTitle>Payment Method</CardTitle>
        </CardHeader>
        <CardContent className="p-6">
          {renderPaymentMethodSelection()}

          {paymentMethod === PAYMENT_METHODS.CREDIT_CARD && renderCreditCardSection()}
          {paymentMethod === PAYMENT_METHODS.BANK_TRANSFER && renderBankTransferSection()}
        </CardContent>
      </Card>
    </div>
  )
}

export default PaymentStep
