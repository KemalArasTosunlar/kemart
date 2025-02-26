import React from 'react'
import { useDispatch } from 'react-redux'
import { addCard, updateCard } from '../../store/actions/cardActions'
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card'
import { Label } from '../ui/label'
import { Input } from '../ui/input'
import { Button } from '../ui/button'
import { toast } from 'react-hot-toast'

export function CardForm({ onSuccess, editCard, onClose }) {
  const dispatch = useDispatch()
  const [formData, setFormData] = React.useState({
    card_no: editCard?.card_no || '',
    expire_month: editCard?.expire_month || '',
    expire_year: editCard?.expire_year || '',
    name_on_card: editCard?.name_on_card || ''
  })
  const [errors, setErrors] = React.useState({})
  const [isSubmitting, setIsSubmitting] = React.useState(false)

  // Format card number with spaces
  const formatCardNumber = (value) => {
    const numbers = value.replace(/\D/g, '')
    const groups = numbers.match(/.{1,4}/g) || []
    return groups.join(' ').substr(0, 19) // 16 digits + 3 spaces
  }

  const validateForm = () => {
    const newErrors = {}
    
    // Card number validation
    if (!formData.card_no.replace(/\s/g, '').match(/^\d{16}$/)) {
      newErrors.card_no = 'Please enter a valid 16-digit card number'
    }

    // Name validation
    if (!formData.name_on_card.trim()) {
      newErrors.name_on_card = 'Name is required'
    } else if (formData.name_on_card.trim().length < 3) {
      newErrors.name_on_card = 'Name must be at least 3 characters'
    }

    // Month validation
    const month = parseInt(formData.expire_month)
    if (!month || month < 1 || month > 12) {
      newErrors.expire_month = 'Enter a valid month (1-12)'
    }

    // Year validation
    const currentYear = new Date().getFullYear()
    const year = parseInt(formData.expire_year)
    if (!year || year < currentYear || year > currentYear + 20) {
      newErrors.expire_year = `Enter a valid year (${currentYear}-${currentYear + 20})`
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    
    if (name === 'card_no') {
      setFormData(prev => ({
        ...prev,
        [name]: formatCardNumber(value)
      }))
    } else if (name === 'name_on_card') {
      setFormData(prev => ({
        ...prev,
        [name]: value.toUpperCase()
      }))
    } else {
      setFormData(prev => ({
        ...prev,
        [name]: value
      }))
    }

    // Clear error when user types
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }))
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    
    if (!validateForm()) {
      return
    }

    setIsSubmitting(true)
    try {
      const cardData = {
        ...formData,
        card_no: formData.card_no.replace(/\s/g, ''),
        expire_month: parseInt(formData.expire_month),
        expire_year: parseInt(formData.expire_year)
      }

      if (editCard?.id) {
        cardData.id = editCard.id
        await dispatch(updateCard(cardData))
        toast.success('Card updated successfully')
      } else {
        await dispatch(addCard(cardData))
        toast.success('Card added successfully')
      }

      onSuccess?.()
      
      // Reset form if not editing
      if (!editCard) {
        setFormData({
          card_no: '',
          expire_month: '',
          expire_year: '',
          name_on_card: ''
        })
      }
    } catch (error) {
      toast.error(error.message || 'Failed to save card')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>{editCard ? 'Edit Card' : 'Add New Card'}</CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="card_no">Card Number</Label>
            <Input
              id="card_no"
              name="card_no"
              placeholder="1234 5678 9012 3456"
              value={formData.card_no}
              onChange={handleChange}
              maxLength={19} // 16 digits + 3 spaces
              required
              className="font-mono"
              error={errors.card_no}
            />
            {errors.card_no && (
              <p className="text-sm text-destructive">{errors.card_no}</p>
            )}
          </div>

          <div className="space-y-2">
            <Label htmlFor="name_on_card">Name on Card</Label>
            <Input
              id="name_on_card"
              name="name_on_card"
              placeholder="JOHN DOE"
              value={formData.name_on_card}
              onChange={handleChange}
              required
              className="uppercase"
              error={errors.name_on_card}
            />
            {errors.name_on_card && (
              <p className="text-sm text-destructive">{errors.name_on_card}</p>
            )}
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="expire_month">Expiry Month</Label>
              <Input
                id="expire_month"
                name="expire_month"
                placeholder="MM"
                value={formData.expire_month}
                onChange={handleChange}
                maxLength={2}
                required
                type="number"
                min="1"
                max="12"
                error={errors.expire_month}
              />
              {errors.expire_month && (
                <p className="text-sm text-destructive">{errors.expire_month}</p>
              )}
            </div>
            <div className="space-y-2">
              <Label htmlFor="expire_year">Expiry Year</Label>
              <Input
                id="expire_year"
                name="expire_year"
                placeholder="YYYY"
                value={formData.expire_year}
                onChange={handleChange}
                maxLength={4}
                required
                type="number"
                min={new Date().getFullYear()}
                max={new Date().getFullYear() + 20}
                error={errors.expire_year}
              />
              {errors.expire_year && (
                <p className="text-sm text-destructive">{errors.expire_year}</p>
              )}
            </div>
          </div>

          <div className="flex gap-2 justify-end mt-6">
            {onClose && (
              <Button
                type="button"
                variant="outline"
                onClick={onClose}
                disabled={isSubmitting}
              >
                Cancel
              </Button>
            )}
            <Button
              type="submit"
              disabled={isSubmitting}
              className="bg-primary hover:bg-primary/90"
            >
              {isSubmitting ? 'Saving...' : editCard ? 'Update Card' : 'Save Card'}
            </Button>
          </div>
        </form>
      </CardContent>
    </Card>
  )
}
