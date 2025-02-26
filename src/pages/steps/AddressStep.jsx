import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Plus } from 'lucide-react'
import { Button } from '../../components/ui/button'
import { Card, CardContent } from '../../components/ui/card'
import { Checkbox } from '../../components/ui/checkbox'
import { fetchAddresses, setSelectedAddresses } from '../../store/actions/addressActions'
import { AddressForm } from '../../components/address/AddressForm'
import { AddressCard } from '../../components/address/AddressCard'
import { LoadingSpinner } from '../../components/ui/loading-spinner'
import { toast } from 'react-hot-toast'

export function AddressStep() {
  const dispatch = useDispatch()
  const { addresses = [], selectedAddresses = { shipping: null, billing: null, sameAsShipping: true }, loading = false, error = null } = useSelector((state) => state.address || {})
  const [showAddForm, setShowAddForm] = useState(false)
  const [editingAddress, setEditingAddress] = useState(null)
  const [addressesLoaded, setAddressesLoaded] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleLoadAddresses = async () => {
    setIsSubmitting(true)
    try {
      await dispatch(fetchAddresses())
      setAddressesLoaded(true)
      toast.success('Adresler başarıyla yüklendi')
    } catch (error) {
      toast.error('Adresler yüklenirken bir hata oluştu')
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleAddressSelect = (address, type) => {
    if (!address || !address.id) {
      toast.error('Geçersiz adres seçimi');
      return;
    }
    
    const currentSelectedAddresses = selectedAddresses || { shipping: null, billing: null, sameAsShipping: true };
    const newSelectedAddresses = {
      ...currentSelectedAddresses,
      [type]: address
    };

    if (type === 'shipping' && currentSelectedAddresses.sameAsShipping) {
      newSelectedAddresses.billing = address;
    }

    dispatch(setSelectedAddresses(newSelectedAddresses));
    toast.success(`${type === 'shipping' ? 'Teslimat' : 'Fatura'} adresi başarıyla seçildi`);
  }

  const handleSameAsShipping = (checked) => {
    const currentSelectedAddresses = selectedAddresses || { shipping: null, billing: null, sameAsShipping: true };
    dispatch(
      setSelectedAddresses({
        ...currentSelectedAddresses,
        sameAsShipping: checked,
        billing: checked ? currentSelectedAddresses.shipping : null
      })
    )
  }

  const handleAddSuccess = async () => {
    setIsSubmitting(true)
    try {
      setShowAddForm(false)
      // Wait for 1 second to ensure address is processed before fetching
      await new Promise(resolve => setTimeout(resolve, 1000))
      await dispatch(fetchAddresses())
      toast.success('Adres başarıyla eklendi')
      setAddressesLoaded(true)
    } catch (error) {
      toast.error('Adres eklenirken bir hata oluştu')
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleEditSuccess = async () => {
    setIsSubmitting(true)
    try {
      setEditingAddress(null)
      // Wait for 1 second to ensure address is processed before fetching
      await new Promise(resolve => setTimeout(resolve, 1000))
      await dispatch(fetchAddresses())
      toast.success('Adres başarıyla güncellendi')
      setAddressesLoaded(true)
    } catch (error) {
      toast.error('Adres güncellenirken bir hata oluştu')
    } finally {
      setIsSubmitting(false)
    }
  }

  if (loading) {
    return <LoadingSpinner />;
  }

  if (error) {
    return (
      <div className="bg-red-50 p-4 rounded text-red-600">
        {error}
      </div>
    )
  }

  return (
    <div className="space-y-6">
      {/* Shipping Address Section */}
      <div>
        <h2 className="text-xl font-semibold mb-4">Teslimat Adresi</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {addresses?.map((address) => (
            <AddressCard
              key={address.id}
              address={address}
              isSelected={selectedAddresses?.shipping?.id === address.id}
              onSelect={() => handleAddressSelect(address, 'shipping')}
              onEdit={() => setEditingAddress(address)}
            />
          ))}
          <Card
            className={`flex items-center justify-center ${
              isSubmitting ? 'cursor-not-allowed opacity-50' : 'cursor-pointer hover:bg-gray-50'
            }`}
            onClick={!isSubmitting ? () => setShowAddForm(true) : undefined}
          >
            <CardContent className="flex flex-col items-center p-6">
              <Plus className="w-8 h-8 text-gray-400" />
              <span className="mt-2 text-gray-600">Yeni Adres Ekle</span>
            </CardContent>
          </Card>
          {!addressesLoaded && (
            <Button 
              onClick={handleLoadAddresses}
              className="mt-4"
              disabled={isSubmitting}
            >
              {isSubmitting ? 'Yükleniyor...' : 'Adresleri Yükle'}
            </Button>
          )}
        </div>
      </div>

      {/* Billing Address Section */}
      <div>
        <div className="flex items-center space-x-2 mb-4">
          <h2 className="text-xl font-semibold">Fatura Adresi</h2>
          <div className="flex items-center space-x-2 ml-4">
            <Checkbox
              id="same-as-shipping"
              checked={selectedAddresses?.sameAsShipping}
              onCheckedChange={handleSameAsShipping}
            />
            <label
              htmlFor="same-as-shipping"
              className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
              Teslimat adresi ile aynı
            </label>
          </div>
        </div>

        {!selectedAddresses?.sameAsShipping && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {addresses?.map((address) => (
              <AddressCard
                key={address.id}
                address={address}
                isSelected={selectedAddresses?.billing?.id === address.id}
                onSelect={() => handleAddressSelect(address, 'billing')}
                onEdit={() => setEditingAddress(address)}
              />
            ))}
          </div>
        )}
      </div>

      {/* Address Form Dialog */}
      {showAddForm && (
        <AddressForm
          onClose={() => setShowAddForm(false)}
          onSuccess={handleAddSuccess}
        />
      )}

      {/* Edit Address Form Dialog */}
      {editingAddress && (
        <AddressForm
          address={editingAddress}
          onClose={() => setEditingAddress(null)}
          onSuccess={handleEditSuccess}
        />
      )}
    </div>
  )
}
