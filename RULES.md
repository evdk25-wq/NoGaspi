# NoGaspi - Project Architecture & Engineering Guidelines

## 1. Core Imperatives
- **Framework & SDK**: Expo Go with **Expo SDK 54**.
- **Backend Target**: **FastAPI** (Python REST API).
- **UI Aesthetic**: Premium, modern, sophisticated. **STRICTLY ZERO EMOJIS** across code, UI, assets, and comments. Use vector icons (`@expo/vector-icons` / Lucide / Feather / Ionicons).
- **Code Commentary**: **ZERO AI COMMENTS**. No redundant descriptions, no boilerplate explanations, no trivial inline comments. Clean, self-documenting code only.

## 2. Architectural Guidelines (Clean Architecture & SOLID)
The codebase strictly follows Clean Architecture and SOLID design principles:

### Layer Separation (`src/`)
- `src/domain/`:
  - **Entities**: Business models and domain logic.
  - **Repositories (Interfaces)**: Contracts defining data operations.
  - **UseCases**: Application business rules and interactors.
- `src/data/`:
  - **Repositories (Implementations)**: Concrete implementations of domain repository interfaces.
  - **Sources**: Local storage adapters and FastAPI HTTP client API instances.
  - **Mappers & DTOs**: Data transfer objects and schema translation to domain entities.
- `src/presentation/`:
  - **Screens**: View containers handling UI structure and user interaction.
  - **Components**: Reusable, atomic UI components (Buttons, Inputs, Cards, Badges).
  - **Theme**: Design tokens (Colors, Typography, Spacing, Shadows, Radius).
  - **Hooks & State**: View Models / Custom Hooks consuming UseCases.
- `src/core/`:
  - Configuration, Environment, Network Interceptors, Error Handling, Utilities.

### SOLID Principles Compliance
- **Single Responsibility (SRP)**: Each component, hook, use case, and repository performs exactly one responsibility.
- **Open/Closed (OCP)**: UI components and service contracts are extensible through props and interfaces without modifying underlying code.
- **Liskov Substitution (LSP)**: Interface contracts ensure interchangeable repository implementations (e.g. Mock/Local vs FastAPI Remote).
- **Interface Segregation (ISP)**: Focused, minimal interfaces for repositories and hooks.
- **Dependency Inversion (DIP)**: High-level presentation components depend on abstract UseCases/Repository interfaces, not concrete data fetchers.

## 3. Code Quality & React Native Standards
- Full TypeScript strict mode compliance (`strict: true`).
- Adherence to official React Native and Expo performance best practices (FlatList optimization, memoization where appropriate, style separation).
- Consistent styling via centralized design tokens and `StyleSheet.create`.
