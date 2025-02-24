import React from 'react'
import { useForm } from 'react-hook-form'
import { useDispatch } from 'react-redux'
import { X } from 'lucide-react'
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from '../ui/dialog'
import { Input } from '../ui/input'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '../ui/select'
import { Button } from '../ui/button'
import { Textarea } from '../ui/textarea'
import { addNewAddress, updateExistingAddress } from '../../store/actions/addressActions'

const turkishCities = [
  'Adana', 'Ankara', 'İstanbul', 'İzmir', 'Bursa', 'Antalya'
  // Add more cities as needed
]

export function AddressForm({ address, onClose }) {
  const dispatch = useDispatch()
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm({
    defaultValues: address || {
      title: '',
      name: '',
      surname: '',
      phone: '',
      city: '',
      district: '',
      neighborhood: ''
    }
  })

  const onSubmit = async (data) => {
    try {
      if (address) {
        await dispatch(updateExistingAddress({ ...data, id: address.id }))
      } else {
        await dispatch(addNewAddress(data))
      }
      onClose()
    } catch (error) {
      console.error('Failed to save address:', error)
    }
  }

  return (
    <Dialog open={true} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[500px]">
        <DialogHeader>
          <DialogTitle>
            {address ? 'Adresi Düzenle' : 'Yeni Adres Ekle'}
          </DialogTitle>
          <Button
            variant="ghost"
            size="icon"
            className="absolute right-4 top-4"
            onClick={onClose}
          >
            <X className="h-4 w-4" />
          </Button>
        </DialogHeader>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <div>
            <Input
              placeholder="Adres Başlığı"
              {...register('title', { required: 'Adres başlığı gerekli' })}
            />
            {errors.title && (
              <span className="text-red-500 text-sm">{errors.title.message}</span>
            )}
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <Input
                placeholder="Ad"
                {...register('name', { required: 'Ad gerekli' })}
              />
              {errors.name && (
                <span className="text-red-500 text-sm">{errors.name.message}</span>
              )}
            </div>
            <div>
              <Input
                placeholder="Soyad"
                {...register('surname', { required: 'Soyad gerekli' })}
              />
              {errors.surname && (
                <span className="text-red-500 text-sm">
                  {errors.surname.message}
                </span>
              )}
            </div>
          </div>

          <div>
            <Input
              placeholder="Telefon"
              {...register('phone', {
                required: 'Telefon gerekli',
                pattern: {
                  value: /^[0-9]{10,11}$/,
                  message: 'Geçerli bir telefon numarası girin'
                }
              })}
            />
            {errors.phone && (
              <span className="text-red-500 text-sm">{errors.phone.message}</span>
            )}
          </div>

          <Select
            onValueChange={(value) => setValue('city', value)}
            defaultValue={address?.city}
          >
            <SelectTrigger>
              <SelectValue placeholder="Şehir Seçin" />
            </SelectTrigger>
            <SelectContent>
              {turkishCities.map((city) => (
                <SelectItem key={city} value={city.toLowerCase()}>
                  {city}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>

          <div>
            <Input
              placeholder="İlçe"
              {...register('district', { required: 'İlçe gerekli' })}
            />
            {errors.district && (
              <span className="text-red-500 text-sm">
                {errors.district.message}
              </span>
            )}
          </div>

          <div>
            <Textarea
              placeholder="Mahalle, Sokak, Bina ve Daire bilgilerini girin"
              {...register('neighborhood', { required: 'Adres detayı gerekli' })}
            />
            {errors.neighborhood && (
              <span className="text-red-500 text-sm">
                {errors.neighborhood.message}
              </span>
            )}
          </div>

          <div className="flex justify-end gap-4">
            <Button variant="outline" type="button" onClick={onClose}>
              İptal
            </Button>
            <Button type="submit" className="bg-[#23A6F0] hover:bg-[#1a85c1]">
              Kaydet
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  )
}
