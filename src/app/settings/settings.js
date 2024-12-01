"use client";

import { useState, useEffect } from "react";
import style from "../styles/settings.module.css";

const Settings = ({ settings, setSettings }) => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    // Fetch category data from the API
    fetch("https://opentdb.com/api_category.php")
      .then((response) => response.json())
      .then((data) => setCategories(data.trivia_categories))
      .catch((error) => console.error("Failed to fetch categories:", error));
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setSettings((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div className={style.container}>
      <h3>Settings</h3>

      <label>
        Number of Questions:
        <input
          type="number"
          name="numQuestions"
          value={settings.numQuestions}
          onChange={handleChange}
        />
      </label>

      <label>
        Category:
        <select
          name="category"
          value={settings.category}
          onChange={handleChange}
        >
          <option value="">Select a category</option>
          {categories.map((category) => (
            <option key={category.id} value={category.id}>
              {category.name}
            </option>
          ))}
        </select>
      </label>

      <label>
        Difficulty:
        <select
          name="difficulty"
          value={settings.difficulty}
          onChange={handleChange}
        >
          <option value="easy">Easy</option>
          <option value="medium">Medium</option>
          <option value="hard">Hard</option>
        </select>
      </label>
    </div>
  );
};

export default Settings;
