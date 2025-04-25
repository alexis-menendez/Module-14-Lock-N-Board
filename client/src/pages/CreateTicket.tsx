import { useState, useEffect, FormEvent, ChangeEvent } from 'react';
import { useNavigate } from 'react-router-dom';
import { createTicket } from '../api/ticketAPI';
import { TicketData } from '../interfaces/TicketData';
import { UserData } from '../interfaces/UserData';
import { retrieveUsers } from '../api/userAPI';

const CreateTicket = () => {
  const [newTicket, setNewTicket] = useState<TicketData>({
    id: 0,
    name: '',
    description: '',
    status: '',
    assignedUserId: null,
    assignedUser: null
  });

  const navigate = useNavigate();

  const [users, setUsers] = useState<UserData[]>([]);

  const getAllUsers = async () => {
    try {
      const data = await retrieveUsers();
      setUsers(data);
    } catch (err) {
      console.error('Failed to retrieve user info', err);
    }
  };

  useEffect(() => {
    getAllUsers();
  }, []);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    if (
      !newTicket.name ||
      !newTicket.description ||
      !newTicket.status ||
      !newTicket.assignedUserId
    ) {
      alert('Please complete all fields before submitting.');
      return;
    }

    const data = await createTicket(newTicket);
    console.log(data);
    navigate('/');
  };

  const handleTextAreaChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setNewTicket((prev) => ({ ...prev, [name]: value }));
  };
  
  const handleTextChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setNewTicket((prev) => ({ ...prev, [name]: value }));
  };
  
  const handleUserChange = (e: ChangeEvent<HTMLSelectElement>) => {
    const { name, value } = e.target;
    setNewTicket((prev) => ({ ...prev, [name]: value === '' ? null : parseInt(value) }));
  };

  return (
    <div className='container'>
      <form className='form' onSubmit={handleSubmit}>
        <h1>Create Ticket</h1>

        <label htmlFor='tName'>Ticket Name</label>
        <textarea
          id='tName'
          name='name'
          value={newTicket?.name || ''}
          onChange={handleTextAreaChange}
        />

        <label htmlFor='tStatus'>Ticket Status</label>
        <select
          name='status'
          id='tStatus'
          value={newTicket?.status || ''}
          onChange={handleTextChange}
          className={newTicket.status === '' ? 'placeholder-option' : ''}
        >
          <option value=''>Select</option>
          <option value='Todo'>Todo</option>
          <option value='In Progress'>In Progress</option>
          <option value='Done'>Done</option>
        </select>

        <label htmlFor='tDescription'>Ticket Description</label>
        <textarea
          id='tDescription'
          name='description'
          value={newTicket?.description || ''}
          onChange={handleTextAreaChange}
        />

        <label htmlFor='tUserId'>User's ID</label>
        <select
          name='assignedUserId'
          id='tUserId'
          value={newTicket?.assignedUserId?.toString() || ''}
          onChange={handleUserChange}
          className={newTicket.assignedUserId === null ? 'placeholder-option' : ''}
        >
          <option value=''>Select</option>
          {users.map((user) => (
            <option key={user.id} value={String(user.id)}>
              {user.username}
            </option>
          ))}
        </select>

        <button type='submit'>Submit Form</button>
        <button type="button" onClick={() => navigate('/')}>
          Back to Board
        </button>
      </form>
    </div>
  );
};

export default CreateTicket;
