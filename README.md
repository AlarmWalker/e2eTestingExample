# E2E Testing with WebdriverIO

This repository contains end-to-end (E2E) tests for my portfolio website and future tests for an e-commerce site. The tests are written using WebdriverIO and Jasmine framework to ensure that the web applications work as expected.

https://github.com/user-attachments/assets/32785def-99ba-43e8-b9b3-8c3d0f4dbab8

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Tests](#tests)

## Installation

1. **Clone the repository:**

   ```bash
   git clone https://github.com/AlarmWalker/e2eTestingExample.git
   cd e2eTestingExample
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
npm wdio run
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
