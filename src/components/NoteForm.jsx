import { useState } from 'react';
import TextInput from './inputs/TextInput';
import SelectInput from './inputs/SelectInput';
import TextAreaInput from './inputs/TextAreaInput';

const NoteForm = ({ notes, setNotes }) => {
  const [formData, setFormData] = useState({
    title: '',
    priority: 'Medium',
    category: 'Work',
    description: '',
  });

  const [isFormVisible, setIsFormVisible] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    //Validation
    if (!formData.title || !formData.description) {
      return;
    }

    //Create note object
    const newNote = {
      id: Date.now(),
      ...formData,
    };

    //Add notes to state
    setNotes([newNote, ...notes]);

    //Reset form data
    setFormData({
      title: '',
      priority: 'Medium',
      category: 'Work',
      description: '',
    });
  };
  return (
    <>
      {/* Toggle Button */}
      <button
        onClick={() => setIsFormVisible(!isFormVisible)}
        className='w-full bg-gray-100 border border-gray-300 text-purple-800 py-2 cursor-pointer hover:bg-purple-200 hover:border-purple-300 transition mb-4 rounded-lg'>
        {isFormVisible ? 'Hide Form ✖️' : 'Add New Note ➕'}
      </button>
      {/* Form */}
      {isFormVisible && (
        <form onSubmit={handleSubmit} className='mb-6'>
          <TextInput
            label='Title'
            name='title'
            value={formData.value}
            onChange={handleChange}
            required
          />
          <SelectInput
            label='Priority'
            name='priority'
            value={formData.priority}
            onChange={handleChange}
            options={[
              { label: '🔴 High', value: 'High' },
              { label: '🟠 Medium', value: 'Medium' },
              { label: '🟢 Low', value: 'Low' },
            ]}
          />
          <SelectInput
            label='Category'
            name='category'
            value={formData.category}
            onChange={handleChange}
            options={[
              { label: '💼 Work', value: 'Work' },
              { label: '🏠 Personal', value: 'Personal' },
              { label: '💭 Ideas', value: 'Ideas' },
            ]}
          />
          <TextAreaInput
            label='Description'
            name='description'
            value={formData.description}
            onChange={handleChange}
            required
          />
          <button className='w-full bg-purple-500 text-white py-2 rounded-lg cursor-pointer hover:bg-purple-600'>
            Add Note
          </button>
        </form>
      )}
    </>
  );
};

export default NoteForm;
