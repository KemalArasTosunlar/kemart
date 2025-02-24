import React from 'react'
import { Edit2, Trash2 } from 'lucide-react'
import { useDispatch } from 'react-redux'
import { Card, CardContent } from '../ui/card'
import { Button } from '../ui/button'
import { deleteExistingAddress } from '../../store/actions/addressActions'

export function AddressCard({ address, selected, onSelect, onEdit }) {
  const dispatch = useDispatch()

  const handleDelete = async () => {
    if (window.confirm('Bu adresi silmek istediğinizden emin misiniz?')) {
      try {
        await dispatch(deleteExistingAddress(address.id))
      } catch (error) {
        console.error('Failed to delete address:', error)
      }
    }
  }

  return (
    <Card
      className={`cursor-pointer transition-all ${
        selected ? 'ring-2 ring-[#23A6F0]' : 'hover:border-[#23A6F0]'
      }`}
      onClick={onSelect}
    >
      <CardContent className="p-4">
        <div className="flex justify-between items-start mb-2">
          <h3 className="font-medium">{address.title}</h3>
          <div className="flex gap-2">
            <Button
              variant="ghost"
              size="icon"
              className="h-8 w-8 text-[#23A6F0]"
              onClick={(e) => {
                e.stopPropagation()
                onEdit()
              }}
            >
              <Edit2 className="h-4 w-4" />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="h-8 w-8 text-red-500"
              onClick={(e) => {
                e.stopPropagation()
                handleDelete()
              }}
            >
              <Trash2 className="h-4 w-4" />
            </Button>
          </div>
        </div>
        <div className="text-sm space-y-1">
          <p>{`${address.name} ${address.surname}`}</p>
          <p>{address.phone}</p>
          <p>{`${address.neighborhood} ${address.district}/${address.city}`}</p>
        </div>
      </CardContent>
    </Card>
  )
}
