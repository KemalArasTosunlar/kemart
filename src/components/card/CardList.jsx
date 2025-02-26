import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { deleteCard, setSelectedCard } from '../../store/actions/cardActions'

import { Card, CardContent, CardHeader, CardTitle } from '../ui/card'
import { Button } from '../ui/button'
import { RadioGroup, RadioGroupItem } from '../ui/radio-group'
import { Label } from '../ui/label'
import { Edit2, Trash2, CreditCard } from 'lucide-react'
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "../ui/alert-dialog"
import { toast } from 'react-hot-toast'
import { CardForm } from './CardForm'
import { LoadingSpinner } from '../ui/loading-spinner'

export function CardList() {
  const dispatch = useDispatch()
  const { cards = [], selectedCard = null, loading = false } = useSelector((state) => state.card || {})
  const [editingCard, setEditingCard] = useState(null)
  const [cardToDelete, setCardToDelete] = useState(null)



  const handleCardSelect = (cardId) => {
    const card = cards.find(c => c.id === cardId)
    dispatch(setSelectedCard(card))
  }

  const handleEditClick = (card) => {
    setEditingCard(card)
  }

  const handleEditSuccess = () => {
    setEditingCard(null)
  }


  const handleDeleteConfirm = async () => {
    if (!cardToDelete) return

    try {
      await dispatch(deleteCard(cardToDelete))
      toast.success('Card deleted successfully')
      
      // If the deleted card was selected, clear selection
      if (selectedCard?.id === cardToDelete) {
        dispatch(setSelectedCard(null))
      }
    } catch (error) {
      toast.error(error.message || 'Failed to delete card')
    } finally {
      setCardToDelete(null)
    }
  }

  const formatCardNumber = (cardNo) => {
    return `**** **** **** ${cardNo.slice(-4)}`
  }

  if (loading) {
    return (
      <div className="flex justify-center items-center p-8">
        <LoadingSpinner />
      </div>
    )
  }

  if (editingCard) {
    return (
      <CardForm
        editCard={editingCard}
        onSuccess={handleEditSuccess}
        onClose={() => setEditingCard(null)}
      />
    )
  }

  if (!cards.length) {
    return (
      <Card>
        <CardContent className="p-6">
          <div className="flex flex-col items-center justify-center text-center space-y-3">
            <CreditCard className="w-12 h-12 text-muted-foreground" />
            <div className="text-lg font-medium">No saved cards</div>
            <p className="text-sm text-muted-foreground">
              Add a new card to save it for future purchases
            </p>
          </div>
        </CardContent>
      </Card>
    )
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Saved Cards</CardTitle>
      </CardHeader>
      <CardContent className="p-6">
        <RadioGroup
          value={selectedCard?.id}
          onValueChange={handleCardSelect}
          className="space-y-4"
        >
          {cards.map((card) => (
            <div
              key={card.id}
              className="flex items-center justify-between space-x-2 p-4 border rounded-lg hover:bg-accent transition-colors"
            >
              <div className="flex items-center space-x-3 flex-1">
                <RadioGroupItem value={card.id} id={`card-${card.id}`} />
                <Label 
                  htmlFor={`card-${card.id}`} 
                  className="flex flex-col cursor-pointer flex-1"
                >
                  <span className="font-medium flex items-center gap-2">
                    <CreditCard className="h-4 w-4" />
                    {formatCardNumber(card.card_no)}
                  </span>
                  <span className="text-sm text-muted-foreground">
                    {card.name_on_card} • Expires {card.expire_month}/{card.expire_year}
                  </span>
                </Label>
              </div>
              <div className="flex items-center gap-2">
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => handleEditClick(card)}
                  className="text-muted-foreground hover:text-foreground"
                >
                  <Edit2 className="h-4 w-4" />
                </Button>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => setCardToDelete(card.id)}
                  className="text-destructive hover:text-destructive/90"
                >
                  <Trash2 className="h-4 w-4" />
                </Button>
              </div>
            </div>
          ))}
        </RadioGroup>

        {/* Delete Confirmation Dialog */}
        <AlertDialog open={!!cardToDelete} onOpenChange={() => setCardToDelete(null)}>
          <AlertDialogContent>
            <AlertDialogHeader>
              <AlertDialogTitle>Delete Card</AlertDialogTitle>
              <AlertDialogDescription>
                Are you sure you want to delete this card? This action cannot be undone.
              </AlertDialogDescription>
            </AlertDialogHeader>
            <AlertDialogFooter>
              <AlertDialogCancel>Cancel</AlertDialogCancel>
              <AlertDialogAction
                onClick={handleDeleteConfirm}
                className="bg-destructive text-destructive-foreground hover:bg-destructive/90"
              >
                Delete
              </AlertDialogAction>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>
      </CardContent>
    </Card>
  )
}
