import React, { useState } from 'react';

const AddStudents = () => {
  const [students, setStudents] = useState([]);
  const [rollNo, setRollNo] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [registrationNumber, setRegistrationNumber] = useState('');

  const handleAddStudent = () => {
    const newStudent = {
      rollNo,
      name,
      email,
      registrationNumber,
    };

    setStudents([...students, newStudent]);
    setRollNo('');
    setName('');
    setEmail('');
    setRegistrationNumber('');
  };

  return (
    <div className="p-4">
      <div className="mb-4">
        <input
          className="px-3 py-2 border border-gray-300 rounded mr-2 text-sm"
          type="text"
          placeholder="Roll No"
          value={rollNo}
          onChange={(e) => setRollNo(e.target.value)}
        />

        <input
          className="px-3 py-2 border border-gray-300 rounded mr-2 text-sm"
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <input
          className="px-3 py-2 border border-gray-300 rounded mr-2 text-sm"
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          className="px-3 py-2 border border-gray-300 rounded mr-2 text-sm"
          type="text"
          placeholder="Registration Number"
          value={registrationNumber}
          onChange={(e) => setRegistrationNumber(e.target.value)}
        />

        <button
          className="bg-[#fd2d34] hover:bg-[#e42a30] text-white px-4 py-2 rounded text-sm"
          onClick={handleAddStudent}
        >
          Add
        </button>
      </div>

      {students.length > 0 ? (
        <table className="min-w-full bg-white border border-gray-300">
          <thead className='bg-slate-100'>
            <tr>
              <th className="px-4 py-2">Roll No</th>
              <th className="px-4 py-2">Name</th>
              <th className="px-4 py-2">Email</th>
              <th className="px-4 py-2">Registration Number</th>
            </tr>
          </thead>
          <tbody>
            {students.map((student, index) => (
              <tr key={index}>
                <td className="border px-4 py-2">{student.rollNo}</td>
                <td className="border px-4 py-2">{student.name}</td>
                <td className="border px-4 py-2">{student.email}</td>
                <td className="border px-4 py-2">{student.registrationNumber}</td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p>No students added.</p>
      )}
    </div>
  );
};

export default AddStudents;
