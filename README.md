# Merge Sorted Arrays

This TypeScript project implements a function to merge three sorted integer arrays into a single ascending sorted array, **without using any built-in sort functions**.

- `collection_1` and `collection_2` are sorted ascending.
- `collection_3` is sorted descending.
- The function merges these collections into one ascending sorted array.
  
## Project Structure

├── src/
│ └── utils
│       └── merge.ts # Implementation of merge function
│ └── index.ts
├── test/
│ └── merge.test.ts # Unit tests
├── .gitignore
├── package.json # Project dependencies and scripts
├── tsconfig.json # TypeScript config
├── jest.config.js # Jest config for ts-jest
└── README.md # This file

## Setup

```bash
git clone https://github.com/Au3Hatsawat/primo-pre-test-merge-function.git
cd merge-sorted-arrays
npm install
```

## Build

```bash
npx tsc
```

## Test

```bash
npm test
```

## Usage

```bash
const c1 = [1, 4, 6];
const c2 = [2, 5, 7];
const c3 = [9, 8, 3]; // descending order

const merged = merge(c1, c2, c3);
console.log(merged); // [1,2,3,4,5,6,7,8,9]
```

