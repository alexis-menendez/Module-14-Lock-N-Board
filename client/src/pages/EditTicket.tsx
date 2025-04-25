import { useState, useEffect, FormEvent, ChangeEvent } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

import { retrieveTicket, updateTicket } from '../api/ticketAPI';
import { retrieveUsers } from '../api/userAPI';
import { TicketData } from '../interfaces/TicketData';
import { UserData } from '../interfaces/UserData';

const EditTicket = () => {
  const [ticket, setTicket] = useState<TicketData | undefined>();
  const [users, setUsers] = useState<UserData[]>([]);

  const navigate = useNavigate();
  const { state } = useLocation();

  const fetchTicket = async (ticketId: TicketData) => {
    try {
      const data = await retrieveTicket(ticketId.id);
      setTicket(data);
    } catch (err) {
      console.error('Failed to retrieve ticket:', err);
    }
  };

  const fetchUsers = async () => {
    try {
      const data = await retrieveUsers();
      setUsers(data);
    } catch (err) {
      console.error('Failed to retrieve users:', err);
    }
  };

  useEffect(() => {
    fetchTicket(state);
    fetchUsers();
  }, []);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (ticket && ticket.id !== null) {
      updateTicket(ticket.id, ticket);
      navigate('/');
    } else {
      console.error('Ticket data is undefined.');
    }
  };

  const handleTextAreaChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setTicket((prev) => ({ ...prev!, [name]: value }));
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setTicket((prev) => ({ ...prev!, [name]: value }));
  };

  const handleUserChange = (e: ChangeEvent<HTMLSelectElement>) => {
    const { name, value } = e.target;
    setTicket((prev) => ({
      ...prev!,
      [name]: value === '' ? null : parseInt(value),
    }));
  };

  return (
    <div className="container">
      {ticket ? (
        <form className="form" onSubmit={handleSubmit}>
          <h1>Edit Ticket</h1>

          <label htmlFor="tName">Ticket Name</label>
          <textarea
            id="tName"
            name="name"
            value={ticket.name || ''}
            onChange={handleTextAreaChange}
          />

          <label htmlFor="tStatus">Ticket Status</label>
          <select
            name="status"
            id="tStatus"
            value={ticket.status || ''}
            onChange={handleChange}
            className={ticket.status === '' ? 'placeholder-option' : ''}
          >
            <option value="">Select</option>
            <option value="Todo">Todo</option>
            <option value="In Progress">In Progress</option>
            <option value="Done">Done</option>
          </select>

          <label htmlFor="tDescription">Ticket Description</label>
          <textarea
            id="tDescription"
            name="description"
            value={ticket.description || ''}
            onChange={handleTextAreaChange}
            onInput={(e) => {
              const target = e.currentTarget;
              target.style.height = 'auto';
              target.style.height = `${target.scrollHeight}px`;
            }}
            style={{ overflow: 'hidden', resize: 'none' }}
          />

          <label htmlFor="tUserId">User's ID</label>
          <select
            name="assignedUserId"
            id="tUserId"
            value={ticket.assignedUserId?.toString() || ''}
            onChange={handleUserChange}
            className={ticket.assignedUserId === null ? 'placeholder-option' : ''}
          >
            <option value="">Select</option>
            {users.map((user) => (
              <option key={user.id} value={String(user.id)}>
                {user.username}
              </option>
            ))}
          </select>

          <div style={{ marginTop: '1.5rem' }}>
            <button type="button" onClick={() => navigate('/')} style={{ marginRight: '1rem' }}>
              Back to Board
            </button>
            <button type="submit">Submit Form</button>
          </div>
        </form>
      ) : (
        <div>Issues fetching ticket</div>
      )}
    </div>
  );
};

export default EditTicket;
