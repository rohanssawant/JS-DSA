# Objects

```javascript
let person = {
  name: "rohan",
  place: "mumbai",
  favNum: [2, 18, 12],
};
```

- order doesnt matter
- quick insertion/access and deletion

#### BigO of built-in methods

- insertion: O(1), removal: O(1), access: O(1), searching: O(n)
- `Object.key()` O(n)
- `Object.value()` O(n)
- `Object.entires()` O(n)
- `Object.hasOwnProperty()` O(1)

# Arrays

```javascript
let person = ["rohan", "mumbai", 1801];
```

- order matters

#### BigO of built-in methods

- insertion:
  - `push(), pop()` O(1)
  - `shift(), unshift()` O(n)
  - `splice(), slice()` O(n)
  - `concat(), forEach(), map() etc` O(n)
  - `sort()` O(n\*log n)
- searching: O(n)
