# LeetCode Solutions

Personal solutions to [LeetCode](https://leetcode.com/) problems, organized by problem and track. Solutions are written in Python, TypeScript, and JavaScript.

## Structure

```
leetcode/
├── TwoSum/                    # LeetCode #1
├── PalindromeNumber/          # LeetCode #9
├── top_interview_150/         # Top Interview 150 track
└── 30_days_of_javascript/     # 30 Days of JavaScript track
```

## Problems

| Problem | Track | Language | File |
|---------|-------|----------|------|
| [Two Sum](https://leetcode.com/problems/two-sum/) | — | Python | [TwoSum.py](TwoSum/TwoSum.py) |
| [Two Sum](https://leetcode.com/problems/two-sum/) | — | TypeScript | [TwoSum.ts](TwoSum/TwoSum.ts) |
| [Palindrome Number](https://leetcode.com/problems/palindrome-number/) | — | Python | [PalindromeNumber.py](PalindromeNumber/PalindromeNumber.py) |
| [Merge Sorted Array](https://leetcode.com/problems/merge-sorted-array/) | Top Interview 150 | JavaScript | [1_merge_sorted_array.js](top_interview_150/1_merge_sorted_array.js) |
| [Counter](https://leetcode.com/problems/counter/) | 30 Days of JavaScript | JavaScript | [2_counter.js](30_days_of_javascript/2_counter.js) |

## Approaches

### Two Sum
- **Python** — Hash map lookup for O(n) time and O(n) space.
- **TypeScript** — Brute-force nested loop.

### Palindrome Number
Three Python implementations:
1. **String reversal** — Convert to string and compare with its reverse.
2. **Integer reversal** — Reverse digits mathematically without string conversion.
3. **Two-pointer** — Compare digits from both ends using division/modulo.

### Merge Sorted Array
Two JavaScript implementations:
1. **Append and sort** — Merge arrays then sort in place.
2. **Two pointers** — Fill from the end in O(m + n) time without extra space.

### Counter
JavaScript closure that returns a function incrementing an internal counter on each call.

## Running locally

Most solutions follow LeetCode's `Solution` class format and can be pasted directly into the LeetCode editor. JavaScript files in `top_interview_150/` and `30_days_of_javascript/` can be run with Node.js:

```bash
node top_interview_150/1_merge_sorted_array.js
node 30_days_of_javascript/2_counter.js
```

## License

This repository is for personal practice and learning.
