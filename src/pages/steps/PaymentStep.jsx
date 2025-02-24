import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { Card, CardContent } from '../../components/ui/card'
import { Label } from '../../components/ui/label'
import { RadioGroup, RadioGroupItem } from '../../components/ui/radio-group'
import { Input } from '../../components/ui/input'
import { Button } from '../../components/ui/button'

export function PaymentStep() {
  const [paymentMethod, setPaymentMethod] = useState('credit-card')
  const [cardInfo, setCardInfo] = useState({
    number: '',
    name: '',
    expiry: '',
    cvv: ''
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    // Payment processing will be implemented later
    console.log('Processing payment:', { paymentMethod, cardInfo })
  }

  return (
    <div className="space-y-6">
      <Card>
        <CardContent className="p-6">
          <RadioGroup
            defaultValue={paymentMethod}
            onValueChange={setPaymentMethod}
            className="space-y-4"
          >
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="credit-card" id="credit-card" />
              <Label htmlFor="credit-card">Kredi/Banka Kartı</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="bank-transfer" id="bank-transfer" />
              <Label htmlFor="bank-transfer">Banka Havalesi</Label>
            </div>
          </RadioGroup>

          {paymentMethod === 'credit-card' && (
            <form onSubmit={handleSubmit} className="mt-6 space-y-4">
              <div>
                <Label htmlFor="card-number">Kart Numarası</Label>
                <Input
                  id="card-number"
                  placeholder="1234 5678 9012 3456"
                  value={cardInfo.number}
                  onChange={(e) =>
                    setCardInfo({ ...cardInfo, number: e.target.value })
                  }
                  maxLength={19}
                />
              </div>

              <div>
                <Label htmlFor="card-name">Kart Üzerindeki İsim</Label>
                <Input
                  id="card-name"
                  placeholder="Ad Soyad"
                  value={cardInfo.name}
                  onChange={(e) =>
                    setCardInfo({ ...cardInfo, name: e.target.value })
                  }
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="expiry">Son Kullanma Tarihi</Label>
                  <Input
                    id="expiry"
                    placeholder="MM/YY"
                    value={cardInfo.expiry}
                    onChange={(e) =>
                      setCardInfo({ ...cardInfo, expiry: e.target.value })
                    }
                    maxLength={5}
                  />
                </div>
                <div>
                  <Label htmlFor="cvv">CVV</Label>
                  <Input
                    id="cvv"
                    placeholder="123"
                    value={cardInfo.cvv}
                    onChange={(e) =>
                      setCardInfo({ ...cardInfo, cvv: e.target.value })
                    }
                    maxLength={3}
                    type="password"
                  />
                </div>
              </div>

              <Button
                type="submit"
                className="w-full bg-[#23A6F0] hover:bg-[#1a85c1]"
              >
                Ödemeyi Tamamla
              </Button>
            </form>
          )}

          {paymentMethod === 'bank-transfer' && (
            <div className="mt-6 space-y-4">
              <div className="bg-gray-50 p-4 rounded">
                <h3 className="font-medium mb-2">Banka Bilgileri</h3>
                <div className="space-y-2 text-sm">
                  <p>Banka: Example Bank</p>
                  <p>IBAN: TR00 0000 0000 0000 0000 0000 00</p>
                  <p>Hesap Sahibi: Company Name</p>
                </div>
              </div>
              <Button
                type="button"
                className="w-full bg-[#23A6F0] hover:bg-[#1a85c1]"
                onClick={() => {
                  // Handle bank transfer confirmation
                  console.log('Bank transfer selected')
                }}
              >
                Ödemeyi Onayla
              </Button>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  )
}
