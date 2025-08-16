# React Component Development Assignment

A small component library built for the assignment: two reusable React components documented with Storybook.

**Components**
- `InputField` — Flexible input component with label, helper text, error states, variants, sizes, clear button and password toggle.
- `DataTable` — Generic data table with sorting, row selection (single/multiple), loading and empty states.

---

## Live Storybook Preview
https://68a0261790b8cbd5d9a7d63a-srgwajpyjh.chromatic.com/

---

## Tech Stack
- React + TypeScript
- Tailwind CSS
- Storybook (React / Vite builder)
- Vite (development)
- Chromatic (Storybook deploy)

---

## Folder Structure
``` bash
├── 📂 .storybook/ # Storybook configuration
│   ├── main.ts
│   ├── preview.ts
│   └── tsconfig.json
│
├── 📂 src/
│   ├── 📂 components/
│   │   ├── 📂 InputField/
│   │   │   ├── InputField.tsx
│   │   │   ├── InputField.types.ts
│   │   │   ├── InputField.stories.tsx
│   │   │   └── index.ts
│   │   │
│   │   ├── 📂 DataTable/
│   │   │   ├── DataTable.tsx
│   │   │   ├── DataTable.types.ts
│   │   │   ├── DataTable.stories.tsx
│   │   │   └── index.ts
│   │
│   ├── App.tsx
│   ├── main.tsx
│   └── index.css
│
├── 📂 public/ # Static assets
│   └── favicon.ico
│
├── 📂 build-storybook/ # Auto-generated after build
│
├── .gitignore
├── package.json
├── tsconfig.json
├── tailwind.config.js
├── postcss.config.js
├── vite.config.ts
└── README.md
```
## 🚀 Getting Started (Local)

Follow these steps to run the project locally:

### 1. Clone the repository
```bash
git clone https://github.com/your-username/your-repo.git
cd your-repo
```
### 2. Install dependencies
``` bash
npm install
# or
yarn install
```

### 3. Run Storybook
``` bash
npm run storybook
```

### 4. Run the development server
``` bash
npm run dev
```

### 4. 5. Build Storybook (optional)
``` bash
npm run build-storybook
```

## Notes on Dummy Data

All Storybook stories use mock/dummy data to demonstrate component behavior (loading, empty state, sorting, selection). The assignment requires demonstrating component functionality and reusability; real API integration is not required.