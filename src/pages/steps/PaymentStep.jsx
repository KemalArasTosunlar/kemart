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

export function PaymentStep() {
  return (
    <div className="space-y-4">
     <CardForm />
      <CardList />
      
    </div>
  );
}
export default PaymentStep
