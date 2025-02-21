import { useState, useEffect } from 'react';
import api from '@/api/api';
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

const RolesDropdown = ({ onRoleSelect }) => {
    const [roles, setRoles] = useState([]);
    const [selectedRole, setSelectedRole] = useState('Customer');
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchRoles = async () => {
            try {
                const response = await api.get('/api/v1/roles');
                setRoles(response.data);
                setLoading(false);
            } catch (err) {
                setError('Failed to fetch roles');
                setLoading(false);
            }
        };

        fetchRoles();
    }, []);

    const handleRoleChange = (value) => {
        setSelectedRole(value);
        if (onRoleSelect) {
            onRoleSelect(value);
        }
    };

    if (loading) return <div>Loading roles...</div>;
    if (error) return <div className="text-destructive">{error}</div>;

    return (
        <div className="flex flex-col gap-2">
            <Label htmlFor="role">Select Role</Label>
            <Select value={selectedRole} onValueChange={handleRoleChange}>
                <SelectTrigger id="role" className="w-full">
                    <SelectValue placeholder="Select a role" />
                </SelectTrigger>
                <SelectContent>
                    {roles.map((role) => (
                        <SelectItem key={role.id} value={role.name}>
                            {role.name}
                        </SelectItem>
                    ))}
                </SelectContent>
            </Select>
        </div>
    );
};

export default RolesDropdown;
