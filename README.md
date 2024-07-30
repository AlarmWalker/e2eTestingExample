# E2E Testing with WebdriverIO

This repository contains end-to-end (E2E) tests for my portfolio website and future tests for an e-commerce site. The tests are written using WebdriverIO and Jasmine framework to ensure that the web applications work as expected.

<video width="600" controls>
  <source src="./assets/demo.mp4" type="video/mp4">
  Your browser does not support the video tag.
</video>

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Tests](#tests)

## Installation

1. **Clone the repository:**

   ```bash
   git clone https://github.com/yourusername/e2e-testing.git
   cd e2e-testing
   ```

2. **Install the dependencies:**

   Make sure you have Node.js and npm installed. Then run:

   ```bash
   npm install
   ```

## Usage

### Running Tests

To run all tests:

```bash
npx wdio run
```

To run a specific test file:

```bash
npm run wdio:<name of the script>
```

For example:

```bash
npm run wdio:portfolio
```

## Tests

### Portfolio Wesbsite Tests

This section includes tests for verifying the functionality of the portfolio website. The tests cover:

- Navigation menu items
- External links opening in new tabs
- Page content verification

### E-commerce Site Tests (Coming Soon)

Future tests will include comprehensive test cases for an e-commerce site, covering functionalities like:

- User registration and login
- Product search and filtering
- Shopping cart and checkout process
- Payment gateway integration
- Order history and tracking
