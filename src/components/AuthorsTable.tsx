import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Pencil, Trash2, Plus } from 'lucide-react';
import { Author } from '../types/Author';

const AuthorsTable = () => {
  const [authors, setAuthors] = useState<Author[]>([]);
  const [editingAuthor, setEditingAuthor] = useState<Author | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    fetchAuthors();
  }, []);

  const fetchAuthors = async () => {
    try {
      const response = await axios.get('https://jsonplaceholder.typicode.com/users');
      const mappedAuthors = response.data.map((user: any) => ({
        id: user.id,
        name: user.name,
        email: user.email,
        role: ['Admin', 'Author', 'Editor'][Math.floor(Math.random() * 3)],
        status: Math.random() > 0.5 ? 'online' : 'offline',
        created: new Date(Date.now() - Math.random() * 10000000000).toLocaleDateString(),
      }));
      setAuthors(mappedAuthors);
    } catch (error) {
      console.error('Error fetching authors:', error);
    }
  };

  const handleEdit = (author: Author) => {
    setEditingAuthor(author);
    setIsModalOpen(true);
  };

  const handleDelete = async (id: number) => {
    try {
      await axios.delete(`https://jsonplaceholder.typicode.com/users/${id}`);
      setAuthors(authors.filter(author => author.id !== id));
    } catch (error) {
      console.error('Error deleting author:', error);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!editingAuthor) return;

    try {
      if (editingAuthor.id) {
        await axios.put(`https://jsonplaceholder.typicode.com/users/${editingAuthor.id}`, editingAuthor);
        setAuthors(authors.map(author => 
          author.id === editingAuthor.id ? editingAuthor : author
        ));
      } else {
        const response = await axios.post('https://jsonplaceholder.typicode.com/users', editingAuthor);
        setAuthors([...authors, { ...editingAuthor, id: response.data.id }]);
      }
      setIsModalOpen(false);
      setEditingAuthor(null);
    } catch (error) {
      console.error('Error saving author:', error);
    }
  };

  return (
    <div className="rounded-xl bg-white p-6 shadow-lg">
      <div className="mb-6 flex items-center justify-between">
        <h2 className="text-xl font-bold text-gray-800">Authors Table</h2>
        <button
          onClick={() => {
            setEditingAuthor({
              id: 0,
              name: '',
              email: '',
              role: 'Author',
              status: 'offline',
              created: new Date().toLocaleDateString(),
            });
            setIsModalOpen(true);
          }}
          className="flex items-center rounded-lg bg-blue-600 px-4 py-2 text-white hover:bg-blue-700"
        >
          <Plus className="mr-2 h-4 w-4" />
          Add Author
        </button>
      </div>

      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200">
          <thead>
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500">
                Author
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500">
                Role
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500">
                Status
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500">
                Created
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500">
                Actions
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200 bg-white">
            {authors.map((author) => (
              <tr key={author.id}>
                <td className="whitespace-nowrap px-6 py-4">
                  <div className="flex items-center">
                    <img
                      className="h-10 w-10 rounded-full"
                      src={`https://ui-avatars.com/api/?name=${encodeURIComponent(
                        author.name
                      )}&background=random`}
                      alt=""
                    />
                    <div className="ml-4">
                      <div className="font-medium text-gray-900">{author.name}</div>
                      <div className="text-gray-500">{author.email}</div>
                    </div>
                  </div>
                </td>
                <td className="whitespace-nowrap px-6 py-4 text-sm text-gray-500">
                  {author.role}
                </td>
                <td className="whitespace-nowrap px-6 py-4">
                  <span
                    className={`inline-flex rounded-full px-2 text-xs font-semibold leading-5 ${
                      author.status === 'online'
                        ? 'bg-green-100 text-green-800'
                        : 'bg-red-100 text-red-800'
                    }`}
                  >
                    {author.status}
                  </span>
                </td>
                <td className="whitespace-nowrap px-6 py-4 text-sm text-gray-500">
                  {author.created}
                </td>
                <td className="whitespace-nowrap px-6 py-4 text-sm font-medium">
                  <button
                    onClick={() => handleEdit(author)}
                    className="mr-2 text-blue-600 hover:text-blue-900"
                  >
                    <Pencil className="h-5 w-5" />
                  </button>
                  <button
                    onClick={() => handleDelete(author.id)}
                    className="text-red-600 hover:text-red-900"
                  >
                    <Trash2 className="h-5 w-5" />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <div className="w-full max-w-md rounded-lg bg-white p-6">
            <h3 className="mb-4 text-lg font-bold">
              {editingAuthor?.id ? 'Edit Author' : 'Add Author'}
            </h3>
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label className="mb-2 block text-sm font-medium">Name</label>
                <input
                  type="text"
                  value={editingAuthor?.name || ''}
                  onChange={(e) =>
                    setEditingAuthor({
                      ...editingAuthor!,
                      name: e.target.value,
                    })
                  }
                  className="w-full rounded-lg border p-2"
                  required
                />
              </div>
              <div className="mb-4">
                <label className="mb-2 block text-sm font-medium">Email</label>
                <input
                  type="email"
                  value={editingAuthor?.email || ''}
                  onChange={(e) =>
                    setEditingAuthor({
                      ...editingAuthor!,
                      email: e.target.value,
                    })
                  }
                  className="w-full rounded-lg border p-2"
                  required
                />
              </div>
              <div className="mb-4">
                <label className="mb-2 block text-sm font-medium">Role</label>
                <select
                  value={editingAuthor?.role || 'Author'}
                  onChange={(e) =>
                    setEditingAuthor({
                      ...editingAuthor!,
                      role: e.target.value,
                    })
                  }
                  className="w-full rounded-lg border p-2"
                >
                  <option>Admin</option>
                  <option>Author</option>
                  <option>Editor</option>
                </select>
              </div>
              <div className="flex justify-end gap-2">
                <button
                  type="button"
                  onClick={() => {
                    setIsModalOpen(false);
                    setEditingAuthor(null);
                  }}
                  className="rounded-lg border px-4 py-2 hover:bg-gray-50"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="rounded-lg bg-blue-600 px-4 py-2 text-white hover:bg-blue-700"
                >
                  Save
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default AuthorsTable;