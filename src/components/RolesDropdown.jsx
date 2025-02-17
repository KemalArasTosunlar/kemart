import { useState, useEffect } from 'react';
import api from '../api/api';

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

    const handleRoleChange = (e) => {
        const newRole = e.target.value;
        setSelectedRole(newRole);
        if (onRoleSelect) {
            onRoleSelect(newRole);
        }
    };

    if (loading) return <div>Loading roles...</div>;
    if (error) return <div className="text-red-500">{error}</div>;

    return (
        <div className="flex flex-col gap-2">
            <label htmlFor="role" className="text-sm font-medium text-gray-700">
                Select Role
            </label>
            <select
                id="role"
                value={selectedRole}
                onChange={handleRoleChange}
                className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
            >
                {roles.map((role) => (
                    <option key={role.id} value={role.name}>
                        {role.name}
                    </option>
                ))}
            </select>
        </div>
    );
};

export default RolesDropdown;
