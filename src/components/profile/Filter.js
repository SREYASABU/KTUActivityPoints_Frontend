import React, { useState } from 'react';

const studentsData = [
  { rollNo: 1, name: 'John Doe', className: 'CS6A', activityType: 'Internship', activityPoints: 80 },
  { rollNo: 2, name: 'Jane Smith', className: 'CS6A', activityType: 'Workshop', activityPoints: 10 },
  { rollNo: 3, name: 'Mike Johnson', className: 'CS6A', activityType: 'Webinar', activityPoints: 60 },
  { rollNo: 4, name: 'John Doe', className: 'CS6A', activityType: 'Internship', activityPoints: 50 },
  { rollNo: 5, name: 'Jane Smith', className: 'CS6A', activityType: 'Workshop', activityPoints: 50 },
  { rollNo: 6, name: 'Mike Johnson', className: 'CS6A', activityType: 'Webinar', activityPoints: 60 },
  { rollNo: 7, name: 'John Doe', className: 'CS6A', activityType: 'Internship', activityPoints: 100 },
  { rollNo: 8, name: 'Jane Smith', className: 'CS6A', activityType: 'Workshop', activityPoints: 80 },
  { rollNo: 9, name: 'Mike Johnson', className: 'CS6A', activityType: 'Webinar', activityPoints: 80 },
  { rollNo: 10, name: 'John Doe', className: 'CS6A', activityType: 'Internship', activityPoints: 70 },
  { rollNo: 11, name: 'Jane Smith', className: 'CS6A', activityType: 'Workshop', activityPoints: 60 },
  { rollNo: 12, name: 'Mike Johnson', className: 'CS6A', activityType: 'Webinar', activityPoints: 80 },
  { rollNo: 13, name: 'John Doe', className: 'CS6A', activityType: 'Internship', activityPoints: 100 },
  { rollNo: 14, name: 'Jane Smith', className: 'CS6A', activityType: 'Workshop', activityPoints: 100 },
  { rollNo: 15, name: 'Mike Johnson', className: 'CS6A', activityType: 'Webinar', activityPoints: 50 },
];

const Filter = () => {
  const [filterType, setFilterType] = useState('');
  const [filterPoints, setFilterPoints] = useState('');
  const [filteredStudents, setFilteredStudents] = useState([]);

  const handleFilter = () => {
    let filtered = studentsData;

    if (filterType) {
      filtered = filtered.filter(
        (student) => student.activityType.toLowerCase() === filterType.toLowerCase()
      );
    }

    if (filterPoints) {
      filtered = filtered.filter(
        (student) => student.activityPoints >= filterPoints
      );
    }

    setFilteredStudents(filtered);
  };

  return (
    <div className="p-4">
      <div className="flex items-center mb-4">
        <input
          className="px-3 py-2 border border-gray-300 rounded mr-2 text-sm"
          type="text"
          placeholder="Filter by activity type"
          value={filterType}
          onChange={(e) => setFilterType(e.target.value)}
        />

        <input
          className="px-3 py-2 border border-gray-300 rounded mr-2 text-sm"
          type="number"
          placeholder="Filter by activity points"
          value={filterPoints}
          onChange={(e) => setFilterPoints(e.target.value)}
        />

        <button
          className="bg-[#fd2d34] hover:bg-[#e7272e] text-white px-4 py-2 rounded text-sm"
          onClick={handleFilter}
        >
          Filter
        </button>
      </div>

      <div>
        {filteredStudents.length > 0 ? (
          <table className="min-w-full bg-white border border-gray-300">
            <thead className='bg-slate-100'>
              <tr>
                <th className="px-4 py-2">Roll No</th>
                <th className="px-4 py-2">Name</th>
                <th className="px-4 py-2">Class</th>
                <th className="px-4 py-2">Activity Type</th>
                <th className="px-4 py-2">Activity Points</th>
              </tr>
            </thead>
            <tbody>
              {filteredStudents.map((student) => (
                <tr key={student.rollNo}>
                  <td className="border px-4 py-2">{student.rollNo}</td>
                  <td className="border px-4 py-2">{student.name}</td>
                  <td className="border px-4 py-2">{student.className}</td>
                  <td className="border px-4 py-2">{student.activityType}</td>
                  <td className="border px-4 py-2">{student.activityPoints}</td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <p>No students found.</p>
        )}
      </div>
    </div>
  );
};

export default Filter;
