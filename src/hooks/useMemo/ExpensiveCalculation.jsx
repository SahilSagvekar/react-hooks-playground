import React, { useMemo, useState } from "react";

const users = [
  "Alice", "Bob", "Charlie", "David", "Eva", "Frank", "Grace", "Helen",
  "Ian", "Jane", "Kevin", "Liam", "Monica", "Nina", "Oscar", "Paul",
  "Queen", "Rachel", "Steve", "Tina", "Uma", "Victor", "Wendy", "Xavier",
  "Yara", "Zack"
];

const ExpensiveCalculation = () => {
  const [search, setSearch] = useState("");

  // Filter only runs when `search` changes
  const filteredUsers = useMemo(() => {
    console.log("Filtering users...");
    return users.filter(user =>
      user.toLowerCase().includes(search.toLowerCase())
    );
  }, [search]);

  return (
    <div>
      <h2 className="text-xl font-semibold mb-2">useMemo Example</h2>
      <input
        type="text"
        className="border px-2 py-1 mb-4 w-full"
        placeholder="Search users..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <ul className="list-disc pl-6">
        {filteredUsers.map((user, i) => (
          <li key={i}>{user}</li>
        ))}
      </ul>
    </div>
  );
};

export default ExpensiveCalculation;
