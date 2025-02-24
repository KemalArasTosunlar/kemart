import React from 'react'
import { Plus } from 'lucide-react'
import { Button } from './ui/button'
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from './ui/card'

export default function OrderSummary({ cart }) {
  const calculateSubtotal = () => {
    return cart
      .filter(item => item.checked)
      .reduce((total, item) => total + (item.product.price * item.count), 0)
  }

  const shippingCost = 29.99
  const freeShippingThreshold = 150
  const subtotal = calculateSubtotal()
  const isEligibleForFreeShipping = subtotal >= freeShippingThreshold
  const finalShippingCost = isEligibleForFreeShipping ? 0 : shippingCost
  const total = subtotal + (isEligibleForFreeShipping ? 0 : shippingCost)

  return (
    <Card className="w-[300px]">
      <CardHeader>
        <CardTitle>Sipariş Özeti</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="flex justify-between">
          <span>Ürünün Toplamı</span>
          <span className="font-medium">{subtotal.toFixed(2)} TL</span>
        </div>
        <div className="flex justify-between">
          <span>Kargo Toplam</span>
          <span className="font-medium">{shippingCost.toFixed(2)} TL</span>
        </div>
        {isEligibleForFreeShipping && (
          <div className="flex justify-between text-[#23A6F0]">
            <span>{freeShippingThreshold} TL ve Üzeri Kargo Bedava (Satıcı Karşılar)</span>
            <span>-{shippingCost.toFixed(2)} TL</span>
          </div>
        )}
        <div className="pt-4 border-t">
          <div className="flex justify-between">
            <span className="font-medium">Toplam</span>
            <span className="font-medium text-[#23A6F0]">{total.toFixed(2)} TL</span>
          </div>
        </div>
        <Button
          variant="outline"
          className="w-full flex items-center gap-2 mt-4"
          onClick={() => {}}
        >
          <Plus className="h-4 w-4" /> İNDİRİM KODU GİR
        </Button>
      </CardContent>
      <CardFooter>
        <Button className="w-full bg-[#23A6F0] hover:bg-[#1a85c1]">
          Sepeti Onayla
        </Button>
      </CardFooter>
    </Card>
  )
}
