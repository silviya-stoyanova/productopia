# ProductOpia

This is a React and TypeScript based product management application that includes features for displaying products, filtering them by categories, and handling product details. It also simulates loading times for testing purposes.

## Getting Started

1. Clone the Repository: Start by cloning the repository and navigating to the project directory.
2. Install Dependencies: Run `npm install` to install all necessary dependencies.
3. Run the Application: Run `npm start` to view the application in your browser.

## Technical Stack

- **React**: JavaScript library for building user interfaces
- **TypeScript**: Superset of JavaScript with added typing
- **SCSS**: CSS preprocessor with superpowers
- **Font Awesome**: Awesome UI icons
- **Fetch API**: For making HTTP requests

## App description

### Categories

The application includes products in the following categories:

- **Software**: Software-related products with specific features
- **Mobile Devices**: Products related to mobile technology
- **Fashion**: Clothes and accessories

### Fetching Products

The application retrieves product data from a JSON file. The `fetchProducts` function handles fetching and processing this data, ensuring it is correctly formatted and mapped. Any errors during the fetch process are also handled.

### User Interaction

#### Product Cards

- **Initial Display**: Initially, the application displays 6 product cards on the screen.
- **Card Click**: Clicking on a card, opens a dialog with detailed information about the selected product. This dialog provides additional insights into the product's features, image, and description.

#### Show More Button

- **Show More**: Clicking the "Show More" button reveals 6 additional product cards. This button dynamically loads more items as the user interacts with it.

#### Loading Skeletons

To enhance the user experience while the data is being fetched, on the screen are rendered loading indicators.

- **Card Skeletons**: Animated placeholders rendered while the product cards are loading. They mimic the structure of the cards, but with a skeleton layout.
- **Filter Skeletons**: Rendered until product details are fetched in order to prevent user interaction with the filters.
- **Show More Button Skeleton**: Appears until the product details are fully loaded. Its purpose is to prevent loading more cards on the screen during loading time.

#### Filters Component

The `Filters` component allows users to filter the products by categories. It supports:

- **Multiple Selections**: Users can select and apply multiple filters simultaneously
- **Filter Removal**: Clicking on an applied filter removes it and updates the displayed products accordingly
